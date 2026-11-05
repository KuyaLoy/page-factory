"""Word-level caption timing for Page Factory episodes.

Usage (from the studio root):
    python tools/captions.py pages/<slug>/episodes/EP001-<slug>
Reads  <episode>/vo/vo-norm.wav (falls back to vo/vo.wav)
Writes <episode>/edit/captions.json  [{"w": word, "s": start_sec, "e": end_sec}, ...]
       <episode>/edit/captions.srt   (2-4 word chunks, for CapCut or YouTube)
Needs: pip install faster-whisper
"""
import json
import sys
from pathlib import Path


def chunk(words, max_words=3, max_gap=0.35):
    """Group words into short caption chunks, breaking on pauses and punctuation."""
    out, cur = [], []
    for i, w in enumerate(words):
        cur.append(w)
        nxt = words[i + 1] if i + 1 < len(words) else None
        ends_sentence = w["w"].endswith((".", "!", "?", ","))
        long_gap = nxt is not None and nxt["s"] - w["e"] > max_gap
        if len(cur) >= max_words or ends_sentence or long_gap or nxt is None:
            out.append({"text": " ".join(x["w"] for x in cur), "s": cur[0]["s"], "e": cur[-1]["e"]})
            cur = []
    return out


def srt_time(t):
    ms = int(round(t * 1000))
    h, ms = divmod(ms, 3_600_000)
    m, ms = divmod(ms, 60_000)
    s, ms = divmod(ms, 1000)
    return f"{h:02}:{m:02}:{s:02},{ms:03}"


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    ep = Path(sys.argv[1])
    vo = ep / "vo" / "vo-norm.wav"
    if not vo.exists():
        vo = ep / "vo" / "vo.wav"
    if not vo.exists():
        sys.exit(f"No narration found in {ep / 'vo'}")

    from faster_whisper import WhisperModel  # imported late so --help works without it

    model = WhisperModel("small.en", device="cpu", compute_type="int8")
    segments, _ = model.transcribe(str(vo), word_timestamps=True)
    words = [
        {"w": w.word.strip(), "s": round(w.start, 3), "e": round(w.end, 3)}
        for seg in segments
        for w in (seg.words or [])
        if w.word.strip()
    ]

    edit = ep / "edit"
    edit.mkdir(parents=True, exist_ok=True)
    (edit / "captions.json").write_text(json.dumps(words, indent=1), encoding="utf-8")

    lines = []
    for n, c in enumerate(chunk(words), start=1):
        lines += [str(n), f"{srt_time(c['s'])} --> {srt_time(c['e'])}", c["text"], ""]
    (edit / "captions.srt").write_text("\n".join(lines), encoding="utf-8")
    print(f"{len(words)} words -> {edit / 'captions.json'} and captions.srt")


if __name__ == "__main__":
    main()

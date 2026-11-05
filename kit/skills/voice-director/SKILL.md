---
name: voice-director
description: Prepare and process the narration for a Page Factory episode with the voice chosen in studio.md (own recorded voice, free Chatterbox clone, free Kokoro preset, or a paid voice the user already has), then normalize loudness. Use after the script is final.
---

# Voice director

## Prepare the text
- Final narration only, one line per caption beat.
- Pacing: commas for short pauses, a full stop for a beat, "..." for a dramatic pause.
- Tricky names: give the TTS a phonetic spelling, keep the real spelling for captions.
- Target 150-165 words a minute (about 2.5 a second). 30 s is about 75-80 words, 60 s about 150,
  90 s about 225-240.

## Voice routes (read studio.md)
1. Own recorded voice (free, most original): record in a quiet small room, phone or USB mic 15-20 cm
   away, WAV. Clean up in Audacity (free, open-source) if needed. Save vo/vo.wav.
2. Chatterbox (MIT, free, local): clones the user's voice from a short reference clip. Follow the
   README at github.com/resemble-ai/chatterbox. Slow without an NVIDIA GPU.
3. Kokoro (Apache-2.0, free, local): fast preset voices, runs on a normal CPU. Not the user's voice.
4. Paid voice the user already has (Higgsfield, ElevenLabs ...): the user generates the WAV and saves
   it as vo/vo.wav. Check the plan's terms allow monetized use.
Never use models with non-commercial licenses for monetized videos (for example F5-TTS pre-trained
models, Higgs Audio v3 weights).

## Process (tested ffmpeg command)
    ffmpeg -i vo/vo.wav -af loudnorm=I=-14:TP=-1.5:LRA=11 -ar 48000 vo/vo-norm.wav
Optional: cut dead air with auto-editor (pip install auto-editor, public domain).

## AI disclosure
YouTube lists "cloning one's own voice to create voice overs or dubs" as not needing AI disclosure
(YouTube Help 14328491, checked 2026-11-05). A preset AI voice that isn't the user's own isn't covered
there: disclose to be safe. Meta asks for its AI label on realistic AI audio.

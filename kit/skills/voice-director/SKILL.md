---
name: voice-director
description: Prepare and process the narration for a Page Factory episode: TTS-ready text for Loy's Higgsfield voice clone or local Chatterbox, pronunciation fixes, loudness normalization. Use after the script is final.
---

# Voice director

## Prepare the text
- Final narration only, one line per caption beat.
- Pacing: commas for short pauses, a full stop for a beat, "..." for a dramatic pause.
- Spell tricky names phonetically in brackets for the TTS, and keep the real spelling for captions.
- Target 150-165 words per minute. 45-60 s = about 120-150 words.

## Engines
1. Higgsfield (default): Loy pastes the text into Higgsfield text to speech with his own cloned voice
   and exports WAV. Save as vo/vo.wav. Higgsfield uses ElevenLabs as its default cloning engine.
   Loy confirms Higgsfield's terms allow monetized use on his plan.
2. Chatterbox (free, local, MIT): zero-shot voice cloning from a short reference clip of Loy's voice.
   Follow the README in github.com/resemble-ai/chatterbox. Slow without a GPU.
Do not use models with non-commercial licenses for monetized videos (for example F5-TTS
pre-trained models, Higgs Audio v3 weights).

## Process (tested ffmpeg commands)
Normalize to about -14 LUFS:
    ffmpeg -i vo/vo.wav -af loudnorm=I=-14:TP=-1.5:LRA=11 -ar 48000 vo/vo-norm.wav
Optional: cut dead air with auto-editor (pip install auto-editor).

## Disclosure
YouTube lists "cloning one's own voice to create voice overs or dubs" as assistance that does not
need AI disclosure (YouTube Help 14328491, checked 2026-11-05). A preset AI voice that is not Loy's:
disclose to be safe.

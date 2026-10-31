---
title: Multi-Modal Social Robot
summary: A NAO robot that reads emotion from voice, words and face, tested with people in text-only and multimodal conversations.
order: 9
tags: [Robotics, Emotion recognition, HRI]
papers:
  - label: Paper
    href: /SIR_Report.pdf
# poster: /...
# code: https://github.com/...
---

People show emotion in what they say, how they say it and how they look while saying it. We built a NAO robot that pays attention to all three and adapts its own voice in response, then tested whether the extra channels actually made it more empathetic.

## Three channels, one reply

Each turn of conversation runs through a pipeline. Google Speech-to-Text transcribes what was said. RoBERTa reads the emotion in the words, SpeechBrain in the tone of voice, and LLaMA 3.2 Vision in facial expression and body language from a webcam. Instead of hand-tuning how much each signal counts, LLaMA 3.1 70B weighs them, settles on a final emotion and writes a reply with it in mind. OpenVoice speaks that reply in a matching tone, from cheerful to terrified. The robot's eyes glow green while it listens and red while it thinks.

I worked on the voice. After testing CoquiTTS and OpenVoice, I wrote the text-to-speech scripts for the final system and integrated them into one module. Later I recruited participants and wrote the discussion and conclusion of the report.

## When more senses don't add up

Participants looked at images chosen to evoke excitement or disgust, then talked to the robot: half to a text-only version, half to the full multimodal one.

The text-only robot named the participant's exact emotion more often, accounting for 8 of the 12 correct predictions. The multimodal robot was better at the broad mood. Across both versions, 18 of 20 predictions landed in the right category of positive, neutral or negative, and the multimodal robot never missed one. Participants still rated the text-only robot as more empathetic.

Many errors came from channels contradicting each other, like a cheerful voice paired with an anxious face, which the fusion step couldn't resolve. People found it hard too: two human coders watching the same interactions agreed only moderately, and almost not at all on fear. Adding channels only helps once the system can settle what to do when they disagree.

*With Diana Cernetchi, Anesa Ibrahimi, Michael Moor, My Vu, Hao Yu Wang and Raj Kasimahanti Raj Gopal.*

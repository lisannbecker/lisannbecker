---
title: InstanceDiffusion, Fully Customised
summary: GPT-4 plans the layout, InstanceDiffusion draws it. Automating instance-level control in text-to-image generation, judged by people and a VLM.
order: 6
tags: [Diffusion, LLMs, VLMs]
cover: ../../assets/projects/instancediffusion/cover.png
coverAlt: "A layout of numbered boxes next to the image InstanceDiffusion generated from it: four coloured teddy bears in front of a pink castle (Wang et al., 2024)"
featured: false
# papers:
#   - label: Paper
#     href: /...
poster: /DL2%20Poster.pdf
# code: https://github.com/...
---

InstanceDiffusion gives text-to-image models fine-grained control. Instead of describing a whole scene in one prompt, you specify each object separately, with its own description and a location given as a bounding box, mask, point or scribble. The catch is that someone has to write all of that by hand.

## Letting an LLM plan the layout

We first reproduced InstanceDiffusion's results on 500 images, a tenth of the evaluation set, since every image is expensive to generate. We then built GPT-4 into its UniFusion block, the part that feeds instance-level conditions into the model. From an ordinary prompt, GPT-4 writes the per-object descriptions and bounding boxes itself, taking on the multiple objects and spatial relationships that make complex prompts hard to follow.

## Checking the pictures

Generated images are hard to score automatically, so we evaluated them in two ways. Human raters judged how realistic each image looked. CogVLM, a vision-language model, checked whether the image actually showed what its description asked for, which let us compare where objects ended up with the boxes GPT-4 had planned.

*With Anesa Ibrahimi, Jelle van der Lee, Richter van Emmerik and Amalia Stuger.*

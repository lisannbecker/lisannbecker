---
title: Mechanism Preservation Across Model Compression
summary: A compressed model can match the original's answers without working the same way inside. Tracing which mechanisms survive distillation and fine-tuning.
order: 2
tags: [Interpretability, Model compression]
cover: ../../assets/projects/mechanism-preservation/cover.png
coverAlt: "Histogram of crosscoder features for GPT-2 and its distilled student: first, middle and final layers, from student-only through shared to teacher-only"
featured: true
papers:
  - label: Paper
    href: /What%20Mechanisms%20Does%20Knowledge%20Distillation%20Distill.pdf
poster: /6.0%20A0.pdf
# code: https://github.com/...
---

Compression is how large models become practical: fine-tune a base model for a task, distil a big teacher into a small student, or ship a smaller sibling. Benchmarks show whether the compressed model gives the same answers. They don't show whether it reaches them the same way, which matters if the original was studied or audited and those findings are supposed to carry over.

## A shared dictionary for two models

We compared models from the inside using crosscoders. A crosscoder is a sparse autoencoder trained on the activations of two models at once. It learns a single set of features that has to reconstruct both, so each feature can be checked for whether it is shared or belongs to only one of them.

We looked at three kinds of transformation, each at the first, middle and final layer:

- **Fine-tuning:** Gemma-2-2B against its instruction-tuned version
- **Distillation:** GPT-2 against its distilled student
- **Scale:** Pythia-160M against Pythia-70M

Each pair got two scores: how well the shared features reconstruct both models, and how closely the two feature spaces align (CCA).

## What survives compression

Fine-tuning leaves the first layers almost untouched (CCA 0.999) and changes later layers more, consistent with early layers extracting general features and later ones specialising for the task.

Distillation follows a different shape. Similarity dips in the middle layer and partly recovers at the end (0.94, 0.60, 0.72). In that middle layer the student reconstructs the teacher's features well but organises them differently: similar outputs, reshuffled internals.

The two Pythia sizes scored low throughout (around 0.3), as expected for genuinely different models. That served as a check that the method tells different models apart.

If a compressed model is meant to inherit what is known about the original, distillation's middle layers are where that assumption is weakest.

*With Krijn Dignum, Morris de Haan, Gjalt Hoekstra and Aaron Kuin, supervised by Leonard Bereska.*

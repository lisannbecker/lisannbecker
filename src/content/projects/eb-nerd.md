---
title: EB-NeRD Challenge
summary: Do LLMs make news recommendations better? Reproducing ONCE on EB-NeRD, with LLaMA encoding articles and GPT-3.5 enriching them.
order: 8
tags: [Recommender systems, LLMs]
cover: ../../assets/projects/eb-nerd/cover.png
coverAlt: "Diagram of the ONCE framework (Liu et al., 2024): GPT-3.5 prompting enriches the data, a fine-tuned LLaMA replaces the content encoder of the recommender"
papers:
  - label: Paper
    href: /ONCE_Paper.pdf
poster: /RecSysPoster.pdf
# code: https://github.com/...
---

A content-based news recommender is only as good as its understanding of the articles. ONCE (Liu et al., 2024) proposed bringing in LLMs on two fronts. Open-source models like LLaMA replace the content encoder and are fine-tuned to produce richer article embeddings. Closed-source models like GPT-3.5 enrich the data itself, rewriting titles to be more informative and inferring users' interests from their reading history.

We reproduced ONCE on EB-NeRD, the dataset from Danish newspaper Ekstra Bladet: 2.7 million users, over 600 million impressions and more than 120,000 articles.

## Fitting it in

The original experiments had twice the memory we did. LLaMA-13B didn't fit, so we used LLaMA-7B, fine-tuning only its top layers with LoRA. Getting the pipeline to read EB-NeRD meant reworking how the data is tokenised, including a multilingual tokeniser for the Danish text.

Of the three recommendation models we tested, NRMS, NAML and Fastformer, Fastformer performed best with LLaMA as its encoder. The full ONCE setup, adding GPT-3.5's enriched data on top, did not improve on the encoder alone. The most likely cause is that the generated data wasn't properly integrated into training, an issue other researchers have reported and one we couldn't resolve with the original author in the time we had.

## Sentiment as a signal

Every EB-NeRD article carries a sentiment label, which ONCE doesn't use. Adding it as a feature improved NAML and NRMS on every metric, by up to about 1%, while Fastformer got slightly worse. Small gains, but they support the idea behind ONCE that richer article information helps, and show that how much it helps depends on the model.

*With Anesa Ibrahimi and Richter van Emmerik.*

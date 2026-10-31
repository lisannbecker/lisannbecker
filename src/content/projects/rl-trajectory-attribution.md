---
title: Explainability in Reinforcement Learning
summary: Can an RL agent's decision be explained by the experience that shaped it? Reproducing trajectory attribution, and finding its clusters less meaningful than claimed.
order: 5
tags: [Reinforcement learning, Explainability]
papers:
  - label: Paper
    href: /fact_checkers.pdf
# poster: /...
code: https://github.com/lisannbecker/RL_Trajectories-extension
---

Offline reinforcement learning agents learn entirely from logged experience, which suggests a natural kind of explanation: point to the experience that caused a decision. Deshmukh et al. (2023) proposed doing exactly that. Embed every training trajectory with a sequence model, cluster the embeddings, then retrain the agent with each cluster left out. If removing a cluster changes what the agent does in a given state, that cluster is the explanation.

We set out to reproduce the method in GridWorld, using the authors' code, and in the Atari game Seaquest, where we rebuilt the embedding and clustering ourselves.

## The numbers hold up, the meaning doesn't

The technical pipeline reproduced. Our retrained GridWorld agents matched the original paper's best result on four of five metrics.

The human side did not. Asked to pick the best explanation for an agent's action, participants chose one from the responsible cluster 59.9% of the time, against 70% in the original study. Their preference came from explanations that matched the state and action, not from the cluster itself.

In Seaquest, we asked people to label trajectories by what was happening in them. They labelled individual trajectories consistently, but gave trajectories from the same cluster very different labels. The groups they formed themselves were scattered across five to eight of the original clusters. The clusters existed in embedding space; they just didn't mean anything to people.

Part of the reason showed up in GridWorld: the embeddings mostly encoded how long a trajectory was, rather than its direction, its reward or whether it reached the goal. Training the encoder for longer, or on more trajectories, spread that information more evenly.

## How small can an explanation be?

The original method explains a decision with a whole cluster of around 50 trajectories. We added recursive clustering: once a responsible cluster is found, cluster it again and repeat. On a larger 9×9 GridWorld this usually narrowed the explanation to between 2 and 10 trajectories. An agent's behaviour in a state can hinge on a handful of experiences, which makes for a far more readable explanation.

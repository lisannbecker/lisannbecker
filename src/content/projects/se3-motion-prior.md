---
title: Diffusion-Based SE(3) Motion Prior
summary: A plug-and-play diffusion model that learns how agents move and pulls drifting pose estimates back on track, cutting simulated error by 40%.
order: 1
year: 2025
tags: [MSc thesis, Diffusion, Robotics]
cover: ../../assets/projects/se3-motion-prior/cover.png
coverAlt: "Predicted robot trajectory: past poses in white, a yellow density cloud of sampled futures, and the SLAM and corrected SLAM paths"
featured: true
papers:
  - label: Thesis
    href: /thesis_ai.pdf
# poster: /...
# code: https://github.com/...
---

SLAM systems work out where a camera is from what it sees. Each estimate carries a small error, and over a long trajectory those errors stack up into drift. Between frames, most pipelines still assume the camera keeps moving at constant velocity, which is a weak guess for anything that turns, stops or hesitates.

## A prior for how things move

My thesis asks whether a model that has learned how a particular kind of agent tends to move, a car on a road or a person carrying a camera, can pull pose estimates back toward plausible motion without changing the SLAM pipeline itself.

The backbone is a diffusion model adapted from pedestrian trajectory prediction (LED and MID), which had only worked on flat 2D paths. I extended it to full SE(3) poses, position and rotation together, and redesigned the loss to optimise both jointly. Given the last ten poses, it samples thirty possible futures. Those samples are summarised as a kernel density estimate, and the SLAM estimate takes a small step up its gradient, toward where the samples agree.

Because the prior keeps every sample instead of averaging them, it can hold more than one answer. On a synthetic dataset where every path forks left or right with equal probability, the model split its samples roughly evenly between the two branches rather than predicting a path straight down the middle.

## Where it helps, and where it doesn't

Correcting a simulated localisation algorithm on KITTI driving sequences reduced trajectory error in all three test conditions, with the best setting going from 1.78 m to 1.07 m ATE. Plugged into SplaTAM, a Gaussian-splatting SLAM system, on handheld TUM RGB-D footage, the gains were modest, and a simpler temporal-smoothing baseline did better.

The difference comes down to how predictable the motion is. A car's heading constrains where it can go next. A handheld camera can swing in any direction while the person holding it walks straight ahead. The backbone learned driving well and handheld motion poorly, and a prior trained on head-mounted pedestrian data didn't transfer to handheld footage at all. The same split showed up in how rotation was best represented: quaternions for driving, Lie algebra or 6D for pedestrians.

A learned motion prior is only as useful as its match to the motion it corrects. That makes constrained settings like autonomous driving the most promising place to use one.

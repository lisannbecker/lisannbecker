---
title: Night Drive? Not Yet.
summary: LiDAR doesn't need daylight, yet its detectors still fail at night. Tracing the drop to imbalanced data, and retraining to close part of the gap.
order: 5
tags: [Computer vision, LiDAR, Autonomous driving]
cover: ../../assets/projects/night-drive/cover.png
coverAlt: "Night and rainy street scenes from nuScenes with 3D detection boxes drawn around cars and pedestrians"
papers:
  - label: Paper
    href: /CV2_report.pdf
poster: /night_drive.pdf
# code: https://github.com/...
---

LiDAR measures distance with lasers, so darkness shouldn't matter to it. Yet earlier work found that LiDAR-based 3D object detectors score far lower at night than during the day. We set out to find out why.

## Confirming the gap

We first reproduced the drop on the nuScenes dataset with three detectors. CenterPoint reached 59.6% mAP on day scenes and 33.9% at night. TransFusion-L fell from 64.7% to 37.5%. Even BEVFusion, which adds camera input, fell from 67.8% to 42.2%.

The dataset statistics gave the first clue. 88% of nuScenes scenes are recorded during the day, night scenes contain far fewer annotated objects, and the mix of object classes differs between the two.

## Two suspects

If the models had learned to expect busy daytime scenes, they might predict too many boxes at night. Capping the number of predictions changed nothing, so that wasn't it.

The second suspect was the imbalance itself. We retrained CenterPoint from scratch twice on the same number of scenes, once with nuScenes' natural day–night split and once balanced 50/50. The balanced model did better at night (43.8% vs 41.8% mAP) and stayed close during the day despite seeing less daytime data. Trucks at night improved the most.

## What's left

The gap didn't close. Part of it is an artefact of evaluation: the night validation scenes contain no buses, trailers or construction vehicles, so those classes score zero by definition. But traffic cones, which do appear at night, also scored zero, and pedestrians and bicycles stayed well behind. Balancing the data helps, but it isn't enough on its own.

My part: setting up our environment on the Snellius supercomputer, the dataset analysis, the introduction, related work and dataset sections of the report, and co-creating the poster.

*With Lennard Schünemann, Bart den Boef, Marga Don, Robbert Sierhuis and Lívia Baxová.*

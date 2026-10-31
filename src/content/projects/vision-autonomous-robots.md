---
title: Vision for Autonomous Robots
summary: 'Three labs on a 12 cm robot: following ceiling lines, localising with ArUco markers to play curling, and mapping a maze from video.'
order: 3
tags: [Robotics, Computer vision]
cover: ../../assets/projects/vision-autonomous-robots/cover.png
coverAlt: "Fisheye view from the robot on the lab's artificial turf, looking at a football goal, with detected ArUco markers 35, 89 and 99 boxed in green"
papers:
  - label: Lab 1 · Line following
    href: /VAR_Group_5_Lab1.pdf
  - label: Lab 2 · Curling
    href: /VAR_Group_5_Lab_2__Curling_.pdf
  - label: Lab 3 · Maze
    href: /VAR_Group_5_Lab_3__Maze_.pdf
# poster: /...
# code: https://github.com/...
---

Three labs, each a step toward a robot that finds its own way using only its cameras. The robot was a RAE: four wheels, four stereo cameras and a body 12 cm across.

## Following the ceiling

After calibrating the camera to remove lens distortion, we had the robot follow the lines of ceiling lights. Canny edge detection found too many short lines, especially in daylight, so we wrote our own detector: take the ten largest bright contours, fit a line to each, discard the poor fits and follow the one nearest the centre of the image. Steering in proportion to the line's offset with an arctan curve, instead of a sinusoidal one, stopped the robot from swinging side to side.

## Curling with markers

The second lab ended in a curling match: drive to a target duck on the lab's football field. The robot located itself by triangulating from ArUco markers with known positions, planned its route with A*, and could dodge other robots by watching for a dark mass in the bottom of its view across ten consecutive frames.

Sharpening the images raised the number of markers detected in our test set from 38 to 45, with at least one found in every image. Live, markers were still sometimes misread. Because the robot re-localised constantly, even from a single marker, it corrected course as it went and reached the duck in the demo.

## Mapping a maze

The last lab started from video of a maze. We reconstructed it in 3D with structure from motion, filtered out the rest of the room and projected the result into a top-down occupancy grid. Dijkstra's algorithm found the shortest route through it. Adding a penalty for cells close to walls turned that into a route a real robot could follow without scraping them.

*With Batu Helvacıoğlu and Marina Orozco González, and Matey Krastev in the first lab.*

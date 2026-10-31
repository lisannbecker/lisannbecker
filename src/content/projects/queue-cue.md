---
title: Queue Cue
summary: Computer vision watches the game screen and turns the room lights green when a match is found, so queuing no longer means waiting at the desk.
order: 4
tags: [Smart home, DIY]
featured: true
# To add pictures, put them in src/assets/projects/queue-cue/ and uncomment:
# cover: ../../assets/projects/queue-cue/cover.jpg
# coverAlt: Describe what the picture shows
# images:
#   - src: ../../assets/projects/queue-cue/detail.jpg
#     alt: Describe what the picture shows
# papers:
#   - label: Paper
#     href: /...
# poster: /...
# code: https://github.com/...
---

Online matchmaking can take minutes, and when a match is found there's only a short window to accept it. Miss it and you're back in the queue. Queue Cue makes the moment impossible to miss from anywhere in the room.

## Watching the screen

The game's video runs through an HDMI capture card. Every tenth frame, about three times a second, the script shrinks the frame, converts it to greyscale and crops it to the centre of the screen, where the "match found" dialog appears. It then compares that crop with a saved screenshot of each game's pop-up using template matching. A correlation above 80% counts as a match.

The script only watches while a supported game is open, currently League of Legends and Counter-Strike 2, and only loads the templates for games that are running.

## Making the room react

When a match pops, the lights switch on, turn green and pulse. Once the dialog is gone, every light returns to exactly the state, brightness and colour it had before.

It's still in progress. Light control is moving from the Philips Hue bridge to Home Assistant, detection is moving onto a Raspberry Pi, and where games offer an API, I'd like to use it instead of watching the screen.

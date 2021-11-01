---
title: Logic Circuits Project
date: "2021-04-01"
description: Description and syntesis in VHDL of a component that implements histogram equalization of a grey scale image with 256 levels.
---

This project was complementary to my Logic Circuits class of my bachelor degree.

The project was made in Xilinx's Vivado using VHDL. The requirements were to make a state machine that implemented the following equalization algorithm for black and white imagines.

```
delta_value = max_pixel_value - min_pixel_value
shift_level = (8-floor(log2(delta_value + 1)
temp_level = (current_pixel_value - min_pixel_value) << shift_level
new_pixel_value = min(255, temp_pixel)
```

I used a Mealy state machine to create the circuit. It was synthesized with a clock period of 15ns and works pre and post synthesis. Since optimization was not a requirement for the project, I valued code readability higher than using a low amount of states in the state machine.

You can read the code [here](https://github.com/chiarabia/Progetto-Reti-Logiche-2021/blob/main/progetto%20reti.vhd)

You can read a report of the project (in italian)[here](https://github.com/chiarabia/Progetto-Reti-Logiche-2021/blob/main/report.pdf)
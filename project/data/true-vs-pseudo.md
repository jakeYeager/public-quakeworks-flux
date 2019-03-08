---
lang: en-US
title: True vs Pseudo
prev: ./random-data-generation
next: ../tests/unscaled-overlay
---

# True-Random vs Pseudo-Random

It should be clarified that the comparisons made in this investigation were between real events and manufactured numbers as signifier. The manufactured numbers were made by random number generators that are _technically pseudo-random_. Random and modern pseudo-random number generator both create outputs are statistically chaotic. The difference is that **true-random** numbers cannot be reverse engineered as the process includes an external devise or process that is _unpredictable_ and uncontrolled. As pseudo-random generators are discreet algorithms it **is possible**  (even if highly complex) to have a measure of prediction as to what the next number will be. This makes their output chaotic, but not a secret. As the parameters of this investigation require no cryptographic element, only chaotic output, pseudo-random numbers were deemed acceptable. 

## True-Random Control Set

To check if the output between this investigations pseudo-random and true-random numbers was comparable, a single set of true-random numbers was obtained for comparison against pseudo sets. The following graph shows the comparison of a single set of true-random numbers against all used pseudo-random testing batches (batch1s).

![img](../_media/graphs/rr-mrk-b1.svg 'Batch1s comparison')

The aggregate output of true-random **is** comparable to pseudo-random choices as seen the the graph. To further illustrate the statistical comparisons by generator, the following chart shows the standard deviation of output by generator:

![img](../_media/graphs/stdev-rr-mrk-b1.svg 'Generator output comparison')

#### Footnotes & References

Other resources of interest on the topic of randomness:
- _"Introduction to Randomness and Random Numbers"_ [random.org](https://www.random.org/randomness/)
- _"Are the Numbers Really Random?"_ [random.org](https://www.random.org/analysis/)
- _"A Million Random Digits with 100,000 Normal Deviates"_ [rand.org](https://www.rand.org/pubs/monograph_reports/MR1418/index2.html)

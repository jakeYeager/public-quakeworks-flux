---
lang: en-US
title: True vs Pseudo
prev: ./random-data-generation
next: ../tests/unscaled-overlay
---

# True-Random vs Pseudo-Random
The comparisons made in this investigation are between real, recorded events and manufactured numbers as simulated events. The manufactured numbers were made by random number generators that are _technically pseudo-random_. True-random and modern pseudo-random number generator both generate outputs which are statistically chaotic. The difference is that **true-random** numbers cannot be reverse-engineered as the process includes an external devise or process that is uncontrolled and _unpredictable_. As pseudo-random generators are discreet algorithms it **is possible**  (even if highly complex) to have a measure of prediction as to what the output will be. This makes their output still chaotic, but not secret. As the parameters of this investigation require no cryptographic element, only chaotic output, pseudo-random numbers were deemed acceptable. 

## True-Random Control Set
To check if the output between the used pseudo-random numbers and true-random numbers was comparable, a single set of true-random numbers was obtained for comparison. The following graph shows the comparison of a single batch of true-random numbers against all used pseudo-random testing batches (batch1s).

![img](../_media/graphs/rr-mrk-b1.svg 'Batch1s comparison')

The aggregate output of true-random **is** comparable to pseudo-random choices as seen in the graph. To further illustrate the statistical comparisons of generators, the following chart shows the standard deviation of batch output by generator:

![img](../_media/graphs/stdev-rr-mrk-b1.svg 'Generator output comparison')

#### Footnotes & References

Other resources of interest on the topic of randomness:
- _"Introduction to Randomness and Random Numbers"_ [random.org](https://www.random.org/randomness/)
- _"Are the Numbers Really Random?"_ [random.org](https://www.random.org/analysis/)
- _"A Million Random Digits with 100,000 Normal Deviates"_ [rand.org](https://www.rand.org/pubs/monograph_reports/MR1418/index2.html)

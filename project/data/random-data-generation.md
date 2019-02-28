---
lang: en-US
title: Random Data Generation
prev: ./seismic-event-collection
next: ./true-vs-pseudo
---

# Random Data Generation

Random number sets were generated using commonly available random number generators. Full documentation as well as the actual CSV data files can be found at the [data repo](https://github.com/jakeYeager/qw-data-flux). Several different generators were used to provide a comparison between random sets, as well as a more robust test against the seismic events. 

**Five sets** were generated by each generator, each set containing **six batches** that were matched in volume to  respective magnitude-segmented entities. Each **single entity** had an associated randomly generated number to represent _month_, _marker_, and _hour_.

Each batch of random numbers was generated as independently as possible, and not by dividing a singular pool.

A tree-view schema structure would be as follows:

```txt
Generator "X"
\
 - - - Set #1 (416,102 entities)
 |      \
 |      | - - Batch 1 (333,857 entities): [month val] [marker val] [hour val]
 |      | - - Batch 2 (72,257 entities): [month val] [marker val] [hour val]
 |      | - - Batch 3 (8,950 entities): [month val] [marker val] [hour val]
 |      | - - Batch 4 (970 entities): [month val] [marker val] [hour val]
 |      | - - Batch 5 (63 entities): [month val] [marker val] [hour val]
 |      \ - - Batch 6 (5 entities): [month val] [marker val] [hour val]
 |      
 - - - Set #2 (416,102 entities)
 |      \
 |      | - - Batch 1 (333,857 entities): [month val] [marker val] [hour val]
 |      | - - Batch 2 (72,257 entities): [month val] [marker val] [hour val]
 |      | - - Batch 3 (8,950 entities): [month val] [marker val] [hour val]
 |      | - - Batch 4 (970 entities): [month val] [marker val] [hour val]
 |      | - - Batch 5 (63 entities): [month val] [marker val] [hour val]
 |      \ - - Batch 6 (5 entities): [month val] [marker val] [hour val]
 |
 - - - Set #2 (416,102 entities)
 |      \
 |        etc...
```
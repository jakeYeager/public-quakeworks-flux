---
lang: en-US
title: Seismic Event Collection
prev: ../setup/the-marker
next: ./random-data-generation
---

# Seismic Event Collection

## Source

Seismic record data was obtained from the USGS API[^first].

### Collection Query Specs

Primary goal for creating the seismic event population was to create the largest possible volume of entities within a continuous period. The following constraints were applied according the the data source API:

- **Location agnostic** (latitude and longitude values were set to their respective extremes)
- **Exclusively earthquakes** (no other seismic event types were allowed, i.e. quarry blasts, nuclear explosions)
- **Allowed magnitude of only >M3.9**
- **Time period between January 1, 1940 and December 31, 2018** (1940-01-01T00:00:00Z to 2018-12-31T23:59:59Z)

## Population Samples

To test semi-arbitrary sections of the dataset, sample populations were generated into tagged-magnitude populations demarcated by the event's whole-integer magnitude:
 
 - **M4** sample = events M4.*
 - **M5** sample = events M5.*
 - **M6** sample = events M6.*
 - **M7** sample = events M7.*
 - **M8** sample = events M8.*
 - **M9** sample = events M9.*

## Sample Sizes Results

| Type    |  Events  |
| ------: | :------- |
| **All** | 416,102  |
| **M4**  | 333,857  |
| **M5**  | 72,257   |
| **M6**  | 8,950    |
| **M7**  | 970      |
| **M8**  | 63       |
| **M9**  | 5        |

 ## Caveats & Assumptions
 
::: warning Magnitude designation
There ***are*** differences in measuring magnitude[^second][^third]. As his study is focused on evaluating timestamps, **no** adjustments were made to assign an event to one scale over another. Demarcating by whole integers was done purely for convenient segmenting of the population.
:::

::: warning The 1973 cut-in rate
After reviewing the available data, it was identified that prior to 1973 events with a magnitude of <M5.9 were not available in the volumes and geographical locations that existed after January 1973. As this information suddenly becomes available in the dataset it is **assumed** that this data was not able to be recorded previously (for some reason) and will not be available in the future. Even though the specific goal for creating the data population was events within a continuous time period, the events of M4.0 - M5.9 that exist _prior_ to Jan 1, 1973 **are included** in the dataset. This missing-data feature must be remembered during [*testing*](../setup/time-issues.md#year-issues) the comparisons of _YEAR_ should be handled accordingly.
:::

#### M4 example

![M4 1973 Cut-in](../_media/graphs/single-yr-m4s.svg 'M4 events cut-in rate')

#### M5 example

![M5 1973 Cut-in](../_media/graphs/single-yr-m5s.svg 'M5 events cut-in rate')

#### Footnotes & References
[^first]: Federation of Digital Seismograph Networks (FDSN) web service (version 1.0) via the [USGS](https://earthquake.usgs.gov/fdsnws/event/1/). 
[^second]: [USGS](https://earthquake.usgs.gov/learn/glossary/?term=magnitude) glossary 
[^third]: [Michigan Tech Univ.](http://www.geo.mtu.edu/UPSeis/intensity.html)
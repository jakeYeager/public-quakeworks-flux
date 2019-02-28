# Seismic Event Collection

## Source

Seismic record data was obtained from the _Federation of Digital Seismograph Networks_ (FDSN) web service (version 1.0) via the [USGS API](https://earthquake.usgs.gov/fdsnws/event/1/). 

### Collection Query Specs

Primary goal for creating the seismic event population was to create the largest possible volume of entities within a continuous period. The following constraints were applied according the the data source API:

- **location agnostic** (latitude and longitude values were set to their respective extremes)
- **exclusively earthquakes** (no other seismic event types were allowed, i.e. quarry blasts, nuclear explosions)
- **allowed magnitude of only >M3.9**
- **time period between January 1, 1940 and December 31, 2018** (1940-01-01T00:00:00Z to 2018-12-31T23:59:59Z)

## Samples

To test semi-arbitrary sub-sets of the data, sample populations were generated into magnitude-specific populations demarcated by the event's whole-integer magnitude:
 
 - **M4** sample = events M4.*
 - **M5** sample = events M5.*
 - **M6** sample = events M6.*
 - **M7** sample = events M7.*
 - **M8** sample = events M8.*
 - **M9** sample = events M9.*

## Resulting Sample Sizes

| Type    | Entities |
| ------- | -------- |
| **All** | 416,102  |
| **M4**  | 333,857  |
| **M5**  | 72,257   |
| **M6**  | 8,950    |
| **M7**  | 970      |
| **M8**  | 63       |
| **M9**  | 5        |

 ## Caveats & Assumptions
 
::: warning Magnitude designation
There ***are*** differences in measuring magnitude. Here are some links to learn more: [USGS](https://earthquake.usgs.gov/learn/glossary/?term=magnitude), [MTU](http://www.geo.mtu.edu/UPSeis/intensity.html). As his study is focused on evaluating timestamps, **no** adjustments were made to assign an event to one scale over another. Demarcating by whole integers was done purely for convenient segmenting of the population.
:::

---

::: warning The 1973 cut-in rate
After reviewing the available data, it was identified that prior to 1973 events with a magnitude of <M5.9 were not available in the volumes and geographical locations that existed after January 1973. It is **assumed** that this data was not able to be recorded and will not be available in the future. As the specific goal for the population was events within a continuous time period, the events of M4.0 - M5.9 that exist _prior_ to Jan 1, 1973 are **NOT included** in the dataset. Therefore we have to remember in evaluating sample results that the comparisons should be **year agnostic**.
:::

#### M4 example

![M4 1973 Cut-in](../_media/graphs/single-yr-m4s.svg 'M4 events cut-in rate')

#### M5 example

![M5 1973 Cut-in](../_media/graphs/single-yr-m5s.svg 'M5 events cut-in rate')
---
lang: en-US
title: Seismic Event Collection
prev: ../setup/the-marker
next: ./random-data-generation
---

# Seismic Event Collection

## Collection Query Specs

Primary goal for creating the seismic event population was creating the largest possible volume of entities within a continuous period. The following data constraints were applied during collection:

- **Location agnostic** (latitude and longitude values were set to their respective extremes)
- **Exclusively earthquakes** (no other seismic event types were allowed, i.e. quarry blasts, nuclear explosions)
- **Allowed magnitude of only ≥M4.0**
- **Time period between January 1, 1940 and December 31, 2018** (1940-01-01T00:00:00Z to 2018-12-31T23:59:59Z)

## Source

Seismic record data was obtained from the *Advanced National Seismic System Comprehensive Earthquake Catalog* (ANSS ComCat) web portal[^first].

## Population Samples

To test semi-arbitrary samples of the dataset, entities were grouped by reducing the event's magnitude to a whole integer:

- **M4** sample = events M4.0-4.9
- **M5** sample = events M5.0-5.9
- **M6** sample = events M6.0-6.9
- **M7** sample = events M7.0-7.9
- **M8** sample = events M8.0-8.9
- **M9** sample = events M9.0-9.9

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

### Missing Data

[ANSS Documentation](https://earthquake.usgs.gov/data/comcat/) states that "historic regional seismic network catalogs have not yet been fully loaded", but the [old version](http://www.quake.geo.berkeley.edu/anss/catalog-search.html) of the catalog states that as of Jan 1 2013, the ANSS ComCat under the USGS domain supersede. It is **assumed** by the author that there is no large volume of data outstanding that might significantly skew the population set. Obvious data voids are identified where possible and mitigated (see **1973 Data Cut-in** below).

### Magnitude Designation

There ***are*** differences in measuring magnitude[^second][^third]. As this study is focused on evaluating timestamps, **no** adjustments were made to verify and assign an event to a specific scale. Demarcating by whole integer was done purely for convenient segmenting of the population.

### The 1973 Data Cut-In

After reviewing the available data it was identified that prior to 1973, events with a magnitude of <M5.9 were not available in the volumes and geographical locations that existed after January 1973. As this information becomes suddenly available in the dataset, it is **assumed** that this data was not able to be recorded previously (for some reason) and will not be available in the future. Even though the specific goal for creating the data population was collecting all events within a continuous time period, the scattered events of M4.0-5.9 that exist _prior_ to Jan 1, 1973 **are included** in the dataset. This missing-data feature must be remembered during [_testing_](../setup/time-issues.md#year-issues) the comparisons of _YEAR_ and handled accordingly.

#### M4 example

![M4 1973 Cut-in](../_media/graphs/single-yr-m4s.svg)

#### M5 example

![M5 1973 Cut-in](../_media/graphs/single-yr-m5s.svg)

#### Footnotes & References

[^first]: Data collected via API from the Federation of Digital Seismograph Networks (FDSN) [web service (version 1.0)](https://earthquake.usgs.gov/fdsnws/event/1/). [ANSS Documentation](https://earthquake.usgs.gov/data/comcat/).
[^second]: _Glossary term_ [USGS](https://earthquake.usgs.gov/learn/glossary/?term=magnitude)
[^third]: [Michigan Tech Univ.](http://www.geo.mtu.edu/UPSeis/intensity.html)
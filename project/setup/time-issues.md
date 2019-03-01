---
lang: en-US
title: Time Issues
prev: ./parts-of-time
next: ./the-marker
---

# Time Issues

With this method there are some "equal-opportunity" consistency issues related specific to the data population using the common Gregorian calendaring[^first] method that should be addressed:

### _YEAR_ Issues

_Every earthquake and associated random number has equal opportunity to the tested range of YEAR?_

**FALSE:** Normally this is would not be an issue, but due to characteristics of the population being tested in this particular project, results would be a fair comparison. The available records are curtailed between the years of 1940 and 1973 for a particular [part of the population](../data/seismic-event-collection.md#caveats-assumptions). Any _YEAR_ comparison results would be skewed.

### _MONTH_ Issues

_Every earthquake and associated random number has equal opportunity to the tested range of MONTH?_

**PASSABLE:** Months are close to equal-opportunity but the odd-day count makes an accurate test slightly skewed (the month of February will always have less opportunity than any other month). This will be corrected as best as possible in the next [marker section](./the-marker.md).

### _DAY_ Issues

_Every earthquake and associated random number has equal opportunity to the tested range of DAY?_

**FALSE:** The day value has a month assigment, and the quantity varies. There are fewer opportunities within the time scope for an earthquake to have a day value of "31" (as there are only 7 months with 31 days), as opposed to "28".

### _HOUR_ Issues

_Every earthquake and associated random number has equal opportunity to the tested range of DAY?_

**TRUE:** Hours are segmented regularly.


## Available Testable Time Values

From the above analysis we can safely consider only _HOUR_ as truly consistent time value. _MONTH_ will be accepted conditionally as a "thumbnail" while a better method can be constructed. 

### Footnotes & References
[^first]: Gregorian calendar [Wikipedia](https://en.wikipedia.org/wiki/Gregorian_calendar)
---
lang: en-US
title: Parts of Time
prev: ./testing-the-test
next: ./time-issues
---

# Parts of Time

By separating categorical time values from our timestamps, there would be a variety of elements to test. Used here a "categorical time value" is the different temporal terms of a date and a time. Earthquake records are listed (and also retrieved from the API) with an [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) timestamp in the UTC (or "Zulu") time zone. Let's look at that:

Timestamp ISO 8601 by term: *YEAR-MONTH-DAY HOUR:MINUTE:SECONDS*

Looking at this singular event, the timestamp can be translated into different formats:

[Tōhoku earthquake](https://earthquake.usgs.gov/earthquakes/eventpage/official20110311054624120_30/executive) - ISO 8601: *2011-03-11T05:46:24Z*

[Tōhoku earthquake](https://earthquake.usgs.gov/earthquakes/eventpage/official20110311054624120_30/executive) - Local time: *11 March 2011, 14:46 JST*

Each of these terms of _YEAR, MONTH, DAY, HOUR, MINUTE_ and _SECOND_ are integers that reoccur _within a range of integers_ making them potentially testable categorically. If date values within one year were tested, a variety of categories could be leverage instead of testing **only** the chance opportunities of ~31,557,600 seconds in a year.

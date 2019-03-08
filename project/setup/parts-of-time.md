---
lang: en-US
title: Parts of Time
prev: ./testing-the-test
next: ./time-issues
---

# Parts of Time & Format

By separating categorical time values from our timestamps, there would be a variety of elements to test. Earthquake records are listed (and also retrieved from the API) with an ISO 8601 format[^first] timestamp in the Coordinated Universal Timezone[^second], or UTC.  

### Format

First let's look at the ISO 8601 UTC format: it has logical sequential time terms with the date separated from the time by 'T' (indicating that it is associated with a timezone) and ending with 'Z' (demarcating "Zulu" or UTC).

**Timestamp ISO 8601 terms:** _YEAR-MONTH-DAY **T** HOUR:MINUTE:SECONDS **Z**_

### Timezone
Next, let's consider the benefit of UTC: looking at this singular event, the timestamp can be translated into different formats:

[Tōhoku earthquake](https://earthquake.usgs.gov/earthquakes/eventpage/official20110311054624120_30/executive) - **ISO 8601 datetime:** *2011-03-11T05:46:24Z*

[Tōhoku earthquake](https://earthquake.usgs.gov/earthquakes/eventpage/official20110311054624120_30/executive) - **Local time of event:** *11 March 2011, 14:46 JST*

If all earthquakes were recorded in local time, a considerable amount of calculation would be required in comparing events on a global scale. By using a universal timezone, all event times are unified.

::: tip Earthquake Timezone = UTC
Throughout this study all times are in UTC. No local timezones are used unless specified.
:::

### Categorical Ranges

Each of these terms of _YEAR, MONTH, DAY, HOUR, MINUTE_ and _SECOND_ are integers that reoccur _within a range of integers_ making them potentially testable categorically: months = 1-12, days = 1-31, etc. If date values within one year were tested, a variety of categories could be leverage instead of testing **only** the chance opportunities of ~31,557,600 seconds in a year.

#### Footnotes & References
[^first]: _ISO 8601 format_, [Wikipedia](https://en.wikipedia.org/wiki/ISO_8601)
[^second]: _Coordinated Universal Timezone_, [timeanddate.com](https://www.timeanddate.com/time/aboututc.html)
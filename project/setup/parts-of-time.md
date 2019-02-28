# Parts of Time

What is a categorical time value? Quite simply it is the different temporal terms of a date and a time. Earthquake records are listed and also retrieved from the API with an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC (or "Zulu") timestamp. Let's look at that:

Timestamp ISO 8601 by term: *YEAR-MONTH-DAY HOUR:MINUTE:SECONDS*

...so the following event has the same timestamp, but different formats:

[Tōhoku earthquake](https://earthquake.usgs.gov/earthquakes/eventpage/official20110311054624120_30/executive) - ISO8601: *2011-03-11T05:46:24Z*

[Tōhoku earthquake](https://earthquake.usgs.gov/earthquakes/eventpage/official20110311054624120_30/executive) - Local time: *11 March 2011, 14:46 JST*

Remembering again why we took this approach: each of these terms of _YEAR, MONTH, DAY, HOUR, MINUTE_ and _SECOND_ are integers that reoccur _within a range of integers_. Tests could be done on these isolated, categorical integer ranges. Going back to the flat Unix epoch timestamp test, instead of testing **only** the 31,557,600 seconds-based opportunities, we could also test the 12-month opportunities, the 31-day opportunities, the 24-hour opportunities etc.
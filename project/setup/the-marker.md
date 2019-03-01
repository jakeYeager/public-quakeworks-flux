---
lang: en-US
title: The Marker
prev: ./time-issues
next: ../data/seismic-event-collection
---

# The Marker

The common Gregorian calendar method divides the year into a twelve “month” year segmentation. Taking `1` day as the base "part" measure, and `365.24` days as the "whole", a division of `365.24 / 12 = 30.43` day allotments. The simplest unification is to have year segments with whole-day allotments, thus the remainder of `0.43 x 12 = 5.16` days per year needs to be merged into the segments. This remainder dictates the quantity of odd-count year segments.
 
 If we take the same scenario but divide by sixteen parts: `365.24 / 16 = 22.82` day allotments. while sixteen divisions of 365.24 makes 22.82 day allotments requiring fewer divisions with odd day counts. Fourteen division provides the best 365.24 day allotment with 26.08 day allotments. Comparing divisional groups of fourteen (i.e. quarters) could not be categorically done. Sixteen has full internal comparison of divisional groups (i.e. halves, quarters, eights and sixteenths). Finally, by using more categories (sixteen instead of twelve), a more fine-grained insight would be provided for showing random number selection behavior of the algorithms, as well as for the seismic event data.

| Year Division | Day Allotment | Comment                                        |
| ------------- | ------------- | ---------------------------------------------- |
| **12**        | 30.43         | poor allotment; good divisional comparison     |
| **14**        | 26.08         | best allotment; poor divisional comparison     |
| **16**        | 22.82         | good allotment; best divisional comparison     |

A unique categorical time framework was made based on sixteen division calendar, each division called **marker**. Days were allotted into a marker schedule which was then used to match and categorize event timestamps.
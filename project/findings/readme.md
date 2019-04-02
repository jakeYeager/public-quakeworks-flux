---
title: Findings
lang: en-US
---

# Findings

## Research Review

### Setup

- A testing approach for analyzing categorical time values was [designed](../setup/testing-the-test.md).
- Issues regarding the testing of time categories were [identified](../setup/time-issues.md) and [mitigated](../setup/the-marker.md).

### Data

- Earthquake data collection parameters were [defined](../data/seismic-event-collection.md); the dataset was collected and [segmented](../data/seismic-event-collection.md#population-samples).
- The earthquake data was reviewed and random data [generated](../data/random-data-generation.md) to match.

### Tests

- A combination of [visual](../tests/unscaled-overlay.md) and [statistical](../tests/standard-deviation-months.md) tests were used to compare the two types of data.

### Extensions

- An extended test was created to determine if possible [aftershock skewing](../extension/m4-anomaly.md) had occurred.
- An extended test was created to detail the [regional activity](../extension/by-hour.md) respective to the [global results](../tests/scaled-hour-graphs.md).
- An extended [depth test](../extension/by-depth.md) illustrated that the distribution of event depths by time of year.

## Results

### Supported Claims

1) There is a phenomenon apparent in these results that naturally occurring seismic event populations **are significantly divergent** when statistically compared to equivalent volumes of randomly generated data.
2) This divergence is specific to the event's recorded **timestamp** of occurrence.
3) This phenomenon would indicate that the distribution of earthquakes through time **is not** random (literal). Their ***sequential distribution*** could still be considered random (literal), but the ***temporal distribution*** appears heavily skewed.
4) This phenomenon appears to be more prevalent[^first] and fundamental[^second] to seismic event behavior than what is currently described publicly.
5) This phenomenon appears to effect both the temporal (time) *and* spatial (geographic location and depth) characteristics of events.

### Unsupported Claims

1) That knowledge of this phenomenon can be used to predict earthquakes (I'm not going to even touch this and neither should you :ok_hand:).
2) That this phenomenon is directly generating earthquakes. It would be more accurate to say that earthquakes are "allowed" rather than "generated". The results herein suggest a period of suppression as well as an associated period of expression. This functional mechanism is described elsewhere[^third] as related to ocean tidal motions.

#### Footnotes & References

[^first]: _"Seismologists have determined that microseismic events are correlated to tidal variations in Central Asia (north of the Himalayas)."_ [Wikipedia](https://en.wikipedia.org/wiki/Earth_tide#Effects)
[^second]: _"Earthquakes are equally as likely to occur in the morning or the evening. Many studies in the past have shown no significant correlations between the rate of earthquake occurrence and the semi-diurnal tides when using large earthquake catalogs."_ [USGS FAQS](https://www.usgs.gov/faqs/can-position-moon-or-planets-affect-seismicity-are-there-more-earthquakes-morningin-eveningat-a?qt-news_science_products=0#qt-news_science_products)
[^third]: _"When the confining pressure is lessened, the faults are unclamped and more likely to slip. The increased probability is a factor of ~3 during high tides."_ [USGS FAQS](https://www.usgs.gov/faqs/can-position-moon-or-planets-affect-seismicity-are-there-more-earthquakes-morningin-eveningat-a?qt-news_science_products=0#qt-news_science_products)

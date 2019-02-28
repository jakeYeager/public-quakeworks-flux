---
lang: en-US
title: Motivation
next: ./overview
---

## The Site

The Developer adage _"first solve the problem, then write the code"_ works. But what happens when you've written the code, then find a bigger problem? A problem you can't really submit a support ticket or a pull request. Well, as any self-respecting web developer would do, you write the documentation! Maybe sprinkle some emoji around :100: 

And so this site has come into existence. It is a strange beast being part wiki and part blog; part white paper and part research paper; part QED and part [#WTF](https://media.giphy.com/media/X7RqxMHCCW21G/giphy.gif).


 
 ## The Subject
 
 Persons in the academic field who are much more experienced[^first] and much more official[^second] than I state the position that earthquakes are randomly distributed through time, i.e. "we know that they **are** coming, we don't know **when**." There are statements that _"Earthquakes are equally as likely to occur in the morning or the evening. Many studies in the past have shown no significant correlations between the rate of earthquake occurrence and the semi-diurnal tides when using large earthquake catalogs."_[^second] There is also mention to some correlations between earth tides[^second][^third], full/new moon and certain types of earthquakes.

## The Problem

I made a large catalog from the [USGS API](https://earthquake.usgs.gov/fdsnws/event/1/), tested the earthquake event record's timestamp, compared them against randomly generated data, and am relating that **there is no approximate comparison** between random number sets and earthquake event times. Well, technically there always _is_ a comparison but it would be like local "Dad league" basketball squad playing the NBA All Stars (and Kobe came out of retirement). Yes, they are technically playing basketball, but it's not really the same game.

## The Issues

### Me

I'm a web developer, not a seismologist. But...:

- A skill my job requires is that I can populate, store, retrieve and compute large quantities of data efficiently and accurately.
- Another required skill is the ability to test if a set of logic conditions will fail, where it fails, and then how to fix it.

I've reworked the data/logic enough that I'm confident I do not have a(n obvious) logic bug or tainted data source. **It still could be a false positive**. This was initially a weekend tum-tee-tum, which has morphed into a passion project, and is now an abject obsession. But currently it's just me, and am highly sensitive to the fact that makes _me_ the closed-loop process. *"It works fine on my computer"* is indeed an answer, but not a solution and will get you fired in IT-landia.

### The Catalog

_"...When using large earthquake catalogs."_[^second] might be the crux. There is no associated definition to largeness in the text. I checked 416,102 events, as many as I could grab. Maybe there are more? _See "The Issues > Me"_

## The Claims

What **IS** being claimed:

1) There is an **apparent phenomenon** expressed in naturally occurring seismic event populations as seen by **significantly divergent** statistical comparisons to equivalent randomly generated data populations.
2) This divergence is specific to the events recorded **timestamp** of occurrence.
3) This phenomenon would indicate that earthquake occurrence is **not** randomly distributed through time.
4) This phenomenon appears to be more prevalent and fundamental to seismic event behavior than what is currently described by the scientific community.

What is **NOT** being claimed:

1) That knowledge of this phenomenon can be used to predict earthquakes (I'm not going to even touch this and neither should you :smile:).
2) That this phenomenon is directly generating earthquakes. It would be more accurate to say the earthquakes are allowed to happen (results here suggest a period of suppression as well as an associated period of expression. The mechanism as also described here[^second] as related to tidal motions).

## The Request

- I need help breaking my experiment (validating the phenomenon's non-existence).
- **OR** Someone else outside my closed-loop also not able to cannot break it (validating the phenomenon's existence).
- **OR** Finding a resource or body of work that reasonably describes/refutes this phenomenon (validating/invalidating the existence).

### Footnotes & References

[^first]: Dr. Lucy Jones [(Twitter)](https://twitter.com/drlucyjones/status/1032043468699258880)
[^second]: USGS [(FAQS)](https://www.usgs.gov/faqs/can-position-moon-or-planets-affect-seismicity-are-there-more-earthquakes-morningin-eveningat-a?qt-news_science_products=0#qt-news_science_products)
[^third]: Earth tide [Wikipedia](https://en.wikipedia.org/wiki/Earth_tide), [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S042298940871153X), and [Britannica](https://www.britannica.com/science/Earth-tide)

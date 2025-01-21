---
id: 453
title: 'Fact Check: The Number of Times Amy Dickinson Has Beaten Luke Burbank'
date: '2015-06-01T07:54:43-08:00'
author: 'Linh Pham'
guid: 'http://blog.wwdt.me/?p=453'
permalink: /2015/06/fact-check-the-number-of-times-amy-dickinson-has-beaten-luke-burbank/
categories: ['Blog Posts']
tags: ['Amy Dickinson', 'Fact Check', 'Luke Burbank', 'Scores', 'Statistics']
---

At the [Live Wire Radio](http://www.livewireradio.org) taping this past Saturday, Amy Dickinson was one of a number of guests on the show. When Luke Burbank, the host of Live Wire, introduced Amy on to the stage, he stated that Amy had beaten Luke 14 times on [Wait Wait... Don't Tell Me!](http://waitwait.npr.org). While I understand that the quip was done in jest and in a self-deprecating manner, my Wait Wait Stats portion of my brain went into overdrive and I started to wonder how many times Amy actually beat Luke.

Before I go into the actual numbers, as taping of the second show started, I tweeted out a screenshot of both Luke's and Amy's current stats on the show:

> In case you were curious on how [@AskingAmy](https://twitter.com/AskingAmy) fares against [@lukeburbank](https://twitter.com/lukeburbank) on [@waitwait](https://twitter.com/waitwait). Both on [@LiveWireRadio](https://twitter.com/LiveWireRadio) tonight.
>
> &mdash; Linh Pham (@questionlp) [May 31, 2015](https://tweets.linh.social/604870616546607104/)

In case the screenshots do not come out cleanly, below is another view of both of their stats:

![Luke and Amy - 2015-05-31](/images/2015/05/Luke-and-Amy-2015-05-31.png)

It wasn't until early Sunday afternoon did I have a chance to poke and prod the [Wait Wait Stats Page](https://stats.wwdt.me/) database to getting the data that I wanted. Even though Luke and Amy have been on Wait Wait... Don't Tell Me! as panelists a combined 129 times (excluding repeats and Best Of shows), the two have only been on the show together a meager **four** times. Below is the a SQL query that pulls data from the "ww_showpnlmap" table, which is where each row contains the show ID and panelist ID and the corresponding scoring data.

![Luke and Amy - Shows Together](/images/2015/05/Luke-and-Amy-Shows-Together.png)

In this case, the query only looks at the rows that belong to either Luke Burbank or Amy Dickinson, excludes any records for shows that are repeats and/or Best Of shows. The "group by" and "having" lines is the quickest way to narrow the search down to only include shows that have more than one row occurrence. The resultant data shows that Luke and Amy have only been on the same Wait Wait shows aired on: 2009-10-31, 2014-01-18, 2014-04-12 and 2014-07-26.

Now, take that list of Show IDs and run a query to show the scoring data for those four shows comes back with:

![Luke and Amy - Shows Together with Scores](/images/2015/05/Luke-and-Amy-Shows-Together-with-Scores.png)

Based on that query, Amy Dickinson won two of the four games by beating Luke, Julia Sweeney and P.J. O'Rourke. On the other hand, Luke won one game by beating Amy and Charlie Pierce, and then came in tied for first with Brian Babylon, ahead of Amy.

In closing, Amy and Luke are essentially 2-2 when it comes to beating each other in the four, _not fourteen as Luke said_, games that they've played against each other.

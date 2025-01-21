---
id: 474
title: '#FactCheck: First Three-Way Tie Going Into Lightning Round'
date: '2015-08-01T21:11:48-08:00'
author: 'Linh Pham'
guid: 'http://blog.wwdt.me/?p=474'
permalink: /2015/08/factcheck-first-three-way-tie-going-into-lightning-round/
categories: ['Blog Posts']
tags: ['Bill Kurtis', 'Brian Babylon', 'Fact Check', 'Faith Salie', 'Mo Rocca', 'Scores', 'Statistics', 'Three-Way Ties']
---

On the [Wait Wait... Don't Tell Me!](http://waitwait.npr.org) show that aired on [2015-08-01](https://stats.wwdt.me/shows/2015/8/1), at the beginning of the Lightning Fill-in-the-Blank round, or Lightning round for short, Bill Kurtis made the following statement:

> I can; it's easy. First time ever, a three-way tie.
>
> Source: <http://www.npr.org/2015/08/01/428361150/lightning-fill-in-the-blank>

Upon hearing that, a Wait Wait Stats alarm went off in my mind, because I knew that such three-way ties had in fact happened in the past and weren't all that rare. That said, I wanted to find out how many three-way ties have actually happened in the past several years. Also, I wanted to know if it was the first time Bill Kurtis presided over a game in which all three panelists were tied going into the Lightning round.

Before I go into the actual nitty-gritty of how I got to my answer, below is a quick refresher of the structure of the Wait Wait Stats Database by looking at its EER diagram:

![Enhanced ER Diagram of the Wait Wait Stats Page Database](/images/2015/08/wwdtm_v2-EER-Diagram-2015-08-01.png)

When it comes to which panelists are on which Wait Wait show and how they performed, with the exception of their bluff data, is stored in the "ww_showpnlmap" table; in which, I have tried to collect and enter in as much data as I have been able to when it comes to how points each panelist had at the start of the Lightning round; as well as, how many questions were answered correctly.

So, I wanted to craft a query that pulled data from almost all of the tables to include: show date, host, scorekeeper, panelist and how many points the panelists had going into the Lightning round. The data would be grouped together and included two columns that show how many distinct scores there were going into the Lightning round (with 1 denoting a three-way tie) and a column with all of the scores concatenated together.

Unfortunately, with my SQL query writing skills being a bit on the meh side, I ended up creating a view that handled everything but the listing of each of the panelists and used that view as a sub-query in another view that would combine everything together.

This is what the query in the first view looks like this:

![SQL Query for v_ww_panelist_distinct_scores](/images/2015/08/v_ww_panelist_distinct_scores.png)

This is what the query for the second view looks like:

![SQL Query for v_ww_panelists_lrnd_threewaytie](/images/2015/08/v_ww_panelists_lrnd_threewaytie.png)

In the first query, I'm filtering out shows that are not "Best Of" shows and shows that are not a repeat show. I am also filtering out records that do not contain data for a panelist's score going into the Lightning round.

Running a query against the "v_ww_panelists_lrnd_threewaytie" view and doing a grouping against the show's date returns a list of **29** shows (including the 2015-08-01 show) in which all three panelists went into the beginning of the Lightning round with a three-way tie.

![Games With Panelists in a Three-Way at Start of Lightning Round](/images/2015/08/Games-With-Panelists-in-a-Three-Way-at-Start-of-Lightning-Round.png)

As you can see, before the [2015-08-01](https://stats.wwdt.me/shows/2015/8/1) game, Bill Kurtis has actually presided over two games that started off with a three way tie. So, even if his statement were implied to qualify that he meant that it was the first time he has seen a three-way tie entering the Lightning round, that would still be incorrect. Bill Kurtis had presided, as guest judge and scorekeeper, over a three-way tie at the start of the Lightning round on the show that aired on [2013-03-09](https://stats.wwdt.me/shows/2013/3/9). The other show in which Bill Kurtis witnessed the same thing was as official judge and scorekeeper on [2015-02-28](https://stats.wwdt.me/shows/2015/2/28) (which had Brian Babylon as a panelist).

![All Panelists Who Started Lightning Round in a Three-Way Tie (Best Viewed in a New Window](/images/2015/08/All-Panelists-Who-Started-Lightning-Round-in-a-Three-Way-Tie.png)

Looking at the full results, both Brian Babylon and Mo Rocca have been on multiple games in which they were part of a three-way tie at the start of the Lightning round. Up until the [2015-08-01](https://stats.wwdt.me/2015/8/1) show, Faith Salie has never been a three-way tie going into the Lightning round.

Another interesting note is that the number of points each panelist had in each of the three-way ties going into the Lightning round, except for one instance, was: 3. The one exception was the [2009-04-04](https://stats.wwdt.me/shows/2009/4/4) show in which Tom Bodett, Paula Poundstone and Mo Rocca each had two points going into the Lightning round.

To summarize, Bill Kurtis was not correct in this statement on the Wait Wait show aired on [2015-08-01](https://stats.wwdt.me/shows/2015/8/1) when he said that it was the first time all three panelists were tied at the start of the Lightning Round. Prior to the 2015-08-01 show, there were **28** other occurrences of three-way ties at the start of the Lightning Round. Also, Bill Kurtis had also previously presided over two games in which the same three-way tie at the start of the Lightning Round occurred.

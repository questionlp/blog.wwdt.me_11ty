---
id: 188
title: 'Previewing Wait Wait Stats Page Version 3.0'
date: '2014-01-14T14:31:40-08:00'
author: 'Linh Pham'
guid: 'http://blog.wwdt.me/?p=188'
permalink: /2014/01/previewing-wait-wait-stats-page-version-3-0/
image: /images/2014/01/1.jpg
categories: ['Blog Posts']
tags: ['Announcements', 'Stats Page', 'Web Development']
---

_**Update**: I have finished re-writing the code that generates the panelist score breakdown graph and it will be deployed along with the new Stats Page._

If you follow me on Twitter ([@questionlp](https://tweets.linh.social/)), you may have seen my recent tweets about a new version of the [Wait Wait... Don't Tell Me! Stats Page](https://stats.wwdt.me/), including two sneak peek screenshots.

For over a year, I have been dabbling with new design options for the Wait Wait Stats Page, as well as fighting with the original code to add a few new features that have been requested over the years. In the past two months or so, I finally sat down and started sketching out a new design and working in earnest on wireframes and prototypes. It was one of my New Year's resolutions to get a new version of the site coded and published.

Looking at the current site, the design is very monolithic with one _**huge**_ table per year all on one page. That designed worked fairly well when the page only had one or two years of data; but, is failing miserably now with 15 years worth of data.

![Current version of the Wait Wait Stats Page](/images/2014/01/Current.png)

The one design decision that I am thankful of making early on in the current site's development was to normalize the tables and database. I think that saved my sanity by the time I needed to add additional tables to store additional panelist score breakdown and guest host/guests scorekeepers data. I was also stuck on choosing which web framework to use to build the new site. After a while, I settled down on using a very simple PHP framework and coded the data processing and abstraction on my own.

I would have to say that the biggest requirement that I had for the new Stats Page was to make it mobile friendly and as lightweight as possible. I immediately ditched the idea of using XHTML and embraced HTML5 and CSS 3, plus made all of the page elements modular. As you can see from the screenshots in this preview, the pages were rendered using Chrome running on an iPad.

So on with the tour of the new Wait Wait Stats Page! When you first land on the Stats Page, you'll immediately see a few of the major changes up front. First, there's a navigation menu on the left side of the page that will allow you to browse shows by year, view panelist information on its own page, as well as view information about the hosts and scorekeepers. Please note that the "Internal ID" numbers you'll see in these screenshots will not appear on the live site and are used for debugging purposes only.

![Stats Page Version 3.0: Home Page](/images//2014/01/1.jpg)

Instead of inundating you with information from every single show on the main page, you will get to see stats for shows from the past month. You'll also notice that on pages that display multiple shows at one time, there is now a way to sort the listing based on show date to your liking.

You'll also note right away that the show dates are now links that will point to a page that only shows you information for that show. This way, if you want to share a show with a friend, you can share a link directly to that show (also works for panelists, guests, hosts and scorekeepers).

If you click on any one of the year links in the navigation menu, you will get a listing of shows for that year, as well as links to a specific month of that year:

![Stats Page Version 3.0: Show Details - Year](/images/2014/01/2.jpg)

When you drill into a specific month of the year or a specific show, you will also have links to point you back to the next level up. The following screenshot of an individual show entry provides links back to the corresponding month and year pages.

![Stats Page Version 3.0: Show Details](/images/2014/01/4.jpg)

For each show, there are two new fields in the table. The first field, in the upper-left corner, will display the location in which the show was taped. For shows that show "**(TBD)**", that means that the information has not been collected and/or has not been entered into the database. The field below the show's host shows information about which panelist's bluff was chosen and which panelist had the correct story. As with the show location field, not all of the information has been collected and/or entered into the database.

With the panelist statistics section of the site moved off on to its own page, I have been able to roll in several new fields without it becoming another wall of text.

![Stats Page Version 3.0: Panelist Overview](/images/2014/01/5.jpg)

<del>For the time being, the score breakdown graph is a carry-over from the current Stats Page and will be revamped to fit the design language of the new site.</del> In the first field, there is a new bit of data: "Appearances with Score". Since I do not have scores available for every show that a panelist has been on, there is a gap between the number of shows that they have been on since the beginning and shows that I have scores for. The "Appearances with Score" value is also used to determine the percentages calculated for where a panelist finished at the end of the Lightning Fill-in-the-Blank round and for the "Average Score" value.

![Stats Page Version 3.0: Panelist Details](/images/2014/01/6.jpg)

On both the panelist overview page and the individual panelist details page, there are two additional fields that provide a summary of the last time a panelist has either won outright and/or tied for first place. The show dates listed are also linked back to the individual show details page. When viewing the individual panelist details page, you'll also get a list of every show that the panelist has been on, excluding repeats and Best Of shows. I am considering adding in the excluded shows to the list and denote them accordingly.

![Stats Page Version 3.0: Guest Overview](/images/2014/01/7.jpg)

The guest, host and scorekeeper pages are each pretty similar in what data is presented on each of the corresponding overview and detail pages and how each are laid out. The only difference is that the guest details page includes guest scores listed for each appearance; while, for obvious reasons, the host and scorekeeper pages do not. Since there have been a couple of exceptions to the "answer two questions correctly to win Carl Kasell's answering machine message" rule, those are flagged on the guest overview and detail pages with an asterisk; and, the show notes will also include information about that exception.

![Stats Page Version 3.0: Host Overview](/images/2014/01/8.jpg)

![Stats Page Version 3.0: Guest Details](/images/2014/01/12.jpg)

The current Wait Wait Stats Page will go offline the night of January 30th and the new Wait Wait Stats Page will go live by the morning of January 31st. The new site will continue to be made available at [wwdt.me/stats](https://wwdt.me/stats).

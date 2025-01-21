---
id: 547
title: 'Shows in Which Panelists Have the Same First Initial'
date: '2016-04-07T08:43:27-08:00'
author: 'Linh Pham'
guid: 'http://blog.wwdt.me/?p=547'
permalink: /2016/04/shows-in-which-panelists-have-the-same-first-initial/
categories: ['Blog Posts']
tags: ['Panelists']
---

Each of the [panelists](https://stats.wwdt.me/panelists) on the panel for the [Wait Wait... Don't Tell Me!](http://waitwait.npr.org) show that aired on [2016-04-02](https://stats.wwdt.me/shows/2016/4/2) shared something in common: all three of their first initials were "A" (Adam, Amy and Alonzo). When my mind latched onto that, I started wondering if this was the first time something like that happened; or, was it a more common occurrence?

So, I opened up my [SQL management tool of choice](http://www.sequelpro.com) and started working out the queries to get the information that I needed.

The first query was to pull in all of the data from the show and panelist related tables and grab the first letter of the panelist names (first initial); then, I had to group the instances of the first initials together and only show the results that have a common panelist first initial count of 3. The query also filtered out any shows that were either repeats or Best Of shows. The latter could spoil the results due to having more than three panelists recorded.

![Getting list of shows where all three panelists have the same first initial](/images/2016/04/Shows-Where-Panelists-Have-Same-First-Initial-Query-1.png)

The resulting output of the query kind of surprised me. Out of the 850 shows that have been taped (again, excluding repeats and Best Of shows), there have only been three instances in which all three panelists had the same first initial. Using that list of show dates, I crafted a simple query to list the names of the panelists for those three shows.

![Getting list of panelists based on previous list of shows](/images/2016/04/Shows-Where-Panelists-Have-Same-First-Initial-Query-2.png)

The first instance was back in [2004-09-04](https://stats.wwdt.me/shows/2004/9/4), in which Roxanne Roberts, Richard Roeper, and Roy Blount, Jr. were on the panel. The next instance happened seven years later on [2011-09-03](https://stats.wwdt.me/shows/2011/9/3), in which Amy Dickinson, Adam Felber, and Alonzo Bodden were on the panel. The same set of panelists then appeared on the [2016-04-02](https://stats.wwdt.me/shows/2016/4/2) show.

While running these queries and getting ready to write this blog post, I wanted to see what the distribution of panelists first initials looked like, and I ran the following query:

![Distribution of Panelists First Initials](/images/2016/04/Panelists-First-Initials.png)

From the results, there are nine panelists with a first initial of "A" (Aamer Haleem, Adam Burke, Adam Felber, Alison Stewart, Alonzo Bodden, Amy Dickinson, Andrea Michaels, Angela Nissel, and Aparna Nancherla), seven with a first initial of "P" (P.J. O'Rourke, Patt Morrison, Paul Provenza, Paula Pell, Paula Poundstone, Peter Grosz, and Peter Sagal), six with a first initial of "M" (Margo Kaufman, Marina Franklin, Maz Jobrani, Mike Birbiglia, Mo Rocca, and Moshe Kasher), five with a first initial of "K" (Karen Grigsby Bates, Keegan-Michael Key, Ken Jennings, Ken Rudin, and Kyrie O'Connor), and five with a first initial of "R" (Reza Aslan, Richard Roeper, Rosie Perez, Roxanne Roberts, and Roy Blount, Jr.).

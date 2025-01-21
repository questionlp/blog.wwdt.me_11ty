---
id: 36
title: '10 June 2012 Sprint: Data Access Code Completed'
date: '2012-06-15T22:33:17-08:00'
author: 'Linh Pham'
guid: 'http://wwdt.me/blog/?p=36'
permalink: /2012/06/10-june-2012-sprint-data-access-code-completed/
image: /images/2012/06/WWDTM-Data-Tests-Sprint-10-Jun-2012.png
categories: ['Blog Posts']
tags: ['Database', 'Development', 'Stats Page']
---

Over the past couple of days, I have been working on completing all of the PHP code required to query the WWDTM Stats Page database. Tonight, at the end of my two week sprint, I have reached that all important milestone and have successfully written a test to make sure it works.

Warning: this following contains a fair amount of programming talk. If you are not a programmer, please ignore the rest of this post ;)

The current version of the WWDTM Stats Page code has grown into a real mess and has become more and more difficult to add new features. The primary goal with version 2.0 is to write almost everything from scratch using proper class objects and breaking up code into manageable modules.

First, I also decided to move to the newer PEAR::MDB2 database access API from the older PEAR::DB package. Next, I wanted to build a new class that uses a Singleton code pattern to eliminate the need to create new database connections for each query and to reduce the amount of redundant code.

I have also decided to not depend on stored procedures as that would allow for easier database query optimization and allows me to possibly change out the underlying database with something different that may not support stored procedures.<!--more-->

While writing out the new data access code, I simultaneously wrote out various unit tests and testing scripts. The latest test script returns show information for a specific year. This test script will be the basis for building out the presentation layer, as the new site will only show the information for the requested year by default. Why? Showing information for every single show that I have in the database has caused the current page to be exceeding long and large to download. On the new site, the option to view all years's information will be available, but it won't be the default.

Below is a snippet of the test script's output. Please note that there is very little formatting and no attempt to make it easy to read. The point to make sure all of the requested data is there and no errors are generated.

![Test script output from querying data from the Wait Wait Stats database](/images/2012/06/WWDTM-Data-Tests-Sprint-10-Jun-2012.png)

For my next sprints, I will be focusing on the first stab at the presentation layer. My hope is to have something presentable as an early preview by the night that I'm in Chicago for a WWDTM taping in late July.

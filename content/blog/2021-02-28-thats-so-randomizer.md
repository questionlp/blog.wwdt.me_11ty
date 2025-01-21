---
id: 2248
title: "That's So... Randomizer"
date: '2021-02-28T21:13:01-08:00'
author: 'Linh Pham'
guid: 'https://blog.wwdt.me/?p=2248'
permalink: /2021/02/thats-so-randomizer/
categories: ['Blog Posts']
tags: ['Development', 'Stats Page', 'Web Development']
---

One feature for the [Stats Page](https://stats.wwdt.me/) that had been floating around in my mind since I started developing Version 4 was a way to get a random show that I could just queue up and listen. I finally had a couple of hours to build out the logic to add not only a randomizer for shows, but also for guests, hosts, locations and panelists.

What made easy to implement across the board was being able to use MySQL/MariaDB's [`RAND()`](https://mariadb.com/kb/en/rand/) function in queries. Otherwise, I would have needed to pull down a list of valid IDs for each respective table and use Python's RNG to pick one at random. While that result in better randomization over the long run, but it would add to the processing time. I wanted it to be as quick and efficient as possible from the application point of view. The `RAND()` function in MySQL/MariaDB may not scale all too well for tables that have record counts in the tens of thousands. Of the tables in scope, the table with the most number of records is still in the low thousands.

From the front-end perspective, I added a "Random Show" icon in the navigation bar and item in the slide-out navigation menu for devices with smaller screens. There is also a link to load a random show from the main "Shows" page. The randomizer will only include shows that have a show date that is less than or equal to the current date. This should prevent future shows from being selected.

![Random Show link in the navigation bar](/images/2021/02/WWDTM-Stats-Page-Random-Show-Nav-Bar-Item.png)

![Random Show link in the slide-out navigation](/images/2021/02/WWDTM-Stats-Page-Random-Show-Nav-Menu-Item.png)

![Random Show link in the Shows section](/images/2021/02/WWDTM-Stats-Page-Random-Link-Shows.png)

To get a random guest, host, location, panelist or scorekeeper, there is a link on their respective main section page.

![Random Guest link in the Guests section](/images/2021/02/WWDTM-Stats-Page-Random-Link-Guests.png)

![Random Host link in the Hosts section](/images/2021/02/WWDTM-Stats-Page-Random-Link-Hosts.png)

![Random Panelist link in the Panelists section](/images/2021/02/WWDTM-Stats-Page-Random-Link-Panelists.png)

![Random Scorekeeper link in the Scorekeepers section](/images/2021/02/WWDTM-Stats-Page-Random-Link-Scorekeepers.png)

I am looking at adding the feature to get a random show from a specific year and possibly adding randomizer endpoints to the [Stats API](https://api.wwdt.me/).

In addition to the new randomizer feature, the Stats Page now has rudimentary 404 handling and some of the dependent packages have been updated to keep up with security updates.

As always, the [source code](https://github.com/questionlp/stats.wwdt.me) for the Stats Page is available on GitHub and is published under the terms of [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

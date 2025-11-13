---
date:
    created: 2025-09-15T17:30:00Z
categories:
    - Explainers
authors:
    - fria
tags:
    - Gaming
schema_type: BackgroundNewsArticle
description: Video games are an incredibly popular hobby, but they can be a privacy nightmare. How can we protect our privacy while gaming?
preview:
  cover: 
---

# How to Game Privately

The video game industry was estimated to be worth about [298.98 billion USD](https://www.grandviewresearch.com/industry-analysis/video-game-market) in 2024. [205.1 million Americans](https://www.theesa.com/annual-esa-study-reveals-video-games-universal-appeal-across-generations/) play video games (there are over 342 million Americans). Needless to say, gaming is a regular part of many of our lives: we use games to socialize, to relax after a hard day at work, to challenge ourselves an refine our skills. It's fair to say that gaming is an essential part of many of our lives.

It's a shame then that so many popular games are proprietary software, contain [restrictive DRM](https://www.gog.com/blog/what-exactly-is-drm-in-video-games-and-why-should-you-care/) software, invasive [anti-cheat software](https://levvvel.com/games-with-kernel-level-anti-cheat-software/), and extensive [data collection](https://esportslawyers.ca/how-do-video-games-collect-and-use-data). Many even require installing a dedicated launcher just for that game, require an account, and might require installing other unwanted programs on your computer. Fortunately, there are companies looking to improve the way things are done and there are things you can do as an individual to protect your privacy and keey your hobby.<!-- more -->

## DRM

Computers are amazing things, they can make perfect copies of data as many times as we need them to. In fact, it's essential to how they work. But this presents a problem: how do you stop people from copying your work and giving it out for free instead of paying you for it?

### Early Copy Protection

An early instance of copy protection for consumer software came about from none other than [Microsoft](https://www.filfre.net/2016/01/a-pirates-life-for-me-part-3-case-studies-in-copy-protection/) (who else) for their game *[Microsoft Adventure](https://www.pcjs.org/software/pcx86/game/microsoft/adventure/)*, now playable in your browser. 

The game exploited how floppy disks worked to protect the game from being copied; the device you use to copy won't even be able navigate the sectors on the disk.

Developers concocted their own home-grown schemes for copy protection for a while. Some games would eschew software or hardware copy protection for what were called "[feelies](https://en.wikipedia.org/wiki/Feelie)"; physical items that came with the game like a book that would need to be used to answer a question or solve a puzzle before the game can be played.

During the 80s, third party copy protection schemes started to become prominent, such as [RapidLok](https://diskpreservation.rittwage.com/dp.php?pg=rapidlok) and [PirateBusters](https://diskpreservation.rittwage.com/dp.php?pg=piratebusters). It's interesting to note that these early attempts weren't huge corporate operations; they were mostly just a few developers selling the copy protection schemes they'd come up with for a quick buck. In the interview I linked above, Brian R. Niessen, one of the original three creators of PirateBusters, describes the income of their operation:

>It paid the rent and bought Slurpees at 7-11, but none of us became rich over
it.

Nowadays, DRM companies like Denuvo charge companies [thousands of dollars](https://www.thegamer.com/crytek-paid-denuvo-crysis-remastered-leak/) for their software.

### The Current Landscape

These days, DRM is so prevalent that we've mostly come to accept it. App Store apps contain [DRM](https://en.wikipedia.org/wiki/FairPlay), most games come with some kind of third-party DRM like [Denuvo](https://irdeto.com/video-games), and it's essentially impossible to watch a movie or TV show DRM-free.

As the landscape has evolved, DRM solutions have become much more privacy-invasive. Denuvo, for example, will collect [uniquely identifying hardware information](https://connorjaydunn.github.io/blog/posts/denuvo-analysis/) and send it off to Denuvo's servers. And yes, of course it runs with kernel privileges in order to do this.

Another insidious development is the advent of always-on DRM. This type of DRM requires you to constantly be connected to a server in order to be allowed to play the game. This is especially insidious for single-player games like *[Diablo III](https://www.defectivebydesign.org/diablo3)* or *[Sim City](https://www.gamesindustry.biz/always-online-simcity-burns-to-the-ground-10-years-ago-this-month)*, preventing you from playing them offline.

Even ignoring the problems with availability and [game preservation](https://www.dlcompare.com/gaming-news/the-crew-game-that-sparked-the-stop-killing-game-movement-56928), a constant connection means constant data transmission as well. At minimum, the developer could know exactly when you're playing and when you're not, your IP address, and whatever is in the packets they keep sending to their server. Who knows what else is sent, modern games can be [data collection nightmares](https://www.sciencedirect.com/science/article/abs/pii/S187595212200060X).

### What You Can Do

Here's what you shouldn't do: DO NOT DOWNLOAD CRACKED GAMES. Cracked games you download off the internet often contain [malware](https://www.forbes.com/sites/zakdoffman/2025/08/19/microsoft-windows-warning-stop-playing-these-free-pc-games/). You should always donwload your software from an official source.

Luckily, it's possible to buy and play many games without DRM. Stores like [itch.io](https://itch.io) and [GOG](https://www.gog.com/en/) offer extensive catalogues of DRM-free games to purchase. Plus, you'll be supporting the developers by purchasing their game.

## Anti-Cheat

Cheating is a real problem in multiplayer games. [Thousands of players](https://www.ubisoft.com/en-us/game/rainbow-six/siege/news-updates/xvEzvsuxW34DS4WPs7zWA/r6-shieldguard---y10s3-update), even top players, use cheats. While it may be fun to stomp a lobby, it's not fun if you're on the receiving end (plus the whole point of a competitive game is to improve your skill, so cheaters also rob themselves of a large part of the appeal).

In order to combat this problem and stop cheaters from ruining the experience for everyone, most multiplayer games you'll find nowadays use some form of anti-cheat software.

Anti-cheat software behaves similarly to an [anti-virus solution](https://cyberpedia.reasonlabs.com/EN/anti-cheat%20protection.html): it uses signatures, behavioral analysis, heuristics, and runs continuously in the background while you play your game.

### Kernel Privileges

Since anti-cheat needs to be able to detect modified systems, many solutions run with kernel privileges. This leaves users vulnerable to [malware](https://www.trendmicro.com/en_us/research/22/h/ransomware-actor-abuses-genshin-impact-anti-cheat-driver-to-kill-antivirus.html) that exploits this low-level access to wreak havok on your system.

The reason for the switch to kernel-level anti-cheat is the so-called "arms race" between cheat developers and anti-cheat software. Cheat software can just bypass anti-cheat by simply hiding deeper and deeper in the system, outside of the privileges of the anti-cheat.

### Always Running

Some anti-cheat software runs [continuously](https://www.reddit.com/r/VALORANT/comments/fzxdl7/comment/fn6yqbe/) in the background. The stated reason is it needs to load the driver at system startup so that cheat software doesn't load first and bypass the anti-cheat.

Any anti-cheat software running a kernel-mode driver continuously can open you up to system crashes and exploits at all times, not just when the game is running. It also essentially gives the anti-cheat carte blanche access to your system, so you just have to trust that they're not sending sensitive data off constantly.

### What You Can Do

Fortunately, operating system developers are starting to recognize the problems with kernel-level drivers. macOS is doing away with kernel extensions in favor of [System Extensions](https://developer.apple.com/documentation/systemextensions), which serve the same purpose as kernel extensions but they run in userspace instead.

This has allowed anti-cheat on macOS that simply comes as [part of the game client](https://www.leagueoflegends.com/en-us/news/dev/dev-vanguard-x-lol-retrospective/#:~:text=t-,his%20won%E2%80%99t%20require%20any%20extra%20installs%E2%80%94the%20security%20is%20%E2%80%9Cembedded%E2%80%9D%20right%20into%20the%20game%20client,-.%20Further) and runs without kernel privileges.

Windows as well has put a lot off effort into new software and hardware security features designed to ensure the security of the operating system. Anti-cheat developers are looking to use these more and more, and move their software [fully out of the kernel](https://playvalorant.com/en-us/news/game-updates/vanguard-x-valorant/#:~:text=kernel%20level%20anti%2Dcheats%20will%20no%20longer%20be%20necessary%20to%20secure%20your%20games). It's taken Windows a bit longer to get there but we're seeing great progress. Eventually, Windows will move third party software [out of the kernel](https://blogs.windows.com/windowsexperience/2025/06/26/the-windows-resiliency-initiative-building-resilience-for-a-future-ready-enterprise/).

In the meantime, it might be beneficial to [research which games](https://levvvel.com/games-with-kernel-level-anti-cheat-software/) have kernel-level anticheat still and avoid them until more progress is made.

## Data Collection

A lot of games these days collect [troves of data](https://sci-hub.se/https://doi.org/10.1016/j.entcom.2022.100537) on their users. Behavioral data, biometric data, data on when you play, where you play, and how you play; in some games, almost everything is being collected and analyzed in order to maximize profit.

### Play Time

Many games collect information about when you log in, how long you play, etc. Many even display this openly, such as Steam's playtime display in your game library.

### Gameplay Data

While this can seem inocuous at first, data collected about how you play the game can be etremely fine-grained, such as how many of a specific enemy were killed, your exact keyboard and mouse inputs etc. As input devices become more and more advanced, such as the advent of VR headsets, collection of movement data and even eye movement around the screen is on the table.

### Communications

Most multiplayer games contain some form of in-game text and voice chat, and it's never end-to-end encrypted. You can expect your chats to be kept on file as long as the game developers see fit, and used for whatever purposes they want.

### Sensor Data

These days, many devices we game on such as our phones have cameras, microphones, accelerometers, gyroscopes, and more. Fortunately, especially on mobile, most of these sensors are protected behind permissions. But some still typically aren't, such as accelerometer and gyroscope data. This can reveal quite a lot about you, like your physical movements, step counts, or even [audio](https://blackhat.com/docs/eu-14/materials/eu-14-Nakibly-Gyrophone-Eavesdropping-Using-A-Gyroscope-wp.pdf).

Hopefully we see an expansion of permissions on all our devices so that data collection like this isn't possible.

### Personal Data

On top of the new behavioral data collection capabilities, the old standbys are still here: email, name, address, payment information, and other data are often collected for payment purposes or during signup for an account. This data can be used to link your data to your real identity, and can pose a risk of exposing your data in a data breach.

### Inferences Based on the Collected Data

Game companies don't want all that data to go to waste. Increasingly, games will try to use your behavioral data to make inferences about your mood, financial status, spending habits, gender, etc to try and get you to spend more on their game.

They will even use in-game behavioral data to make psychological determinations about you in real life. Metrics such as tendency toward addiction, how "power hungry" you are, even the [Big Five](https://en.wikipedia.org/wiki/Big_Five_personality_traits) personality traits of openness, conscientiousness, extraversion, agreeableness, and neuroticism, can all be determined using in-game actions many times. Research has even shown that you can generate a valid personality profile simply from gameplay data.

### What You Can Do

This one is tough: any time a game is allowed to communicate to a server, there's a possiblity it transmits such data.

#### Avoid Accounts

The most important thing to do is avoid games that require an account to play. This excludes many free-to-play games of course.

Any time an account is required to play a game, your activity can easily be correlated as soon as you log in, even on a different machine. It also makes it easier to correleate your activity with other online activity and your real identity, since they tend to ask for an email, phone number, name, or other personally identifiable info.

#### Utilize Permissions

Give games the minimum permissions you can. If they ask for your location, camera, or microphone, deny it. Operating sytems like [GrapheneOS](https://grapheneos.org/features) greatly expand the permissions and allow you to block more items like sensors.

Of course, if your hardware doesn't even support certain sensors, then it's impossible for the game to use them against you. A system without GPS, an accelerometer, a gyroscope, a camera, or a microphone won't be able to glean much.

Also, be careful what input hardware you use: VR may be fun, but VR games are able to collect very detailed positional data about you as you play. A simple controller is far less intrusive, albeit less immersive also.

### Run Games On a Separate Machine

If the games you want to run are not properly sandboxed, you can run your games on a completely separate system that you only use for games. This can be another PC or even a console: just make sure you are only using it for games and nothing else.


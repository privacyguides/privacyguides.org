---
date:
    created: 2025-09-30T16:30:00Z
categories:
    - Explainers
authors:
    - fria
tags:
    - Privacy Enhancing Technologies
schema_type: BackgroundNewsArticle
description: Differential privacy is a mathematically rigorous framework for adding a controlled amount of noise to a dataset so that no individual can be reidentified. Learn how this technology is being implemented to protect you.
preview:
  cover: blog/assets/images/differential-privacy/cover.webp
---
# What is Differential Privacy?

!["Differential Privacy" text with a series of ones and zeros being obscured with a blur filter](../assets/images/differential-privacy/cover.webp)
<small aria-hidden="true">Image: Privacy Guides / Jordan Warne</small>

Is it possible to collect data from a large group of people but protect each individual's privacy? In this entry of my series on [privacy-enhancing technologies](../tags.md/#tag:privacy-enhancing-technologies), we'll discuss differential privacy and how it can do just that.<!-- more -->

## Problem

It's useful to collect data from a large group of people. You can see trends in a population. But it requires a lot of individual people to give up personally identifiable information. Even things that seem innocuous like your gender can help identify you.

Latanya Sweeney in a [paper](https://dataprivacylab.org/projects/identifiability/paper1.pdf) from 2000 used U.S. Census data to try and re-identify people solely based on the metrics available to her. She found that 87% of Americans could be identified based on only 3 metrics: ZIP code, date of birth, and sex.

Obviously, being able to identify individuals based on publicly available data is a huge privacy issue.

## History

### Before Differential Privacy

Being able to collect aggregate data is essential for research. It's what the U.S. Census does every 10 years.

Usually we're more interested in the data as a whole and not data of individual people as it can show trends and overall patterns in groups of people. However, in order to get that data we must collect it from individuals.

It was thought at first that simply [removing names and other obviously identifying details](https://simons.berkeley.edu/news/differential-privacy-issues-policymakers#:~:text=Prior%20to%20the%20line%20of%20research%20that%20led%20to%20differential%20privacy%2C%20it%20was%20widely%20believed%20that%20anonymizing%20data%20was%20a%20relatively%20straightforward%20and%20sufficient%20solution%20to%20the%20privacy%20challenge.%20Statistical%20aggregates%20could%20be%20released%2C%20many%20people%20thought%2C%20without%20revealing%20underlying%20personally%20identifiable%20data.%20Data%20sets%20could%20be%20released%20to%20researchers%20scrubbed%20of%20names%2C%20but%20otherwise%20with%20rich%20individual%20information%2C%20and%20were%20thought%20to%20have%20been%20anonymized.) from the data was enough to prevent re-identification, but [Latanya Sweeney](https://latanyasweeney.org/JLME.pdf) (a name that will pop up a few more times) proved in 1997 that even without names, a significant portion of individuals can be re-identified from a dataset by cross-referencing external data.

Previous attempts at anonymizing data have relied on been highly vulnerable to re-identification attacks.

#### AOL Search Log Release

A famous example is the AOL search log release. AOL had been logging its users searches for research purposes. When they released the data, they only replaced the users' real names with an identifier. Researchers were able to identify [user 4417749](https://archive.nytimes.com/www.nytimes.com/learning/teachers/featured_articles/20060810thursday.html) as Thelma Arnold based on the identifying details of her searches.

#### Strava Heatmap Incident

In 2018, the fitness app Strava announced a major update to its heatmap, showing the the workout patterns of users of fitness trackers like Fitbit.

Analyst [Nathan Ruser](https://x.com/Nrg8000/status/957318498102865920) indicated that these patterns can reveal military bases and troop movement patterns. This is obviously a huge op-sec problem and can endanger the lives of troops.

It was also possible to [deanonymize](https://steveloughran.blogspot.com/2018/01/advanced-denanonymization-through-strava.html) individual users in some circumstances.

#### Randomized Response

One of the earliest ideas for anonymizing data was [randomized response](https://uvammm.github.io/docs/randomizedresponse.pdf), first introduced all the way back in 1965 in a paper by Stanley L. Warner. The idea behind it is quite clever.

For certain questions like "have you committed tax fraud?" respondents will likely be hesitant to answer truthfully. The solution? Have the respondent flip a coin. If the coin is tails, answer yes. If the coin lands on heads, answer truthfully.

| Respondent | Answer | Coin Flip (not included in the actual dataset just here for illustration) |
| --- | --- | --- |
| 1 | Yes | Tails (Answer Yes) |
| 2 | No | Heads (Answer Truthfully) |
| 3 | Yes | Tails (Answer Yes) |
| 4 | Yes | Tails (Answer Yes) |
| 5| No | Heads (Answer Truthfully) |

Because we know the exact probability that a "Yes" answer is fake, 50%, we can remove it and give a rough estimate of how many respondents answered "Yes" truthfully.

Randomized Response would lay the groundwork for differential privacy, but it wouldn't truly be realized for many decades.

#### Unrelated Question Randomized Response

A variation used later in a [paper](https://www.jstor.org/stable/2283636) by Greenberg et al. called **unrelated question randomized response** would present each respondent with either a sensitive question or a banal question like "is your birthday in January?" to increase the likelihood of people answering honestly, since the researcher doesn't know which question was asked.

| Respondent | Question (not visible to researcher) | Answer |
| --- | --- | --- |
| 1 | Have you ever committed tax evasion? | No |
| 2 | Is your birthday in January? | Yes |
| 3 | Is your birthday in January? | No |
| 4 | Have you ever committed tax evasion? | Yes |
| 5 | Have you ever committed tax evasion? | No |

#### k-Anonymity

Latanya Sweeney and Pierangela Samarati introduced [k-anonymity](https://dataprivacylab.org/dataprivacy/projects/kanonymity/paper3.pdf) to the world back in 1998.

It's interesting that even all the way back in 1998 concerns constant data collection were already relevant.

> Most actions in daily life are recorded on some computer somewhere. That information in turn is often shared, exchanged, and sold. Many people may not care that the local grocer keeps track of which items they purchase, but shared information can be quite sensitive or damaging to individuals and organizations. Improper disclosure of medical information, financial information or matters of national security can have alarming ramifications, and many abuses have been cited.

In a dataset, you might have removed names and other obviously identifying information, but there might be other data such as birthday, ZIP code, etc., that might be unique to one person in the dataset. If someone were to cross-reference this data with outside data, it could be possible to deanonymize individuals.

k-anonymity means that for each row, at least k-1 other rows are identical. So for a k of 2, at least one other row is identical to each row.

##### Generalization

This is achieved through a few techniques, one of which is generalization. Generalization is reducing the precision of data so that it's not as unique.

For example, instead of recording an exact age, you might give a range like 20-30. You've probably noticed this on surveys you've taken before. Data like this that's not directly identifiable but could be used to re-identify someone is referred to as *quasi-identifiers*.

##### Suppression

Sometimes even with generalization, you might have outliers that don't satisfy the k-anonymity requirements.

In these cases, you can simply remove the row entirely.

##### Attacks on k-Anonymity

k-anonymity has been [demonstrated](https://www.usenix.org/system/files/sec22-cohen.pdf) to not prevent re-identification of individuals despite the data in a dataset being properly k-anonymized by "statistical experts".

Researchers were able to deanonymize 3 students from a k-anonymized dataset from Harvard and MIT's EdX platform by cross-referencing data from LinkedIn, putting potentially thousands of students at risk of re-identification.

### Dawn of Differential Privacy

Most of the concepts I write about seem to come from the 70s and 80s, but differential privacy is a relatively new concept. It was first introduced in a paper from 2006 called [*Calibrating Noise to Sensitivity in Private Data Analysis*](https://desfontain.es/PDFs/PhD/CalibratingNoiseToSensitivityInPrivateDataAnalysis.pdf).

The paper introduces the idea of adding noise to data to achieve privacy, similar to randomized response. However, differential privacy is much more mathematically rigorous and provable.

Of course, adding noise to the dataset reduces its accuracy. Ɛ defines the amount of noise added to the dataset, with a small Ɛ meaning more privacy but less accurate data and vice versa. It's also referred to as the "privacy loss parameter" or "privacy budget".

#### Central Differential Privacy

This early form of differential privacy relied on adding noise to the data *after* it was already collected, meaning you still have to trust a central authority with the raw data.

## Google RAPPOR

In 2014, Google introduced [Randomized Aggregatable Privacy-Preserving Ordinal Response](https://arxiv.org/pdf/1407.6981) (RAPPOR), their [open source](https://github.com/google/rappor) implementation of differential privacy.

Google RAPPOR implements and builds on previous techniques such as randomized response and adds significant improvements on top.

### Local Differential Privacy

In Google's implementation, noise is added to data on-device before it's sent off to any server. This removes the need to trust the central authority to handle your raw data, an important step in achieving truly anonymous data collection.

### Bloom Filters

Google RAPPOR makes use of a clever technique called bloom filters that saves space and improves privacy.

Bloom filters work by starting out with an array of all 0's

`[0, 0, 0, 0, 0, 0, 0, 0, 0]`

Then, you run data such as the word "apple" through a hashing algorithm, which will give 1's in specific positions, say position 1, 3, and 5.

`[0, 1, 0, 1, 0, 1, 0, 0, 0]`

When you want to check if data is present, you run the data through the hashing algorithm and check if the corresponding positions are 1's. If they are, the data *might* be present (other data might have flipped those same bits at some point). If any of the 1's are 0's, then you know for sure that the data is not in the set.

### Permanent Randomized Response

A randomization step is performed flipping some of the bits randomly. This response is then "memoized" so that the same random values are used for future reporting. This protects against an "averaging" attack where an attacker sees multiple responses from the same user and can eventually recover the real value by averaging them out over time.

### Instantaneous Randomized Response

On top of the permanent randomized data, another randomization step is performed. This time, different randomness is added on top of the permanent randomness so that every response sent is unique. This prevents an attacker from determining a user from seeing the same randomized pattern over and over again.

Both the permanent and instantaneous randomized response steps can be fine-tuned to for the desired privacy.

### Chrome

Google first used differential privacy in their Chrome browser for detection of [malware](https://blog.chromium.org/2014/10/learning-statistics-with-privacy-aided.html).

Differential privacy is also used in Google's [Privacy Sandbox](https://privacysandbox.google.com/private-advertising/aggregation-service/privacy-protection-report-strategy).

### Maps

Google Maps uses DP for its [place busyness](https://safety.google/privacy/data/#:~:text=To%20offer%20features%20like%20place%20busyness%20in%20Maps%2C%20we%20apply%20an%20advanced%20anonymization%20technology%20called%20differential%20privacy%20that%20adds%20noise%20to%20your%20information%20so%20it%20can%E2%80%99t%20be%20used%20to%20personally%20identify%20you.) feature, allowing Maps to show you how busy an area is without revealing the movements of individual people.

### Google Fi

[Google Fi](https://opensource.googleblog.com/2019/09/enabling-developers-and-organizations.html) uses differential privacy as well to improve the service.

## OpenDP

[OpenDP](https://opendp.org) is a community effort to build open source and trustworthy tools for differential privacy. Their members consist of academics from prestigious universities like Harvard and employees at companies like Microsoft.

There's been an effort from everyone to make differential privacy implementations open source, which is a breath of fresh air from companies that typically stick to closed source for their products.

## Apple

[Apple](https://www.apple.com/privacy/docs/Differential_Privacy_Overview.pdf) uses local differential privacy for much of its services, similar to what Google does. They add noise before sending any data off device, enabling them to collect aggregate data without harming the privacy of any individual user.

They limit the number of contributions any one user can make via a *privacy budget* (this is the same as Ɛ) so you won't have to worry about your own contributions being averaged out over time and revealing your own trends.

This allows them to find new words that people use that aren't included by default in the dictionary, or find which emojis are the most popular.

Some of the things they use differential privacy for include

- QuickType suggestions
- Emoji suggestions
- Lookup Hints
- Safari Energy Draining Domains
- Safari Autoplay Intent Detection
- Safari Crashing Domains
- Health Type Usage

That's just based on their initial white paper, they've likely increased their use of DP since then.

### Sketch Matrix

Apple uses a similar method to Google, with a matrix initialized with all zeros. The input for the matrix is encoded with the SHA-256 hashing algorithm, and then bits are flipped randomly at a probability dependent on the epsilon value.

Apple only sends a random row from this matrix instead of the entire thing in order to stay within their privacy budget.

### See What's Sent

You can see data sent with differential privacy in iOS under Settings > Privacy > Analytics > Analytics Data, it will begin with `DifferentialPrivacy`. On macOS, you can see these logs in the Console.

## U.S. Census

Differential privacy isn't just used by big corporations, in 2020 famously the U.S. Census used DP to protect the data of U.S. citizens for the first time.

As a massive collection of data from numerous U.S. citizens, it's important for the census bureau to protect the privacy of census participants while still preserving the overall aggregate data.

### Impetus

Since the 90s, the U.S. Census used a less formal injection of statistical noise into their data, which they did all the way through 2010.

After the 2010 census, the bureau tried to [re-identify individuals](https://www2.census.gov/library/publications/decennial/2020/census-briefs/c2020br-03.pdf) in the census data.

>The experiment resulted in reconstruction of a dataset of more than 300 million individuals. The Census Bureau then used that dataset to match the reconstructed records to four commercially available data sources, to attempt to identify the age, sex, race, and Hispanic origin of people in more than six million blocks in the 2010 Census.

Considering 309 million people lived in the U.S. in 2010, that's a devastating breach of personal privacy. Clearly more formal frameworks for protecting the privacy of individuals were needed.

>Nationwide, roughly 150 million individuals—almost one-half of the population, have a unique combination of sex and single year of age at the block level.

They could keep adding noise until these attacks are impossible, but that would make the data nigh unusable. Instead, differential privacy offers a mathematically rigorous method to protect the data from future re-identification attacks without ruining the data by adding too much noise. They can be sure thanks to the mathematical guarantees of DP.

## DPrio

Mozilla has been constantly working to make their telemetry more private over the years. Firefox uses [Prio](https://blog.mozilla.org/security/2019/06/06/next-steps-in-privacy-preserving-telemetry-with-prio/), a [Distributed Aggregation Protocol](https://datatracker.ietf.org/doc/html/draft-ietf-ppm-dap)-based telemetry system. It uses Multi-Party Computation to split the processing of user data between multiple parties.

To accomplish this, [Mozilla](https://blog.mozilla.org/en/firefox/partnership-ohttp-prio/) partnered with [Divvi Up](https://divviup.org/blog/divvi-up-in-firefox/) as their DAP provider, and [Fastly](https://www.fastly.com/blog/firefox-fastly-take-another-step-toward-security-upgrade) as their OHTTP provider. OHTTP acts as a multi-hop proxy to separate traffic between two parties when making a connection: neither Mozilla nor Fastly will know both who you are and what you're connecting to.

In 2023 researchers from Mozilla also conducted research into making Prio differentially private. The so-named "[DPrio](https://petsymposium.org/popets/2023/popets-2023-0086.pdf)" would combine multi-party computation, OHTTP, and differential privacy in a very impressive display of privacy protection. Unfortunately I couldn't find any evidence to suggest that DPrio has been implemented, but something to keep a lookout for in the future.

## Future of Differential Privacy

Differential privacy unlocks the potential for data collection with minimal risk of data exposure for any individual. Already, DP has allowed for software developers to improve their software, for new possibilities in research in the health sector and in government organizations.

Adoption of scientifically and mathematically rigorous methods of data collection allows for organizations to collect aggregate data will allow for increased public trust in organizations and subsequently greater potential for research that will result in improvements to our everyday lives.

I think for there to be more public trust there needs to be a bigger public outreach. That's my goal with this series, I'm hoping to at least increase awareness of some of the technology being deployed to protect your data, especially since so much of the news we hear is negative. Armed with the knowledge of what's available, we can also demand companies and organizations use these tools if they aren't already.

It's heartening to see the level of openness and collaboration in the research. You can see a clear improvement over time as each paper takes the previous research and builds on it. I wish we saw the same attitude with all software.

## Further Research

Any programmers interested in learning how to implement differential privacy can check out the book *[Programming Differential Privacy](https://programming-dp.com)* to see Python examples.

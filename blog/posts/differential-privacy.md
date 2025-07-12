---
date:
    created: 2025-07-01T17:30:00Z
categories:
    - Explainers
authors:
    - fria
tags:
    - Privacy Enhancing Technologies
    - Differential Privacy
license: BY-SA
schema_type: BackgroundNewsArticle
description: |
  Privacy Pass is a new way to privately authenticate with a service. Let's look at how it could change the way we use services.
---
# Privacy-Enhancing Technologies Series: Differential Privacy

Is it possible to collect data from a large group of people but protect each individual's privacy? In this entry of my series on privacy-enhancing technologies, we'll discuss differential privacy and how it can do just that.<!-- more -->

## Problem

It's useful to collect data from a large group of people. You can see trends in a population. But it requires a lot of individual people to give up personally identifiable information. Even things that seem inocuous like your gender can help identify you.

Latanya Sweeney in a [paper](https://dataprivacylab.org/projects/identifiability/paper1.pdf) from 2000 used U.S. Census data to try and re-identify people solely based on the metrics available to her. She found that 87% of Americans could be identified based on only 3 metrics: ZIP code, date of birth, and sex.

Obviously, being able to identify individuals based on publicly available data is a huge privacy issue.

## History

### Before Differential Privacy

Being able to collect aggregate data is essential for research. It's what the U.S. Census does every 10 years.

Usually we're more interested in the data as a whole and not data of individual people as it can show trends and overall patterns in groups of people. However, in order to get that data we must collect it from individuals.

It was thought at first that simply r[emoving names and other obviously identifying details](https://simons.berkeley.edu/news/differential-privacy-issues-policymakers#:~:text=Prior%20to%20the%20line%20of%20research%20that%20led%20to%20differential%20privacy%2C%20it%20was%20widely%20believed%20that%20anonymizing%20data%20was%20a%20relatively%20straightforward%20and%20sufficient%20solution%20to%20the%20privacy%20challenge.%20Statistical%20aggregates%20could%20be%20released%2C%20many%20people%20thought%2C%20without%20revealing%20underlying%20personally%20identifiable%20data.%20Data%20sets%20could%20be%20released%20to%20researchers%20scrubbed%20of%20names%2C%20but%20otherwise%20with%20rich%20individual%20information%2C%20and%20were%20thought%20to%20have%20been%20anonymized.) from the data was enough to prevent re-identification, but [Latanya Sweeney](https://latanyasweeney.org/JLME.pdf) (a name that will pop up a few more times) proved in 1997 that even without names, a significant portion of individuals can be re-identified from a dataset by cross-referencing external data.

Previous attempts at anonymizing data have relied on been highly vulnerable to reidentification attacks.

#### AOL Search Log Release

A famous example is the AOL search log release. AOL had been logging its users searches for research purposes. When they released the data, they only replaced the users' real names with an identifier. Researchers were able to identify [user 4417749](https://archive.nytimes.com/www.nytimes.com/learning/teachers/featured_articles/20060810thursday.html) as Thelma Arnold based on the identifying details of her searches.

#### Strava Heatmap Incident

In 2018, the fitness app Strava announced a major update to its heatmap, showing the the workout patterns of users of fitness trackers like Fitbit.

Analyst [Nathan Ruser](https://x.com/Nrg8000/status/957318498102865920) indicated that these patterns can reveal military bases and troop movement patterns. This is obviously a huge op-sec problem and can endanger the lives of troops.

It was also possible to [deanonymize](https://steveloughran.blogspot.com/2018/01/advanced-denanonymization-through-strava.html) individual users in some circumstances.

#### Randomized Response

One of the earliest ideas for anonymizing data was [randomized response](https://uvammm.github.io/docs/randomizedresponse.pdf), first introduced all the way back in 1965 in a paper by Stanley L. Warner. The idea behind it is quite clever.

For certain questions like "have you committed tax fraud?", respondents will likely be hesitant to answer truthfully. The solution? Have the respondent flip a coin. If the coin is tails, answer yes. If the coin lands on heads, answer truthfully.

Have you committed tax fraud?

| Respondent | Answer | Coin Flip (not included in the actual dataset just here for illustration) |
| --- | --- |
| 1 | Yes | Tails (Answer Yes) |
| 2 | No | Heads (Answer Truthfully) |
| 3 | Yes | Heads (Answer Truthfully) |
| 4 | Yes | Tails (Answer Yes) |
| 5 | No | Heads (Answer Truthfully) |

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

>Most actions in daily life are recorded on some computer somewhere That information in turn is often shared exc hanged and sold. Many people may not care that the local grocer keeps track of which items they purchase but shared information can be quite damaging to individuals or organizations. Improp er disclosure of medical information financial information or matters of national security can have alarming ramications and many abuses have been cited.

In a dataset, you might have removed names and other obviously identifying information, but there might be other data such as birthday, ZIP code, etc that might be unique to one person in the dataset. If someone were to crossreference this data with outside data, it could be possible to deanonymize individuals.

k-anonymity means that for each row, at least k-1 other rows are identical. So for a k of 2, at least one other row is identical to each row.

##### Generalization

This is achieved through a few techniques, one of which is generalization. Generalization is reducing the precision of data so that it's not as unique.

For example, instead of recording an exact age, you might give a range like 20-30. You've probably noticed this on surveys you've taken before. Data like this that's not directly identifiable but could be used to re-identify someone is refered to as *quasi-identifiers*.

##### Suppression

Sometimes even with generalization, you might have outliers that don't satisfy the k-anonymity requirements.

In these cases, you can simply remove the row entirely.

#### Problems with k-anonymity



### Dawn of Differential Privacy

Most of the concepts I write about seem to come from the 70's and 80's, but differential privacy is a relatively new concept. It was first introduced in a paper from 2006 called [*Calibrating Noise to Sensitivity in Private Data Analysis*](https://desfontain.es/PDFs/PhD/CalibratingNoiseToSensitivityInPrivateDataAnalysis.pdf).

The paper introduces the idea of adding noise to data to achieve privacy. Of course, adding noise to the dataset reduces its accuracy. Ɛ defines the amount of noise added to the dataset, with a small Ɛ meaning more privacy but less accurate data and vice versa. It's also referred to as the "privacy loss parameter".

Importantly, differential privacy adds noise *before* it's analyzed. k-anonymity relies on trying to anonymize data *after* it's collected, so it leaves the possibility that not enough parameters are removed to ensure each individual cannot be identified.

### Google RAPPOR

In 2014, Google introduced [Randomized Aggregatable Privacy-Preserving Ordinal Response](https://arxiv.org/pdf/1407.6981) (RAPPOR), their [open source](https://github.com/google/rappor) implementation of differential privacy, with a few improvements.




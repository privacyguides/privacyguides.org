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

Most of the concepts I write about seem to come from the 70's and 80's, but differential privacy is a relatively new concept. It was first introduced in a paper from 2006 called [*Calibrating Noise to Sensitivity in Private Data Analysis*](https://desfontain.es/PDFs/PhD/CalibratingNoiseToSensitivityInPrivateDataAnalysis.pdf).

The paper introduces the idea of adding noise to data to achieve privacy. Of course, adding noise to the dataset reduces its accuracy. Ɛ defines the amount of noise added to the dataset, with a small Ɛ meaning more privacy but less accurate data and vice versa. It's also referred to as the "privacy loss parameter".

Importantly, differential privacy adds noise *before* it's analyzed. k-anonymity relies on trying to anonymize data *after* it's collected, so it leaves the possibility that not enough parameters are removed to ensure each indidual cannot be identified.
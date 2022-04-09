---
title: "Threat Modeling"
icon: 'material/target-account'
---

The first task a person should do when taking steps to protect their privacy and security is to make a threat model. 

## Defining a threat

To make a threat model, we must first define a threat. A common mistake made by people who are just getting into the privacy space is to define the threat as "big-tech companies". There is a fundamental problem with this definition:

Why are we not trusting "big-tech companies", but then shift our trust to "small-tech companies"? What happens if those "small-tech companies" turn out to be malicious? What happens when our favorite "small-tech company" becomes successful and grow exponentially? The proper way to define the threat here is the "service provider", not "big-tech".

Generally, there are four primary threats a person would want to protect themselves from:

1. A service provider spying on users on their platform
2. An app developer spying on users and exfiltrating sensitive data
3. A hacker trying to get into the users' computers
4. "Mass surveillance", websites and services working together to track the user across the internet

A typical person would have several of these threats in their threat model. Some of these threats may weigh more than others. For example, a software developer would have a hacker as their primary threat, but beyond that they would also want privacy from the websites they visit and so on. Likewise, an average Joe may have their primary threat as mass surveillance and service providers, but beyond that they also need to have decent security to prevent a hacker from stealing their data.

For whistleblowers, the threat model is much more extreme. Beyond what is mentioned above, they also need anonimity. Beyond just hiding what they do, what data they have, not getting hacked by hackers or governments, they also have to hide who they are. They need to go "off-grid", or so to speak. They will sacrifice any kind of convenience if it means protecting their anonimity, privacy, or security, as their lives depends on it. Most regular people do not need to go so far.

## Privacy from service providers

We live in a world where almost everything is connected to the internet. Our "private" messages, emails, social interactions are typilically stored on a server somewhere. Generally, when you send someone a message, that message is then stored on a server, and when your friend wants to read the message, the server will show it to them.

The obvious problem with this model is that the service provider, the server operator, or a hacker who has compromised the server can look into your "private" conversations whenever and however they want to do it, without you ever knowing. Privacy policies are not to be trusted, as they are nothing more than a pinky promise that you cannot verify. This applies to common services like Discord, non "Secret Chat" on Telegram, SMS messages, and so on.

We need something better. Thankfully, we could use end to end encryption to eliviate this issue. In a typical end to end encrypted setup, both users will generate a pair of asymetric encryption keys - a public and private key. One person can encrypt a message 

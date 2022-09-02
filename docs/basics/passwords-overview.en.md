---
title: "Introduction to Passwords"
icon: 'material/shield-key-outline'
---

Passwords are an essential part of our everyday digital lives. We use them to protect our accounts, our devices and our secrets. Despite often being the only thing between us and someone who wants to access our private information, not a lot of thought is put into them, often leading to using passwords that can be easily guessed or brute-forced and thus jeopardizing your most important data.

## Best Practices

### Use unique passwords for every service

Imagine this; you've signed up for an account with your e-mail and the same password on multiple online services. The moment one of those services has a data breach, all a bad actor would have to do is try that e-mail and password combination across multiple popular services until they get a hit. It doesn't matter how strong that one password is, because they already have it.

This is called [credential stuffing](https://en.wikipedia.org/wiki/Credential_stuffing) and it is one of the most common ways that your accounts can be compromised by bad actors. To avoid this, make sure that you never re-use the same password twice.

### Use Randomly Generated Passwords

Human beings are bad at coming up with strong passwords. You should use randomly generated passwords with sufficient entropy to protect your accounts and devices.

All of our recommended password managers have a built-in password generator that you can use instead of something that you come up with yourself.

### When you should change your password, and when you shouldn't

You should avoid changing passwords that you have to remember (such as your password manager's master password) too often unless you have reason to believe it has been compromised.

Changing it too often exposes you to the risk of forgetting it, or weakening it in order to make it easier to remember.

Regarding passwords that you don't have to remember (such as passwords stored inside your password manager), you should make a habit of going through them and changing them every few months, in case they have been compromised in a data breach that hasn't become public yet. For public data breaches, you can use tools like [Have I been Pwned](https://haveibeenpwned.com/) to check whether your e-mail (and thus potentially your password for a given service as well) has been compromised, at which point you should change it immediately.

A lot of password managers will also notify you when a data breach that is relevant to you has occurred, at which point you should change your password as soon as possible.

## Creating strong passwords

### Diceware

Diceware is a method for creating passphrases which are easy to remember, but hard to guess.

The method traditionally involves using a six-sided die. Every five rolls correspond to a word in a cryptographic list. For example, 43146 in the traditional list corresponds to "munch". You would then continue rolling until your passphrase has as many words as you need, separated by spaces.

The die method ensures that you're generating the passphrase in a completely offline way. If you choose to go that route, you should ideally use unbiased die to ensure that they are as random as possible.

Alternatively, you can use a password generator (your password manager can most likely generate diceware passphrases).

## Storing Passwords

### Password Managers

The best way to store your passwords is by using a password manager. They allow you to store your passwords in a file or in the cloud and protect them with a single master password. That way, you will only have to remember one strong password, which lets you access the rest of them.

If you're using TOTP as a [multi-factor authentication](../multi-factor-authentication.md) method for any of your accounts, do not store these tokens in your password manager, as that negates their benefit. You should use a dedicated [TOTP app](../multi-factor-authentication.md/#authenticator-apps) instead.

There are many good options to choose from, both cloud-based and local. Choose one of our recommended password managers and use it to establish strong passwords across all of your accounts. We recommend securing your password manager with a [diceware](#diceware) passphrase comprised of at least 6 words.

[List of recommended password managers](../passwords.md){ .md-button }

### Backups

You should store an exported backup of your passwords in an encrypted container on another storage device. This can be useful if something happens to your device or the service you are using.
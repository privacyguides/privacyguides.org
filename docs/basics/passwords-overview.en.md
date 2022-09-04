---
title: "Introduction to Passwords"
icon: 'material/shield-key-outline'
---

Passwords are an essential part of our everyday digital lives. We use them to protect our accounts, our devices and our secrets. Despite often being the only thing between us and and an adversary who's after our private information, not a lot of thought is put into them which often leads to people using passwords that can be easily guessed or brute-forced.

## Best Practices

### Use unique passwords for every service

Imagine this; you've signed up for an account with your e-mail and the same password on multiple online services. If a service provider is malicious, or one of those services has a data breach that exposes your password in an unencrypted format, all a bad actor would have to do is try that e-mail and password combination across multiple popular services until they get a hit. It doesn't matter how strong that one password is, because they already have it.

This is called [credential stuffing](https://en.wikipedia.org/wiki/Credential_stuffing) and it is one of the most common ways that your accounts can be compromised by bad actors. To avoid this, make sure that you never re-use the same password twice.

### Use randomly generated passwords

==You should **never** rely on yourself to come up with a good password.== You should use randomly generated passwords or [diceware passphrases](#diceware) with sufficient entropy to protect your accounts and devices.

All of our [recommended password managers](../passwords.md) include a built-in password generator that you can use.

### When you should change your password, and when you shouldn't

You should avoid changing passwords that you have to remember (such as your password manager's master password) too often unless you have reason to believe it has been compromised as changing it too often exposes you to the risk of forgetting it.

Regarding passwords that you don't have to remember (such as passwords stored inside your password manager), you should make a habit of going through them and changing them every few months, in case they have been compromised in a data breach that hasn't become public yet. Most password managers allow you to set an expiry date for your password to make this easier to manage.

For public data breaches, you can use tools like [Have I been Pwned](https://haveibeenpwned.com/) to check whether your e-mail (and thus potentially your password on a given service as well) has been compromised, at which point you should change it immediately.

A lot of password managers will also notify you when a data breach that is relevant to you has occurred, at which point you should change the password on the affected service as soon as possible.

## Creating strong passwords

### Diceware Passphrases

Diceware is a method for creating passphrases which are easy to remember, but hard to guess.

An example of a diceware passphrase would be `viewable fastness reluctant squishy seventeen shown pencil`.

Diceware passphrases are a great option when you need to memorize or manually input your credentials. Examples of that would be your password manager's master password or your device's encryption key.

The method traditionally involves using six-sided dice. Every five rolls correspond to a word in a cryptographic list. For example, `2-5-2-6-6` in [EFF's large wordlist](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) corresponds to `encrypt`. This process is then repeated until your passphrase contains enough words, which you separate with spaces. ==You should not keep rolling until you get a combination of words that appeals to you, as that reduces the passphrase's randomness and might make it easier to guess.==

The dice method ensures that you're generating the passphrase in a completely offline way. Alternatively, you can use your password manager's password generator, as most of them have the option to generate diceware passphrases in addition to regular passwords.

We recommend using [EFF's large wordlist](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) to generate your diceware passphrases, as it offers the exact same security as the original list, while containing words that are easier to memorize. There are also other wordlists that cater to different languages, if you do not want your passphrase to be in English.

Each word in the aforementioned list results in ~12.9 bits of entropy. A seven word passphrase generated from it has ~90.47 bits of entropy. This means that even if your adversary is capable of 1,000,000,000,000 guesses per second, it would still take them millions of years to guess your passphrase. That is the case even if the following things are true:

- Your adversary knows that you used the diceware method.
- Your adversary knows the specific wordlist that you used.
- Your adversary knows how many words your passphrase contains.

### Passwords

A lot of services impose certain criteria when it comes to passwords such as a minimum or maximum length, as well as which special characters, if any, can be used. You should use your password manager's built-in password generator to create passwords that are as long and complex as the service will allow by including capitalized and lowercase letters, numbers and special characters.

If you need a password you can memorize, we recommend a [diceware passphrase](#diceware).

## Storing Passwords

### Password Managers

The best way to store your passwords is by using a password manager. They allow you to store your passwords in a file or in the cloud and protect them with a single master password. That way, you will only have to remember one strong password, which lets you access the rest of them.

If you're using TOTP as a [multi-factor authentication](../multi-factor-authentication.md) method for any of your accounts, ==do not store these tokens, any backup codes for them, or the TOTP secrets themselves in your password manager,== as that negates the benefit of multi factor authentication. You should use a dedicated [TOTP app](../multi-factor-authentication.md/#authenticator-apps) instead.

There are many good options to choose from, both cloud-based and local. Choose one of our recommended password managers and use it to establish strong passwords across all of your accounts. We recommend securing your password manager with a [diceware](#diceware) passphrase comprised of at least seven words.

[List of recommended password managers](../passwords.md){ .md-button }

### Backups

You should store an exported backup of your passwords in an encrypted container on another storage device. This can be useful if something happens to your device or the service you are using.
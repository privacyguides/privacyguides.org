---
layout: evergreen
title: Multi-factor Authentication
breadcrumb: Multi-factor Authentication
description: "Using strong MFA can stop over 99% of unauthorized account accesses, and it's easy to set up on the services you already use."
---

**Two-Factor Authentication** (also known as **2FA**, **Multi-Factor Authentication**, or **MFA**) is a security mechanism that requires additional steps beyond simply your username/email and password. If you've ever had to enter a 6-digit code sent to your phone to log in to a website, that's an example of 2FA.

The idea behind 2FA is that even if a hacker is able to figure out your password (something you *know*), they will still need a device you own like your phone (something you *have*) in order to generate the code needed to log in to your account. 2FA methods vary in security based on this premise: The more difficult it is for an attacker to gain access to your 2FA method, the better. Examples of 2FA methods from strongest to weakest are Email or SMS codes, Push Notifications, Software (TOTP) Code-Generating Apps, and Hardware Keys.

<mark><strong>SMS Codes</strong> or Emailed Codes are better than nothing at all, but only marginally.</mark> Getting a code over SMS or Email takes away from the "something you *have*" idea, because there are a variety of ways a hacker could take over your phone number or gain access to your emails without having physical access to any of your devices at all!

**Push Notifications** take the form of a message being sent to an app on your phone asking you to confirm new account logins. This is a lot better than SMS or Email, since an attacker typically wouldn't be able to get these push notifications without having an already logged-in device, thus requiring physical access to your device. However, they can be easy to click through and accept accidentally, and are typically sent to *all* your devices at once, widening the availability of the 2FA code if you have many devices. This solution is also generally a proprietary solution, so you are reliant on the company you have an account with to implement their custom solution securely rather than implementing an industry standard. Finally, it requires you to keep an app for every login you have on your mobile device, which may or may not be convenient to you.

<mark>If you want to take your security seriously, you should use a dedicated <strong>Authenticator App</strong> on your phone to generate these codes whenever possible.</mark> These authenticator apps follow the same standard, allowing you to keep codes from many different companies in one place for ease-of-use. They also keep the codes securely stored (optionally requiring biometrics on your phone to access them), and make it difficult to duplicate the codes so they cannot be reproduced by a hacker later, even if they briefly had physical access to your phone.

## Hardware Security Keys
The ultimate form of multi-factor security are **hardware keys**. These are devices that implement a standard such as **FIDO2** or **U2F** that you need to physically attach to your computer to log in to your accounts. They come in a variety of form factors and connect in different ways, such as a USB stick you plug in to your computer, or a Bluetooth/NFC token you connect to your device wirelessly. Some newer computers and mobile devices even have built-in hardware keys! Hardware keys have secure cryptoprocessors (essentially an entire mini computer!) on them which stores and manages your encryption keys. Many of them have specific tamper-resistant mechanisms, but all of them are designed with the idea that they should be impossible to reproduce: The key you have will be the **only** way to gain access to your account.

Ultimately, the best form of two-factor security is the one you will use consistently on every account you have, that doesn't significantly interfere with your life. If you need to log in to an account often or on many devices, a hardware key may prove to be too much of a burden for example.

{% for item_hash in site.data.hardware.multi-factor-authentication-security-key %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

## Authenticator Apps
<mark>Generally speaking, TOTP software authenticator apps are going to be the best bet for most people.</mark> They provide a significantly higher level of security than just SMS or Push Notifications, while remaining very convenient for most people who keep their phones with them at all times.

Authenticator Apps implement a security standard adopted by the Internet Engineering Task Force (IETF) called **Time-based One-time Passwords**, or **TOTP**. This is a method where websites share a secret with you which is used by your authenticator app to generate a six (usually) digit code based on the current time, which you enter while logging in for the website to check. Typically these codes are regenerated every 30 seconds, and once a new code is generated the old one becomes useless. Even if a hacker gets one six-digit code, there is no way for them to reverse that code to get the original secret, or otherwise be able to predict what any future codes might be.

{% for item_hash in site.data.software.multi-factor-authentication-totp %}
{% assign item = item_hash[1] %}

{% if item.type == "Recommendation" %}
{% include recommendation-card.html %}
{% endif %}
{% endfor %}

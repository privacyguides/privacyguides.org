---
title: "Multi-Factor Authentication"
icon: 'material/two-factor-authentication'
description: MFA is a critical security mechanism for securing your online accounts, but some methods are stronger than others.
---

**Multi-Factor Authentication** (**MFA**) is a security mechanism that requires additional steps beyond entering your username (or email) and password. The most common method is time limited codes you might receive from SMS or an app.

সাধারণত, যদি কোনো হ্যাকার (বা শত্রু) আপনার পাসওয়ার্ড ডিক্রিপ্ট করতে সক্ষম হয় তাহলে তারা যে অ্যাকাউন্টে ওই পাসওয়ার্ড আছে সেটিতে প্রবেশ করতে সক্ষম হবে। MFA আছে এমন একটি অ্যাকাউন্ট-এর  ক্ষেত্রে হ্যাকারকে পাসওয়ার্ড ( যা আপনি *জানেন*) এবং আপনার মালিকানাধীন একটি ডিভাইস (যা আপনার *কাছে আছে*), যেমন আপনার ফোন,উভয়ই থাকলে তবে হ্যাকার হ্যাক করতে সক্ষম হবে।

MFA পদ্ধতিগুলির নিরাপত্তা বিভিন্নরকম হতে পারে ,আক্রমণকারীর পক্ষে আপনার MFA পদ্ধতিতে অ্যাক্সেস লাভ করা যত কঠিন, ততই ভালো। Examples of MFA methods (from weakest to strongest) include SMS, Email codes, app push notifications, TOTP, Yubico OTP and FIDO.

## MFA পদ্ধতিগুলির তুলনা

### এসএমএস বা ইমেইল MFA

এসএমএস বা ইমেলের ওটিপি কোডগুলির মাধ্যমে MFA-এর ব্যবহার অ্যাকাউন্টগুলিকে সুরক্ষিত করার একটি দুর্বল উপায়৷ ইমেল বা এসএমএস-এর মাধ্যমে কোড পাওয়া "যা আপনার *আছে*" ধারণা থেকে দূরে সরে যায়, কারণ হ্যাকার বিভিন্ন রকম ভাবে আপনার [ফোন নম্বর দখল করতে পারে](https://en.wikipedia.org/wiki/SIM_swap_scam) বা আপনার কোনো ডিভাইস স্পর্শ না করেই আপনার ইমেলে অ্যাক্সেস পেতে পারে। যদি কোনো অননুমোদিত ব্যক্তি আপনার ইমেলের অ্যাক্সেস লাভ করে, তাহলে তারা আপনার সেই ইমেইল ব্যবহার করে পাসওয়ার্ড রিসেট করতে পারে এবং অথেনটিকেশন কোড পেতে পারে, যা শেষ পর্যন্ত তাকে আপনার একাউন্ট-এর সম্পূর্ণ এক্সেস দেবে।

### মোবাইলের নোটিফিকেশন

পুশ নোটিফিকেশন MFA এমন একটা পদ্ধতি যেখানে আপনার ফোনের একটি অ্যাপে নোটিফিকেশন পাঠানো হয়, যাতে আপনাকে নতুন অ্যাকাউন্ট লগইন নিশ্চিত করতে বলে। এই পদ্ধতিটি এসএমএস বা ইমেলের চেয়ে তুলনামূলকভাবে অনেক ভালো, যেহেতু একজন আক্রমণকারী সাধারণত  লগগড -ইন করা ডিভাইস ছাড়া এই নোটিফিকেশনগুলি পেতে সক্ষম হবে না, যার মানে তাদের প্রথমে আপনার অন্য ডিভাইসগুলির মধ্যে একটিকে হ্যাক করতে হবে ৷

আমরা প্রত্যেকেই ভুল করি, এবং আপনি অন্যমনস্কতাবশত লগইন এপ্রুভ করে দিতে পারেন তার সম্ভাবনা রয়েছে। লগইন এর জন্য নোটিফিকেশনগুলি সাধারণত আপনার *সমস্ত ডিভাইসে* একসঙ্গে পাঠানো হয়, যদি আপনার অনেকগুলি ডিভাইস থাকে তবে তা MFA কোড পাওয়ার সম্ভাবনা বৃদ্ধি করে৷

পুশ নোটিফিকেশন MFA -এর নিরাপত্তা অ্যাপের গুণমান, সার্ভারের, এবং এটি তৈরিকারী ব্যাক্তির ওপর নির্ভর করে। একটি অ্যাপ্লিকেশন ইনস্টল করার অর্থ হল যে আপনাকে প্রায়ই ক্ষতিকারক পারমিশনগুলি একসেপ্ট করতে হবে, যা ওই অ্যাপ্লিকেশনকে ডিভাইসের অন্যান্য ডেটা অ্যাক্সেস করার অনুমতি দেয়৷ অনেক সময় বিভিন্ন পরিষেবার জন্য আপনাকে বিভিন্ন এপ্লিকেশন ইনস্টল করতে হতে পারে, সেই এপ্লিকেশন টি আবার কোনো পাসওয়ার্ড ছাড়াই ওপেন হতে পারে, যা মোটেও ভালো TOTP জেনারেটার এপ্লিকেশন এর লক্ষণ নয়।

### সময়-সাপেক্ষ ওয়ান-টাইম পাসওয়ার্ড (TOTP)

TOTP is one of the most common forms of MFA available. When you set up TOTP, you are generally required to scan a [QR Code](https://en.wikipedia.org/wiki/QR_code) which establishes a "[shared secret](https://en.wikipedia.org/wiki/Shared_secret)" with the service that you intend to use. শেয়ার্ড সিক্রেট অথেনটিকেশন অ্যাপের ভিতরে সুরক্ষিত থাকে এবং কখনও কখনও পাসওয়ার্ড দ্বারা সুরক্ষিত থাকে।

সময়-সাপেক্ষ কোড তারপর শেয়ার্ড সিক্রেট এবং সময় থেকে জেনারেট হয়। As the code is only valid for a short time, without access to the shared secret, an adversary cannot generate new codes.

যদি আপনার কাছে TOTP সহ একটি হার্ডওয়্যার সিকিউরিটি কী থাকে (যেমন Yubico অথেন্টিকেটর সাথে একটি YubiKey), আমরা সুপারিশ করি যে আপনি হার্ডওয়্যারে আপনার "শেয়ার্ড সিক্রেট " রাখুন৷ YubiKey-এর মতো হার্ডওয়্যার এমনভাবে তৈরী করা হয়েছিল যাতে "শেয়ারড সিক্রেট" বের করা এবং কপি করা কঠিন হয় একটি YubiKey ইন্টারনেটের সাথে যুক্ত থাকে না, কিন্তু TOTP যুক্ত একটি ফোন ইন্টারনেট এর সাথে যুক্ত থাকে।

[WebAuthn](#fido-fast-identity-online) এর অপরপক্ষে TOTP [ফিশিং](https://en.wikipedia.org/wiki/Phishing) বা রি-উজ এটাক এর বিরুদ্ধে কোন সুরক্ষা প্রদান করে না। If an adversary obtains a valid code from you, they may use it as many times as they like until it expires (generally 60 seconds).

আপনার উজার-নেম, পাসওয়ার্ড এবং বর্তমান TOTP কোড হাতানোর জন্য, আপনাকে প্রতারণা করার চেষ্টায় একজন আক্ক্রমণকারী একটি অফিসিয়াল পরিষেবার অনুকরণ করে একটি ওয়েবসাইট সেট আপ করতে পারে। আক্রমণকারী সেই রেকর্ড করা তথ্যগুলি ব্যবহার করে প্রকৃত পরিষেবাতে লগ ইন করতে এবং অ্যাকাউন্ট হাইজ্যাক করতে সক্ষম হতে পারে।

Although not perfect, TOTP is secure enough for most people, and when [hardware security keys](../multi-factor-authentication.md#hardware-security-keys) are not supported [authenticator apps](../multi-factor-authentication.md#authenticator-apps) are still a good option.

### হার্ডওয়্যার সিকিউরিটি কী

The YubiKey stores data on a tamper-resistant solid-state chip which is [impossible to access](https://security.stackexchange.com/a/245772) non-destructively without an expensive process and a forensics laboratory.

These keys are generally multi-function and provide a number of methods to authenticate. Below are the most common ones.

#### Yubico OTP

Yubico OTP is an authentication protocol typically implemented in hardware security keys. When you decide to use Yubico OTP, the key will generate a public ID, private ID, and a Secret Key which is then uploaded to the Yubico OTP server.

When logging into a website, all you need to do is to physically touch the security key. The security key will emulate a keyboard and print out a one-time password into the password field.

The service will then forward the one-time password to the Yubico OTP server for validation. A counter is incremented both on the key and Yubico's validation server. The OTP can only be used once, and when a successful authentication occurs, the counter is increased which prevents reuse of the OTP. Yubico provides a [detailed document](https://developers.yubico.com/OTP/OTPs_Explained.html) about the process.

<figure markdown>
  ![Yubico OTP](../assets/img/multi-factor-authentication/yubico-otp.png)
</figure>

There are some benefits and disadvantages to using Yubico OTP when compared to TOTP.

The Yubico validation server is a cloud based service, and you're placing trust in Yubico that they are storing data securely and not profiling you. The public ID associated with Yubico OTP is reused on every website and could be another avenue for third-parties to profile you. Like TOTP, Yubico OTP does not provide phishing resistance.

If your threat model requires you to have different identities on different websites, **do not** use Yubico OTP with the same hardware security key across those websites as public ID is unique to each security key.

#### FIDO (Fast IDentity Online)

[FIDO](https://en.wikipedia.org/wiki/FIDO_Alliance) includes a number of standards, first there was U2F and then later [FIDO2](https://en.wikipedia.org/wiki/FIDO2_Project) which includes the web standard [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn).

U2F and FIDO2 refer to the [Client to Authenticator Protocol](https://en.wikipedia.org/wiki/Client_to_Authenticator_Protocol), which is the protocol between the security key and the computer, such as a laptop or phone. It complements WebAuthn which is the component used to authenticate with the website (the "Relying Party") you're trying to log in on.

WebAuthn is the most secure and private form of second factor authentication. While the authentication experience is similar to Yubico OTP, the key does not print out a one-time password and validate with a third-party server. Instead, it uses [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) for authentication.

<figure markdown>
  ![FIDO](../assets/img/multi-factor-authentication/fido.png)
</figure>

When you create an account, the public key is sent to the service, then when you log in, the service will require you to "sign" some data with your private key. The benefit of this is that no password data is ever stored by the service, so there is nothing for an adversary to steal.

This presentation discusses the history of password authentication, the pitfalls (such as password reuse), and discussion of FIDO2 and [WebAuthn](https://webauthn.guide) standards.

<div class="yt-embed">
  <iframe width="560" height="315" src="https://invidious.privacyguides.net/embed/aMo4ZlWznao?local=true" title="How FIDO2 and WebAuthn Stop Account Takeovers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

FIDO2 and WebAuthn have superior security and privacy properties when compared to any MFA methods.

Typically for web services it is used with WebAuthn which is a part of the [W3C recommendations](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#W3C_recommendation_(REC)). It uses public key authentication and is more secure than shared secrets used in Yubico OTP and TOTP methods, as it includes the origin name (usually, the domain name) during authentication. Attestation is provided to protect you from phishing attacks, as it helps you to determine that you are using the authentic service and not a fake copy.

Unlike Yubico OTP, WebAuthn does not use any public ID, so the key is **not** identifiable across different websites. It also does not use any third-party cloud server for authentication. All communication is completed between the key and the website you are logging into. FIDO also uses a counter which is incremented upon use in order to prevent session reuse and cloned keys.

If a website or service supports WebAuthn for the authentication, it is highly recommended that you use it over any other form of MFA.

## General Recommendations

We have these general recommendations:

### Which Method Should I Use?

When configuring your MFA method, keep in mind that it is only as secure as your weakest authentication method you use. This means it is important that you only use the best MFA method available. For instance, if you are already using TOTP, you should disable email and SMS MFA. If you are already using FIDO2/WebAuthn, you should not be using Yubico OTP or TOTP on your account.

### Backups

You should always have backups for your MFA method. Hardware security keys can get lost, stolen or simply stop working over time. It is recommended that you have a pair of hardware security keys with the same access to your accounts instead of just one.

When using TOTP with an authenticator app, be sure to back up your recovery keys or the app itself, or copy the "shared secrets" to another instance of the app on a different phone or to an encrypted container (e.g. [VeraCrypt](../encryption.md#veracrypt)).

### Initial Set Up

When buying a security key, it is important that you change the default credentials, set up password protection for the key, and enable touch confirmation if your key supports it. Products such as the YubiKey have multiple interfaces with separate credentials for each one of them, so you should go over each interface and set up protection as well.

### Email and SMS

If you have to use email for MFA, make sure that the email account itself is secured with a proper MFA method.

If you use SMS MFA, use a carrier who will not switch your phone number to a new SIM card without account access, or use a dedicated VoIP number from a provider with similar security to avoid a [SIM swap attack](https://en.wikipedia.org/wiki/SIM_swap_scam).

[MFA tools we recommend](../multi-factor-authentication.md ""){.md-button}

## More Places to Set Up MFA

Beyond just securing your website logins, multi-factor authentication can be used to secure your local logins, SSH keys or even password databases as well.

### Windows

Yubico has a dedicated [Credential Provider](https://docs.microsoft.com/en-us/windows/win32/secauthn/credential-providers-in-windows) that adds Challenge-Response authentication for the username + password login flow for local Windows accounts. If you have a YubiKey with Challenge-Response authentication support, take a look at the [Yubico Login for Windows Configuration Guide](https://support.yubico.com/hc/en-us/articles/360013708460-Yubico-Login-for-Windows-Configuration-Guide), which will allow you to set up MFA on your Windows computer.

### macOS

macOS has [native support](https://support.apple.com/guide/deployment/intro-to-smart-card-integration-depd0b888248/web) for authentication with smart cards (PIV). If you have a smartcard or a hardware security key that supports the PIV interface such as the YubiKey, we recommend that you follow your smartcard/hardware security vendor's documentation and set up second factor authentication for your macOS computer.

Yubico have a guide [Using Your YubiKey as a Smart Card in macOS](https://support.yubico.com/hc/en-us/articles/360016649059) which can help you set up your YubiKey on macOS.

After your smartcard/security key is set up, we recommend running this command in the Terminal:

```text
sudo defaults write /Library/Preferences/com.apple.loginwindow DisableFDEAutoLogin -bool YES
```

The command will prevent an adversary from bypassing MFA when the computer boots.

### Linux

!!! warning

    If the hostname of your system changes (such as due to DHCP), you would be unable to login. It is vital that you set up a proper hostname for your computer before following this guide.

The `pam_u2f` module on Linux can provide two-factor authentication for logging in on most popular Linux distributions. If you have a hardware security key that supports U2F, you can set up MFA authentication for your login. Yubico has a guide [Ubuntu Linux Login Guide - U2F](https://support.yubico.com/hc/en-us/articles/360016649099-Ubuntu-Linux-Login-Guide-U2F) which should work on any distribution. The package manager commands—such as `apt-get`—and package names may however differ. This guide does **not** apply to Qubes OS.

### Qubes OS

Qubes OS has support for Challenge-Response authentication with YubiKeys. If you have a YubiKey with Challenge-Response authentication support, take a look at the Qubes OS [YubiKey documentation](https://www.qubes-os.org/doc/yubikey/) if you want to set up MFA on Qubes OS.

### SSH

#### Hardware Security Keys

SSH MFA could be set up using multiple different authentication methods that are popular with hardware security keys. We recommend that you check out Yubico's [documentation](https://developers.yubico.com/SSH/) on how to set this up.

#### সময়-সাপেক্ষ ওয়ান-টাইম পাসওয়ার্ড (TOTP)

SSH MFA can also be set up using TOTP. DigitalOcean has provided a tutorial [How To Set Up Multi-Factor Authentication for SSH on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-multi-factor-authentication-for-ssh-on-ubuntu-20-04). Most things should be the same regardless of distribution, however the package manager commands—such as `apt-get`—and package names may differ.

### KeePass (and KeePassXC)

KeePass and KeePassXC databases can be secured using Challenge-Response or HOTP as a second-factor authentication. Yubico has provided a document for KeePass [Using Your YubiKey with KeePass](https://support.yubico.com/hc/en-us/articles/360013779759-Using-Your-YubiKey-with-KeePass) and there is also one on the [KeePassXC](https://keepassxc.org/docs/#faq-yubikey-2fa) website.

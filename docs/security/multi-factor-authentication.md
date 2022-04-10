---
title: Multi-factor Authentication
description: "Using strong MFA can stop over 99% of unauthorized account accesses, and it's easy to set up on the services you already use."
icon: 'material/two-factor-authentication'
---
**Multi-factor authentication** (MFA, or 2FA) is a security mechanism that requires additional steps beyond entering your username (or email) and password. The most common method are time limited codes you might receive from an SMS or app.

The idea behind MFA is that even if a hacker (or adversary) is able to figure out your password (something you *know*), they will still need a device you own like your phone (something you *have*) in order to generate the code needed to log in to your account. MFA methods vary in security based on this premise: The more difficult it is for an attacker to gain access to your MFA method, the better. Examples of MFA methods (from weakest to strongest) include [SMS codes](https://en.wikipedia.org/wiki/One-time_password#SMS), email codes, app push notifications, [Time-based One-time Passwords (TOTP)](https://en.wikipedia.org/wiki/Time-based_one-time_password), Yubico OTP, and [FIDO2](https://en.wikipedia.org/wiki/FIDO2_Project) / [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor).

## MFA Method Comparison

### SMS or Email MFA

Receiving codes either from **SMS** or **email** is far from the best way to secure your accounts. Obtaining a code by email or SMS takes away from the "something you *have*" idea, because there are a variety of ways a hacker could [take over your phone number](https://en.wikipedia.org/wiki/SIM_swap_scam) or gain access to your email without having physical access to any of your devices at all. If an unauthorized person gained access to your email, they would be able to use that access to both reset your password and receive the authentication code, giving them full access to your account.

### Push Notifications

**Push Notifications** take the form of a message being sent to an app on your phone asking you to confirm new account logins. This method is a lot better than SMS or email, since an attacker typically wouldn't be able to get these push notifications without having an already logged-in device, which means they would need to compromise one of your other devices first.

We all make mistakes, and there is the risk that a user may accept the login attempt by accident. Push notification login authorizations are typically sent to *all* your devices at once, widening the availability of the MFA code if you have many devices.

The security of push notification MFA is dependent on both the quality of the app, the server component and the trust of the developer who produces it. Installing an app may also require you to accept invasive privileges that grant access to other data on your device. An individual app also requires that you have a specific app for each service which may not require a password to open unlike a good [Time-based One-time Password (TOTP)](#time-based-one-time-password-totp) app.

### Time-based One-time Password (TOTP)

**TOTP** is one of the most commons form of MFA available. When a user sets up TOTP they are generally required to scan a [QR Code](https://en.wikipedia.org/wiki/QR_code) which establishes a "shared secret" with the service that they intend to use. The shared secret is secured inside of the authenticator app's data, and is sometimes protected by a password.

The time-limited code is then derived from the shared secret and the current time. As the code is only valid for a short time, without access to the shared secret an adversary cannot generate new new codes.

If you have a hardware security key with TOTP support (such as a YubiKey with [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/)), we recommend that you store your "shared secrets" on the hardware. Hardware such as the YubiKey was developed with making the "shared secret" difficult to extract and copy. A YubiKey is also not connected to the Internet, unlike a phone with a TOTP app.

Unlike [FIDO2 / U2F](#fido2-u2f), TOTP offers no protection against [phishing](https://en.wikipedia.org/wiki/Phishing) attacks.

An adversary could set up a website to imitate an official service in an attempt to trick the user to give out their username, password and current TOTP code. If the adversary then uses those recorded credentials they may be able to log into the real service and hijack the account.

Although not perfect it is secure enough for most people, and when [Hardware Security Keys](#hardware-security-keys) are not supported TOTP with [Authenticator Apps](#authenticator-apps) are still a good option.

### Yubico OTP

**Yubico OTP** is an authentication protocol typically implemented in hardware security keys. When a user decides to use Yubico OTP, the key will generate a public ID, private ID, and a Secret Key which is then uploaded to the Yubico OTP server.

When logging into a website all a user needs to do is to physically touch the security key. The security key will emulate a keyboard and print out a one-time password into the password field.

The service will then forward the one-time password to the Yubico OTP server for validation. Yubico does provide a [detailed document](https://developers.yubico.com/OTP/OTPs_Explained.html) about the process.

<figure markdown>
  ![Yubico OTP](/assets/img/multi-factor-authentication/yubico-otp.png)
</figure>

There are some benefits and disadvantages to using Yubico OTP when compared to [TOTP](#time-based-one-time-password-totp).

YubiKeys are quite difficult to copy but in the event an adversary was able to accomplish this, the security key would be rejected when logging in as the counter stored on the key would be lower than what is stored on the Yubico validation server.

The Yubico validation server is a cloud based service, and users do place trust in Yubico that they are storing data securely and not profiling users. The public ID associated with Yubico OTP is reused on every website and could be another avenue for third parties to profile the user.

Like [TOTP](#time-based-one-time-password-totp), Yubico OTP does not provide phishing resistance.

If your threat model requires you to have different identities on different websites, **do not** use Yubico OTP with the same hardware security key across those websites as public ID is unique to each security key.

### FIDO2 / U2F

[**FIDO2**](https://en.wikipedia.org/wiki/FIDO2_Project) / [**U2F**](https://en.wikipedia.org/wiki/Universal_2nd_Factor) is the most secure and private form of second factor authentication. While the user experience is similar to Yubico OTP, the key does not print out a one-time password and validate with a third party server. Instead FIDO2 (and U2F) use [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) for authentication.

When a user creates an account the public key is sent to the service. When the user logs in the service will require the user to "sign" some data with their private key. The benefit of this is that no password data is ever stored by the service, so there is nothing for an adversary to steal.

This presentation discusses the history of password authentication, the pitfalls (such as password reuse), and discussion of FIDO2 and [WebAuthn](https://webauthn.guide) standards.

<iframe width="100%" style="height:50vh"
  src="https://www.youtube-nocookie.com/embed/aMo4ZlWznao"
  title="How FIDO2 and WebAuthn Stop Account Takeovers"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

FIDO2 / U2F has superior security and privacy properties when compared to any MFA methods.

The public key authentication used by FIDO2 / U2F is more secure than shared secrets used in Yubico OTP and TOTP, as it includes the origin name (usually, the domain name) during authentication. Attestation is provided to protect the user from phishing as it helps them to determine that they are using the authentic service and not a fake copy.

FIDO2 / U2F does not use any public ID, so the key is **not** identifiable across different websites like Yubico OTP. It also does not use any third party cloud server for authentication. All communication is completed between the key and the website the user is logging into. FIDO2 / U2F also uses a counter like Yubico OTP to help detect key cloning.

If a website or service supports FIDO2 / U2F for the authentication, it is highly recommended that you use it over any other form of MFA.

## General Recommendations

We have these general recommendations:

### Which method to use?

When configuring your MFA method, keep in mind that it is only as secure as your weakest authentication method you use. This means it is important that you only use the best MFA method available. For instance, if you are already using TOTP, you should disable email and SMS MFA. If you are already using FIDO2 / U2F, you should not be using Yubico OTP or TOTP on your account.

### Backups

You should always have backups for your MFA method. Hardware security keys can get lost, stolen, or simply stop working over time. It is recommended that you have a pair of hardware security keys with the same access to your accounts instead of just one.

When using TOTP with an authenticator app, be sure to back up your recovery keys, the app itself, or copy the "shared secrets" to another instance of the app on a different phone or into an encrypted container (e.g. [VeraCrypt](/encryption/#veracrypt)).

### Initial setup

When buying a security key, it is important that you change the default credentials, setup password protection for the key, and enable touch confirmation if your key supports such feature. Products such as the [YubiKey](#yubikey) have multiple interfaces with seperate credentials for each one of them, so you should go over each interface and set up protection as well.

### Email and SMS

If you have to use email for MFA, make sure that the email account itself is secured with a proper MFA method.

If you use SMS MFA, use a carrier who will not switch your phone number to a new SIM card without account access or use a dedicated VOIP number from a provider with similar security to avoid a [SIM swap](https://en.wikipedia.org/wiki/SIM_swap_scam) attack.

[MFA tools we recommend](../multi-factor-authentication.md){ .md-button }

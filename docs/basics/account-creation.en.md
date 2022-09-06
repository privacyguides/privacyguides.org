---
title: "Account Creation"
icon: 'material/account-plus'
---

Often people sign up for services without thinking. Maybe it's a streaming service so you can watch that new show everyone's talking about, or an account that gives you a discount for your favorite fast food place. Whatever the case may be, you should consider the implications for your data now and later on down the line.

There are risks associated with every new service that you use. Data breaches; disclosure of customer information to third parties; rogue employees accessing data; all are possibilities that must be considered when giving your information out. You need to be confident that you can trust the service, which is why we don't recommend storing valuable data on anything but the most mature and battle-tested products. That usually means services which provide E2EE and have undergone a cryptographic audit. An audit increases assurance that the product was designed without glaring security issues caused by an inexperienced developer.

It can also be difficult to delete the accounts on some services. Sometimes [overwriting data](account-deletion.en.md#overwriting-account-information) associated with an account can be possible, but in other cases the service will keep an entire history of changes to the account.

## Terms of Service & Privacy Policy

The ToS are the rules that you agree to follow when using the service. With larger services these rules are often enforced by automated systems. Sometimes these automated systems can make mistakes. For example, you may be banned or locked out of your account on some services for using a VPN or VOIP number. Appealing such bans is often difficult, and involves an automated process too, which isn't always successful. This would be one of the reasons why we wouldn't suggest using Gmail for email as an example. Email is crucial for access to other services you might have signed up for.

The Privacy Policy is how the service says they will use your data and it is worth reading so that you understand how your data will be used. A company or organization might not be legally obligated to follow everything contained in the policy (it depends on the jurisdiction). We would recommend having some idea what your local laws are and what they permit a provider to collect.

We recommend looking for particular terms such as "data collection", "data analysis", "cookies", "ads" or "3rd-party" services. Sometimes you will be able to opt-out from data collection or from sharing your data, but it is best to choose a service that respects your privacy from the start.

You also also placing your trust in the company or organization to actually comply with their own privacy policy.

## Authentication methods

There are usually multiple ways to sign up for an account, each with their own benefits and drawbacks.

### Email and password

The most common way to create a new account is by an email address and password. When using this method, you should use a password manager and follow [best practices](passwords-overview.md) regarding passwords.

!!! tip

    You can use your password manager to organize other authentication methods too! Just add the new entry and fill the appropriate fields, you can add notes for things like security questions or a backup key.

You will be responsible for managing your login credentials. For added security, you can set up [MFA](multi-factor-authentication.md) on your accounts.

[Recommended password managers](../passwords.md){ .md-button }

#### Email aliases

If you don't want to give your real email address to a service, you have the option to use an alias. We described them in more detail on our email services recommendation page. Essentially, alias services allow you to generate new email addresses that forward all emails to your main address. This can help prevent tracking across services and help you manage the marketing emails that sometimes come with the sign up process. Those can be filtered automatically based on the alias they are sent to.

Should a service get hacked, you might start receiving phishing or spam emails to the address you used to sign up. Using unique aliases for each service can assist in identifying exactly what service was hacked.

[Recommended email aliasing services](../email.md#email-aliasing-services){ .md-button }

### Single sign-on

!!! note
  
    We are discussing Single sign-on for personal use, not enterprise users.

Single sign-on (SSO) is an authentication method that allows you to register for a service without sharing much information, if any. Whenever you see something along the lines of "Sign-in with *provider name*" on a registration form it's SSO.

When you choose single sign-on in a website, it will prompt your SSO provider login page and after that your account will be connected. Your password won't be shared but some basic information will (you can review it during the login request). This process is needed every time you want to log in to the same account.

The main advantages are:

- **Security**: no risk of being involved in a [data breach](https://en.wikipedia.org/wiki/Data_breach) because the website does not store your credentials.
- **Ease of use**: multiple accounts are managed by a single login.

But there are disadvantages:

- **Privacy**: a SSO provider will know the services you use.
- **Centralization**: if your SSO account gets compromised or you aren't able to login to it, all other accounts connected to it are affected.

SSO can be especially useful in those situations where you could benefit from deeper integration between services. For example, one of those services may offer SSO for the others. Our recommendation is to limit SSO to only where you need it and protect the main account with [MFA](multi-factor-authentication.md).

All services that use SSO will be as secure as your SSO account. For example, if you want to secure an account with a hardware key but that service doesn't support hardware keys, you can secure your SSO account with a hardware key and now you essentially have hardware MFA on all your accounts. It is worth noting though that weak authentication on your SSO account means that any account tied to that login will also be weak.

### Phone number

We recommend avoiding services that require a phone number for sign up. A phone number can identity you across multiple services and depending on data sharing agreements this will make your usage easier to track, particularly if one of those services is breached as the phone number is often **not** encrypted.

You should avoid giving out your real phone number if you can. Some services will allow the use of VOIP numbers, however these often trigger fraud detection systems, causing an account to be locked down, so we don't recommend that for important accounts.

In many cases you will need to provide a number that you can receive SMS or calls from, particularly when shopping internationally, in case there is a problem with your order at border screening. It's common for services to use your number as a verification method; don't let yourself get locked out of an important account because you wanted to be clever and give a fake number!

### Username and password

Some services allow you to register without using an email address and only require you to set a username and password. These services may provide increased anonymity when combined with a VPN or Tor. Keep in mind that for these accounts there will most likely be **no way to recover your account** in the event you forget your username or password.

---
title: "Multi-Faktor Autentisering"
icon: 'material/two-factor-authentication'
description: MFA is a critical security mechanism for securing your online accounts, but some methods are stronger than others.
---

**Flerfaktorsautentisering** (**MFA**) är en säkerhetsmekanism som kräver ytterligare steg utöver att ange användarnamn (eller e-post) och lösenord. Den vanligaste metoden är tidsbegränsade koder som du kan få från SMS eller en app.

Om en hackare (eller motståndare) kan ta reda på ditt lösenord får han eller hon normalt sett tillgång till det konto som lösenordet tillhör. Ett konto med MFA tvingar hackaren att ha både lösenordet (något som du *känner till*) och en enhet som du äger (något som du *har*), t. ex. din telefon.

MFA-metoder varierar i säkerhet, men bygger på förutsättningen att ju svårare det är för en angripare att få tillgång till din MFA-metod, desto bättre. Exempel på MFA-metoder (från svagaste till starkaste) inkluderar SMS, e-postkoder, app push-meddelanden, TOTP, Yubico OTP och FIDO.

## Jämförelse av MFA-metod

### SMS eller e-post MFA

Att ta emot OTP-koder via SMS eller e-post är ett av de svagare sätten att säkra dina konton med MFA. Att få en kod via e-post eller sms är inte längre något som du *har*", eftersom det finns många olika sätt för en hackare att [ta över ditt telefonnummer](https://en.wikipedia.org/wiki/SIM_swap_scam) eller få tillgång till din e-post utan att ha fysisk tillgång till någon av dina enheter överhuvudtaget. Om en obehörig person får tillgång till din e-post kan han eller hon använda den för att både återställa ditt lösenord och få autentiseringskoden, vilket ger honom eller henne full tillgång till ditt konto.

### Pushnotiser

MFA med push-notiser är ett meddelande som skickas till en app på din telefon där du uppmanas att bekräfta nya kontoinloggningar. Den här metoden är mycket bättre än SMS eller e-post, eftersom en angripare vanligtvis inte kan få dessa push-notiser utan att ha en redan inloggad enhet, vilket innebär att de måste äventyra en av dina andra enheter först.

Vi gör alla misstag, och det finns risk för att du kan acceptera inloggningsförsöket av misstag. Push notification login authorizations are typically sent to *all* your devices at once, widening the availability of the MFA code if you have many devices.

The security of push notification MFA is dependent on both the quality of the app, the server component and the trust of the developer who produces it. Installing an app may also require you to accept invasive privileges that grant access to other data on your device. An individual app also requires that you have a specific app for each service which may not require a password to open, unlike a good TOTP generator app.

### Time-based One-time Password (TOTP)

TOTP is one of the most common forms of MFA available. When you set up TOTP, you are generally required to scan a [QR Code](https://en.wikipedia.org/wiki/QR_code) which establishes a "[shared secret](https://en.wikipedia.org/wiki/Shared_secret)" with the service that you intend to use. The shared secret is secured inside of the authenticator app's data, and is sometimes protected by a password.

The time-limited code is then derived from the shared secret and the current time. As the code is only valid for a short time, without access to the shared secret, an adversary cannot generate new codes.

If you have a hardware security key with TOTP support (such as a YubiKey with [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/)), we recommend that you store your "shared secrets" on the hardware. Hardware such as the YubiKey was developed with the intention of making the "shared secret" difficult to extract and copy. A YubiKey is also not connected to the Internet, unlike a phone with a TOTP app.

Unlike [WebAuthn](#fido-fast-identity-online), TOTP offers no protection against [phishing](https://en.wikipedia.org/wiki/Phishing) or reuse attacks. If an adversary obtains a valid code from you, they may use it as many times as they like until it expires (generally 60 seconds).

An adversary could set up a website to imitate an official service in an attempt to trick you into giving out your username, password and current TOTP code. If the adversary then uses those recorded credentials they may be able to log into the real service and hijack the account.

Although not perfect, TOTP is secure enough for most people, and when [hardware security keys](../multi-factor-authentication.md#hardware-security-keys) are not supported [authenticator apps](../multi-factor-authentication.md#authenticator-apps) are still a good option.

### Hardware security keys

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

För webbtjänster används det vanligtvis tillsammans med WebAuthn som är en del av [W3C:s rekommendationer](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#W3C_recommendation_(REC)). Det använder autentisering med offentliga nycklar och är säkrare än delade hemligheter som används i Yubico OTP- och TOTP-metoder, eftersom det innehåller ursprungsnamnet (vanligtvis domännamnet) under autentisering. Intyg tillhandahålls för att skydda dig från nätfiskeattacker, eftersom det hjälper dig att avgöra att du använder den autentiska tjänsten och inte en falsk kopia.

Till skillnad från Yubico OTP använder WebAuthn inget offentligt ID, så nyckeln är **inte** identifierbar på olika webbplatser. Det använder inte heller någon tredje parts molnserver för autentisering. All kommunikation sker mellan nyckeln och den webbplats du loggar in på. FIDO använder också en räknare som ökas vid användning för att förhindra återanvändning av sessioner och klonade tangenter.

Om en webbplats eller tjänst stöder WebAuthn för autentisering rekommenderas det starkt att du använder den över alla andra former av MFA.

## Allmänna rekommendationer

Vi har dessa allmänna rekommendationer:

### Vilken metod ska jag använda?

När du konfigurerar din MFA-metod, kom ihåg att den bara är lika säker som den svagaste autentiseringsmetoden du använder. Det är därför viktigt att du endast använder den bästa MFA-metoden som finns tillgänglig. Om du till exempel redan använder TOTP bör du inaktivera MFA för e-post och SMS. Om du redan använder FIDO2/WebAuthn bör du inte använda Yubico OTP eller TOTP på ditt konto.

### Säkerhetskopior

Du bör alltid ha säkerhetskopior av din MFA-metod. Säkerhetsnycklar för maskinvara kan förloras, stjälas eller helt enkelt sluta fungera med tiden. Det rekommenderas att du har ett par hårdvarusäkerhetsnycklar med samma åtkomst till dina konton istället för bara en.

När du använder TOTP med en autentiseringsapp ska du se till att säkerhetskopiera dina återställningsnycklar eller själva appen, eller kopiera de "delade hemligheterna" till en annan instans av appen på en annan telefon eller till en krypterad behållare (t.ex. [VeraCrypt](../encryption.md#veracrypt)).

### Inledande inställning

När du köper en säkerhetsnyckel är det viktigt att du ändrar standardinloggningsuppgifterna, ställer in lösenordsskydd för nyckeln och aktiverar touchbekräftelse om nyckeln stöder det. Produkter som YubiKey har flera gränssnitt med separata referenser för var och en av dem, så du bör gå över varje gränssnitt och ställa in skydd också.

### E-post och SMS

Om du måste använda e-post för MFA ska du se till att e-postkontot i sig är skyddat med en lämplig MFA-metod.

Om du använder SMS MFA, använd en operatör som inte byter ditt telefonnummer till ett nytt SIM-kort utan tillgång till kontot, eller använd ett dedikerat VoIP-nummer från en leverantör med liknande säkerhet för att undvika en [SIM swap-attack](https://en.wikipedia.org/wiki/SIM_swap_scam).

[MFA-verktyg som vi rekommenderar](../multi-factor-authentication.md ""){.md-button}

## Fler ställen att inrätta MFA

Flerfaktorsautentisering kan användas för att säkra lokala inloggningar, SSH-nycklar eller till och med lösenordsdatabaser.

### Windows

Yubico har en dedikerad [Credential Provider](https://docs.microsoft.com/en-us/windows/win32/secauthn/credential-providers-in-windows) som lägger till Challenge-Response-autentisering för inloggningsflödet med användarnamn och lösenord för lokala Windows-konton. Om du har en YubiKey med stöd för autentisering med utmaningssvar kan du ta en titt på [Yubico Login for Windows Configuration Guide](https://support.yubico.com/hc/en-us/articles/360013708460-Yubico-Login-for-Windows-Configuration-Guide), där du kan konfigurera MFA på din Windows-dator.

### macOS

macOS har [inbyggt stöd](https://support.apple.com/guide/deployment/intro-to-smart-card-integration-depd0b888248/web) för autentisering med smarta kort (PIV). Om du har ett smartkort eller en hårdvarunyckel som stöder PIV-gränssnittet, till exempel YubiKey, rekommenderar vi att du följer dokumentationen från leverantören av smartkortet eller hårdvarunyckeln och konfigurerar andrafaktorsautentisering för din macOS-dator.

[Använda din YubiKey som ett smartkort i macOS](https://support.yubico.com/hc/en-us/articles/360016649059) som kan hjälpa dig att ställa in din YubiKey på macOS.

När din smartkort/säkerhetsnyckel har ställts in rekommenderar vi att du kör det här kommandot i terminalen:

```text
sudo defaults write /Library/Preferences/com.apple.loginwindow DisableFDEAutoLogin -bool YES
```

Kommandot förhindrar att en motståndare kringgår MFA när datorn startar.

### Linux

!!! varning

    Om värdnamnet på ditt system ändras (till exempel på grund av DHCP), skulle du inte kunna logga in. Det är viktigt att du skapar ett korrekt värdnamn för din dator innan du följer den här guiden.

Modulen `pam_u2f` på Linux kan ge tvåfaktorsautentisering för inloggning på de flesta populära Linuxdistributioner. Om du har en maskinvarusäkerhetsnyckel som stöder U2F kan du konfigurera MFA-autentisering för inloggning. Yubico har en guide [Ubuntu Linux Login Guide - U2F](https://support.yubico.com/hc/en-us/articles/360016649099-Ubuntu-Linux-Login-Guide-U2F) som borde fungera för alla distributioner. Pakethanteraren kommandon-såsom `apt-get`-och paketnamn kan dock skilja sig. Den här guiden gäller **inte** för Qubes OS.

### Qubes OS

Qubes OS har stöd för autentisering med Challenge-Response-autentisering med YubiKeys. Om du har en YubiKey med stöd för autentisering med utmaningssvar kan du ta en titt på dokumentationen för Qubes OS [YubiKey](https://www.qubes-os.org/doc/yubikey/) om du vill konfigurera MFA på Qubes OS.

### SSH

#### Hårdvarusäkerhetsnycklar

SSH MFA kan konfigureras med flera olika autentiseringsmetoder som är populära med hårdvarusäkerhetsnycklar. Vi rekommenderar att du läser Yubicos dokumentation på [](https://developers.yubico.com/SSH/) om hur du ställer in detta.

#### Tidsbaserat engångslösenord (TOTP)

SSH MFA kan också ställas in med TOTP. DigitalOcean har tillhandahållit en handledning [Hur man ställer in flerfaktorsautentisering för SSH på Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-multi-factor-authentication-for-ssh-on-ubuntu-20-04). Det mesta bör vara likadant oavsett distribution, men kommandona för pakethanteraren - t. ex. `apt-get`- och paketnamnen kan skilja sig åt.

### KeePass (och KeePassXC)

KeePass- och KeePassXC-databaser kan säkras med hjälp av Challenge-Response eller HOTP som andrafaktorsautentisering. Yubico har tillhandahållit ett dokument för KeePass [Using Your YubiKey with KeePass](https://support.yubico.com/hc/en-us/articles/360013779759-Using-Your-YubiKey-with-KeePass) och det finns också ett dokument på webbplatsen [KeePassXC](https://keepassxc.org/docs/#faq-yubikey-2fa).

---
title: "Multi-Factor Authenticators"
icon: 'material/two-factor-authentication'
description: These tools assist you with securing your internet accounts with Multi-Factor Authentication without sending your secrets to a third-party.
---

## Hardware Security Keys

### YubiKey

!!! recommendation

    ![YubiKeys](assets/img/multi-factor-authentication/yubikey.png)
    
    The **YubiKeys** are among the most popular security keys. Some YubiKey models have a wide range of features such as: [Universal 2nd Factor (U2F)](https://en.wikipedia.org/wiki/Universal_2nd_Factor), [FIDO2 and WebAuthn](basics/multi-factor-authentication.md#fido-fast-identity-online), [Yubico OTP](basics/multi-factor-authentication.md#yubico-otp), [Personal Identity Verification (PIV)](https://developers.yubico.com/PIV), [OpenPGP](https://developers.yubico.com/PGP/), [TOTP and HOTP](https://developers.yubico.com/OATH) authentication.
    
    One of the benefits of the YubiKey is that one key can do almost everything (YubiKey 5), you could expect from a hardware security key. We do encourage you to take the [quiz](https://www.yubico.com/quiz/) before purchasing in order to make sure you make the right choice.
    
    [:octicons-home-16: Homepage](https://www.yubico.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.yubico.com/support/terms-conditions/privacy-notice){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.yubico.com/){ .card-link title=Documentation}

The [comparison table](https://www.yubico.com/store/compare/) shows the features and how the YubiKeys compare. We highly recommend that you select keys from the YubiKey 5 Series.

YubiKeys can be programmed using the [YubiKey Manager](https://www.yubico.com/support/download/yubikey-manager/) or [YubiKey Personalization Tools](https://www.yubico.com/support/download/yubikey-personalization-tools/). For managing TOTP codes, you can use the [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/). All of Yubico's clients are open-source.

For models which support HOTP and TOTP, there are 2 slots in the OTP interface which could be used for HOTP and 32 slots to store TOTP secrets. These secrets are stored encrypted on the key and never expose them to the devices they are plugged into. Once a seed (shared secret) is given to the Yubico Authenticator, it will only give out the six-digit codes, but never the seed. This security model helps limit what an attacker can do if they compromise one of the devices running the Yubico Authenticator and make the YubiKey resistant to a physical attacker.

!!! warning
    The firmware of YubiKey is not open-source and is not updatable. If you want features in newer firmware versions, or if there is a vulnerability in the firmware version you are using, you would need to purchase a new key.

### Nitrokey

!!! recommendation

    ![Nitrokey](assets/img/multi-factor-authentication/nitrokey.jpg){ align=right }
    
    **Nitrokey** har en säkerhetsnyckel som kan [FIDO2 och WebAuthn](basics/multi-factor-authentication.md#fido-fast-identity-online) som heter **Nitrokey FIDO2**. För PGP-stöd måste du köpa en av deras andra nycklar som * * Nitrokey Start * *, * *NitrokeyPro 2** eller **NitrokeyStorage 2**.
    
    [:octicons-home-16: Repository](https://github.com/Hackeralert/Picocrypt){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/Hackeralert/Picocrypt){ .card-link title="Source Code" }
    [:octicons-info-16:](https://docs.nitrokey.com){ .card-link title=Contribute}

Jämförelsetabellen [](https://www.nitrokey.com/#comparison) visar funktionerna och hur Nitrokey-modellerna jämför. De **Nitrokey 3** listade kommer att ha en kombinerad funktionsuppsättning.

Nitrokey-modeller kan konfigureras med [Nitrokey-appen](https://www.nitrokey.com/download).

För de modeller som stöder HOTP och TOTP finns det 3 platser för HOTP och 15 för TOTP. Vissa Nitrokeys kan fungera som en lösenordshanterare. De kan lagra 16 olika autentiseringsuppgifter och kryptera dem med samma lösenord som OpenPGP-gränssnittet.

!!! varning

    Även om Nitrokeys inte lämnar ut HOTP/TOTP-hemligheterna till den enhet de är anslutna till, är HOTP- och TOTP-lagringen **inte** krypterad och sårbar för fysiska attacker. Om du vill lagra HOTP- eller TOTP-hemligheter rekommenderar vi starkt att du använder en Yubikey i stället.

!!! varning

    Återställning av OpenPGP-gränssnittet på en Nitrokey kommer också att göra lösenordsdatabasen [inaccessible](https://docs.nitrokey.com/pro/linux/factory-reset).

The Nitrokey Pro 2, Nitrokey Storage 2, and the upcoming Nitrokey 3 supports system integrity verification for laptops with the [Coreboot](https://www.coreboot.org/) + [Heads](https://osresearch.net/) firmware.

Nitrokey firmware är öppen källkod, till skillnad från YubiKey. Den inbyggda programvaran på moderna NitroKey-modeller (utom **NitroKey Pro 2**) kan uppdateras.

### Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

#### Minimikrav

- Måste använda högkvalitativa, manipuleringssäkra hårdvarusäkerhetsmoduler.
- Måste stödja den senaste FIDO2-specifikationen.
- Får inte tillåta utvinning av privata nycklar.
- Enheter som kostar mer än 35 dollar måste ha stöd för hantering av OpenPGP och S/MIME.

#### Bästa fall

Våra kriterier för bästa fall representerar vad vi skulle vilja se av det perfekta projektet i denna kategori. Våra rekommendationer kanske inte innehåller alla eller några av dessa funktioner, men de som gör det kan vara högre rankade än andra på den här sidan.

- Bör finnas tillgänglig i USB-C-format.
- Bör finnas tillgängligt med NFC.
- Bör stödja TOTP hemlig lagring.
- Bör stödja säkra uppdateringar av fast programvara.

## Autentiseringsapp

Authenticator Apps implementerar en säkerhetsstandard som antagits av Internet Engineering Task Force (IETF) kallad **Time-based Engångslösenord**eller **TOTP**. Detta är en metod där webbplatser delar en hemlighet med dig som används av din autentiseringsapp för att generera en sex (vanligtvis) siffrig kod baserat på aktuell tid, som du anger när du loggar in för att webbplatsen ska kontrollera. Vanligtvis regenereras dessa koder var 30: e sekund, och när en ny kod genereras blir den gamla värdelös. Även om en hackare får tag på en sexsiffrig kod finns det inget sätt för dem att vända på koden för att få fram den ursprungliga hemligheten eller på annat sätt kunna förutsäga vad framtida koder kan vara.

Vi rekommenderar starkt att du använder mobila TOTP-appar i stället för alternativ för datorer eftersom Android och iOS har bättre säkerhet och appisolering än de flesta operativsystem för datorer.

### Aegis Authenticator (Android)

!!! recommendation

    ![Aegis logotyp](assets/img/multi-factor-authentication/aegis.png){ align=right }
    
    **Aegis Authenticator** är en gratis, säker och öppen källkodsapp för att hantera dina tvåstegsverifieringstokens för dina onlinetjänster.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/beemdevelopment/Aegis/wiki/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/beemdevelopment/Aegis){ .card-link title="Källkod" }
    [:octicons-heart-16:](https://www.buymeacoffee.com/beemdevelopment/){ .card-link title=Contribute }
    
    ??? nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
        - [:simple-github: App Store](https://github.com/beemdevelopment/Aegis/releases)

### Raivo OTP (iOS)

!!! recommendation

    ![Raivo OTP-logotyp](assets/img/multi-factor-authentication/raivo-otp.png){ align=right }
    
    **Raivo OTP** är en inbyggd, lätt och säker tidsbaserad (TOTP) & kontrabaserad (HOTP) lösenordsklient för iOS. Raivo OTP erbjuder valfri iCloud backup & synkronisering. Raivo OTP finns också tillgängligt för macOS i form av en applikation i statusfältet, men Mac-appen fungerar inte oberoende av iOS-appen.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-code-16:](https://github.com/raivo-otp/ios-application/){ .card-link title=Dokumentation}
    [:octicons-heart-16:](https://raivo-otp.com/donate){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/raivo-otp/id1459042137)

### Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

- Måste vara programvara med öppen källkod.
- Får inte kräva internetuppkoppling.
- Must not sync to a third-party cloud sync/backup service.
    - **Optional** E2EE sync support with OS-native tools is acceptable, e.g. encrypted sync via iCloud.

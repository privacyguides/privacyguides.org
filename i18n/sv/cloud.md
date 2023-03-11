---
title: "Molnlagring"
icon: material/file-cloud
description: Many cloud storage providers require your trust that they will not look at your files. These are private alternatives!
---

Många molnlagringsleverantörer kräver ditt fulla förtroende för att de inte kommer att titta på dina filer. Alternativen nedan eliminerar behovet av förtroende genom att antingen ge dig kontroll över dina data eller genom att implementera E2EE.

Om dessa alternativ inte passar dina behov föreslår vi att du tittar på [Encryption Software](encryption.md).

??? fråga "Letar du efter Nextcloud?"

    Nextcloud är [fortfarande ett rekommenderat verktyg](productivity.md) för att själv hosta en filhanteringssvit, men vi rekommenderar inte tredjepartsleverantörer av Nextcloud-lagring för tillfället, eftersom vi inte rekommenderar Nextclouds inbyggda E2EE-funktionalitet för hemanvändare.

## Proton Drive

!!! recommendation

    ![Proton Drive-logotyp](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** är en E2EE-tjänst för allmän fillagring från den populära leverantören av krypterad e-post [Proton Mail] (https://proton.me/mail).
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://proton.me/support/drive/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)


## Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

### Minimikrav

- Måste genomdriva end-to-end-kryptering.
- Måste erbjuda en gratis plan eller provperiod för testning.
- Måste stödja TOTP- eller FIDO2-multifaktorautentisering eller inloggning med lösenord.
- Måste erbjuda ett webbgränssnitt som stöder grundläggande filhanteringsfunktioner.
- Måste möjliggöra enkel export av alla filer/dokument.
- Måste använda standard, granskad kryptering.

### Bästa fall

Våra kriterier för bästa fall representerar vad vi skulle vilja se av det perfekta projektet i denna kategori. Våra rekommendationer kanske inte innehåller alla eller några av dessa funktioner, men de som gör det kan vara högre rankade än andra på den här sidan.

- Klienterna bör ha öppen källkod.
- Klienterna bör granskas i sin helhet av en oberoende tredje part.
- De bör erbjuda inhemska klienter för Linux, Android, Windows, macOS och iOS.
    - Dessa klienter bör integreras med operativsystemets verktyg för leverantörer av molnlagring, t. ex. integrering av Files-appen i iOS eller DocumentsProvider-funktionen i Android.
- Det bör vara enkelt att dela filer med andra användare.
- Bör erbjuda åtminstone grundläggande funktioner för förhandsgranskning och redigering av filer i webbgränssnittet.

---
title: "Fildelning och synkronisering"
icon: material/share-variant
description: Upptäck hur du kan dela dina filer privat mellan dina enheter, med vänner och familj eller anonymt på nätet.
---

Upptäck hur du kan dela dina filer privat mellan dina enheter, med vänner och familj eller anonymt på nätet.

## Fildelningsprogram

### Skicka

!!! recommendation

    ![Send logo](assets/img/file-sharing-sync/send.svg){ align=right }
    
    **Send** är en förgrening av Mozillas nedlagda Firefox Send-tjänst som låter dig skicka filer till andra med en länk. Filerna krypteras på din enhet så att de inte kan läsas av servern, och de kan också skyddas med lösenord. Den som upprätthåller Send är värd för en [offentlig instans] (https://send.vis.ee/). Du kan använda andra offentliga instanser, eller du kan vara värd för Skicka själv.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-server-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/timvisee/send#readme/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/timvisee/send){ .card-link title="Källkod" }
    [:octicons-heart-16:](https://github.com/sponsors/timvisee/){ .card-link title=Contribute }

Send kan användas via webbgränssnittet eller via [ffsend](https://github.com/timvisee/ffsend) CLI. Om du känner till kommandoraden och skickar filer ofta rekommenderar vi att du använder CLI-klienten för att undvika JavaScript-baserad kryptering. Du kan ange flaggan `- värd` för att använda en specifik server:

```bash
ffsend upload --host https://send.vis.ee/ FILE
```

### OnionShare

!!! recommendation

    ![OnionShare-logotyp](assets/img/file-sharing-sync/onionshare.svg){ align=right }
    
    **OnionShare** är ett verktyg med öppen källkod som låter dig dela en fil av valfri storlek på ett säkert och anonymt sätt. Det fungerar genom att starta en webbserver som är tillgänglig som en Tor onion-tjänst, med en oigenkännlig URL som du kan dela med mottagarna för att ladda ner eller skicka filer.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:simple-torbrowser:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.onionshare.org/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/onionshare/onionshare){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-windows11: Windows](https://onionshare.org/#download)
        - [:simple-apple: macOS](https://onionshare.org/#download)
        - [:simple-linux: Linux](https://onionshare.org/#download)

### Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

- Får inte lagra dekrypterade data på en fjärrserver.
- Måste vara programvara med öppen källkod.
- Måste antingen ha klienter för Linux, macOS och Windows eller ha ett webbgränssnitt.

## FreedomBox

!!! recommendation

    ![FreedomBox-logotyp](assets/img/file-sharing-sync/freedombox.svg){ align=right }
    
    **FreedomBox** är ett operativsystem som är utformat för att köras på en [single-board computer (SBC)] (https://en.wikipedia.org/wiki/Single-board_computer). Syftet är att göra det enkelt att konfigurera serverprogram som du kanske vill vara värd för själv.
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://salsa.debian.org/freedombox-team/freedombox){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://freedomboxfoundation.org/donate){ .card-link title=Contribute }

## Filsynkronisering

### Nextcloud (klient-server)

!!! recommendation

    ![Nextcloud-logotyp](assets/img/productivity/nextcloud.svg){ align=right }
    
    **Nextcloud** är en svit med gratis klient-serverprogramvara med öppen källkod för att skapa egna filhostingtjänster på en privat server som du kontrollerar.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://nextcloud.com/support/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/nextcloud){ .card-link title="Källkod" }
    [:octicons-heart-16:](https://nextcloud.com/contribute/){ .card-link title=Contribute }
    
    ??? nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1125420102)
        - [:simple-github: GitHub](https://github.com/nextcloud/android/releases)
        - [:simple-windows11: Windows](https://nextcloud.com/install/#install-clients)
        - [:simple-apple: macOS](https://nextcloud.com/install/#install-clients)
        - [:simple-linux: Linux](https://nextcloud.com/install/#install-clients)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/www/nextcloud)

!!! fara

    Vi rekommenderar inte att du använder [E2EE App](https://apps.nextcloud.com/apps/end_to_end_encryption) för Nextcloud eftersom det kan leda till dataförluster; det är mycket experimentellt och inte av produktionskvalitet.

### Synkronisering (P2P)

!!! recommendation

    ![Synkronisera logotyp](assets/img/file-sharing-sync/syncthing.svg){ align=right }
    
    **Syncthing** är ett verktyg för kontinuerlig filsynkronisering med öppen källkod. Det används för att synkronisera filer mellan två eller flera enheter över det lokala nätverket eller internet. Synkronisering använder inte en centraliserad server; den använder [Block Exchange Protocol](https://docs.syncthing.net/specs/bep-v1.html #bep-v1) för att överföra data mellan enheter. All data krypteras med TLS.
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/syncthing){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://syncthing.net/donations){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid)
        - [:simple-windows11: Windows](https://syncthing.net/downloads/)
        - [:simple-apple: macOS](https://syncthing.net/downloads/)
        - [:simple-linux: Linux](https://syncthing.net/downloads/)
        - [:simple-freebsd: FreeBSD](https://syncthing.net/downloads/)
        - [:simple-openbsd: OpenBSD](https://syncthing.net/downloads/)
        - [:simple-netbsd: NetBSD](https://syncthing.net/downloads/)

### Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

#### Minimikrav

- Får inte kräva en fjärr-/molnserver från tredje part.
- Måste vara programvara med öppen källkod.
- Måste antingen ha klienter för Linux, macOS och Windows eller ha ett webbgränssnitt.

#### Bästa fall

Våra kriterier för bästa fall representerar vad vi skulle vilja se av det perfekta projektet i denna kategori. Våra rekommendationer kanske inte innehåller alla eller några av dessa funktioner, men de som gör det kan vara högre rankade än andra på den här sidan.

- Har mobila klienter för iOS och Android, som åtminstone stöder förhandsgranskning av dokument.
- Stöder säkerhetskopiering av foton från iOS och Android, och stöder som tillval synkronisering av filer och mappar på Android.

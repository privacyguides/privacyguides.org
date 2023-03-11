---
title: "Anteckningsböcker"
icon: material/notebook-edit-outline
description: These encrypted note-taking apps let you keep track of your notes without giving them to a third-party.
---

Håll koll på dina anteckningar och dagboksanteckningar utan att ge dem till tredje part.

Om du för närvarande använder ett program som Evernote, Google Keep eller Microsoft OneNote föreslår vi att du väljer ett alternativ som stöder E2EE.

## Molnbaserad

### Joplin

!!! recommendation

    ![Joplin-logotyp](assets/img/notebooks/joplin.svg){ align=right }
    
    **Joplin** är ett kostnadsfritt, öppen källkod och fullt utrustat program för anteckningar och att göra som kan hantera ett stort antal markdown-noter organiserade i anteckningsböcker och taggar. Det erbjuder E2EE och kan synkroniseras via Nextcloud, Dropbox och mer. Det erbjuder också enkel import från Evernote och vanlig text anteckningar.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://joplinapp.org/help/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/laurent22/joplin){ .card-link title="Källkod" }
    [:octicons-heart-16:](https://joplinapp.org/donate/){ .card-link title=Contribute }
    
    ??? nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.cozic.joplin)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/joplin/id1315599797)
        - [:simple-github: GitHub](https://github.com/laurent22/joplin-android/releases)
        - [:simple-windows11: Windows](https://joplinapp.org/#desktop-applications)
        - [:simple-apple: macOS](https://joplinapp.org/#desktop-applications)
        - [:simple-linux: Linux](https://joplinapp.org/#desktop-applications)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/joplin-web-clipper/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/joplin-web-clipper/alofnhikmmk

Joplin stöder inte lösenord/PIN-skydd för [applikationen själv eller enskilda anteckningar och anteckningsböcker](https://github.com/laurent22/joplin/issues/289). Dina data är dock fortfarande krypterade under överföring och på synkroniseringsplatsen med hjälp av huvudnyckeln. Sedan januari 2023 stöder Joplin biometrisk applåsning för [Android](https://joplinapp.org/changelog_android/#android-v2-10-3-https-github-com-laurent22-joplin-releases-tag-android-v2-10-3-pre-release-2023-01-05t11-29-06z) och [iOS](https://joplinapp.org/changelog_ios/#ios-v12-10-2-https-github-com-laurent22-joplin-releases-tag-ios-v12-10-2-2023-01-20t17-41-13z).

### Standardnoteringar

!!! recommendation

    ![Standard Notes logo](assets/img/notebooks/standard-notes.svg){ align=right }
    
    **Standard Notes** är en enkel och privat anteckningsapp som gör dina anteckningar enkla och tillgängliga överallt. Den har E2EE på alla plattformar och en kraftfull skrivbordsupplevelse med teman och anpassade redaktörer. Den har också [reviderats av en oberoende revisionsbyrå (PDF)] (https://s3.amazonaws.com/standard-notes/security/Report-SN-Audit.pdf).
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://standardnotes.com/help/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/standardnotes){ .card-link title="Källkod" }
    [:octicons-heart-16:](https://standardnotes.com/donate/){ .card-link title=Contribute }
    
    ??? nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.standardnotes)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1285392450)
        - [:simple-github: GitHub](https://github.com/standardnotes/app/releases)
        - [:simple-windows11: Windows](https://standardnotes.com)
        - [:simple-apple: macOS](https://standardnotes.com)
        - [:simple-linux: Linux](https://standardnotes.com)
        - [:octicons-globe-16: Web](https://app.standardnotes.com/)

### Cryptee

!!! recommendation

    ![Cryptee-logotyp](./assets/img/notebooks/cryptee.svg#only-light){ align=right }
    ![Cryptee logo](./assets/img/notebooks/cryptee-dark.svg#only-dark){ align=right }
    
    **Cryptee** är en webbaserad E2EE-dokumentredigerare med öppen källkod och ett program för lagring av foton. Cryptee är en PWA, vilket innebär att den fungerar smidigt på alla moderna enheter utan att kräva inbyggda appar för varje plattform.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://crypt.ee/help/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/cryptee){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? nedladdningar
    
        - [:octicons-globe-16: Flathub](https://crypt.ee/download)

Cryptee erbjuder 100 Mb lagring gratis, med betalalternativ om du behöver mer. För att registrera dig krävs ingen e-post eller annan personligt identifierbar information.

## Lokala anteckningsböcker

### Org-läge

!!! recommendation

    ![Org-mode logo](assets/img/notebooks/org-mode.svg){ align=right }
    
    **Org-mode** är ett [major mode] (https://www.gnu.org/software/emacs/manual/html_node/elisp/Major-Modes.html) för GNU Emacs. Org-mode är till för att föra anteckningar, upprätthålla TODO-listor, planera projekt och skriva dokument med ett snabbt och effektivt system för klartext. Synkronisering är möjlig med [filsynkronisering](file-sharing.md#file-sync)-verktyg.
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://git.savannah.gnu.org/cgit/emacs/org-mode.git){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://liberapay.com/bzg){ .card-link title=Contribute }

## Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

- Klienterna bör ha öppen källkod.
- Alla funktioner för molnsynkronisering måste vara E2EE.
- Måste stödja export av dokument till ett standardformat.

### Bästa fall

- Funktioner för lokal säkerhetskopiering/synkronisering bör stödja kryptering.
- Molnbaserade plattformar bör stödja delning av dokument.

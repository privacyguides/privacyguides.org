---
title: "Lösenordshanterare"
icon: material/form-textbox-password
description: Password managers allow you to securely store and manage passwords and other credentials.
schema:
  - 
    "@context": http://schema.org
    "@type": WebPage
    name: Password Manager Recommendations
    url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Bitwarden
    image: /assets/img/password-management/bitwarden.svg
    url: https://bitwarden.com
    sameAs: https://en.wikipedia.org/wiki/Bitwarden
    applicationCategory: Password Manager
    operatingSystem:
      - Windows
      - macOS
      - Linux
      - Android
      - iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: 1Password
    image: /assets/img/password-management/1password.svg
    url: https://1password.com
    sameAs: https://en.wikipedia.org/wiki/1Password
    applicationCategory: Password Manager
    operatingSystem:
      - Windows
      - macOS
      - Linux
      - Android
      - iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Psono
    image: /assets/img/password-management/psono.svg
    url: https://psono.com
    applicationCategory: Password Manager
    operatingSystem:
      - Android
      - iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: KeePassXC
    image: /assets/img/password-management/keepassxc.svg
    url: https://keepassxc.org/
    sameAs: https://en.wikipedia.org/wiki/KeePassXC
    applicationCategory: Password Manager
    operatingSystem:
      - Windows
      - macOS
      - Linux
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: KeePassDX
    image: /assets/img/password-management/keepassdx.svg
    url: https://www.keepassdx.com/
    applicationCategory: Password Manager
    operatingSystem: Android
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: Strongbox
    image: /assets/img/password-management/strongbox.svg
    url: https://strongboxsafe.com/
    applicationCategory: Password Manager
    operatingSystem: iOS
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
  - 
    "@context": http://schema.org
    "@type": SoftwareApplication
    name: gopass
    image: /assets/img/password-management/gopass.svg
    url: https://www.gopass.pw/
    applicationCategory: Password Manager
    operatingSystem:
      - Windows
      - macOS
      - Linux
      - FreeBSD
    subjectOf:
      "@context": http://schema.org
      "@type": WebPage
      url: "./"
---

Lösenordshanterare gör att du kan lagra och hantera lösenord och andra autentiseringsuppgifter på ett säkert sätt med hjälp av ett huvudlösenord.

[Introduktion till lösenord :material-arrow-right-drop-circle:](./basics/passwords-overview.md)

!!! info

    Inbyggda lösenordshanterare i programvaror som webbläsare och operativsystem är ibland inte lika bra som en särskild programvara för lösenordshantering. Fördelen med en inbyggd lösenordshanterare är att den är väl integrerad med programvaran, men den kan ofta vara mycket enkel och saknar integritets- och säkerhetsfunktioner som fristående produkter har.
    
    Lösenordshanteraren i Microsoft Edge erbjuder till exempel inte alls E2EE. Googles lösenordshanterare har [optional](https://support.google.com/accounts/answer/11350823) E2EE, och [Apple's](https://support.apple.com/en-us/HT202303) erbjuder E2EE som standard.

## Molnbaserad

Dessa lösenordshanterare synkroniserar dina lösenord till en molnserver så att du enkelt kan komma åt dem från alla dina enheter och för att skydda dig mot förlust av enheter.

### Bitwarden

!!! recommendation

    ![Bitwardens logotyp](assets/img/password-management/bitwarden.svg){ align=right }
    
    **Bitwarden** är en gratis lösenordshanterare med öppen källkod. Syftet är att lösa problem med lösenordshantering för enskilda personer, grupper och företag. Bitwarden är en av de bästa och säkraste lösningarna för att lagra alla dina inloggningar och lösenord och samtidigt hålla dem synkroniserade mellan alla dina enheter.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://bitwarden.com/help/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/bitwarden){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? :simple-microsoftedge: nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden)
        - [:simple-appstore: App Store](https://apps.apple.com/app/bitwarden-password-manager/id1137397744)
        - [:simple-github: GitHub](https://github.com/bitwarden/mobile/releases)
        - [:simple-windows11: Windows](https://bitwarden.com/download)
        - [:simple-linux: Linux](https://bitwarden.com/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/com.bitwarden.desktop)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/bitwarden-free-password-

Bitwarden har också [Bitwarden Send](https://bitwarden.com/products/send/), vilket gör att du kan dela text och filer säkert med [end-to-end-kryptering](https://bitwarden.com/help/send-encryption). Ett lösenord [](https://bitwarden.com/help/send-privacy/#send-passwords) kan krävas tillsammans med sändningslänken. Bitwarden Send har också [automatisk radering](https://bitwarden.com/help/send-lifespan).

Du behöver [Premium Plan](https://bitwarden.com/help/about-bitwarden-plans/#compare-personal-plans) för att kunna dela filer. Gratisabonnemanget tillåter endast textdelning.

Bitwardens kod på serversidan är [öppen källkod](https://github.com/bitwarden/server), så om du inte vill använda Bitwardens moln kan du enkelt vara värd för din egen Bitwarden-synkroniseringsserver.

**Vaultwarden** är en alternativ implementering av Bitwardens synkroniseringsserver skriven i Rust och kompatibel med officiella Bitwarden-klienter, perfekt för självhostad distribution där körning av den officiella resurstunga tjänsten kanske inte är idealisk. Om du vill vara värd för Bitwarden på din egen server, vill du nästan säkert använda Vaultwarden över Bitwardens officiella serverkod.

[:octicons-repo-16: Vaultwardens utvecklingskatalog](https://github.com/dani-garcia/vaultwarden ""){.md-button} [:octicons-info-16:](https://github.com/dani-garcia/vaultwarden/wiki){ . ard-link title=Dokumentation}
[:octicons-code-16:](https://github.com/dani-garcia/vaultwarden){ . ard-link title="Källkod" }
[:octicons-heart-16:](https://github.com/sponsors/dani-garcia){ .card-link title=Contribute }

### 1Password

!!! recommendation

    ![1Password logo](assets/img/password-management/1password.svg){ align=right }
    
    **1Password** är en lösenordshanterare med starkt fokus på säkerhet och användarvänlighet, som gör att du kan lagra lösenord, kreditkort, programlicenser och annan känslig information i ett säkert digitalt valv. Ditt valv lagras på 1Passwords servrar för en [månadsavgift] (https://1password.com/sign-up/). 1Password är [audited](https://support.1password.com/security-assessments/) på regelbunden basis och erbjuder exceptionell kundsupport. 1Password är en sluten källa, men produktens säkerhet dokumenteras noggrant i deras [white paper om säkerhet](https://1passwordstatic.com/files/security/1password-white-paper.pdf).
    
    [:octicons-home-16: Repository](https://github.com/Hackeralert/Picocrypt){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/Hackeralert/Picocrypt){ .card-link title="Source Code" }
    [:octicons-info-16:](https://support.1password.com){ .card-link title=Contribute??? nedladdningar    - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.onepassword.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1511601750?mt=8)
        - [:simple-windows11: Android]()
        - [:simple-apple: Windows]()
        - [:simple-linux: macOS]()
        - [ Linux]()
        - [ Flathub/)

Traditionellt har **1Password** erbjudit den bästa användarupplevelsen av lösenordshanteraren för personer som använder macOS och iOS, men nu har den fått samma funktioner på alla plattformar. Den har många funktioner som är inriktade på familjer och mindre tekniska personer, samt avancerad funktionalitet.

Ditt 1Password-valv är skyddat med både ditt huvudlösenord och en slumpmässig 34-teckig säkerhetsnyckel för att kryptera dina data på deras servrar. Den här säkerhetsnyckeln ger dina data ett extra skydd eftersom dina data är säkrade med hög entropi oavsett huvudlösenordet. Många andra lösenordshanteringslösningar är helt beroende av styrkan i ditt huvudlösenord för att säkra dina data.

En fördel som 1Password har jämfört med Bitwarden är dess förstklassiga stöd för inhemska klienter. Medan Bitwarden hänvisar många uppgifter, särskilt kontohanteringsfunktioner, till sitt webbgränssnitt, gör 1Password nästan alla funktioner tillgängliga i sina mobila och stationära klienter. 1Password-klienterna har också ett mer intuitivt användargränssnitt, vilket gör dem lättare att använda och navigera.

### Psono

!!! recommendation

    ![Psono-logotyp](assets/img/password-management/psono.svg){ align=right }
    
    **Psono** är en gratis lösenordshanterare med öppen källkod från Tyskland, med fokus på lösenordshantering för team. Psono stöder säker delning av lösenord, filer, bokmärken och e-post. Alla hemligheter skyddas av ett huvudlösenord.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://doc.psono.com/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://gitlab.com/psono){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.psono.psono)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/psono-password-manager/id1545581224)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/psono-pw-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/psonopw-password-manager/eljmjmgjkbmpmfljlmklcfineebidmlo)
        - [:simple-docker: Docker Hub](https://hub.docker.com/r/psono/psono-client)

Psono tillhandahåller omfattande dokumentation för sin produkt. Webbklienten för Psono kan vara självhyst, alternativt kan du välja den fullständiga Community Edition eller Enterprise Edition med ytterligare funktioner.

### Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

#### Minimikrav

- Måste använda starka, standardbaserade/moderna E2EE.
- Måste ha noggrant dokumenterade krypterings- och säkerhetsrutiner.
- Måste ha en publicerad revision från en välrenommerad, oberoende tredje part.
- All icke nödvändig telemetri måste vara frivillig.
- Får inte samla in mer PII än vad som är nödvändigt för fakturering.

#### Bästa fall

Våra kriterier för bästa fall representerar vad vi skulle vilja se av det perfekta projektet i denna kategori. Våra rekommendationer kanske inte innehåller alla eller några av dessa funktioner, men de som gör det kan vara högre rankade än andra på den här sidan.

- Telemetri bör vara opt-in (inaktiverad som standard) eller inte samlas in alls.
- Den bör ha öppen källkod och vara någorlunda självhanterlig.

## Lokal lagring

Med dessa alternativ kan du hantera en krypterad lösenordsdatabas lokalt.

### KeePassXC

!!! recommendation

    ![KeePassXC logo](assets/img/password-management/keepassxc.svg){ align=right }
    
    **KeePassXC** är en gemenskapsfork av KeePassX, en inhemsk plattformsoberoende anpassning av KeePass Password Safe, med målet att utöka och förbättra den med nya funktioner och felrättningar för att tillhandahålla en funktionsrik, plattformsoberoende och modern lösenordshanterare med öppen källkod.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://keepassxc.org/docs/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/keepassxreboot/keepassxc){ .card-link title="Källkod" }
    [:octicons-heart-16:](https://keepassxc.org/donate/){ .card-link title=Contribute }
    
    ??? nedladdningar
    
        - [:simple-windows11: Windows](https://keepassxc.org/download/#windows)
        - [:simple-apple: macOS](https://keepassxc.org/download/#mac)
        - [:simple-linux: Linux](https://keepassxc.org/download/#linux)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)

KeePassXC lagrar sina exportdata som [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) -filer. Detta kan innebära att du förlorar data om du importerar filen till en annan lösenordshanterare. Vi rekommenderar att du kontrollerar varje post manuellt.

### KeePassDX (Android)

!!! recommendation

    ![KeePassDX logotyp](assets/img/password-management/keepassdx.svg){ align=right }
    
    **KeePassDX** är en lättviktig lösenordshanterare för Android som gör det möjligt att redigera krypterade data i en enda fil i KeePass-format och fylla i formulär på ett säkert sätt. [Contributor Pro] (https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.pro) gör det möjligt att låsa upp kosmetiskt innehåll och icke-standardiserade protokollfunktioner, men viktigare är att det hjälper och uppmuntrar till utveckling.
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/Kunzisoft/KeePassDX){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.keepassdx.com/#donation){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free)
        - [:simple-github: App Store](https://github.com/Kunzisoft/KeePassDX/releases)

### Strongbox (iOS & macOS)

!!! recommendation

    ![Strongbox-logotyp](assets/img/password-management/strongbox.svg){ align=right }
    
    **Strongbox** är en inhemsk lösenordshanterare med öppen källkod för iOS och macOS. Strongbox stöder både KeePass- och Password Safe-format och kan användas tillsammans med andra lösenordshanterare, som KeePassXC, på andra plattformar än Apple-plattformar. Genom att använda en [freemium modell](https://strongboxsafe.com/pricing/), erbjuder Strongbox de flesta funktioner under sin fria nivå med mer bekvämlighetsinriktad [features](https://strongboxsafe. om/comparison/) – såsom biometrisk autentisering – låst bakom en prenumeration eller evig licens.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://keepassxc.org/docs/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/keepassxreboot/keepassxc){ .card-link title="Källkod" }
    [:octicons-heart-16:](https://keepassxc.org/donate/){ .card-link title=Contribute }
    
    ??? nedladdningar
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/strongbox-keepass-pwsafe/id897283731)

Dessutom finns det en offline-version som erbjuds: [Strongbox Zero](https://apps.apple.com/app/strongbox-keepass-pwsafe/id1581589638). Denna version är avskalad i ett försök att minska angreppsytan.

### Kommandorad

Dessa produkter är minimala lösenordshanterare som kan användas inom skriptprogram.

#### gopass

!!! recommendation

    ![gopass logo](assets/img/password-management/gopass.svg){ align=right }
    
    **gopass** är en lösenordshanterare för kommandoraden skriven i Go. Det fungerar på alla större skrivbords- och serveroperativsystem (Linux, macOS, BSD, Windows).
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-windows11: Windows](https://www.gopass.pw/#install-windows)
        - [:simple-apple: macOS](https://www.gopass.pw/#install-macos)
        - [:simple-linux: Linux](https://www.gopass.pw/#install-linux)
        - [:simple-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd)

### Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

- Måste vara plattformsoberoende.

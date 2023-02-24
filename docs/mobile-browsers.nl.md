---
title: "Mobiele browsers"
icon: octicons/device-mobile-16
---

Dit zijn onze momenteel aanbevolen mobiele webbrowsers en configuraties voor standaard/niet-anoniem internetten. Als je anoniem op het internet moet surfen, gebruik dan [Tor](tor.md). In het algemeen raden we aan om extensies tot een minimum te beperken: ze hebben geprivilegieerde toegang binnen jouw browser, vereisen dat u de ontwikkelaar vertrouwt, kunnen je [doen opvallen](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), en [verzwakken](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) site-isolatie.

## Android

Op Android is Firefox nog steeds minder veilig dan op Chromium gebaseerde alternatieven: Mozilla's engine, [GeckoView](https://mozilla.github.io/geckoview/), moet nog [site-isolatie](https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture) ondersteunen of [isolatedProcess](https://bugzilla.mozilla.org/show_bug.cgi?id=1565196) inschakelen.

### Brave

!!! recommendation

    Brave-logo](assets/img/browsers/brave.svg){ align=right }
    
    **Brave Browser** bevat een ingebouwde adblocker en [privacyfuncties](https://brave.com/privacy-features/), waarvan vele standaard zijn ingeschakeld.
    
    Brave is gebouwd op het Chromium webbrowser project, dus het zou vertrouwd moeten aanvoelen en minimale website compatibiliteitsproblemen moeten hebben.
    
    [:octicons-home-16: Homepage](https://brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://brave.com/privacy/browser/){ .card-link title="Privacy Policy" }.
    [:octicons-info-16:](https://support.brave.com/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/brave/brave-browser){ .card-link title="Broncode" }
    
    ??? downloads annoteren
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.brave.browser)
        - [:simple-github: GitHub](https://github.com/brave/brave-browser/releases)

#### Aanbevolen configuratie

Tor Browser is de enige manier om echt anoniem op het internet te surfen. Wanneer je Brave gebruikt, raden we je aan de volgende instellingen te wijzigen om jouw privacy tegen bepaalde partijen te beschermen, maar alle browsers behalve de [Tor Browser](tor.md#tor-browser) zijn in sommige opzichten traceerbaar door *iemand*.

Deze opties zijn te vinden in :material-menu: → **Instellingen** → **Dappere schilden & privacy**

##### Schilden

Brave bevat een aantal anti-vingerafdruk maatregelen in zijn [Shields](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-) functie. Wij raden aan om deze opties [globaal te configureren](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-) voor alle pagina's die je bezoekt.

##### Brave shields global defaults

De opties van Shields kunnen naar behoefte per site worden aangepast, maar standaard raden wij aan de volgende opties in te stellen:

<div class="annotate" markdown>

- [x] Selecteer **Aggressief** onder Trackers & advertenties blokkeren

    ??? warning "Gebruik standaard filter lijsten"
        Brave staat je toe om extra inhoud filters te selecteren binnen de interne `brave://adblock` pagina. Wij raden het gebruik van deze functie af; houd in plaats daarvan de standaardfilterlijsten aan. Het gebruik van extra lijsten zorgt ervoor dat je zich onderscheidt van andere Brave gebruikers en kan ook het aanvalsoppervlak vergroten als er een exploit in Brave is en een kwaadaardige regel wordt toegevoegd aan één van de lijsten die je gebruikt.

- [x] Selecteer **Upgrade verbindingen naar HTTPS**
- [x] (Optioneel) Selecteer **Block Scripts** (1)
- [x] Selecteer **Streng, kan sites breken** onder **Block fingerprinting**

</div>

1. Deze optie biedt functionaliteit die vergelijkbaar is met uBlock Origin's geavanceerde [blokkeringsmodes](https://github.com/gorhill/uBlock/wiki/Blocking-mode) of de [NoScript](https://noscript.net/) extensie.

##### Browserdata opschonen

- [x] Selecteer **Gegevens wissen bij het sluiten van de browser**

##### Altijd-aan Incognito modus

- [ ] Uncheck alle sociale media componenten uit

##### Privacyrapport

<div class="annotate" markdown>

- [x] Selecteer **Disable non-proxied UDP** onder [WebRTC IP Handling Policy] (https://support.brave.com/hc/nl-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-#webrtc)
- [ ] Selecteer **Sites toestaan te controleren of je betaalmethoden hebt opgeslagen**
- [ ] Selecteer **IPFS Gateway** uit (1)
- [ ] Selecteer **Het vinkje uit. [x] Selecteer **Tabbladen sluiten bij afsluiten**
- [ ] Uitvinken **Privacy-preserving product analytics (P3A) toestaan**
- [ ] Uitvinken **Automatisch diagnoserapporten versturen**
- [ ] Uitvinken **Dagelijkse gebruiksping automatisch naar Brave sturen**

1. [ ] Uitvinken. InterPlanetary File System (IPFS) is een gedecentraliseerd, peer-to-peer netwerk voor het opslaan en delen van gegevens in een gedistribueerd bestandssysteem. Tenzij je de functie gebruikt, schakel hem uit.

</div>

#### Brave Sync

[Brave Sync](https://support.brave.com/hc/en-us/articles/360059793111-Understanding-Brave-Sync) maakt jouw surfgegevens (geschiedenis, bladwijzers, enz.) toegankelijk op al jouw apparaten zonder dat je een account nodig hebt en beschermt ze met E2EE.

## iOS

Op iOS is elke app die op het web kan surfen beperkt tot [](https://developer.apple.com/app-store/review/guidelines) het door Apple geleverde [WebKit framework](https://developer.apple.com/documentation/webkit), dus er is weinig reden om een webbrowser van een derde partij te gebruiken.

### Safari

!!! recommendation

    ![Safari-logo](assets/img/browsers/safari.svg){ align=right }
    
    **Safari** is de standaardbrowser in iOS. Het bevat [privacyfuncties](https://support.apple.com/guide/iphone/browse-the-web-privately-iphb01fc3c85/15.0/ios/15.0) zoals Intelligent Tracking Protection, Privacy Report, geïsoleerde tabbladen voor privénavigatie, iCloud Private Relay, en automatische HTTPS-upgrades.
    
    [:octicons-home-16: Homepage](https://www.apple.com/safari/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/legal/privacy/data/en/safari/){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://support.apple.com/guide/safari/welcome/mac){ .card-link title=Documentatie}

#### Aanbevolen configuratie

Deze opties zijn te vinden onder :gear: **Instellingen** → **Safari** → **Privacy en beveiliging**.

##### Preventie van Cross-Site Tracking

- [x] Activeer **Voorkom Cross-Site Tracking**

Dit maakt WebKit's [Intelligent Tracking Protection](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp)mogelijk. [Private Click Measurement](https://webkit.org/blog/11529/introducing-private-click-measurement-pcm/) is een WebKit-functie en een voorgestelde webnorm die adverteerders in staat moet stellen de doeltreffendheid van webcampagnes te meten zonder afbreuk te doen aan de privacy van de gebruiker. ITP beschermt tegen veel voorkomende bedreigingen, maar blokkeert niet alle tracking-wegen omdat het is ontworpen om de bruikbaarheid van websites niet te hinderen.

##### Privacyrapport

Privacyrapport biedt een momentopname van cross-site trackers die u momenteel niet kunnen profileren op de website die u bezoekt. Het kan ook een wekelijks rapport weergeven om te laten zien welke trackers in de loop van de tijd zijn geblokkeerd.

Privacyrapport is toegankelijk via het menu Pagina-instellingen.

##### Privacybehoudende advertentiemeting

- [ ] Schakel **Privacy Preserving Ad Measurement**uit

Bij het meten van advertentieklikken wordt van oudsher gebruik gemaakt van trackingtechnologie die inbreuk maakt op de privacy van de gebruiker. [Private Click Measurement](https://webkit.org/blog/11529/introducing-private-click-measurement-pcm/) is een WebKit-functie en een voorgestelde webstandaard die adverteerders in staat moet stellen de doeltreffendheid van webcampagnes te meten zonder afbreuk te doen aan de privacy van de gebruiker.

De functie heeft op zichzelf weinig privacyproblemen, dus hoewel je ervoor kunt kiezen om hem ingeschakeld te laten, beschouwen wij het feit dat hij automatisch is uitgeschakeld in Privénavigatie als een aanwijzing om de functie uit te schakelen.

##### Altijd privé browsen

Open Safari en tik op de knop Tabbladen, rechtsonder. Vouw vervolgens de lijst Tabbladgroepen uit.

- [x] Selecteer **Privé**

Safari's Privénavigatie modus biedt extra bescherming van de privacy. Private Browsing gebruikt een nieuwe [kortstondige](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/1410529-ephemeral) sessie voor elk tabblad, wat betekent dat tabbladen van elkaar geïsoleerd zijn. Als er een [kwetsbaarheid is in uBlock Origin](https://portswigger.net/research/ublock-i-exfiltrate-exploiting-ad-blockers-with-css) kan een filter van een derde partij kwaadaardige regels toevoegen die mogelijk gebruikersgegevens kunnen stelen.

Houd er rekening mee dat privénavigatie geen cookies en gegevens opslaat, zodat het niet mogelijk is om ingelogd te blijven op sites. Dit kan een ongemak zijn.

##### iCloud Synchronisatie

De synchronisatie van de Safari-geschiedenis, tabbladgroepen, iCloud-tabbladen en opgeslagen wachtwoorden verloopt via E2EE. Standaard zijn bladwijzers dat echter [niet](https://support.apple.com/en-us/HT202303). Apple kan ze ontsleutelen en openen in overeenstemming met hun [privacybeleid](https://www.apple.com/legal/privacy/en-ww/).

Je kunt E2EE inschakelen voor jouw Safari bladwijzers en downloads door [Geavanceerde gegevensbescherming](https://support.apple.com/en-us/HT212520)in te schakelen. Ga naar jouw **Apple ID naam → iCloud → Geavanceerde gegevensbescherming**.

- [x] Zet **Geavanceerde gegevensbescherming aan**

Als je iCloud gebruikt terwijl Geavanceerde gegevensbescherming is uitgeschakeld, raden we je ook aan te controleren of de standaard downloadlocatie van Safari is ingesteld op lokaal op jouw apparaat. Extra filterlijsten kunnen de prestaties beïnvloeden en het aanvalsoppervlak vergroten, dus pas alleen toe wat u nodig hebt.

### AdGuard

!!! recommendation

    ![AdGuard-logo](assets/img/browsers/adguard.svg){ align=right }
    
    **AdGuard voor iOS** is een gratis en open-source uitbreiding voor het blokkeren van inhoud voor Safari die gebruikmaakt van de eigen [Content Blocker API](https://developer.apple.com/documentation/safariservices/creating_a_content_blocker).
    
    AdGuard voor iOS heeft enkele premium functies, maar standaard Safari-inhoud blokkeren is gratis.
    
    [:octicons-home-16: Homepage](https://adguard.com/en/adguard-ios/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/ios.html){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://kb.adguard.com/ios){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdguardForiOS){ .card-link title="Broncode" }
    
    ??? downloads
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1047223162)

Wij raden niet aan ToS;DR als browserextensie te installeren; dezelfde informatie wordt ook op hun website verstrekt.

## Criteria

**Wij zijn niet verbonden aan de projecten die wij aanbevelen.** Naast [onze standaardcriteria](about/criteria.md)hebben wij een duidelijke reeks eisen ontwikkeld om objectieve aanbevelingen te kunnen doen. Wij stellen voor dat je zich vertrouwd maakt met deze lijst voordat je een project kiest, en jouw eigen onderzoek uitvoert om er zeker van te zijn dat het de juiste keuze voor je is.

!!! example "Deze sectie is nieuw"

    We werken aan het vaststellen van gedefinieerde criteria voor elk deel van onze site, en dit kan onderhevig zijn aan verandering. Als je vragen hebt over onze criteria, stel ze dan [op ons forum](https://discuss.privacyguides.net/latest) en neem niet aan dat we iets niet in overweging hebben genomen bij het opstellen van onze aanbevelingen als het hier niet vermeld staat. Er zijn veel factoren die worden overwogen en besproken wanneer wij een project aanbevelen, en het documenteren van elke factor is een werk in uitvoering.

### Minimale vereisten

- Moet automatische updates ondersteunen.
- Moet engine updates ontvangen binnen 0-1 dagen na upstream release.
- Wijzigingen die nodig zijn om de browser privacyvriendelijker te maken, mogen de gebruikerservaring niet negatief beïnvloeden.
- Android-browsers moeten de Chromium-engine gebruiken.
    - Helaas is Mozilla GeckoView nog steeds minder veilig dan Chromium op Android.
    - iOS-browsers zijn beperkt tot WebKit.

### Uitbreidings criteria

- Mag geen ingebouwde browser- of OS-functionaliteit repliceren.
- Moet rechtstreeks van invloed zijn op de privacy van de gebruiker, d.w.z. mag niet gewoon informatie verstrekken.

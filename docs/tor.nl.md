---
title: "Tor Netwerk"
icon: simple/torproject
---

![Tor logo](assets/img/self-contained-networks/tor.svg){ align=right }

Het **Tor** netwerk is een groep vrijwilligersservers waarmee je gratis verbinding kunt maken en je privacy en veiligheid op het internet kunt verbeteren. Individuen en organisaties kunnen ook informatie delen via het Tor-netwerk met ".onion hidden services" zonder hun privacy in gevaar te brengen. Omdat Tor-verkeer moeilijk te blokkeren en te traceren is, is Tor een effectief middel om censuur te omzeilen.

[:octicons-home-16:](https://www.torproject.org){ .card-link title=Homepage }
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Service" }
[:octicons-info-16:](https://tb-manual.torproject.org/){ [:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="Broncode" } } [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Bijdragen }

Tor werkt door je internetverkeer om te leiden via deze door vrijwilligers beheerde servers, in plaats van een directe verbinding te maken met de site die je probeert te bezoeken. Dit versluiert waar het verkeer vandaan komt, en geen enkele server in het verbindingspad kan het volledige pad zien van waar het verkeer vandaan komt en naartoe gaat, wat betekent dat zelfs de servers die je gebruikt om verbinding te maken jouw anonimiteit niet kunnen doorbreken.

<figure markdown>
  Tor path](assets/img/how-tor-works/tor-path.svg#only-light)
  ![Tor path](assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>Tor circuit pathway - Knooppunten in het pad kunnen alleen de servers zien waarmee ze direct verbonden zijn, bijvoorbeeld het getoonde "Entry" knooppunt kan je IP adres zien, en het adres van het "Middle" knooppunt, maar kan niet zien welke website je bezoekt.</figcaption>
</figure>

- [Meer informatie over hoe Tor werkt :material-arrow-right-drop-circle:](advanced/tor-overview.md)

## Verbinding maken met Tor

Er zijn verschillende manieren om verbinding te maken met het Tor-netwerk vanaf je apparaat. De meest gebruikte is de **Tor Browser**, een fork van Firefox ontworpen voor anoniem browsen voor desktop computers en Android. Naast de onderstaande apps zijn er ook besturingssystemen die speciaal zijn ontworpen om verbinding te maken met het Tor-netwerk, zoals [Whonix](desktop.md#whonix) op [Qubes OS](desktop.md#qubes-os), die nog meer veiligheid en bescherming bieden dan de standaard Tor Browser.

### Tor Browser

!!! recommendation

    ![Tor Browser logo](assets/img/browsers/tor.svg){ align=right }
    
    **Tor Browser** is de keuze als je anonimiteit nodig hebt, omdat het je toegang geeft tot het Tor netwerk en bruggen, en het bevat standaard instellingen en extensies die automatisch geconfigureerd worden door de standaard beveiligingsniveaus: *Standard*, *Safer* en *Safest*.
    
    [:octicons-home-16: Homepage](https://www.torproject.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Service" }
    [:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentatie }
    [:octicons-code-16:](https://gitweb.torproject.org/tor-browser.git/){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Bijdragen }
    
    ??? downloads "Downloaden"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:simple-android: Android](https://www.torproject.org/download/#android)
        - [:simple-windows11: Windows](https://www.torproject.org/download/)
        - [:simple-apple: macOS](https://www.torproject.org/download/)
        - [:simple-linux: Linux](https://www.torproject.org/download/)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/security/tor)

!!! danger

    Je moet **nooit** extra extensies installeren op Tor Browser of `about:config` instellingen bewerken, inclusief de extensies die we voorstellen voor Firefox. Browserextensies en niet-standaardinstellingen zorgen ervoor dat je je onderscheidt van anderen op het Tor-netwerk, waardoor je browser gemakkelijker te vinden is op [fingerprint](https://support.torproject.org/glossary/browser-fingerprinting).

De Tor Browser is ontworpen om fingerprinting, of het identificeren van jou op basis van je browserconfiguratie, te voorkomen. **Daarom is het absoluut noodzakelijk dat je** de browser niet wijzigt buiten de standaard [beveiligingsniveaus](https://tb-manual.torproject.org/security-settings/).

### Orbot

!!! recommendation

    ![Orbot logo](assets/img/self-contained-networks/orbot.svg){ align=right }
    
    **Orbot** is een gratis Tor VPN voor smartphones die het verkeer van elke app op je toestel door het Tor-netwerk leidt.
    
    [:octicons-home-16: Homepage](https://orbot.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://orbot.app/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://orbot.app/faqs){ .card-link title=Documentatie}
    [:octicons-code-16:](https://orbot.app/code){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://orbot.app/donate){ .card-link title=Bijdragen }
    
    ??? downloads "Downloaden"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.android)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/orbot/id1609461599)
        - [:simple-github: GitHub](https://github.com/guardianproject/orbot/releases)

Om weerstand te bieden tegen verkeersanalyse aanvallen, kunt je overwegen om *Isolate Destination Address* in :material-menu: → **Settings** → **Connectivity** in te schakelen. Dit zal voor elk domein waarmee je verbinding maakt een volledig ander Tor Circuit (verschillende middle nodes en exit nodes) gebruiken.

!!! tip "Tips voor Android"

    Orbot kan individuele apps proxyen als ze SOCKS of HTTP proxying ondersteunen. Het kan ook al uw netwerkverbindingen proxyen met behulp van [VpnService](https://developer.android.com/reference/android/net/VpnService) en kan worden gebruikt met de VPN killswitch in :gear: **Instellingen** → **Netwerk & internet** → **VPN** → :gear: → **Blokkeer verbindingen zonder VPN**.
    
    Orbot is vaak verouderd op de [F-Droid repository](https://guardianproject.info/fdroid) en [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android) van het Guardian Project, dus overweeg in plaats daarvan direct te downloaden van de [GitHub repository](https://github.com/guardianproject/orbot/releases).
    
    Alle versies zijn ondertekend met dezelfde handtekening, zodat ze onderling compatibel zouden moeten zijn.

## Relays and Bridges

### Snowflake

!!! recommendation

    ![Snowflake logo](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Snowflake logo](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }
    
    **Met Snowflake** kun je bandbreedte doneren aan het Tor Project door een "Snowflake proxy" in je browser te gebruiken.
    
    Mensen die gecensureerd worden kunnen Snowflake proxies gebruiken om verbinding te maken met het Tor-netwerk. Snowflake is een geweldige manier om bij te dragen aan het netwerk, zelfs als je niet de technische know-how hebt om een Tor relay of bridge te runnen.
    
    [:octicons-home-16: Homepage](https://snowflake.torproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=Documentatie}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Documentatie}
    
    ??? downloads "Downloaden"
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie)
        - [:octicons-browser-16: Web](https://snowflake.torproject.org/embed "Laat deze pagina open om een Snowflake proxy te zijn")

??? tip "Embedded Snowflake"

    Je kunt Snowflake in jouw browser inschakelen door op de schakelaar hieronder te klikken en ==deze pagina open laten==. Je kunt Snowflake ook installeren als een browserextensie om het altijd te laten draaien terwijl jouw browser open is, maar het toevoegen van extensies van derden kan uw aanvalsoppervlak vergroten.
    
    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>Als de embed niet voor je verschijnt, zorg er dan voor dat je het frame van derden van `torproject.org` niet blokkeert. Of bezoek [deze pagina](https://snowflake.torproject.org/embed.html).</small>

Snowflake verhoogt jouw privacy op geen enkele manier, en wordt ook niet gebruikt om verbinding te maken met het Tor-netwerk binnen jouw persoonlijke browser. Als jouw internetverbinding echter ongecensureerd is, zou je moeten overwegen het te gebruiken om mensen in gecensureerde netwerken te helpen zelf betere privacy te krijgen. Je hoeft je geen zorgen te maken over welke websites mensen via je proxy bezoeken- hun zichtbare surf IP adres zal overeenkomen met hun Tor exit node, niet met die van jou.

Het runnen van een Snowflake proxy is weinig riskant, zelfs meer dan het runnen van een Tor relay of bridge, wat al geen bijzonder riskante onderneming is. Het stuurt echter nog steeds verkeer door jouw netwerk, wat in sommige opzichten gevolgen kan hebben, vooral als jouw netwerk een beperkte bandbreedte heeft. Zorg ervoor dat je [begrijpt hoe Snowflake werkt](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) voordat je beslist of je een proxy wilt gebruiken.

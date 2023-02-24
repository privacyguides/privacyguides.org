---
title: "VPN-diensten"
icon: material/vpn
---

Zoek een no-logging VPN-operator die er niet op uit is jouw webverkeer te verkopen of te lezen.

??? danger "VPN's zorgen niet voor anonimiteit"

    Het gebruik van een VPN houdt jouw surfgedrag niet anoniem, noch voegt het extra beveiliging toe aan niet-beveiligd (HTTP) verkeer.
    
    Als je op zoek bent naar **anonimiteit**, kunt je beter de Tor Browser **in plaats** van een VPN gebruiken.
    
    Als je op zoek bent naar extra **veiligheid**, moet je er altijd voor zorgen dat je verbinding maakt met websites via HTTPS. Een VPN is geen vervanging voor goede beveiligingspraktijken.
    
    [Download Tor](https://www.torproject.org/){ .md-button .md-button--primary } [Tor Mythen & FAQ](basics/tor-overview.md){ .md-button }

??? question "Wanneer zijn VPN's nuttig?"

    Als je op zoek bent naar extra **privacy** van uw ISP, op een openbaar Wi-Fi-netwerk, of tijdens het torrenten van bestanden, kan een VPN de oplossing voor je zijn, zolang je de risico's ervan begrijpt.
    
    [Meer info](basics/vpn-overview.md){ .md-button }

## Aanbevolen Providers

!!! abstract "Criteria"

    Onze aanbevolen providers gebruiken encryptie, accepteren Monero, ondersteunen WireGuard & OpenVPN, en hebben een no logging beleid. Lees onze [volledige lijst van criteria](#onze-criteria) voor meer informatie.

### Proton VPN

!!! recommendation annotate

    [Proton VPN logo](assets/img/vpn/protonvpn.svg){ align=right }
    
    **Proton VPN** is een sterke speler in de VPN-ruimte, en ze zijn in bedrijf sinds 2016. Proton AG is gevestigd in Zwitserland en biedt een beperkte gratis versie aan, evenals een meer uitgebreide premium optie.
    
    [:octicons-home-16: Homepage](https://protonvpn.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://protonvpn.com/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://protonvpn.com/support/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/ProtonVPN){ .card-link title="Broncode" }
    
    ??? downloads "Downloaden"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1437005085)
        - [:simple-github: GitHub](https://github.com/ProtonVPN/android-app/releases)
        - [:simple-windows11: Windows](https://protonvpn.com/download-windows)
        - [:simple-linux: Linux](https://protonvpn.com/support/linux-vpn-setup/)

??? success annotate "67 Landen"

    Proton VPN heeft [servers in 67 landen](https://protonvpn.com/vpn-servers) (1). Door een VPN-provider te kiezen met een server het dichtst bij jou in de buurt, verminder je de latentie van het netwerkverkeer dat je verstuurt. Dit komt door een kortere route (minder hops) naar de bestemming.
    
    Wij denken ook dat het voor de veiligheid van de privé-sleutels van de VPN-provider beter is als zij [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service) gebruiken, in plaats van goedkopere gedeelde oplossingen (met andere klanten) zoals [virtuele privé-servers](https://en.wikipedia.org/wiki/Virtual_private_server).

1. Laatst gecontroleerd: 2022-09-16

??? success "Onafhankelijk Gecontroleerd"

    Vanaf januari 2020 heeft Proton VPN een onafhankelijke audit door SEC Consult ondergaan. SEC Consult vond enkele kwetsbaarheden met een gemiddeld en laag risico in de Windows-, Android- en iOS-applicaties van Proton VPN, die allemaal door Proton VPN "naar behoren waren verholpen" voordat de rapporten werden gepubliceerd. Geen van de geconstateerde problemen zou een aanvaller op afstand toegang hebben verschaft tot jouw apparaat of verkeer. Je kunt de afzonderlijke verslagen voor elk platform bekijken op [protonvpn.com](https://protonvpn.com/blog/open-source/). In april 2022 onderging Proton VPN [nog een audit](https://protonvpn.com/blog/no-logs-audit/) en het verslag werd [opgesteld door Securitum](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf). Voor de apps van Proton VPN is op 9 november 2021 een [attestbrief](https://proton.me/blog/security-audit-all-proton-apps) verstrekt door [Securitum](https://research.securitum.com).

??? success "Open-Source Cliënts"

    Proton VPN biedt de broncode voor hun desktop en mobiele clients in hun [GitHub organisatie](https://github.com/ProtonVPN).

??? success "Accepteert Cash"

    Proton VPN accepteert naast creditcards en PayPal ook Bitcoin en **contant geld/lokale valuta** als anonieme vormen van betaling.

??? success "WireGuard Support"

    Proton VPN ondersteunt hoofdzakelijk het WireGuard® protocol. [WireGuard](https://www.wireguard.com) is een nieuwer protocol dat gebruik maakt van het modernste [cryptography](https://www.wireguard.com/protocol/). Bovendien wil WireGuard eenvoudiger en performanter zijn.
    
    Proton VPN [recommends](https://protonvpn.com/blog/wireguard/) het gebruik van WireGuard met hun dienst. Op Proton VPN's Windows, macOS, iOS, Android, ChromeOS, en Android TV apps is WireGuard het standaard protocol; [support](https://protonvpn.com/support/how-to-change-vpn-protocols/) voor het protocol is echter niet aanwezig in hun Linux app.

??? warning "Remote Port Forwarding"

    Proton VPN ondersteunt momenteel alleen remote [port forwarding](https://protonvpn.com/support/port-forwarding/) op Windows, wat gevolgen kan hebben voor sommige toepassingen. Vooral Peer-to-peer-toepassingen zoals Torrent-cliënten.

??? success "Mobiele klanten"

    Naast het leveren van standaard OpenVPN-configuratiebestanden, heeft Proton VPN mobiele clients voor [App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085), [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=nl_US), en [GitHub](https://github.com/ProtonVPN/android-app/releases) die eenvoudige verbindingen met hun servers mogelijk maken.

??? info "Aanvullende Functionaliteit"

    Proton VPN heeft eigen servers en datacenters in Zwitserland, IJsland en Zweden. Ze bieden adblocking en het blokkeren van bekende malware domeinen met hun DNS service. Ze bieden adblocking en blokkering van bekende malwaredomeinen met hun DNS-dienst. Daarnaast biedt Proton VPN ook "Tor" servers waarmee je gemakkelijk verbinding kunt maken met onion sites, maar we raden nog steeds sterk aan om hiervoor [de officiële Tor Browser](https://www.torproject.org/) te gebruiken.

!!! danger "De killswitch-functionaliteit werkt niet op Intel-gebaseerde Macs"

    Systeemcrashes [kunnen optreden](https://protonvpn.com/support/macos-t2-chip-kill-switch/) op Intel-gebaseerde Macs bij gebruik van de VPN killswitch. Als je deze functie nodig hebt, en je gebruikt een Mac met Intel-chipset, moet je overwegen een andere VPN-dienst te gebruiken.

### IVPN

!!! recommendation

    IVPN heeft [servers in 32 landen](https://www.ivpn.net/server-locations) (1). IVPN is gevestigd in Gibraltar.
    
    [:octicons-home-16: Homepage](https://www.ivpn.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.ivpn.net/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://www.ivpn.net/knowledgebase/general/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/ivpn){ .card-link title="Broncode" }
    
    ??? downloads
    
        - [:simple-android: Android](https://www.ivpn.net/apps-android/)
        - [:simple-appstore: App Store](https://apps.apple.com/app/ivpn-serious-privacy-protection/id1193122683)
        - [:simple-windows11: Windows](https://www.ivpn.net/apps-windows/)
        - [:simple-apple: macOS](https://www.ivpn.net/apps-macos/)
        - [:simple-linux: Linux](https://www.ivpn.net/apps-linux/)

??? success annotate "63 Landen"

    IVPN heeft [servers in 35 landen](https://www.ivpn.net/server-locations) (1). Door een VPN-provider te kiezen met een server het dichtst bij je in de buurt zal de latentie van het netwerkverkeer dat je verstuurt verminderen. Dit komt door een kortere route (minder hops) naar de bestemming.
    
    Wij denken ook dat het voor de veiligheid van de privésleutels van de VPN-provider beter is als hij [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service) gebruikt, in plaats van goedkopere gedeelde oplossingen (met andere klanten) zoals [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

1. Laatst gecontroleerd: 2022-09-16

??? success "Onafhankelijk Gecontroleerd"

    IVPN heeft een [no-logging audit van Cure53](https://cure53.de/audit-report_ivpn.pdf) ondergaan die concludeerde in overeenstemming met de no-logging claim van IVPN. IVPN heeft in januari 2020 ook een [uitgebreid pentestrapport Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) afgerond. IVPN heeft ook gezegd dat zij van plan zijn in de toekomst [jaarverslagen](https://www.ivpn.net/blog/independent-security-audit-concluded) uit te brengen. Er is nog een evaluatie uitgevoerd [in april 2022](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) en deze is opgesteld door Cure53 [op hun website](https://cure53.de/pentest-report_IVPN_2022.pdf).

??? success "Open-Source Cliënts"

    Sinds februari 2020 zijn [IVPN applicaties nu open-source](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). Broncode kan worden verkregen van hun [GitHub organisatie](https://github.com/ivpn).

??? succes "Accepteert contant geld en Monero"

    Naast creditcards/debetkaarten en PayPal accepteert IVPN ook Bitcoin, **Monero** en **cash/lokale valuta** (op jaarplannen) als anonieme betalingsvormen.

??? success "WireGuard Support"

    IVPN ondersteunt het WireGuard® protocol. [WireGuard](https://www.wireguard.com) is een nieuwer protocol dat gebruik maakt van de nieuwste [cryptography](https://www.wireguard.com/protocol/). Bovendien wil WireGuard eenvoudiger en performanter zijn.
    
    IVPN [raad](https://www.ivpn.net/wireguard/) het gebruik van WireGuard aan en hierom is het protocol de standaard in alle apps van IVPN. IVPN biedt ook een WireGuard configuratie generator voor gebruik met de officiële WireGuard [apps](https://www.wireguard.com/install/).

??? success "Remote Port Forwarding"

    Remote [port forwarding] (https://en.wikipedia.org/wiki/Port_forwarding) is mogelijk met een Pro-abonnement. Port forwarding [kan geactiveerd worden](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) via de client area. Port forwarding is alleen beschikbaar op IVPN bij gebruik van WireGuard of OpenVPN protocollen en is [uitgeschakeld op US servers](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

??? success "Mobiele Clients"

    Naast het leveren van standaard OpenVPN-configuratiebestanden, heeft IVPN mobiele clients voor [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683), [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client), en [GitHub](https://github.com/ivpn/android-app/releases) die eenvoudige verbindingen met hun servers mogelijk maken.

??? info "Extra functionaliteit"

    IVPN-clients ondersteunen tweefactorauthenticatie (de clients van Mullvad niet). IVPN biedt ook de "[AntiTracker](https://www.ivpn.net/antitracker)" functionaliteit, die advertentienetwerken en trackers op netwerkniveau blokkeert.

### Mullvad

!!! recommendation

    Mullvad logo](assets/img/vpn/mullvad.svg){ align=right }
    
    **Mullvad** is een snelle en goedkope VPN met een serieuze focus op transparantie en veiligheid. Zij zijn in bedrijf sinds **2009**. Mullvad is gevestigd in Zweden en heeft geen gratis proefversie.
    
    [:octicons-home-16: Homepage](https://mullvad.net){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://mullvad.net/en/help/privacy-policy/){ .card-link title="Privacy Policy" }.
    [:octicons-info-16:](https://mullvad.net/en/help/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/mullvad){ .card-link title="Broncode" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn)
        - [:simple-appstore: App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513)
        - [:simple-github: GitHub](https://github.com/mullvad/mullvadvpn-app/releases)
        - [:simple-windows11: Windows](https://mullvad.net/en/download/windows/)
        - [:simple-apple: macOS](https://mullvad.net/en/download/macos/)
        - [:simple-linux: Linux](https://mullvad.net/en/download/linux/)

??? success annotate "41 landen"

    Mullvad heeft [servers in 41 landen](https://mullvad.net/servers/) (1). Door een VPN-provider te kiezen met een server het dichtst bij je in de buurt zal de latentie van het netwerkverkeer dat je verstuurt verminderen. Dit komt door een kortere route (minder hop) naar de bestemming.
    
    Wij denken ook dat het voor de veiligheid van de privésleutels van de VPN-provider beter is als hij [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service) gebruikt, in plaats van goedkopere gedeelde oplossingen (met andere klanten) zoals [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

1. Laatst gecontroleerd: 2023-01-19

??? success "Onafhankelijk Gecontroleerd"

    De VPN-clients van Mullvad zijn gecontroleerd door Cure53 en Assured AB in een pentest-rapport [gepubliceerd op cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). De beveiligingsonderzoekers concludeerden:
    
    > Cure53 en Assured AB zijn blij met de resultaten van de audit en de software laat een algehele positieve indruk achter. Dankzij de inzet van het interne team van Mullvad VPN, twijfelen de testers er niet aan dat het project vanuit beveiligingsoogpunt op het juiste spoor zit.
    
    In 2020 werd een tweede audit [aangekondigd](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) en werd het [definitieve auditverslag](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) beschikbaar gesteld op de website van Cure53:
    
    > De resultaten van dit mei-juni 2020 project gericht op het Mullvad complex zijn vrij positief. [...] Het door Mullvad gebruikte totale applicatie-ecosysteem maakt een degelijke en gestructureerde indruk. De algemene structuur van de applicatie maakt het gemakkelijk om patches en fixes op een gestructureerde manier uit te rollen. De bevindingen van Cure53 laten vooral zien hoe belangrijk het is om de huidige lekvectoren voortdurend te controleren en opnieuw te beoordelen, om de privacy van de eindgebruikers altijd te waarborgen. Dat gezegd hebbende, Mullvad beschermt de eindgebruiker uitstekend tegen veelvoorkomende lekken van PII en privacygerelateerde risico's.
    
    In 2021 werd een infrastructuuraudit [aangekondigd](https://mullvad.net/en/blog/2021/1/20/no-pii-or-privacy-leaks-found-cure53s-infrastructure-audit/) en werd het [definitieve auditverslag](https://cure53.de/pentest-report_mullvad_2021_v1.pdf) beschikbaar gesteld op de website van Cure53. Een ander rapport werd [in juni 2022] besteld (https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) en is beschikbaar op [de website van Assured](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

??? success "Open-Source Cliënts"

    Mullvad biedt de broncode voor hun desktop en mobiele clients in hun [GitHub organisatie](https://github.com/mullvad/mullvadvpn-app).

??? succes "Accepteert contant geld en Monero"

    Mullvad accepteert naast creditcards en PayPal ook Bitcoin, Bitcoin Cash, **Monero** en **contant geld/lokale valuta** als anonieme vormen van betaling. Zij aanvaarden ook Swish en bankoverschrijvingen.

??? success "WireGuard Support"

    Mullvad ondersteunt het WireGuard® protocol. [WireGuard](https://www.wireguard.com) is een nieuwer protocol dat gebruik maakt van de nieuwste [cryptography](https://www.wireguard.com/protocol/). Bovendien streeft WireGuard ernaar eenvoudiger en performanter te zijn.
    
    Mullvad [recommends](https://mullvad.net/nl/help/why-wireguard/) het gebruik van WireGuard met hun service. Het is het standaard of enige protocol op Mullvad 's Android-, iOS-, macOS- en Linux-apps, maar op Windows moet je [handmatig inschakelen](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard. Mullvad biedt ook een WireGuard configuratie generator aan voor gebruik met de officiële WireGuard [apps](https://www.wireguard.com/install/).

??? success "IPv6 ondersteuning"

    Mullvad ondersteunt de toekomst van networking [IPv6](https://en.wikipedia.org/wiki/IPv6). Hun netwerk laat je toe [toegang te krijgen tot diensten die gehost worden op IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) in tegenstelling tot andere providers die IPv6-verbindingen blokkeren.

??? success "Remote Port Forwarding"

    Remote [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) is toegestaan voor mensen die eenmalige betalingen doen, maar niet voor rekeningen met een terugkerende/abonnementsgebaseerde betalingsmethode. Dit is om te voorkomen dat Mullvad je kan identificeren op basis van jouw poortgebruik en opgeslagen abonnementsinformatie. Zie [Port forwarding met Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) voor meer informatie.

??? success "Mobiele Clients"

    Mullvad heeft [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) en [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn) clients gepubliceerd, die beide een gebruiksvriendelijke interface ondersteunen in plaats van je te verplichten jouw WireGuard-verbinding handmatig te configureren. De Android-client is ook beschikbaar op [GitHub](https://github.com/mullvad/mullvadvpn-app/releases).

??? info "Extra Functionaliteit"

    Mullvad is zeer transparant over welke knooppunten zij [bezitten of huren] (https://mullvad.net/en/servers/). Ze gebruiken [ShadowSocks](https://shadowsocks.org/) in hun ShadowSocks + OpenVPN configuratie, waardoor ze beter bestand zijn tegen firewalls met [Deep Packet Inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) die VPN's proberen te blokkeren. Vermoedelijk, [China moet een andere methode gebruiken om ShadowSocks servers te blokkeren](https://github.com/net4people/bbs/issues/22). De website van Mullvad is ook toegankelijk via Tor op [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

## Criteria

!!! danger "Gevaar"

    Het is belangrijk op te merken dat het gebruik van een VPN provider je niet anoniem maakt, maar het geeft je wel een betere privacy in bepaalde situaties. Een VPN is geen instrument voor illegale activiteiten. Vertrouw niet op een "no log" beleid.

**Wij zijn niet verbonden aan de providers die wij aanbevelen. Hierdoor kunnen wij volledig objectieve aanbevelingen doen.** Naast [onze standaardcriteria](about/criteria.md), hebben we een duidelijke reeks vereisten ontwikkeld voor elke VPN-provider die aanbevolen wil worden, waaronder sterke encryptie, onafhankelijke beveiligingsaudits, moderne technologie en meer. Wij raden je aan deze lijst goed door te nemen voordat je een VPN-provider kiest, en jouw eigen onderzoek te doen om er zeker van te zijn dat de VPN-provider die je kiest zo betrouwbaar mogelijk is.

### Technologie

Wij eisen dat al onze aanbevolen VPN-providers OpenVPN-configuratiebestanden leveren die in elke client kunnen worden gebruikt. **Als** een VPN met een eigen aangepaste client aanbiedt, is een killswitch vereist om het lekken van netwerkgegevens te blokkeren wanneer de verbinding wordt verbroken.

**Minimum om in aanmerking te komen:**

- Ondersteuning voor sterke protocollen zoals WireGuard & OpenVPN.
- Killswitch ingebouwd in clients.
- Multihop ondersteuning. Multihopping is belangrijk om gegevens privé te houden in het geval van een compromittering door één knooppunt.
- Als er VPN-clients worden verstrekt, moeten dat [open-source](https://en.wikipedia.org/wiki/Open_source)zijn, zoals de VPN-software die er doorgaans in is ingebouwd. Wij zijn van mening dat de beschikbaarheid van [broncode](https://en.wikipedia.org/wiki/Source_code) meer transparantie biedt over wat uw apparaat feitelijk doet.

**Beste geval:**

- Ondersteuning voor WireGuard en OpenVPN.
- Killswitch met in hoge mate configureerbare opties (inschakelen/uitschakelen op bepaalde netwerken, bij opstarten, enz.)
- Gemakkelijk te gebruiken VPN-clients
- Ondersteunt [IPv6](https://en.wikipedia.org/wiki/IPv6). Wij verwachten dat servers inkomende verbindingen via IPv6 zullen toestaan en u toegang zullen verschaffen tot diensten die op IPv6-adressen worden gehost.
- De mogelijkheid van [remote port forwarding](https://en.wikipedia.org/wiki/Port_forwarding#Remote_port_forwarding) helpt bij het maken van verbindingen bij het gebruik van P2P ([Peer-to-Peer](https://en.wikipedia.org/wiki/Peer-to-peer)) file sharing software, Freenet, of het hosten van een server (bv. Mumble).

### Privacy

Wij geven er de voorkeur aan dat de door ons aanbevolen aanbieders zo weinig mogelijk gegevens verzamelen. Er worden geen persoonlijke gegevens verzameld bij de registratie en er worden anonieme betalingsvormen aanvaard.

**Beste geval:**

- Monero of contante betaling.
- Geen persoonlijke informatie nodig om te registreren: Hooguit gebruikersnaam, wachtwoord en e-mail.

**Beste geval:**

- Accepteert Monero, contant geld, en andere vormen van anonieme betalingsopties (cadeaubonnen, enz.)
- Geen persoonlijke informatie aanvaard (automatisch gegenereerde gebruikersnaam, geen e-mail nodig, enz.)

### Veiligheid

Een VPN is zinloos als het niet eens voldoende beveiliging kan bieden. Wij eisen van al onze aanbevolen providers dat zij zich houden aan de huidige beveiligingsstandaarden voor hun OpenVPN-verbindingen. Idealiter zouden zij standaard meer toekomstbestendige encryptiesystemen gebruiken. Wij eisen ook dat een onafhankelijke derde partij de beveiliging van de aanbieder controleert, idealiter op zeer uitgebreide wijze en herhaaldelijk (jaarlijks).

**Minimum om in aanmerking te komen:**

- Sterke coderingsschema's: OpenVPN met SHA-256 authenticatie; RSA-2048 of betere handshake; AES-256-GCM of AES-256-CBC data-encryptie.
- Perfect Forward Secrecy (PFS).
- Gepubliceerde veiligheidscontroles van een gerenommeerde derde partij.

**Beste geval:**

- Sterkste encryptie: RSA-4096.
- Perfect Forward Secrecy (PFS).
- Uitgebreide gepubliceerde veiligheidscontroles door een gerenommeerde derde partij.
- Programma's voor bug-bounty's en/of een gecoördineerd proces voor de openbaarmaking van kwetsbaarheden.

### Vertrouwen

Je zou jouw financiën niet toevertrouwen aan iemand met een valse identiteit, dus waarom zou je hen jouw internetgegevens toevertrouwen? Wij eisen van onze aanbevolen aanbieders dat zij hun eigendom of leiderschap openbaar maken. Wij zouden ook graag zien dat regelmatig verslag wordt uitgebracht over de transparantie, met name wat betreft de wijze waarop verzoeken van de overheid worden behandeld.

**Beste geval:**

- Publiekelijk leiderschap of eigendom.

**Beste geval:**

- Publieksgericht leiderschap.
- Frequente transparantieverslagen.

### Marketing

Bij de VPN providers die wij aanbevelen zien wij graag verantwoorde marketing.

**Minimum om in aanmerking te komen:**

- Moet zelf analytics hosten (d.w.z., geen Google Analytics). De site van de aanbieder moet ook voldoen aan [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) voor mensen die zich willen afmelden.

Mag geen marketing hebben die onverantwoord is:

- Garanties van 100% bescherming van de anonimiteit. Wanneer iemand beweert dat iets 100% is, betekent dit dat er geen zekerheid is voor mislukking. We weten dat mensen zichzelf vrij gemakkelijk kunnen deanonimiseren op een aantal manieren, bv.:
    - Hergebruik van persoonlijke informatie (bv. e-mailaccounts, unieke pseudoniemen, enz.) waartoe zij toegang hadden zonder anonimiteitssoftware (Tor, VPN, enz.)
    - [Browser vingerafdrukken](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)
- Beweren dat een VPN met één circuit "anoniemer" is dan Tor, dat een circuit van drie of meer hops is dat regelmatig verandert.
- Gebruik verantwoordelijk taalgebruik: d.w.z. het is oké om te zeggen dat een VPN "losgekoppeld" of "niet aangesloten" is, maar beweren dat iemand "blootgesteld", "kwetsbaar" of "gecompromitteerd" is, is nodeloos gebruik van alarmerende taal die onjuist kan zijn. Die persoon kan bijvoorbeeld gewoon gebruik maken van de service van een andere VPN-provider of Tor gebruiken.

**Beste geval:**

Verantwoorde marketing die zowel educatief als nuttig is voor de consument zou kunnen bestaan uit:

- Een nauwkeurige vergelijking met wanneer Tor of andere [op zichzelf staande netwerken](self-contained-networks.md) moeten worden gebruikt.
- Beschikbaarheid van de website van de VPN-provider via een .onion [Verborgen service](https://en.wikipedia.org/wiki/.onion)

### Extra functionaliteit

Hoewel het geen strikte vereisten zijn, zijn er enkele factoren die wij in aanmerking hebben genomen bij het bepalen van de aanbieders die wij aanbevelen. Deze omvatten adblocking/tracker-blocking-functionaliteit, warrant canaries, multihop-verbindingen, uitstekende klantenondersteuning, het aantal toegestane gelijktijdige verbindingen, enz.

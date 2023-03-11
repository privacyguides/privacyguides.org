---
title: "VPN-diensten"
icon: material/vpn
description: Dit zijn de beste VPN-diensten om jouw privacy en veiligheid online te beschermen. Vind hier een provider die er niet op uit is om je te bespioneren.
---

Als je op zoek bent naar extra **privacy** van uw ISP, op een openbaar Wi-Fi-netwerk, of tijdens het torrenten van bestanden, kan een VPN de oplossing voor je zijn, zolang je de risico's ervan begrijpt. Wij denken dat deze aanbieders een stuk beter zijn dan de rest:

<div class="grid cards" markdown>

- ![IVPN logo](assets/img/vpn/mini/ivpn.svg){ .twemoji } [IVPN](#ivpn)
- ![Mullvad logo](assets/img/vpn/mullvad.svg){ .twemoji } [Mullvad](#mullvad)
- ![Proton VPN logo](assets/img/vpn/protonvpn.svg){ .twemoji } [Proton VPN](#proton-vpn)

</div>

!!! danger "VPN's zorgen niet voor anonimiteit"

    Het gebruik van een VPN houdt jouw surfgedrag niet anoniem, ook voegt het geen extra beveiliging toe aan niet-beveiligd (HTTP) verkeer.
    
    Als je op zoek bent naar **anonimiteit**, moet je de Tor Browser gebruiken **in plaats** van een VPN.
    
    Als je op zoek bent naar extra **veiligheid**, moet je er altijd voor zorgen dat je verbinding maakt met websites via HTTPS. Een VPN is geen vervanging voor goede beveiligingspraktijken.
    
    [Download Tor](https://www.torproject.org/){ .md-button .md-button--primary } [Tor Mythen & FAQ](advanced/tor-overview.md){ .md-button }

[Gedetailleerd VPN-overzicht :material-arrow-right-drop-circle:](basics/vpn-overview.md ""){.md-button}

## Aanbevolen Providers

Onze aanbevolen providers gebruiken encryptie, accepteren Monero, ondersteunen WireGuard & OpenVPN, en hebben een no logging beleid. Lees onze [volledige lijst met criteria](#criteria) voor meer informatie.

### IVPN

!!! recommendation

    ![IVPN logo](assets/img/vpn/ivpn.svg){ align=right }
    
    **IVPN** is een premium VPN-provider en zijn actief sinds 2009. IVPN is gevestigd in Gibraltar.
    
    [:octicons-home-16: Homepage](https://www.ivpn.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.ivpn.net/privacy/){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://www.ivpn.net/knowledgebase/general/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/ivpn){ .card-link title="Broncode" }
    
    ??? downloads "Downloaden"
    
        - [:simple-android: Android](https://www.ivpn.net/apps-android/)
        - [:simple-appstore: App Store](https://apps.apple.com/app/ivpn-serious-privacy-protection/id1193122683)
        - [:simple-windows11: Windows](https://www.ivpn.net/apps-windows/)
        - [:simple-apple: macOS](https://www.ivpn.net/apps-macos/)
        - [:simple-linux: Linux](https://www.ivpn.net/apps-linux/)

#### :material-check:{ .pg-green } 35 Landen

IVPN heeft [servers in 35 landen](https://www.ivpn.net/server-locations).(1) Door een VPN-provider te kiezen met een server die het dichtst bij je in de buurt staat, verminder je de vertraging van het netwerkverkeer die je verstuurt. Dit komt door een kortere route (minder hops) naar de bestemming.
{ .annotate }

1. Laatst gecontroleerd: 2022-09-16

Wij denken ook dat het beter is voor de veiligheid van de privésleutels van de VPN-provider als ze [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service) gebruiken, in plaats van goedkopere gedeelde servers (met andere klanten) zoals [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Onafhankelijk geaudit

IVPN heeft een [no-logging audit ondergaan van Cure53](https://cure53.de/audit-report_ivpn.pdf) die concludeerde in overeenstemming met de no-logging claim van IVPN. IVPN heeft ook een [uitgebreid pentest rapport afgerond Cure53](https://cure53.de/summary-report_ivpn_2019.pdf) in januari 2020. IVPN heeft ook gezegd dat het van plan is om in de toekomst [jaarverslagen](https://www.ivpn.net/blog/independent-security-audit-concluded) te publiceren. In april 2022 werd een verdere evaluatie uitgevoerd [](https://www.ivpn.net/blog/ivpn-apps-security-audit-2022-concluded/) en door Cure53 [geproduceerd op hun website](https://cure53.de/pentest-report_IVPN_2022.pdf).

#### :material-check:{ .pg-green } Open-source clients

Vanaf februari 2020 zijn [IVPN-toepassingen nu open-source](https://www.ivpn.net/blog/ivpn-applications-are-now-open-source). Broncode kan worden verkregen van hun [GitHub organisatie](https://github.com/ivpn).

#### :material-check:{ .pg-green } Accepteert contant geld en Monero

Mullvad accepteert naast creditcards en PayPal ook Bitcoin, Bitcoin Cash, **Monero** en **contant geld/lokale valuta** als anonieme vormen van betaling.

#### :material-check:{ .pg-green } WireGuard ondersteuning

IVPN ondersteunt het WireGuard® protocol. [WireGuard](https://www.wireguard.com) is een nieuwer protocol dat gebruik maakt van geavanceerde [cryptografie](https://www.wireguard.com/protocol/). Bovendien wil WireGuard eenvoudiger en performanter zijn.

IVPN [adviseert](https://www.ivpn.net/wireguard/) het gebruik van WireGuard met hun dienst en daarom is het protocol de standaard op alle apps van IVPN. IVPN biedt ook een WireGuard configuratie generator voor gebruik met de officiële WireGuard [apps](https://www.wireguard.com/install/).

#### :material-check:{ .pg-green } Remote Port Forwarding

Remote [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) is mogelijk met een Pro-abonnement. Port forwarding [kan](https://www.ivpn.net/knowledgebase/81/How-do-I-activate-port-forwarding.html) geactiveerd worden via de client area. Port forwarding is alleen beschikbaar op IVPN bij gebruik van WireGuard- of OpenVPN-protocollen en is [uitgeschakeld op Amerikaanse servers](https://www.ivpn.net/knowledgebase/116/Port-forwarding-is-not-working-why.html).

#### :material-check:{ .pg-green } Mobiele Clients

Naast het leveren van standaard OpenVPN-configuratiebestanden, heeft IVPN mobiele clients voor [App Store](https://apps.apple.com/us/app/ivpn-serious-privacy-protection/id1193122683), [Google Play](https://play.google.com/store/apps/details?id=net.ivpn.client), en [GitHub](https://github.com/ivpn/android-app/releases) die gemakkelijke verbindingen met hun servers mogelijk maken.

#### :material-information-outline:{ .pg-blue } Aanvullende functionaliteit

IVPN-clients ondersteunen tweefactorauthenticatie (de clients van Mullvad niet). IVPN biedt ook "[AntiTracker](https://www.ivpn.net/antitracker)" functionaliteit, die advertentienetwerken en trackers op netwerkniveau blokkeert.

### Mullvad

!!! recommendation

    ![Mullvad logo](assets/img/vpn/mullvad.svg){ align=right }
    
    **Mullvad** is een snelle en goedkope VPN met een serieuze focus op transparantie en veiligheid. Zij zijn in bedrijf sinds **2009**. Mullvad is gevestigd in Zweden en heeft geen gratis proefversie.
    
    [:octicons-home-16: Homepage](https://mullvad.net){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://mullvad.net/en/help/privacy-policy/){ .card-link title="Privacybeleid" }.
    [:octicons-info-16:](https://mullvad.net/en/help/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/mullvad){ .card-link title="Broncode" }
    
    ??? downloads "Downloaden"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn)
        - [:simple-appstore: App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513)
        - [:simple-github: GitHub](https://github.com/mullvad/mullvadvpn-app/releases)
        - [:simple-windows11: Windows](https://mullvad.net/en/download/windows/)
        - [:simple-apple: macOS](https://mullvad.net/en/download/macos/)
        - [:simple-linux: Linux](https://mullvad.net/en/download/linux/)

#### :material-check:{ .pg-green } 41 Landen

Mullvad heeft [servers in 41 landen](https://mullvad.net/servers/).(1) Door een VPN-provider te kiezen met een server die het dichtst bij je in de buurt staat, verminder je de vertraging van het netwerkverkeer die je verstuurt. Dit komt door een kortere route (minder hops) naar de bestemming.
{ .annotate }

1. Laatst gecontroleerd: 2023-01-19

Wij denken ook dat het beter is voor de veiligheid van de privésleutels van de VPN-provider als ze [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service) gebruiken, in plaats van goedkopere gedeelde servers (met andere klanten) zoals [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Onafhankelijk geaudit

De VPN-clients van Mullvad zijn geaudit door Cure53 en Assured AB in een pentest-rapport [gepubliceerd op cure53.de](https://cure53.de/pentest-report_mullvad_v2.pdf). De beveiligingsonderzoekers concludeerden:

> Cure53 en Assured AB zijn blij met de resultaten van de audit en de software laat over het algemeen een positieve indruk achter. Dankzij de inzet van het interne team van Mullvad VPN, twijfelen de testers er niet aan dat het project vanuit een beveiligingsoogpunt op het juiste spoor zit.

In 2020 werd een tweede audit [aangekondigd](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) en werd het [definitieve auditverslag ](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) beschikbaar gesteld op de website van Cure53:

> De resultaten van dit mei-juni 2020-project gericht op het Mullvad-complex zijn vrij positief. [...] Het totale applicatie-ecosysteem dat door Mullvad wordt gebruikt, laat een goede en gestructureerde indruk achter. De algemene structuur van de applicatie maakt het gemakkelijk om patches en fixes op een gestructureerde manier uit te rollen. De bevindingen van Cure53 laten vooral zien hoe belangrijk het is om de huidige lekken voortdurend te controleren en opnieuw te beoordelen, om de privacy van de eindgebruikers altijd te waarborgen. Dat gezegd hebbende, Mullvad beschermt de eindgebruiker uitstekend tegen veelvoorkomende lekken van PII en privacygerelateerde risico's.

In 2020 werd een infstrastructuuraudit [aangekondigd](https://mullvad.net/blog/2020/6/25/results-available-audit-mullvad-app/) en werd het [definitieve auditverslag ](https://cure53.de/pentest-report_mullvad_2020_v2.pdf) beschikbaar gesteld op de website van Cure53. Een ander rapport werd in opdracht gegeven [in juni 2022](https://mullvad.net/en/blog/2022/6/22/vpn-server-audit-found-no-information-leakage-or-logging-of-customer-data/) en is beschikbaar op [Assured's website](https://www.assured.se/publications/Assured_Mullvad_relay_server_audit_report_2022.pdf).

#### :material-check:{ .pg-green } Open-source clients

Mullvad levert de broncode voor hun desktop en mobiele clients in hun [GitHub organisatie](https://github.com/mullvad/mullvadvpn-app).

#### :material-check:{ .pg-green } Accepteert contant geld en Monero

Mullvad accepteert naast creditcards en PayPal ook Bitcoin, Bitcoin Cash, **Monero** en **contant geld/lokale valuta** als anonieme vormen van betaling. Ze aanvaarden ook Swish en bankoverschrijvingen.

#### :material-check:{ .pg-green } WireGuard ondersteuning

Mullvad ondersteunt het WireGuard® protocol. [WireGuard](https://www.wireguard.com) is een nieuwer protocol dat gebruik maakt van geavanceerde [cryptografie](https://www.wireguard.com/protocol/). Bovendien wil WireGuard eenvoudiger en performanter zijn.

Mullvad [adviseert](https://mullvad.net/en/help/why-wireguard/) het gebruik van WireGuard met hun dienst. Het is het standaard of enige protocol op Mullvad's Android, iOS, macOS en Linux apps, maar op Windows moet je [handmatig](https://mullvad.net/en/help/how-turn-wireguard-mullvad-app/) WireGuard inschakelen. Mullvad biedt ook een WireGuard configuratiegenerator voor gebruik met de officiële WireGuard [apps](https://www.wireguard.com/install/).

#### :material-check:{ .pg-green } IPv6-ondersteuning

Mullvad ondersteunt de toekomst van netwerken [IPv6](https://en.wikipedia.org/wiki/IPv6). Hun netwerk geeft u [toegang tot diensten die gehost worden op IPv6](https://mullvad.net/en/blog/2014/9/15/ipv6-support/) in tegenstelling tot andere providers die IPv6-verbindingen blokkeren.

#### :material-check:{ .pg-green } Remote Port Forwarding

Remote [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) is toegestaan voor mensen die eenmalige betalingen doen, maar niet voor rekeningen met een terugkerende/abonnementsgebaseerde betalingsmethode. Dit is om te voorkomen dat Mullvad je kan identificeren op basis van jouw poortgebruik en opgeslagen abonnementsinformatie. Zie [Port forwarding met Mullvad VPN](https://mullvad.net/help/port-forwarding-and-mullvad/) voor meer informatie.

#### :material-check:{ .pg-green } Mobiele Clients

Mullvad heeft [App Store](https://apps.apple.com/app/mullvad-vpn/id1488466513) en [Google Play](https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn) clients gepubliceerd, die beide een gebruiksvriendelijke interface ondersteunen in plaats van dat je jouw WireGuard-verbinding handmatig moet configureren. De Android client is ook beschikbaar op [GitHub](https://github.com/mullvad/mullvadvpn-app/releases).

#### :material-information-outline:{ .pg-blue } Aanvullende functionaliteit

Mullvad is zeer transparant over welke knooppunten zij [bezitten of huren](https://mullvad.net/en/servers/). Ze gebruiken [ShadowSocks](https://shadowsocks.org/) in hun ShadowSocks + OpenVPN-configuratie, waardoor ze beter bestand zijn tegen firewalls met [Deep Packet Inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) die VPN's proberen te blokkeren. Vermoedelijk moet [China een andere methode gebruiken om ShadowSocks servers te blokkeren](https://github.com/net4people/bbs/issues/22). Mullvad's website is ook toegankelijk via Tor via [o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion).

### Proton VPN

!!! recommendation annotate

    ![Proton VPN logo](assets/img/vpn/protonvpn.svg){ align=right }
    
    **Proton VPN** is een sterke speler in de VPN-ruimte en is in bedrijf sinds 2016. Proton AG is gevestigd in Zwitserland en biedt een beperkte gratis versie aan en ook een meer uitgebreide premium optie.
    
    [:octicons-home-16: Homepage](https://protonvpn.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://protonvpn.com/privacy-policy){ .card-link title="Privacybeleid" }
    [:octicons-info-16:](https://protonvpn.com/support/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/ProtonVPN){ .card-link title="Broncode" }
    
    ??? downloads "Downloaden"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1437005085)
        - [:simple-github: GitHub](https://github.com/ProtonVPN/android-app/releases)
        - [:simple-windows11: Windows](https://protonvpn.com/download-windows)
        - [:simple-linux: Linux](https://protonvpn.com/support/linux-vpn-setup/)

#### :material-check:{ .pg-green } 67 Landen

Proton VPN heeft [servers in 67 landen](https://protonvpn.com/vpn-servers).(1) Door een VPN-provider te kiezen met een server die het dichtst bij je in de buurt staat, verminder je de vertraging van het netwerkverkeer die je verstuurt. Dit komt door een kortere route (minder hops) naar de bestemming.
{ .annotate }

1. Laatst gecontroleerd: 2022-09-16

Wij denken ook dat het beter is voor de veiligheid van de privésleutels van de VPN-provider als ze [dedicated servers](https://en.wikipedia.org/wiki/Dedicated_hosting_service) gebruiken, in plaats van goedkopere gedeelde servers (met andere klanten) zoals [virtual private servers](https://en.wikipedia.org/wiki/Virtual_private_server).

#### :material-check:{ .pg-green } Onafhankelijk geaudit

Vanaf januari 2020, heeft Proton VPN een onafhankelijke audit door SEC Consult ondergaan. SEC Consult vond enkele kwetsbaarheden met een gemiddeld en laag risico in de Windows-, Android- en iOS-applicaties van Proton VPN, die allemaal door Proton VPN "naar behoren waren verholpen" voordat de rapporten werden gepubliceerd. Geen van de geconstateerde problemen zou een aanvaller op afstand toegang hebben verschaft tot jouw apparaat of verkeer. Je kunt individuele rapporten voor elk platform bekijken op [protonvpn.com](https://protonvpn.com/blog/open-source/). In april 2022 onderging Proton VPN [nog een audit](https://protonvpn.com/blog/no-logs-audit/) en het rapport werd [opgesteld door Securitum](https://protonvpn.com/blog/wp-content/uploads/2022/04/securitum-protonvpn-nologs-20220330.pdf). Een [attestatiebrief](https://proton.me/blog/security-audit-all-proton-apps) werd op 9 november 2021 voor de apps van Proton VPN verstrekt door [Securitum](https://research.securitum.com).

#### :material-check:{ .pg-green } Open-source clients

Proton VPN levert de broncode voor hun desktop en mobiele clients in hun [GitHub organisatie](https://github.com/ProtonVPN).

#### :material-check:{ .pg-green } Accepteert contant geld

Proton VPN accepteert, naast credit/debit cards, PayPal en [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc), ook **contant geld** als anonieme vorm van betaling.

#### :material-check:{ .pg-green } WireGuard ondersteuning

Proton VPN ondersteunt hoofdzakelijk het WireGuard® protocol. [WireGuard](https://www.wireguard.com) is een nieuwer protocol dat gebruik maakt van geavanceerde [cryptografie](https://www.wireguard.com/protocol/). Bovendien wil WireGuard eenvoudiger en performanter zijn.

Proton VPN [adviseert](https://protonvpn.com/blog/wireguard/) het gebruik van WireGuard met hun dienst. Op de Windows, macOS, iOS, Android, ChromeOS en Android TV apps van Proton VPN is WireGuard het standaardprotocol; [ondersteuning](https://protonvpn.com/support/how-to-change-vpn-protocols/) voor het protocol is echter niet aanwezig in hun Linux app.

#### :material-alert-outline:{ .pg-orange } Remote Port Forwarding

Proton VPN ondersteunt momenteel alleen remote [port forwarding](https://protonvpn.com/support/port-forwarding/) op Windows, wat van invloed kan zijn op sommige toepassingen. Vooral Peer-to-peer-toepassingen zoals Torrent-cliënten.

#### :material-check:{ .pg-green } Mobiele Clients

Naast het leveren van standaard OpenVPN-configuratiebestanden, heeft Proton VPN mobiele clients voor [App Store](https://apps.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085), [Google Play](https://play.google.com/store/apps/details?id=ch.protonvpn.android&hl=en_US), en [GitHub](https://github.com/ProtonVPN/android-app/releases) die eenvoudige verbindingen met hun servers mogelijk maken.

#### :material-information-outline:{ .pg-blue } Aanvullende functionaliteit

Proton VPN heeft eigen servers en datacenters in Zwitserland, IJsland en Zweden. Ze bieden adblocking en het blokkeren van bekende malware domeinen met hun DNS service. Ze bieden adblocking en blokkering van bekende malwaredomeinen met hun DNS-dienst. Bovendien biedt Proton VPN ook "Tor" -servers waarmee je eenvoudig verbinding kunt maken met. onion sites, maar we raden je nog steeds ten zeerste aan om hiervoor [de officiële Tor Browser](https://www.torproject.org/) te gebruiken.

#### :material-alert-outline:{ .pg-orange } Killswitch-functie is kapot op Intel-gebaseerde Macs

Systeemcrashes [kunnen optreden](https://protonvpn.com/support/macos-t2-chip-kill-switch/) op Intel-gebaseerde Macs bij het gebruik van de VPN killswitch. Als je deze functie nodig hebt, en je gebruikt een Mac met Intel-chipset, moet je overwegen een andere VPN-dienst te gebruiken.

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

**Minimum om in aanmerking te komen:**

- [Anonieme cryptocurrency](cryptocurrency.md) **of** cash betalingsoptie.
- Geen persoonlijke informatie nodig om te registreren: Hooguit gebruikersnaam, wachtwoord en e-mail.

**Beste geval:**

- Accepteert meerdere [anonieme betalingsopties](advanced/payments.md).
- Er wordt geen persoonlijke informatie geaccepteerd (automatisch gegenereerde gebruikersnaam, geen e-mail vereist, enz.).

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

**Minimum om in aanmerking te komen:**

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

- Een nauwkeurige vergelijking met wanneer Tor of andere [op zichzelf staande netwerken](tor.md) moeten worden gebruikt.
- Beschikbaarheid van de website van de VPN-provider via een .onion [Verborgen service](https://en.wikipedia.org/wiki/.onion)

### Extra functionaliteit

Hoewel het geen strikte vereisten zijn, zijn er enkele factoren die wij in aanmerking hebben genomen bij het bepalen van de aanbieders die wij aanbevelen. Deze omvatten adblocking/tracker-blocking-functionaliteit, warrant canaries, multihop-verbindingen, uitstekende klantenondersteuning, het aantal toegestane gelijktijdige verbindingen, enz.

---
title: "Soorten communicatienetwerken"
icon: 'material/transit-connection-variant'
---

Er zijn verschillende netwerkarchitecturen die gewoonlijk worden gebruikt om berichten tussen mensen door te geven. Deze netwerken kunnen verschillende privacygaranties bieden, en daarom is het de moeite waard jouw [bedreigingsmodel](../basics/threat-modeling.md) in overweging te nemen bij de beslissing welke app je gaat gebruiken.

[Aanbevolen Instant Messengers](../real-time-communication.md ""){.md-button}

## Gecentraliseerde netwerken

![Diagram gecentraliseerde netwerken](../assets/img/layout/network-centralized.svg){ align=left }

Gecentraliseerde berichten diensten zijn die waarbij alle deelnemers zich op dezelfde server of hetzelfde netwerk van servers bevinden die door dezelfde organisatie worden gecontroleerd.

Bij sommige zelf gehoste berichten diensten kun je je eigen server opzetten. Zelf-hosting kan extra privacywaarborgen bieden, zoals geen gebruikslogs of beperkte toegang tot metadata (gegevens over wie met wie praat). Zelf gehoste gecentraliseerde berichten diensten zijn geïsoleerd en iedereen moet op dezelfde server zijn om te kunnen communiceren.

**Voordelen:**

- Nieuwe functies en veranderingen kunnen sneller worden doorgevoerd.
- Gemakkelijker om mee te beginnen en om contacten te vinden.
- De meeste volwassen en stabiele functies, ecosystemen, omdat ze gemakkelijker te programmeren zijn in een gecentraliseerde software.
- Privacyproblemen kunnen worden verminderd wanneer je vertrouwt op een server die je zelf host.

**Nadelen:**

- Kan [beperkte controle of toegang](https://drewdevault.com/2018/08/08/Signal.html)omvatten. Dit kan dingen inhouden zoals:
- Het is [verboden om clients van derden](https://github.com/LibreSignal/LibreSignal/issues/37#issuecomment-217211165) aan te sluiten op het gecentraliseerde netwerk, wat zou kunnen zorgen voor meer maatwerk of een betere ervaring. Vaak gedefinieerd in de gebruiksvoorwaarden.
- Slechte of geen documentatie voor externe ontwikkelaars.
- De [eigendom](https://web.archive.org/web/20210729191953/https://blog.privacytools.io/delisting-wire/), het privacybeleid en de verrichtingen van de dienst kunnen gemakkelijk veranderen wanneer één enkele entiteit de dienst controleert, waardoor de dienst later in gevaar kan worden gebracht.
- Zelf-hosting vergt inspanning en kennis van het opzetten van een dienst.

## Gefedereerde netwerken

![Federated networks diagram](../assets/img/layout/network-decentralized.svg){ align=left }

Bij gefedereerde berichten diensten worden meerdere, onafhankelijke, gedecentraliseerde servers gebruikt die met elkaar kunnen praten (e-mail is een voorbeeld van een gefedereerde dienst). Federatie stelt systeembeheerders in staat hun eigen server te beheren en toch deel uit te maken van het grotere communicatienetwerk.

Bij zelf-hosting kunnen leden van een federatieve server leden van andere servers ontdekken en met hen communiceren, hoewel sommige servers ervoor kunnen kiezen privé te blijven door niet-federated te zijn (bv. een werk team server).

**Voordelen:**

- Maakt een grotere controle over jouw eigen gegevens mogelijk wanneer je jouw eigen server gebruikt.
- Hiermee kunt je kiezen aan wie je jouw gegevens toevertrouwt door te kiezen tussen meerdere "openbare" servers.
- Staat vaak clients van derden toe die een meer native, aangepaste of toegankelijke ervaring kunnen bieden.
- Bij serversoftware kan worden nagegaan of deze overeenkomt met de openbare broncode, ervan uitgaande dat je toegang hebt tot de server of dat je de persoon die dat heeft (bijvoorbeeld een familielid) vertrouwt.

**Nadelen:**

- Het toevoegen van nieuwe functies is ingewikkelder, omdat deze functies moeten worden gestandaardiseerd en getest om ervoor te zorgen dat ze werken met alle servers op het netwerk.
- Door het vorige punt kunnen functies ontbreken, of onvolledig zijn of op onverwachte manieren werken in vergelijking met gecentraliseerde platforms, zoals het doorgeven van berichten wanneer zij offline zijn of het verwijderen van berichten.
- Sommige metadata kunnen beschikbaar zijn (bv. informatie zoals "wie praat met wie", maar niet de eigenlijke berichtinhoud indien E2EE wordt gebruikt).
- Voor federatieve servers is het over het algemeen nodig de beheerder van uw server te vertrouwen. Ze kunnen een hobbyist zijn of anderszins geen "beveiligingsprofessional", en dienen misschien geen standaarddocumenten in zoals een privacybeleid of servicevoorwaarden waarin staat hoe jouw gegevens worden gebruikt.
- Serverbeheerders kiezen er soms voor andere servers te blokkeren, die een bron van ongemodereerd misbruik zijn of algemene regels van aanvaard gedrag overtreden. Dit zal jouw vermogen om te communiceren met leden van die servers belemmeren.

## Peer-to-Peer netwerken

![P2P-diagram](../assets/img/layout/network-distributed.svg){ align=left }

P2P berichten diensten maken verbinding met een [gedistribueerd netwerk](https://en.wikipedia.org/wiki/Distributed_networking) van knooppunten om een bericht door te geven aan de ontvanger zonder een server van derden.

Cliënten (peers) vinden elkaar meestal via een [gedistribueerd computernetwerk](https://en.wikipedia.org/wiki/Distributed_computing). Voorbeelden hiervan zijn [Distributed Hash Tables](https://en.wikipedia.org/wiki/Distributed_hash_table) (DHT), gebruikt door [torrents](https://en.wikipedia.org/wiki/BitTorrent_(protocol)) en [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) bijvoorbeeld. Een andere benadering is op nabijheid gebaseerde netwerken, waarbij een verbinding tot stand wordt gebracht via WiFi of Bluetooth (bijvoorbeeld Briar of het [Scuttlebutt](https://www.scuttlebutt.nz) sociale netwerkprotocol).

Zodra een peer via een van deze methoden een route naar zijn contactpersoon heeft gevonden, wordt een rechtstreekse verbinding tussen hen tot stand gebracht. Hoewel berichten meestal versleuteld zijn, kan een waarnemer toch de locatie en de identiteit van de verzender en de ontvanger afleiden.

P2P-netwerken maken geen gebruik van servers, aangezien peers rechtstreeks met elkaar communiceren en dus niet zelf gehost kunnen worden. Sommige aanvullende diensten kunnen echter afhankelijk zijn van gecentraliseerde servers, zoals het ontdekken van gebruikers of het doorgeven van offline berichten, die baat kunnen hebben bij zelfhosting.

**Voordelen:**

- Er wordt zo min mogelijk informatie aan derden verstrekt.
- Moderne P2P-platforms implementeren standaard E2EE. Er zijn geen servers die jouw transmissies kunnen onderscheppen en ontsleutelen, in tegenstelling tot gecentraliseerde en gefedereerde netwerken.

**Nadelen:**

- Beperkte functies:
- Berichten kunnen alleen worden verzonden als beide peers online zijn, maar jouw cliënt kan berichten lokaal opslaan om te wachten tot de contactpersoon weer online is.
- Verhoogt in het algemeen het batterijverbruik op mobiele toestellen, omdat de client verbonden moet blijven met het gedistribueerde netwerk om te weten te komen wie online is.
- Sommige veelgebruikte messenger-functies zijn mogelijk niet of onvolledig geïmplementeerd, zoals het verwijderen van berichten.
- Uw IP-adres en dat van de contacten waarmee je communiceert kunnen worden blootgesteld als je de software niet gebruikt in combinatie met een [VPN](../vpn.md) of [Tor](../tor.md). Veel landen kennen een vorm van massasurveillance en/of het bewaren van metadata.

## Anonieme routering

![Anoniem routeringsschema](../assets/img/layout/network-anonymous-routing.svg){ align=left }

Een berichten diensten die gebruik maakt van [anonieme routering](https://doi.org/10.1007/978-1-4419-5906-5_628) verbergt de identiteit van de verzender, de ontvanger of het bewijs dat zij hebben gecommuniceerd. Idealiter zou een berichten diensten alle drie moeten verbergen.

Er zijn [veel](https://doi.org/10.1145/3182658) verschillende manieren om anonieme routering te implementeren. Een van de bekendste is [onion routing](https://en.wikipedia.org/wiki/Onion_routing) (d.w.z. [Tor](tor-overview.md)), waarbij versleutelde berichten worden gecommuniceerd via een virtueel [overlay netwerk](https://en.wikipedia.org/wiki/Overlay_network) dat de locatie van elk knooppunt en de ontvanger en verzender van elk bericht verbergt. De verzender en de ontvanger hebben nooit rechtstreeks contact en ontmoeten elkaar alleen via een geheim rendez-vousknooppunt, zodat er geen IP-adressen of fysieke locatie uitlekken. Knooppunten kunnen berichten niet ontcijferen, noch de eindbestemming; alleen de ontvanger kan dat. Elk tussenliggend knooppunt kan slechts een deel decoderen dat aangeeft waar het nog versleutelde bericht naartoe moet, totdat het aankomt bij de ontvanger die het volledig kan decoderen, vandaar de "ui-lagen"

Het zelf hosten van een knooppunt in een anoniem routenetwerk biedt de hoster geen extra privacyvoordelen, maar draagt bij tot de weerbaarheid van het hele netwerk tegen identificatieaanvallen, wat in ieders voordeel is.

**Voordelen:**

- Minimale tot geen informatie wordt blootgesteld aan andere partijen.
- Berichten kunnen op gedecentraliseerde wijze worden doorgegeven, zelfs als een van de partijen offline is.

**Nadelen:**

- Trage verspreiding van berichten.
- Vaak beperkt tot minder mediatypen, meestal tekst, omdat het netwerk traag is.
- Minder betrouwbaar als de knooppunten worden geselecteerd door gerandomiseerde routering, kunnen sommige knooppunten zeer ver van de verzender en de ontvanger verwijderd zijn, waardoor vertraging optreedt of zelfs berichten niet worden verzonden als een van de knooppunten offline gaat.
- Ingewikkelder om mee te beginnen omdat de creatie en beveiligde backup van een cryptografische private sleutel vereist is.
- Net als bij andere gedecentraliseerde platforms is het toevoegen van functies ingewikkelder voor ontwikkelaars dan op een gecentraliseerd platform. Daarom kunnen functies ontbreken of onvolledig zijn geïmplementeerd, zoals het offline doorgeven van berichten of het verwijderen van berichten.

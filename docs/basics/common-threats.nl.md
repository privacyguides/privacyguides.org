---
title: "Veel voorkomende bedreigingen"
icon: 'material/eye-outline'
---

In grote lijnen delen wij onze aanbevelingen in in deze algemene categorieën van [bedreigingen](threat-modeling.md) of doelstellingen die voor de meeste mensen gelden. ==U kunt zich bezighouden met geen, een, enkele, of al deze mogelijkheden==, en de instrumenten en diensten die je gebruikt hangen af van wat jouw doelstellingen zijn. Misschien hebt je ook specifieke bedreigingen buiten deze categorieën, en dat is prima! Het belangrijkste is dat je inzicht krijgt in de voordelen en tekortkomingen van de middelen die je gebruikt, want vrijwel geen enkel middel beschermt je tegen elke denkbare bedreiging.

- <span class="pg-purple">:material-incognito: Anonimiteit</span> - Het afschermen van jouw online activiteiten van uw echte identiteit, waardoor je beschermd bent tegen mensen die proberen te achterhalen *jouw* identiteit specifiek.
- <span class="pg-red">:material-target-account: Gerichte aanvallen</span> - Beschermd zijn tegen gerichte hackers of andere kwaadwillenden die toegang proberen te krijgen tot *jouw* gegevens of apparaten specifiek.
- <span class="pg-orange">:material-bug-outline: Passieve aanvallen</span> - Beschermd zijn tegen zaken als malware, inbreuken op gegevens en andere aanvallen die tegen veel mensen tegelijk worden uitgevoerd
- <span class="pg-teal">:material-server-network: Dienstverleners</span> - Bescherming van jouw gegevens tegen dienstverleners, bv. met end-to-endencryptie waardoor jouw gegevens onleesbaar worden voor de server.
- <span class="pg-blue">:material-eye-outline: Mass Surveillance</span> - Bescherming tegen overheidsinstellingen, organisaties, websites en diensten die samenwerken om jouw activiteiten te volgen.
- <span class="pg-brown">:material-account-cash: Surveillance Capitalism</span> - Jezelf beschermen tegen grote advertentienetwerken zoals Google en Facebook, en een groot aantal andere gegevensverzamelaars van derden
- <span class="pg-green">:material-account-search: Public Exposure</span> - het beperken van de informatie over je die online toegankelijk is voor zoekmachines of het grote publiek.
- <span class="pg-blue-gray">:material-close-outline: Censuur</span> - Voorkomen van gecensureerde toegang tot informatie en zelf gecensureerd worden als je online spreekt

Sommige van deze bedreigingen kunnen zwaarder wegen dan andere, afhankelijk van jouw specifieke zorgen. Een softwareontwikkelaar die toegang heeft tot waardevolle of kritieke gegevens is bijvoorbeeld misschien in de eerste plaats bezorgd over <span class="pg-red">:material-target-account: gerichte aanvallen</span>, maar verder willen zij waarschijnlijk nog steeds hun persoonlijke gegevens beschermen tegen opneming in <span class="pg-blue">:material-eye-outline: programma's voor massatoezicht</span>. Op dezelfde manier is de "gemiddelde consument" misschien in de eerste plaats bezorgd over <span class="pg-green">:material-account-search: Public Exposure</span> van zijn persoonsgegevens, maar moet hij toch op zijn hoede zijn voor op beveiliging gerichte zaken zoals <span class="pg-orange">:material-bug-outline: Passive Attacks</span> zoals malware die zijn apparaten aantast.

## Anonimiteit versus privacy

<span class="pg-purple">:material-incognito: Anonimiteit</span>

Anonimiteit wordt vaak verward met privacy, maar het is een apart concept. Terwijl privacy een reeks keuzes is die je maakt over hoe jouw gegevens worden gebruikt en gedeeld, is anonimiteit het volledig loskoppelen van jouw online activiteiten van jouw echte identiteit.

Voor klokkenluiders en journalisten, bijvoorbeeld, kan een veel extremer bedreigingsmodel gelden, dat volledige anonimiteit vereist. Dat is niet alleen verbergen wat zij doen, welke gegevens zij hebben, en niet gehackt worden door hackers of overheden, maar ook volledig verbergen wie zij zijn. Zij zullen elke vorm van gemak opofferen als dat betekent dat hun anonimiteit, privacy of veiligheid wordt beschermd, want hun leven kan ervan afhangen. De meeste gewone mensen hoeven niet zo ver te gaan.

## Veiligheid en privacy

<span class="pg-orange">:material-bug-outline: Passieve aanvallen</span>

Beveiliging en privacy worden vaak door elkaar gehaald, omdat je beveiliging nodig hebt om enige schijn van privacy te krijgen: Hulpmiddelen gebruiken die privé lijken, is zinloos als ze gemakkelijk door aanvallers kunnen worden misbruikt om uw gegevens later vrij te geven. Het omgekeerde is echter niet noodzakelijk waar; de veiligste dienst ter wereld *is niet noodzakelijk* privé. Het beste voorbeeld hiervan is het toevertrouwen van gegevens aan Google, dat, gezien zijn omvang, minimale veiligheidsincidenten heeft gekend door vooraanstaande beveiligingsexperts in te zetten om zijn infrastructuur te beveiligen. Hoewel Google een zeer veilige dienst aanbiedt, zouden maar weinigen hun gegevens als privé beschouwen in de gratis consumentenproducten van Google (Gmail, YouTube, enz.).

Wat de beveiliging van toepassingen betreft, weten we over het algemeen niet (en kunnen we soms niet) weten of de software die we gebruiken kwaadaardig is, of dat op een dag zou kunnen worden. Zelfs bij de meest betrouwbare ontwikkelaars is er meestal geen garantie dat hun software geen ernstige kwetsbaarheid bevat die later kan worden uitgebuit.

Om de potentiële schade van kwaadaardige software tot een minimum te beperken, moet u beveiliging door compartimentering toepassen. Dit kan in de vorm van het gebruik van verschillende computers voor verschillende taken, het gebruik van virtuele machines om verschillende groepen van gerelateerde toepassingen te scheiden, of het gebruik van een veilig besturingssysteem met een sterke nadruk op sandboxing van toepassingen en verplichte toegangscontrole.

!!! tip

    Mobiele besturingssystemen zijn over het algemeen veiliger dan desktopbesturingssystemen als het gaat om sandboxing van toepassingen.
    
    Apps kunnen geen root-toegang krijgen en hebben alleen toegang tot systeembronnen die je hen verleent. Desktop besturingssystemen lopen over het algemeen achter op het gebied van goede sandboxing. Chrome OS heeft vergelijkbare sandboxing-eigenschappen als Android, en macOS heeft volledige controle over systeemtoestemmingen en opt-in (voor ontwikkelaars) sandboxing voor applicaties, maar deze besturingssystemen geven wel identificerende informatie door aan hun respectieve OEM's. Linux heeft de neiging geen informatie door te geven aan systeemverkopers, maar het heeft een slechte bescherming tegen exploits en kwaadaardige apps. Dit kan enigszins worden ondervangen met gespecialiseerde distributies die veel gebruik maken van virtuele machines of containers, zoals Qubes OS.

<span class="pg-red">:material-target-account: Gerichte aanvallen</span>

Gerichte aanvallen tegen een specifieke gebruiker zijn moeilijker aan te pakken. Gangbare aanvalsmethoden zijn het verzenden van schadelijke documenten via e-mails, het uitbuiten van kwetsbaarheden in de browser en het besturingssysteem, en fysieke aanvallen. Als dit voor je een punt van zorg is, moet u mogelijk meer geavanceerde strategieën ter beperking van bedreigingen toepassen.

!!! tip

    **Webbrowsers**, **e-mailclients**, en **kantoorapplicaties** voeren standaard onvertrouwde code uit die je door derden wordt toegestuurd. Het draaien van meerdere virtuele machines om toepassingen als deze te scheiden van uw hostsysteem en van elkaar is een techniek die je kunt gebruiken om te voorkomen dat een exploit in deze toepassingen de rest van jouw systeem aantast. Technologieën als Qubes OS of Microsoft Defender Application Guard op Windows bieden bijvoorbeeld handige methoden om dit naadloos te doen.

Als je zich zorgen maakt over **fysieke aanvallen** moet je een besturingssysteem gebruiken met een veilige geverifieerde opstartimplementatie, zoals Android, iOS, macOS, [Windows (met TPM)](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process). Je moet er ook voor zorgen dat jouw schijf versleuteld is, en dat het besturingssysteem een TPM of Secure [Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1) of [Element](https://developers.google.com/android/security/android-ready-se) gebruikt voor het beperken van de snelheid waarmee pogingen worden gedaan om de wachtwoordzin voor de versleuteling in te voeren. Je moet voorkomen dat je jouw computer deelt met mensen die je niet vertrouwt, omdat de meeste desktopbesturingssystemen gegevens niet afzonderlijk per gebruiker versleutelen.

## Privacy van dienstverleners

<span class="pg-teal">:material-server-network: Dienstverleners</span>

Wij leven in een wereld waarin bijna alles met het internet is verbonden. Onze "privé"-berichten, e-mails, sociale interacties worden gewoonlijk ergens op een server opgeslagen. Wanneer je iemand een bericht stuurt, wordt dat bericht opgeslagen op een server en wanneer jouw vriend het bericht wil lezen, zal de server het hem tonen.

Het voor de hand liggende probleem hierbij is dat de dienstverlener (of een hacker die de server heeft gecompromitteerd) in jouw "privé"-gesprekken kan kijken wanneer en hoe hij maar wil, zonder dat je het ooit te weten komt. Dit geldt voor veel gangbare diensten zoals SMS-berichten, Telegram, Discord, enzovoort.

Gelukkig kan end-to-end encryptie dit probleem verlichten door de communicatie tussen jou en de gewenste ontvangers te versleutelen voordat ze zelfs maar naar de server worden verzonden. De vertrouwelijkheid van jouw berichten is gewaarborgd, zolang de dienstverlener geen toegang heeft tot de particuliere sleutels van beide partijen.

!!! note "Opmerking op webgebaseerde encryptie"

    In de praktijk varieert de doeltreffendheid van verschillende implementaties van end-to-end encryptie. Toepassingen zoals [Signal](../real-time-communication.md#signal) draaien op het toestel zelf, en elke kopie van de toepassing is hetzelfde voor verschillende installaties. Als de dienstverlener een backdoor in zijn applicatie zou aanbrengen om te proberen jouw privé-sleutels te stelen, zou dat later met reverse engineering kunnen worden opgespoord.
    
    Anderzijds vertrouwen webgebaseerde end-to-end encryptie-implementaties, zoals Proton Mail's webmail of Bitwarden's web vault, erop dat de server dynamisch JavaScript-code naar de browser stuurt om cryptografische operaties uit te voeren. Een kwaadwillende server zou zich op een specifieke gebruiker kunnen richten en hem kwaadwillige JavaScript-code sturen om zijn encryptiesleutel te stelen, en het zou uiterst moeilijk zijn voor de gebruiker om zoiets ooit op te merken. Zelfs als de gebruiker de poging om zijn sleutel te stelen opmerkt, zou het ongelooflijk moeilijk zijn om te bewijzen dat het de provider is die dit probeert, omdat de server ervoor kan kiezen om verschillende webclients aan verschillende gebruikers aan te bieden.
    
    Wanneer je vertrouwt op end-to-end encryptie, moet je daarom waar mogelijk native applicaties verkiezen boven web clients.

Zelfs met end-to-end encryptie kunnen dienstverleners je nog steeds profileren op basis van **metadata**, die doorgaans niet beschermd zijn. Hoewel de dienstverlener jouw berichten niet kan lezen om te zien wat je zegt, kan hij wel observeren met wie je praat, hoe vaak je hen berichten stuurt en op welke tijden je doorgaans actief bent. Bescherming van metadata is tamelijk ongewoon, en je zou goed moeten opletten in de technische documentatie van de software die je gebruikt om te zien of er überhaupt sprake is van minimalisering of bescherming van metadata, als dat voor je een punt van zorg is.

## Programma's voor massatoezicht

<span class="pg-blue">:material-eye-outline: Massabewaking</span>

Massasurveillance is een poging om een groot deel van of een gehele bevolking te surveilleren. Het verwijst vaak naar overheidsprogramma's, zoals de programma's [die in 2013 door Edward Snowden werden onthuld](https://en.wikipedia.org/wiki/Global_surveillance_disclosures_(2013%E2%80%93present)).

!!! abstract "Atlas of Surveillance"

    Als je meer wilt weten over bewakingsmethoden en hoe die in jouw stad worden toegepast, kunt je ook de [Atlas of Surveillance](https://atlasofsurveillance.org/) van de [Electronic Frontier Foundation](https://www.eff.org/) bekijken.

Regeringen rechtvaardigen massasurveillanceprogramma's vaak als noodzakelijke middelen om terrorisme te bestrijden en misdaad te voorkomen. Het schendt echter de mensenrechten en wordt meestal gebruikt om zich buitenproportioneel te richten op onder andere minderheidsgroepen en politieke dissidenten.

!!! quote "ACLU: [*De privacyles van 9/11: Mass Surveillance is Not the Way Forward*](https://www.aclu.org/news/national-security/the-privacy-lesson-of-9-11-mass-surveillance-is-not-the-way-forward)"

    Het omzeilen van de censuur zelf is betrekkelijk eenvoudig, maar het feit dat je het censuursysteem omzeilt voor de censoren kan zeer problematisch zijn. Je moet nagaan welke aspecten van het netwerk jouw tegenstander kan waarnemen, en of je jouw acties kunt ontkennen.

Ondanks de toenemende massasurveillance in de Verenigde Staten heeft de regering vastgesteld dat massasurveillanceprogramma's zoals Section 215 "weinig unieke waarde" hebben gehad wat betreft het stoppen van daadwerkelijke misdaden of terroristische complotten, waarbij de inspanningen grotendeels de eigen gerichte surveillanceprogramma's van de FBI dupliceren.[^2]

Ondanks de toenemende massasurveillance in de Verenigde Staten is de regering tot de conclusie gekomen dat massasurveillanceprogramma's zoals Sectie 215 "weinig unieke waarde" hebben gehad wat betreft het stoppen van echte misdaden of terroristische complotten, waarbij de inspanningen grotendeels een herhaling zijn van de eigen gerichte surveillanceprogramma's van de FBI.[^1]

- Jouw IP-adres
- Browser cookies
- Gegevens die je aan websites verstrekt
- Jouw browser of apparaat vingerafdruk
- Correlatie van betalingsmethodes

\[Deze lijst is niet uitputtend].

Als je bezorgd bent over massale surveillance programma's, kun je strategieën gebruiken zoals het opsplitsen van jouw online-identiteiten, je mengen met andere gebruikers of, waar mogelijk, gewoon vermijden om identificerende informatie te geven.

<span class="pg-brown">:material-account-cash: Surveillance kapitalisme</span>

> Het surveillance kapitalisme is een economisch systeem dat draait om het vastleggen en verhandelen van persoonsgegevens met als hoofddoel het maken van winst.[^2]

De beste manier om ervoor te zorgen dat jouw gegevens privé blijven, is ze in de eerste plaats gewoon niet openbaar te maken. Het verwijderen van informatie die je online over jezelf vindt, is een van de beste eerste stappen die je kunt nemen om jouw privacy terug te krijgen. Het gebruik van hulpmiddelen zoals content blockers om netwerkverzoeken aan hun servers te beperken, en het lezen van het privacybeleid van de diensten die je gebruikt, kunnen je helpen veel laag hangend fruit te vermijden, maar kunnen je nooit volledig beschermen tegen alle tracking.[^4]

Op sites waar je informatie deelt, is het heel belangrijk dat je de privacyinstellingen van jouw account controleert om te beperken hoe wijd die gegevens worden verspreid. Als jouw accounts bijvoorbeeld een "privémodus" hebben, schakel deze dan in om ervoor te zorgen dat jouw account niet wordt geïndexeerd door zoekmachines en niet kan worden bekeken door mensen die je niet van tevoren vertrouwd. De sterkste bescherming tegen het verzamelen van bedrijfsgegevens is om jouw gegevens waar mogelijk te versleutelen of te verdoezelen, waardoor het voor verschillende providers moeilijk wordt om gegevens met elkaar te correleren en een profiel op je op te bouwen.

## Beperking van publieke informatie

<span class="pg-green">:material-account-search: Publiekelijke bekendheid</span>

De beste manier om ervoor te zorgen dat jouw gegevens privé blijven, is ze in de eerste plaats gewoon niet openbaar te maken. Het verwijderen van ongewenste informatie die je online over jezelf vindt, is een van de beste eerste stappen die je kunt nemen om jouw privacy te terug te winnen.

- [Bekijk onze gids over het verwijderen van accounts :hero-arrow-circle-right-fill:](account-deletion.md)

Online-censuur kan in verschillende mate worden uitgeoefend door actoren zoals totalitaire regeringen, netwerkbeheerders en dienstverleners die de meningsuiting van hun gebruikers en de informatie waartoe zij toegang hebben, willen controleren. Deze pogingen om het internet te filteren zullen altijd onverenigbaar zijn met de idealen van vrije meningsuiting.

Censuur op bedrijfsplatforms komt steeds vaker voor nu platforms als Twitter en Facebook toegeven aan de vraag van het publiek, de druk van de markt en de druk van overheidsinstanties. Overheidsdruk kan bestaan uit heimelijke verzoeken aan bedrijven, zoals het verzoek van het Witte Huis [om een provocerende YouTube-video uit de lucht te halen ](https://www.nytimes.com/2012/09/17/technology/on-the-web-a-fine-line-on-free-speech-across-globe.html), of uit openlijke, zoals de Chinese regering die van bedrijven eist dat zij zich houden aan een streng censuurregime.

## Censuur vermijden

<span class="pg-blue-gray">:material-close-outline: Censuur</span>

Censuur online kan (in verschillende mate) worden uitgeoefend door actoren zoals totalitaire regeringen, netwerkbeheerders en dienstverleners. Deze pogingen om de communicatie te controleren en de toegang tot informatie te beperken zullen altijd onverenigbaar zijn met het mensenrecht op vrijheid van meningsuiting.[^5]

Censuur op bedrijfsplatforms komt steeds vaker voor, nu platforms als Twitter en Facebook toegeven aan de vraag van het publiek, de druk van de markt en de druk van overheidsinstanties. Overheidsdruk kan bestaan uit heimelijke verzoeken aan bedrijven, zoals het verzoek van het Witte Huis [om een provocerende YouTube-video uit de lucht te halen ](https://www.nytimes.com/2012/09/17/technology/on-the-web-a-fine-line-on-free-speech-across-globe.html), of uit openlijke, zoals de Chinese regering die van bedrijven eist dat zij zich houden aan een streng censuurregime.

Mensen die bezorgd zijn over de dreiging van censuur kunnen technologieën als [Tor](../advanced/tor-overview.md) gebruiken om die te omzeilen, en steun verlenen aan censuurbestendige communicatieplatforms als [Matrix](../real-time-communication.md#element), dat geen gecentraliseerde accountautoriteit heeft die willekeurig accounts kan sluiten.

!!! tip

    Het ontwijken van censuur kan gemakkelijk zijn, maar het verbergen van het feit dat je het doet kan heel moeilijk zijn.
    
    Je zou moeten overwegen welke aspecten van het netwerk je tegenstander kan waarnemen en of je plausibele ontkenningsmogelijkheden voor je actie hebt. Het gebruik van [versleutelde DNS](../advanced/dns-overview.md#what-is-encrypted-dns) kan je bijvoorbeeld helpen om rudimentaire, DNS-gebaseerde censuursystemen te omzeilen, maar het kan niet echt verbergen wat je bezoekt bij je ISP. Een VPN of Tor kan helpen verbergen wat je bezoekt voor netwerkbeheerders, maar je kunt niet verbergen dat je deze netwerken als gebruikt. Pluggable transports (zoals Obfs4proxy, Meek of Shadowsocks) kunnen je helpen firewalls te omzeilen die gangbare VPN-protocollen of Tor blokkeren, maar jouw pogingen tot omzeiling kunnen nog steeds worden ontdekt door methoden als probing of [deep packet inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection).

Je moet altijd rekening houden met de risico 's van het proberen om censuur te omzeilen, de mogelijke gevolgen en hoe geavanceerd je tegenstander kan zijn. Je moet voorzichtig zijn met jouw software selectie, en een back-up plan hebben voor het geval je betrapt wordt.

[^1]: United States Privacy and Civil Liberties Oversight Board: [Rapport over het telefoongegevens programma, uitgevoerd onder Section 215](https://documents.pclob.gov/prod/Documents/OversightReport/ec542143-1079-424a-84b3-acc354698560/215-Report_on_the_Telephone_Records_Program.pdf)
[^2]: Wikipedia: [Surveillance kapitalisme](https://en.wikipedia.org/wiki/Surveillance_capitalism)
[^3]: Wikipedia: [*Surveillancekapitalisme*](https://en.wikipedia.org/wiki/Surveillance_capitalism)
[^4]: "[Het opsommen van slechtheid](https://www.ranum.com/security/computer_security/editorials/dumb/)" (of, "het opsommen van alle slechte dingen die we kennen"), zoals veel adblockers en antivirusprogramma's doen, beschermt je niet afdoende tegen nieuwe en onbekende bedreigingen omdat ze nog niet zijn toegevoegd aan de filterlijst. Je moet ook andere mitigatietechnieken gebruiken.
[^5]: Verenigde Naties: [*Universele Verklaring van de Rechten van de Mens*](https://www.un.org/en/about-us/universal-declaration-of-human-rights).

---
title: "Common Threats"
icon: 'material/eye-outline'
description: Your threat model is personal to you, but these are some of the things many visitors to this site care about.
---

Broadly speaking, we categorize our recommendations into the [threats](threat-modeling.md) or goals that apply to most people. ==You may be concerned with none, one, a few, or all of these possibilities==, and the tools and services you use depend on what your goals are. You may have specific threats outside of these categories as well, which is perfectly fine! The important part is developing an understanding of the benefits and shortcomings of the tools you choose to use, because virtually none of them will protect you from every threat.

- <span class="pg-purple">:material-incognito: Anonymity</span> - Shielding your online activity from your real identity, protecting you from people who are trying to uncover *your* identity specifically.
- <span class="pg-red">:material-target-account: Targeted Attacks</span> - Being protected from hackers or other malicious actors who are trying to gain access to *your* data or devices specifically.
- <span class="pg-orange">:material-bug-outline: Passive Attacks</span> - Being protected from things like malware, data breaches, and other attacks that are made against many people at once.
- <span class="pg-teal">:material-server-network: Service Providers</span> - Protecting your data from service providers (e.g. with E2EE, which renders your data unreadable to the server).
- <span class="pg-blue">:material-eye-outline: Mass Surveillance</span> - Protection from government agencies, organizations, websites, and services which work together to track your activities.
- <span class="pg-brown">:material-account-cash: Surveillance Capitalism</span> - Protecting yourself from big advertising networks, like Google and Facebook, as well as a myriad of other third-party data collectors.
- <span class="pg-green">:material-account-search: Public Exposure</span> - Limiting the information about you that is accessible online—to search engines or the general public.
- <span class="pg-blue-gray">:material-close-outline: Censorship</span> - Avoiding censored access to information or being censored yourself when speaking online.

Some of these threats may be more important to you than others, depending on your specific concerns. For example, a software developer with access to valuable or critical data may be primarily concerned with <span class="pg-red">:material-target-account: Targeted Attacks</span>, but they probably still want to protect their personal data from being swept up in <span class="pg-blue">:material-eye-outline: Mass Surveillance</span> programs. Similarly, many people may be primarily concerned with <span class="pg-green">:material-account-search: Public Exposure</span> of their personal data, but they should still be wary of security-focused issues, such as <span class="pg-orange">:material-bug-outline: Passive Attacks</span>—like malware affecting their devices.

## Anonymity vs. Privacy

<span class="pg-purple">:material-incognito: Anonymity</span>

Anonymity is often confused with privacy, but they're distinct concepts. While privacy is a set of choices you make about how your data is used and shared, anonymity is the complete disassociation of your online activities from your real identity.

Whistleblowers and journalists, for example, can have a much more extreme threat model which requires total anonymity. That's not only hiding what they do, what data they have, and not getting hacked by malicious actors or governments, but also hiding who they are entirely. They will often sacrifice any kind of convenience if it means protecting their anonymity, privacy, or security, because their lives could depend on it. De flesta behöver inte gå så långt.

## Säkerhet och sekretess

<span class="pg-orange">:material-bug-outline: Passiva attacker</span>

Säkerhet och integritet förväxlas också ofta, eftersom man behöver säkerhet för att få ett sken av integritet: Det är meningslöst att använda verktyg - även om de är privata till sin utformning - om de lätt kan utnyttjas av angripare som senare släpper ut dina uppgifter. Men det omvända är inte nödvändigtvis sant: Den säkraste tjänsten i världen *är inte nödvändigtvis* privat. Det bästa exemplet på detta är att lita på data till Google som, med tanke på deras skala, har haft få säkerhetsincidenter genom att anställa branschledande säkerhetsexperter för att säkra sin infrastruktur. Även om Google tillhandahåller mycket säkra tjänster, skulle mycket få människor betrakta sina data privat i Googles gratis konsumentprodukter (Gmail, YouTube, etc.)

När det gäller applikationssäkerhet vet vi i allmänhet inte (och kan ibland inte) om programvaran vi använder är skadlig, eller kanske en dag blir skadlig. Även med de mest pålitliga utvecklarna finns det i allmänhet ingen garanti för att deras programvara inte har en allvarlig sårbarhet som senare kan utnyttjas.

För att minimera den skada som en skadlig programvara ** kan orsaka bör du använda säkerhet genom uppdelning. Det kan till exempel handla om att använda olika datorer för olika jobb, att använda virtuella maskiner för att separera olika grupper av relaterade program eller att använda ett säkert operativsystem med starkt fokus på sandlåda för program och obligatorisk åtkomstkontroll.

!!! tips

    Mobila operativsystem har i allmänhet bättre applikationssandlåda än stationära operativsystem: Appar kan inte få root-åtkomst och kräver tillstånd för åtkomst till systemresurser.
    
    Skrivbordsoperativsystem släpar i allmänhet efter vid korrekt sandlåda. ChromeOS har liknande sandlådor som Android och macOS har fullständig kontroll över systembehörigheter (och utvecklare kan välja att sandlådor ska användas för program). Dessa operativsystem överför dock identifieringsinformation till sina respektive OEM-tillverkare. Linux tenderar att inte lämna information till systemleverantörer, men har dåligt skydd mot exploateringar och skadliga program. Detta kan mildras något med specialiserade distributioner som i stor utsträckning använder sig av virtuella maskiner eller behållare, såsom [Qubes OS](../../desktop/#qubes-os).

<span class="pg-red">:material-target-account: Riktade attacker</span>

Riktade attacker mot en specifik person är mer problematiska att hantera. Vanliga attacker är att skicka skadliga dokument via e-post, utnyttja sårbarheter (t.ex. i webbläsare och operativsystem) och fysiska attacker. Om detta är ett problem för dig bör du använda mer avancerade strategier för att minska hoten.

!!! tips

    I **webbläsare**, **emailklienter** och **kontorsprogram** körs vanligtvis kod som inte är tillförlitlig och som skickas till dig från tredje part. Att köra flera virtuella maskiner för att separera sådana här program från värdsystemet och från varandra är en teknik som du kan använda för att minska risken för att en exploatering i dessa program ska kunna äventyra resten av systemet. Tekniker som Qubes OS eller Microsoft Defender Application Guard på Windows ger till exempel praktiska metoder för att göra detta.

Om du är orolig för **fysiska attacker** bör du använda ett operativsystem med en säker verifierad uppstart, t.ex. Android, iOS, macOS eller [Windows (med TPM)](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process). Du bör också se till att enheten är krypterad och att operativsystemet använder en TPM eller Secure [Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1) eller [Element](https://developers.google.com/android/security/android-ready-se) för att begränsa försöken att ange krypteringsfrasen. Du bör undvika att dela din dator med personer du inte litar på, eftersom de flesta stationära operativsystem inte krypterar data separat per användare.

## Sekretess från tjänsteleverantörer

<span class="pg-teal">:material-server-network: Tjänsteleverantörer</span>

Vi lever i en värld där nästan allt är anslutet till internet. Våra "privata" meddelanden, e-postmeddelanden och sociala interaktioner lagras vanligtvis på en server, någonstans. I allmänhet, när du skickar ett meddelande till någon lagras det på en server, och när din vän vill läsa meddelandet kommer servern att visa det för dem.

Det uppenbara problemet med detta är att tjänsteleverantören (eller en hackare som har äventyrat servern) kan komma åt dina konversationer när och hur de vill, utan att du någonsin vet. Detta gäller många vanliga tjänster, som SMS-meddelanden, Telegram och Discord.

Tack och lov kan E2EE lindra detta problem genom att kryptera kommunikationen mellan dig och dina önskade mottagare innan den ens skickas till servern. Sekretessen för dina meddelanden garanteras, förutsatt att tjänsteleverantören inte har tillgång till någon av parternas privata nycklar.

!!! anmärkning "Anmärkning om webbaserad kryptering"

    I praktiken varierar effektiviteten i olika E2EE-genomföranden. Applikationer, till exempel [Signal](../real-time-communication.md#signal), körs naturligt på din enhet, och varje kopia av applikationen är densamma över olika installationer. Om tjänsteleverantören skulle införa en [backdoor](https://en.wikipedia.org/wiki/Backdoor_(computing)) i sitt program - i ett försök att stjäla dina privata nycklar - skulle det senare kunna upptäckas med [reverse engineering] (https://en.wikipedia.org/wiki/Reverse_engineering).
    
    Å andra sidan är webbaserade E2EE-implementationer, som Proton Mail-webmail eller Bitwardens *Web Vault*, beroende av att servern dynamiskt serverar JavaScript-kod till webbläsaren för att hantera kryptografi. En skadlig server kan rikta dig och skicka skadlig JavaScript-kod för att stjäla din krypteringsnyckel (och det skulle vara extremt svårt att märka). Eftersom servern kan välja att betjäna olika webbklienter till olika människor - även om du märkte attacken - skulle det vara otroligt svårt att bevisa leverantörens skuld.
    
    Därför bör du använda inbyggda applikationer över webbklienter när det är möjligt.

Även med E2EE kan tjänsteleverantörer fortfarande profilera dig utifrån **metadata**, som vanligtvis inte är skyddade. Medan tjänsteleverantören inte kan läsa dina meddelanden kan de fortfarande observera viktiga saker, till exempel vem du pratar med, hur ofta du skickar meddelanden till dem och när du vanligtvis är aktiv. Skydd av metadata är ganska ovanligt, och om det ingår i din hotmodell [](threat-modeling.md)- bör du vara uppmärksam på den tekniska dokumentationen för den programvara du använder för att se om det finns någon minimering eller något skydd av metadata överhuvudtaget.

## Massövervakningsprogram

<span class="pg-blue">:material-eye-outline: Massövervakning</span>

Massövervakning är ett komplicerat försök att övervaka "beteende, många aktiviteter eller information" hos en hel (eller en stor del av en) befolkning.[^1] Det hänvisar ofta till statliga program, t.ex. de [som Edward Snowden avslöjade 2013](https://en.wikipedia.org/wiki/Global_surveillance_disclosures_(2013%E2%80%93present)). Det kan dock också utföras av företag, antingen på uppdrag av myndigheter eller på eget initiativ.

!!! sammanfattning av "Atlas of Surveillance"

    Om du vill veta mer om övervakningsmetoder och hur de tillämpas i din stad kan du också ta en titt på [Atlas of Surveillance] (https://atlasofsurveillance.org/) från [Electronic Frontier Foundation] (https://www.eff.org/).
    
    I Frankrike kan du ta en titt på [Technolopolices webbplats](https://technopolice.fr/villes/) som upprätthålls av den ideella föreningen La Quadrature du Net.

Regeringar rättfärdigar ofta massövervakningsprogram som nödvändiga medel för att bekämpa terrorism och förebygga brottslighet. Men kränker de mänskliga rättigheterna, är det oftast används för att oproportionerligt rikta minoritetsgrupper och politiska dissidenter, bland annat.

!!! citat "ACLU: [*Det är en viktig fråga för den personliga integriteten: Massövervakning är inte vägen framåt*](https://www.aclu.org/news/national-security/the-privacy-lesson-of-9-11-mass-surveillance-is-not-the-way-forward)"

    Med anledning av [Edward Snowdens avslöjanden om regeringsprogram som [PRISM](https://en.wikipedia.org/wiki/PRISM) och [Upstream](https://en.wikipedia.org/wiki/Upstream_collection)] erkände underrättelsetjänstemännen också att NSA i åratal i hemlighet hade samlat in uppgifter om praktiskt taget alla amerikaners telefonsamtal - vem som ringer till vem, när samtalen görs och hur länge de varar. Den här typen av information kan, när den samlas in av NSA dag efter dag, avslöja otroligt känsliga detaljer om människors liv och umgänge, t. ex. om de har ringt till en pastor, en abortvårdare, en missbruksrådgivare eller en självmordshotline.

Trots den ökande massövervakningen i USA har regeringen konstaterat att massövervakningsprogram som avsnitt 215 har haft "litet unikt värde" när det gäller att stoppa faktiska brott eller terroristplaner, och att insatserna i stort sett har varit en kopia av FBI:s egna riktade övervakningsprogram.[^2]

På nätet kan du spåras på olika sätt:

- Din IP adress
- Webbläsarcookies
- Uppgifter som du skickar till webbplatser
- Fingeravtryck från din webbläsare eller enhet
- Betalningsmetod korrelation

\[Denna lista är inte uttömmande].

Om du är orolig för massövervakningsprogram kan du använda strategier som att dela upp din identitet på nätet, smälta in bland andra användare eller, när det är möjligt, helt enkelt undvika att lämna ut identifieringsuppgifter.

<span class="pg-brown">:material-account-cash: Övervakningskapitalism</span>

> Övervakningskapitalism är ett ekonomiskt system som är centrerat kring insamling och kommersialisering av personuppgifter i syfte att skapa vinst.[^3]

För många människor är spårning och övervakning av privata företag ett växande problem. Genomgripande annonsnätverk, som de som drivs av Google och Facebook, spänner över internet långt bortom bara de webbplatser de kontrollerar och spårar dina handlingar längs vägen. Genom att använda verktyg som innehållsblockerare för att begränsa nätverksförfrågningar till deras servrar och läsa sekretesspolicyn för de tjänster du använder kan du undvika många grundläggande motståndare (även om det inte helt kan förhindra spårning).[^4]

Dessutom kan även företag utanför *AdTech* eller spårningsbranschen dela din information med [datamäklare](https://en.wikipedia.org/wiki/Information_broker) (t.ex. Cambridge Analytica, Experian eller Datalogix) eller andra parter. Du kan inte automatiskt anta att dina data är säkra bara för att den tjänst du använder inte faller inom den typiska AdTech- eller spårningsaffärsmodellen. Det starkaste skyddet mot företags datainsamling är att kryptera eller dölja dina data när det är möjligt, vilket gör det svårt för olika leverantörer att korrelera data med varandra och bygga en profil på dig.

## Begränsning av offentlig information

<span class="pg-green">:material-account-search: Offentlig exponering</span>

Det bästa sättet att hålla dina uppgifter hemliga är att helt enkelt inte offentliggöra dem från början. Att ta bort oönskad information du hittar om dig själv online är ett av de bästa första stegen du kan ta för att återfå din integritet.

- [Se vår guide om radering av konto :material-arrow-right-drop-circle:](account-deletion.md)

På webbplatser där du delar med dig av information är det mycket viktigt att du kontrollerar sekretessinställningarna för ditt konto för att begränsa hur mycket informationen sprids. Aktivera till exempel "privat läge" på dina konton om du får alternativet: Detta säkerställer att ditt konto inte indexeras av sökmotorer och att det inte kan visas utan ditt tillstånd.

Om du redan har skickat in din riktiga information till webbplatser som inte borde ha den, kan du överväga att använda en taktik för desinformation, som att skicka in fiktiv information om din identitet på nätet. Detta gör att din riktiga information inte kan särskiljas från den falska informationen.

## Undvik censur

<span class="pg-blue-gray">:material-close-outline: Censur</span>

Censur på nätet kan utföras (i varierande grad) av aktörer som totalitära regeringar, nätverksadministratörer och tjänsteleverantörer. Dessa försök att kontrollera kommunikation och begränsa tillgången till information kommer alltid att vara oförenliga med den mänskliga rätten till yttrandefrihet.[^5]

Censur på företagsplattformar blir allt vanligare, eftersom plattformar som Twitter och Facebook ger efter för allmänhetens efterfrågan, marknadstryck och påtryckningar från myndigheter. Statliga påtryckningar kan vara dolda förfrågningar till företag, till exempel när Vita huset [begär att en provocerande YouTube-video ska tas bort](https://www.nytimes.com/2012/09/17/technology/on-the-web-a-fine-line-on-free-speech-across-globe.html), eller öppna förfrågningar, till exempel när den kinesiska regeringen kräver att företag ska följa en strikt censurregim.

Människor som oroar sig för hotet om censur kan använda teknik som [Tor](../advanced/tor-overview.md) för att kringgå den och stödja censurresistenta kommunikationsplattformar som [Matrix](../real-time-communication.md#element), som inte har någon centraliserad kontoinspektion som kan stänga konton godtyckligt.

!!! tips

    Även om det kan vara lätt att undvika censur, kan det vara mycket problematiskt att dölja det faktum att du gör det.
    
    Du bör överväga vilka aspekter av nätverket din motståndare kan observera, och om du har trovärdigt förnekande för dina handlingar. Om du till exempel använder [encrypted DNS](../advanced/dns-overview.md#what-is-encrypted-dns) kan det hjälpa dig att kringgå rudimentära DNS-baserade censursystem, men det kan inte dölja vad du besöker för din internetleverantör. En VPN eller Tor kan hjälpa till att dölja vad du besöker för nätverksadministratörer, men kan inte dölja att du använder nätverken överhuvudtaget. Pluggable transports (t.ex. Obfs4proxy, Meek eller Shadowsocks) kan hjälpa dig att undvika brandväggar som blockerar vanliga VPN-protokoll eller Tor, men dina försök att kringgå dem kan fortfarande upptäckas med metoder som probing eller [deep packet inspection] (https://en.wikipedia.org/wiki/Deep_packet_inspection).

Du måste alltid överväga riskerna med att försöka kringgå censur, de potentiella konsekvenserna och hur sofistikerad din motståndare kan vara. Du bör vara försiktig när du väljer programvara och ha en backup-plan om du skulle bli upptäckt.

[^1]: Wikipedia: [*Massövervakning*](https://en.wikipedia.org/wiki/Mass_surveillance) och [*Övervakning*](https://en.wikipedia.org/wiki/Surveillance).
[^2]: Usa: s tillsynsnämnd för integritet och medborgerliga fri- och rättigheter: [*Rapport om telefonregistreringsprogrammet som genomförts enligt avsnitt 215*](https://documents.pclob.gov/prod/Documents/OversightReport/ec542143-1079-424a-84b3-acc354698560/215-Report_on_the_Telephone_Records_Program.pdf)
[^3]: Wikipedia: [*Övervakningskapitalism*](https://en.wikipedia.org/wiki/Surveillance_capitalism)
[^4]: "[Räkna badness](https://www.ranum.com/security/computer_security/editorials/dumb/)" (eller "lista alla de dåliga saker som vi vet om"), som många adblockers och antivirusprogram gör, misslyckas med att tillräckligt skydda dig från nya och okända hot eftersom de ännu inte har lagts till i filterlistan. Du bör också använda andra metoder för att minska risken.
[^5]: Förenta nationerna: [*Universella förklaringen om de mänskliga rättigheterna*](https://www.un.org/en/about-us/universal-declaration-of-human-rights).

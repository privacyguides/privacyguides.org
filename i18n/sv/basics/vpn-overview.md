---
title: VPN-översikt
icon: material/vpn
description: Virtual Private Networks shift risk away from your ISP to a third-party you trust. You should keep these things in mind.
---

Virtuella privata nätverk är ett sätt att förlänga slutet av ditt nätverk till en utgång någon annanstans i världen. En internetleverantör kan se flödet av internettrafik som kommer in i och ut ur din nätverksavslutningsenhet (dvs. modem).

Encryption protocols such as HTTPS are commonly used on the internet, so they may not be able to see exactly what you're posting or reading, but they can get an idea of the [domains you request](../advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns).

En VPN kan hjälpa dig eftersom den kan flytta förtroendet till en server någon annanstans i världen. ISP: n ser då bara att du är ansluten till en VPN och ingenting om den aktivitet som du skickar in i den.

## Ska jag använda en VPN?

**Ja**, om du inte redan använder Tor. En VPN gör två saker: den flyttar riskerna från din Internetleverantör till sig själv och döljer din IP för en tredjepartstjänst.

VPN-tjänster kan inte kryptera data utanför anslutningen mellan din enhet och VPN-servern. VPN-leverantörer kan se och ändra din trafik på samma sätt som din internetleverantör. Och det finns inget sätt att verifiera en VPN-leverantörs policy om "ingen loggning" på något sätt.

De döljer dock din faktiska IP-adress för en tredjepartstjänst, förutsatt att det inte finns några IP-läckor. De hjälper dig att smälta in bland andra och minskar IP-baserad spårning.

## När ska jag inte använda en VPN?

Att använda en VPN i fall där du använder din [kända identitet](common-threats.md#common-misconceptions) är sannolikt inte användbart.

Om du gör det kan det utlösa system för att upptäcka skräppost och bedrägerier, till exempel om du skulle logga in på din banks webbplats.

## Hur är det med kryptering?

Den kryptering som erbjuds av VPN-leverantörer sker mellan dina enheter och deras servrar. Det garanterar att den specifika länken är säker. Detta är ett steg upp från att använda okrypterade proxies där en motståndare i nätverket kan avlyssna kommunikationen mellan dina enheter och proxies och ändra den. Kryptering mellan dina appar eller webbläsare och tjänsteleverantörerna hanteras dock inte av denna kryptering.

För att det du gör på de webbplatser du besöker ska vara privat och säkert måste du använda HTTPS. Detta kommer att hålla dina lösenord, sessionstoken och frågor säkra från VPN-leverantören. Överväg att aktivera "HTTPS everywhere" i webbläsaren för att förhindra nedgraderingsattacker som [SSL Strip](https://www.blackhat.com/presentations/bh-dc-09/Marlinspike/BlackHat-DC-09-Marlinspike-Defeating-SSL.pdf).

## Ska jag använda krypterad DNS med en VPN?

Om inte din VPN-leverantör är värd för de krypterade DNS-servrarna finns **ingen**. Att använda DOH/DOT (eller någon annan form av krypterad DNS) med servrar från tredje part innebär helt enkelt att fler enheter måste lita på och gör **absolut ingenting** för att förbättra din integritet/säkerhet. Din VPN-leverantör kan fortfarande se vilka webbplatser du besöker baserat på IP-adresser och andra metoder. I stället för att bara lita på din VPN-leverantör litar du nu på både VPN-leverantören och DNSleverantören.

Ett vanligt skäl att rekommendera krypterad DNS är att det hjälper mot DNS-spoofing. Din webbläsare bör dock redan kontrollera om [TLS-certifikat](https://en.wikipedia.org/wiki/Transport_Layer_Security#Digital_certificates) med **HTTPS** och varna dig för det. Om du inte använder **HTTPS**kan en motståndare fortfarande ändra allt annat än dina DNS-frågor och slutresultatet blir inte mycket annorlunda.

Självfallet bör du **inte använda krypterad DNS med Tor**. Detta skulle leda alla dina DNS-förfrågningar genom en enda krets och göra det möjligt för den krypterade DNS-leverantören att avanonymisera dig.

## Ska jag använda Tor *och* en VPN?

Genom att använda en VPN med Tor skapar du i princip en permanent ingångsnod, ofta med en pengastig kopplad till den. Detta ger inga ytterligare fördelar för dig, samtidigt som angreppsytan för din anslutning ökar dramatiskt. Om du vill dölja din användning av Tor för din internetleverantör eller din regering har Tor en inbyggd lösning för detta: Tor bridges. [Läs mer om Tor bridges och varför det inte är nödvändigt att använda en VPN](../advanced/tor-overview.md).

## Vad händer om jag behöver anonymitet?

VPN-tjänster kan inte ge anonymitet. Din VPN-leverantör ser fortfarande din riktiga IP-adress och har ofta ett pengaspår som kan kopplas direkt till dig. Du kan inte förlita dig på att policyer för "ingen loggning" skyddar dina uppgifter. Använd istället [Tor](https://www.torproject.org/).

## Hur är det med VPN-leverantörer som tillhandahåller Tor-noder?

Använd inte den här funktionen. Poängen med att använda Tor är att du inte litar på din VPN-leverantör. För närvarande stöder Tor endast [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) -protokollet. [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (används i [WebRTC](https://en.wikipedia.org/wiki/WebRTC) för röst- och videodelning, det nya [HTTP3/QUIC](https://en.wikipedia.org/wiki/HTTP/3) -protokollet etc.), [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) och andra paket kommer att tappas. För att kompensera för detta dirigerar VPN-leverantörer vanligtvis alla paket som inte är TCP-paket genom sin VPN-server (ditt första hopp). Detta är fallet med [ProtonVPN](https://protonvpn.com/support/tor-vpn/). När du använder denna Tor-över-VPN-inställning har du inte heller kontroll över andra viktiga Tor-funktioner, t.ex. [Isolated Destination Address](https://www.whonix.org/wiki/Stream_Isolation) (använder en annan Tor-krets för varje domän du besöker).

Funktionen bör ses som ett bekvämt sätt att komma åt Tor-nätverket, inte att vara anonym. För riktig anonymitet ska du använda Tor Browser, TorSocks eller en Tor-gateway.

## När är VPN-tjänster användbara?

En VPN kan fortfarande vara användbar för dig i en rad olika situationer, till exempel:

1. Om du döljer din trafik från **kan du bara** din Internetleverantör.
1. Dölja dina nedladdningar (t. ex. torrents) för din internetleverantör och organisationer som bekämpar piratkopiering.
1. Dölja din IP-adress från webbplatser och tjänster från tredje part och förhindra IP-baserad spårning.

I sådana situationer, eller om du har en annan övertygande anledning, är de VPN-leverantörer som vi listat ovan de som vi anser vara mest pålitliga. Att använda en VPN-leverantör innebär dock fortfarande att du *litar på* leverantören. I nästan alla andra situationer bör du använda ett säkert**-by-design** verktyg som Tor.

## Källor och vidare läsning

1. [VPN - en mycket osäker berättelse](https://schub.io/blog/2019/04/08/very-precarious-narrative.html) av Dennis Schubert
1. [Översikt över Tor-nätverket](../advanced/tor-overview.md)
1. [IVPN sekretessguider](https://www.ivpn.net/privacy-guides)
1. ["Behöver jag en VPN?"](https://www.doineedavpn.com), ett verktyg som utvecklats av IVPN för att utmana aggressiv VPN-marknadsföring genom att hjälpa enskilda personer att avgöra om en VPN är rätt för dem.

## Relevant information

- [Problemet med VPN- och integritetsgranskningswebbplatser](https://blog.privacyguides.org/2019/11/20/the-trouble-with-vpn-and-privacy-review-sites/)
- [Undersökning av gratis VPN-app](https://www.top10vpn.com/free-vpn-app-investigation/)
- [Dolda VPN-ägare avslöjas: 101 VPN-produkter som drivs av endast 23 företag](https://vpnpro.com/blog/hidden-vpn-owners-unveiled-97-vpns-23-companies/)
- [Det här kinesiska företaget ligger i hemlighet bakom 24 populära appar som kräver farliga behörigheter](https://vpnpro.com/blog/chinese-company-secretly-behind-popular-apps-seeking-dangerous-permissions/)

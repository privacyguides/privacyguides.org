---
title: "Veel voorkomende misvattingen"
icon: 'material/robot-confused'
---

## "Open source software is altijd veilig" of "Private software is veiliger"

Deze mythes komen voort uit een aantal vooroordelen, maar of de broncode beschikbaar is en hoe software in licentie wordt gegeven, heeft op geen enkele manier invloed op de beveiliging ervan. ==Open-source software heeft de *potentieel* om veiliger te zijn dan propriëtaire software, maar er is absoluut geen garantie dat dit het geval is.== Wanneer je software evalueert, moet je op individuele basis naar de reputatie en beveiliging van elke tool kijken.

Open-source software *kan* worden gecontroleerd door derden, en is vaak transparanter over mogelijke kwetsbaarheden dan propriëtaire tegenhangers. Ze kunnen ook flexibeler zijn, zodat je in de code kunt duiken en alle verdachte functionaliteit kunt uitschakelen die je zelf vindt. Echter, *tenzij je dit zelf doet*, is er geen garantie dat code ooit is geëvalueerd, vooral bij kleinere softwareprojecten. Het open ontwikkelingsproces is soms ook misbruikt om zelfs in grote projecten nieuwe kwetsbaarheden te introduceren.[^1]

Aan de andere kant is propriëtaire software minder transparant, maar dat betekent niet dat het niet veilig is. Grote propriëtaire softwareprojecten kunnen intern en door derden worden gecontroleerd, en onafhankelijke veiligheidsonderzoekers kunnen nog steeds kwetsbaarheden vinden met technieken als reverse engineering.

Om bevooroordeelde beslissingen te vermijden, is het *van vitaal belang* dat je de privacy- en veiligheidsnormen evalueert van de software die je gebruikt.

## "Verschuiven van vertrouwen kan de privacy vergroten"

We hebben het vaak over "verschuivend vertrouwen" bij het bespreken van oplossingen zoals VPN's (die het vertrouwen dat je in jouw ISP stelt verschuiven naar de VPN-aanbieder). Hoewel dit je surf gedrag beschermt tegen uw ISP *specifiek*, heeft de VPN provider die je kiest nog steeds toegang tot jouw surf gedrag: jouw gegevens zijn niet volledig beveiligd tegen alle partijen. Dit betekent dat:

1. Je moet voorzichtig zijn bij het kiezen van een provider om je vertrouwen naar toe te verschuiven.
2. Je zou nog steeds andere technieken moeten gebruiken, zoals E2EE, om je gegevens volledig te beschermen. Alleen al het wantrouwen van een provider om een andere te vertrouwen, staat niet gelijk aan het beveiligen van je gegevens.

## Privacy-gerichte oplossingen zijn van nature betrouwbaar

Als je je zich uitsluitend richt op het privacybeleid en de marketing van een tool of provider, kunt je je blindstaren op de zwakke punten ervan. Wanneer je op zoek bent naar een meer private oplossing, moet je bepalen wat het onderliggende probleem is en technische oplossingen voor dat probleem vinden. Je kunt bijvoorbeeld Google Drive vermijden, dat Google toegang geeft tot al Jouw gegevens. Het onderliggende probleem is in dit geval een gebrek aan end-to-end encryptie, dus je moet ervoor zorgen dat de provider waar je naar overstapt daadwerkelijk end-to-end encryptie implementeert of een tool (zoals [Cryptomator](../encryption.md#cryptomator-cloud)) gebruiken die end-to-end encryptie biedt op elke cloud provider. Overstappen naar een "privacygerichte" provider (die geen end-to-end encryptie implementeert) lost je probleem niet op: het verschuift alleen het vertrouwen van Google naar die provider.

Het privacybeleid en de zakelijke praktijken van de aanbieders die je kiest, zijn zeer belangrijk. Maar moeten toch worden beschouwd als minder belangrijk dan technische garanties van jouw privacy: je moet vertrouwen niet overdragen naar een andere provider wanneer het vertrouwen in een provider helemaal geen vereiste is.

## "Ingewikkeld is beter"

We zien vaak dat mensen overdreven ingewikkelde dreigingsmodellen voor privacybedreigingen beschrijven. Vaak omvatten deze oplossingen problemen zoals veel verschillende e-mailaccounts of ingewikkelde opstellingen met veel bewegende delen en voorwaarden. De antwoorden zijn meestal antwoorden op "Wat is de beste manier om *X* te doen?"

Het vinden van de "beste" oplossing voor jezelf betekent niet noodzakelijk dat je op zoek bent naar een onfeilbare oplossing met tientallen voorwaarden - deze oplossingen zijn vaak moeilijk om realistisch mee te werken. Zoals we eerder hebben besproken, gaat veiligheid vaak ten koste van gemak. Hieronder geven we enkele tips:

1. ==Acties moeten een bepaald doel dienen==, denk na over hoe je met zo weinig mogelijk acties kunt doen wat je wilt.
2. ==Verwijder menselijke faalpunten:== We maken fouten, worden moe, en vergeten dingen. Om de veiligheid te behouden, moet je voorkomen dat je vertrouwt op handmatige acties en processen die je moet onthouden.
3. ==Gebruik het juiste niveau van bescherming voor wat je van plan bent.== Wij zien vaak aanbevelingen van zogenaamde politie, en legerbestendige oplossingen. Deze vereisen vaak specialistische kennis en zijn over het algemeen niet wat de mensen willen. Het heeft geen zin een ingewikkeld dreigingsmodel voor anonimiteit op te stellen als je gemakkelijk kunt worden gedeanonimiseerd door een eenvoudige vergissing.

Dus, hoe zou dit eruit zien?

Een van de duidelijkste dreigingsmodellen is een model waarbij mensen *weten wie je bent* en een model waarbij ze dat niet weten. Er zullen altijd situaties zijn waarin je je wettelijke naam moet opgeven en er zijn situaties waarin je dat niet hoeft te doen.

1. **Bekende identiteit** - Een bekende identiteit wordt gebruikt voor zaken waarbij je jouw naam moet opgeven. Er zijn veel juridische documenten en contracten waar een wettelijke identiteit vereist is. Dit kan variëren van het openen van een bankrekening, het ondertekenen van een huurovereenkomst, het verkrijgen van een paspoort, douaneaangiften bij het importeren van spullen, of op andere manieren omgaan met de overheid. Deze dingen zullen meestal leiden tot referenties zoals creditcards, kredietwaardigheidscontroles, rekeningnummers en mogelijk fysieke adressen.

    We raden niet aan om een VPN of Tor voor een van deze dingen te gebruiken, omdat je identiteit al op andere manieren bekend is.

    !!! tip
   
        Wanneer je online winkelt, kan het gebruik van een [pakketkluis](https://en.wikipedia.org/wiki/Parcel_locker) helpen om jouw fysieke adres privé te houden.

2. **Onbekende identiteit** - Een onbekende identiteit kan een stabiel pseudoniem zijn dat je regelmatig gebruikt. Het is niet anoniem omdat het niet verandert. Als je deel uitmaakt van een online gemeenschap, wilt je misschien een identiteit behouden dat anderen kennen. Dit pseudoniem is niet anoniem omdat - indien lang genoeg gevolgd - details over de eigenaar verdere informatie kunnen onthullen, zoals de manier waarop hij of zij schrijft, algemene kennis over interessante onderwerpen, enz.

    Je kunt hiervoor eventueel een VPN gebruiken om jouw IP-adres te maskeren. Financiële transacties zijn moeilijker te maskeren: je kunt hier overwegen anonieme crypto valuta te gebruiken, zoals [Monero](https://www.getmonero.org/). Het gebruik van altcoin-shifting kan ook helpen om te verbergen waar jouw valuta vandaan komt. Doorgaans vereisen exchanges dat KYC (know your customer/ ken jouw klant) wordt ingevuld voordat zij u toestaan fiat valuta zoals euro's en dollars om te wisselen in een of andere crypto valuta. Lokale meet-ups kunnen ook een oplossing zijn; deze zijn echter vaak duurder en vereisen soms ook KYC.

3. **Anonieme identiteit** - zelfs met ervaring, anonieme identiteiten zijn moeilijk te behouden voor lange perioden. Deze identiteiten horen een korte levensduur te hebben, en dienen regelmatig gerouleerd te worden.

    Het gebruik van Tor kan hierbij helpen. Ook moet worden opgemerkt dat een grotere anonimiteit mogelijk is door asynchrone communicatie: Real-time communicatie is kwetsbaar voor analyse van typpatronen (d.w.z. meer dan een alinea tekst, verspreid op een forum, via e-mail, enz.)

[^1]: Een opmerkelijk voorbeeld hiervan is het incident van [2021, waarbij onderzoekers van de Universiteit van Minnesota drie kwetsbaarheden in het Linux-kernelontwikkelingsproject](https://cse.umn.edu/cs/linux-incident)introduceerden.

---
title: "Het aanmaken van accounts"
icon: 'material/account-plus'
---

Vaak melden mensen zich aan voor diensten zonder na te denken. Misschien is het een streamingdienst zodat je die nieuwe show kunt bekijken waar iedereen het over heeft, of een account waarmee je korting krijgt op uw favoriete fastfood zaak. Wat het geval ook is, je moet nu en later rekening houden met de implicaties voor jouw gegevens.

Aan elke nieuwe dienst die je gebruikt, zijn risico's verbonden. Datalekken; onthulling van klanteninformatie aan derden; malafide werknemers die toegang krijgen tot gegevens; het zijn allemaal mogelijkheden die moeten worden overwogen wanneer je jouw informatie verstrekt. Je moet er zeker van zijn dat je de service kunt vertrouwen, daarom raden we niet aan om waardevolle gegevens op te slaan over iets anders dan de meest volwassen en stressgeteste producten. Dat betekent meestal diensten die end-to-end encryptie leveren en een cryptografische audit hebben ondergaan. Een audit vergroot de zekerheid dat het product is ontworpen zonder opvallende beveiligingsproblemen die zijn veroorzaakt door een onervaren ontwikkelaar.

Bij sommige diensten kan het ook moeilijk zijn om de accounts te verwijderen. Soms kan [gegevens overschrijven](account-deletion.md#overwriting-account-information) die aan een account zijn gekoppeld, maar in andere gevallen bewaart de dienst een hele geschiedenis van wijzigingen in de account.

## Servicevoorwaarden en Privacybeleid

De ToS zijn de regels waarmee je akkoord gaat wanneer je de dienst gebruikt. Bij grotere diensten worden deze regels vaak afgedwongen door geautomatiseerde systemen. Soms kunnen deze geautomatiseerde systemen fouten maken. Je kunt bijvoorbeeld bij sommige diensten worden verbannen of uitgesloten van uw account omdat je een VPN- of VOIP-nummer gebruikt. Een beroep doen op een dergelijke verbanning is vaak moeilijk en omvat ook een geautomatiseerd proces, wat niet altijd succesvol is. Dit is een van de redenen waarom wij bijvoorbeeld niet aanraden Gmail als e-mail te gebruiken. E-mail is cruciaal voor de toegang tot andere diensten waarvoor je zich misschien hebt aangemeld.

Het privacybeleid is hoe de service zegt dat ze uw gegevens zullen gebruiken en het is de moeite waard om te lezen, zodat je begrijpt hoe jouw gegevens zullen worden gebruikt. Een bedrijf of organisatie is mogelijk niet wettelijk verplicht om alles wat in het beleid staat te volgen (het hangt af van de jurisdictie). We raden je aan om een idee te hebben van wat je lokale wetten zijn en wat ze een provider toestaan om te verzamelen.

Wij raden je aan te zoeken naar bepaalde termen zoals "gegevensverzameling", "gegevensanalyse", "cookies", "advertenties" of "diensten van derden". Soms kunt je je afmelden voor het verzamelen van gegevens of voor het delen van jouw gegevens, maar het is het beste om een dienst te kiezen die uw privacy vanaf het begin respecteert.

Vergeet niet dat je ook jouw vertrouwen stelt in het bedrijf of de organisatie en dat zij hun eigen privacybeleid zullen naleven.

## Authenticatie methodes

Er zijn meestal meerdere manieren om een account aan te maken, elk met hun eigen voor- en nadelen.

### E-mailadres en wachtwoord

De meest gebruikelijke manier om een nieuwe account aan te maken is met een e-mailadres en wachtwoord. Wanneer je deze methode gebruikt, moet je een wachtwoord manager gebruiken en de best practices [volgen](passwords-overview.md) met betrekking tot wachtwoorden.

!!! tip

    Je kunt jouw wachtwoord manager ook gebruiken om andere verificatiemethoden te organiseren! Voeg gewoon het nieuwe item toe en vul de juiste velden in, u kunt notities toevoegen voor zaken als beveiligingsvragen of een back-up sleutel.

Je bent verantwoordelijk voor het beheer van jouw inloggegevens. Voor extra beveiliging kunt je  [MFA](multi-factor-authentication.md) instellen op jouw accounts.

[Lijst van aanbevolen wachtwoordbeheerders](../passwords.md ""){.md-button}

#### E-mail aliassen

Als je jouw echte e-mailadres niet aan een dienst wilt geven, kunt je een alias gebruiken. We hebben deze in meer detail beschreven op onze pagina met aanbevelingen voor e-maildiensten. Met alias diensten kunt je nieuwe e-mailadressen aanmaken die alle e-mails doorsturen naar jouw hoofdadres. Dit kan helpen bij het voorkomen van tracking tussen services en je helpen bij het beheren van de marketing-e-mails die soms bij het aanmeldingsproces worden geleverd. Die kunnen automatisch worden gefilterd op basis van de alias waarnaar ze worden gestuurd.

Als een dienst wordt gehackt, kunt je phishing- of spam-e-mails ontvangen op het adres waarmee je je hebt aangemeld. Het gebruik van unieke aliassen voor elke service kan helpen bij het identificeren van precies welke service is gehackt.

[Aanbevolen diensten voor e-mailaliasing](../email.md#email-aliasing-services ""){.md-button}

### Eenmalige aanmelding

!!! note

    We bespreken Single sign-on voor persoonlijk gebruik, niet voor zakelijke gebruikers.

Single sign-on (SSO) is een authenticatiemethode waarmee je zich kunt registreren voor een dienst zonder veel informatie te delen, als die er al is. Wanneer je iets ziet in de trant van "Aanmelden met *providernaam*" op een registratieformulier, dan is dat SSO.

Wanneer je kiest voor eenmalige aanmelding op een website, wordt jouw aanmeldingspagina van de SSO-provider gevraagd en wordt jouw account vervolgens verbonden. Jouw wachtwoord wordt niet gedeeld, maar sommige basisinformatie wel (je kunt deze bekijken tijdens het inlogverzoek). Dit proces is nodig elke keer dat je wilt inloggen op hetzelfde account.

De belangrijkste voordelen zijn:

- **Beveiliging**: geen risico om betrokken te raken bij een [datalek](https://en.wikipedia.org/wiki/Data_breach) omdat de website uw inlog gegevens niet opslaat.
- **Gebruiksgemak**: meerdere accounts worden beheerd door één enkele login.

Maar er zijn ook nadelen:

- **Privacy**: een SSO-provider weet welke diensten je gebruikt.
- **Centralisatie**: als uw SSO-account wordt gecompromitteerd of als je niet kunt inloggen, worden alle andere accounts die ermee verbonden zijn, getroffen.

SSO kan vooral nuttig zijn in situaties waarin je zou kunnen profiteren van een diepere integratie tussen services. Een van die diensten kan bijvoorbeeld SSO aanbieden voor de andere. Onze aanbeveling is om SSO te beperken tot alleen waar je het nodig hebt en de hoofdaccount te beschermen met [MFA](multi-factor-authentication.md).

Alle diensten die SSO gebruiken zijn even veilig als jouw SSO-account. Als je bijvoorbeeld een account wilt beveiligen met een hardwaresleutel, maar die dienst ondersteunt geen hardwaresleutels, dan kunt je jouw SSO-account beveiligen met een hardwaresleutel en nu hebt je in wezen hardware-MFA op al jouw accounts. Het is echter vermeldenswaard dat zwakke authenticatie op jouw SSO-account betekent dat elk account dat aan die login is gekoppeld, ook zwak zal zijn.

### Telefoonnummer

We raden je aan services te vermijden waarvoor een telefoonnummer nodig is om je aan te melden. Een telefoonnummer kan je identificeren in meerdere services en afhankelijk van overeenkomsten voor het delen van gegevens zal dit jouw gemakkelijker te volgen maken, vooral als een van die services wordt geschonden, omdat het telefoonnummer vaak **niet** versleuteld is.

Vermijd het geven van jouw echte telefoonnummer als je kunt. Sommige diensten staan het gebruik van VOIP-nummers toe, maar deze alarmeren vaak fraudedetectiesystemen, waardoor een rekening wordt geblokkeerd.

In veel gevallen moet je een nummer opgeven waarvan je smsjes of telefoontjes kunt ontvangen, vooral wanneer je internationaal winkelt, voor het geval er een probleem is met jouw bestelling bij de grenscontrole. Het is gebruikelijk dat services je nummer gebruiken als verificatiemethode; laat je niet buitensluiten van een belangrijk account omdat je slim wilt zijn en een nepnummer wilt geven!

### Gebruikersnaam en wachtwoord

Bij sommige diensten kunt je je zonder e-mailadres registreren en hoeft je alleen een gebruikersnaam en wachtwoord in te stellen. Deze diensten kunnen meer anonimiteit bieden in combinatie met een VPN of Tor. Houd er rekening mee dat er voor deze accounts hoogstwaarschijnlijk **geen manier is om jouw account** te herstellen als je jouw gebruikersnaam of wachtwoord vergeet.

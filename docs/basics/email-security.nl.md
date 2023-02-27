---
title: Email beveiliging
icon: material/email
---

E-mail is standaard een onveilige vorm van communicatie. Je kunt je e-mailbeveiliging verbeteren met tools als OpenPGP, die end-to-end encryptie toevoegen aan je berichten, maar OpenPGP heeft nog steeds een aantal nadelen in vergelijking met encryptie in andere berichtentoepassingen, en sommige e-mailgegevens kunnen nooit inherent worden versleuteld als gevolg van de manier waarop e-mail is ontworpen.

Als gevolg hiervan wordt e-mail het beste gebruikt voor het ontvangen van transactionele e-mails (zoals meldingen, verificatie-e-mails, wachtwoordresets, enz.) van de services waarvoor je je online aanmeldt, niet voor het communiceren met anderen.

## Overzicht van e-mailversleuteling

De standaardmanier om E2EE toe te voegen aan e-mails tussen verschillende e-mailproviders is door OpenPGP te gebruiken. Er zijn verschillende implementaties van de OpenPGP-standaard, waarvan [GnuPG](https://en.wikipedia.org/wiki/GNU_Privacy_Guard) en [OpenPGP.js](https://openpgpjs.org)de meest voorkomende zijn.

Er is een andere standaard die populair is bij bedrijven, [S/MIME](https://en.wikipedia.org/wiki/S/MIME), maar deze vereist een certificaat dat is afgegeven door een [Certificate Authority](https://en.wikipedia.org/wiki/Certificate_authority) (niet alle instanties geven S/MIME-certificaten af). Het heeft ondersteuning in [Google Workplace](https://support.google.com/a/topic/9061730?hl=en&ref_topic=9061731) en [Outlook for Web of Exchange Server 2016, 2019](https://support.office.com/en-us/article/encrypt-messages-by-using-s-mime-in-outlook-on-the-web-878c79fc-7088-4b39-966f-14512658f480).

Zelfs als je OpenPGP gebruikt, biedt het geen ondersteuning voor [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy), wat betekent dat als jouw privésleutel of die van de ontvanger ooit wordt gestolen, alle eerdere berichten die ermee zijn versleuteld, openbaar worden. Daarom bevelen wij [instant messengers](../real-time-communication.md) aan, die indien mogelijk forward secrecy implementeren in plaats van e-mail voor communicatie van persoon tot persoon.

### Welke e-mailclients ondersteunen E2EE?

E-mailproviders die je in staat stellen standaard toegangsprotocollen zoals IMAP en SMTP te gebruiken, kunnen worden gebruikt met elk van de [e-mailclients die wij aanbevelen](../email-clients.md). Afhankelijk van de authenticatiemethode kan dit leiden tot een verminderde veiligheid indien de provider of de e-mailclient OATH of een bridge-toepassing niet ondersteunt, aangezien [multifactor authenticatie](/basics/multi-factor-authentication/) niet mogelijk is met gewone wachtwoordauthenticatie.

### Hoe bescherm ik mijn private sleutels?

Een smartcard (zoals een [Yubikey](https://support.yubico.com/hc/en-us/articles/360013790259-Using-Your-YubiKey-with-OpenPGP) of [Nitrokey](https://www.nitrokey.com)) werkt door een geëncrypteerd e-mailbericht te ontvangen van een apparaat (telefoon, tablet, computer, enz.) waarop een e-mail/webmailclient draait. Het bericht wordt vervolgens door de smartcard ontsleuteld en de ontsleutelde inhoud wordt teruggestuurd naar het apparaat.

Het is gunstig dat de ontcijfering op de smartcard gebeurt om te voorkomen dat jouw privé-sleutel aan een gecompromitteerd apparaat wordt blootgesteld.

## Overzicht e-mailmetagegevens

E-mail metadata wordt opgeslagen in de [message header](https://en.wikipedia.org/wiki/Email#Message_header) van het e-mailbericht en omvat een aantal zichtbare headers die je wellicht hebt gezien, zoals: `Aan`, `Van`, `Cc`, `Datum`, `Onderwerp`. Veel e-mailclients en -providers hebben ook een aantal verborgen headers die informatie over jouw account kunnen onthullen.

Client-software kan metagegevens over e-mail gebruiken om aan te geven van wie een bericht afkomstig is en hoe laat het werd ontvangen. Servers kunnen het gebruiken om te bepalen waar een e-mailbericht naartoe moet worden gestuurd, naast [andere doeleinden](https://en.wikipedia.org/wiki/Email#Message_header) die niet altijd transparant zijn.

### Wie kan e-mailmetagegevens bekijken?

E-mail metadata wordt beschermd tegen externe waarnemers met [Opportunistic TLS](https://en.wikipedia.org/wiki/Opportunistic_TLS), maar kan nog steeds worden gezien door jouw e-mail client software (of webmail) en alle servers die het bericht van je doorsturen naar alle ontvangers, inclusief jouw e-mail provider. Soms maken e-mailservers ook gebruik van diensten van derden ter bescherming tegen spam, die over het algemeen ook toegang hebben tot jouw berichten.

### Waarom kan metadata niet E2EE zijn?

E-mail metadata is van cruciaal belang voor de meest elementaire functionaliteit van e-mail (waar het vandaan komt, en waar het naartoe moet). E2EE was oorspronkelijk niet in de e-mailprotocollen ingebouwd; in plaats daarvan was extra software zoals OpenPGP nodig. Omdat OpenPGP-berichten nog steeds met traditionele e-mailproviders moeten werken, kan het niet de metagegevens van e-mail versleutelen, alleen de inhoud van het bericht zelf. Dat betekent dat zelfs wanneer OpenPGP wordt gebruikt, externe waarnemers veel informatie over jouw berichten kunnen zien, zoals wie je e-mailt, de onderwerpregels, wanneer je e-mailt, enz.

---
title: "Real-Time Communicatie"
icon: material/chat-processing
---

Dit zijn onze aanbevelingen voor versleutelde real-time communicatie.

[Soorten communicatienetwerken :material-arrow-right-drop-circle:](./advanced/communication-network-types.md)

## Versleutelde Messengers

Deze boodschappers zijn geweldig voor het beveiligen van jouw gevoelige communicatie.

### Signal

!!! aanbeveling

    Signal logo](assets/img/messengers/signal.svg){ align=right }
    
    **Signal** is een mobiele app ontwikkeld door Signal Messenger LLC. De app biedt instant messaging en spraak- en videobellen.
    
    Alle communicatie is E2EE. Contactlijsten worden versleuteld met uw Signal PIN en de server heeft er geen toegang toe. Persoonlijke profielen worden ook versleuteld en alleen gedeeld met contacten waarmee je chat.
    
    [:octicons-home-16: Homepage](https://signal.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://signal.org/legal/#privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.signal.org/hc/en-us){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/signalapp){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://signal.org/donate/){ .card-link title=Bijdragen }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id874139669)
        - [:simple-android: Android](https://signal.org/android/apk/)
        - [:simple-windows11: Windows](https://signal.org/download/windows)
        - [:simple-apple: macOS](https://signal.org/download/macos)
        - [:simple-linux: Linux](https://signal.org/download/linux)

Signaal ondersteunt [privégroepen](https://signal.org/blog/signal-private-group-system/). De server heeft geen gegevens van je groepslidmaatschappen, groepstitels, groepsafbeeldingen of groepsattributen. Signaal heeft minimale metadata wanneer [Verzegelde Afzender](https://signal.org/blog/sealed-sender/) is ingeschakeld. Het afzenderadres is versleuteld samen met de inhoud van het bericht, en alleen het adres van de ontvanger is zichtbaar voor de server. Verzegelde afzender is alleen ingeschakeld voor mensen in uw contactenlijst, maar kan ingeschakeld zijn voor alle ontvangers met een verhoogd risico om spam te ontvangen. Signaal vereist jouw telefoonnummer als persoonlijk identificatiemiddel.

Het protocol was onafhankelijk [gecontroleerd](https://eprint.iacr.org/2016/1013.pdf) in 2016. De specificatie van het Signaal-protocol kan worden gevonden in hun [documentatie](https://signal.org/docs/).

We hebben nog enkele extra tips over het configureren en verharden van jouw signaalinstallatie:

[Signaalconfiguratie en Hardening :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/07/07/signal-configuration-and-hardening/)

### SimpleX Chat

!!! aanbeveling

    Simplex logo](assets/img/messengers/simplex.svg){ align=right }
    
    **SimpleX** Chat is een instant messenger die gedecentraliseerd is en niet afhankelijk is van unieke identifiers zoals telefoonnummers of gebruikersnamen. Berichten en bestanden die in privéruimten worden gedeeld (waarvoor een uitnodiging nodig is) zijn standaard E2EE, net als één-op-één spraak- en videogesprekken.
    
    [:octicons-home-16: Homepage](https://simplex.chat){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/simplex-chat/simplex-chat/blob/stable/PRIVACY.md){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/simplex-chat/simplex-chat/tree/stable/docs){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/simplex-chat){ .card-link title="Broncode" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=chat.simplex.app)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/simplex-chat/id1605771084)
        - [:simple-github: GitHub](https://github.com/simplex-chat/simplex-chat/releases)

SimpleX Chat [werd gecontroleerd](https://simplex.chat/blog/20221108-simplex-chat-v4.2-security-audit-new-website.html) door Trail Bits in oktober 2022.

Momenteel biedt SimpleX Chat alleen een client voor Android en iOS. Basisfuncties voor groepschatten, direct messaging, bewerken van berichten en markdown worden ondersteund. E2EE audio- en video-oproepen worden ook ondersteund.

Jouw gegevens kunnen worden geëxporteerd en geïmporteerd naar een ander apparaat, omdat er geen centrale servers zijn waar een back-up van wordt gemaakt.

### Briar

!!! aanbeveling

    Briar logo](assets/img/messengers/briar.svg){ align=right }
    
    **Briar** is een versleutelde instant messenger die [connects](https://briarproject.org/how-it-works/) gebruikt voor andere clients via het Tor Netwerk. Briar kan ook verbinding maken via Wi-Fi of Bluetooth wanneer hij in de buurt is. Briar's lokale mesh-modus kan nuttig zijn wanneer de beschikbaarheid van internet een probleem is.
    
    [:octicons-home-16: Homepage](https://briarproject.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://briarproject.org/privacy-policy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://code.briarproject.org/briar/briar/-/wikis/home){ .card-link title=Documentatie}
    [:octicons-code-16:](https://code.briarproject.org/briar/briar){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://briarproject.org/){ .card-link title="Donatiemogelijkheden staan onderaan de homepage" } }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.briarproject.briar.android)
        - [:simple-windows11: Windows](https://briarproject.org/download-briar-desktop/)
        - [:simple-linux: Linux](https://briarproject.org/download-briar-desktop/)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.briarproject.Briar)

Om een contact toe te voegen aan Briar, moet je eerst beide elkaar toevoegen. Je kunt `briar://` links ruilen of de QR-code van een contactpersoon scannen als deze dichtbij zijn.

De clientsoftware was onafhankelijk [gecontroleerd](https://briarproject.org/news/2017-beta-released-security-audit/), en het anonieme routing protocol maakt gebruik van het Tor netwerk dat ook is gecontroleerd.

Briar heeft een volledig [gepubliceerde specificatie](https://code.briarproject.org/briar/briar-spec).

Briar ondersteunt perfect forward secrecy door het gebruik van jet Bramble [Handshake](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BHP.md) en [Transport](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BTP.md) protocol.

## Aanvullende opties

!!! warning

    Deze boodschappers hebben geen Perfect [Forward Secrecy](https://en.wikipedia.org/wiki/Forward_secrecy) (PFS), en hoewel zij aan bepaalde gebruikscriteria voldoen die onze eerdere aanbevelingen niet kunnen vervullen, bevelen wij ze niet aan voor langdurige of gevoelige communicatie. Elke compromittering van sleutels tussen ontvangers van berichten zou de vertrouwelijkheid van **alle** eerdere communicaties aantasten.

### Element

!!! aanbeveling

    Element logo](assets/img/messengers/element.svg){ align=right }
    
    **Element** is de referentieclient voor het [Matrix](https://matrix.org/docs/guides/introduction) protocol, een [open standaard](https://matrix.org/docs/spec) voor veilige gedecentraliseerde real-time communicatie.
    
    Berichten en bestanden die in privéruimten worden gedeeld (waarvoor een uitnodiging nodig is) zijn standaard E2EE, net als één-op-één spraak- en videogesprekken.
    
    [:octicons-home-16: Homepage](https://element.io/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://element.io/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://element.io/help){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/vector-im){ .card-link title="Broncode" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=im.vector.app)
        - [:simple-appstore: App Store](https://apps.apple.com/app/vector/id1083446067)
        - [:simple-github: GitHub](https://github.com/vector-im/element-android/releases)
        - [:simple-windows11: Windows](https://element.io/get-started)
        - [:simple-apple: macOS](https://element.io/get-started)
        - [:simple-linux: Linux](https://element.io/get-started)
        - [:octicons-globe-16: Web](https://app.element.io)

Profielfoto's, reacties en bijnamen zijn niet versleuteld.

Groepsgesprekken voor spraak en video zijn [niet](https://github.com/vector-im/element-web/issues/12878) E2EE, en gebruiken Jitsi, maar dit zal naar verwachting veranderen met [Native Group VoIP Signalling](https://github.com/matrix-org/matrix-doc/pull/3401). Groepsgesprekken hebben [momenteel geen authenticatie](https://github.com/vector-im/element-web/issues/13074), wat betekent dat ook deelnemers van buiten de zaal aan de gesprekken kunnen deelnemen. Wij raden je aan deze functie niet te gebruiken voor privévergaderingen.

Het Matrix-protocol zelf [ondersteunt in theorie PFS](https://gitlab.matrix.org/matrix-org/olm/blob/master/docs/megolm.md#partial-forward-secrecy), maar dit wordt [momenteel niet ondersteund in Element](https://github.com/vector-im/element-web/issues/7101) omdat het sommige aspecten van de gebruikerservaring, zoals sleutelback-ups en gedeelde berichtgeschiedenis, hierdoor niet naar behoren functioneerd.

Het protocol is in 2016 onafhankelijk [gecontroleerd](https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last). De specificatie van het Matrix-protocol is te vinden in hun [documentatie](https://spec.matrix.org/latest/). De [Olm](https://matrix.org/docs/projects/other/olm) cryptografische ratel die door Matrix wordt gebruikt, is een implementatie van het [Double Ratchet-algoritme van Signal](https://signal.org/docs/specifications/doubleratchet/).

### Session

!!! aanbeveling

    Session logo](assets/img/messengers/session.svg){ align=right }
    
    **Session** is een gedecentraliseerde messenger met een focus op private, veilige en anonieme communicatie. Session biedt ondersteuning voor directe berichten, groepschats en spraakoproepen.
    
    Session maakt gebruik van het gedecentraliseerde [Oxen Service Node Network](https://oxen.io/) om berichten op te slaan en te routeren. Elk versleuteld bericht wordt door drie knooppunten in het Oxen Service Node Network geleid, waardoor het voor de knooppunten vrijwel onmogelijk wordt zinvolle informatie te verzamelen over degenen die het netwerk gebruiken.
    
    [:octicons-home-16: Homepage](https://getsession.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getsession.org/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://getsession.org/faq){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/oxen-io){ .card-link title="Broncode" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=network.loki.messenger)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1470168868)
        - [:simple-github: GitHub](https://github.com/oxen-io/session-android/releases)
        - [:simple-windows11: Windows](https://getsession.org/download)
        - [:simple-apple: macOS](https://getsession.org/download)
        - [:simple-linux: Linux](https://getsession.org/download)

Session maakt E2EE mogelijk in één-op-één chats of gesloten groepen met maximaal 100 leden. Open groepen hebben geen beperking wat het aantal leden betreft, maar zijn open van opzet.

Session ondersteunt [geen](https://getsession.org/blog/session-protocol-technical-information) perfect forward secrecy, waarbij een encryptiesysteem de sleutels die het gebruikt om informatie te versleutelen en te ontsleutelen, automatisch en frequent wijzigt, zodat, indien de laatste sleutel wordt gecompromitteerd, een kleiner deel van de gevoelige informatie wordt blootgelegd.

Oxen heeft een onafhankelijke audit aangevraagd voor Session in maart 2020. De audit [concludeerde](https://getsession.org/session-code-audit) in april van 2021: "Het algemene beveiligingsniveau van deze applicatie is goed en maakt het bruikbaar voor mensen die zich zorgen maken over privacy."

Session heeft een [whitepaper](https://arxiv.org/pdf/2002.04609.pdf) die de techniek van de app en het protocol beschrijft.

## Criteria

**Wij zijn niet verbonden aan de projecten die wij aanbevelen.** Naast [onze standaard criteria](about/criteria.md) hebben wij een duidelijke reeks eisen ontwikkeld om objectieve aanbevelingen te kunnen doen. Wij stellen voor dat je zich vertrouwd maakt met deze lijst voordat je een project kiest, en jouw eigen onderzoek uitvoert om er zeker van te zijn dat het de juiste keuze voor je is.

!!! example "Deze sectie is nieuw"

    We werken aan het vaststellen van gedefinieerde criteria voor elk deel van onze site, en dit kan onderhevig zijn aan verandering. Als je vragen hebt over onze criteria, stel ze dan [op ons forum](https://discuss.privacyguides.net/latest) en neem niet aan dat we iets niet in overweging hebben genomen bij het opstellen van onze aanbevelingen als het hier niet vermeld staat. Er zijn veel factoren die worden overwogen en besproken wanneer wij een project aanbevelen, en het documenteren van elke factor is een werk in uitvoering.

- Moet open-source clients hebben.
- Moet standaard E2EE gebruiken voor privé-berichten.
- Moet E2EE ondersteunen voor alle berichten.
- Moet onafhankelijk gecontroleerd zijn.

### Beste geval

Onze best-case criteria geven aan wat wij zouden willen zien van het perfecte project in deze categorie. Het is mogelijk dat onze aanbevelingen geen of niet alle functies bevatten, maar degene die dat wel doen kunnen hoger gerangschikt worden dan andere op deze pagina.

- Moet Perfect Forward Secrecy hebben.
- Moet open-source servers hebben.
- Moet gedecentraliseerd zijn, d.w.z. gefedereerd of P2P.
- Moet standaard E2EE gebruiken voor privé-berichten.
- Moet Linux, macOS, Windows, Android en iOS ondersteunen.

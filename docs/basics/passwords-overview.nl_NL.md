---
title: "Wachtwoord introductie"
icon: 'material/form-textbox-password'
---

Wachtwoorden zijn een essentieel onderdeel van ons dagelijkse digitale leven. We gebruiken ze om onze accounts, onze apparaten en onze geheimen te beschermen. Hoewel ze vaak het enige zijn tussen ons en een tegenstander die uit is op onze privégegevens, wordt er niet veel aandacht aan besteed, wat er vaak toe leidt dat mensen wachtwoorden gebruiken die gemakkelijk geraden of geforceerd kunnen worden.

## Beste praktijken

### Gebruik unieke wachtwoorden voor elke dienst

Stel je voor: je meldt je aan voor een account met dezelfde e-mail en hetzelfde wachtwoord op meerdere online diensten. Als een van die dienstverleners kwaadwillend is, of hun dienst heeft een datalek waardoor uw wachtwoord in een onversleuteld formaat wordt vrijgegeven, hoeft een kwaadwillende alleen maar die combinatie van e-mail en wachtwoord te proberen bij meerdere populaire diensten totdat hij iets vindt. Het maakt niet uit hoe sterk dat ene wachtwoord is, omdat ze het al hebben.

Dit heet [credential stuffing](https://en.wikipedia.org/wiki/Credential_stuffing), en het is een van de meest voorkomende manieren waarop jouw accounts kunnen worden gecompromitteerd door slechte actoren. Om dit te voorkomen, zorg ervoor dat je je wachtwoorden nooit hergebruikt.

### Gebruik willekeurig gegenereerde wachtwoorden

==je moet **nooit** vertrouwen op jezelf om met een goed wachtwoord te komen. = We raden aan om [willekeurig gegenereerde wachtwoorden](#passwords) of [diceware wachtwoord zinnen](#diceware-passphrases) te gebruiken met voldoende entropie om uw accounts en apparaten te beschermen.

Al onze [aanbevolen wachtwoordmanagers](../passwords.md) bevatten een ingebouwde wachtwoordgenerator die je kunt gebruiken.

### Roterende wachtwoorden

Wachtwoorden die je moet onthouden (zoals het hoofdwachtwoord van jouw wachtwoord manager) moet je niet te vaak veranderen, tenzij je reden hebt om aan te nemen dat ze gecompromitteerd zijn, omdat je door ze te vaak te veranderen het risico loopt ze te vergeten.

Als het gaat om wachtwoorden die je niet hoeft te onthouden (zoals wachtwoorden die zijn opgeslagen in jouw wachtwoordmanager), adviseren wij, als jouw [dreigingsmodel](threat-modeling.md) daarom vraagt, belangrijke accounts door te nemen (vooral accounts die geen multi-factor authenticatie gebruiken) en hun wachtwoord om de paar maanden te wijzigen, voor het geval ze zijn gecompromitteerd in een datalek dat nog niet openbaar is geworden. Bij de meeste wachtwoordbeheerders kunt u een vervaldatum voor uw wachtwoord instellen om dit gemakkelijker te beheren.

!!! Tip "Controleren op datalekken"

    Als je met jouw wachtwoord manager kunt controleren op gecompromitteerde wachtwoorden, doe dat dan en wijzig onmiddellijk alle wachtwoorden die bij een datalek bekend zijn geworden. Je kunt ook de [Have I Been Pwned's Latest Breaches feed](https://feeds.feedburner.com/HaveIBeenPwnedLatestBreaches) volgen met behulp van een [nieuwsaggregator](../news-aggregators.md).


## Sterke wachtwoorden maken

### Wachtwoorden

Veel diensten leggen bepaalde criteria op voor wachtwoorden, zoals een minimale of maximale lengte, en welke speciale tekens eventueel mogen worden gebruikt. Gebruik de ingebouwde wachtwoordgenerator van uw wachtwoord manager om wachtwoorden te maken die zo lang en complex zijn als de dienst toelaat, met hoofdletters en kleine letters, cijfers en speciale tekens.

Als je een wachtwoord nodig hebt dat je kunt onthouden, raden wij een [diceware wachtwoord zinnen](#diceware-passphrases) aan.

### Diceware wachtwoord zinnen

Diceware is een methode om wachtzinnen te maken die gemakkelijk te onthouden zijn, maar moeilijk te raden.

Diceware passphrases zijn een geweldige optie wanneer je jouw gegevens uit het hoofd moet leren of handmatig moet invoeren, zoals voor het hoofdwachtwoord van jouw wachtwoord manager of het coderingswachtwoord van jouw apparaat.

Een voorbeeld van een diceware wachtwoord zin is:  `zichtbaar snelheid hond terughoudend zeventien weergegeven potlood`.

Volg deze stappen om een diceware passphrase te genereren met echte dobbelstenen:

!!! Note

    Deze instructies gaan ervan uit dat je [EFF's large wordlist](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) gebruikt om de wachtwoord zin te genereren, waarvoor vijf dobbelsteenworpen per woord nodig zijn. Andere woordenlijsten kunnen meer of minder rollen per woord vereisen, en kunnen een ander aantal woorden nodig hebben om dezelfde entropie te bereiken.

1. Gooi vijf keer met een zeszijdige dobbelsteen en noteer het getal na elke worp.

2. Laten we bijvoorbeeld zeggen dat u `2-5-2-6-6`heeft gerold. Zoek in de grote woordenlijst van [EFF](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) naar het woord dat overeenkomt met `25266`.

3. U vindt het woord `gecodeerd`. Schrijf dat woord op.

4. Herhaal dit proces totdat uw wachtwoord zoveel woorden bevat als u nodig hebt, die u moet scheiden met een spatie.

!!! Warning "Belangrijk"

    Je moet **niet** opnieuw woorden rollen totdat je een combinatie van woorden krijgt die je aanspreekt. Het proces moet volledig willekeurig zijn.

Als je geen toegang hebt tot of liever geen echte dobbelstenen gebruikt, kunt je de ingebouwde wachtwoordgenerator van jouw wachtwoord manager gebruiken, omdat de meeste daarvan de optie hebben om naast gewone wachtwoorden ook diceware wachtwoord zinnen te genereren.

Wij adviseren het gebruik van [EFF's grote woordenlijst](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) om jouw diceware wachtwoord zinnen te genereren, omdat het exact dezelfde veiligheid biedt als de originele lijst, terwijl het woorden bevat die gemakkelijker te onthouden zijn. Er zijn ook andere woordenlijsten in verschillende talen, als u niet wilt dat uw wachtwoord in het Engels is.

??? Note "Uitleg van entropie en sterkte van diceware wachtwoord zinnen"

    Om aan te tonen hoe sterk diceware wachtwoord zin zijn, gebruiken we de eerder genoemde wachtwoord zin van zeven woorden (`kijkbaar snel terughoudend hond zeventien getoond potlood`) en [EFF's grote woordenlijst](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) als voorbeeld.
    
    Eén meting om de sterkte van een wachtwoord zin te bepalen is hoeveel entropie het heeft. De entropie per woord in een diceware wachtwoord zin wordt berekend als $\text{log}_2(\text{WordsInList})$ en de totale entropie van de wachtwoord zin wordt berekend als $\text{log}_2(\text{WordsInList}^\text{WordsInPhrase})$.
    
    Daarom resulteert elk woord in de bovengenoemde lijst in ~12,9 bits entropie ($\text{log}_2(7776)$), en een daarvan afgeleide wachtwoord zin van zeven woorden heeft ~90,47 bits entropie ($\text{log}_2(7776^7)$).
    
    De [EFF's large wordlist](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) bevat 7776 unieke woorden. Om het aantal mogelijke passphrases te berekenen, hoeven we alleen maar $\text{WordsInList}^\text{WordsInPhrase}$, of in ons geval, $7776^7$, uit te rekenen.
    
    Laten we dit alles in perspectief plaatsen: Een passphrase van zeven woorden met [EFF's grote woordenlijst] (https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) is één van ~1,719,070,799,748,422,500,000,000,000 mogelijke wachtwoord zinnen.
    
    Gemiddeld duurt het proberen van 50% van alle mogelijke combinaties om uw zin te raden. Met dat in gedachten, zelfs als uw tegenstander in staat is tot ~1.000.000.000.000 raden per seconde, zou het hem nog steeds ~27.255.689 jaar kosten om uw wachtwoord te raden. Zelfs als de volgende dingen waar zijn:

    - Je tegenstander weet dat je de diceware-methode hebt gebruikt.
    - Je tegenstander kent de specifieke woordenlijst die je gebruikt hebt.
    - Uw tegenstander weet hoeveel woorden uw wachtwoord bevat.

Kortom, diceware wachtzinnen zijn uw beste optie wanneer u iets nodig hebt dat zowel gemakkelijk te onthouden is *als* uitzonderlijk sterk.

## Wachtwoorden opslaan

### Wachtwoord managers

De beste manier om uw wachtwoorden op te slaan is met behulp van een wachtwoordmanager. Hiermee kunt u uw wachtwoorden opslaan in een bestand of in de cloud en ze beschermen met een enkel hoofdwachtwoord. Op die manier hoeft u maar één sterk wachtwoord te onthouden, waarmee u toegang krijgt tot de rest.

Er zijn veel goede opties om uit te kiezen, zowel cloud-gebaseerd als lokaal. Kies een van onze aanbevolen wachtwoordbeheerders en gebruik deze om sterke wachtwoorden in te stellen voor al uw accounts. Wij raden u aan uw wachtwoord manager te beveiligen met een [diceware wachtwoord zin](#diceware-passphrases) bestaande uit ten minste zeven woorden.

[Lijst van aanbevolen wachtwoordbeheerders](../passwords.md ""){.md-button}

!!! Warning "Plaats uw wachtwoorden en TOTP-tokens niet in dezelfde wachtwoordmanager"

    Wanneer u TOTP-codes gebruikt als [multi-factor authenticatie](../multi-factor-authentication.md), is de beste beveiligingspraktijk om uw TOTP-codes in een [aparte app] te bewaren(../multi-factor-authentication.md#authenticator-apps).
    
    Het opslaan van uw TOTP-tokens op dezelfde plaats als uw wachtwoorden is weliswaar handig, maar beperkt de accounts tot één factor in het geval dat een tegenstander toegang krijgt tot uw wachtwoord manager.
    
    Verder raden wij af om herstelcodes voor eenmalig gebruik op te slaan in uw wachtwoord manager. Deze moeten apart worden opgeslagen, zoals in een versleutelde container op een offline opslagapparaat.

### Back-ups

U moet een [gecodeerde](../encryption.md) back-up van uw wachtwoorden opslaan op meerdere opslagapparaten of een cloud-opslagprovider. Dit kan nuttig zijn als er iets gebeurt met uw toestel of de dienst die u gebruikt.

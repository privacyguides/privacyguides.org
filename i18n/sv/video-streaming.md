---
title: "Videouppspelning"
icon: material/video-wireless
description: These networks allow you to stream internet content without building an advertising profile based on your interests.
---

Det främsta hotet när du använder en plattform för videostreaming är att dina streamingvanor och prenumerationslistor kan användas för att profilera dig. Du bör kombinera dessa verktyg med en [VPN](vpn.md) eller [Tor](https://www.torproject.org/) för att göra det svårare att profilera din användning.

## LBRY

!!! recommendation

    ![LBRY-logotyp](assets/img/video-streaming/lbry.svg){ align=right }
    
    **LBRY-nätverket** är ett decentraliserat nätverk för videodelning. Den använder ett [BitTorrent](https://wikipedia.org/wiki/BitTorrent)-liknande nätverk för att lagra videoinnehållet och ett [blockchain](https://wikipedia.org/wiki/Blockchain) för att lagra indexen för dessa videor. Den största fördelen med denna design är censurmotstånd.
    
    **LBRY-klienten** hjälper dig att strömma videor från LBRY-nätverket och lagrar din prenumerationslista i din egen LBRY-plånbok.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://lbry.com/faq/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/lbryio/lbry-desktop){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-windows11: Windows](https://lbry.com/windows)
        - [:simple-apple: macOS](https://lbry.com/osx)
        - [:simple-linux: Linux](https://lbry.com/linux)

!!! anmärkning

    Endast **LBRY-klienten** rekommenderas, eftersom webbplatsen [Odysee](https://odysee.com) och LBRY-klienterna i F-Droid, Play Store och App Store har obligatorisk synkronisering och telemetri.

!!! varning

    När du tittar på och är värd för videor är din IP-adress synlig för LBRY-nätverket. Överväg att använda en [VPN](vpn.md) eller [Tor](https://www.torproject.org) om din [hotmodell](basics/threat-modelling.md) kräver att du döljer din IP-adress.

Vi rekommenderar **att inte** synkroniserar din plånbok med LBRY Inc. eftersom synkronisering av krypterade plånböcker inte stöds ännu. Om du synkroniserar din plånbok med LBRY Inc. du måste lita på att de inte tittar på din prenumerationslista, [LBC](https://lbry.com/faq/earn-credits) pengar, eller ta kontroll över din kanal.

Du kan inaktivera *Spara värddata för att hjälpa LBRY-nätverket* alternativet i :gear: **Inställningar** → **Avancerade inställningar**, för att undvika att din IP-adress och dina videor exponeras när du använder LBRY under en längre tid.

## Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

- Får inte kräva ett centralt konto för att visa videor.
    - Decentraliserad autentisering, t. ex. via en mobil plånboks privata nyckel, är acceptabel.

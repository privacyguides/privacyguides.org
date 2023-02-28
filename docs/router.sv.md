---
title: "Router Firmware"
icon: material/router-wireless
---

Nedan följer några alternativa operativsystem som kan användas på routrar, Wi-Fi-accesspunkter osv.

## OpenWrt

!!! recommendation

    ![OpenWrt-logotyp](assets/img/router/openwrt.svg#only-light){ align=right }
    ![OpenWrt logo](assets/img/router/openwrt-dark.svg#only-dark){ align=right }
    
    **OpenWrt** är ett Linuxbaserat operativsystem som främst används på inbyggda enheter för att dirigera nätverkstrafik. Den innehåller util-linux, uClibc och BusyBox. Alla komponenter har optimerats för hem routrar.
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/openwrt/openwrt){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://openwrt.org/donate){ .card-link title=Contribute }

Du kan se OpenWrts [tabell över maskinvara](https://openwrt.org/toh/start) för att kontrollera om din enhet stöds.

## OPNsense

!!! recommendation

    ![OPNsense logo](assets/img/router/opnsense.svg){ align=right }
    
    **OPNsense** är en FreeBSD-baserad brandvägg och routningsplattform med öppen källkod som innehåller många avancerade funktioner, t.ex. trafikformning, belastningsbalansering och VPN-funktioner, med många fler funktioner som finns tillgängliga i form av tilläggsmoduler. OPNsense används vanligen som brandvägg, router, trådlös åtkomstpunkt, DHCP-server, DNS-server och VPN-slutpunkt.
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/opnsense){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://opnsense.org/donate){ .card-link title=Contribute }

OPNsense utvecklades ursprungligen som en gaffel av [pfSense](https://en.wikipedia.org/wiki/PfSense), och båda projekten är kända för att vara fria och pålitliga brandväggsdistributioner som erbjuder funktioner som ofta endast finns i dyra kommersiella brandväggar. Utvecklarna av OPNsense [, som lanserades 2015, citerade](https://docs.opnsense.org/history/thefork.html) ett antal säkerhets- och kodkvalitetsproblem med pfSense som de ansåg nödvändiggjorde en delning av projektet, samt oro över Netgates majoritetsförvärv av pfSense och pfSense-projektets framtida inriktning.

## Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

- Måste vara öppen källkod.
- Måste få regelbundna uppdateringar.
- Måste ha stöd för en stor mängd olika maskinvara.

--8<-- "includes/abbreviations.en.txt"

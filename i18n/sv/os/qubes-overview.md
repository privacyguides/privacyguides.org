---
title: "Översikt över Qubes"
icon: simple/qubesos
description: Qubes is an operating system built around isolating apps within virtual machines for heightened security.
---

[**Qubes OS**](../desktop.md#qubes-os) är ett operativsystem som använder hypervisorn [Xen](https://en.wikipedia.org/wiki/Xen) för att ge stark säkerhet för skrivbordsdatorer genom isolerade virtuella maskiner. Varje virtuell dator kallas *Qube* och du kan tilldela varje Qube en förtroendenivå baserat på dess syfte. Eftersom Qubes OS ger säkerhet genom att använda isolering och endast tillåta åtgärder från fall till fall är det motsatsen till [badness enumeration](https://www.ranum.com/security/computer_security/editorials/dumb/).

## Hur fungerar Qubes OS?

Qubes använder [compartmentalization](https://www.qubes-os.org/intro/) för att hålla systemet säkert. Qubes skapas från mallar, med Fedora, Debian och [Whonix](../desktop.md#whonix)som standard. Qubes OS låter dig också skapa en gång [engångs](https://www.qubes-os.org/doc/how-to-use-disposables/) virtuella maskiner.

![Qubes arkitektur](../assets/img/qubes/qubes-trust-level-architecture.png)
<figcaption>Qubes arkitektur, kredit: Vad är Qubes OS Intro</figcaption>

Varje Qubes-program har en färgad kant på [](https://www.qubes-os.org/screenshots/) som kan hjälpa dig att hålla reda på vilken virtuell maskin programmet körs på. Du kan till exempel använda en särskild färg för din bankwebbläsare och en annan färg för en allmänt opålitlig webbläsare.

![Färgad kant](../assets/img/qubes/r4.0-xfce-three-domains-at-work.png)
<figcaption>Qubes fönstergränser, kredit: Qubes Screenshots</figcaption>

## Varför ska jag använda Qubes?

Qubes OS är användbart om din [hotmodell](../basics/threat-modeling.md) kräver stark uppdelning och säkerhet, t.ex. om du tror att du kommer att öppna opålitliga filer från opålitliga källor. En typisk anledning till att använda Qubes OS är att öppna dokument från okända källor.

Qubes OS använder [Dom0](https://wiki.xenproject.org/wiki/Dom0) Xen VM (dvs. en "AdminVM") för att kontrollera andra gäst-VM:er eller Qubes på värdoperativsystemet. Andra virtuella datorer visar individuella programfönster i Dom0: s skrivbordsmiljö. Det gör det möjligt att färgkoda fönster baserat på förtroendenivåer och köra appar som kan interagera med varandra med mycket detaljerad kontroll.

### Kopiera och klistra in text

Du kan [kopiera och klistra in text](https://www.qubes-os.org/doc/how-to-copy-and-paste-text/) med hjälp av `qvm-copy-to-vm` eller nedanstående instruktioner:

1. Tryck på **Ctrl+C** för att tala om för den virtuella maskinen att du vill kopiera något.
2. Tryck på **Ctrl+Shift+C** för att be den virtuella maskinen att göra denna buffert tillgänglig för det globala klippbordet.
3. Tryck på **Ctrl+Shift+V** i destinations-VM för att göra det globala klippbordet tillgängligt.
4. Tryck på **Ctrl+V** i den virtuella maskinen för att klistra in innehållet i bufferten.

### Filutbyte

Om du vill kopiera och klistra in filer och kataloger (mappar) från en VM till en annan kan du använda alternativet **Kopiera till annan AppVM...** eller **Flytta till annan AppVM...**. Skillnaden är att alternativet **Move** raderar den ursprungliga filen. Båda alternativen skyddar ditt klippblock från att läcka till andra Qubes. Detta är säkrare än filöverföring med luftgranskning eftersom en dator med luftgranskning fortfarande tvingas analysera partitioner eller filsystem. Detta är inte nödvändigt med inter-qube-kopieringssystemet.

??? info "AppVM eller qubes har inte egna filsystem"

    Du kan [kopiera och flytta filer] (https://www.qubes-os.org/doc/how-to-copy-and-move-files/) mellan Qubes. När du gör det görs inte ändringarna omedelbart och kan lätt ångras i händelse av en olycka.

### Inter-VM-interaktioner

Ramverket [qrexec](https://www.qubes-os.org/doc/qrexec/) är en central del av Qubes som gör det möjligt att kommunicera virtuella maskiner mellan domäner. Det bygger på Xen-biblioteket *vchan*, som underlättar [isolering genom policyer](https://www.qubes-os.org/news/2020/06/22/new-qrexec-policy-system/).

## Ytterligare resurser

För ytterligare information rekommenderar vi att du konsulterar de omfattande Qubes OS-dokumentationssidorna som finns på webbplatsen [Qubes OS](https://www.qubes-os.org/doc/). Offlinekopior kan laddas ner från dokumentationsarkivet för Qubes OS [](https://github.com/QubesOS/qubes-doc).

- Fonden för öppen teknik: [*Världens förmodligen säkraste operativsystem*](https://www.opentech.fund/news/qubes-os-arguably-the-worlds-most-secure-operating-system-motherboard/)
- J. Rutkowska: [*Software compartmentalization vs. physical separation*](https://invisiblethingslab.com/resources/2014/Software_compartmentalization_vs_physical_separation.pdf)
- J. Rutkowska: [*Partitionera mitt digitala liv i säkerhetsdomäner*](https://blog.invisiblethings.org/2011/03/13/partitioning-my-digital-life-into.html)
- Qubes OS: [*Relaterade artiklar*](https://www.qubes-os.org/news/categories/#articles)

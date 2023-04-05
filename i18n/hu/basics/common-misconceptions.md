---
title: "Gyakori Tévhitek"
icon: 'material/robot-confused'
description: Az adatvédelem nem egy egyszerű téma, és könnyű belekeveredni marketinges állításokba és egyéb dezinformációkba.
schema:
  - 
    "@context": https://schema.org
    "@type": FAQPage
    mainEntity:
      - 
        "@type": Question
        name: Is open source software inherently secure?
        acceptedAnswer:
          "@type": Answer
          text: |
            Whether the source code is available and how software is licensed does not inherently affect its security in any way. Open-source software has the potential to be more secure than proprietary software, but there is absolutely no guarantee this is the case. When you evaluate software, you should look at the reputation and security of each tool on an individual basis.
      - 
        "@type": Question
        name: Can shifting trust to another provider increase privacy?
        acceptedAnswer:
          "@type": Answer
          text: |
            Sokat beszélünk a "bizalom áthelyezéséről", amikor olyan megoldásokról beszélünk, mint a VPN-ek (amelyek az internetszolgáltatódba vetett bizalmat a VPN-szolgáltatóra helyezik át). While this protects your browsing data from your ISP specifically, the VPN provider you choose still has access to your browsing data: Your data isn't completely secured from all parties.
      - 
        "@type": Question
        name: Are privacy-focused solutions inherently trustworthy?
        acceptedAnswer:
          "@type": Answer
          text: |
            Ha kizárólag egy eszköz vagy szolgáltató adatvédelmi szabályzatára és marketingjére koncentrálsz, az elvakíthat annak gyengeségeivel szemben. Ha privát megoldást keresel, meg kell határozni, hogy mi az az mögött megbúvó probléma, és műszaki megoldásokat kell találni erre a problémára. Érdemes például elkerülni a Google Drive-ot, amely a Google számára hozzáférést biztosít az összes adatodhoz. The underlying problem in this case is lack of E2EE, so you should make sure that the provider you switch to actually implements E2EE, or use a tool (like Cryptomator) which provides E2EE on any cloud provider. Azzal, hogy egy "adatvédelemre összpontosító" szolgáltatóra váltasz (amely nem alkalmaz End-to-End titkoítást), nem oldja meg a problémádat: csak a bizalmat helyezi át a Google-tól az adott szolgáltatóra.
      - 
        "@type": Question
        name: How complicated should my threat model be?
        acceptedAnswer:
          "@type": Answer
          text: |
            Gyakran látjuk, hogy az emberek túlságosan összetett adatvédelmi védelmi modelleket írnak le. Ezek a megoldások gyakran olyan problémákat tartalmaznak, mint sok különböző email fiók vagy bonyolult felállások sok mozgó alkatrésszel és feltétellel. The replies are usually answers to "What is the best way to do X?"
            Finding the "best" solution for yourself doesn't necessarily mean you are after an infallible solution with dozens of conditions—these solutions are often difficult to work with realistically. As we discussed previously, security often comes at the cost of convenience.
---

## "A nyílt forráskódú szoftverek mindig biztonságosak" vagy "A jogvédett szoftverek biztonságosabbak"

Ezek a mítoszok számos előítéletből fakadnak, de az, hogy a forráskód elérhető-e, és hogy a szoftverek licencelése hogyan történik, nem befolyásolja annak biztonságát semmilyen módon. ==A nyílt forráskódú szoftverek potenciálisan ** biztonságosabbak, mint a jogvédett szoftverek, de egyáltalán nem garantálható, hogy ez így is van.== Egy szoftver elbírálásánál az egyes eszközök hírnevét és biztonságát egyénileg kell megvizsgálni.

Nyílt forráskódú szoftverek felülvizsgál*hatók* harmadik felek által, és gyakran átláthatóbbak lehetséges sebezhetőségek esetében, mint a jogvédett szoftverek. Azt is lehetővé teszi, hogy felülvizsgáld a kódot, és letiltsd a gyanús funkciókat, amiket találsz. Azonban, *ha nem így teszel*, nincs garancia arra, hogy a kód valaha is el lett bírálva, különösen a kisebb szoftverprojektek esetében. A nyílt fejlesztési folyamat is ki lett használva arra, hogy új sebezhetőségeket építsenek be még nagyobb projektekbe is.[^1]

A másik oldalon a jogvédett szoftverek kevésbé átláthatóak, de ez nem jelenti azt, hogy nem biztonságosak. A nagyobb jogvédett szoftverprojektek belső és harmadik fél által is felülvizsgálhatók, és független biztonsági kutatók továbbra is találhatnak sebezhetőségeket olyan technikákkal, mint a reverse engineering.

Az elfogult döntések elkerülése érdekében *létfontosságú*, hogy elbíráld az általad használt szoftverek adatvédelmi és biztonsági szabványait.

## "A bizalom áthelyezése növelheti a magánélet védelmét"

Sokat beszélünk a "bizalom áthelyezéséről", amikor olyan megoldásokról beszélünk, mint a VPN-ek (amelyek az internetszolgáltatódba vetett bizalmat a VPN-szolgáltatóra helyezik át). Míg ez megvédi a böngészési adataid az internetszolgáltatódtól *konkrétan*, a választott VPN szolgáltató továbbra is hozzáfér a böngészési adatokhoz: Az adataid nincsenek teljesen védve minden féltől. Ez azt jelenti, hogy:

1. Óvatosan kell eljárnod, amikor kiválasztasz egy szolgáltatót, akire áthelyezed a bizalmat.
2. Az adatok teljes védelme érdekében továbbra is egyéb technikákat kell alkalmaznod, például End-to-End titkosítást. Ha csak azért nem bízol egy szolgáltatóban, hogy egy másikban bíz, az nem jelenti az adataid védelmét.

## "Az adatvédelemre összpontosító megoldások eredendően megbízhatóak"

Ha kizárólag egy eszköz vagy szolgáltató adatvédelmi szabályzatára és marketingjére koncentrálsz, az elvakíthat annak gyengeségeivel szemben. Ha privát megoldást keresel, meg kell határozni, hogy mi az az mögött megbúvó probléma, és műszaki megoldásokat kell találni erre a problémára. Érdemes például elkerülni a Google Drive-ot, amely a Google számára hozzáférést biztosít az összes adatodhoz. A probléma ebben az esetben az End-to-End titkosítás hiánya, ezért meg kell győződnöd arról, hogy a szolgáltató, amelyre váltasz, valóban megvalósítja az End-to-End titkosítást, vagy olyan eszközt használsz (mint például a [Cryptomator](../encryption.md#cryptomator-cloud)), amely bármely felhőszolgáltatónál biztosítja az End-to-End titkosítást. Azzal, hogy egy "adatvédelemre összpontosító" szolgáltatóra váltasz (amely nem alkalmaz End-to-End titkoítást), nem oldja meg a problémádat: csak a bizalmat helyezi át a Google-tól az adott szolgáltatóra.

Az általad választott szolgáltatók adatvédelmi irányelvei és üzleti gyakorlatai nagyon fontosak, de másodlagosnak kell tekinteni az adatvédelmed technikai garanciáihoz képest: Ne helyezd át a bizalmat egy másik szolgáltatóra, ha a szolgáltatóban való bizalom egyáltalán nem is szükséges.

## "A bonyolult jobb"

Gyakran látjuk, hogy az emberek túlságosan összetett adatvédelmi védelmi modelleket írnak le. Ezek a megoldások gyakran olyan problémákat tartalmaznak, mint sok különböző email fiók vagy bonyolult felállások sok mozgó alkatrésszel és feltétellel. A válaszok általában a "Mi a legjobb módja, hogy *X*-t csinálj?" kérdésre adnak választ.

Finding the "best" solution for yourself doesn't necessarily mean you are after an infallible solution with dozens of conditions—these solutions are often difficult to work with realistically. As we discussed previously, security often comes at the cost of convenience. Below, we provide some tips:

1. ==Actions need to serve a particular purpose:== think about how to do what you want with the fewest actions.
2. ==Remove human failure points:== We fail, get tired, and forget things. To maintain security, avoid relying on manual conditions and processes that you have to remember.
3. ==Use the right level of protection for what you intend.== We often see recommendations of so-called law-enforcement or subpoena-proof solutions. These often require specialist knowledge and generally aren't what people want. There's no point in building an intricate threat model for anonymity if you can be easily de-anonymized by a simple oversight.

So, how might this look?

One of the clearest threat models is one where people *know who you are* and one where they do not. There will always be situations where you must declare your legal name and there are others where you don't need to.

1. **Known identity** - A known identity is used for things where you must declare your name. There are many legal documents and contracts where a legal identity is required. This could range from opening a bank account, signing a property lease, obtaining a passport, customs declarations when importing items, or otherwise dealing with your government. These things will usually lead to credentials such as credit cards, credit rating checks, account numbers, and possibly physical addresses.

    We don't suggest using a VPN or Tor for any of these things, as your identity is already known through other means.

    !!! tip
   
        When shopping online, the use of a [parcel locker](https://en.wikipedia.org/wiki/Parcel_locker) can help keep your physical address private.

2. **Unknown identity** - An unknown identity could be a stable pseudonym that you regularly use. It is not anonymous because it doesn't change. If you're part of an online community, you may wish to retain a persona that others know. This pseudonym isn't anonymous because—if monitored for long enough—details about the owner can reveal further information, such as the way they write, their general knowledge about topics of interest, etc.

    You may wish to use a VPN for this, to mask your IP address. Financial transactions are more difficult to mask: You could consider using anonymous cryptocurrencies, such as [Monero](https://www.getmonero.org/). Employing altcoin shifting may also help to disguise where your currency originated. Typically, exchanges require KYC (know your customer) to be completed before they'll allow you to exchange fiat currency into any kind of cryptocurrency. Local meet-up options may also be a solution; however, those are often more expensive and sometimes also require KYC.

3. **Anonymous identity** - Even with experience, anonymous identities are difficult to maintain over long periods of time. They should be short-term and short-lived identities which are rotated regularly.

    Using Tor can help with this. It is also worth noting that greater anonymity is possible through asynchronous communication: Real-time communication is vulnerable to analysis of typing patterns (i.e. more than a paragraph of text, distributed on a forum, via email, etc.)

[^1]: One notable example of this is the [2021 incident in which University of Minnesota researchers introduced three vulnerabilities into the Linux kernel development project](https://cse.umn.edu/cs/linux-incident).

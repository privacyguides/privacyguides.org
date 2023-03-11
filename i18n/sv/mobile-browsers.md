---
title: "Mobila webbläsare"
icon: material/cellphone-information
description: These browsers are what we currently recommend for standard/non-anonymous internet browsing on your phone.
---

Detta är våra för närvarande rekommenderade mobila webbläsare och konfigurationer för standardiserad/icke-anonym surfning på internet. Om du vill surfa anonymt på internet bör du använda [Tor](tor.md) i stället. I allmänhet rekommenderar vi att du håller ett minimum av tillägg; de har privilegierad åtkomst i din webbläsare, kräver att du litar på utvecklaren, kan få dig [att sticka ut](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)och [försvagar](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) webbplatsens isolering.

## Android

På Android är Firefox fortfarande mindre säkert än Chromium-baserade alternativ: Mozillas motor, [GeckoView](https://mozilla.github.io/geckoview/), har ännu inte stöd för [site isolation](https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture) eller aktiverar [isolatedProcess](https://bugzilla.mozilla.org/show_bug.cgi?id=1565196).

### Brave

!!! recommendation

    ![Brave logo](assets/img/browsers/brave.svg){ align=right }
    
    **Brave Browser** innehåller en inbyggd innehållsblockerare och [integritetsfunktioner] (https://brave.com/privacy-features/), varav många är aktiverade som standard.
    
    Brave bygger på webbläsarprojektet Chromium, så den bör kännas bekant och ha minimala problem med webbkompatibilitet.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://lbry.com/faq/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/lbryio/lbry-desktop){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.brave.browser)
        - [:simple-github: App Store](https://github.com/brave/brave-browser/releases)

#### Rekommenderad konfiguration

Tor Browser är det enda sättet att verkligen surfa anonymt på internet. När du använder Brave rekommenderar vi att du ändrar följande inställningar för att skydda din integritet från vissa parter, men alla andra webbläsare än [Tor Browser](tor.md#tor-browser) kommer att kunna spåras av *någon* i något avseende.

Dessa alternativ finns i :material-menu: → **Inställningar** → **Modiga sköldar & sekretess**

##### Sköldar

Brave har några åtgärder mot fingeravtryck i sin funktion [Shields](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-). Vi föreslår att du konfigurerar dessa alternativ [globalt](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-) på alla sidor som du besöker.

##### Brave skyddar globala standardvärden

Shields alternativ kan nedgraderas vid behov för varje enskild plats, men som standard rekommenderar vi att du ställer in följande:

<div class="annotate" markdown>

- [x] Välj **Aggressiv** under Blockera spårare och annonser

??? varning "Use default filter lists"
        Brave låter dig välja ytterligare innehållsfilter på den interna sidan `brave://adblock`. Vi avråder från att använda den här funktionen; behåll istället standardfilterlistorna. Om du använder extra listor sticker du ut från andra Brave-användare och kan också öka angreppsytan om det finns en exploit i Brave och en skadlig regel läggs till i en av de listor du använder.

- [x] Välj **Uppgradera anslutningar till HTTPS**
- [x] (valfritt) Välj **Blocka skript** (1)
- [x] Välj **Strikt, kan skada webbplatser** under **Blocka fingeravtryck**

</div>

1. Det här alternativet ger funktioner som liknar uBlock Origin avancerade blockeringslägen för [](https://github.com/gorhill/uBlock/wiki/Blocking-mode) eller tillägget [NoScript](https://noscript.net/).

##### Rensa surfhistorik

- [x] Välj **Rensa uppgifter vid avslut**

##### Blockering av sociala medier

- [ ] Avmarkera alla komponenter för sociala medier

##### Andra sekretessinställningar

<div class="annotate" markdown>

- [x] Välj **Disable non-proxied UDP** under [WebRTC IP Handling Policy] (https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-#webrtc)
- [ ] Avmarkera **Allow sites to check if you have payment methods saved**
- [ ] Avmarkera **IPFS Gateway** (1)
- [ ] [x] Välj **Slut flikar vid avslut**
- [ ] Avmarkera **Allow privacy-preserving product analytics (P3A)**
- [ ] Avmarkera **Automatiskt skicka diagnostiska rapporter**
- [ ] Avmarkera **Automatiskt skicka daglig användningsping till Brave**

1. InterPlanetary File System (IPFS) är ett decentraliserat peer-to-peer-nätverk för lagring och delning av data i ett distribuerat filsystem. Om du inte använder funktionen, inaktivera den.

</div>

#### Brave Sync

[Brave Sync](https://support.brave.com/hc/en-us/articles/360059793111-Understanding-Brave-Sync) gör det möjligt att få tillgång till dina webbläsardata (historik, bokmärken osv.) på alla dina enheter utan att du behöver ett konto och skyddar dem med E2EE.

## iOS

I iOS är alla appar som kan surfa på webben [](https://developer.apple.com/app-store/review/guidelines) begränsade till att använda Apples WebKit-ramverk [WebKit](https://developer.apple.com/documentation/webkit), så det finns få skäl att använda en tredjepartswebbläsare.

### Safari

!!! recommendation

    ![Safari-logotyp](assets/img/browsers/safari.svg){ align=right }
    
    **Safari** är standardwebbläsaren i iOS. Den innehåller [integritetsfunktioner] (https://support.apple.com/guide/iphone/browse-the-web-privately-iphb01fc3c85/15.0/ios/15.0) som intelligent spårningsskydd, integritetsrapport, isolerade flikar för privat surfning, iCloud Private Relay och automatiska HTTPS-uppgraderingar.
    
    [:octicons-home-16: Repository](https://github.com/Hackeralert/Picocrypt){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/Hackeralert/Picocrypt){ .card-link title="Source Code" }
    [:octicons-info-16:](https://support.apple.com/guide/safari/welcome/mac){ .card-link title=Contribute}

#### Rekommenderad konfiguration

Dessa alternativ finns i :gear: **Inställningar** → **Safari** → **Sekretess och säkerhet**.

##### Förebyggande av spårning på olika webbplatser

- [x] Aktivera **Förhindra spårning på andra webbplatser**

Detta aktiverar WebKits [Intelligent Tracking Protection](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp). Funktionen hjälper till att skydda mot oönskad spårning genom att använda maskininlärning på enheten för att stoppa spårare. ITP skyddar mot många vanliga hot, men blockerar inte alla spårningsvägar eftersom den är utformad för att inte störa användbarheten av webbplatser.

##### Integritetsrapport

Privacy Report ger en ögonblicksbild av de spårare som för närvarande förhindras från att profilera dig på den webbplats du besöker. Den kan också visa en veckorapport som visar vilka spårare som har blockerats över tid.

Rapporten om sekretess är tillgänglig via menyn Sidinställningar.

##### Sekretessbevarande annonsmätning

- [ ] Inaktivera **Integritetsbevarande annonsmätning**

Vid mätning av annonsklick har man traditionellt använt spårningsteknik som inkräktar på användarnas integritet. [Privat klickmätning](https://webkit.org/blog/11529/introducing-private-click-measurement-pcm/) är en WebKit-funktion och föreslagen webbstandard som syftar till att göra det möjligt för annonsörer att mäta effektiviteten hos webbkampanjer utan att kompromissa med användarnas integritet.

Funktionen har i sig själv inga större problem med integriteten, så även om du kan välja att låta den vara aktiverad anser vi att det faktum att den automatiskt inaktiveras i privat surfning är en indikator för att inaktivera funktionen.

##### Alltid privat surfning

Öppna Safari och tryck på knappen Flikar längst ner till höger. Expandera sedan listan Flikgrupper.

- [x] Välj **Rensa uppgifter vid avslut**

Safaris läge för privat surfning ger ytterligare skydd för privatlivet. Privat surfning använder en ny [tillfällig](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/1410529-ephemeral) -session för varje flik, vilket innebär att flikarna är isolerade från varandra. Det finns också andra mindre sekretessfördelar med privat surfning, till exempel att inte skicka en webbsidas adress till Apple när du använder Safaris översättningsfunktion.

Observera att privat surfning inte sparar cookies och webbplatsdata, så det är inte möjligt att vara inloggad på webbplatser. Detta kan vara en olägenhet.

##### iCloud-synkronisering

Synkronisering av Safari-historik, flikgrupper, iCloud-flikar och sparade lösenord är E2EE. Som standard är bokmärken dock [och inte](https://support.apple.com/en-us/HT202303). Apple kan dekryptera och komma åt dem i enlighet med sin sekretesspolicy för [](https://www.apple.com/legal/privacy/en-ww/).

Du kan aktivera E2EE för dig Safari-bokmärken och nedladdningar genom att aktivera [Avancerat dataskydd](https://support.apple.com/en-us/HT212520). Gå till ditt **Apple-ID-namn → iCloud → Avancerat dataskydd**.

- [x] Aktivera **Avancerat dataskydd**

Om du använder iCloud med avancerat dataskydd inaktiverat rekommenderar vi också att du kontrollerar att Safaris standardhämtningsplats är inställd på lokalt på din enhet. Detta alternativ finns i :gear: **Inställningar** → **Safari** → **Allmänt** → **Nedladdningar**.

### AdGuard

!!! recommendation

    ![AdGuard logo](assets/img/browsers/adguard.svg){ align=right }
    
    **AdGuard för iOS** är ett gratis tillägg för innehållsspärrning för Safari med öppen källkod som använder det inhemska [Content Blocker API] (https://developer.apple.com/documentation/safariservices/creating_a_content_blocker).
    
    AdGuard för iOS har vissa premiumfunktioner, men standardblockeringen av innehåll i Safari är gratis.
    
    [:octicons-home-16: Startsida](https://cryptomator.org){ .md-button .md-button--primary }
    
    [:octicons-eye-16:](https://cryptomator.org/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://kb.adguard.com/ios/){ .card-link title=Dokumentation}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdguardForiOS){ .card-link title="Källkod" }
    [](/){ .card-link title=Contribute??? nedladdningar
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1047223162)

Ytterligare filterlistor saktar ner saker och kan öka din attackyta, så använd bara det du behöver.

## Kriterier

**Observera att vi inte är knutna till något av de projekt som vi rekommenderar.** Förutom [våra standardkriterier](about/criteria.md)har vi utvecklat en tydlig uppsättning krav som gör det möjligt för oss att ge objektiva rekommendationer. Vi föreslår att du bekantar dig med den här listan innan du väljer att använda ett projekt, och att du gör din egen forskning för att se till att det är rätt val för dig.

!!! exempel "Det här avsnittet är nytt"

    Vi arbetar med att fastställa kriterier för varje del av vår webbplats, och detta kan komma att ändras. Om du har några frågor om våra kriterier, vänligen [fråga på vårt forum] (https://discuss.privacyguides.net/latest) och tro inte att vi inte har beaktat något när vi gjorde våra rekommendationer om det inte finns med här. Det finns många faktorer som beaktas och diskuteras när vi rekommenderar ett projekt, och att dokumentera varje enskild faktor är ett pågående arbete.

### Minimikrav

- Måste ha stöd för automatiska uppdateringar.
- Måste få motoruppdateringar inom 0-1 dagar från uppströmsutgåvan.
- Eventuella ändringar som krävs för att göra webbläsaren mer integritetsvänlig bör inte påverka användarupplevelsen negativt.
- Android webbläsare måste använda Chromium-motorn.
    - Tyvärr är Mozilla GeckoView fortfarande mindre säkert än Chromium på Android.
    - iOS-browsers är begränsade till WebKit.

### Kriterier för förlängning

- Får inte replikera inbyggda webbläsar- eller OS-funktioner.
- Måste direkt påverka användarens integritet, det vill säga får inte bara ge information.

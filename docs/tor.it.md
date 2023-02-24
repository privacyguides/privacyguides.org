---
title: "Rete Tor"
icon: simple/torproject
---

![Logo Tor](assets/img/self-contained-networks/tor.svg){ align=right }

La rete **Tor** è un gruppo di server gestiti da volontari che permette di connettersi gratuitamente e migliorare la propria privacy e sicurezza su Internet. Individui e organizzazioni possono anche condividere informazioni attraverso la rete Tor con i "servizi nascosti .onion" senza compromettere la loro privacy. Poiché il traffico Tor è difficile da bloccare e tracciare, Tor è un efficace strumento di elusione della censura.

[:octicons-home-16:](https://www.torproject.org){ .card-link title="Pagina principale" }
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Servizio Onion" }
[:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentazione}
[:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="Codice sorgente" }
[:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribuisci }

Tor funziona instradando il traffico internet attraverso questi server gestiti da volontari, invece di effettuare una connessione diretta al sito che si sta cercando di visitare. In questo modo si offusca la provenienza del traffico e nessun server nel percorso di connessione è in grado di vedere il percorso completo del traffico proveniente e diretto, il che significa che nemmeno i server utilizzati per connettersi possono violare l'anonimato.

<figure markdown>
  ![Tor path](assets/img/how-tor-works/tor-path.svg#only-light)
  ![Tor path](assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>Tor circuit pathway - I nodi del percorso possono vedere solo i server a cui sono direttamente collegati, ad esempio il nodo "Entry" mostrato può vedere il vostro indirizzo IP e l'indirizzo del nodo "Middle", ma non ha modo di vedere quale sito web state visitando.</figcaption>
</figure>

- [Maggiori informazioni sul funzionamento di Tor :material-arrow-right-drop-circle:](advanced/tor-overview.md)

## Connessione a Tor

Esistono diversi modi per connettersi alla rete Tor dal proprio dispositivo, il più comunemente usato è il **Tor Browser**, un fork di Firefox progettato per la navigazione anonima per computer desktop e Android. Oltre alle applicazioni elencate di seguito, esistono anche sistemi operativi progettati appositamente per connettersi alla rete Tor, come [Whonix](desktop.md#whonix) su [Qubes OS](desktop.md#qubes-os), che offrono una sicurezza e una protezione ancora maggiori rispetto al Tor Browser standard.

### Tor Browser

!!! recommendation

    ![logo di Tor Browser](assets/img/browsers/tor.svg){ align=right }
    
    Il **Tor Browser** è la scelta ideale per chi ha bisogno di anonimato, in quanto fornisce l'accesso alla rete e ai ponti Tor e include impostazioni predefinite ed estensioni configurate automaticamente in base ai livelli di sicurezza predefiniti: *Standard*, *Sicuro* e *Il più sicuro*.
    
    [:octicons-home-16: Pagina principale](https://www.torproject.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Servizio Onion" }
    [:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentazione }
    [:octicons-code-16:](https://gitweb.torproject.org/tor-browser.git/){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribuisce }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:simple-android: Android](https://www.torproject.org/download/#android)
        - [:simple-windows11: Windows](https://www.torproject.org/download/)
        - [:simple-apple: macOS](https://www.torproject.org/download/)
        - [:simple-linux: Linux](https://www.torproject.org/download/)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/security/tor)

!!! danger

    Non si devono **mai** installare estensioni aggiuntive su Tor Browser o modificare le impostazioni `about:config`, comprese quelle suggerite per Firefox. Le estensioni del browser e impostazioni non standard ti rendono distinguibile dagli altri utenti della rete Tor, aumentando così il [fingerprint](https://support.torproject.org/glossary/browser-fingerprinting) del tuo browser.

Tor Browser è progettato per evitare il fingerprinting o l'identificazione dell'utente attraverso la configurazione del browser. Pertanto, è indispensabile **non** modificare il browser oltre i livelli di sicurezza [predefiniti](https://tb-manual.torproject.org/security-settings/).

### Orbot

!!! recommendation

    ![Logo Orbot](assets/img/self-contained-networks/orbot.svg){ align=right }
    
    **Orbot** è una VPN Tor gratuita per smartphone che instrada il traffico da qualsiasi app sul dispositivo attraverso la rete Tor.
    
    [:octicons-home-16: Pagina principale](https://orbot.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://orbot.app/privacy-policy){ .card-link title="Informativa sulla privacy" }
    [:octicons-info-16:](https://orbot.app/faqs){ .card-link title=Documentazione}
    [:octicons-code-16:](https://orbot.app/code){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://orbot.app/donate){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.android)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/orbot/id1609461599)
        - [:simple-github: GitHub](https://github.com/guardianproject/orbot/releases)

Per resistere agli attacchi di analisi del traffico, considera di abilitare *Isola gli indirizzi di destinazione* in :material-menu: → **Impostazioni** → **Connectivity**. In questo modo si utilizzerà un circuito Tor completamente diverso (nodi intermedi e di uscita diversi) per ogni dominio a cui ci si connette.

!!! tip "Suggerimenti per Android"

    Orbot può eseguire il proxy di singole applicazioni se queste supportano il proxy SOCKS o HTTP. Può anche effettuare il proxy di tutte le connessioni di rete utilizzando [VpnService](https://developer.android.com/reference/android/net/VpnService) e può essere utilizzato con il killswitch VPN in :gear: **Impostazioni** → **Rete & Internet** → **VPN** → :gear: → **Blocca connessioni senza VPN**.
    
    Orbot è spesso obsoleto sul [repository di F-Droid](https://guardianproject.info/fdroid) e [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android) del Guardian Project, per cui si consiglia di scaricarlo direttamente dal [repository di GitHub](https://github.com/guardianproject/orbot/releases).
    
    Tutte le versioni sono firmate utilizzando la stessa firma, quindi dovrebbero essere compatibili tra loro.

## Relay e Bridge

### Snowflake

!!! recommendation

    ![Snowflake logo](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Snowflake logo](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }
    
    **Snowflake** ti permette di donare larghezza di banda al Tor Project, operando i cosiddetti "Snowflake proxy" all'interno del tuo browser.
    
    Individui sottoposti a censura possono utilizzare questi proxy per connettersi alla rete Tor. Snowflake è un ottimo modo per contribuire alla rete Tor, senza la necessità di avere il know-how tecnico per gestire un relay o ponte Tor.
    
    [:octicons-home-16: Pagina principale](https://snowflake.torproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=Documentazione}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="Codice sorgente" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribuisci }
    
    ??? downloads
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie)
        - [:octicons-browser-16: Web](https://snowflake.torproject.org/embed "Leave this page open to be a Snowflake proxy")

??? tip "Snowflake incorporato"

    Puoi abilitare Snowflake nel tuo browser cliccando il pulsante sottostante e ==lasciando questa pagina aperta==. Puoi inoltre installare Snowflake come un'estensione del browser per poter sempre utilizzarlo quando navighi su Internet, ma, come già detto in precedenza, questo può aumentare la tua superficie di attacco.
    
    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>Se l'incorporamento non appare, assicurati di non star bloccando il frame di terza parte da 'torproject.org'. Alternativamente, visita [questa pagina](https://snowflake.torproject.org/embed.html).</small>

Snowflake non aumenta in alcun modo la tua privacy e non viene utilizzato per connettersi alla rete Tor all'interno del tuo browser personale. Tuttavia, se la tua connessione a Internet non è censurata, dovresti prendere in considerazione la possibilità di utilizzarlo per aiutare le persone che si trovano in reti censurate a ottenere una migliore privacy. Non c'è bisogno di preoccuparsi dei siti web a cui le persone accedono attraverso il tuo proxy: il loro indirizzo IP di navigazione visibile corrisponderà al loro nodo di uscita Tor, non al tuo.

La gestione di un proxy Snowflake è a basso rischio, anche più della gestione di un relay o bridge di Tor, che già non sono attività particolarmente rischiose. Tuttavia, il traffico viene comunque instradato attraverso la tua rete, il che può avere un certo impatto, soprattutto se la tua rete ha una larghezza di banda limitata. Assicurati di comprendere [come Snowflake funziona](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) prima di decidere se gestire un proxy.

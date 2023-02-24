---
title: Panoramica VPN
icon: material/vpn
---

Le reti private virtuali sono un modo per estendere l'estremità della vostra rete all'uscita di un'altra parte del mondo. Un ISP può vedere il flusso del traffico Internet che entra ed esce dal dispositivo di terminazione della rete (ad esempio, il modem).

I protocolli di crittografia come l'HTTPS sono comunemente utilizzati su Internet, quindi potrebbero non essere in grado di vedere esattamente ciò che state postando o leggendo, ma possono farsi un'idea dei [domini richiesti](../advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns).

Una VPN può essere d'aiuto in quanto può spostare la fiducia su un server in un'altra parte del mondo. Di conseguenza, l'ISP vede solo che sei connesso a una VPN e non vede nulla dell'attività che stai trasmettendo.

## Dovrei utilizzare una VPN?

**Sì**, a meno che tu non stia già utilizzando Tor. Una VPN svolge due funzioni: spostare i rischi dall'Internet Service Provider a se stesso e nascondere l'IP da un servizio di terze parti.

Le VPN non possono criptare i dati al di fuori della connessione tra il dispositivo e il server VPN. I fornitori di VPN possono vedere e modificare il traffico proprio come l'ISP. E non c'è modo di verificare in alcun modo le politiche di "no logging" di un provider VPN.

Tuttavia, nascondono l'IP reale da un servizio di terze parti, a condizione che non ci siano fughe dell'IP. Aiutano a confonderti con gli altri e ad attenuare il tracciamento basato sull'IP.

## Quando non dovrei usare una VPN?

È improbabile che l'uso di una VPN nei casi in cui si utilizza la propria [identità nota](../basics/common-threats.en.md#common-misconceptions) sia utile.

In questo modo si possono attivare sistemi di spam e di rilevamento delle frodi, come nel caso in cui si acceda al sito web della propria banca.

## E la crittografia?

La crittografia offerta dai fornitori di VPN avviene tra i propri dispositivi e i loro server. Garantisce che questo specifico collegamento è sicuro. Si tratta di un passo avanti rispetto all'uso di proxy non criptati, dove un avversario sulla rete può intercettare le comunicazioni tra i propri dispositivi e tali proxy e modificarle. Tuttavia, la crittografia tra le app o i browser e i fornitori di servizi non è gestita da questa crittografia.

Per garantire la riservatezza e la sicurezza di ciò che si fa sui siti web visitati, è necessario utilizzare il protocollo HTTPS. In questo modo le password, i token di sessione e le query saranno al sicuro dal provider VPN. Considera di abilitare "HTTPS ovunque" nel browser per mitigare gli attacchi di downgrade come [SSL Strip](https://www.blackhat.com/presentations/bh-dc-09/Marlinspike/BlackHat-DC-09-Marlinspike-Defeating-SSL.pdf).

## Dovrei utilizzare un DNS criptato con una VPN?

A meno che il provider VPN non ospiti i server DNS criptati, **no**. L'utilizzo di DOH/DOT (o di qualsiasi altra forma di DNS crittografato) con server di terze parti aggiungerà semplicemente altre entità di cui fidarsi e non farà **assolutamente nulla** per migliorare la privacy o la sicurezza. Il provider VPN può comunque vedere quali siti web visiti in base agli indirizzi IP e ad altri metodi. Invece di fidarti solo del provider VPN, ora ti fidi sia del provider VPN che del provider DNS.

Un motivo comune per raccomandare il DNS crittografato è che aiuta a contrastare lo spoofing DNS. Tuttavia, il browser dovrebbe già verificare la presenza di [certificati TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security#Digital_certificates) con **HTTPS** e avvisare l'utente. Se non si utilizza **HTTPS**, un avversario può comunque modificare qualsiasi cosa oltre alle query DNS e il risultato finale sarà poco diverso.

Inutile dire che **non si dovrebbero usare DNS criptati con Tor**. Questo indirizzerebbe tutte le vostre richieste DNS attraverso un unico circuito e permetterebbe al provider DNS criptato di deanonimizzarvi.

## Dovrei usare Tor *e* una VPN?

Utilizzando una VPN con Tor, si crea essenzialmente un nodo di ingresso permanente, spesso con una traccia di denaro. Questo non fornisce alcun vantaggio aggiuntivo all'utente, mentre aumenta drasticamente la superficie di attacco della connessione. Se desideri nascondere l'utilizzo di Tor all'ISP o al governo, Tor ha una soluzione integrata per questo: i Tor bridges. [Per saperne di più sui Tor bridges e sul perché non è necessario utilizzare una VPN](../advanced/tor-overview.md).

## E se ho bisogno di anonimato?

Le VPN non possono garantire l'anonimato. Il provider VPN vedrà comunque il vero indirizzo IP e spesso ha una traccia di denaro che può essere collegata direttamente a te. Non si può fare affidamento sulle politiche di "no logging" per proteggere i dati. In tal caso utilizza [Tor](https://www.torproject.org/).

## E i fornitori di VPN che forniscono nodi Tor?

Non utilizzare questa funzione. Il punto di forza dell'utilizzo di Tor è che non ti fidt del provider VPN. Attualmente Tor supporta solo il protocollo [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol). [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) (utilizzato in [WebRTC](https://en.wikipedia.org/wiki/WebRTC) per la condivisione di voce e video, il nuovo [protocollo HTTP3/QUIC](https://en.wikipedia.org/wiki/HTTP/3), ecc.), [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) e altri pacchetti saranno eliminati. Per compensare questa situazione, i fornitori di VPN di solito instradano tutti i pacchetti non-TCP attraverso il loro server VPN (il primo hop). Questo è il caso di [ProtonVPN](https://protonvpn.com/support/tor-vpn/). Inoltre, quando si utilizza questa configurazione di Tor su VPN, non si ha il controllo su altre importanti funzionalità di Tor come [Isolated Destination Address](https://www.whonix.org/wiki/Stream_Isolation) (utilizzo di un circuito Tor diverso per ogni dominio visitato).

La funzione deve essere vista come un modo comodo per accedere alla rete Tor, non per rimanere anonimi. Per un corretto anonimato, utilizza Tor Browser, TorSocks o un gateway Tor.

## Quando sono utili le VPN?

Una VPN può comunque essere utile in diversi scenari, ad esempio:

1. Nascondere il proprio traffico a **solo** al proprio Internet Service Provider.
1. Nascondere i propri download (come i torrent) al proprio ISP e alle organizzazioni antipirateria.
1. Nascondere il proprio IP da siti e servizi di terze parti, impedendone il tracciamento.

Per casi d'uso come questi, o se hai un'altra ragione valida, i fornitori di VPN che abbiamo elencato sopra sono quelli che riteniamo più affidabili. Tuttavia, utilizzare un provider VPN significa comunque *fidarsi* del provider. In quasi tutti gli altri scenari si dovrebbe utilizzare uno strumento progettato con la **sicurezza come obiettivo** come Tor.

## Fonti e approfondimenti

1. [VPN - a Very Precarious Narrative (VPN - una narrazione molto precaria)](https://schub.io/blog/2019/04/08/very-precarious-narrative.html) di Dennis Schubert
1. [Panoramica della rete Tor](../advanced/tor-overview.md)
1. [Guide alla privacy di IVPN](https://www.ivpn.net/privacy-guides)
1. ["Do I need a VPN?" ("Ho bisogno di una VPN?")](https://www.doineedavpn.com), uno strumento sviluppato da IVPN per sfidare il marketing aggressivo delle VPN, aiutando le persone a decidere se una VPN è adatta a loro.

## Informazioni correlate

- [The Trouble with VPN and Privacy Review Sites (Il problema dei siti di recensioni di VPN e privacy)](https://blog.privacyguides.org/2019/11/20/the-trouble-with-vpn-and-privacy-review-sites/)
- [Free VPN App Investigation (Indagine sulle app di VPN gratuite)](https://www.top10vpn.com/free-vpn-app-investigation/)
- [Hidden VPN owners unveiled: 101 VPN products run by just 23 companies (Svelati i proprietari segreti delle VPN: 101 prodotti per VPN gestiti da sole 23 aziende)](https://vpnpro.com/blog/hidden-vpn-owners-unveiled-97-vpns-23-companies/)
- [This Chinese company is secretly behind 24 popular apps seeking dangerous permissions (Questa azienda cinese è segretamente dietro 24 app popolari che cercano autorizzazioni pericolose)](https://vpnpro.com/blog/chinese-company-secretly-behind-popular-apps-seeking-dangerous-permissions/)

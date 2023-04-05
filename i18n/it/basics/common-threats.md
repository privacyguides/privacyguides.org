---
title: "Minacce comuni"
icon: 'material/eye-outline'
description: Il modello di minaccia è individuale, ma ci sono alcuni aspetti che stanno a cuore a molti visitatori di questo sito.
---

In linea di massima, le nostre raccomandazioni sono suddivise in [minacce](threat-modeling.md) o obiettivi che si applicano alla maggior parte delle persone. ==Potete essere interessati a nessuna, una, alcune o tutte queste possibilità== e gli strumenti e i servizi che utilizzate dipendono dai vostri obiettivi. Potreste avere minacce specifiche anche al di fuori di queste categorie, il che è perfettamente normale! È importante sviluppare una comprensione dei vantaggi e dei difetti degli strumenti che scegli di utilizzare, perché in astratto nessuno di questi ti proteggerà da qualunque minaccia.

- <span class="pg-purple">:material-incognito: Anonimizzazione</span> - Separa la tua attività online dalla tua reale identità, proteggendoti da persone che mirano a scoprire *la tua* identità.
- <span class="pg-red">:material-target-account: Attacchi mirati</span> - Protezione da hacker o altri malintenzionati che provano a prendere il controllo miratamente dei *tuoi* dati o dispositivo.
- <span class="pg-orange">:material-bug-outline: Attacchi passivi</span> - Protezione da malware, violazioni di dati, e altri attacchi non mirati che colpiscono molte persone alla volta.
- <span class="pg-teal">:material-server-network: Service Providers</span> - Proteggi i tuoi dati dai service providers (per esempio con la crittografia E2EE, che rende i tuoi dati illeggibili dal server).
- <span class="pg-blue">:material-eye-outline: Sorveglianza di massa</span> - Protezione dalle agenzie governative, organizzazioni, siti e serviti che lavorano assieme per tracciare le tue attività.
- <span class="pg-brown">:material-account-cash: Capitalismo di sorveglianza</span> - Proteggiti dai network di pubblicità, come Google e Facebook, e altre miriadi di collezionisti di dati di terze parti.
- <span class="pg-green">:material-account-search: Esposizione pubblica</span> - Limitare le informazioni che ti riguardano accessibili online ai motori di ricerca o pubblico in generale.
- <span class="pg-blue-gray">:material-close-outline: Censura</span> - Aggirare le censure o evitare di essere censurati a propria volta quando si comunica online.

Alcune di queste minacce possono essere più importanti per te di altre, a seconda delle tue specifiche preoccupazioni. Per esempio, uno sviluppatore con accesso a dati critici o di valore potrebbe essere particolarmente preoccupato degli <span class="pg-red">:material-target-account: attacchi mirati</span>, ma probabilmente vuole anche proteggere i propri dati personali dalla raccolta di programmi di <span class="pg-blue">:material-eye-outline: sorveglianza di massa</span>. Allo stesso modo, molte persone potrebbero essere preoccupate principalmente dell' <span class="pg-green">:material-account-search: esposizione pubblica</span> dei propri dati personali, ma dovrebbero comunque stare attenti ai problemi legati alla sicurezza, come gli <span class="pg-orange">:material-bug-outline: attacchi passivi</span>- come malware che colpiscono i loro dispositivi.

## Anonimato vs. Privacy

<span class="pg-purple">:material-incognito: Anonimato</span>

L'anonimato viene spesso confuso con la privacy, ma si tratta di concetti distinti. Mentre la privacy è un insieme di scelte che si fanno su come i propri dati vengono utilizzati e condivisi, l'anonimato è la completa dissociazione delle proprie attività online dalla propria identità reale.

Gli informatori e i giornalisti, ad esempio, possono avere un modello di minaccia molto più estremo che richiede il totale anonimato. Questo non significa solo nascondere ciò che fanno, i dati che possiedono e non farsi hackerare da malintenzionati o governi, ma anche nascondere completamente chi sono. Spesso sacrificano qualsiasi tipo di comodità se ciò significa proteggere il loro anonimato, la loro privacy o la loro sicurezza, perché la loro vita potrebbe dipendere da questo. La maggior parte delle persone non ha bisogno di andare così lontano.

## Sicurezza e privacy

<span class="pg-orange">:material-bug-outline: Attacchi passivi</span>

Sicurezza e privacy vengono spesso confuse, perché per ottenere una parvenza di privacy è necessaria la sicurezza: L'utilizzo di strumenti, anche se progettati per essere privati, è inutile se possono essere facilmente sfruttati da aggressori che in seguito renderanno pubblici i vostri dati. Tuttavia, non è necessariamente vero il contrario: il servizio più sicuro al mondo *non è necessariamente* privato. L'esempio migliore è quello di affidare i dati a Google che, date le sue dimensioni, ha avuto pochi incidenti di sicurezza grazie all'impiego di esperti di sicurezza leader del settore per proteggere la propria infrastruttura. Anche se Google offre servizi molto sicuri, pochissime persone considererebbero i propri dati privati nei prodotti gratuiti di Google per i consumatori (Gmail, YouTube, ecc.)

Quando si parla di sicurezza delle applicazioni, in genere non sappiamo (e a volte non possiamo) se il software che utilizziamo è dannoso o se un giorno potrebbe diventarlo. Anche con gli sviluppatori più affidabili, in genere non c'è garanzia che il loro software non presenti una grave vulnerabilità che potrebbe essere sfruttata in seguito.

Per ridurre al minimo i danni che un software dannoso *potrebbe* arrecare, è necessario utilizzare la sicurezza per compartimentazione. Ad esempio, si potrebbe utilizzare computer diversi per lavori diversi, macchine virtuali per separare gruppi diversi di applicazioni correlate o un sistema operativo sicuro con una forte attenzione al sandboxing delle applicazioni e al controllo obbligatorio degli accessi.

!!! suggerimento

    I sistemi operativi mobile hanno in genere un sandboxing delle applicazioni migliore rispetto ai sistemi operativi desktop: Le applicazioni non possono ottenere l'accesso root e richiedono l'autorizzazione per accedere alle risorse di sistema.
    
    I sistemi operativi desktop sono generalmente in ritardo per quanto riguarda una corretta sandboxing. ChromeOS ha funzionalità di sandboxing simili a quelle di Android e macOS ha un controllo completo dei permessi di sistema (e gli sviluppatori possono optare per il sandboxing per le applicazioni). Tuttavia, questi sistemi operativi trasmettono informazioni di identificazione ai rispettivi OEM. Linux tende a non fornire informazioni ai fornitori di sistemi, ma ha una scarsa protezione contro gli exploit e le applicazioni dannose. Questo problema può essere in qualche modo mitigato con distribuzioni specializzate che fanno un uso significativo di macchine virtuali o container, come [Qubes OS](../../desktop/#qubes-os).

<span class="pg-red">:material-target-account: Attacchi mirati</span>

Gli attacchi mirati contro una persona specifica sono più problematici da gestire. Gli attacchi più comuni includono l'invio di documenti dannosi via e-mail, lo sfruttamento di vulnerabilità (ad esempio nei browser e nei sistemi operativi) e gli attacchi fisici. Se questo è un problema per voi, dovreste impiegare strategie di mitigazione delle minacce più avanzate.

!!! suggerimento

    Per loro natura, i **web browser**, i **client di posta elettronica** e le **applicazioni per ufficio** eseguono tipicamente codice non attendibile, inviato da terzi. L'esecuzione di più macchine virtuali, per separare applicazioni come queste dal sistema host e da ogni altra, è una tecnica che si può utilizzare per ridurre la possibilità che un exploit in queste applicazioni comprometta il resto del sistema. Ad esempio, tecnologie come Qubes OS o Microsoft Defender Application Guard su Windows offrono metodi pratici per farlo.

Se si temono **attacchi fisici** si dovrebbe utilizzare un sistema operativo con un'implementazione di avvio sicuro verificato, come Android, iOS, macOS o [Windows (con TPM)](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process). È inoltre necessario assicurarsi che l'unità sia crittografata e che il sistema operativo utilizzi un TPM o un Secure [Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1) o [Element](https://developers.google.com/android/security/android-ready-se) per limitare i tentativi di immissione della passphrase di crittografia. Dovreste evitare di condividere il vostro computer con persone di cui non vi fidate, perché la maggior parte dei sistemi operativi desktop non cripta i dati separatamente per ogni utente.

## Privacy da parte dei Service providers

<span class="pg-teal">:material-server-network: Service Provides</span>

Viviamo in un mondo in cui quasi tutto è collegato a Internet. I nostri messaggi "privati", le e-mail e le interazioni sui social sono in genere archiviati su un server, da qualche parte. In genere, quando si invia un messaggio a qualcuno, questo viene memorizzato su un server e quando l'amico vuole leggerlo il server glielo mostra.

Il problema evidente è che il fornitore di servizi (o un hacker che abbia compromesso il server) può accedere alle vostre conversazioni quando e come vuole, senza che voi ve ne accorgiate. Questo vale per molti servizi comuni, come la messaggistica SMS, Telegram e Discord.

Fortunatamente, E2EE può alleviare questo problema crittografando le comunicazioni tra l'utente e i destinatari desiderati prima ancora che vengano inviate al server. La riservatezza dei messaggi è garantita, a patto che il fornitore del servizio non abbia accesso alle chiavi private di entrambe le parti.

!!! note "Nota sulla crittografia Web-based".

    In pratica, l'efficacia delle diverse implementazioni E2EE varia. Le applicazioni, come [Signal](../real-time-communication.md#signal), vengono eseguite in modo nativo sul dispositivo e ogni copia dell'applicazione è la stessa in tutte le installazioni. Se il fornitore di servizi introducesse una [backdoor](https://en.wikipedia.org/wiki/Backdoor_(computing)) nella propria applicazione - nel tentativo di rubare le chiavi private - potrebbe in seguito essere individuato con il [reverse engineering] (https://en.wikipedia.org/wiki/Reverse_engineering).
    
    D'altro canto, le implementazioni E2EE web-based, come la webmail di Proton Mail o il *Web Vault* di Bitwarden, si affidano al server che serve dinamicamente il codice JavaScript al browser per gestire la crittografia. Un server malintenzionato può prendere di mira l'utente e inviargli del codice JavaScript maligno per rubare la sua chiave di crittografia (e sarebbe estremamente difficile accorgersene). Poiché il server può scegliere di servire diversi web-clients a persone diverse - anche se ci si accorge dell'attacco - sarebbe incredibilmente difficile dimostrare la colpevolezza del provider.
    
    Pertanto, quando possibile, si dovrebbero utilizzare le applicazioni native rispetto ai web-client.

Anche con E2EE, i service provider possono comunque tracciare un profilo dell'utente in base ai **metadati**, che in genere non sono protetti. Anche se il fornitore di servizi non può leggere i messaggi, può comunque osservare cose importanti, come le persone con cui si parla, la frequenza dei messaggi e i momenti in cui si è tipicamente attivi. La protezione dei metadati è piuttosto rara e, se rientra nel vostro modello di minaccia [](threat-modeling.md), dovreste prestare molta attenzione alla documentazione tecnica del software che state utilizzando per verificare se esiste una minimizzazione o una protezione dei metadati.

## Programmi di sorveglianza di massa

<span class="pg-blue">:material-eye-outline: Sorveglianza di massa</span>

La sorveglianza di massa consiste nello sforzo di monitorare il "comportamento, molte attività o informazioni" di un'intera popolazione (o di una frazione sostanziale di essa).[^1] Spesso si riferisce a programmi governativi, come quelli [rivelati da Edward Snowden nel 2013](https://en.wikipedia.org/wiki/Global_surveillance_disclosures_(2013%E2%80%93present)). Tuttavia, può essere svolta anche da aziende, per conto di agenzie governative o di propria iniziativa.

!!! abstract "Atlas of Surveillance"

    Se vuoi saperne di più sui metodi di sorveglianza e su come vengono attuati nella tua città, puoi anche dare un'occhiata all'[Atlas of Surveillance](https://atlasofsurveillance.org/) della [Electronic Frontier Foundation](https://www.eff.org/).
    
    In Francia è possibile consultare il [sito web Technolopolice](https://technopolice.fr/villes/) gestito dall'associazione no-profit La Quadrature du Net.

I governi spesso giustificano i programmi di sorveglianza di massa come mezzi necessari per combattere il terrorismo e prevenire il crimine. Tuttavia, in violazione dei diritti umani, viene spesso utilizzata per colpire in modo sproporzionato gruppi di minoranza e dissidenti politici, tra gli altri.

!!! quote "ACLU: [*The Privacy Lesson of 9/11: Mass Surveillance is Not the Way Forward*](https://www.aclu.org/news/national-security/the-privacy-lesson-of-9-11-mass-surveillance-is-not-the-way-forward)"

    Di fronte alle [rivelazioni di Edward Snowden su programmi governativi come [PRISM](https://en.wikipedia.org/wiki/PRISM) e [Upstream](https://en.wikipedia.org/wiki/Upstream_collection)], i funzionari dell'intelligence hanno anche ammesso che l'NSA ha raccolto segretamente per anni i dati relativi alle telefonate di quasi tutti gli americani: chi chiama chi, quando vengono effettuate le chiamate e quanto durano. Questo tipo di informazioni, accumulate dall'NSA giorno dopo giorno, può rivelare dettagli incredibilmente sensibili sulla vita e sulle associazioni delle persone, come ad esempio se hanno chiamato un pastore, un fornitore di aborti, un consulente per le dipendenze o una linea diretta per i suicidi.

Nonostante la crescente sorveglianza di massa negli Stati Uniti, il governo ha riscontrato che i programmi di sorveglianza di massa, come la Sezione 215, hanno avuto "poco valore unico" per quanto riguarda l'arresto di crimini reali o di complotti terroristici, con sforzi che in gran parte duplicano i programmi di sorveglianza mirata dell'FBI.[^2]

Online è possibile essere rintracciati con diversi metodi:

- Il tuo indirizzo IP
- Cookies del browser
- I dati che invii ai siti web
- L'impronta digitale del browser o del dispositivo
- Correlazione tramite il metodo di pagamento

\[Questo elenco non è esaustivo].

Se sei preoccupato per i programmi di sorveglianza di massa, puoi utilizzare strategie come compartimentare le tue identità online, confonderti con altri utenti o, quando possibile, semplicemente evitare di fornire informazioni identificative.

<span class="pg-brown">:material-account-cash: Capitalismo di sorveglianza</span>

> Il capitalismo della sorveglianza è un sistema economico incentrato sulla raccolta e la commercializzazione dei dati personali che ha come obiettivo principale il profitto.[^3]

Per molte persone, il tracciamento e la sorveglianza da parte di aziende private sono una preoccupazione crescente. Le reti pubblicitarie pervasive, come quelle gestite da Google e Facebook, si estendono su Internet ben oltre i siti che controllano, tracciando le vostre azioni lungo il percorso. L'utilizzo di strumenti come i blocchi dei contenuti per limitare le richieste di rete ai loro server e la lettura delle politiche sulla privacy dei servizi utilizzati possono aiutare a evitare molti avversari di base (anche se non possono impedire completamente il tracciamento).[^4]

Inoltre, anche le aziende al di fuori del settore *AdTech* o del tracking possono condividere le informazioni dell'utente con [intermediari di dati](https://en.wikipedia.org/wiki/Information_broker) (come Cambridge Analytica, Experian o Datalogix) o altre parti. Non potete pensare automaticamente che i vostri dati siano al sicuro solo perché il servizio che state utilizzando non rientra nel tipico modello di business AdTech o di tracciamento. La protezione più efficace contro la raccolta di dati aziendali consiste nel criptare o offuscare i vostri dati ogni volta che è possibile, rendendo difficile per i diversi fornitori correlare i dati tra loro e costruire un profilo su di voi.

## Limitare l'esposizione al pubblico

<span class="pg-green">:material-account-search: Esposizione pubblica</span>

Il modo migliore per mantenere i dati privati è semplicemente non renderli pubblici. Eliminare le informazioni indesiderate che si trovano online è uno dei primi passi da fare per recuperare la propria privacy.

- [Visualizza la nostra guida sull'eliminazione dell'account :material-arrow-right-drop-circle:](account-deletion.md)

Sui siti in cui si condividono informazioni, è molto importante controllare le impostazioni sulla privacy del proprio account per limitare la diffusione dei dati. Ad esempio, attivate la "modalità privata" sui vostri account, se ne avete la possibilità: Questo assicura che il vostro account non venga indicizzato dai motori di ricerca e che non possa essere visualizzato senza il vostro permesso.

Se avete già inviato le vostre informazioni reali a siti che non dovrebbero averle, prendete in considerazione l'utilizzo di tattiche di disinformazione, come l'invio di informazioni fittizie relative a quell'identità online. In questo modo le informazioni reali sono indistinguibili da quelle false.

## Aggirare la censura

<span class="pg-blue-gray">:material-close-outline: Censura</span>

La censura online può essere attuata (in varia misura) da attori quali governi totalitari, amministratori di rete e service provider. Questi sforzi per controllare la comunicazione e limitare l'accesso alle informazioni saranno sempre incompatibili con il diritto umano alla libertà di espressione.[^5]

La censura sulle piattaforme aziendali è sempre più comune, in quanto piattaforme come Twitter e Facebook cedono alle richieste del pubblico, alle pressioni del mercato e a quelle delle agenzie governative. Le pressioni governative possono essere richieste occulte alle aziende, come la Casa Bianca [che chiede la rimozione](https://www.nytimes.com/2012/09/17/technology/on-the-web-a-fine-line-on-free-speech-across-globe.html) di un video provocatorio su YouTube, o palesi, come il governo cinese che impone alle aziende di aderire a un rigido regime di censura.

Le persone preoccupate dalla minaccia della censura possono utilizzare tecnologie come [Tor](../advanced/tor-overview.md) per aggirarla e sostenere piattaforme di comunicazione resistenti alla censura come [Matrix](../real-time-communication.md#element), che non hanno un'autorità centralizzata che può chiudere gli account arbitrariamente.

!!! suggerimento

    Se eludere la censura in sé può essere facile, nascondere il fatto che lo si sta facendo può essere molto problematico.
    
    Dovete considerare quali aspetti della rete possono essere osservati dall'avversario e se avete la possibilità di negare plausibilmente le vostre azioni. Ad esempio, l'utilizzo di [DNS criptato](../avanzato/dns-overview.md#che cos'è-encrypted-dns) può aiutare a bypassare i sistemi di censura rudimentali basati sul DNS, ma non può nascondere veramente ciò che si visita al proprio ISP. Una VPN o Tor può aiutare a nascondere agli amministratori di rete ciò che si sta visitando, ma non può nascondere il fatto che si sta usando quella rete. I trasporti collegabili (come Obfs4proxy, Meek o Shadowsocks) possono aiutarvi a eludere i firewall che bloccano i comuni protocolli VPN o Tor, ma i vostri tentativi di elusione possono comunque essere individuati con metodi come il probing o la [deep packet inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection).

Dovete sempre considerare i rischi del tentativo di aggirare la censura, le potenziali conseguenze e quanto sofisticato possa essere il vostro avversario. Dovete essere cauti nella scelta del software e avere un piano di backup nel caso in cui veniate scoperti.

[^1]: Wikipedia: [*Mass Surveillance*](https://en.wikipedia.org/wiki/Mass_surveillance) and [*Surveillance*](https://en.wikipedia.org/wiki/Surveillance).
[^2]: United States Privacy and Civil Liberties Oversight Board: [*Report on the Telephone Records Program Conducted under Section 215*](https://documents.pclob.gov/prod/Documents/OversightReport/ec542143-1079-424a-84b3-acc354698560/215-Report_on_the_Telephone_Records_Program.pdf)
[^3]: Wikipedia: [*Surveillance capitalism*](https://en.wikipedia.org/wiki/Surveillance_capitalism)
[^4]: "[Enumerating badness](https://www.ranum.com/security/computer_security/editorials/dumb/)" (or, "listing all the bad things that we know about"), as many adblockers and antivirus programs do, fails to adequately protect you from new and unknown threats because they have not yet been added to the filter list. You should also employ other mitigation techniques.
[^5]: United Nations: [*Universal Declaration of Human Rights*](https://www.un.org/en/about-us/universal-declaration-of-human-rights).

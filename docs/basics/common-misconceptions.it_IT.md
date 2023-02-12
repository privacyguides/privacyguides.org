---
title: "I malintesi più comuni"
icon: 'material/robot-confused'
---

## "Il software open-source è sempre sicuro" o "il software proprietario è più sicuro"

Questi miti derivano da una serie di pregiudizi, ma la disponibilità del codice sorgente e le modalità di licenza del software non influiscono in alcun modo sulla sua sicurezza. ==Il software open-source ha il *potenziale* di essere più sicuro del software proprietario, ma non c'è alcuna garanzia che sia così.== Quando si valuta il software, è necessario esaminare la reputazione e la sicurezza di ogni strumento su base individuale.

Il software open-source *può* essere ispezionato da terzi e spesso è più trasparente sulle potenziali vulnerabilità rispetto alle controparti proprietarie. Permette inoltre di esaminare il codice e di disabilitare qualsiasi funzionalità sospetta. Tuttavia, *a meno che non lo si faccia*, non c'è alcuna garanzia che il codice sia mai stato valutato, soprattutto nei progetti software più piccoli. Il processo di sviluppo aperto è stato talvolta sfruttato per introdurre nuove vulnerabilità anche in progetti di grandi dimensioni.[^1]

D'altra parte, il software proprietario è meno trasparente, ma ciò non significa che non sia sicuro. I grandi progetti di software proprietario possono essere controllati internamente e da agenzie di terze parti, e i ricercatori di sicurezza indipendenti possono ancora trovare vulnerabilità con tecniche come il reverse engineering.

Per evitare decisioni distorte, è *fondamentale* valutare gli standard di privacy e sicurezza del software che utilizzi.

## "Spostare la fiducia può aumentare la privacy"

Si parla spesso di "spostamento della fiducia" quando si parla di soluzioni come le VPN (che spostano la fiducia riposta nel proprio ISP al fornitore di VPN). Sebbene queste proteggano i vostri dati di navigazione dal vostro ISP *in particolare*, il fornitore di VPN che scegli ha comunque accesso ai tuoi dati di navigazione: i tuoi dati non sono completamente protetti da tutte le parti. Ciò implica che

1. è necessario prestare attenzione quando si sceglie un fornitore a cui affidarsi;
2. è comunque necessario utilizzare altre tecniche, come E2EE, per proteggere completamente i dati. Diffidare di un fornitore per affidarsi a un altro non significa mettere al sicuro i propri dati.

## "Le soluzioni incentrate sulla privacy sono intrinsecamente affidabili"

Concentrarsi esclusivamente sulle politiche sulla privacy e sul marketing di uno strumento o di un fornitore può indurti a ignorare i suoi punti deboli. Quando si cerca una soluzione più privata, è necessario determinare il problema di fondo e trovare soluzioni tecniche per risolverlo. Ad esempio, è meglio evitare Google Drive, che dà a Google accesso a tutti i tuoi dati. Il problema di fondo in questo caso è la mancanza di E2EE, quindi è necessario assicurarsi che il fornitore a cui si passa implementi effettivamente l'E2EE, oppure utilizzare uno strumento (come [Cryptomator](../encryption.md#cryptomator-cloud)) che fornisce l'E2EE a qualsiasi fornitore di archiviazione in cloud. Passare a un fornitore "finalizzato alla privacy" (che non implementa l'E2EE) non risolve il problema: sposta solo la fiducia da Google a quel fornitore.

Le politiche sulla privacy e le pratiche commerciali dei fornitori scelti sono molto importanti, ma devono essere considerate secondarie rispetto alle garanzie tecniche della tua privacy: non si dovrebbe trasferire la fiducia a un altro fornitore quando la fiducia in un fornitore non è affatto un requisito.

## "Complicato è meglio"

Spesso si vedono descrivere modelli di minaccia per la privacy eccessivamente complessi. Spesso queste soluzioni includono problemi come l'uso di molteplici account di posta elettronica o di configurazioni complicate con molte parti mobili e condizioni. Le risposte sono solitamente risposte a "qual è il modo migliore per fare *X*?"

Trovare la soluzione "migliore" per te non significa necessariamente cercare una soluzione infallibile con decine di condizioni: queste soluzioni sono spesso difficili da gestire in modo realistico. Come abbiamo detto in precedenza, la sicurezza spesso va a scapito della comodità. Di seguito vi forniamo alcuni suggerimenti:

1. ==le azioni devono servire a uno scopo particolare:== pensa a come fare ciò che desideri con il minor numero di azioni;
2. ==eliminare i punti di fallimento umani:== Falliamo, ci stanchiamo e dimentichiamo le cose. Per mantenere la sicurezza, evita di affidarti a condizioni e processi manuali che dovi ricordare;
3. ==Utilizza il giusto livello di protezione per ciò che intendi fare.== Spesso vediamo consigliate le cosiddette soluzioni a prova di forze dell'ordine o di citazione in giudizio. Spesso richiedono conoscenze specialistiche e in genere non sono ciò che la gente vuole. Non ha senso costruire un intricato modello di minaccia per l'anonimato se si può essere facilmente de-anonimizzati da una semplice svista.

Quindi, come potrebbe apparire?

Uno dei modelli di minaccia più chiari è quello in cui le persone *sanno chi sei* e quello in cui non lo sanno. Ci saranno sempre situazioni in cui dovrai dichiara il tuo nome legale e altre in cui non sarà necessario.

1. **Identità nota** - L'identità nota viene utilizzata per le situazioni in cui è necessario dichiarare il proprio nome. Sono molti i documenti legali e i contratti per i quali è richiesta un'identità legale. Si può trattare dell'apertura di un conto bancario, della firma di un contratto di locazione immobiliare, dell'ottenimento di un passaporto, delle dichiarazioni doganali per l'importazione di articoli o di altri rapporti con il governo. Queste cose di solito portano a credenziali come carte di credito, controlli del rating, numeri di conto ed eventuali indirizzi fisici.

    Non suggeriamo di utilizzare una VPN o Tor per queste cose, poiché la vostra identità è già nota attraverso altri mezzi.

    !!! tip
   
        Quando si fanno acquisti online, l'uso di un [punto pacchi automatico](https://it.wikipedia.org/wiki/Paccomat) può aiutare a mantenere privato il proprio indirizzo fisico.

2. **Identità sconosciuta** - Un'identità sconosciuta potrebbe essere uno pseudonimo stabile che si usa regolarmente. Non è anonimo perché non cambia. Se fate parte di una comunità online, potreste voler mantenere un'identità che gli altri conoscono. Questo pseudonimo non è anonimo perché, se monitorato abbastanza a lungo, i dettagli sul proprietario possono rivelare ulteriori informazioni, come il modo in cui scrive, la sua conoscenza generale degli argomenti di interesse, ecc.

    A tal fine è possibile utilizzare una VPN per mascherare il proprio indirizzo IP. Le transazioni finanziarie sono più difficili da mascherare: si può prendere in considerazione l'utilizzo di criptovalute anonime, come [Monero](https://www.getmonero.org/). L'utilizzo del cambio di altcoin può anche aiutare a nascondere l'origine della valuta. In genere, le borse richiedono il completamento del KYC (know your customer) prima di consentire lo scambio di valuta fiat in qualsiasi tipo di criptovaluta. Anche le opzioni di incontro locali possono essere una soluzione; tuttavia, spesso sono più costose e talvolta richiedono anche il KYC.

3. **Identità anonima** - Anche con l'esperienza, le identità anonime sono difficili da mantenere per lunghi periodi di tempo. Dovrebbero essere identità a breve termine e di breve durata che vengono ruotate regolarmente.

    L'uso di Tor può aiutare in questo caso. Vale anche la pena di notare che un maggiore anonimato è possibile attraverso la comunicazione asincrona: la comunicazione in tempo reale è vulnerabile all'analisi dei modelli di digitazione (ad esempio, più di un paragrafo di testo, distribuito su un forum, via e-mail, ecc.)

[^1]: Un esempio notevole è [l'incidente del 2021 in cui i ricercatori dell'Università del Minnesota hanno introdotto tre vulnerabilità nel progetto di sviluppo del kernel Linux](https://cse.umn.edu/cs/linux-incident).

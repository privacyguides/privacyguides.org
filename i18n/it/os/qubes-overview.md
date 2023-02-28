---
title: "Panoramica di Qubes"
icon: pg/qubes-os
---

[**Qubes OS**](../desktop.md#qubes-os) è un sistema operativo che utilizza l'hypervisor [Xen](https://en.wikipedia.org/wiki/Xen) per fornire una forte sicurezza per il desktop computing attraverso macchine virtuali isolate. Ogni macchina virtuale è chiamata *Qube* e si può assegnare a ogni Qube un livello di fiducia in base al suo scopo. Poiché il sistema operativo Qubes garantisce la sicurezza utilizzando l'isolamento e consentendo azioni solo su base individuale, è l'opposto dell'[enumerazione delle minacce](https://www.ranum.com/security/computer_security/editorials/dumb/).

## Come funziona Qubes OS?

Qubes utilizza la [compartimentazione](https://www.qubes-os.org/intro/) per mantenere il sistema sicuro. I Qubes sono creati da modelli, predefiniti per Fedora, Debian e [Whonix](../desktop.md#whonix). Qubes OS consente anche di creare macchine virtuali [monouso](https://www.qubes-os.org/doc/how-to-use-disposables/).

![Architettura Qubes](../assets/img/qubes/qubes-trust-level-architecture.png)
<figcaption>Architettura di Qubes, da "What is Qubes OS Introduction"</figcaption>

Ogni applicazione Qubes ha un [bordo colorato](https://www.qubes-os.org/screenshots/) che può aiutare a tenere traccia della macchina virtuale in cui è in esecuzione. You could, for example, use a specific color for your banking browser, while using a different color for a general untrusted browser.

![Bordo colorato](../assets/img/qubes/r4.0-xfce-three-domains-at-work.png)
<figcaption>Qubes window borders, Credit: Qubes Screenshots</figcaption>

## Perché dovrei usare Qubes?

Qubes OS is useful if your [threat model](../basics/threat-modeling.md) requires strong compartmentalization and security, such as if you think you'll be opening untrusted files from untrusted sources. A typical reason for using Qubes OS is to open documents from unknown sources.

Qubes OS utilizes [Dom0](https://wiki.xenproject.org/wiki/Dom0) Xen VM (i.e., an "AdminVM") for controlling other guest VMs or Qubes on the host OS. Other VMs display individual application windows within Dom0's desktop environment. It allows you to color code windows based on trust levels and run apps that can interact with each other with very granular control.

### Copiare e incollare il testo

Puoi [copiare e incollare il testo](https://www.qubes-os.org/doc/how-to-copy-and-paste-text/) utilizzando `qvm-copy-to-vm` o le istruzioni seguenti:

1. Premi **Ctrl+C** per comunicare alla macchina virtuale in cui ti trovi che vuoi copiare qualcosa.
2. Premi **Ctrl+Shift+C** per comunicare alla macchina virtuale di rendere disponibile questo buffer negli appunti globali.
3. Premi **Ctrl+Shift+V** nella macchina virtuale di destinazione per rendere disponibili gli appunti globali.
4. Premi **Ctrl+V** nella macchina virtuale di destinazione per incollare il contenuto nel buffer.

### Scambio di file

Per copiare e incollare file e directory (cartelle) da una macchina virtuale all'altra, si può usare l'opzione **Copy to Other AppVM...** o **Move to Other AppVM...**. La differenza è che l'opzione **Move** elimina il file originale. Either option will protect your clipboard from being leaked to any other Qubes. This is more secure than air-gapped file transfer because an air-gapped computer will still be forced to parse partitions or file systems. That is not required with the inter-qube copy system.

??? info "AppVMs or qubes do not have their own file systems"

    You can [copy and move files](https://www.qubes-os.org/doc/how-to-copy-and-move-files/) between Qubes. When doing so the changes aren't immediately made and can be easily undone in case of an accident.

### Inter-VM Interactions

The [qrexec framework](https://www.qubes-os.org/doc/qrexec/) is a core part of Qubes which allows virtual machine communication between domains. It is built on top of the Xen library *vchan*, which facilitates [isolation through policies](https://www.qubes-os.org/news/2020/06/22/new-qrexec-policy-system/).

## Risorse aggiuntive

Per ulteriori informazioni si consiglia di consultare le ampie pagine di documentazione di Qubes OS presenti sul [sito web di Qubes OS](https://www.qubes-os.org/doc/). Le copie offline possono essere scaricate dal [repository della documentazione](https://github.com/QubesOS/qubes-doc) di Qubes OS.

- Open Technology Fund: [*Arguably the world's most secure operating system (Probabilmente il sistema operativo più sicuro al mondo)*](https://www.opentech.fund/news/qubes-os-arguably-the-worlds-most-secure-operating-system-motherboard/)
- J. Rutkowska: [*Software compartmentalization vs. physical separation (Compartimentazione del software vs. separazione fisica)*](https://invisiblethingslab.com/resources/2014/Software_compartmentalization_vs_physical_separation.pdf)
- J. Rutkowska: [*Partitioning my digital life into security domains (Suddividere la mia vita digitale in domini di sicurezza)*](https://blog.invisiblethings.org/2011/03/13/partitioning-my-digital-life-into.html)
- Qubes OS: [*Articoli correlati*](https://www.qubes-os.org/news/categories/#articles)

--8<-- "includes/abbreviations.it.txt"

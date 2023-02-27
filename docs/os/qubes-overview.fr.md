---
title: "Présentation de Qubes"
icon: simple/qubesos
---

[**Qubes OS**](../desktop.md#qubes-os) est un système d'exploitation qui utilise l'hyperviseur [Xen](https://en.wikipedia.org/wiki/Xen) pour fournir une sécurité forte pour l'informatique de bureau par le biais de machines virtuelles isolées. Chaque VM est appelée un *Qube* et vous pouvez attribuer à chaque Qube un niveau de confiance en fonction de son objectif. Étant donné que le système d'exploitation Qubes assure la sécurité en utilisant l'isolation et en n'autorisant des actions qu'au cas par cas, il est à l'opposé de [l'énumération de méchanceté](https://www.ranum.com/security/computer_security/editorials/dumb/).

## Comment fonctionne Qubes OS ?

Qubes utilise la [compartimentation](https://www.qubes-os.org/intro/) pour assurer la sécurité du système. Les Qubes sont créés à partir de modèles, les valeurs par défaut étant pour Fedora, Debian et [Whonix](../desktop.md#whonix). Qubes OS vous permet également de créer des machines virtuelles à usage unique [jetable](https://www.qubes-os.org/doc/how-to-use-disposables/) .

![Architecture de Qubes](../assets/img/qubes/qubes-trust-level-architecture.png)
<figcaption>Architecture de Qubes, Crédit : Intro de Qu'est-ce que Qubes OS</figcaption>

Chaque application Qubes possède une [bordure colorée](https://www.qubes-os.org/screenshots/) qui peut vous aider à garder une trace de la machine virtuelle dans laquelle elle est exécutée. Vous pouvez, par exemple, utiliser une couleur spécifique pour votre navigateur bancaire, tout en utilisant une couleur différente pour un navigateur général non fiable.

![Bordure colorée](../assets/img/qubes/r4.0-xfce-three-domains-at-work.png)
<figcaption>Bordures de fenêtres de Qubes, Crédit : Captures d'écran Qubes</figcaption>

## Pourquoi devrais-je utiliser Qubes ?

Qubes OS est utile si votre [modèle de menace](../basics/threat-modeling.md) exige une compartimentation et une sécurité fortes, par exemple si vous pensez ouvrir des fichiers non fiables provenant de sources non fiables. Une raison typique d'utiliser Qubes OS est d'ouvrir des documents provenant de sources inconnues.

Qubes OS utilise la VM Xen [Dom0](https://wiki.xenproject.org/wiki/Dom0) (c'est-à-dire une "AdminVM") pour contrôler d'autres VM invitées ou Qubes sur l'OS hôte. Les autres VMs affichent des fenêtres d'applications individuelles dans l'environnement de bureau de Dom0. Cela vous permet d'attribuer un code de couleur aux fenêtres en fonction des niveaux de confiance et d'exécuter des applications qui peuvent interagir les unes avec les autres avec un contrôle très granulaire.

### Copier et coller du texte

Vous pouvez [copier et coller du texte](https://www.qubes-os.org/doc/how-to-copy-and-paste-text/) en utilisant `qvm-copy-to-vm` ou les instructions ci-dessous :

1. Appuyez sur **Ctrl+C** pour indiquer à la VM dans laquelle vous vous trouvez que vous souhaitez copier quelque chose.
2. Appuyez sur **Ctrl+Maj+C** pour dire à la VM de rendre ce tampon disponible au presse-papiers global.
3. Appuyez sur **Ctrl+Shift+V** dans la VM de destination pour rendre le presse-papiers global disponible.
4. Appuyez sur **Ctrl+V** dans la VM de destination pour coller le contenu dans le tampon.

### Échange de fichiers

Pour copier et coller des fichiers et des répertoires (dossiers) d'une VM à l'autre, vous pouvez utiliser l'option **Copier vers une autre AppVM...** ou **Déplacer vers une autre AppVM...**. La différence est que l'option **Déplacer** supprime le fichier d'origine. L'une ou l'autre de ces options protégera votre presse-papiers contre les fuites vers d'autres Qubes. C'est plus sûr que le transfert de fichiers par ordinateur non connectés car un ordinateur sera toujours obligé d'analyser les partitions ou les systèmes de fichiers. Cela n'est pas nécessaire avec le système de copie inter-qube.

??? info "Les AppVMs ou les qubes n'ont pas leur propre système de fichiers"

    Vous pouvez [copier et déplacer des fichiers](https://www.qubes-os.org/doc/how-to-copy-and-move-files/) entre les Qubes. Ce faisant, les changements ne sont pas immédiats et peuvent être facilement annulés en cas d'accident.

### Interactions inter-VM

L'[environnement qrexec](https://www.qubes-os.org/doc/qrexec/) est une partie essentielle de Qubes qui permet la communication des machines virtuelles entre les domaines. Il est construit sur la bibliothèque Xen *vchan*, qui facilite [l'isolation de par le biais de politiques](https://www.qubes-os.org/news/2020/06/22/new-qrexec-policy-system/).

## Ressources Supplémentaires

Pour de plus amples informations, nous vous encourageons à consulter les pages de documentation complètes de Qubes OS, situées sur le [site web de Qubes OS](https://www.qubes-os.org/doc/). Des copies hors ligne peuvent être téléchargées à partir du [dépôt de documentationde](https://github.com/QubesOS/qubes-doc) Qubes OS.

- Open Technology Fund : [*Sans doute le système d'exploitation le plus sûr au monde*](https://www.opentech.fund/news/qubes-os-arguably-the-worlds-most-secure-operating-system-motherboard/)
- J. Rutkowska : [*Compartimentage logiciel vs. séparation physique*](https://invisiblethingslab.com/resources/2014/Software_compartmentalization_vs_physical_separation.pdf)
- J. Rutkowska : [*Partitionnement de ma vie numérique en domaines de sécurité*](https://blog.invisiblethings.org/2011/03/13/partitioning-my-digital-life-into.html)
- Qubes OS : [*Articles connexes*](https://www.qubes-os.org/news/categories/#articles)

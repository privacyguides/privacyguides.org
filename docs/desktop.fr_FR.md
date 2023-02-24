---
title: "Bureau/PC"
icon: simple/linux
---

Les distributions Linux sont généralement recommandées pour la protection de la vie privée et la liberté logicielle. Si vous n'utilisez pas encore Linux, vous trouverez ci-dessous quelques distributions que nous vous suggérons d'essayer, ainsi que des conseils généraux d'amélioration de la sécurité et de la confidentialité qui s'appliquent à de nombreuses distributions Linux.

- [Vue d'ensemble de Linux :material-arrow-right-drop-circle:](os/linux-overview.md)

## Distributions Traditionnelles

### Station de Travail Fedora

!!! recommendation

    ![Logo Fedora](assets/img/linux-desktop/fedora-workstation.svg){ align=right }
    
    **Fedora Workstation** est notre distribution recommandée pour les personnes débutant sous Linux. Fedora adopte généralement les nouvelles technologies avant les autres distributions, par exemple, [Wayland](https://wayland.freedesktop.org/), [PipeWire](https://pipewire.org), et bientôt, [FS-Verity](https://fedoraproject.org/wiki/Changes/FsVerityRPM). Ces nouvelles technologies s'accompagnent souvent d'améliorations générales en matière de sécurité, de vie privée et d'ergonomie.
    
    [:octicons-home-16: Page d'accueil](https://getfedora.org/fr/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.fedoraproject.org/fr/docs/){ .card-link title=Documentation}
    [:octicons-heart-16:](https://whatcanidoforfedora.org/){ .card-link title=Contribuer }

Fedora a un cycle de publication semi-continu. Si certains paquets comme [GNOME](https://www.gnome.org) sont gelés jusqu'à la prochaine version de Fedora, la plupart des paquets (y compris le noyau) sont mis à jour fréquemment tout au long de la durée de vie de la version. Chaque version de Fedora est supportée pendant un an, avec une nouvelle version publiée tous les 6 mois.

### openSUSE Tumbleweed

!!! recommendation

    ![logo openSUSE Tumbleweed](assets/img/linux-desktop/opensuse-tumbleweed.svg){ align=right }
    
    **openSUSE Tumbleweed** est une distribution stable à publication continue.
    
    openSUSE Tumbleweed dispose d'un système de [mise à jour transactionnelle](https://kubic.opensuse.org/blog/2018-04-04-transactionalupdates/) qui utilise [Btrfs](https://en.wikipedia.org/wiki/Btrfs) et [Snapper](https://en.opensuse.org/openSUSE:Snapper_Tutorial) pour s'assurer que les livraisons peuvent être annulées en cas de problème.
    
    [:octicons-home-16: Page d'accueil](https://get.opensuse.org/fr/tumbleweed/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://doc.opensuse.org/fr/){ .card-link title=Documentation}
    [:octicons-heart-16:](https://shop.opensuse.org/){ .card-link title=Contribuer }

Tumbleweed suit un modèle de publication continu où chaque mise à jour est publiée comme un instantané de la distribution. Lorsque vous mettez votre système à niveau, un nouvel instantané est téléchargé. Chaque livraison est soumise à une série de tests automatisés par [openQA](https://openqa.opensuse.org) afin de garantir sa qualité.

### Arch Linux

!!! recommendation

    ![Logo Arch](assets/img/linux-desktop/archlinux.svg){ align=right }
    
    **Arch Linux** est une distribution légère, de type do-it-yourself (DIY), ce qui signifie que vous n'obtenez que ce que vous installez. Pour plus d'informations, voir leur [FAQ](https://wiki.archlinux.org/title/Frequently_asked_questions_(Fran%C3%A7ais)).
    
    [:octicons-home-16: Page d'accueil](https://archlinux.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.archlinux.org/title/Main_page_(Fran%C3%A7ais)){ .card-link title=Documentation}
    [:octicons-heart-16:](https://archlinux.org/donate/){ .card-link title=Contribuer }

Arch Linux a un cycle de publication continue. Il n'y a pas de calendrier de publication fixe et les paquets sont mis à jour très fréquemment.

S'agissant d'une distribution DIY, vous êtes [censé mettre en place et maintenir](os/linux-overview.md#arch-based-distributions) votre système par vous-même. Arch a un [installateur officiel](https://wiki.archlinux.org/title/Archinstall_(Fran%C3%A7ais)) pour rendre le processus d'installation un peu plus facile.

Une grande partie des [paquets d'Arch Linux](https://reproducible.archlinux.org) sont [reproductibles](https://reproducible-builds.org).

## Distributions Immuables

### Fedora Silverblue

!!! recommendation

    ![Logo Fedora Silverblue](assets/img/linux-desktop/fedora-silverblue.svg){ align=right }
    
    **Fedora Silverblue** et **Fedora Kinoite** sont des variantes immuables de Fedora qui mettent l'accent sur les flux de travail en conteneur. Silverblue est livré avec l'environnement de bureau [GNOME](https://www.gnome.org/) tandis que Kinoite est livré avec [KDE](https://kde.org/fr/). Silverblue et Kinoite suivent le même calendrier de publication que Fedora Workstation, bénéficiant des mêmes mises à jour rapides et restant très proches de l'original.
    
    [:octicons-home-16: Page d'accueil](https://silverblue.fedoraproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.fedoraproject.org/fr/fedora-silverblue/){ .card-link title=Documentation}
    [:octicons-heart-16:](https://whatcanidoforfedora.org/){ .card-link title=Contribuer }

Silverblue (et Kinoite) diffèrent de Fedora Workstation car ils remplacent le gestionnaire de paquets [DNF](https://docs.fedoraproject.org/fr/quick-docs/dnf/) par une alternative beaucoup plus avancée appelée [`rpm-ostree`](https://docs.fedoraproject.org/fr/fedora/rawhide/system-administrators-guide/package-management/rpm-ostree/). Le gestionnaire de paquets `rpm-ostree` fonctionne en téléchargeant une image de base pour le système, puis en superposant des paquets par-dessus dans un arbre de commit semblable à [git](https://fr.wikipedia.org/wiki/Git). Lorsque le système est mis à jour, une nouvelle image de base est téléchargée et les surcouches seront appliquées à cette nouvelle image.

Une fois la mise à jour terminée, vous redémarrez le système dans le nouveau déploiement. `rpm-ostree` conserve deux déploiements du système afin que vous puissiez facilement revenir en arrière si quelque chose se casse dans le nouveau déploiement. Il est également possible d'épingler plus de déploiements selon les besoins.

[Flatpak](https://www.flatpak.org) est la méthode principale d'installation des paquets sur ces distributions, car `rpm-ostree` n'est destiné qu'à superposer les paquets qui ne peuvent pas rester à l'intérieur d'un conteneur sur l'image de base.

Comme alternative aux Flatpaks, il y a l'option de [Toolbox](https://docs.fedoraproject.org/fr/fedora-silverblue/toolbox/) pour créer des conteneurs [Podman](https://podman.io) avec un répertoire de base partagé avec le système d'exploitation hôte et imiter un environnement Fedora traditionnel, ce qui est une [fonctionnalité utile](https://containertoolbx.org) pour le développeur averti.

### NixOS

!!! recommendation

    ![Logo NixOS](assets/img/linux-desktop/nixos.svg){ align=right }
    
    NixOS est une distribution indépendante basée sur le gestionnaire de paquets Nix avec un accent sur la reproductibilité et la fiabilité.
    
    [:octicons-home-16: Page d'accueil](https://nixos.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://nixos.org/learn.html){ .card-link title=Documentation}
    [:octicons-heart-16:](https://nixos.org/donate.html){ .card-link title=Contribuer }

Le gestionnaire de paquets de NixOS conserve chaque version de chaque paquet dans un dossier différent dans le **magasin Nix**. De ce fait, vous pouvez avoir différentes versions d'un même paquet installé sur votre système. Une fois que le contenu du paquet a été écrit dans le dossier, ce dernier est mis en lecture seule.

NixOS fournit également des mises à jour atomiques ; il télécharge d'abord (ou construit) les paquets et les fichiers pour la nouvelle génération de système et ensuite y bascule. Il y a différentes façons de passer à une nouvelle génération ; vous pouvez dire à NixOS de l'activer après le redémarrage ou vous pouvez basculer sur celle-ci pendant l'exécution. Vous pouvez également *tester* la nouvelle génération en basculant sur celle-ci pendant l'exécution, mais sans la définir comme la génération actuelle du système. Si quelque chose se casse pendant le processus de mise à jour, vous pouvez simplement redémarrer et revenir automatiquement à une version fonctionnelle de votre système.

Nix, le gestionnaire de paquets, utilise un langage purement fonctionnel - qui s'appelle aussi Nix - pour définir les paquets.

[Nixpkgs](https://github.com/nixos/nixpkgs) (la source principale des paquets) sont contenus dans un seul dépôt GitHub. Vous pouvez également définir vos propres paquets dans le même langage, puis les inclure facilement dans votre configuration.

Nix est un gestionnaire de paquets basé sur les sources ; s'il n'y a pas de paquet pré-construit disponible dans le cache binaire, Nix construira simplement le paquet à partir des sources en utilisant sa définition. Il construit chaque paquet dans un environnement *pur* en bac à sable, qui est aussi indépendant que possible du système hôte, ce qui rend les binaires reproductibles.

## Distributions Axées sur l'Anonymat

### Whonix

!!! recommendation

    ![Logo Whonix](assets/img/linux-desktop/whonix.svg){ align=right }
    
    **Whonix** est basé sur [Kicksecure](https://www.whonix.org/wiki/Kicksecure), un fork de Debian axé sur la sécurité. Il vise à assurer la vie privée, la sécurité et l'anonymat sur Internet. Whonix est utilisé de préférence en conjonction avec [Qubes OS](#qubes-os).
    
    [:octicons-home-16: Page d'accueil](https://www.whonix.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://www.whonix.org/wiki/Documentation){ .card-link title=Documentation}
    [:octicons-heart-16:](https://www.whonix.org/wiki/Donate){ .card-link title=Contribuer }

Whonix est conçu pour fonctionner sous la forme de deux machines virtuelles : une "Station de Travail" et une "Passerelle" Tor. Toutes les communications de la station de travail doivent passer par la passerelle Tor, et seront acheminées par le réseau Tor. Cela signifie que même si la "Station de Travail" est compromise par un logiciel malveillant quelconque, la véritable adresse IP reste cachée.

Parmi ses fonctionnalités, citons l'isolation des Flux Tor, [l'anonymisation des frappes de clavier](https://www.whonix.org/wiki/Keystroke_Deanonymization#Kloak), [un swap chiffré](https://github.com/Whonix/swap-file-creator), et un allocateur de mémoire renforcé.

Les futures versions de Whonix incluront probablement [des politiques AppArmor système complètes](https://github.com/Whonix/apparmor-profile-everything) et [un lanceur d'apps bac à sable](https://www.whonix.org/wiki/Sandbox-app-launcher) pour confiner complètement tous les processus sur le système.

Il est préférable d'utiliser Whonix [en conjonction avec Qubes](https://www.whonix.org/wiki/Qubes/Why_use_Qubes_over_other_Virtualizers).

### Tails

!!! recommendation

    ![Logo de Tails](assets/img/linux-desktop/tails.svg){ align=right }
    
    **Tails** est un système d'exploitation autonome basé sur Debian qui fait passer toutes les communications par Tor, et qui peut démarrer sur presque n'importe quel ordinateur à partir d'un DVD, d'une clé USB ou d'une installation sur carte SD. Il utilise [Tor](tor.md) pour préserver la vie privée et l'anonymat tout en contournant la censure, et il ne laisse aucune trace de son passage sur l'ordinateur sur lequel il est utilisé après avoir été éteint.
    
    [:octicons-home-16: Page d'accueil](https://tails.boum.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://tails.boum.org/doc/index.en.html){ .card-link title=Documentation}
    [:octicons-heart-16:](https://tails.boum.org/donate/){ .card-link title=Contribuer }

Tails est excellent pour contrer l'analyse scientifique en raison de son amnésie (ce qui signifie que rien n'est écrit sur le disque) ; cependant, ce n'est pas une distribution renforcée comme Whonix. Il ne dispose pas de nombreuses fonctions d'anonymat et de sécurité comme Whonix et est mis à jour beaucoup moins souvent (seulement une fois toutes les six semaines). Un système Tails compromis par un logiciel malveillant peut potentiellement contourner le proxy transparent et permettre à l'utilisateur d'être désanonymisé.

Tails inclut [uBlock Origin](desktop-browsers.md#ublock-origin) dans le Navigateur Tor par défaut, ce qui peut potentiellement faciliter la tâche des adversaires pour identifier l'empreinte numérique des utilisateurs de Tails. Les machines virtuelles [Whonix](desktop.md#whonix) sont peut-être plus étanches, mais elles ne sont pas amnésiques, ce qui signifie que les données peuvent être récupérées sur votre périphérique de stockage.

Par conception, Tails est censé se réinitialiser complètement après chaque redémarrage. Le [stockage persistant](https://tails.boum.org/doc/first_steps/persistence/index.fr.html) chiffré peut être configuré pour stocker certaines données entre les redémarrages.

## Distributions axées sur la sécurité

### Qubes OS

!!! recommendation

    ![Logo Qubes OS](assets/img/qubes/qubes_os.svg){ align=right }
    
    **Qubes** est un système d'exploitation open-source conçu pour fournir une sécurité forte pour l'informatique de bureau. Qubes est basé sur Xen, le système X Window et Linux, et peut exécuter la plupart des applications Linux et utiliser la plupart des pilotes Linux.
    
    [:octicons-home-16: Page d'accueil](https://www.qubes-os.org/){ .md-button .md-button--primary }
    [:material-arrow-right-drop-circle: Aperçu](os/qubes-overview.md){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://qubesosfasa4zl44o4tws22di6kepyzfeqv3tg4e3ztknltfxqrymdad.onion){ .card-link title="Service onion" }
    [:octicons-eye-16:](https://www.qubes-os.org/privacy/){ .card-link title="Politique de confidentialité" }
    [:octicons-info-16:](https://www.qubes-os.org/doc/){ .card-link title=Documentation }
    [:octicons-code-16:](https://github.com/QubesOS/){ .card-link title="Code source" }
    [:octicons-heart-16:](https://www.qubes-os.org/donate/){ .card-link title=Contribuer }

Qubes OS est un système d'exploitation basé sur Xen destiné à fournir une sécurité forte pour l'informatique de bureau par le biais de machines virtuelles (VMs) sécurisées, également connues sous le nom de *Qubes*.

Le système d'exploitation Qubes OS sécurise l'ordinateur en isolant les sous-systèmes (par exemple, réseau, USB, etc.) et les applications dans des VMs distinctes. Si une partie du système est compromise, l'isolation supplémentaire est susceptible de protéger le reste du système. Pour plus de détails, voir la FAQ de Qubes [](https://www.qubes-os.org/faq/).

## Critères

**Veuillez noter que nous ne sommes affiliés à aucun des projets que nous recommandons.** En plus de [nos critères de base](about/criteria.md), nous avons développé un ensemble d'exigences claires pour nous permettre de fournir des recommandations objectives. Nous vous suggérons de vous familiariser avec cette liste avant de choisir d'utiliser un projet, et de mener vos propres recherches pour vous assurer que c'est le bon choix pour vous.

!!! example "Cette section est récente"

    Nous travaillons à l'établissement de critères définis pour chaque section de notre site, et celles-ci peuvent être sujet à changement. Si vous avez des questions sur nos critères, veuillez [poser la question sur notre forum] (https://discuss.privacyguides.net/latest) et ne supposez pas que nous n'avons pas pris en compte un élément dans nos recommandations s'il ne figure pas dans la liste. De nombreux facteurs sont pris en compte et discutés lorsque nous recommandons un projet, et la documentation de chacun d'entre eux est en cours.

Nos systèmes d'exploitation recommandés :

- Doivent être open-source.
- Doivent recevoir régulièrement des mises à jour des logiciels et du noyau Linux.
- Les distributions Linux doivent prendre en charge [Wayland](os/linux-overview.md#Wayland).
- Doitvent prendre en charge le chiffrement complet du disque pendant l'installation.
- Ne doivent pas geler les mises à jour régulières pendant plus d'un an. Nous [ne recommandons pas](os/linux-overview.md#release-cycle) "Long Term Support" ou les versions "stables" de distro pour une utilisation domestique.
- Doivent prendre en charge une grande variété de matériel.

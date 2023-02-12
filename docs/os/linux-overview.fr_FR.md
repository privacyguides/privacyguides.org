---
title: Présentation de Linux
icon: fontawesome/brands/linux
---

On croit souvent que les logiciels [open-source](https://fr.wikipedia.org/wiki/Open_source) sont intrinsèquement sûrs parce que le code source est disponible. On s'attend à ce que la vérification de la communauté ait lieu régulièrement ; cependant, ce n'est pas toujours [le cas](https://seirdy.one/posts/2022/02/02/floss-security/). Cela dépend d'un certain nombre de facteurs, tels que l'activité du projet, l'expérience du développeur, le niveau de rigueur appliqué aux [revues de code](https://fr.wikipedia.org/wiki/Revue_de_code), et la fréquence de l'attention accordée à certaines parties spécifiques du [codebase](https://fr.wikipedia.org/wiki/Codebase) qui peuvent rester à l'abandon pendant des années.

À l'heure actuelle, les systèmes GNU/Linux de bureau ont certains domaines qui pourraient être améliorés par rapport à leurs homologues propriétaires, par exemple :

- Une chaîne de démarrage vérifiée, telle que le [Démarage Sécurisé d'Apple](https://support.apple.com/guide/security/startup-security-utility-secc7b34e5b5/web) (avec l'[Enclave Sécurisée](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1)), le [Démarrage Vérifié d'Android](https://source.android.com/security/verifiedboot), le [Démarrage vérifié de ChromeOS](https://www.chromium.org/chromium-os/chromiumos-design-docs/security-overview/#verified-boot), ou le processus de démarrage de [Microsoft Windows](https://docs.microsoft.com/fr-fr/windows/security/information-protection/secure-the-windows-10-boot-process) avec le [TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). Ces fonctionnalités et technologies matérielles peuvent toutes contribuer à empêcher une altération persistante par des logiciels malveillants ou des [attaques de personnel de ménage malfaisant](https://en.wikipedia.org/wiki/Evil_Maid_attack)
- Une solution de sandboxing forte, comme celle que l'on trouve dans [macOS](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html), [ChromeOS](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/sandboxing.md), et [Android](https://source.android.com/security/app-sandbox). Les solutions de sandboxing Linux couramment utilisées, telles que [Flatpak](https://docs.flatpak.org/en/latest/sandbox-permissions.html) et [Firejail](https://firejail.wordpress.com/) , ont encore beaucoup de chemin à parcourir
- Forte [atténuation des exploits](https://madaidans-insecurities.github.io/linux.html#exploit-mitigations)

Malgré ces inconvénients, les distributions GNU/Linux de bureau sont excellentes si vous souhaitez :

- Évitez la télémétrie qui accompagne souvent les systèmes d'exploitation propriétaires
- Maintenir [la liberté des logiciels](https://www.gnu.org/philosophy/free-sw.en.html#four-freedoms)
- Disposer de systèmes axés sur la protection de la vie privée tels que [Whonix](https://www.whonix.org) ou [Tails](https://tails.boum.org/)

Notre site web utilise généralement le terme "Linux" pour décrire les distributions GNU/Linux de bureau. Les autres systèmes d'exploitation qui utilisent également le noyau Linux, tels que ChromeOS, Android et Qubes OS, ne sont pas abordés ici.

[Nos recommandations Linux :material-arrow-right-drop-circle:](../desktop.md ""){.md-button}

## Choisir sa distribution

Toutes les distributions Linux ne sont pas créées égales. Bien que notre page de recommandations Linux ne soit pas censée être une source faisant autorité sur la distribution que vous devriez utiliser, il y a quelques éléments que vous devriez garder à l'esprit lors du choix de la distribution à utiliser.

### Cycle de mises à jour

Nous vous recommandons vivement de choisir des distributions qui restent proches des versions stables des logiciels en amont, souvent appelées distributions à publications continues. En effet, les distributions à cycle de publication gelé ne mettent souvent pas à jour les versions des paquets et prennent du retard sur les mises à jour de sécurité.

Pour les distributions gelées telles que [Debian](https://www.debian.org/security/faq#handling), les responsables de paquets sont censés rapporter les correctifs pour corriger les vulnérabilités plutôt que de faire passer le logiciel à la "prochaine version" publiée par le développeur en amont. Certains correctifs de sécurité ne reçoivent [pas du tout](https://arxiv.org/abs/2105.14565) de [CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (en particulier les logiciels moins populaires) et ne sont donc pas intégrés à la distribution avec ce modèle de correctifs. Par conséquent, les corrections de sécurité mineures sont parfois reportées à la prochaine version majeure.

Nous ne pensons pas que retenir les paquets et appliquer des correctifs provisoires soit une bonne idée, car cela s'écarte de la manière dont le développeur aurait pu vouloir que le logiciel fonctionne. [Richard Brown](https://rootco.de/aboutme/) propose une présentation à ce sujet :

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/i8c0mg_mS7U" title="Regular Releases are Wrong, Roll for your life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Mises à jour traditionnelles et atomiques

Traditionnellement, les distributions Linux se mettent à jour en mettant séquentiellement à jour les paquets souhaités. Les mises à jour traditionnelles, telles que celles utilisées dans les distributions basées sur Fedora, Arch Linux et Debian, peuvent être moins fiables si une erreur se produit lors de la mise à jour.

Les distributions à mises à jour atomiques appliquent les mises à jour dans leur intégralité ou pas du tout. En général, les systèmes de mise à jour transactionnelle sont également atomiques.

Un système de mise à jour transactionnelle crée un instantané qui est réalisé avant et après l'application d'une mise à jour. Si une mise à jour échoue à un moment donné (par exemple en raison d'une panne de courant), elle peut facilement être ramenée au "dernier état correct connu."

La méthode de mise à jour atomique est utilisée pour les distributions immuables comme Silverblue, Tumbleweed et NixOS et permet d'atteindre la fiabilité avec ce modèle. [Adam Šamalík](https://twitter.com/adsamalik) a fait une présentation sur le fonctionnement de `rpm-ostree` avec Silverblue :

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-hpV5l-gJnQ" title="Let's try Fedora Silverblue — an immutable desktop OS! - Adam Šamalik" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### "Distributions "axées sur la sécurité

Il y a souvent une certaine confusion entre les distributions "axées sur la sécurité" et les distributions pour les "tests de pénétration". Une recherche rapide de "la distribution Linux la plus sûre" donne souvent des résultats comme Kali Linux, Black Arch et Parrot OS. Ces distributions sont des distributions de tests de pénétration offensifs qui regroupent des outils pour tester d'autres systèmes. Elles n'incluent pas de "sécurité supplémentaire" ni de mesures d'atténuation défensives destinées à une utilisation régulière.

### Distributions basées sur Arch Linux

Les distributions basées sur Arch ne sont pas recommandées pour les débutants en Linux (quelle que soit la distribution) car elles nécessitent une [maintenance régulière du système](https://wiki.archlinux.org/title/System_maintenance). Arch ne dispose pas d'un mécanisme de mise à jour de la distribution pour les choix logiciels sous-jacents. Par conséquent, vous devez rester au courant des tendances actuelles et adopter les technologies au fur et à mesure qu'elles remplacent les anciennes pratiques.

Pour un système sécurisé, vous êtes également censé avoir une connaissance suffisante de Linux pour configurer correctement la sécurité de leur système, par exemple en adoptant un système de [contrôle d'accès obligatoire](https://en.wikipedia.org/wiki/Mandatory_access_control), en configurant des listes noires de [modules de noyau](https://en.wikipedia.org/wiki/Loadable_kernel_module#Security), en renforçant les paramètres de démarrage, en manipulant les paramètres [sysctl](https://en.wikipedia.org/wiki/Sysctl), et en sachant de quels composants elles ont besoin, comme [Polkit](https://en.wikipedia.org/wiki/Polkit).

Toute personne utilisant l'[Arch User Repository (AUR)](https://wiki.archlinux.org/title/Arch_User_Repository), **doit** être à l'aise pour auditer les PKGBUILDs qu'elle installe à partir de ce service. Les paquets AUR sont des contenus produits par la communauté et ne font l'objet d'aucune vérification. Ils sont donc vulnérables aux attaques de la chaîne d'approvisionnement des logiciels, ce qui s'est d'ailleurs produit [dans le passé](https://www.bleepingcomputer.com/news/security/malware-found-in-arch-linux-aur-package-repository/). AUR doit toujours être utilisé avec parcimonie et il existe souvent de nombreux mauvais conseils sur diverses pages qui incitent les gens à utiliser aveuglément [AUR helpers](https://wiki.archlinux.org/title/AUR_helpers) sans avertissement suffisant. Des avertissements similaires s'appliquent à l'utilisation d'Archives de Paquets Personnels (PPA) de tiers sur les distributions basées sur Debian ou de Projets Communautaires (COPR) sur Fedora.

Si vous avez de l'expérience avec Linux et souhaitez utiliser une distribution basée sur Arch, nous recommandons uniquement Arch Linux, et non ses dérivés. Nous déconseillons spécifiquement ces deux dérivés de Arch :

- **Manjaro**: Cette distribution bloque les mises à jour des paquets pendant 2 semaines pour s'assurer que leurs propres changements ne cassent pas, et non pas pour s'assurer que l'amont est stable. Lorsque des paquets AUR sont utilisés, ils sont souvent construits avec les dernières [bibliothèques](https://en.wikipedia.org/wiki/Library_(computing)) des dépôts d'Arch.
- **Garuda**: Ils utilisent [Chaotic-AUR](https://aur.chaotic.cx/) qui compile automatiquement et aveuglément les paquets de l'AUR. Il n'existe aucun processus de vérification pour s'assurer que les paquets AUR ne souffrent pas d'attaques de la chaîne d'approvisionnement.

### Kicksecure

Bien que nous déconseillions fortement l'utilisation de distributions obsolètes comme Debian, il existe un système d'exploitation basé sur Debian qui a été renforcé pour être beaucoup plus sûr que les distributions Linux habituelles : [Kicksecure](https://www.kicksecure.com/). Kicksecure, en termes très simplifiés, est un ensemble de scripts, de configurations et de paquets qui réduisent considérablement la surface d'attaque de Debian. Il couvre par défaut un grand nombre de recommandations en matière de confidentialité et de durcissement.

### Le noyau Linux-libre et les distributions "libres"

Nous recommandons fortement **de ne pas** utiliser le noyau Linux-libre, car il [supprime des mesures de sécurité et d'atténuation](https://www.phoronix.com/scan.php?page=news_item&px=GNU-Linux-Libre-5.7-Released) et [supprime des avertissements de noyau](https://news.ycombinator.com/item?id=29674846) concernant les microcodes vulnérables pour des raisons idéologiques.

## Recommandations générales

### Chiffrement de disque

La plupart des distributions Linux ont une option dans leur installateur pour activer [LUKS](../encryption.md#linux-unified-key-setup) FDE. Si cette option n'est pas définie au moment de l'installation, vous devrez sauvegarder vos données et réinstaller, car le chiffrement est appliqué après le [partitionnement du disque](https://en.wikipedia.org/wiki/Disk_partitioning), mais avant le formatage des [systèmes de fichiers](https://en.wikipedia.org/wiki/File_system). Nous vous suggérons également d'effacer de façon sécurisée votre dispositif de stockage :

- [Effacement sécurisé des données :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/05/25/secure-data-erasure/)

### Swap

Envisagez l'utilisation de [ZRAM](https://wiki.archlinux.org/title/Swap#zram-generator) ou du [swap chiffré](https://wiki.archlinux.org/title/Dm-crypt/Swap_encryption) au lieu du swap non chiffré pour éviter les problèmes de sécurité potentiels avec des données sensibles poussées vers [l'espace swap](https://en.wikipedia.org/wiki/Memory_paging). Les distributions basées sur Fedora [utilisent ZRAM par défaut](https://fedoraproject.org/wiki/Changes/SwapOnZRAM).

### Wayland

Nous recommandons l'utilisation d'un environnement de bureau prenant en charge le protocole d'affichage [Wayland](https://fr.wikipedia.org/wiki/Wayland) car il a été développé dans [un souci](https://lwn.net/Articles/589147/) de sécurité. Son prédécesseur, [X11](https://fr.wikipedia.org/wiki/X_Window_System), ne prend pas en charge l'isolation de l'interface graphique, ce qui permet à toutes les fenêtres [d'enregistrer l'écran, d'enregistrer et d'injecter des entrées dans d'autres fenêtres](https://blog.invisiblethings.org/2011/04/23/linux-security-circus-on-gui-isolation.html), rendant toute tentative de sandboxing futile. Bien qu'il existe des options pour faire du X11 imbriqué telles que [Xpra](https://en.wikipedia.org/wiki/Xpra) ou [Xephyr](https://en.wikipedia.org/wiki/Xephyr), elles ont souvent des conséquences négatives sur les performances, ne sont pas pratiques à mettre en place et ne sont pas préférables à Wayland.

Heureusement, des environnements courants tels que [GNOME](https://www.gnome.org), [KDE](https://kde.org), et le gestionnaire de fenêtres [Sway](https://swaywm.org) prennent en charge Wayland. Certaines distributions comme Fedora et Tumbleweed l'utilisent par défaut, et d'autres pourraient le faire à l'avenir car X11 est en [mode maintenance limitée](https://www.phoronix.com/scan.php?page=news_item&px=X.Org-Maintenance-Mode-Quickly). Si vous utilisez l'un de ces environnements, il vous suffit de sélectionner la session "Wayland" dans le gestionnaire d'affichage du bureau ([GDM](https://fr.wikipedia.org/wiki/GNOME_Display_Manager), [SDDM](https://en.wikipedia.org/wiki/Simple_Desktop_Display_Manager)).

Nous recommandons **de ne pas** utiliser des environnements de bureau ou des gestionnaires de fenêtres qui ne prennent pas en charge Wayland, comme Cinnamon (par défaut sur Linux Mint), Pantheon (par défaut sur Elementary OS), MATE, Xfce et i3.

### Micrologiciel propriétaire (mises à jour du microcode)

Les distributions Linux telles que celles qui sont [Linux-libre](https://en.wikipedia.org/wiki/Linux-libre) ou DIY (Arch Linux) ne sont pas fournies avec les mises à jour propriétaires [microcode](https://en.wikipedia.org/wiki/Microcode) qui corrigent souvent des vulnérabilités. Voici quelques exemples notables de ces vulnérabilités : [Spectre](https://fr.wikipedia.org/wiki/Spectre_%28vuln%C3%A9rabilit%C3%A9%29), [Meltdown](https://fr.wikipedia.org/wiki/Meltdown_%28vuln%C3%A9rabilit%C3%A9%29), [SSB](https://en.wikipedia.org/wiki/Speculative_Store_Bypass), [Foreshadow](https://en.wikipedia.org/wiki/Foreshadow), [MDS](https://en.wikipedia.org/wiki/Microarchitectural_Data_Sampling), [SWAPGS](https://en.wikipedia.org/wiki/SWAPGS_(security_vulnerability)), et d'autres [vulnérabilités matérielles](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/index.html).

Nous **recommandons vivement** d'installer les mises à jour du microcode, car votre CPU exécute déjà le microcode propriétaire depuis l'usine. Fedora et openSUSE ont tous deux les mises à jour du microcode appliquées par défaut.

## Ajustements de confidentialité

### Adresse MAC aléatoire

De nombreuses distributions Linux de bureau (Fedora, openSUSE, etc.) sont fournies avec [NetworkManager](https://fr.wikipedia.org/wiki/NetworkManager), pour configurer les paramètres Ethernet et Wi-Fi.

Il est possible de [changer aléatoirement](https://fedoramagazine.org/randomize-mac-address-nm/) l'[adresse MAC](https://fr.wikipedia.org/wiki/Adresse_MAC) en utilisant NetworkManager. Cela permet de protéger un peu plus la vie privée sur les réseaux Wi-Fi, car il est plus difficile de suivre des appareils spécifiques sur le réseau auquel vous êtes connecté. Cela ne vous rend [**pas**](https://papers.mathyvanhoef.com/wisec2016.pdf) anonyme.

Nous recommandons de changer le paramètre et mettre **aléatoire** plutôt que **stable**, comme suggéré dans l'[article](https://fedoramagazine.org/randomize-mac-address-nm/).

Si vous utilisez [systemd-networkd](https://en.wikipedia.org/wiki/Systemd#Ancillary_components), vous devrez définir [`MACAddressPolicy=random`](https://www.freedesktop.org/software/systemd/man/systemd.link.html#MACAddressPolicy=) qui activera [RFC 7844 (Profils d'anonymat pour les clients DHCP)](https://www.freedesktop.org/software/systemd/man/systemd.network.html#Anonymize=).

Il n'y a pas beaucoup d'intérêt à rendre aléatoire l'adresse MAC pour les connexions Ethernet car un administrateur système peut vous trouver en regardant le port que vous utilisez sur le [commutateur réseau](https://fr.wikipedia.org/wiki/Commutateur_r%C3%A9seau). Rendre aléatoire les adresses MAC Wi-Fi dépend de la prise en charge par le micrologiciel du Wi-Fi.

### Autres identifiants

Il existe d'autres identifiants de système auxquels vous devez faire attention. Vous devriez y réfléchir pour voir si cela s'applique à votre [modèle de menace](../basics/threat-modeling.md) :

- **Noms d'hôte :** Le nom d'hôte de votre système est partagé avec les réseaux auxquels vous vous connectez. Vous devriez éviter d'inclure des termes d'identification comme votre nom ou votre système d'exploitation dans votre nom d'hôte, et vous en tenir plutôt à des termes génériques ou à des chaînes aléatoires.
- **Noms d'utilisateur :** De même, votre nom d'utilisateur est utilisé de diverses manières dans votre système. Envisagez d'utiliser des termes génériques comme "utilisateur" plutôt que votre nom réel.
- **Identifiant machine :**: Pendant l'installation, un identifiant machine unique est généré et stocké sur votre appareil. Envisagez de [le régler sur un identifiant générique](https://madaidans-insecurities.github.io/guides/linux-hardening.html#machine-id).

### Comptage des systèmes

Le projet Fedora [compte](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting) le nombre de systèmes uniques qui accèdent à ses miroirs en utilisant une variable [`countme`](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting#Detailed_Description) au lieu d'un identifiant unique. Fedora fait cela pour déterminer la charge et fournir de meilleurs serveurs pour les mises à jour si nécessaire.

Cette [option](https://dnf.readthedocs.io/en/latest/conf_ref.html#options-for-both-main-and-repo) est actuellement désactivée par défaut. Nous recommandons d'ajouter `countme=false` à `/etc/dnf/dnf.conf` juste au cas où il serait activé dans le futur. Sur les systèmes qui utilisent `rpm-ostree` tels que Silverblue, l'option countme est désactivée en masquant le compteur [rpm-ostree-countme](https://fedoramagazine.org/getting-better-at-counting-rpm-ostree-based-systems/).

openSUSE utilise également un [identifiant unique](https://en.opensuse.org/openSUSE:Statistics) pour compter les systèmes, qui peut être désactivé en supprimant le fichier `/var/lib/zypp/AnonymousUniqueId`.

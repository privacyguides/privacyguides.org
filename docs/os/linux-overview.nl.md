---
title: Linux Overzicht
icon: fontawesome/brands/linux
---

Vaak wordt aangenomen dat [open-source](https://en.wikipedia.org/wiki/Open-source_software) software inherent veilig is omdat de broncode beschikbaar is. Er wordt verwacht dat er regelmatig communautaire verificatie plaatsvindt; dit is echter niet altijd [het geval](https://seirdy.one/posts/2022/02/02/floss-security/). Het hangt af van een aantal factoren, zoals de activiteit van het project, de ervaring van de ontwikkelaar, de striktheid waarmee [code wordt gereviewd](https://en.wikipedia.org/wiki/Code_review), en hoe vaak aandacht wordt besteed aan specifieke delen van de [codebase](https://en.wikipedia.org/wiki/Codebase) die misschien jarenlang onaangeroerd zijn gebleven.

Op dit moment heeft desktop GNU/Linux enkele gebieden die beter zouden kunnen dan hun propriëtaire tegenhangers, bijv.:

- Een geverifieerde opstartketen, in tegenstelling tot Apple's [Secure Boot](https://support.apple.com/guide/security/startup-security-utility-secc7b34e5b5/web) (met [Secure Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1)), Android's [Verified Boot](https://source.android.com/security/verifiedboot) of Microsoft Windows's [opstartproces](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process) met [TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). Deze voorzieningen en hardwaretechnologieën kunnen allemaal helpen om aanhoudende sabotage door malware of [evil maid attacks te voorkomen](https://en.wikipedia.org/wiki/Evil_Maid_attack)
- Sterke sandboxing-oplossing zoals die welke te vinden is in [macOS](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html), [ChromeOS](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/sandboxing.md), en [Android](https://source.android.com/security/app-sandbox). Veelgebruikte Linux sandboxing oplossingen zoals [Flatpak](https://docs.flatpak.org/en/latest/sandbox-permissions.html) en [Firejail](https://firejail.wordpress.com/) hebben nog een lange weg te gaan
- Sterke [exploit mitigations](https://madaidans-insecurities.github.io/linux.html#exploit-mitigations)

Ondanks deze nadelen zijn desktop GNU/Linux distributies geweldig als je dat wilt:

- Vermijd telemetrie die vaak gepaard gaat met propriëtaire besturingssystemen
- Handhaving van [softwarevrijheid](https://www.gnu.org/philosophy/free-sw.en.html#four-freedoms)
- Hebben speciaal gebouwde systemen zoals [Whonix](https://www.whonix.org) of [Tails](https://tails.boum.org/)

Op onze website wordt de term "Linux" doorgaans gebruikt om desktop GNU/Linux-distributies te beschrijven. Andere besturingssystemen die ook de Linux-kernel gebruiken, zoals ChromeOS, Android en Qubes OS, worden hier niet besproken.

[Onze Linux-aanbevelingen :hero-arrow-circle-right-fill:](../desktop.md ""){.md-button}

## Uw distributie kiezen

Niet alle Linux-distributies zijn gelijk geschapen. Hoewel onze Linux-aanbevelingspagina niet bedoeld is als een gezaghebbende bron over welke distributie je zou moeten gebruiken, zijn er een paar dingen die je in gedachten moet houden bij het kiezen van de distributie die je wilt gebruiken.

### Vrijgave cyclus

Wij raden u ten zeerste aan distributies te kiezen die dicht bij de stabiele upstream software releases blijven, vaak aangeduid als rolling release distributies. Dit komt omdat distributies met een bevroren releasecyclus vaak de pakketversies niet bijwerken en achterlopen op beveiligingsupdates.

Voor bevroren distributies wordt van pakketbeheerders verwacht dat ze patches backporteren om kwetsbaarheden te verhelpen (Debian is zo'n [voorbeeld](https://www.debian.org/security/faq#handling)) in plaats van de software aan te passen aan de "volgende versie" die door de upstream-ontwikkelaar wordt uitgebracht. Sommige beveiligingsfixes [krijgen](https://arxiv.org/abs/2105.14565) helemaal geen [CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (vooral minder populaire software) en komen daarom niet in de distributie met dit patchingmodel. Als gevolg daarvan worden kleine beveiligingsupdates soms uitgesteld tot de volgende grote release.

Wij geloven niet dat het een goed idee is om pakketten tegen te houden en tussentijdse patches toe te passen, aangezien dit afwijkt van de manier waarop de ontwikkelaar de software bedoeld zou kunnen hebben. [Richard Brown](https://rootco.de/aboutme/) heeft hier een presentatie over:

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/i8c0mg_mS7U" title="Regelmatig uitbrengen is verkeerd, Roll voor je leven" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Traditionele vs. Atomische updates

Traditioneel worden Linux distributies bijgewerkt door sequentieel de gewenste pakketten bij te werken. Traditionele updates zoals die gebruikt worden in Fedora, Arch Linux, en Debian gebaseerde distributies kunnen minder betrouwbaar zijn als er een fout optreedt tijdens het updaten.

Atomic updating distributies passen updates volledig of helemaal niet toe. Typisch zijn transactionele updatesystemen ook atomair.

Een transactioneel updatesysteem creëert een momentopname die wordt gemaakt voor en na het toepassen van een update. Als een update op een bepaald moment mislukt (bijvoorbeeld door een stroomstoring), kan de update gemakkelijk worden teruggezet naar een "laatst bekende goede staat"

De Atomic update methode wordt gebruikt voor immutable distributies zoals Silverblue, Tumbleweed, en NixOS en kan betrouwbaarheid bereiken met dit model. [Adam Šamalík](https://twitter.com/adsamalik) gaf een presentatie over hoe `rpm-ostree` werkt met Silverblue:

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-hpV5l-gJnQ" title="Laten we Fedora Silverblue proberen - een onveranderbaar desktop OS! - Adam Šamalik" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### "Beveiligingsgerichte" distributies

Er bestaat vaak enige verwarring over "op veiligheid gerichte" distributies en "pentesting"-distributies. Een snelle zoekactie naar "de veiligste Linux-distributie" levert vaak resultaten op als Kali Linux, Black Arch en Parrot OS. Deze distributies zijn offensieve penetratietestdistributies die hulpmiddelen bundelen voor het testen van andere systemen. Ze bevatten geen "extra beveiliging" of defensieve maatregelen voor normaal gebruik.

### Arch-gebaseerde distributies

Arch-gebaseerde distributies worden niet aanbevolen voor mensen die nieuw zijn met Linux, ongeacht de distributie. Arch heeft geen distributie update mechanisme voor de onderliggende software keuzes. Als gevolg daarvan moet u op de hoogte blijven van de huidige trends en technologieën overnemen naarmate deze oudere praktijken verdringen.

Voor een veilig systeem wordt ook verwacht dat je voldoende Linux kennis hebt om de beveiliging van hun systeem goed in te stellen, zoals het aannemen van een [mandatory access control](https://en.wikipedia.org/wiki/Mandatory_access_control) systeem, het opzetten van [kernel module](https://en.wikipedia.org/wiki/Loadable_kernel_module#Security) blacklists, het harden van boot parameters, het manipuleren van [sysctl](https://en.wikipedia.org/wiki/Sysctl) parameters, en weten welke componenten ze nodig hebben zoals [Polkit](https://en.wikipedia.org/wiki/Polkit).

Iedereen die gebruik maakt van de [Arch User Repository (AUR)](https://wiki.archlinux.org/title/Arch_User_Repository), **moet zich** comfortabel voelen bij het auditen van PKGBUILDs die ze vanuit die service installeren. AUR-pakketten zijn door de gemeenschap geproduceerde inhoud en worden op geen enkele manier doorgelicht, en zijn daarom kwetsbaar voor aanvallen op de softwareketen, wat in het verleden inderdaad is gebeurd [](https://www.bleepingcomputer.com/news/security/malware-found-in-arch-linux-aur-package-repository/). AUR moet altijd met mate worden gebruikt en vaak is er veel slecht advies op verschillende pagina's die mensen zonder voldoende waarschuwing opdragen om blindelings [AUR helpers](https://wiki.archlinux.org/title/AUR_helpers) te gebruiken. Vergelijkbare waarschuwingen gelden voor het gebruik van Personal Package Archives (PPA's) van derden op Debian gebaseerde distributies of Community Projects (COPR) op Fedora.

Als u ervaring hebt met Linux en een Arch-gebaseerde distributie wilt gebruiken, raden wij alleen Arch Linux zelf aan, niet een van zijn afgeleiden. Wij raden deze twee Arch-derivaten specifiek af:

- **Manjaro**: Deze distributie houdt pakketten 2 weken achter om er zeker van te zijn dat hun eigen veranderingen niet kapot gaan, niet om er zeker van te zijn dat upstream stabiel is. Wanneer AUR pakketten worden gebruikt, worden ze vaak gebouwd tegen de laatste [bibliotheken](https://en.wikipedia.org/wiki/Library_(computing)) uit Arch's repositories.
- **Garuda**: Zij gebruiken [Chaotic-AUR](https://aur.chaotic.cx/) die automatisch en blindelings pakketten compileert uit de AUR. Er is geen verificatieproces om ervoor te zorgen dat de AUR-pakketten niet te lijden hebben van aanvallen op de toeleveringsketen.

### Kicksecure

Hoewel we sterk afraden om verouderde distributies zoals Debian te gebruiken, als u besluit om het te gebruiken, stellen we voor dat u [](https://www.kicksecure.com/wiki/Debian) omzet in [Kicksecure](https://www.kicksecure.com/). Kicksecure is, in oversimplistische termen, een verzameling scripts, configuraties en pakketten die het aanvalsoppervlak van Debian aanzienlijk verkleinen. Het dekt standaard een heleboel aanbevelingen voor privacy en hardening.

### Linux-libre kernel en "Libre" distributies

Wij raden **sterk af om** de Linux-libre kernel te gebruiken, aangezien [beveiligingsbeperkingen verwijdert](https://www.phoronix.com/scan.php?page=news_item&px=GNU-Linux-Libre-5.7-Released) en [om ideologische redenen kernelwaarschuwingen](https://news.ycombinator.com/item?id=29674846) over kwetsbare microcode onderdrukt.

## Algemene aanbevelingen

### Schijfversleuteling

De meeste Linux-distributies hebben een optie in het installatieprogramma om [LUKS](../encryption.md#linux-unified-key-setup) FDE in te schakelen. Als deze optie niet is ingesteld tijdens de installatie, zult u een back-up van uw gegevens moeten maken en opnieuw moeten installeren, aangezien de versleuteling wordt toegepast na [schijfpartitionering](https://en.wikipedia.org/wiki/Disk_partitioning), maar voordat [bestandssystemen](https://en.wikipedia.org/wiki/File_system) worden geformatteerd. We raden u ook aan uw opslagapparaat veilig te wissen:

- [Veilig wissen van gegevens :hero-arrow-circle-right-fill:](https://blog.privacyguides.org/2022/05/25/secure-data-erasure/)

### Wissel

Overweeg het gebruik van [ZRAM](https://wiki.archlinux.org/title/Swap#zram-generator) of [versleutelde swap](https://wiki.archlinux.org/title/Dm-crypt/Swap_encryption) in plaats van onversleutelde swap om potentiële beveiligingsproblemen te vermijden met gevoelige gegevens die naar [swap space](https://en.wikipedia.org/wiki/Memory_paging)worden geduwd. Op Fedora gebaseerde distributies [gebruiken standaard ZRAM](https://fedoraproject.org/wiki/Changes/SwapOnZRAM).

### Wayland

We raden aan een desktopomgeving te gebruiken die het [Wayland](https://en.wikipedia.org/wiki/Wayland_(display_server_protocol)) weergaveprotocol ondersteunt, aangezien het ontwikkeld is met beveiliging [in gedachten](https://lwn.net/Articles/589147/). Zijn voorganger, [X11](https://en.wikipedia.org/wiki/X_Window_System), ondersteunt geen GUI isolatie, waardoor alle vensters [scherm kunnen opnemen, loggen en invoer injecteren in andere vensters](https://blog.invisiblethings.org/2011/04/23/linux-security-circus-on-gui-isolation.html), waardoor elke poging tot sandboxing zinloos wordt. Hoewel er opties zijn om geneste X11 te doen, zoals [Xpra](https://en.wikipedia.org/wiki/Xpra) of [Xephyr](https://en.wikipedia.org/wiki/Xephyr), komen ze vaak met negatieve prestatiegevolgen en zijn ze niet handig op te zetten en hebben ze geen voorkeur boven Wayland.

Gelukkig hebben veelgebruikte omgevingen zoals [GNOME](https://www.gnome.org), [KDE](https://kde.org), en de window manager [Sway](https://swaywm.org) ondersteuning voor Wayland. Sommige distributies zoals Fedora en Tumbleweed gebruiken het standaard, en sommige andere zullen dat misschien in de toekomst doen aangezien X11 in [harde onderhoudsmodus is](https://www.phoronix.com/scan.php?page=news_item&px=X.Org-Maintenance-Mode-Quickly). Als je een van deze omgevingen gebruikt is het zo eenvoudig als het selecteren van de "Wayland" sessie bij de desktop display manager ([GDM](https://en.wikipedia.org/wiki/GNOME_Display_Manager), [SDDM](https://en.wikipedia.org/wiki/Simple_Desktop_Display_Manager)).

Wij raden **aan tegen** door desktop omgevingen of window managers te gebruiken die geen Wayland ondersteuning hebben, zoals Cinnamon (standaard op Linux Mint), Pantheon (standaard op Elementary OS), MATE, Xfce, en i3.

### Eigen firmware (Microcode Updates)

Linux-distributies zoals die van [Linux-libre](https://en.wikipedia.org/wiki/Linux-libre) of DIY (Arch Linux) worden niet geleverd met de propriëtaire [microcode](https://en.wikipedia.org/wiki/Microcode) updates die vaak kwetsbaarheden patchen. Enkele opmerkelijke voorbeelden van deze kwetsbaarheden zijn [Spectre](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)), [Meltdown](https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)), [SSB](https://en.wikipedia.org/wiki/Speculative_Store_Bypass), [Foreshadow](https://en.wikipedia.org/wiki/Foreshadow), [MDS](https://en.wikipedia.org/wiki/Microarchitectural_Data_Sampling), [SWAPGS](https://en.wikipedia.org/wiki/SWAPGS_(security_vulnerability)), en andere [hardwarekwetsbaarheden](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/index.html).

Wij **bevelen** ten zeerste aan dat u de microcode-updates installeert, aangezien uw CPU al vanaf de fabriek op de eigen microcode draait. Fedora en openSUSE hebben beide standaard de microcode updates toegepast.

### Updates

De meeste Linux-distributies zullen automatisch updates installeren of u eraan herinneren om dat te doen. Het is belangrijk om uw besturingssysteem up-to-date te houden, zodat uw software wordt gepatcht wanneer een kwetsbaarheid wordt gevonden.

Sommige distributies (vooral die gericht zijn op gevorderde gebruikers) zijn aan de kale kant en verwachten dat je dingen zelf doet (bijvoorbeeld Arch of Debian). Hiervoor moet de "pakketbeheerder" (`apt`, `pacman`, `dnf`, enz.) handmatig worden uitgevoerd om belangrijke beveiligingsupdates te ontvangen.

Bovendien downloaden sommige distributies firmware-updates niet automatisch. Daarvoor moet u [`fwupd`](https://wiki.archlinux.org/title/Fwupd)installeren.

## Privacy Tweaks

### MAC-adres randomisatie

Veel desktop Linux distributies (Fedora, openSUSE, enz.) worden geleverd met [NetworkManager](https://en.wikipedia.org/wiki/NetworkManager), om Ethernet en Wi-Fi instellingen te configureren.

Het is mogelijk om [te randomiseren](https://fedoramagazine.org/randomize-mac-address-nm/) het [MAC adres](https://en.wikipedia.org/wiki/MAC_address) bij gebruik van NetworkManager. Dit zorgt voor wat meer privacy op Wi-Fi-netwerken, omdat het moeilijker wordt specifieke apparaten op het netwerk waarmee u verbonden bent, te traceren. Het doet [**niet**](https://papers.mathyvanhoef.com/wisec2016.pdf) maakt je anoniem.

Wij raden aan de instelling te wijzigen in **random** in plaats van **stable**, zoals voorgesteld in het [artikel](https://fedoramagazine.org/randomize-mac-address-nm/).

Als u [systemd-networkd](https://en.wikipedia.org/wiki/Systemd#Ancillary_components)gebruikt, moet u [`MACAddressPolicy=random`](https://www.freedesktop.org/software/systemd/man/systemd.link.html#MACAddressPolicy=) instellen, waardoor [RFC 7844 (Anonymity Profiles for DHCP Clients)](https://www.freedesktop.org/software/systemd/man/systemd.network.html#Anonymize=)wordt ingeschakeld.

Het heeft niet veel zin om het MAC-adres voor Ethernetverbindingen te randomiseren, aangezien een systeembeheerder u kan vinden door te kijken naar de poort die u gebruikt op de [netwerkswitch](https://en.wikipedia.org/wiki/Network_switch). Het willekeurig maken van Wi-Fi MAC-adressen hangt af van de ondersteuning door de firmware van de Wi-Fi.

### Andere identificatiemiddelen

Er zijn andere systeemidentifiers waar u misschien voorzichtig mee moet zijn. U moet hier eens over nadenken om te zien of dit van toepassing is op uw [dreigingsmodel](../basics/threat-modeling.md):

- **Hostnamen:** De hostnaam van uw systeem wordt gedeeld met de netwerken waarmee u verbinding maakt. U kunt beter geen identificerende termen zoals uw naam of besturingssysteem in uw hostnaam opnemen, maar het bij algemene termen of willekeurige strings houden.
- **Gebruikersnamen:** Ook uw gebruikersnaam wordt op verschillende manieren in uw systeem gebruikt. Gebruik liever algemene termen als "gebruiker" dan uw eigenlijke naam.
- **Machine ID:**: Tijdens de installatie wordt een unieke machine ID gegenereerd en opgeslagen op uw toestel. Overweeg [het in te stellen op een generieke ID](https://madaidans-insecurities.github.io/guides/linux-hardening.html#machine-id).

### Systeemtelling

Het Fedora Project [telt](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting) hoeveel unieke systemen toegang hebben tot zijn spiegels door gebruik te maken van een [`countme`](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting#Detailed_Description) variabele in plaats van een uniek ID. Fedora doet dit om de belasting te bepalen en waar nodig betere servers voor updates te voorzien.

Deze [optie](https://dnf.readthedocs.io/en/latest/conf_ref.html#options-for-both-main-and-repo) staat momenteel standaard uit. We raden aan om `countme=false` toe te voegen aan `/etc/dnf/dnf.conf` voor het geval het in de toekomst wordt ingeschakeld. Op systemen die `rpm-ostree` gebruiken, zoals Silverblue, wordt de countme optie uitgeschakeld door de [rpm-ostree-countme](https://fedoramagazine.org/getting-better-at-counting-rpm-ostree-based-systems/) timer te maskeren.

openSUSE gebruikt ook een [unieke ID](https://en.opensuse.org/openSUSE:Statistics) om systemen te tellen, die kan worden uitgeschakeld door het bestand `/var/lib/zypp/AnonymousUniqueId` te verwijderen.

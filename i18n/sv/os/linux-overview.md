---
title: Översikt över Linux
icon: simple/linux
description: Linux is an open-source, privacy-focused desktop operating system alternative, but not all distribitions are created equal.
---

Man tror ofta att [programvara med öppen källkod](https://en.wikipedia.org/wiki/Open-source_software) är säker i sig eftersom källkoden är tillgänglig. Det finns en förväntan på att gemenskapens kontroll sker regelbundet, men detta är inte alltid fallet [](https://seirdy.one/posts/2022/02/02/floss-security/). It does depend on a number of factors, such as project activity, developer experience, level of rigor applied to [code reviews](https://en.wikipedia.org/wiki/Code_review), and how often attention is given to specific parts of the [codebase](https://en.wikipedia.org/wiki/Codebase) that may go untouched for years.

För närvarande har skrivbord Linux några områden som kan förbättras bättre jämfört med sina egenutvecklade motsvarigheter, t.ex.:

- En verifierad startkedja, som Apples [Secure Boot](https://support.apple.com/guide/security/startup-security-utility-secc7b34e5b5/web) (med [Secure Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1)), Androids [Verified Boot](https://source.android.com/security/verifiedboot), ChromeOS [Verified boot](https://www.chromium.org/chromium-os/chromiumos-design-docs/security-overview/#verified-boot)eller Microsoft Windows [bootprocess](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process) med [TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). Dessa funktioner och hårdvarutekniker kan alla bidra till att förhindra ihållande manipulering av skadlig kod eller [evil maid-attacker](https://en.wikipedia.org/wiki/Evil_Maid_attack)
- En stark sandlådelösning som den som finns i [macOS](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html), [ChromeOS](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/sandboxing.md)och [Android](https://source.android.com/security/app-sandbox). Vanligt förekommande sandboxing-lösningar för Linux, t.ex. [Flatpak](https://docs.flatpak.org/en/latest/sandbox-permissions.html) och [Firejail](https://firejail.wordpress.com/), har fortfarande en lång väg att gå
- Starka [åtgärder för att minska exploateringar](https://madaidans-insecurities.github.io/linux.html#exploit-mitigations)

Trots dessa nackdelar är stationära Linux-distributioner bra om du vill:

- Undvik telemetri som ofta kommer med egna operativsystem
- Bevara [frihet för programvara](https://www.gnu.org/philosophy/free-sw.en.html#four-freedoms)
- Har system som är inriktade på integritet, t.ex. [Whonix](https://www.whonix.org) eller [Tails](https://tails.boum.org/)

På vår webbplats används i allmänhet termen "Linux" för att beskriva Linuxdistributioner för skrivbordsmiljöer. Andra operativsystem som också använder Linux-kärnan som ChromeOS, Android och Qubes OS diskuteras inte här.

[Våra Linux-rekommendationer :material-arrow-right-drop-circle:](../desktop.md ""){.md-button}

## Välja din distribution

Inte alla Linux-distributioner är skapade lika. Medan vår Linux-rekommendationssida inte är avsedd att vara en auktoritativ källa på vilken distribution du ska använda, finns det några saker du bör tänka på när du väljer vilken distribution du ska använda.

### Utgivningscykel

Vi rekommenderar starkt att du väljer distributioner som ligger nära de stabila uppströmsutgåvorna, ofta kallade rullande utgåvor. Detta beror på att frysta utgåvor ofta inte uppdaterar paketversioner och hamnar bakom säkerhetsuppdateringar.

För frusna distributioner som [Debian](https://www.debian.org/security/faq#handling)förväntas paketansvariga backa patchar för att åtgärda sårbarheter snarare än att stöta programvaran till "nästa version" som släppts av uppströmsutvecklaren. Vissa säkerhetskorrigeringar [inte](https://arxiv.org/abs/2105.14565) får en [CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (särskilt mindre populär programvara) alls och därför inte göra det i distributionen med denna patching modell. Som ett resultat hålls mindre säkerhetskorrigeringar ibland tillbaka till nästa stora utgåva.

Vi tror inte att hålla paket tillbaka och tillämpa tillfälliga patchar är en bra idé, eftersom det skiljer sig från hur utvecklaren kan ha avsett att programvaran ska fungera. [Richard Brown](https://rootco.de/aboutme/) har en presentation om detta:

<div class="yt-embed">
  <iframe width="560" height="315" src="https://invidious.privacyguides.net/embed/i8c0mg_mS7U?local=true" title="Regelbundna offentliggöranden är fel, rulla för ditt liv" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Traditionella och atomära uppdateringar

Traditionellt sett uppdaterar Linuxdistributioner genom att sekventiellt uppdatera de önskade paketen. Traditionella uppdateringar som de som används i Fedora-, Arch Linux- och Debianbaserade distributioner kan vara mindre tillförlitliga om ett fel uppstår under uppdateringen.

Distributioner med atomär uppdatering tillämpar uppdateringar i sin helhet eller inte alls. Typiskt sett är transaktionella uppdateringssystem också atomära.

Ett system för transaktionsuppdatering skapar en ögonblicksbild som görs före och efter att en uppdatering tillämpas. Om en uppdatering misslyckas när som helst (till exempel på grund av ett strömavbrott) kan uppdateringen enkelt återställas till ett "senast kända goda tillstånd"

Atomic update-metoden används för oföränderliga distributioner som Silverblue, Tumbleweed och NixOS och kan uppnå tillförlitlighet med den här modellen. [Adam Šamalík](https://twitter.com/adsamalik) gav en presentation om hur `rpm-ostree` fungerar med Silverblue:

<div class="yt-embed">
  <iframe width="560" height="315" src="https://invidious.privacyguides.net/embed/-hpV5l-gJnQ?local=true" title="Låt oss prova Fedora Silverblue - ett oföränderligt skrivbordsoperativsystem! - Adam Šamalik" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### "Säkerhetsfokuserad" distribution

Det råder ofta viss förvirring mellan "säkerhetsfokuserade" fördelningar och "pentesting"-fördelningar. En snabb sökning på "den säkraste Linuxdistributionen" ger ofta resultat som Kali Linux, Black Arch och Parrot OS. Dessa distributioner är offensiva distributioner för penetrationstestning som innehåller verktyg för att testa andra system. De innehåller ingen "extra säkerhet" eller defensiva åtgärder som är avsedda för vanlig användning.

### Arch Linux baserade distributioner

Arch-baserade distributioner rekommenderas inte för dem som är nya i Linux (oavsett distribution) eftersom de kräver regelbundet underhåll av systemet [](https://wiki.archlinux.org/title/System_maintenance). Arch har ingen distributionsuppdateringsmekanism för de underliggande programvaruvalen. Därför måste du hålla dig uppdaterad om aktuella trender och ta till dig teknik när den ersätter äldre metoder på egen hand.

För ett säkert system förväntas du också ha tillräckliga Linuxkunskaper för att korrekt konfigurera säkerheten för deras system, t.ex. anta ett [obligatoriskt system för åtkomstkontroll](https://en.wikipedia.org/wiki/Mandatory_access_control), konfigurera [kernel module](https://en.wikipedia.org/wiki/Loadable_kernel_module#Security) blacklists, skärpa uppstartsparametrar, manipulera [sysctl](https://en.wikipedia.org/wiki/Sysctl) -parametrar och veta vilka komponenter de behöver, t.ex. [Polkit](https://en.wikipedia.org/wiki/Polkit).

Alla som använder [Arch User Repository (AUR)](https://wiki.archlinux.org/title/Arch_User_Repository), **måste** vara bekväma med att granska PKGBUILDs som de installerar från den tjänsten. AUR-paket är innehåll som produceras av gemenskapen och är inte granskade på något sätt, och är därför sårbara för attacker i programvarukedjan, vilket faktiskt har hänt [tidigare](https://www.bleepingcomputer.com/news/security/malware-found-in-arch-linux-aur-package-repository/). AUR bör alltid användas sparsamt och ofta finns det många dåliga råd på olika sidor som uppmanar folk att blint använda [AUR-hjälpmedel](https://wiki.archlinux.org/title/AUR_helpers) utan tillräcklig varning. Liknande varningar gäller för användning av tredje parts Personal Package Archives (PPAs) på Debianbaserade distributioner eller Community Projects (COPR) på Fedora.

Om du har erfarenhet av Linux och vill använda en Arch-baserad distribution rekommenderar vi endast huvudversionen av Arch Linux, inte något av dess derivat. Vi rekommenderar särskilt dessa två Arch-derivat:

- **Manjaro**: Denna distribution håller tillbaka paket i två veckor för att se till att deras egna ändringar inte går sönder, inte för att se till att uppströmsversionen är stabil. När AUR-paket används byggs de ofta med de senaste [-biblioteken](https://en.wikipedia.org/wiki/Library_(computing)) från Arch:s arkiv.
- **Garuda**: De använder [Chaotic-AUR](https://aur.chaotic.cx/) som automatiskt och blint kompilerar paket från AUR. Det finns ingen verifieringsprocess för att se till att AUR-paketen inte drabbas av attacker i leveranskedjan.

### Kicksecure

Vi rekommenderar starkt att du inte använder föråldrade distributioner som Debian, men det finns ett Debianbaserat operativsystem som har hårdgjorts för att vara mycket säkrare än vanliga Linuxdistributioner: [Kicksecure](https://www.kicksecure.com/). Kicksecure är, förenklat uttryckt, en uppsättning skript, konfigurationer och paket som avsevärt minskar angreppsytan för Debian. Den täcker många rekommendationer för sekretess och skydd av integritet som standard.

### Linux-libre-kärnan och "Libre"-distributioner

Vi rekommenderar starkt **att** inte använder Linux-libre-kärnan, eftersom den [tar bort säkerhetsåtgärder](https://www.phoronix.com/scan.php?page=news_item&px=GNU-Linux-Libre-5.7-Released) och [av ideologiska skäl undertrycker kärnans varningar](https://news.ycombinator.com/item?id=29674846) om sårbar mikrokod.

## Allmänna rekommendationer

### Enhetskryptering

De flesta Linux-distributioner har ett alternativ i installationsprogrammet för att aktivera [LUKS](../encryption.md#linux-unified-key-setup) fde. Om det här alternativet inte är inställt vid installationstillfället måste du säkerhetskopiera dina data och installera om, eftersom krypteringen tillämpas efter [diskpartitionering](https://en.wikipedia.org/wiki/Disk_partitioning), men innan [filsystem](https://en.wikipedia.org/wiki/File_system) formateras. Vi föreslår också att du raderar din lagringsenhet på ett säkert sätt:

- [Säker radering av data :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/05/25/secure-data-erasure/)

### Växla

Överväg att använda [ZRAM](https://wiki.archlinux.org/title/Swap#zram-generator) eller [krypterad swap](https://wiki.archlinux.org/title/Dm-crypt/Swap_encryption) i stället för okrypterad swap för att undvika potentiella säkerhetsproblem med känsliga data som flyttas till [swaputrymme](https://en.wikipedia.org/wiki/Memory_paging). Fedora-baserade distributioner [använder ZRAM som standard](https://fedoraproject.org/wiki/Changes/SwapOnZRAM).

### Wayland

Vi rekommenderar att du använder en skrivbordsmiljö som stöder visningsprotokollet [Wayland](https://en.wikipedia.org/wiki/Wayland_(display_server_protocol)) eftersom det har utvecklats med säkerheten [i åtanke](https://lwn.net/Articles/589147/). Dess föregångare, [X11](https://en.wikipedia.org/wiki/X_Window_System), har inte stöd för isolering av grafiska gränssnitt, vilket gör att alla fönster kan [spela in skärmen, logga och injicera inmatningar i andra fönster](https://blog.invisiblethings.org/2011/04/23/linux-security-circus-on-gui-isolation.html), vilket gör alla försök till sandboxing meningslösa. Även om det finns alternativ för att göra nested X11, t.ex. [Xpra](https://en.wikipedia.org/wiki/Xpra) eller [Xephyr](https://en.wikipedia.org/wiki/Xephyr), har de ofta negativa konsekvenser för prestandan och är inte bekväma att konfigurera och är inte att föredra framför Wayland.

Lyckligtvis har vanliga miljöer som [GNOME](https://www.gnome.org), [KDE](https://kde.org)och fönsterhanteraren [Sway](https://swaywm.org) stöd för Wayland. Vissa distributioner som Fedora och Tumbleweed använder det som standard, och andra kan komma att göra det i framtiden eftersom X11 är i [hard maintenance mode](https://www.phoronix.com/scan.php?page=news_item&px=X.Org-Maintenance-Mode-Quickly). Om du använder en av dessa miljöer är det lika enkelt som att välja "Wayland"-sessionen i skrivbordsdisplayhanteraren ([GDM](https://en.wikipedia.org/wiki/GNOME_Display_Manager), [SDDM](https://en.wikipedia.org/wiki/Simple_Desktop_Display_Manager)).

Vi rekommenderar **mot** om du använder skrivbordsmiljöer eller fönsterhanterare som inte har stöd för Wayland, till exempel Cinnamon (standard i Linux Mint), Pantheon (standard i Elementary OS), MATE, Xfce och i3.

### Proprietär fast programvara (uppdateringar av mikrokod)

Linuxdistributioner som [Linux-libre](https://en.wikipedia.org/wiki/Linux-libre) eller DIY (Arch Linux) levereras inte med de proprietära [mikrokodsuppdateringarna](https://en.wikipedia.org/wiki/Microcode) som ofta åtgärdar sårbarheter. Några anmärkningsvärda exempel på dessa sårbarheter är [Spectre](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)), [Meltdown](https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)), [SSB](https://en.wikipedia.org/wiki/Speculative_Store_Bypass), [Foreshadow](https://en.wikipedia.org/wiki/Foreshadow), [MDS](https://en.wikipedia.org/wiki/Microarchitectural_Data_Sampling), [SWAPGS](https://en.wikipedia.org/wiki/SWAPGS_(security_vulnerability)), och andra [maskinvarusårbarheter](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/index.html).

Vi rekommenderar **starkt** att du installerar mikrokodsuppdateringar, eftersom din CPU redan kör den egenutvecklade mikrokoden från fabriken. Fedora och openSUSE har båda mikrokoduppdateringar som standard.

### Uppdateringar

De flesta Linuxdistributioner installerar automatiskt uppdateringar eller påminner dig om att göra det. Det är viktigt att hålla operativsystemet uppdaterat så att programvaran korrigeras när en sårbarhet hittas.

Vissa distributioner (särskilt de som riktar sig till avancerade användare) är mer avskalade och förväntar sig att du gör saker själv (t.ex. Arch eller Debian). Dessa kräver att du kör "pakethanteraren" (`apt`, `pacman`, `dnf`, etc.) manuellt för att få viktiga säkerhetsuppdateringar.

Dessutom hämtar vissa distributioner inte uppdateringar av den fasta programvaran automatiskt. För detta måste du installera [`fwupd`](https://wiki.archlinux.org/title/Fwupd).

## Verktyg för integritet

### Randomisering av MAC-adresser

Många Linuxdistributioner för skrivbordssystem (Fedora, openSUSE osv.) levereras med [NetworkManager](https://en.wikipedia.org/wiki/NetworkManager), för att konfigurera Ethernet- och Wi-Fi-inställningar.

Det är möjligt att [randomisera MAC-adressen](https://fedoramagazine.org/randomize-mac-address-nm/) [MAC-adressen](https://en.wikipedia.org/wiki/MAC_address) när du använder NetworkManager. Detta ger lite mer integritet i Wi-Fi-nätverk eftersom det är svårare att spåra specifika enheter i nätverket du är ansluten till. Den [**gör dig inte anonym**](https://papers.mathyvanhoef.com/wisec2016.pdf).

Vi rekommenderar att du ändrar inställningen till **random** i stället för **stable**, vilket föreslås i artikeln [](https://fedoramagazine.org/randomize-mac-address-nm/).

Om du använder [systemd-networkd](https://en.wikipedia.org/wiki/Systemd#Ancillary_components)måste du ställa in [`MACAddressPolicy=random`](https://www.freedesktop.org/software/systemd/man/systemd.link.html#MACAddressPolicy=) vilket aktiverar [RFC 7844 (Anonymity Profiles for DHCP Clients)](https://www.freedesktop.org/software/systemd/man/systemd.network.html#Anonymize=).

Det finns inte många punkter i slumpmässig MAC-adress för Ethernet-anslutningar som en systemadministratör kan hitta dig genom att titta på den port du använder på [-nätverksväxeln](https://en.wikipedia.org/wiki/Network_switch). Randomisering av Wi-Fi- MAC-adresser beror på stöd från Wi-Fi-programmets fasta programvara.

### Andra identifierare

Det finns andra systemidentifierare som du bör vara försiktig med. Du bör fundera på om detta gäller för din hotmodell [](../basics/threat-modeling.md):

- **Värdnamn:** Systemets värdnamn delas med de nätverk du ansluter till. Du bör undvika att inkludera identifierande termer som ditt namn eller operativsystem i ditt värdnamn och i stället hålla dig till generiska termer eller slumpmässiga strängar.
- **Användarnamn:** På samma sätt används ditt användarnamn på olika sätt i systemet. Överväg att använda generiska termer som "användare" snarare än ditt faktiska namn.
- **Machine ID:**: During installation a unique machine ID is generated and stored on your device. Consider [setting it to a generic ID](https://madaidans-insecurities.github.io/guides/linux-hardening.html#machine-id).

### System Counting

The Fedora Project [counts](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting) how many unique systems access its mirrors by using a [`countme`](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting#Detailed_Description) variable instead of a unique ID. Fedora does this to determine load and provision better servers for updates where necessary.

This [option](https://dnf.readthedocs.io/en/latest/conf_ref.html#options-for-both-main-and-repo) is currently off by default. We recommend adding `countme=false` to `/etc/dnf/dnf.conf` just in case it is enabled in the future. On systems that use `rpm-ostree` such as Silverblue, the countme option is disabled by masking the [rpm-ostree-countme](https://fedoramagazine.org/getting-better-at-counting-rpm-ostree-based-systems/) timer.

openSUSE also uses a [unique ID](https://en.opensuse.org/openSUSE:Statistics) to count systems, which can be disabled by deleting the `/var/lib/zypp/AnonymousUniqueId` file.

---
title: Vista general de Linux
icon: simple/linux
description: Linux es una alternativa de sistema operativo de escritorio de código abierto y centrado en la privacidad, pero no todas las distribuciones son iguales.
---

Es una creencia popular que los programas de [código abierto](https://en.wikipedia.org/wiki/Open-source_software) son seguros porque su código fuente está disponible. Siempre hay una expectativa de que la verificación comunitaria sucede regularmente; sin embargo, [este no siempre es el caso](https://seirdy.one/posts/2022/02/02/floss-security/). Depende de varios factores, como la actividad del proyecto, la experiencia de los desarrolladores, el nivel de rigor aplicado a las [revisiones del código](https://en.wikipedia.org/wiki/Code_review), y la frecuencia con la que se presta atención a partes específicas del [código](https://en.wikipedia.org/wiki/Codebase) que pueden permanecer intactas durante años.

De momento, Linux de escritorio tiene algunas áreas que pueden ser mejoradas al ser comparadas con sus contrapartes propietarias, por ejemplo:

- Una cadena verificada de inicio, como el [Inicio Seguro](https://support.apple.com/guide/security/startup-security-utility-secc7b34e5b5/web) de Apple (con el [enclave seguro](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1)), el [Arranque Verificado](https://source.android.com/security/verifiedboot) de Android, el [Arranque Verificado](https://www.chromium.org/chromium-os/chromiumos-design-docs/security-overview/#verified-boot) de ChromeOS, o el [proceso de inicio](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process) de Windows con [TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). Estas características y tecnologías de hardware pueden ayudar a prevenir la manipulación persistente ocasionada por algún malware o [ataque de 'evil-maid'](https://en.wikipedia.org/wiki/Evil_Maid_attack).
- Una fuerte solución de aislamiento como la que se encuentra en [macOS](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html), [ChromeOS](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/sandboxing.md) y [Android](https://source.android.com/security/app-sandbox). Las soluciones de aislamiento utilizadas comúnmente de Linux como [Flatpak](https://docs.flatpak.org/en/latest/sandbox-permissions.html) y [Firejail](https://firejail.wordpress.com/), aún tienen mucho por recorrer.
- Fuertes [mitigaciones de vulnerabilidades](https://madaidans-insecurities.github.io/linux.html#exploit-mitigations).

A pesar de estos inconvenientes, las distribuciones Linux de escritorio son geniales si quieres:

- Evitar la telemetría que, regularmente, viene con los sistemas operativos propietarios.
- Mantener la ['libertad del software'](https://www.gnu.org/philosophy/free-sw.en.html#four-freedoms).
- Tener sistemas enfocados en la privacidad como [Whonix](https://www.whonix.org) o [Tails](https://tails.boum.org/).

Nuestra página generalmente utiliza el término "Linux" para describir las distribuciones Linux de escritorio. Otros sistemas operativos que también utilizan el kernel de Linux como ChromeOS, Android y Qubes OS no se discuten aquí.

[Nuestras recomendaciones de Linux: :material-arrow-right-drop-circle:](../desktop.md ""){.md-button}

## Elegir tu distribución

No todas las distribuciones Linux son iguales. Mientras nuestra página con recomendaciones de Linux no fue creada para ser una fuente autorizada para decidir cuál distribución debes utilizar, hay algunos aspectos que debes considerar al elegir cuál distribución usar.

### Ciclo de lanzamiento

Recomendamos encarecidamente que elijas las distribuciones que permanecen cerca a los lanzamientos estables, comúnmente denominadas como distribuciones de lanzamiento continuo. Esto se debe a que las distribuciones de lanzamiento de ciclo congelado, normalmente no actualizan las versiones de sus paquetes y se encuentran detrás en actualizaciones de seguridad.

Para las distribuciones congeladas como [Debian](https://www.debian.org/security/faq#handling), se espera que los encargados de mantener los paquetes adapten los parches para corregir vulnerabilidades, en lugar de actualizar el software a la "siguiente versión" lanzada por el desarrollador original. Algunos arreglos de seguridad [no](https://arxiv.org/abs/2105.14565) reciben un [CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (programas de menor popularidad) del todo y no llegan a la distribución con este modelo de parches. Por ello, a veces las correcciones de seguridad son pospuestas hasta la siguiente versión importante.

No creemos que retener paquetes y aplicar los parches provisionales sea una buena idea, porque se aleja de la forma en que el desarrollador se pudo asegurar que el software funcione. [Richard Brown](https://rootco.de/aboutme/) tiene una presentación sobre esto:

<div class="yt-embed">
  <iframe width="560" height="315" src="https://invidious.privacyguides.net/embed/i8c0mg_mS7U?local=true" title="Las liberaciones regulares son erróneas, rueda por tu vida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Actualizaciones tradicionales vs. Atómicas

Tradicionalmente, las distribuciones de Linux se actualizan secuencialmente, actualizando los paquetes deseados. Las actualizaciones tradicionales, como las utilizadas en las distribuciones basadas en Fedora, Arch Linux y Debian, son menos confiables, si un error se produce al actualizar.

Las distribuciones de actualizaciones Atómicas, aplican las actualizaciones en su totalidad o no del todo. Normalmente, los sistemas de actualización transaccional también son atómicos.

Un sistema de actualización transaccional crea una instantánea que se realiza antes y después de haber aplicado una actualización. Si una actualización falla en cualquier momento (debido a situaciones como fallas de electricidad), la actualización puede revertirse fácilmente al "último estado bueno conocido".

El método de actualizaciones Atómicas es utilizado para distribuciones inmutables como Silverblue, Tumbleweed y NixOS, y puede obtener confiabilidad con este modelo. [Adam Šamalik](https://twitter.com/adsamalik) brinda una presentación sobre cómo `rpm-ostree` funciona con Silverblue:

<div class="yt-embed">
  <iframe width="560" height="315" src="https://invidious.privacyguides.net/embed/-hpV5l-gJnQ?local=true" title="Probemos Fedora Silverblue — ¡un sistema operativo de escritorio inmutable! - Adam Šamalik" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Distribuciones "enfocadas en la seguridad"

A menudo existe cierta confusión entre las distribuciones "enfocadas en la privacidad" y las distribuciones "pentesting". Una búsqueda rápida para "la distribución más segura de Linux" suele arrojar resultados como Kali Linux, Black Arch y Parrot OS. Estas distribuciones son distribuciones de pruebas de penetración ofensivas que incluyen herramientas para probar otros sistemas. Estas no incluyen ninguna "seguridad adicional" o mitigaciones defensivas destinadas a un uso regular.

### Distribuciones basadas en Arch Linux

Las distribuciones basadas en Arch no son recomendables para los que se inician en Linux, (independientemente de la distribución) ya que requieren un [mantenimiento regular del sistema](https://wiki.archlinux.org/title/System_maintenance). Arch no dispone de un mecanismo de actualización de la distribución para las opciones de software subyacentes. Por ello, hay que estar al tanto de las tendencias actuales y adoptar las tecnologías a medida que van sustituyendo a las prácticas más antiguas.

Para un sistema seguro, también se espera que tenga suficientes conocimientos de Linux para configurar correctamente la seguridad de su sistema, como la adopción de un sistema [de control de acceso obligatorio](https://en.wikipedia.org/wiki/Mandatory_access_control), la configuración de listas negras de [módulos del kernel](https://en.wikipedia.org/wiki/Loadable_kernel_module#Security), el endurecimiento de los parámetros de arranque, la manipulación de parámetros[ sysctl](https://en.wikipedia.org/wiki/Sysctl), y saber qué componentes necesitan como [Polkit](https://en.wikipedia.org/wiki/Polkit).

Cualquiera que utilice el repositorio de usuarios de Arch [(AUR)](https://wiki.archlinux.org/title/Arch_User_Repository), **debe** estar cómodo en auditar PKGBUILDs que instalan desde ese servicio. Los paquetes AUR son contenidos producidos por la comunidad y no se examinan de ninguna manera, por lo que son vulnerables a los ataques a la cadena de suministro de software, como de hecho ha sucedido en [en el pasado](https://www.bleepingcomputer.com/news/security/malware-found-in-arch-linux-aur-package-repository/). AUR debe utilizarse siempre con moderación y, a menudo, hay muchos malos consejos en diversas páginas que dirigen a la gente a utilizar ciegamente [AUR helpers](https://wiki.archlinux.org/title/AUR_helpers) sin suficiente advertencia. Se aplican advertencias similares al uso de Archivos de Paquetes Personales (PPA) de terceros en distribuciones basadas en Debian o Proyectos Comunitarios (COPR) en Fedora.

Si tienes experiencia con Linux y deseas utilizar una distribución basada en Arch, sólo recomendamos Arch Linux de línea principal, no cualquiera de sus derivados. Desaconsejamos específicamente estos dos derivados de Arch:

- **Manjaro**: Esta distribución retiene los paquetes durante 2 semanas para asegurarse de que sus propios cambios no se rompan, no para asegurarse de que el flujo ascendente sea estable. Cuando se utilizan paquetes AUR, suelen compilarse con las últimas [bibliotecas](https://en.wikipedia.org/wiki/Library_(computing)) de los repositorios de Arch.
- **Garuda**: Utilizan [Chaotic-AUR](https://aur.chaotic.cx/) que compila automáticamente y a ciegas paquetes del AUR. No existe ningún proceso de verificación que garantice que los paquetes AUR no sufran ataques en la cadena de suministro.

### Kicksecure

Aunque recomendamos encarecidamente no utilizar distribuciones obsoletas como Debian, existe un sistema operativo basado en Debian que ha sido reforzado para ser mucho más seguro que las distribuciones típicas de Linux: [Kicksecure](https://www.kicksecure.com/). Kicksecure, en términos demasiado simplificados, es un conjunto de scripts, configuraciones y paquetes que reducen sustancialmente la superficie de ataque de Debian. Cubre muchas recomendaciones de privacidad y seguridad por defecto.

### Kernel Linux-libre y distribuciones "Libre"

Recomendamos encarecidamente no utilizar **** el kernel Linux-libre, ya que [elimina las mitigaciones de seguridad](https://www.phoronix.com/scan.php?page=news_item&px=GNU-Linux-Libre-5.7-Released) y [suprime las advertencias del kernel](https://news.ycombinator.com/item?id=29674846) sobre microcódigo vulnerable por razones ideológicas.

## Recomendaciones generales

### Cifrado de unidad

La mayoría de las distribuciones de Linux tienen una opción dentro de su instalador para habilitar [LUKS](../encryption.md#linux-unified-key-setup) FDE. Si esta opción no se configura en el momento de la instalación, tendrá que hacer una copia de seguridad de sus datos y volver a instalar, ya que el cifrado se aplica después de [particionar el disco](https://en.wikipedia.org/wiki/Disk_partitioning), pero antes de formatear [el sistema de archivos](https://en.wikipedia.org/wiki/File_system). También te sugerimos que borres de forma segura tu dispositivo de almacenamiento:

- [Borrado seguro de datos :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/05/25/secure-data-erasure/)

### Swap

Considera el uso de [ZRAM](https://wiki.archlinux.org/title/Swap#zram-generator) o [swap cifrado](https://wiki.archlinux.org/title/Dm-crypt/Swap_encryption) en lugar de swap sin cifrar para evitar posibles problemas de seguridad con los datos sensibles que se graben en el [espacio swap ](https://en.wikipedia.org/wiki/Memory_paging)(espacio de intercambio). Las distribuciones basadas en Fedora [utilizan ZRAM por defecto](https://fedoraproject.org/wiki/Changes/SwapOnZRAM).

### Wayland

Recomendamos utilizar un entorno de escritorio compatible con el protocolo de visualización [Wayland](https://en.wikipedia.org/wiki/Wayland_(display_server_protocol)), ya que se ha desarrollado [teniendo en cuenta](https://lwn.net/Articles/589147/) la seguridad. Su predecesor, [X11](https://en.wikipedia.org/wiki/X_Window_System), no soporta el aislamiento GUI, permitiendo que todas las ventanas [graben pantalla, registren e inyecten entradas en otras ventanas](https://blog.invisiblethings.org/2011/04/23/linux-security-circus-on-gui-isolation.html), haciendo inútil cualquier intento de sandboxing. Aunque hay opciones para hacer X11 anidado como [Xpra](https://en.wikipedia.org/wiki/Xpra) o [Xephyr](https://en.wikipedia.org/wiki/Xephyr), a menudo vienen con consecuencias negativas en el rendimiento y no son convenientes de configurar y no son preferibles sobre Wayland.

Afortunadamente, entornos comunes como [GNOME](https://www.gnome.org), [KDE](https://kde.org), y el gestor de ventanas [Sway](https://swaywm.org) tienen soporte para Wayland. Algunas distribuciones como Fedora y Tumbleweed lo utilizan por defecto, y es posible que otras lo hagan en el futuro, ya que X11 está en modo de [mantenimiento duro](https://www.phoronix.com/scan.php?page=news_item&px=X.Org-Maintenance-Mode-Quickly). Si estás utilizando uno de esos entornos es tan fácil como seleccionar la sesión "Wayland" en el gestor de pantalla del escritorio ([GDM](https://en.wikipedia.org/wiki/GNOME_Display_Manager), [SDDM](https://en.wikipedia.org/wiki/Simple_Desktop_Display_Manager)).

Estamos **en contra** de usar entornos de escritorio o gestores de ventanas que no tengan soporte para Wayland, como Cinnamon (por defecto en Linux Mint), Pantheon (por defecto en Elementary OS), MATE, Xfce e i3.

### Firmware propietario (actualizaciones de microcódigo)

Las distribuciones de Linux como las que son [Linux-libre](https://en.wikipedia.org/wiki/Linux-libre) o DIY (Arch Linux) no vienen con las actualizaciones de [ microcódigo](https://en.wikipedia.org/wiki/Microcode) propietarias que a menudo parchean las vulnerabilidades. Algunos ejemplos notables de estas vulnerabilidades incluyen [Spectre](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)), [Meltdown](https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)), [SSB](https://en.wikipedia.org/wiki/Speculative_Store_Bypass), [Foreshadow](https://en.wikipedia.org/wiki/Foreshadow), [MDS](https://en.wikipedia.org/wiki/Microarchitectural_Data_Sampling), [SWAPGS](https://en.wikipedia.org/wiki/SWAPGS_(security_vulnerability)), y otras [vulnerabilidades de hardware](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/index.html).

Nosotros **recomendamos encarecidamente** que instale las actualizaciones del microcódigo, ya que su CPU ya está ejecutando el microcódigo propietario de fábrica. Tanto Fedora como openSUSE tienen las actualizaciones de microcódigo aplicadas por defecto.

### Actualizaciones

La mayoría de las distribuciones de Linux instalan automáticamente las actualizaciones o le recuerdan que debe hacerlo. Es importante mantener el sistema operativo actualizado para que el software esté parcheado cuando se detecte una vulnerabilidad.

Algunas distribuciones (especialmente las dirigidas a usuarios avanzados) son más básicas y esperan que hagas las cosas tú mismo (por ejemplo, Arch o Debian). Será necesario ejecutar manualmente el "gestor de paquetes" (`apt`, `pacman`, `dnf`, etc.) para recibir actualizaciones de seguridad importantes.

Además, algunas distribuciones no descargan automáticamente las actualizaciones de firmware. Para eso necesitarás instalar [`fwupd`](https://wiki.archlinux.org/title/Fwupd).

## Ajustes de privacidad

### Aleatorización de direcciones Mac

Muchas distribuciones Linux de escritorio (Fedora, openSUSE, etc.) vienen con [NetworkManager](https://en.wikipedia.org/wiki/NetworkManager), para configurar los ajustes de Ethernet y Wi-Fi.

Es posible [aleatorizar](https://fedoramagazine.org/randomize-mac-address-nm/) la [dirección MAC](https://en.wikipedia.org/wiki/MAC_address) cuando se utiliza NetworkManager. Esto proporciona un poco más de privacidad en las redes Wi-Fi, ya que hace más difícil rastrear dispositivos específicos en la red a la que estás conectado. [**No**](https://papers.mathyvanhoef.com/wisec2016.pdf) te hace anónimo.

Recomendamos cambiar la configuración a **aleatoria** en lugar de **estable**, como se sugiere en el [artículo](https://fedoramagazine.org/randomize-mac-address-nm/).

Si estás utilizando [systemd-networkd](https://en.wikipedia.org/wiki/Systemd#Ancillary_components), necesitarás configurar [`MACAddressPolicy=random`](https://www.freedesktop.org/software/systemd/man/systemd.link.html#MACAddressPolicy=) que habilitará [RFC 7844 (Perfiles de anonimato para clientes DHCP)](https://www.freedesktop.org/software/systemd/man/systemd.network.html#Anonymize=).

No tiene mucho sentido aleatorizar la dirección MAC para las conexiones Ethernet, ya que un administrador del sistema puede encontrarte mirando el puerto que estás utilizando en el [conmutador de red](https://en.wikipedia.org/wiki/Network_switch). La aleatorización de las direcciones MAC Wi-Fi depende del soporte del firmware de la Wi-Fi.

### Otros identificadores

Hay otros identificadores del sistema con los que conviene tener cuidado. Deberías pensar en esto para ver si se aplica a tu [modelo de amenaza](../basics/threat-modeling.md):

- **Nombres de host:** El nombre de host de tu sistema se comparte con las redes a las que te conectas. Debes evitar incluir términos identificativos como tu nombre o tu sistema operativo en tu nombre de host, en su lugar, cíñete a términos genéricos o cadenas de caracteres aleatorias.
- **Nombres de usuario:** Del mismo modo, tu nombre de usuario se utiliza de diversas maneras en todo el sistema. Considera la posibilidad de utilizar términos genéricos como "usuario" en lugar de tu nombre real.
- **ID de máquina:**: Durante la instalación se genera un ID de máquina único que se almacena en tu dispositivo. Considera [configurarlo en un ID genérico](https://madaidans-insecurities.github.io/guides/linux-hardening.html#machine-id).

### Contador de sistema

El Proyecto Fedora [cuenta](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting) cuántos sistemas únicos acceden a sus réplicas utilizando una variable [`countme`](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting#Detailed_Description) en lugar de un ID único. Fedora hace esto para determinar la carga y aprovisionar mejores servidores para las actualizaciones cuando sea necesario.

Esta [opción](https://dnf.readthedocs.io/en/latest/conf_ref.html#options-for-both-main-and-repo) está actualmente desactivada por defecto. Recomendamos añadir `countme=false` en `/etc/dnf/dnf.conf` por si se habilita en el futuro. En sistemas que utilizan `rpm-ostree` como Silverblue, la opción countme se desactiva enmascarando el temporizador [rpm-ostree-countme](https://fedoramagazine.org/getting-better-at-counting-rpm-ostree-based-systems/).

openSUSE también utiliza un [ID único](https://en.opensuse.org/openSUSE:Statistics) para contar los sistemas, que puede desactivarse borrando el archivo `/var/lib/zypp/AnonymousUniqueId`.

---
title: "Armazenamento em nuvem"
icon: fontawesome/brands/linux
---

Linux distributions are commonly recommended for privacy protection and software freedom. If you don't already use Linux, below are some distributions we suggest trying out, as well as some general privacy and security improvement tips that are applicable to many Linux distributions.

- [General Linux Overview :material-arrow-right-drop-circle:](os/linux-overview.md)

## Distribuições Tradicionais

### Estação de Trabalho Fedora

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logotipo Fedora](/assets/img/linux-desktop/fedora-workstation.svg){ align=right }
    
    **Fedora Workstation** é a nossa distribuição recomendada para usuários novos no Linux. A Fedora geralmente adota novas tecnologias antes de outras distribuições, por exemplo, [Wayland](https://wayland.freedesktop.org/), [PipeWire](https://pipewire.org), e em breve, [FS-Verity](https://fedoraproject.org/wiki/Changes/FsVerityRPM). Estas novas tecnologias muitas vezes vêm com melhorias na segurança, privacidade e usabilidade em geral.
    
    [Visite getfedora.org](https://getfedora.org/){ .md-button .md-button--primary }

Fedora has a semi-rolling release cycle. While some packages like [GNOME](https://www.gnome.org) are frozen until the next Fedora release, most packages (including the kernel) are updated frequently throughout the lifespan of the release. Each Fedora release is supported for one year, with a new version released every 6 months.

### openSUSE Tumbleweed

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logotipo do openSUSE Tumbleweed](/assets/img/linux-desktop/opensuse-tumbleweed.svg){ align=right }
    
    **openSUSE Tumbleweed** é uma distribuição estável [lançamento rolante](https://en.wikipedia.org/wiki/Rolling_release).
    
    O openSUSE Tumbleweed tem um sistema [transactional update](https://kubic.opensuse.org/blog/2018-04-04-transactionalupdates/) que usa [Btrfs](https://en.wikipedia.org/wiki/Btrfs) e [Snapper](https://en.opensuse.org/openSUSE:Snapper_Tutorial) para garantir que os instantâneos possam ser rolados de volta caso haja algum problema.
    
    [Visite get.opensuse.org](https://get.opensuse.org/tumbleweed/){ .md-button .md-button--primary }

Tumbleweed follows a rolling release model where each update is released as a snapshot of the distribution. When you upgrade your system, a new snapshot is downloaded. Each snapshot is run through a series of automated tests by [openQA](https://openqa.opensuse.org) to ensure its quality.

### Arco Linux

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Arch logo](/assets/img/linux-desktop/archlinux.svg){ align=right }
    
    **Arch Linux** é uma distribuição leve, faça-você-mesmo (faça você mesmo), o que significa que você só recebe o que você instala. Para mais informações consulte o seu [FAQ](https://wiki.archlinux.org/title/Frequently_asked_questions).
    
    [Visite archlinux.org](https://archlinux.org/){ .md-button .md-button--primary }

Sendo uma distribuição DIY, o usuário é [esperado para configurar e manter](/linux-desktop/#arch-based-distributions) seu sistema. Arch tem um [instalador oficial](https://wiki.archlinux.org/title/Archinstall) para tornar o processo de instalação um pouco mais fácil.

Being a DIY distribution, you are [expected to set up and maintain](os/linux-overview.md#arch-based-distributions) your system on your own. Arch has an [official installer](https://wiki.archlinux.org/title/Archinstall) to make the installation process a little easier.

A large portion of [Arch Linux’s packages](https://reproducible.archlinux.org) are [reproducible](https://reproducible-builds.org).

## Distribuições imutáveis

### Fedora Silverblue

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logotipo Fedora Silverblue](/assets/img/linux-desktop/fedora-silverblue.svg){ align=right }
    
    **Fedora Silverblue** e **Fedora Kinoite*** são variantes imutáveis do Fedora com um forte foco nos fluxos de trabalho dos contentores. Silverblue vem com o ambiente de trabalho [GNOME](https://www.gnome.org/) enquanto que a Kinoite vem com [KDE](https://kde.org/). Silverblue e Kinoite seguem o mesmo calendário de lançamento da Estação de Trabalho Fedora, beneficiando das mesmas atualizações rápidas e ficando muito perto do upstream.
    
    [Visite silverblue.fedoraproject.org](https://silverblue.fedoraproject.org/){ .md-button .md-button--primary }

Após a atualização estar completa, o usuário reiniciará o sistema para a nova implantação. `rpm-ostree` mantém duas implantações do sistema para que um usuário possa facilmente reverter se algo quebrar na nova implantação. Há também a opção de fixar mais implantações conforme necessário.

After the update is complete you will reboot the system into the new deployment. `rpm-ostree` keeps two deployments of the system so that you can easily rollback if something breaks in the new deployment. There is also the option to pin more deployments as needed.

Como alternativa aos Flatpaks, existe a opção de [Toolbox](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/) para criar [Podman](https://podman.io) containers com um diretório home compartilhado com o sistema operacional host e imitar um ambiente Fedora tradicional, que é um [recurso útil](https://containertoolbx.org) para o desenvolvedor perspicaz.

As an alternative to Flatpaks, there is the option of [Toolbox](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/) to create [Podman](https://podman.io) containers with a shared home directory with the host operating system and mimic a traditional Fedora environment, which is a [useful feature](https://containertoolbx.org) for the discerning developer.

### NixOS

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logo NixOS](/assets/img/linux-desktop/nixos.svg){ align=right }
    
    NixOS é uma distribuição independente baseada no gerenciador de pacotes Nix com foco na reprodutibilidade e confiabilidade.
    
    [Visite nixos.org](https://nixos.org/){ .md-button .md-button--primary }

O NixOS também fornece atualizações atômicas; primeiro ele baixa (ou constrói) os pacotes e arquivos para a nova geração do sistema e depois muda para ele. Existem diferentes maneiras de mudar para uma nova geração; você pode dizer ao NixOS para ativá-lo após o reinício ou você pode mudar para ele em tempo de execução. Você também pode *testar* a nova geração mudando para ela em tempo de execução, mas não definindo-a como a geração atual do sistema.

NixOS also provides atomic updates; first it downloads (or builds) the packages and files for the new system generation and then switches to it. There are different ways to switch to a new generation; you can tell NixOS to activate it after reboot or you can switch to it at runtime. You can also *test* the new generation by switching to it at runtime, but not setting it as the current system generation. If something in the update process breaks, you can just reboot and automatically and return to a working version of your system.

Nix the package manager uses a purely functional language - which is also called Nix - to define packages.

Nix é um gerenciador de pacotes baseado no código fonte; se não houver um pré-cache binário disponível, Nix irá apenas construir o pacote a partir do código fonte usando sua definição. Ele constrói cada pacote em um ambiente sandboxed *puro* , que é o mais independente possível do sistema hospedeiro, tornando assim os binários reprodutíveis.

Nix is a source-based package manager; if there’s no pre-built available in the binary cache, Nix will just build the package from source using its definition. It builds each package in a sandboxed *pure* environment, which is as independent of the host system as possible, thus making binaries reproducible.

## Distribuições Anónimas-Focusadas

### Whonix

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![Whonix logo](/assets/img/linux-desktop/whonix.svg){ align=right }
    
    **Whonix** é baseado em [Kicksecure](https://www.whonix.org/wiki/Kicksecure), um garfo focado na segurança do Debian. O seu objectivo é proporcionar privacidade, segurança e anonimato na Internet. Whonix is best used in conjunction with [Qubes OS](#qubes-os).
    
    [:octicons-home-16: Homepage](https://www.whonix.org/){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://www.dds6qkxpwdeubwucdiaord2xgbbeyds25rbsgr73tbfpqpt4a6vjwsyd.onion){ .card-link title="Onion Service" }
    [:octicons-info-16:](https://www.whonix.org/wiki/Documentation){ .card-link title=Documentation}
    [:octicons-heart-16:](https://www.whonix.org/wiki/Donate){ .card-link title=Contribute }

Whonix is meant to run as two virtual machines: a “Workstation” and a Tor “Gateway.” All communications from the Workstation must go through the Tor gateway. This means that even if the Workstation is compromised by malware of some kind, the true IP address remains hidden.

As futuras versões da Whonix provavelmente incluirão [políticas completas do sistema Apparmor](https://github.com/Whonix/apparmor-profile-everything) e um [lançador de aplicativos sandbox](https://www.whonix.org/wiki/Sandbox-app-launcher) para confinar totalmente todos os processos no sistema.

Whonix é melhor usado [em conjunto com Qubes](https://www.whonix.org/wiki/Qubes/Why_use_Qubes_over_other_Virtualizers).

Whonix is best used [in conjunction with Qubes](https://www.whonix.org/wiki/Qubes/Why_use_Qubes_over_other_Virtualizers), Qubes-Whonix has various [disadvantages](https://forums.whonix.org/t/qubes-whonix-security-disadvantages-help-wanted/8581) when compared to other hypervisors.

### Caudas

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    !(/assets/img/linux-desktop/tails.svg){ align=right }
    
    **Tails** é um sistema operacional live baseado no Debian que roteia todas as comunicações através do Tor. Pode arrancar em quase qualquer computador a partir de um DVD, pen USB ou sdcard.
    
    O seu objectivo é preservar a privacidade e o anonimato, contornando a censura e não deixando qualquer vestígio de si no computador em que é utilizado.

Acredita-se frequentemente que [open source](https://en.wikipedia.org/wiki/Open-source_software) software é intrinsecamente seguro porque o código fonte está disponível. Há uma expectativa de que a verificação da comunidade ocorra regularmente; no entanto, isto nem sempre é [o caso](https://seirdy.one/2022/02/02/floss-security.html). A Tails system that is compromised by malware may potentially bypass the transparent proxy allowing for the user to be deanonymized.

Tails includes [uBlock Origin](desktop-browsers.md#ublock-origin) in Tor Browser by default, which may potentially make it easier for adversaries to fingerprint Tails users. [Whonix](desktop.md#whonix) virtual machines may be more leak-proof, however they are not amnesic, meaning data may be recovered from your storage device.

By design, Tails is meant to completely reset itself after each reboot. Encrypted [persistent storage](https://tails.boum.org/doc/persistent_storage/index.en.html) can be configured to store some data between reboots.

## Security-focused Distributions

### SO Qubes

!!! nota
    Consulte o [Tabela de Hardware](https://openwrt.org/toh/start) para verificar se o seu dispositivo é suportado.

    ![logótipo do SO Qubes](/assets/img/qubes/qubes_os.svg){ align=right }
    
    **Qubes*** é um sistema operacional open-source projetado para fornecer uma forte segurança para a computação desktop. Qubes é baseado no Xen, o Sistema X Window e Linux, e pode executar a maioria das aplicações Linux e utilizar a maioria dos drivers Linux.
    
    [:octicons-home-16: Homepage](https://www.qubes-os.org/){ .md-button .md-button--primary }
    [:material-arrow-right-drop-circle: Overview](os/qubes-overview.md){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://qubesosfasa4zl44o4tws22di6kepyzfeqv3tg4e3ztknltfxqrymdad.onion){ .card-link title="Onion Service" }
    [:octicons-eye-16:](https://www.qubes-os.org/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://www.qubes-os.org/doc/){ .card-link title=Documentation }
    [:octicons-code-16:](https://github.com/QubesOS/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.qubes-os.org/donate/){ .card-link title=Contribute }

Qubes OS is a Xen-based operating system meant to provide strong security for desktop computing through secure virtual machines (VMs), also known as *Qubes*.

The Qubes OS operating system secures the computer by isolating subsystems (e.g., networking, USB, etc.) and applications in separate VMs. Should one part of the system be compromised, the extra isolation is likely to protect the rest of the system. For further details see the Qubes [FAQ](https://www.qubes-os.org/faq/).

## Framadate

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

!!! Considere o auto-hospedagem para mitigar esta ameaça.

    ![logo PrivateBin](/assets/img/productivity/privatebin.svg){ align=right }
    
    **PrivateBin** é um pastebin online minimalista e de código aberto onde o servidor tem zero conhecimento de dados colados. Os dados são criptografados/descriptografados no navegador usando AES de 256 bits. Psono suporta compartilhamento seguro de senhas, arquivos, marcadores e e-mails.

Our recommended operating systems:

- Must be open-source.
- Must receive regular software and Linux kernel updates.
- Linux distributions must support [Wayland](os/linux-overview.md#Wayland).
- Must support full-disk encryption during installation.
- Must not freeze regular releases for more than 1 year. We [do not recommend](os/linux-overview.md#release-cycle) "Long Term Support" or "stable" distro releases for desktop usage.
- Must support a wide variety of hardware.

--8<-- "includes/abbreviations.pt.txt"

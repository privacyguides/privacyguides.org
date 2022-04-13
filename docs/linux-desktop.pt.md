---
title: Linux
icon: fontawesome/brands/linux
---

As distribuições Linux são normalmente recomendadas para proteção de privacidade e liberdade do usuário. Abaixo estão algumas sugestões com algumas melhorias gerais de privacidade e segurança.

## Distribuições Tradicionais

### Estação de Trabalho Fedora

!!! recomendação

    ![logotipo Fedora](/assets/img/linux-desktop/fedora-workstation.svg){ align=right }
    
    **Fedora Workstation** é a nossa distribuição recomendada para usuários novos no Linux. A Fedora geralmente adota novas tecnologias antes de outras distribuições, por exemplo, [Wayland](https://wayland.freedesktop.org/), [PipeWire](https://pipewire.org), e em breve, [FS-Verity](https://fedoraproject.org/wiki/Changes/FsVerityRPM). Estas novas tecnologias muitas vezes vêm com melhorias na segurança, privacidade e usabilidade em geral.
    
    [Visite getfedora.org](https://getfedora.org/){ .md-button .md-button--primary }

O Fedora tem um ciclo semi[rolling release](https://en.wikipedia.org/wiki/Rolling_release) . Enquanto alguns pacotes como [GNOME](https://www.gnome.org) são congelados até o próximo lançamento do Fedora, a maioria dos pacotes (incluindo o kernel) são atualizados frequentemente durante toda a vida útil do lançamento. Cada lançamento do Fedora é suportado por um ano, com uma nova versão lançada a cada 6 meses.

### openSUSE Tumbleweed

!!! recomendação

    ![logotipo do openSUSE Tumbleweed](/assets/img/linux-desktop/opensuse-tumbleweed.svg){ align=right }
    
    **openSUSE Tumbleweed** é uma distribuição estável [lançamento rolante](https://en.wikipedia.org/wiki/Rolling_release).
    
    O openSUSE Tumbleweed tem um sistema [transactional update](https://kubic.opensuse.org/blog/2018-04-04-transactionalupdates/) que usa [Btrfs](https://en.wikipedia.org/wiki/Btrfs) e [Snapper](https://en.opensuse.org/openSUSE:Snapper_Tutorial) para garantir que os instantâneos possam ser rolados de volta caso haja algum problema.
    
    [Visite get.opensuse.org](https://get.opensuse.org/tumbleweed/){ .md-button .md-button--primary }

O Tumbleweed segue um modelo de lançamento rolante onde cada atualização é lançada como um instantâneo da distribuição. Quando o usuário atualiza seu sistema, um novo snapshot é baixado. Cada snapshot é executado através de uma série de testes automáticos pelo [openSUSE Build Service](https://build.opensuse.org) para garantir a sua qualidade.

### Arco Linux

!!! recomendação

    ![Arch logo](/assets/img/linux-desktop/archlinux.svg){ align=right }
    
    **Arch Linux** é uma distribuição leve, faça-você-mesmo (faça você mesmo), o que significa que você só recebe o que você instala. Para mais informações consulte o seu [FAQ](https://wiki.archlinux.org/title/Frequently_asked_questions).
    
    [Visite archlinux.org](https://archlinux.org/){ .md-button .md-button--primary }

O Arch Linux tem um ciclo de lançamento contínuo. Não há um calendário de lançamentos fixo e os pacotes são atualizados com muita freqüência.

Sendo uma distribuição DIY, o usuário é [esperado para configurar e manter](/linux-desktop/#arch-based-distributions) seu sistema. Arch tem um [instalador oficial](https://wiki.archlinux.org/title/Archinstall) para tornar o processo de instalação um pouco mais fácil.

Uma grande parte de [pacotes do Arch Linux](https://reproducible.archlinux.org) são [reprodutíveis](https://reproducible-builds.org).

## Distribuições imutáveis

### Fedora Silverblue

!!! recomendação

    ![logotipo Fedora Silverblue](/assets/img/linux-desktop/fedora-silverblue.svg){ align=right }
    
    **Fedora Silverblue** e **Fedora Kinoite*** são variantes imutáveis do Fedora com um forte foco nos fluxos de trabalho dos contentores. Silverblue vem com o ambiente de trabalho [GNOME](https://www.gnome.org/) enquanto que a Kinoite vem com [KDE](https://kde.org/). Silverblue e Kinoite seguem o mesmo calendário de lançamento da Estação de Trabalho Fedora, beneficiando das mesmas atualizações rápidas e ficando muito perto do upstream.
    
    [Visite silverblue.fedoraproject.org](https://silverblue.fedoraproject.org/){ .md-button .md-button--primary }

Silverblue (e Kinoite) diferem da Estação de Trabalho Fedora porque substituem o [DNF](https://fedoraproject.org/wiki/DNF) gestor de pacotes com uma alternativa muito mais avançada chamada [`rpm-ostree`](https://docs.fedoraproject.org/en-US/fedora/rawhide/system-administrators-guide/package-management/rpm-ostree/). A `rpm-ostree` gerenciador de pacotes funciona baixando uma imagem base para o sistema, então sobrepondo pacotes sobre ela em uma [git](https://en.wikipedia.org/wiki/Git)-como uma árvore de commit. Quando o sistema é atualizado, uma nova imagem base é baixada e as sobreposições serão aplicadas a essa nova imagem.

Após a atualização estar completa, o usuário reiniciará o sistema para a nova implantação. `rpm-ostree` mantém duas implantações do sistema para que um usuário possa facilmente reverter se algo quebrar na nova implantação. Há também a opção de fixar mais implantações conforme necessário.

[Flatpak](https://www.flatpak.org) é o método primário de instalação de pacotes nestas distrbuições, pois `rpm-ostree` destina-se apenas a sobrepor pacotes que não podem ficar dentro de um recipiente em cima da imagem base.

Como alternativa aos Flatpaks, existe a opção de [Toolbox](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/) para criar [Podman](https://podman.io) containers com um diretório home compartilhado com o sistema operacional host e imitar um ambiente Fedora tradicional, que é um [recurso útil](https://containertoolbx.org) para o desenvolvedor perspicaz.

### NixOS

!!! recomendação

    ![logo NixOS](/assets/img/linux-desktop/nixos.svg){ align=right }
    
    NixOS é uma distribuição independente baseada no gerenciador de pacotes Nix com foco na reprodutibilidade e confiabilidade.
    
    [Visite nixos.org](https://nixos.org/){ .md-button .md-button--primary }

O gestor de pacotes do NixOS mantém cada versão de cada pacote numa pasta diferente no **Nix store**. Devido a isso você pode ter diferentes versões do mesmo pacote instaladas no seu sistema. Após o conteúdo do pacote ter sido escrito na pasta, a pasta é feita somente para leitura.

O NixOS também fornece atualizações atômicas; primeiro ele baixa (ou constrói) os pacotes e arquivos para a nova geração do sistema e depois muda para ele. Existem diferentes maneiras de mudar para uma nova geração; você pode dizer ao NixOS para ativá-lo após o reinício ou você pode mudar para ele em tempo de execução. Você também pode *testar* a nova geração mudando para ela em tempo de execução, mas não definindo-a como a geração atual do sistema. Se algo no processo de atualização quebrar, você pode simplesmente reiniciar e automaticamente e retornar a uma versão funcional do seu sistema.

Nix o gerenciador de pacotes usa uma linguagem puramente funcional - que também é chamada de Nix - para definir pacotes.

[Nixpkgs](https://github.com/nixos/nixpkgs) (a fonte principal dos pacotes) estão contidos em um único repositório Github. Você também pode definir seus próprios pacotes no mesmo idioma e depois incluí-los facilmente na sua configuração.

Nix é um gerenciador de pacotes baseado no código fonte; se não houver um pré-cache binário disponível, Nix irá apenas construir o pacote a partir do código fonte usando sua definição. Ele constrói cada pacote em um ambiente sandboxed *puro* , que é o mais independente possível do sistema hospedeiro, tornando assim os binários reprodutíveis.

## Distribuições Anónimas-Focusadas

### Whonix

!!! recomendação

    ![Whonix logo](/assets/img/linux-desktop/whonix.svg){ align=right }
    
    **Whonix** é baseado em [Kicksecure](https://www.whonix.org/wiki/Kicksecure), um garfo focado na segurança do Debian. O seu objectivo é proporcionar privacidade, segurança e anonimato na Internet.
    
    [Visite whonix.org](https://www.whonix.org/){ .md-button .md-button--primary }

A Whonix deve funcionar como duas máquinas virtuais: uma "Workstation" e uma "Gateway" Tor. Todas as comunicações da Estação de Trabalho têm de passar pelo gateway Tor, e serão encaminhadas através da Rede Tor.

Algumas de suas características incluem o Tor Stream Isolation, [anonimização de teclas](https://www.whonix.org/wiki/Keystroke_Deanonymization#Kloak), [swap criptografado](https://github.com/Whonix/swap-file-creator), e um alocador de memória endurecida.

As futuras versões da Whonix provavelmente incluirão [políticas completas do sistema Apparmor](https://github.com/Whonix/apparmor-profile-everything) e um [lançador de aplicativos sandbox](https://www.whonix.org/wiki/Sandbox-app-launcher) para confinar totalmente todos os processos no sistema.

Whonix é melhor usado [em conjunto com Qubes](https://www.whonix.org/wiki/Qubes/Why_use_Qubes_over_other_Virtualizers).

### Caudas

!!! recomendação

    !(/assets/img/linux-desktop/tails.svg){ align=right }
    
    **Tails** é um sistema operacional live baseado no Debian que roteia todas as comunicações através do Tor.
    
    Pode arrancar em quase qualquer computador a partir de um DVD, pen USB ou sdcard. O seu objectivo é preservar a privacidade e o anonimato, contornando a censura e não deixando qualquer vestígio de si no computador em que é utilizado.
    
    [Visite tails.boum.org](https://tails.boum.org/){ .md-button .md-button--primary }

Pelo seu design, a Cauda destina-se a ser completamente reiniciada após cada reinicialização. Encriptado [armazenamento persistente](https://tails.boum.org/doc/first_steps/persistence/index.en.html) pode ser configurado para armazenar alguns dados.

## Visão Geral do GNU/Linux

Acredita-se frequentemente que [open source](https://en.wikipedia.org/wiki/Open-source_software) software é intrinsecamente seguro porque o código fonte está disponível. Há uma expectativa de que a verificação da comunidade ocorra regularmente; no entanto, isto nem sempre é [o caso](https://seirdy.one/2022/02/02/floss-security.html). Depende de uma série de factores, tais como a actividade do projecto, experiência do programador, nível de rigor aplicado a [revisões de código](https://en.wikipedia.org/wiki/Code_review), e quantas vezes é dada atenção a partes específicas do [codebase](https://en.wikipedia.org/wiki/Codebase) que podem ficar intocadas durante anos.

No momento, o desktop GNU/Linux tem algumas áreas que poderiam ser melhoradas quando comparadas com suas contrapartes proprietárias, por exemplo:

- Uma cadeia de boot verificada, ao contrário do [Secure Boot](https://support.apple.com/guide/security/startup-security-utility-secc7b34e5b5/web) (com [Secure Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1)), Android's [Verified Boot](https://source.android.com/security/verifiedboot) ou Microsoft Windows [processo de inicialização](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process) com [TPM](https://docs.microsoft.com/en-us/windows/security/information-protection/tpm/how-windows-uses-the-tpm). Todos estes recursos e tecnologias de hardware podem ajudar a evitar a violação persistente por malware ou [ataques de empregada malvada](https://en.wikipedia.org/wiki/Evil_Maid_attack)
- Solução de sandboxing forte como a encontrada em [MacOS](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html), [ChromeOS](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/sandboxing.md), e [Android](https://source.android.com/security/app-sandbox). Soluções sandboxing Linux comumente utilizadas, tais como [Flatpak](https://docs.flatpak.org/en/latest/sandbox-permissions.html) e [Firejail](https://firejail.wordpress.com/) ainda têm um longo caminho a percorrer
- Strong [mitigações de exploração](https://madaidans-insecurities.github.io/linux.html#exploit-mitigations)

Apesar destes inconvenientes, as distribuições desktop GNU/Linux são ótimas, se você quiser:

- Evite a telemetria, que muitas vezes vem com sistemas operacionais proprietários.
- Manter [liberdade de software](https://www.gnu.org/philosophy/free-sw.en.html#four-freedoms)
- Ter sistemas construídos propositadamente tais como [Whonix](https://www.whonix.org) ou [Tails](https://tails.boum.org/)

Esta página usa o termo "Linux" para descrever as distribuições desktop GNU/Linux. Outros sistemas operacionais que também usam o kernel Linux, como ChromeOS, Android e Qubes OS, não são discutidos aqui.

### Ciclo de liberação

Recomendamos vivamente que você escolha distribuições que se mantenham próximas às versões estáveis do software a montante. Isto é porque as distribuições de ciclos de lançamento congelados frequentemente não atualizam as versões dos pacotes e ficam para trás nas atualizações de segurança.

Para distribuições congeladas, espera-se que os mantenedores de pacotes façam backport de patches para corrigir vulnerabilidades (Debian é um desses [exemplo](https://www.debian.org/security/faq#handling)) em vez de fazer bump do software para a "próxima versão" lançada pelo desenvolvedor upstream. Algumas correcções de segurança [não](https://arxiv.org/abs/2105.14565) recebem um [CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (particularmente software menos popular) e por isso não entram na distribuição com este modelo de patching. Como resultado, pequenas correcções de segurança são por vezes retidas até ao próximo lançamento principal.

Nós não acreditamos que segurar pacotes e aplicar patches interinos é uma boa idéia, já que diverge da maneira que o desenvolvedor poderia ter pretendido que o software funcionasse. [Richard Brown](https://rootco.de/aboutme/) tem uma apresentação sobre isto:

<iframe width="100%" style="height:50vh"
  src="https://www.youtube-nocookie.com/embed/i8c0mg_mS7U"
  title="Os lançamentos regulares estão errados, rolar pela sua vida"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

### Actualizações Tradicionais vs Atómicas

Tradicionalmente, as distribuições Linux são atualizadas atualizando sequencialmente os pacotes desejados. Atualizações tradicionais como as usadas no Fedora, Arch Linux, e distribuições baseadas em Debian podem ser menos confiáveis se um erro ocorrer durante a atualização.

As distribuições de actualizações atómicas aplicam as actualizações na íntegra ou não aplicam de todo. Tipicamente, os sistemas de atualização transacional também são atômicos.

Um sistema de atualização transacional cria um instantâneo que é feito antes e depois que uma atualização é aplicada. Se uma atualização falhar a qualquer momento (talvez devido a uma falha de energia), a atualização pode ser facilmente revertida para um "último bom estado conhecido".

O método Atomic update é usado para distribuições imutáveis como Silverblue, Tumbleweed e NixOS e pode alcançar confiabilidade com este modelo. [Adam Šamalík](https://twitter.com/adsamalik) fez uma apresentação sobre como `rpm-ostree` trabalha com Silverblue:

<iframe width="100%" style="height:50vh"
  src="https://www.youtube-nocookie.com/embed/-hpV5l-gJnQ"
  title="Vamos experimentar o Fedora Silverblue - um SO de desktop imutável! - AdamStramalik"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

### Distribuições "focadas na segurança".

Há frequentemente alguma confusão sobre distribuições "focadas na segurança" e distribuições "pentesting". Uma busca rápida por "a distribuição Linux mais segura" dará freqüentemente resultados como Kali Linux, Black Arch e Parrot OS. Estas distribuições são distribuições de testes de penetração ofensivos que agrupam ferramentas para testar outros sistemas. Eles não incluem qualquer "segurança extra" ou mitigações defensivas destinadas ao uso regular.

### Distribuições baseadas em arco

As distribuições baseadas em arco não são recomendadas para novos usuários, independentemente da distribuição. Arch não tem um mecanismo de actualização de distribuição para as escolhas de software subjacentes. Como resultado, o usuário do sistema deve permanecer atento às tendências atuais e adotar tecnologias à medida que estas se sobrepõem às práticas mais antigas.

Para um sistema seguro, espera-se também que o usuário tenha conhecimento suficiente de Linux para configurar adequadamente a segurança de seu sistema, como a adoção de um sistema [controle de acesso obrigatório](https://en.wikipedia.org/wiki/Mandatory_access_control) , configurando [kernel module](https://en.wikipedia.org/wiki/Loadable_kernel_module#Security) blacklists, endurecendo parâmetros de inicialização, manipulando [sysctl](https://en.wikipedia.org/wiki/Sysctl) parameters, e sabendo quais componentes eles precisam, como [Polkit](https://en.wikipedia.org/wiki/Polkit).

Qualquer usuário usando o [Arch User Repository (AUR)](https://wiki.archlinux.org/title/Arch_User_Repository), **deve** estar confortável em auditar PKGBUILDs que eles instalam a partir desse serviço. Os pacotes AUR são conteúdos produzidos pelo usuário e não são vetados de forma alguma e, portanto, são vulneráveis a ataques da cadeia de fornecimento de software, o que de fato já aconteceu [no passado](https://www.bleepingcomputer.com/news/security/malware-found-in-arch-linux-aur-package-repository/). AUR deve ser sempre usado com moderação e muitas vezes há muitos maus conselhos em várias páginas que direcionam os usuários a usar cegamente [AUR helpers](https://wiki.archlinux.org/title/AUR_helpers) sem aviso suficiente. Avisos similares aplicam-se ao uso de Arquivos de Pacotes Pessoais (PPAs) de terceiros em distribuições baseadas em Debian ou Projetos Comunitários (COPR) no Fedora.

Para usuários avançados, recomendamos apenas o Arch Linux, não qualquer um de seus derivados. Nós recomendamos contra estes dois derivados do Arco especificamente:

- **Manjaro**: Esta distribuição retém os pacotes durante 2 semanas para garantir que as suas próprias alterações não se partem, não para garantir que o upstream é estável. Quando pacotes AUR são usados, eles são frequentemente construídos contra o último [bibliotecas](https://en.wikipedia.org/wiki/Library_(computing)) dos repositórios do Arch.
- **Garuda**: Eles usam [Chaotic-AUR](https://aur.chaotic.cx/) que compila automaticamente e cegamente pacotes a partir do AUR. Não há nenhum processo de verificação para garantir que os pacotes AUR não sofram ataques da cadeia de fornecimento.

### Kernel Linux-libre e distribuições "Libre

Nós recomendamos fortemente **contra** usando o kernel Linux-libre, pois ele [remove mitigações de segurança](https://www.phoronix.com/scan.php?page=news_item&px=GNU-Linux-Libre-5.7-Released) e [suprime avisos do kernel](https://news.ycombinator.com/item?id=29674846) sobre microcódigos vulneráveis por razões ideológicas.

## Recomendações Gerais

### Criptografia de acionamento

A maioria das distribuições Linux tem uma opção de instalação para habilitar [Linux Unified Key Setup (LUKS)](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) encriptação na instalação.

Se esta opção não estiver definida no momento da instalação, o usuário terá que fazer backup de seus dados e reinstalar, pois a criptografia é aplicada após [particionamento de disco](https://en.wikipedia.org/wiki/Disk_partitioning) mas antes de [sistemas de arquivo](https://en.wikipedia.org/wiki/File_system) são [formatados](https://en.wikipedia.org/wiki/Disk_formatting).

Ao apagar com segurança dispositivos de armazenamento como um [Solid-state drive (SSD)](https://en.wikipedia.org/wiki/Solid-state_drive) você deve usar o comando [ATA Secure Erase](https://ata.wiki.kernel.org/index.php/ATA_Secure_Erase) . Este comando pode ser emitido a partir da sua configuração UEFI. Se o dispositivo de armazenamento for um normal [disco rígido](https://en.wikipedia.org/wiki/Hard_disk_drive), considere o uso de [`nwipe`](https://en.wikipedia.org/wiki/Nwipe).

### Swap

Considere usar [ZRAM](https://wiki.archlinux.org/title/Swap#zram-generator) ou [swap criptografado](https://wiki.archlinux.org/title/Dm-crypt/Swap_encryption) em vez de swap não criptografado para evitar possíveis problemas de segurança com dados sensíveis sendo empurrados para [espaço swap](https://en.wikipedia.org/wiki/Memory_paging). Distribuições baseadas em Fedora [use ZRAM](https://fedoraproject.org/wiki/Changes/SwapOnZRAM) por padrão.

### Wayland

Recomendamos a utilização de um ambiente de trabalho que suporte o protocolo [Wayland](https://en.wikipedia.org/wiki/Wayland_(display_server_protocol)) display protocol como desenvolvido com segurança [em mente](https://lwn.net/Articles/589147/). O seu predecessor, [X11](https://en.wikipedia.org/wiki/X_Window_System), não suporta isolamento GUI, permitindo a todas as janelas [gravar tela, logar e injetar entradas em outras janelas](https://blog.invisiblethings.org/2011/04/23/linux-security-circus-on-gui-isolation.html), tornando fútil qualquer tentativa de sandboxing. Embora existam opções para fazer o X11 aninhado como [Xpra](https://en.wikipedia.org/wiki/Xpra) ou [Xephyr](https://en.wikipedia.org/wiki/Xephyr), muitas vezes vêm com consequências negativas de desempenho e não são convenientes de configurar e não são preferíveis em relação ao Wayland.

Felizmente, ambientes comuns como [GNOME](https://www.gnome.org), [KDE](https://kde.org), e o gerenciador de janelas [Sway](https://swaywm.org) têm suporte para Wayland. Algumas distribuições como Fedora e Tumbleweed usam-no por padrão e outras podem fazê-lo no futuro, já que X11 está em [modo de manutenção dura](https://www.phoronix.com/scan.php?page=news_item&px=X.Org-Maintenance-Mode-Quickly). Se você estiver usando um desses ambientes é tão fácil quanto selecionar a sessão "Wayland" no gerenciador de telas do desktop ([GDM](https://en.wikipedia.org/wiki/GNOME_Display_Manager), [SDDM](https://en.wikipedia.org/wiki/Simple_Desktop_Display_Manager)).

Nós recomendamos **contra** usando ambientes desktop ou gerenciadores de janela que não têm suporte Wayland como Cinnamon (padrão no Linux Mint), Pantheon (padrão no SO Elementary), MATE, XFCE e i3.

### Firmware proprietário (atualizações de microcódigos)

Distribuições Linux como as que são [Linux-libre](https://en.wikipedia.org/wiki/Linux-libre) ou DIY (Arch Linux) não vêm com o proprietário [microcode](https://en.wikipedia.org/wiki/Microcode) updates. Alguns exemplos notáveis destas vulnerabilidades incluem [Spectre](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)), [Meltdown](https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)), [SSB](https://en.wikipedia.org/wiki/Speculative_Store_Bypass), [Foreshadow](https://en.wikipedia.org/wiki/Foreshadow), [MDS](https://en.wikipedia.org/wiki/Microarchitectural_Data_Sampling), [SWAPGS](https://en.wikipedia.org/wiki/SWAPGS_(security_vulnerability)), e outras [vulnerabilidades de hardware](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/index.html).

Nós **recomendamos fortemente** que você instale as atualizações do microcódigo, já que sua CPU já está rodando o microcódigo proprietário de fábrica. Fedora e openSUSE ambos têm as atualizações de microcódigos aplicadas por padrão.

## Ajustes de privacidade

### Aleatorização de endereços MAC

Muitas distribuições desktop Linux (Fedora, openSUSE etc) virão com [NetworkManager](https://en.wikipedia.org/wiki/NetworkManager), para configurar as configurações de Ethernet e Wi-Fi.

É possível [randomizar](https://fedoramagazine.org/randomize-mac-address-nm/) o [endereço MAC](https://en.wikipedia.org/wiki/MAC_address) ao utilizar o NetworkManager. Isso proporciona um pouco mais de privacidade nas redes Wi-Fi, pois torna mais difícil rastrear dispositivos específicos na rede à qual você está conectado. Ele faz [**não**](https://papers.mathyvanhoef.com/wisec2016.pdf) torna-o anónimo.

Recomendamos mudar a configuração para **aleatório** em vez de **estável**, como sugerido no artigo [](https://fedoramagazine.org/randomize-mac-address-nm/).

Se estiver a utilizar [systemd-networkd](https://en.wikipedia.org/wiki/Systemd#Ancillary_components), terá de definir [`MACAddressPolicy=random`](https://www.freedesktop.org/software/systemd/man/systemd.link.html#MACAddressPolicy=) que activará [RFC 7844 (Anonymity Profiles for DHCP Clients)](https://www.freedesktop.org/software/systemd/man/systemd.network.html#Anonymize=).

Não há muito sentido em randomizar o endereço MAC para conexões Ethernet, pois um administrador de sistema pode encontrá-lo olhando para a porta que você está usando no [switch de rede](https://en.wikipedia.org/wiki/Network_switch). A randomização de endereços MAC Wi-Fi depende do suporte do firmware da Wi-Fi.

### Outros identificadores

Existem outros sistemas [identificadores](https://madaidans-insecurities.github.io/guides/linux-hardening.html#identifiers) com os quais você pode querer ter cuidado. Você deve pensar um pouco para ver se isso se aplica ao seu [modelo de ameaça](/threat-modeling):

- [10.1 Hostnames e nomes de utilizador](https://madaidans-insecurities.github.io/guides/linux-hardening.html#hostnames)
- [10.2 Fusos horários / Locais / Keymaps](https://madaidans-insecurities.github.io/guides/linux-hardening.html#timezones-locales-keymaps)
- [10.3 Identificação da máquina](https://madaidans-insecurities.github.io/guides/linux-hardening.html#machine-id)

### Contagem do sistema

O Projeto Fedora [conta](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting) quantos sistemas únicos acessam seus espelhos usando um [`conta`](https://fedoraproject.org/wiki/Changes/DNF_Better_Counting#Detailed_Description) variável em vez de um ID único. O Fedora faz isso para determinar a carga e provisionar melhores servidores para atualizações quando necessário.

Este [opção](https://dnf.readthedocs.io/en/latest/conf_ref.html#options-for-both-main-and-repo) está atualmente desligado por padrão. Recomendamos adicionar `countme=false` a `/etc/dnf/dnf.conf` apenas no caso de ser activado no futuro. Em sistemas que usam `rpm-ostree` como o Silverblue, a opção countme é desabilitada mascarando o [rpm-ostree-countme](https://fedoramagazine.org/getting-better-at-counting-rpm-ostree-based-systems/) timer.

O openSUSE também usa um [ID único](https://en.opensuse.org/openSUSE:Statistics) para contar sistemas, que pode ser desabilitado apagando o arquivo `/var/lib/zypp/AnonymousUniqueId` .

## Sandboxing e confinamento de aplicações

Algumas soluções de sandboxing para distribuições desktop Linux existem, mas não são tão rígidas como as encontradas no MacOS ou ChromeOS. Aplicações instaladas a partir do gestor de pacotes (`dnf`, `apt`, etc.) tipicamente têm **no** sandboxing ou confinamento de qualquer tipo. Abaixo estão alguns projetos que visam resolver este problema:

### Flatpak

[Flatpak](https://flatpak.org) pretende ser um gestor de pacotes universal para Linux. Um de seus principais objetivos é fornecer um formato de pacote universal que possa ser usado na maioria das distribuições Linux. Ele fornece alguns [controle de permissão](https://docs.flatpak.org/en/latest/sandbox-permissions.html). Madaidan [aponta](https://madaidans-insecurities.github.io/linux.html#flatpak) que o Flatpak sandboxing poderia ser melhorado, uma vez que Flatpaks em particular tem frequentemente maior permissão do que a necessária. Parece haver [alguma concordância](https://theevilskeleton.gitlab.io/2021/02/11/response-to-flatkill-org.html) que este é o caso.

Os usuários podem restringir ainda mais as aplicações emitindo [Flatpak overrides](https://docs.flatpak.org/en/latest/flatpak-command-reference.html#flatpak-override). Isto pode ser feito com a linha de comando ou usando [Flatseal](https://flathub.org/apps/details/com.github.tchx84.Flatseal). Algumas substituições de amostras são fornecidas por [tommytran732](https://github.com/tommytran732/Flatpak-Overrides) e [serpente enferrujada](https://github.com/rusty-snake/kyst/tree/main/flatpak).

Geralmente recomendamos a revogação do acesso a:

- a rede (`share=network`) socket (acesso à internet)
- a tomada PulseAudio (tanto para entrada como para saída de áudio), `device=all` (acesso a todos os dispositivos incluindo a câmara)
- `org.freedesktop.secrets` dbus (acesso aos segredos armazenados no seu chaveiro) para aplicações que não precisam dele

Se uma aplicação funciona nativamente com Wayland (e não funciona através da camada de compatibilidade [XWayland](https://wayland.freedesktop.org/xserver.html) ), considere a revogação do seu acesso ao X11 (`socket='x11`) e [Inter-process communication (IPC)](https://en.wikipedia.org/wiki/Unix_domain_socket) socket (`share=ipc`) também.

Nós também recomendamos restringir permissões amplas de sistemas de arquivos como `filesystem=home` e `filesystem=host` que devem ser revogadas e substituídas por apenas os diretórios que o aplicativo precisa acessar. Algumas aplicações como [VLC](https://www.flathub.org/apps/details/org.videolan.VLC) implementam o [Portais](https://docs.flatpak.org/en/latest/portal-api-reference.html) [API](https://en.wikipedia.org/wiki/API), que permite que um gerenciador de arquivos passe arquivos para a aplicação Flatpak (por exemplo, VLC) sem privilégios específicos de acesso ao sistema de arquivos. A VLC só pode acessar o arquivo específico que o usuário deseja abrir, ao invés de requerer privilégios para locais específicos.

Hard-acesso codificado a algumas interfaces do kernel como [`/sys`](https://en.wikipedia.org/wiki/Sysfs) e [`/proc`](https://en.wikipedia.org/wiki/Procfs#Linux) e fraco [seccomp](https://en.wikipedia.org/wiki/Seccomp) filtros infelizmente não podem ser assegurados pelo usuário com Flatpak.

### Firejail

[Firejail](https://firejail.wordpress.com/) é outro método de sandboxing. Como é um grande [setuid](https://en.wikipedia.org/wiki/Setuid) binário, tem uma grande [superfície de ataque](https://en.wikipedia.org/wiki/Attack_surface) que pode ajudar em [escalada de privilégios](https://en.wikipedia.org/wiki/Privilege_escalation).

O principal risco é que o Firejail possa tornar o sistema mais seguro contra processos confinados por ele, mas também o torna menos seguro contra processos que correm fora do Firejail. Nós [não recomendamos](https://madaidans-insecurities.github.io/linux.html#firejail) o uso do Firejail.

### Controle de Acesso Obrigatório

[Controlo de acesso obrigatório](https://en.wikipedia.org/wiki/Mandatory_access_control) sistemas requerem ficheiros de políticas de forma a forçar restrições no sistema.

Os dois principais sistemas de controle são [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) (usado no Android e Fedora) e [AppArmor](https://en.wikipedia.org/wiki/AppArmor).

Fedora inclui o SELinux pré-configurado com algumas políticas que irão confinar [daemons do sistema](https://en.wikipedia.org/wiki/Daemon_(computing)) (processos em segundo plano). Nós não recomendamos desactivar o SELinux.

O openSUSE dá a escolha entre AppArmor ou SELinux durante o processo de instalação. Recomendamos que se mantenha o padrão para cada variante (AppArmor para [Tumbleweed](https://get.opensuse.org/tumbleweed/) e SELinux para [MicroOS](https://microos.opensuse.org/)). As políticas SELinux do openSUSE são derivadas do Fedora.

Os sistemas operativos Arch e Arch não vêm frequentemente com um sistema de controlo de acesso obrigatório e que deve ser configurado manualmente para [AppArmor](https://wiki.archlinux.org/title/AppArmor) ou [SELinux](https://wiki.archlinux.org/title/SELinux).

Os desktops Linux normalmente não incluem regras de confinamento de aplicativos individuais, ao contrário do Android, que faz o sandbox de cada aplicativo instalado.

### Fazendo suas próprias políticas/perfis

Para usuários avançados, você pode fazer seus próprios perfis AppArmor, políticas SELinux, perfis Bubblewrap, e [seccomp](https://en.wikipedia.org/wiki/Seccomp) blacklist para ter melhor confinamento das aplicações. Esta é uma tarefa bastante tediosa e complicada, por isso não vamos entrar em detalhes sobre como fazê-lo aqui, mas temos alguns projetos que você poderia usar como referência.

- Whonix's [AppArmor Everything](https://github.com/Whonix/apparmor-profile-everything)
- Krathalan's [AppArmor profiles](https://github.com/krathalan/apparmor-profiles)
- noatsecure's [modelos SELinux](https://github.com/noatsecure/hardhat-selinux-templates)
- Seirdy's [Bubblewrap scripts](https://sr.ht/~seirdy/bwrap-scripts)

### Segurança de contentores Linux

Se você estiver rodando um servidor, você já deve ter ouvido falar de Linux Containers, Docker ou Podman que se referem a um tipo de [Virtualização em nível de SO](https://en.wikipedia.org/wiki/OS-level_virtualization). Os contentores são mais comuns em ambientes de servidor e desenvolvimento onde as aplicações individuais são construídas para operar independentemente.

[Docker](https://en.wikipedia.org/wiki/Docker_(software)) é uma das soluções de contentor mais comuns. Não corre uma caixa de areia apropriada, o que significa que existe um grande kernel [superfície de ataque](https://en.wikipedia.org/wiki/Attack_surface). O [daemon](https://en.wikipedia.org/wiki/Daemon_(computing)) controla tudo e [tipicamente](https://docs.docker.com/engine/security/rootless/#known-limitations) corre como raiz. Se por alguma razão se despenhar, todos os contentores também se despenharão. O [gVisor](https://en.wikipedia.org/wiki/GVisor) runtime que implementa um kernel em nível de aplicação pode ajudar a limitar o número de [syscalls](https://en.wikipedia.org/wiki/System_call) que uma aplicação pode fazer e pode ajudar a isolá-la do host [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)).

Red Hat desenvolve [Podman](https://docs.podman.io/en/latest/) e o protege com SELinux para [isolar](https://www.redhat.com/sysadmin/apparmor-selinux-isolation) recipientes um do outro. Uma das diferenças notáveis entre Docker e Podman é que Docker requer [root](https://en.wikipedia.org/wiki/Superuser) enquanto Podman pode correr com [rootless containers](https://developers.redhat.com/blog/2020/09/25/rootless-containers-with-podman-the-basics) que também são [daemonless](https://developers.redhat.com/blog/2018/08/29/intro-to-podman), o que significa que se um crashar eles não caem todos.

Outra opção é [Kata containers](https://katacontainers.io/), onde as máquinas virtuais se mascaram como containers. Cada contentor Kata tem o seu próprio kernel Linux e está isolado do anfitrião.

Estas tecnologias de contentores podem ser úteis mesmo para utilizadores domésticos entusiastas que podem querer executar certos programas de aplicações web na sua rede local (LAN) como [vaultwarden](https://github.com/dani-garcia/vaultwarden) ou imagens fornecidas por [linuxserver.io](https://www.linuxserver.io) para aumentar a privacidade diminuindo a dependência de vários serviços web.

## Endurecimento adicional

### Firewalls

A [firewall](https://en.wikipedia.org/wiki/Firewall_(computing)) pode ser usado para proteger as conexões ao seu sistema. Se você está em uma rede pública, a necessidade disso pode ser maior do que se você estiver em uma rede local confiável que você controla. Nós geralmente recomendamos que você bloqueie conexões de entrada apenas, a menos que você esteja usando um firewall aplicativo como [OpenSnitch](https://github.com/evilsocket/opensnitch) ou [Portmaster](https://safing.io/portmaster/).

As distribuições da Red Hat (como o Fedora) são tipicamente configuradas através de [firewalld](https://en.wikipedia.org/wiki/Firewalld). Red Hat tem bastante [documentação](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_networking/using-and-configuring-firewalld_configuring-and-managing-networking) sobre este tópico. Há também o [Uncomplicated Firewall](https://en.wikipedia.org/wiki/Uncomplicated_Firewall) que pode ser usado como uma alternativa.

Considere bloquear todas as portas que são **não** [bem conhecidas](https://en.wikipedia.org/wiki/Well-known_port#Well-known_ports) ou "portas privilegiadas". Ou seja, portos de 1025 a 65535. Bloqueie ambos [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) e [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) depois que o sistema operacional estiver instalado.

Se você usa Fedora, considere remover a lista branca para [smb](https://en.wikipedia.org/wiki/Server_Message_Block)-cliente e [mdns](https://en.wikipedia.org/wiki/Multicast_DNS) serviços se você não usá-los.

Todas essas firewalls usam o framework [Netfilter](https://en.wikipedia.org/wiki/Netfilter) e, portanto, não podem proteger contra programas maliciosos rodando no sistema. Um programa malicioso poderia inserir as suas próprias regras.

Se você estiver usando pacotes Flatpak, você pode revogar o acesso à sua tomada de rede usando Flatseal e impedir que essas aplicações acessem a sua rede. Esta permissão não é passível de ser contornada.

Se você estiver usando pacotes não-clássicos [Snap](https://en.wikipedia.org/wiki/Snap_(package_manager)) em um sistema com suporte de confinamento de snap adequado (com AppArmor e [CGroupsv1](https://en.wikipedia.org/wiki/Cgroups) presente), você pode usar a Loja Snap para revogar a permissão de rede também. Isto também não é passível de ser contornado.

### Endurecimento do miolo

Existem algumas opções adicionais de endurecimento do kernel, como configurar [sysctl](https://en.wikipedia.org/wiki/Sysctl#Linux) chaves e [parâmetros de linha de comando do kernel](https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html) que são descritos nas páginas seguintes. Não recomendamos que você mude essas opções a menos que você aprenda sobre o que elas fazem.

- [2.2 Sysctl](https://madaidans-insecurities.github.io/guides/linux-hardening.html#sysctl)
- [2.3 Parâmetros de inicialização](https://madaidans-insecurities.github.io/guides/linux-hardening.html#boot-parameters)
- [2.5 Redução da superfície de ataque do núcleo](https://madaidans-insecurities.github.io/guides/linux-hardening.html#kernel-attack-surface-reduction)

Note que a configuração `kernel.unprivileged_userns_clone=0` irá parar o Flatpak, Snap (que depende do browser-sandbox), AppImages baseado em Electron, Podman, Docker, e contentores LXC de funcionar. Faça **não** defina esta bandeira se você estiver usando produtos em contêineres.

### Linux-Hardened

Algumas distribuições como o Arch Linux têm o pacote do kernel [linux-hardened](https://github.com/anthraxx/linux-hardened). Inclui [patches de endurecimento](https://wiki.archlinux.org/title/security#Kernel_hardening) e padrões mais preocupados com a segurança. Linux-Hardened tem `kernel.unprivileged_userns_clone=0` disabled by default. Veja o [aviso acima](/linux-desktop/#kernel-hardening) sobre como isso pode impactar você.

### Multithreading simultâneo (SMT)

[SMT](https://en.wikipedia.org/wiki/Simultaneous_multithreading) tem sido a causa de numerosas vulnerabilidades de hardware, e os patches subsequentes para essas vulnerabilidades muitas vezes vêm com penalidades de desempenho que negam a maior parte do ganho de desempenho dado pelo SMT. Se você seguiu a seção "kernel hardening" acima, alguns parâmetros do kernel já desabilitam o SMT. Se a opção estiver disponível para você, recomendamos que você a desabilite também em seu firmware.

### Alocador de memória endurecida

O [alocador de memória endurecida](https://github.com/GrapheneOS/hardened_malloc) de [GrapheneOS](https://grapheneos.org) pode ser usado em distribuições Linux. Ele está disponível por padrão na Whonix e está disponível como um pacote [AUR](https://wiki.archlinux.org/title/Security#Hardened_malloc) em distribuições baseadas em Arch. Se você estiver usando o pacote AUR, considere a configuração de `LD_PRELOAD` como descrito no [Arch Wiki](https://wiki.archlinux.org/title/Security#Hardened_malloc).

### Umask

Se você não estiver usando o openSUSE, considere mudar o padrão [umask](https://en.wikipedia.org/wiki/Umask) tanto para usuários regulares quanto para root para 077. Mudar umask para 077 pode quebrar o snapper no openSUSE e é **não** recomendado.

### Endurecimento do ponto de montagem

Considere adicionar o [seguintes opções](https://man7.org/linux/man-pages/man8/mount.8.html) `nodev`, `noexec`, e `nosuid` a [pontos de montagem](https://en.wikipedia.org/wiki/Mount_(computing)) que não precisam deles. Normalmente, estes poderiam ser aplicados a `/boot`, `/boot/efi`, `/home`, `/root`, e `/var`.

Se você usar [Toolbox](https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/), `/var/log/journal` não deve ter nenhuma dessas opções. Se você está no Arch Linux, não aplique `noexec` a `/var/tmp`.

### Módulos de Autenticação Linux Pluggable Authentication Modules (PAM)

Há também um endurecimento adicional para [PAM](https://en.wikipedia.org/wiki/Linux_PAM) para assegurar a autenticação ao seu sistema. [14. PAM](https://madaidans-insecurities.github.io/guides/linux-hardening.html#pam) tem algumas dicas sobre isto.

Nas distribuições da Red Hat você pode usar [`authselect`](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_authentication_and_authorization_in_rhel/configuring-user-authentication-using-authselect_configuring-authentication-and-authorization-in-rhel) para configurar isto e.g:

```bash
sudo authselect select <profile_id, default: sssd> with-faillock without-nullok with-pamaccess
```

Em sistemas onde [`pam_faillock`](https://man7.org/linux/man-pages/man8/pam_tally.8.html) não está disponível, considere usar [`pam_tally2`](https://man7.org/linux/man-pages/man8/pam_tally.8.html) em vez disso.

### proteção da porta USB

Para melhor proteger o seu [USB](https://en.wikipedia.org/wiki/USB) portas de ataques como [BadUSB](https://en.wikipedia.org/wiki/BadUSB) recomendamos [USBGuard](https://github.com/USBGuard/usbguard). USBGuard tem [documentação](https://github.com/USBGuard/usbguard#documentation) assim como o [Arch Wiki](https://wiki.archlinux.org/title/USBGuard).

Outra opção alternativa se você estiver usando o [linux-hardened](/linux-desktop/#linux-hardened) é o [`deny_new_usb`](https://github.com/GrapheneOS/linux-hardened/commit/96dc427ab60d28129b36362e1577b6673b0ba5c4) sysctl. Ver [Prevenir ataques USB com `linux-hardened`](https://blog.lizzie.io/preventing-usb-attacks-with-linux-hardened.html).

### Bota Segura

[Boot seguro](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface#Secure_Boot) pode ser usado para proteger o processo de inicialização, evitando o carregamento de [não assinado](https://en.wikipedia.org/wiki/Public-key_cryptography) [UEFI](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface) drivers ou [carregadores de inicialização](https://en.wikipedia.org/wiki/Bootloader). Algumas orientações para isso são fornecidas em [21. Segurança física](https://madaidans-insecurities.github.io/guides/linux-hardening.html#physical-security) e [21.4 Bota verificada](https://madaidans-insecurities.github.io/guides/linux-hardening.html#verified-boot).

Para obter mais recursos no Secure Boot, sugerimos que você dê uma olhada nos seguintes pontos para obter conselhos de instrução:

- O Archwiki's [Secure Boot](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot) artigo. Existem dois métodos principais, o primeiro é usar um [shim](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot#shim), o segundo modo mais completo é [usar suas próprias chaves](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot#Using_your_own_keys).

Para obter um histórico de como o Secure Boot funciona no Linux:

- [O Estranho Estado da Inicialização Autenticada e da Criptografia de Disco em Distribuições Genéricos Linux](https://0pointer.net/blog/authenticated-boot-and-disk-encryption-on-linux.html)
- [Rod Smith's Gerenciando Carregadeiras de Boot EFI para Linux](https://www.rodsbooks.com/efi-bootloaders/)
- [Lidar com a Bota Segura](https://www.rodsbooks.com/efi-bootloaders/secureboot.html)
- [Controlando o Boot Seguro](https://www.rodsbooks.com/efi-bootloaders/controlling-sb.html)

Um dos problemas com o boot seguro particularmente no Linux é que apenas o [chainloader](https://en.wikipedia.org/wiki/Chain_loading#Chain_loading_in_boot_manager_programs) (shim), o [boot loader](https://en.wikipedia.org/wiki/Bootloader) (GRUB), e o [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)) são verificados e é aí que a verificação pára. O [initramfs](https://en.wikipedia.org/wiki/Initial_ramdisk) é frequentemente deixado não verificado, não encriptado, e abre a janela para um ataque [maid mau](https://en.wikipedia.org/wiki/Evil_maid_attack) . Há algumas coisas que podem ser feitas para reduzir o risco, como por exemplo:

- Criando um [EFI Boot Stub](https://docs.kernel.org/admin-guide/efi-stub.html) que contém o [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)), [initramfs](https://en.wikipedia.org/wiki/Initial_ramdisk) e [microcódigo](https://en.wikipedia.org/wiki/Microcode). Este talão da EFI pode então ser assinado. Se você usar [dracut](https://en.wikipedia.org/wiki/Dracut_(software)) isto pode ser facilmente feito com o [`--uefi-stub` switch](https://man7.org/linux/man-pages/man8/dracut.8.html) ou o [`uefi_stub` config](https://www.man7.org/linux/man-pages/man5/dracut.conf.5.html) opção.
- [Criptografar a partição de arranque](https://wiki.archlinux.org/title/GRUB#Encrypted_/boot). No entanto, isto tem os seus próprios problemas, sendo o primeiro que [GRUB](https://en.wikipedia.org/wiki/GNU_GRUB) suporta apenas [LUKS1](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) e não o mais recente esquema padrão LUKS2. Como o bootloader roda em [modo protegido](https://en.wikipedia.org/wiki/Protected_mode) e falta o módulo de criptografia [aceleração SSE](https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions) o processo de boot levará minutos para ser concluído.
- Usando [TPM](https://en.wikipedia.org/wiki/Trusted_Platform_Module) para executar um [boot medido](https://www.krose.org/~krose/measured_boot).

Após configurar o Secure Boot é crucial que você defina uma "senha de firmware" (também chamada de "senha de supervisor, "senha BIOS" ou "senha UEFI"), caso contrário um adversário pode simplesmente desabilitar o Secure Boot.

Estas recomendações podem torná-lo um pouco mais resistente a ataques de [empregada malvada](https://en.wikipedia.org/wiki/Evil_maid_attack) , mas não são boas como um processo de inicialização devidamente verificado, como o encontrado em [Android](https://source.android.com/security/verifiedboot), [ChromeOS](https://support.google.com/chromebook/answer/3438631) ou [Windows](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process).

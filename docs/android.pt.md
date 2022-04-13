---
title: "Android"
icon: 'fontawesome/brands/android'
---

O Android é um sistema operacional seguro que tem forte [app sandboxing](https://source.android.com/security/app-sandbox), [Verified Boot](https://source.android.com/security/verifiedboot), e um robusto [permissão](https://developer.android.com/guide/topics/permissions/overview) sistema de controle.

A principal preocupação com a privacidade da maioria dos dispositivos Android é que eles normalmente incluem [Google Play Services](https://developers.google.com/android/guides/overview). Este componente é proprietário, [fonte fechada](https://en.wikipedia.org/wiki/Proprietary_software), tem um papel privilegiado no seu telefone, e pode recolher informação privada do utilizador. Não é uma parte do [Android Open Source Project](https://source.android.com/) (AOSP) nem está incluído com as derivadas abaixo.

## Derivados AOSP

### GrapheneOS

!!! recomendação

    ![GrapheneOS logo](/assets/img/android/grapheneos.svg#only-light){ align=right }
    ![GrapheneOS logo](/assets/img/android/grapheneos-dark.svg#only-dark){ align=right }
    
    **GrapheneOS*** é a melhor escolha quando se trata de privacidade e segurança.
    
    GrapheneOS fornece [endurecimento adicional de segurança](https://en.wikipedia.org/wiki/Hardening_(computação)) e melhorias na privacidade. Tem um [alocador de memória endurecida](https://github.com/GrapheneOS/hardened_malloc), permissões de rede e sensores, e vários outros [recursos de segurança](https://grapheneos.org/features). GrapheneOS também vem com atualizações completas de firmware e compilações assinadas, portanto [boot verificado](https://source.android.com/security/verifiedboot) é totalmente suportado.
    
    [Visite grapheneos.org](https://grapheneos.org/){ .md-button .md-button--primary } [Política de Privacidade](https://grapheneos.org/faq#privacy-policy){ .md-button }

Notavelmente, o GrapheneOS suporta [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play). Os Serviços Google Play podem ser executados como um aplicativo de usuário regular e contidos em um perfil de trabalho ou usuário [perfil](/android/#android-security-privacy) de sua escolha. Isto significa que você pode executar aplicativos dependentes dos Serviços Play, como aqueles que requerem notificações push usando o serviço [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/) do Google. GrapheneOS permite-lhe tirar partido da maioria dos [Google Play Services](https://en.wikipedia.org/wiki/Google_Play_Services) enquanto tem o controlo total do utilizador sobre as suas permissões e acesso.

Actualmente, apenas [Pixel phones](https://grapheneos.org/faq#device-support) cumprem os seus requisitos de segurança de hardware e são suportados.

!!! atenção

    Os dispositivos de "suporte estendido" da GrapheneOS não possuem patches de segurança completos (atualizações de firmware) devido à descontinuação do suporte por parte do fabricante do equipamento original (OEM). Estes dispositivos não podem ser considerados completamente seguros.

### CalyxOS

!!! recomendação

    ![logo CalyxOS](/assets/img/android/calyxos.svg){ align=right }
    
    **CalyxOS*** é uma alternativa decente ao GrapheneOS.
    
    Possui alguns recursos de privacidade no topo do AOSP, incluindo [Datura firewall](https://calyxos.org/docs/tech/datura-details), [Signal](https://signal.org) integração no aplicativo discador, e um botão de pânico embutido. CalyxOS também vem com atualizações de firmware e compilações assinadas, portanto [boot verificado](https://source.android.com/security/verifiedboot) é totalmente suportado.
    
    [Visite calyxos.org](https://calyxos.org/){ .md-button .md-button--primary } [Política de Privacidade](https://calyxinstitute.org/legal/privacy-policy){ .md-button }

Para acomodar usuários que precisam dos Serviços do Google Play, CalyxOS opcionalmente inclui [MicroG](https://microg.org/). Com o MicroG, CalyxOS também agrupa no [Mozilla](https://location.services.mozilla.com/) e [DejaVu](https://github.com/n76/DejaVu) serviços de localização.

Actualmente, CalyxOS suporta apenas [Pixel phones](https://calyxos.org/docs/guide/device-support/).

!!! atenção

    O "suporte estendido" do CalyxOS não tem patches de segurança completos devido ao fabricante do equipamento original (OEM) interromper o suporte; portanto, eles não podem ser considerados completamente seguros.

### DivestOS

!!! recomendação

    ![DivestOS logo](/assets/img/android/divestos.svg){ align=right }
    
    **DivestOS** é um [soft-fork](https://en.wikipedia.org/wiki/Fork_(software_development)#Forking_of_free_and_open-source_software) de [LineageOS](https://lineageos.org/).
    DivestOS herda muitos [dispositivos suportados](https://divestos.org/index.php?page=devices&base=LineageOS) do LineageOS. Ele assinou builds, tornando possível ter [boot verificado](https://source.android.com/security/verifiedboot) em alguns dispositivos não-Pixel.
    
    [Visite divestos.org](https://divestos.org){ .md-button .md-button--primary } [Política de Privacidade](https://divestos.org/index.php?page=privacy_policy){ .md-button }

DivestOS tem vulnerabilidade automática do kernel ([CVE](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures)) [patching](https://gitlab.com/divested-mobile/cve_checker), menos blobs proprietários, um personalizado [hosts](https://divested.dev/index.php?page=dnsbl) arquivo, e [F-Droid](https://www.f-droid.org) como a loja de aplicativos. Inclui [UnifiedNlp](https://github.com/microg/UnifiedNlp) para localização da rede. Seu WebView endurecido, [Mulch](https://gitlab.com/divested-mobile/mulch), permite [CFI](https://en.wikipedia.org/wiki/Control-flow_integrity) para todas as arquiteturas e inclui [particionamento do estado da rede](https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning).

DivestOS também inclui correções do kernel do GrapheneOS e habilita todos os recursos de segurança do kernel disponíveis via [defconfig hardening](https://github.com/Divested-Mobile/DivestOS-Build/blob/master/Scripts/Common/Functions.sh#L758). Todos os kernels mais novos que a versão 3.4 incluem página completa [sanitização](https://lwn.net/Articles/334747/) e todos os ~22 kernels compilados por Clang têm [`-ftrivial-auto-var-init=zero`](https://reviews.llvm.org/D54604?id=174471) activado.

DivestOS 16.0, 17.1, e 18.1 implementa o [`INTERNET`](https://developer.android.com/training/basics/network-ops/connecting) alternância de permissão, [alocador de memória endurecida](https://github.com/GrapheneOS/hardened_malloc), [exec-spawning](/android/#additional-hardening), [JNI](https://en.wikipedia.org/wiki/Java_Native_Interface) [constificação](https://en.wikipedia.org/wiki/Const_(computer_programming)), e parcial [biônico](https://en.wikipedia.org/wiki/Bionic_(software)) endurecimento de conjuntos de patchs. 17.1 e 18.1 característica GrapheneOS por rede completa [randomização MAC](https://en.wikipedia.org/wiki/MAC_address#Randomization) opção, e [`ptrace_scope`](https://www.kernel.org/doc/html/latest/admin-guide/LSM/Yama.html) controlo, e reinicialização automática/Wi-Fi/Bluetooth [opções de timeout](https://grapheneos.org/features). Todos os ramos têm, adicionalmente, vários remendos diversos, cortesia do GrapheneOS.

!!! atenção

    DivestOS atualização de firmware [status](https://gitlab.com/divested-mobile/firmware-empty/-/blob/master/STATUS) varia entre os dispositivos que suporta. Para telefones Pixel, ainda recomendamos o uso de GrapheneOS ou CalyxOS. Para outros dispositivos suportados, o DivestOS é uma boa alternativa.
    
    Nem todos os dispositivos suportados têm [boot verificado](https://source.android.com/security/verifiedboot), e alguns o executam melhor do que outros.

## Recursos de segurança e privacidade do Android

### Perfis de usuário

Vários perfis de usuário (Configurações → Sistema → Vários usuários) são a maneira mais simples de isolar no Android. Com perfis de usuário você pode limitar um usuário de fazer chamadas, SMS ou instalar aplicativos no dispositivo. Cada perfil é criptografado usando sua própria chave de criptografia e não pode acessar os dados de qualquer outro perfil. Mesmo o proprietário do dispositivo não pode visualizar os dados de outros perfis sem conhecer a sua senha. Múltiplos perfis de usuário é um método mais seguro de isolamento.

### Perfil de trabalho

[Perfis de trabalho](https://support.google.com/work/android/answer/6191949) são outra forma de isolar aplicações individuais e podem ser mais convenientes do que perfis de utilizador separados.

A **controlador de dispositivo** tal como [Shelter](#recommended-apps) é necessário, a menos que você esteja usando CalyxOS que inclui um.

O perfil de trabalho depende de um controlador de dispositivo para funcionar. Recursos como *File Shuttle* e *bloqueio de busca de contatos* ou qualquer tipo de recurso de isolamento deve ser implementado pelo controlador. O usuário também deve confiar plenamente no aplicativo controlador do dispositivo, pois ele tem pleno acesso aos dados dentro do perfil de trabalho.

Este método é geralmente menos seguro que um perfil de usuário secundário; no entanto, ele permite a conveniência de executar aplicativos tanto no perfil de trabalho quanto no perfil pessoal simultaneamente.

### Bota Verificada

[Verified Boot](https://source.android.com/security/verifiedboot) é uma parte importante do modelo de segurança do Android. Ele fornece proteção contra [malvada criada](https://en.wikipedia.org/wiki/Evil_maid_attack) ataques, persistência de malware, e garante que as atualizações de segurança não podem ser rebaixadas com [proteção contra rollback](https://source.android.com/security/verifiedboot/verified-boot#rollback-protection).

O Android 10 e superior afastou-se da encriptação de disco completo (FDE) para uma encriptação mais flexível [encriptação baseada em ficheiros](https://source.android.com/security/encryption/file-based).

Os dados de cada usuário são criptografados usando sua própria chave de criptografia exclusiva, e os arquivos do sistema operacional são deixados não criptografados. O Boot Verificado garante a integridade dos arquivos do sistema operacional, impedindo que um adversário com acesso físico possa adulterar ou instalar malware no dispositivo. No caso improvável de que o malware seja capaz de explorar outras partes do sistema e obter maior acesso privilegiado, o Verified Boot irá impedir e reverter as alterações na partição do sistema após a reinicialização do dispositivo.

Infelizmente, os fabricantes de equipamento original (OEMs) só são obrigados a suportar o Verified Boot na sua distribuição de stock Android. Apenas alguns OEMs, como o Google, suportam a inscrição de chaves personalizadas do Android Verified Boot (AVB) nos seus dispositivos. Algumas derivadas AOSP, como LineageOS ou /e/ OS não suportam o Verified Boot mesmo em hardware com suporte Verified Boot para sistemas operacionais de terceiros. Recomendamos que você verifique o suporte **antes de** comprar um novo dispositivo. As derivadas AOSP que não suportam Verified Boot são **não** recomendadas.

### VPN Killswitch

O Android 7 e superior suporta uma VPN killwitch e está disponível sem a necessidade de instalar aplicações de terceiros. Este recurso pode evitar vazamentos se a VPN for desconectada. Pode ser encontrado em ⚙️ Settings → Network & internet → VPN → ⚙️ → Bloquear conexões sem VPN.

### Alternativas Globais

Os dispositivos Android modernos têm alternadores globais para desativar [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth) e serviços de localização. O Android 12 introduziu alternadores para a câmera e microfone. Quando não estiver em uso, recomendamos desativar esses recursos. Os aplicativos não podem usar recursos desativados (mesmo que seja concedida permissão individual) até que sejam reativados.

## Aplicações recomendadas

### Orbot

!!! recomendação

    ![logo Orbot](/assets/img/android/orbot.svg){ align=right }
    
    **Orbot** é um aplicativo proxy gratuito que roteia suas conexões através da Rede Tor.
    
    [Visite orbot.app](https://orbot.app/){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.torproject.android)
    - [:pg-f-droid: F-Droid](https://guardianproject.info/fdroid)
    - [:fontawesome-brands-github: GitHub](https://github.com/guardianproject/orbot)
    - [:fontawesome-brands-gitlab: GitLab](https://gitlab.com/guardianproject/orbot)

Orbot pode fazer proxy de aplicativos individuais se eles suportarem SOCKS ou proxy HTTP. Ele também pode proxy todas as suas conexões de rede usando [VpnService](https://developer.android.com/reference/android/net/VpnService) e pode ser usado com o VPN killswitch (⚙️ Configurações → Rede & internet → VPN → ⚙️ → Bloquear conexões sem VPN).

Para resistência contra ataques de análise de tráfego, considere permitir *Isolate Destination Address* ( ⁝ →Settings → Connectivity). Isto irá usar um Circuito Tor completamente diferente (diferentes nós médios de relé e de saída) para cada domínio ao qual você se conectar.

!!! atenção

    Orbot está frequentemente desatualizado no [repositório F-Droid](https://guardianproject.info/fdroid) e [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android) do Projeto Guardian, então considere fazer o download diretamente do [repositório GitHub](https://github.com/guardianproject/orbot).
    
    Todas as versões são assinadas usando a mesma assinatura, portanto devem ser compatíveis umas com as outras.

### Abrigo

!!! recomendação

    ![Logotipo do Abrigo](/assets/img/android/shelter.svg){ align=right }
    
    **Shelter** é um aplicativo que ajuda você a aproveitar o perfil de trabalho do Android para isolar outros aplicativos.
    
    O Shelter suporta o bloqueio de busca de contatos entre perfis e compartilhamento de arquivos entre perfis através do gerenciador de arquivos padrão ([DocumentsUI](https://source.android.com/devices/architecture/modular-system/documentsui)).
    
    [Visite gitea.angry.im](https://gitea.angry.im/PeterCxy/Shelter){ .md-button .md-button--primary }
    
    **Downloads:**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=net.typeblog.shelter)
    - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/net.typeblog.shelter)
    - [:fontawesome-brands-github: GitHub](https://github.com/PeterCxy/Shelter)
    - [:fontawesome-brands-git-alt: Fonte](https://gitea.angry.im/PeterCxy/Shelter)

!!! atenção

    Como CalyxOS inclui um controlador de dispositivos, recomendamos o uso de seu perfil de trabalho embutido.
    
    Recomenda-se um abrigo sobre [Insular](https://secure-system.gitlab.io/Insular/) e [Island](https://github.com/oasisfeng/island) pois suporta [bloqueio de busca de contatos](https://secure-system.gitlab.io/Insular/faq.html).
    
    Ao usar o Shelter, você está colocando total confiança em seu desenvolvedor, pois Shelter estaria agindo como [Device Admin](https://developer.android.com/guide/topics/admin/device-admin) para o perfil de trabalho e tem amplo acesso aos dados armazenados dentro dele.

### Auditor

!!! recomendação

    ![Logótipo do auditor](/assets/img/android/auditor.svg#only-light){ align=right }
    ![Auditor logo](/assets/img/android/auditor-dark.svg#only-dark){ align=right }
    
    **Auditor** é um aplicativo que utiliza recursos de segurança de hardware para fornecer monitoramento de integridade de dispositivos para [dispositivos suportados](https://attestation.app/about#device-support). Atualmente trabalha com GrapheneOS e com o sistema operacional de estoque do dispositivo.
    
    [Visite attestation.app](https://attestation.app){ .md-button .md-button--primary }
    
    **Downloads:**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=app.attestation.auditor)
    - [:fontawesome-brands-github: GitHub](https://github.com/GrapheneOS/Auditor)

O auditor realiza a atestação e detecção de intrusão por:

- Usando um [Confiança no primeiro uso (TOFU)](https://en.wikipedia.org/wiki/Trust_on_first_use) modelo entre um *auditor* e *auditee*, o par estabelece uma chave privada no [hardware-backed keystore](https://source.android.com/security/keystore/) do *Auditor*.
- O *auditor* pode ser outra instância do aplicativo Auditor ou o [Remote Attestation Service](https://attestation.app).
- O *auditor* regista o estado actual e a configuração do *auditee*.
- Se a alteração do sistema operacional do *auditee* após a conclusão do emparelhamento, o auditor estará ciente da mudança no estado e configurações do dispositivo.
- O usuário será alertado sobre a mudança.

Nenhuma informação pessoal identificável é submetida ao serviço de atestação. Recomendamos que você se cadastre com uma conta anônima e habilite um atestado remoto para monitoramento contínuo.

Se o seu [modelo de ameaça](/threat-modeling/) requer privacidade que você poderia considerar usar o Orbot ou uma VPN para esconder o seu endereço IP do serviço de atestação. Para se certificar de que o seu hardware e sistema operacional é genuíno, [realize um atestado local](https://grapheneos.org/install/web#verifying-installation) imediatamente após o dispositivo ter sido instalado e antes de qualquer ligação à Internet.

### Câmera Segura

!!! recomendação

    ![Secure camera logo](/assets/img/android/secure_camera.svg#only-light){ align=right }
    ![Secure camera logo](/assets/img/android/secure_camera-dark.svg#only-dark){ align=right }
    
      **Secure Camera** é um aplicativo de câmera focado em privacidade e segurança que pode capturar imagens, vídeos e códigos QR. As extensões do fornecedor CameraX (Portrait, HDR, Night Sight Sight, Face Retouch e Auto) também são suportadas nos dispositivos disponíveis.
    
    [Visite github.com](https://github.com/GrapheneOS/Camera){ .md-button .md-button--primary }
    
    **Downloads:**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=app.grapheneos.camera.play)
    - [:fontawesome-brands-github: GitHub](https://github.com/GrapheneOS/Camera/releases)

As principais características de privacidade incluem:

- Remoção automática de [Exif](https://en.wikipedia.org/wiki/Exif) metadados (ativados por padrão)
- Utilização do novo [Media](https://developer.android.com/training/data-storage/shared/media) API, portanto [permissões de armazenamento](https://developer.android.com/training/data-storage) não são necessárias
- Não é necessária a permissão do microfone, a menos que você queira gravar o som.

!!! nota

    Metadados não são atualmente excluídos dos arquivos de vídeo, mas isso está planejado.
    
    Os metadados de orientação da imagem não são apagados. Se você ativar a localização (na Câmera Segura) que **não** será apagada também. Se você quiser apagar isso mais tarde você precisará usar um aplicativo externo como o [Scrambled Exif](https://gitlab.com/juanitobananas/scrambled-exif/).

### Visualizador seguro de PDF

!!! recomendação

    ![Secure PDF Viewer logo](/assets/img/android/secure_pdf_viewer.svg#only-light){ align=right }
    ![Secure PDF Viewer logo](/assets/img/android/secure_pdf_viewer-dark.svg#only-dark){ align=right }
    
    **Secure PDF Viewer** é um visualizador de PDF baseado em [pdf.js](https://en.wikipedia.org/wiki/PDF.js) que não requer nenhuma permissão. The PDF is fed into a [sandboxed](https://en.wikipedia.org/wiki/Sandbox_(software_development)) [webview](https://developer.android.com/guide/webapps/webview). Isto significa que não requer permissão para aceder directamente a conteúdos ou ficheiros.
    
    [Content-Security-Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) é usado para impor que o JavaScript e as propriedades de estilo dentro do WebView são inteiramente conteúdo estático.
    
    [Visite github.com](https://github.com/GrapheneOS/PdfViewer){ .md-button .md-button--primary }
    
    **Downloads:**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=app.grapheneos.pdfviewer.play)
    - [:fontawesome-brands-github: GitHub](https://github.com/GrapheneOS/PdfViewer/releases)

### PrivacyBlur

!!! recomendação

    ![logotipo PrivacyBlur](/assets/img/android/privacyblur.svg){ align=right }
    
    **PrivacyBlur*** é uma aplicação gratuita que pode desfocar porções sensíveis de imagens antes de as partilhar online.
    
    [Visite privacyblur.app](https://privacyblur.app/){ .md-button .md-button--primary }
    
    **Downloads:**
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
    - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/de.mathema.privacyblur/)
    - [:fontawesome-brands-github: GitHub](https://github.com/MATHEMA-GmbH/privacyblur)

!!! aviso

    Você deve **nunca*** usar borrão para retocar [texto em imagens](https://bishopfox.com/blog/unredacter-tool-never-pixelation). Se você quiser retocar o texto em uma imagem, desenhe uma caixa sobre o texto. Para isso sugerimos [Pocket Paint](https://github.com/Catrobat/Paintroid) ou [Imagepipe](https://codeberg.org/Starfish/Imagepipe).

## Recomendações Gerais

### Evite o Root

[Rooting](https://en.wikipedia.org/wiki/Rooting_(Android)) Os telefones Android podem diminuir significativamente a segurança, pois enfraquecem o completo [Modelo de segurança do Android](https://en.wikipedia.org/wiki/Android_(operating_system)#Security_and_privacy). Isto pode diminuir a privacidade caso haja uma exploração que seja auxiliada pela diminuição da segurança. Os métodos de enraizamento comuns envolvem a manipulação directa da partição de arranque, tornando impossível a execução bem sucedida [Verified Boot](https://source.android.com/security/verifiedboot). Os aplicativos que requerem root também irão modificar a partição do sistema, o que significa que o Verified Boot terá que permanecer desabilitado. Ter a raiz exposta diretamente na interface do usuário também aumenta a [superfície de ataque](https://en.wikipedia.org/wiki/Attack_surface) do seu dispositivo e pode ajudar em [escalonamento de privilégios](https://en.wikipedia.org/wiki/Privilege_escalation) vulnerabilidades e [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) desvios de política.

Adblockers (AdAway) que modificam o arquivo [hosts](https://en.wikipedia.org/wiki/Hosts_(file)) e firewalls (AFWall ) que requerem acesso root persistentemente são perigosos e não devem ser usados. Também não são a forma correcta de resolver os seus objectivos. Para o bloqueio do Adblocking sugerimos soluções de bloqueio de servidor encriptadas [DNS](/dns) ou [VPN](/vpn) . O RethinkDNS, TrackerControl e AdAway em modo não-root, irá ocupar o slot VPN (usando um loopback VPN local) impedindo-o de usar serviços que melhoram a privacidade como o Orbot ou um servidor VPN real.

AFWall funciona com base na abordagem [filtro de pacotes](https://en.wikipedia.org/wiki/Firewall_(computing)#Packet_filter) e pode ser contornável em algumas situações.

Não acreditamos que os sacrifícios de segurança feitos ao enraizar um telefone valham os questionáveis benefícios de privacidade desses aplicativos.

### Atualizações do Firmware

As atualizações de firmware são essenciais para manter a segurança e sem elas o seu dispositivo não pode estar seguro. Os fabricantes de equipamento original (OEMs) - em outras palavras, fabricantes de telefones - têm acordos de suporte com seus parceiros para fornecer os componentes de fonte fechada por um período de suporte limitado. Estes são detalhados no mensal [Android Security Bulletins](https://source.android.com/security/bulletin).

Como os componentes do telefone, como o processador e as tecnologias de rádio dependem de componentes de fonte fechada, as atualizações devem ser fornecidas pelos respectivos fabricantes. Portanto, é importante que você compre um dispositivo dentro de um ciclo de suporte ativo. [Qualcomm](https://www.qualcomm.com/news/releases/2020/12/16/qualcomm-and-google-announce-collaboration-extend-android-os-support-and) e [Samsung](https://news.samsung.com/us/samsung-galaxy-security-extending-updates-knox/) suportam seus dispositivos por 4 anos, enquanto produtos mais baratos geralmente têm suporte mais curto. Com a introdução do [Pixel 6](https://support.google.com/pixelphone/answer/4457705), o Google agora faz o seu próprio sistema no chip (SoC) e eles irão fornecer 5 anos de suporte.

Os dispositivos que chegaram ao seu fim de vida útil (EoL) e já não são suportados pelo fabricante SoC, não podem receber actualizações de firmware de fornecedores OEM ou de distribuidores Android do mercado pós-venda. Isto significa que as questões de segurança com esses dispositivos permanecerão por resolver.

### Versões do Android

É importante não usar um [fim de vida](https://endoflife.date/android) versão do Android. As novas versões do Android não só recebem atualizações de segurança para o sistema operacional, mas também atualizações importantes para aumentar a privacidade. Por exemplo, [antes do Android 10](https://developer.android.com/about/versions/10/privacy/changes), qualquer aplicativo de usuário com o [`READ_PHONE_STATE`](https://developer.android.com/reference/android/Manifest.permission#READ_PHONE_STATE) permissão poderia acessar números de série sensíveis e únicos do seu telefone como [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity), [MEID](https://en.wikipedia.org/wiki/Mobile_equipment_identifier), o seu cartão SIM [IMSI](https://en.wikipedia.org/wiki/International_mobile_subscriber_identity), enquanto agora devem ser aplicações do sistema para o fazer. As aplicações do sistema só são fornecidas pela distribuição OEM ou Android.

### Permissões do Android

[Permissões no Android](https://developer.android.com/guide/topics/permissions/overview) conceder aos usuários controle sobre quais aplicativos são permitidos a acessar. O Google faz regularmente [melhorias](https://developer.android.com/about/versions/11/privacy/permissions) no sistema de permissões em cada versão sucessiva. Todos os aplicativos instalados pelo usuário são estritamente [sandboxed](https://source.android.com/security/app-sandbox), portanto não há necessidade de instalar nenhum aplicativo antivírus. A economia que você faz ao não comprar ou assinar aplicativos de segurança é melhor gasta no pagamento de um dispositivo suportado no futuro.

Se você quiser executar um aplicativo sobre o qual você não tem certeza, considere usar um usuário ou trabalho [profile](/android/#android-security-privacy).

### Programa Avançado de Proteção

Se você tem uma conta Google, sugerimos a inscrição no [Advanced Protection Program](https://landing.google.com/advancedprotection/). Está disponível sem custos para qualquer pessoa com duas ou mais chaves de segurança de hardware com [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) suporte.

O Programa de Proteção Avançada oferece monitoramento e habilitação aprimorados de ameaças:

- Autenticação mais rigorosa de dois fatores; por exemplo que [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) ou [FIDO2](https://en.wikipedia.org/wiki/WebAuthn) **deve** ser usado e não permite o uso de [SMS OTPs](https://en.wikipedia.org/wiki/One-time_password#SMS), [TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password), e [OAuth](https://en.wikipedia.org/wiki/OAuth)
- Apenas o Google e os aplicativos de terceiros verificados podem acessar os dados da conta
- Digitalização de e-mails recebidos em contas Gmail para [phishing](https://en.wikipedia.org/wiki/Phishing#Email_phishing) tentativas
- Stricter [verificação segura do navegador](https://www.google.com/chrome/privacy/whitepaper.html#malware) com o Google Chrome
- Processo de recuperação mais rigoroso para contas com credenciais perdidas

 Para os utilizadores que utilizam os serviços privilegiados Google Play (comuns nos sistemas operativos de stock), o Programa de Protecção Avançada também vem com [benefícios adicionais](https://support.google.com/accounts/answer/9764949?hl=en) como por exemplo:

- Não permitindo a instalação de aplicativos fora da Loja do Google Play, da loja de aplicativos do fornecedor de SO, ou via [`adb`](https://en.wikipedia.org/wiki/Android_Debug_Bridge)
- Scan automático obrigatório do dispositivo com [Play Protect](https://support.google.com/googleplay/answer/2812853?hl=en#zippy=%2Chow-malware-protection-works%2Chow-privacy-alerts-work)
- Avisar o utilizador sobre aplicações não verificadas

### SafetyNet e Play Integrity API

[SafetyNet](https://developer.android.com/training/safetynet/attestation) e as [Play Integrity APIs](https://developer.android.com/google/play/integrity) são geralmente usadas para [aplicações bancárias](https://grapheneos.org/usage#banking-apps). Muitas aplicações bancárias funcionarão bem no GrapheneOS com serviços de jogo de areia, no entanto, algumas aplicações não-financeiras têm os seus próprios mecanismos anti-tampering, que podem falhar. GrapheneOS passa o `basicIntegrity` cheque, mas não o cheque de certificação `ctsProfileMatch`. Os dispositivos com Android 8 ou posterior têm suporte a atestados de hardware que não podem ser contornados sem vazamento de chaves ou sérias vulnerabilidades.

Quanto ao Google Wallet, não recomendamos isto devido ao seu [política de privacidade](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en), que diz que você deve optar por não participar se você não quiser que sua classificação de crédito e informações pessoais sejam compartilhadas com os serviços de marketing de afiliados.

### Identificação publicitária

Todos os dispositivos com os Serviços Google Play instalados geram automaticamente um [ID de publicidade](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) usado para publicidade direccionada. Desabilite este recurso para limitar os dados coletados sobre você.

Nas distribuições Android com [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play), vá para ⚙️ Settings → Apps → Sandboxed Google Play → Ads e selecione **Delete advertising ID**.

Nas distribuições Android com serviços privilegiados de Google Play (como os sistemas operativos de stock), a configuração pode estar num de vários locais. Confira

- ⚙️ Configurações → Google → Anúncios
- ⚙️ Configurações → Privacidade → Anúncios

Dependendo do seu sistema, você terá a opção de excluir seu ID de publicidade ou de "Optar por anúncios baseados em juros". Você deve excluir a ID de publicidade se lhe for dada a opção e, se não for, recomendamos que você opte por não incluir anúncios com base no seu interesse e, em seguida, redefinir a sua ID de publicidade.

### Compras de Dispositivos Android

Os pixéis do Google são conhecidos por terem boa segurança e suporte adequado [Verified Boot](https://source.android.com/security/verifiedboot). Alguns outros telefones como o Fairphone e dispositivos OnePlus também suportam a inscrição de chaves personalizadas do Android Verified Boot (AVB). No entanto, houve problemas com os seus modelos mais antigos. No passado eles usavam [chaves de teste](https://social.coop/@dazinism/105346943304083054) ou não faziam a verificação adequada, tornando o Boot Verificado naqueles dispositivos inútil.

Evite comprar telefones de operadoras de rede móvel. Estes têm frequentemente um **bootloader bloqueado** e não suportam [desbloqueio OEM](https://source.android.com/devices/bootloader/locking_unlocking). Estas variantes de telefone impedirão que você instale qualquer tipo de distribuição alternativa do Android. Os telefones que não podem ser desbloqueados terão frequentemente um [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity) começando por "35", que inclui telefones comprados na Verizon, Telus, Rogers, EE, etc.

Seja muito **cuidado** sobre a compra de telefones em segunda mão nos mercados online. Verifique sempre a reputação do vendedor. Se o dispositivo for roubado há a possibilidade de [IMEI blacklisting](https://www.gsma.com/security/resources/imei-blacklisting/). Há também o risco de você estar associado à atividade do proprietário anterior.

Nós temos estas dicas gerais:

- Se você está atrás de uma pechincha em um dispositivo Pixel, sugerimos comprar um modelo "**a**", logo após o próximo carro-chefe ser lançado. Os descontos estão normalmente disponíveis porque o Google tentará limpar o seu stock.
- Considere as opções de preço e promoções oferecidas em [tijolo e argamassa](https://en.wikipedia.org/wiki/Brick_and_mortar) lojas.
- Veja os sites de pechinchas online da comunidade no seu país. Estes podem alertá-lo para boas vendas.
- Google provides a list showing the [support cycle](https://support.google.com/nexus/answer/4457705) for each one of their devices. O preço por dia de um dispositivo pode ser calculado como: $\text{Cost} \over \text {EoL Date }-\text{ Current Date}$, o que significa que quanto mais tempo o aparelho for usado, menor será o custo por dia.
- Não compre dispositivos que tenham atingido ou estejam perto do fim de vida útil, as actualizações de firmware adicionais devem ser fornecidas pelo fabricante.
- Não compre LineageOS pré-carregados ou telefones /e/ OS ou qualquer telefone Android sem o devido [Verified Boot](https://source.android.com/security/verifiedboot) suporte e atualizações de firmware. Estes dispositivos também não têm forma de verificar se foram adulterados.
- Em resumo, se um dispositivo ou distribuição Android não está listado aqui, provavelmente há uma boa razão, então verifique nossa [discussões](https://github.com/privacyguides/privacyguides.org/discussions) página.

A instalação de GrapheneOS em um telefone Pixel é fácil com seu [instalador web](https://grapheneos.org/install/web). Se você não se sente confortável em fazê-lo você mesmo e está disposto a gastar um pouco de dinheiro extra, confira o [NitroPhone](https://shop.nitrokey.com/shop) pois eles vêm pré-carregados com GrapheneOS do respeitável [Nitrokey](https://www.nitrokey.com/about) empresa. O projeto GrapheneOS não está atualmente afiliado a nenhum fornecedor e não pode garantir a qualidade ou segurança de seus produtos.

A [adesão ao CalyxOS](https://calyxinstitute.org/membership/calyxos) também lhe dá direito a um dispositivo pré-carregado com CalyxOS.

## Onde obter as suas candidaturas

### Loja de aplicativos da GrapheneOS

A loja de aplicativos GrapheneOS está disponível em [GitHub](https://github.com/GrapheneOS/Apps/releases). Ele suporta o Android 12 e superior e é capaz de se atualizar. A loja de aplicativos tem aplicativos independentes construídos pelo projeto GrapheneOS como o [Auditor](https://attestation.app/), [Camera](https://github.com/GrapheneOS/Camera), e [Visualizador de PDFs](https://github.com/GrapheneOS/PdfViewer). Se você está procurando por esses aplicativos, recomendamos que você os obtenha na loja de aplicativos do GrapheneOS em vez da Play Store, pois os aplicativos em sua loja são assinados pela própria assinatura do projeto do GrapheneOS que o Google não tem acesso.

### Loja Aurora

A Loja do Google Play requer uma conta do Google para fazer login, o que não é ótimo para privacidade. O [Aurora Store](https://auroraoss.com/download/AuroraStore/) (um proxy da Google Play Store) não funciona, e funciona a maior parte do tempo.

### F-Droid

O F-Droid é frequentemente recomendado como uma alternativa ao Google Play, particularmente na comunidade de privacidade. A opção de adicionar repositórios de terceiros e não estar confinado ao [walled garden](https://en.wikipedia.org/wiki/Closed_platform) do Google levou à sua popularidade. F-Droid adicionalmente tem [builds reprodutíveis](https://f-droid.org/en/docs/Reproducible_Builds/) para algumas aplicações, e é dedicado ao software livre e de código aberto. No entanto, existem problemas com o cliente oficial F-Droid, com o seu controlo de qualidade e com a forma como constroem, assinam e entregam pacotes, descritos neste [post](https://wonderfall.dev/fdroid-issues/).

Às vezes o repositório oficial F-Droid pode ficar para trás em atualizações. Os mantenedores do F-Droid reutilizam os IDs dos pacotes enquanto assinam aplicativos com suas próprias chaves, o que não é o ideal, pois dá à equipe F-Droid a máxima confiança. A versão Google Play de alguns aplicativos pode conter telemetria indesejada ou não ter recursos disponíveis na versão F-Droid.

Nós temos estas dicas gerais:

- Verifique se os desenvolvedores do aplicativo têm seu próprio repositório F-Droid primeiro, por exemplo [Bitwarden](https://bitwarden.com/), [Samourai Wallet](https://www.samouraiwallet.com/), ou [Newpipe](https://newpipe.net/), que têm seus próprios repositórios com menos telemetria, recursos adicionais ou atualizações mais rápidas. Esta é a situação ideal e você deve estar usando estes repositórios, se possível.
- Verifique se um aplicativo está disponível no repositório [IzzyOnDroid](https://apt.izzysoft.de/fdroid/) . O repositório IzzyOnDroid é construído diretamente do GitHub e é a próxima melhor coisa para os próprios repositórios dos desenvolvedores. Nós recomendamos que você baixe os builds do GitHub e os instale manualmente primeiro, depois use o IzzyOnDroid para qualquer atualização subseqüente. Isso garantirá que a assinatura dos aplicativos que você obtém do IzzyOnDroid corresponda à do desenvolvedor e os pacotes não tenham sido adulterados.
- Verifique se existem diferenças entre a versão F-Droid e a versão da Loja do Google Play. Algumas aplicações como [IVPN](https://www.ivpn.net/) não incluem certos recursos (por exemplo [AntiTracker](https://www.ivpn.net/knowledgebase/general/antitracker-faq/)) na sua Loja do Google Play por medo da censura pelo Google.

Avalie se os recursos adicionais na construção do F-Droid valem as atualizações mais lentas. Pense também se as atualizações mais rápidas da Loja do Google Play valem os possíveis problemas de privacidade no seu [modelo de ameaça](/threat-modeling/).

#### Droid-ify

O cliente oficial F-Droid tem como alvo um [baixo nível API](https://wonderfall.dev/fdroid-issues/#3-low-target-api-level-sdk-for-client--apps) e não utiliza o [atualizações contínuas](https://www.androidcentral.com/google-will-finally-bring-seamless-app-updates-alternative-app-stores-android-12) recurso introduzido no Android 12. Visar níveis API mais baixos significa que o cliente F-Droid não pode tirar proveito das novas melhorias nas caixas de areia da aplicação que vêm com níveis API mais altos. Para atualizações automáticas para funcionar, o cliente F-Droid requer que o [Extensão Privilegiada](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged/) seja incluído no sistema operacional, concedendo-lhe mais privilégios do que um aplicativo normal, o que não é ótimo para a segurança.

Para mitigar estes problemas, recomendamos [Droid-ify](https://github.com/Iamlooker/Droid-ify) pois suporta atualizações sem problemas no Android 12 e superior sem necessidade de privilégios especiais e tem como alvo um nível API mais alto.

!!! recomendação

    ![Droid-ify logo](assets/img/android/droid-ify.png){ align=right }
    
    **Droid-ify** é um cliente F-Droid moderno feito com MaterialUI, bifurcado de [Foxy Droid](https://github.com/kitsunyan/foxy-droid).
    
    Ao contrário do cliente oficial F-Droid, Droid-ify suporta atualizações contínuas no Android 12 e superior, sem a necessidade de uma extensão privilegiada. Se a sua distribuição Android está no Android 12 ou superior e não inclui a [F-Droid extensão privilegiada](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged/), é altamente recomendável que você use Droid-ify em vez do cliente oficial.
    
    **Downloads:**
    - [:fontawesome-brands-android: APK Download](https://android.izzysoft.de/repo/apk/com.looker.droidify)
    - [:fontawesome-brands-github: GitHub](https://github.com/Iamlooker/Droid-ify)

## Comparação de segurança de GrapheneOS e CalyxOS

### Perfis

CalyxOS inclui uma aplicação controladora de dispositivos para que não haja necessidade de instalar uma aplicação de terceiros como [Shelter](/android/#recommended-apps). GrapheneOS planeja introduzir no futuro um suporte de perfil aninhado com melhor isolamento.

GrapheneOS estende a função [perfil do usuário](/android/#android-security-privacy) permitindo que o usuário pressione um botão "End Session". Este botão limpa a chave de encriptação da memória. Existem planos para adicionar um sistema de notificações de [perfil cruzado](https://github.com/GrapheneOS/os-issue-tracker/issues/88) no futuro.

### Caixa de areia Google Play vs. MicroG Privilegiado

Quando os serviços do Google Play são usados no GrapheneOS, eles são executados como uma aplicação do usuário e estão contidos dentro de um usuário ou perfil de trabalho.

Sandboxed Google Play é confinado usando o altamente restritivo, padrão [`untrusted_app`](https://source.android.com/security/selinux/concepts) domínio fornecido por [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux). As permissões de utilização dos Serviços Google Play podem ser revogadas a qualquer momento pelo utilizador.

MicroG é uma reimplementação dos Serviços Google Play. Isso significa que ele precisa ser atualizado sempre que o Android tiver uma atualização importante da versão (ou a API do Android mudar). Também precisa de correr no altamente privilegiado [`system_app`](https://source.android.com/security/selinux/concepts) SELinux domínio como o normal Google Play Services e requer acesso a [spoofing de assinatura](https://madaidans-insecurities.github.io/android.html#microg-signature-spoofing) por isso isto é menos seguro do que a abordagem Sandboxed Google Play. Nós não acreditamos que o MicroG oferece nenhuma vantagem de privacidade sobre o Sandboxed Google Play exceto pela opção de *shift trust* do backend de localização do Google para outro provedor como Mozilla ou DejaVu.

Do ponto de vista da usabilidade, o Sandboxed Google Play também funciona bem com muito mais aplicações do que o MicroG, graças ao seu suporte para serviços como [Google Play Games](https://play.google.com/googleplaygames) e [In-app Billing API](https://android-doc.github.io/google/play/billing/api.html).

### Extensões de Aplicações Privilegiadas

O Android 12 vem com suporte especial para atualizações de aplicativos sem interrupção com [lojas de aplicativos de terceiros](https://android-developers.googleblog.com/2020/09/listening-to-developer-feedback-to.html). O popular repositório de Software Livre e de Código Aberto (FOSS) [F-Droid](https://f-droid.org) não implementa este recurso e requer uma extensão privilegiada [](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged) para ser incluído com a distribuição Android, a fim de ter a instalação do aplicativo sem supervisão.

GrapheneOS não compromete a segurança; portanto, eles não incluem a extensão F-Droid. Os usuários têm de confirmar todas as atualizações manualmente se quiserem usar o F-Droid. Alternativamente, eles podem usar o cliente Droid-ify que suporta atualizações de aplicativos no Android 12. GrapheneOS recomenda oficialmente [Sandboxed Google Play](https://grapheneos.org/usage#sandboxed-google-play) em vez disso. Muitos aplicativos FOSS Android também estão no Google Play mas às vezes não estão (como [NewPipe](/video-streaming)).

CalyxOS inclui o [extensão privilegiada](https://f-droid.org/en/packages/org.fdroid.fdroid.privileged), o que pode baixar a segurança do dispositivo. Actualizações de aplicações sem falhas devem ser possíveis com [Aurora Store](https://auroraoss.com) no Android 12.

### Endurecimento adicional

GrapheneOS melhora em [AOSP](https://source.android.com/) security with:

- **WebView endurecido:** Vanadium WebView requer [64-bit](https://en.wikipedia.org/wiki/64-bit_computing) processos no [WebView](https://developer.android.com/reference/android/webkit/WebView) processo e desabilita processos legados [32-bit](https://en.wikipedia.org/wiki/32-bit_computing) processos. Utiliza opções de compilação endurecida tais como [`-fwrapv`](https://gcc.gnu.org/onlinedocs/gcc/Code-Gen-Options.html) e [`-fstack-protector-strong`](https://gcc.gnu.org/onlinedocs/gcc-4.9.3/gcc/Optimize-Options.html), que pode ajudar a proteger contra [estouro de buffer de pilha](https://en.wikipedia.org/wiki/Stack_buffer_overflow). [API](https://en.wikipedia.org/wiki/API)s tais como o [estado da bateria API](https://chromestatus.com/feature/4537134732017664) estão desactivados por razões de privacidade. Todos os aplicativos do sistema no GrapheneOS utilizam o Vanadium WebView, o que significa que os aplicativos instalados pelo usuário que utilizam o WebView também se beneficiarão do endurecimento do Vanadium. O conjunto de patch [Vanadium patch set](https://github.com/GrapheneOS/Vanadium/tree/12/patches) é muito mais abrangente do que o [Chromium patch set](https://gitlab.com/CalyxOS/chromium-patches) que é derivado dele.
- **Kernel endurecido:** Kernel GrapheneOS inclui algum endurecimento do [linux-hardened](https://github.com/GrapheneOS/linux-hardened) project e o [Kernel Self Protection Project (KSPP)](https://kernsec.org/wiki/index.php/Kernel_Self_Protection_Project). CalyxOS usa o [mesmo kernel](https://calyxos.org/docs/development/build/kernel/) como o normal Android com algumas pequenas modificações.
- **Alocador de memória endurecida:** GrapheneOS usa o [malloc endurecido](https://github.com/GrapheneOS/hardened_malloc) subprojeto como seu alocador de memória. Isto centra-se no endurecimento contra [corrupção de memória](https://en.wikipedia.org/wiki/Memory_corruption). CalyxOS usa o padrão AOSP [Scudo Malloc](https://source.android.com/devices/tech/debug/scudo), que é geralmente [menos eficaz](https://twitter.com/danielmicay/status/1033671709197398016). Malloc endurecido descobriu vulnerabilidades no AOSP que foram [fixas](https://github.com/GrapheneOS/platform_system_core/commit/be11b59725aa6118b0e1f0712572e835c3d50746) por GrapheneOS como [CVE-2021-0703](https://nvd.nist.gov/vuln/detail/CVE-2021-0703).
- **Secure Exec Spawning:** GrapheneOS [spawns](https://en.wikipedia.org/wiki/Spawn_(computing)) fresh processes as opposed to using the [Zygote model](https://ayusch.com/android-internals-the-android-os-boot-process) usado pela AOSP e CalyxOS. O modelo Zygote enfraquece [Randomização do layout do espaço de endereçamento](https://en.wikipedia.org/wiki/Address_space_layout_randomization) (ASLR) e é considerado [menos seguro](https://wenke.gtisc.gatech.edu/papers/morula.pdf). Criar [processos novos](https://grapheneos.org/usage#exec-spawning) é mais seguro mas terá alguma penalização de desempenho ao lançar uma nova aplicação. Essas penalidades não são realmente perceptíveis a menos que você tenha um [dispositivo antigo](https://support.google.com/nexus/answer/4457705) com armazenamento lento como o Pixel 3a/3a XL como ele tem [eMMC](https://en.wikipedia.org/wiki/MultiMediaCard#eMMC).

**Note que estes são apenas alguns exemplos e não são uma extensa lista de endurecimento do GrapheneOS**. Para uma lista mais completa, por favor leia GrapheneOS' [documentação oficial](https://grapheneos.org/features).

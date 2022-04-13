---
title: Comunicação em Tempo Real
icon: material/chat-processing
---

## Mensageiros Instantâneos Criptografados

### Sinal

!!! recomendação

    ![Logotipo do sinal](/assets/img/messengers/signal.svg){ align=right }
    
    **Sinal*** é uma aplicação móvel desenvolvida pela Signal Messenger LLC. O aplicativo fornece mensagens instantâneas, bem como chamadas de voz e vídeo.
    
    Todas as comunicações são E2EE. As listas de contatos são criptografadas usando seu PIN de login e o servidor não tem acesso a elas. Os perfis pessoais também são criptografados e compartilhados apenas com contatos que o adicionam.
    
    [Visite signal.org](https://signal.org/){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://signal.org/download)
    - [:fontawesome-brands-apple: macOS](https://signal.org/download)
    - [:fontawesome-brands-linux: Linux](https://signal.org/download)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/id874139669)
    - [:fontawesome-brands-github: Source](https://github.com/signalapp)

O sinal tem metadados mínimos quando [Sealed Sender](https://signal.org/blog/sealed-sender/) está habilitado. O endereço do remetente é codificado juntamente com o corpo da mensagem, e apenas o endereço do destinatário é visível para o servidor.

O sinal requer o seu número de telefone como identificador pessoal.

[Remetente Selado](https://signal.org/blog/sealed-sender/) só está habilitado para usuários da sua lista de contatos, mas pode ser habilitado para todos os destinatários com o aumento do risco de receber spam.

O protocolo foi independentemente [auditado](https://eprint.iacr.org/2016/1013.pdf) em 2016. A especificação do protocolo Sinal pode ser encontrada no seu [documentação](https://signal.org/docs/).

### Elemento

!!! recomendação

    Element logo](/assets/img/messengers/element.svg){ align=right }
    
    **Element** é o cliente de referência para o protocolo [Matrix](https://matrix.org/docs/guides/introduction), um [padrão aberto](https://matrix.org/docs/spec) para comunicação segura descentralizada em tempo real.
    
    As mensagens e ficheiros partilhados em salas privadas (aquelas que requerem um convite) são, por defeito, E2EE, tal como as chamadas de voz e vídeo de 1 para 1.
    
    [Visit element.io](https://element.io/){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://element.io/get-started)
    - [:fontawesome-brands-apple: macOS](https://element.io/get-started)
    - [:fontawesome-brands-linux: Linux](https://element.io/get-started)
    - [:fontawesome-brands-android: Android](https://f-droid.org/packages/im.vector.app/)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=im.vector.app)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/vector/id1083446067)
    - [:fontawesome-brands-github: Source](https://github.com/vector-im/element-web)

Fotos do perfil, reações e apelidos não são criptografados.

As chamadas de voz e vídeo em grupo são [não](https://github.com/vector-im/element-web/issues/12878) E2EE, e use Jitsi, mas espera-se que isto mude com [Sinalização VoIP de Grupo Nativo](https://github.com/matrix-org/matrix-doc/pull/3401). As chamadas em grupo têm [sem autenticação](https://github.com/vector-im/element-web/issues/13074) actualmente, o que significa que os participantes que não pertencem à sala também podem juntar-se às chamadas. Recomendamos que você não utilize este recurso para reuniões particulares.

Ao usar [element-web](https://github.com/vector-im/element-web), você deve confiar no servidor que hospeda o cliente Element. Se o seu [modelo de ameaça](/threat-modeling) requer uma protecção mais forte, então use um cliente desktop ou móvel em vez disso.

O protocolo foi independentemente [auditado](https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last) em 2016. A especificação do protocolo Matrix pode ser encontrada em seu [documentação](https://spec.matrix.org/latest/). O [Olm](https://matrix.org/docs/projects/other/olm) catraca criptográfica utilizada pela Matrix é uma implementação do [Duplo algoritmo de catraca](https://signal.org/docs/specifications/doubleratchet/).

### Briar

!!! recomendação

    ![logótipo Briar](/assets/img/messengers/briar.svg){ align=right }
    
    **Briar** é um mensageiro instantâneo encriptado que [connects](https://briarproject.org/how-it-works/) para outros clientes que utilizam a Rede Tor. Briar também pode se conectar via Wi-Fi ou Bluetooth quando em proximidade local. O modo de rede local do Briar pode ser útil quando a disponibilidade da Internet é um problema.
    
    [Visite briarproject.org](https://briarproject.org/){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-android: Android](https://f-droid.org/packages/org.briarproject.briar.android)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.briarproject.briar.android)
    - [:fontawesome-brands-git: Source](https://code.briarproject.org/briar/briar)

Para adicionar um contato no Briar, ambos devem adicionar um ao outro primeiro. Você pode trocar `briar://` links ou escanear o código QR de um contato se ele estiver próximo.

O software cliente foi independente [auditado](https://briarproject.org/news/2017-beta-released-security-audit/) e o protocolo de roteamento anônimo usa a rede Tor que também foi auditada.

Briar tem uma especificação totalmente [publicado](https://code.briarproject.org/briar/briar-spec).

Briar suporta o sigilo frontal perfeito usando o protocolo Bramble [Handshake](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BHP.md) e [Transport](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BTP.md) .

### Sessão

!!! recomendação

    ![logótipo da sessão](/assets/img/messengers/session.svg){ align=right }
    
    **Session*** é um mensageiro instantâneo encriptado que usa três [nós de serviço](https://getsession.org/blog/onion-requests-session-new-message-routing-solution) aleatórios para encaminhar mensagens anonimamente na [Rede Oxen](https://oxen.io).
    
    [Visite getession.org](https://getsession.org/){ .md-button .md-button--primary }
    
    **Downloads***
    - [:fontawesome-brands-windows: Windows](https://getsession.org/windows)
    - [:fontawesome-brands-apple: macOS](https://getsession.org/mac)
    - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/app/id1470168868)
    - [:fontawesome-brands-linux: Linux](https://www.getession.org/linux)
    - [:fontawesome-brands-android: Android](https://fdroid.getsession.org/)
    - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=network.loki.messenger)
    - [:pg-f-droid: F-Droid](https://fdroid.getsession.org)
    - [:fontawesome-brands-github: Source](https://github.com/oxen-io/session-desktop)

A sessão permite o E2EE em salas individuais ou fechadas que permitem até 100 membros. As salas abertas não têm restrições quanto ao número de membros, mas qualquer pessoa pode aderir.

A sessão faz [não](https://getsession.org/blog/session-protocol-technical-information) suporta o sigilo de avanço. O par de chaves para cada conversa não é girado.

A sessão foi auditada independentemente em 2020. O protocolo é descrito em um whitepaper.

## Tipos de Redes de Comunicação

Existem várias arquiteturas de rede comumente usadas para retransmitir mensagens entre usuários. Estas redes podem oferecer diferentes garantias de privacidade, por isso vale a pena considerar o seu [modelo de ameaça](https://en.wikipedia.org/wiki/Threat_model) ao tomar uma decisão sobre qual aplicativo usar.

### Redes Centralizadas

![Diagrama de rede centralizado](/assets/img/layout/network-centralized.svg){ align=left }

Mensageiros centralizados são aqueles em que todos os participantes estão no mesmo servidor ou rede de servidores controlados pela mesma organização.

Alguns mensageiros auto-hospedados permitem que você crie seu próprio servidor. O auto-hospedagem pode fornecer garantias adicionais de privacidade, tais como a ausência de registos de utilização ou acesso limitado a metadados (dados sobre quem está a falar com quem). Os mensageiros auto-hospedados centralizados estão isolados e todos devem estar no mesmo servidor para se comunicarem.

**Vantagens:**

- Novas funcionalidades e mudanças podem ser implementadas mais rapidamente.
- Mais fácil de começar e de encontrar contatos.
- A maioria dos ecossistemas maduros e estáveis apresenta características, pois são mais fáceis de programar em um software centralizado.
- Os problemas de privacidade podem ser reduzidos quando você confia em um servidor que você está se auto-hospedando.

**Desvantagens:**

- Pode incluir [controle restrito ou acesso](https://drewdevault.com/2018/08/08/Signal.html). Isto pode incluir coisas como:
- Sendo [proibido de conectar clientes de terceiros](https://github.com/LibreSignal/LibreSignal/issues/37#issuecomment-217211165) à rede centralizada que pode proporcionar uma maior customização ou uma melhor experiência do usuário. Muitas vezes definido nos Termos e Condições de uso.
- Pobre ou sem documentação para desenvolvedores de terceiros.
- O [propriedade](https://web.archive.org/web/20210729191953/https://blog.privacytools.io/delisting-wire/), política de privacidade e operações do serviço podem mudar facilmente quando uma única entidade o controla, comprometendo potencialmente o serviço mais tarde.
- O auto-serviço requer esforço e conhecimento de como criar um serviço.

### Redes Federadas

![Diagrama de redes federadas](/assets/img/layout/network-decentralized.svg){ align=left }

Os mensageiros federados utilizam múltiplos servidores independentes e descentralizados que são capazes de falar uns com os outros (o e-mail é um exemplo de um serviço federado). A Federação permite aos administradores de sistemas controlarem o seu próprio servidor e ainda fazer parte de uma rede de comunicações maior.

Quando auto-hospedados, os usuários de um servidor federado podem descobrir e se comunicar com usuários de outros servidores, embora alguns servidores possam escolher permanecer privados por não serem federados (por exemplo, servidor de equipe de trabalho).

**Vantagens:**

- Permite um maior controle sobre seus próprios dados ao executar seu próprio servidor.
- Permite que você escolha com quem confiar seus dados, escolhendo entre vários servidores "públicos".
- Muitas vezes permite a clientes terceiros que podem fornecer uma experiência mais nativa, personalizada ou acessível.
- O software do servidor pode ser verificado se corresponde ao código fonte público, assumindo que você tem acesso ao servidor ou que confia na pessoa que o faz (por exemplo, um membro da família)

**Desvantagens:**

- Adicionar novos recursos é mais complexo, pois esses recursos precisam ser padronizados e testados para garantir que funcionem com todos os servidores da rede.
- Devido ao ponto anterior, podem faltar recursos, ou estar incompletos ou funcionando de formas inesperadas em comparação com plataformas centralizadas, como o relé de mensagens quando offline ou a eliminação de mensagens.
- Alguns metadados podem estar disponíveis (por exemplo, informações como "quem está falando com quem", mas não o conteúdo real da mensagem se o E2EE for usado).
- Os servidores federados geralmente requerem a confiança do administrador do seu servidor. Eles podem ser um hobbyista ou não ser um "profissional de segurança", e não podem servir documentos padrão como uma política de privacidade ou termos de serviço detalhando como os seus dados são utilizados.
- Os administradores de servidores às vezes optam por bloquear outros servidores, que são fonte de abuso não moderado ou quebram as regras gerais de comportamento aceito. Isto irá prejudicar a sua capacidade de comunicar com os utilizadores nesses servidores.

### Redes Peer-to-Peer (P2P)

![diagrama P2P](/assets/img/layout/network-distributed.svg){ align=left }

[P2P](https://en.wikipedia.org/wiki/Peer-to-peer) os mensageiros conectam-se a uma rede [distribuída](https://en.wikipedia.org/wiki/Distributed_networking) de nós para retransmitir uma mensagem para o receptor sem um servidor de terceiros.

Os clientes (pares) geralmente se encontram através do uso de um [computação distribuída](https://en.wikipedia.org/wiki/Distributed_computing) rede. Exemplos disso incluem [Distributed Hash Tables](https://en.wikipedia.org/wiki/Distributed_hash_table) (DHT), usado por [torrents](https://en.wikipedia.org/wiki/BitTorrent_(protocol)) e [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) por exemplo. Outra abordagem são as redes baseadas na proximidade, onde uma conexão é estabelecida através de WiFi ou Bluetooth (por exemplo, Briar ou o [Scuttlebutt](https://www.scuttlebutt.nz) protocolo de rede social).

Uma vez que um par tenha encontrado uma rota para o seu contacto através de qualquer um destes métodos, é feita uma ligação directa entre eles. Embora as mensagens sejam geralmente encriptadas, um observador ainda pode deduzir a localização e a identidade do remetente e do destinatário.

As redes P2P não utilizam servidores, pois os usuários se comunicam diretamente entre si, e portanto não podem ser auto-hospedados. No entanto, alguns serviços adicionais podem depender de servidores centralizados, tais como a descoberta de utilizadores ou o reencaminhamento de mensagens offline, que podem beneficiar da auto-hospedagem.

**Vantagens:**

- A informação mínima é exposta a terceiros.
- As plataformas P2P modernas implementam criptografia de ponta a ponta por padrão. Não existem servidores que possam potencialmente interceptar e descodificar as suas transmissões, ao contrário dos modelos centralizados e federados.

**Desvantagens:**

- Conjunto de recursos reduzido:
- As mensagens só podem ser enviadas quando ambos os pares estão online, no entanto, o seu cliente pode armazenar mensagens localmente para aguardar que o contacto regresse online.
- Geralmente aumenta o uso da bateria em dispositivos móveis, porque o cliente deve permanecer conectado à rede distribuída para aprender sobre quem está online.
- Algumas características comuns do mensageiro podem não ser implementadas ou estar incompletas, tais como a eliminação de mensagens.
- O seu [endereço IP](https://en.wikipedia.org/wiki/IP_address) e o dos contactos com os quais está a comunicar podem ser expostos se não utilizar o software em conjunto com um [VPN](/vpn) ou [rede autónoma](/self-contained-networks), tais como [Tor](https://www.torproject.org) ou [I2P](https://geti2p.net/). Muitos países têm alguma forma de vigilância em massa e/ou retenção de metadados.

### Roteiro Anônimo

![Diagrama de roteamento anônimo](/assets/img/layout/network-anonymous-routing.svg){ align=left }

Um mensageiro usando [encaminhamento anônimo](https://doi.org/10.1007/978-1-4419-5906-5_628) esconde ou a identidade do remetente, do receptor, ou provas de que eles têm se comunicado. Idealmente, um mensageiro deveria esconder os três.

Existem [muitos](https://doi.org/10.1145/3182658) diferentes formas de implementar roteamento anônimo. Um dos mais famosos é [roteamento cebola](https://en.wikipedia.org/wiki/Onion_routing) (ou seja, [Tor](https://en.wikipedia.org/wiki/Tor_(anonymity_network))), que comunica mensagens criptografadas através de uma rede virtual [overlay](https://en.wikipedia.org/wiki/Overlay_network) que esconde a localização de cada nó, bem como o destinatário e o remetente de cada mensagem. O remetente e o destinatário nunca interagem diretamente e só se encontram através de um nó de encontro secreto, para que não haja vazamento de endereços IP nem localização física. Os nós não podem decifrar as mensagens nem o destino final, só o destinatário pode. Cada nó intermediário só pode decifrar uma parte que indica para onde enviar a mensagem ainda encriptada a seguir, até chegar ao destinatário que a pode decifrar completamente, daí as "camadas de cebola".

O auto-hospedagem de um nó em uma rede de roteamento anônima não proporciona ao hospedeiro benefícios adicionais de privacidade, mas contribui para a resiliência de toda a rede contra ataques de identificação em benefício de todos.

**Vantagens:**

- A mínima ou nenhuma informação é exposta a outras partes.
- As mensagens podem ser transmitidas de forma descentralizada, mesmo que uma das partes esteja offline.

**Desvantagens:**

- Propagação lenta de mensagens.
- Muitas vezes limitado a menos tipos de mídia, na maioria das vezes texto, uma vez que a rede é lenta.
- Menos confiável se os nós forem selecionados por roteamento randomizado, alguns nós podem estar muito longe do emissor e receptor, adicionando latência ou mesmo falhando em transmitir mensagens se um dos nós ficar offline.
- Mais complexo para começar, pois é necessária a criação e backup seguro de uma chave privada criptográfica.
- Assim como em outras plataformas descentralizadas, adicionar recursos é mais complexo para os desenvolvedores do que em uma plataforma centralizada, portanto os recursos podem estar faltando ou incompletamente implementados, como o retransmissor de mensagens offline ou a exclusão de mensagens.

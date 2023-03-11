---
title: "Tipos de redes de comunicação"
icon: 'material/transit-connection-variant'
description: An overview of several network architectures commonly used by instant messaging applications.
---

Existem várias arquiteturas de rede comumente usadas para retransmitir mensagens entre pessoas. Essas redes podem fornecer diferentes garantias de privacidade, e é por isso que vale a pena considerar seu [modelo de ameaça](../basics/threat-modeling.md) ao decidir qual aplicativo usar.

[Mensageiros Instantâneos Recomendados](../real-time-communication.md ""){.md-button}

## Redes Centralizadas

![Diagrama de redes centralizadas](../assets/img/layout/network-centralized.svg){ align=left }

Mensageiros centralizados são aqueles em que todos os participantes estão no mesmo servidor ou rede de servidores controlados pela mesma organização.

Alguns mensageiros podem ser auto-hospedados e permitem que você configure seu próprio servidor. A auto-hospedagem pode fornecer garantias adicionais de privacidade, como nenhum registro de uso ou acesso limitado a metadados (dados sobre quem está falando com quem). Mensageiros centralizados auto-hospedados são isolados e todos devem estar no mesmo servidor para se comunicar.

**Vantagens:**

- Novos recursos e mudanças podem ser implementados mais rapidamente.
- Mais fácil de começar e de encontrar contatos.
- Ecossistemas mais maduros e estáveis, já que são mais fáceis de serem implementados em um software centralizado.
- Problemas de privacidade podem ser reduzidos quando você confia em um servidor que você está hospedando.

**Desvantagens:**

- Pode incluir [controle ou acesso restrito](https://drewdevault.com/2018/08/08/Signal.html). Isto pode incluir coisas como:
- Ser [proibido de conectar clientes alternativos](https://github.com/LibreSignal/LibreSignal/issues/37#issuecomment-217211165) à rede, mesmo podendo oferecer uma melhor customização ou até mesmo uma melhor experiência. Muitas vezes definido nos Termos e Condições de uso.
- Documentação pobre ou inexistente para desenvolvedores de terceiros.
- O [proprietário](https://web.archive.org/web/20210729191953/https://blog.privacytools.io/delisting-wire/), a política de privacidade e operações podem ser facilmente mudadas quando uma só entidade controla tudo, podendo comprometer o serviço mais tarde.
- A auto-hospedagem requer esforço e conhecimento de como configurar um serviço.

## Redes Federadas

![Diagrama de redes federadas](../assets/img/layout/network-decentralized.svg){ align=left }

Os mensageiros federados usam vários servidores independentes e descentralizados que podem conversar entre si (o e-mail é um exemplo de um serviço federado). A federação permite que os administradores do sistema controlem seu próprio servidor e ainda façam parte da rede de comunicações principal.

Quando auto-hospedados, os membros de um servidor federado podem descobrir e se comunicar com membros de outros servidores, embora alguns servidores possam optar por permanecer privados e não serem federados (por exemplo, servidor de uma equipe de trabalho).

**Vantagens:**

- Permite maior controle sobre seus próprios dados ao usar seu próprio servidor.
- Permite que você escolha com quem confiar seus dados, escolhendo entre vários servidores "públicos".
- Muitas vezes permitem clientes de terceiros que podem fornecer uma experiência mais nativa, personalizada ou acessível.
- O software do servidor pode ser verificado para saber se ele corresponde ao código-fonte original, assumindo que você tem acesso ao servidor ou confia na pessoa que o mantém (por exemplo, um membro de sua família).

**Desvantagens:**

- A adição de novos recursos é mais complexa porque esses recursos precisam ser padronizados e testados para garantir que funcionem com todos os servidores da rede.
- Devido ao ponto anterior, os recursos podem estar faltando, ou incompletos ou funcionando de maneiras inesperadas em comparação com plataformas centralizadas, como retransmissão de mensagens quando offline ou exclusão de mensagens.
- Alguns metadados podem estar disponíveis (por exemplo, informações como "quem está falando com quem", mas não o conteúdo real da mensagem se E2EE for usado).
- Os servidores federados geralmente exigem confiar no administrador do seu servidor. Eles podem ser um amador ou não ser um "profissional de segurança" e podem não servir documentos padrão, como uma política de privacidade ou termos de serviço detalhando como seus dados são usados.
- Os administradores de servidores às vezes optam por bloquear outros servidores, que são uma fonte de abuso não moderado ou quebram as regras gerais de comportamento aceito. Isso prejudicará sua capacidade de se comunicar com os membros desses servidores.

## Rede Peer-to-Peer

![Diagrama P2P](../assets/img/layout/network-distributed.svg){ align=left }

Os mensageiros P2P se conectam a uma [ rede distribuída](https://en.wikipedia.org/wiki/Distributed_networking) de nós para retransmitir uma mensagem ao destinatário sem um servidor de terceiros.

Clientes (peers) geralmente encontram um ao outro através do uso de um [sistema de processamento distribuído](https://pt.wikipedia.org/wiki/Sistema_de_processamento_distribu%C3%ADdo). Exemplos disso incluem [Distributed hash table](https://pt.wikipedia.org/wiki/Distributed_hash_table) (DHT), usado por [torrents](https://pt.wikipedia.org/wiki/BitTorrent) e [IPFS](https://pt.wikipedia.org/wiki/Sistema_de_Arquivos_Interplanet%C3%A1rio) por exemplo. Outra abordagem é redes baseadas em proximidade, onde uma conexão é estabelecida através de WiFi ou Bluetooth (por exemplo, Briar ou o protocolo de rede social [Scuttlebutt](https://www.scuttlebutt.nz)).

Uma vez que um peer tenha encontrado uma rota para o seu contato através de qualquer um desses métodos, uma conexão direta entre eles é feita. Embora as mensagens sejam geralmente criptografadas, um observador ainda pode deduzir a localização e a identidade do remetente e do destinatário.

As redes P2P não usam servidores, pois os peers se comunicam diretamente entre si e, portanto, não podem ser auto-hospedados. No entanto, alguns serviços adicionais podem contar com servidores centralizados, como descoberta de usuários ou retransmissão de mensagens off-line, que podem se beneficiar da auto-hospedagem.

**Vantagens:**

- Informações mínimas são expostas a terceiros.
- Plataformas P2P modernas implementam E2EE por padrão. Não há servidores que possam interceptar e descriptografar suas transmissões, ao contrário de modelos centralizados e federados.

**Desvantagens:**

- Conjunto de recursos reduzido:
- As mensagens só podem ser enviadas quando ambos os peers estão online, no entanto, seu cliente pode armazenar mensagens localmente enquanto espera o contato ficar online.
- Geralmente aumenta o uso da bateria em dispositivos móveis, porque o cliente deve permanecer conectado à rede para saber quem está online.
- Alguns recursos comuns em mensageiros podem não ser implementados ou estar incompletos, como a exclusão de mensagens.
- Seu endereço IP e o dos contatos com os quais você está se comunicando podem ser expostos se você não usar o software em conjunto com uma [VPN](../vpn.md) ou [Tor](../tor.md). Muitos países têm alguma forma de vigilância em massa e/ou retenção de metadados.

## Roteamento Anônimo

![Diagrama de roteamento anônimo](../assets/img/layout/network-anonymous-routing.svg){ align=left }

Um mensageiro usando [roteamento anônimo](https://doi.org/10.1007/978-1-4419-5906-5_628) oculta a identidade do remetente, do destinatário ou a evidência de que eles estão se comunicando. Idealmente, um mensageiro deve esconder todos os três.

Existem [muitas](https://doi.org/10.1145/3182658) maneiras diferentes de implementar o roteamento anônimo. Um dos mais famosos é o [onion routing](https://en.wikipedia.org/wiki/Onion_routing) (ou seja, [Tor](tor-overview.md)), que comunica mensagens criptografadas através de uma [rede sopbreposta](https://pt.wikipedia.org/wiki/Rede_sobreposta) virtual, que esconde a localização de cada nó, bem como o destinatário e o remetente de cada mensagem. O remetente e o destinatário nunca interagem diretamente e só se encontram através de um nó de encontro secreto para que não haja vazamento de endereços IP ou localização física. Os nós não podem descriptografar mensagens, nem o destino final; apenas o destinatário pode. Cada nó intermediário só pode descriptografar uma parte que indica para onde enviar a mensagem criptografada, até chegar ao destinatário que pode descriptografá-la totalmente, daí as "onion layers."

A auto-hospedagem de um nó em uma rede de roteamento anônimo não fornece ao hoster benefícios adicionais de privacidade, mas contribui para a resiliência de toda a rede contra ataques de identificação para o benefício de todos.

**Vantagens:**

- Pouca ou nenhuma informação é exposta a outras partes.
- As mensagens podem ser retransmitidas de forma descentralizada, mesmo que uma das partes esteja offline.

**Desvantagens:**

- Propagação lenta da mensagem.
- Muitas vezes limitado a menos tipos de mídia, principalmente texto, uma vez que a rede é lenta.
- Menos confiável se os nós são selecionados por roteamento randomizado, alguns nós podem estar muito longe do remetente e do receptor, adicionando latência ou mesmo não transmitindo mensagens se um dos nós ficar offline.
- Mais complexo para começar, pois é necessária a criação e o backup seguro de uma chave privada criptográfica.
- Assim como outras plataformas descentralizadas, adicionar recursos é mais complexo para os desenvolvedores do que em uma plataforma centralizada. Assim, os recursos podem estar faltando ou incompletamente implementados, como retransmissão de mensagens offline ou exclusão de mensagens.

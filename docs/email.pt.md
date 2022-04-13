---
title: Provedores de e-mail privados
icon: material/email
---

Encontre um provedor de e-mail seguro que manterá sua privacidade em mente. Não se contente com plataformas suportadas por anúncios. Nunca confie a sua privacidade a nenhuma empresa, encripte sempre.

!!! aviso

    Ao utilizar tecnologia de criptografia de ponta a ponta (E2EE) como o OpenPGP, o e-mail ainda terá alguns metadados que não são criptografados no cabeçalho do e-mail. Leia mais sobre os metadados de e-mail.
    
    O OpenPGP também não suporta Forward secrecy, o que significa que se a sua chave privada ou a do destinatário for roubada, todas as mensagens anteriores criptografadas com ela serão expostas. Como posso proteger as minhas chaves privadas?

??? exemplo "Alternativas de e-mail".

    Ao invés de usar o e-mail para conversas prolongadas, considere a possibilidade de usar um meio que suporte o sigilo do Forward.
    
    [Mensageiros Instantâneos Recomendados](real-time-communication.md){ .md-button }

## Serviços de e-mail recomendados

### ProtonMail

!!! recomendação

    ![logo ProtonMail](/assets/img/email/protonmail.svg){ align=right }
    
    **ProtonMail** é um serviço de e-mail com foco em privacidade, criptografia, segurança e facilidade de uso. Eles estão em operação desde **2013***. ProtonMail tem a sua sede em Genève, Suíça. As contas começam com 500 MB de armazenamento com o seu plano livre.
    
    Contas gratuitas têm algumas limitações, como não ser capaz de procurar no corpo do texto e não ter acesso ao [ProtonMail Bridge](https://protonmail.com/bridge), que é necessário para usar um [cliente de e-mail recomendado](/email-clients) (por exemplo, Thunderbird). Contas pagas estão disponíveis a partir de **$48/y*** que incluem recursos como ProtonMail Bridge, armazenamento adicional e suporte de domínio personalizado.
    
    **Free***
    
    [Visite ProtonMail.com](https://protonmail.com){ .md-button .md-button--primary }

??? verifique "Domínios e Pseudônimos Personalizados".

    Os usuários do ProtonMail pago podem usar o seu próprio domínio com o serviço. [Catch-all](https://protonmail.com/support/knowledge-base/catch-all/) endereços são suportados com domínios personalizados para planos Profissionais e Visionários. ProtonMail também suporta [subaddressing](https://protonmail.com/support/knowledge-base/creating-aliases/), o que é útil para usuários que não querem comprar um domínio.

??? cheque "Formas de pagamento privadas".

    ProtonMail aceita Bitcoin, além de aceitar cartões de crédito/débito e PayPal.

??? verificar "Segurança da Conta".

    ProtonMail suporta [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) [autenticação de dois fatores](https://protonmail.com/support/knowledge-base/two-factor-authentication/) apenas. O uso de uma chave de segurança [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) ainda não é suportado. ProtonMail está planejando implementar o U2F após a conclusão de seu código [Single Sign On (SSO)](https://reddit.com/comments/cheoy6/comment/feh2lw0/).

??? verificar "Segurança de Dados".

    ProtonMail tem [criptografia de acesso zero](https://protonmail.com/blog/zero-access-encryption) em repouso para seus e-mails, [contatos do catálogo de endereços](https://protonmail.com/blog/encrypted-contacts-manager), e [calendars](https://protonmail.com/blog/protoncalendar-security-model). Isto significa que as mensagens e outros dados armazenados na sua conta só são legíveis por si.

??? Verifique "Criptografia de E-mail".

    ProtonMail tem [criptografia OpenPGP integrada](https://protonmail.com/support/knowledge-base/how-to-use-pgp) em seu webmail. Os e-mails para outros usuários do ProtonMail são criptografados automaticamente, e a criptografia para usuários que não são usuários do ProtonMail com uma chave OpenPGP pode ser habilitada facilmente nas configurações da sua conta. Eles também permitem que você [encripte mensagens para usuários não-ProtonMail](https://protonmail.com/support/knowledge-base/encrypt-for-outside-users) sem a necessidade de que eles se inscrevam em uma conta ProtonMail ou usem softwares como o OpenPGP.
    
    ProtonMail também suporta a descoberta de chaves públicas via HTTP a partir de seu [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). Isso permite aos usuários fora do ProtonMail encontrar facilmente as chaves OpenPGP dos usuários do ProtonMail, para o E2EE cross-provider.

??? verificar ".onion Service" (Serviço de cebola)

    Os serviços e login do ProtonMail estão acessíveis através do Tor, [protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion](https://protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion/)

??? info "Funcionalidade Adicional

    ProtonMail oferece uma conta "Visionária" por 24 euros/mês, que também permite o acesso ao ProtonVPN, além de fornecer múltiplas contas, domínios, pseudônimos e armazenamento extra.

### Mailbox.org

!!! recomendação

    ![logo mailbox.org](/assets/img/email/mailboxorg.svg){ align=right }
    
    **Mailbox.org*** é um serviço de e-mail com foco em ser seguro, livre de anúncios, e alimentado privadamente por 100co-friendly energy. Eles estão em operação desde 2014. A Mailbox.org está sediada em Berlim, Alemanha. As contas começam com 2 GB de armazenamento, que podem ser atualizados conforme necessário.
    
    **EUR 12 euros/ano***
    
    [Visite Mailbox.org](https://mailbox.org){ .md-button .md-button--primary }

??? verifique "Domínios e Pseudônimos Personalizados".

    Mailbox.org permite aos usuários usar seu próprio domínio e eles suportam [catch-all](https://kb.mailbox.org/display/MBOKBEN/Using catch-all alias with own domain) endereços. Mailbox.org também suporta [subaddressing](https://kb.mailbox.org/display/BMBOKBEN/What é um pseudônimo e como utilizá-lo), o que é útil para usuários que não querem comprar um domínio.

??? info "Formas de pagamento privadas

    Mailbox.org não aceita Bitcoin ou quaisquer outras moedas criptográficas como resultado de seu processador de pagamento BitPay suspender operações na Alemanha. No entanto, eles aceitam dinheiro pelo correio, pagamento em dinheiro para conta bancária, transferência bancária, cartão de crédito, PayPal e alguns processadores específicos da Alemanha: paydirekt e Sofortüberweisung.

??? verificar "Segurança da Conta".

    Mailbox.org suporta [autenticação de dois fatores](https://kb.mailbox.org/display/MBOKBEN/How para usar autenticação de dois fatores - 2FA) apenas para o seu webmail. Você pode usar ou [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) ou um [Yubikey](https://en.wikipedia.org/wiki/YubiKey) através do [Yubicloud](https://www.yubico.com/products/services-software/yubicloud). Padrões web como [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) ainda não são suportados.

??? info "Segurança de Dados

    Mailbox.org permite a encriptação de correio de entrada usando a sua [caixa de correio encriptada](https://kb.mailbox.org/display/MBOKBEN/The Caixa de correio encriptada). As novas mensagens que receber serão imediatamente encriptadas com a sua chave pública.
    
    Contudo, [Open-Exchange](https://en.wikipedia.org/wiki/Open-Xchange), a plataforma de software utilizada pela Mailbox.org, [não suporta](https://kb.mailbox.org/display/BMBOKBEN/Encryption do calendário e agenda de endereços) a encriptação da sua agenda de endereços e agenda. Uma [opção autônoma](/calendário-contactos) pode ser mais apropriada para essa informação.

??? Verifique "Criptografia de E-mail".

    Mailbox.org tem [criptografia integrada](https://kb.mailbox.org/display/MBOKBEN/Send e-mails criptografados com Guard) em seu webmail, o que simplifica o envio de mensagens aos usuários com chaves públicas OpenPGP. Eles também permitem que [destinatários remotos descriptografem um e-mail](https://kb.mailbox.org/display/MBOKBEN/My destinatário não usa PGP) nos servidores da Mailbox.org. Esta funcionalidade é útil quando o destinatário remoto não tem o OpenPGP e não consegue desencriptar uma cópia do e-mail na sua própria caixa de correio.
    
    Mailbox.org também suporta a descoberta de chaves públicas via HTTP a partir de seu [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). Isto permite aos usuários fora da Mailbox.org encontrar facilmente as chaves OpenPGP dos usuários da Mailbox.org, para o E2EE cross-provider.

??? info ".onion Service" (Serviço de cebola)

    Você pode acessar sua conta Mailbox.org via IMAP/SMTP usando seu [.onion service](https://kb.mailbox.org/display/MBOKBEN/The Tor exit node of mailbox.org). No entanto, a sua interface de webmail não pode ser acessada através do seu serviço .onion, e os usuários podem experimentar erros no certificado TLS.

??? info "Funcionalidade Adicional

    Todas as contas vêm com armazenamento em nuvem limitado que [pode ser criptografado](https://kb.mailbox.org/display/MBOKBEN/Encrypt arquivos em seu disco). Mailbox.org também oferece o apelido [@secure.mailbox.org](https://kb.mailbox.org/display/MBOKBEN/Ensuring E-Mails são enviados com segurança), o que reforça a criptografia TLS na conexão entre servidores de e-mail, caso contrário, a mensagem não será enviada. Mailbox.org também suporta [Exchange ActiveSync](https://en.wikipedia.org/wiki/Exchange_ActiveSync) além de protocolos de acesso padrão como IMAP e POP3.

### Desarraigar

!!! recomendação

    ![Disroot logo](/assets/img/email/disroot.svg#only-light){ align=right }
    ![Disroot logo](/assets/img/email/disroot-dark.svg#only-dark){ align=right }
    
    **Disroot** oferece e-mail entre [outros serviços](https://disroot.org/en/#services). O serviço é mantido por voluntários e sua comunidade. Eles estão em funcionamento desde 2015. O Disroot está sediado em Amesterdão. O Disroot é gratuito e utiliza software de código aberto, como o Rainloop, para prestar serviço. Os utilizadores apoiam o serviço através de doações e da compra de armazenamento extra. O limite da caixa de correio é de 1 GB, mas o armazenamento extra pode ser comprado 0,15 euros por GB por mês pago anualmente.
    
    **Free***
    
    [Visite Disroot.org](https://disroot.org){ .md-button .md-button--primary }

??? verifique "Domínios e Pseudônimos Personalizados".

    Disroot permite que os utilizadores utilizem o seu próprio domínio. Eles têm pseudônimos, porém você deve [aplicar manualmente](https://disroot.org/en/forms/alias-request-form) para eles.

??? cheque "Formas de pagamento privadas".

    Disroot aceita Bitcoin e Faircoin como métodos de pagamento. Eles também aceitam PayPal, depósito bancário direto e pagamentos Patreon. Disroot é uma organização sem fins lucrativos que também aceita doações através da Liberapay, Flattr e Monero, mas estes métodos de pagamento não podem ser usados para comprar serviços.

??? verificar "Segurança da Conta".

    Disroot suporta [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) autenticação de dois fatores apenas para webmail. Eles não permitem [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) autenticação da chave de segurança.

??? aviso "Segurança de Dados".

    Disroot usa criptografia de disco completa. No entanto, não parece ser "acesso zero", o que significa que é tecnicamente possível para eles descriptografar os dados que têm se não forem adicionalmente encriptados com uma ferramenta como OpenPGP.
    
    Disroot também usa os protocolos standard [CalDAV](https://en.wikipedia.org/wiki/CalDAV) e [CardDAV](https://en.wikipedia.org/wiki/CardDAV) para calendários e contactos, que não suportam o E2EE. Uma [opção autônoma](/calendário-contactos) pode ser mais apropriada.

??? Verifique "Criptografia de E-mail".

    Disroot permite o envio de e-mails criptografados a partir de sua aplicação de webmail usando OpenPGP. No entanto, Disroot não integrou um Web Key Directory (WKD) para os utilizadores na sua plataforma.

??? serviço ".onion" em falta

    O Disroot não opera um serviço de cebola.

??? info "Funcionalidade Adicional

    Eles oferecem [outros serviços](https://disroot.org/en/#services) tais como NextCloud, XMPP Chat, Etherpad, Ethercalc, Pastebin, Sondagens Online e uma instância Gitea. Eles também têm um aplicativo [disponível em F-Droid](https://f-droid.org/packages/org.disroot.disrootapp/).

### Tutanota

!!! recomendação

    ![logo Tutanota](/assets/img/email/tutanota.svg#only-light){ align=right }
    ![logo Tutanota](/assets/img/email/tutanota-dark.svg#only-dark){ align=right }
    
    **[Tutanota.com](https://tutanota.com)** é um serviço de e-mail com foco na segurança e privacidade através do uso de criptografia. Tutanota está em operação desde **2011*** e está sediada em Hannover, Alemanha. As contas começam com 1GB de armazenamento com o seu plano livre.
    
    **Free***
    
    [Visite Tutanota.com](https://tutanota.com){ .md-button .md-button--primary }

Tutanota [não permite](https://tutanota.com/faq/#imap) o uso de terceiros [clientes de e-mail](/email-clients). Tutanota não tem planos de puxar e-mails de [contas de e-mail externas](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) usando o protocolo [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) . [Importação de e-mail](https://github.com/tutao/tutanota/issues/630) não é actualmente possível.

Os e-mails podem ser exportados [individualmente ou por seleção em massa](https://tutanota.com/howto#generalMail). Tutanota não permite [subpastas](https://github.com/tutao/tutanota/issues/927) como seria de esperar com outros provedores de e-mail.

Tutanota está trabalhando em um [cliente desktop](https://tutanota.com/blog/posts/desktop-clients/) e eles têm um aplicativo [disponível em F-Droid](https://f-droid.org/packages/de.tutao.tutanota). Eles também têm seu aplicativo em lojas convencionais como [App Store](https://apps.apple.com/us/app/tutanota/id922429609) no iOS e [Google Play](https://play.google.com/store/apps/details?id=de.tutao.tutanota) para Android.

??? verifique "Domínios e Pseudônimos Personalizados".

    As contas Tutanota pagas podem usar até 5 [aliases](https://tutanota.com/faq#alias) e [domínios personalizados](https://tutanota.com/faq#custom-domain). Tutanota não permite [subendereços (mais endereços)](https://tutanota.com/faq#plus), mas você pode usar um [catch-all](https://tutanota.com/howto#settings-global) com um domínio personalizado.

??? aviso "Métodos de pagamento privados".

    Tutanota só aceita diretamente cartões de crédito e PayPal, no entanto Bitcoin e Monero podem ser usados para comprar cartões presente através de seu [partnership](https://tutanota.com/faq/#cryptocurrency) com Proxystore.

??? verificar "Segurança da Conta".

    Tutanota suporta [autenticação de dois fatores](https://tutanota.com/faq#2fa). Os usuários podem usar [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) ou [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor). O suporte ao U2F é [ainda não disponível no Android](https://github.com/tutao/tutanota/issues/443).

??? verificar "Segurança de Dados".

    Tutanota tem [criptografia de acesso zero em repouso](https://tutanota.com/faq#what-encrypted) para seus e-mails, [contatos do catálogo de endereços](https://tutanota.com/faq#encrypted-address-book), e [calendars](https://tutanota.com/faq#calendar). Isto significa que as mensagens e outros dados armazenados na sua conta só são legíveis por si.

??? aviso "Criptografia de e-mail".

    Tutanota [não usa OpenPGP](https://www.tutanota.com/faq/#pgp). Os usuários Tutanota só podem receber e-mails criptografados quando usuários externos os enviam através de uma [caixa de correio temporário Tutanota](https://www.tutanota.com/howto/#encrypted-email-external).
    
    Tutanota [tem planos](https://github.com/tutao/tutanota/issues/198) para suportar [AutoCrypt](https://autocrypt.org). Isso permitiria que usuários externos enviassem e-mails criptografados para usuários Tutanota desde que seu cliente de e-mail suportasse os cabeçalhos do AutoCrypt.

??? serviço ".onion" em falta

    Tutanota não opera um serviço .onion mas [pode considerar](https://github.com/tutao/tutanota/issues/528) no futuro.

??? info "Funcionalidade Adicional

    Tutanota oferece a versão comercial da [Tutanota para organizações sem fins lucrativos](https://tutanota.com/blog/posts/secure-email-for-non-profit) de graça ou com um forte desconto.
    
    A Tutanota também tem um recurso comercial chamado [Secure Connect](https://tutanota.com/secure-connect/). Isso garante o contato do cliente com o negócio usando E2EE. A característica custa 240 euros/ano.

### StartMail

!!! recomendação

    ![StartMail logo](/assets/img/email/startmail.svg#only-light){ align=right }
    ![StartMail logo](/assets/img/email/startmail-dark.svg#only-dark){ align=right }
    
    **StartMail** é um serviço de e-mail com foco na segurança e privacidade através do uso de criptografia padrão OpenPGP. StartMail está em operação desde 2014 e está baseado no Boulevard 11, na Holanda Zeist. As contas começam com 10GB. Eles oferecem um julgamento de 30 dias.
    
    **USD $59.95/ano***
    
    [Visite StartMail.com](https://startmail.com/){ .md-button .md-button--primary }

??? verifique "Domínios e Pseudônimos Personalizados".

    As contas pessoais podem usar pseudônimos [Custom ou Quick](https://support.startmail.com/hc/en-us/articles/360007297457-Aliases). [Domínios personalizados](https://support.startmail.com/hc/en-us/articles/4403911432209-Setup-a-custom-domain) também estão disponíveis.

??? aviso "Métodos de pagamento privados".

    StartMail aceita Visa, MasterCard, American Express e Paypal. O StartMail também dispõe de outras [opções de pagamento](https://support.startmail.com/hc/en-us/articles/360006620637-Payment-methods), tais como o Bitcoin (actualmente apenas para contas pessoais) e o Débito Directo SEPA para contas com mais de um ano.

??? verificar "Segurança da Conta".

    StartMail suporta [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) autenticação de dois fatores [apenas para webmail](https://support.startmail.com/hc/en-us/articles/360006682158-Two-factor-authentication-2FA). Eles não permitem [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) autenticação da chave de segurança.

??? info "Segurança de Dados

    StartMail tem [criptografia de acesso zero em repouso](https://www.startmail.com/en/whitepaper/#_Toc458527835), usando seu sistema "user vault". Quando um usuário entra, o cofre é aberto, e o e-mail é então movido para o cofre fora da fila onde é desencriptado pela chave privada correspondente.
    
    StartMail suporta a importação de [contacts](https://support.startmail.com/hc/en-us/articles/360006495557-Import-contacts), no entanto, eles só são acessíveis no webmail e não através de protocolos como [CalDAV](https://en.wikipedia.org/wiki/CalDAV). Os contatos também não são armazenados usando criptografia de conhecimento zero, portanto uma [opção autônoma](/calendar-contactos) pode ser mais apropriada.

??? Verifique "Criptografia de E-mail".

    StartMail tem [criptografia integrada](https://support.startmail.com/hc/en-us/sections/360001889078-Encryption) em seu webmail, o que simplifica o envio de mensagens aos usuários com chaves públicas OpenPGP.

??? serviço ".onion" em falta

    O StartMail não opera um serviço de .onion.

??? info "Funcionalidade Adicional

    StartMail permite o proxy de imagens dentro de e-mails. Se um usuário permitir que a imagem remota seja carregada, o remetente não saberá qual é o endereço IP do usuário.

### CTemplar

!!! recomendação

    ![Logótipo CTemplar](/assets/img/email/ctemplar.svg#only-light){ align=right }
    ![CTemplar Logo](/assets/img/email/ctemplar-dark.svg#only-dark){ align=right }
    
    **CTemplar** é um serviço de e-mail com foco na segurança e privacidade através do uso de criptografia padrão OpenPGP. A CTemplar está em funcionamento desde **2018*** e é gerida a partir da Islândia. As contas pagas começam com 5GB. Eles oferecem contas grátis por [invitation](https://ctemplar.com/email-creation-restriction/).
    
    **USD $96/ano***
    
    [Visite CTemplar.com](https://ctemplar.com){ .md-button .md-button--primary }

??? verifique "Domínios e Pseudônimos Personalizados".

    As contas pagas podem usar [Domínios personalizados](https://ctemplar.com/help/answer/add-a-domain/) e [aliases](https://ctemplar.com/help/answer/how-to-create-aliases/).

??? cheque "Formas de pagamento privadas".

    CTemplar [opções de pagamento](https://ctemplar.com/help/answer/payment-options/) inclui cartões de crédito via Stripe, Bitcoin e Monero.

??? verificar "Segurança da Conta".

    CTemplar suporta [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm) autenticação de dois fatores [apenas para webmail](https://ctemplar.com/help/answer/setting-up-two-factor-authentication-2fa/). Eles não permitem [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) autenticação da chave de segurança.

??? verificar "Segurança de Dados".

    A CTemplar tem [criptografia de acesso zero em repouso](https://ctemplar.com/help/answer/what-encryption-method-is-used/), usando PGP. Eles suportam [cabeçalhos protegidos](https://datatracker.ietf.org/doc/html/draft-autocrypt-lamps-protected-headers-02/) e portanto existe [criptografia de assunto](https://ctemplar.com/help/answer/subject-encryption/).
    
    CTemplar suporta importação [contacts](https://ctemplar.com/help/answer/importing-contacts/) e [os contatos são criptografados](https://ctemplar.com/help/answer/contact-encryption/) em repouso, no entanto, eles só são acessíveis no webmail e aplicativos.

??? Verifique "Criptografia de E-mail".

    A CTemplar tem [criptografia integrada](https://ctemplar.com/help/answer/how-does-encryption-decryption-work-in-ctemplar/) em seu webmail, o que simplifica o envio de mensagens aos usuários com chaves públicas OpenPGP.

??? aviso ".onion Service" (Serviço de Cebola)

    O serviço .onion da CTemplar [ctemplarpizuduxk3fkwrieizstx33kg5chlvrh37nz73pv5smsvl6ad.onion](http://ctemplarpizuduxk3fkwrieizstx33kg5chlvrh37nz73pv5smsvl6ad.onion /) está [actualmente desactivado](https://twitter.com/RealCTemplar/status/1458775445202157570) para acesso ao webmail, devido a um Tor Browser [bug](https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/32865).

??? info "Funcionalidade Adicional

    CTemplar tem uma função [dead man timer](https://ctemplar.com/help/answer/setting-up-a-dead-mans-timer/) que enviará automaticamente uma mensagem específica que você definiu após um determinado período de tempo.
    
    O CTemplar também tem uma funcionalidade que permite aos utilizadores verificar [checksums](https://ctemplar.com/ctemplar-checksum-implementation/) das páginas de produção com uma cópia pública no Github.
    
    Os clientes Electron existem para Windows, Mac e Linux. Também existem clientes oficiais para iOS e Android ([incluindo F-Droid](https://f-droid.org/en/packages/com.ctemplar.app.fdroid).) Todos estes clientes são [open source](https://github.com/orgs/CTemplar/repositories).

## Nossos Critérios

**Por favor, note que não estamos afiliados a nenhum dos provedores que recomendamos.** Isto permite-nos fornecer recomendações completamente objectivas. Desenvolvemos um conjunto claro de requisitos para qualquer provedor de e-mail que deseje ser recomendado, incluindo a implementação das melhores práticas do setor, tecnologia moderna e muito mais. Sugerimos que você se familiarize com esta lista antes de escolher um provedor de e-mail, e conduza sua própria pesquisa para garantir que o provedor de e-mail que você escolher seja a escolha certa para você.

### Jurisdição

Operar fora dos cinco/nove/quatro países não é necessariamente uma garantia de privacidade, e existem outros factores a considerar.

**Mínimo para se qualificar:**

- Operando fora dos EUA ou de outros países da Five Eyes.

**O melhor caso:**

- Operando fora dos EUA ou de outros 14 países da 14 Eyes.
- Operando dentro de um país com fortes leis de proteção ao consumidor.

### Tecnologia

Consideramos estas características como importantes para fornecer um serviço seguro e óptimo aos utilizadores. Os usuários devem considerar o provedor que tem as características necessárias.

**Mínimo para se qualificar:**

- Criptografa os dados da conta em repouso.
- A criptografia integrada do webmail proporciona conveniência aos usuários que desejam melhorar ao não ter [E2EE](https://en.wikipedia.org/wiki/End-to-end_encryption) criptografia.

**O melhor caso:**

- Criptografa os dados da conta em repouso com criptografia de acesso zero.
- Permitir que os utilizadores utilizem o seu próprio [nome de domínio](https://en.wikipedia.org/wiki/Domain_name). Nomes de domínio personalizados são importantes para os usuários porque permitem que eles mantenham sua agência do serviço, caso ela se torne ruim, ser adquirida por outra empresa que não prioriza a privacidade, etc.
- Suporte para [WKD](https://wiki.gnupg.org/WKD) para permitir uma melhor descoberta de chaves públicas OpenPGP via HTTP.  
  Usuários GnuPG podem obter uma chave digitando: `gpg --locate-key example_user@example.com`
- Suporte para uma caixa de correio temporária para utilizadores externos. Isto é útil quando você quer enviar um e-mail criptografado, sem enviar uma cópia real para o seu destinatário. Estes e-mails geralmente têm um tempo de vida limitado e depois são automaticamente apagados. Eles também não exigem que o destinatário configure qualquer criptografia como o OpenPGP.
- Disponibilidade dos serviços do provedor de e-mail através de um [serviço de cebola](https://en.wikipedia.org/wiki/.onion).
- [Subaddressing](https://en.wikipedia.org/wiki/Email_address#Subaddressing) suporte.
- [Catch all](https://en.wikipedia.org/wiki/Email_filtering) ou [aliases](https://en.wikipedia.org/wiki/Email_alias) para utilizadores que possuem os seus próprios domínios.
- Uso de protocolos padrão de acesso a e-mail, tais como [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol), [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) ou [JMAP](https://en.wikipedia.org/wiki/JSON_Meta_Application_Protocol). Os protocolos de acesso padrão garantem que os clientes possam baixar facilmente todos os seus e-mails, caso queiram mudar para outro provedor.

### Privacidade

Preferimos que os nossos fornecedores recomendados recolham o mínimo de dados possível.

**Mínimo para se qualificar:**

- Proteger o endereço IP do remetente. Filtre-o de mostrar no campo `Recebido` cabeçalho.
- Não requer informações pessoais identificáveis (PII) além do nome de usuário e senha.
- Política de privacidade que cumpre os requisitos definidos pela GDPR

**O melhor caso:**

- Aceita Bitcoin, dinheiro, e outras formas de moeda criptográfica e/ou opções de pagamento anônimo (cartões-presente, etc.)

### Segurança

Os servidores de e-mail lidam com uma grande quantidade de dados muito sensíveis. Esperamos que os fornecedores adotem as melhores práticas do setor a fim de proteger seus usuários.

**Mínimo para se qualificar:**

- Protecção do webmail com [autenticação de dois factores (2FA)](https://en.wikipedia.org/wiki/Multi-factor_authentication), tal como [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm).
- Criptografia em repouso, (ex. [dm-crypt](https://en.wikipedia.org/wiki/dm-crypt)) isto protege o conteúdo dos servidores em caso de apreensão ilegal.
- [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) suporte.
- No [TLS](https://en.wikipedia.org/wiki/Opportunistic_TLS) erros/vulnerabilidades ao ser perfilado por ferramentas tais como [Hardenize](https://www.hardenize.com), [testssl.sh](https://testssl.sh) ou [Qualys SSL Labs](https://www.ssllabs.com/ssltest), isto inclui erros relacionados com certificados, conjuntos de cifras pobres ou fracas, parâmetros DH fracos como os que levaram a [Logjam](https://en.wikipedia.org/wiki/Logjam_(computer_security)).
- Um válido [MTA-STS](https://tools.ietf.org/html/rfc8461) e [TLS-RPT](https://tools.ietf.org/html/rfc8460) política.
- Válido [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) records.
- Válido [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) e [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) records.
- Tenha um [DMARC](https://en.wikipedia.org/wiki/DMARC) record and policy ou utilize [ARC](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) para autenticação. Se for utilizada autenticação DMARC, a política deve ser definida para `rejeitar` ou `quarentena`.
- Uma preferência de suite de servidor do TLS 1.2 ou posterior e um plano para [Deprecating TLSv1.0 e TLSv1.1](https://datatracker.ietf.org/doc/draft-ietf-tls-oldversions-deprecate/).
- [SMTPS](https://en.wikipedia.org/wiki/SMTPS) submissão, assumindo que SMTP é usado.
- Normas de segurança do site, tais como:

- [Segurança de Transporte HTTP Strict](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
- [Integridade do Subresource](https://en.wikipedia.org/wiki/Subresource_Integrity) se carregar coisas de domínios externos.

**O melhor caso:**

- Suporte para autenticação de hardware, ou seja [U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) e [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn). U2F e WebAuthn são mais seguros, pois usam uma chave privada armazenada em um dispositivo de hardware do lado do cliente para autenticar usuários, ao contrário de um segredo compartilhado que é armazenado no servidor web e no lado do cliente quando se usa o TOTP. Além disso, U2F e WebAuthn são mais resistentes ao phishing, pois sua resposta de autenticação é baseada no [nome de domínio](https://en.wikipedia.org/wiki/Domain_name).
- Criptografia de acesso zero, construída sobre criptografia em repouso. A diferença é que o fornecedor não tem as chaves de decifração dos dados que possui. Isto evita que um funcionário desonestos que tenha acesso ou um adversário remoto liberte dados que tenha roubado ao obter acesso não autorizado ao servidor.
- [Registro de Recursos da Autoridade de Certificação DNS (CAA)](https://tools.ietf.org/html/rfc6844) além do suporte a DANE.
- Implementação de [Authenticated Received Chain (ARC)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain), isto é útil para usuários que postam em listas de discussão [RFC8617](https://tools.ietf.org/html/rfc8617).
- Programas de recompensa de bugs e/ou um processo coordenado de divulgação de vulnerabilidades.
- Normas de segurança do site, tais como:

- [Política de Segurança de Conteúdo (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy)
- [Expect-CT](https://datatracker.ietf.org/doc/draft-ietf-httpbis-expect-ct)

### Confiança

Você não confiaria suas finanças a alguém com uma identidade falsa, então por que confiar seu e-mail a alguém? Exigimos que nossos provedores recomendados sejam públicos sobre sua propriedade ou liderança. Também gostaríamos de ver relatórios de transparência frequentes, especialmente no que diz respeito à forma como os pedidos do governo são tratados.

**Mínimo para se qualificar:**

- Liderança ou propriedade pública.

**O melhor caso:**

- Liderança voltada para o público.
- Relatórios de transparência frequentes.

### Marketing

Com os provedores de e-mail, nós recomendamos que nós gostamos de ver o marketing responsável.

**Mínimo para se qualificar:**

- Deve auto-instalar análises (sem Google Analytics, etc.). O site do provedor também deve cumprir com [DNT (Não rastrear)](https://en.wikipedia.org/wiki/Do_Not_Track) para aqueles usuários que querem optar por não participar.

Não deve ter nenhum marketing que seja irresponsável:

- Reclamações de "criptografia inquebrável". A encriptação deve ser utilizada com a intenção de não ser secreta no futuro, quando a tecnologia existir para a decifrar.
- Fazer garantias de protecção do anonimato a 100%. Quando alguém afirma que algo é 100%, significa que não há certeza de fracasso. Sabemos que os usuários podem facilmente se desanonimizar de várias maneiras, por exemplo:

- Reutilização de informação pessoal, por exemplo (contas de e-mail, pseudónimos únicos, etc.) que acederam sem software de anonimato (Tor, VPN, etc.)
- [Impressão digital do navegador](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)

**O melhor caso:**

- Documentação clara e de fácil leitura. Isto inclui coisas como, configurar o 2FA, clientes de e-mail, OpenPGP, etc.

### Funcionalidade adicional

Embora não haja requisitos rigorosos, existem alguns outros factores de conveniência ou privacidade que analisámos ao determinar quais os fornecedores a recomendar.

## Visão Geral da Criptografia de E-mail

### O que é criptografia de ponta a ponta (E2EE) no e-mail?

[encriptação end-to-end (E2EE)](https://en.wikipedia.org/wiki/End-to-end_encryption) é uma forma de encriptar o conteúdo do e-mail para que ninguém a não ser o(s) destinatário(s) possa ler a mensagem de e-mail.

### Como posso encriptar o meu e-mail?

A maneira padrão de fazer e-mail E2EE e tê-lo funcionando entre diferentes provedores de e-mail é com [OpenPGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy#OpenPGP). Existem diferentes implementações do padrão OpenPGP, sendo as mais comuns [GnuPG](https://en.wikipedia.org/wiki/GNU_Privacy_Guard) e [OpenPGP.js](https://openpgpjs.org).

Existe outro padrão que era popular nos negócios chamado [S/MIME](https://en.wikipedia.org/wiki/S/MIME), porém requer um certificado emitido por um [Certificate Authority](https://en.wikipedia.org/wiki/Certificate_authority) (nem todos eles emitem certificados S/MIME). Tem suporte em [Google Workplace](https://support.google.com/a/topic/9061730?hl=en&ref_topic=9061731) e [Outlook for Web or Exchange Server 2016, 2019](https://support.office.com/en-us/article/encrypt-messages-by-using-s-mime-in-outlook-on-the-web-878c79fc-7088-4b39-966f-14512658f480).

### Que software posso usar para obter o E2EE?

Provedores de e-mail que permitem a utilização de protocolos de acesso padrão como [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) e [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) podem ser utilizados com qualquer um dos [clientes de e-mail que recomendamos](/email-clients). Isto pode ser menos seguro, pois agora você está confiando em provedores de e-mail para garantir que sua implementação de criptografia funcione e não tenha sido comprometida de qualquer forma.

### Como posso proteger as minhas chaves privadas?

Um smartcard (tal como um [Yubikey](https://support.yubico.com/hc/en-us/articles/360013790259-Using-Your-YubiKey-with-OpenPGP) ou [Nitrokey](https://www.nitrokey.com)) funciona ao receber uma mensagem de e-mail criptografada de um dispositivo (telefone, tablet, computador, etc) executando um cliente de e-mail/webmail. A mensagem é então descriptografada pelo smartcard e o conteúdo descriptografado é enviado de volta para o dispositivo.

É vantajoso que a decifragem ocorra no smartcard para evitar a possível exposição da sua chave privada a um dispositivo comprometido.

## Visão Geral dos Metadados de Email

### Quem pode ver os metadados dos e-mails?

Os metadados de e-mail podem ser vistos pelo seu software cliente de e-mail (ou webmail) e quaisquer servidores que retransmitem a mensagem de você para qualquer destinatário. Por vezes, os servidores de e-mail também utilizam partes externas para se protegerem contra spam.

### O que são metadados de e-mail?

O software de e-mail muitas vezes mostra alguns cabeçalhos visíveis que você pode ter visto, como por exemplo: `Para`, `De`, `Cc`, `Data`, `Assunto`.

### Quando os metadados de e-mail são usados?

O software do cliente pode usá-lo para mostrar de quem é uma mensagem e a que horas ela foi recebida. Os servidores podem usá-lo para determinar para onde uma mensagem de e-mail deve ser enviada, entre [outros fins](https://en.wikipedia.org/wiki/Email#Message_header) não transparente para o usuário.

### Onde estão os metadados de e-mail?

Os metadados de e-mail são armazenados no [cabeçalho da mensagem](https://en.wikipedia.org/wiki/Email#Message_header) da mensagem de e-mail.

### Por que os metadados não podem ser E2EE por e-mail?

Os metadados de e-mail são cruciais para a funcionalidade mais básica do e-mail (de onde veio, e para onde tem de ir). O E2EE não foi originalmente incorporado nos protocolos de e-mail e é também opcional, portanto, apenas o conteúdo da mensagem é protegido.

### Como é que os meus metadados são protegidos?

Quando os e-mails viajam entre provedores de e-mail, uma conexão criptografada é negociada usando [TLS oportunista](https://en.wikipedia.org/wiki/Opportunistic_TLS). Isso protege os metadados de observadores externos, mas como não é E2EE, os administradores do servidor podem bisbilhotar os metadados de um e-mail.

## Serviços de camuflagem de e-mail

!!! recomendação

    ![AnonAddy logo](/assets/img/email/anonaddy.svg#only-light){ align=right }
    ![AnonAddy logo](/assets/img/email/anonaddy-dark.svg#only-dark){ align=right }
    
    **[AnonAddy](https://anonaddy.com)** permite aos utilizadores criar aliases que reencaminham para o seu endereço de e-mail. Pode ser auto-hospedado. [Código fonte no GitHub](https://github.com/anonaddy/anonaddy).

!!! recomendação

    ![logótipo do Simplelogin](/assets/img/email/simplelogin.svg){ align=right }
    
    **[SimpleLogin](https://simplelogin.io)** permite-lhe criar facilmente alias para o seu e-mail. Pode ser auto-hospedado. [Código fonte no GitHub](https://github.com/simple-login/app).

## E-mail de Auto-Anfitrião

Os utilizadores avançados podem considerar a possibilidade de configurar o seu próprio servidor de e-mail. Os mailservers requerem atenção e manutenção contínua a fim de manter as coisas seguras e a entrega de correio confiável.

### Soluções de software combinadas

!!! recomendação

    ![Logótipo Mail-in-a-Box](/assets/img/email/mail-in-a-box.svg){ align=right }
    
    **[Mail-in-a-Box](https://mailinabox.email)** é um script de configuração automática para implantar um servidor de e-mail no Ubuntu. O seu objectivo é facilitar aos utilizadores a configuração do seu próprio servidor de correio.

!!! recomendação

    ![Logotipo da Vaca de Correio](/assets/img/email/mailcow.svg){ align=right }
    
    **[Mailcow](https://mailcow.email)** é um servidor de e-mail mais avançado, perfeito para aqueles com um pouco mais de experiência Linux. Tem tudo o que precisa num contentor Docker: Um servidor de e-mail com suporte DKIM, monitoramento de antivírus e spam, webmail e ActiveSync com SOGo, e administração baseada na web com suporte 2FA. **[Mailcow Dockerized Docs](https://mailcow.github.io/mailcow-dockerized-docs/)**

Para uma abordagem mais manual, escolhemos estes dois artigos.

- [Configurar um servidor de e-mail com OpenSMTPD, Dovecot e Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd/) (2019)
- [Como Executar o Seu Próprio Servidor de Correio](https://www.c0ffee.net/blog/mail-server-guide/) (Agosto 2017)

## Leitura adicional

- [Um NFC PGP SmartCard Para Android](https://www.grepular.com/An_NFC_PGP_SmartCard_For_Android)
- [Envelhecimento da Lei de 'Privacidade' Deixa a Nuvem de E-Mail Aberto a Polícias (2011)](https://www.wired.com/2011/10/ecpa-turns-twenty-five/)
- [O Governo pode (ainda) ler a maioria dos seus e-mails sem um mandado de captura (2013)](https://thinkprogress.org/the-government-can-still-read-most-of-your-emails-without-a-warrant-322fe6defc7b/)

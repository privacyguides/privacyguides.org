---
title: "Introdução ao DNS"
icon: material/dns
---

O [Domain Name System (DNS)](https://en.wikipedia.org/wiki/Domain_Name_System) é a 'lista telefónica da Internet'. DNS traduz nomes de domínio para [IP](https://en.wikipedia.org/wiki/Internet_Protocol) endereços para que os navegadores e outros serviços possam carregar recursos da Internet, através de uma rede descentralizada de servidores.

## O que é DNS?

Quando você visita um site, um endereço numérico é devolvido. Por exemplo, quando você visita `privacyguides.org`, o endereço `192.98.54.105` é retornado.

O DNS existe desde o [dos primeiros dias](https://en.wikipedia.org/wiki/Domain_Name_System#History) da Internet. Os pedidos DNS feitos para e dos servidores DNS são **não** geralmente encriptados. Em uma configuração residencial, um cliente recebe servidores pelo [ISP](https://en.wikipedia.org/wiki/Internet_service_provider) via [Dynamic Host Configuration Protocol (DHCP)](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol).

Os pedidos DNS não encriptados são capazes de ser facilmente **surveilled** e **modificados** em trânsito. Em algumas partes do mundo, os ISPs são solicitados a fazer [filtragem DNS](https://en.wikipedia.org/wiki/DNS_blocking). Quando um usuário solicita o IP de um domínio que está bloqueado, o servidor pode não responder ou pode responder com um endereço IP diferente. Como o protocolo DNS não é criptografado, o ISP (ou qualquer operador de rede) pode usar [deep packet inspection (DPI)](https://en.wikipedia.org/wiki/Deep_packet_inspection) para monitorar as solicitações. Os ISPs também podem bloquear pedidos com base em características comuns, independentemente do servidor DNS utilizado. DNS não encriptado usa sempre [port](https://en.wikipedia.org/wiki/Port_(computer_networking)) 53 e usa sempre o [User Datagram Protocol (UDP)](https://en.wikipedia.org/wiki/User_Datagram_Protocol).

Abaixo, discutimos e fornecemos um tutorial para provar o que um observador externo pode ver usando DNS regular não criptografado e [DNS criptografado](#what-is-encrypted-dns).

### DNS não criptografado

1. Usando [`tshark`](https://www.wireshark.org/docs/man-pages/tshark.html) (parte do [Wireshark](https://en.wikipedia.org/wiki/Wireshark) project) podemos monitorar e gravar o fluxo de pacotes da Internet. Este comando registra os pacotes que atendem às regras especificadas:

    ```bash
    tshark -w /tmp/dns.pcap udp porto 53 e host 1.1.1.1 ou host 8.8.8.8
    ```

2. Podemos então usar [`dig`](https://en.wikipedia.org/wiki/Dig_(command)) (Linux, MacOS etc) ou [`nslookup`](https://en.wikipedia.org/wiki/Nslookup) (Windows) para enviar a pesquisa DNS para ambos os servidores. Software como navegadores web fazem estas pesquisas automaticamente, a menos que estejam configurados para usar [DNS encriptado](#what-is-encrypted-dns).

    ==== "Linux, MacOS"

        ```
        dig noall answer privacyguides.org @1.1.1.1.1
        dig noall answer privacyguides.org @8.8.8.8
        ```
    ==== "Windows"

        ```
        nslookup privacyguides.org 1.1.1.1
        nslookup privacyguides.org 8.8.8.8
        ```

3. A seguir, queremos [analisar](https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html#ChIntroWhatIs) os resultados:

    ==== "Wireshark"

        ```
        wireshark -r /tmp/dns.pcap
        ```

    === "tshark"

        ```
        tshark -r /tmp/dns.pcap
        ```

Se você executar o comando Wireguard acima, o painel superior mostra o "[frames](https://en.wikipedia.org/wiki/Ethernet_frame)", e o painel inferior mostra todos os dados sobre o frame selecionado. Soluções de filtragem e monitoramento empresarial (como as adquiridas pelos governos) podem fazer o processo automaticamente, sem interação humana, e podem agregar esses quadros para produzir dados estatísticos úteis para o observador da rede.

| Não. | Hora     | Fonte     | Destino   | Protocolo | Comprimento | Informações                                                                |
| ---- | -------- | --------- | --------- | --------- | ----------- | -------------------------------------------------------------------------- |
| 1    | 0.000000 | 192.0.2.1 | 1.1.1.1   | DNS       | 104         | Consulta padrão 0x58ba A privacyguides.org OPT                             |
| 2    | 0.293395 | 1.1.1.1   | 192.0.2.1 | DNS       | 108         | Resposta de consulta padrão 0x58ba A privacyguides.org A 198.98.54.105 OPT |
| 3    | 1.682109 | 192.0.2.1 | 8.8.8.8   | DNS       | 104         | Consulta padrão 0xf1a9 A privacyguides.org OPT                             |
| 4    | 2.154698 | 8.8.8.8   | 192.0.2.1 | DNS       | 108         | Resposta de consulta padrão 0xf1a9 A privacyguides.org A 198.98.54.105 OPT |

Um observador pode modificar qualquer um destes pacotes.

## O que é "DNS criptografado"?

DNS criptografado pode se referir a um de vários protocolos, sendo os mais comuns:

### DNSCrypt

[**DNSCrypt**](https://en.wikipedia.org/wiki/DNSCrypt) foi um dos primeiros métodos de encriptação de consultas DNS. O [protocolo](https://en.wikipedia.org/wiki/DNSCrypt#Protocol) opera em [porta 443](https://en.wikipedia.org/wiki/Well-known_ports) e funciona tanto com o [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) ou [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) protocolos de transporte. DNSCrypt nunca foi submetido ao processo [Internet Engineering Task Force (IETF)](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) nem foi submetido ao processo [Request for Comments (RFC)](https://en.wikipedia.org/wiki/Request_for_Comments) , portanto não tem sido usado amplamente fora de alguns [implementações](https://dnscrypt.info/implementations). Como resultado, foi amplamente substituído pelo mais popular [DNS sobre HTTPS (DoH)](#dns-over-https-doh).

### DNS sobre TLS (DoT)

[**DNS sobre TLS (DoT)**](https://en.wikipedia.org/wiki/DNS_over_TLS) é outro método para encriptar a comunicação DNS que é definida em [RFC 7858](https://datatracker.ietf.org/doc/html/rfc7858). O suporte foi implementado inicialmente em [Android 9](https://en.wikipedia.org/wiki/Android_Pie), [iOS 14](https://en.wikipedia.org/wiki/IOS_14), e no Linux em [systemd-resolved](https://www.freedesktop.org/software/systemd/man/resolved.conf.html#DNSOverTLS=) na versão 237. A preferência na indústria tem se afastado do DoT para [DNS sobre HTTPS](#dns-over-https-doh) nos últimos anos, pois o DoT é um [protocolo complexo](https://dnscrypt.info/faq/) e tem conformidade variável com a RFC nas implementações que existem. DoT também opera em uma porta dedicada 853 e que pode ser facilmente bloqueada por firewalls restritivos.

### DNS sobre HTTPS (DoH)

[**DNS sobre HTTPS**](https://en.wikipedia.org/wiki/DNS_over_HTTPS) como definido em [RFC 8484](https://datatracker.ietf.org/doc/html/rfc8484) consultas de pacotes no protocolo [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) e fornece segurança com [HTTPS](https://en.wikipedia.org/wiki/HTTPS). O suporte foi adicionado pela primeira vez em navegadores web como [Firefox 60](https://support.mozilla.org/en-US/kb/firefox-dns-over-https) e [Chrome 83](https://blog.chromium.org/2020/05/a-safer-and-more-private-browsing-DoH.html).

As implementações nativas apareceram em [iOS 14](https://en.wikipedia.org/wiki/IOS_14), [macOS 11](https://en.wikipedia.org/wiki/MacOS_11), [Microsoft Windows](https://docs.microsoft.com/en-us/windows-server/networking/dns/doh-client-support), e Android 13 (contudo não será habilitado [por padrão](https://android-review.googlesource.com/c/platform/packages/modules/DnsResolver/+/1833144)). O suporte geral do desktop Linux está esperando no sistemad [implementação](https://github.com/systemd/systemd/issues/8639) então [a instalação de software de terceiros ainda é necessária](../dns.md#linux).

## O que é que uma festa exterior pode ver?

Neste exemplo vamos registar o que acontece quando fazemos um pedido DoH:

1. Primeiro, iniciar `tshark`:

    ```bash
    tshark -w /tmp/dns_doh.pcap -f "tcp port https e host 1.1.1.1"
    ```

2. Segundo, faça um pedido com `curl`:

    ```bash
    curl -vI --doh-url https://1.1.1.1/dns-query https://privacyguides.org
    ```

3. Após fazer o pedido, podemos parar a captura de pacotes com <kbd>CTRL</kbd> <kbd>C</kbd>.

4. Analisar os resultados em Wireshark:

    ```bash
    wireshark -r /tmp/dns_doh.pcap
    ```

Podemos ver o estabelecimento de conexão [e](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment) e [aperto de mão TLS](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/) que ocorre com qualquer conexão criptografada. Ao olhar para os pacotes de "dados de aplicação" que se seguem, nenhum deles contém o domínio que solicitamos ou o endereço IP devolvido.

## Porque **não deveria** Eu uso DNS encriptado?

Em locais onde há filtragem da Internet (ou censura), visitar recursos proibidos pode ter as suas próprias consequências, que deve considerar no seu [modelo de ameaça](/threat-modeling/). Fazemos **não** sugerimos o uso de DNS criptografado para este fim. Use [Tor](https://torproject.org) ou um [VPN](/vpn) em vez disso. Se você estiver usando uma VPN, você deve usar os servidores DNS da sua VPN. Ao utilizar uma VPN, já está a confiar-lhes toda a sua actividade na rede.

Quando fazemos uma pesquisa DNS, geralmente é porque queremos aceder a um recurso. Abaixo, discutiremos alguns dos métodos que podem revelar as suas actividades de navegação mesmo quando utiliza DNS encriptado:

### Endereço IP

A maneira mais simples de determinar a atividade de navegação pode ser olhar para os endereços IP que seus dispositivos estão acessando. Por exemplo, se o observador sabe que `privacyguides.org` está em `198.98.54.105`, e o seu dispositivo está solicitando dados de `198.98.54.105`, há uma boa chance de você estar visitando os Guias de Privacidade.

Este método só é útil quando o endereço IP pertence a um servidor que só hospeda poucos sites. Também não é muito útil se o site estiver alojado numa plataforma partilhada, (por exemplo, Github Pages, Cloudflare Pages, Netlify, Wordpress, Blogger, etc). Também não é muito útil se o servidor estiver hospedado atrás de um [reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy), o que é muito comum na Internet moderna.

### Indicação do nome do servidor (SNI)

A indicação do nome do servidor é normalmente usada quando um endereço IP hospeda muitos sites. Este pode ser um serviço como o Cloudflare, ou algum outro [ataque de negação de serviço](https://en.wikipedia.org/wiki/Denial-of-service_attack) protecção.

1. Comece a capturar novamente com `tshark`. Adicionamos um filtro com nosso endereço IP para que você não capture muitos pacotes:

    ```bash
    tshark -w /tmp/pg.pcap porto 443 e host 198.98.54.105
    ```

2. Depois visitamos [https://privacyguides.org](https://privacyguides.org).

3. Depois de visitar o site, nós o que parar a captura de pacotes com <kbd>CTRL</kbd> <kbd>C</kbd>.

4. A seguir queremos analisar os resultados:

    ```bash
    wireshark -r /tmp/pg.pcap
    ```

    Veremos o [estabelecimento de conexão](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_establishment), seguido pelo [aperto de mão TLS](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/) para o site Guias de Privacidade. Em redor da moldura 5. verás um "Olá Cliente".

5. Expandir o triângulo &#9656; ao lado de cada campo:

    ```text
    ▸ Transport Layer Security
      ▸ TLSv1.3 Record Layer: Protocolo de Aperto de Mãos: Cliente Olá
        ▸ Protocolo de Aperto de Mãos: Cliente Olá
          ▸ Extensão: Server_name (len=22)
            ▸ Server Name Indication extension
    ```

6. Podemos ver o [Server Name Indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication) valor que revela o site que estamos visitando. O comando `tshark` pode dar-lhe o valor directamente para todos os pacotes que contenham um valor SNI:

    ```bash
    tshark -r /tmp/pg.pcap -Tfields -Y tls.handshake.extensions_server_name -e tls.handshake.extensions_server_name
    ```

Isto significa que mesmo que estejamos usando servidores DNS "Encriptados", o domínio provavelmente será divulgado através do SNI. O protocolo [TLS v1.3](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_1.3) traz consigo [Cliente Encriptado Olá](https://blog.cloudflare.com/encrypted-client-hello/), o que evita este tipo de fuga.

Governos, em particular [China](https://www.zdnet.com/article/china-is-now-blocking-all-encrypted-https-traffic-using-tls-1-3-and-esni/) e [Rússia](https://www.zdnet.com/article/russia-wants-to-ban-the-use-of-secure-protocols-such-as-tls-1-3-doh-dot-esni/), ou já [começaram a bloquear](https://en.wikipedia.org/wiki/Server_Name_Indication#Encrypted_Client_Hello) ou manifestaram o desejo de o fazer. Recently, Russia has [started blocking foreign websites](https://github.com/net4people/bbs/issues/108) that use the [HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) standard. Isto porque o [QUIC](https://en.wikipedia.org/wiki/QUIC) protocolo que faz parte do HTTP/3 requer que `ClientHello` também seja criptografado.

### Protocolo de Status de Certificado Online (OCSP)

Outra forma do seu navegador poder divulgar suas atividades de navegação é com o [Online Certificate Status Protocol](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol). Ao visitar um [HTTPS](https://en.wikipedia.org/wiki/HTTPS) website, o navegador pode verificar se o [X.509](https://en.wikipedia.org/wiki/X.509) [certificado](https://en.wikipedia.org/wiki/Public_key_certificate) foi [revogado](https://en.wikipedia.org/wiki/Certificate_revocation_list). Isto geralmente é feito através do protocolo [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) , significando que é **não** encriptado.

O pedido OCSP contém o certificado "[número de série](https://en.wikipedia.org/wiki/Public_key_certificate#Common_fields)", que é único. Ele é enviado ao "OCSP respondedor" para verificar o seu estado.

Podemos simular o que um navegador faria usando o comando [`openssl`](https://en.wikipedia.org/wiki/OpenSSL) .

1. Obtenha o certificado do servidor e use [`sed`](https://en.wikipedia.org/wiki/Sed) para manter apenas a parte importante e escrevê-la em um arquivo:

    ```bash
    openssl s_client -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_server.cert
    ```

2. Obter o certificado intermediário. [Autoridades Certificadoras (AC)](https://en.wikipedia.org/wiki/Certificate_authority) normalmente não assinam um certificado diretamente; eles usam o que é conhecido como certificado "intermediário".

    ```bash
    openssl s_client -showcerts -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_and_intermediate.cert
    ```

3. O primeiro certificado em `pg_and_intermediate.cert` é na verdade o certificado do servidor do passo 1. Podemos usar `sed` novamente para apagar até a primeira instância de TERMINAR:

    ```bash
    sed -n '/^-*END CERTIFICATE-*$/!d;:a n;p;ba' \
        /tmp/pg_and_intermediate.cert > /tmp/intermediate_chain.cert
    ```

4. Obtenha o OCSP respondedor para o certificado do servidor:

    ```bash
    openssl x509 -noout -ocsp_uri -in /tmp/pg_server.cert
    ```

    O nosso certificado mostra o Lets Encrypt Responder ao certificado. Se quisermos ver todos os detalhes do certificado, podemos usar:

    ```bash
    openssl x509 -text -noout -in /tmp/pg_server.cert
    ```

5. Comece a captura do pacote:

    ```bash
    tshark -w /tmp/pg_ocsp.pcap -f "tcp port http
    ```

6. Faça o pedido OCSP:

    ```bash
    openssl ocsp -issuer /tmp/intermediate_chain.cert \
                 -cert /tmp/pg_server.cert \
                 -text \
                 -url http://r3.o.lencr.org
    ```

7. Abra a captura:

    ```bash
    wireshark -r /tmp/pg_ocsp.pcap
    ```

    Haverá dois pacotes com o protocolo "OCSP"; um "Request" (Pedido) e um "Response" (Resposta). Para o "Request" podemos ver o "serial number", expandindo o triângulo &#9656; ao lado de cada campo:

    ```bash
    ▸ Online Certificate Status Protocol
      ▸ tbsRequest
        ▸ requestList: 1 item
          ▸ request
            ▸ reqCert
              serialNumber
    ```

    Para a "Resposta" também podemos ver o "número de série":

    ```bash
    ▸ Online Certificate Status Protocol
      ▸ responseBytes
        ▸ BasicOCSPResponse
          ▸ tbsResponseData
            ▸ responses: 1 item
              ▸ Respostas Simples
                ▸ certID
                  serialNumber
    ```

8. Ou use `tshark` para filtrar os pacotes para o Número de Série:

    ```bash
    tshark -r /tmp/pg_ocsp.pcap -Tfields -Y ocsp.serialNumber -e ocsp.serialNumber
    ```

Se o observador da rede tiver o certificado público, que está disponível publicamente, ele pode fazer corresponder o número de série com esse certificado e, portanto, determinar o site que você está visitando a partir daí. O processo pode ser automatizado e pode associar endereços IP com números de série. Também é possível verificar [Certificate Transparency](https://en.wikipedia.org/wiki/Certificate_Transparency) logs para o número de série.

## Devo utilizar DNS encriptado?

Nós fizemos este fluxograma para descrever quando você *deve* usar DNS criptografado:

``` mermaid
graph TB
    Start[Start] --> anonymous{Trying to be<br> anonymous?}
    anonymous--> | Yes | tor(Use Tor)
    anonymous --> | No | censorship{Avoiding<br> censorship?}
    censorship --> | Yes | vpnOrTor(Use<br> VPN ou Tor)
    censorship --> | No | privacy{Want privacy<br> from ISP?}
    privacidade --> | Yes | vpnOrTor
    privacidade --> | No | obnoxious{ISP makes<br> obnoxious<br> redirecciona?}
    obnóxio --> | Yes | encryptedDNS(Use<br> encrypted DNS<br> with 3rd party)
    obnóxio --> | No | ispDNS{Does ISP support<br> encrypted DNS?}
    ispDNS --> | Yes | useISP(Use<br> DNS encriptado<br> com ISP)
    ispDNS --> | No | nothing(Do nothing)
```

DNS criptografado com uma terceira parte só deve ser usado para contornar redirecionamentos e [bloqueio de DNS](https://en.wikipedia.org/wiki/DNS_blocking) quando você pode ter certeza de que não haverá nenhuma consequência ou você está interessado em um provedor que faz alguma filtragem rudimentar.

[Lista de servidores DNS recomendados](../dns.md ""){.md-button}

## O que é o DNSSEC e quando é utilizado?

[Domain Name System Security Extensions (DNSSEC)](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) é usado para fornecer autenticidade aos registos que estão a ser buscados a partir de servidores DNS a montante. Ele não fornece confidencialidade, por isso usamos um dos protocolos [DNS encriptado](/dns#what-is-encrypted-dns) discutidos acima.

## O que é a minimização do QNAME?

Um QNAME é um "nome qualificado", por exemplo `privacyguides.org`. A minimização do QNAME reduz a quantidade de informação enviada do servidor DNS para o [servidor de nomes autorizado](https://en.wikipedia.org/wiki/Name_server#Authoritative_name_server).

Em vez de enviar o domínio inteiro `privacyguides.org`, a minimização do QNAME significa que o servidor DNS irá pedir todos os registos que terminem em `.org`. Descrição técnica adicional é definida em [RFC 7816](https://datatracker.ietf.org/doc/html/rfc7816).

## O que é a Sub-Rede do Cliente EDNS (ECS)?

O [subrede do cliente EDNS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) é um método para um resolvedor DNS recursivo para especificar um [sub-rede](https://en.wikipedia.org/wiki/Subnetwork) para o [host ou cliente](https://en.wikipedia.org/wiki/Client_(computing)) que está fazendo a consulta DNS.

O objectivo é "acelerar" a entrega de dados, dando ao cliente uma resposta que pertence a um servidor que lhes está próximo, tal como um [content delivery network (CDN)](https://en.wikipedia.org/wiki/Content_delivery_network), que são frequentemente utilizados em streaming de vídeo e em aplicações web JavaScript.

Este recurso tem um custo de privacidade, pois informa ao servidor DNS algumas informações sobre a localização do cliente.

---
title: "Resumen DNS"
icon: material/dns
---

El [Sistema de Nombres de Dominio](https://es.wikipedia.org/wiki/Sistema_de_nombres_de_dominio) es el 'directorio telefónico del Internet'. El DNS traduce los nombres de dominio a direcciones IP para que los navegadores y otros servicios puedan cargar los recursos de Internet, a través de una red descentralizada de servidores.

## ¿Qué es el DNS?

Cuando visitas un sitio web, se devuelve una dirección numérica. Por ejemplo, cuando visitas `privacyguides.org`, la dirección `192.98.54.105` es devuelta.

DNS ha existido desde los [primeros días](https://es.wikipedia.org/wiki/Sistema_de_nombres_de_dominio#Historia) de Internet. Las solicitudes DNS realizadas desde y hacia servidores DNS **no** son generalmente cifradas. En un entorno residencial, el cliente recibe servidores del ISP a través de [DHCP](https://es.wikipedia.org/wiki/Protocolo_de_configuraci%C3%B3n_din%C3%A1mica_de_host).

Las solicitudes de DNS sin cifrar pueden ser fácilmente **vigiladas** y **modificadas** en tránsito. En algunas partes del mundo, a los ISP se les ordena que hagan un [filtrado de DNS](https://en.wikipedia.org/wiki/DNS_blocking) primitivo. Cuando se solicita la dirección IP de un dominio que está bloqueado, es posible que el servidor no responda o lo haga con una dirección IP diferente. Como el protocolo DNS no está encriptado, el ISP (o cualquier operador de red) puede utilizar [DPI](https://es.wikipedia.org/wiki/Inspecci%C3%B3n_profunda_de_paquete) para controlar las solicitudes. Los ISP también pueden bloquear las solicitudes en función de características comunes, independientemente del servidor DNS que se utilice. El DNS no cifrado siempre utiliza el [puerto](https://es.wikipedia.org/wiki/Puerto_de_red) 53 y siempre utiliza UDP.

A continuación, discutimos y proporcionamos un tutorial para probar lo que un observador externo puede ver usando DNS regulares sin encriptar y [DNS encriptado](#what-is-encrypted-dns).

### DNS sin cifrado

1. Usando [`tshark`](https://www.wireshark.org/docs/man-pages/tshark.html) (parte del proyecto [Wireshark](https://es.wikipedia.org/wiki/Wireshark)) podemos monitorear y registrar el flujo de paquetes de Internet. Este comando registra los paquetes que cumplen las reglas especificadas:

    ```bash
    tshark -w /tmp/dns.pcap udp port 53 and host 1.1.1.1 or host 8.8.8.8
    ```

2. Entonces podemos usar [`dig`](https://es.wikipedia.org/wiki/Dig_(comando)) (Linux, macOS, etc) o [`nslookup`](https://es.wikipedia.org/wiki/Nslookup) (Windows) para enviar la búsqueda DNS a ambos servidores. Software como los navegadores web hacen estas búsquedas automáticamente, a menos que estén configurados para usar DNS cifrado.

    === "Linux, macOS"

        ```
        dig +noall +answer privacyguides.org @1.1.1.1
        dig +noall +answer privacyguides.org @8.8.8.8
        ```
    === "Windows"

        ```
        nslookup privacyguides.org 1.1.1.1
        nslookup privacyguides.org 8.8.8.8
        ```

3. A continuación, queremos [analizar](https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html#ChIntroWhatIs) los resultados:

    === "Wireshark"

        ```
        wireshark -r /tmp/dns.pcap
        ```

    === "tshark"

        ```
        tshark -r /tmp/dns.pcap
        ```

Si ejecutas el comando Wireshark anterior, el panel superior muestra los "[frames](https://en.wikipedia.org/wiki/Ethernet_frame)", y el panel inferior muestra todos los datos sobre el frame seleccionado. Las soluciones empresariales de filtrado y monitorización (como las adquiridas por los gobiernos) pueden realizar el proceso de forma automática, sin interacción humana, y pueden agregar esas tramas para producir datos estadísticos útiles para el observador de la red.

| No. | Tiempo   | Fuente    | Destino   | Protocolo                 | Duración | Información                                                                   |
| --- | -------- | --------- | --------- | ------------------------- | -------- | ----------------------------------------------------------------------------- |
| 1   | 0.000000 | 192.0.2.1 | 1.1.1.1   | Almacenamiento en la Nube | 104      | Consulta estándar 0x58ba A privacyguides.org OPT                              |
| 2   | 0.293395 | 1.1.1.1   | 192.0.2.1 | Almacenamiento en la Nube | 108      | Respuesta de consulta estándar 0x58ba A privacyguides.org A 198.98.54.105 OPT |
| 3   | 1.682109 | 192.0.2.1 | 8.8.8.8   | Almacenamiento en la Nube | 104      | Consulta estándar 0xf1a9 A privacyguides.org OPT                              |
| 4   | 2.154698 | 8.8.8.8   | 192.0.2.1 | Almacenamiento en la Nube | 108      | Respuesta de consulta estándar 0xf1a9 A privacyguides.org A 198.98.54.105 OPT |

Un observador podría modificar cualquiera de estos paquetes.

## ¿Qué es "DNS cifrado"?

DNS cifrado puede referirse a uno de un número de protocolos, siendo los más comunes:

### DNSCrypt

[**DNSCrypt**](https://en.wikipedia.org/wiki/DNSCrypt) fue uno de los primeros métodos de encriptación de consultas DNS. DNSCrypt opera en el puerto 443 y funciona con los protocolos de transporte TCP o UDP. DNSCrypt nunca ha sido enviado al [Grupo de Trabajo de Ingeniería en Internet (IETF)](https://es.wikipedia.org/wiki/Grupo_de_Trabajo_de_Ingenier%C3%ADa_de_Internet) ni ha pasado por el proceso de ["Request for Comments" (RFC)](https://es.wikipedia.org/wiki/Request_for_Comments) por lo que no ha sido utilizado ampliamente fuera de unas pocas [implementaciones](https://dnscrypt.info/implementations). Como resultado, ha sido sustituido en gran medida por el más popular [DNS sobre HTTPS](#dns-over-https-doh).

### DNS sobre TLS (DoT)

[**DNS sobre TLS**](https://es.wikipedia.org/wiki/DNS_mediante_TLS) es otro método para cifrar la comunicación DNS que se define en [RFC 7858](https://datatracker.ietf.org/doc/html/rfc7858). La compatibilidad se implementó por primera vez en Android 9, iOS 14 y en Linux en [systemd-resolved](https://www.freedesktop.org/software/systemd/man/resolved.conf.html#DNSOverTLS=) en la versión 237. La preferencia en la industria se ha estado alejando del DoT al DoH en los últimos años, ya que el DoT es un [protocolo complejo](https://dnscrypt.info/faq/) y tiene un cumplimiento variable del RFC en todas las implementaciones que existen. DoT también opera en un puerto dedicado 853 que puede ser bloqueado fácilmente por cortafuegos restrictivos.

### DNS sobre HTTPS (DoH)

[**DNS sobre HTTPS**](https://es.wikipedia.org/wiki/DNS_mediante_HTTPS) como se define en [RFC 8484](https://datatracker.ietf.org/doc/html/rfc8484) empaqueta las consultas en el protocolo [HTTP/2](https://es.wikipedia.org/wiki/HTTP/2) y proporciona seguridad con HTTPS. La compatibilidad se añadió por primera vez en navegadores web como Firefox 60 y Chrome 83.

La implementación nativa de DoH apareció en iOS 14, macOS 11, Microsoft Windows y Android 13 (sin embargo, no estará habilitada [por defecto](https://android-review.googlesource.com/c/platform/packages/modules/DnsResolver/+/1833144)). El soporte general de los escritorios de Linux está a la espera de la [implementación](https://github.com/systemd/systemd/issues/8639) de systemd por lo que [la instalación de software de terceros sigue siendo necesaria](../dns.md#linux).

## ¿Qué puede ver un tercero?

En este ejemplo registraremos lo que sucede cuando hacemos una solicitud de DoH:

1. En primer lugar, inicia `tshark`:

    ```bash
    tshark -w /tmp/dns_doh.pcap -f "tcp port https and host 1.1.1.1"
    ```

2. En segundo lugar, hace una petición con `curl`:

    ```bash
    curl -vI --doh-url https://1.1.1.1/dns-query https://privacyguides.org
    ```

3. Después de hacer la solicitud, podemos detener la captura de paquetes con <kbd>CTRL</kbd> + <kbd>C</kbd>.

4. Analiza los resultados en Wireshark:

    ```bash
    wireshark -r /tmp/dns_doh.pcap
    ```

Podemos ver el [establecimiento de la conexión](https://es.wikipedia.org/wiki/Protocolo_de_control_de_transmisi%C3%B3n#Establecimiento_de_la_conexi%C3%B3n_(negociaci%C3%B3n_en_tres_pasos)) y [enlace TLS](https://www.cloudflare.com/es-es/learning/ssl/what-happens-in-a-tls-handshake/) que ocurre con cualquier conexión encriptada. Al mirar los paquetes de "datos de aplicación" que siguen, ninguno de ellos contiene el dominio que solicitamos ni la dirección IP devuelta.

## ¿Por qué **no debería** utilizar un DNS cifrado?

En los lugares en los que existe el filtrado de Internet (o la censura), visitar recursos prohibidos puede tener sus propias consecuencias, que deberás tener en cuenta en tu [modelo de amenazas](../basics/threat-modeling.md). Nosotros **no** sugerimos el uso de DNS encriptados para este propósito. Usa [Tor](https://torproject.org) o una [VPN](../vpn.md) en su lugar. Si estás usando una VPN, deberías usar los servidores DNS de tu VPN. Al utilizar una VPN, ya les estás confiando toda tu actividad en la red.

Cuando hacemos una búsqueda en el DNS, generalmente es porque queremos acceder a un recurso. A continuación, hablaremos de algunos de los métodos que pueden revelar tus actividades de navegación incluso cuando se utiliza un DNS cifrado:

### Dirección IP

La forma más sencilla de determinar la actividad de navegación podría ser mirar las direcciones IP a las que acceden sus dispositivos. Por ejemplo, si el observador sabe que `privacyguides.org` está en `198.98.54.105`, y tu dispositivo solicita datos de `198.98.54.105`, es muy probable que estés visitando Privacy Guides.

Este método sólo es útil cuando la dirección IP pertenece a un servidor que sólo aloja unos pocos sitios web. Tampoco es muy útil si el sitio está alojado en una plataforma compartida (por ejemplo, Github Pages, Cloudflare Pages, Netlify, WordPress, Blogger, etc). Tampoco es muy útil si el servidor está alojado detrás de un [proxy inverso](https://es.wikipedia.org/wiki/Proxy_inverso), lo cual es muy común en la Internet moderna.

### Indicación del Nombre del Servidor (SNI)

La Indicación del Nombre del Servidor se suele utilizar cuando una dirección IP aloja muchos sitios web. Esto podría ser un servicio como Cloudflare, o alguna otra protección de [ataque de denegación de servicio](https://es.wikipedia.org/wiki/Ataque_de_denegaci%C3%B3n_de_servicio).

1. Comienza a capturar de nuevo con `tshark`. Hemos añadido un filtro con nuestra dirección IP para que no captures muchos paquetes:

    ```bash
    tshark -w /tmp/pg.pcap port 443 and host 198.98.54.105
    ```

2. Luego visitamos [https://privacyguides.org](https://privacyguides.org).

3. Después de visitar el sitio web, queremos detener la captura de paquetes con <kbd>CTRL</kbd> + <kbd>C</kbd>.

4. A continuación queremos analizar los resultados:

    ```bash
    wireshark -r /tmp/pg.pcap
    ```

    Veremos el establecimiento de la conexión, seguido del enlace TLS para el sitio web de Privacy Guides. Alrededor del marco 5. verás un "Client Hello".

5. Expande el triángulo &#9656; junto a cada campo:

    ```text
    ▸ Transport Layer Security
      ▸ TLSv1.3 Record Layer: Handshake Protocol: Client Hello
        ▸ Handshake Protocol: Client Hello
          ▸ Extension: server_name (len=22)
            ▸ Server Name Indication extension
    ```

6. Podemos ver el valor SNI que revela el sitio web que estamos visitando. El comando `tshark` puede darte el valor directamente para todos los paquetes que contienen un valor SNI:

    ```bash
    tshark -r /tmp/pg.pcap -Tfields -Y tls.handshake.extensions_server_name -e tls.handshake.extensions_server_name
    ```

Esto significa que incluso si estamos utilizando servidores "DNS cifrados", es probable que el dominio se divulgue a través de SNI. El protocolo [TLS v1.3](https://es.wikipedia.org/wiki/Seguridad_de_la_capa_de_transporte#TLS_1.3) trae consigo [Client Hello Encriptado](https://blog.cloudflare.com/encrypted-client-hello/), que evita este tipo de fugas.

Los gobiernos, en particular de [China](https://www.zdnet.com/article/china-is-now-blocking-all-encrypted-https-traffic-using-tls-1-3-and-esni/) y [Russia](https://www.zdnet.com/article/russia-wants-to-ban-the-use-of-secure-protocols-such-as-tls-1-3-doh-dot-esni/), ya han [empezado a bloquearlo](https://es.wikipedia.org/wiki/Server_Name_Indication#Funcionamiento_de_ESNI) o han expresado su deseo de hacerlo. Recientemente, Rusia ha [comenzado a bloquear sitios web extranjeros](https://github.com/net4people/bbs/issues/108) que utilizan el estándar [HTTP/3](https://es.wikipedia.org/wiki/HTTP/3). Esto se debe a que el protocolo [QUIC](https://es.wikipedia.org/wiki/QUIC) que forma parte de HTTP/3 requiere que `ClientHello` también esté cifrado.

### Protocolo de comprobación del Estado de un Certificado En línea (OCSP)

Otra forma en que tu navegador puede revelar tus actividades de navegación es con el [Protocolo de comprobación del Estado de un Certificado En línea](https://es.wikipedia.org/wiki/Online_Certificate_Status_Protocol). Al visitar un sitio web HTTPS, el navegador puede comprobar si el [certificado](https://es.wikipedia.org/wiki/Certificado_de_clave_p%C3%BAblica) del sitio web ha sido revocado. Esto se hace generalmente a través del protocolo HTTP, lo que significa que **no** está cifrado.

La solicitud OCSP contiene el "[número de serie](https://es.wikipedia.org/wiki/Certificado_de_clave_p%C3%BAblica#Campos_comunes)" del certificado, que es único. Se envía al "Respondedor OCSP" para comprobar su estado.

Podemos simular lo que haría un navegador utilizando el comando [`openssl`](https://es.wikipedia.org/wiki/OpenSSL).

1. Obtén el certificado del servidor y usa [`sed`](https://es.wikipedia.org/wiki/Sed_(inform%C3%A1tica)) para conservar sólo la parte importante y escribirla en un archivo:

    ```bash
    openssl s_client -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_server.cert
    ```

2. Obtén el certificado intermedio. Las [Autoridades de Certificación (CA)](https://es.wikipedia.org/wiki/Autoridad_de_certificaci%C3%B3n) normalmente no firman un certificado directamente; utilizan lo que se conoce como un certificado "intermedio".

    ```bash
    openssl s_client -showcerts -connect privacyguides.org:443 < /dev/null 2>&1 |
        sed -n '/^-*BEGIN/,/^-*END/p' > /tmp/pg_and_intermediate.cert
    ```

3. El primer certificado en `pg_and_intermediate.cert` es en realidad el certificado del servidor del paso 1. Podemos usar `sed` de nuevo para borrar hasta la primera instancia de END:

    ```bash
    sed -n '/^-*END CERTIFICATE-*$/!d;:a n;p;ba' \
        /tmp/pg_and_intermediate.cert > /tmp/intermediate_chain.cert
    ```

4. Obtén el respondedor OCSP para el certificado del servidor:

    ```bash
    openssl x509 -noout -ocsp_uri -in /tmp/pg_server.cert
    ```

    Nuestro certificado muestra el respondedor del certificado Lets Encrypt. Si queremos ver todos los detalles del certificado podemos utilizar:

    ```bash
    openssl x509 -text -noout -in /tmp/pg_server.cert
    ```

5. Inicia la captura de paquetes:

    ```bash
    tshark -w /tmp/pg_ocsp.pcap -f "tcp port http"
    ```

6. Realiza la solicitud OCSP:

    ```bash
    openssl ocsp -issuer /tmp/intermediate_chain.cert \
                 -cert /tmp/pg_server.cert \
                 -text \
                 -url http://r3.o.lencr.org
    ```

7. Abre la captura:

    ```bash
    wireshark -r /tmp/pg_ocsp.pcap
    ```

    Habrá dos paquetes con el protocolo "OCSP": una "Solicitud" y una "Respuesta". Para la "Solicitud" podemos ver el "número de serie" expandiendo el triángulo &#9656; al lado de cada campo:

    ```bash
    ▸ Online Certificate Status Protocol
      ▸ tbsRequest
        ▸ requestList: 1 item
          ▸ Request
            ▸ reqCert
              serialNumber
    ```

    Para la "Respuesta" también podemos ver el "número de serie":

    ```bash
    ▸ Online Certificate Status Protocol
      ▸ responseBytes
        ▸ BasicOCSPResponse
          ▸ tbsResponseData
            ▸ responses: 1 item
              ▸ SingleResponse
                ▸ certID
                  serialNumber
    ```

8. O usa `tshark` para filtrar los paquetes por el número de serie:

    ```bash
    tshark -r /tmp/pg_ocsp.pcap -Tfields -Y ocsp.serialNumber -e ocsp.serialNumber
    ```

Si el observador de red tiene el certificado público, que está disponible públicamente, puede hacer coincidir el número de serie con ese certificado y, por lo tanto, determinar el sitio que estás visitando a partir de ese. El proceso puede automatizarse y asociar las direcciones IP con los números de serie. También es posible consultar los registros de [Certificate Transparency](https://es.wikipedia.org/wiki/Certificate_Transparency) para conocer el número de serie.

## ¿Debería utilizar un DNS cifrado?

Hemos elaborado este diagrama de flujo para describir cuándo *deberías* usar el DNS cifrado:

``` mermaid
graph TB
    Comienzo[Start] --> anonymous{¿Tratando de ser<br> anónimo?}
    anonymous--> | Sí | tor(Usa Tor)
    anonymous --> | No | censorship{¿Evitando la<br> censura?}
    censorship --> | Sí | vpnOrTor(Usa una<br> VPN o Tor)
    censorship --> | No | privacy{¿Quieres privacidad<br> del ISP?}
    privacy --> | Sí | vpnOrTor
    privacy --> | No | obnoxious{¿El ISP hace<br> odiosas<br> redirecciones?}
    obnoxious --> | Sí | encryptedDNS(Usa<br> DNS cifrado<br> con terceros)
    obnoxious --> | No | ispDNS{¿El ISP soporta<br> DNS cifrado?}
    ispDNS --> | Sí | useISP(Usa<br> DNS cifrado<br> con ISP)
    ispDNS --> | No | nothing(No hagas nada)
```

El DNS cifrado con un tercero solo debe usarse para evitar redirecciones y el [bloqueo básico de DNS](https://en.wikipedia.org/wiki/DNS_blocking) cuando puedas estar seguro de que no habrá consecuencias o estés interesado en un proveedor que realice un filtrado rudimentario.

[Lista de servidores DNS recomendados](../dns.md ""){.md-button}

## ¿Qué es DNSSEC?

Las [extensiones de seguridad para el sistema de nombres de dominio](https://es.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) (DNSSEC) son una función del DNS que autentifica las respuestas a las búsquedas de nombres de dominio. No proporciona protecciones de privacidad para esas búsquedas, sino que evita que los atacantes manipulen o envenenen las respuestas a las solicitudes de DNS.

En otras palabras, DNSSEC firma digitalmente los datos para ayudar a garantizar su validez. Para garantizar una búsqueda segura, la firma se produce en todos los niveles del proceso de búsqueda del DNS. Como resultado, todas las respuestas del DNS son de confianza.

El proceso de firma de DNSSEC es similar al de alguien que firma un documento legal con un bolígrafo; esa persona firma con una firma única que nadie más puede crear, y un perito judicial puede mirar esa firma y verificar que el documento fue firmado por esa persona. Estas firmas digitales garantizan que los datos no han sido manipulados.

DNSSEC implementa una política de firma digital jerárquica en todas las capas del DNS. Por ejemplo, en el caso de una búsqueda en `privacyguides.org`, un servidor DNS raíz firmaría una clave para el servidor de nombres `.org`, y el servidor de nombres `.org` firmaría entonces una clave para el servidor de nombres autoritativo `privacyguides.org`.

<small>Adaptado de [DNS Security Extensions (DNSSEC) overview](https://cloud.google.com/dns/docs/dnssec) por Google y [DNSSEC: An Introduction](https://blog.cloudflare.com/dnssec-an-introduction/) por Cloudflare, ambos licensiados bajo [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).</small>

## ¿Qué es la minimización de QNAME?

Un QNAME es un "nombre cualificado", por ejemplo `privacyguides.org`. La minimización de QNAME reduce la cantidad de información enviada desde el servidor DNS al [servidor de nombres autoritativo](https://es.wikipedia.org/wiki/Servidor_de_nombres).

En lugar de enviar todo el dominio `privacyguides.org`, la minimización de QNAME significa que el servidor DNS pedirá todos los registros que terminen en `.org`. Una descripción técnica más detallada se encuentra en [RFC 7816](https://datatracker.ietf.org/doc/html/rfc7816).

## ¿Qué es la Subred del Cliente EDNS (ECS)?

La [Subred de Cliente EDNS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet) es un método para que un resolvedor DNS recursivo especifique una [subred](https://es.wikipedia.org/wiki/Subred) para el [host o cliente](https://es.wikipedia.org/wiki/Cliente_(inform%C3%A1tica)) que está realizando la consulta DNS.

Su objetivo es "acelerar" la entrega de datos dando al cliente una respuesta que pertenece a un servidor que está cerca de él, como una [red de distribución de contenidos](https://es.wikipedia.org/wiki/Red_de_distribuci%C3%B3n_de_contenidos), que se utilizan a menudo en la transmisión de vídeo y el servicio de aplicaciones web de JavaScript.

Esta característica tiene un coste de privacidad, ya que indica al servidor DNS cierta información sobre la ubicación del cliente.

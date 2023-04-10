---
title: "Resolvedores de DNS"
icon: material/dns
description: Estos son algunos proveedores de DNS cifrado a los que recomendamos cambiar para reemplazar la configuración por defecto de tu proveedor de servicios de internet.
---

Un DNS encriptado con servidores de terceros solo debe utilizarse para evitar el [bloqueo de DNS básico](https://en.wikipedia.org/wiki/DNS_blocking) cuándo puedas estar seguro de que no habrá ningunas consecuencias. Un DNS encriptado no te ayudará a esconder ninguna de tu actividad en línea.

[Aprende más sobre DNS :material-arrow-right-drop-circle:](advanced/dns-overview.md ""){.md-button}

## Proveedores Recomendados

| Proveedor de DNS                                                                | Política de Privacidad                                                                                | Protocolos                                                      | Registro      | ECS      | Filtrado                                                                                                                                                                     |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)                                | Texto claro <br> DoH/3 <br> DoT <br> DNSCrypt | Algún[^1]     | No       | Basado en la elección del servidor. La lista de filtros siendo utilizada se puede encontrar aquí. [:octicons-link-external-24:](https://github.com/AdguardTeam/AdGuardDNS)   |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | Cleartext <br> DoH/3 <br> DoT                       | Algún[^2]     | No       | Basado en la elección del servidor.                                                                                                                                          |
| [**Control D**](https://controld.com/free-dns)                                  | [:octicons-link-external-24:](https://controld.com/privacy)                                           | Cleartext <br> DoH/3 <br> DoT <br> DoQ        | Opcional[^3]  | No       | Basado en la elección del servidor.                                                                                                                                          |
| [**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)      | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/)                    | DoH <br> DoT                                              | No[^4]        | No       | Basado en la elección del servidor. La lista de filtro que se está utilizando se puede encontrar aquí. [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock) |
| [**NextDNS**](https://www.nextdns.io)                                           | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                                         | Cleartext <br> DoH/3 <br> DoT                       | Opcional [^5] | Opcional | Basado en la elección del servidor.                                                                                                                                          |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/privacy/policy/)                                      | Texto claro <br> DoH <br> DoT <br> DNSCrypt   | Algún[^6]     | Opcional | Según la elección del servidor, bloqueo de Malware por defecto.                                                                                                              |

## Criterio

**Ten en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos que nos permiten proporcionar recomendaciones objetivas. Te sugerimos que te familiarices con esta lista antes de elegir usar un proyecto, y que lleves a cabo tu propia investigación para asegurarte de que es la elección correcta para ti.

!!! Ejemplo "Esta sección es nueva"

    Estamos trabajando para establecer criterios definidos para cada sección de nuestro sitio, y esto puede estar sujeto a cambios. Si tienes alguna pregunta sobre nuestros criterios, por favor [pregunta en nuestro foro](https://discuss.privacyguides.net/latest) y no asumas que no hemos considerado algo a la hora de hacer nuestras recomendaciones si no aparece aquí. Hay muchos factores que se consideran y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

- Debe soportar [DNSSEC](advanced/dns-overview.md#what-is-dnssec).
- [Minimización QNAME](advanced/dns-overview.md#what-is-qname-minimization).
- Permitir que [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs) sea desactivado.
- Preferir soporte [anycast](https://en.wikipedia.org/wiki/Anycast#Addressing_methods) o soporte de dirección geográfica.

## Compatibilidad con Sistemas Operativos Nativos

### Android

Android 9 y superiores soportan DNS sobre TLS. Los ajustes se pueden encontrar en: **Configuración** &rarr; **Red & Internet** &rarr; **DNS privado**.

### Dispositivos Apple

Las últimas versiones de iOS, iPadOS, tvOS y macOS, soportan tanto DoT como DoH. Ambos protocolos son soportados nativamente a través de [configuración de perfiles ](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) o a través de la [API de configuración DNS](https://developer.apple.com/documentation/networkextension/dns_settings).

Tras la instalación de un perfil de configuración o de una aplicación que utilice la API de configuración de DNS, se puede seleccionar la configuración de DNS. Si una VPN está activa, la resolución dentro del túnel VPN utilizará la configuración DNS de la VPN y no la configuración de todo el sistema.

#### Perfiles Firmados

Apple no proporciona una interfaz nativa para crear perfiles DNS encriptados. [Secure DNS profile creator](https://dns.notjakob.com/tool.html) es una herramienta no oficial para crear tus propios perfiles DNS encriptados, aunque no estarán firmados. Son preferibles los perfiles firmados; la firma valida el origen de un perfil y ayuda a garantizar su integridad. Los perfiles de configuración firmados reciben la etiqueta verde de "Verificado". Para más información sobre la firma de código, consulte [Acerca de la firma de código](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html). **Perfiles firmados** son ofrecidos por [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html), [NextDNS](https://apple.nextdns.io), y [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

!!! info "Información"

    `systemd-resolved`, que muchas distribuciones Linux utilizan para realizar sus búsquedas DNS, todavía no [soporta DoH](https://github.com/systemd/systemd/issues/8639). Si quieres usar DoH, necesitarás instalar un proxy como [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) y [configurarlo](https://wiki. rchlinux.org/title/Dnscrypt-proxy) para obtener todas las consultas DNS de la resolución del sistema y reenviarlas sobre HTTPS.

## Proxies DNS Encriptados

El software de proxy de DNS encriptado proporciona un proxy local para que el resolver DNS [no encriptado](advanced/dns-overview.md#unencrypted-dns) lo reenvíe. Típicamente se utiliza en plataformas que no soportan de forma nativa el [DNS encriptado](advanced/dns-overview.md#what-is-encrypted-dns).

### RethinkDNS

!!! recommendation

    ![Logo de RethinkDNS](assets/img/android/rethinkdns.svg#only-light){ align=right }
    ![Logo de RethinkDNS](assets/img/android/rethinkdns-dark.svg#only-dark){ align=right }
    
    **RethinkDNS** es un cliente Android de código abierto que soporta [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), [DNS-over-TLS](advanced/dns-overview.md#dns-over-tls-dot), [DNSCrypt](advanced/dns-overview.md#dnscrypt) y DNS Proxy junto con el almacenamiento en caché de las respuestas DNS, el registro local de las consultas DNS y también se puede utilizar como cortafuegos.
    
    [:octicons-home-16: Página Principal](https://rethinkdns.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://rethinkdns.com/privacy){ .card-link title="Politica de privacidad" }
    [:octicons-info-16:](https://docs.rethinkdns.com/){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/celzero/rethink-app){ .card-link title="Código fuente" }
    
    ??? downloads "Descargas"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:simple-github: GitHub](https://github.com/celzero/rethink-app/releases)

### dnscrypt-proxy

!!! recommendation

    ![logo dnscrypt-proxy](assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt-proxy** es un proxy DNS con soporte para [DNSCrypt](advanced/dns-overview.md#dnscrypt), [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), y [DNS Anonimizado](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).
    
    !!! warning "Advertencia" "La función DNS anonimizada [**no**](advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns) anonimiza otro tráfico de red."
    
    [:octicons-repo-16: Repositorio](https://github.com/DNSCrypt/dnscrypt-proxy){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/DNSCrypt/dnscrypt-proxy){ .card-link title="Código fuente" }
    [:octicons-heart-16:](https://opencollective.com/dnscrypt/contribute){ .card-link title=Contribuir }
    
    ??? downloads "Descargas"
    
        - [:simple-windows11: Windows](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)
        - [:simple-apple: macOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
        - [:simple-linux: Linux](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)

## Soluciones autoalojadas

Una solución DNS autoalojada es útil para proporcionar filtrado en plataformas controladas, como Smart TV y otros dispositivos IoT, ya que no se necesita software del lado del cliente.

### AdGuard Home

!!! recommendation

    ![Logo de AdGuard Home](assets/img/dns/adguard-home.svg){ align=right }
    
    **AdGuard Home** es un código abierto [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) que utiliza [filtrado DNS](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) para bloquear contenido web no deseado, como anuncios.
    
    AdGuard Home cuenta con una interfaz web pulida para ver información y gestionar el contenido bloqueado.
    
    [:octicons-home-16: Página de Inicio](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Politica de privacidad" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Código fuente" }

### Pi-hole

!!! recommendation

    ![Logo de Pi-hole](assets/img/dns/pi-hole.svg){ align=right }
    
    **Pi-hole** es un código abierto [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) que utiliza [DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) para bloquear contenidos web no deseados, como la publicidad.
    
    Pi-hole está diseñado para alojarse en una Raspberry Pi, pero no se limita a dicho hardware. El software cuenta con una interfaz web fácil de usar para ver los datos y gestionar los contenidos bloqueados.
    
    [:octicons-home-16: Página de Inicio](https://pi-hole.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://pi-hole.net/privacy/){ .card-link title="Politica de privacidad" }
    [:octicons-info-16:](https://docs.pi-hole.net/){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title=Contribuir }

[^1]: AdGuard almacena métricas de rendimiento agregadas de sus servidores DNS, es decir, el número de solicitudes completas a un servidor en particular, el número de solicitudes bloqueadas, y la velocidad de procesamiento de solicitudes. También guardan y almacenan la base de datos de dominios solicitados dentro de las últimas 24 horas. "Necesitamos esta información para identificar y bloquear nuevos rastreadores y amenazas". "También registramos cuántas veces se ha bloqueado tal o cual rastreador. Necesitamos esta información para eliminar normas obsoletas de nuestros filtros". [https://adguard.com/en/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: Cloudflare recopila y almacena únicamente los datos de consulta DNS limitados que se envían al resolver 1.1.1.1. El servicio de resolución 1.1.1.1 no registra datos personales, y el grueso de los limitados datos de consulta no identificables personalmente se almacena solo durante 25 horas. [https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: El Control D solo registra los resolvers Premium con perfiles DNS personalizados. Los resolvers libres no registran datos. [https://controld.com/privacy](https://controld.com/privacy)
[^4]: El servicio DNS de Mullvad está disponible tanto para suscriptores como para no suscriptores de Mullvad VPN. Su política de privacidad afirma explícitamente que no registran solicitudes DNS de ninguna manera. [https://mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS puede proporcionar información y funciones por consentimiento previo. Puedes elegir los tiempos de retención y las ubicaciones de almacenamiento de los registros que desees conservar. Si no se solicita específicamente, no se registra ningún dato. [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9 recopila algunos datos con fines de monitorización y respuesta ante amenazas. Esos datos pueden remezclarse y compartirse, por ejemplo, con fines de investigación sobre seguridad. Quad9 no colecciona ni registra direcciones IP ni otros datos que consideren personalmente identificables. [https://www.quad9.net/privacy/policy/](https://www.quad9.net/privacy/policy/)

---
title: "Motores de Búsqueda"
icon: material/search-web
description: Estos motores de búsqueda respetuosos con la privacidad no construyen un perfil publicitario basado en sus búsquedas.
---

Utilice un motor de búsqueda que no construya un perfil publicitario basado en sus búsquedas.

Las recomendaciones aquí se basan en los méritos de la política de privacidad de cada servicio. No hay **garantías** de que estas políticas de privacidad se respeten.

Considere usar una [VPN](vpn.md) o [Tor](https://www.torproject.org/) si su modelo de amenaza requiere ocultar su dirección IP al proveedor de búsquedas.

## Brave Search

!!! recommendation

    ![Brave Search logo](assets/img/search-engines/brave-search.svg){ align=right }
    
    **Brave Search** es desarrollado por Brave y ofrece resultados procedentes principalmente de su propio índice independiente. El índice está optimizado en comparación con Google Search y, por lo tanto, puede proporcionar resultados más precisos contextualmente en comparación con otras alternativas.
    
    Brave Search incluye funciones exclusivas como Discusiones, que destaca los resultados centrados en la conversación, como los mensajes de los foros.
    
    Le recomendamos que deshabilite [Estadísticas de uso anónimas](https://search.brave.com/help/usage-metrics), ya que está habilitado de forma predeterminada y se puede deshabilitar dentro de la configuración.
    
    [:octicons-home-16: Página Principal](https://search.brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://search.brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="Servicio Onion" }
    [:octicons-eye-16:](https://search.brave.com/help/privacy-policy){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://search.brave.com/help){ .card-link title=Documentación}

Brave Search tiene su sede en Estados Unidos. Su [política de privacidad](https://search.brave.com/help/privacy-policy) afirma que recogen métricas de uso agregadas, que incluyen el sistema operativo y el navegador utilizados, pero no datos de identificación personal. Las direcciones IP se procesan temporalmente, pero no se conservan.

## DuckDuckGo

!!! recommendation

    ![DuckDuckGo logo](assets/img/search-engines/duckduckgo.svg){ align=right }
    
    **DuckDuckGo** es uno de los buscadores privados más populares. Entre las funciones de búsqueda de DuckDuckGo que merecen ser destacadas se encuentran [bangs](https://duckduckgo.com/bang) y muchas [respuestas instantáneas](https://help.duckduckgo.com/duckduckgo-help-pages/features/instant-answers-and-other-features/). El motor de búsqueda se basa en una API comercial de Bing para ofrecer la mayoría de los resultados, pero utiliza numerosas [otras fuentes](https://help.duckduckgo.com/results/sources/) para las respuestas instantáneas y otros resultados no primarios.
    
    DuckDuckGo es el motor de búsqueda por defecto del Navegador Tor y es una de las pocas opciones disponibles en el navegador Safari de Apple.
    
    [:octicons-home-16: Página Principal](https://duckduckgo.com){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion){ .card-link title="Servicio Onion" }
    [:octicons-eye-16:](https://duckduckgo.com/privacy){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://help.duckduckgo.com/){ .card-link title=Documentación}

DuckDuckGo tiene su sede en Estados Unidos. Su [política de privacidad](https://duckduckgo.com/privacy) afirma que **registra** sus búsquedas para mejorar los productos, pero no su dirección IP ni ningún otro dato de identificación personal.

DuckDuckGo ofrece [otras dos versiones](https://help.duckduckgo.com/features/non-javascript/) de su motor de búsqueda y ninguna de ellas requiere JavaScript. Sin embargo, estas versiones carecen de funciones. Estas versiones también pueden utilizarse junto con su dirección [Tor onion](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/) añadiendo [/lite](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/lite) o [/html](https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/html) según la versión.

## SearXNG

!!! recommendation

    ![SearXNG logo](assets/img/search-engines/searxng.svg){ align=right }
    
    **SearXNG** es un metabuscador de código abierto y autoalojable que agrega los resultados de otros motores de búsqueda sin almacenar ninguna información. Es una bifurcación de [SearX](https://github.com/searx/searx) mantenida activamente.
    
    [:octicons-home-16: Página Principal](https://searxng.org){ .md-button .md-button--primary }
    [:octicons-server-16:](https://searx.space/){ .card-link title="Instancias Públicos"}
    [:octicons-code-16:](https://github.com/searxng/searxng){ .card-link title="Código Fuente" }

SearXNG es un proxy entre usted y los motores de búsqueda desde los que se agrega. Sus consultas seguirán siendo enviadas a los motores de búsqueda de los que SearXNG obtiene sus resultados.

Al autoalojarse, es importante que otras personas utilicen su instancia para que las consultas se integren. Debe tener cuidado con dónde y cómo aloja SearXNG, ya que las personas que busquen contenidos ilegales en su instancia podrían atraer la atención no deseada de las autoridades.

Cuando utilice una instancia de SearXNG, asegúrese de leer su política de privacidad. Dado que las instancias de SearXNG pueden ser modificadas por sus propietarios, no reflejan necesariamente su política de privacidad. Algunas instancias se ejecutan como un servicio oculto de Tor, lo que puede garantizar cierta privacidad siempre y cuando sus consultas de búsqueda no contengan PII.

## Startpage

!!! recommendation

    ![Startpage logo](assets/img/search-engines/startpage.svg#only-light){ align=right }
    ![Startpage logo](assets/img/search-engines/startpage-dark.svg#only-dark){ align=right }
    
    **Startpage** es un motor de búsqueda privado conocido por servir los resultados de búsqueda de Google.  Una de las características exclusivas de Startpage es la [Vista Anónima](https://www.startpage.com/en/anonymous-view/), que se esfuerza por normalizar la actividad de los usuarios para dificultar su identificación exclusiva. Esta función puede ser útil para ocultar [some](https://support.startpage.com/hc/en-us/articles/4455540212116-The-Anonymous-View-Proxy-technical-details) propiedades de la red y el navegador. A diferencia de lo que sugiere su nombre, no se debe confiar en esta función para mantener el anonimato. Si busca anonimato, utilice [Tor Browser](tor.md#tor-browser) en su lugar.
    
    [:octicons-home-16: Página Principal](https://www.startpage.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startpage.com/en/privacy-policy){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://support.startpage.com/hc/en-us/categories/4481917470356-Startpage-Search-Engine){ .card-link title=Documentación}

!!! advertencia

    Startpage limita regularmente el acceso al servicio a ciertas direcciones IP, como las IPs reservadas para VPNs o Tor. [DuckDuckGo](#duckduckgo) y [Brave Search](#brave-search) son opciones más amigables si su modelo de amenazas requiere ocultar su dirección IP al proveedor de búsquedas.

Startpage tiene su sede en los Países Bajos. Según su [política de privacidad](https://www.startpage.com/en/privacy-policy/), registran datos como: sistema operativo, tipo de navegador e idioma. No registran su dirección IP, consultas de búsqueda u otra información de identificación personal.

El accionista mayoritario de Startpage es System1, una empresa de tecnología publicitaria. No creemos que eso sea un problema, ya que tienen una [política de privacidad](https://system1.com/terms/privacy-policy) claramente separada. El equipo de Privacy Guides se puso en contacto con Startpage [en 2020](https://web.archive.org/web/20210118031008/https://blog.privacytools.io/relisting-startpage/) para aclarar cualquier duda sobre la considerable inversión de System1 en el servicio. Quedamos satisfechos con las respuestas que recibimos.

## Criterios

**Por favor, tenga en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos que nos permiten ofrecer recomendaciones objetivas. Sugerimos que usted se familiarice con esta lista, antes de decidir utilizar un proyecto y realizar su propia investigación para asegurarse de que es la elección ideal para usted.

!!! ejemplo "Esta sección es nueva"

    Estamos trabajando en establecer criterios definidos para cada sección de nuestra página, y esto puede estar sujeto a cambios. Si tiene alguna duda sobre nuestros criterios, por favor [pregunte en nuestro foro](https://discuss.privacyguides.net/latest) y no asuma que no hemos tenido en cuenta algo a la hora de hacer nuestras recomendaciones si no aparece aquí. Son muchos los factores que se tienen en cuenta y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

### Requisitos Mínimos

- No debe recopilar información personal identificable según su política de privacidad.
- No debe permitir que los usuarios creen una cuenta con ellos.

### Mejor Caso

Nuestro criterio del mejor caso representa lo que nos gustaría ver del proyecto perfecto en esta categoría. Es posible que nuestras recomendaciones no incluyan todas o algunas de estas funciones, pero las que sí las incluyan pueden estar mejor clasificadas que otras en esta página.

- Debe estar basado en software de código abierto.
- No debería bloquear las direcciones IP del nodo de salida de Tor.

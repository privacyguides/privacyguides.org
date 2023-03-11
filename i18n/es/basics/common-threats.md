---
title: "Amenazas comunes"
icon: 'material/eye-outline'
description: Your threat model is personal to you, but these are some of the things many visitors to this site care about.
---

En términos generales, clasificamos nuestras recomendaciones en las [amenazas](threat-modeling.md) u objetivos que se aplican a la mayoría de las personas. ==Puede que no te preocupe ninguna, una, varias o todas estas posibilidades==, y las herramientas y servicios que utilices dependerán de cuáles sean tus objetivos. Es posible que también tengas amenazas específicas fuera de estas categorías, ¡lo cual está perfectamente bien! Lo importante es desarrollar una comprensión de los beneficios y las deficiencias de las herramientas que elijas utilizar, porque prácticamente ninguna de ellas te protegerá de todas las amenazas.

- <span class="pg-purple">:material-incognito: Anonimato</span> - Proteger tu actividad en línea de tu identidad real, protegiendote de las personas que están tratando de descubrir *tu* identidad específicamente.
- <span class="pg-red">:material-target-account: Ataques dirigidos</span> - Estar protegido de los hackers u otros actores maliciosos que están tratando de acceder a *tus* datos o dispositivos específicamente.
- <span class="pg-orange">:material-bug-outline: Ataques pasivos</span> - Estar protegido de cosas como el malware, las filtraciones de datos y otros ataques que se realizan contra muchas personas a la vez.
- <span class="pg-teal">:material-server-network: Proveedores de servicios</span> - Proteger tus datos de los proveedores de servicios (por ejemplo, con E2EE, que hace que tus datos sean ilegibles para el servidor).
- <span class="pg-blue">:material-eye-outline: Vigilancia masiva</span> - Protección contra las agencias gubernamentales, organizaciones, sitios web y servicios que trabajan juntos para rastrear tus actividades.
- <span class="pg-brown">:material-account-cash: Capitalismo de la vigilancia</span> - Protegerse de las grandes redes de publicidad, como Google y Facebook, así como de una miríada de otros recolectores de datos de terceros.
- <span class="pg-green">:material-account-search: Exposición pública</span> - Limitar la información sobre ti que es accesible en línea, para los motores de búsqueda o el público en general.
- <span class="pg-blue-gray">:material-close-outline: Censura</span> - Evitar el acceso censurado a la información o ser censurado uno mismo al hablar en línea.

Algunas de estas amenazas pueden ser más importantes para ti que otras, dependiendo de tus preocupaciones específicas. Por ejemplo, un desarrollador de software con acceso a datos valiosos o críticos puede estar preocupado principalmente por <span class="pg-red">:material-target-account: Ataques dirigidos</span>, pero probablemente siga queriendo proteger sus datos personales de ser barridos por los programas de <span class="pg-blue">:material-eye-outline: Vigilancia masiva</span>. Del mismo modo, muchas personas pueden estar preocupadas principalmente por la <span class="pg-green">:material-account-search: Exposición pública</span> de sus datos personales, pero aún así deben tener cuidado con los problemas centrados en la seguridad, como los <span class="pg-orange">:material-bug-outline: Ataques pasivos</span>-como el malware que afecta a sus dispositivos.

## Anonimato vs. Privacidad

<span class="pg-purple">:material-incognito: Anonimato</span>

El anonimato se confunde a menudo con la privacidad, pero son conceptos distintos. Mientras que la privacidad es un conjunto de decisiones que tomas sobre cómo se utilizan y comparten tus datos, el anonimato es la completa disociación de tus actividades en línea de tu identidad real.

Los denunciantes y los periodistas, por ejemplo, pueden tener un modelo de amenaza mucho más extremo que requiere el anonimato total. Eso no sólo es ocultar lo que hacen, los datos que tienen y no ser hackeados por actores maliciosos o gobiernos, sino también ocultar por completo quiénes son. A menudo sacrificarán cualquier tipo de comodidad si eso significa proteger su anonimato, privacidad o seguridad, porque sus vidas podrían depender de ello. La mayoría de la gente no necesita ir tan lejos.

## Seguridad y privacidad

<span class="pg-orange">:material-bug-outline: Ataques pasivos</span>

La seguridad y la privacidad también se confunden a menudo, porque se necesita seguridad para obtener cualquier apariencia de privacidad: El uso de herramientas -incluso si son privadas por diseño- es inútil si pueden ser fácilmente explotadas por atacantes que luego liberen tus datos. Sin embargo, lo contrario no es necesariamente cierto: el servicio más seguro del mundo *no es necesariamente* privado. El mejor ejemplo de esto es confiar los datos a Google, que, dada su escala, ha tenido pocos incidentes de seguridad al emplear a expertos en seguridad líderes en la industria para asegurar su infraestructura. Aunque Google proporciona servicios muy seguros, muy pocas personas considerarían que sus datos son privados en los productos gratuitos de consumo de Google (Gmail, YouTube, etc.)

En lo que respecta a la seguridad de las aplicaciones, generalmente no sabemos (y a veces no podemos) si el software que utilizamos es malicioso, o podría llegar a serlo algún día. Incluso en el caso de los desarrolladores más fiables, generalmente no hay garantía de que su software no tenga una vulnerabilidad grave que pueda ser explotada posteriormente.

Para minimizar el daño que una pieza maliciosa de software *podría hacer*, deberías emplear la seguridad por compartimentación. Por ejemplo, esto podría darse en la forma de usar diferentes ordenadores para diferentes trabajos, usar máquinas virtuales para separar diferentes grupos de aplicaciones relacionadas, o usar un sistema operativo seguro con un fuerte enfoque en el aislamiento de aplicaciones y el control de acceso obligatorio.

!!! consejo

    Los sistemas operativos móviles suelen tener un mejor aislamiento de aplicaciones que los sistemas operativos de escritorio: Las aplicaciones no pueden obtener acceso a la raíz y requieren permiso para acceder a los recursos del sistema.
    
    Los sistemas operativos de escritorio generalmente se retrasan en el aislamiento adecuado. ChromeOS tiene capacidades de aislamiento similares a las de Android, y macOS tiene un control total de los permisos del sistema (y los desarrolladores pueden optar por el aislamiento para las aplicaciones). Sin embargo, estos sistemas operativos transmiten información de identificación a sus respectivos OEM. Linux tiende a no enviar información a los proveedores de sistemas, pero tiene poca protección contra los exploits y las aplicaciones maliciosas. Esto puede mitigarse un poco con distribuciones especializadas que hacen un uso significativo de máquinas virtuales o contenedores, como Qubes OS.

<span class="pg-red">:material-target-account: Ataques dirigidos</span>

Los ataques dirigidos contra una persona concreta son más problemáticos de tratar. Los ataques más comunes son el envío de documentos maliciosos por correo electrónico, la explotación de vulnerabilidades (por ejemplo, en los navegadores y sistemas operativos) y los ataques físicos. Si esto te preocupa, deberías emplear estrategias de mitigación de amenazas más avanzadas.

!!! consejo

    Por su diseño, los **navegadores web**, los **clientes de correo electrónico** y las **aplicaciones de oficina** suelen ejecutar código no fiable, enviado por terceros. Ejecutar múltiples máquinas virtuales -para separar aplicaciones como estas de su sistema anfitrión, así como entre sí- es una técnica que puedes utilizar para mitigar la posibilidad de que un exploit en estas aplicaciones comprometa el resto de tu sistema. Por ejemplo, tecnologías como Qubes OS o Microsoft Defender Application Guard en Windows proporcionan métodos convenientes para hacerlo.

Si te preocupan los **ataques físicos** deberías utilizar un sistema operativo con una implementación de arranque seguro verificado, como Android, iOS, macOS o [Windows (con TPM)](https://docs.microsoft.com/en-us/windows/security/information-protection/secure-the-windows-10-boot-process). También deberías asegurarte de que tu disco esté encriptado y de que el sistema operativo utiliza un TPM o Secure [Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/1/web/1) o [Element](https://developers.google.com/android/security/android-ready-se) para limitar los intentos de introducir la frase de contraseña de encriptación. Deberías evitar compartir tu ordenador con personas que no sean de tu confianza, ya que la mayoría de los sistemas operativos de escritorio no cifran los datos por separado para cada usuario.

## Privacidad de los proveedores de servicios

<span class="pg-teal">:material-server-network: Proveedores de servicios</span>

Vivimos en un mundo en el que casi todo está conectado a Internet. Nuestros mensajes "privados", correos electrónicos e interacciones sociales suelen almacenarse en un servidor, en algún lugar. Generalmente, cuando envías un mensaje a alguien, este se almacena en un servidor, y cuando tu amigo quiere leer el mensaje, el servidor se lo muestra.

El problema obvio de esto es que el proveedor de servicios (o un hacker que haya comprometido el servidor) puede acceder a tus conversaciones cuando y como quiera, sin que tú lo sepas. Esto se aplica a muchos servicios comunes, como la mensajería SMS, Telegram y Discord.

Afortunadamente, E2EE puede aliviar este problema encriptando las comunicaciones entre tú y los destinatarios deseados antes de que se envíen al servidor. La confidencialidad de tus mensajes está garantizada, suponiendo que el proveedor de servicios no tenga acceso a las claves privadas de ninguna de las partes.

!!! nota "Nota sobre el cifrado basado en la web"

    En la práctica, la eficacia de las diferentes implementaciones de E2EE varía. Las aplicaciones, como [Signal](../real-time-communication.md#signal), se ejecutan de forma nativa en tu dispositivo, y cada copia de la aplicación es la misma en diferentes instalaciones. Si el proveedor de servicios introdujera un [backdoor](https://es.wikipedia.org/wiki/Puerta_trasera) en su aplicación -en un intento de robar tus claves privadas- podría ser detectado posteriormente con [ingeniería inversa](https://es.wikipedia.org/wiki/Ingenier%C3%Ada_inversa).
    
    Por otro lado, las implementaciones E2EE basadas en la web, como el webmail de Proton Mail o *Web Vault* de Bitwarden, dependen de que el servidor sirva dinámicamente código JavaScript al navegador para manejar la criptografía. Un servidor malicioso puede dirigirse a ti y enviarte un código JavaScript malicioso para robar tu clave de cifrado (y sería extremadamente difícil de notar). Dado que el servidor puede elegir servir diferentes clientes de la web a diferentes personas -incluso si te diste cuenta del ataque- sería increíblemente difícil probar la culpabilidad del proveedor.
    
    Por lo tanto, siempre que sea posible, hay que utilizar aplicaciones nativas en lugar de clientes web.

Incluso con E2EE, los proveedores de servicios aún pueden hacerte un perfil basado en **metadatos**, que generalmente no están protegidos. Aunque el proveedor de servicios no puede leer tus mensajes, sí puede observar cosas importantes, como con quién hablas, la frecuencia con la que les envías mensajes y cuándo sueles estar activo. La protección de los metadatos es bastante infrecuente, y -si está dentro de tu [modelo de amenazas](basics/threat-modeling.md)- deberías prestar mucha atención a la documentación técnica del software que estás utilizando para ver si hay alguna minimización o protección de los metadatos.

## Programas de vigilancia masiva

<span class="pg-blue">:material-eye-outline: Vigilancia masiva</span>

La vigilancia masiva es el intrincado esfuerzo por controlar el "comportamiento, muchas actividades o información" de toda una población (o de una fracción sustancial de ella).[^1] Suele referirse a programas gubernamentales, como los que [reveló Edward Snowden en 2013](https://es.wikipedia.org/wiki/Revelaciones_sobre_la_red_de_vigilancia_mundial_(2013-2015)). Sin embargo, también puede ser llevada a cabo por empresas, ya sea en nombre de organismos gubernamentales o por iniciativa propia.

!!! Sin embargo, al vulnerar los derechos humanos, se utiliza con mayor frecuencia para atacar desproporcionadamente a grupos minoritarios y disidentes políticos, entre otros.

    Si quiere saber más sobre los métodos de vigilancia y cómo se aplican en su ciudad, también puede echar un vistazo al [Atlas of Surveillance](https://atlasofsurveillance.org/) de la [Electronic Frontier Foundation](https://www.eff.org/).
    
    En Francia puede consultar el sitio [Technolopolice website](https://technopolice.fr/villes/), mantenido por la asociación sin ánimo de lucro La Quadrature du Net.

Los gobiernos suelen justificar los programas de vigilancia masiva como medios necesarios para combatir el terrorismo y prevenir la delincuencia. cita "ACLU: [*La lección de privacidad del 11 de septiembre: La vigilancia masiva no es el camino a seguir*](https://www.aclu.org/news/national-security/the-privacy-lesson-of-9-11-mass-surveillance-is-not-the-way-forward)"

!!! cita "ACLU: [*La lección de privacidad del 11 de septiembre: La vigilancia masiva no es el camino a seguir*](https://www.aclu.org/news/national-security/the-privacy-lesson-of-9-11-mass-surveillance-is-not-the-way-forward)"

    Aunque eludir la censura en sí puede ser fácil, ocultar el hecho de que lo estás haciendo puede ser muy problemático. Debrías considerar qué aspectos de la red puede observar tu adversario y si tiene una negación plausible de tus acciones.

En línea, puedes ser rastreado a través de una variedad de métodos:

\[Esta lista no es exhaustiva].

- Tu dirección IP
- Cookies del navegador
- Los datos que envías a los sitios web
- La huella digital de tu navegador o dispositivo
- Correlación del método de pago

Si te preocupan los programas de vigilancia masiva, puedes utilizar estrategias como compartimentar tus identidades en línea, mezclarte con otros usuarios o, siempre que sea posible, simplemente evitar dar información que te identifique.

Si te preocupan los programas de vigilancia masiva, puedes utilizar estrategias como compartimentar tus identidades en línea, mezclarte con otros usuarios o, siempre que sea posible, simplemente evitar proporcionar información que te identifique.

<span class="pg-brown">:material-account-cash: Capitalismo de Vigilancia</span>

> El capitalismo de vigilancia es un sistema económico centrado en la captura y mercantilización de datos personales con el propósito principal de obtener ganancias.[^3]

Además, incluso empresas ajenas a la industria de *AdTech* o de seguimiento pueden compartir tu información con los [corredores de datos](https://es.wikipedia.org/wiki/Broker_de_informaci%C3%B3n) (como Cambridge Analytica, Experian o Datalogix) u otras partes. No puedes asumir automáticamente que tus datos están seguros sólo porque el servicio que utilizas no entra dentro del típico modelo de negocio de AdTech o de seguimiento. La mayor protección contra la recopilación de datos por parte de las empresas es encriptar u ofuscar tus datos siempre que sea posible, dificultando que los diferentes proveedores puedan correlacionar los datos entre sí y construir un perfil sobre ti.

La mejor manera de mantener la privacidad de tus datos es simplemente no hacerlos públicos en primer lugar. Borrar la información no deseada que encuentres sobre ti en Internet es uno de los mejores primeros pasos que puedes dar para recuperar tu privacidad. La mayor protección contra la recopilación de datos por parte de las empresas es encriptar u ofuscar tus datos siempre que sea posible, dificultando que los diferentes proveedores puedan correlacionar los datos entre sí y construir un perfil sobre ti.

## Limitación de la información pública

<span class="pg-green">:material-account-search: Exposición pública</span>

En los sitios en los que compartes información, es muy importante comprobar la configuración de privacidad de tu cuenta para limitar la difusión de esos datos. Por ejemplo, activa el "modo privado" en tus cuentas si tienes la opción: Esto garantiza que tu cuenta no sea indexada por los motores de búsqueda y que no pueda ser vista sin tu permiso.

- [Mira nuestra guía sobre la eliminación de cuentas :material-arrow-right-drop-circle:](account-deletion.md)

Si ya has enviado tu información real a sitios que no deberían tenerla, considera la posibilidad de utilizar tácticas de desinformación, como enviar información ficticia relacionada con esa identidad en línea. Esto hace que tu información real sea indistinguible de la falsa.

La censura en línea puede ser llevada a cabo (en diversos grados) por actores que incluyen gobiernos totalitarios, administradores de redes y proveedores de servicios. Estos esfuerzos por controlar la comunicación y restringir el acceso a la información serán siempre incompatibles con el derecho humano a la Libertad de Expresión.[^5]

## Evitar la censura

<span class="pg-blue-gray">:material-close-outline: Censura</span>

La censura en las plataformas corporativas es cada vez más común, ya que plataformas como Twitter y Facebook ceden a la demanda del público, a las presiones del mercado y a las de los organismos gubernamentales. Las presiones gubernamentales pueden ser peticiones encubiertas a las empresas, como la de la Casa Blanca [solicitando la retirada](https://www.nytimes.com/2012/09/17/technology/on-the-web-a-fine-line-on-free-speech-across-globe.html) de un vídeo provocativo de YouTube, o abiertamente, como la del gobierno chino exigiendo a las empresas que se adhieran a un estricto régimen de censura.

La censura en las plataformas corporativas es cada vez más común, ya que plataformas como Twitter y Facebook ceden a la demanda del público, a las presiones del mercado y a las de los organismos gubernamentales. Las presiones gubernamentales pueden ser peticiones encubiertas a las empresas, como la de la Casa Blanca [solicitando la retirada](https://www.nytimes.com/2012/09/17/technology/on-the-web-a-fine-line-on-free-speech-across-globe.html) de un vídeo provocativo de YouTube, o abiertamente, como la del gobierno chino exigiendo a las empresas que se adhieran a un estricto régimen de censura.

Las personas preocupadas por la amenaza de la censura pueden utilizar tecnologías como [Tor](../advanced/tor-overview.md) para eludirla, y apoyar plataformas de comunicación resistentes a la censura como [Matrix](../real-time-communication.md#element), que no tiene una autoridad de cuentas centralizada que pueda cerrar cuentas arbitrariamente.

!!! consejo

    Si bien evadir la censura en sí misma puede ser fácil, ocultar el hecho de que lo estás haciendo puede ser muy problemático.
    
    Deberías considerar qué aspectos de la red puede observar tu adversario y si tienes una justificación verosímil para tus acciones. Por ejemplo, el uso de [DNS cifrado](../advanced/dns-overview.md#what-is-encrypted-dns) puede ayudarte a eludir sistemas de censura rudimentarios basados en DNS, pero no puede ocultar realmente lo que visitas a tu ISP. Una VPN o Tor puede ayudar a ocultar lo que estás visitando de los administradores de red, pero no puede ocultar que estás utilizando esas redes en primer lugar. Los transportes conectables (como Obfs4proxy, Meek, o Shadowsocks) pueden ayudarte a evadir cortafuegos que bloquean protocolos VPN comunes o Tor, pero tus intentos de evasión aún pueden ser detectados por métodos como sondeo o [inspección profunda de paquetes](https://es.wikipedia.org/wiki/Inspección_profunda_de_paquete).

Siempre debes tener en cuenta los riesgos de intentar saltarse la censura, las posibles consecuencias y lo sofisticado que puede ser el adversario. Debe ser precavido con la selección del software y tener un plan de respaldo en caso de que te pillen.

[^1]: Wikipedia: [*Vigilancia masiva*](https://es.wikipedia.org/wiki/Vigilancia_masiva) y [*Vigilancia*](https://es.wikipedia.org/wiki/Vigilancia).
[^2]: Junta de Supervisión de la Privacidad y las Libertades Civiles de los Estados Unidos: [*Informe sobre el Programa de Registros Telefónicos llevado a cabo bajo la Sección 215*](https://documents.pclob.gov/prod/Documents/OversightReport/ec542143-1079-424a-84b3-acc354698560/215-Report_on_the_Telephone_Records_Program.pdf)
[^3]: Wikipedia: [*Capitalismo de vigilancia*](https://es.wikipedia.org/wiki/Capitalismo_de_vigilancia)
[^4]: "[Enumerar la maldad](https://www.ranum.com/security/computer_security/editorials/dumb/)" (o, "enumerar todas las cosas malas que conocemos"), como hacen muchos bloqueadores de anuncios y programas antivirus, no protege adecuadamente de las amenazas nuevas y desconocidas porque aún no se han añadido a la lista de filtros. También deberías emplear otras técnicas de mitigación.
[^5]: Naciones Unidas: [*La Declaración Universal de Derechos Humanos*](https://www.un.org/es/about-us/universal-declaration-of-human-rights).

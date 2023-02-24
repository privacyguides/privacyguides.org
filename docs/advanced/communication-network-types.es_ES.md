---
title: "Tipos de redes de comunicación"
icon: 'material/transit-connection-variant'
---

Existen varias arquitecturas de red utilizadas habitualmente para transmitir mensajes entre personas. Estas redes pueden ofrecer diferentes garantías de privacidad, por lo que conviene tener en cuenta tu [modelo de amenaza](../basics/threat-modeling.md) a la hora de decidir qué aplicación utilizar.

[Servicios de mensajería instantáneos recomendados](../real-time-communication.md ""){.md-button}

## Redes centralizadas

![Diagrama de redes centralizadas](../assets/img/layout/network-centralized.svg){ align=left }

Los mensajeros centralizados son aquellos en los que todos los participantes están en el mismo servidor o red de servidores controlados por la misma organización.

Algunos servicios de mensajería autoalojados te permiten configurar tu propio servidor. El autoalojamiento puede ofrecer garantías adicionales de privacidad, como la ausencia de registros de uso o el acceso limitado a los metadatos (datos sobre quién habla con quién). Los servicios de mensajería centralizados autoalojados están aislados y todos deben estar en el mismo servidor para comunicarse.

**Ventajas:**

- Las nuevas funciones y cambios pueden aplicarse más rápidamente.
- Es más fácil empezar y encontrar contactos.
- Ecosistemas de características más maduras y estables, ya que son más fáciles de programar en un software centralizado.
- Los problemas de privacidad pueden reducirse cuando se confía en un servidor que está autoalojando.

**Desventajas:**

- Puede incluir [control o acceso restringido](https://drewdevault.com/2018/08/08/Signal.html). Esto puede incluir cosas como:
- Estar [prohibido conectar clientes de terceros](https://github.com/LibreSignal/LibreSignal/issues/37#issuecomment-217211165) a la red centralizada que podría proporcionar una mayor personalización o una mejor experiencia. A menudo se define en los Términos y condiciones de uso.
- Documentación pobre o nula para desarrolladores de terceros.
- La [propiedad](https://web.archive.org/web/20210729191953/https://blog.privacytools.io/delisting-wire/), la política de privacidad y las operaciones del servicio pueden cambiar fácilmente cuando una sola entidad lo controla, pudiendo comprometer el servicio más adelante.
- El autoalojamiento requiere esfuerzo y conocimiento de cómo configurar un servicio.

## Redes federadas

![Diagrama de redes federadas](../assets/img/layout/network-decentralized.svg){ align=left }

Los servicios de mensajería federados utilizan varios servidores independientes y descentralizados que pueden comunicarse entre sí (el correo electrónico es un ejemplo de servicio federado). La federación permite a los administradores de sistemas controlar su propio servidor y seguir formando parte de la red de comunicaciones más amplia.

Cuando se autoaloja, los miembros de un servidor federado pueden descubrir y comunicarse con los miembros de otros servidores, aunque algunos servidores pueden optar por permanecer privados al no estar federados (por ejemplo, el servidor del equipo de trabajo).

**Ventajas:**

- Permite un mayor control sobre tus propios datos cuando administras tu propio servidor.
- Te permite elegir en quién confiar tus datos eligiendo entre varios servidores "públicos".
- A menudo permite los clientes de terceros que pueden ofrecer una experiencia más nativa, personalizada o accesible.
- Se puede verificar que el software del servidor coincide con el código fuente público, suponiendo que se tiene acceso al servidor o se confía en la persona que lo tiene (por ejemplo, un familiar).

**Desventajas:**

- Añadir nuevas funcionalidades es más complejo porque estas funcionalidades tienen que ser estandarizadas y probadas para asegurar que funcionan con todos los servidores de la red.
- Debido al punto anterior, pueden faltar funciones, o estar incompletas o funcionar de forma inesperada en comparación con las plataformas centralizadas, como la retransmisión de mensajes cuando se está desconectado o la eliminación de mensajes.
- Algunos metadatos pueden estar disponibles (por ejemplo, información como "quién habla con quién", pero no el contenido real del mensaje si se utiliza E2EE).
- Los servidores federados generalmente requieren confiar en el administrador de tu servidor. Puede que sean aficionados o que no sean "profesionales de la seguridad", y puede que no sirvan documentos estándar como una política de privacidad o unas condiciones de servicio que detallen cómo se utilizan tus datos.
- Los administradores de los servidores a veces deciden bloquear otros servidores que son fuente de abusos no moderados o que rompen las normas generales de comportamiento aceptadas. Esto dificultará tu capacidad de comunicación con los miembros de esos servidores.

## Redes par a par (P2P)

![Diagrama P2P](../assets/img/layout/network-distributed.svg){ align=left }

Los servicios de mensajería P2P se conectan a una [red distribuida](https://es.wikipedia.org/wiki/Red_distribuida) de nodos para transmitir un mensaje al destinatario sin necesidad de un servidor externo.

Los clientes (pares) suelen encontrarse entre sí mediante el uso de una red de [computación distribuida](https://es.wikipedia.org/wiki/Computación_distribuida). Ejemplos de esto incluyen la [Tabla de hash distribuida](https://es.wikipedia.org/wiki/Tabla_de_hash_distribuida) (DHT), usada por [torrents](https://es.wikipedia.org/wiki/BitTorrent) y [IPFS](https://es.wikipedia.org/wiki/Sistema_de_archivos_interplanetario) por ejemplo. Otro enfoque son las redes basadas en la proximidad, en las que se establece una conexión a través de WiFi o Bluetooth (por ejemplo, Briar o el protocolo de red social [Scuttlebutt](https://www.scuttlebutt.nz)).

Una vez que un par ha encontrado una ruta a su contacto a través de cualquiera de estos métodos, se establece una conexión directa entre ellos. Aunque los mensajes suelen estar encriptados, un observador puede deducir la ubicación y la identidad del remitente y del destinatario.

Las redes P2P no utilizan servidores, ya que los pares se comunican directamente entre sí y, por tanto, no pueden ser autoalojadas. Sin embargo, algunos servicios adicionales pueden depender de servidores centralizados, como el descubrimiento de usuarios o la retransmisión de mensajes sin conexión, que pueden beneficiarse del autoalojamiento.

**Ventajas:**

- La información que se expone a terceros es mínima.
- Las plataformas P2P modernas implementan E2EE por defecto. No hay servidores que puedan interceptar y descifrar tus transmisiones, a diferencia de los modelos centralizados y federados.

**Desventajas:**

- Conjunto de funciones reducido:
- Los mensajes solo pueden enviarse cuando ambos pares están en línea, sin embargo, tu cliente puede almacenar los mensajes localmente para esperar a que el contacto vuelva a estar en línea.
- Por lo general, aumenta el uso de la batería en los dispositivos móviles, ya que el cliente debe permanecer conectado a la red distribuida para saber quién está conectado.
- Es posible que algunas funciones comunes de mensajería no se implementen o sean incompletas, como la eliminación de mensajes.
- Tu dirección IP y la de los contactos con los que te comunicas puede quedar expuesta si no utilizas el software junto con una [VPN](../vpn.md) o [Tor](../tor.md). Muchos países tienen alguna forma de vigilancia masiva y/o retención de metadatos.

## Enrutamiento anónimo

![Diagrama de enrutamiento anónimo](../assets/img/layout/network-anonymous-routing.svg){ align=left }

Un servicio de mensajería que utilice [enrutamiento anónimo](https://doi.org/10.1007/978-1-4419-5906-5_628) oculta la identidad del emisor, del receptor o la evidencia de que se han comunicado. Idealmente, un servicio de mensajería debería ocultar los tres.

Hay [muchas](https://doi.org/10.1145/3182658) formas diferentes de implementar el enrutamiento anónimo. Una de las más famosas es el [enrutamiento cebolla](https://es.wikipedia.org/wiki/Encaminamiento_cebolla) (es decir, [Tor](tor-overview.md)), que comunica mensajes cifrados a través de una red [superpuesta virtual](https://es.wikipedia.org/wiki/Red_superpuesta) que oculta la ubicación de cada nodo, así como el destinatario y el remitente de cada mensaje. El remitente y el destinatario nunca interactúan directamente y solo se reúnen a través de un nodo de encuentro secreto para que no haya filtración de direcciones IP ni de la ubicación física. Los nodos no pueden descifrar los mensajes, ni el destino final; solo el destinatario puede hacerlo. Cada nodo intermediario solo puede desencriptar una parte que indica a dónde enviar el mensaje aún encriptado a continuación, hasta que llega al destinatario que puede desencriptarlo completamente, de ahí las "capas de cebolla."

El autoalojamiento de un nodo en una red de enrutamiento anónimo no proporciona al anfitrión beneficios adicionales de privacidad, sino que contribuye a la resistencia de toda la red contra los ataques de identificación en beneficio de todos.

**Ventajas:**

- La información que se expone a otras partes es mínima o nula.
- Los mensajes pueden transmitirse de forma descentralizada incluso si una de las partes está desconectada.

**Desventajas:**

- Lenta propagación de mensajes.
- A menudo se limita a menos tipos de medios, sobre todo de texto, ya que la red es lenta.
- Menos fiable si los nodos se seleccionan mediante enrutamiento aleatorio, algunos nodos pueden estar muy lejos del emisor y del receptor, añadiendo latencia o incluso dejando de transmitir mensajes si uno de los nodos se desconecta.
- Más complejo para empezar, ya que se requiere la creación y el respaldo seguro de una clave privada criptográfica.
- Al igual que en otras plataformas descentralizadas, añadir funciones es más complejo para los desarrolladores que en una plataforma centralizada. Por lo tanto, pueden faltar funciones o estar implementadas de forma incompleta, como la retransmisión de mensajes fuera de línea o la eliminación de mensajes.

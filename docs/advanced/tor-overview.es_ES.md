---
title: "Resumen de Tor"
icon: 'simple/torproject'
---

Tor es una red descentralizada y gratuita diseñada para utilizar Internet con la mayor privacidad posible. Si se utiliza correctamente, la red permite la navegación y las comunicaciones privadas y anónimas.

## Construcción de ruta

Tor funciona enrutando tu tráfico a través de una red compuesta por miles de servidores gestionados por voluntarios llamados nodos (o repetidores).

Cada vez que te conectes a Tor, elegirá tres nodos para construir una ruta a Internet-esta ruta se llama "circuito." Cada uno de estos nodos tiene su propia función:

### El nodo de entrada

El nodo de entrada, a menudo llamado nodo de guardia, es el primer nodo al que se conecta tu cliente Tor. El nodo de entrada puede ver tu dirección IP, pero no puede ver a qué te estás conectando.

A diferencia de los otros nodos, el cliente Tor seleccionará aleatoriamente un nodo de entrada y se quedará con él durante dos o tres meses para protegerte de ciertos ataques.[^1]

### El nodo medio

El nodo del medio es el segundo nodo al que se conecta tu cliente Tor. Puede ver de qué nodo procede el tráfico -el nodo de entrada- y a qué nodo se dirige a continuación. El nodo intermedio no puede, ver tu dirección IP o el dominio al que te estás conectando.

Para cada nuevo circuito, el nodo central se selecciona aleatoriamente de entre todos los nodos Tor disponibles.

### El nodo de salida

El nodo de salida es el punto en el que tu tráfico web abandona la red Tor y es reenviado a su destino deseado. El nodo de salida no puede ver tu dirección IP, pero sí sabe a qué sitio te estás conectando.

El nodo de salida será elegido al azar de entre todos los nodos Tor disponibles ejecutados con una bandera de retransmisión de salida.[^2]

<figure markdown>
  ![Tor path](../assets/img/how-tor-works/tor-path.svg#only-light)
  ![Tor path](../assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>Ruta del circuito de tor</figcaption>
</figure>

## Cifrado

Tor encripta cada paquete (un bloque de datos transmitidos) tres veces con las claves del nodo de salida, medio y de entrada, en ese orden.

Una vez que Tor ha construido un circuito, la transmisión de datos se realiza de la siguiente manera:

1. En primer lugar: cuando el paquete llega al nodo de entrada, se elimina la primera capa de cifrado. En este paquete encriptado, el nodo de entrada encontrará otro paquete encriptado con la dirección del nodo intermedio. El nodo de entrada reenviará entonces el paquete al nodo intermedio.

2. Segundo: cuando el nodo intermedio recibe el paquete del nodo de entrada, también elimina una capa de encriptación con su clave, y esta vez encuentra un paquete encriptado con la dirección del nodo de salida. El nodo intermedio reenviará entonces el paquete al nodo de salida.

3. Por último, cuando el nodo de salida reciba su paquete, eliminará la última capa de cifrado con su clave. El nodo de salida verá la dirección de destino y reenviará el paquete a esa dirección.

A continuación se presenta un diagrama alternativo que muestra el proceso. Cada nodo elimina su propia capa de encriptación, y cuando el servidor de destino devuelve los datos, el mismo proceso ocurre completamente a la inversa. Por ejemplo, el nodo de salida no sabe quién eres, pero sí sabe de qué nodo procede, por lo que añade su propia capa de encriptación y lo envía de vuelta.

<figure markdown>
  ![Tor encryption](../assets/img/how-tor-works/tor-encryption.svg#only-light)
  ![Tor encryption](../assets/img/how-tor-works/tor-encryption-dark.svg#only-dark)
  <figcaption>Envío y recepción de datos a través de la red Tor</figcaption>
</figure>

Tor nos permite conectarnos a un servidor sin que nadie conozca la ruta completa. El nodo de entrada sabe quién eres, pero no a dónde vas; el nodo intermedio no sabe quién eres ni a dónde vas; y el nodo de salida sabe a dónde vas, pero no quién eres. Como el nodo de salida es el que realiza la conexión final, el servidor de destino nunca conocerá tu dirección IP.

## Advertencias

Aunque Tor proporciona fuertes garantías de privacidad, uno debe ser consciente de que Tor no es perfecto:

- Los adversarios bien financiados con la capacidad de observar pasivamente la mayor parte del tráfico de la red en todo el mundo tienen la posibilidad de desanonimizar a los usuarios de Tor mediante el análisis avanzado del tráfico. Tor tampoco te protege de exponerte por error, como por ejemplo si compartes demasiada información sobre tu identidad real.
- Los nodos de salida de Tor también pueden monitorear el tráfico que pasa a través de ellos. Esto significa que el tráfico que no está encriptado, como el tráfico HTTP simple, puede ser grabado y monitoreado. Si dicho tráfico contiene información personal identificable, entonces puede desanonimizarlo a ese nodo de salida. Por lo tanto, recomendamos utilizar HTTPS sobre Tor siempre que sea posible.

Si deseas utilizar Tor para navegar por la web, sólo recomendamos el navegador Tor Browser **oficial**-está diseñado para evitar las huellas digitales.

- [Tor Browser :material-arrow-right-drop-circle:](../tor.md#tor-browser)

## Recursos Adicionales

- [Manual del usuario del navegador Tor](https://tb-manual.torproject.org)
- [How Tor Works - Computerphile](https://www.youtube-nocookie.com/embed/QRYzre4bf7I) <small>(YouTube)</small>
- [Tor Onion Services - Computerphile](https://www.youtube-nocookie.com/embed/lVcbq_a5N9I) <small>(YouTube)</small>

[^1]: El primer repetidor en tu circuito se llama "guardia de entrada" o "guardia". Es un repetidor rápido y estable que se mantiene como el primero en tu circuito durante 2-3 meses para protegerse de un ataque conocido de ruptura del anonimato. El resto de tu circuito cambia con cada nuevo sitio web que visitas, y todos juntos estos repetidores proporcionan las protecciones de privacidad completas de Tor. Para obtener más información sobre el funcionamiento de los repetidores de protección, consulta esta [entrada del blog](https://blog.torproject.org/improving-tors-anonymity-changing-guard-parameters) y el [documento](https://www-users.cs.umn.edu/~hoppernj/single_guard.pdf) sobre los guardias de entrada. ([https://support.torproject.org/tbb/tbb-2/](https://support.torproject.org/tbb/tbb-2/))

[^2]: Bandera de repetidor: una (des)calificación de los repetidores para las posiciones de los circuitos (por ejemplo, "Guardia", "Salida", "MalaSalida"), las propiedades de los circuitos (por ejemplo, "Rápido", "Estable"), o los roles (por ejemplo, "Autoridad", "HSDir"), tal y como los asignan las autoridades de los directorios y se definen con más detalle en la especificación del protocolo del directorio. ([https://metrics.torproject.org/glossary.html](https://metrics.torproject.org/glossary.html))

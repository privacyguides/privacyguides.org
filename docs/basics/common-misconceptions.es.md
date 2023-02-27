---
title: "Conceptos erróneos comunes"
icon: 'material/robot-confused'
---

## "El software de código abierto es siempre seguro" o "El software propietario es más seguro"

Estos mitos provienen de varios prejuicios, pero el hecho de que el código fuente esté disponible y la forma en que se licencie el software no afecta intrínsecamente a su seguridad de ninguna manera. ==El software de código abierto tiene el *potencial* de ser más seguro que el software propietario, pero no hay ninguna garantía de que sea así.== Cuando evalúes el software, debes examinar la reputación y la seguridad de cada herramienta de forma individual.

El software de código abierto *puede* ser auditado por terceros, y a menudo es más transparente sobre las vulnerabilidades potenciales que sus contrapartes propietarias. También te permite revisar el código y desactivar cualquier funcionalidad sospechosa que encuentres. Sin embargo, *a menos que lo hagas*, no hay garantía de que el código haya sido evaluado alguna vez, especialmente en los proyectos de software más pequeños. El proceso de desarrollo abierto también ha sido explotado en ocasiones para introducir nuevas vulnerabilidades incluso en proyectos aún más grandes.[^1]

Por otro lado, el software propietario es menos transparente, pero eso no implica que no sea seguro. Los grandes proyectos de software propietario pueden ser auditados internamente y por agencias de terceros, y los investigadores de seguridad independientes pueden seguir encontrando vulnerabilidades con técnicas como la ingeniería inversa.

Para evitar decisiones sesgadas, es *vital* que evalúes los estándares de privacidad y seguridad del software que utilizas.

## "Transferir la confianza puede aumentar la privacidad"

Hablamos mucho de "transferir la confianza" cuando hablamos de soluciones como las VPN (que transfieren la confianza que depositas en tu ISP al proveedor de VPN). Aunque esto protege tus datos de navegación de tu proveedor de internet *específicamente*, el proveedor de VPN que elijas sigue teniendo acceso a tus datos de navegación: Tus datos no están completamente protegidos de todas las partes. Esto significa que:

1. Hay que ser prudente a la hora de elegir un proveedor al que confiar.
2. Aun así, deberías utilizar otras técnicas, como E2EE, para proteger tus datos por completo. Simplemente desconfiar de un proveedor para confiar en otro no es proteger tus datos.

## "Las soluciones centradas en la privacidad son inherentemente fiables"

Centrarse exclusivamente en las políticas de privacidad y en el marketing de una herramienta o proveedor puede impedirte ver sus debilidades. Cuando estés buscando una solución más privada, deberías determinar cuál es el problema subyacente y encontrar soluciones técnicas a ese problema. Por ejemplo, es posible que quieras evitar Google Drive, ya que da acceso a Google a todos tus datos. El problema subyacente en este caso es la falta de E2EE, por lo que deberías asegurarte de que el proveedor al que te cambias realmente implementa E2EE, o utiliza una herramienta (como [Cryptomator](../encryption.md#cryptomator-cloud)) que proporciona E2EE a cualquier proveedor de servicios en la nube. Cambiar a un proveedor "centrado en la privacidad" (que no implementa E2EE) no resuelve tu problema: esto solo cambia la confianza de Google a ese proveedor.

Las políticas de privacidad y las prácticas empresariales de los proveedores que elijas son muy importantes, pero deben considerarse secundarias frente a las garantías técnicas de tu privacidad: No deberías cambiar la confianza a otro proveedor cuando la confianza en un proveedor no es un requisito en absoluto.

## "Lo complicado es mejor"

A menudo vemos a gente que describe modelos de amenaza a la privacidad que son excesivamente complejos. A menudo, estas soluciones incluyen problemas como muchas cuentas de correo electrónico diferentes o configuraciones complicadas con muchas partes móviles y condiciones. Las respuestas suelen responder a "¿Cuál es la mejor manera de hacer *X*?"

Encontrar la "mejor" solución para uno mismo no significa necesariamente que se busque una solución infalible con docenas de condiciones: suele ser difícil trabajar con estas soluciones de forma realista. Como hemos comentado anteriormente, la seguridad a menudo viene a expensas de la comodidad. A continuación, te ofrecemos algunos consejos:

1. ==Las acciones tienen que servir a un propósito concreto:== piensa en cómo hacer lo que quieres con el menor número de acciones.
2. ==Eliminar los puntos de fallo humanos:== Fallamos, nos cansamos y olvidamos cosas. Para mantener la seguridad, evita depender de condiciones y procesos manuales que tengas que recordar.
3. ==Utiliza el nivel adecuado de protección para lo que pretendes.== A menudo vemos recomendaciones de las llamadas soluciones de aplicación de la ley o a prueba de citaciones. Estas a menudo requieren conocimientos especializados y generalmente no es lo que la gente quiere. No tiene sentido construir un intrincado modelo de amenaza para el anonimato si puede ser fácilmente desanonimizado por un simple descuido.

Así que, ¿cómo podría verse esto?

Uno de los modelos de amenaza más claros es aquel en el que la gente *sabe quién eres* y otro en el que no. Siempre habrá situaciones en las que debes declarar tu nombre legal y otras en las que no es necesario.

1. **Identidad conocida** - Una identidad conocida se utiliza para cosas en las que debes declarar tu nombre. Hay muchos documentos legales y contratos en los que se requiere una identidad legal. Esto puede abarcar desde la apertura de una cuenta bancaria, la firma de un contrato de arrendamiento de una propiedad, la obtención de un pasaporte, las declaraciones de aduana al importar artículos o cualquier otro trámite con tu Gobierno. Por lo general, estas cosas conducirán a credenciales como tarjetas de crédito, controles de calificación crediticia, números de cuenta y, posiblemente, direcciones físicas.

    No sugerimos usar una VPN o Tor para ninguna de estas cosas, ya que tu identidad ya es conocida por otros medios.

    !!! consejo
   
        Al comprar en línea, el uso de un [casillero de paquetes](https://en.wikipedia.org/wiki/Parcel_locker) puede ayudar a mantener la privacidad de tu dirección física.

2. **Identidad desconocida** - Una identidad desconocida podría ser un seudónimo estable que utilizas con regularidad. No es anónimo porque no cambia. Si formas parte de una comunidad en línea, es posible que desees mantener un personaje que los demás conozcan. Este seudónimo no es anónimo porque, si se vigila durante el tiempo suficiente, los detalles sobre el propietario pueden revelar más información, como su forma de escribir, sus conocimientos generales sobre temas de interés, etc.

    Es posible que desees utilizar una VPN para esto, para enmascarar tu dirección IP. Las transacciones financieras son más difíciles de enmascarar: Podrías considerar el uso de criptomonedas anónimas, como [Monero](https://www.getmonero.org/). El cambio a una moneda alternativa también puede ayudar a disfrazar dónde se originó tu moneda. Por lo general, los intercambios requieren que el KYC (conoce a tu cliente) se complete antes de que te permitan cambiar moneda fiduciaria a cualquier tipo de criptomoneda. Las opciones de encuentros locales también pueden ser una solución; sin embargo, suelen ser más caras y, a veces, también requieren KYC.

3. **Identidad anónima** - Incluso con experiencia, las identidades anónimas son difíciles de mantener durante largos periodos de tiempo. Deben ser identidades a corto plazo y de corta duración que roten regularmente.

    Usar Tor puede ayudar con esto. También cabe destacar que es posible un mayor anonimato mediante la comunicación asíncrona: La comunicación en tiempo real es vulnerable al análisis de los patrones de escritura (es decir, más de un párrafo de texto, distribuido en un foro, por correo electrónico, etc.)

[^1]: Un ejemplo notable de esto es [el incidente de 2021 en el que investigadores de la Universidad de Minnesota introdujeron tres vulnerabilidades en el proyecto de desarrollo del kernel de Linux](https://cse.umn.edu/cs/linux-incident).

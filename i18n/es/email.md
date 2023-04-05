---
title: "Servicios de Correo Electrónico"
icon: material/email
description: Estos proveedores de correo electrónico ofrecen un lugar estupendo para almacenar tus correos de forma segura, y muchos ofrecen encriptación OpenPGP inter operable con otros proveedores.
---

El correo electrónico es prácticamente necesario para utilizar cualquier servicio en línea. Sin embargo, no lo recomendamos para las conversaciones de persona a persona. En vez de utilizar el correo electrónico para comunicarse con otras personas, considere utilizar un servicio de mensajería instantánea que soporte el secreto de reenvío.

[Servicios de mensajería instantánea recomendados](real-time-communication.md ""){.md-button}

Para todo lo demás, recomendamos una variedad de proveedores de correo electrónico basados en modelos sostenibles, además de características de seguridad y privacidad integradas.

- [Proveedores de Correo Electrónico Compatibles con OpenPGP :material-arrow-right-drop-circle:](#openpgp-compatible-services)
- [Otros Proveedores Encriptados :material-arrow-right-drop-circle:](#more-providers)
- [Servicios de Alias de Correo Electrónico :material-arrow-right-drop-circle:](#email-aliasing-services)
- [Opciones Autoalojadas :material-arrow-right-drop-circle:](#self-hosting-email)

## Servicios compatibles con OpenPGP

Estos proveedores soportan el encriptacion/desencriptacion OpenPGP nativamente y el estándar Web Key Directory (WKD), lo que permite que los correos electrónicos E2EE sean independientes del proveedor. Por ejemplo, un usuario de Proton Mail podría enviar un mensaje E2EE a un usuario de Mailbox.org, o podrías recibir notificaciones encriptadas con OpenPGP desde servicios de Internet que lo soporten.

<div class="grid cards" markdown>

- ![Logo Proton Mail](assets/img/email/protonmail.svg){ .twemoji } [Proton Mail](email.md#proton-mail)
- ![Logo Mailbox.org](assets/img/email/mailboxorg.svg){ .twemoji } [Mailbox.org](email.md#mailboxorg)

</div>

!!! advertencia

    Al utilizar una tecnología de encriptación E2EE como OpenPGP, los correos aún tendrán algunos metadatos que no son encriptados en el encabezado del correo. Lee más sobre los [metadatos de correo electrónico](basics/email-security.md#email-metadata-overview).
    
    OpenPGP tampoco soporta el secreto hacia Adelante, lo que significa si la clave privada de cualquiera de los destinatarios es robada, todos los mensajes encriptados previamente con ella, serán expuestos. [¿Cómo puedo proteger mis claves privadas?](basics/email-security.md#how-do-i-protect-my-private-keys)

### Proton Mail

!!! recomendación

    ![Logo Proton Mail](assets/img/email/protonmail.svg){ align=right }
    
    **Proton Mail** es un servicio de correo electrónico con un enfoque en privacidad, encriptación, seguridad, y la facilidad de uso. Han estado en operación desde **2013**. Proton AG tiene su sede en Ginebra, Suiza. Cuentas inician con 500 MB de almacenamiento en su plan gratuito.
    
    [:octicons-home-16: Página de inicio](https://proton.me/mail){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion){ .card-link title="Servicio Onion" }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="Politica de privacidad" }
    [:octicons-info-16:](https://proton.me/support/mail){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/ProtonMail){ .card-link title="Código fuente" }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonmail.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id979659905)
        - [:simple-github: GitHub](https://github.com/ProtonMail/proton-mail-android/releases)
        - [:simple-windows11: Windows](https://proton.me/mail/bridge#download)
        - [:simple-apple: macOS](https://proton.me/mail/bridge#download)
        - [:simple-linux: Linux](https://proton.me/mail/bridge#download)
        - [:octicons-browser-16: Web](https://mail.proton.me)

Las cuentas gratuitas tienen algunas limitaciones, como no poder buscar texto en el contenido, y no tener acceso a [Proton Mail Bridge](https://proton.me/mail/bridge), que es requerido para utilizar un [cliente recomendado de correo electrónico para escritorio](email-clients.md) (como Thunderbird). Cuentas pagas incluyen funciones como Proton Mail Bridge, almacenamiento adicional, y soporte para dominios personalizados. Una [carta de certificación](https://proton.me/blog/security-audit-all-proton-apps) fue proporcionada para las aplicaciones de Proton Mail el 9 de noviembre de 2021 por [Securitum](https://research.securitum.com).

Si tienes el plan Proton Unlimited, Business o Visionary, también obtendrás [SimpleLogin](#simplelogin) Premium gratis.

Proton Mail tiene informes de errores internos que **no** comparten con terceros. Puede desactivarse en: **Ajustes** > **Ir a Ajustes** > **Cuenta** > **Seguridad y privacidad** > **Enviar informes de fallos**.

#### :material-check:{ .pg-green } Dominios Personalizados y Alias

Suscriptores de pago de Proton Mail pueden utilizar su propio dominio con el servicio o una direcciones [catch-all](https://proton.me/support/catch-all). Proton Mail también soporta [subdireccionamiento](https://proton.me/support/creating-aliases), que es útil para las personas que no quieren comprar un dominio.

#### :material-check:{ .pg-green } Métodos de pago privados

Proton Mail [acepta](https://proton.me/support/payment-options) dinero en efectivo por correo, además de tarjeta de crédito/débito estándar, [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc), y pagos por PayPal.

#### :material-check:{ .pg-green } Seguridad de Cuenta

Proton Mail es compatible con TOTP [autenticación de dos factores](https://proton.me/support/two-factor-authentication-2fa) y [ llaves de seguridad de hardware](https://proton.me/support/2fa-security-key) que utilizan los estándares FIDO2 o U2F. El uso de una llave de seguridad de hardware requiere configurar primero la autenticación TOTP de dos factores.

#### :material-check:{ .pg-green } Seguridad de Datos

Proton Mail tiene [encriptacion de cero acceso](https://proton.me/blog/zero-access-encryption) en reposo para tus correos electrónicos y [calendarios](https://proton.me/news/protoncalendar-security-model). Datos asegurados con encriptación de cero-acceso son solamente accesibles por ti.

Cierta información almacenada en [Proton Contacts](https://proton.me/support/proton-contacts), como nombres y direcciones de correo electrónico, no está protegida con encriptación de cero-acceso. Los campos de contacto que admiten encriptación de cero-acceso, como los números de teléfono, se indican con un icono de candado.

#### :material-check:{ .pg-green } Encriptación de Correo Electrónico

Proton Mail ha [integrado la encriptación OpenPGP](https://proton.me/support/how-to-use-pgp) en su webmail. Los correos electrónicos a otras cuentas de Proton Mail se encriptan automáticamente, y la encriptación a direcciones que no sean de Proton Mail con una clave OpenPGP pueden ser habilitados fácilmente en la configuración de tu cuenta. También le permiten encriptar [mensajes a direcciones que no sean de Proton Mail](https://proton.me/support/password-protected-emails) sin necesidad de que se suscriban a una cuenta de Proton Mail o utilicen software como OpenPGP.

Proton Mail también soporta el descubrimiento de claves públicas a través de HTTP desde su [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). Esto permite las personas quienes no utilizan Proton Mail a encontrar fácilmente las claves OpenPGP de las cuentas de Proton Mail, para E2EE entre proveedores.


#### :material-information-outline:{ .pg-blue } Cancelación de Cuenta

Si tienes una cuenta de pago y tu factura [no esta paga](https://proton.me/support/delinquency) después de 14 días, no podrá acceder a tus datos. Transcurridos 30 días, tu cuenta se convertirá en morosa y no recibirás correo entrante. Seguirás siendo facturando durante este periodo.

#### :material-information-outline:{ .pg-blue }: Funcionalidad Adicional

Proton Mail ofrece una cuenta "Ilimitada" por €9,99 euros al mes, que también permite acceder a Proton VPN además de proporcionar múltiples cuentas, dominios, alias, y 500 GB de almacenamiento.

Proton Mail no ofrece la función de legado digital.

### Mailbox.org

!!! recomendación

    ![Logo de Mailbox.org](assets/img/email/mailboxorg.svg){ align=right }
    
    **Mailbox.org** es un servicio de correo electrónico centrado en ser seguro, sin publicidad, y alimentado de forma privada con energía 100% ecológica. Han estado en operación desde 2014. Mailbox.org tiene su sede en Berlín, Alemania. Cuentas empiezan con 2 GB de almacenamiento, que se puede ampliar según sea necesario.
    
    [:octicons-home-16: Página de inicio](https://mailbox.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://mailbox.org/en/data-protection-privacy-policy){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://kb.mailbox.org/en/private){ .card-link title=Documentación}
    
    ??? descargas
    
        - [:octicons-browser-16: Web](https://login.mailbox.org)

#### :material-check:{ .pg-green } Dominios Personalizados y Alias

Mailbox.org te permite utilizar tu propio dominio y admite las direcciones [catch-all](https://kb.mailbox.org/display/MBOKBEN/Using+catch-all+alias+with+own+domain). Mailbox.org también es compatible con [subdireccionamiento](https://kb.mailbox.org/display/BMBOKBEN/What+is+an+alias+and+how+do+I+use+it), lo que es útil si no desea comprar un dominio.

#### :material-check:{ .pg-green } Métodos Privados de Pago

Mailbox.org no acepta criptomonedas debido a que su procesador de pagos BitPay suspendió sus operaciones en Alemania. Sin embargo, aceptan Efectivo por correo, pago en efectivo a cuenta bancaria, transferencia bancaria, tarjeta de crédito, PayPal y un par de procesadores específicos alemanes: paydirekt y Sofortüberweisung.

#### :material-check:{ .pg-green } Seguridad de Cuenta

Mailbox.org soporta [autenticación de doble factor](https://kb.mailbox.org/display/MBOKBEN/How+to+use+two-factor+authentication+-+2FA) solo para su correo web. Puedes utilizar TOTP o una [Yubikey](https://en.wikipedia.org/wiki/YubiKey) a través de [Yubicloud](https://www.yubico.com/products/services-software/yubicloud). Estándares web como [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) aún no son soportados.

#### :material-information-outline:{ .pg-blue } Seguridad de Datos

Mailbox.org permite encriptación del correo entrante usando su [buzón encriptado](https://kb.mailbox.org/display/MBOKBEN/The+Encrypted+Mailbox). Nuevos mensajes que recibas se encriptaran inmediatamente con tu clave pública.

Sin embargo, [Open-Exchange](https://en.wikipedia.org/wiki/Open-Xchange), la plataforma de software utilizada por Mailbox.org, [no soporta](https://kb.mailbox.org/display/BMBOKBEN/Encryption+of+calendar+and+address+book) el cifrado de tu libreta de direcciones y calendario. Una [opción independiente](calendar.md) puede ser más apropiada para esa información.

#### :material-check:{ .pg-green } Encriptación de Correo Electrónico

Mailbox.org tiene [encriptación integrada](https://kb.mailbox.org/display/MBOKBEN/Send+encrypted+e-mails+with+Guard) en su correo web, lo que simplifica el envío de mensajes a personas con claves públicas OpenPGP. También permiten que [destinatarios remotos desencripten un correo electrónico](https://kb.mailbox.org/display/MBOKBEN/My+recipient+does+not+use+PGP) en los servidores de Mailbox.org. Esta característica es útil cuando el destinatario remoto no tiene OpenPGP y no puede descifrar una copia del correo electrónico en su propio buzón de correo.

Mailbox.org también admite el descubrimiento de claves públicas a través de HTTP desde su [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). Esto permite que personas afuera de Mailbox.org encuentren fácilmente las claves OpenPGP de las cuentas de Mailbox.org, para E2EE entre proveedores.

#### :material-information-outline:{ .pg-blue } Cancelación de Cuenta

Tu cuenta se convertirá en una cuenta de usuario restringida cuando finalice tu contrato, después de [30 días se eliminará irrevocablemente](https://kb.mailbox.org/en/private/payment-article/what-happens-at-the-end-of-my-contract).

#### :material-information-outline:{ .pg-blue } Funcionalidad Adicional

Puedes acceder a tu cuenta de Mailbox.org a través de IMAP/SMTP utilizando su [servicio .onion](https://kb.mailbox.org/display/MBOKBEN/The+Tor+exit+node+of+mailbox.org). Sin embargo, no se puede acceder a su interfaz de correo web a través de su servicio .onion y es posible que se produzcan errores de certificado TLS.

Todas las cuentas vienen con un almacenamiento limitado en la nube que [puede ser encriptado](https://kb.mailbox.org/display/MBOKBEN/Encrypt+files+on+your+Drive). Mailbox.org también ofrece el alias [@secure.mailbox.org](https://kb.mailbox.org/display/MBOKBEN/Ensuring+E-Mails+are+Sent+Securely), que impone el cifrado TLS en la conexión entre servidores de correo; de lo contrario, el mensaje no se enviará en absoluto. Mailbox.org también admite [Exchange ActiveSync](https://en.wikipedia.org/wiki/Exchange_ActiveSync) además de protocolos de acceso estándar como IMAP y POP3.

Mailbox.org tiene una función de legado digital para todos los planes. Puedes elegir si deseas que alguno de tus datos se transmita a los herederos, siempre que lo soliciten y aporten tu testamento. Alternativamente, puedes designar a una persona por su nombre y dirección.

## Más Proveedores

Estos proveedores almacenan tus correos electrónicos con cifrado de cero-conocimiento, lo que los convierte en excelentes opciones para mantener seguros tus correos electrónicos almacenados. Sin embargo, no admiten normas de cifrado inter operables para las comunicaciones E2EE entre proveedores.

<div class="grid cards" markdown>

- ![Logotipo de StartMail](assets/img/email/startmail.svg#only-light){ .twemoji }![Logotipo de StartMail](assets/img/email/startmail-dark.svg#only-dark){ .twemoji } [StartMail](email.md#startmail)
- ![Logotipo de Tutanota](assets/img/email/tutanota.svg){ .twemoji } [Tutanota](email.md#tutanota)

</div>

### StartMail

!!! recomendación

    ![Logotipo de StartMail](assets/img/email/startmail.svg#only-light){ align=right }
    ![Logotipo de StartMail](assets/img/email/startmail-dark.svg#only-dark){ align=right }
    
    **StartMail** es un servicio de correo electrónico centrado en la seguridad y la privacidad mediante el uso del cifrado estándar OpenPGP. StartMail ha estado en operación desde 2014 y tiene su sede en Boulevard 11, Zeist Países Bajos. Cuentas empiezan con 10GB. Ofrecen una prueba de 30 días.
    
    [:octicons-home-16: Página de inicio](https://www.startmail.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startmail.com/en/privacy/){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://support.startmail.com){ .card-link title=Documentación}
    
    ??? descargas
    
        - [:octicons-browser-16: Web](https://mail.startmail.com/login)

#### :material-check:{ .pg-green } Dominios Personalizados y Alias

Cuentas personales pueden utilizar alias[ personalizados o rápidos](https://support.startmail.com/hc/en-us/articles/360007297457-Aliases). [Dominios personalizados](https://support.startmail.com/hc/en-us/articles/4403911432209-Setup-a-custom-domain) también están disponibles.

#### :material-alert-outline:{ .pg-orange } Métodos Privados de Pago

StartMail acepta Visa, MasterCard, American Express y Paypal. StartMail también dispone de otras[opciones de pago](https://support.startmail.com/hc/en-us/articles/360006620637-Payment-methods) como [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc) (actualmente sólo para cuentas Personales) y Débito Directo SEPA para cuentas de más de un año.

#### :material-check:{ .pg-green } Seguridad de Cuenta

StartMail soporta la autenticación de doble factor TOTP [para webmail solamente](https://support.startmail.com/hc/en-us/articles/360006682158-Two-factor-authentication-2FA). No permiten la autenticación con llave de seguridad U2F.

#### :material-information-outline:{ .pg-blue } Seguridad de Datos

StartMail dispone de [encriptación de cero acceso en reposo](https://www.startmail.com/en/whitepaper/#_Toc458527835), utilizando su sistema de "bóveda de usuario". Cuando ingresas, se abre la bóveda y el correo electrónico se traslada a la bóveda fuera de la cola, donde se desencripta con la clave privada correspondiente.

StartMail admite la importación de [contactos](https://support.startmail.com/hc/en-us/articles/360006495557-Import-contacts), sin embargo, solo se puede acceder a ellos en el correo web y no a través de protocolos como [CalDAV](https://en.wikipedia.org/wiki/CalDAV). Los contactos tampoco se almacenan utilizando el cifrado de conocimiento cero.

#### :material-check:{ .pg-green } Cifrado de correo electrónico

StartMail tiene [cifrado integrado](https://support.startmail.com/hc/en-us/sections/360001889078-Encryption) en su correo web, lo que simplifica el envío de mensajes cifrados con claves públicas OpenPGP. Sin embargo, no son compatibles con el estándar Web Key Directory, lo que hace que el descubrimiento de la clave pública de un buzón de correo Startmail sea más difícil para otros proveedores de correo electrónico o clientes.

#### :material-information-outline:{ .pg-blue } Cancelación de la cuenta

Al vencimiento de la cuenta, StartMail eliminará permanentemente su cuenta después de [6 meses en 3 fases](https://support.startmail.com/hc/en-us/articles/360006794398-Account-expiration).

#### :material-information-outline:{ .pg-blue } Funciones adicionales

StartMail permite el proxy de imágenes dentro de los correos electrónicos. Si permite que se cargue la imagen remota, el remitente no sabrá cuál es su dirección IP.

StartMail no ofrece una función de legado digital.

### Tutanota

!!! recomendación

    ![Logo de Tutanota](assets/img/email/tutanota.svg){ align=right }
    
    **Tutanota** es un servicio de correo electrónico centrado en la seguridad y la privacidad mediante el uso de cifrado. Tutanota lleva en funcionamiento desde **2011** y tiene su sede en Hannover, Alemania. Las cuentas empiezan con 1Gb de almacenamiento con su plan gratuito.
    
    [:octicons-home-16: Página Principal](https://tutanota.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tutanota.com/privacy){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://tutanota.com/faq){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/tutao/tutanota){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://tutanota.com/community/){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.tutao.tutanota)
        - [:simple-appstore: App Store](https://apps.apple.com/app/tutanota/id922429609)
        - [:simple-github: GitHub](https://github.com/tutao/tutanota/releases)
        - [:simple-windows11: Windows](https://tutanota.com/#download)
        - [:simple-apple: macOS](https://tutanota.com/#download)
        - [:simple-linux: Linux](https://tutanota.com/#download)
        - [:octicons-browser-16: Web](https://mail.tutanota.com/)

Tutanota no es compatible con el[protocolo IMAP](https://tutanota.com/faq/#imap) ni con el uso de[clientes de correo electrónico](email-clients.md)de terceros, y tampoco podrás añadir [cuentas de correo electrónico externas](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) a la aplicación Tutanota. Ni [importación de correo electrónico](https://github.com/tutao/tutanota/issues/630) ni [subcarpetas](https://github.com/tutao/tutanota/issues/927) son actualmente compatibles, aunque esto [está previsto que se cambie](https://tutanota.com/blog/posts/kickoff-import). Los correos electrónicos se pueden exportar [individualmente o por selección masiva](https://tutanota.com/howto#generalMail) por carpeta, lo que puede resultar incómodo si tiene muchas carpetas.

#### :material-check:{ .pg-green } Dominios personalizados y alias

Las cuentas de pago de Tutanota pueden usar hasta 5 [alias](https://tutanota.com/faq#alias) y [dominios personalizados](https://tutanota.com/faq#custom-domain). Tutanota no permite la [subdirección (más direcciones)](https://tutanota.com/faq#plus), pero puede utilizar un [catch-all](https://tutanota.com/howto#settings-global) con un dominio personalizado.

#### :material-information-outline:{ .pg-blue } Métodos de pago privados

Tutanota solo acepta directamente tarjetas de crédito y PayPal, sin embargo, la [criptomoneda](cryptocurrency.md) se puede usar para comprar tarjetas de regalo a través de su [asociación](https://tutanota.com/faq/#cryptocurrency) con Proxystore.

#### :material-check:{ .pg-green } Seguridad de las cuentas

Tutanota soporta [autenticación de dosble factor](https://tutanota.com/faq#2fa) con TOTP o U2F.

#### :material-check:{ .pg-green } Seguridad de los datos

Tutanota dispone de [cifrado de acceso cero en reposo](https://tutanota.com/faq#what-encrypted) para sus correos electrónicos, [contactos de la libreta de direcciones](https://tutanota.com/faq#encrypted-address-book), y [calendarios](https://tutanota.com/faq#calendar). Esto significa que sólo tú puedes leer los mensajes y otros datos almacenados en tu cuenta.

#### :material-information-outline:{ .pg-blue } Cifrado de correo electrónico

Tutanota [no utiliza OpenPGP](https://www.tutanota.com/faq/#pgp). Las cuentas de Tutanota sólo pueden recibir correos electrónicos cifrados de cuentas de correo electrónico que no son de tutanota cuando se envían a través de un [buzón temporal de Tutanota](https://www.tutanota.com/howto/#encrypted-email-external).

#### :material-information-outline:{ .pg-blue } Cancelación de la cuenta

Tutanota eliminará [las cuentas gratuitas inactivas](https://tutanota.com/faq#inactive-accounts) después de seis meses. Puedes reutilizar una cuenta gratuita desactivada si pagas.

#### :material-information-outline:{ .pg-blue } Funciones adicionales

Tutanota ofrece la versión empresarial [a las organizaciones sin ánimo de lucro](https://tutanota.com/blog/posts/secure-email-for-non-profit) de forma gratuita o con un importante descuento.

Tutanota también tiene una función para empresas llamada [Secure Connect](https://tutanota.com/secure-connect/). Esto garantiza que el contacto del cliente con la empresa utilice E2EE. La función cuesta 240 €/año.

Tutanota no ofrece la función de legado digital.

## Servicios de alias de correo

Un servicio de alias de correo electrónico le permite generar fácilmente una nueva dirección de correo electrónico para cada sitio web en el que se registre. Los alias de correo electrónico que genera se reenvían a una dirección de correo electrónico de su elección, ocultando tanto su dirección de correo electrónico "principal" como la identidad de su proveedor de correo electrónico. El verdadero alias de correo electrónico es mejor que el direccionamiento plus, comúnmente utilizado y admitido por muchos proveedores, que permite crear alias como tunombre+[anythinghere]@ejemplo.com, porque los sitios web, los anunciantes y las redes de seguimiento pueden eliminar trivialmente cualquier cosa después del signo + para conocer tu verdadera dirección de correo electrónico.

<div class="grid cards" markdown>

- ![Logo de AnonAddy](assets/img/email/anonaddy.svg#only-light){ .twemoji }![Logo deAnonAddy](assets/img/email/anonaddy-dark.svg#only-dark){ .twemoji } [AnonAddy](email.md#anonaddy)
- ![Logo de SimpleLogin](assets/img/email/simplelogin.svg){ .twemoji } [SimpleLogin](email.md#simplelogin)

</div>

El alias de correo electrónico puede servir de salvaguarda en caso de que su proveedor de correo electrónico deje de funcionar. En ese caso, puedes redirigir fácilmente tus alias a una nueva dirección de correo electrónico. A su vez, sin embargo, estás depositando tu confianza en que el servicio de alias siga funcionando.

Utilizar un servicio dedicado de alias de correo electrónico también tiene una serie de ventajas sobre un alias general en un dominio personalizado:

- Los alias pueden activarse y desactivarse individualmente cuando los necesites, evitando que los sitios web te envíen correos electrónicos al azar.
- Las respuestas se envían desde la dirección de alias, ocultando tu dirección de correo electrónico real.

También tienen una serie de ventajas sobre los servicios de "correo electrónico temporal":

- Los alias son permanentes y pueden volver a activarse si necesitas recibir algo como un restablecimiento de contraseña.
- Los correos electrónicos se envían a tu buzón de confianza en lugar de ser almacenados por el proveedor de alias.
- Los servicios de correo electrónico temporal suelen tener buzones públicos a los que puede acceder cualquiera que conozca la dirección, los alias son privados para ti.

Nuestras recomendaciones de alias de correo electrónico son proveedores que le permiten crear alias en dominios que ellos controlan, así como en su(s) propio(s) dominio(s) personalizado(s) por una módica cuota anual. También pueden ser autoalojados si desea el máximo control. Sin embargo, utilizar un dominio personalizado puede tener inconvenientes relacionados con la privacidad: Si eres la única persona que utiliza tu dominio personalizado, tus acciones pueden ser fácilmente rastreadas a través de sitios web simplemente mirando el nombre del dominio en la dirección de correo electrónico e ignorando todo lo que hay antes del signo arroba (@).

Utilizar un servicio de alias requiere confiar, tanto a tu proveedor de correo electrónico como a tu proveedor de alias, tus mensajes sin cifrar. Algunos proveedores mitigan esto ligeramente con el cifrado automático PGP, que reduce el número de partes en las que tienes que confiar de dos a una al cifrar los correos entrantes antes de que lleguen a tu proveedor de buzón final.

### AnonAddy

!!! recomendación

    ![Logo de AnonAddy](assets/img/email/anonaddy.svg#only-light){ align=right }
    ![Logo de AnonAddy](assets/img/email/anonaddy-dark.svg#only-dark){ align=right }
    
    **AnonAddy** te permite crear 20 alias de dominio en un dominio compartido de forma gratuita, o alias "estándar" ilimitados que son menos anónimos.
    
    [:octicons-home-16: Página Principal](https://anonaddy.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://anonaddy.com/privacy/){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://app.anonaddy.com/docs/){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/anonaddy){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://anonaddy.com/donate/){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-android: Android](https://anonaddy.com/faq/#is-there-an-android-app)
        - [:material-apple-ios: iOS](https://anonaddy.com/faq/#is-there-an-ios-app)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-GB/firefox/addon/anonaddy/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/anonaddy-anonymous-email/iadbdpnoknmbdeolbapdackdcogdmjpe)

El número de alias compartidos (que terminan en un dominio compartido como @anonaddy.me) que puedes crear está limitado a 20 en el plan gratuito de AnonAddy y a 50 en su plan de 12 $/año. Puedes crear un número ilimitado de alias estándar (que terminan en un dominio como @[username].anonaddy.com o un dominio personalizado en los planes de pago), sin embargo, como se ha mencionado anteriormente, esto puede ir en detrimento de la privacidad porque la gente puede relacionar trivialmente tus alias estándar basándose únicamente en el nombre de dominio. Hay disponibles alias compartidos ilimitados por 36 $/año.

Funciones gratuitas destacables:

- [x] 20 Alias compartidos
- [x] Alias estándar ilimitados
- [ ] No hay respuestas salientes
- [x] 2 Buzones de destinatarios
- [x] Cifrado PGP automático

### SimpleLogin

!!! recomendación

    ![Logo de Simplelogin](assets/img/email/simplelogin.svg){ align=right }
    
    **SimpleLogin** es un servicio gratuito que proporciona alias de correo electrónico en una variedad de nombres de dominio compartidos, y opcionalmente proporciona características de pago como alias ilimitados y dominios personalizados.
    
    [:octicons-home-16: Página Principal](https://simplelogin.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://simplelogin.io/privacy/){ .card-link title="Politica de Privacidad" }
    [:octicons-info-16:](https://simplelogin.io/docs/){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/simple-login){ .card-link title="Código Fuente" }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.simplelogin.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1494359858)
        - [:simple-github: GitHub](https://github.com/simple-login/Simple-Login-Android/releases)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/simplelogin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/dphilobhebphkdjbpfohgikllaljmgbn)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/simpleloginreceive-sen/diacfpipniklenphgljfkmhinphjlfff)
        - [:simple-safari: Safari](https://apps.apple.com/app/id1494051017)

SimpleLogin fue [adquirida por Proton AG](https://proton.me/news/proton-and-simplelogin-join-forces) a partir del 8 de abril de 2022. Si utiliza Proton Mail para su buzón principal, SimpleLogin es una gran elección. Como ambos productos pertenecen ahora a la misma empresa, ahora sólo tiene que confiar en una única entidad. También esperamos que SimpleLogin se integre más estrechamente con las ofertas de Proton en el futuro. SimpleLogin sigue siendo compatible con el reenvío a cualquier proveedor de correo electrónico de su elección. Securitum [auditado](https://simplelogin.io/blog/security-audit/) SimpleLogin a principios de 2022 y todos los problemas [fueron resueltos](https://simplelogin.io/audit2022/web.pdf).

Puedes vincular tu cuenta SimpleLogin en la configuración con tu cuenta Proton. Si tienes el plan Proton Unlimited, Business o Visionary, tendrás SimpleLogin Premium gratis.

Funciones gratuitas destacables:

- [x] 10 Alias compartidos
- [x] Respuestas ilimitadas
- [x] 1 buzón de destinatario

## Correo de auto-alojamiento

Los administradores de sistemas avanzados pueden plantearse crear su propio servidor de correo electrónico. Los servidores de correo requieren atención y un mantenimiento continuo para mantener la seguridad y la fiabilidad de la entrega del correo.

### Soluciones de software combinadas

!!! recomendación

    ![Logo de Mailcow](assets/img/email/mailcow.svg){ align=right }
    
    **Mailcow** es un servidor de correo más avanzado perfecto para aquellos con un poco más de experiencia en Linux. Tiene todo lo que necesitas en un contenedor Docker: Un servidor de correo con soporte DKIM, antivirus, monitorización de spam, webmail, ActiveSync con SOGo y administración basada en web con soporte 2FA.
    
    [:octicons-home-16: Página Principal](https://mailcow.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailcow.github.io/mailcow-dockerized-docs/){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/mailcow/mailcow-dockerized){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://www.servercow.de/mailcow?lang=en#sal){ .card-link title=Contribuir }

!!! recomendación

    ![Logo de Mail-in-a-Box](assets/img/email/mail-in-a-box.svg){ align=right }
    
    **Mail-in-a-Box** es un script de configuración automatizada para desplegar un servidor de correo en Ubuntu. Su objetivo es facilitar a los usuarios la instalación de su propio servidor de correo.
    
    [:octicons-home-16: Página Principal](https://mailinabox.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailinabox.email/guide.html){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/mail-in-a-box/mailinabox){ .card-link title="Código Fuente" }

Para un enfoque más manual, hemos seleccionado estos dos artículos:

- [Configuración de un servidor de correo con OpenSMTPD, Dovecot y Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd/) (2019)
- [Cómo gestionar tu propio servidor de correo](https://www.c0ffee.net/blog/mail-server-guide/) (agosto de 2017)

## Criterios

**Tenga en cuenta que no estamos afiliados a ninguno de los proveedores que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos para cualquier proveedor de Email que desee ser recomendado, incluyendo la implementación de las mejores prácticas de la industria, tecnología moderna y más. Le sugerimos que se familiarice con esta lista antes de elegir un proveedor de correo electrónico, y que realice su propia investigación para asegurarse de que el proveedor de correo electrónico que elija sea la opción adecuada para usted.

### Tecnología

Consideramos que estas características son importantes para ofrecer un servicio seguro y óptimo. Debe considerar si el proveedor tiene las características que necesita.

**Mínimo para calificar:**

- Cifra los datos de las cuentas de correo electrónico en reposo con cifrado de acceso cero.
- Capacidad de exportación como [Mbox](https://en.wikipedia.org/wiki/Mbox) o .eml individual con [RFC5322](https://datatracker.ietf.org/doc/rfc5322/) estándar.
- Permitir a los usuarios utilizar su propio [nombre de dominio](https://en.wikipedia.org/wiki/Domain_name). Los nombres de dominio personalizados son importantes para los usuarios porque les permiten mantener su agencia del servicio, en caso de que éste se estropee o sea adquirido por otra empresa que no dé prioridad a la privacidad.
- Operaciones en infraestructura propia, es decir, no construidas sobre proveedores de servicios de correo electrónico de terceros.

**Mejor caso:**

- Cifra todos los datos de la cuenta (contactos, calendarios, etc.) en reposo con cifrado de acceso cero.
- Cifrado integrado de correo web E2EE/PGP proporcionado como una conveniencia.
- Compatibilidad con [WKD](https://wiki.gnupg.org/WKD) para permitir un mejor descubrimiento de claves OpenPGP públicas a través de HTTP. Los usuarios de GnuPG pueden obtener una clave escribiendo: `gpg --locate-key usuario_ejemplo@ejemplo.com`
- Soporte para un buzón temporal para usuarios externos. Esto es útil cuando quieres enviar un correo electrónico encriptado, sin enviar una copia real a tu destinatario. Estos correos electrónicos suelen tener una vida útil limitada y luego se eliminan automáticamente. Tampoco requieren que el destinatario configure ninguna criptografía como OpenPGP.
- Disponibilidad de los servicios del proveedor de correo electrónico a través de un [ servicio onion](https://en.wikipedia.org/wiki/.onion).
- Soporte de [subdireccionamiento](https://en.wikipedia.org/wiki/Email_address#Subaddressing).
- Funcionalidad Catch-all o alias para aquellos que poseen sus propios dominios.
- Utilización de protocolos estándar de acceso al correo electrónico como IMAP, SMTP o [JMAP](https://en.wikipedia.org/wiki/JSON_Meta_Application_Protocol). Los protocolos de acceso estándar garantizan que los clientes puedan descargar fácilmente todo su correo electrónico en caso de que quieran cambiar de proveedor.

### Privacidad

Preferimos que nuestros proveedores recomendados recojan la menor cantidad de datos posible.

**Mínimo para calificar:**

- Proteger la dirección IP del remitente. Filtrarlo para que no aparezca en el campo de cabecera `Recibido`.
- No requiera información personal identificable (PII) aparte de un nombre de usuario y una contraseña.
- Política de privacidad que cumple los requisitos definidos por el GDPR
- No debe estar alojado en los Estados Unidos debido a [ECPA](https://en.wikipedia.org/wiki/Electronic_Communications_Privacy_Act#Criticism) que aún tiene [que ser reformado](https://epic.org/ecpa/).

**Mejor caso:**

- Acepte [opciones de pago anónimas](advanced/payments.md) ([criptomonedas](cryptocurrency.md), efectivo, tarjetas regalo, etc.)

### Seguridad

Los servidores de correo electrónico manejan muchos datos sensibles. Esperamos que los proveedores adopten las mejores prácticas de la industria para proteger a sus miembros.

**Mínimo para calificar:**

- Protección del correo web con 2FA, como TOTP.
- Cifrado de acceso cero, basado en el cifrado en reposo. El proveedor no disponga de las claves de descifrado de los datos que posee. Esto evita que un empleado deshonesto filtre datos a los que tiene acceso o que un adversario remoto divulgue datos que ha robado al obtener acceso no autorizado al servidor.
- Compatible con [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions).
- No haya errores o vulnerabilidades TLS cuando se perfilan con herramientas como [Hardenize](https://www.hardenize.com/), [testssl.sh](https://testssl.sh/)o [Qualys SSL Labs](https://www.ssllabs.com/ssltest); esto incluye errores relacionados con el certificado y parámetros DH débiles, como los que llevaron a [Logjam](https://en.wikipedia.org/wiki/Logjam_(computer_security)).
- Una preferencia de suite de servidor (opcional en TLSv1.3) para suites de cifrado potentes que soporten forward secrecy y encriptación autenticada.
- Una política válida [MTA-STS](https://tools.ietf.org/html/rfc8461) y [TLS-RPT](https://tools.ietf.org/html/rfc8460).
- Registros válidos de [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities).
- Registros válidos [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) y [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail).
- Tenga un registro y una política adecuados de [DMARC](https://en.wikipedia.org/wiki/DMARC) o use [ARC](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) para la autenticación. Si se utiliza la autenticación DMARC, la política debe establecerse en `rechazar` o `cuarentena`.
- Una preferencia de conjunto de servidores de TLS 1.2 o posterior y un plan para [RFC8996](https://datatracker.ietf.org/doc/rfc8996/).
- [Envío de SMTPS](https://en.wikipedia.org/wiki/SMTPS), suponiendo que se utiliza SMTP.
- Estándares de seguridad del sitio web tales como:
    - [Seguridad de transporte estricta HTTP](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
    - [Integridad de subrecurso](https://en.wikipedia.org/wiki/Subresource_Integrity) si se cargan cosas desde dominios externos.
- Debe admitir la visualización de [Encabezados de mensaje](https://en.wikipedia.org/wiki/Email#Message_header), ya que es una característica forense crucial para determinar si un correo electrónico es un intento de phishing.

**Mejor caso:**

- Soporte para autenticación de hardware, ej. U2F y [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn). U2F y WebAuthn son más seguros ya que utilizan una clave privada almacenada en un dispositivo de hardware del lado del cliente para autenticar a las personas, a diferencia de un secreto compartido que se almacena en el servidor web y en el lado del cliente cuando se utiliza TOTP. Además, U2F y WebAuthn son más resistentes al phishing ya que su respuesta de autenticación se basa en el [nombre de dominio](https://en.wikipedia.org/wiki/Domain_name) autenticado.
- [Registro de recursos de autorización de autoridad de certificación (CAA) de DNS](https://tools.ietf.org/html/rfc6844) además del soporte de DANE.
- Implementación de la [cadena recibida autenticada (ARC)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain), esto es útil para las personas que publican en listas de correo [RFC8617](https://tools.ietf.org/html/rfc8617).
- Programas de recompensa de errores y/o un proceso coordinado de divulgación de vulnerabilidades.
- Estándares de seguridad del sitio web tales como:
    - [Política de seguridad de contenido (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy)
    - [RFC9163 Expect-CT](https://datatracker.ietf.org/doc/rfc9163/)

### Confianza

No confiarías tus finanzas a alguien con una identidad falsa, así que ¿por qué confiarle tus datos de Internet? Exigimos a nuestros proveedores recomendados que hagan pública su propiedad o liderazgo. También nos gustaría ver informes de transparencia frecuentes, especialmente en lo que se refiere a cómo se gestionan las solicitudes del gobierno.

**Mínimo para calificar:**

- Liderazgo o propiedad de cara al público.

**Mejor caso:**

- Liderazgo de cara al público.
- Informes de transparencia frecuentes.

### Marketing

Con los proveedores de correo electrónico que recomendamos nos gusta ver el marketing responsable.

**Mejor caso:**

- Debe tener análisis propios (no Google Analytics, etc.). El sitio del proveedor también debe cumplir con [DNT (Do Not Track, sin rastreo)](https://en.wikipedia.org/wiki/Do_Not_Track) para las personas que deseen darse de baja.

No debe tener ningún tipo de marketing que sea irresponsable:

- Reclamaciones de "cifrado irrompible" El cifrado debe usarse con la intención de que no sea secreto en el futuro cuando exista la tecnología para descifrarlo.
- Garantizar la protección del anonimato al 100%. Cuando alguien afirma que algo es 100% significa que no hay certeza de fracaso. Sabemos que la gente puede desanonimizarse fácilmente de varias maneras, por ejemplo:

- Reutilizar información personal, por ejemplo (cuentas de correo electrónico, seudónimos únicos, etc.) a la que accedieron sin software de anonimato (Tor, VPN, etc.)
- [Browser fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)

**Mejor Caso:**

- Documentación clara y fácil de leer. Esto incluye cosas como configurar 2FA, clientes de correo electrónico, OpenPGP, etc.

### Funcionalidades adicionales

Aunque no son exactamente requisitos, hay algunos otros factores de conveniencia o privacidad que hemos analizado para determinar qué proveedores recomendar.

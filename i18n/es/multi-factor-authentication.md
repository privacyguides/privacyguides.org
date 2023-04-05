---
title: "Autenticadores de Múltiples Factores"
icon: 'material/two-factor-authentication'
description: Estas herramientas le ayudan a proteger sus cuentas de Internet con la autenticación multifactor sin enviar sus secretos a terceros.
---

## Llaves de Seguridad

### YubiKey

!!! recomendación

    ![YubiKeys](assets/img/multi-factor-authentication/yubikey.png)
    
    Las **YubiKeys** están entre las llaves de seguridad más populares. Algunos modelos de YubiKey tienen un gran rango de caracteristicas como: [2ndo Factor Universal (U2F)](https://en.wikipedia.org/wiki/Universal_2nd_Factor), [FIDO2 WebAuthn](https://es.wikipedia.org/wiki/WebAuthn), [Yubico OTP](https://developers.yubico.com/OTP/), [PIV](https://en.wikipedia.org/wiki/FIPS_201), [OpenPGP](https://developers.yubico.com/PGP/) y autenticación [TOTP and HOTP](https://developers.yubico.com/OATH/).
    
    Una de las ventajas de la YubiKey es que una llave puede hacer casi todo (YubiKey 5) lo que se podría esperar de una llave de seguridad. Le animamos a que realice el [quiz](https://www.yubico.com/quiz/) antes de comprarla para asegurarse de que su elección es la correcta.
    
    [:octicons-home-16: Página Principal](https://www.yubico.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.yubico.com/support/terms-conditions/privacy-notice){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://docs.yubico.com/){ .card-link title=Documentación}

La [tabla de comparación](https://www.yubico.com/store/compare/) muestra las características y cómo se comparan las YubiKeys. Le recomendamos que seleccione las llaves de las YubiKey 5 Series.

Las YubiKeys se pueden programar utilizando [YubiKey Manager](https://www.yubico.com/support/download/yubikey-manager/) o [YubiKey Personalization Tools](https://www.yubico.com/support/download/yubikey-personalization-tools/). Para gestionar los códigos TOTP, puede utilizar [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/). Todos los clientes de Yubico son de código abierto.

Para los modelos que soportan HOTP y TOTP, hay 2 ranuras en la interfaz OTP que pueden utilizarse para HOTP y 32 ranuras para almacenar secretos TOTP. Estos secretos se almacenan cifrados en la llave y nunca se exponen a los dispositivos a los que se conectan. Una vez que se ha proporcionado una semilla (secreto compartido) a Yubico Authenticator, éste sólo proporcionará los códigos de seis dígitos, pero nunca la semilla. Este modelo de seguridad ayuda a limitar lo que un atacante puede hacer si compromete uno de los dispositivos que ejecutan Yubico Authenticator y hace que la YubiKey sea resistente a un atacante físico.

!!! advertencia
    El firmware de YubiKey no es de código abierto y no es actualizable. Si desea características en versiones de firmware más nuevas, o si hay una vulnerabilidad en la versión de firmware que está utilizando, tendría que comprar una nueva llave.

### Nitrokey

!!! recomendación

    ![Nitrokey](assets/img/multi-factor-authentication/nitrokey.jpg){ align=right }
    
    **Nitrokey** tiene una clave de seguridad capaz de [FIDO2 y WebAuthn](basics/multi-factor-authentication.md#fido-fast-identity-online) llamada **Nitrokey FIDO2**. Para obtener compatibilidad con PGP, deberá adquirir una de sus otras llaves, como la **Nitrokey Start**, la **Nitrokey Pro 2** o la **Nitrokey Storage 2**.
    
    [:octicons-home-16: Página Principal](https://www.nitrokey.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.nitrokey.com/data-privacy-policy){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://docs.nitrokey.com/){ .card-link title=Documentación}

La [tabla de comparación](https://www.nitrokey.com/#comparison) muestra las características y cómo se comparan los modelos de las Nitrokey. La **Nitrokey 3** listada tendrá un conjunto de características combinadas.

Los modelos de Nitrokey se pueden configurar usando la [aplicación de Nitrokey](https://www.nitrokey.com/download).

Para los modelos que admiten HOTP y TOTP, hay 3 ranuras para HOTP y 15 para TOTP. Algunas Nitrokeys pueden actuar como administrador de contraseñas. Pueden almacenar 16 credenciales diferentes y cifrarlas utilizando la misma contraseña que la interfaz OpenPGP.

!!! advertencia

    Aunque las Nitrokeys no revelan los secretos HOTP/TOTP al dispositivo al que están conectadas, el almacenamiento HOTP y TOTP **no** está cifrado y es vulnerable a ataques físicos. Si desea almacenar con HOTP o TOTP estos secretos, le recomendamos encarecidamente que utilice un Yubikey en su lugar.

!!! advertencia

    El restablecimiento de la interfaz OpenPGP en una Nitrokey también hará la base de datos de contraseñas [inaccessible](https://docs.nitrokey.com/pro/linux/factory-reset).

La Nitrokey Pro 2, la Nitrokey Storage 2 y la próxima Nitrokey 3 admiten la verificación de la integridad del sistema para portátiles con el firmware [Coreboot](https://www.coreboot.org/) + [Heads](https://osresearch.net/).

El firmware de Nitrokey es de código abierto, a diferencia del de YubiKey. El firmware de los modelos NitroKey modernos (excepto el de la **NitroKey Pro 2**) se puede actualizar.

### Criterios

**Por favor, tenga en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos que nos permiten ofrecer recomendaciones objetivas. Sugerimos que usted se familiarice con esta lista, antes de decidir utilizar un proyecto y realizar su propia investigación para asegurarse de que es la elección ideal para usted.

!!! ejemplo "Esta sección es nueva"

    Estamos trabajando en establecer criterios definidos para cada sección de nuestra página, y esto puede estar sujeto a cambios. Si tiene alguna duda sobre nuestros criterios, por favor [pregunte en nuestro foro](https://discuss.privacyguides.net/latest) y no asuma que no hemos tenido en cuenta algo a la hora de hacer nuestras recomendaciones si no aparece aquí. Son muchos los factores que se tienen en cuenta y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

#### Requisitos Mínimos

- Debe utilizar módulos de seguridad de hardware de alta calidad y resistentes a la manipulación.
- Debe ser compatible con la última especificación FIDO2.
- No debe permitir la extracción de claves privadas.
- Los dispositivos que cuesten más de 35$ deben soportar el manejo de OpenPGP y S/MIME.

#### Mejor Caso

Nuestro criterio del mejor caso representa lo que nos gustaría ver del proyecto perfecto en esta categoría. Es posible que nuestras recomendaciones no incluyan todas o algunas de estas funciones, pero las que sí las incluyan pueden estar mejor clasificadas que otras en esta página.

- Debe estar disponible en formato USB-C.
- Debe estar disponible con NFC.
- Debe soportar el almacenamiento de secretos TOTP.
- Debe soportar actualizaciones seguras de firmware.

## Aplicaciones de Autenticación

Las Aplicaciones de Autenticación implementan un estándar de seguridad adoptado por el Grupo de Trabajo de Ingeniería de Internet (IETF) llamado **Contraseñas de un solo uso basadas en el tiempo** o **TOTP**. Se trata de un método en el que los sitios web comparten un secreto con usted que es utilizado por su aplicación de autenticación para generar un código de seis dígitos (normalmente) basado en la hora actual, que introduce al iniciar sesión para que el sitio web lo compruebe. Normalmente, estos códigos se regeneran cada 30 segundos, y una vez que se genera uno nuevo, el anterior queda inutilizado. Incluso si un pirata informático consigue un código de seis dígitos, no hay forma de que invierta ese código para obtener el secreto original ni de que pueda predecir cuáles serán los códigos futuros.

Recomendamos encarecidamente que utilice aplicaciones TOTP para móviles en lugar de alternativas de escritorio, ya que Android e iOS tienen mejor seguridad y aislamiento de aplicaciones que la mayoría de los sistemas operativos de escritorio.

### Aegis Authenticator (Android)

!!! recomendación

    ![Aegis logo](assets/img/multi-factor-authentication/aegis.png){ align=right }
    
    **Aegis Authenticator** es una aplicación gratuita, segura y de código abierto para gestionar sus tokens de verificación en 2 pasos para los servicios en línea.
    
    [:octicons-home-16: Página Principal](https://getaegis.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getaegis.app/aegis/privacy.html){ .card-link title="Política de Privacidad" }
    [:octicons-info-16:](https://github.com/beemdevelopment/Aegis/wiki){ .card-link title=Documentación}
    [:octicons-code-16:](https://github.com/beemdevelopment/Aegis){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://www.buymeacoffee.com/beemdevelopment){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
        - [:simple-github: GitHub](https://github.com/beemdevelopment/Aegis/releases)

### Raivo OTP (iOS)

!!! recomendación

    ![Raivo OTP logo](assets/img/multi-factor-authentication/raivo-otp.png){ align=right }
    
    **Raivo OTP** es un cliente de contraseñas nativo, ligero y seguro basado en tiempo (TOTP) & basado en contador (HOTP) para iOS. Raivo OTP ofrece una copia de seguridad opcional de iCloud & sync. Raivo OTP también está disponible para macOS en forma de aplicación de barra de estado, sin embargo la aplicación para Mac no funciona de forma independiente a la aplicación para iOS.
    
    [:octicons-home-16: Página Principal](https://raivo-otp.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://raivo-otp.com/privacy-policy){ .card-link title="Política de Privacidad" }
    [:octicons-code-16:](https://github.com/raivo-otp/ios-application){ .card-link title="Código Fuente" }
    [:octicons-heart-16:](https://raivo-otp.com/donate){ .card-link title=Contribuir }
    
    ??? descargas
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/raivo-otp/id1459042137)

### Criterios

**Por favor, tenga en cuenta que no estamos afiliados con ninguno de los proyectos que recomendamos.** Además de [nuestros criterios estándar](about/criteria.md), hemos desarrollado un conjunto claro de requisitos que nos permiten ofrecer recomendaciones objetivas. Sugerimos que usted se familiarice con esta lista, antes de decidir utilizar un proyecto y realizar su propia investigación para asegurarse de que es la elección ideal para usted.

!!! ejemplo "Esta sección es nueva"

    Estamos trabajando en establecer criterios definidos para cada sección de nuestra página, y esto puede estar sujeto a cambios. Si tiene alguna duda sobre nuestros criterios, por favor [pregunte en nuestro foro](https://discuss.privacyguides.net/latest) y no asuma que no hemos tenido en cuenta algo a la hora de hacer nuestras recomendaciones si no aparece aquí. Son muchos los factores que se tienen en cuenta y se debaten cuando recomendamos un proyecto, y documentar cada uno de ellos es un trabajo en curso.

- Debe ser software de código abierto.
- No debe requerir conexión a Internet.
- No debe sincronizarse con un servicio de sincronización/copia de seguridad en la nube de terceros.
    - Es aceptable el soporte de sincronización E2EE** Opcional** con herramientas nativas del sistema operativo, por ejemplo, sincronización cifrada a través de iCloud.

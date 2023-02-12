---
title: "Autenticación de múltiples factores"
icon: 'material/two-factor-authentication'
---

**La autenticación multifactorial** (**MFA**) es un mecanismo de seguridad que requiere pasos adicionales a la introducción del nombre de usuario (o correo electrónico) y la contraseña. El método más común son los códigos de tiempo limitado que puedes recibir de un SMS o una aplicación.

Normalmente, si un hacker (o adversario) es capaz de averiguar tu contraseña, entonces obtendrá acceso a la cuenta a la que pertenece esa contraseña. Una cuenta con MFA obliga al hacker a tener tanto la contraseña (algo que *conoces*) como un dispositivo de tu propiedad (algo que *tienes*), como tu teléfono.

Los métodos MFA varían en seguridad, pero se basan en la premisa de que cuanto más difícil sea para un atacante acceder a tu método MFA, mejor. Algunos ejemplos de métodos MFA (de más débil a más fuerte) incluyen SMS, códigos de correo electrónico, notificaciones push de aplicaciones, TOTP, Yubico OTP y FIDO.

## Comparación de métodos MFA

### SMS o correo electrónico MFA

Recibir códigos OTP por SMS o correo electrónico es una de las formas más débiles de asegurar tus cuentas con MFA. Obtener un código por correo electrónico o SMS se aleja de la idea de "algo que *tienes*", porque hay una gran variedad de formas en las que un hacker podría [tomar tu número de teléfono](https://es.wikipedia.org/wiki/SIM_swapping) o acceder a tu correo electrónico sin tener acceso físico a ninguno de tus dispositivos. Si una persona no autorizada obtuviera acceso a tu correo electrónico, podría utilizar ese acceso tanto para restablecer tu contraseña como para recibir el código de autenticación, lo que le daría pleno acceso a tu cuenta.

### Notificaciones push

La MFA por notificación push consiste en el envío de un mensaje a una aplicación de tu teléfono en el que se te pide que confirmes el inicio de sesión de una nueva cuenta. Este método es mucho mejor que el de los SMS o el correo electrónico, ya que un atacante normalmente no podría obtener estas notificaciones push sin tener un dispositivo ya conectado, lo que significa que tendría que comprometer uno de tus otros dispositivos primero.

Todos cometemos errores, y existe el riesgo de que aceptes el intento de inicio de sesión por accidente. Las autorizaciones de inicio de sesión mediante notificaciones push suelen enviarse a *todos* tus dispositivos a la vez, ampliando la disponibilidad del código MFA si tienes muchos dispositivos.

La seguridad de las notificaciones push MFA depende tanto de la calidad de la aplicación como del componente del servidor y de la confianza del desarrollador que la produce. La instalación de una aplicación también puede requerir que aceptes privilegios invasivos que concedan acceso a otros datos de tu dispositivo. Una aplicación individual también requiere que tengas una aplicación específica para cada servicio que puede no requerir una contraseña para abrirse, a diferencia de una buena aplicación generadora de TOTP.

### Contraseñas de un solo uso basado en tiempo (TOTP)

El TOTP es una de las formas más comunes de MFA disponibles. Cuando se configura el TOTP, generalmente se requiere escanear un [código QR](https://es.wikipedia.org/wiki/C%C3%B3digo_QR) que establece un "[secreto compartido](https://es.wikipedia.org/wiki/Secreto_compartido)" con el servicio que se pretende utilizar. El secreto compartido está asegurado dentro de los datos de la aplicación de autenticación, y a veces está protegido por una contraseña.

El código de tiempo limitado se deriva entonces del secreto compartido y de la hora actual. Como el código sólo es válido durante un corto periodo de tiempo, sin acceso al secreto compartido, un adversario no puede generar nuevos códigos.

Si tienes una llave de seguridad de hardware con soporte para TOTP (como una YubiKey con [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/)), recomendamos que almacenes tus "secretos compartidos" en el equipo. El hardware como el YubiKey se desarrolló con la intención de que el "secreto compartido" fuera difícil de extraer y copiar. Una YubiKey tampoco está conectada a Internet, a diferencia de un teléfono con una aplicación TOTP.

A diferencia de [WebAuthn](#fido-fast-identity-online), TOTP no ofrece protección contra [Phishing](https://es.wikipedia.org/wiki/Phishing) o ataques de reutilización. Si un adversario obtiene un código válido de ti, puede utilizarlo tantas veces como quiera hasta que caduque (generalmente 60 segundos).

Un adversario podría crear un sitio web para imitar un servicio oficial en un intento de engañarte para que des tu nombre de usuario, contraseña y código TOTP actual. Si el adversario utiliza esas credenciales registradas puede ser capaz de entrar en el servicio real y secuestrar la cuenta.

Aunque no es perfecto, TOTP es lo suficientemente seguro para la mayoría de la gente, y cuando las [llaves de seguridad de hardware](../multi-factor-authentication.md#hardware-security-keys) no son compatibles las [aplicaciones de autenticación](../multi-factor-authentication.md#authenticator-apps) siguen siendo una buena opción.

### Llaves de seguridad de hardware

La YubiKey almacena los datos en un chip de estado sólido resistente a las manipulaciones, al que es [imposible acceder](https://security.stackexchange.com/a/245772) de forma no destructiva sin un costoso proceso y un laboratorio forense.

Estas claves suelen ser multifuncionales y ofrecen varios métodos de autenticación. A continuación se presentan los más comunes.

#### Yubico OTP

Yubico OTP es un protocolo de autenticación típicamente implementado en llaves de seguridad de hardware. Cuando decidas utilizar Yubico OTP, la clave generará un ID público, un ID privado y una clave secreta que se cargará en el servidor Yubico OTP.

Para entrar en un sitio web, basta con tocar físicamente la clave de seguridad. La llave de seguridad emulará un teclado e imprimirá una contraseña de un solo uso en el campo de la contraseña.

El servicio enviará entonces la contraseña de un solo uso al servidor Yubico OTP para su validación. Se incrementa un contador tanto en la llave como en el servidor de validación de Yubico. La OTP sólo puede utilizarse una vez, y cuando se produce una autenticación con éxito, el contador se incrementa, lo que impide la reutilización de la OTP. Yubico proporciona un [documento detallado](https://developers.yubico.com/OTP/OTPs_Explained.html) sobre el proceso.

<figure markdown>
  ![Yubico OTP](/assets/img/multi-factor-authentication/yubico-otp.png)
</figure>

El uso de Yubico OTP tiene algunas ventajas y desventajas en comparación con TOTP.

El servidor de validación de Yubico es un servicio basado en la nube, y estás confiando en que Yubico almacena los datos de forma segura y no los perfila. El ID público asociado con Yubico OTP se reutiliza en todos los sitios web y podría ser otra vía para que terceros te perfilen. Al igual que TOTP, Yubico OTP no proporciona resistencia al phishing.

Si tu modelo de amenaza requiere que tengas diferentes identidades en diferentes sitios web, **no** utilices Yubico OTP con la misma clave de seguridad de hardware entre esos sitios web ya que el ID público es único para cada clave de seguridad.

#### FIDO (Fast IDentity Online)

[FIDO](https://en.wikipedia.org/wiki/FIDO_Alliance) incluye una serie de estándares, primero fue U2F y después [FIDO2](https://en.wikipedia.org/wiki/FIDO2_Project) el cual incluye el estándar web [WebAuthn](https://es.wikipedia.org/wiki/WebAuthn).

U2F y FIDO2 se refieren al [Protocolo Cliente-Autenticador](https://en.wikipedia.org/wiki/Client_to_Authenticator_Protocol), que es el protocolo entre la clave de seguridad y el ordenador, como un portátil o un teléfono. Complementa a WebAuthn, que es el componente utilizado para autenticarse con el sitio web (la "parte dependiente") en el que estás intentando de iniciar sesión.

WebAuthn es la forma más segura y privada de autenticación de segundo factor. Si bien la experiencia de autenticación es similar a Yubico OTP, la clave no imprime una contraseña de una sola vez y se valida con un servidor de terceros. En su lugar, utiliza [criptografía de clave pública](https://es.wikipedia.org/wiki/Criptograf%C3%Ada_asim%C3%A9trica) para la autenticación.

<figure markdown>
  ![FIDO](../assets/img/multi-factor-authentication/fido.png)
</figure>

Cuando creas una cuenta, la clave pública se envía al servicio, luego cuando inicias sesión, el servicio requerirá que "firmes" algunos datos con tu clave privada. La ventaja de esto es que el servicio no almacena nunca los datos de la contraseña, por lo que no hay nada que un adversario pueda robar.

Esta presentación habla de la historia de la autenticación de contraseñas, los tropiezos (como la reutilización de contraseñas) y el debate de los estándares FIDO2 y [WebAuthn](https://webauthn.guide).

<div class="yt-embed">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aMo4ZlWznao" title="Cómo FIDO2 y WebAuthn impiden las tomas de posesión de cuentas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

FIDO2 y WebAuthn tienen propiedades de seguridad y privacidad superiores en comparación con cualquier método MFA.

Por lo general, para los servicios web se utiliza con WebAuthn, que es una parte de las [recomendaciones W3C](https://es.wikipedia.org/wiki/World_Wide_Web_Consortium#Recomendaci%C3%B3n_de_W3C_(REC)). Utiliza la autenticación de clave pública y es más segura que los secretos compartidos utilizados en los métodos OTP y TOTP de Yubico, ya que incluye el nombre de origen (normalmente, el nombre del dominio) durante la autenticación. La certificación se proporciona para protegerte del phishing, ya que te ayuda a determinar que estás utilizando el servicio auténtico y no una copia falsa.

A diferencia de Yubico OTP, WebAuthn no utiliza ningún ID público, entonces la clave **no** es identificable a través de diferentes sitios web. Tampoco utiliza ningún servidor de nube de terceros para la autenticación. Toda la comunicación se completa entre la clave y el sitio web en el que estás iniciando sesión. FIDO también utiliza un contador que se incrementa cuando se utiliza para evitar la reutilización de la sesión y llaves clonadas.

Si un sitio web o servicio es compatible con WebAuthn para la autenticación, es muy recomendable que lo utilices sobre cualquier otra forma de MFA.

## Recomendaciones generales

Tenemos estas recomendaciones generales:

### ¿Qué método debería usar?

Al configurar tu método MFA, ten en cuenta que es tan seguro como el método de autenticación más débil que utilices. Esto significa que es importante que sólo utilices el mejor método de MFA disponible. Por ejemplo, si ya estás utilizando TOTP, deberías desactivar la MFA por correo electrónico y SMS. Si ya estás usando FIDO2/WebAuthn, no deberías usar Yubico OTP o TOTP en tu cuenta.

### Copias de seguridad

Siempre debes tener copias de seguridad de tu método MFA. Las llaves de seguridad de hardware pueden perderse, ser robadas o simplemente dejar de funcionar con el tiempo. Se recomienda tener un par de llaves de seguridad de hardware con el mismo acceso a tus cuentas en lugar de una sola.

Cuando utilices TOTP con una aplicación de autenticación, asegúrate de hacer una copia de seguridad de tus claves de recuperación o de la propia aplicación, o de copiar los "secretos compartidos" a otra instancia de la aplicación en un teléfono diferente o a un contenedor cifrado (por ejemplo, [VeraCrypt](../encryption.md#veracrypt)).

### Configuración inicial

Cuando compres una llave de seguridad, es importante que cambies las credenciales por defecto, configures la protección por contraseña de la llave y actives la confirmación táctil si tu llave es compatible con ella. Los productos como el YubiKey tienen múltiples interfaces con credenciales separadas para cada uno de ellos, por lo que debes repasar cada interfaz y configurar la protección también.

### Correo electrónico y SMS

Si tienes que utilizar el correo electrónico para MFA, asegúrate de que la propia cuenta de correo electrónico está protegida con un método MFA adecuado.

Si usas MFA de SMS, utiliza un operador que no cambie tu número de teléfono a una nueva tarjeta SIM sin acceso a la cuenta, o usa un número VoIP dedicado de un proveedor con seguridad similar para evitar un [ataque de duplicación de SIM](https://es.wikipedia.org/wiki/SIM_swapping).

[Herramientas de MFA que recomendamos](../multi-factor-authentication.md ""){.md-button}

## Más lugares para configurar MFA

Además de proteger tus inicios de sesión del sitio web, la autenticación de múltiples factores también se puede utilizar para proteger tus inicios de sesión locales, claves SSH o incluso bases de datos de contraseñas.

### Windows

Yubico tiene un [Proveedor de credenciales](https://learn.microsoft.com/es-es/windows/win32/secauthn/credential-providers-in-windows) dedicado que añade la autenticación Challenge-Response para el flujo de inicio de sesión con nombre de usuario + contraseña para las cuentas locales de Windows. Si tienes una YubiKey con soporte de autenticación Challenge-Response, echa un ojo a la [Guía de configuración de Yubico Login para Windows](https://support.yubico.com/hc/en-us/articles/360013708460-Yubico-Login-for-Windows-Configuration-Guide), que te permitirá configurar MFA en tu computadora Windows.

### macOS

macOS tiene [soporte nativo](https://support.apple.com/es-es/guide/deployment/depd0b888248/web) para la autenticación con tarjetas inteligentes (PIV). Si tienes una tarjeta inteligente o una llave de seguridad de hardware compatible con la interfaz PIV como la YubiKey, te recomendamos que sigas la documentación de tu tarjeta inteligente/vendedor de seguridad de hardware y configures la autenticación de segundo factor para tu ordenador macOS.

Yubico tiene una guía [Uso de su YubiKey como tarjeta inteligente en macOS](https://support.yubico.com/hc/en-us/articles/360016649059) que puede ayudarte a configurar tu YubiKey en macOS.

Después de configurar tu tarjeta inteligente/clave de seguridad, te recomendamos que ejecutes este comando en el Terminal:

```text
sudo defaults write /Library/Preferences/com.apple.loginwindow DisableFDEAutoLogin -bool YES
```

El comando evitará que un adversario se salte la MFA al arrancar el ordenador.

### Linux

!!! advertencia

    Si el nombre de host de tu sistema cambia (por ejemplo, debido al DHCP), no podrás iniciar sesión. Es vital que configures un nombre de host adecuado para tu ordenador antes de seguir esta guía.

El módulo `pam_u2f` en Linux puede proporcionar autenticación de dos factores para iniciar sesión en las distribuciones Linux más populares. Si tienes una llave de seguridad de hardware compatible con U2F, puedes configurar la autenticación MFA para tu inicio de sesión. Yubico tiene una guía [Guía de inicio de sesión en Ubuntu Linux - U2F](https://support.yubico.com/hc/en-us/articles/360016649099-Ubuntu-Linux-Login-Guide-U2F) que debería funcionar en cualquier distribución. Sin embargo, los comandos del gestor de paquetes—como `"apt-get"`—y los nombres de los paquetes pueden ser diferentes. Esta guía **no** se aplica a Qubes OS.

### Qubes OS

Qubes OS tiene soporte para la autenticación Challenge-Response con YubiKeys. Si tienes una YubiKey con soporte de autenticación Challenge-Response, echale un ojo a la [documentación de YubiKey](https://www.qubes-os.org/doc/yubikey/) de Qubes OS si quieres configurar MFA en Qubes OS.

### SSH

#### Llaves de Seguridad

MFA de SSH podría configurarse utilizando varios métodos de autenticación diferentes que son populares con las claves de seguridad de hardware. Te recomendamos que consultea la [documentación](https://developers.yubico.com/SSH/) de Yubico sobre cómo configurarlo.

#### Contraseñas de un solo uso basado en tiempo (TOTP)

MFA de SSH también se puede configurar utilizando TOTP. DigitalOcean ha proporcionado un tutorial [Cómo configurar la autenticación multifactor para SSH en Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-multi-factor-authentication-for-ssh-on-ubuntu-20-04). La mayoría de las cosas deberían ser las mismas independientemente de la distribución, sin embargo los comandos del gestor de paquetes—como `"apt-get"`—y los nombres de los paquetes pueden diferir.

### KeePass (y KeePassXC)

Las bases de datos de KeePass y KeePassXC pueden ser aseguradas utilizando Challenge-Response o HOTP como segundo factor de autenticación. Yubico ha proporcionado un documento para KeePass [Uso de su YubiKey con KeePass](https://support.yubico.com/hc/en-us/articles/360013779759-Using-Your-YubiKey-with-KeePass) y también hay uno en el sitio web de [KeePassXC](https://keepassxc.org/docs/#faq-yubikey-2fa).

---
title: "Creación De Cuenta"
icon: 'material/account-plus'
---

A menudo la gente se inscribe en servicios sin pensar. Tal vez sea un servicio de streaming para que puedas ver ese nuevo show del que todo el mundo habla, o una cuenta que te da un descuento para tu lugar de comida rápida favorito. Sea cual sea el caso, debes tener en cuenta las implicaciones que tednrá para tus datos ahora y más adelante.

Hay riesgos asociados con cada nuevo servicio que utilices. Las filtraciones de datos, la revelación de información de clientes a terceros o el acceso a datos por parte de empleados deshonestos son posibilidades que deben tenerse en cuenta a la hora de facilitar tu información. Tienes que estar seguro de que puedes confiar en el servicio, por eso no recomendamos almacenar datos valiosos en nada, excepto en los productos más maduros y que han sido puestos profundamente a prueba. Por lo general, se trata de servicios que ofrecen E2EE y han sido sometidos a una auditoría criptográfica. Una auditoría aumenta las garantías de que el producto se diseñó sin problemas de seguridad notorios causados por un desarrollador inexperto.

También puede ser difícil eliminar las cuentas en algunos servicios. En ocasiones, [sobrescribir los datos](account-deletion.md#overwriting-account-information) asociados a una cuenta puede ser posible, pero en otros casos el servicio guardará un historial completo de los cambios realizados en la cuenta.

## Términos del servicio y Política de privacidad

Los ToS (Términos del Servicio) son las normas que usted se compromete a respetar al utilizar el servicio. En los servicios más grandes, estas normas suelen aplicarse mediante sistemas automatizados. A veces, estos sistemas automatizados pueden cometer errores. Por ejemplo, pueden expulsarte o bloquearte la cuenta en algunos servicios por utilizar una VPN o un número VOIP. Recurrir estos bloqueos suele ser difícil, y además implica un proceso automatizado que no siempre funciona bien. Esta es una de las razones por las que no sugerimos utilizar Gmail para el correo electrónico, por ejemplo. El correo electrónico es crucial para acceder a otros servicios a los que estés inscrito.

La Política de Privacidad es la forma en que el servicio dice que utilizará tus datos y vale la pena leerla para que entiendas cómo se utilizarán tus datos. Una empresa u organización puede no estar legalmente obligada a seguir todo lo que contiene la política (depende de la jurisdicción). Te recomendamos que tengas una idea de cuál es tu legislación local y qué le permite recopilar a un proveedor.

Te recomendamos que busques términos concretos como "recopilación de datos", "análisis de datos", "cookies", "anuncios" o servicios de "terceros". A veces podrás optar por no participar en la recopilación de datos o no compartirlos, pero lo mejor es elegir un servicio que respete tu privacidad desde el principio.

Ten en cuenta que también estás depositando tu confianza en la empresa u organización y en que cumplirán su propia política de privacidad.

## Métodos de autenticación

Usualmente hay varias maneras para registrarse, cada una tiene sus propias ventajas y desventajas.

### Correo electrónico y contraseña

La manera más común de crear una nueva cuenta es utilizando una dirección de correo electrónico y una contraseña. Cuando se utiliza este método, se debe utilizar un gestor de contraseñas y seguir las [mejores prácticas](passwords-overview.md) respecto a las contraseñas.

!!! consejo

    ¡También se puede usar un gestor de contraseñas para organizar otros métodos de autenticación! Solo añade la nueva entrada y completa los espacios apropiados, puedes agregar notas para cosas como las preguntas de seguridad o una clave de respaldo.

Usted es responsable de gestionar sus credenciales de ingreso. Para mayor seguridad, se puede configurar la [autenticación multifactor](multi-factor-authentication.md) en las cuentas.

[Gestores de contraseñas recomendados](../passwords.md ""){.md-button}

#### Alias de correo electrónico

Si no se quiere utilizar una dirección real de correo electrónico en un servicio, se cuenta con la opción de utilizar un alias. Estos los describimos con mayores detalles en nuestra página con recomendaciones de servicios de correo electrónico. Básicamente, los servicios de alias permiten generar nuevas direcciones de correo que reenvían todos los correos a la dirección principal. Esto puede ayudar a prevenir el rastreo a través de múltiples servicios y ayudar a gestionar los correos de mercadeo que algunas veces vienen con el proceso de registro. Estos pueden ser filtrados automáticamente basándose en el alias al que son enviados.

Si un servicio es hackeado, puede que usted comience a recibir correos engañosos o basura en la dirección que utilizó para registrarse. Al utilizar un único alias para cada servicio, se puede identificar cual servicio fue hackeado.

[Servicios recomendados de alias de correo electrónico](../email.md#email-aliasing-services ""){.md-button}

### Single sign-on

!!! note

    We are discussing Single sign-on for personal use, not enterprise users.

Single sign-on (SSO) is an authentication method that allows you to register for a service without sharing much information, if any. Whenever you see something along the lines of "Sign-in with *provider name*" on a registration form it's SSO.

When you choose single sign-on in a website, it will prompt your SSO provider login page and after that your account will be connected. Your password won't be shared but some basic information will (you can review it during the login request). This process is needed every time you want to log in to the same account.

The main advantages are:

- **Security**: no risk of being involved in a [data breach](https://en.wikipedia.org/wiki/Data_breach) because the website does not store your credentials.
- **Ease of use**: multiple accounts are managed by a single login.

But there are disadvantages:

- **Privacy**: a SSO provider will know the services you use.
- **Centralization**: if your SSO account gets compromised or you aren't able to login to it, all other accounts connected to it are affected.

SSO can be especially useful in those situations where you could benefit from deeper integration between services. For example, one of those services may offer SSO for the others. Our recommendation is to limit SSO to only where you need it and protect the main account with [MFA](multi-factor-authentication.md).

All services that use SSO will be as secure as your SSO account. For example, if you want to secure an account with a hardware key but that service doesn't support hardware keys, you can secure your SSO account with a hardware key and now you essentially have hardware MFA on all your accounts. It is worth noting though that weak authentication on your SSO account means that any account tied to that login will also be weak.

### Phone number

We recommend avoiding services that require a phone number for sign up. A phone number can identity you across multiple services and depending on data sharing agreements this will make your usage easier to track, particularly if one of those services is breached as the phone number is often **not** encrypted.

You should avoid giving out your real phone number if you can. Some services will allow the use of VOIP numbers, however these often trigger fraud detection systems, causing an account to be locked down, so we don't recommend that for important accounts.

In many cases you will need to provide a number that you can receive SMS or calls from, particularly when shopping internationally, in case there is a problem with your order at border screening. It's common for services to use your number as a verification method; don't let yourself get locked out of an important account because you wanted to be clever and give a fake number!

### Username and password

Some services allow you to register without using an email address and only require you to set a username and password. These services may provide increased anonymity when combined with a VPN or Tor. Keep in mind that for these accounts there will most likely be **no way to recover your account** in the event you forget your username or password.

--8<-- "includes/abbreviations.es.txt"

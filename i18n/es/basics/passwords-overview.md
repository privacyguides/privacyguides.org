---
title: "Introducción a las contraseñas"
icon: 'material/form-textbox-password'
description: Estos son algunos consejos y trucos para crear las contraseñas más seguras y mantener a salvo tus cuentas.
---

Las contraseñas son una parte esencial de nuestra vida digital cotidiana. Las utilizamos para proteger nuestras cuentas, nuestros dispositivos y nuestros secretos. A pesar de ser a menudo lo único que nos separa de un adversario que busca nuestra información privada, no se piensa mucho en ellas, lo que a menudo lleva a la gente a utilizar contraseñas que pueden ser fácilmente adivinadas o forzadas.

## Buenas prácticas

### Utilice contraseñas únicas para cada servicio

Imagínate por un momento esta situación: te suscribes con el mismo correo y contraseña en múltiples servicios online. Si alguno de esos proveedores de servicios es malicioso, o su servicio tiene una filtración de datos que expone tu contraseña en un formato sin encriptar, todo lo que los malos actores deben hacer es probar esa combinación de correo electrónico y contraseña, a través de múltiples servicios populares hasta obtener un resultado. No importa lo fuerte que sea esa contraseña, porque ya la tienen.

Esto es llamado [suplantación de identidad](https://en.wikipedia.org/wiki/Credential_stuffing), y es una de las formas comunes en que las cuentas son comprometidas por malos actores. Para evitar esto, asegúrate de que nunca reutilices tus contraseñas.

### Utilizar contraseñas generadas aleatoriamente

===**Nunca** debes confiar en ti mismo para inventar una buena contraseña.== Recomendamos utilizar [contraseñas generadas aleatoriamente](#passwords) o [frases de contraseña](#diceware-passphrases) con suficiente entropía para proteger tus cuentas y dispositivos.

Todos nuestros [gestores recomendados de contraseñas](../passwords.md) incluyen un generador integrado de contraseñas que puedes usar.

### Rotación de contraseñas

Debes evitar cambiar frecuentemente las contraseñas que debes recordar (como la contraseña maestra de tu gestor de contraseñas), a menos que tengas alguna razón para creer que ha sido comprometida, porque cambiarla con mucha frecuencia te expone al riesgo de olvidarla.

Cuando se trata de contraseñas que no tienes que recordar (como las contraseñas almacenadas en tu gestor de contraseñas), si tu [modelo de amenazas](threat-modeling.md) lo requiere, recomendamos revisar las cuentas importantes (especialmente las cuentas que no utilizan autenticación multifactor) y cambiar tu contraseña cada dos meses, en caso de que se hayan visto comprometidas en una filtración de datos que aún no se haya hecho pública. La mayoría de los gestores de contraseñas permiten fijar una fecha de caducidad para facilitar su gestión.

!!! Consejo "Comprobando violaciones de datos"

    Si su gestor de contraseñas te permite comprobar si hay contraseñas comprometidas, asegúrate de hacerlo y cambia inmediatamente cualquier contraseña que pueda haber quedado expuesta en una filtración de datos. Alternativamente, podrías seguir el [feed de Últimos Alcances de Pwned](https://feeds.feedburner.com/HaveIBeenPwnedLatestBreaches) con la ayuda de un [agregador de noticias](../news-aggregators.md).

## Creando contraseñas fuertes

### Contraseñas

Muchos servicios imponen ciertos criterios a las contraseñas, incluida una longitud mínima o máxima, así como los caracteres especiales que pueden utilizarse. Debes utilizar el generador de contraseñas integrado en tu gestor de contraseñas para crear contraseñas tan largas y complejas como te permita el servicio, incluyendo letras mayúsculas y minúsculas, números y caracteres especiales.

Si necesitas una contraseña que puedas memorizar, te recomendamos [frases de contraseña de diceware](#diceware-passphrases).

### Frases de contraseña de Diceware

Diceware es un método para crear contraseñas fáciles de recordar, pero difíciles de adivinar.

Las frases de contraseña Diceware son una gran opción cuando necesitas memorizar o introducir manualmente tus credenciales, como para la contraseña maestra de tu gestor de contraseñas o la contraseña de cifrado de tu dispositivo.

Un ejemplo de una frase de contraseña de diceware es `lápiz blando diecisiete resistente a la solidez visible`.

Para generar una frase de contraseña diceware utilizando dados reales, sigue estos pasos:

!!! Nota

    Estas instrucciones asumen que estás usando [EFF's large wordlist](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) para generar la frase de contraseña, que requiere cinco tiradas de dados por palabra. Otras listas de palabras pueden requerir más o menos tiradas por palabra, y pueden necesitar una cantidad diferente de palabras para alcanzar la misma entropía.

1. Tira un dado de seis caras cinco veces y anota el número después de cada tirada.

2. Por ejemplo, digamos que sacas `2-5-2-6-6`. Busque en la gran lista de palabras de [EFF](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) la palabra que corresponde a `25266`.

3. Encontrará la palabra `encriptar`. Escribe esa palabra.

4. Repite este proceso hasta que tu frase de contraseña tenga tantas palabras como necesites, que deberás separar con un espacio.

!!! Advertencia "Importante"

    **No** debes volver a tirar las palabras hasta que consigas una combinación que te guste. El proceso debe ser completamente aleatorio.

Si no tienes acceso a dados reales o prefieres no utilizarlos, puedes utilizar el generador de contraseñas integrado en tu gestor de contraseñas, ya que la mayoría de ellos tienen la opción de generar frases de contraseña diceware además de contraseñas normales.

Te recomendamos que utilices la gran lista de palabras de [EFF](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) para generar tus frases de contraseña diceware, ya que ofrece exactamente la misma seguridad que la lista original, a la vez que contiene palabras más fáciles de memorizar. También hay [otras listas de palabras en diferentes idiomas](https://theworld.com/~reinhold/diceware.html#Diceware%20in%20Other%20Languages|outline), si no quieres que tu frase de contraseña esté en inglés.

??? Nota "Explicación de la entropía y la fuerza de las frases de contraseña diceware"

    Para demostrar lo fuertes que son las frases de contraseña diceware, utilizaremos la frase de contraseña de siete palabras antes mencionada (`viewable fastness reluctant squishy seventeen shown pencil`) y [EFF's large wordlist](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) como ejemplo.
    
    Una métrica para determinar la fuerza de una frase de contraseña diceware es cuánta entropía tiene. La entropía por palabra en una frase de contraseña diceware se calcula como $\text{log}_2(\text{WordsInList})$ y la entropía global de la frase de contraseña se calcula como $\text{log}_2(\text{WordsInList}^\text{WordsInPhrase})$.
    
    Por lo tanto, cada palabra de la lista mencionada da como resultado ~12,9 bits de entropía ($\text{log}_2(7776)$), y una frase de contraseña de siete palabras derivada de ella tiene ~90,47 bits de entropía ($\text{log}_2(7776^7)$).
    
    La [EFF's large wordlist](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) contiene 7776 palabras únicas. Para calcular la cantidad de frases de contraseña posibles, todo lo que tenemos que hacer es $\text{WordsInList}^\text{WordsInPhrase}$, o en nuestro caso, $7776^7$.
    
    Pongamos todo esto en perspectiva: Una frase de siete palabras utilizando la gran lista de palabras de la EFF (https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) es una de las ~1.719.070.799.748.422.500.000.000.000 frases posibles.
    
    Por término medio, se necesita probar el 50% de todas las combinaciones posibles para adivinar su frase. Teniendo esto en cuenta, incluso si tu adversario es capaz de realizar ~1.000.000.000.000 de intentos por segundo, aún tardaría ~27.255.689 años en adivinar tu frase de contraseña. Esto es así incluso si las siguientes cosas son ciertas:

    - Tu adversario sabe que has utilizado el método diceware.
    - Tu adversario conoce la lista de palabras específica que utilizaste.
    - Tu adversario sabe cuántas palabras contiene tu frase de contraseña.

En resumen, las frases de contraseña diceware son tu mejor opción cuando necesitas algo que sea fácil de recordar *y* excepcionalmente fuerte.

## Almacenamiento de contraseñas

### Gestores de Contraseñas

La mejor forma de almacenar tus contraseñas es utilizar un gestor de contraseñas. Permiten almacenar las contraseñas en un archivo o en la nube y protegerlas con una única contraseña maestra. De esta forma, sólo tendrás que recordar una contraseña segura, que te permita acceder al resto.

Hay muchas buenas opciones para elegir, tanto basadas en la nube como locales. Elige uno de nuestros gestores de contraseñas recomendados y utilízalo para establecer contraseñas seguras en todas tus cuentas. Le recomendamos que proteja su gestor de contraseñas con una frase de contraseña [diceware](#diceware-passphrases) compuesta por al menos siete palabras.

[Lista de gestores de contraseñas recomendados](../passwords.md ""){.md-button}

!!! Advertencia "No coloques tus contraseñas y tokens TOTP dentro del mismo gestor de contraseñas"

    Cuando utilices códigos TOTP como [autenticación multifactor](../multi-factor-authentication.md), la mejor práctica de seguridad es mantener tus códigos TOTP en una [app separada](../multi-factor-authentication.md#authenticator-apps).
    
    Almacenar tus tokens TOTP en el mismo lugar que tus contraseñas, aunque cómodo, reduce las cuentas a un único factor en caso de que un adversario acceda a tu gestor de contraseñas.
    
    Además, no recomendamos almacenar códigos de recuperación de un solo uso en su gestor de contraseñas. Deberían almacenarse por separado, por ejemplo en un contenedor cifrado en un dispositivo de almacenamiento fuera de línea.

### Copias de seguridad

Debes almacenar una copia de seguridad [cifrada](../encryption.md) de tus contraseñas en varios dispositivos de almacenamiento o en un proveedor de almacenamiento en la nube. Esto puede ayudarte a acceder a tus contraseñas si le ocurre algo a tu dispositivo principal o al servicio que estás utilizando.

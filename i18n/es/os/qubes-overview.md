---
title: "Visión general de Qubes"
icon: pg/qubes-os
description: Qubes es un sistema operativo basado en el aislamiento de aplicaciones dentro de máquinas virtuales para aumentar la seguridad.
---

[**Qubes OS**](../desktop.md#qubes-os) es un sistema operativo que utiliza el hipervisor [Xen](https://en.wikipedia.org/wiki/Xen) para proporcionar una fuerte seguridad para la informática de escritorio a través de máquinas virtuales aisladas. Cada VM se denomina *Qube* y puede asignar a cada Qube un nivel de confianza en función de su finalidad. Ya que Qubes OS proporciona seguridad mediante el uso de aislamiento, y sólo permite acciones por caso, es lo contrario de la [enumeración de maldad](https://www.ranum.com/security/computer_security/editorials/dumb/).

## ¿Cómo funciona Qubes OS?

Qubes utiliza la [compartimentación](https://www.qubes-os.org/intro/) para mantener la seguridad del sistema. Los Qubes se crean a partir de plantillas, siendo las predeterminadas para Fedora, Debian y [Whonix](../desktop.md#whonix). Qubes OS también permite crear máquinas virtuales de un solo uso [desechables](https://www.qubes-os.org/doc/how-to-use-disposables/).

![Arquitectura Qubes](../assets/img/qubes/qubes-trust-level-architecture.png)
<figcaption>Qubes Arquitectura, Crédito: Qué es Qubes OS Introducción</figcaption>

Cada aplicación Qubes tiene un [borde de color](https://www.qubes-os.org/screenshots/) que puede ayudarte a seguir la pista de la máquina virtual en la que se está ejecutando. Por ejemplo, podrías usar un color específico para tu navegador bancario, mientras usas un color diferente para un navegador general no confiable.

![Borde de color](../assets/img/qubes/r4.0-xfce-three-domains-at-work.png)
<figcaption>Bordes de ventana de Qubes, Crédito: Capturas de pantalla de Qubes</figcaption>

## ¿Por qué utilizar Qubes?

Qubes OS es útil si tu [modelo de amenazas](../basics/threat-modeling.md) requiere una fuerte compartimentación y seguridad, como por ejemplo si crees que vas a abrir archivos no confiables de fuentes no confiables. Una razón típica para utilizar Qubes OS es abrir documentos de fuentes desconocidas.

Qubes OS utiliza [Dom0](https://wiki.xenproject.org/wiki/Dom0) Xen VM (es decir, un "AdminVM") para controlar otras VMs invitadas o Qubes en el SO anfitrión. Otras máquinas virtuales muestran ventanas de aplicaciones individuales dentro del entorno de escritorio de Dom0. Permite codificar por colores las ventanas en función de los niveles de confianza y ejecutar aplicaciones que pueden interactuar entre sí con un control muy granular.

### Copiar y pegar texto

Puedes [copiar y pegar texto](https://www.qubes-os.org/doc/how-to-copy-and-paste-text/) utilizando `qvm-copy-to-vm` o las instrucciones siguientes:

1. Pulsa **Ctrl+C** para decirle a la máquina virtual en la que estás que quieres copiar algo.
2. Pulsa **Ctrl+Shift+C** para indicar a la VM que ponga este búfer a disposición del portapapeles global.
3. Pulsa **Ctrl+Shift+V** en la máquina virtual de destino para que el portapapeles global esté disponible.
4. Pulsa **Ctrl+V** en la máquina virtual de destino para pegar el contenido en el búfer.

### Intercambio de archivos

Para copiar y pegar archivos y directorios (carpetas) de una VM a otra, puedes utilizar la opción **Copiar a otra AppVM...** o **Mover a otra AppVM...**. La diferencia es que la opción **Mover** borrará el archivo original. Cualquiera de las dos opciones protegerá tu portapapeles de ser filtrado a cualquier otro Qubes. Esto es más seguro que la transferencia de archivos con air-gap, porque un ordenador con air-gap seguirá viéndose obligado a analizar particiones o sistemas de archivos. Esto no es necesario con el sistema de copia inter-qube.

??? Información "AppVMs o qubes no tienen sus propios sistemas de archivos"

    Puedes [copiar y mover archivos](https://www.qubes-os.org/doc/how-to-copy-and-move-files/) entre Qubes. Al hacerlo, los cambios no son inmediatos y pueden deshacerse fácilmente en caso de accidente.

### Interacciones inter-VM

El framework [qrexec](https://www.qubes-os.org/doc/qrexec/) es una parte central de Qubes que permite la comunicación de máquinas virtuales entre dominios. Está construido sobre la librería Xen *vchan*, que facilita el [aislamiento a través de políticas](https://www.qubes-os.org/news/2020/06/22/new-qrexec-policy-system/).

## Recursos Adicionales

Para obtener información adicional, te animamos a consultar las extensas páginas de documentación de Qubes OS que se encuentran en el [sitio web Qubes OS](https://www.qubes-os.org/doc/). Pueden descargarse copias offline desde el [repositorio de documentación ](https://github.com/QubesOS/qubes-doc)de Qubes OS.

- Fondo Tecnológico Abierto: [*Posiblemente el sistema operativo más seguro del mundo*](https://www.opentech.fund/news/qubes-os-arguably-the-worlds-most-secure-operating-system-motherboard/)
- J. Rutkowska: [*Compartimentación del software frente a separación física*](https://invisiblethingslab.com/resources/2014/Software_compartmentalization_vs_physical_separation.pdf)
- J. Rutkowska: [*Particionar mi vida digital en dominios de seguridad*](https://blog.invisiblethings.org/2011/03/13/partitioning-my-digital-life-into.html)
- Qubes OS: [*Artículos relacionados*](https://www.qubes-os.org/news/categories/#articles)

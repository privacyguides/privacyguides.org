---
title: "Qubes Overview"
icon: simple/qubesos
---
[**Qubes OS**](../desktop.md#qubes-os) is an operating system which uses the [Xen](https://en.wikipedia.org/wiki/Xen) hypervisor to provide strong security for desktop computing through isolated virtual machines. Each VM is called a *Qube* and you can assign each Qube a level of trust based on its purpose. As Qubes OS provides security by using isolation, and only permitting actions on a per case basis, it is the opposite of [badness enumeration](https://www.ranum.com/security/computer_security/editorials/dumb/).

## How does Qubes OS work?

Qubes uses [compartmentalization](https://www.qubes-os.org/intro/) to keep the system secure. Qubes are created from templates, the defaults being for Fedora, Debian and [Whonix](../desktop.md#whonix). Qubes OS also allows you to create once-use [disposable](https://www.qubes-os.org/doc/how-to-use-disposables/) virtual machines.

![Qubes architecture](../assets/img/qubes/qubes-trust-level-architecture.png)
<figcaption>Qubes Architecture, Credit: What is Qubes OS Intro</figcaption>

Each Qubes application has a [colored border](https://www.qubes-os.org/screenshots/) that can help you keep track of the virtual machine it is running in. You could, for example, use a specific color for your banking browser, while using a different color for a general untrusted browser.

![Colored border](../assets/img/qubes/r4.0-xfce-three-domains-at-work.png)
<figcaption>Qubes window borders, Credit: Qubes Screenshots</figcaption>

## Why Should I use Qubes?

Qubes OS is useful if your [threat model](../basics/threat-modeling.md) requires strong compartmentalization and security, such as if you think you'll be opening untrusted files from untrusted sources. A typical use-case for Qubes OS is for opening documents from an unknown source.

Qubes OS utilizes [Dom0](https://wiki.xenproject.org/wiki/Dom0) Xen VM (i.e., an "AdminVM") for controlling other guest VMs or Qubes on the host OS. Other VMs display individual application windows within Dom0's desktop environment. It allows you to color code windows based on trust levels and run apps that can interact with each other with very granular control.

### Copying and Pasting Text

You can [copy and paste text](https://www.qubes-os.org/doc/how-to-copy-and-paste-text/) using `qvm-copy-to-vm` or the below instructions:

1. Press **Ctrl+C** to tell the VM you're in that you want to copy something.
2. Press **Ctrl+Shift+C** to tell the VM to make this buffer available to the global clipboard.
3. Press **Ctrl+Shift+V** in the destination VM to make the global clipboard available.
4. Press **Ctrl+V** in the destination VM to paste the contents in the buffer.

### File Exchange

To copy and paste files and directories (folders) from one VM to another, you can use the option **Copy to Other AppVM...** or **Move to Other AppVM...**. The difference is that the **Move** option will delete the original file. Either option will protect your clipboard from being leaked to any other Qubes. This is more secure than air-gapped file transfer because an air-gapped computer will still be forced to parse partitions or file systems. That is not required with the inter-qube copy system.

??? info "AppVMs or qubes do not have their own file systems"

    You can [copy and move files](https://www.qubes-os.org/doc/how-to-copy-and-move-files/) between Qubes. When doing so the changes aren't immediately made and can be easily undone in case of an accident.

### Inter-VM Interactions

The [qrexec framework](https://www.qubes-os.org/doc/qrexec/) is a core part of Qubes which allows virtual machine communication between domains. It is built on top of the Xen library *vchan*, which facilitates [isolation through policies](https://www.qubes-os.org/news/2020/06/22/new-qrexec-policy-system/).

## Additional Resources

For additional information we encourage you to consult the extensive Qubes OS documentation pages located on the [Qubes OS Website](https://www.qubes-os.org/doc/). Offline copies can be downloaded from the Qubes OS [documentation repository](https://github.com/QubesOS/qubes-doc).

- Open Technology Fund: [*Arguably the world's most secure operating system*](https://www.opentech.fund/news/qubes-os-arguably-the-worlds-most-secure-operating-system-motherboard/)
- J. Rutkowska: [*Software compartmentalization vs. physical separation*](https://invisiblethingslab.com/resources/2014/Software_compartmentalization_vs_physical_separation.pdf)
- J. Rutkowska: [*Partitioning my digital life into security domains*](https://blog.invisiblethings.org/2011/03/13/partitioning-my-digital-life-into.html)
- Qubes OS: [*Related Articles*](https://www.qubes-os.org/news/categories/#articles)

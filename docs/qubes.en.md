---
title: "Qubes OS"
icon: pg/qubes-os
---
A reasonably secure operating system with strong compartmentalization.

!!! recommendation

    ![Qubes OS logo](assets/img/qubes/qubes_os.svg){ align=right }
    [:octicons-home-16: Homepage](https://www.qubes-os.org/){ .md-button .md-button--primary }
    [:pg-tor:](http://qubesosfasa4zl44o4tws22di6kepyzfeqv3tg4e3ztknltfxqrymdad.onion){ .card-link title=Onion }
    [:octicons-eye-16:](https://www.qubes-os.org/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://www.qubes-os.org/doc/){ .card-link title=Documentation }
    [:octicons-code-16:](https://github.com/QubesOS/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.qubes-os.org/donate/){ .card-link title=Contribute }

    **Qubes OS** is meant to provide strong security for desktop computing through secure qubes (formerly called "VMs"). It does this by using something called compartmentalization. Qubes is based on Xen, the X Window System, and Linux, and can run most Linux applications and utilize most of the Linux drivers. You assign each qube a certain level of trust based on the level of risk it presents. On the surface, Qubes installs and looks much like other Linux distribution. Where Qubes shines is its ability to provide a user with the means to run every app they normally would use on, say, a development computer, while having strong separation between qubes.

Instead of each qube having its own complete desktop, Qubes utilizes dom0 Xen VM (a "master") to manage the other qubes on the system as their host. Other qubes display individual application windows within dom0's desktop environment. It allows you to color code based on trust levels and run apps that can interact, but not without caveats. This is a more advanced way to compartmentalize information and data. It requires a user to change their behavior in ways even seasoned Linux gurus might find challenging for day-to-day-use.

When you launch an application from an application qube, it starts up if it wasn't started before and then the application appears. The application has a custom window border that is colorized based on the color you assigned its qube. If you have two instances of Firefox on your desktop at the same time, you can tell your untrusted one from your banking one because the untrusted one might be colored red while your banking browser might be colored green. This is done at the discretion of the user, and depends on his/her threat model. However, as I said, it is not without caveats: you must be very careful, as even though Qubes is reasonably secure, it only makes it harder to shoot yourself in the foot in regards to privacy and security, it doesn't make it impossible.

Qubes makes it easier to accomplish the goal of a secure operating system by having separate components and tools that can only interact and read from a file system without write access. You can, for instance, perform file moves and copies, but they aren't immediately made, they aren't accessible right away and changes are easily reversed and/or destroyed. This is done by limiting interactions to read-only copies of the file system similar to how Tails is mounted read-only, e.g., qvm-move-to-vm and qvm-copy-to-vm allows for moving and copying files from one qube to another qube, but doesn't allow changes to be saved to disk when destroyed. It is completely wiped from RAM to avoid forensics of that area on disk. Qubes is for complete isolation and it is the system that does this the best.

!!! info

    This page is a work-in-progress. Expect more thorough information on Qubes OS in the future.
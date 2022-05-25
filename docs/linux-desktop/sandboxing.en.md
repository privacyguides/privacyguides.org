---
title: Application Sandboxing
icon: octicons/apps-16
---
Some sandboxing solutions for desktop Linux distributions do exist, however they are not as strict as those found in macOS or ChromeOS. Applications installed from the package manager (`dnf`, `apt`, etc.) typically have **no** sandboxing or confinement whatsoever. Below are a few projects that aim to solve this problem:

### Flatpak

[Flatpak](https://flatpak.org) aims to be a universal package manager for Linux. One of its main goals is to provide a universal package format which can be used in most Linux distributions. It provides some [permission control](https://docs.flatpak.org/en/latest/sandbox-permissions.html). It has been [pointed out](https://madaidans-insecurities.github.io/linux.html#flatpak) that Flatpak sandboxing could be improved as particular Flatpaks often have greater permission than required. There does seem to be [some agreement](https://theevilskeleton.gitlab.io/2021/02/11/response-to-flatkill-org.html) that this is the case.

You can restrict applications further by issuing [Flatpak overrides](https://docs.flatpak.org/en/latest/flatpak-command-reference.html#flatpak-override). This can be done with the command-line or by using [Flatseal](https://flathub.org/apps/details/com.github.tchx84.Flatseal). Some sample overrides are provided by [tommytran732](https://github.com/tommytran732/Flatpak-Overrides) and [rusty-snake](https://github.com/rusty-snake/kyst/tree/main/flatpak).

We generally recommend revoking access to:

- the Network (`share=network`) socket (internet access)
- the PulseAudio socket (for both audio in and out), `device=all` (access to all devices including the camera)
- `org.freedesktop.secrets` dbus (access to secrets stored on your keychain) for applications which do not need it

If an application works natively with Wayland (and not running through the [XWayland](https://wayland.freedesktop.org/xserver.html) compatibility layer), consider revoking its access to the X11 (`socket=x11`) and [Inter-process communications (IPC)](https://en.wikipedia.org/wiki/Unix_domain_socket) socket (`share=ipc`) as well.

We also recommend restricting broad filesystem permissions such as `filesystem=home` and `filesystem=host` which should be revoked and replaced with just the directories that the app needs to access. Some applications like [VLC](https://www.flathub.org/apps/details/org.videolan.VLC) implement the [Portals](https://docs.flatpak.org/en/latest/portal-api-reference.html) [API](https://en.wikipedia.org/wiki/API), which allows a file manager to pass files to the Flatpak application (e.g. VLC) without specific filesystem access privileges. VLC is only able to access the specific file that you want to open, rather than requiring privileges to particular locations.

Hard-coded access to some kernel interfaces like [`/sys`](https://en.wikipedia.org/wiki/Sysfs) and [`/proc`](https://en.wikipedia.org/wiki/Procfs#Linux) and weak [seccomp](https://en.wikipedia.org/wiki/Seccomp) filters unfortunately cannot be secured with Flatpak.

### Firejail

[Firejail](https://firejail.wordpress.com/) is another method of sandboxing. As it is a large [setuid](https://en.wikipedia.org/wiki/Setuid) binary, it has a large attack surface which may assist in [privilege escalation](https://en.wikipedia.org/wiki/Privilege_escalation).

[This post from a Whonix security researcher](https://madaidans-insecurities.github.io/linux.html#firejail) provides additional details on how Firejail can worsen the security of your device.

### Mandatory Access Control

[Mandatory access control](https://en.wikipedia.org/wiki/Mandatory_access_control) systems require policy files in order to force constraints on the system.

The two main control systems are [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) (used on Android and Fedora) and [AppArmor](https://en.wikipedia.org/wiki/AppArmor).

Fedora includes SELinux preconfigured with some policies that will confine [system daemons](https://en.wikipedia.org/wiki/Daemon_(computing)) (background processes). We don’t recommend disabling SELinux.

openSUSE gives the choice of AppArmor or SELinux during the installation process. We recommend sticking to the default for each variant (AppArmor for [Tumbleweed](https://get.opensuse.org/tumbleweed/) and SELinux for [MicroOS](https://microos.opensuse.org/)). openSUSE’s SELinux policies are derived from Fedora.

Arch and Arch-based operating systems often do not come with a mandatory access control system and that must be configured manually for either [AppArmor](https://wiki.archlinux.org/title/AppArmor) or [SELinux](https://wiki.archlinux.org/title/SELinux).

Linux desktops don't usually include individual app confinement rules, unlike Android which sandboxes every application installed.

### Making your own policies/profiles

You can make your own AppArmor profiles, SELinux policies, Bubblewrap profiles, and [seccomp](https://en.wikipedia.org/wiki/Seccomp) blacklist to have better confinement of applications. This is an advanced and sometimes tedious task, so we won’t go into detail about how to do it here, but we do have a few projects that you could use as reference.

- Whonix’s [AppArmor Everything](https://github.com/Whonix/apparmor-profile-everything)
- Krathalan’s [AppArmor profiles](https://github.com/krathalan/apparmor-profiles)
- noatsecure’s [SELinux templates](https://github.com/noatsecure/hardhat-selinux-templates)
- Seirdy’s [Bubblewrap scripts](https://sr.ht/~seirdy/bwrap-scripts)

### Securing Linux containers

If you’re running a server you may have heard of Linux Containers, Docker, or Podman which refer to a kind of [OS-level virtualization](https://en.wikipedia.org/wiki/OS-level_virtualization). Containers are more common in server and development environments where individual apps are built to operate independently.

[Docker](https://en.wikipedia.org/wiki/Docker_(software)) is one of the most common container solutions. It does not run a proper sandbox, and this means that there is a large kernel attack surface. The [daemon](https://en.wikipedia.org/wiki/Daemon_(computing)) controls everything and [typically](https://docs.docker.com/engine/security/rootless/#known-limitations) runs as root. If it crashes for some reason, all the containers will crash too. The [gVisor](https://en.wikipedia.org/wiki/GVisor) runtime which implements an application level kernel can help limit the number of [syscalls](https://en.wikipedia.org/wiki/System_call) an application can make and can help isolate it from the host’s [kernel](https://en.wikipedia.org/wiki/Kernel_(operating_system)).

Red Hat develops [Podman](https://docs.podman.io/en/latest/) and secures it with SELinux to [isolate](https://www.redhat.com/sysadmin/apparmor-selinux-isolation) containers from each other. One of the notable differences between Docker and Podman is that Docker requires [root](https://en.wikipedia.org/wiki/Superuser) while Podman can run with [rootless containers](https://developers.redhat.com/blog/2020/09/25/rootless-containers-with-podman-the-basics) that are also [daemonless](https://developers.redhat.com/blog/2018/08/29/intro-to-podman), meaning if one crashes they don’t all come down.

Another option is [Kata containers](https://katacontainers.io/), where virtual machines masquerade as containers. Each Kata container has its own Linux kernel and is isolated from the host.

The above container technologies can be useful if you want to run certain web app software on your local network, such as [Vaultwarden](https://github.com/dani-garcia/vaultwarden) or images provided by [LinuxServer.io](https://www.linuxserver.io), to increase privacy by decreasing dependence on various web services. A guide on [hardening Docker and OCI](https://wonderfall.dev/docker-hardening) has been written by the author "Wonderfall."

--8<-- "includes/abbreviations.en.md"

---
title: 'Self-hosting a Shadowsocks VPN with Outline'
author: Jonah
layout: post
excerpt: Outline is a suite of open-source software developed for journalists to safely access their network and the internet while traveling in countries where their activities may be monitored or censored...
---

**Outline** is a suite of open-source software developed for journalists to safely access their network and the internet while traveling in countries where their activities may be monitored or censored. Despite this, the Outline platform is ideal for a wide range of users, especially less technical users, and users in censored countries like China who may have little to no knowledge about how VPNs or proxies work. Outline consists of two parts, the **Outline Manager** and **Outline Clients**. The Outline Manager is a tool you can use to easily setup remote Outline Servers on your own machines with very little technical skills. The Outline Clients in turn can connect to Outline Servers you configure, to keep your traffic secured.

Technically, Outline is not a true VPN. Rather it uses an open-source SOCKS5 proxy called Shadowsocks which is “[designed to protect your Internet traffic](https://shadowsocks.org/en/index.html)”. The Outline client applications however make use of the VPN capabilities of your operating system to send all your traffic through your Outline Server, with no need to configure each application to use the proxy. Thus for most users and most use-cases, there’s no difference in functionality between using a normal VPN and an Outline server.

Shadowsocks has the benefit of being far more lightweight than OpenVPN, and it is much more optimized for mobile devices, as it does not require any keep-alive connections. It has existed since 2012 and it is widely used in China due to its censorship-resistant functionality: It is very difficult or impossible to detect and block Shadowsocks traffic automatically.

Please note that **like any VPN**, Outline/Shadowsocks cannot provide nearly the same degree of anonymity as projects like Tor. The primary use-case of Outline and VPNs in general is to keep your traffic hidden from malicious Internet Service Providers and nation-wide mass surveillance. It’s a great solution for protecting your data on public wifi networks, but if you want to stay hidden from attackers targeting _you_, there’s better tools for the job elsewhere.

Outline is developed by Jigsaw, which is a subsidiary of Alphabet Inc (Google). It is important to note that neither Jigsaw nor Google can see your internet traffic when using Outline, because you will be installing the actual Outline Server on your own machine, not Google’s. Outline is completely open source and was audited in [2017](https://s3.amazonaws.com/outline-vpn/static_downloads/ros-report.pdf) by Radically Open Security and in [2018](https://s3.amazonaws.com/outline-vpn/static_downloads/cure53-report.pdf) by Cure53, and both security firms supported Jigsaw’s security claims. For more information on the data Jigsaw is able to collect when using Outline, see their [article on data collection](https://support.getoutline.org/s/article/Data-collection).

### Prerequisites

All you will need to complete this guide is a computer running Windows, macOS, or Linux. You will also need to know some basic commands: [How to SSH](https://www.howtogeek.com/311287/how-to-connect-to-an-ssh-server-from-windows-macos-or-linux/) in to a server you purchase. We will also assume you know how to purchase and set up a Linux server with SSH access, more info in Step 2.

### Step 1 — Download & Install Outline Manager

Outline allows you to setup and configure your servers from an easy-to-use management console called Outline Manager, which can be downloaded from [getoutline.org](https://getoutline.org). It has binaries available for Windows, macOS, and Linux.

Simply download and install the Outline Manager application to your computer.

![Screenshot of the Outline installation process](/assets/img/blog/shadowsocks-outline-1.png){:.img-fluid .w-75 .mx-auto .d-block}

Note: getoutline.org is blocked in China and likely other countries, however you can download the releases directly from [their GitHub page](https://github.com/Jigsaw-Code/outline-server/releases) as well.

### Step 2 — Choose a Server Provider

Outline has the ability to create servers on three different providers automatically: DigitalOcean, Google Cloud, and Amazon Web Services. In some situations, Google Cloud or AWS may be preferable, because they are less likely to be blocked by hostile ISPs/governments and will therefore allow you to more likely circumvent internet censorship. However, keep in mind that the server provider you choose—like any VPN provider—will have the technical ability to read your internet traffic. This is much less likely to happen when using a cloud provider versus a commercial VPN, which is why we recommend self-hosting, but it is still possible. Choose a provider you trust.

Additionally, keep in mind that many US-based cloud providers block all network traffic to and from [countries sanctioned by the United States](https://en.wikipedia.org/wiki/United_States_sanctions#Countries), including AWS and Google Cloud. Users in or visiting those countries may wish to find a European-based hosting provider to run their Outline Server on.

Another factor to consider is your provider’s network and latency. Choosing a server closer to you (geographically speaking) will give you better latency, and choosing a server with good bandwidth (>1 Gbps) will minimize the performance hit when using the VPN. Both factors are important to keeping a good browsing experience, but keep in mind using _any_ VPN will always be slower than just your plain old internet connection.

Finally, if you want to go with DigitalOcean you can use my affiliate link to receive a $50 credit: [https://m.do.co/c/fb6730f5bb99](https://m.do.co/c/fb6730f5bb99). That’s 10 months of free VPN hosting, at $5/month/server. Don’t feel obligated to use this link, but you’ll receive free credit, and if you spend $25 with DigitalOcean after using it I will get credited, which will enable me to continue writing guides like this! DigitalOcean has a great performing network in my personal experience, and in the experience of the Outline team it works well in regard to circumventing censorship: Not many IP addresses of theirs are blocked.

For this guide we are not going to use an automatic provider in Outline Manager, rather we will manually configure a Linux server. We are using Debian 10. Other distros may work as well, but you may need to install Docker manually.

### Step 3 — Configure Your Server

First, we need to update our system and install `curl`. Connect to your server via SSH and enter the following commands:

Next open Outline Manager on your local machine and you should be given 4 options to configure a server. Select the “Set Up” button under the “Advanced, Set up Outline anywhere” option.

![Screenshot of Outline Manager](/assets/img/blog/shadowsocks-outline-2.png){:.img-fluid .w-100 .mx-auto .d-block}

Outline will give you a string to paste. More technical users can [view the script](https://raw.githubusercontent.com/Jigsaw-Code/outline-server/master/src/server_manager/install_scripts/install_server.sh) that line runs in a browser to validate exactly what is being run and installed on your server, but we have examined the script and have seen no alarming commands.

Connect to your server over SSH and paste the code from above in the Outline Manager box into the Terminal. The process will take a minute or two and will ask you a couple questions. You can just press enter to accept the default configuration whenever it asks.

After it completes, it will give you a long line starting with `{"apiUrl"` (depending on your Terminal’s color support it will appear as green). Copy that line, and paste it in the second box back in Outline Manager. Then, click “Done”.

### Step 4 — Connect Your Devices

Download the Outline app on the device you want to connect. Outline has applications for the following operating systems:

-  [Android](https://play.google.com/store/apps/details?id=org.outline.android.client)
-  [iOS](https://apps.apple.com/app/id1356177741)
-  [Windows](https://raw.githubusercontent.com/Jigsaw-Code/outline-releases/master/client/stable/Outline-Client.exe)
-  [macOS](https://apps.apple.com/app/id1356178125)
-  [Chrome OS](https://play.google.com/store/apps/details?id=org.outline.android.client)
-  [Linux](https://raw.githubusercontent.com/Jigsaw-Code/outline-releases/master/client/stable/Outline-Client.AppImage)

You should also be able to use any [Shadowsocks client](https://shadowsocks.org/en/download/clients.html), including alternative clients for each operating system and a client for OpenWRT routers. And like with the Manager, you can download Outline releases from [their GitHub page](https://github.com/Jigsaw-Code/outline-client/releases) as well.

Back in Outline Manager, select your server in the sidebar. On the far right side of “My access key” there is an icon of a laptop and phone. Click that icon, and select “Connect This Device” in the popup window. It will give you a string to copy, starting with `ss://`. Simply paste that string into the configuration of any Shadowsocks client to add your server!

Once you add your server, that’s it! In the Outline clients it’s just a matter of pressing “Connect”, and all your traffic will be proxied through your server! You can use this connection to keep your traffic safe when you’re on public WiFi networks, or just to keep your browsing hidden from your ISP.

### Conclusion

That should be all you need to get your very own VPN up and running! **Do not share your access key with anyone**, this is the key starting with `ss://`. If you want to grant other users access to your server, click “Add a new key” in Outline Manager and give them a new, unique key. If you share a key, anyone with knowledge of that key will be able to see all the traffic of anyone else using the key. It should go without saying, but don’t send people keys over unencrypted channels: No Facebook Messenger, no emails. Stick with [Signal, Wire, or Briar]({% link _pages/software/real-time-communication.md %}) if you don’t have a secure app already.

With Outline, there is no need to worry about the security of your server. Everything is set to automatically update with no intervention required! Another thing to note: The port on your Outline server is randomly generated. This is so the port can’t be easily blocked by nation/ISP level censors, however, this VPN may not function on some networks that only allow access to port 80/443, or on servers that only allow traffic on certain ports. These are edge-cases, but something to keep in mind, and if they apply you may need to look for more technical options.

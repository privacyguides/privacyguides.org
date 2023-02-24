---
title: 电子邮件安全
icon: 资料/电邮
---

电子邮件在默认情况下是一种不安全的通信形式。 你可以用OpenPGP等工具来提高你的电子邮件的安全性，这些工具为你的邮件增加了端对端加密功能，但OpenPGP与其他消息应用程序的加密相比，仍有一些缺点，而且由于电子邮件的设计方式，一些电子邮件数据永远无法得到固有的加密。

因此，电子邮件最好用于接收来自你在线注册的服务的交易性邮件（如通知、验证邮件、密码重置等），而不是用于与他人交流。

## 电子邮件加密概述

在不同的电邮供应商之间为电子邮件添加端到端加密的标准方法是使用OpenPGP。 OpenPGP标准有不同的实现方式，最常见的是 [GnuPG](https://en.wikipedia.org/wiki/GNU_Privacy_Guard) 和 [OpenPGP.js](https://openpgpjs.org)。

有另一种标准受到商业界的欢迎，称为 [S/MIME](https://en.wikipedia.org/wiki/S/MIME)，然而，它需要一个由 [证书颁发机构](https://en.wikipedia.org/wiki/Certificate_authority) （不是所有的证书颁发机构都颁发S/MIME证书）颁发的证书。 它在 [Google Workplace](https://support.google.com/a/topic/9061730?hl=en&ref_topic=9061731) 和 [Outlook for Web 或 Exchange Server 2016, 2019](https://support.office.com/en-us/article/encrypt-messages-by-using-s-mime-in-outlook-on-the-web-878c79fc-7088-4b39-966f-14512658f480)得到支持。

即使你使用OpenPGP，它也不支持 [前向加密](https://en.wikipedia.org/wiki/Forward_secrecy)，这意味着如果你或收件人的私钥被盗，所有在之前使用它加密的信息都将被暴露。 这就是为什么我们推荐 [即时通讯工具](../real-time-communication.md) ，比起电子邮件，它尽可能更好地在人与人之间的通信中实现前向保密性。

### 哪些电子邮件客户端支持端到端加密？

允许你使用IMAP和SMTP等标准访问协议的电子邮件提供商可以与我们推荐的任何 [电子邮件客户端一起使用](../email-clients.md)。 根据认证方法，如果供应商或电子邮件客户端不支持OATH或桥接应用，这可能会导致安全性下降，因为 [多因素认证](/basics/multi-factor-authentication/) ，不可能使用普通密码认证。

### 我如何保护我的私钥？

智能卡（如 [Yubikey](https://support.yubico.com/hc/en-us/articles/360013790259-Using-Your-YubiKey-with-OpenPGP) 或 [Nitrokey](https://www.nitrokey.com)）通过从运行电子邮件/网络邮件客户端的设备（手机、平板电脑、计算机等）接收加密的电子邮件信息来工作。 然后，该信息被智能卡解密，解密后的内容被送回设备。

在智能卡上进行解密是很有利的，这样可以避免将你的私钥暴露给某个被攻破的设备。

## 电子邮件元数据概述

电子邮件元数据存储在电子邮件的 [信息标题](https://en.wikipedia.org/wiki/Email#Message_header) ，包括一些你可能已经看到的可见标题，如： `To`, `From`, `Cc`, `Date`, `Subject`。 许多电子邮件客户和供应商还包括一些隐藏的标题，可以揭示有关你的账户的信息。

客户端软件可以使用电子邮件元数据来显示信息来自谁，以及什么时间收到的。 服务器可能使用它来确定电子邮件必须发送到哪里，其中还有一些不那么透明的 [其他目的](https://en.wikipedia.org/wiki/Email#Message_header) 。

### 谁可以查看电子邮件元数据？

电子邮件元数据通过 [Opportunistic TLS](https://en.wikipedia.org/wiki/Opportunistic_TLS) ，保护其不受外界观察者的影响，但它仍然能够被你的电子邮件客户端软件（或网络邮件）和任何将你的信息转发给任何收件人（包括你的电子邮件供应商）的服务器看到。 有时，电子邮件服务器也会使用第三方服务来防止垃圾邮件，这些服务一般也能接触到你的邮件。

### 为什么元数据不能被端到端加密？

电子邮件元数据对于电子邮件最基本的功能（它从哪里来，又要到哪里去）至关重要。 E2EE最初没有内置于电子邮件协议中，而是需要像OpenPGP这样的附加软件。 因为OpenPGP信息仍然要与传统的电子邮件供应商合作，它不能对电子邮件元数据进行加密，只能对信息主体本身进行加密。 这意味着，即使使用OpenPGP，外部观察者也可以看到你的信息的很多信息，如你给谁发电子邮件，主题行，你什么时候发电子邮件，等等。

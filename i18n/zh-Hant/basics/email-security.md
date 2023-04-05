---
title: 電子郵件安全
icon: material/email
description: 從許多方面來看電子郵件本質上是不安全的，這也是它並非安全通信首選的原因。
---

電子郵件本身即非安全的通訊形式。 您可以使用 OpenPGP 等工具提高電子郵件安全性，這些工具為您的消息添加端到端加密，但與其他消息傳遞應用程序中的加密相比， OpenPGP 仍然存在許多缺點，而且由於電子郵件的設計方式，某些電子郵件數據永遠不會加密。

因此，電子郵件最適合用於從您在線註冊的服務接收交易性電子郵件（如通知、驗證電子郵件、密碼重置等），而不是用於與他人溝通。

## 郵件是如何加密的

將 E2EE 添加到不同電子郵件提供商之間的電子郵件的標準方法是使用 OpenPGP。 OpenPGP 標準有不同的實現，最常見的是 [GnuPG](https://en.wikipedia.org/wiki/GNU_Privacy_Guard) 和 [OpenPGP.js](https://openpgpjs.org)。

還有另一種標準被稱為 [S/MIME](https://en.wikipedia.org/wiki/S/MIME)，但它需要由 [憑證機構](https://en.wikipedia.org/wiki/Certificate_authority) 頒發的憑證（並非所有憑證都發行S/MIME憑證）。 它支持 [Google Workplace](https://support.google.com/a/topic/9061730?hl=en&ref_topic=9061731) 和 [Outlook for Web或Exchange Server 2016 ， 2019](https://support.office.com/en-us/article/encrypt-messages-by-using-s-mime-in-outlook-on-the-web-878c79fc-7088-4b39-966f-14512658f480)。

即使您使用OpenPGP ，它也不支持 [向前保密](https://en.wikipedia.org/wiki/Forward_secrecy)，這意味著如果您或收件人的私鑰被盜，所有先前加密的消息都將被曝光。 這就是為什麼我們建議 [即時通訊](../real-time-communication.md) ，只要有可能，就實現電子郵件的前向保密性，以進行個人對個人的通信。

### 哪些郵件客戶端支持 E2EE？

電子郵件服務供應商讓您能使用標準訪問協議如 IMAP 與SMTP，以便應用[我們推薦的電子郵件客戶端軟體](../email-clients.md)。 根據驗證方法的不同，如果提供者或電子郵件用戶端不支持OAT或橋接應用程序，這可能會導致安全性降低，因為 [多因素驗證](multi-factor-authentication.md) 在純密碼驗證中是不可能的。

### 我要怎樣保護自己的私密鑰匙？

安全鑰卡 (例如 [Yubikey](https://support.yubico.com/hc/en-us/articles/360013790259-Using-Your-YubiKey-with-OpenPGP) 或 [Nitrokey](https://www.nitrokey.com)) 可在設備 (手機、平板或桌機等 ) 的電子郵件軟體或網頁電郵上收取加密的郵件訊息。 安全鑰卡會解密該訊息再把解開的內容傳到設備。

在智能卡上進行解密是有利的，以避免可能將您的私鑰暴露在受損的設備上。

## 電子郵件元資料概覽

電子郵件中繼資料儲存在電子郵件的 [個訊息標題](https://en. wikipedia. org/wiki/Email#Message_header) 中，並包含您可能已經看到的一些可見標題，例如： `To`、 `From`、 `Cc`、 `Date`、 `Subject`。 許多電子郵件客戶端和提供商還包含一些隱藏的標題，可以揭示有關您的帳戶的信息。

客戶端軟體可能會使用電子郵件中繼資料來顯示來自誰以及收到訊息的時間。 服務器可以使用它來確定電子郵件消息必須發送的位置，其中 [個其他目的](https://en.wikipedia.org/wiki/Email#Message_header) 並不總是透明的。

### 誰可以查看電子郵件中繼資料？

電子郵件元數據受到外部觀察者的保護， [Opportunistic TLS](https://en.wikipedia.org/wiki/Opportunistic_TLS) 保護它免受外部觀察者的影響，但它仍然能夠被您的電子郵件客戶端軟件（或網絡郵件）和任何伺服器看到，將您的消息轉發給任何收件人，包括您的電子郵件提供商。 有時，電子郵件伺服器也會使用第三方服務來防範垃圾郵件，垃圾郵件通常也可以訪問您的郵件。

### 爲什麼元數據不能是E2EE ？

電子郵件元數據對於電子郵件最基本的功能（它來自何處，以及它必須去向何處）至關重要。 E2EE 最初並未內建於電子郵件協議中，而是需要像 OpenPGP 這樣的附加軟件。 由於 OpenPGP 訊息仍必須與傳統的電子郵件供應商合作，因此它無法加密電子郵件元數據，只能加密訊息正文本身。 這意味著即使在使用 OpenPGP 時，外部觀察者也可以看到關於您的消息的大量信息，例如您正在發送電子郵件的人，主題行，當您發送電子郵件時等。

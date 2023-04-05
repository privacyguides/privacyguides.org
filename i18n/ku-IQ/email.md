---
title: "خزمەتگوزاری پۆستەی ئەلکتڕۆنی"
icon: material/email
description: ئەم دابینکەرانەی پۆستەی ئەلکتڕۆنی شوێنێکی نایاب پێشکەش دەکەن بۆ کۆکردنەوەی پۆستەکان بە پارێزراوی.
---

پۆستەی ئەلکتڕۆنی بەتایبەتی گرنگە بۆ بەکارهێنانی هەر خزمەتگوزاریەکی سەرهێڵ، بەڵام ئێمە پێشنیاری ناکەین بۆ گفتوفۆی دوو کەسی. لەجیاتی بەکارهێنانی پۆستەی ئەلکتڕۆنی بۆ پەیوەندی کردن بە کەسانی تر، ڕەچاوی بەکارهێنانی ئامرازێکی نامەبەری دەستبەجێ بکە، کە پشتگیری لە نهێنیکردنی بەردەوام دەکات.

[نامەبەرە دەستبەجێیە پێشنیارکراوەکان](real-time-communication.md ""){.md-button}

بۆ هەموو شتێکی تر، ئێمە دابینکەری پۆستەی ئەلکتڕۆنی جۆراوجۆر پێشنیاردەکەین لەسەر بنەمای شێوازی بازرگانی پشتپێبەستراو و تایبەتمەندیەکانی پاراستن و تایبەتێێی.

- [دابینکەرانی پۆستەی ئەلکتڕۆنی گونجاو لەگەڵOpenPGP :material-arrow-right-drop-circle:](#openpgp-compatible-services)
- [دابینکەرانی تری شفرکراو:material-arrow-right-drop-circle:](#more-providers)
- [خزمەتگوزاریەکانی نازناو بۆ پۆستەی ئەلکتڕۆنی:material-arrow-right-drop-circle:](#email-aliasing-services)
- [هەڵبژاردنەکانی سەرپەرشتی-خودی :material-arrow-right-drop-circle:](#self-hosting-email)

## خزمەتگوزاریەکانی گونجاون لەگەڵ OpenPGP

ئەم دابینکەرانە لە بنچینەوە پشتگیری دەکەن لە OpenPGP شفرەکردن/شفرەلابردن و Web Key Directory (WKD) باو، کە ڕێگە بە دابینەکارنی تری پۆستەی ئەلکتڕۆنی ناباوەڕ بە E2EE دەدات. بۆ نموونە: بەکارهێنەرێکی Proton Mail دەتوانێت پەیامێکی E2EE بنێرێت بۆ بەکارهێنەرێکی Mailbox.org، یان دەتوانیت ئاگادارکردنەوەی OpenPGP-شفرکراوت پێ بگات لەڕێی ئەو خزمەتگوزاریانەی پشتگیری دەکەن.

<div class="grid cards" markdown>

- ![هێمای Proton Mail](assets/img/email/protonmail.svg){ .twemoji } [Proton Mail](email.md#proton-mail)
- ![هێمای Mailbox.org](assets/img/email/mailboxorg.svg){ .twemoji } [Mailbox.org](email.md#mailboxorg)

</div>

!!! ئاگاداری

    لە کاتی بەکارهێنانی تەکنەلۆجیای E2EE وەک OpenPGP، پۆستەی ئەلکتڕۆنی هێشتا هەندێک زانیاری پەیوەندیدار هەیە، کە شفر نەکراون و لە سەرەپەڕەی پۆستە ئەلکتڕۆنیەکەدان. زیاتر بخوێنەوە لەسەر [زانیاری پەیوەندیداری پۆستەی ئەلکتڕۆنی](basics/email-security.md#email-metadata-overview).
    
    هەروەها OpenPGP پشتگیری ناکات نهێنیکردنی بەردەوام، واتا ئەگەر کلیلی تایبەتی تۆ یان وەرگر بدزرێت، ئەوا هەموو نامەکانی پێشوو کە شفرکراون دەتوانرێت ئاشکرا بکرێن. [چۆن کلیلە تایبەتەکانم بپارێزم؟](basics/email-security.md#how-do-i-protect-my-private-keys)

### Proton Mail

!!! recommendation

    ![لۆگۆی Proton Mail](assets/img/email/protonmail.svg){ align=right }
    
    **Proton Mail** خزمەتگوزاریەکی پۆستەی ئەلکتڕۆنیە، کە سەرنجی هەبوونی تایبەتێتی، شفرکردن، پارێزراوی، وە ئاسان لە بەکارهێنان دروست کراوە. ئەوان لە **2013**ـەوە لە کاردان. Proton AG is based in Genève, Switzerland. Accounts start with 500 MB storage with their free plan.
    
    [:octicons-home-16: پەڕەی سەرەکی](https://proton.me/mail){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion){ .card-link title="خزمەتگوزاری ئۆنیەن" }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="سیاسەتی تایبەتێتی" }
    [:octicons-info-16:](https://proton.me/support/mail){ .card-link title=دۆکیمێنتەکان}
    [:octicons-code-16:](https://github.com/ProtonMail){ .card-link title="سەرچاوەی کۆد" }
    
    ??? داگرتنەکان
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonmail.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id979659905)
        - [:simple-github: GitHub](https://github.com/ProtonMail/proton-mail-android/releases)
        - [:simple-windows11: Windows](https://proton.me/mail/bridge#download)
        - [:simple-apple: macOS](https://proton.me/mail/bridge#download)
        - [:simple-linux: Linux](https://proton.me/mail/bridge#download)
        - [:octicons-browser-16: Web](https://mail.proton.me)

هەژمارە بەخۆڕایەکان هەندێک سنووریان هەیە، وەک نەتوانینی گەڕان لەناو دەقی نامە و مافی نەبوونی بەکارهێنانی [Proton Mail Bridge](https://proton.me/mail/bridge)، کە پێویستە بۆ بەکارهێنانی[ ڕاژەخوازە پێشنیارکراوەکانی سەر کۆمپیوتەر](email-clients.md) (نـم. Thunderbird). هەژمارە پارەدراوەکان هەندێک تایبەتمەندی لەخۆدەگرن وەک Proton Mail Bridge، کۆگای زیادە، و پشتگیری دۆمەینە تایبەتەکان. [نامەیەکی تاقیکردنەوە](https://proton.me/blog/security-audit-all-proton-apps) بە مەبەستی لایەنگری بۆ کاربەرنامەکانی Proton Mail پێشکەشکرا لە 9ـی تشرینی دووەمی(نۆڤێمبەری) ساڵی 2021 لەلایەن [Securitum](https://research.securitum.com).

ئەگەر پلانی Business, Proton Unlimited یان پلانی Visionary هەبێت، ئەوا بەخۆڕایی بەژداربوون لە [SimpleLogin](#simplelogin) وەردەگریت.

Proton Mail ڕاپۆرتی تێکچوونە ناوخۆییەکانی هەیە، کە ئەوان هاوبەشی **ناکەن** لەگەڵ لایەنە سێیەمەکان. ئەمە دەتوانێ لە ناچالاک بکرێت لە: **Settings** > **Go to Settings** > **Account** > **Security and privacy** > **Send crash reports**.

#### :material-check:{ .pg-green } دۆمەینە تایبەتیەکان و نازناوەکان

بەژداربووانی Proton Mail دەتوانن دۆمەینی خۆیان بەکاربێنن لەگەل خزمەتگوزاریەکە یان <a href=https://proton.me/support/catch-all>هەموو نامەیەک بگرنەوە</a>. هەروەها Proton Mail پشتگیری دەکات لە [ناونیشانی دووەمی](https://proton.me/support/creating-aliases)، کە بەسوودە بۆ ئەو کەسانەی نایانەوێت دۆمەین بکڕن.

#### :material-check:{ .pg-green }شێوازی پارەدانی نهێنی

Proton Mail پارەی نەخت [وەردەگرێت](https://proton.me/support/payment-options) لەڕێگای پۆستە, لەگەڵ شێوازە باوەکانی تری پارەدان وەک [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc)، credit/debit card، و Paypal.

#### :material-check:{ .pg-green }پارێزراوێتی هەژمار

Proton Mail supports TOTP [two factor authentication](https://proton.me/support/two-factor-authentication-2fa) and [hardware security keys](https://proton.me/support/2fa-security-key) using FIDO2 or U2F standards. The use of a hardware security key requires setting up TOTP two factor authentication first.

#### :material-check:{ .pg-green }پارێزراوێتی زانیاری

Proton Mail تەکنەلۆژیای [شفرکردن و تێپەڕبوونی-ئەستەمی](https://proton.me/blog/zero-access-encryption) بەکاردێنێت بۆ پۆستە ئەلکتڕۆنیەکان و [ڕۆژ ژمێرەکانت](https://proton.me/news/protoncalendar-security-model). زانیارەکانی، کە بە تەکنەلۆژیای شفرەکردن و تێپەربوونی-ئەستەمی پارێزگاریان لێکراوە تەنهیا تۆو دەستت پێیان دەگات.

هەندێک زانیاری کە هەڵگیراون لەناو [ Proton Contacts](https://proton.me/support/proton-contacts)، وەک ناوە پیشاندراوەکان و ناونیشانی پۆستە ئەلکتڕۆنیەکان، ئەوائەوانە پارێزگاریان لێ نەکراوە بە تەکنەلۆژیای شفرکردن و تێپەڕبوونی-ئەستەمی. ئەو خانانەی Contacts کە پشتگیری لە شفرکردن و تێپەڕبوونی-ئەستەمی دەکەن، بەشێوەی وێنەیەکی بچووکراوەی قفڵ نیشان دەدرێن.

#### :material-check:{ .pg-green } شفرکردنی پۆستەی ئەلکتڕۆنی

Proton Mail [شفرکردنی OpenPGP زیادکردووە](https://proton.me/support/how-to-use-pgp) بۆ ماڵپەری پۆستەی ئەلکتڕۆنییەکەیان. پۆستەی ئەلکتڕۆنی نێوان هەژمارەکانی Proton Mail خۆکارانە شفرکراوە، بەڵام شفرکردن لە نێوان Proton Mail و پۆستەی ئەلکتڕۆنی تر شفردەکرێن بە ئاسانی لەڕێگەی کلیلی OpenPGP، کە لە ڕێکخستنەکانی هەژمارەکەت هەیە. هەروەها ئەوان ڕێگەت پێدەدەن بە[شفرکردنی نامەکان کە دەینێریت بۆ پۆستە ئەلکتڕۆنیە نـا Proton Mailـەکان](https://proton.me/support/password-protected-emails) بەبێ ئەوەی پێویست بکات ئەوان ناونووسین بۆ هەژمارێکی Proton Mail بکەن یان نەرمەواڵەیەکی وەک OpenPGP بەکاربێنن.

هەروەها Proton Mail پشتگیری دۆزینەوەی کلیلە گشتیەکان دەکات لە HTTPــەوە لە ڕێگای [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). ئەمەڕێگە ئەو کەسانە دەدات کە Proton Mail بەکار ناهێنن بۆئەوەی کلیکە گشتیەکانی هەژماری Proton Mail بە ئاسانی بدۆزنەوە. تا ببێتە هۆی گونجاندن لەگەڵ دابینکەرانی تری E2EE.


#### :material-information-outline:{ .pg-blue } لەناوبردنی هەژمار

ئەگەر هەژمارێکی پارەدراوت هەبێت وە [پارەی پسوولەکەت نەدابێت](https://proton.me/support/delinquency) دوای 14 ڕۆژ، ئەوا ناتوانیت دەستت بگات بە زانیاریەکانت. دوای 30 ڕۆژ، هەژمارەکەت دەبێتە نایاسایی و هیچ نامایەکی ترت بۆ نایەت. لەم ماوەیەدا بەردەوام دەبیت لە وەرگرتنی پسوولە.

#### :material-information-outline:{ .pg-blue } کرداری زیادە

Proton Mail هەژمارێکی "Unlimited" پێشکەش دەکات لەبەرامبەر €9.99 بۆ یەک مانگ، کە توانای بەکارهێنانی Proton VPN چالاک دەکات جگە لە پێشکەشکردنی زیاتر لە هەژمارێک، دۆمەینێک، نازناوێک، وە 500G بۆ کۆکردنەوە.

Poton Mail کرداری میراتی دیجیتاڵی پێشکەش ناکات.

### Mailbox.org

!!! recommendation

    ![Mailbox.org logo](assets/img/email/mailboxorg.svg){ align=right }
    
    **Mailbox** خزمەتگوزاریەکی پۆستەی ئەلکتڕۆنیە کە جەخت لە هەبوونی سەلامەتی و بێ بەرامبەری تایبەتێتی و کارکردن بە وزەیەکی %100ـی هاوڕێی ژینگە. ئەوان لە **2014**ـەوە لە کاردان. Mailbox.org دەکەوێتە بەرلین، لە ئەڵمانیا. هەژمارەکان دەستپێدەکەن لە 2GB بۆ هەڵگرتن، کە دەتوانرێت زیاد بکرێت بەپێی پێویست.
    
    [:octicons-home-16: ماڵپەڕی سەرەکی](https://mailbox.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://mailbox.org/en/data-protection-privacy-policy){ .card-link title="سیاسەتی تایبەتێتی" }
    [:octicons-info-16:](https://kb.mailbox.org/en/private){ .card-link title=دۆکیمێنتەکان}
    
    ??? داگرتنەکان
    
        - [:octicons-browser-16: Web](https://login.mailbox.org)

#### :material-check:{ .pg-green } دۆمەینە تایبەتیەکان و نازناوەکان

Mailbox.org ڕێگەت پێ دەدات دۆمەینی خۆت خۆت بەکاربێنی، وە پشتگیری لە [گرتنەوەی هەموو نامەکان](https://kb.mailbox.org/display/MBOKBEN/Using+catch-all+alias+with+own+domain) دەکات. هەروەها Mailbox.org پشتگیری دەکات لە [ناونیشانی دووەمی](https://kb.mailbox.org/display/BMBOKBEN/What+is+an+alias+and+how+do+I+use+it)، کە بەسوودە ئەگەر ناتەوێت دۆمەین بکڕیت.

#### :material-check:{ .pg-green }شێوازی پارەدانی نهێنی

Mailbox.org هیچ جۆرە دراوێکی دیجیتاڵی قبوڵ ناکات بەهۆی ڕاگرتنی کارەکانی شێوازی پارەدانەکەیان BitPay لە ئەڵمانیا. هەرچۆنێک بێت، ئەوان پارە وەردەگرن لە ڕێگەی نەخت بە پۆستە یان لە ڕێی هەژماری بانکی، گواستنەوەی بانک، کرێدیت کارت، PayPal لەگەڵ دوو شێوازی تایبەت بە ئەڵمانیا: paydirekt و Sofortüberweisung.

#### :material-check:{ .pg-green }پارێزراوێتی هەژمار

Mailbox.org تەنها پشتگیری لە [سەلماندنی دووانی](https://kb.mailbox.org/display/MBOKBEN/How+to+use+two-factor+authentication+-+2FA) بۆ ماڵپەری پۆستەی ئەلکتڕۆنییەکەیان دەکات. دەتوانیت TOTP بەکاربێنیت یان [Yubikey](https://en.wikipedia.org/wiki/YubiKey) لەڕێگای [Yubicloud](https://www.yubico.com/products/services-software/yubicloud). شیوازە باوەکانی وەک [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) هێشتا پشتگیری نەکراون.

#### :material-information-outline:{ .pg-blue }پارێزراوێتی زانیاری

Mailbox.org ڕیگ دەدات بە شفرکردنی پۆستە هاتتووەکان بە بەکارهێنانی [سندوقی پۆستەی شفراوی](https://kb.mailbox.org/display/MBOKBEN/The+Encrypted+Mailbox) ئەوان. نامە نوێکانی کە تۆ وەریدەگری ڕاستەوخۆ بە کلیلی گشتیت شفر دەکرێن.

هەرچۆنێك بێت، [Open-Exchange](https://en.wikipedia.org/wiki/Open-Xchange)، ئەو نەرمەواڵەی لەلایەن Mailbox.org بەکاردەهێندرێت, [پشتگیری ناکات](https://kb.mailbox.org/display/BMBOKBEN/Encryption+of+calendar+and+address+book) لە شفرەکردنی پەرتووکی ناونیشانەکانت و ڕۆژژمێرەکەت. [بژاردەیەکی سەربەخۆ](calendar.md) لەوانەیە گونجاوتر بێت بۆ ئەم زانیاریە.

#### :material-check:{ .pg-green } شفرکردنی پۆستەی ئەلکتڕۆنی

Mailbox.org [شفرکردنی OpenPGP زیادکردووە](https://kb.mailbox.org/display/MBOKBEN/Send+encrypted+e-mails+with+Guard) لە ماڵپەری پۆستەی ئەلکتڕۆنییەکەیان، کە ناردنی نامەکان ئاسان دەکات بۆ ئەو کەسانەی کلیلی گشتی OpenPGPـیـان هەیە. هەروەها [وەرگرەکان دەتوانن لە دوورەوە شفری پۆستە ئەلکتڕۆنێیەک لەببەن](https://kb.mailbox.org/display/MBOKBEN/My+recipient+does+not+use+PGP)، کە لەسەر ڕاژەکارەکانی Mailbox.org. ئەم تایبەتمەندیە بەسوودە کاتێک وەرگر لە دوورەوە OpenPGPـی نییە و ناتوانێت شفرەکە لەسەر لەبەرگیراوەیەکی پۆستەکە لاببات لە سندووقی پۆستەکانی خۆیدا.

هەروەها Mailbox.org پشتگیری دۆزینەوەی کلیلە گشتیەکان دەکات لە HTTPــەوە لە ڕێگای [Web Key Directory (WKD)](https://wiki.gnupg.org/WKD). ئەمە ڕێگە بە کەسانی دەرەوەی Mailbox.org دەدات کە کلیلەکانی OpenPGP بۆ هەژمارەکانی Mailbox.org بە ئاسانی بدۆزنەوە، تا ببێتە هۆی گونجاندن لەگەڵ دابینکەرانی تری E2EE.

#### :material-information-outline:{ .pg-blue } لەناوبردنی هەژمار

کاتێک گرێبەستەکەت تەواودەبێت هەژمارەکەت دەگۆڕدرێت بۆ هەژمارێکی سنووردار، [دوای 30 ڕۆژ لە نەگەڕانەوەت ئەوا هەژمارەکەت دەسڕدرێتەوە](https://kb.mailbox.org/en/private/payment-article/what-happens-at-the-end-of-my-contract).

#### :material-information-outline:{ .pg-blue } کرداری زیادە

دەتوانیت هەژمێرەکەی Mailbox.org بەکاربێنی لەڕێگەی IMAP/SMTP بە بەکارهێنانی [خزمەتگوزاری ](https://kb.mailbox.org/display/MBOKBEN/The+Tor+exit+node+of+mailbox.org)onian. هەرچۆنێک بێت، ناتوانیت لە ڕێگەی ڕووکاری ماڵپەڕی پۆستەی ئەلکتڕۆنییەکەیان خزمەتگوزاری .onian بەکاربهێنیت وە لەوانەیە ڕووبەڕووی هەڵەی بڕوانامەی TLS ببیتەوە.

هەموو هەژمارەکانی کە هەورە کۆگایەکی سنوورداریان هەیە، [دەتوانرێت شفر بکرێن](https://kb.mailbox.org/display/MBOKBEN/Encrypt+files+on+your+Drive). Mailbox.org also offers the alias [@secure.mailbox.org](https://kb.mailbox.org/display/MBOKBEN/Ensuring+E-Mails+are+Sent+Securely), which enforces the TLS encryption on the connection between mail servers, otherwise the message will not be sent at all. Mailbox.org also supports [Exchange ActiveSync](https://en.wikipedia.org/wiki/Exchange_ActiveSync) in addition to standard access protocols like IMAP and POP3.

Mailbox.org has a digital legacy feature for all plans. You can choose whether you want any of your data to be passed to heirs providing that they apply and provide your testament. Alternatively, you can nominate a person by name and address.

## More Providers

These providers store your emails with zero-knowledge encryption, making them great options for keeping your stored emails secure. However, they don't support interoperable encryption standards for E2EE communications between providers.

<div class="grid cards" markdown>

- ![StartMail logo](assets/img/email/startmail.svg#only-light){ .twemoji }![StartMail logo](assets/img/email/startmail-dark.svg#only-dark){ .twemoji } [StartMail](email.md#startmail)
- ![Tutanota logo](assets/img/email/tutanota.svg){ .twemoji } [Tutanota](email.md#tutanota)

</div>

### StartMail

!!! recommendation

    ![StartMail logo](assets/img/email/startmail.svg#only-light){ align=right }
    ![StartMail logo](assets/img/email/startmail-dark.svg#only-dark){ align=right }
    
    **StartMail** is an email service with a focus on security and privacy through the use of standard OpenPGP encryption. StartMail has been in operation since 2014 and is based in Boulevard 11, Zeist Netherlands. Accounts start with 10GB. They offer a 30-day trial.
    
    [:octicons-home-16: Homepage](https://www.startmail.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startmail.com/en/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.startmail.com){ .card-link title=Documentation}
    
    ??? downloads
    
        - [:octicons-browser-16: Web](https://mail.startmail.com/login)

#### :material-check:{ .pg-green } دۆمەینە تایبەتیەکان و نازناوەکان

Personal accounts can use [Custom or Quick](https://support.startmail.com/hc/en-us/articles/360007297457-Aliases) aliases. [Custom domains](https://support.startmail.com/hc/en-us/articles/4403911432209-Setup-a-custom-domain) are also available.

#### :material-alert-outline:{ .pg-orange } Private Payment Methods

StartMail accepts Visa, MasterCard, American Express and Paypal. StartMail also has other [payment options](https://support.startmail.com/hc/en-us/articles/360006620637-Payment-methods) such as [Bitcoin](advanced/payments.md#other-coins-bitcoin-ethereum-etc) (currently only for Personal accounts) and SEPA Direct Debit for accounts older than a year.

#### :material-check:{ .pg-green }پارێزراوێتی هەژمار

StartMail supports TOTP two factor authentication [for webmail only](https://support.startmail.com/hc/en-us/articles/360006682158-Two-factor-authentication-2FA). They do not allow U2F security key authentication.

#### :material-information-outline:{ .pg-blue }پارێزراوێتی زانیاری

StartMail has [zero access encryption at rest](https://www.startmail.com/en/whitepaper/#_Toc458527835), using their "user vault" system. When you log in, the vault is opened, and the email is then moved to the vault out of the queue where it is decrypted by the corresponding private key.

StartMail supports importing [contacts](https://support.startmail.com/hc/en-us/articles/360006495557-Import-contacts) however, they are only accessible in the webmail and not through protocols such as [CalDAV](https://en.wikipedia.org/wiki/CalDAV). Contacts are also not stored using zero knowledge encryption.

#### :material-check:{ .pg-green } شفرکردنی پۆستەی ئەلکتڕۆنی

StartMail has [integrated encryption](https://support.startmail.com/hc/en-us/sections/360001889078-Encryption) in their webmail, which simplifies sending encrypted messages with public OpenPGP keys. However, they do not support the Web Key Directory standard, making the discovery of a Startmail mailbox's public key more challenging for other email providers or clients.

#### :material-information-outline:{ .pg-blue } لەناوبردنی هەژمار

On account expiration, StartMail will permanently delete your account after [6 months in 3 phases](https://support.startmail.com/hc/en-us/articles/360006794398-Account-expiration).

#### :material-information-outline:{ .pg-blue } Additional Functionality

StartMail allows for proxying of images within emails. If you allow the remote image to be loaded, the sender won't know what your IP address is.

StartMail does not offer a digital legacy feature.

### Tutanota

!!! recommendation

    ![Tutanota logo](assets/img/email/tutanota.svg){ align=right }
    
    **Tutanota** is an email service with a focus on security and privacy through the use of encryption. Tutanota has been in operation since **2011** and is based in Hanover, Germany. Accounts start with 1GB storage with their free plan.
    
    [:octicons-home-16: Homepage](https://tutanota.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tutanota.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://tutanota.com/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/tutao/tutanota){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://tutanota.com/community/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.tutao.tutanota)
        - [:simple-appstore: App Store](https://apps.apple.com/app/tutanota/id922429609)
        - [:simple-github: GitHub](https://github.com/tutao/tutanota/releases)
        - [:simple-windows11: Windows](https://tutanota.com/#download)
        - [:simple-apple: macOS](https://tutanota.com/#download)
        - [:simple-linux: Linux](https://tutanota.com/#download)
        - [:octicons-browser-16: Web](https://mail.tutanota.com/)

Tutanota doesn't support the [IMAP protocol](https://tutanota.com/faq/#imap) or the use of third-party [email clients](email-clients.md), and you also won't be able to add [external email accounts](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) to the Tutanota app. Neither [Email import](https://github.com/tutao/tutanota/issues/630) or [subfolders](https://github.com/tutao/tutanota/issues/927) are currently supported, though this is [due to be changed](https://tutanota.com/blog/posts/kickoff-import). Emails can be exported [individually or by bulk selection](https://tutanota.com/howto#generalMail) per folder, which may be inconvenient if you have many folders.

#### :material-check:{ .pg-green } دۆمەینە تایبەتیەکان و نازناوەکان

Paid Tutanota accounts can use up to 5 [aliases](https://tutanota.com/faq#alias) and [custom domains](https://tutanota.com/faq#custom-domain). Tutanota doesn't allow for [subaddressing (plus addresses)](https://tutanota.com/faq#plus), but you can use a [catch-all](https://tutanota.com/howto#settings-global) with a custom domain.

#### :material-information-outline:{ .pg-blue } Private Payment Methods

Tutanota only directly accepts credit cards and PayPal, however [cryptocurrency](cryptocurrency.md) can be used to purchase gift cards via their [partnership](https://tutanota.com/faq/#cryptocurrency) with Proxystore.

#### :material-check:{ .pg-green }پارێزراوێتی هەژمار

Tutanota supports [two factor authentication](https://tutanota.com/faq#2fa) with either TOTP or U2F.

#### :material-check:{ .pg-green }پارێزراوێتی زانیاری

Tutanota has [zero access encryption at rest](https://tutanota.com/faq#what-encrypted) for your emails, [address book contacts](https://tutanota.com/faq#encrypted-address-book), and [calendars](https://tutanota.com/faq#calendar). This means the messages and other data stored in your account are only readable by you.

#### :material-information-outline:{ .pg-blue } Email Encryption

Tutanota [does not use OpenPGP](https://www.tutanota.com/faq/#pgp). Tutanota accounts can only receive encrypted emails from non-Tutanota email accounts when sent via a [temporary Tutanota mailbox](https://www.tutanota.com/howto/#encrypted-email-external).

#### :material-information-outline:{ .pg-blue } لەناوبردنی هەژمار

Tutanota will [delete inactive free accounts](https://tutanota.com/faq#inactive-accounts) after six months. You can reuse a deactivated free account if you pay.

#### :material-information-outline:{ .pg-blue } Additional Functionality

Tutanota offers the business version of [Tutanota to non-profit organizations](https://tutanota.com/blog/posts/secure-email-for-non-profit) for free or with a heavy discount.

Tutanota also has a business feature called [Secure Connect](https://tutanota.com/secure-connect/). This ensures customer contact to the business uses E2EE. The feature costs €240/y.

Tutanota doesn't offer a digital legacy feature.

## Email Aliasing Services

An email aliasing service allows you to easily generate a new email address for every website you register for. The email aliases you generate are then forwarded to an email address of your choosing, hiding both your "main" email address and the identity of your email provider. True email aliasing is better than plus addressing commonly used and supported by many providers, which allows you to create aliases like yourname+[anythinghere]@example.com, because websites, advertisers, and tracking networks can trivially remove anything after the + sign to know your true email address.

<div class="grid cards" markdown>

- ![AnonAddy logo](assets/img/email/anonaddy.svg#only-light){ .twemoji }![AnonAddy logo](assets/img/email/anonaddy-dark.svg#only-dark){ .twemoji } [AnonAddy](email.md#anonaddy)
- ![SimpleLogin logo](assets/img/email/simplelogin.svg){ .twemoji } [SimpleLogin](email.md#simplelogin)

</div>

Email aliasing can act as a safeguard in case your email provider ever ceases operation. In that scenario, you can easily re-route your aliases to a new email address. In turn, however, you are placing trust in the aliasing service to continue functioning.

Using a dedicated email aliasing service also has a number of benefits over a catch-all alias on a custom domain:

- Aliases can be turned on and off individually when you need them, preventing websites from emailing you randomly.
- Replies are sent from the alias address, shielding your real email address.

They also have a number of benefits over "temporary email" services:

- Aliases are permanent and can be turned on again if you need to receive something like a password reset.
- Emails are sent to your trusted mailbox rather than stored by the alias provider.
- Temporary email services typically have public mailboxes which can be accessed by anyone who knows the address, aliases are private to you.

Our email aliasing recommendations are providers that allow you to create aliases on domains they control, as well as your own custom domain(s) for a modest yearly fee. They can also be self-hosted if you want maximum control. However, using a custom domain can have privacy-related drawbacks: If you are the only person using your custom domain, your actions can be easily tracked across websites simply by looking at the domain name in the email address and ignoring everything before the at (@) sign.

Using an aliasing service requires trusting both your email provider and your aliasing provider with your unencrypted messages. Some providers mitigate this slightly with automatic PGP encryption, which reduces the number of parties you need to trust from two to one by encrypting incoming emails before they are delivered to your final mailbox provider.

### AnonAddy

!!! recommendation

    ![AnonAddy logo](assets/img/email/anonaddy.svg#only-light){ align=right }
    ![AnonAddy logo](assets/img/email/anonaddy-dark.svg#only-dark){ align=right }
    
    **AnonAddy** lets you create 20 domain aliases on a shared domain for free, or unlimited "standard" aliases which are less anonymous.
    
    [:octicons-home-16: Homepage](https://anonaddy.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://anonaddy.com/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://app.anonaddy.com/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/anonaddy){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://anonaddy.com/donate/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-android: Android](https://anonaddy.com/faq/#is-there-an-android-app)
        - [:material-apple-ios: iOS](https://anonaddy.com/faq/#is-there-an-ios-app)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-GB/firefox/addon/anonaddy/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/anonaddy-anonymous-email/iadbdpnoknmbdeolbapdackdcogdmjpe)

The number of shared aliases (which end in a shared domain like @anonaddy.me) that you can create is limited to 20 on AnonAddy's free plan and 50 on their $12/year plan. You can create unlimited standard aliases (which end in a domain like @[username].anonaddy.com or a custom domain on paid plans), however, as previously mentioned, this can be detrimental to privacy because people can trivially tie your standard aliases together based on the domain name alone. Unlimited shared aliases are available for $36/year.

Notable free features:

- [x] 20 Shared Aliases
- [x] Unlimited Standard Aliases
- [ ] No Outgoing Replies
- [x] 2 Recipient Mailboxes
- [x] Automatic PGP Encryption

### SimpleLogin

!!! recommendation

    ![Simplelogin logo](assets/img/email/simplelogin.svg){ align=right }
    
    **SimpleLogin** is a free service which provides email aliases on a variety of shared domain names, and optionally provides paid features like unlimited aliases and custom domains.
    
    [:octicons-home-16: Homepage](https://simplelogin.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://simplelogin.io/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://simplelogin.io/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/simple-login){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.simplelogin.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1494359858)
        - [:simple-github: GitHub](https://github.com/simple-login/Simple-Login-Android/releases)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/simplelogin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/dphilobhebphkdjbpfohgikllaljmgbn)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/simpleloginreceive-sen/diacfpipniklenphgljfkmhinphjlfff)
        - [:simple-safari: Safari](https://apps.apple.com/app/id1494051017)

SimpleLogin was [acquired by Proton AG](https://proton.me/news/proton-and-simplelogin-join-forces) as of April 8, 2022. If you use Proton Mail for your primary mailbox, SimpleLogin is a great choice. As both products are now owned by the same company you now only have to trust a single entity. We also expect that SimpleLogin will be more tightly integrated with Proton's offerings in the future. SimpleLogin continues to support forwarding to any email provider of your choosing. Securitum [audited](https://simplelogin.io/blog/security-audit/) SimpleLogin in early 2022 and all issues [were addressed](https://simplelogin.io/audit2022/web.pdf).

You can link your SimpleLogin account in the settings with your Proton account. If you have the Proton Unlimited, Business, or Visionary Plan, you will have SimpleLogin Premium for free.

Notable free features:

- [x] 10 Shared Aliases
- [x] Unlimited Replies
- [x] 1 Recipient Mailbox

## Self-Hosting Email

Advanced system administrators may consider setting up their own email server. Mail servers require attention and continuous maintenance in order to keep things secure and mail delivery reliable.

### Combined software solutions

!!! recommendation

    ![Mailcow logo](assets/img/email/mailcow.svg){ align=right }
    
    **Mailcow** is a more advanced mail server perfect for those with a bit more Linux experience. It has everything you need in a Docker container: A mail server with DKIM support, antivirus and spam monitoring, webmail and ActiveSync with SOGo, and web-based administration with 2FA support.
    
    [:octicons-home-16: Homepage](https://mailcow.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailcow.github.io/mailcow-dockerized-docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mailcow/mailcow-dockerized){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.servercow.de/mailcow?lang=en#sal){ .card-link title=Contribute }

!!! recommendation

    ![Mail-in-a-Box logo](assets/img/email/mail-in-a-box.svg){ align=right }
    
    **Mail-in-a-Box** is an automated setup script for deploying a mail server on Ubuntu. Its goal is to make it easier for people to set up their own mail server.
    
    [:octicons-home-16: Homepage](https://mailinabox.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailinabox.email/guide.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mail-in-a-box/mailinabox){ .card-link title="Source Code" }

For a more manual approach we've picked out these two articles:

- [Setting up a mail server with OpenSMTPD, Dovecot and Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd/) (2019)
- [How To Run Your Own Mail Server](https://www.c0ffee.net/blog/mail-server-guide/) (August 2017)

## Criteria

**Please note we are not affiliated with any of the providers we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements for any Email provider wishing to be recommended, including implementing industry best practices, modern technology and more. We suggest you familiarize yourself with this list before choosing an Email provider, and conduct your own research to ensure the Email provider you choose is the right choice for you.

### Technology

We regard these features as important in order to provide a safe and optimal service. You should consider whether the provider which has the features you require.

**Minimum to Qualify:**

- Encrypts email account data at rest with zero-access encryption.
- Export capability as [Mbox](https://en.wikipedia.org/wiki/Mbox) or individual .eml with [RFC5322](https://datatracker.ietf.org/doc/rfc5322/) standard.
- Allow users to use their own [domain name](https://en.wikipedia.org/wiki/Domain_name). Custom domain names are important to users because it allows them to maintain their agency from the service, should it turn bad or be acquired by another company which doesn't prioritize privacy.
- Operates on owned infrastructure, i.e. not built upon third-party email service providers.

**Best Case:**

- Encrypts all account data (Contacts, Calendars, etc) at rest with zero-access encryption.
- Integrated webmail E2EE/PGP encryption provided as a convenience.
- Support for [WKD](https://wiki.gnupg.org/WKD) to allow improved discovery of public OpenPGP keys via HTTP. GnuPG users can get a key by typing: `gpg --locate-key example_user@example.com`
- Support for a temporary mailbox for external users. This is useful when you want to send an encrypted email, without sending an actual copy to your recipient. These emails usually have a limited lifespan and then are automatically deleted. They also don't require the recipient to configure any cryptography like OpenPGP.
- Availability of the email provider's services via an [onion service](https://en.wikipedia.org/wiki/.onion).
- [Subaddressing](https://en.wikipedia.org/wiki/Email_address#Subaddressing) support.
- Catch-all or alias functionality for those who own their own domains.
- Use of standard email access protocols such as IMAP, SMTP or [JMAP](https://en.wikipedia.org/wiki/JSON_Meta_Application_Protocol). Standard access protocols ensure customers can easily download all of their email, should they want to switch to another provider.

### Privacy

We prefer our recommended providers to collect as little data as possible.

**Minimum to Qualify:**

- Protect sender's IP address. Filter it from showing in the `Received` header field.
- Don't require personally identifiable information (PII) besides a username and a password.
- Privacy policy that meets the requirements defined by the GDPR
- Must not be hosted in the US due to [ECPA](https://en.wikipedia.org/wiki/Electronic_Communications_Privacy_Act#Criticism) which has [yet to be reformed](https://epic.org/ecpa/).

**Best Case:**

- Accepts [anonymous payment options](advanced/payments.md) ([cryptocurrency](cryptocurrency.md), cash, gift cards, etc.)

### Security

Email servers deal with a lot of very sensitive data. We expect that providers will adopt best industry practices in order to protect their members.

**Minimum to Qualify:**

- Protection of webmail with 2FA, such as TOTP.
- Zero access encryption, builds on encryption at rest. The provider does not have the decryption keys to the data they hold. This prevents a rogue employee leaking data they have access to or remote adversary from releasing data they have stolen by gaining unauthorized access to the server.
- [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) support.
- No TLS errors or vulnerabilities when being profiled by tools such as [Hardenize](https://www.hardenize.com/), [testssl.sh](https://testssl.sh/), or [Qualys SSL Labs](https://www.ssllabs.com/ssltest); this includes certificate related errors and weak DH parameters, such as those that led to [Logjam](https://en.wikipedia.org/wiki/Logjam_(computer_security)).
- A server suite preference (optional on TLSv1.3) for strong cipher suites which support forward secrecy and authenticated encryption.
- A valid [MTA-STS](https://tools.ietf.org/html/rfc8461) and [TLS-RPT](https://tools.ietf.org/html/rfc8460) policy.
- Valid [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) records.
- Valid [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) and [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) records.
- Have a proper [DMARC](https://en.wikipedia.org/wiki/DMARC) record and policy or use [ARC](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) for authentication. If DMARC authentication is being used, the policy must be set to `reject` or `quarantine`.
- A server suite preference of TLS 1.2 or later and a plan for [RFC8996](https://datatracker.ietf.org/doc/rfc8996/).
- [SMTPS](https://en.wikipedia.org/wiki/SMTPS) submission, assuming SMTP is used.
- Website security standards such as:
    - [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
    - [Subresource Integrity](https://en.wikipedia.org/wiki/Subresource_Integrity) if loading things from external domains.
- Must support viewing of [Message headers](https://en.wikipedia.org/wiki/Email#Message_header), as it is a crucial forensic feature to determine if an email is a phishing attempt.

**Best Case:**

- Support for hardware authentication, i.e. U2F and [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn). U2F and WebAuthn are more secure as they use a private key stored on a client-side hardware device to authenticate people, as opposed to a shared secret that is stored on the web server and on the client side when using TOTP. Furthermore, U2F and WebAuthn are more resistant to phishing as their authentication response is based on the authenticated [domain name](https://en.wikipedia.org/wiki/Domain_name).
- [DNS Certification Authority Authorization (CAA) Resource Record](https://tools.ietf.org/html/rfc6844) in addition to DANE support.
- Implementation of [Authenticated Received Chain (ARC)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain), this is useful for people who post to mailing lists [RFC8617](https://tools.ietf.org/html/rfc8617).
- Bug-bounty programs and/or a coordinated vulnerability-disclosure process.
- Website security standards such as:
    - [Content Security Policy (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy)
    - [RFC9163 Expect-CT](https://datatracker.ietf.org/doc/rfc9163/)

### Trust

You wouldn't trust your finances to someone with a fake identity, so why trust them with your email? We require our recommended providers to be public about their ownership or leadership. We also would like to see frequent transparency reports, especially in regard to how government requests are handled.

**Minimum to Qualify:**

- Public-facing leadership or ownership.

**Best Case:**

- Public-facing leadership.
- Frequent transparency reports.

### Marketing

With the email providers we recommend we like to see responsible marketing.

**Minimum to Qualify:**

- Must self-host analytics (no Google Analytics, Adobe Analytics, etc). The provider's site must also comply with [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) for those who wish to opt-out.

Must not have any marketing which is irresponsible:

- Claims of "unbreakable encryption." Encryption should be used with the intention that it may not be secret in the future when the technology exists to crack it.
- Making guarantees of protecting anonymity 100%. When someone makes a claim that something is 100% it means there is no certainty for failure. We know people can quite easily deanonymize themselves in a number of ways, e.g.:

- Reusing personal information e.g. (email accounts, unique pseudonyms, etc) that they accessed without anonymity software (Tor, VPN, etc)
- [Browser fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)

**Best Case:**

- Clear and easy to read documentation. This includes things like, setting up 2FA, email clients, OpenPGP, etc.

### Additional Functionality

While not strictly requirements, there are some other convenience or privacy factors we looked into when determining which providers to recommend.

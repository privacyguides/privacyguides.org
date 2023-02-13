---
title: "קליינטים של דוא\"ל"
icon: material/email-open
---

רשימת ההמלצות שלנו מכילה לקוחות דוא"ל התומכים הן ב[OpenPGP](encryption.md#openpgp) והן באימות חזק כגון [הרשאת פתוחה ](https://en.wikipedia.org/wiki/OAuth)(OAuth). OAuth מאפשר לך להשתמש ב - [אימות רב - גורמי](basics/multi-factor-authentication.md) ולמנוע גניבת חשבון.

??? note "דוא"ל אינו מספק סודיות קדימה"

    בעת שימוש בטכנולוגיית הצפנה מקצה לקצה (E2EE) כמו OpenPGP, דואר אלקטרוני עדיין יהיה [כמה metadata](email.md#email-metadata-overview) שאינו מוצפן בכותרת של הדואר האלקטרוני.

    OpenPGP גם לא תומך ב [forward secrecy ]( https://en.wikipedia.org/wiki/Forward_secrecy), כלומר אם המפתח הפרטי שלך או של הנמען ייגנב אי פעם, כל ההודעות הקודמות המוצפנות בו ייחשפו: [כיצד אוכל להגן על המפתחות הפרטיים שלי ?]( basics/email - security.md) שקול להשתמש במדיום המספק סודיות קדימה:
    
    [Real-Time Communication](real-time-communication.md){ .md-button }

## חוצה פלטפורמות

### Thunderbird

!!! recommendation

    ![Thunderbird logo ](assets/img/email-clients/thunderbird.svg){ align=right }
    
    **Thunderbird** הוא קליינט חופשי, בקוד פתוח, דואר אלקטרוני חוצה פלטפורמות, מקבץ חדשות, עדכון חדשות וצ'אט (XMPP, IRC, Twitter) שפותח על ידי קהילת Thunderbird, ובעבר על ידי קרן Mozilla.
    
    [:octicons-home-16: Homepage](https://www.thunderbird.net){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mozilla.org/privacy/thunderbird){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.mozilla.org/products/thunderbird){ .card-link title=Documentation}
    [:octicons-code-16:](https://hg.mozilla.org/comm-central){ .card-link title="Source Code" }
    
    ??? downloads "הורדות"
    
        - [:simple-windows11: Windows](https://www.thunderbird.net)
        - [:simple-apple: macOS](https://www.thunderbird.net)
        - [:simple-linux: Linux](https://www.thunderbird.net)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.mozilla.Thunderbird)

#### תצורה מומלצת

מומלץ לשנות חלק מהגדרות אלה כדי להפוך את Thunderbird לפרטי יותר.

ניתן למצוא אפשרויות אלה ב - :material-menu: → **הגדרות** → **פרטיות & אבטחה**.

##### תוכן אינטרנט

- [ ] בטל את הסימון  **זכור אתרים וקישורים שביקרתי**
- [ ] בטל את הסימון  **קבל קובצי Cookie מאתרים**

##### טלמטריה

- [ ] בטל את הסימון  **אפשר ל - Thunderbird לשלוח נתונים טכניים ונתוני אינטראקציה ל - Mozilla**

#### Thunderbird-user.js (מתקדם)

[`thunderbird-user.js`](https://github.com/HorlogeSkynet/thunderbird-user.js), היא קבוצה של אפשרויות תצורה שמטרתה להשבית כמה שיותר מתכונות הגלישה באינטרנט בתוך Thunderbird על מנת להקטין את שטח הפנים ולשמור על פרטיות. חלק מהשינויים הם backported מפרויקט [Arkenfox](https://github.com/arkenfox/user.js).

## ספציפית לפלטפורמה

### Apple Mail ‏ (macOS)

!!! recommendation

    ![Apple Mail logo](assets/img/email-clients/applemail.png){ align=right }
    
    **Apple Mail** כלול ב - macOS וניתן להרחיב אותו כך שתהיה תמיכה ב - OpenPGP עם [GPG Suite ]( encryption.md#gpg-suite), מה שמוסיף את היכולת לשלוח דוא"ל מוצפן.
    
    [:octicons-home-16: Homepage](https://support.apple.com/guide/mail/welcome/mac){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/legal/privacy/en-ww/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.apple.com/guide/mail/toc){ .card-link title=Documentation}

### Canary Mail (iOS)

!!! recommendation

    ![Canary Mail logo](assets/img/email-clients/canarymail.svg){ align=right }
    
    **Canary Mail ** הוא קליינט דוא"ל בתשלום שנועד להפוך הצפנה מקצה לקצה ללא תקלות עם תכונות אבטחה כגון נעילת אפליקציה ביומטרית.
    
    [:octicons-home-16: Homepage](https://canarymail.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://canarymail.io/privacy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://canarymail.zendesk.com/){ .card-link title=Documentation}
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.canarymail.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1236045954)
        - [:simple-windows11: Windows](https://canarymail.io/downloads.html)

!!! שים לב

    Canary Mail הוציאה רק לאחרונה קליינט של ווידוס ו - אנדרואיד, אם כי אנחנו לא מאמינים שהם יציבים כמו עמיתיהם ב - iOS וב - Mac.

Canary Mail הוא קוד סגור. אנו ממליצים על כך בשל האפשרויות המועטות שיש לקליינטים דוא"ל ב - iOS התומכים ב - PGP E2EE.

### FairEmail (אנדרואיד)

!!! recommendation

    ![FairEmail logo ](assets/img/email-clients/fairemail.svg){ align=right }
    
    ** FairEmail ** היא אפליקציה מינימלית לדואר אלקטרוני בקוד פתוח, המשתמשת בסטנדרטים פתוחים (IMAP, SMTP, OpenPGP) עם שימוש דל בנתונים ובסוללות.
    
    [:octicons-home-16: Homepage](https://email.faircode.eu){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/M66B/FairEmail/blob/master/PRIVACY.md){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/M66B/FairEmail/blob/master/FAQ.md){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/M66B/FairEmail){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://email.faircode.eu/donate/){ .card-link title=Contribute }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=eu.faircode.email)
        - [:simple-github: GitHub](https://github.com/M66B/FairEmail/releases)

### GNOME Evolution (GNOME)

!!! recommendation

    ![Evolution logo ](assets/img/email-clients/evolution.svg){ align=right }
    
    **Evolution ** הוא יישום לניהול מידע אישי המספק דואר משולב, לוח שנה ופונקציונליות של פנקס כתובות. ל - Evolution יש [documentation](https://help.gnome.org/users/evolution/stable/) נרחב כדי לעזור לך להתחיל.
    
    [:octicons-home-16: Homepage](https://wiki.gnome.org/Apps/Evolution){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://wiki.gnome.org/Apps/Evolution/PrivacyPolicy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://help.gnome.org/users/evolution/stable/){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitlab.gnome.org/GNOME/evolution/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.gnome.org/donate/){ .card-link title=Contribute }
    
    ??? downloads "הורדות"
    
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.gnome.Evolution)

### K -9 Mail (אנדרואיד)

!!! recommendation

    ![K -9 Mail logo ](assets/img/email-clients/k9mail.svg){ align=right }
    
    **K -9 Mail ** היא יישום דואר עצמאי התומך בתיבות דואר POP3 ו - IMAP, אך תומך בדואר דחיפה עבור IMAP בלבד.
    
    בעתיד, K -9 Mail יהיה הקליינט [ממותג רשמית]( https://k9mail.app/2022/06/13/K -9 - Mail-and-thunderbird.html) של Thunderbird עבור אנדרואיד.
    
    [:octicons-home-16: Homepage](https://k9mail.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://k9mail.app/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.k9mail.app/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/k9mail/k-9){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://k9mail.app/contribute){ .card-link title=Contribute }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.fsck.k9)
        - [:simple-github: GitHub](https://github.com/k9mail/k-9/releases)

### Kontact (KDE)

!!! recommendation

    ![Kontact logo ](assets/img/email-clients/kontact.svg){ align=right }
    
    **Kontact ** הוא יישום של מנהל מידע אישי (PIM) מהפרויקט [KDE](https://kde.org). הוא מספק קליינט דואר, פנקס כתובות, ארגון וקליינט RSS.
    
    [:octicons-home-16: Homepage](https://kontact.kde.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://kde.org/privacypolicy-apps){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://kontact.kde.org/users/){ .card-link title=Documentation}
    [:octicons-code-16:](https://invent.kde.org/pim/kmail){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://kde.org/community/donations/){ .card-link title=Contribute }
    
    ??? downloads "הורדות"
    
        - [:simple-linux: Linux](https://kontact.kde.org/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.kde.kontact)

### Mailvelope (דפדפן)

!!! recommendation

    ![Mailvelope logo](assets/img/email-clients/mailvelope.svg){ align=right }
    
    ** Mailvelop ** היא הרחבת דפדפן המאפשרת החלפת הודעות דוא"ל מוצפנות בהתאם לתקן ההצפנה OpenPGP.
    
    [:octicons-home-16: Homepage](https://www.mailvelope.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mailvelope.com/en/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://mailvelope.com/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mailvelope/mailvelope){ .card-link title="Source Code" }
    
    ??? downloads "הורדות"
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/mailvelope)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/mailvelope/kajibbejlbohfaggdiogboambcijhkke)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/mailvelope/dgcbddhdhjppfdfjpciagmmibadmoapc)

### NeoMutt (CLI)

!!! recommendation

    ![NeoMutt logo](assets/img/email-clients/mutt.svg){ align=right }
    
    ** NeoMutt ** הוא קורא דואר בשורת פקודה בקוד פתוח (או MUA) עבור לינוקס ו - BSD. זה נגזרת של [Mutt](https://en.wikipedia.org/wiki/Mutt_( email_client)) עם תכונות נוספות.
    
    NeoMutt הוא קליינט מבוסס טקסט בעל עקומת למידה תלולה. עם זאת, ניתן להתאים אישית.
    
    [:octicons-home-16: Homepage](https://neomutt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://neomutt.org/guide/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/neomutt/neomutt){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.paypal.com/paypalme/russon/){ .card-link title=Contribute }
    
    ??? downloads "הורדות"
    
        - [:simple-apple: macOS](https://neomutt.org/distro)
        - [:simple-linux: Linux](https://neomutt.org/distro)

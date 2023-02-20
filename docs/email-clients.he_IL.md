---
title: "קליינטים של דוא\"ל"
icon: material/email-open
---

רשימת ההמלצות שלנו מכילה לקוחות דוא"ל התומכים הן ב[OpenPGP](encryption.md#openpgp) והן באימות חזק כגון [הרשאת פתוחה ](https://en.wikipedia.org/wiki/OAuth)(OAuth). OAuth מאפשר לך להשתמש ב - [אימות רב - גורמי](basics/multi-factor-authentication.md) ולמנוע גניבת חשבון.

??? warning דוא"ל אינו מספק סודיות קדימה"

    בעת שימוש בטכנולוגיית הצפנה מקצה לקצה (E2EE) כמו OpenPGP, דואר אלקטרוני עדיין יהיה [כמה metadata](email.md#email-metadata-overview) שאינו מוצפן בכותרת של הדואר האלקטרוני.

    OpenPGP גם לא תומך ב [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy), כלומר אם המפתח הפרטי שלך או של הנמען ייגנב אי פעם, כל ההודעות הקודמות המוצפנות בו ייחשפו: [כיצד אוכל להגן על המפתחות הפרטיים שלי ?](basics/email-security.md) שקול להשתמש במדיום המספק סודיות קדימה:
    
    [Real-time Communication](real-time-communication.md){ .md-button }

## חוצה פלטפורמות

### Thunderbird

!!! recommendation

    ![Thunderbird לוגו](assets/img/email-clients/thunderbird.svg){ align=right }
    
    **Thunderbird** הוא לקוח דוא"ל, קבוצת דיון, עדכון חדשות וצ'אט (XMPP, IRC, טוויטר) חינמי, שפותח על ידי קהילת Thunderbird, ובעבר על ידי קרן מוזילה.
    
    [:octicons-home-16: דף הבית](https://www.thunderbird.net){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mozilla.org/privacy/thunderbird){ .card-link title="מדינות פרטיות" }
    [:octicons-info-16:](https://support.mozilla.org/products/thunderbird){ .card-link title=תיעוד}
    [:octicons-code-16:](https://hg.mozilla.org/comm-central){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-windows11: ווינדוס](https://www.thunderbird.net)
        - [:simple-apple: macOS](https://www.thunderbird.net)
        - [:simple-linux: לינקוס](https://www.thunderbird.net)
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

### Apple Mail (macOS)

!!! recommendation

    ![Apple Mail לוגו](assets/img/email-clients/applemail.png){ align=right }
    
    **Apple Mail** כלול ב - macOS וניתן להרחיב אותו כך שתהיה תמיכה ב - OpenPGP עם [GPG Suite ]( encryption.md#gpg-suite), מה שמוסיף את היכולת לשלוח דוא"ל מוצפן.
    
    [:octicons-home-16: Homepage](https://support.apple.com/guide/mail/welcome/mac){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/legal/privacy/en-ww/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.apple.com/guide/mail/toc){ .card-link title=Documentation}

### Canary Mail (iOS)

!!! recommendation

    ![Canary Mail לוגו](assets/img/email-clients/canarymail.svg){ align=right }
    
    **Canary Mail ** הוא קליינט דוא"ל בתשלום שנועד להפוך הצפנה מקצה לקצה ללא תקלות עם תכונות אבטחה כגון נעילת אפליקציה ביומטרית.
    
    [:octicons-home-16: Homepage](https://canarymail.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://canarymail.io/privacy.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://canarymail.zendesk.com/){ .card-link title=Documentation}
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.canarymail.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1236045954)
        - [:simple-windows11: Windows](https://canarymail.io/downloads.html)

!!! warning "אזהרה"

    Canary Mail הוציאה רק לאחרונה קליינט של ווידוס ו - אנדרואיד, אם כי אנחנו לא מאמינים שהם יציבים כמו עמיתיהם ב - iOS וב - Mac.

Canary Mail הוא קוד סגור. אנו ממליצים על כך בשל האפשרויות המועטות שיש לקליינטים דוא"ל ב - iOS התומכים ב - PGP E2EE.

### FairEmail (אנדרואיד)

!!! recommendation

    ![FairEmail לוגו](assets/img/email-clients/fairemail.svg){ align=right }
    
    **FairEmail** היא אפליקציית דוא"ל מינימלית בקוד פתוח, המשתמשת בתקנים פתוחים (IMAP, SMTP, OpenPGP) עם שימוש נמוך בנתונים ובסוללה.
    
    [:octicons-home-16: דף הבית](https://email.faircode.eu){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/M66B/FairEmail/blob/master/PRIVACY.md){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://github.com/M66B/FairEmail/blob/master/FAQ.md){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/M66B/FairEmail){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://email.faircode.eu/donate/){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=eu.faircode.email)
        - [:simple-github: GitHub](https://github.com/M66B/FairEmail/releases)

### GNOME Evolution (GNOME)

!!! recommendation

    ![Evolution לוגו](assets/img/email-clients/evolution.svg){ align=right }
    
    **Evolution** הוא יישום לניהול מידע אישי המספק פונקציונליות משולבת של דואר, לוחות שנה ופנקס כתובות. לEvolution יש [documentation](https://help.gnome.org/users/evolution/stable/) נרחב כדי לעזור לך להתחיל.
    
    [:octicons-home-16: דף הבית](https://wiki.gnome.org/Apps/Evolution){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://wiki.gnome.org/Apps/Evolution/PrivacyPolicy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://help.gnome.org/users/evolution/stable/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://gitlab.gnome.org/GNOME/evolution/){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://www.gnome.org/donate/){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.gnome.Evolution)

### K -9 Mail (אנדרואיד)

!!! recommendation

    ![K -9 Mail לוגו](assets/img/email-clients/k9mail.svg){ align=right }
    
    **K -9 Mail** היא יישום דואר עצמאי התומך בתיבות דואר POP3 ו - IMAP, אך תומך בדואר דחיפה עבור IMAP בלבד.
    
    בעתיד, K -9 Mail יהיה הקליינט [ממותג רשמית](https://k9mail.app/2022/06/13/K-9-Mail-and-thunderbird.html) של Thunderbird עבור אנדרואיד.
    
    [:octicons-home-16: דף הבית](https://k9mail.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://k9mail.app/privacy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://docs.k9mail.app/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/k9mail/k-9){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://k9mail.app/contribute){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.fsck.k9)
        - [:simple-github: GitHub](https://github.com/k9mail/k-9/releases)

### Kontact (KDE)

!!! recommendation

    ![Kontact לוגו](assets/img/email-clients/kontact.svg){ align=right }
    
    **Kontact** היא אפליקציית מנהל מידע אישי (PIM) מפרויקט [KDE](https://kde.org). הוא מספק קליינט דואר, פנקס כתובות, ארגון וקליינט RSS.
    
    [:octicons-home-16: דף הבית](https://kontact.kde.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://kde.org/privacypolicy-apps){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://kontact.kde.org/users/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://invent.kde.org/pim/kmail){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://kde.org/community/donations/){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-linux: Linux](https://kontact.kde.org/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.kde.kontact)

### Mailvelope (דפדפן)

!!! recommendation

    ![Mailvelope לוגו](assets/img/email-clients/mailvelope.svg){ align=right }
    
    **Mailvelop** היא הרחבת דפדפן המאפשרת החלפת הודעות דוא"ל מוצפנות בהתאם לתקן ההצפנה OpenPGP.
    
    [:octicons-home-16: דף הבית](https://www.mailvelope.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mailvelope.com/en/privacy-policy){ .card-link title="מדיניות-פרטיות" }
    [:octicons-info-16:](https://mailvelope.com/faq){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/mailvelope/mailvelope){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/mailvelope)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/mailvelope/kajibbejlbohfaggdiogboambcijhkke)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/mailvelope/dgcbddhdhjppfdfjpciagmmibadmoapc)

### NeoMutt (CLI)

!!! recommendation

    ![NeoMutt לוגו](assets/img/email-clients/mutt.svg){ align=right }
    
    **NeoMutt** הוא קורא שורת פקודה בקוד פתוח (או MUA) עבור לינוקס ו-BSD. זה נגזרת של [Mutt](https://en.wikipedia.org/wiki/Mutt_( email_client)) עם תכונות נוספות.
    
    NeoMutt הוא קליינט מבוסס טקסט בעל עקומת למידה תלולה. עם זאת, ניתן להתאים אישית.
    
    [:octicons-home-16: דף הבית](https://neomutt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://neomutt.org/guide/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/neomutt/neomutt){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://www.paypal.com/paypalme/russon/){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-apple: macOS](https://neomutt.org/distro)
        - [:simple-linux: Linux](https://neomutt.org/distro)

## קריטריונים

**שים לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף [לקריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו סט ברור של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! example "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים לכל קטע באתר שלנו, והדבר עשוי להשתנות. אם יש לך שאלות כלשהן לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו](https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו כשהצענו את ההמלצות שלנו אם הוא לא רשום כאן. ישנם גורמים רבים שנלקחים בחשבון ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

### כישורים מינימליים

- יישומים שפותחו עבור מערכות הפעלה בקוד פתוח חייבים להיות קוד פתוח.
- לא יכול לאסוף טלמטריה, או שיש דרך קלה להפוך את כל הטלמטריה ללא זמינה.
- חייב לתמוך בהצפנת הודעות OpenPGP.

### המקרה הטוב ביותר

הקריטריונים הטובים ביותר שלנו מייצגים את מה שהיינו רוצים לראות מהפרויקט המושלם בקטגוריה זו. ייתכן שההמלצות שלנו לא יכללו חלק מהפונקציונליות הזו או את כולה, אך אלו שכן כן עשויות לדרג גבוה יותר מאחרות בדף זה.

- זה צריך להיות קוד פתוח.
- צריך להיות חוצה פלטפורמות.
- אינו אוסף טלמטריה כברירת מחדל.
- צריך לתמוך ב - OpenPGP באופן מקורי, כלומר ללא הרחבות.
- יש לתמוך באחסון הודעות דואר אלקטרוני מוצפנות של OpenPGP באופן מקומי.

---
title: "שיתוף וסנכרון קבצים"
icon: material/share-variant
---

גלה כיצד לשתף באופן פרטי את הקבצים שלך בין המכשירים שלך, עם חברים ובני משפחה, או באופן אנונימי באינטרנט.

## שיתוף קבצים

### Send

!!! recommendation

    ![Send לוגו](assets/img/file-sharing-sync/send.svg){ align=right }
    
    **Send** הוא נגזרת של שירות השליחה של Firefox שהופסק על ידי Mozilla המאפשר לך לשלוח קבצים לאחרים עם קישור. קבצים מוצפנים במכשיר שלך, כך שהם לא יכולים להיקרא על ידי השרת, והם יכולים להיות גם מוגנים בסיסמה. המתחזק של Send מארח [מופע ציבורי]( https://send.vis.ee/). אפשר להשתמש במועדים ציבוריים אחרים, או לארח לשלוח את עצמכם.
    
    [:octicons-home-16: Homepage](https://send.vis.ee){ .md-button .md-button--primary }
    [:octicons-server-16:](https://github.com/timvisee/send-instances){ .card-link title="Public Instances"}
    [:octicons-info-16:](https://github.com/timvisee/send#readme){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/timvisee/send){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://github.com/sponsors/timvisee){ .card-link title=לתרומה }

ניתן להשתמש בשליחה באמצעות ממשק האינטרנט שלה או באמצעות [ffsend](https://github.com/timvisee/ffsend) CLI. אם אתה מכיר את שורת הפקודה ושולח קבצים לעתים קרובות, אנו ממליצים להשתמש בלקוח CLI כדי להימנע מהצפנה מבוססת JavaScript. באפשרותך לציין את הדגל `-- host` כדי להשתמש בשרת ספציפי:

```bash
ffsend upload -- host https://send.vis.ee/ FILE
```

### OnionShare

!!! recommendation

    ![OnionShare לוגו](assets/img/file-sharing-sync/onionshare.svg){ align=right }
    
    **OnionShare** הוא כלי קוד פתוח שמאפשר לך לשתף באופן מאובטח ואנונימי קובץ בכל גודל. זה עובד על ידי הפעלת שרת אינטרנט נגיש כשירות בצל Tor, עם כתובת URL בלתי ניתנת לערעור שתוכלו לשתף עם הנמענים כדי להוריד או לשלוח קבצים.
    
    [:octicons-home-16: Homepage](https://onionshare.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion){ .card-link title="Onion Service" }
    [:octicons-info-16:](https://docs.onionshare.org){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/onionshare/onionshare){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-windows11: Windows](https://onionshare.org/#download)
        - [:simple-apple: macOS](https://onionshare.org/#download)
        - [:simple-linux: Linux](https://onionshare.org/#download)

### קריטריונים

**שים לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף ל [הקריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו סט ברור של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! example "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים עבור כל חלק באתר שלנו, וזה עשוי להיות נתון לשינויים. אם יש לך שאלות לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו]( https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו בעת ביצוע ההמלצות שלנו אם זה לא מופיע כאן. ישנם גורמים רבים שנלקחים בחשבון ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

- אסור לאחסן נתונים מפוענחים בשרת מרוחק.
- זה חייב להיות קוד פתוח.
- חייבים להיות לקוחות עבור לינוקס, macOS ו- Windows; או שיהיה לך ממשק אינטרנט.

## FreedomBox

!!! recommendation

    ![FreedomBox לוגו](assets/img/file-sharing-sync/freedombox.svg){ align=right }
    
    **FreedomBox** היא מערכת הפעלה שתוכננה לפעול במחשב [מחשב - לוח יחיד (SBC )]( https://en.wikipedia.org/wiki/Single-board_computer). הוא משמש לסנכרון קבצים בין שני מכשירים או יותר ברשת המקומית או באינטרנט.
    
    הסינכרון אינו משתמש בשרת מרכזי; הוא משתמש ב [Block Exchange Protocol]( https://docs.syncthing.net/specs/bep-v1.html # bep - v1) כדי להעביר נתונים בין מכשירים.

## סנכרון קבצים

### Nextcloud (שרת-לקוח)

!!! recommendation

    ![Nextcloud לוגו](assets/img/productivity/nextcloud.svg){ align=right }
    
    **Nextcloud** היא חבילה של תוכנת שרת-לקוח חינמית וקוד פתוח ליצירת שירותי אירוח קבצים משלך בשרת פרטי בשליטתך.
    
    [:octicons-home-16: דף הבית](https://nextcloud.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://nextcloud.com/privacy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://nextcloud.com/support/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/nextcloud){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://nextcloud.com/contribute/){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1125420102)
        - [:simple-github: GitHub](https://github.com/nextcloud/android/releases)
        - [:simple-windows11: Windows](https://nextcloud.com/install/#install-clients)
        - [:simple-apple: macOS](https://nextcloud.com/install/#install-clients)
        - [:simple-linux: Linux](https://nextcloud.com/install/#install-clients)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/www/nextcloud)

!!! danger "סַכָּנָה"

    אנו לא ממליצים להשתמש ב- [E2EE App](https://apps.nextcloud.com/apps/end_to_end_encryption) עבור Nextcloud מכיוון שהוא עלול להוביל לאובדן נתונים; זה מאוד ניסיוני ולא איכות הייצור.

### סינכרון (P2P)

!!! recommendation

    ![Syncthing לוגו](assets/img/file-sharing-sync/syncthing.svg){ align=right }
    
    **Syncthing** הוא כלי קוד פתוח לסינכרון קבצים רציף מסוג עמית לעמית. הוא משמש לסנכרון קבצים בין שני מכשירים או יותר ברשת המקומית או באינטרנט. הסינכרון אינו משתמש בשרת מרכזי; הוא משתמש ב [Block Exchange Protocol]( https://docs.syncthing.net/specs/bep-v1.html # bep - v1) כדי להעביר נתונים בין מכשירים. כל הנתונים מוצפנים באמצעות TLS.
    
    [:octicons-home-16: דף הבית](https://syncthing.net){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.syncthing.net){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/syncthing){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://syncthing.net/donations/){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid)
        - [:simple-windows11: Windows](https://syncthing.net/downloads/)
        - [:simple-apple: macOS](https://syncthing.net/downloads/)
        - [:simple-linux: Linux](https://syncthing.net/downloads/)
        - [:simple-freebsd: FreeBSD](https://syncthing.net/downloads/)
        - [:simple-openbsd: OpenBSD](https://syncthing.net/downloads/)
        - [:simple-netbsd: NetBSD](https://syncthing.net/downloads/)

### קריטריונים

**שים לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף [לקריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו סט ברור של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! example "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים לכל קטע באתר שלנו, והדבר עשוי להשתנות. אם יש לך שאלות לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו]( https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו בעת ביצוע ההמלצות שלנו אם זה לא מופיע כאן. ישנם גורמים רבים שנשקלים ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

#### דרישות מינימליות

- אין לדרוש שרת מרוחק/ענן של צד שלישי.
- זה חייב להיות קוד פתוח.
- חייבים להיות לקוחות עבור לינוקס, macOS ו- Windows; או שיהיה לך ממשק אינטרנט.

#### המקרה הטוב ביותר

הקריטריונים שלנו במקרה הטוב ביותר מייצגים את מה שהיינו רוצים לראות מהפרויקט המושלם בקטגוריה זו. ההמלצות שלנו לא יכולות לכלול את כל הפונקציונליות הזו או את כולה, אך אלה שכן דורגו גבוה יותר מאחרים בדף זה.

- יש לו לקוחות ניידים עבור iOS ו- אנדרואיד, שלפחות תומכים בתצוגות מקדימות של מסמכים.
- תומך בגיבוי תמונות מ - iOS ו - אנדרואיד, ותומך באופן אופציונלי בסנכרון קבצים/תיקיות ב - אנדרואיד.

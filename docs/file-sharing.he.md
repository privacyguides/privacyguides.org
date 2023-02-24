---
title: "שיתוף וסנכרון קבצים"
icon: material/share-variant
---

גלה כיצד לשתף את הקבצים שלך באופן פרטי בין המכשירים שלך, עם החברים והמשפחה שלך, או באופן אנונימי באינטרנט.

## שיתוף קבצים

### Send

!!! recommendation

    ![Send לוגו](assets/img/file-sharing-sync/send.svg){ align=right }
    
    **Send** היא נגזרת של שירות Firefox Send של Mozilla שהופסקה המאפשר לך לשלוח קבצים לאחרים עם קישור. קבצים מוצפנים במכשיר שלך כך שלא ניתן לקרוא אותם על ידי השרת, והם יכולים להיות מוגנים באמצעות סיסמה. המתחזק של שלח Send מארח [מופע ציבורי](https://send.vis.ee/). אפשר להשתמש במועדים ציבוריים אחרים, או לארח לשלוח את עצמכם.
    
    [:octicons-home-16: דף הבית](https://send.vis.ee){ .md-button .md-button--primary }
    [:octicons-server-16:](https://github.com/timvisee/send-instances){ .card-link title="מופעים ציבוריים"}
    [:octicons-info-16:](https://github.com/timvisee/send#readme){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/timvisee/send){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://github.com/sponsors/timvisee){ .card-link title=לתרומה }

ניתן להשתמש ב- Send דרך ממשק האינטרנט שלו או דרך [ffsend](https://github.com/timvisee/ffsend) CLI. אם אתה מכיר את שורת הפקודה ושולח קבצים לעתים קרובות, אנו ממליצים להשתמש בלקוח ה-CLI כדי להימנע מהצפנה מבוססת JavaScript. אתה יכול לציין את הדגל `--host` כדי להשתמש בשרת ספציפי:

```bash
ffsend upload -- host https://send.vis.ee/ FILE
```

### OnionShare

!!! recommendation

    ![OnionShare לוגו](assets/img/file-sharing-sync/onionshare.svg){ align=right }
    
    **OnionShare** הוא כלי קוד פתוח המאפשר לך לשתף בצורה מאובטחת ואנונימית קובץ בכל גודל. זה עובד על ידי הפעלת שרת אינטרנט נגיש כשירות Tor onion, עם כתובת URL בלתי ניתנת לניחוש שתוכל לשתף עם הנמענים כדי להוריד או לשלוח קבצים.
    
    [:octicons-home-16: דף הבית](https://onionshare.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion){ .card-link title="שירות בצל" }
    [:octicons-info-16:](https://docs.onionshare.org){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/onionshare/onionshare){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-windows11: Windows](https://onionshare.org/#download)
        - [:simple-apple: macOS](https://onionshare.org/#download)
        - [:simple-linux: Linux](https://onionshare.org/#download)

### קריטריונים

**שימו לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף ל[קריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו מערכת ברורה של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! example "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים עבור כל חלק באתר שלנו, וזה עשוי להיות נתון לשינויים. אם יש לך שאלות לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו]( https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו בעת ביצוע ההמלצות שלנו אם זה לא מופיע כאן. ישנם גורמים רבים שנלקחים בחשבון ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

- אסור לאחסן נתונים מפוענחים בשרת מרוחק.
- זה חייב להיות קוד פתוח.
- חייב להיות לקוחות עבור Linux, macOS ו-Windows; או בעלי ממשק אינטרנט.

## FreedomBox

!!! recommendation

    ![FreedomBox לוגו](assets/img/file-sharing-sync/freedombox.svg){ align=right }
    
    **FreedomBox** היא מערכת הפעלה המיועדת להפעלה על [מחשב עם לוח יחיד (SBC)](https://en.wikipedia.org/wiki/Single-board_computer). המטרה היא להקל על הגדרת יישומי שרת שאולי תרצה לארח בעצמך.
    
    [:octicons-home-16: דף הבית](https://freedombox.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.debian.org/FreedomBox/Manual){ .card-link title=תיעוד}
    [:octicons-code-16:](https://salsa.debian.org/freedombox-team/freedombox){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://freedomboxfoundation.org/donate/){ .card-link title=לתרומה }

## סנכרון קבצים

### Nextcloud (שרת-לקוח)

!!! recommendation

    ![Nextcloud לוגו](assets/img/productivity/nextcloud.svg){ align=right }
    
    **Nextcloud** היא חבילה של תוכנות שרת-לקוח חינמיות וקוד פתוח ליצירת שירותי אירוח קבצים משלך בשרת פרטי שאתה שולט בו.
    
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

    אנו לא ממליצים להשתמש ב-[E2EE App](https://apps.nextcloud.com/apps/end_to_end_encryption) עבור Nextcloud מכיוון שהיא עלולה להוביל לאובדן נתונים; זה מאוד ניסיוני ולא איכות ייצור.

### Syncthing (P2P)

!!! recommendation

    ![Syncthing לוגו](assets/img/file-sharing-sync/syncthing.svg){ align=right }
    
    **Syncthing** הוא כלי עזר רציף לסנכרון קבצים עמית לעמית בקוד פתוח. הוא משמש לסנכרון קבצים בין שני מכשירים או יותר ברשת המקומית או באינטרנט. Syncthing אינו משתמש בשרת מרכזי; הוא משתמש ב-[Block Exchange Protocol](https://docs.syncthing.net/specs/bep-v1.html#bep-v1) כדי להעביר נתונים בין מכשירים. כל הנתונים מוצפנים באמצעות TLS.
    
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

**שימו לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף ל[הקריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו מערכת ברורה של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! example "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים עבור כל חלק באתר שלנו, וזה עשוי להיות נתון לשינויים. אם יש לך שאלות כלשהן לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו](https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו כשהצענו את ההמלצות שלנו אם הוא לא רשום כאן. ישנם גורמים רבים שנחשבים ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

#### דרישות מינימליות

- חייב לא לדרוש שרת מרוחק/ענן של צד שלישי.
- זה חייב להיות קוד פתוח.
- חייב להיות לקוחות עבור Linux, macOS ו-Windows; או בעלי ממשק אינטרנט.

#### המקרה הטוב ביותר

הקריטריונים הטובים ביותר שלנו מייצגים את מה שהיינו רוצים לראות מהפרויקט המושלם בקטגוריה זו. ייתכן שההמלצות שלנו לא יכללו חלק מהפונקציונליות הזו או את כולה, אך אלו שכן כן עשויות לדרג גבוה יותר מאחרות בדף זה.

- יש לו לקוחות ניידים עבור iOS ואנדרואיד, שלפחות תומכים בתצוגה מקדימה של מסמכים.
- תומך בגיבוי תמונות מ-iOS ואנדרואיד, ותומך באופן אופציונלי בסנכרון קבצים/תיקיות באנדרואיד.

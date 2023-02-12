---
title: "שיתוף וסנכרון קבצים"
icon: material/share-variant
---

גלה כיצד לשתף באופן פרטי את הקבצים שלך בין המכשירים שלך, עם חברים ובני משפחה, או באופן אנונימי באינטרנט.

## שיתוף קבצים

### Send

!!! המלצה

    ![Send לוגו](assets/img/file-sharing-sync/send.svg){ align=right }
    
    **Send ** הוא נגזרת של שירות השליחה של Firefox שהופסק על ידי Mozilla המאפשר לך לשלוח קבצים לאחרים עם קישור. קבצים מוצפנים במכשיר שלך, כך שהם לא יכולים להיקרא על ידי השרת, והם יכולים להיות גם מוגנים בסיסמה. המתחזק של Send מארח [מופע ציבורי]( https://send.vis.ee/). אפשר להשתמש במועדים ציבוריים אחרים, או לארח לשלוח את עצמכם.
    
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

!!! המלצה

    ![OnionShare לוגו](assets/img/file-sharing-sync/onionshare.svg){ align=right }
    
    **OnionShare ** הוא כלי קוד פתוח שמאפשר לך לשתף באופן מאובטח ואנונימי קובץ בכל גודל. זה עובד על ידי הפעלת שרת אינטרנט נגיש כשירות בצל Tor, עם כתובת URL בלתי ניתנת לערעור שתוכלו לשתף עם הנמענים כדי להוריד או לשלוח קבצים.
    
    [:octicons-home-16: Homepage](https://onionshare.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://lldan5gahapx5k7iafb3s4ikijc4ni7gx5iywdflkba5y2ezyg6sjgyd.onion){ .card-link title="Onion Service" }
    [:octicons-info-16:](https://docs.onionshare.org){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/onionshare/onionshare){ .card-link title="קוד מקור" }
    
    ??? הורדות
    
        - [:simple-windows11: Windows](https://onionshare.org/#download)
        - [:simple-apple: macOS](https://onionshare.org/#download)
        - [:simple-linux: Linux](https://onionshare.org/#download)

## FreedomBox

!!! המלצה

    ![FreedomBox לוגו](assets/img/file-sharing-sync/freedombox.svg){ align=right }
    
    **FreedomBox ** היא מערכת הפעלה שתוכננה לפעול במחשב [single - board computer (SBC )]( https://en.wikipedia.org/wiki/Single-board_computer). המטרה היא להקל על הגדרת יישומי שרת שאולי תרצו לארח בעצמכם.
    
    [:octicons-home-16: Homepage](https://freedombox.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://wiki.debian.org/FreedomBox/Manual){ .card-link title=תיעוד}
    [:octicons-code-16:](https://salsa.debian.org/freedombox-team/freedombox){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://freedomboxfoundation.org/donate/){ .card-link title=לתרומה }

## סנכרון קבצים

### Syncthing

!!! המלצה

    ![Syncthing לוגו](assets/img/file-sharing-sync/syncthing.svg){ align=right }
    
    ** Syncthing** הוא קוד פתוח עמית - ל - עמית רציף קבצים כלי שירות. הוא משמש לסנכרון קבצים בין שני מכשירים או יותר ברשת המקומית או באינטרנט. הסינכרון אינו משתמש בשרת מרכזי; הוא משתמש ב [Block Exchange Protocol]( https://docs.syncthing.net/specs/bep-v1.html # bep - v1) כדי להעביר נתונים בין מכשירים. כל הנתונים מוצפנים באמצעות TLS.
    
    [:octicons-home-16: Homepage](https://syncthing.net){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.syncthing.net){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/syncthing){ .card-link title="קוד פתוח" }
    [:octicons-heart-16:](https://syncthing.net/donations/){ .card-link title=לתרומה }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid)
        - [:simple-windows11: Windows](https://syncthing.net/downloads/)
        - [:simple-apple: macOS](https://syncthing.net/downloads/)
        - [:simple-linux: Linux](https://syncthing.net/downloads/)
        - [:simple-freebsd: FreeBSD](https://syncthing.net/downloads/)
        - [:simple-openbsd: OpenBSD](https://syncthing.net/downloads/)
        - [:simple-netbsd: NetBSD](https://syncthing.net/downloads/)

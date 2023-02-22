---
title: "רשת טור (Tor Network)"
icon: simple/torproject
---

![Tor logo](assets/img/self-contained-networks/tor.svg){ align=right }

הרשת **Tor** היא קבוצה של שרתים המופעלים בהתנדבות המאפשרת לך להתחבר בחינם ולשפר את הפרטיות והאבטחה שלך באינטרנט. אנשים וארגונים יכולים גם לשתף מידע על גבי רשת Tor עם ".onion hidden services" מבלי לפגוע בפרטיותם. מכיוון שקשה לחסום ולעקוב אחר תעבורת Tor, Tor הוא כלי יעיל לעקוף צנזורה.

[:octicons-home-16:](https://www.torproject.org){ .card-link title=דף הבית }
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="שירות בצל" }
[:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=תיעוד}
[:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="קוד מקור" }
[:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=לתרומה }

Tor פועלת על ידי ניתוב תעבורת האינטרנט שלך דרך אותם שרתים המופעלים על ידי מתנדבים, במקום ליצור חיבור ישיר לאתר שבו אתה מנסה לבקר. זה מטשטש מהיכן מגיעה התעבורה, ואף שרת בנתיב החיבור לא מסוגל לראות את הנתיב המלא של המקום ממנו מגיעה התנועה והולכת, כלומר אפילו השרתים שבהם אתה משתמש כדי להתחבר לא יכולים לשבור את האנונימיות שלך.

<figure markdown>
  ![נתיב Tor ](assets/img/how-tor-works/tor-path.svg#only-light)
  ![נתיב Tor](assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>מסלול מעגל Tor - צמתים בנתיב יכולים לראות רק את השרתים שאליהם הם מחוברים ישירות, למשל הצומת "כניסה" המוצג יכול לראות את כתובת ה-IP שלך, ואת הכתובת של הצומת "האמצעי", אבל אין לו דרך לראות איזה האתר שאתה מבקר בו.</figcaption>
</figure>

- [מידע נוסף על אופן הפעולה של Tor :material-arrow-right-drop-circle:](advanced/tor-overview.md)

## התחברות ל - Tor

ישנן מגוון דרכים שלך להתחבר לרשת Tor מהמכשיר, הנפוץ ביותר הוא דפדפן **Tor**, נגזרת של Firefox המיועד לגלישה אנונימית למחשבים שולחניים ואנדרואיד. בנוסף לאפליקציות המפורטות למטה, יש גם מערכות הפעלה שתוכננו במיוחד להתחבר לרשת Tor כגון [Whonix](desktop.md#whonix) ב-[Qubes OS](desktop.md#qubes-os), המספקות אבטחה והגנות גבוהות עוד יותר מאשר דפדפן Tor הרגיל.

### דפדפן Tor

!!! recommendation

    ![Tor Browser לוגו](assets/img/browsers/tor.svg){ align=right }
    
    **דפדפן Tor** הוא הבחירה אם אתה זקוק לאנונימיות, מכיוון שהוא מספק לך גישה לרשת Tor ולגשרים, והוא כולל הגדרות ברירת מחדל והרחבות המוגדרות אוטומטית לפי רמות האבטחה המוגדרות כברירת מחדל: *סטנדרטי*, *בטוח יותר * ו*הבטוח ביותר*.
    
    [:octicons-home-16: דף הבית](https://www.torproject.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="שירות בצל" }
    [:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=תיעוד }
    [:octicons-code-16:](https://gitweb.torproject.org/tor-browser.git/){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:simple-android: Android](https://www.torproject.org/download/#android)
        - [:simple-windows11: Windows](https://www.torproject.org/download/)
        - [:simple-apple: macOS](https://www.torproject.org/download/)
        - [:simple-linux: Linux](https://www.torproject.org/download/)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/security/tor)

!!! danger "סַכָּנָה"

    אתה צריך **לעולם לא** להתקין הרחבות נוספות בדפדפן Tor או לערוך את הגדרות `about:config`, כולל אלו שאנו מציעים עבור Firefox. הרחבות דפדפן והגדרות לא סטנדרטיות גורמים לך להתבלט על פני אחרים ברשת Tor, ובכך להקל על [טביעת אצבע](https://support.torproject.org/glossary/browser-fingerprinting) של הדפדפן שלך.

דפדפן Tor נועד למנוע טביעת אצבע, או לזהות אותך על סמך תצורת הדפדפן שלך. לכן, זה הכרחי כי אתה עושה **לא** לשנות את הדפדפן מעבר ברירת המחדל [רמות אבטחה](https://tb-manual.torproject.org/security-settings/).

### Orbot

!!! recommendation

    ![Orbot logo](assets/img/self-contained-networks/orbot.svg){ align=right }
    
    **Orbot** הוא VPN Tor חינמי לטלפונים חכמים שמנתב תנועה מכל אפליקציה במכשיר שלך דרך רשת Tor.
    
    [:octicons-home-16: Homepage](https://orbot.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://orbot.app/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://orbot.app/faqs){ .card-link title=Documentation}
    [:octicons-code-16:](https://orbot.app/code){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://orbot.app/donate){ .card-link title=Contribute }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.android)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/orbot/id1609461599)
        - [:simple-github: GitHub](https://github.com/guardianproject/orbot/releases)

לעמידות בפני מתקפות ניתוח תנועה, שקול להפעיל את 'בודד כתובת יעד' *Isolate Destination Address* in :material-menu: → **Settings** → **Connectivity**. זה ישתמש במעגל Tor שונה לחלוטין (ממסר אמצעי שונה צמתים יציאה) עבור כל תחום שאתה מתחבר.

!!! טיפ "טיפים עבור אנדרואיד"

    Orbot יכול לבצע שרת proxy של אפליקציות בודדות אם הם תומכים ב-SOCKS או HTTP proxy. זה יכול גם לספק את כל חיבורי הרשת שלך באמצעות [VpnService](https://developer.android.com/reference/android/net/VpnService) וניתן להשתמש בו עם מתג ה-VPN ב-:gear: **הגדרות** → * *רשת & אינטרנט** → **VPN** → :gear: → **חסום חיבורים ללא VPN**.
    
    Orbot מיושן לעתים קרובות ב[מאגר F-Droid](https://guardianproject.info/fdroid) ו- [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android), אז שקול להוריד ישירות מ[מאגר GitHub](https://github.com/guardianproject/orbot/releases) במקום זאת.
    
    כל הגרסאות חתומות באמצעות אותה חתימה ולכן הן צריכות להיות תואמות זו לזו.

## ממסרים וגשרים

### Snowflake

!!! recommendation

    ![Snowflake לוגו](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Snowflake לוגו](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }
    
    **Snowflake** מאפשר לך לתרום רוחב פס לפרויקט Tor על ידי הפעלת "Snowflake proxy" בתוך הדפדפן שלך.
    
    אנשים שמצונזרים יכולים להשתמש בפרוקסי של Snowflake כדי להתחבר לרשת Tor. Snowflake היא דרך מצוינת לתרום לרשת גם אם אין לך את הידע הטכני להפעיל ממסר Tor או גשר.
    
    [:octicons-home-16: דף הבית](https://snowflake.torproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=תיעוד}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie)
        - [:octicons-browser-16: Web](https://snowflake.torproject.org/embed "Leave this page open to be a Snowflake proxy")

??? tip "טיפ" "Embedded Snowflake"

    אתה יכול להפעיל את Snowflake בדפדפן שלך על ידי לחיצה על המתג למטה ו== השארת דף זה פתוח==. אתה יכול גם להתקין את Snowflake כתוסף לדפדפן כדי להפעיל אותו תמיד כשהדפדפן שלך פתוח, אולם הוספת הרחבות של צד שלישי יכולה להגדיל את משטח ההתקפה שלך.
    
    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>אם ההטמעה לא מופיעה עבורך, ודא שאינך חוסם את המסגרת של צד שלישי מ- `torproject.org`. לחלופין, בקר ב[דף זה](https://snowflake.torproject.org/embed.html).</small>

Snowflake אינו מגדיל את פרטיותך בשום צורה, ואינו משמש לחיבור לרשת Tor בתוך הדפדפן האישי שלך. עם זאת, אם חיבור האינטרנט שלך אינו מצונזר, עליך לשקול להפעיל אותו כדי לעזור לאנשים ברשתות מצונזרות להשיג פרטיות טובה יותר בעצמם. אין צורך לדאוג לאילו אתרים אנשים ניגשים דרך ה-proxy שלך - כתובת ה-IP הגלויה של הגלישה שלהם תתאים לצומת היציאה של Tor, לא שלך.

הפעלת פרוקסי של Snowflake היא בסיכון נמוך, אפילו יותר מהפעלת ממסר Tor או גשר שהם כבר מאמצים לא מסוכנים במיוחד. עם זאת, היא עדיין עושה תעבורת פרוקסי דרך הרשת שלך, מה שיכול להשפיע במובנים מסוימים, במיוחד אם הרשת שלך מוגבלת ברוחב הפס. ודא שאתה מבין [איך Snowflake עובד](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) לפני שתחליט אם להפעיל פרוקסי.

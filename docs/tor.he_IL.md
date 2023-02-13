---
title: "רשת טור (Tor Network)"
icon: simple/torproject
---

![Tor logo](assets/img/self-contained-networks/tor.svg){ align=right }

רשת **Tor** היא קבוצה של שרתים המופעלים על ידי מתנדבים המאפשרת לך להתחבר בחינם ולשפר את הפרטיות והאבטחה שלך באינטרנט. אנשים וארגונים יכולים גם לשתף מידע ברשת Tor עם "שירותים מוסתרים של.onion" מבלי לפגוע בפרטיותם. מכיוון שקשה לחסום ולעקוב אחר תעבורת Tor, Tor הוא כלי יעיל לעקיפת צנזורה.

[:octicons-home-16:](https://www.torproject.org){ .card-link title=Homepage }
[:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Service" }
[:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentation}
[:octicons-code-16:](https://gitweb.torproject.org/tor.git){ .card-link title="Source Code" }
[:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }

Tor עובד על ידי ניתוב התנועה שלך באינטרנט דרך שרתים אלה המופעלים בהתנדבות, במקום לבצע חיבור ישיר לאתר שבו אתה מנסה לבקר. זה מבלבל את המקום שבו התנועה מגיעה, ואף שרת בנתיב החיבור אינו יכול לראות את הנתיב המלא שממנו התנועה מגיעה והולכת, כלומר אפילו השרתים שבהם אתה משתמש כדי להתחבר לא יכולים לשבור את האנונימיות שלך.

<figure markdown>
  ![נתיב Tor ](assets/img/how-tor-works/tor-path.svg#only-light)
  ![נתיב Tor](assets/img/how-tor-works/tor-path-dark.svg#only-dark)
  <figcaption>מסלול מעגל Tor - צמתים בנתיב יכולים לראות רק את השרתים שאליהם הם מחוברים ישירות, לדוגמה צומת "כניסה" שמוצג יכול לראות את כתובת ה - IP שלך, ואת הכתובת של הצומת "אמצע ", אך אין לו דרך לראות באיזה אתר אתה מבקר.</figcaption>
</figure>

- [מידע נוסף על איך Tor עובד :material-arrow-right-drop-circle:](advanced/tor-overview.md)

## התחברות ל - Tor

ישנן מגוון דרכים להתחבר לרשת Tor מהמכשיר שלך, הנפוץ ביותר הוא דפדפן **Tor**, מזלג של Firefox המיועד לגלישה אנונימית למחשבים שולחניים ואנדרואיד. בנוסף לאפליקציות המפורטות להלן, יש גם מערכות הפעלה שתוכננו במיוחד כדי להתחבר לרשת Tor כגון [Whonix](desktop.md#whonix) על [Qubes OS](desktop.md#qubes-os), המספקים אבטחה והגנות גדולות עוד יותר מאשר דפדפן Tor הרגיל.

### דפדפן Tor

!!! recommendation

    ![Tor Browser logo](assets/img/browsers/tor.svg){ align=right }
    
    **דפדפן Tor** הוא הבחירה אם אתם זקוקים לאנונימיות, מכיוון שהוא מספק לכם גישה לרשת Tor ולגשרים, והוא כולל הגדרות ברירת מחדל והרחבות המוגדרות באופן אוטומטי על ידי רמות האבטחה המוגדרות כברירת מחדל: *רגיל*, *בטוח יותר* ו*בטוח ביותר*.
    
    [:octicons-home-16: Homepage](https://www.torproject.org){ .md-button .md-button--primary }
    [:simple-torbrowser:](http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion){ .card-link title="Onion Service" }
    [:octicons-info-16:](https://tb-manual.torproject.org/){ .card-link title=Documentation }
    [:octicons-code-16:](https://gitweb.torproject.org/tor-browser.git/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser)
        - [:simple-android: Android](https://www.torproject.org/download/#android)
        - [:simple-windows11: Windows](https://www.torproject.org/download/)
        - [:simple-apple: macOS](https://www.torproject.org/download/)
        - [:simple-linux: Linux](https://www.torproject.org/download/)
        - [:simple-freebsd: FreeBSD](https://www.freshports.org/security/tor)
        - [:simple-openbsd: OpenBSD](https://openports.se/net/tor)
        - [:simple-netbsd: NetBSD](https://pkgsrc.se/net/tor)

!!! סכנה

    **לעולם** אין להתקין תוספים נוספים בדפדפן Tor או לערוך הגדרות `about:config ', כולל אלה שאנו מציעים עבור Firefox. הרחבות דפדפן והגדרות לא סטנדרטיות מאפשרות לך להבליט אחרים ברשת Tor, ובכך להקל על הדפדפן שלך לקבל [fingerprint](https://support.torproject.org/glossary/browser-fingerprinting).

דפדפן Tor נועד למנוע טביעות אצבע או לזהות אותך על סמך תצורת הדפדפן שלך. לכן, זה הכרחי כי אתה עושה **לא** לשנות את הדפדפן מעבר ברירת המחדל [רמות אבטחה](https://tb-manual.torproject.org/security-settings/).

### Orbot

!!! recommendation

    ![Orbot logo](assets/img/self-contained-networks/orbot.svg){ align=right }
    
    **Orbot ** הוא VPN Tor חינמי לטלפונים חכמים שמנתב תנועה מכל אפליקציה במכשיר שלך דרך רשת Tor.
    
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

    Orbot יכול proxy יישומים בודדים אם הם תומכים גרביים או proxying HTTP. זה יכול גם proxy כל חיבורי הרשת שלך באמצעות [VpnService](https://developer.android.com/reference/android/net/VpnService) והוא יכול לשמש עם Killswitch VPN ב :gear: → **הגדרות *** רשת & אינטרנט → ***VPN *** → :gear: → **לחסום חיבורים ללא VPN **.
    
    Orbot מיושן לעתים קרובות ב [מאגר F - Droid](https://guardianproject.info/fdroid) וב [Google Play]( https://play.google.com/store/apps/details?id=org.torproject.android) של פרויקט Guardian, לכן מומלץ להוריד אותו ישירות ממאגר [GitHub Repository](https://github.com/guardianproject/orbot/releases) במקום זאת.
    
    כל הגרסאות חתומות באמצעות אותה חתימה, כך שהן צריכות להיות תואמות זו לזו.

## ממסרים וגשרים

### Snowflake

!!! recommendation

    ![Snowflake logo](assets/img/browsers/snowflake.svg#only-light){ align=right }
    ![Snowflake logo](assets/img/browsers/snowflake-dark.svg#only-dark){ align=right }
    
    **Snowflake** מאפשר לך לתרום רוחב פס לפרויקט Tor על ידי הפעלת שרת proxy של "Snowflake" בתוך הדפדפן שלך.
    
    אנשים שצונזרו יכולים להשתמש בפרוקסי של Snowflake כדי להתחבר לרשת Tor. Snowflake הוא דרך מצוינת לתרום לרשת גם אם אין לך את הידע הטכני להפעיל ממסר Tor או גשר.
    
    [:octicons-home-16: Homepage](https://snowflake.torproject.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/Technical%20Overview){ .card-link title=Documentation}
    [:octicons-code-16:](https://gitweb.torproject.org/pluggable-transports/snowflake.git/){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://donate.torproject.org/){ .card-link title=Contribute }
    
    ??? downloads "הורדות"
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/torproject-snowflake/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/snowflake/mafpmfcccpbjnhfhjnllmmalhifmlcie)
        - [:octicons-browser-16: Web](https://snowflake.torproject.org/embed "Leave this page open to be a Snowflake proxy")

??? tip "Embedded Snowflake"

    אתה יכול לאפשר Snowflake בדפדפן שלך על ידי לחיצה על המתג למטה ==משאיר דף זה פתוח ==. אפשר גם להתקין את Snowflake כתוסף לדפדפן כדי שהוא יפעל תמיד בזמן שהדפדפן פתוח, אבל הוספת הרחבות של צד שלישי יכולה להגדיל את שטח ההתקפה.
    
    <center><iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe></center>
    <small>אם ההטבעה אינה מופיעה עבורך, ודא שאינך חוסם את המסגרת של צד שלישי מ - `torproject.org '. לחלופין, בקר ב [this page](https://snowflake.torproject.org/embed.html).</small>

Snowflake אינו מגביר את הפרטיות שלך בכל דרך שהיא, וגם לא נעשה בו שימוש כדי להתחבר לרשת Tor בתוך הדפדפן האישי שלך. עם זאת, אם חיבור האינטרנט שלך אינו מצונזר, כדאי לשקול להפעיל אותו כדי לעזור לאנשים ברשתות מצונזרות להשיג פרטיות טובה יותר בעצמם. אין צורך לדאוג לגבי האתרים שאליהם אנשים ניגשים דרך ה - proxy שלכם - כתובת ה - IP של הגלישה הגלויה שלהם תתאים לצומת היציאה שלהם ב - Tor, לא שלכם.

הפעלת פרוקסי Snowflake הוא סיכון נמוך, אפילו יותר מאשר הפעלת ממסר Tor או גשר שהם כבר לא מאמצים מסוכנים במיוחד. עם זאת, הוא עדיין מתווך תנועה דרך הרשת שלך אשר יכול להיות בעל השפעה במובנים מסוימים, במיוחד אם הרשת שלך היא מוגבלת רוחב פס. ודא שאתה מבין [איך Snowflake עובד](https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/wikis/home) לפני שתחליט אם להפעיל פרוקסי.

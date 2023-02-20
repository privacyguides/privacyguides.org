---
title: "קושחת הנתב"
icon: material/router-wireless
---

להלן כמה מערכות הפעלה חלופיות, שניתן להשתמש בהן בנתבים, נקודות גישה לרשת האלחוטית וכו'.

## OpenWrt

!!! recommendation

    ![OpenWrt לוגו](assets/img/router/openwrt.svg#only-light){ align=right }
    ![OpenWrt לוגו](assets/img/router/openwrt-dark.svg#only-dark){ align=right }
    
    **OpenWrt** היא מערכת הפעלה מבוססת לינוקס; הוא משמש בעיקר בהתקנים משובצים לניתוב תעבורת רשת. ![OpenWrt logo](assets/img/router/openwrt.svg#only-light){ align=right }
    ![OpenWrt logo](assets/img/router/openwrt-dark.svg#only-dark){ align=right }
    
    **OpenWrt** היא מערכת הפעלה מבוססת לינוקס; הוא משמש בעיקר בembedded device לניתוב תעבורת רשת. כל הרכיבים עברו אופטימיזציה עבור נתבים ביתיים.
    
    [:octicons-home-16: Homepage](https://openwrt.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://openwrt.org/docs/start){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/openwrt/openwrt){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://openwrt.org/donate){ .card-link title=Contribute }

באפשרותך לעיין ב[טבלת החומרה](https://openwrt.org/toh/start) של OpenWrt כדי לבדוק אם המכשיר שלך נתמך.

## OPNsense

!!! המלצה

    ![pfSense לוגו](assets/img/router/opnsense.svg){ align=right }
    
    **OPNsense** היא פלטפורמת קוד פתוח, חומת אש וניתוב מבוססת FreeBSD המשלבת תכונות מתקדמות רבות כגון עיצוב תעבורה, איזון עומסים ויכולות VPN, עם תכונות רבות נוספות הזמינות בצורה של תוספים. OPNsense נפרס בדרך כלל כחומת אש היקפית, נתב, נקודת גישה אלחוטית, שרת DHCP, שרת DNS ונקודת קצה של VPN.
    
    [:octicons-home-16: Homepage](https://opnsense.org/){ .md-button .md-button--primary }
    [:octicons-info-16:](https://docs.opnsense.org/index.html){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/opnsense){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://opnsense.org/donate/){ .card-link title=לתרומה }

OPNsense פותח במקור כפיצול של[pfSense](https://en.wikipedia.org/wiki/PfSense) ושני הפרויקטים ידועים בהיותם הפצות חומת אש חינמיות ואמינות המציעות תכונות שנמצאות לעתים קרובות רק בחומות אש מסחריות יקרות. המפתחים של OPNsense, שהושקו ב-2015, [ציינו](https://docs.opnsense.org/history/thefork.html) מספר בעיות אבטחה ואיכות קוד עם pfSense שלדעתם מחייבות פיצול של הפרויקט, כמו גם חששות לגבי רכישת הרוב של pfSense על ידי Netgate והכיוון העתידי של פרויקט pfSense.

## קריטריונים

**שים לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף ל [הקריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו סט ברור של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! דוגמה: "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים לכל קטע באתר שלנו, והדבר עשוי להשתנות. אם יש לך שאלות לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו]( https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו בעת ביצוע ההמלצות שלנו אם זה לא מופיע כאן. ישנם גורמים רבים שנשקלים ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

- זה חייב להיות קוד פתוח.
- חייב לקבל עדכונים שוטפים.
- חייב לתמוך במגוון רחב של חומרה.

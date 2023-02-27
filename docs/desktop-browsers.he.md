---
title: "דפדפנים שולחניים"
icon: material/laptop
---

אלה הדפדפנים והתצורות המומלצים כרגע לגלישה רגילה/לא אנונימית. אם אתה צריך לגלוש באינטרנט באופן אנונימי, אתה צריך להשתמש [Tor](tor.md) במקום. באופן כללי, אנו ממליצים לשמור על הרחבות הדפדפן שלך למינימום; יש להם גישה מורשית בתוך הדפדפן שלך, דורשים ממך לסמוך על המפתח, יכולים לגרום לך [להתבלט](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), ו[להחליש](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) את בידוד האתר.

## Firefox

!!! recommendation

    ![לוגו Firefox](assets/img/browsers/firefox.svg){ align=right }
    
    **Firefox** מספק הגדרות פרטיות חזקות כגון [Enhanced Tracking Protection](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop), שיכול לעזור לחסום שונים [סוגי מעקב](https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop#w_what-enhanced-tracking-protection-protection-blocks).
    
    [:octicons-home-16: דף הבית](https://firefox.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.mozilla.org/privacy/firefox/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://firefox-source-docs.mozilla.org/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://hg.mozilla.org/mozilla-central){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://donate.mozilla.org/){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-windows11: Windows](https://www.mozilla.org/firefox/windows)
        - [:simple-apple: macOS](https://www.mozilla.org/firefox/mac)
        - [:simple-linux: Linux](https://www.mozilla.org/firefox/linux)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.mozilla.firefox)

!!! warning "אזהרה"
    Firefox כולל [אסימון הורדה](https://bugzilla.mozilla.org/show_bug.cgi?id=1677497#c0) ייחודי בהורדות מאתר האינטרנט של מוזילה ומשתמש בטלמטריה ב-Firefox כדי לשלוח את האסימון. האסימון **לא** כלול במהדורות מ-[Mozilla FTP](https://ftp.mozilla.org/pub/firefox/releases/).

### תצורה מומלצת

דפדפן Tor הוא הדרך היחידה לגלוש באמת באינטרנט באופן אנונימי. כאשר אתה משתמש ב-Firefox, אנו ממליצים לשנות את ההגדרות הבאות כדי להגן על פרטיותך מפני גורמים מסוימים, אך כל הדפדפנים מלבד [דפדפן Tor](tor.md#tor-browser) יהיו ניתנים למעקב על ידי *מישהו* בהקשר זה או אחר.

ניתן למצוא אפשרויות אלה ב - :material-menu: ← **הגדרות** ← **פרטיות & אבטחה**.

##### הגנה מוגברת מפני מעקב

- [x] בחר **הגנה מחמירה** מעקב משופר

זה מגן עליך על ידי חסימת מעקבי מדיה חברתית, סקריפטים של טביעת אצבע (שים לב שזה לא מגן עליך מפני *כל* טביעות האצבע), קריפטומינרים, עוגיות מעקב חוצות- אתרים ותוכן מעקב אחר. ETP מגן מפני איומים נפוצים רבים, אך הוא אינו חוסם את כל אפיקי המעקב מכיוון שהוא נועד להשפיע באופן מינימלי עד ללא השפעה על השימושיות באתר.

##### חיטוי בעת סגירה

אם אתה רוצה להישאר מחובר לאתרים מסוימים, אתה יכול לאפשר חריגים ב**עוגיות ונתוני אתר** ← **נהל חריגים... **

- [x] סמן **מחק קובצי Cookie ונתוני אתר כאשר Firefox סגור**

זה מגן עליך מפני עוגיות מתמשכות, אך אינו מגן עליך מפני עוגיות שנרכשו במהלך כל הפעלת גלישה אחת. כאשר זה מופעל, אפשר לנקות בקלות את קובצי העוגיות של הדפדפן שלך פשוט על ידי הפעלה מחדש של Firefox. אתה יכול להגדיר חריגים על בסיס אתר, אם אתה רוצה להישאר מחובר לאתר מסוים שאתה מבקר בו לעתים קרובות.

##### הצעות חיפוש

- [ ] בטל את הסימון **ספק הצעות חיפוש**

ייתכן שתכונות הצעות חיפוש לא יהיו זמינות באזור שלך.

הצעות חיפוש שולחות את כל מה שאתה מקליד בסרגל הכתובות למנוע החיפוש המוגדר כברירת מחדל, ללא קשר אם אתה שולח חיפוש בפועל. השבתת הצעות חיפוש מאפשרת לך לשלוט בצורה מדויקת יותר באילו נתונים אתה שולח לספק מנועי החיפוש שלך.

##### טלמטריה

- [ ] בטל את הסימון של **אפשר ל-Firefox לשלוח נתונים טכניים ואינטראקציה למוזילה**
- [ ] בטל את הסימון של **אפשר ל-Firefox להתקין ולהפעיל מחקרים**
- [ ] בטל את הסימון של **אפשר ל-Firefox לשלוח בשמך דוחות קריסה פגומים**

> Firefox שולח נתונים על הגרסה והשפה של Firefox שלך; תצורת מערכת ההפעלה והחומרה של המכשיר; זיכרון, מידע בסיסי על קריסות ושגיאות; תוצאה של תהליכים אוטומטיים כמו עדכונים, גלישה בטוחה והפעלה אלינו. כאשר Firefox שולח לנו נתונים, כתובת ה-IP שלך נאספת זמנית כחלק מיומני השרת שלנו.

בנוסף, שירות חשבונות Firefox אוסף [כמה נתונים טכניים](https://www.mozilla.org/en-US/privacy/firefox/#firefox-accounts). אם אתה משתמש בחשבון Firefox אתה יכול לבטל את הסכמתך:

1. פתח את [הגדרות הפרופיל שלך ב ](https://accounts.firefox.com/settings#data-collection)accounts.firefox.com
2. ביטול סימון **איסוף נתונים ושימוש** > **עזרה בשיפור חשבונות Firefox**

##### מצב HTTPS-בלבד

- [x] בחר **הפעל מצב HTTPS-בלבד בכל החלונות**

זה מונע ממך להתחבר ללא כוונה לאתר אינטרנט ב-HTTP בטקסט רגיל. אתרים ללא HTTPS אינם נפוצים כיום, לכן לא אמורה להיות לכך השפעה רבה על הגלישה היומיומית שלך.

### Firefox Sync

[Firefox Sync](https://hacks.mozilla.org/2018/11/firefox-sync-privacy/) מאפשר לנתוני הגלישה שלך (היסטוריה, סימניות וכו') להיות נגישים בכל המכשירים שלך ומגן עליהם באמצעות E2EE.

### Arkenfox (מתקדם)

פרויקט [Arkenfox](https://github.com/arkenfox/user.js) מספק קבוצה של אפשרויות שנשקלו בקפידה עבור Firefox. אם [תחליט](https://github.com/arkenfox/user.js/wiki/1.1-To-Arkenfox-or-Not) להשתמש ב - Arkenfox, [אפשרויות](https://github.com/arkenfox/user.js/wiki/3.2-Overrides-[Common]) הן קפדניות באופן סובייקטיבי ו/או עלולות לגרום לאתרים מסוימים לא לעבוד כראוי - [שבו אתה יכול בקלות לשנות](https://github.com/arkenfox/user.js/wiki/3.1-Overrides) כדי שיתאימו לצרכים שלך. אנו **ממליצים בחום** קריאה דרך [ויקי](https://github.com/arkenfox/user.js/wiki)המלא שלהם. Arkenfox מאפשר גם תמיכה ב - [מכולה](https://support.mozilla.org/en-US/kb/containers#w_for-advanced-users).

## Brave

!!! recommendation

    ![Brave לוגו](assets/img/browsers/brave.svg){ align=right }
    
    **דפדפן Brave** כולל חוסם תוכן מובנה ו [תכונות פרטיות ]( https://brave.com/privacy-features/), רבים מהם מופעלים כברירת מחדל.
    
    Brave בנוי על פרויקט דפדפן Chromium, כך שהוא אמור להרגיש מוכר ושיהיו לו בעיות תאימות מינימליות לאתר.
    
    [:octicons-home-16: דף הבית](https://brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="שירות בצל" }
    [:octicons-eye-16:](https://brave.com/privacy/browser/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://support.brave.com/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/brave/brave-browser){ .card-link title="קוד פתוח" }
    
    ??? downloads annotate "הורדות"
    
        - [:simple-github: GitHub](https://github.com/brave/brave-browser/releases)
        - [:simple-windows11: Windows](https://brave.com/download/)
        - [:simple-apple: macOS](https://brave.com/download/)
        - [:simple-linux: Linux](https://brave.com/linux/) (1)

    1. אנו ממליצים שלא להשתמש בגרסת Flatpak של Brave, שכן היא מחליפה את ארגז החול של Chromium עם Flatpak's, שהוא פחות יעיל. בנוסף, החבילה אינה מתוחזקת על ידי Brave Software, Inc.

### תצורה מומלצת

דפדפן Tor הוא הדרך היחידה לגלוש באמת באינטרנט באופן אנונימי. כאשר אתה משתמש ב-Brave, אנו ממליצים לשנות את ההגדרות הבאות כדי להגן על פרטיותך מפני גורמים מסוימים, אך כל הדפדפנים מלבד [Tor דפדפן](tor.md#tor-browser) יהיו ניתנים למעקב על ידי *מישהו* בהקשר זה או אחר.

ניתן למצוא אפשרויות אלה ב - :material-menu: → **הגדרות**.

##### Shields

Brave כולל כמה אמצעים נגד טביעת אצבע בתכונת [Shields](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-) שלו. אנו מציעים להגדיר את האפשרויות האלה [גלובלי](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-) בכל הדפים שבהם אתה מבקר.

ניתן לשדרג לאחור את האפשרויות של Shields על בסיס אתר לפי הצורך, אך כברירת מחדל אנו ממליצים להגדיר את האפשרויות הבאות:

<div class="annotate" markdown>

- [x] בחר **מנע מאתרים לקחת ממני טביעות אצבע בהתבסס על העדפות השפה שלי**
- [x] בחר **אגרסיבי** תחת חסימת עוקבים ומודעות

    ??? warning "השתמש ברשימות סינון ברירת מחדל"
         Brave מאפשר לך לבחור מסנני תוכן נוספים בדף הפנימי `brave://adblock`. אנו ממליצים לא להשתמש בתכונה זו; במקום זאת, שמור על רשימות הסינון המוגדרות כברירת מחדל. שימוש ברשימות נוספות יגרום לך להתבלט ממשתמשי Brave אחרים ועלול גם להגדיל את שטח ההתקפה אם יש ניצול ב-Brave וכלל זדוני יתווסף לאחת הרשימות שבהן אתה משתמש.

- [x] (אופציונלי) בחר **בלוק סקריפטים** (1)
- [x] בחר **מחמיר, עלול לשבור אתרים** תחת בלוק טביעת אצבע

</div>

1. אפשרות זו מספקת פונקציונליות דומה למצבי החסימה [המתקדמים של uBlock Origin](https://github.com/gorhill/uBlock/wiki/Blocking-mode) או להרחבה [NoScript](https://noscript.net/).

##### חסימת מדיה חברתית

- [ ] בטל את הסימון של כל רכיבי המדיה החברתית

##### פרטיות ואבטחה

<div class="annotate" markdown>

- [x] בחר **Disable Non-Proxied UDP** מתחת [WebRTC IP Handling Policy](https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-#webrtc)
- [ ] בטל **שימוש בשירותי Google להעברת הודעות בדחיפה**
- [ ] בטל **אפשר ניתוח מוצרים ששומר על הפרטיות (P3A)**
- [ ] בטל **שליחה אוטומטית של פינג שימוש יומי ל-Brave**
- [x] בחר **השתמש תמיד בחיבורים מאובטחים** בתוך **אבטחה** תפריט
- [ ] בטל **חלון פרטי עם טור** (1)

    !!! חשוב"חיטוי בסגירה"
        - [x] בחר**נקה קבצי עוגיות ונתוני אתר בעת סגירת כל החלונות**בתפריט *עוגיות ונתוני אתר אחרים*

        אם ברצונך להישאר מחובר לאתר מסוים שבו אתה מבקר לעתים קרובות, באפשרותך להגדיר חריגים על בסיס לכל אתר תחת *התנהגויות מותאמות אישית* section.

</div>

1. Brave הוא **לא** עמיד בפני טביעת אצבע כמו דפדפן Tor והרבה פחות אנשים משתמשים אמיץ עם Tor, כך תוכל להתבלט. כאשר [נדרשת אנונימיות חזקה](https://support.brave.com/hc/en-us/articles/360018121491-What-is-a-Private-Window-with-Tor-Connectivity-) השתמש בדפדפן [Tor](tor.md#tor-browser).

##### הרחבות

השבת הרחבות מובנות שאינך משתמש בהן ב**הרחבות**

- [ ] בטל את הסימון **Hangouts**
- [ ] בטל את הסימון **WebTorrent**

##### IPFS

מערכת קבצים בין - כוכבית (באנגלית: InterPlanetary File System, בראשי תיבות: IPF) היא רשת מבוזרת המשמשת לאחסון ושיתוף נתונים במערכת קבצים מבוזרת. אלא אם כן אתה משתמש בתכונה, להשבית אותו.

- [x] בחר **נכים** בשיטה לפתרון משאבי IPFs

##### הגדרות נוספות

מתחת לתפריט *מערכת*

<div class="annotate" markdown>

- [] בטל את הסימון **המשך להפעיל אפליקציות כאשר Brave סגור** כדי להשבית אפליקציות רקע (1)

</div>

1. אפשרות זו אינה קיימת בכל הפלטפורמות.

### סנכרון Brave

[Brave Sync](https://support.brave.com/hc/en-us/articles/360059793111-Understanding-Brave-Sync) מאפשר לנתוני הגלישה שלך (היסטוריה, סימניות וכו ') להיות נגישים בכל המכשירים שלך ללא צורך בחשבון ומגן עליהם באמצעות E2EE.

## משאבים נוספים

בדרך כלל איננו ממליצים להתקין תוספים כלשהם מכיוון שהם מגדילים את שטח ההתקפה שלך. עם זאת, uBlock Origin עשוי להיות שימושי אם אתה מעריך פונקציונליות חסימת תוכן.

### uBlock Origin

!!! recommendation

    ![הלוגו של uBlock Origin](assets/img/browsers/ublock_origin.svg){ align=right }
    
    **uBlock Origin** הוא חוסם תוכן פופולרי שיכול לעזור לך לחסום מודעות, עוקבים וסקריפטים של טביעות אצבע.
    
    [:octicons-repo-16: מאגר](https://github.com/gorhill/uBlock#readme){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/gorhill/uBlock/wiki/Privacy-policy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://github.com/gorhill/uBlock/wiki){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/gorhill/uBlock){ .card-link title="קוד מקור" }
    
    ??? הורדות
    
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/ublock-origin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)

אנו ממליצים לעקוב אחר התיעוד של [היזם](https://github.com/gorhill/uBlock/wiki/Blocking-mode) ולבחור אחד מה"מצבים ". רשימות מסננים נוספות [עלולות להשפיע על הביצועים ולהגדיל את שטח התקיפה](https://portswigger.net/research/ublock-i-exfiltrate-exploiting-ad-blockers-with-css).

##### רשימות אחרות

אלה עוד כמה [רשימות מסנן](https://github.com/gorhill/uBlock/wiki/Dashboard:-Filter-lists) ייתכן שתרצה לשקול הוספה:

- [x] בדוק **פרטיות** > **הגנה על מעקב אחר כתובות אתרים של AdGuard**
- להוסיף [למעשה כלי URL מקוצר לגיטימי ](https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt)

## קריטריונים

**שים לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף [לקריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו סט ברור של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! example "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים לכל קטע באתר שלנו, והדבר עשוי להשתנות. אם יש לך שאלות לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו]( https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו בעת ביצוע ההמלצות שלנו אם זה לא מופיע כאן. ישנם גורמים רבים שנשקלים ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

### דרישות מינימליות

- חייבת להיות תוכנת קוד פתוח.
- תומך בעדכונים אוטומטיים.
- מקבל עדכוני מנוע בתוך 0 -1 ימים משחרורו במעלה הזרם.
- זמין ב - Linux, MacOS ו - Windows.
- כל שינוי שיידרש כדי להפוך את הדפדפן ליותר מכבד פרטיות לא צריך להשפיע לרעה על חוויית המשתמש.
- חוסם קובצי עוגיות של צד שלישי כברירת מחדל.
- תומך [במחיצת מצב](https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning) כדי להקטין את המעקב בין אתרים.[^1]

### המקרה הטוב ביותר

הקריטריונים הטובים ביותר שלנו מייצגים את מה שהיינו רוצים לראות מהפרויקט המושלם בקטגוריה זו. ייתכן שההמלצות שלנו לא יכללו חלק מהפונקציונליות הזו או את כולה, אך אלו שכן כן עשויות לדרג גבוה יותר מאחרות בדף זה.

- כולל פונקציונליות מובנית לחסימת תוכן.
- תומך מידור עוגיות ([מכולות מרובות חשבון](https://support.mozilla.org/en-US/kb/containers)).
- תומך ביישומי אינטרנט מתקדמים.  
  PWAs מאפשרים לך להתקין אתרי אינטרנט מסוימים כאילו היו יישומים מקומיים במחשב שלך. זה יכול להיות יתרונות על פני התקנת יישומים מבוססי אלקטרונים, כי אתה נהנה עדכוני האבטחה הרגילים של הדפדפן שלך.
- אינו כולל פונקציונליות הרחבה (bloatware) שאינה משפיעה על פרטיות המשתמש.
- אינו אוסף טלמטריה כברירת מחדל.
- מספק יישום שרת סינכרון בקוד פתוח.
- ברירת המחדל היא [מנוע חיפוש פרטי](search-engines.md).

### קריטריונים להרחבה

- אסור לשכפל דפדפן מובנה או פונקציונליות מערכת הפעלה.
- חייב להשפיע ישירות על פרטיות המשתמש, כלומר לא חייב פשוט לספק מידע.

[^1]: היישום של Brave מפורט ב [עדכוני פרטיות Brave: חלוקת מצב רשת לפרטיות](https://brave.com/privacy-updates/14-partitioning-network-state/).

---
title: "דפדפני אינטרנט לנייד"
icon: material/cellphone-information
---

אלו הם דפדפני האינטרנט הניידים המומלצים כרגע והתצורות שלנו לגלישה רגילה/לא אנונימית באינטרנט. אם אתה צריך לגלוש באינטרנט באופן אנונימי, עליך להשתמש ב-[Tor](tor.md) במקום זאת. באופן כללי, אנו ממליצים לשמור על הרחבות למינימום; יש להם גישה מוסמכת בתוך הדפדפן שלך, דורשים ממך לסמוך על המפתח, יכולים לגרום לך [להיות בולט](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint), [ולהחליש](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/0ei-UCHNm34/m/lDaXwQhzBAAJ) את בידוד האתר.

## אנדרואיד

באנדרואיד, פיירפוקס עדיין פחות מאובטח מאלטרנטיבות מבוססות Chromium: המנוע של מוזילה, [GeckoView](https://mozilla.github.io/geckoview/), עדיין לא תמך [בבידוד אתרים](https://hacks.mozilla.org/2021/05/introducing-firefox-new-site-isolation-security-architecture) או איפשר את [תהליך מבודד](https://bugzilla.mozilla.org/show_bug.cgi?id=1565196).

### Brave

!!! recommendation

    ![לוגו אמיץ ]( assets/img/browsers/brave.svg){ align=right }
    
    **דפדפן Brave** כולל חוסם תוכן מובנה ו [תכונות פרטיות ]( https://brave.com/privacy-features/), רבים מהם מופעלים כברירת מחדל.
    
    Brave בנוי על פרויקט דפדפן האינטרנט Chromium, כך שהוא אמור להרגיש מוכר ויש לו בעיות תאימות לאתרים מינימליות.
    
    [:octicons-home-16: דף הבית](https://brave.com/){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://brave4u7jddbv7cyviptqjc7jusxh72uik7zt6adtckl5f4nwy2v72qd.onion){ .card-link title="שירות בצל" }
    [:octicons-eye-16:](https://brave.com/privacy/browser/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://support.brave.com/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/brave/brave-browser){ .card-link title="קוד מקור" }
    
    ??? downloads annotate "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.brave.browser)
        - [:simple-github: GitHub](https://github.com/brave/brave-browser/releases)

#### תצורה מומלצת

דפדפן Tor הוא הדרך היחידה לגלוש באמת באינטרנט באופן אנונימי. כאשר אתה משתמש ב-Brave, אנו ממליצים לשנות את ההגדרות הבאות כדי להגן על פרטיותך מפני גורמים מסוימים, אך כל הדפדפנים מלבד [Tor דפדפן](tor.md#tor-browser) יהיו ניתנים למעקב על ידי *מישהו* בהקשר זה או אחר.

ניתן למצוא אפשרויות אלו ב :material-menu: → **הגדרות** → **Brave Shields & פרטיות**

##### מגן

Brave כולל כמה אמצעים נגד טביעת אצבע בתכונת ה[Shields](https://support.brave.com/hc/en-us/articles/360022973471-What-is-Shields-) שלו. אנו מציעים להגדיר את האפשרויות האלה [גלובלי](https://support.brave.com/hc/en-us/articles/360023646212-How-do-I-configure-global-and-site-specific-Shields-settings-) בכל הדפים שבהם אתה מבקר.

##### ברירות מחדל גלובליות של Brave Shield

ניתן לשדרג לאחור את האפשרויות של Shields על בסיס אתר לפי הצורך, אך כברירת מחדל אנו ממליצים להגדיר את האפשרויות הבאות:

<div class="annotate" markdown>

- [x] בחר **אגרסיבי** תחת חסימת עוקבים ומודעות

    ??? warning "השתמש ברשימות סינון ברירת מחדל"
         Brave מאפשר לך לבחור מסנני תוכן נוספים בדף הפנימי `brave://adblock`. אנו ממליצים לא להשתמש בתכונה זו; במקום זאת, שמור על רשימות הסינון המוגדרות כברירת מחדל. שימוש ברשימות נוספות יגרום לך להתבלט ממשתמשי Brave אחרים ועלול גם להגדיל את שטח ההתקפה אם יש ניצול ב-Brave וכלל זדוני יתווסף לאחת הרשימות שבהן אתה משתמש.

- [x] בחר **שדרג חיבורים ל- HTTPS**
- [x] (אופציונלי) בחר **חסום סקריפטים** (1)
- [x] בחר **קפדני, עלול לשבור אתרים** תחת **חסום טביעת אצבע**

</div>

1. אפשרות זו מספקת פונקציונליות דומה למצבי החסימה [המתקדמים של uBlock Origin](https://github.com/gorhill/uBlock/wiki/Blocking-mode) או להרחבה [NoScript](https://noscript.net/).

##### IPFS

- [x] בחר **נקה נתונים ביציאה**

##### חסימת מדיה חברתית

- [ ] בטל את הסימון של כל רכיבי המדיה החברתית

##### הגדרות פרטיות אחרות

<div class="annotate" markdown>

- [x] בחר **השבת UDP שאינו פרוקסי** תחת [WebRTC IP Handling Policy](https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-#webrtc)
- [ ] בטל סימון **אפשר לאתרים לבדוק אם יש לך שיטות תשלום שנשמרו**
- [ ] בטל סימון **IPFS Gateway** (1)
- [x] בחר **סגור כרטיסיות ביציאה**
- [ ] בטל סימון **אפשר ניתוח מוצרים ששומר על הפרטיות (P3A)**
- [ ] בטל סימון **שלח דוחות אבחון אוטומטיים**
- [ ] בטל סימון **שליחה אוטומטית של פינג שימוש יומי ל-Brave**

1. InterPlanetary File System (IPFS) היא רשת מבוזרת, עמית לעמית לאחסון ושיתוף נתונים במערכת קבצים מבוזרת. אלא אם אתה משתמש בתכונה, השבת אותה.

</div>

#### Brave Sync

[Brave Sync](https://support.brave.com/hc/en-us/articles/360059793111-Understanding-Brave-Sync) מאפשר את נתוני הגלישה שלך (היסטוריה, סימניות וכו') להיות נגיש בכל המכשירים שלך ללא צורך בחשבון ומגן עליו באמצעות E2EE.

## iOS

ב-iOS, כל אפליקציה שיכולה לגלוש באינטרנט [מוגבלת](https://developer.apple.com/app-store/review/guidelines) לשימוש ב[מסגרת WebKit](https://developer.apple.com/documentation/webkit), כך שאין סיבה קטנה להשתמש בדפדפן אינטרנט של צד שלישי.

### Safari

!!! recommendation

    ![Safari לוגו](assets/img/browsers/safari.svg){ align=right }
    
    **Safari** הוא דפדפן ברירת המחדל ב - iOS. הוא כולל [תכונות פרטיות](https://support.apple.com/guide/iphone/browse-the-web-privately-iphb01fc3c85/15.0/ios/15.0) כגון הגנת מעקב חכמה, דוח פרטיות, כרטיסיות גלישה פרטית מבודדות, iCloud Private Relay ושדרוגי HTTPS אוטומטיים.
    
    [:octicons-home-16: דף הבית](https://www.apple.com/safari/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.apple.com/legal/privacy/data/en/safari/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://support.apple.com/guide/safari/welcome/mac){ .card-link title=תיעוד}

#### תצורה מומלצת

ניתן למצוא אפשרויות אלה ב - :gear: **הגדרות** ← **Safari** ← **פרטיות ואבטחה**.

##### מניעת מעקב חוצה אתרים

- [x] אפשר **מנע מעקב בין אתרים**

זה מאפשר [הגנת מעקב אינטליגנטי](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) של WebKit. התכונה מסייעת בהגנה מפני מעקב לא רצוי על ידי שימוש בלמידת מכונה במכשיר כדי לעצור עוקבים. ITP מגן מפני איומים נפוצים רבים, אך הוא אינו חוסם את כל אפיקי המעקב מכיוון שהוא נועד לא להפריע לשימושיות האתר.

##### דוח פרטיות

דוח הפרטיות מספק תמונה של עוקבים חוצי אתרים שכרגע מונעים ממך ליצור פרופיל באתר שבו אתה מבקר. הוא יכול גם להציג דוח שבועי כדי להראות אילו עוקבים נחסמו לאורך זמן.

ניתן לגשת לדוח הפרטיות דרך התפריט 'הגדרות דף '.

##### שמירת הפרטיות של מדידת המודעות

- [ ] השבת **פרטיות שמירה על מדידת מודעות**

מדידת קליקים על מודעה השתמשה באופן מסורתי בטכנולוגיית מעקב הפוגעת בפרטיות המשתמש. [מדידת קליקים פרטית](https://webkit.org/blog/11529/introducing-private-click-measurement-pcm/) היא תכונה של WebKit ותקן אינטרנט מוצע שמטרתו לאפשר למפרסמים למדוד האפקטיביות של מסעות פרסום באינטרנט מבלי להתפשר על פרטיות המשתמש.

לתכונה יש מעט חששות פרטיות בפני עצמה, כך שבעוד שאתה יכול לבחור להשאיר אותה פועלת, אנו רואים בעובדה שהיא מושבתת אוטומטית בגלישה פרטית כאינדיקטור להשבית התכונה.

##### גלישה פרטית תמיד

פתח את Safari והקש על כפתור הכרטיסיות, הממוקם בפינה השמאלית התחתונה. לאחר מכן, הרחב את רשימת קבוצות הכרטיסיות.

- [x] בחר **פרטי**

מצב הגלישה הפרטית של Safari מציע הגנות פרטיות נוספות. גלישה פרטית משתמשת בהפעלה חדשה [>חולפת](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/1410529-ephemeral) עבור כל כרטיסייה, כלומר כרטיסיות מבודדות זו מזו. יש גם יתרונות פרטיות קטנים יותר עם גלישה פרטית, כגון אי שליחת כתובת של דף אינטרנט לאפל בעת שימוש בתכונת התרגום של Safari.

שימו לב שגלישה פרטית אינה שומרת קובצי עוגיות ונתוני אתר, כך שלא ניתן יהיה להישאר מחובר לאתרים. זה עשוי להיות אי נוחות.

##### iCloud Sync

סנכרון של היסטוריית ספארי, קבוצות כרטיסיות, כרטיסיות iCloud וסיסמאות שמורות הם E2EE. עם זאת, כברירת מחדל, סימניות [לא](https://support.apple.com/en-us/HT202303). Apple יכולה לפענח ולגשת אליהם בהתאם ל[מדיניות הפרטיות](https://www.apple.com/legal/privacy/en-ww/) שלהם.

אתה יכול להפעיל את E2EE עבור הסימניות וההורדות של Safari על ידי הפעלת [הגנה על נתונים מתקדמת](https://support.apple.com/en-us/HT212520). עבור אל **שם Apple ID שלך ← iCloud ← הגנת נתונים מתקדמת**.

- [x] הפעל **הגנת נתונים מתקדמת**

אם אתה משתמש ב-iCloud עם הגנת נתונים מתקדמת מושבתת, אנו ממליצים גם לבדוק כדי לוודא שמיקום ההורדה המוגדר כברירת מחדל של Safari מוגדר באופן מקומי במכשיר שלך. ניתן למצוא אפשרות זו ב -:gear: **הגדרות** ← **Safari** ← **כללי** ← **הורדות**.

### AdGuard

!!! recommendation

    ![AdGuard לוגו](assets/img/browsers/adguard.svg){ align=right }
    
    **AdGuard for iOS** הוא תוסף חסימת תוכן בקוד פתוח בחינם עבור Safari המשתמש ב-[Content Blocker API](https://developer.apple.com/documentation/safariservices/creating_a_content_blocker).
    
    ל-AdGuard for iOS יש כמה תכונות פרימיום; עם זאת, חסימת תוכן ספארי רגילה אינה כרוכה בתשלום.
    
    [:octicons-home-16: דף הבית](https://adguard.com/en/adguard-ios/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/ios.html){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://kb.adguard.com/ios){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdguardForiOS){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id1047223162)

רשימות פילטרים נוספות מאטות את הקצב ועשויות להגדיל את משטח ההתקפה שלך, אז יש ליישם רק את מה שאתה צריך.

## קריטריונים

**שימו לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף ל[קריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו מערכת ברורה של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! example "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים לכל קטע באתר שלנו, והדבר עשוי להשתנות. אם יש לך שאלות לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו](https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו בעת מתן ההמלצות שלנו אם זה לא מופיע כאן. ישנם גורמים רבים שנחשבים ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

### דרישות מינימליות

- חייב לתמוך בעדכונים אוטומטיים.
- חייב לקבל עדכוני מנוע בתוך 0 -1 ימים משחרורו במעלה הזרם.
- כל שינוי שיידרש כדי להפוך את הדפדפן ליותר מכבד פרטיות לא צריך להשפיע לרעה על חוויית המשתמש.
- דפדפני אנדרואיד חייבים להשתמש במנוע ה - Chromium.
    - למרבה הצער, Mozilla GeckoView עדיין פחות מאובטחת מ-Chromium באנדרואיד.
    - דפדפני iOS מוגבלים ל-WebKit.

### קריטריוני הרחבה

- אין לשכפל את הפונקציונליות של הדפדפן או מערכת ההפעלה המובנית.
- חייב להשפיע ישירות על פרטיות המשתמש, כלומר אסור רק לספק מידע.

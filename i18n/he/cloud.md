---
title: "אחסון בענן"
icon: material/file-cloud
description: ספקי אחסון בענן רבים דורשים את האמון שלך שהם לא יסתכלו על הקבצים שלך. אלו חלופות פרטיות!
---

ספקי אחסון ענן רבים דורשים את האמון המלא שלך בכך שהם לא יסתכלו על הקבצים שלך. החלופות המפורטות להלן מבטלות את הצורך באמון על ידי הטמעת E2EE מאובטחת.

אם חלופות אלה אינן מתאימות לצרכים שלך, אנו מציעים לך לבדוק שימוש בתוכנת הצפנה כמו [Cryptomator](encryption.md#cryptomator-cloud) עם ספק ענן אחר. שימוש ב-Cryptomator בשילוב עם **כל** ספק ענן (כולל אלה) עשוי להיות רעיון טוב כדי להפחית את הסיכון לפגמי הצפנה אצל הלקוחות המקומיים של הספק.

??? השאלה "מחפשים את NextCloud?"

    Nextcloud הוא [עדיין כלי מומלץ](productivity.md) לאירוח עצמי של חבילת ניהול קבצים, אולם איננו ממליצים כרגע על ספקי אחסון Nextcloud של צד שלישי, מכיוון שאנו [לא ממליצים](https://discuss.privacyguides.net/t/dont-recommend-nextcloud-e2ee/10352/29)פונקציונליות ה-E2EE המובנית של Nextcloud למשתמשים ביתיים.

## Proton Drive

!!! recommendation

    ![Proton Drive לוגו](assets/img/cloud/protondrive.svg){ align=right }
    
    **Proton Drive** הוא ספק אחסון ענן מוצפן שוויצרי מספק האימייל המוצפן הפופולרי [Proton Mail](email.md#proton-mail).
    
    [:octicons-home-16: דף הבית](https://proton.me/drive){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://proton.me/support/drive){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/ProtonMail/WebClients){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.drive)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1509667851)

אפליקציית האינטרנט של Proton Drive נבדקה באופן עצמאי על ידי Securitum ב[2021](https://proton.me/blog/security-audit-all-proton-apps), הפרטים המלאים לא זמינים, אך במכתב האישור של Securitum נאמר:

> המבקרים זיהו שתי נקודות תורפה בדרגת חומרה נמוכה. בנוסף, דווחו חמש המלצות כלליות. יחד עם זאת, אנו מאשרים כי לא זוהו בעיות אבטחה חשובות במהלך המבחן.

הלקוחות הניידים החדשים של Proton Drive עדיין לא עברו ביקורת פומבית על ידי צד שלישי.

## Tresorit

!!! recommendation

    ![Tresorit לוגו](assets/img/cloud/tresorit.svg){ align=right }
    
    **Tresorit** היא ספקית אחסון ענן מוצפנת הונגרית שנוסדה ב-2011. Tresorit נמצאת בבעלות ה-Swiss Post, שירות הדואר הלאומי של שוויץ.
    
    [:octicons-home-16: דף הבית](https://tresorit.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tresorit.com/legal/privacy-policy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://support.tresorit.com/hc/en-us){ .card-link title=תיעוד}
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.tresorit.mobile)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id722163232)
        - [:simple-windows11: Windows](https://tresorit.com/download)
        - [:simple-apple: macOS](https://tresorit.com/download)
        - [:simple-linux: Linux](https://tresorit.com/download)

Tresorit קיבלה מספר ביקורות אבטחה עצמאיות:

- [2022](https://tresorit.com/blog/tresorit-receives-iso-27001-certification/): ISO/IEC 27001:2013[^1] הענות[הסמכה](https://www.certipedia.com/quality_marks/9108644476) על ידי TÜV Rheinland InterCert Kft
- [2021](https://tresorit.com/blog/fresh-penetration-testing-confirms-tresorit-security/): בדיקת חדירה על ידי Computest
    - סקירה זו העריכה את האבטחה של לקוח האינטרנט של Tresorit, אפליקציית אנדרואיד, אפליקציית ווינדוס והתשתית הקשורה אליו.
    - Computest גילתה שתי נקודות תורפה שנפתרו.
- [2019](https://tresorit.com/blog/ernst-young-review-verifies-tresorits-security-architecture/): בדיקת חדירה על ידי Ernst & Young.
    - סקירה זו ניתחה את קוד המקור המלא של Tresorit ואימתה שהיישום תואם את המושגים המתוארים ב[דף הלבן](https://prodfrontendcdn.azureedge.net/202208011608/tresorit-encryption-whitepaper.pdf) של Tresorit.
    - ארנסט & יאנג בדק בנוסף את האינטרנט, הנייד והמחשב שולחני: "תוצאות הבדיקה לא מצאו חריגה מתביעות סודיות הנתונים של Tresorit."

הם גם קיבלו את תווית האמון הדיגיטלי, הסמכה מ[היוזמה הדיגיטלית השוויצרית](https://www.swiss-digital-initiative.org/digital-trust-label/) המחייבת העברת 35[ קריטריונים](https://digitaltrust-label.swiss/criteria/) הקשורים לאבטחה, פרטיות ואמינות.

## קריטריונים

**שים לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף ל [הקריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו סט ברור של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! example "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים לכל קטע באתר שלנו, והדבר עשוי להשתנות. אם יש לך שאלות כלשהן לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו](https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו כשהצענו את ההמלצות שלנו אם הוא לא רשום כאן. ישנם גורמים רבים שנחשבים ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

### דרישות מינימליות

- חייב לאכוף הצפנה מקצה לקצה.
- יש להציע תוכנית חינם או תקופת ניסיון לבדיקה.
- צריך לתמוך בתמיכה באימות רב-גורמי TOTP או FIDO2, או כניסות מפתח סיסמה.
- חייב להציע ממשק אינטרנט התומך בפונקציונליות ניהול קבצים בסיסית.
- חייב לאפשר ייצוא קל של כל הקבצים/המסמכים.
- חייב להשתמש בהצפנה סטנדרטית ומבוקרת.

### המקרה הטוב ביותר

הקריטריונים הטובים ביותר שלנו מייצגים את מה שהיינו רוצים לראות מהפרויקט המושלם בקטגוריה זו. ייתכן שההמלצות שלנו לא יכללו חלק מהפונקציונליות הזו או את כולה, אך אלו שכן כן עשויות לדרג גבוה יותר מאחרות בדף זה.

- הלקוחות צריכים להיות בקוד פתוח.
- לקוחות צריכים להיות מבוקרים במלואם על ידי צד שלישי עצמאי.
- צריך להציע ללקוחות מקומיים עבור לינוקס, אנדרואיד, Windows, macOS ו - iOS.
    - לקוחות אלה צריכים להשתלב עם כלי מערכת הפעלה מקוריים עבור ספקי אחסון בענן, כגון שילוב אפליקציות קבצים ב- iOS, או פונקציונליות DocumentsProvider באנדרואיד.
- צריך לתמוך בשיתוף קבצים קל עם משתמשים אחרים.
- אמור להציע לפחות תצוגה מקדימה בסיסית של קובץ ופונקציונליות עריכה בממשק האינטרנט.

[^1]: [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001): תאימות 2013 מתייחסת ל[מערכת ניהול אבטחת המידע](https://en.wikipedia.org/wiki/Information_security_management) של החברה ומכסה את המכירות, הפיתוח, התחזוקה והתמיכה של שירותי הענן שלהם.

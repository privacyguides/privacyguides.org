---
title: "מנהלי סיסמאות"
icon: material/form-textbox-password
---

מנהלי סיסמאות מאפשרים לך לאחסן ולנהל סיסמאות ואישורים אחרים באופן מאובטח באמצעות סיסמת מאסטר.

[מבוא לסיסמאות :material-arrow-right-drop-circle:](./basics/passwords-overview.md)

!!! מידע

    ![Bitwarden logo ]( property/img/password - management/bitwarden.svg){ align=right }
    
    **Bitwarden ** הוא מנהל סיסמאות חופשי ופתוח. מטרתו לפתור בעיות בניהול סיסמאות עבור אנשים, צוותים וארגונים עסקיים.
    
    Bitwarden הוא בין הפתרונות הטובים והבטוחים ביותר לאחסון כל הכניסות והסיסמאות שלך, תוך שמירה על סנכרון נוח בין כל המכשירים שלך. [:octicons-home-16: Homepage](https://bitwarden.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://bitwarden.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://bitwarden.com/help/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/bitwarden){ .card-link title="Source Code" }
    
    ???

## מבוסס ענן

מנהלי הסיסמאות האלה מסנכרנים את הסיסמאות שלכם עם שרת ענן כדי לקבל נגישות קלה מכל המכשירים שלכם ובטיחות מפני אובדן מכשירים.

### Bitwarden

!!! recommendation

    ![Bitwarden לוגו](assets/img/password-management/bitwarden.svg){ align=right }
    
    **Bitwarden** הוא מנהל סיסמאות חינמי וקוד פתוח. מטרתו לפתור בעיות בניהול סיסמאות עבור אנשים פרטיים, צוותים וארגונים עסקיים. Bitwarden הוא בין הפתרונות הטובים והבטוחים ביותר לאחסון כל הכניסות והסיסמאות שלך, תוך שמירה על סנכרון נוח בין כל המכשירים שלך.
    
    [:octicons-home-16: דף הבית](https://bitwarden.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://bitwarden.com/privacy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://bitwarden.com/help/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/bitwarden){ .card-link title="קוד מקור" }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden)
        - [:simple-appstore: App Store](https://apps.apple.com/app/bitwarden-password-manager/id1137397744)
        - [:simple-github: GitHub](https://github.com/bitwarden/mobile/releases)
        - [:simple-windows11: Windows](https://bitwarden.com/download)
        - [:simple-linux: Linux](https://bitwarden.com/download)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/com.bitwarden.desktop)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/bitwarden-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/jbkfoedolllekgbhcbcoahefnbanhhlh)

Bitwarden כולל גם [Bitwarden Send](https://bitwarden.com/products/send/), המאפשר לך לשתף טקסט וקבצים בצורה מאובטחת עם [הצפנה מקצה לקצה](https://bitwarden.com/help/send-encryption). ניתן לדרוש [סיסמה](https://bitwarden.com/help/send-privacy/#send-passwords) יחד עם קישור השליחה. Bitwarden Send כולל גם תכונות [מחיקה אוטומטית](https://bitwarden.com/help/send-lifespan).

אתה צריך [תוכנית פרימיום](https://bitwarden.com/help/about-bitwarden-plans/#compare-personal-plans) כדי להיות מסוגל לשתף קבצים. התוכנית החינמית מאפשרת שיתוף טקסט בלבד.

הקוד בצד השרת של Bitwarden הוא [קוד-פתוח](https://github.com/bitwarden/server), כך שאם אינכם רוצים להשתמש בענן Bitwarden, תוכלו לארח בקלות שרת סינכרון Bitwarden משלכם.

**Vaultwarden** הוא יישום חלופי של שרת הסנכרון של Bitwarden שנכתב ב-Rust ותואם ללקוחות רשמיים של Bitwarden, מושלם לפריסה באירוח עצמי שבו הפעלת השירות הרשמי עתיר המשאבים עשויה להיות לא אידיאלית. אם אתם מחפשים לארח את Bitwarden באופן עצמאי בשרת שלכם, קרוב לוודאי שתרצו להשתמש ב-Vaultwarden על פני קוד השרת הרשמי של Bitwarden.

[:octicons-repo-16: Vaultwarden מאגר](https://github.com/dani-garcia/vaultwarden ""){.md-button} [:octicons-info-16:](https://github.com/dani-garcia/vaultwarden/wiki){ .card-link title=תיעוד}
[:octicons-code-16:](https://github.com/dani-garcia/vaultwarden){ .card-link title="קוד מקור" }
[:octicons-heart-16:](https://github.com/sponsors/dani-garcia){ .card-link title=לתרומה }

### 1Password

באופן מסורתי, **1Password** הציע את חוויית המשתמש הטובה ביותר של מנהל הסיסמאות עבור אנשים שמשתמשים ב - macOS וב - iOS; עם זאת, כעת הוא השיג תכונות שונות בכל הפלטפורמות. המלצה

    ![1Password לוגו](assets/img/password-management/1password.svg){ align=right }
    
    **1Password** הוא מנהל סיסמאות עם דגש חזק על אבטחה וקלות שימוש, המאפשר לך לאחסן סיסמאות, כרטיסי אשראי, רישיונות תוכנה וכל מידע רגיש אחר בכספת דיגיטלית מאובטחת. הכספת שלכם מתארחת בשרתים של 1Password תמורת [תשלום חודשי](https://1password.com/sign-up/). 1Password הוא [audited](https://support.1password.com/security-assessments/) על בסיס קבוע ומספק תמיכת לקוחות יוצאת דופן. 1Password הוא מקור סגור; עם זאת, האבטחה של המוצר מתועדת ביסודיות [נייר אבטחה לבן]( https://1passwordstatic.com/files/security/1password-white-paper.pdf).
    
    [:octicons-home-16: דף הבית](https://1password.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://support.1password.com/1password-privacy/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://support.1password.com/){ .card-link title=תיעוד}
    
    ??? הורדות
    
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.onepassword.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1511601750?mt=8)
        - [:simple-windows11: Windows](https://1password.com/downloads/windows/)
        - [:simple-apple: macOS](https://1password.com/downloads/mac/)
        - [:simple-linux: Linux](https://1password.com/downloads/linux/)

באופן מסורתי, **1Password** הציע את חוויית המשתמש הטובה ביותר כמנהל סיסמאות לאנשים שמשתמשים ב-macOS וב-iOS; עם זאת, היא השיגה כעת שוויון תכונות בכל הפלטפורמות. הוא מתגאה בתכונות רבות המיועדות למשפחות ולאנשים פחות טכניים, כמו גם פונקציונליות מתקדמת.

כספת 1Password שלכם מאובטחת גם באמצעות סיסמת המאסטר שלכם וגם באמצעות מפתח אבטחה אקראי בן 34 תווים כדי להצפין את הנתונים שלכם בשרתים שלהם. מפתח אבטחה זה מוסיף שכבת הגנה לנתונים שלך מכיוון שהנתונים שלך מאובטחים באנטרופיה גבוהה ללא קשר לסיסמת המאסטר שלך. פתרונות רבים אחרים לניהול סיסמאות מסתמכים לחלוטין על החוזק של סיסמת המאסטר שלכם כדי לאבטח את הנתונים שלכם.

יתרון אחד שיש ל-1Password על פני Bitwarden הוא התמיכה מהשורה הראשונה שלה בלקוחות מקוריים. בעוד ש-Bitwarden מעבירה תפקידים רבים, במיוחד פיצ'רים לניהול חשבונות, לממשק כספת האינטרנט שלה, 1Password הופכת כמעט כל פיצ'ר לזמין בלקוחות המקוריים שלה למכשירים ניידים או שולחניים. ללקוחות של 1Password יש גם ממשק משתמש אינטואיטיבי יותר, מה שהופך אותם לקלים יותר לשימוש ולניווט.

### Psono

!!! המלצה

    ![Psono לוגו](assets/img/password-management/psono.svg){ align=right }
    
    **Psono** הוא מנהל סיסמאות חינמי וקוד פתוח מגרמניה, עם דגש על ניהול סיסמאות לצוותים. Psono תומכת בשיתוף מאובטח של סיסמאות, קבצים, סימניות ואימיילים. הורדות
    
        - [:simple-windows11: Windows](https://keepassxc.org/download/#windows)
        - [:simple-apple: macOS](https://keepassxc.org/download/#mac)
        - [:simple-linux: Linux](https://keepassxc.org/download/#linux)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)
    
    [:octicons-home-16: דף הבית](https://psono.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://psono.com/privacy-policy){ .card-link title="מדיניות-פרטיות" }
    [:octicons-info-16:](https://doc.psono.com){ .card-link title=תיעוד}
    [:octicons-code-16:](https://gitlab.com/psono){ .card-link title="קוד מקור" }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.psono.psono)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/psono-password-manager/id1545581224)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/psono-pw-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/psonopw-password-manager/eljmjmgjkbmpmfljlmklcfineebidmlo)
        - [:simple-docker: Docker Hub](https://hub.docker.com/r/psono/psono-client)

Psono מספק תיעוד נרחב למוצר שלהם. לקוח האינטרנט של Psono יכול להיות באחסון עצמי; לחלופין, ניתן לבחור את המהדורה הקהילתית המלאה או את המהדורה הארגונית עם תכונות נוספות.

### קריטריונים

**שים לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף [לקריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו סט ברור של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! משמעות הדבר שעלול להיות אובדן נתונים אם תייבא קובץ זה למנהל סיסמאות אחר.

    ![KeePassDX logo](assets/img/password-management/keepassdx.svg){ align=right }
    
    ** KeePassDX ** הוא מנהל סיסמאות קל עבור אנדרואיד, מאפשר עריכת נתונים מוצפנים בקובץ יחיד בפורמט KeePass ויכול למלא את הטפסים בצורה מאובטחת. [Contributor Pro](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.pro) מאפשר שחרור נעילת תוכן קוסמטי ותכונות פרוטוקול לא סטנדרטיות, אך חשוב מכך, הוא עוזר ומעודד פיתוח. ישנם גורמים רבים שנשקלים ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

#### דרישות מינימליות

- חייב להשתמש ב-E2EE חזק, מבוסס תקנים/מודרני.
- חייב להיות בעלי נוהלי הצפנה ואבטחה מתועדים ביסודיות.
- חייב להיות בעל ביקורת שפורסמה מצד שלישי מכובד ובלתי תלוי.
- כל טלמטריה שאינה חיונית חייבת להיות אופציונלית.
- לא יכול לאסוף יותר PII מהנדרש למטרות חיוב.

#### המקרה הטוב ביותר

הקריטריונים שלנו במקרה הטוב ביותר מייצגים את מה שהיינו רוצים לראות מהפרויקט המושלם בקטגוריה זו. ההמלצות שלנו לא יכולות לכלול את כל הפונקציונליות הזו או את כולה, אך אלה שכן דורגו גבוה יותר מאחרים בדף זה.

- מדידת השימוש צריכה להיות opt-in (מושבתת כברירת מחדל) או לא נאספת כלל.
- צריך להיות קוד פתוח וניתן לאירוח עצמי סביר.

## אחסון מקומי

אפשרויות אלה מאפשרות לך לנהל מסד נתונים של סיסמאות מוצפנות באופן מקומי.

### KeePassXC

בנוסף, קיימת גרסה לא מקוונת בלבד המוצעת: [Strongbox Zero](https://apps.apple.com/app/strongbox-keepass-pwsafe/id1581589638). המלצה

    ![KeePassXC לוגו](assets/img/password-management/keepassxc.svg){ align=right }
    
    **KeePassXC** הוא פיצול קהילתי של KeePassX, יציאה חוצת פלטפורמות מקורית של KeePass Password Safe, במטרה להרחיב ולשפר אותה עם תכונות חדשות ותיקוני באגים כדי לספק מנהל סיסמאות קוד פתוח עשיר בפיצ'רים, חוצה פלטפורמות וקוד פתוח.
    
    [:octicons-home-16: דף הבית](https://keepassxc.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://keepassxc.org/privacy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://keepassxc.org/docs/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/keepassxreboot/keepassxc){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://keepassxc.org/donate/){ .card-link title=לתרומה }
    
    ??? הורדות
    
    
        - [:simple-windows11: Windows](https://keepassxc.org/download/#windows)
        - [:simple-apple: macOS](https://keepassxc.org/download/#mac)
        - [:simple-linux: Linux](https://keepassxc.org/download/#linux)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)

KeePassXC מאחסן את נתוני הייצוא שלו כ - [קבצי CSV](https://en.wikipedia.org/wiki/Comma-separated_values). משמעות הדבר שעלול להיות אובדן נתונים אם תייבא קובץ זה למנהל סיסמאות אחר. מומלץ לבדוק כל רשומה באופן ידני.

### KeePassDX (אנדרואיד)

!!! recommendation

    ![gopass logo ]( assets/img/password - management/gopass.svg){ align=right }
    
    ** gopass** הוא מנהל סיסמאות עבור שורת הפקודה הכתובה ב - Go. הוא פועל על כל מערכות ההפעלה העיקריות של מחשבים שולחניים ושרתים (Linux, macOS, BSD, Windows).
    
    [:octicons-home-16: Homepage](https://www.gopass.pw){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/gopasspw/gopass/tree/master/docs){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=Contribute }
    
    ??? הורדות
    
        - [:simple-windows11: Windows](https://www.gopass.pw/#install-windows)
        - [:simple-apple: macOS](https://www.gopass.pw/#install-macos)
        - [:simple-linux: Linux](https://www.gopass.pw/#install-linux)
        - [:simple-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd)

### gopass

!!! recommendation

    ![gopass לוגו](assets/img/password-management/gopass.svg){ align=right }
    
    ** gopass** הוא מנהל סיסמאות עבור שורת הפקודה הכתובה ב - Go. הוא פועל על כל מערכות ההפעלה העיקריות של מחשבים שולחניים ושרתים (Linux, macOS, BSD, Windows). [:octicons-home-16: Homepage](https://www.gopass.pw){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/gopasspw/gopass/tree/master/docs){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=Contribute }
    
    ???
    
    [:octicons-home-16: דף הבית](https://strongboxsafe.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://strongboxsafe.com/privacy/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://strongboxsafe.com/getting-started/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/strongbox-password-safe/Strongbox){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://github.com/strongbox-password-safe/Strongbox#supporting-development){ .card-link title=לתרומה }
    
    ??? הורדות
    
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/strongbox-keepass-pwsafe/id897283731)

בנוסף, קיימת גרסה לא מקוונת בלבד המוצעת: [Strongbox Zero](https://apps.apple.com/app/strongbox-keepass-pwsafe/id1581589638). גרסה זו מופשטת בניסיון לצמצם את שטח התקיפה.

### שורת פקודה

מוצרים אלה הם מנהלי סיסמאות מינימליים שניתן להשתמש בהם בתוך יישומי סקריפטים.

#### gopass

!!! recommendation

    ![gopass לוגו](assets/img/password-management/gopass.svg){ align=right }
    
    **gopass** הוא מנהל סיסמאות לשורת הפקודה שנכתבה ב-Go. זה עובד על כל מערכות ההפעלה הגדולות של שולחן העבודה והשרת (לינוקס, macOS, BSD, Windows).
    
    [:octicons-home-16: דף הבית](https://www.gopass.pw){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/gopasspw/gopass/tree/master/docs){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=לתרומה }
    
    ??? הורדות
    
        - [:simple-windows11: Windows](https://www.gopass.pw/#install-windows)
        - [:simple-apple: macOS](https://www.gopass.pw/#install-macos)
        - [:simple-linux: Linux](https://www.gopass.pw/#install-linux)
        - [:simple-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd)

### קריטריונים

**שים לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף ל [הקריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו סט ברור של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! דוגמה: "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים לכל קטע באתר שלנו, והדבר עשוי להשתנות. אם יש לך שאלות לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו]( https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו בעת ביצוע ההמלצות שלנו אם זה לא מופיע כאן. ישנם גורמים רבים שנלקחים בחשבון ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

- חייב להיות חוצה פלטפורמות.

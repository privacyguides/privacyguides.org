---
title: "מנהלי סיסמאות"
icon: material/form-textbox-password
---

מנהלי סיסמאות מאפשרים לך לאחסן ולנהל בצורה מאובטחת סיסמאות ואישורים אחרים עם שימוש בסיסמת אב.

[מבוא לסיסמאות :material-arrow-right-drop-circle:](./basics/passwords-overview.md)

!!! info "מידע"

    מנהלי סיסמאות מובנים בתוכנות כמו דפדפנים ומערכות הפעלה אינם טובים לפעמים כמו תוכנות ייעודיות למנהל סיסמאות. היתרון של מנהל סיסמאות מובנה הוא אינטגרציה טובה עם התוכנה, אך לרוב זה יכול להיות פשוט מאוד וחסר תכונות פרטיות ואבטחה שיש להצעות עצמאיות.
    
    לדוגמה, מנהל הסיסמאות ב-Microsoft Edge אינו מציע E2EE כלל. למנהל הסיסמאות של Google יש [אופציונלי](https://support.google.com/accounts/answer/11350823) E2EE, ו-[של Apple](https://support.apple.com/en-us/HT202303) מציע E2EE על ידי ברירת מחדל.

## מבוסס ענן

מנהלי סיסמאות אלו מסנכרנים את הסיסמאות שלך עם שרת ענן לצורך נגישות קלה מכל המכשירים שלך ובטיחות מפני אובדן מכשירים.

### Bitwarden

!!! recommendation

    ![Bitwarden לוגו](assets/img/password-management/bitwarden.svg){ align=right }
    
    **Bitwarden** הוא מנהל סיסמאות חינמי ובקוד פתוח. מטרתו היא לפתור בעיות ניהול סיסמאות עבור יחידים, צוותים וארגונים עסקיים. Bitwarden הוא בין הפתרונות הטובים והבטוחים ביותר לאחסון כל פרטי ההתחברות והסיסמאות שלך תוך שמירה נוחה על סנכרון בין כל המכשירים שלך.
    
    [:octicons-home-16: דף הבית](https://bitwarden.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://bitwarden.com/privacy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://bitwarden.com/help/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/bitwarden){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
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

!!! recommendation

    ![1Password לוגו](assets/img/password-management/1password.svg){ align=right }
    
    **1Password** הוא מנהל סיסמאות עם דגש חזק על אבטחה וקלות שימוש, המאפשר לך לאחסן סיסמאות, כרטיסי אשראי, רישיונות תוכנה וכל מידע רגיש אחר בכספת דיגיטלית מאובטחת. הכספת שלכם מתארחת בשרתים של 1Password תמורת [תשלום חודשי](https://1password.com/sign-up/). 1Password הוא [audited](https://support.1password.com/security-assessments/) על בסיס קבוע ומספק תמיכת לקוחות יוצאת דופן. 1Password הוא מקור סגור; עם זאת, האבטחה של המוצר מתועדת ביסודיות [נייר אבטחה לבן]( https://1passwordstatic.com/files/security/1password-white-paper.pdf).
    
    [:octicons-home-16: דף הבית](https://1password.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://support.1password.com/1password-privacy/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://support.1password.com/){ .card-link title=תיעוד}
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.onepassword.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1511601750?mt=8)
        - [:simple-windows11: Windows](https://1password.com/downloads/windows/)
        - [:simple-apple: macOS](https://1password.com/downloads/mac/)
        - [:simple-linux: Linux](https://1password.com/downloads/linux/)

באופן מסורתי, **1Password** הציעה את חוויית המשתמש הטובה ביותר של מנהל סיסמאות לאנשים המשתמשים ב-macOS ו-iOS; עם זאת, הוא השיג כעת שוויון תכונה בכל הפלטפורמות. הוא מתהדר בתכונות רבות המיועדות למשפחות ולאנשים פחות טכניים, כמו גם בפונקציונליות מתקדמת.

כספת 1Password שלך מאובטחת גם עם סיסמת האב שלך וגם עם מפתח אבטחה אקראי בן 34 תווים כדי להצפין את הנתונים שלך בשרתים שלהם. מפתח אבטחה זה מוסיף שכבת הגנה לנתונים שלך מכיוון שהנתונים שלך מאובטחים באנטרופיה גבוהה ללא קשר לסיסמת המאסטר שלך. פתרונות רבים אחרים של מנהל סיסמאות תלויים לחלוטין בחוזקה של סיסמת המאסטר שלך כדי לאבטח את הנתונים שלך.

יתרון אחד שיש ל-1Password על פני Bitwarden הוא התמיכה המדרגה הראשונה שלה עבור לקוחות מקומיים. בעוד Bitwarden מסירה מטלות רבות, במיוחד תכונות ניהול חשבונות, לממשק הכספת האינטרנטית שלה, 1Password הופכת כמעט כל תכונה לזמינה בתוך הלקוחות המקוריים שלה לנייד או למחשב שולחני. ללקוחות של 1Password יש גם ממשק משתמש אינטואיטיבי יותר, מה שמקל עליהם את השימוש והניווט.

### Psono

!!! recommendation

    ![Psono לוגו](assets/img/password-management/psono.svg){ align=right }
    
    **Psono** הוא מנהל סיסמאות חינמי ובקוד פתוח מגרמניה, עם התמקדות בניהול סיסמאות לצוותים. Psono תומכת בשיתוף מאובטח של סיסמאות, קבצים, סימניות ודואר אלקטרוני. כל הסודות מוגנים באמצעות סיסמת מאסטר.
    
    [:octicons-home-16: דף הבית](https://psono.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://psono.com/privacy-policy){ .card-link title="מדיניות-פרטיות" }
    [:octicons-info-16:](https://doc.psono.com){ .card-link title=תיעוד}
    [:octicons-code-16:](https://gitlab.com/psono){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.psono.psono)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/psono-password-manager/id1545581224)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/psono-pw-password-manager)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/psonopw-password-manager/eljmjmgjkbmpmfljlmklcfineebidmlo)
        - [:simple-docker: Docker Hub](https://hub.docker.com/r/psono/psono-client)

Psono מספקת תיעוד נרחב עבור המוצר שלהם. לקוח האינטרנט של Psono יכול להתארח בעצמו; לחלופין, אתה יכול לבחור את מהדורת הקהילה המלאה או את המהדורה הארגונית עם תכונות נוספות.

### קריטריונים

**שימו לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף ל[קריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו מערכת ברורה של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! example "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים עבור כל חלק באתר שלנו, וזה עשוי להיות נתון לשינויים. אם יש לך שאלות כלשהן לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו](https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו כשהצענו את ההמלצות שלנו אם הוא לא רשום כאן. ישנם גורמים רבים שנחשבים ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

#### דרישות מינימליות

- חייב להשתמש ב-E2EE חזק, מבוסס תקנים/מודרני.
- חייב להיות מתועד ביסודיות נוהלי הצפנה ואבטחה.
- חייב להיות ביקורת שפורסמה מצד שלישי מכובד ובלתי תלוי.
- כל טלמטריה לא חיונית חייבת להיות אופציונלית.
- אסור לאסוף יותר PII ממה שנדרש למטרות חיוב.

#### המקרה הטוב ביותר

הקריטריונים הטובים ביותר שלנו מייצגים את מה שהיינו רוצים לראות מהפרויקט המושלם בקטגוריה זו. ייתכן שההמלצות שלנו לא יכללו חלק מהפונקציונליות הזו או את כולה, אך אלו שכן כן עשויות לדרג גבוה יותר מאחרות בדף זה.

- יש להצטרף לטלמטריה (מושבת כברירת מחדל) או לא לאסוף כלל.
- צריך להיות קוד פתוח וניתן לאירוח עצמי סביר.

## אחסון מקומי

אפשרויות אלה מאפשרות לך לנהל מסד נתונים של סיסמאות מוצפנות באופן מקומי.

### KeePassXC

!!! recommendation

    ![KeePassXC לוגו](assets/img/password-management/keepassxc.svg){ align=right }
    
    **KeePassXC** הוא מזלג קהילתי של KeePassX, יציאה מקורית בין פלטפורמות של KeePass Password Safe, במטרה להרחיב ולשפר אותה עם תכונות חדשות ותיקוני באגים כדי לספק גישה עשירה בתכונות, חוצת פלטפורמות ומודרנית פתוחה- מנהל סיסמאות מקור.
    
    [:octicons-home-16: דף הבית](https://keepassxc.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://keepassxc.org/privacy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://keepassxc.org/docs/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/keepassxreboot/keepassxc){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://keepassxc.org/donate/){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-windows11: Windows](https://keepassxc.org/download/#windows)
        - [:simple-apple: macOS](https://keepassxc.org/download/#mac)
        - [:simple-linux: Linux](https://keepassxc.org/download/#linux)
        - [:simple-flathub: Flatpak](https://flathub.org/apps/details/org.keepassxc.KeePassXC)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/firefox/addon/keepassxc-browser)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/keepassxc-browser/oboonakemofpalcgghocfoadofidjkkk)

KeePassXC מאחסן את נתוני הייצוא שלו כקובצי [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). המשמעות עשויה להיות אובדן נתונים אם אתה מייבא קובץ זה למנהל סיסמאות אחר. אנו ממליצים לך לבדוק כל רשומה באופן ידני.

### KeePassDX (אנדרואיד)

!!! recommendation

    ![KeePassDX לוגו](assets/img/password-management/keepassdx.svg){ align=right }
    
    **KeePassDX** הוא מנהל סיסמאות קל משקל לאנדרואיד, מאפשר עריכת נתונים מוצפנים בקובץ בודד בפורמט KeePass ויכול למלא את הטפסים בצורה מאובטחת. [Contributor Pro](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.pro) מאפשר ביטול נעילה של תוכן קוסמטי ותכונות פרוטוקול לא סטנדרטיות, אך חשוב מכך, זה עוזר ומעודד התפתחות.
    
    [:octicons-home-16: דף הבית](https://www.keepassdx.com){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Kunzisoft/KeePassDX/wiki){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/Kunzisoft/KeePassDX){ .card-link title="קוד מקור }
    [:octicons-heart-16:](https://www.keepassdx.com/#donation){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.kunzisoft.keepass.free)
        - [:simple-github: GitHub](https://github.com/Kunzisoft/KeePassDX/releases)

### Strongbox (iOS & macOS)

!!! recommendation

    ![לוגו Strongbox](assets/img/password-management/strongbox.svg){ align=right }
    
    **Strongbox** הוא מנהל סיסמאות מקורי בקוד פתוח עבור iOS ו-macOS. תמיכה בפורמטים של KeePass ו- Password Safe, ניתן להשתמש ב-Strongbox במקביל למנהלי סיסמאות אחרים, כמו KeePassXC, בפלטפורמות שאינן של אפל. על ידי שימוש ב[מודל freemium](https://strongboxsafe.com/pricing/), Strongbox מציעה את רוב התכונות תחת השכבה החינמית שלה עם [תכונות] יותר מוכוונות נוחות (https://strongboxsafe.com/comparison/) - כגון כאימות ביומטרי - נעול מאחורי מנוי או רישיון תמידי.
    
    [:octicons-home-16: דף הבית](https://strongboxsafe.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://strongboxsafe.com/privacy/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://strongboxsafe.com/getting-started/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/strongbox-password-safe/Strongbox){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://github.com/strongbox-password-safe/Strongbox#supporting-development){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-appstore: App Store](https://apps.apple.com/app/strongbox-keepass-pwsafe/id897283731)

בנוסף, קיימת גרסה לא מקוונת בלבד המוצעת: [Strongbox Zero](https://apps.apple.com/app/strongbox-keepass-pwsafe/id1581589638). גרסה זו מופשטת בניסיון לצמצם את שטח התקיפה.

### שורת הפקודה

מוצרים אלה הם מנהלי סיסמאות מינימליים שניתן להשתמש בהם בתוך יישומי סקריפטים.

#### gopass

!!! recommendation

    ![לוגו gopass](assets/img/password-management/gopass.svg){ align=right }
    
    **gopass** הוא מנהל סיסמאות עבור שורת הפקודה הכתובה ב-Go. זה עובד על כל מערכות ההפעלה העיקריות של שולחן העבודה והשרת (Linux, macOS, BSD, Windows).
    
    [:octicons-home-16: דף הבית](https://www.gopass.pw){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/gopasspw/gopass/tree/master/docs){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/gopasspw/gopass){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://github.com/sponsors/dominikschulz){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-windows11: Windows](https://www.gopass.pw/#install-windows)
        - [:simple-apple: macOS](https://www.gopass.pw/#install-macos)
        - [:simple-linux: Linux](https://www.gopass.pw/#install-linux)
        - [:simple-freebsd: FreeBSD](https://www.gopass.pw/#install-bsd)

### קריטריונים

**שימו לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף ל[הקריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו מערכת ברורה של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! example "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים עבור כל חלק באתר שלנו, וזה עשוי להיות נתון לשינויים. אם יש לך שאלות כלשהן לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו](https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו כשהצענו את ההמלצות שלנו אם הוא לא רשום כאן. ישנם גורמים רבים שנחשבים ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

- חייב להיות חוצה פלטפורמות.

---
title: "מאמתים רב - שלבים"
icon: 'material/two-factor-authentication'
---

## מפתחות אבטחה לחומרה

### YubiKey

!!! recommendation

    ![YubiKeys](assets/img/multi-factor-authentication/yubikey.png)
    
    **YubiKeys** הם בין מפתחות האבטחה הפופולריים ביותר. לחלק מדגמי YubiKey יש מגוון רחב של תכונות כגון: [גורם שני אוניברסלי (U2F)](https://en.wikipedia.org/wiki/Universal_2nd_Factor), [FIDO2 ו-WebAuthn](basics/multi-factor-authentication.md#fido-fast-identity-online), [Yubico OTP](basics/multi-factor-authentication.md#yubico-otp), [אימות זהות אישית (PIV)](https://developers.yubico.com/PIV), [OpenPGP](https://developers.yubico.com/PGP/),[TOTP ו HOTP](https://developers.yubico.com/OATH).
    
    אחד היתרונות של YubiKey הוא שמפתח אחד יכול לעשות כמעט הכל (YubiKey 5), שאפשר לצפות ממפתח אבטחת חומרה. אנו ממליצים לך לקחת את [חידון](https://www.yubico.com/quiz/) לפני הרכישה כדי לוודא שאתה עושה את הבחירה הנכונה.
    
    [:octicons-home-16: דף הבית](https://www.yubico.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.yubico.com/support/terms-conditions/privacy-notice){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://docs.yubico.com/){ .card-link title=תיעוד}

[טבלת ההשוואה](https://www.yubico.com/store/compare/) מציגה את התכונות ואת אופן ההשוואה של YubiKeys. אנו ממליצים בחום לבחור במפתחות מסדרת YubiKey 5.

ניתן לתכנת את [YubiKey מנהל](https://www.yubico.com/support/download/yubikey-manager/) או [YubiKey כלי התאמה אישית](https://www.yubico.com/support/download/yubikey-personalization-tools/). לניהול קודי TOTP, תוכל להשתמש ב - [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/). כל הקליינטים של Yubico הם בקוד פתוח.

עבור דגמים התומכים ב - HOTP וב - TOTP, ישנם 2 חריצים בממשק ה - OTP שניתן להשתמש בהם עבור HOTP ו -32 חריצים לאחסון סודות TOTP. סודות אלה מאוחסנים מוצפנים על המפתח ואף פעם לא לחשוף אותם למכשירים הם מחוברים. ברגע שזרע (סוד משותף) ניתן למאמת Yubico, הוא ייתן רק את הקודים בני שש הספרות, אך לעולם לא את הזרע. מודל אבטחה זה עוזר להגביל את מה שתוקף יכול לעשות אם הוא מסכן את אחד המכשירים המריצים את המאמת של Yubico והופך את ה - YubiKey לעמיד בפני תוקף פיזי.

!!! warning "אזהרה"
     הקושחה של YubiKey אינה קוד פתוח ואינה ניתנת לעדכון. אם אתה רוצה תכונות בגרסאות קושחה חדשות יותר, או אם ישנה פגיעות בגרסת הקושחה שבה אתה משתמש, תצטרך לרכוש מפתח חדש.

### Nitrokey / Librem Key

!!! recommendation

    ![Nitrokey](assets/img/multi-factor-authentication/nitrokey.jpg){ align=right }
    
    **ל - Nitrokey** יש מפתח אבטחה המסוגל ל- [FIDO2 ו- WebAuthn](basics/multi-factor-authentication.md#fido-fast-identity-online) בשם **Nitrokey FIDO2**. לתמיכה ב-PGP, עליך לרכוש אחד מהמפתחות האחרים שלהם כגון **Nitrokey Start**, **Nitrokey Pro 2** או **Nitrokey Storage 2**.
    
    [:octicons-home-16: דף הבית](https://www.nitrokey.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.nitrokey.com/data-privacy-policy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://docs.nitrokey.com/){ .card-link title=תיעוד}

[טבלת ההשוואה](https://www.nitrokey.com/#comparison) מציגה את התכונות ואת ההשוואה בין דגמי Nitrokey. ל**Nitrokey 3** המופיע ברשימה תהיה ערכת תכונות משולבת.

ניתן להגדיר דגמי Nitrokey באמצעות [Nitrokey app](https://www.nitrokey.com/download).

עבור הדגמים התומכים ב - HOTP וב - TOTP, ישנם 3 חריצים עבור HOTP ו -15 עבור TOTP. Nitrokeys מסוימים יכולים לשמש כמנהל סיסמאות. הם יכולים לאחסן 16 אישורים שונים ולהצפין אותם באמצעות אותה סיסמה כמו ממשק OpenPGP.

!!! warning "אזהרה"

    בעוד ש-Nitrokeys אינם משחררים את סודות ה-HOTP/TOTP למכשיר שאליו הם מחוברים, אחסון ה-HOTP וה-TOTP **לא** מוצפן ופגיע להתקפות פיזיות. אם אתם מחפשים לאחסן HOTP או TOTP סודות אלה, אנו ממליצים בחום להשתמש ב- Yubikey במקום זאת.

!!! warning "אזהרה"

    איפוס ממשק OpenPGP על Nitrokey גם יגרום למסד הנתונים סיסמה [inaccessible](https://docs.nitrokey.com/pro/factory-reset.html).

 Nitrokey Pro 2, Nitrokey Storage 2 וה-Nitrokey 3 הקרובים תומכים באימות שלמות המערכת עבור מחשבים ניידים עם הקושחה [Coreboot](https://www.coreboot.org/) + [Heads](https://osresearch.net/). [Librem Key](https://puri.sm/products/librem-key/) של Purism הוא NitroKey Pro 2 ממותג מחדש עם קושחה דומה וניתן להשתמש בו גם לאותן מטרות.

הקושחה של Nitrokey היא קוד פתוח, שלא כמו YubiKey. הקושחה בדגמי NitroKey המודרניים (למעט ה**NitroKey Pro 2**) ניתנת לעדכון.

!!! tip "טיפ"

    אפליקציית Nitrokey, על אף שהיא תואמת ל-Librem Keys, דורשת 'libnitrokey' גרסה 3.6 ומעלה כדי לזהות אותם. נכון לעכשיו, החבילה מיושנת ב-Windows, macOS ורוב ההפצות של לינוקס, כך שסביר להניח שתצטרך להרכיב את אפליקציית Nitrokey בעצמך כדי לגרום לה לעבוד עם מפתח Librem. על לינוקס, אתה יכול לקבל גרסה מעודכנת מ [Flathub](https://flathub.org/apps/details/com.nitrokey.nitrokey-app).

### Aegis Authenticator

**שימו לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף ל[קריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו מערכת ברורה של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! example "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים לכל קטע באתר שלנו, והדבר עשוי להשתנות. אם יש לך שאלות כלשהן לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו](https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו כשהצענו את ההמלצות שלנו אם הוא לא רשום כאן. ישנם גורמים רבים שנחשבים ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

#### דרישות מינימליות

- יש להשתמש במודולי אבטחה עמידים לחומרה באיכות גבוהה.
- חייב לתמוך במפרט FIDO2 העדכני ביותר.
- אסור לאפשר חילוץ מפתח פרטי.
- מכשירים שעולים מעל $35 חייבים לתמוך בטיפול ב-OpenPGP וב-S/MIME.

#### המקרה הטוב ביותר

הקריטריונים הטובים ביותר שלנו מייצגים את מה שהיינו רוצים לראות מהפרויקט המושלם בקטגוריה זו. ייתכן שההמלצות שלנו לא יכללו חלק מהפונקציונליות הזו או את כולה, אך אלו שכן כן עשויות לדרג גבוה יותר מאחרות בדף זה.

- אמור להיות זמין בפורמט USB-C.
- אמור להיות זמין עם NFC.
- אמור לתמוך באחסון סודי ב-TOTP.
- אמור לתמוך בעדכוני קושחה מאובטחים.

## אפליקציות מאמתות

יישומי אימות מיישמים תקן אבטחה שאומץ על ידי כוח המשימה להנדסת אינטרנט (IETF) הנקרא **סיסמאות חד פעמיות חד פעמיות מבוססות זמן**, או **TOTP**. זוהי שיטה שבה אתרי אינטרנט משתפים איתך סוד המשמש את אפליקציית האימות שלך כדי ליצור קוד בן שש ספרות (בדרך כלל) בהתבסס על השעה הנוכחית, שאותה אתה מזין בעת הכניסה לאתר כדי לבדוק. בדרך כלל קודים אלה מתחדשים כל 30 שניות, וברגע שנוצר קוד חדש הקוד הישן הופך לחסר תועלת. גם אם האקר מקבל קוד אחד בן שש ספרות, אין דרך להפוך את הקוד כדי לקבל את הסוד המקורי או אחרת להיות מסוגל לחזות מה כל קודים עתידיים עשויים להיות.

אנו ממליצים בחום להשתמש באפליקציות TOTP למכשירים ניידים במקום בחלופות לשולחן העבודה, מכיוון שלאנדרואיד ול-iOS יש אבטחה ובידוד אפליקציות טובים יותר מרוב מערכות ההפעלה השולחניות.

### Aegis Authenticator (אנדרואיד)

!!! recommendation

    ![Aegis לוגו](assets/img/multi-factor-authentication/aegis.png){ align=right }
    
    **Aegis Authenticator** היא אפליקציה חינמית, מאובטחת וקוד פתוח לניהול אסימוני האימות הדו-שלביים שלך עבור השירותים המקוונים שלך.
    
    [:octicons-home-16: דף הבית](https://getaegis.app){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getaegis.app/aegis/privacy.html){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://github.com/beemdevelopment/Aegis/wiki){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/beemdevelopment/Aegis){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://www.buymeacoffee.com/beemdevelopment){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis)
        - [:simple-github: GitHub](https://github.com/beemdevelopment/Aegis/releases)

### Raivo OTP (iOS)

!!! recommendation

    ![Raivo OTP לוגו](assets/img/multi-factor-authentication/raivo-otp.png){ align=right }
    
    **Raivo OTP** הוא קליינט סיסמאות מקורי, קל משקל ומאובטח מבוסס זמן (TOTP) & ומבוסס נגד (HOTP) עבור iOS. Raivo OTP מציע אופציונלי גיבוי iCloud & סנכרון. Raivo OTP זמין גם עבור macOS בצורה של יישום שורת מצב, אולם יישום Mac אינו פועל ללא תלות ביישום iOS.
    
    [:octicons-home-16: דף הבית](https://raivo-otp.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://raivo-otp.com/privacy-policy){ .card-link title="מדיניות פרטיות" }
    [:octicons-code-16:](https://github.com/raivo-otp/ios-application){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://raivo-otp.com/donate){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/raivo-otp/id1459042137)

### קריטריונים

**שימו לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף ל[קריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו מערכת ברורה של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! example "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים עבור כל חלק באתר שלנו, וזה עשוי להיות נתון לשינויים. אם יש לך שאלות כלשהן לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו](https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו כשהצענו את ההמלצות שלנו אם הוא לא רשום כאן. ישנם גורמים רבים שנחשבים ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

- חייבת להיות תוכנת קוד פתוח.
- אסור לדרוש חיבור לאינטרנט.
- אסור לסנכרן לשירות סנכרון/גיבוי בענן של צד שלישי.
    - **אופציונלי** תמיכה בסנכרון E2EE עם כלים מקוריים של מערכת ההפעלה מקובלת, למשל. סנכרון מוצפן באמצעות iCloud.

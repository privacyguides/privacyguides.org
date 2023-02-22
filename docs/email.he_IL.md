---
title: "שירותי דוא\"ל"
icon: material/email
---

אימייל הוא למעשה הכרחי לשימוש בשירות מקוון כלשהו, אך איננו ממליצים עליו לשיחות פנים אל פנים. במקום להשתמש בדואר אלקטרוני כדי ליצור קשר עם אנשים אחרים, שקול להשתמש באמצעי העברת הודעות מיידיות התומך בסודיות מקדימה.

[מסנג'רים (הודעות מיידיות) מומלצות](real-time-communication.md ""){.md-button}

לכל השאר, אנו ממליצים על מגוון ספקי דוא"ל המבוססים על מודלים עסקיים בני קיימא ועל תכונות אבטחה ופרטיות מובנות.

## ספקי דוא"ל מומלצים

ספקים אלה תומכים באופן מקורי בהצפנה/פענוח של OpenPGP, ומאפשרים הודעות דוא"ל E2EE שאינן תלויות בספק. לדוגמה, משתמש Proton Mail יכול לשלוח הודעת E2EE למשתמש Mailbox.org, או שאתה יכול לקבל הודעות מוצפנות OpenPGP משירותי אינטרנט התומכים בו.

!!! warning "אזהרה"

    בעת שימוש בטכנולוגיית E2EE כמו OpenPGP, לדוא"ל עדיין יהיו כמה מטא נתונים שאינם מוצפנים בכותרת הדוא"ל. קרא עוד על [email metadata](basic/email-security.md#email-metadata-overview).
    
    OpenPGP גם אינו תומך בסודיות קדימה, מה שאומר שאם המפתח הפרטי שלך או של הנמען ייגנב אי פעם, כל ההודעות הקודמות שהוצפנו באמצעותו ייחשפו. [כיצד אוכל להגן על המפתחות הפרטיים שלי?](basics/email-security.md#how-do-i-protect-my-private-keys)

### פרוטון מייל (ProtonMail)

!!! recommendation

    ![Proton Mail לוגו](assets/img/email/protonmail.svg){ align=right }
    
    **Proton Mail** הוא שירות דוא"ל עם דגש על פרטיות, הצפנה, אבטחה ושימוש בקלות. הם פועלים מאז **2013**. Proton AG ממוקמת בג'נבה, שווייץ. חשבונות מתחילים עם אחסון של 500 MB עם התוכנית החינמית שלהם.
    
    [:octicons-home-16: דף הבית](https://proton.me/mail){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion){ .card-link title="שירות בצל" }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://proton.me/support/mail){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/ProtonMail){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=ch.protonmail.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/apple-store/id979659905)
        - [:simple-github: GitHub](https://github.com/ProtonMail/proton-mail-android/releases)
        - [:simple-windows11: Windows](https://proton.me/mail/bridge#download)
        - [:simple-apple: macOS](https://proton.me/mail/bridge#download)
        - [:simple-linux: Linux](https://proton.me/mail/bridge#download)
        - [:octicons-browser-16: Web](https://mail.proton.me)

לחשבונות חינמיים יש מגבלות מסוימות, כגון חוסר יכולת לחפש בטקסט הגוף וחוסר גישה ל - [Proton Mail Bridge](https://proton.me/mail/bridge), הנדרש לשימוש ב - [לקוחות דוא"ל שולחניים מומלצים](email-clients.md) (למשל Thunderbird). חשבונות בתשלום כוללים תכונות כגון Proton Mail Bridge, אחסון נוסף ותמיכה בתחומים מותאמים אישית. [מכתב עדות](https://proton.me/blog/security-audit-all-proton-apps) סופק לאפליקציות של פרוטון מייל ב-9 בנובמבר 2021 על ידי [Securitum](https://research.securitum.com).

אם יש לך את הפרוטון ללא הגבלה, עסקים, או תוכנית חזון, אתה גם מקבל [SimpleLogin](#simplelogin) פרימיום בחינם.

לפרוטון מייל יש דוחות קריסה פנימיים שהם לא משתפים עם צדדים שלישיים. יש דוחות קריסה פנימיים **הם לא** משתפים עם צדדים שלישיים. ניתן להשבית אפשרות זו ב: **הגדרות** > **עבור אל הגדרות** > **חשבון** > **אבטחה ופרטיות** > **שלח דוחות קריסה**.

??? success "דומיינים וכינויים מותאמים אישית"

    מנויי ProtonMail בתשלום יכולים להשתמש בדומיין משלהם עם השירות או עם כתובת [catch-all](https://proton.me/support/catch-all). ProtonMail תומך גם[subaddressing](https://proton.me/support/creating-aliases), שהוא שימושי לאנשים שלא רוצים לרכוש דומיין.

??? success "שיטות תשלום פרטיות"

    Proton Mail [accepts](https://proton.me/support/payment-options) ביטקוין ומזומן בדואר בנוסף לכרטיסי אשראי/חיוב רגילים ותשלומי PayPal.

??? success "אבטחת חשבון"

    ProtonMail תומך ב - TOTP [אימות דו - שלבי]( https://proton.me/support/two-factor- authentication-2fa) בלבד. השימוש במפתח אבטחה U2F עדיין אינו נתמך. ProtonMail מתכננת ליישם את U2F עם השלמת הקוד [Single Sign On (SSO)]( https://reddit.com/comments/cheoy6/comment/feh2lw0/) שלהם.

??? success "אבטחת מידע"

    ל - Proton Mail יש [הצפנת אפס גישה](https://proton.me/blog/zero-access-encryption) ב - מנוחה עבור המיילים שלך ו - [calendars](https://proton.me/news/protoncalendar-security-model). נתונים המאובטחים באמצעות הצפנת אפס גישה נגישים רק לך.
    
    מידע מסוים המאוחסן ב-[Proton Contacts](https://proton.me/support/proton-contacts), כגון שמות תצוגה וכתובות דוא"ל, אינו מאובטח באמצעות הצפנת אפס גישה. שדות אנשי קשר התומכים בהצפנת אפס גישה, כגון מספרי טלפון, מסומנים בסמל מנעול.

??? success "הצפנת דואל"

    ל-Proton Mail יש [הצפנת OpenPGP משולבת](https://proton.me/support/how-to-use-pgp) בדואר האינטרנט שלהם. הודעות דוא"ל לחשבונות דואר אחרים של Proton מוצפנות באופן אוטומטי, והצפנה לכתובות דואר שאינן של Proton באמצעות מפתח OpenPGP יכולה להיות מופעלת בקלות בהגדרות החשבון שלך. הם גם מאפשרים לך [להצפין הודעות לכתובות דואר שאינן של פרוטון](הודעות דוא"ל מוגנות https://proton.me/support/password) ללא צורך שהם יירשמו לחשבון דואר פרוטון או ישתמשו בתוכנה כמו OpenPGP.
    
    Proton Mail תומך גם בגילוי מפתחות ציבוריים באמצעות HTTP מספריית [מפתח האינטרנט (WKD)](https://wiki.gnupg.org/WKD). הדבר מאפשר לאנשים שאינם משתמשים ב-Proton Mail למצוא את מפתחות OpenPGP של חשבונות Proton Mail בקלות, עבור E2EE חוצה ספקים.

??? warning "מורשת דיגיטלית"

    Proton Mail אינו מציע תכונה מורשת דיגיטלית.

??? info "סיום חשבון"

    אם יש לך חשבון בתשלום ו[החשבון לא שולם](https://proton.me/support/delinquency) לאחר 14 יום, לא תוכל לגשת לנתונים שלך. לאחר 30 יום, החשבון שלך יהפוך לבלתי פעיל ולא יקבל דואר נכנס. אתה תמשיך להיות מחויב במהלך תקופה זו.

??? info "פונקציונליות נוספת"

    Proton Mail מציע חשבון "ללא הגבלה" במחיר של €9.99/חודש, המאפשר גם גישה ל-Proton VPN בנוסף לאספקת מספר חשבונות, דומיינים, כינויים ושטח אחסון של 500GB.

### Mailbox.org

!!! recommendation

    ![Mailbox.org לוגו](assets/img/email/mailboxorg.svg){ align=right }
    
    **Mailbox.org** הוא שירות דוא"ל עם דגש על אבטחה, ללא פרסומות ומופעל באופן פרטי על ידי 100% אנרגיה ידידותית לסביבה. הם פועלים מאז 2014. Mailbox.org ממוקם בברלין, גרמניה. חשבונות מתחילים עם שטח אחסון של 2 GB, שניתן לשדרג לפי הצורך.
    
    [:octicons-home-16: דף הבית](https://mailbox.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://mailbox.org/en/data-protection-privacy-policy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://kb.mailbox.org/en/private){ .card-link title=תיעוד}
    
    ??? downloads "הורדות"
    
        - [:octicons-browser-16: Web](https://login.mailbox.org)

??? success "דומיינים וכינויים מותאמים אישית"

    Mailbox.org מאפשר לך להשתמש בתחום משלך, והם תומכים בכתובות [catch-all](https://kb.mailbox.org/display/MBOKBEN/Using+catch-all+alias+with+own+domain). Mailbox.org תומך גם ב-[subaddressing](https://kb.mailbox.org/display/BMBOKBEN/What+is+an+alias+and+how+do+I+use+it), וזה שימושי אם אינך רוצה לרכוש דומיין.

??? info "שיטות תשלום פרטיות"

    Mailbox.org אינה מקבלת ביטקוין או כל מטבע קריפטוגרפי אחר כתוצאה מכך שמעבד התשלומים שלהם BitPay משעה את פעילותו בגרמניה. עם זאת, הם מקבלים מזומן בדואר, תשלום במזומן לחשבון בנק, העברה בנקאית, כרטיס אשראי, PayPal וכמה מעבדים ספציפיים לגרמנית: paydirekt ו- Sofortüberweisung.

??? success "אבטחת חשבון"

    Mailbox.org תומך ב-[אימות דו-שלבי](https://kb.mailbox.org/display/MBOKBEN/How+to+use+two-factor+authentication+-+2FA) עבור דואר האינטרנט שלהם בלבד. אתה יכול להשתמש ב-TOTP או ב [Yubikey](https://en.wikipedia.org/wiki/YubiKey) דרך [Yubicloud](https://www.yubico.com/products/services-software/yubicloud). תקני אינטרנט כגון [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) עדיין אינם נתמכים.

??? info "אבטחת מידע"

    Mailbox.org מאפשר הצפנה של דואר נכנס באמצעות [תיבת הדואר המוצפנת](https://kb.mailbox.org/display/MBOKBEN/The+Encrypted+Mailbox) שלהם. הודעות חדשות שתקבל יוצפנו באופן מיידי באמצעות המפתח הציבורי שלך.
    
    עם זאת, [Open-Exchange](https://en.wikipedia.org/wiki/Open-Xchange), פלטפורמת התוכנה המשמשת Mailbox.org, [אינה תומכת](https://kb.mailbox.org/display/BMBOKBEN/Encryption+of+calendar+and+address+book) בהצפנה של פנקס הכתובות ולוח השנה שלך. [אפשרות עצמאית](calendar-contacts.md) עשויה להתאים יותר למידע זה.

??? success "הצפנת דואל"

    יש Mailbox.org [הצפנה משולבת](https://kb.mailbox.org/display/MBOKBEN/Send+encrypted+e-mails+with+Guard)בדואר האינטרנט שלהם, מה שמפשט את שליחת ההודעות לאנשים עם מפתחות OpenPGP ציבוריים. הם גם מאפשרים [לנמענים מרוחקים לפענח דוא"ל](https://kb.mailbox.org/display/MBOKBEN/My+recipient+does+not+use+PGP) בשרתים של Mailbox.org. תכונה זו שימושית כאשר לנמען המרוחק אין OpenPGP ואין באפשרותו לפענח עותק של הדואר האלקטרוני בתיבת הדואר שלו.
    
    Mailbox.org תומך גם בגילוי מפתחות ציבוריים באמצעות HTTP מספריית [מפתח האינטרנט (WKD)](https://wiki.gnupg.org/WKD). זה מאפשר לאנשים מחוץ Mailbox.org למצוא את מפתחות OpenPGP של חשבונות Mailbox.org בקלות, עבור E2EE חוצה ספקים.

??? success "מורשת דיגיטלית"

    Mailbox.org כולל תכונת מורשת דיגיטלית לכל התוכניות. אתה יכול לבחור אם אתה רוצה שכל הנתונים שלך יועברו ליורשים בתנאי שהם חלים ומספקים את הצוואה שלך. לחלופין, ניתן למנות אדם לפי שם וכתובת.

??? info "סיום חשבון"

    החשבון שלך יוגדר לחשבון משתמש מוגבל כאשר החוזה שלך יסתיים, לאחר [30 יום הוא יימחק באופן בלתי הפיך](https://kb.mailbox.org/en/private/payment-article/what-happens-at-the-end-of-my-contract).

??? info "פונקציונליות נוספת"

    אתה יכול לגשת לחשבון Mailbox.org שלך באמצעות IMAP / SMTP באמצעות[.onion service](https://kb.mailbox.org/display/MBOKBEN/The+Tor+exit+node+of+mailbox.org). עם זאת, לא ניתן לגשת לממשק דואר האינטרנט שלהם באמצעות שירות.onion שלהם ואתה עלול להיתקל בשגיאות אישור TLS.
    
    כל החשבונות מגיעים עם שטח אחסון מוגבל בענן ש[ניתן להצפין](https://kb.mailbox.org/display/MBOKBEN/Encrypt+files+on+your+Drive). Mailbox.org מציע גם את הכינוי [@secure.mailbox.org](https://kb.mailbox.org/display/MBOKBEN/Ensuring+E-Mails+are+Sent+Securely), אשר אוכף את הצפנת TLS על החיבור בין שרתי דואר, אחרת ההודעה לא תישלח כלל. Mailbox.org תומך גם ב-[Exchange ActiveSync](https://en.wikipedia.org/wiki/Exchange_ActiveSync) בנוסף לפרוטוקולי גישה סטנדרטיים כגון IMAP ו-POP3.

### StartMail

!!! recommendation

    ![StartMail לוגו](assets/img/email/startmail.svg#only-light){ align=right }
    ![StartMail לוגו](assets/img/email/startmail-dark.svg#only-dark){ align=right }
    
    ** StartMail ** הוא שירות דואר אלקטרוני עם דגש על אבטחה ופרטיות באמצעות הצפנת OpenPGP סטנדרטית. StartMail פועלת מאז 2014 וממוקמת בBoulevard 11, Zeist הולנד. החשבון מתחיל עם 10GB. הם מציעים תקופת ניסיון של 30 יום.
    
    [:octicons-home-16: Homepage](https://www.startmail.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startmail.com/en/privacy/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://support.startmail.com){ .card-link title=תיעוד}
    
    ??? downloads "הורדות"
    
        - [:octicons-browser-16: Web](https://mail.startmail.com/login)

??? success "דומיינים וכינויים מותאמים אישית"

    חשבונות אישיים יכולים להשתמש בכינויים [Custom or Quick](https://support.startmail.com/hc/en-us/articles/360007297457-Aliases). [דומיינים מותאמים אישית](https://support.startmail.com/hc/en-us/articles/4403911432209-Setup-a-custom-domain) זמינים גם כן.

??? warning "שיטות תשלום פרטיות"

    StartMail מקבלת ויזה, מאסטרקארד, אמריקן אקספרס ו - Paypal. ל - StartMail יש גם [אפשרויות תשלום] אחרות (https://support.startmail.com/hc/en-us/articles/360006620637-Payment-methods) כגון Bitcoin (כרגע רק עבור חשבונות אישיים) ו - SEPA Direct Debit עבור חשבונות ישנים יותר משנה.

??? success "אבטחת חשבון"

    StartMail תומך באימות דו-גורמי TOTP [עבור דואר אינטרנט בלבד](https://support.startmail.com/hc/en-us/articles/360006682158-Two-factor-authentication-2FA). הם אינם מאפשרים אימות מפתח אבטחה U2F.

??? info "אבטחת מידע"

    ל - StartMail יש [הצפנת אפס גישה במנוחה](https://www.startmail.com/en/whitepaper/#_Toc458527835), באמצעות מערכת "כספת המשתמש" שלהם. כאשר אתה נכנס, הכספת נפתחת, ולאחר מכן הדואר האלקטרוני מועבר לכספת מחוץ לתור, שם הוא מפוענח על-ידי המפתח הפרטי המתאים.
    
    StartMail תומך בייבוא [contacts](https://support.startmail.com/hc/en-us/articles/360006495557-Import-contacts) עם זאת, הם נגישים רק בדואר האינטרנט ולא באמצעות פרוטוקולים כגון [CalDAV](https://en.wikipedia.org/wiki/CalDAV). אנשי קשר גם אינם מאוחסנים באמצעות הצפנת אפס ידע, כך ש[אפשרות עצמאית](calendar-contacts.md) עשויה להיות מתאימה יותר.

??? success "הצפנת דואל"

    ל-StartMail יש [הצפנה משולבת](https://support.startmail.com/hc/en-us/sections/360001889078-Encryption) בדואר האינטרנט שלהם, מה שמפשט את שליחת הודעות מוצפנות עם מפתחות OpenPGP ציבוריים.

??? warning "מורשת דיגיטלית"

    StartMail אינו מציע תכונה דיגיטלית מדור קודם.

??? info "סגירת חשבון"

    עם פקיעת תוקף החשבון, StartMail ימחק את חשבונך לצמיתות לאחר [6 חודשים בשלושה שלבים](https://support.startmail.com/hc/en-us/articles/360006794398-Account-expiration).

??? info "פונקציונליות נוספת"

    StartMail מאפשר פרוקסי של תמונות בתוך הודעות דוא"ל. אם תאפשרו את טעינת התמונה המרוחקת, השולח לא יידע מהי כתובת ה-IP שלכם.

## עוד ספקים

ספקים אלה מאחסנים את המיילים שלך עם הצפנת אפס ידע, מה שהופך אותם לאפשרויות נהדרות לשמירה על אבטחת המיילים המאוחסנים שלך. עם זאת, הם אינם תומכים בתקני הצפנה הניתנים להפעלה הדדית עבור תקשורת E2EE בין ספקים.

### Tutanota

!!! recommendation

    ![Tutanota לוגו](assets/img/email/tutanota.svg){ align=right }
    
    **Tutanota** הוא שירות דוא"ל עם דגש על אבטחה ופרטיות באמצעות הצפנה. Tutanota פועלת מאז **2011** ובסיסה בהנובר, גרמניה. חשבונות מתחילים עם שטח אחסון של 1GB עם התוכנית החינמית שלהם.
    
    [:octicons-home-16: Homepage](https://tutanota.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tutanota.com/privacy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://tutanota.com/faq){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/tutao/tutanota){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://tutanota.com/community/){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.tutao.tutanota)
        - [:simple-appstore: App Store](https://apps.apple.com/app/tutanota/id922429609)
        - [:simple-github: GitHub](https://github.com/tutao/tutanota/releases)
        - [:simple-windows11: Windows](https://tutanota.com/#download)
        - [:simple-apple: macOS](https://tutanota.com/#download)
        - [:simple-linux: Linux](https://tutanota.com/#download)
        - [:octicons-browser-16: Web](https://mail.tutanota.com/)

Tutanota אינה משתמשת בפרוטוקול [IMAP](https://tutanota.com/faq/#imap) או בשימוש של [לקוחות דואר אלקטרוני של צד שלישי](email-clients.md), וגם לא תוכל להוסיף [חשבונות דואר אלקטרוני חיצוניים](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) לאפליקציית Tutanota. לא [ייבוא דוא"ל](https://github.com/tutao/tutanota/issues/630) או [תיקיות משנה](https://github.com/tutao/tutanota/issues/927) נתמכים כעת, אם כי זה [בשל להיות שונה](https://tutanota.com/blog/posts/kickoff-import). הודעות דוא"ל ניתן לייצא [בנפרד או על ידי בחירה בכמות גדולה](https://tutanota.com/howto#generalMail) לכל תיקייה, דבר שעלול להיות לא נוח אם יש לך תיקיות רבות.

??? success "דומיינים וכינויים מותאמים אישית"

    חשבונות Tutanota בתשלום יכולים להשתמש עד 5 [aliases](https://tutanota.com/faq#alias) ו [דומיינים מותאמים אישית](https://tutanota.com/faq#custom-domain). Tutanota אינה מאפשרת [כתובות משנה (בתוספת כתובות)](https://tutanota.com/faq#plus), אך באפשרותך להשתמש ב-[catch-all](https://tutanota.com/howto#settings-global) עם דומיין מותאם אישית.

??? warning "שיטות תשלום פרטיות"

    Tutanota מקבלת רק כרטיסי אשראי PayPal ישירות, אולם ניתן להשתמש בביטקוין ובמונרו לרכישת כרטיסי מתנה באמצעות [partnership](https://tutanota.com/faq/#cryptocurrency) שלהם עם Proxystore.

??? success "אבטחת חשבון"

    Tutanota תומך ב[אימות דו-גורמי](https://tutanota.com/faq#2fa) עם TOTP או U2F.

??? success "אבטחת מידע"

    ל-Tutanota יש [הצפנת אפס גישה במנוחה](https://tutanota.com/faq#what-encrypted) עבור הודעות הדוא"ל שלך, [אנשי קשר מפנקס הכתובות](https://tutanota.com/faq#encrypted-address-book), ו [calendars](https://tutanota.com/faq#calendar). משמעות הדבר היא שההודעות ונתונים אחרים המאוחסנים בחשבונך ניתנים לקריאה רק על ידך.

??? warning "הצפנת דואל"

    Tutanota [אינו משתמש ב- OpenPGP](https://www.tutanota.com/faq/#pgp). חשבונות Tutanota יכולים לקבל הודעות דוא"ל מוצפנות מחשבונות דוא"ל שאינם Tutanota רק כאשר הם נשלחים באמצעות [תיבת דואר זמנית של Tutanota](https://www.tutanota.com/howto/#encrypted-email-external).

??? warning "מורשת דיגיטלית"

    Tutanota לא מציעה פיצ'ר מורשת דיגיטלית.

??? info "סיום חשבון"

    Tutanota [מחק חשבונות לא פעילים בחינם](https://tutanota.com/faq#inactive-accounts) לאחר שישה חודשים. אם ברצונך לשלם, באפשרותך להשתמש שוב בחשבון חינמי שהושבת.

??? info "פונקציונליות נוספת"

    Tutanota מציעה את הגרסה העסקית של [Tutanota לארגונים ללא כוונת רווח](https://tutanota.com/blog/posts/secure-email-for-non-profit) בחינם או בהנחה כבדה.
    
    ל-Tutanota יש גם פיצ'ר עסקי שנקרא [חיבור מאובטח](https://tutanota.com/secure-connect/). זה מבטיח שיצירת קשר עם הלקוח לעסק משתמשת ב- E2EE. התכונה עולה 240 אירו לשנה.

## שירותי כינוי דוא"ל

שירות כינוי דוא"ל מאפשר לך ליצור בקלות כתובת דוא"ל חדשה עבור כל אתר שאתה נרשם אליו. כינויי הדואר האלקטרוני שאתה יוצר מועברים לאחר מכן לכתובת דוא"ל שתבחר, תוך הסתרת כתובת הדוא"ל "הראשית" שלך וגם זהות ספק הדוא"ל שלך. כינוי דוא"ל אמיתי טוב יותר מאשר כתובת פלוס הנפוצה בשימוש ונתמך על ידי ספקים רבים, מה שמאפשר לך ליצור כינויים כמו yourname+[anythinghere]@example.com, מכיוון שאתרים, מפרסמים ורשתות מעקב יכולים להסיר כל דבר לאחר סימן + כדי לדעת את כתובת הדוא"ל האמיתית שלך.

כינוי דוא"ל יכול לשמש כהגנה למקרה שספק הדוא"ל שלך יפסיק לפעול. בתרחיש זה, באפשרותך לנתב מחדש בקלות את הכינויים שלך לכתובת דואר אלקטרוני חדשה. עם זאת, אתה נותן אמון בשירות הכינוי כדי להמשיך לתפקד.

שימוש בשירות ייעודי של כינוי דואר אלקטרוני יש גם מספר יתרונות על פני כינוי 'לתפוס-הכל' על תחום מותאם אישית:

- ניתן להפעיל ולכבות כינויים באופן אישי בעת הצורך, וכך למנוע מאתרי אינטרנט לשלוח לך דוא"ל באופן אקראי.
- התגובות נשלחות מכתובת הכינוי, ומגינות על כתובת הדוא"ל האמיתית שלך.

תכונות חינמיות בולטות:

- כינויים הם קבועים וניתן להפעיל אותם שוב אם אתה צריך לקבל משהו כמו איפוס סיסמה.
- הודעות דוא"ל נשלחות לתיבת הדואר המהימנה שלך ולא מאוחסנות על ידי ספק הכינויים.
- שירותי דואר אלקטרוני זמניים בדרך כלל יש תיבות דואר ציבוריות אשר ניתן לגשת על ידי כל מי שמכיר את הכתובת, כינויים פרטיים שלך.

ההמלצות שלנו לכינוי דוא"ל הן ספקים המאפשרים לך ליצור כינויים בדומיינים שהם שולטים בהם, כמו גם דומיינ(ים) מותאמים אישית משלך תמורת תשלום שנתי צנוע. ניתן גם לארח אותם בעצמך אם אתה רוצה שליטה מקסימלית. עם זאת, שימוש בדומיין מותאם אישית יכול להיות בעל חסרונות הקשורים לפרטיות: אם אתה האדם היחיד המשתמש בדומיין המותאם אישית שלך, ניתן לעקוב בקלות אחר הפעולות שלך באתרי אינטרנט פשוט על ידי הסתכלות על שם הדומיין בכתובת הדוא"ל והתעלמות מכל מה שלפני ה-(@) סימן.

שימוש בשירות כינויים מחייב לתת אמון הן בספק הדואר האלקטרוני שלך והן בספק הכתובות שלך בהודעות הלא מוצפנות שלך. חלק מהספקים מפחיתים זאת מעט עם הצפנת PGP אוטומטית, שמפחיתה את מספר הצדדים שאתה צריך לסמוך עליהם משניים לאחד על ידי הצפנת הודעות דוא"ל נכנסות לפני שהן נמסרות לספק תיבת הדואר הסופי שלך.

### AnonAddy

!!! recommendation

    **AnonAddy** מאפשר לכם ליצור 20 כינויי דומיין בדומיין משותף בחינם, או כינויים "סטנדרטיים" ללא הגבלה שהם פחות אנונימיים.
    
    [:octicons-home-16: דף הבית](https://anonaddy.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://anonaddy.com/privacy/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://app.anonaddy.com/docs/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/anonaddy){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://anonaddy.com/donate/){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-android: Android](https://anonaddy.com/faq/#is-there-an-android-app)
        - [:material-apple-ios: iOS](https://anonaddy.com/faq/#is-there-an-ios-app)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-GB/firefox/addon/anonaddy/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/anonaddy-anonymous-email/iadbdpnoknmbdeolbapdackdcogdmjpe)

מספר הכינויים המשותפים (שמסתיימים בדומיין משותף כמו @anonaddy.me) שתוכלו ליצור מוגבל ל-20 בתוכנית החינמית של AnonAddy ול-50 בחבילה החינמית שלהם ב-12 דולר לשנה. אתה יכול ליצור כינויים סטנדרטיים בלתי מוגבלים (שמסתיימים בדומיין כמו @[username].anonaddy.com או דומיין מותאם אישית בתוכניות בתשלום), עם זאת, כאמור, זה יכול להזיק לפרטיות מכיוון שאנשים יכולים לקשור באופן טריוויאלי את הכינויים הסטנדרטיים שלך יחד על סמך שם הדומיין בלבד. כינויים משותפים ללא הגבלה זמינים תמורת $36 לשנה.

תכונות חינמיות בולטות:

- [x] 20 כינויים משותפים
- [x] כינויים סטנדרטיים ללא הגבלה
- [] אין תגובות יוצאות
- [x] 2 תיבות דואר של נמען
- [x] הצפנת PGP אוטומטית

### SimpleLogin

!!! recommendation

    ![Simplelogin לוגו](assets/img/email/simplelogin.svg){ align=right }
    
    **SimpleLogin** הוא שירות חינמי המספק כינויי דוא"ל על מגוון שמות דומיין משותפים, ובאופן אופציונלי מספק תכונות בתשלום כמו כינויים בלתי מוגבלים ודומיינים מותאמים אישית.
    
    [:octicons-home-16: דף הבית](https://simplelogin.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://simplelogin.io/privacy/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://simplelogin.io/docs/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/simple-login){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.simplelogin.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1494359858)
        - [:simple-github: GitHub](https://github.com/simple-login/Simple-Login-Android/releases)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/simplelogin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/dphilobhebphkdjbpfohgikllaljmgbn)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/simpleloginreceive-sen/diacfpipniklenphgljfkmhinphjlfff)
        - [:simple-safari: Safari](https://apps.apple.com/app/id1494051017)

SimpleLogin [נרכשה על ידי Proton AG](https://proton.me/news/proton-and-simplelogin-join-forces) נכון ל-8 באפריל 2022. אם אתה משתמש ב-Proton Mail עבור תיבת הדואר הראשית שלך, SimpleLogin היא בחירה מצוינת. מכיוון ששני המוצרים נמצאים כעת בבעלות אותה חברה, כעת עליך לסמוך רק על ישות אחת. אנו גם מצפים ש-SimpleLogin תשתלב בצורה הדוקה יותר עם ההיצע של Proton בעתיד. SimpleLogin ממשיכה לתמוך בהעברה לכל ספק דוא"ל שתבחרו. Securitum [ביקרה את SimpleLogin](https://simplelogin.io/blog/security-audit/) בתחילת 2022 וכל הבעיות [טופלו](https://simplelogin.io/audit2022/web.pdf).

תוכל לקשר את חשבון SimpleLogin שלך בהגדרות עם חשבון Proton שלך. אם יש לך את הפרוטון ללא הגבלה, עסקים, או תוכנית חזון, יהיה לך SimpleLogin פרימיום בחינם.

תכונות חינמיות בולטות:

- [x] 10 כינויים משותפים
- [x] תשובות ללא הגבלה
- [x] 1 תיבת דואר נמען

## אימייל לאירוח עצמי

מנהלי מערכת מתקדמים עשויים לשקול הגדרת שרת דואר אלקטרוני משלהם. שרתי דואר דורשים תשומת לב ותחזוקה שוטפת על מנת לשמור על דברים מאובטחים ועל משלוח דואר אמין.

### פתרונות תוכנה משולבים

!!! recommendation

    ![Mailcow לוגו](assets/img/email/mailcow.svg){ align=right }
    
    **Mailcow** הוא שרת דואר מתקדם יותר המושלם עבור אלה עם קצת יותר ניסיון בלינוקס. יש לו את כל מה שאתה צריך במיכל Docker: שרת דואר עם תמיכה ב- DKIM, ניטור אנטי וירוס וספאם, דואר אינטרנט ו- ActiveSync עם SOGo, וניהול מבוסס אינטרנט עם תמיכה ב- 2FA.
    
    [:octicons-home-16: Homepage](https://mailcow.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailcow.github.io/mailcow-dockerized-docs/){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/mailcow/mailcow-dockerized){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://www.servercow.de/mailcow?lang=en#sal){ .card-link title=לתרומה }

!!! recommendation

    ![Mail-in-a-Box לוגו](assets/img/email/mail-in-a-box.svg){ align=right }
    
    **Mail-in-a-Box** הוא סקריפט התקנה אוטומטי לפריסת שרת דואר באובונטו. מטרתו היא להקל על אנשים להגדיר שרת דואר משלהם.
    
    [:octicons-home-16: דף הבית](https://mailinabox.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailinabox.email/guide.html){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/mail-in-a-box/mailinabox){ .card-link title="קוד מקור" }

לגישה ידנית יותר בחרנו את שני המאמרים הבאים:

- [הגדרת שרת דואר עם OpenSMTPD, Dovecot ו - Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd/) (2019)
- [כיצד להפעיל שרת דואר משלך](https://www.c0ffee.net/blog/mail-server-guide/) (אוגוסט 2017)

## קריטריונים

**שים לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף [לקריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו סט ברור של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה לפני שתבחר ספק דוא"ל, ולערוך מחקר משלך כדי להבטיח שספק הדוא"ל שבחרת הוא הבחירה הנכונה עבורך.

### טכנולוגיה

אנו רואים בתכונות אלה חשיבות על מנת לספק שירות בטוח ומיטבי. אתה צריך לשקול אם לספק יש לו את התכונות שאתה צריך.

**מינימום כדי לעמוד בדרישות:**

- מצפין נתוני חשבון דוא"ל במנוחה עם הצפנת אפס גישה.
- יכולת ייצוא כמו [Mbox](https://en.wikipedia.org/wiki/Mbox) או .EML בודדים עם תקן [RFC5322](https://datatracker.ietf.org/doc/rfc5322/).
- מאפשר למשתמשים להשתמש ב[שם דומיין](https://en.wikipedia.org/wiki/Domain_name) משלהם. שמות דומיין מותאמים אישית חשובים למשתמשים מכיוון שהם מאפשרים להם לתחזק את הסוכנות שלהם מהשירות, אם היא תהפוך לגרועה או תירכש על ידי חברה אחרת שאינה מתעדפת פרטיות.
- פועל על תשתית בבעלות, כלומר לא בנוי על ספקי שירותי דואר אלקטרוני של צד שלישי.

**המקרה הטוב ביותר:**

- מצפין את כל נתוני החשבון (אנשי קשר, לוחות שנה וכו') במנוחה עם הצפנת אפס גישה.
- הצפנת דואר אינטרנט משולבת E2EE/PGP מסופקת לנוחיותך.
- תמיכה עבור [WKD](https://wiki.gnupg.org/WKD) כדי לאפשר גילוי משופר של מפתחות OpenPGP ציבוריים באמצעות HTTP. משתמשי GnuPG יכולים לקבל מפתח על ידי הקלדה `gpg --locate-key example_user@example.com`
- תמיכה בתיבת דואר זמנית למשתמשים חיצוניים. פעולה זו שימושית כאשר ברצונך לשלוח דוא"ל מוצפן, מבלי לשלוח עותק בפועל לנמען שלך. להודעות דוא"ל אלה יש בדרך כלל תוחלת חיים מוגבלת ולאחר מכן הן נמחקות באופן אוטומטי. הם גם לא דורשים מהנמען להגדיר קריפטוגרפיה כלשהי כמו OpenPGP.
- זמינות שירותי ספק הדואר האלקטרוני באמצעות [שירות בצל](https://en.wikipedia.org/wiki/.onion).
- [תמיכה בתת - כתובת](https://en.wikipedia.org/wiki/Email_address#Subaddressing).
- פונקציונליות של תפוס - הכל או כינוי עבור בעלי דומיינים משלהם.
- שימוש בפרוטוקולי גישה סטנדרטיים לדואר אלקטרוני כגון IMAP, SMTP או [JMAP](https://en.wikipedia.org/wiki/JSON_Meta_Application_Protocol). פרוטוקולי גישה סטנדרטיים מבטיחים שלקוחות יוכלו להוריד בקלות את כל הדואר האלקטרוני שלהם, אם ירצו לעבור לספק אחר.

### פרטיות

אנו מעדיפים שהספקים המומלצים שלנו יאספו כמה שפחות נתונים.

**מינימום כדי לעמוד בדרישות:**

- להגן על כתובת ה - IP של השולח. מסנן אותו כך שלא יוצג בשדה `השולח` header.
- אין צורך במידע המאפשר זיהוי אישי (PII) מלבד שם משתמש וסיסמה.
- מדיניות פרטיות העומדת בדרישות ה - GDPR
- לא מאוחסן בארה"ב עקב [ECPA](https://en.wikipedia.org/wiki/Electronic_Communications_Privacy_Act#Criticism) שעדיין [ לא עברה רפורמה](https://epic.org/ecpa/).

**המקרה הטוב ביותר:**

- מקבל ביטקוין, מזומן וצורות אחרות של מטבעות קריפטוגרפיים ו/או אפשרויות תשלום אנונימיות (כרטיסי מתנה וכו')

### אבטחה

שרתי דוא"ל מתמודדים עם הרבה מאוד נתונים רגישים. אנו מצפים שהספקים יאמצו שיטות עבודה מומלצות בתעשייה כדי להגן על חבריהם.

**מינימום כדי לעמוד בדרישות:**

- הגנה על דואר אינטרנט עם 2FA, כגון TOTP.
- הצפנת אפס גישה, מתבססת על הצפנה במנוחה. לספק אין את מפתחות הפענוח של הנתונים שברשותו. פעולה זו מונעת מעובד שסרח להדליף נתונים שיש לו גישה אליהם או מיריב מרחוק לשחרר נתונים שגנב על ידי השגת גישה בלתי מורשית לשרת.
- תמיכה ב [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions).
- אין שגיאות TLS או פגיעות בעת פרופיל על ידי כלים כגון [Hardenize](https://www.hardenize.com/), [testssl.sh](https://testssl.sh/), או [Qualys SSL Labs](https://www.ssllabs.com/ssltest); זה כולל שגיאות הקשורות לאישור ופרמטרים חלשים של DH, כגון אלה שהובילו ל - [Logjam](https://en.wikipedia.org/wiki/Logjam_(computer_security)).
- העדפת חבילת שרתים (אופציונלית ב-TLSv1.3) עבור חבילות צופן חזקות התומכות בסודיות קדימה ובהצפנה מאומתת.
- [MTA-STS](https://tools.ietf.org/html/rfc8461) בתוקף וגם מדיניות [TLS-RPT](https://tools.ietf.org/html/rfc8460).
- בתוקף [רשומות DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities).
- בתוקף [רשומות SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) ו - [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail).
- שיהיה לך מתאים [DMARC](https://en.wikipedia.org/wiki/DMARC) עבר ומדיניות או שימוש ב [ARC](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) לאימות. אם נעשה שימוש באימות DMARC, יש להגדיר את המדיניות ל- `דוחה` או `הסגר`.
- העדפת חבילת שרתים של TLS 1.2 ואילך ותוכנית עבור [הוצאה משימוש של TLSv1.0 ו- TLSv1.1](https://datatracker.ietf.org/doc/draft-ietf-tls-oldversions-deprecate/).
- [שליחת SMTPS](https://en.wikipedia.org/wiki/SMTPS), בהנחה שנעשה שימוש ב - SMTP.
- תקני אבטחת אתר אינטרנט כגון:
    - [אבטחת תעבורה קפדנית של HTTP](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
    - שלמות [תת - מקור](https://en.wikipedia.org/wiki/Subresource_Integrity) אם מעמיסים דברים מדומיינים חיצוניים.
- חייב לתמוך בהצגה של [כותרות הודעות](https://en.wikipedia.org/wiki/Email#Message_header), מכיוון שזוהי תכונה משפטית חיונית כדי לקבוע אם הודעת דואר אלקטרוני היא ניסיון דיוג.

**המקרה הטוב ביותר:**

- תמיכה באימות חומרה, כלומר. U2F ו - [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn). U2F ו - WebAuthn מאובטחים יותר כאשר הם משתמשים במפתח פרטי המאוחסן בהתקן חומרה בצד הלקוח כדי לאמת אנשים, בניגוד לסוד משותף המאוחסן בשרת האינטרנט ובצד הלקוח בעת שימוש ב - TOTP. יתר על כן, U2F ו- WebAuthn עמידים יותר בפני דיוג מכיוון שתגובת האימות שלהם מבוססת על האימות [שם הדומיין](https://en.wikipedia.org/wiki/Domain_name).
- [אישור רשות ההסמכה של DNS (CAA) רשומת משאבים](https://tools.ietf.org/html/rfc6844) בנוסף לתמיכת DANE.
- יישום של [Authenticated Received Chain (ARC)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain), זה שימושי עבור אנשים שמפרסמים לרשימות דיוור [RFC8617](https://tools.ietf.org/html/rfc8617).
- תוכניות לחיפוש באגים ו/או תהליך גילוי - פגיעות מתואם.
- תקני אבטחת אתר אינטרנט כגון:
    - [מדיניות אבטחת תוכן (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy)
    - [‎ Expect - CT ‎](https://datatracker.ietf.org/doc/draft-ietf-httpbis-expect-ct)

### אמון

לא הייתם סומכים על הכספים שלכם למישהו שיש זהות מזויפת, אז למה לסמוך עליו עם הדוא"ל שלכם? אנו דורשים מהספקים המומלצים שלנו להיות פומביים לגבי הבעלות או המנהיגות שלהם. כמו כן, היינו רוצים לראות דיווחי שקיפות תכופים, במיוחד בכל הנוגע לאופן הטיפול בבקשות ממשלתיות.

**מינימום כדי לעמוד בדרישות:**

- מנהיגות ציבורית או בעלות.

**המקרה הטוב ביותר:**

- מנהיגות מול הציבור.
- דוחות שקיפות תכופים.

### שיווק

עם ספקי הדוא"ל אנו ממליצים לראות שיווק אחראי.

**מינימום כדי לעמוד בדרישות:**

- יש לבצע ניתוח של אחסון עצמי (ללא Google Analytics, Adobe Analytics וכו '). האתר של הספק חייב גם לציית ל [DNT (לא לעקוב)](https://en.wikipedia.org/wiki/Do_Not_Track) למי שרוצה לבטל את הסכמתו.

אסור שיהיה שיווק שהוא חסר אחריות:

- טענות של "הצפנה בלתי שבירה " יש להשתמש בהצפנה מתוך כוונה שהיא לא תהיה סודית בעתיד כאשר הטכנולוגיה קיימת כדי לפצח אותה.
- מתן ערבויות להגנה על אנונימיות ב-100%. כשמישהו טוען שמשהו הוא 100% זה אומר שאין ודאות לכישלון. אנחנו יודעים שאנשים יכולים בקלות להפוך את עצמם לאיאנונימיים במספר דרכים, למשל.:

- שימוש חוזר במידע אישי, למשל (חשבונות דוא"ל, שמות בדויים ייחודיים וכו ') שאליו ניגשו ללא תוכנה אנונימיות (Tor, VPN וכו ')
- [טביעת אצבע של דפדפן](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)

**המקרה הטוב ביותר:**

- ברור וקל לקריאה. זה כולל דברים כמו, הגדרת 2FA, קליינט דוא"ל, OpenPGP וכו '.

### פונקציונליות נוספת

אמנם לא דרישות קפדניות, יש כמה גורמי נוחות או פרטיות אחרים שבדקנו בעת קביעת אילו ספקים להמליץ.

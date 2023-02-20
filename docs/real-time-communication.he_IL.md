---
title: "תקשורת בזמן אמת"
icon: material/chat-processing
---

אלה ההמלצות שלנו לתקשורת מוצפנת בזמן אמת.

[סוגי רשתות תקשורת :material-arrow-right-drop-circle:](./advanced/communication-network-types.md)

## מסנגר'ים חוצי פלטפורמות

מסנג'רים אלה נהדרים לאבטחת התקשורת הרגישה שלך.

### Signal

Signal תומכת [בקבוצות פרטיות](https://signal.org/blog/signal-private-group-system/). המלצה

    ![Signal לוגו](assets/img/messengers/signal.svg){ align=right }
    
    **סיגנל** היא אפליקציה לנייד שפותחה על ידי סיגנל מסנג'ר LLC. האפליקציה מספקת הודעות מיידיות, כמו גם שיחות קוליות ושיחות וידאו.
    
    כל התקשורת היא E2EE. רשימות אנשי קשר מוצפנות באמצעות קוד ה - PIN שלך ולשרת אין גישה אליהן. גם פרופילים אישיים מוצפנים ומשותפים רק עם אנשי קשר שאיתם אתה משוחח בצ'אט.
    
    [:octicons-home-16: Homepage](https://signal.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://signal.org/legal/#privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://support.signal.org/hc/en-us){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/signalapp){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://signal.org/donate/){ .card-link title=Contribute }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id874139669)
        - [:simple-android: Android](https://signal.org/android/apk/)
        - [:simple-windows11: Windows](https://signal.org/download/windows)
        - [:simple-apple: macOS](https://signal.org/download/macos)
        - [:simple-linux: Linux](https://signal.org/download/linux)

הפרוטוקול היה מבוקר [באופן עצמאי](https://eprint.iacr.org/2016/1013.pdf) בשנת 2016. ניתן למצוא את המפרט של פרוטוקול סיגנל בתיעוד [](https://signal.org/docs/)שלהם. לסיגנל יש מטא נתונים מינימליים כאשר מופעל [השולח האטום](https://signal.org/blog/sealed-sender/). כתובת השולח מוצפנת יחד עם גוף ההודעה, ורק כתובת הנמען גלויה לשרת. 'שולח אטום' זמין רק עבור אנשים ברשימת אנשי הקשר שלך, אך ניתן להפוך אותו לזמין עבור כל הנמענים עם סיכון מוגבר לקבלת דואר זבל. סיגנל דורש את מספר הטלפון שלך כמזהה אישי.

הפרוטוקול היה מבוקר [באופן עצמאי](https://eprint.iacr.org/2016/1013.pdf) בשנת 2016. ניתן למצוא את המפרט של פרוטוקול סיגנל בתיעוד [](https://signal.org/docs/)שלהם.

יש לנו כמה טיפים נוספים להגדרה ולהקשחה של התקנת האות שלך:

[תצורת סיגנל והקשחה :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/07/07/signal-configuration-and-hardening/)

### SimpleX Chat

!!! recommendation

    ![Element logo ]( assets/img/Messenger/element.svg){ align=right }
    
    **אלמנט ** הוא קליינט ההפניה עבור פרוטוקול [Matrix](https://matrix.org/docs/guides/introduction), [תקן פתוח ]( https://matrix.org/docs/spec) לתקשורת מבוזרת מאובטחת בזמן אמת. הודעות וקבצים המשותפים בחדרים פרטיים (אלה הדורשים הזמנה) הם כברירת מחדל E2EE כמו אחד על אחד הקלטה ושיחות וידאו.
    
    [:octicons-home-16: Homepage](https://element.io/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://element.io/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://element.io/help){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/vector-im){ .card-link title="Source Code" }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=im.vector.app)
        - [:simple-appstore: App Store](https://apps.apple.com/app/vector/id1083446067)
        - [:simple-github: GitHub](https://github.com/vector-im/element-android/releases)
        - [:simple-windows11: Windows](https://element.io/get-started)
        - [:simple-apple: macOS](https://element.io/get-started)
        - [:simple-linux: Linux](https://element.io/get-started)
        - [:octicons-globe-16: Web](https://app.element.io)

SimpleX צ'אט [נבדק על ידי](https://simplex.chat/blog/20221108-simplex-chat-v4.2-security-audit-new-website.html) Trail of Bits באוקטובר 2022.

נכון לעכשיו SimpleX צ'אט מספק רק לקוח עבור אנדרואיד ו- iOS. פונקציונליות צ'אט קבוצתי בסיסית, הודעות ישירות, עריכת הודעות וסימון נתמכים. שיחות שמע ווידאו E2EE נתמכות גם כן.

ניתן לייצא את הנתונים שלך ולייבא אותם למכשיר אחר, מכיוון שאין שרתים מרכזיים שבהם הם מגובים.

### Briar

!!! recommendation

    ![Briar לוגו](assets/img/messengers/briar.svg){ align=right }
    
    **Briar** הוא מסנג'ר מיידי מוצפן ש[connects](https://briarproject.org/how-it-works/) ללקוחות אחרים המשתמשים ברשת Tor. Briar יכול גם להתחבר באמצעות Wi-Fi או Bluetooth כאשר הוא נמצא בקרבת מקום. מצב הרשת המקומי של Briar יכול להיות שימושי כאשר זמינות האינטרנט מהווה בעיה.
    
    [:octicons-home-16: דף הבית](https://briarproject.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://briarproject.org/privacy-policy/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://code.briarproject.org/briar/briar/-/wikis/home){ .card-link title=תיעוד}
    [:octicons-code-16:](https://code.briarproject.org/briar/briar){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://briarproject.org/){ .card-link title="אפשרויות התרומה מפורטות בתחתית דף הבית" }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.briarproject.briar.android)
        - [:simple-windows11: Windows](https://briarproject.org/download-briar-desktop/)
        - [:simple-linux: Linux](https://briarproject.org/download-briar-desktop/)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.briarproject.Briar)

כדי להוסיף איש קשר ב Briar, שניכם חייבים להוסיף אחד את השני קודם. באפשרותך להחליף `קישורים ` או לסרוק את קוד ה - QR של איש הקשר אם הוא נמצא בקרבת מקום.

תוכנת הקליינט נבדקה באופן עצמאי [](https://briarproject.org/news/2017-beta-released-security-audit/), ופרוטוקול הניתוב האנונימי משתמש ברשת Tor שנבדקה אף היא.

ל Briar יש מפרט ש[פורסם במלואו](https://code.briarproject.org/briar/briar-spec).

Briar תומך בסודיות קדימה מושלמת על ידי שימוש ב-[Handshake](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BHP.md) ו [Transport](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BTP.md) פרוטוקול.

## אפשרויות נוספות

!!! אזהרה

    לשליחים אלה אין סודיות מושלמת [Forward Secrecy]( https://en.wikipedia.org/wiki/Forward_secrecy)( PFS), ובעוד שהם מקיימים מקרי שימוש מסוימים שההמלצות הקודמות שלנו אינן יכולות, אנו לא ממליצים עליהם לתקשורת ארוכת טווח או רגישה. כל פשרה מרכזית בין מקבלי ההודעה תשפיע על הסודיות של **כל** התקשורת בעבר.

### Element

אוקסן ביקשה ביקורת עצמאית עבור סשן במרץ 2020. המלצה

    ![Element לוגו](assets/img/messengers/element.svg){ align=right }
    
    **Element** הוא קליינט הייחוס עבור פרוטוקול [Matrix](https://matrix.org/docs/guides/introduction), [תקן פתוח](https://matrix.org/docs/spec) לתקשורת מבוזרת מאובטחת בזמן אמת.
    
    הודעות וקבצים המשותפים בחדרים פרטיים (אלה הדורשים הזמנה) הם כברירת מחדל E2EE וכך גם שיחות קוליות ושיחות וידאו אחד לאחד.
    
    [:octicons-home-16: דף הבית](https://element.io/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://element.io/privacy){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://element.io/help){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/vector-im){ .card-link title="קוד מקור" }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=im.vector.app)
        - [:simple-appstore: App Store](https://apps.apple.com/app/vector/id1083446067)
        - [:simple-github: GitHub](https://github.com/vector-im/element-android/releases)
        - [:simple-windows11: Windows](https://element.io/get-started)
        - [:simple-apple: macOS](https://element.io/get-started)
        - [:simple-linux: Linux](https://element.io/get-started)
        - [:octicons-globe-16: Web](https://app.element.io)

תמונות פרופיל, תגובות וכינויים אינם מוצפנים.

שיחות קוליות ושיחות וידאו קבוצתיות [אינן](https://github.com/vector-im/element-web/issues/12878) E2EE, ומשתמשות ב- Jitsi, אך זה צפוי להשתנות עם[ איתות VoIP קבוצתי מקורי](https://github.com/matrix-org/matrix-doc/pull/3401). שיחות קבוצתיות כוללות [שיחות ללא אימות](https://github.com/vector-im/element-web/issues/13074) כרגע, כלומר, כל משתתפים יכולים גם להצטרף לשיחות. אנו ממליצים שלא להשתמש בתכונה זו לפגישות פרטיות.

פרוטוקול מטריקס עצמו [תומך תיאורטית ב- ](https://gitlab.matrix.org/matrix-org/olm/blob/master/docs/megolm.md#partial-forward-secrecy)PFS, אולם זה[ אינו נתמך כרגע ב- ](https://github.com/vector-im/element-web/issues/7101)Element מכיוון שהוא שובר כמה היבטים של חוויית המשתמש כגון גיבויי מפתח והיסטוריית הודעות משותפת.

הפרוטוקול היה מבוקר [באופן עצמאי](https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last) בשנת 2016. את המפרט לפרוטוקול מטריקס ניתן למצוא [בתיעוד שלהם](https://spec.matrix.org/latest/). ה - [Olm](https://matrix.org/docs/projects/other/olm) מחגר קריפטוגרפי המשמש את מטריקס הוא יישום של סיגנל [Double Ratchet של Signal](https://signal.org/docs/specifications/doubleratchet/).

### Session

!!! recommendation

    ![Session לוגו](assets/img/messengers/session.svg){ align=right }
    
    **Session** הוא מסנג'ר מבוזר עם דגש על תקשורת פרטית, מאובטחת ואנונימית. סשן מציעה תמיכה בהודעות ישירות, בצ'אטים קבוצתיים ובשיחות קוליות.
    
    Session משתמשת ברשת הצמתים המבוזרת [Oxen Service Node Network](https://oxen.io/‎) כדי לאחסן הודעות ולנתב אותן. כל הודעה מוצפנת מנותבת דרך שלושה צמתים ברשת צומת השירות של אוקסן, מה שהופך את זה למעשה לבלתי אפשרי עבור הצמתים לקבץ מידע משמעותי על המשתמשים ברשת.
    
    [:octicons-home-16: דף הבית](https://getsession.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getsession.org/privacy-policy){ .card-link title="מדיניות-פרטיות" }
    [:octicons-info-16:](https://getsession.org/faq){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/oxen-io){ .card-link title="קוד מקור }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=network.loki.messenger)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1470168868)
        - [:simple-github: GitHub](https://github.com/oxen-io/session-android/releases)
        - [:simple-windows11: Windows](https://getsession.org/download)
        - [:simple-apple: macOS](https://getsession.org/download)
        - [:simple-linux: Linux](https://getsession.org/download)

Session מאפשר E2EE בשיחות אחד על אחד או בקבוצות סגורות המאפשרות עד 100 חברים. לקבוצות פתוחות אין הגבלה על מספר החברים, אך הן פתוחות על פי עיצוב.

Session [אינה](https://getsession.org/blog/session-protocol-technical-information) תומכת ב- PFS, כלומר כאשר מערכת הצפנה משנה באופן אוטומטי ותכוף את המפתחות שבהם היא משתמשת כדי להצפין ולפענח מידע, כך שאם המפתח האחרון נחשף לסכנה הוא חושף חלק קטן יותר של מידע רגיש.

Oxen ביקשה ביקורת עצמאית עבור Session במרץ 2020. הביקורת הגיעה[ למסקנה](https://getsession.org/session-code-audit) באפריל 2021 כי "רמת האבטחה הכוללת של יישום זה טובה והופכת אותו לשימושי עבור אנשים המודאגים לפרטיות"

לSession יש [נייר לבן](https://arxiv.org/pdf/2002.04609.pdf) המתאר את הטכניקות של האפליקציה והפרוטוקול.

## קריטריונים

**שים לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף ל [הקריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו סט ברור של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! דוגמה: "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים לכל קטע באתר שלנו, והדבר עשוי להשתנות. אם יש לך שאלות לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו]( https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו בעת ביצוע ההמלצות שלנו אם זה לא מופיע כאן. ישנם גורמים רבים שנשקלים ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

- חייבים להיות לקוחות קוד פתוח.
- חייב להשתמש ב- E2EE עבור הודעות פרטיות כברירת מחדל.
- חייב לתמוך ב- E2EE עבור כל ההודעות.
- חייב להיות נבדק באופן עצמאי.

### המקרה הטוב ביותר

הקריטריונים שלנו במקרה הטוב ביותר מייצגים את מה שהיינו רוצים לראות מהפרויקט המושלם בקטגוריה זו. ההמלצות שלנו לא יכולות לכלול את כל הפונקציונליות הזו או את כולה, אך אלה שכן דורגו גבוה יותר מאחרים בדף זה.

- צריך להיות סודיות קדימה מושלמת.
- צריכים להיות שרתי קוד פתוח.
- צריך להיות מבוזר, כלומר מאוחד או P2P.
- אמור להשתמש ב- E2EE עבור כל ההודעות כברירת מחדל.
- צריך לתמוך בלינוקס, macOS, ווינדוס, אנדרואיד ו-iOS.

---
title: "תקשורת בזמן אמת"
icon: material/chat-processing
---

אלה ההמלצות שלנו לתקשורת מוצפנת בזמן אמת.

[סוגי רשתות תקשורת :material-arrow-right-drop-circle:](./advanced/communication-network-types.md)

## מסנגר'ים חוצי פלטפורמות

!!! המלצה

    ![Signal logo ](assets/img/messengers/signal.svg){ align=right }
    
    **Signal** היא אפליקציה לנייד שפותחה על ידי Signal Messenger LLC. האפליקציה מספקת מסרים מיידיים, גם שיחות קוליות ווידאו.
    
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

Signal תומכת [בקבוצות פרטיות](https://signal.org/blog/signal-private-group-system/). לשרת אין תיעוד של חברי הקבוצה שלך, כותרות הקבוצה, אווטארים של הקבוצה או תכונות הקבוצה. לסיגנל יש מטא נתונים מינימליים כאשר מופעל [השולח האטום](https://signal.org/blog/sealed-sender/). כתובת השולח מוצפנת יחד עם גוף ההודעה, ורק כתובת הנמען גלויה לשרת. 'שולח חתום' זמין רק עבור אנשים ברשימת אנשי הקשר שלך, אך ניתן להפעיל אותו עבור כל הנמענים עם סיכון מוגבר לקבל דואר זבל. סיגנל דורש את מספר הטלפון שלך כמזהה אישי.

הפרוטוקול היה מבוקר [באופן עצמאי](https://eprint.iacr.org/2016/1013.pdf) בשנת 2016. ניתן למצוא את המפרט של פרוטוקול סיגנל בתיעוד [](https://signal.org/docs/)שלהם.

יש לנו כמה טיפים נוספים להגדרה והקשחה של התקנת הסיגנל שלך:

[תצורת סיגנל והקשחה :material-arrow-right-drop-circle:](https://blog.privacyguides.org/2022/07/07/signal-configuration-and-hardening/)

## מסנג'רים אחרים

!!! המלצה

    ![Element logo ](assets/img/messengers/element.svg){ align=right }
    
    **אלמנט ** הוא קליינט ההפניה עבור פרוטוקול [Matrix](https://matrix.org/docs/guides/introduction), [תקן פתוח ]( https://matrix.org/docs/spec) לתקשורת מבוזרת מאובטחת בזמן אמת.
    
    הודעות וקבצים המשותפים בחדרים פרטיים (אלה הדורשים הזמנה) הם כברירת מחדל E2EE כמו אחד על אחד הקלטה ושיחות וידאו.
    
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

תמונות פרופיל, תגובות וכינויים אינם מוצפנים.

שיחות קוליות ושיחות וידאו קבוצתיות הן [לא](https://github.com/vector-im/element-web/issues/12878) E2EE, ומשתמשות ב - Jitsi, אבל זה צפוי להשתנות עם [אותות VoIP של קבוצה מקומית](https://github.com/matrix-org/matrix-doc/pull/3401). שיחות קבוצתיות כוללות [שיחות ללא אימות](https://github.com/vector-im/element-web/issues/13074) כרגע, כלומר, כל משתתפים יכולים גם להצטרף לשיחות. אנו ממליצים שלא להשתמש בתכונה זו לפגישות פרטיות.

הפרוטוקול היה מבוקר [באופן עצמאי](https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last) בשנת 2016. את המפרט של פרוטוקול Matrix ניתן למצוא ב [](https://spec.matrix.org/latest/)שלהם. [המחגר ](https://matrix.org/docs/projects/other/olm)הקריפטוגרפי המשמש את מטריקס הוא יישום של [אלגוריתם ה-Double ](https://signal.org/docs/specifications/doubleratchet/)Ratchet של סיגנל.

## SimpleX Chat

!!! המלצה

    ![Simplex logo ](assets/img/messengers/simplex.svg){ align=right }
    
    ** SimpleX ** צ'אט הוא מסנג'ר מיידי מבוזר ואינו תלוי במזהים ייחודיים כגון מספרי טלפון או שמות משתמשים. משתמשים של SimpleX צ'אט יכולים לסרוק קוד QR או ללחוץ על קישור הזמנה כדי להשתתף בשיחות קבוצתיות.
    
    [:octicons-home-16: Homepage](https://simplex.chat){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://github.com/simplex-chat/simplex-chat/blob/stable/PRIVACY.md){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/simplex-chat/simplex-chat/tree/stable/docs){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/simplex-chat){ .card-link title="Source Code" }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=chat.simplex.app)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/simplex-chat/id1605771084)
        - [:simple-github: GitHub](https://github.com/simplex-chat/simplex-chat/releases)

SimpleX צ'אט [נבדק על ידי](https://simplex.chat/blog/20221108-simplex-chat-v4.2-security-audit-new-website.html) Trail of Bits באוקטובר 2022.

כיום SimpleX צ'אט מספק קליינט רק ל - אנדרואיד ול - iOS. תמיכה בפונקציונליות בסיסית של צ'אט קבוצתי, בהודעות ישירות, בעריכת הודעות וב - Markdown. גם שיחות אודיו ווידאו של E2EE נתמכות.

ניתן לייצא ולייבא את הנתונים שלך למכשיר אחר, מכיוון שאין שרתים מרכזיים שבהם הנתונים מגובים.

## Session

!!! המלצה

    ![Session logo ](assets/img/messengers/session.svg){ align=right }
    
    **סשן ** הוא מסנג'ר מבוזר המתמקד בתקשורת פרטית, מאובטחת ואנונימית. סשן מציעה תמיכה בהודעות ישירות, בצ'אטים קבוצתיים ובשיחות קוליות.
    
    סשן משתמשת ברשת המבוזרת [Oxen Service Node Network]( https://oxen.io/) כדי לאחסן ולנתב הודעות. כל הודעה מוצפנת מנותבת דרך שלושה צמתים ברשת צומת השירות של אוקסן, מה שהופך את זה למעשה לבלתי אפשרי עבור הצמתים לקבץ מידע משמעותי על המשתמשים ברשת.
    
    [:octicons-home-16: Homepage](https://getsession.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://getsession.org/privacy-policy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://getsession.org/faq){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/oxen-io){ .card-link title="Source Code" }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=network.loki.messenger)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1470168868)
        - [:simple-github: GitHub](https://github.com/oxen-io/session-android/releases)
        - [:simple-windows11: Windows](https://getsession.org/download)
        - [:simple-apple: macOS](https://getsession.org/download)
        - [:simple-linux: Linux](https://getsession.org/download)

Session מאפשר E2EE בשיחות אחד על אחד או בקבוצות סגורות המאפשרות עד 100 חברים. לקבוצות פתוחות אין הגבלה על מספר החברים, אך הן פתוחות על פי עיצוב.

סשן [אינה](https://getsession.org/blog/session-protocol-technical-information) תומכת בסודיות קדימה מושלמת, כלומר כאשר מערכת הצפנה משנה באופן אוטומטי ותכוף את המפתחות שבהם היא משתמשת כדי להצפין ולפענח מידע, כך שאם המפתח האחרון נחשף לסכנה הוא חושף חלק קטן יותר של מידע רגיש.

אוקסן ביקשה ביקורת עצמאית עבור סשן במרץ 2020. הביקורת הגיעה[ למסקנה](https://getsession.org/session-code-audit) באפריל 2021 כי "רמת האבטחה הכוללת של יישום זה טובה והופכת אותו לשימושי עבור אנשים המודאגים לפרטיות"

לסשן יש [נייר לבן](https://arxiv.org/pdf/2002.04609.pdf) המתאר את הטכניקות של האפליקציה והפרוטוקול.

## Briar

!!! המלצה

    ![Briar logo](assets/img/messengers/briar.svg){ align=right }
    
    **בריאר ** הוא מסנג'ר מיידי מוצפן שמספק [connects](https://briarproject.org/how-it-works/) למסנג'רים אחרים באמצעות רשת Tor. ברייר יכול להתחבר גם דרך Wi - Fi או בלוטוס כאשר הוא נמצא בקרבת מקום. מצב הרשת המקומי של בריאר יכול להיות שימושי כאשר זמינות האינטרנט היא בעיה.
    
    [:octicons-home-16: Homepage](https://briarproject.org/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://briarproject.org/privacy-policy/){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://code.briarproject.org/briar/briar/-/wikis/home){ .card-link title=תיעוד}
    [:octicons-code-16:](https://code.briarproject.org/briar/briar){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://briarproject.org/){ .card-link title="אפשרויות התרומה מפורטות בתחתית דף הבית" }
    
    ??? הורדות
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=org.briarproject.briar.android)
        - [:simple-flathub: Flathub](https://flathub.org/apps/details/org.briarproject.Briar)

כדי להוסיף איש קשר ב - בריאר, שניכם חייבים להוסיף אחד את השני קודם. באפשרותך להחליף `קישורים ` או לסרוק את קוד ה - QR של איש הקשר אם הוא נמצא בקרבת מקום.

תוכנת הקליינט נבדקה באופן עצמאי [](https://briarproject.org/news/2017-beta-released-security-audit/), ופרוטוקול הניתוב האנונימי משתמש ברשת Tor שנבדקה אף היא.

ל Briar יש מפרט ש[פורסם במלואו](https://code.briarproject.org/briar/briar-spec).

Briar תומך בסודיות קדימה מושלמת על ידי שימוש ב-[Handshake](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BHP.md) ו [Transport](https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BTP.md) פרוטוקול.

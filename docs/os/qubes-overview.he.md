---
title: "סקירה כללית של Qubes"
icon: simple/qubesos
---

[**Qubes OS**](../desktop.md#qubes-os) היא מערכת הפעלה המשתמשת ב[Xen](https://en.wikipedia.org/wiki/Xen) לספק אבטחה חזקה למחשוב שולחני באמצעות מכונות וירטואליות מבודדות. כל VM נקרא *קובייה* ואתה יכול להקצות כל קובייה רמה של אמון על פי מטרתו. מכיוון שמערכת ההפעלה Qubes מספקת אבטחה על ידי שימוש בבידוד, ומתירה פעולות רק על בסיס כל מקרה, זה ההפך מ[badness enumeration](https://www.ranum.com/security/computer_security/editorials/dumb/).

## איך Qubes OS עובדת?

Qubes משתמש ב - [מידור](https://www.qubes-os.org/intro/) כדי לשמור על המערכת מאובטחת. קוביות נוצרים מתבניות, ברירת המחדל היא עבור Fedora, Debian ו - [Whonix](../desktop.md#whonix). מערכת הפעלה Qubes מאפשר לך ליצור מכונות ויטואליות [חד פעמיות](https://www.qubes-os.org/doc/how-to-use-disposables/).

![ארכיטקטורת Qubes](../assets/img/qubes/qubes-trust-level-architecture.png)
<figcaption>אדריכלות Qubes, קרדיט: מהו Qubes OS Intro</figcaption>

כל יישום Qubes יש [גבול צבעוני](https://www.qubes-os.org/screenshots/) שיכול לעזור לך לעקוב אחר המחשב הווירטואלי הוא פועל. לדוגמה, תוכל להשתמש בצבע מסוים עבור הדפדפן הבנקאי שלך, תוך שימוש בצבע אחר עבור דפדפן כללי שאינו מהימן.

![גבול צבוע](../assets/img/qubes/r4.0-xfce-three-domains-at-work.png)
<figcaption>גבולות החלון של Qubes, קרדיט: צילומי מסך של Qubes</figcaption>

## למה כדאי להשתמש ב - Qubes?

מערכת ההפעלה של Qubes שימושית אם [מודל האיום](../basics/threat-modeling.md) שלך דורש מידור ואבטחה חזקות, כגון אם אתה חושב שתפתח קבצים לא מהימנים ממקורות לא מהימנים. סיבה טיפוסית לשימוש ב-Qubes OS היא פתיחת מסמכים ממקורות לא ידועים.

מערכת ההפעלה Qubes משתמשת ב-[Dom0](https://wiki.xenproject.org/wiki/Dom0) Xen VM (כלומר, "AdminVM") לשליטה ב-VM אורחים או Qubes אחרים במערכת ההפעלה המארח. VMs אחרים מציגים חלונות יישומים בודדים בתוך סביבת שולחן העבודה של Dom0. זה מאפשר לך לצבוע חלונות על סמך רמות אמון ולהפעיל יישומים שיכולים לקיים אינטראקציה זה עם זה עם שליטה פרטנית מאוד.

### העתקה והדבקה של טקסט

אתה יכול [להעתיק ולהדביק טקסט](https://www.qubes-os.org/doc/how-to-copy-and-paste-text/) באמצעות `qvm-copy -to-vm` או ההוראות שלהלן:

1. הקש על **Ctrl+C** כדי לומר ל-VM שאתה נמצא בו שאתה רוצה להעתיק משהו.
2. הקש על **Ctrl+Shift+C** כדי לומר ל-VM להפוך את המאגר הזה לזמין ללוח הגלובלי.
3. הקש על **Ctrl+Shift+V** ב-VM היעד כדי להפוך את הלוח הגלובלי לזמין.
4. הקש על **Ctrl+V** ב-VM היעד כדי להדביק את התוכן במאגר.

### החלפת קבצים

כדי להעתיק ולהדביק קבצים וספריות (תיקיות) מ-VM אחד לאחר, אתה יכול להשתמש באפשרות **העתק ל-AppVM אחר...** או **עבור ל-AppVM אחר...**. ההבדל הוא שהאפשרות ה**העבר** תמחק את הקובץ המקורי. כל אחת מהאפשרויות תגן על הלוח שלך מפני דליפה לכל Qubes אחר. זה מאובטח יותר מהעברת קבצים עם רווח אוויר מכיוון שמחשב עם רווח אוויר עדיין ייאלץ לנתח מחיצות או מערכות קבצים. זה לא נדרש עם מערכת ההעתקה inter-qube.

??? info "ל-AppVMs או qubes אין מערכות קבצים משלהם"

    אתה יכול [להעתיק ולהעביר קבצים](https://www.qubes-os.org/doc/how-to-copy-and-move-files/) בין Qubes. כאשר עושים זאת השינויים לא מתבצעים באופן מיידי וניתן לבטל אותם בקלות במקרה של תאונה.

### אינטראקציות בין-VM

[מסגרת qrexec](https://www.qubes-os.org/doc/qrexec/) היא חלק מרכזי ב-Qubes המאפשר תקשורת מכונה וירטואלית בין דומיינים. הוא בנוי על גבי ספריית Xen *vchan*, המאפשרת [בידוד באמצעות מדיניות](https://www.qubes-os.org/news/2020/06/22/new-qrexec-policy-system/).

## מקורות נוספים

למידע נוסף, אנו ממליצים לך לעיין בדפי התיעוד הנרחבים של Qubes OS הממוקמים ב[אתר האינטרנט של Qubes OS](https://www.qubes-os.org/doc/). ניתן להוריד עותקים לא מקוונים מ[מאגר התיעוד](https://github.com/QubesOS/qubes-doc) של Qubes OS.

- Open Technology Fund: [*ללא ספק מערכת ההפעלה המאובטחת בעולם*](https://www.opentech.fund/news/qubes-os-arguably-the-worlds-most-secure-operating-system-motherboard/)
- J. Rutkowska: [*מידור תוכנה לעומת הפרדה פיזית*](https://invisiblethingslab.com/resources/2014/Software_compartmentalization_vs_physical_separation.pdf)
- J. Rutkowska: [*חלוקת החיים הדיגיטליים שלי לתחומי אבטחה*](https://blog.invisiblethings.org/2011/03/13/partitioning-my-digital-life-into.html)
- Qubes OS: [*מאמרים קשורים*](https://www.qubes-os.org/news/categories/#articles)

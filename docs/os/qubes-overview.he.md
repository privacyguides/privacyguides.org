---
title: "סקירת Qubes"
icon: simple/qubesos
---

[**Qubes OS**](../desktop.md#qubes-os) היא מערכת הפעלה המשתמשת ב- [Xen](https://en.wikipedia.org/wiki/Xen) hypervisor כדי לספק אבטחה חזקה למחשוב שולחני באמצעות מכונות וירטואליות מבודדות. כל VM נקרא *קובייה* ואתה יכול להקצות כל קובייה רמה של אמון על פי מטרתו. מכיוון שמערכת ההפעלה Qubes מספקת אבטחה על ידי שימוש בבידוד, ומתירה פעולות רק על בסיס כל מקרה, זה ההפך מ[badness enumeration](https://www.ranum.com/security/computer_security/editorials/dumb/).

## איך Qubes OS עובדת?

Qubes משתמש ב - [מידור](https://www.qubes-os.org/intro/) כדי לשמור על המערכת מאובטחת. קוביות נוצרים מתבניות, ברירת המחדל היא עבור Fedora, Debian ו - [Whonix](../desktop.md#whonix). מערכת הפעלה Qubes מאפשר לך ליצור מכונות ויטואליות [חד פעמיות](https://www.qubes-os.org/doc/how-to-use-disposables/).

![ארכיטקטורת Qubes](../assets/img/qubes/qubes-trust-level-architecture.png)
<figcaption>אדריכלות Qubes, קרדיט: מהו Qubes OS Intro</figcaption>

כל יישום Qubes יש [גבול צבעוני](https://www.qubes-os.org/screenshots/) שיכול לעזור לך לעקוב אחר המחשב הווירטואלי הוא פועל. לדוגמה, תוכל להשתמש בצבע מסוים עבור הדפדפן הבנקאי שלך, תוך שימוש בצבע אחר עבור דפדפן כללי שאינו מהימן.

![גבול צבוע](../assets/img/qubes/r4.0-xfce-three-domains-at-work.png)
<figcaption>גבולות החלון של Qubes, קרדיט: צילומי מסך של Qubes</figcaption>

## למה כדאי להשתמש ב - Qubes?

מערכת ההפעלה Qubes שימושית אם [מודל האיומים](../basics/threat-modeling.md) שלך דורש מידור ואבטחה חזקים, כגון אם אתה חושב שתפתח קבצים לא מהימנים ממקורות לא מהימנים. מקרה שימוש טיפוסי עבור מערכת ההפעלה Qubes הוא לפתיחת מסמכים ממקור לא ידוע.

Qubes OS משתמשת ב - [Dom0](https://wiki.xenproject.org/wiki/Dom0) Xen VM (כלומר, "AdminVM ") לשליטה ב - VMs או ב - Qubes אורחים אחרים במערכת ההפעלה המארחת. VMs אחרים מציגים חלונות יישומים נפרדים בסביבת שולחן העבודה של DOM0. הוא מאפשר לך לצבוע חלונות קוד המבוססים על רמות אמון ולהפעיל יישומים שיכולים לקיים אינטראקציה אחד עם השני עם שליטה פרטנית מאוד.

### העתקה והדבקה של טקסט

באפשרותך[ להעתיק ולהדביק טקסט](https://www.qubes-os.org/doc/how-to-copy-and-paste-text/) באמצעות `qvm-copy-to-vm` או באמצעות ההוראות שלהלן:

1. הקש **Ctrl+C** כדי לומר ל - VM שאתה נמצא בו שברצונך להעתיק משהו.
2. הקש **Ctrl+Shift+C** כדי להורות ל - VM להפוך את המאגר הזה לזמין ללוח העריכה הגלובלי.
3. הקש **Ctrl+Shift+V** ב - VM היעד כדי להפוך את הלוח העולמי לזמין.
4. הקש **Ctrl+V** ב - VM היעד כדי להדביק את התוכן במאגר.

### החלפת קבצים

כדי להעתיק ולהדביק קבצים וספריות (תיקיות) מ- VM אחד לאחר, באפשרותך להשתמש באפשרות **העתק ל- AppVM אחר... ** או **לעבור ל- AppVM אחר.....**. ההבדל הוא שהאפשרות **Move** תמחק את הקובץ המקורי. כל אחת מהאפשרויות תגן על לוח העריכה שלך מפני הדלפה לכל קובייה אחרת. זה יותר אבטחה מאשר העברת קבצים פער אוויר כי מחשב פער אוויר עדיין ייאלץ לנתח מחיצות או מערכות קבצים. זה לא נדרש עם מערכת העתקה inter - qube.

??? מידע "AppVMs או qubes אין מערכות קבצים משלהם"

    ניתן [להעתיק ולהעביר קבצים]( https://www.qubes-os.org/doc/how-to-copy-and-move-files/) בין קוביות. כאשר עושים זאת השינויים אינם מבוצעים באופן מיידי וניתן לבטלם בקלות במקרה של תאונה.

### אינטראקציות אינטר - VM

מסגרת [qrexec](https://www.qubes-os.org/doc/qrexec/) היא חלק מרכזי של Qubes המאפשרת תקשורת מכונה וירטואלית בין דומיינים. הוא בנוי על גבי ספריית Xen *vchan*, מה שמקל על [בידוד באמצעות מדיניות](https://www.qubes-os.org/news/2020/06/22/new-qrexec-policy-system/).

## מקורות נוספים

למידע נוסף אנו ממליצים לך לעיין בדפי התיעוד הנרחבים של מערכת ההפעלה Qubes הממוקמים ב[אתר האינטרנט של ](https://www.qubes-os.org/doc/).Qubes. ניתן להוריד עותקים לא מקוונים מ[מאגר התיעוד](https://github.com/QubesOS/qubes-doc) Qubes OS.

- Open Technology Fund: [*מערכת ההפעלה המאובטחת ביותר בעולם*](https://www.opentech.fund/news/qubes-os-arguably-the-worlds-most-secure-operating-system-motherboard/)
- J. Rutkowska: [*מידור תוכנה לעומת הפרדה פיזית*](https://invisiblethingslab.com/resources/2014/Software_compartmentalization_vs_physical_separation.pdf)
- J. Rutkowska: [*חלוקת החיים הדיגיטליים שלי לתחומי אבטחה*](https://blog.invisiblethings.org/2011/03/13/partitioning-my-digital-life-into.html)
- Qubes OS: [*מאמרים קשורים*](https://www.qubes-os.org/news/categories/#articles)

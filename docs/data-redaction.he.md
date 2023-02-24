---
title: "הפחתת נתונים ומטא נתונים"
icon: material/tag-remove
---

בעת שיתוף קבצים, הקפד להסיר מטא נתונים משויכים. קבצי תמונה כוללים בדרך כלל [נתוני Exif](https://en.wikipedia.org/wiki/Exif). תמונות לפעמים אפילו כוללות קואורדינטות GPS במטא-נתונים של הקובץ.

## מחשב שולחני

### MAT2

!!! recommendation

    ![MAT2 לוגו](assets/img/data-redaction/mat2.svg){ align=right }
    
    **MAT2** היא תוכנה חופשית, המאפשרת להסיר את המטא נתונים מסוגים של תמונות, אודיו, טורנטים ומסמכים. הוא מספק גם כלי שורת פקודה וגם ממשק משתמש גרפי באמצעות [הרחבה עבור Nautilus](https://0xacab.org/jvoisin/mat2/-/tree/master/nautilus), מנהל הקבצים המוגדר כברירת מחדל של [GNOME](https://www.gnome.org), ו-[Dolphin](https://0xacab.org/jvoisin/mat2/-/tree/master/dolphin), מנהל הקבצים המוגדר כברירת מחדל של [KDE](https://kde.org).
    
    בלינקוס, קיים כלי גרפי של צד שלישי [Metadata Cleaner](https://gitlab.com/rmnvgr/metadata-cleaner) המופעל על ידי MAT2 והוא [זמין ב-Flathub](https://flathub.org/apps/details/fr.romainvigier.MetadataCleaner).
    
    [:octicons-repo-16: מאגר](https://0xacab.org/jvoisin/mat2){ .md-button .md-button--primary }
    [:octicons-info-16:](https://0xacab.org/jvoisin/mat2/-/blob/master/README.md){ .card-link title=תיעוד}
    [:octicons-code-16:](https://0xacab.org/jvoisin/mat2){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-windows11: Windows](https://pypi.org/project/mat2)
        - [:simple-apple: macOS](https://0xacab.org/jvoisin/mat2#requirements-setup-on-macos-os-x-using-homebrew)
        - [:simple-linux: Linux](https://pypi.org/project/mat2)
        - [:octicons-globe-16: Web](https://0xacab.org/jvoisin/mat2#web-interface)

## נייד

### ExifEraser (אנדרואיד)

!!! recommendation

    ![לוגו של ExifEraser](assets/img/data-redaction/exiferaser.svg){ align=right }
    
    **ExifEraser** הוא יישום מודרני למחיקת מטא נתונים של תמונות ללא הרשאה עבור אנדרואיד.
    
    בשלב זה הוא תומך בקבצי JPEG, PNG ו - WebP.
    
    [:octicons-repo-16: מאגר](https://github.com/Tommy-Geenexus/exif-eraser){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/Tommy-Geenexus/exif-eraser#readme){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/Tommy-Geenexus/exif-eraser){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.none.tom.exiferaser)
        - [:simple-github: GitHub](https://github.com/Tommy-Geenexus/exif-eraser/releases)

המטא נתונים שנמחקים תלויים בסוג הקובץ של התמונה:

* **JPEG**: פרופיל ICC, Exif, משאבי תמונה בפוטושופ ומטא-נתונים של XMP/ExtendedXMP יימחקו אם הם קיימים.
* **PNG**: פרופיל ICC, מטא נתונים של Exif ו - XMP יימחקו אם הם קיימים.
* **WebP**: פרופיל ICC, מטא נתונים של Exif ו - XMP יימחקו אם הם קיימים.

לאחר עיבוד התמונות, ExifEraser מספק לך דוח מלא על מה בדיוק הוסר מכל תמונה.

האפליקציה מציעה מספר דרכים למחיקת מטא - נתונים מתמונות. כלומר:

* באפשרותך לשתף תמונה מיישום אחר עם ExifEraser.
* דרך האפליקציה עצמה, אתה יכול לבחור תמונה אחת, תמונות מרובות בבת אחת, או אפילו ספריה שלמה.
* הוא כולל אפשרות "מצלמה ", המשתמשת באפליקציית המצלמה של מערכת ההפעלה כדי לצלם תמונה, ולאחר מכן מסירה ממנה את המטא נתונים.
* זה מאפשר לך לגרור תמונות מיישום אחר לתוך ExifEraser כאשר שניהם פתוחים במצב מסך מפוצל.
* לבסוף, הוא מאפשר לך להדביק תמונה מהלוח שלך.

### Metapho (iOS)

!!! recommendation

    ![Metapho לוגו](assets/img/data-redaction/metapho.jpg){ align=right }
    
    **Metapho** הוא צופה פשוט ונקי עבור מטא נתונים של תמונות כגון תאריך, שם קובץ, גודל, מודל מצלמה, מהירות צמצם ומיקום.
    
    [:octicons-home-16: Homepage](https://zininworks.com/metapho){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://zininworks.com/privacy/){ .card-link title="Privacy Policy" }
    
    ??? downloads "הורדות"
    
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/metapho/id914457352)

### PrivacyBlur

!!! recommendation

    ![PrivacyBlur logo](assets/img/data-redaction/privacyblur.svg){ align=right }
    
    ** PrivacyBlur** היא אפליקציה חינמית שיכולה לטשטש חלקים רגישים של תמונות לפני שהיא משתפת אותם באינטרנט.
    
    [:octicons-home-16: דף הבית](https://privacyblur.app/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://privacyblur.app/privacy.html){ .card-link title="מדיניות פרטיות" }
    [:octicons-info-16:](https://github.com/MATHEMA-GmbH/privacyblur#readme){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/MATHEMA-GmbH/privacyblur){ .card-link title="קוד מקור" }
    
    ??? downloads "הורדות"
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=de.mathema.privacyblur)
        - [:simple-appstore: App Store](https://apps.apple.com/us/app/privacyblur/id1536274106)

!!! warning "אזהרה"

    כדאי **לעולם** לא להשתמש בטשטוש כדי לעצב [טקסט בתמונות](https://bishopfox.com/blog/unredacter-tool-never-pixelation). אם ברצונך לשנות טקסט בתמונה, צייר תיבה מעל הטקסט. לשם כך, אנו מציעים אפליקציות כמו [Pocket Paint](https://github.com/Catrobat/Paintroid).

## שורת פקודה

### ExifTool

!!! recommendation

    ![ExifTool לוגו](assets/img/data-redaction/exiftool.png){ align=right }
    
    **ExifTool** הוא ספריית ה-perl המקורית ויישום שורת הפקודה לקריאה, כתיבה ועריכה של מטא מידע (Exif, IPTC, XMP ועוד) במגוון רחב של פורמטים של קבצים (JPEG, TIFF, PNG, PDF, RAW ועוד).
    
    לעתים קרובות זה מרכיב של יישומי הסרת Exif אחרים ונמצא ברוב מאגרי ההפצה של לינוקס.
    
    [:octicons-home-16: דף הבית](https://exiftool.org){ .md-button .md-button--primary }
    [:octicons-info-16:](https://exiftool.org/faq.html){ .card-link title=תיעוד}
    [:octicons-code-16:](https://github.com/exiftool/exiftool){ .card-link title="קוד מקור" }
    [:octicons-heart-16:](https://exiftool.org/#donate){ .card-link title=לתרומה }
    
    ??? downloads "הורדות"
    
        - [:simple-windows11: Windows](https://exiftool.org)
        - [:simple-apple: macOS](https://exiftool.org)
        - [:simple-linux: Linux](https://exiftool.org)

!!! example "מחיקת נתונים מספריית קבצים"

    ```bash
    exiftool -all= *.סיומת קובץ
    ```

## קריטריונים

**שים לב שאיננו קשורים לאף אחד מהפרויקטים שאנו ממליצים עליהם.** בנוסף [לקריטריונים הסטנדרטיים שלנו](about/criteria.md), פיתחנו סט ברור של דרישות כדי לאפשר לנו לספק המלצות אובייקטיביות. אנו מציעים לך להכיר את הרשימה הזו לפני שתבחר להשתמש בפרויקט, ולערוך מחקר משלך כדי להבטיח שזו הבחירה הנכונה עבורך.

!!! example "חלק זה הוא חדש"

    אנו עובדים על קביעת קריטריונים מוגדרים עבור כל חלק באתר שלנו, וזה עשוי להיות נתון לשינויים. אם יש לך שאלות לגבי הקריטריונים שלנו, אנא [שאל בפורום שלנו](https://discuss.privacyguides.net/latest) ואל תניח שלא שקלנו משהו בעת מתן ההמלצות שלנו אם זה לא מופיע כאן. ישנם גורמים רבים שנחשבים ונדונים כאשר אנו ממליצים על פרויקט, ותיעוד כל אחד מהם הוא עבודה בתהליך.

- יישומים שפותחו עבור מערכות הפעלה בקוד פתוח חייבים להיות קוד פתוח.
- יישומים חייבים להיות חינמיים ולא לכלול מודעות או מגבלות אחרות.

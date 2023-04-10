---
title: "البُرُد الإلكترونية"
icon: material/email
description: توفِّر الجهات المذكورة مخزنًا آمنًا لرسائلك، والكثير منهم يدعم تعمية أوبن‌بي‌جي‌بي مع جهات أخرى.
---

حتَّى ولو كان البريد الإلكتروني حاجةً لتستخدم أيَّ خدمة إنترنت فإننا لا نوصي به للتحادث. تأمَّل استخدام خدمة اتصال مباشر تدعم السرية المستقبلية لتحادث الناس بدلًا من استخدام بريد إلكتروني.

[ما نوصي به من برامج مراسلة فورية](real-time-communication.md ""){.md-button}

خلا ذلك فنوصي بعدد من موفِّري خدمة البريد الإلكتروني، وذلك حسب استدامة نموذجات عملهم وأمنهم ومزايا الخصوصية عندهم.

- [موفِّرو خدمة البريد الإلكتروني الداعمون لأوبن‌بي‌جي‌بي :material-arrow-right-drop-circle:](#openpgp-compatible-services)
- [غيرهم من موفَّري الخدمة المعمَّاة :material-arrow-right-drop-circle:](#more-providers)
- [خدمات تكنين البُرُد الإلكترونية :material-arrow-right-drop-circle:](#email-aliasing-services)
- [خيارات الاستضافة الذاتية :material-arrow-right-drop-circle:](#self-hosting-email)

## الخدمات الداعمة لأوبن‌بي‌جي‌بي

يدعهم هؤلاء تعمية وفكَّ تعمية أوبن‌بي‌جي‌بي أصلًا، ويمتثلون معيار دليل مفتاح الوِب (WKD)، مما يتيح لهم إرسال رسائل إلكترونيةً معمَّاةً بين الأطراف بغضِّ النظر عن مصدرها. فمثلًا: باستطاعة مستخدم بريد بروتون إرسال رسالة معمَّاة بين الأطراف، وكون المستقبل مستخدم Mailbox.org، أو لك استقبال إشعارات معمَّاةً بأوبن‌بي‌جي‌بي من خدمات الإنترنت الداعمة له.

<div class="grid cards" markdown>

- ![Proton Mail logo](assets/img/email/protonmail.svg){ .twemoji } [بريد بروتون](email.md#proton-mail)
- ![Mailbox.org logo](assets/img/email/mailboxorg.svg){ .twemoji } [Mailbox.org](email.md#mailboxorg)

</div>

!!! تحذير

    حتَّى عند استخدام تقنية تعمية بين الأطراف مثل أوبن‌بي‌جي‌بي فسوف توجد بعض البيانات الوصفية غير المعمَّاة في عنوان الرسالة. طالع المزيد عن [البيانات الوصفية في البُرُد الإلكترونية](basics/email-security.md#email-metadata-overview).
    
    لا يدعم أوبن‌بي‌جي‌بي السرية المستقبلية، ويعني هذا أنه في حال سرقة مفتاحك الخاصِّ أو مفتاح المستقبل فسوف تكون كلُّ الرسائل السابقة بينكما قابلةً لفكِّ التعمية. [كيف أحمي مفاتيحي الخاصَّة؟](basics/email-security.md#how-do-i-protect-my-private-keys)

### بريد بروتون

!!! recommendation

    ![Proton Mail logo](assets/img/email/protonmail.svg){ align=left }
    
    **بريد بروتون** هو خدمة بُرُد إلكترونية تركِّز في الخصوصية والتعمية والأمن واليسر. وهم يعملون منذ **٢٠١٣**. ومقرُّ بروتون أي‌جي في جنيف في سويسرا. تبدأ الحسابات عندهم لها سعة تخزين ٥٠٠ م‌بايت، وذلك حسب الاشتراك المجاني.
    
    [:octicons-home-16: الصفحة الرئيسة](https://proton.me/mail){ .md-button .md-button--primary }
    [:simple-torbrowser:](https://protonmailrmez3lotccipshtkleegetolb73fuirgj7r4o4vfu7ozyd.onion){ .card-link title="خدمة أَنيِن" }
    [:octicons-eye-16:](https://proton.me/legal/privacy){ .card-link title="سياسة الخصوصية" }
    [:octicons-info-16:](https://proton.me/support/mail){ .card-link title=التوثيق}
    [:octicons-code-16:](https://github.com/ProtonMail){ .card-link title="رمز المصدر" }
    
    ??? التنزيلات
    
       - [:simple-googleplay: متجر بلاي](https://play.google.com/store/apps/details?id=ch.protonmail.android)
        - [:simple-appstore: آب ستور](https://apps.apple.com/app/apple-store/id979659905)
        - [:simple-github: جت‌هب](https://github.com/ProtonMail/proton-mail-android/releases)
        - [:simple-windows11: ويندوز](https://proton.me/mail/bridge#download)
        - [:simple-apple: ماك‌أو‌إس](https://proton.me/mail/bridge#download)
        - [:simple-linux: لينكس](https://proton.me/mail/bridge#download)
        - [:octicons-browser-16: وِب](https://mail.proton.me)

للحسابات المجانية قيود، كعجزهم عن البحث في النصوص وعدم استخدام [جسر بريد بروتون](https://proton.me/mail/bridge)، وتحتاجه إن أردت استخدام [أحد برامج البريد في سطح المكتب الموصى بها](email-clients.md) (مثل ثندربرد). لمن اشترك في حساب عند بريد بروتون مزايا، مثل جسر بريد بروتون ومساحة تخزين إضافية ودعم أسماء النطاق المخصَّصة. أعطت [سكيورتم](https://research.securitum.com) [شهادةً](https://proton.me/blog/security-audit-all-proton-apps) لتطبيقات بريد بروتون في التاسع من نوفمبر عام ٢٠٢١.

إن كان عندك اشتراك «بروتون أنلمتد» أو «بروتون بزنس» أو «فجنري بلان» فسوف تحصل على اشتراك [سمبل‌لوج‌إن](#simplelogin) مجَّانًا.

عند بريد بروتون تقارير تعطُّل داخلية **لا** يشاركونها مع أيِّ جهة خارجية. ولك تعطيلها في: **الإعدادات** > ** إذهب للإعدادات** > **الحساب** > **الأمن والخصوصية** > **أرسل تقارير التعطُّل**.

#### :material-check:{ .pg-green } النطاقات المخصَّصة والكنى

بإمكان مشتركي بريد بروتون استخدام أسماء نطاق من عندهم أو لهم استخدام عنوان [جامع](https://proton.me/support/catch-all). وكذلك يدعم بريد بروتون [العنونة الفرعية](https://proton.me/support/creating-aliases)، وهي مفيدة لمن لا يريد شراء نطاق.

#### :material-check:{ .pg-green } سُبُل الدفع الخاصَّة

[يقبل](https://proton.me/support/payment-options) بريد بروتون الدفع نقدًا عن طريق البريد، ويقبل كذلك الدفع ببطاقات الائتمان والبطاقات المصرفية [وبتكوين](advanced/payments.md#other-coins-bitcoin-ethereum-etc) وبي‌بال.

#### :material-check:{ .pg-green } أمن الحساب

يدعم بريد بروتون [الاستيثاق بخطوتين عبر](https://proton.me/support/two-factor-authentication-2fa) «كلمة المرور لمرة واحدة حسب الوقت (TOTP)» [ومفاتيح أمن العتاد](https://proton.me/support/2fa-security-key) وفق معيارَي FIDO2 و U2F. ويتطلَّب استخدام مفاتيح أمن العتاد إعداد الاستيثاق بخطوتين عبر كلمة المرور لمرة واحدة حسب الوقت.

#### :material-check:{ .pg-green } أمن البيانات

عند بريد بروتون [تعمية دون أيِّ وصول](https://proton.me/blog/zero-access-encryption) لبُرُدك الإلكترونية [وتقويماتك](https://proton.me/news/protoncalendar-security-model). لا يمكن لأحد الوصول للبيانات المعمَّاة دون أيِّ وصول سواك.

بعض المعلومات المخزَّنة في [متراسلي بروتون](https://proton.me/support/proton-contacts) ليست مؤمَّنةً بتعمية دون أيِّ وصول، كالأسماء المعروضة وعناوين البُرُد الإلكترونية. تُعلَّم حقول المتراسلين الداعمة للتعمية دون أيِّ وصول بعلامة قفل، كأرقام الجوالات.

#### :material-check:{ .pg-green } تعمية البريد الإلكتروني

عند بريد بروتون [دعم مدمج لتعمية أوبن‌بي‌جي‌بي](https://proton.me/support/how-to-use-pgp) في صفحة البريد. تعمَّى الرسائل المرسلة لحسابات بريد بروتون الأخرى تلقائيًّا، ولك تمكين تعمية أوبن‌بي‌جي‌بي لعناوين البريد خارج بروتون في إعدادات حسابك. ويتيح لك أيضًا [تعمية الرسائل المرسلة لغير عناوين بروتون](https://proton.me/support/password-protected-emails) دون حاجتهم لتسجيل حساب بريد بروتون او استخدام برمجية مثل أوبن‌بي‌جي‌بي.

يدعم بريد بروتون اكتشاف المفاتيح العامَّة باستخدام HTTP من [دليل مفاتيح الوِب (WKD) التابع لهم](https://wiki.gnupg.org/WKD). ويتيح هذا لمن ليس عنده بريد بروتون العثور على مفاتيح أوبن‌بي‌جي‌بي لحسابات بريد بروتون بسهولة، وذلك لتمكين التعمية بين الأطراف بين موفِّري خدمة البريد الإلكترونيِّ.


#### :material-information-outline:{ .pg-blue } إنهاء الحسابات

إن كان عندك حساب مدفوع [ولم تدفع الفاتورة](https://proton.me/support/delinquency) ١٤ يومًا فلن تستطيع الوصول لبياناتك. وبعد ثلاثين يوم يصبح حسابك خاملًا لا يستقبل الرسائل. وسوف يستمر إصدار الفواتير خلال هذه المدَّة.

#### :material-information-outline:{ .pg-blue } وظائف إضافية

يعرض بريد بروتون حسابًا «لا نهائيًّا» قيمته ٩٫٩٩ يورو لكلِّ شهر، ويتيح الوصول لشبكة بروتون الافتراضية الخاصَّة، واستخدام عدَّة حسابات ونطاقات وكنًى و مساحة تخزين ٥٠٠ ج‌بايت.

ليس عند بريد بروتون ميزة الإرث الرقميِّ.

### Mailbox.org

!!! recommendation

    ![Mailbox.org logo](assets/img/email/mailboxorg.svg){ align=left }
    
    **Mailbox.org** هو خدمة بريد إلكترونيٍّ تركِّز على الأمن والخلوِّ من الإعلانات، وهي تستلم طاقتها من مصادر خاصَّة ١٠٠٪ صديقة للبيئة. وهم يعملون منذ ٢٠١٤. ومقرُّهم في برلين في ألمانيا. تبدأ الحسابات ولها مساحة تخزين ٢ ج‌بايت، وتمكن زيادتها حسب الحاجة.
    
    [:octicons-home-16: الصفحة الرئيسة](https://mailbox.org){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://mailbox.org/en/data-protection-privacy-policy){ .card-link title="Pسياسة الخصوصية" }
    [:octicons-info-16:](https://kb.mailbox.org/en/private){ .card-link title=التوثيق}
    
    ??? التنزيلات
    
        - [:octicons-browser-16: وِب](https://login.mailbox.org)

#### :material-check:{ .pg-green } النطاقات المخصَّصة والكنى

تتيح لك Mailbox.org استخدام اسم نطاق من عندك، وكذلك تدعم العناوين [الجامعة](https://kb.mailbox.org/display/MBOKBEN/Using+catch-all+alias+with+own+domain). وزد على ذلك أنهم يدعمون [العنونة الفرعية](https://kb.mailbox.org/display/BMBOKBEN/What+is+an+alias+and+how+do+I+use+it)، وهي مفيدة لمن لا يريد شراء نطاق.

#### :material-check:{ .pg-green } سُبُل الدفع الخاصَّة

لا تقبل Mailbox.org الدفع باستخدام العملات المعمَّاة، وسبب ذلك أن معالج دفعهم، بِت‌بَي، علَّق عملياته في ألمانيا. ولكنهم يقبلون الدفع نقدًا عبر البريد، ودفع النقد لحساب مصرف، والتحويل المصرفيَّ، وبطاقات الائتمان، وبَي‌بال، وبعض معالجي الدفع في ألمانيا: paydirekt و Sofortüberweisung.

#### :material-check:{ .pg-green } أمن الحساب

تدعم Mailbox.org [الاستيثاق بخطوتين](https://kb.mailbox.org/display/MBOKBEN/How+to+use+two-factor+authentication+-+2FA) في موقعهم فقط. لك استخدام كلمة مرور لمرة واحدة حسب الوقت (TOTP) أو [يوبِكي](https://en.wikipedia.org/wiki/YubiKey) من [يوبِكلاود](https://www.yubico.com/products/services-software/yubicloud). بعض معايير الوِب مثل [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn) ليست مدعومةً بعد.

#### :material-information-outline:{ .pg-blue } أمن البيانات

تتيح Mailbox.org تعمية الرسائل الواردة باستخدام [صندوق البريد المعمَّى](https://kb.mailbox.org/display/MBOKBEN/The+Encrypted+Mailbox). تعمَّى الرسائل الواردة باستخدام مفتاحك العامِّ فورًا.

ولكن [أوبن-إكستشينج](https://en.wikipedia.org/wiki/Open-Xchange)، وهي منصَّة البرمجيات التي تستخدمها Mailbox.org، [ لا تدعم](https://kb.mailbox.org/display/BMBOKBEN/Encryption+of+calendar+and+address+book) تعمية دفتر عناوينك وتقويمك. لعلَّ [خيارًا مستقلًّا](calendar.md) أفضل لهذه المعلومات.

#### :material-check:{ .pg-green } تعمية البريد الإلكتروني

لدى Mailbox.org [تعمية مدمجة](https://kb.mailbox.org/display/MBOKBEN/Send+encrypted+e-mails+with+Guard) في موقعهم، وهذا ييسِّر إرسال الرسائل باستخدام مفاتيح أوبن‌بي‌جي‌بي العامَّة. وكذلك يتيحون [لمستقبلي الرسائل من خارج خوادمهم كشف تعمية رسالة](https://kb.mailbox.org/display/MBOKBEN/My+recipient+does+not+use+PGP) في خوادم Mailbox.org. فائدة هذا تظهر في حال كان المستقبل ليس لديه أوبن‌بي‌جي‌بي ولا يستطيع كشف تعمية نسخة من الرسالة في صندوق بريده.

تدعم Mailbox.org اكتشاف المفتايح العامَّة باستخدام HTTP من [دليل مفاتيح الوِب (WKD)](https://wiki.gnupg.org/WKD) التابع لهم. ويتيح هذا لمن ليس عنده Mailbox.org العثور على مفاتيح أوبن‌بي‌جي‌بي لحسابات Mailbox.org بسهولة، وذلك لتمكين التعمية بين الأطراف بين موفِّري خدمة البريد الإلكترونيِّ.

#### :material-information-outline:{ .pg-blue } إنهاء الحسابات

يعيَّن حسابك حساب مستخدم مقيَّد عند انتهاء عقدك، وبعد [ثلاثين يوم سوف يحذف نهائيًّا](https://kb.mailbox.org/en/private/payment-article/what-happens-at-the-end-of-my-contract).

#### :material-information-outline:{ .pg-blue } وظائف إضافية

بإمكانك الوصول لحسابك في Mailbox.org باستخدام IMAP/SMTP عبر [خدمة .onion](https://kb.mailbox.org/display/MBOKBEN/The+Tor+exit+node+of+mailbox.org). ولكن لا يمكن الوصول لواجهة موقعهم باستخدام خدمة .onion، وقد تواجه أخطاء شهادة TLS.

عند كلِّ الحسابات مساحة تخزين قليلة، [وتمكن تعميتها](https://kb.mailbox.org/display/MBOKBEN/Encrypt+files+on+your+Drive). وتوفِّر Mailbox.org الكنية [@secure.mailbox.org](https://kb.mailbox.org/display/MBOKBEN/Ensuring+E-Mails+are+Sent+Securely)، وهو تفرض تعمية TLS على الاتصال بين خوادم البريد، وإن لم يعمَّ فلن ترسل الرسائل. تدعم Mailbox.org [إكستشينج-أكتف‌سنك](https://en.wikipedia.org/wiki/Exchange_ActiveSync)، وكذلك تدعم معايير الوصول القياسية مثل IMAP و POP3.

عند Mailbox.org ميزة الإرث الرقميِّ لكلِّ الاشتراكات. فبوسعك اختيار ما إن أردت أن تورِّث أيَّ بيانات لك، وذلك إن سجَّل ذلك ورثاؤك وشهدت بذلك. غير ذلك فيمكنك ترشيح شخص باسمه وعنوانه.

## مقدِّموا خدمة آخرون

يخزِّن مقدمِّو الخدمة هؤلاء بُرُدك معمَّاةً تعمية دون معرفة، وهذا جاعلهم خيارات جيِّدةً لتخزِّنها فيها. ولكنهم لا يدعمون معايير تعمية للاتصالات المعمَّاة بين الطرفين تتوافق بين الموفِّرين.

<div class="grid cards" markdown>

- ![StartMail logo](assets/img/email/startmail.svg#only-light){ .twemoji }![StartMail logo](assets/img/email/startmail-dark.svg#only-dark){ .twemoji } [StartMail](email.md#startmail)
- ![Tutanota logo](assets/img/email/tutanota.svg){ .twemoji } [Tutanota](email.md#tutanota)

</div>

### ستارت‌ميل

!!! recommendation

    ![StartMail logo](assets/img/email/startmail.svg#only-light){ align=left }
    ![StartMail logo](assets/img/email/startmail-dark.svg#only-dark){ align=left }
    
    **ستارت‌ميل** هي خدمة بُرُد إلكترونية تركِّز على الأمن والخصوصية، وذلك باستخدامها تعمية أوبن‌بي‌جي‌بي. وهم يعملون منذ ٢٠١٤، ومقرُّهم في بولفارد ١١ في زايست في هولندا. تبدأ الحسابات بمساحة تخزين ١١ ج‌بايت. ويوفِّرون ثلاثين يومًا تجربةً.
    
    [:octicons-home-16: الصفحة الرئيسة](https://www.startmail.com/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://www.startmail.com/en/privacy/){ .card-link title="سياسة الخصوصية" }
    [:octicons-info-16:](https://support.startmail.com){ .card-link title=التوثيق}
    
    ??? التنزيلات
    
        - [:octicons-browser-16: وِب](https://mail.startmail.com/login)

#### :material-check:{ .pg-green } النطاقات المخصَّصة والكنى

للحسابات الشخصية استخدام الكنى [المخصَّصة والسريعة](https://support.startmail.com/hc/en-us/articles/360007297457-Aliases). وتتاح كذلك [النطاقات المخصَّصة](https://support.startmail.com/hc/en-us/articles/4403911432209-Setup-a-custom-domain).

#### :material-alert-outline:{ .pg-orange } سُبُل الدفع الخاصَّة

تقبل ستارت‌ميل فيزا وماستركارد وأميركن إكسبرس وبي‌بال. ولديهم أيضًا [خيارات دفع](https://support.startmail.com/hc/en-us/articles/360006620637-Payment-methods) أخرى، [كبتكوين](advanced/payments.md#other-coins-bitcoin-ethereum-etc) (وهذا حاليًّا للحسابات الشخصية فقط)، والخصم المباشر من سيبا للحسابات التي عمرها أكثر من سنة.

#### :material-check:{ .pg-green } أمن الحساب

تدعم ستارت‌ميل الاستيثاق بخطوتين باستخدام كلمة مرور لمرَّة واحدة حسب الوقت [في موقعهم فقط](https://support.startmail.com/hc/en-us/articles/360006682158-Two-factor-authentication-2FA). ولا يسمحون بالاستيثاق بمفتاح أمن المعامل الثاني الشامل (U2F).

#### :material-information-outline:{ .pg-blue } أمن البيانات

لدى ستارت‌ميل [تعمية دون أيِّ وصول](https://www.startmail.com/en/whitepaper/#_Toc458527835) باستخدام نظام «خزنة المستخدم». فإن سجَّلت دخولك فسوف تُفتح الخزنة، وعند ذلك تُنقل البُرُد إلى الخزنة من قائمة الانتظار، وهناك تُكشف تعميتها باستخدام ما يوافقها من مفاتيح خاصَّة.

تدعم ستارت‌ميل استيراد [المتراسلين](https://support.startmail.com/hc/en-us/articles/360006495557-Import-contacts)، ولكن الوصول لهم محصور في موقعهم وليس باستخدام موافيق مثل [كال‌داف](https://en.wikipedia.org/wiki/CalDAV). ولا يخزَّن المتراسلون باستخدام التعمية دون علم.

#### :material-check:{ .pg-green } تعمية البريد الإلكتروني

عند ستارت‌ميل [تعمية مدمجة](https://support.startmail.com/hc/en-us/sections/360001889078-Encryption) في موقعهم، وهذا ييسِّر إرسال الرسائل المعمَّاة باستخدام مفاتيح أوبن‌بي‌جي‌بي العامَّة. ولكنهم لا يدعمون معيار دليل مفاتيح الوِب، وهذا يصعِّب على موفِّري الخدمة الآخرين والعملاء اكتشاف المفاتيح العامَّة لصناديق بُرُدهم.

#### :material-information-outline:{ .pg-blue } إنهاء الحسابات

حال انتهاء صلاحية الحساب فسوف تحذف ستارت‌ميل الحساب نهائيًّا بعد [ستة أشهر وفي ثلاث مراحل](https://support.startmail.com/hc/en-us/articles/360006794398-Account-expiration).

#### :material-information-outline:{ .pg-blue } وظائف إضافية

تتيح ستارت‌ميل التوسُّط للصور داخل الرسائل. فإن سمحت لصورة أن تحمَّل فلن يعرف مرسلها عنوان IP التابع لك.

ليس عند ستارت‌ميل ميزة الإرث الرقميِّ.

### توتنوتا

!!! recommendation

    ![Tutanota logo](assets/img/email/tutanota.svg){ align=left }
    
    **توتنوتا** هي خدمة بُرُد إلكترونية تركِّز على الأمن والخصوصية باستخدام التعمية. وهم يعملون منذ ٢٠١١، ومقرُّهم في هانوفر في ألمانيا. تبدأ الحسابات المجانية عندهم بمساحة تخزين ١ ج‌بايت.
    
    [:octicons-home-16: الصفحة الرئيسة](https://tutanota.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://tutanota.com/privacy){ .card-link title="سياسة الخصوصية" }
    [:octicons-info-16:](https://tutanota.com/faq){ .card-link title=التوثيق}
    [:octicons-code-16:](https://github.com/tutao/tutanota){ .card-link title="رمز المصدر" }
    [:octicons-heart-16:](https://tutanota.com/community/){ .card-link title=ساهم }
    
    ??? التنزيلات
    
        - [:simple-googleplay: متجر بلاي](https://play.google.com/store/apps/details?id=de.tutao.tutanota)
        - [:simple-appstore: آب ستور](https://apps.apple.com/app/tutanota/id922429609)
        - [:simple-github: جت‌هب](https://github.com/tutao/tutanota/releases)
        - [:simple-windows11: ويندوز](https://tutanota.com/#download)
        - [:simple-apple: ماك‌أو‌إس](https://tutanota.com/#download)
        - [:simple-linux: لينكس](https://tutanota.com/#download)
        - [:octicons-browser-16: وِب](https://mail.tutanota.com/)

لا تدعم توتنوتا [ميفاق IMAP](https://tutanota.com/faq/#imap) أو استخدام [تطبيقات البُرُد الإلكترونية](email-clients.md) غير تطبيقهم، ولن تستطيع إضافة [حسابات خارجية](https://github.com/tutao/tutanota/issues/544#issuecomment-670473647) في تطبيقهم. ولا يدعم [استيراد الرسائل](https://github.com/tutao/tutanota/issues/630) ولا [المجلَّدات الفرعية](https://github.com/tutao/tutanota/issues/927) حاليًّا، ولكنَّ هذا [في صدد التغيير](https://tutanota.com/blog/posts/kickoff-import). يمكن تصدير الرسائل [فرادًى أو مجمَّعةً حسب الاختيار](https://tutanota.com/howto#generalMail) لكلِّ مجلَّد، ولعلَّ هذا مزعج إن كانت عندك العديد من المجلَّدات.

#### :material-check:{ .pg-green } النطاقات المخصَّصة والكنى

Paid Tutanota accounts can use up to 5 [aliases](https://tutanota.com/faq#alias) and [custom domains](https://tutanota.com/faq#custom-domain). Tutanota doesn't allow for [subaddressing (plus addresses)](https://tutanota.com/faq#plus), but you can use a [catch-all](https://tutanota.com/howto#settings-global) with a custom domain.

#### :material-information-outline:{ .pg-blue } Private Payment Methods

Tutanota only directly accepts credit cards and PayPal, however [cryptocurrency](cryptocurrency.md) can be used to purchase gift cards via their [partnership](https://tutanota.com/faq/#cryptocurrency) with Proxystore.

#### :material-check:{ .pg-green } أمن الحساب

Tutanota supports [two factor authentication](https://tutanota.com/faq#2fa) with either TOTP or U2F.

#### :material-check:{ .pg-green } أمن البيانات

Tutanota has [zero access encryption at rest](https://tutanota.com/faq#what-encrypted) for your emails, [address book contacts](https://tutanota.com/faq#encrypted-address-book), and [calendars](https://tutanota.com/faq#calendar). This means the messages and other data stored in your account are only readable by you.

#### :material-information-outline:{ .pg-blue } Email Encryption

Tutanota [does not use OpenPGP](https://www.tutanota.com/faq/#pgp). Tutanota accounts can only receive encrypted emails from non-Tutanota email accounts when sent via a [temporary Tutanota mailbox](https://www.tutanota.com/howto/#encrypted-email-external).

#### :material-information-outline:{ .pg-blue } إنهاء الحسابات

Tutanota will [delete inactive free accounts](https://tutanota.com/faq#inactive-accounts) after six months. You can reuse a deactivated free account if you pay.

#### :material-information-outline:{ .pg-blue } Additional Functionality

Tutanota offers the business version of [Tutanota to non-profit organizations](https://tutanota.com/blog/posts/secure-email-for-non-profit) for free or with a heavy discount.

Tutanota also has a business feature called [Secure Connect](https://tutanota.com/secure-connect/). This ensures customer contact to the business uses E2EE. The feature costs €240/y.

Tutanota doesn't offer a digital legacy feature.

## Email Aliasing Services

An email aliasing service allows you to easily generate a new email address for every website you register for. The email aliases you generate are then forwarded to an email address of your choosing, hiding both your "main" email address and the identity of your email provider. True email aliasing is better than plus addressing commonly used and supported by many providers, which allows you to create aliases like yourname+[anythinghere]@example.com, because websites, advertisers, and tracking networks can trivially remove anything after the + sign to know your true email address.

<div class="grid cards" markdown>

- ![AnonAddy logo](assets/img/email/anonaddy.svg#only-light){ .twemoji }![AnonAddy logo](assets/img/email/anonaddy-dark.svg#only-dark){ .twemoji } [AnonAddy](email.md#anonaddy)
- ![SimpleLogin logo](assets/img/email/simplelogin.svg){ .twemoji } [SimpleLogin](email.md#simplelogin)

</div>

Email aliasing can act as a safeguard in case your email provider ever ceases operation. In that scenario, you can easily re-route your aliases to a new email address. In turn, however, you are placing trust in the aliasing service to continue functioning.

Using a dedicated email aliasing service also has a number of benefits over a catch-all alias on a custom domain:

- Aliases can be turned on and off individually when you need them, preventing websites from emailing you randomly.
- Replies are sent from the alias address, shielding your real email address.

They also have a number of benefits over "temporary email" services:

- Aliases are permanent and can be turned on again if you need to receive something like a password reset.
- Emails are sent to your trusted mailbox rather than stored by the alias provider.
- Temporary email services typically have public mailboxes which can be accessed by anyone who knows the address, aliases are private to you.

Our email aliasing recommendations are providers that allow you to create aliases on domains they control, as well as your own custom domain(s) for a modest yearly fee. They can also be self-hosted if you want maximum control. However, using a custom domain can have privacy-related drawbacks: If you are the only person using your custom domain, your actions can be easily tracked across websites simply by looking at the domain name in the email address and ignoring everything before the at (@) sign.

Using an aliasing service requires trusting both your email provider and your aliasing provider with your unencrypted messages. Some providers mitigate this slightly with automatic PGP encryption, which reduces the number of parties you need to trust from two to one by encrypting incoming emails before they are delivered to your final mailbox provider.

### AnonAddy

!!! recommendation

    ![AnonAddy logo](assets/img/email/anonaddy.svg#only-light){ align=right }
    ![AnonAddy logo](assets/img/email/anonaddy-dark.svg#only-dark){ align=right }
    
    **AnonAddy** lets you create 20 domain aliases on a shared domain for free, or unlimited "standard" aliases which are less anonymous.
    
    [:octicons-home-16: Homepage](https://anonaddy.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://anonaddy.com/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://app.anonaddy.com/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/anonaddy){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://anonaddy.com/donate/){ .card-link title=Contribute }
    
    ??? downloads
    
        - [:simple-android: Android](https://anonaddy.com/faq/#is-there-an-android-app)
        - [:material-apple-ios: iOS](https://anonaddy.com/faq/#is-there-an-ios-app)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-GB/firefox/addon/anonaddy/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/anonaddy-anonymous-email/iadbdpnoknmbdeolbapdackdcogdmjpe)

The number of shared aliases (which end in a shared domain like @anonaddy.me) that you can create is limited to 20 on AnonAddy's free plan and 50 on their $12/year plan. You can create unlimited standard aliases (which end in a domain like @[username].anonaddy.com or a custom domain on paid plans), however, as previously mentioned, this can be detrimental to privacy because people can trivially tie your standard aliases together based on the domain name alone. Unlimited shared aliases are available for $36/year.

Notable free features:

- [x] 20 Shared Aliases
- [x] Unlimited Standard Aliases
- [ ] No Outgoing Replies
- [x] 2 Recipient Mailboxes
- [x] Automatic PGP Encryption

### SimpleLogin

!!! recommendation

    ![Simplelogin logo](assets/img/email/simplelogin.svg){ align=right }
    
    **SimpleLogin** is a free service which provides email aliases on a variety of shared domain names, and optionally provides paid features like unlimited aliases and custom domains.
    
    [:octicons-home-16: Homepage](https://simplelogin.io){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://simplelogin.io/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://simplelogin.io/docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/simple-login){ .card-link title="Source Code" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=io.simplelogin.android)
        - [:simple-appstore: App Store](https://apps.apple.com/app/id1494359858)
        - [:simple-github: GitHub](https://github.com/simple-login/Simple-Login-Android/releases)
        - [:simple-firefoxbrowser: Firefox](https://addons.mozilla.org/en-US/firefox/addon/simplelogin/)
        - [:simple-googlechrome: Chrome](https://chrome.google.com/webstore/detail/dphilobhebphkdjbpfohgikllaljmgbn)
        - [:simple-microsoftedge: Edge](https://microsoftedge.microsoft.com/addons/detail/simpleloginreceive-sen/diacfpipniklenphgljfkmhinphjlfff)
        - [:simple-safari: Safari](https://apps.apple.com/app/id1494051017)

SimpleLogin was [acquired by Proton AG](https://proton.me/news/proton-and-simplelogin-join-forces) as of April 8, 2022. If you use Proton Mail for your primary mailbox, SimpleLogin is a great choice. As both products are now owned by the same company you now only have to trust a single entity. We also expect that SimpleLogin will be more tightly integrated with Proton's offerings in the future. SimpleLogin continues to support forwarding to any email provider of your choosing. Securitum [audited](https://simplelogin.io/blog/security-audit/) SimpleLogin in early 2022 and all issues [were addressed](https://simplelogin.io/audit2022/web.pdf).

You can link your SimpleLogin account in the settings with your Proton account. If you have the Proton Unlimited, Business, or Visionary Plan, you will have SimpleLogin Premium for free.

Notable free features:

- [x] 10 Shared Aliases
- [x] Unlimited Replies
- [x] 1 Recipient Mailbox

## Self-Hosting Email

Advanced system administrators may consider setting up their own email server. Mail servers require attention and continuous maintenance in order to keep things secure and mail delivery reliable.

### Combined software solutions

!!! recommendation

    ![Mailcow logo](assets/img/email/mailcow.svg){ align=right }
    
    **Mailcow** is a more advanced mail server perfect for those with a bit more Linux experience. It has everything you need in a Docker container: A mail server with DKIM support, antivirus and spam monitoring, webmail and ActiveSync with SOGo, and web-based administration with 2FA support.
    
    [:octicons-home-16: Homepage](https://mailcow.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailcow.github.io/mailcow-dockerized-docs/){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mailcow/mailcow-dockerized){ .card-link title="Source Code" }
    [:octicons-heart-16:](https://www.servercow.de/mailcow?lang=en#sal){ .card-link title=Contribute }

!!! recommendation

    ![Mail-in-a-Box logo](assets/img/email/mail-in-a-box.svg){ align=right }
    
    **Mail-in-a-Box** is an automated setup script for deploying a mail server on Ubuntu. Its goal is to make it easier for people to set up their own mail server.
    
    [:octicons-home-16: Homepage](https://mailinabox.email){ .md-button .md-button--primary }
    [:octicons-info-16:](https://mailinabox.email/guide.html){ .card-link title=Documentation}
    [:octicons-code-16:](https://github.com/mail-in-a-box/mailinabox){ .card-link title="Source Code" }

For a more manual approach we've picked out these two articles:

- [Setting up a mail server with OpenSMTPD, Dovecot and Rspamd](https://poolp.org/posts/2019-09-14/setting-up-a-mail-server-with-opensmtpd-dovecot-and-rspamd/) (2019)
- [How To Run Your Own Mail Server](https://www.c0ffee.net/blog/mail-server-guide/) (August 2017)

## Criteria

**Please note we are not affiliated with any of the providers we recommend.** In addition to [our standard criteria](about/criteria.md), we have developed a clear set of requirements for any Email provider wishing to be recommended, including implementing industry best practices, modern technology and more. We suggest you familiarize yourself with this list before choosing an Email provider, and conduct your own research to ensure the Email provider you choose is the right choice for you.

### Technology

We regard these features as important in order to provide a safe and optimal service. You should consider whether the provider which has the features you require.

**Minimum to Qualify:**

- Encrypts email account data at rest with zero-access encryption.
- Export capability as [Mbox](https://en.wikipedia.org/wiki/Mbox) or individual .eml with [RFC5322](https://datatracker.ietf.org/doc/rfc5322/) standard.
- Allow users to use their own [domain name](https://en.wikipedia.org/wiki/Domain_name). Custom domain names are important to users because it allows them to maintain their agency from the service, should it turn bad or be acquired by another company which doesn't prioritize privacy.
- Operates on owned infrastructure, i.e. not built upon third-party email service providers.

**Best Case:**

- Encrypts all account data (Contacts, Calendars, etc) at rest with zero-access encryption.
- Integrated webmail E2EE/PGP encryption provided as a convenience.
- Support for [WKD](https://wiki.gnupg.org/WKD) to allow improved discovery of public OpenPGP keys via HTTP. GnuPG users can get a key by typing: `gpg --locate-key example_user@example.com`
- Support for a temporary mailbox for external users. This is useful when you want to send an encrypted email, without sending an actual copy to your recipient. These emails usually have a limited lifespan and then are automatically deleted. They also don't require the recipient to configure any cryptography like OpenPGP.
- Availability of the email provider's services via an [onion service](https://en.wikipedia.org/wiki/.onion).
- [Subaddressing](https://en.wikipedia.org/wiki/Email_address#Subaddressing) support.
- Catch-all or alias functionality for those who own their own domains.
- Use of standard email access protocols such as IMAP, SMTP or [JMAP](https://en.wikipedia.org/wiki/JSON_Meta_Application_Protocol). Standard access protocols ensure customers can easily download all of their email, should they want to switch to another provider.

### Privacy

We prefer our recommended providers to collect as little data as possible.

**Minimum to Qualify:**

- Protect sender's IP address. Filter it from showing in the `Received` header field.
- Don't require personally identifiable information (PII) besides a username and a password.
- Privacy policy that meets the requirements defined by the GDPR
- Must not be hosted in the US due to [ECPA](https://en.wikipedia.org/wiki/Electronic_Communications_Privacy_Act#Criticism) which has [yet to be reformed](https://epic.org/ecpa/).

**Best Case:**

- Accepts [anonymous payment options](advanced/payments.md) ([cryptocurrency](cryptocurrency.md), cash, gift cards, etc.)

### Security

Email servers deal with a lot of very sensitive data. We expect that providers will adopt best industry practices in order to protect their members.

**Minimum to Qualify:**

- Protection of webmail with 2FA, such as TOTP.
- Zero access encryption, builds on encryption at rest. The provider does not have the decryption keys to the data they hold. This prevents a rogue employee leaking data they have access to or remote adversary from releasing data they have stolen by gaining unauthorized access to the server.
- [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) support.
- No TLS errors or vulnerabilities when being profiled by tools such as [Hardenize](https://www.hardenize.com/), [testssl.sh](https://testssl.sh/), or [Qualys SSL Labs](https://www.ssllabs.com/ssltest); this includes certificate related errors and weak DH parameters, such as those that led to [Logjam](https://en.wikipedia.org/wiki/Logjam_(computer_security)).
- A server suite preference (optional on TLSv1.3) for strong cipher suites which support forward secrecy and authenticated encryption.
- A valid [MTA-STS](https://tools.ietf.org/html/rfc8461) and [TLS-RPT](https://tools.ietf.org/html/rfc8460) policy.
- Valid [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities) records.
- Valid [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) and [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) records.
- Have a proper [DMARC](https://en.wikipedia.org/wiki/DMARC) record and policy or use [ARC](https://en.wikipedia.org/wiki/Authenticated_Received_Chain) for authentication. If DMARC authentication is being used, the policy must be set to `reject` or `quarantine`.
- A server suite preference of TLS 1.2 or later and a plan for [RFC8996](https://datatracker.ietf.org/doc/rfc8996/).
- [SMTPS](https://en.wikipedia.org/wiki/SMTPS) submission, assuming SMTP is used.
- Website security standards such as:
    - [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
    - [Subresource Integrity](https://en.wikipedia.org/wiki/Subresource_Integrity) if loading things from external domains.
- Must support viewing of [Message headers](https://en.wikipedia.org/wiki/Email#Message_header), as it is a crucial forensic feature to determine if an email is a phishing attempt.

**Best Case:**

- Support for hardware authentication, i.e. U2F and [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn). U2F and WebAuthn are more secure as they use a private key stored on a client-side hardware device to authenticate people, as opposed to a shared secret that is stored on the web server and on the client side when using TOTP. Furthermore, U2F and WebAuthn are more resistant to phishing as their authentication response is based on the authenticated [domain name](https://en.wikipedia.org/wiki/Domain_name).
- [DNS Certification Authority Authorization (CAA) Resource Record](https://tools.ietf.org/html/rfc6844) in addition to DANE support.
- Implementation of [Authenticated Received Chain (ARC)](https://en.wikipedia.org/wiki/Authenticated_Received_Chain), this is useful for people who post to mailing lists [RFC8617](https://tools.ietf.org/html/rfc8617).
- Bug-bounty programs and/or a coordinated vulnerability-disclosure process.
- Website security standards such as:
    - [Content Security Policy (CSP)](https://en.wikipedia.org/wiki/Content_Security_Policy)
    - [RFC9163 Expect-CT](https://datatracker.ietf.org/doc/rfc9163/)

### Trust

You wouldn't trust your finances to someone with a fake identity, so why trust them with your email? We require our recommended providers to be public about their ownership or leadership. We also would like to see frequent transparency reports, especially in regard to how government requests are handled.

**Minimum to Qualify:**

- Public-facing leadership or ownership.

**Best Case:**

- Public-facing leadership.
- Frequent transparency reports.

### Marketing

With the email providers we recommend we like to see responsible marketing.

**Minimum to Qualify:**

- Must self-host analytics (no Google Analytics, Adobe Analytics, etc). The provider's site must also comply with [DNT (Do Not Track)](https://en.wikipedia.org/wiki/Do_Not_Track) for those who wish to opt-out.

Must not have any marketing which is irresponsible:

- Claims of "unbreakable encryption." Encryption should be used with the intention that it may not be secret in the future when the technology exists to crack it.
- Making guarantees of protecting anonymity 100%. When someone makes a claim that something is 100% it means there is no certainty for failure. We know people can quite easily deanonymize themselves in a number of ways, e.g.:

- Reusing personal information e.g. (email accounts, unique pseudonyms, etc) that they accessed without anonymity software (Tor, VPN, etc)
- [Browser fingerprinting](https://en.wikipedia.org/wiki/Device_fingerprint#Browser_fingerprint)

**Best Case:**

- Clear and easy to read documentation. This includes things like, setting up 2FA, email clients, OpenPGP, etc.

### Additional Functionality

While not strictly requirements, there are some other convenience or privacy factors we looked into when determining which providers to recommend.

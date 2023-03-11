---
title: E-postsäkerhet
icon: material/email
description: Email is inherently insecure in many ways, and these are some of the reasons it isn't our top choice for secure communications.
---

E-post är som standard en osäker kommunikationsform. Du kan förbättra din e-postsäkerhet med verktyg som OpenPGP, som lägger till End-to-End-kryptering till dina meddelanden, men OpenPGP har fortfarande ett antal nackdelar jämfört med kryptering i andra meddelandeprogram, och vissa e-postdata kan aldrig krypteras av naturliga skäl på grund av hur e-post är utformad.

E-post används därför bäst för att ta emot transaktionsmeddelanden (t. ex. meddelanden, verifieringsmeddelanden, lösenordsåterställning osv.) från de tjänster du registrerar dig för online, inte för att kommunicera med andra.

## E-post-krypteringsnycklar

Standardmetoden för att lägga till E2EE i e-postmeddelanden mellan olika e-postleverantörer är att använda OpenPGP. Det finns olika implementeringar av OpenPGP-standarden, de vanligaste är [GnuPG](https://en.wikipedia.org/wiki/GNU_Privacy_Guard) och [OpenPGP.js](https://openpgpjs.org).

Det finns en annan standard som är populär bland företag och som heter [S/MIME](https://en.wikipedia.org/wiki/S/MIME), men den kräver ett certifikat som utfärdats av en [Certifikatmyndighet](https://en.wikipedia.org/wiki/Certificate_authority) (alla utfärdar inte S/MIME-certifikat). Den har stöd för [Google Workplace](https://support.google.com/a/topic/9061730?hl=en&ref_topic=9061731) och [Outlook for Web eller Exchange Server 2016, 2019](https://support.office.com/en-us/article/encrypt-messages-by-using-s-mime-in-outlook-on-the-web-878c79fc-7088-4b39-966f-14512658f480).

Även om du använder OpenPGP har det inte stöd för [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy), vilket innebär att om antingen din eller mottagarens privata nyckel någonsin stjäls kommer alla tidigare meddelanden som krypterats med den att avslöjas. Det är därför vi rekommenderar [snabbmeddelanden](../real-time-communication.md) som implementerar vidarebefordran av sekretess via e-post för person-till-person-kommunikation när det är möjligt.

### Vilka e-postklienter stöder E2EE?

E-postleverantörer som tillåter dig att använda standardprotokoll som IMAP och SMTP kan användas med någon av de e-postklienter på [som vi rekommenderar](../email-clients.md). Beroende på autentiseringsmetoden kan detta leda till sämre säkerhet om leverantören eller e-postklienten inte stöder OATH eller en bryggapplikation, eftersom [multi-faktorautentisering](multi-factor-authentication.md) inte är möjlig med vanlig lösenordsautentisering.

### Hur skyddar jag mina privata nycklar?

Ett smartkort (t.ex. [Yubikey](https://support.yubico.com/hc/en-us/articles/360013790259-Using-Your-YubiKey-with-OpenPGP) eller [Nitrokey](https://www.nitrokey.com)) fungerar genom att ta emot ett krypterat e-postmeddelande från en enhet (telefon, surfplatta, dator osv.) som kör en e-post-/webbmail-klient. Meddelandet dekrypteras sedan av smartkortet och det dekrypterade innehållet skickas tillbaka till enheten.

Det är fördelaktigt att dekrypteringen sker på smartkortet för att undvika att den privata nyckeln exponeras för en komprometterad enhet.

## Översikt över metadata för e-post

E-postmetadata lagras i e-postmeddelandets [meddelandehuvud](https://en.wikipedia.org/wiki/Email#Message_header) och innehåller några synliga rubriker som du kanske har sett, t.ex: `To`, `From`, `Cc`, `Date`, `Subject`. Det finns också ett antal dolda rubriker som ingår i många e-postklienter och e-postleverantörer och som kan avslöja information om ditt konto.

Klientprogram kan använda metadata för e-post för att visa vem ett meddelande är från och när det togs emot. Servrar kan använda den för att avgöra var ett e-postmeddelande måste skickas, bland [andra ändamål](https://en.wikipedia.org/wiki/Email#Message_header) som inte alltid är transparenta.

### Vem kan se metadata för e-post?

E-postmetadata skyddas från utomstående observatörer med [Opportunistic TLS](https://en.wikipedia.org/wiki/Opportunistic_TLS) som skyddar dem från utomstående observatörer, men de kan fortfarande ses av din e-postklientprogramvara (eller webbmail) och alla servrar som vidarebefordrar meddelandet från dig till mottagare, inklusive din e-postleverantör. Ibland använder e-postservrar också tjänster från tredje part för att skydda sig mot skräppost, som i allmänhet också har tillgång till dina meddelanden.

### Varför kan metadata inte vara E2EE?

Metadata för e-post är avgörande för e-postens mest grundläggande funktionalitet (varifrån den kom och vart den ska ta vägen). E2EE var ursprungligen inte inbyggt i e-postprotokollen, utan krävde istället tilläggsprogram som OpenPGP. Eftersom OpenPGP-meddelanden fortfarande måste fungera med traditionella e-postleverantörer kan de inte kryptera metadata, utan endast själva meddelandet. Det innebär att även om du använder OpenPGP kan utomstående observatörer se mycket information om dina meddelanden, t. ex. vem du skickar e-post till, ämnesraden, när du skickar e-post osv.

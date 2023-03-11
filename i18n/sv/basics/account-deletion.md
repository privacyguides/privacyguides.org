---
title: "Account Deletion"
icon: 'material/account-remove'
description: It's easy to accumulate a large number of internet accounts, here are some tips on how to prune your collection.
---

Over time, it can be easy to accumulate a number of online accounts, many of which you may no longer use. Deleting these unused accounts is an important step in reclaiming your privacy, as dormant accounts are vulnerable to data breaches. A data breach is when a service's security is compromised and protected information is viewed, transmitted, or stolen by unauthorized actors. Data breaches are unfortunately all [too common](https://haveibeenpwned.com/PwnedWebsites) these days, and so practicing good digital hygiene is the best way to minimize the impact they have on your life. The goal of this guide then is to help navigate you through the irksome process of account deletion, often made difficult by [deceptive design](https://www.deceptive.design/), for the betterment of your online presence.

## Finding Old Accounts

### Password Manager

If you have a password manager that you've used for your entire digital life, this part will be very easy. Oftentimes, they include built-in functionality for detecting if your credentials were exposed in a data breach—such as Bitwarden's [Data Breach Report](https://bitwarden.com/blog/have-you-been-pwned/).

<figure markdown>
  ![Bitwarden's Data Breach Report feature](../assets/img/account-deletion/exposed_passwords.png)
</figure>

Even if you haven't explicitly used a password manager before, there's a chance you've used the one in your browser or your phone without even realizing it. For example: [Firefox Password Manager](https://support.mozilla.org/kb/password-manager-remember-delete-edit-logins), [Google Password Manager](https://passwords.google.com/intro) and [Edge Password Manager](https://support.microsoft.com/en-us/microsoft-edge/save-or-forget-passwords-in-microsoft-edge-b4beecb0-f2a8-1ca0-f26f-9ec247a3f336).

Desktop platforms also often have a password manager which may help you recover passwords you've forgotten about:

- Windows [Credential Manager](https://support.microsoft.com/en-us/windows/accessing-credential-manager-1b5c916a-6a16-889f-8581-fc16e8165ac0)
- macOS [Passwords](https://support.apple.com/en-us/HT211145)
- iOS [Passwords](https://support.apple.com/en-us/HT211146)
- Linux, Gnome Keyring, which can be accessed through [Seahorse](https://help.gnome.org/users/seahorse/stable/passwords-view.html.en) or [KDE Wallet Manager](https://userbase.kde.org/KDE_Wallet_Manager)

### E-postadress

If you didn't use a password manager in the past or you think you have accounts that were never added to your password manager, another option is to search the email account(s) that you believe you signed up on. On your email client, search for keywords such as "verify" or "welcome." Almost every time you make an online account, the service will send a verification link or an introductory message to your email. This can be a good way to find old, forgotten accounts.

## Deleting Old Accounts

### Log In

In order to delete your old accounts, you'll need to first make sure you can log in to them. Again, if the account was in your password manager, this step is easy. If not, you can try to guess your password. Failing that, there are typically options to regain access to your account, commonly available through a "forgot password" link on the login page. It may also be possible that accounts you've abandoned have already been deleted—sometimes services prune all old accounts.

When attempting to regain access, if the site returns an error message saying that email is not associated with an account, or you never receive a reset link after multiple attempts, then you do not have an account under that email address and should try a different one. If you can't figure out which email address you used, or you no longer have access to that email, you can try contacting the service's customer support. Unfortunately, there is no guarantee that you will be able to reclaim access your account.

### GDPR (EEA residents only)

Residents of the EEA have additional rights regarding data erasure specified in [Article 17](https://www.gdpr.org/regulation/article-17.html) of the GDPR. If it's applicable to you, read the privacy policy for any given service to find information on how to exercise your right to erasure. Reading the privacy policy can prove important, as some services have a "Delete Account" option that only disables your account and for real deletion you have to take additional action. Sometimes actual deletion may involve filling out surveys, emailing the data protection officer of the service or even proving your residence in the EEA. If you plan to go this way, do **not** overwrite account information—your identity as an EEA resident may be required. Note that the location of the service does not matter; GDPR applies to anyone serving European users. Om tjänsten inte respekterar din rätt till radering kan du kontakta din nationella dataskyddsmyndighet [](https://ec.europa.eu/info/law/law-topic/data-protection/reform/rights-citizens/redress/what-should-i-do-if-i-think-my-personal-data-protection-rights-havent-been-respected_en) och du kan ha rätt till ekonomisk kompensation.

### Överskrivning av kontoinformation

I vissa situationer där du planerar att överge ett konto kan det vara klokt att skriva över kontoinformationen med falska uppgifter. När du har sett till att du kan logga in kan du ändra all information i ditt konto till förfalskad information. Anledningen till detta är att många webbplatser kommer att behålla information som du tidigare hade även efter att kontot raderats. Förhoppningen är att de kommer att skriva över den tidigare informationen med de senaste uppgifterna du angav. Det finns dock ingen garanti för att det inte kommer att finnas säkerhetskopior med den tidigare informationen.

För e-postkontot skapar du antingen ett nytt alternativt e-postkonto via din valfria leverantör eller skapar ett alias med hjälp av en e-postaliaseringstjänst på [](../email.md#email-aliasing-services). Du kan sedan ta bort din alternativa e-postadress när du är klar. Vi rekommenderar att du inte använder tillfälliga e-postleverantörer, eftersom det ofta är möjligt att återaktivera tillfälliga e-postmeddelanden.

### Radera

Du kan kontrollera [JustDeleteMe](https://justdeleteme.xyz) för instruktioner om hur du tar bort kontot för en specifik tjänst. Vissa webbplatser har ett alternativ för att ta bort kontot, medan andra går så långt som att tvinga dig att prata med en supportmedarbetare. Raderingen kan variera från webbplats till webbplats, och på vissa webbplatser är det omöjligt att radera konton.

För tjänster som inte tillåter radering av konton är det bästa du kan göra att förfalska all din information som tidigare nämnts och stärka kontosäkerheten. För att göra det, aktivera [MFA](multi-factor-authentication.md) och eventuella extra säkerhetsfunktioner som erbjuds. Ändra också lösenordet till ett slumpmässigt genererat lösenord som har den högsta tillåtna storleken (en lösenordshanterare [](../passwords.md) kan vara användbar för detta).

Om du är nöjd med att all information du bryr dig om tas bort kan du säkert glömma det här kontot. Om inte kan det vara en bra idé att spara uppgifterna tillsammans med dina andra lösenord och ibland logga in igen för att återställa lösenordet.

Även om du kan radera ett konto finns det ingen garanti för att all din information tas bort. Vissa företag är faktiskt skyldiga enligt lag att spara viss information, särskilt när det gäller finansiella transaktioner. Det är mestadels utom din kontroll vad som händer med dina data när det gäller webbplatser och molntjänster.

## Undvik nya konton

Som det gamla talesättet säger: "Ett uns av förebyggande åtgärder är värt ett pund av botemedel" När du känner dig frestad att registrera dig för ett nytt konto, fråga dig själv, "Behöver jag verkligen det här? Kan jag uppnå det jag behöver utan ett konto?" Det kan ofta vara mycket svårare att radera ett konto än att skapa ett. Och även efter att du har raderat eller ändrat informationen på ditt konto kan det finnas en cachad version från en tredje part, till exempel [Internet Archive](https://archive.org/). Undvik frestelsen när du kan - ditt framtida jag kommer att tacka dig!

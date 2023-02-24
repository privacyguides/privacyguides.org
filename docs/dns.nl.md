---
title: "DNS-resolvers"
icon: material/dns
---

!!! question "Moet ik gecodeerde DNS gebruiken?"

    Gecodeerde DNS met servers van derden mag alleen worden gebruikt om basis [DNS-blokkering](https://en.wikipedia.org/wiki/DNS_blocking) te omzeilen als u er zeker van kunt zijn dat er geen gevolgen zullen zijn. Gecodeerde DNS zal u niet helpen uw surfactiviteiten te verbergen.
    
    [Leer meer over DNS](basics/dns-overview.md){ .md-button }

## Aanbevolen Aanbieders

| DNS-aanbieder                                                                   | Privacybeleid                                                                                         | Protocollen                                                 | Loggen        | ECS       | Filteren                                                                                                                                                  |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**AdGuard**](https://adguard.com/en/adguard-dns/overview.html)                 | [:octicons-link-external-24:](https://adguard.com/en/privacy/dns.html)                                | Cleartext <br> DoH <br> DoT <br> DNSCrypt | Sommige[^1]   | Nee       | Gebaseerd op server keuze. De filterlijst die wordt gebruikt, is hier te vinden. [:octicons-link-external-24:](https://github.com/AdguardTeam/AdGuardDNS) |
| [**Cloudflare**](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/) | [:octicons-link-external-24:](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/) | Cleartext <br> DoH <br> DoT                     | Sommige[^2]   | Nee       | Gebaseerd op server keuze.                                                                                                                                |
| [**Control D**](https://controld.com/free-dns)                                  | [:octicons-link-external-24:](https://controld.com/privacy)                                           | Cleartext <br> DoH <br> DoT <br> DNSCrypt | Optioneel[^3] | Nee       | Gebaseerd op server keuze.                                                                                                                                |
| [**Mullvad**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)      | [:octicons-link-external-24:](https://mullvad.net/en/help/no-logging-data-policy/)                    | DoH <br> DoT                                          | Geen[^4]      | Nee       | Gebaseerd op server keuze. De filterlijst die wordt gebruikt, is hier te vinden. [:octicons-link-external-24:](https://github.com/mullvad/dns-adblock)    |
| [**NextDNS**](https://www.nextdns.io)                                           | [:octicons-link-external-24:](https://www.nextdns.io/privacy)                                         | Cleartext <br> DoH <br> DoT <br> DNSCrypt | Optioneel[^5] | Optioneel | Gebaseerd op server keuze.                                                                                                                                |
| [**Quad9**](https://quad9.net)                                                  | [:octicons-link-external-24:](https://quad9.net/privacy/policy/)                                      | Cleartext <br> DoH <br> DoT <br> DNSCrypt | Sommige[^6]   | Optioneel | Gebaseerd op server keuze, Malware blokkering standaard.                                                                                                  |

## Criteria

**Wij zijn niet verbonden aan de projecten die wij aanbevelen.** Naast [onze standaardcriteria](about/criteria.md)hebben wij een duidelijke reeks eisen ontwikkeld om objectieve aanbevelingen te kunnen doen. Wij stellen voor dat je zich vertrouwd maakt met deze lijst voordat je een project kiest, en jouw eigen onderzoek uitvoert om er zeker van te zijn dat het de juiste keuze voor je is.

Android 9 en hoger ondersteunen DNS over TLS. example "Deze sectie is nieuw"

    We werken aan het vaststellen van gedefinieerde criteria voor elk deel van onze site, en dit kan onderhevig zijn aan verandering. Als u vragen hebt over onze criteria, stel ze dan [op ons forum](https://discuss.privacyguides.net/latest) en neem niet aan dat we iets niet in overweging hebben genomen bij het opstellen van onze aanbevelingen als het hier niet vermeld staat. Er zijn veel factoren die worden overwogen en besproken wanneer wij een project aanbevelen, en het documenteren van elke factor is een werk in uitvoering.

- Moet [DNSSEC](basics/dns-overview.md#what-is-dnssec)ondersteunen
- [QNAME Minimalisatie](advanced/dns-overview.md#what-is-qname-minimization).
- Toestaan dat [ECS](advanced/dns-overview.md#what-is-edns-client-subnet-ecs) wordt uitgeschakeld.
- Toestaan dat [ECS](basics/dns-overview.md#what-is-edns-client-subnet-ecs) wordt uitgeschakeld

## Ondersteuning voor besturingssystemen

### Android

Android 9 en hoger ondersteunen DNS over TLS. De instellingen kunnen worden gevonden in: **Instellingen** &rarr; **Netwerk & Internet** &rarr; **Private DNS**.

### Apple apparaten

De nieuwste versies van iOS, iPadOS, tvOS en macOS ondersteunen zowel DoT als DoH. Beide protocollen worden ondersteund via [configuratieprofielen](https://support.apple.com/guide/security/configuration-profile-enforcement-secf6fb9f053/web) of via de [DNS Settings API](https://developer.apple.com/documentation/networkextension/dns_settings).

Apple biedt geen native interface voor het aanmaken van gecodeerde DNS-profielen. Als een VPN actief is, zal de resolutie binnen de VPN-tunnel de DNS-instellingen van het VPN gebruiken en niet uw systeembrede instellingen.

#### Ondertekende Profielen

Apple biedt geen native interface voor het maken van versleutelde DNS-profielen. [Secure DNS profile creator](https://dns.notjakob.com/tool.html) is een onofficiële tool voor het maken van uw eigen versleutelde DNS-profielen, die echter niet worden ondertekend. Ondertekende profielen hebben de voorkeur; ondertekening valideert de oorsprong van een profiel en helpt de integriteit van de profielen te waarborgen. Een groen "Geverifieerd" label wordt gegeven aan ondertekende configuratieprofielen. Voor meer informatie over het ondertekenen van codes, zie [Over het ondertekenen van codes](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html). **Ondertekende profielen** worden aangeboden door [AdGuard](https://adguard.com/en/blog/encrypted-dns-ios-14.html), [NextDNS](https://apple.nextdns.io), en [Quad9](https://www.quad9.net/news/blog/ios-mobile-provisioning-profiles/).

!!! info

    `<code>systemd-resolved, die veel Linux distributies gebruiken om hun DNS lookups te doen, ondersteunt nog niet [DoH](https://github.com/systemd/systemd/issues/8639)). Als je DoH wilt gebruiken, moet je een proxy installeren zoals [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) en [configureren](https://wiki.archlinux.org/title/Dnscrypt-proxy) om alle DNS queries van je systeem-resolver te nemen en ze over HTTPS door te sturen.
    </code>

## Versleutelde DNS-proxy 's

Versleutelde DNS proxy software biedt een lokale proxy voor de [onversleutelde DNS](advanced/dns-overview.md#unencrypted-dns) resolver om naar door te sturen. Typisch wordt het gebruikt op platformen die [versleutelde DNS](advanced/dns-overview.md#what-is-encrypted-dns)niet ond ersteunen.

### RethinkDNS

!!! aanbeveling

    RethinkDNS logo](assets/img/android/rethinkdns.svg#only-light){ align=right }
    RethinkDNS logo](assets/img/android/rethinkdns-dark.svg#only-dark){ align=right }
    
    **RethinkDNS** is een open-source Android client met ondersteuning voor [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), [DNS-over-TLS](advanced/dns-overview.md#dns-over-tls-dot), [DNSCrypt](advanced/dns-overview.md#dnscrypt) en DNS Proxy samen met het cachen van DNS antwoorden, lokaal loggen van DNS queries en kan ook gebruikt worden als firewall.
    
    [:octicons-home-16: Homepage](https://rethinkdns.com){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://rethinkdns.com/privacy){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.rethinkdns.com/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/celzero/rethink-app){ .card-link title="Broncode" }
    
    ??? downloads
    
        - [:simple-googleplay: Google Play](https://play.google.com/store/apps/details?id=com.celzero.bravedns)
        - [:simple-github: Web](https://github.com/celzero/rethink-app/releases)

### dnscrypt-proxy

!!! aanbeveling

    dnscrypt-proxy logo](assets/img/dns/dnscrypt-proxy.svg){ align=right }
    
    **dnscrypt-proxy** is een DNS-proxy met ondersteuning voor [DNSCrypt](advanced/dns-overview.md#dnscrypt), [DNS-over-HTTPS](advanced/dns-overview.md#dns-over-https-doh), en [Anonymized DNS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Anonymized-DNS).
    
    AdGuard Home beschikt over een gepolijste webinterface om inzichten te bekijken en geblokkeerde inhoud te beheren. warning "De geanonimiseerde DNS-functie anonimiseert [**niet**](advanced/dns-overview.md#why-shouldnt-i-use-encrypted-dns) ander netwerkverkeer."
    
    [:octicons-repo-16: Repository](https://github.com/DNSCrypt/dnscrypt-proxy){ .md-button .md-button--primary }
    [:octicons-info-16:](https://github.com/DNSCrypt/dnscrypt-proxy/wiki){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/DNSCrypt/dnscrypt-proxy){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://opencollective.com/dnscrypt/contribute){ .card-link title=Bijdrage leveren }
    
    ??? downloads
    
        - [:simple-windows11: Windows](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-Windows)
        - [:simple-apple: macOS](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-macOS)
        - [:simple-linux: Linux](https://github.com/DNSCrypt/dnscrypt-proxy/wiki/Installation-linux)

## Zelf gehoste oplossingen

Een zelf gehoste DNS-oplossing is handig voor het bieden van filtering op gecontroleerde platforms, zoals Smart TV's en andere IoT-apparaten, omdat er geen client-side software nodig is.

### AdGuard Home

Gecodeerde DNS proxy software biedt een lokale proxy voor de [onversleutelde DNS](basics/dns-overview.md#unencrypted-dns) resolver om naar door te sturen. Typisch wordt het gebruikt op platformen die [gecodeerde DNS](basics/dns-overview.md#what-is-encrypted-dns)niet ond ersteunen.

    AdGuard Home logo](assets/img/dns/adguard-home.svg){ align=right }
    
    **AdGuard Home** is een open-source [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) die gebruik maakt van [DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) om ongewenste webinhoud, zoals advertenties, te blokkeren.
    
    AdGuard Home beschikt over een gepolijste webinterface om inzicht te kijken en geblokkeerde inhoud te beheren.
    
    [:octicons-home-16: Homepage](https://adguard.com/adguard-home/overview.html){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://adguard.com/privacy/home.html){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://github.com/AdguardTeam/AdGuardHome/wiki){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/AdguardTeam/AdGuardHome){ .card-link title="Broncode" }

### Pi-hole

!!! aanbeveling

    Pi-hole logo](assets/img/dns/pi-hole.svg){ align=right }
    
    **Pi-hole** is een open-source [DNS-sinkhole](https://wikipedia.org/wiki/DNS_sinkhole) die [DNS filtering](https://www.cloudflare.com/learning/access-management/what-is-dns-filtering/) gebruikt om ongewenste webinhoud, zoals advertenties, te blokkeren.
    
    Pi-hole is ontworpen om te worden gehost op een Raspberry Pi, maar het is niet beperkt tot dergelijke hardware. De software beschikt over een vriendelijke webinterface om inzichten te bekijken en geblokkeerde inhoud te beheren.
    
    [:octicons-home-16: Homepage](https://pi-hole.net/){ .md-button .md-button--primary }
    [:octicons-eye-16:](https://pi-hole.net/privacy/){ .card-link title="Privacy Policy" }
    [:octicons-info-16:](https://docs.pi-hole.net/){ .card-link title=Documentatie}
    [:octicons-code-16:](https://github.com/pi-hole/pi-hole){ .card-link title="Broncode" }
    [:octicons-heart-16:](https://pi-hole.net/donate){ .card-link title=Bijdragen }

[^1]: AdGuard slaat geaggregeerde prestatiecijfers van hun DNS-servers op, namelijk het aantal volledige verzoeken aan een bepaalde server, het aantal geblokkeerde verzoeken, en de snelheid waarmee verzoeken worden verwerkt. Zij houden ook de database bij van domeinen die in de laatste 24 uur zijn aangevraagd. "We hebben deze informatie nodig om nieuwe trackers en bedreigingen te identificeren en te blokkeren." "We houden ook bij hoe vaak deze of gene tracker geblokkeerd is. We hebben deze informatie nodig om verouderde regels uit onze filters te verwijderen." [https://adguard.com/en/privacy/dns.html](https://adguard.com/en/privacy/dns.html)
[^2]: Cloudflare verzamelt en bewaart alleen de beperkte DNS-querygegevens die naar de 1.1.1.1 resolver worden gestuurd. De 1.1.1.1 resolver dienst logt geen persoonsgegevens, en het grootste deel van de beperkte niet-persoonlijk identificeerbare query-gegevens wordt slechts 25 uur bewaard. [https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/](https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/)
[^3]: Control D logt alleen voor Premium resolvers met aangepaste DNS-profielen. Vrije resolvers loggen geen gegevens. [https://controld.com/privacy](https://controld.com/privacy)
[^4]: De DNS-service van Mullvad is beschikbaar voor zowel abonnees als niet-abonnees van Mullvad VPN. Hun privacybeleid beweert expliciet dat zij op geen enkele manier DNS-verzoeken loggen. [https://mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)
[^5]: NextDNS kan inzichten en loggingfuncties bieden op een opt-in basis. U kunt retentietijden en opslaglocaties kiezen voor de logs die je wilt bewaren. Als er niet specifiek om gevraagd wordt, worden er geen gegevens gelogd. [https://nextdns.io/privacy](https://nextdns.io/privacy)
[^6]: Quad9 verzamelt sommige gegevens ten behoeve van de monitoring van en reactie op bedreigingen. Die gegevens kunnen vervolgens opnieuw worden gemengd en gedeeld, bijvoorbeeld ten behoeve van veiligheidsonderzoek. Quad9 verzamelt of registreert geen IP-adressen of andere gegevens die zij als persoonlijk identificeerbaar beschouwt. [https://www.quad9.net/privacy/policy/](https://www.quad9.net/privacy/policy/)

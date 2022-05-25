---
title: "Calendar and Contact Sync"
icon: material/calendar
---
Calendaring and contacts are some of the most sensitive data posess. Use only products that use E2EE at rest. This prevents a provider from reading your data.

## Cloud/SaaS Providers

These products are included with an subscription with their respective [email providers](email.md).

### Tutanota

!!! recommendation

    ![Tutanota logo](assets/img/calendar-contacts/tutanota.svg#only-light){ align=right }
    ![Tutanota logo](assets/img/calendar-contacts/tutanota-dark.svg#only-dark){ align=right }

    **Tutanota** offers a free and encrypted calendar across their supported platforms. Features include: automatic E2EE of all data, sharing features, import/export functionality, and [more](https://tutanota.com/calendar-app-comparison/). Multiple calendars and extended sharing functionality is limited to paid subscribers.

    [Website](https://tutanota.com/calendar){ .md-button .md-button--primary } [Privacy Policy](https://tutanota.com/privacy){ .md-button }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://tutanota.com/blog/posts/desktop-clients/)
        - [:fontawesome-brands-apple: macOS](https://tutanota.com/blog/posts/desktop-clients/)
        - [:fontawesome-brands-linux: Linux](https://tutanota.com/blog/posts/desktop-clients/)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/com.tutanota.Tutanota)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=de.tutao.tutanota)
        - [:pg-f-droid: F-Droid](https://f-droid.org/en/packages/de.tutao.tutanota)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/tutanota/id922429609)
        - [:fontawesome-brands-github: Source](https://github.com/tutao/tutanota)

### Proton Calendar

!!! recommendation

    ![Proton Calendar logo](assets/img/calendar-contacts/proton-calendar.svg){ align=right }

    **Proton Calendar** is an encrypted calendar serivce available to Proton Mail members. Features include: automatic E2EE of all data, sharing features, import/export functionality, and [more](https://proton.me/support/proton-calendar-guide). Those on the free tier get access to a single calendar, whereas paid subscribers can create up to 20 calendars. Extended sharing functionality is also limited to paid subscribers. Proton Calendar is currently only available for the web and Android.

    [Website](https://proton.me/calendar){ .md-button .md-button--primary } [Privacy Policy](https://proton.me/legal/privacy){ .md-button }

    ??? downloads

        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=me.proton.android.calendar)
        - [:fontawesome-brands-github: Source](https://github.com/ProtonMail/WebClients)

## Self-hostable

Some of these options are self-hostable, but could be offered by third party SaaS providers for a fee:

### EteSync

!!! recommendation

    ![EteSync logo](assets/img/calendar-contacts/etesync.svg){ align=right }

    **EteSync** is a secure, end-to-end encrypted, and privacy-respecting cloud backup and synchronization software for your personal information (e.g. contacts and calendars). There are native clients for Android, iOS, and the web, and an adapter layer for most desktop clients.

    EteSync also offers optional software as a service for [$24 per year](https://dashboard.etebase.com/user/partner/pricing/) to use, or you can host the server yourself for free.

    [Website](https://www.etesync.com){ .md-button .md-button--primary } [Privacy Policy](https://www.etesync.com/tos/#privacy){ .md-button }

    ??? downloads

        - [:fontawesome-solid-earth-americas: Client Instructions](https://github.com/etesync/etesync-dav/blob/master/README.md#specific-client-notes-and-instructions)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.etesync.syncadapter)
        - [:pg-f-droid: F-Droid](https://f-droid.org/app/com.etesync.syncadapter)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/apple-store/id1489574285)
        - [:fontawesome-brands-github: Source](https://github.com/etesync)

### Nextcloud

!!! recommendation

    ![Nextcloud logo](assets/img/calendar-contacts/nextcloud.svg){ align=right }

    **Nextcloud** is a suite of client-server software for creating and using file hosting services. This includes calendar sync via CalDAV and contacts sync via CardDAV. Nextcloud is free and open-source, thereby allowing anyone to install and operate it without charge on a private server.

    You can self host Nextcloud or pay for service from a [provider](https://nextcloud.com/signup/).

    [Homepage](https://nextcloud.com/){ .md-button .md-button--primary }

    ??? downloads

        - [:fontawesome-brands-windows: Windows](https://nextcloud.com/install/#install-clients)
        - [:fontawesome-brands-apple: macOS](https://nextcloud.com/install/#install-clients)
        - [:fontawesome-brands-linux: Linux](https://nextcloud.com/install/#install-clients)
        - [:pg-flathub: Flatpak](https://flathub.org/apps/details/com.nextcloud.desktopclient.nextcloud)
        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=com.nextcloud.client)
        - [:pg-f-droid: F-Droid](https://f-droid.org/packages/com.nextcloud.client)
        - [:fontawesome-brands-app-store-ios: App Store](https://apps.apple.com/us/app/nextcloud/id1125420102)
        - [:fontawesome-brands-github: Source](https://github.com/nextcloud)

### DecSync CC

!!! recommendation

    ![DecSync logo](assets/img/calendar-contacts/decsync.svg){ align=right }

    **DecSync CC** synchronizes contacts, calendars and tasks using DecSync. It stores this data in a shared directory, using [Syncthing](file-sharing/#syncthing), or any other file synchronization service.

    There are [plugins](https://github.com/39aldo39/DecSync#rss) to sync other types of data such as [RSS](news-aggregators.md).

    [Project Info](https://github.com/39aldo39/DecSync#readme){ .md-button .md-button--primary }

    ??? downloads

        - [:fontawesome-brands-google-play: Google Play](https://play.google.com/store/apps/details?id=org.decsync.cc)
        - [:pg-f-droid: F-Droid](https://f-droid.org/packages/org.decsync.cc)

--8<-- "includes/abbreviations.en.md"

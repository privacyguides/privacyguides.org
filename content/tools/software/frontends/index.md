---
title: "Frontends"
description: These open-source frontends for various internet services allow you to access content without JavaScript or other annoyances.
aliases:
- /frontends
- /en/frontends
---
<small>Protects against the following threat(s):</small>
[{{< badge content="Surveillance Capitalism" color="purple" >}}](../../../wiki/basics/common-threats/index.md#surveillance-as-a-business-model)

Sometimes services will try to force you to sign up for an account by blocking access to content with annoying popups. They might also break without JavaScript enabled. These frontends can allow you to circumvent these restrictions.

If you choose to self-host these frontends, it is important that you have other people using your instance as well in order for you to blend in. You should be careful with where and how you are hosting, as other peoples' usage will be linked to your hosting.

When you are using an instance run by someone else, make sure to read the privacy policy of that specific instance (if available). They can be modified by their owners and therefore may not reflect the default policy. Some instances have [Tor](../tor/index.md) .onion addresses, which may grant some privacy as long as your search queries don't contain personally identifiable information.

<div class="pg-card-logos">
{{< cards >}}
  {{< card link="#redlib" title="Redlib" image="./redlib.svg" subtitle="Redlib is an open-source frontend to the Reddit website that is also self-hostable. You can access Redlib through a number of public instances." >}}
  {{< card link="#invidious" title="Invidious" image="./invidious.svg" subtitle="Invidious is a free and open-source frontend for YouTube that is also self-hostable." >}}
  {{< card link="#piped" title="Piped" image="./piped.svg" subtitle="Piped is a free and open-source frontend for YouTube that is also self-hostable." >}}
  {{< card link="#freetube" title="FreeTube" image="./freetube.svg" subtitle="FreeTube is a free and open-source desktop application for YouTube. FreeTube extracts data from YouTube using its built-in API based on YouTube.js or the Invidious API." >}}
  {{< card link="#libretube-android" title="LibreTube" image="./libretube.svg" subtitle="LibreTube is a free and open-source Android application for YouTube which uses the Piped API." >}}
  {{< card link="#newpipe-android" title="NewPipe" image="./newpipe.svg" subtitle="NewPipe is a free and open-source Android application for YouTube, SoundCloud, media.ccc.de, Bandcamp, and PeerTube (1)." >}}
{{< /cards >}}
</div>

## Reddit

### Redlib

{{< title-card logo="./redlib.svg" >}}

**Redlib** is an open-source frontend to the [Reddit](https://reddit.com) website that is also self-hostable. You can access Redlib through a number of public instances.

{{< cards >}}
  {{< card link="https://github.com/redlib-org/redlib#readme" title="Repository" icon="code" >}}
  {{< card link="https://github.com/redlib-org/redlib-instances/blob/main/instances.md" title="Public Instances" icon="server" >}}
{{< /cards >}}

{{< /title-card >}}

> [!NOTE]
> The [Old Reddit](https://old.reddit.com) website doesn't require as much JavaScript as the new Reddit website does, but it has recently blocked access to IP addresses reserved for public VPNs. You can use Old Reddit in conjunction with the [Tor](../tor/index.md) Onion that was [launched in October 2022](https://forum.torproject.org/t/reddit-onion-service-launch/5305) at [https://old.reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion](https://old.reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion).


> [!TIP]
> Redlib is useful if you want to disable JavaScript in your browser, such as [Tor Browser](../tor/index.md#tor-browser) on the Safest security level.

## YouTube

**Note:** YouTube has gradually rolled out changes to its video player and API that have thwarted some of the methods used by third-party frontends for extracting YouTube data. If you experience reliability issues with one YouTube frontend, consider trying out another that uses a different extraction method.

### Invidious

{{< title-card logo="./invidious.svg" >}}

**Invidious** is a free and open-source frontend for [YouTube](https://youtube.com) that is also self-hostable.

There are a number of public instances, with some that offer a [Tor](../tor/index.md) onion service or an [I2P](../../advanced/alternative-networks/index.md#i2p-the-invisible-internet-project) eepsite.

{{< cards >}}
  {{< card link="https://invidious.io" title="Homepage" icon="home" >}}
  {{< card link="https://docs.invidious.io/instances" title="Public Instances" icon="server" >}}
{{< /cards >}}

{{< /title-card >}}

> [!WARNING]
> Invidious does not proxy video streams by default. Videos watched through Invidious will still make direct connections to Google's servers (e.g. `googlevideo.com`); however, some instances support video proxying—simply enable *Proxy videos* within the instances' settings or add `&local=true` to the URL.


> [!TIP]
> Invidious is useful if you want to disable JavaScript in your browser, such as [Tor Browser](../tor/index.md#tor-browser) on the Safest security level. It does not provide privacy by itself, and we don’t recommend logging into any accounts.


### Piped

{{< title-card logo="./piped.svg" >}}

**Piped** is a free and open-source frontend for [YouTube](https://youtube.com) that is also self-hostable.

Piped requires JavaScript in order to function and there are a number of public instances.

{{< cards >}}
  {{< card link="https://github.com/TeamPiped/Piped#readme" title="Repository" icon="code" >}}
  {{< card link="https://github.com/TeamPiped/documentation/blob/main/content/docs/public-instances/index.md" title="Public Instances" icon="server" >}}
{{< /cards >}}

{{< /title-card >}}

> [!TIP]
> Piped is useful if you want to use [SponsorBlock](https://sponsor.ajay.app) without installing an extension. It does not provide privacy by itself, and we don’t recommend logging into any accounts.


### FreeTube

{{< title-card logo="./freetube.svg" >}}

**FreeTube** is a free and open-source desktop application for [YouTube](https://youtube.com). FreeTube extracts data from YouTube using its built-in API based on [YouTube.js](https://github.com/LuanRT/YouTube.js) or the [Invidious](#invidious) API. You can configure either as the default, with the other serving as a fallback.

When using FreeTube, your subscription list, playlists, watch history and search history are saved locally on your device.

{{< cards >}}
  {{< card link="https://freetubeapp.io" title="Homepage" icon="home" >}}
  {{< card link="https://freetubeapp.io/privacy.php" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="Linux" color="yellow" >}}](https://freetubeapp.io/#download)
[{{< badge content="macOS" color="indigo" >}}](https://freetubeapp.io/#download)
[{{< badge content="Windows" color="red" >}}](https://freetubeapp.io/#download)
[{{< badge content="Flathub" >}}](https://flathub.org/apps/details/io.freetubeapp.FreeTube)

> [!WARNING]
> When using FreeTube, your IP address may still be known to YouTube, [Invidious](https://instances.invidious.io), or [SponsorBlock](https://sponsor.ajay.app) depending on your configuration. Consider using a [VPN](../../services/vpn/index.md) or [Tor](../tor/index.md) if your [threat model](../../../wiki/basics/threat-modeling/index.md) requires hiding your IP address.


By default, FreeTube blocks all YouTube advertisements. In addition, FreeTube optionally integrates with [SponsorBlock](https://sponsor.ajay.app) to help you skip sponsored video segments.

### LibreTube (Android)

{{< title-card logo="./libretube.svg" >}}

**LibreTube** is a free and open-source Android application for [YouTube](https://youtube.com) which uses the [Piped](#piped) API.

Your subscription list and playlists are saved locally on your Android device.

{{< cards >}}
  {{< card link="https://libretube.dev" title="Homepage" icon="home" >}}
  {{< card link="https://github.com/libre-tube/LibreTube/blob/master/PRIVACY_POLICY.md" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="GitHub" >}}](https://github.com/libre-tube/LibreTube/releases)

> [!WARNING]
> When using LibreTube, your IP address will be visible to YouTube, [Piped](https://github.com/TeamPiped/Piped/wiki/Instances), or [SponsorBlock](https://sponsor.ajay.app) depending on your configuration. Consider using a [VPN](../../services/vpn/index.md) or [Tor](../tor/index.md) if your [threat model](../../../wiki/basics/threat-modeling/index.md) requires hiding your IP address.


By default, LibreTube blocks all YouTube advertisements. Additionally, LibreTube uses [SponsorBlock](https://sponsor.ajay.app) to help you skip sponsored video segments. You are able to fully configure the types of segments that SponsorBlock will skip, or disable it completely. There is also a button on the video player itself to disable it for a specific video if desired.

### NewPipe (Android)

{{< title-card logo="./newpipe.svg" >}}

**NewPipe** is a free and open-source Android application for [YouTube](https://youtube.com), [SoundCloud](https://soundcloud.com), [media.ccc.de](https://media.ccc.de), [Bandcamp](https://bandcamp.com), and [PeerTube](https://joinpeertube.org) (1).

Your subscription list and playlists are saved locally on your Android device.

{{< cards >}}
  {{< card link="https://newpipe.net" title="Homepage" icon="home" >}}
  {{< card link="https://newpipe.net/legal/privacy" title="Privacy Policy" icon="eye" >}}
{{< /cards >}}

{{< /title-card >}}

[{{< badge content="GitHub" >}}](https://github.com/TeamNewPipe/NewPipe/releases)

1. The default instance is [FramaTube](https://framatube.org), however more can be added via **Settings** → **Content** → **PeerTube instances**.

> [!WARNING]
> When using NewPipe, your IP address will be visible to the video providers used. Consider using a [VPN](../../services/vpn/index.md) or [Tor](../tor/index.md) if your [threat model](../../../wiki/basics/threat-modeling/index.md) requires hiding your IP address.


## Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to [our standard criteria](../../../about/criteria.md), we have developed a clear set of requirements to allow us to provide objective recommendations. We suggest you familiarize yourself with this list before choosing to use a project, and conduct your own research to ensure it's the right choice for you.

We only consider frontends if one of the following is true for a platform:

- Normally only accessible with JavaScript enabled.
- Normally only accessible with an account.
- Blocks access from commercial [VPNs](../../services/vpn/index.md).

Recommended frontends...

- Must be open-source software.
- Must be self-hostable.
- Must provide all basic website functionality available to anonymous users.

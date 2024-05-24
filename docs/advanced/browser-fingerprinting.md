---
title: "Browser Fingerprinting"
icon: material/fingerprint
description: Browser fingerprinting is a method of tracking users across sites regardless of their network.
---

**Fingerprinting** refers to a service collecting metadata about whatever connects to it, for the purposes of identifying a user. In this overview we are largely going to cover **browser fingerprinting**, specifically how websites try to uniquely identify your web browser outside the standard identifiers most people think of, like your IP address or user agent.

<div class="admonition abstract" markdown>
<p class="admonition-title">TL;DR</p>

The **only** reliable way to thwart all fingerprinting scripts and be anonymous is to use [Tor Browser](../tor.md). Other browsers can only confidently fool certain tracking scripts, and will never be completely unidentifiable despite any claims otherwise. However, the anti-fingerprinting approaches used by other browsers and described here are still useful in protecting your privacy.

</div>

Many people think their browser fingerprint is a single thing, like your actual fingerprints, a string of characters like `XP2urbkhQIaHyMQYXYv4` that uniquely identifies their browser, and if they can get theirs to match everyone else's they are safe. However, browser fingerprinting actually refers to the broad collection of all the different metrics which websites can use to track you.

While many websites or fingerprinting scripts do take all those metrics and hash them into a single identifying string with a fingerprinting algorithm, the algorithms and the metrics they use to create that fingerprint varies between different trackers. In other words, just because one fingerprinting test says your browser's fingerprint is non-unique, or randomized, or any certain thing; doesn't necessarily mean that it will be for every other fingerprinting test or tracker out there, because every method of fingerprinting your browser is different.

Many non-experts will claim that using Firefox or enabling its fingerprinting resistance preferences will make you *more* unique, give you *less* privacy, and make you "stand out in the crowd." However, if you instead do nothing at all then your browser will *already* be uniquely identifiable. Thus, the "crowd" of Google Chrome or Safari users these people will claim exists in fact does not, because you can't blend in to a crowd filled with completely unique browsers. A [study](https://www.ndss-symposium.org/ndss2017/ndss-2017-programme/cross-browser-fingerprinting-os-and-hardware-level-features/) published in 2017 demonstrated an approach that could uniquely identify 99.24% of users, without even taking into account their IP address.

==When you are already completely unique, becoming "more unique" is impossible.== In reality, these fingerprint resistance features are generally not meant to make your browser unidentifiable at all, they merely block tracker scripts from collecting certain metrics, which in turn *can* make your browser unidentifiable to certain—but not all—tracking scripts which rely on those metrics.

## Common metrics

Your browser sends lots of data to the websites you visit, and even more data can be detected by clever tracking scripts. Some data points which—when combined—can be used to identify you include:

- Your time zone
- The fonts you have installed
- The size of your browser window (or screen size)
- Your language
- Your timezone
- Extensions you have installed[^1]
- How fast your computer is[^2]
- And much more...

Some of these metrics are stronger or weaker than others, your browser window size is a weak tracking metric because it is easily changed, while your fonts or timezone are a stronger identifier because they are relatively static, for example. Combined with—or even without—the tracking factors people typically think of, such as your IP address, tracking cookies, and user agent; metrics like these can easily pinpoint particular browsers across the web.

Another common fingerprinting technique is "canvas fingerprinting," which uses WebGL to determine information about your graphics drivers and GPU (or CPU).[^3] In 2022 this was expanded upon in a [research paper](https://www.ndss-symposium.org/wp-content/uploads/2022-93-paper.pdf) which described methods of using canvas fingerprinting in a way which could effectively identify users with "similar hardware and software configurations, even when they are considered identical by current state-of-the-art fingerprinting algorithms." Tor [considers](https://2019.www.torproject.org/projects/torbrowser/design/#fingerprinting-linkability) canvas fingerprinting to be "the single largest fingerprinting threat browsers face today."

[^1]: In some cases the extensions you have installed can be [directly detected](https://z0ccc.github.io/extension-fingerprints/) by websites. In other cases, the behavior of your installed extensions can be observed to fingerprint you. A website can detect whether your ad blocker blocks certain domains for example, which can give it an idea of the ad blocking lists you have installed.
[^2]: Browser benchmark tests can be used to determine CPU features, such as whether it supports hardware AES encryption or Intel Turbo Boost by finding the time it takes for your computer to perform a simple calculation or cryptographic algorithm. Browser hardware APIs such as Chromium's [Battery API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API) can also be used to detect short-term information about your system like its current battery life.
[^3]: A 2012 paper "[Pixel Perfect: Fingerprinting Canvas in HTML5](https://hovav.net/ucsd/dist/canvas.pdf)" demonstrated that canvas fingerprinting produces 5.73 bits of entropy, based on the browser, operating system, and GPU hardware configuration of the computer.

## Types of tracking scripts

In general, we can classify fingerprinting software into two categories: **naive** and **advanced**.

**Naive** trackers can be fooled by standard anti-fingerprinting techniques like Firefox's "resist fingerprinting" or Brave's fingerprint randomization features, because they only look for a few predetermined metrics and will blindly accept whatever values your browser provides. Thus, they are easily fooled by typical anti-fingerprinting approaches.

On the other hand, **advanced** fingerprinting scripts can detect randomized values created by your browser (this is always possible) with varying levels of sophistication, going to greater lengths to fingerprint you than most anti-fingerprinting methods can protect against. The only way to defeat advanced scripts is by blending in with a crowd of other identical looking browsers, which is no easy feat.

==The good news is that most fingerprinting scripts you will encounter on the internet are naive==. They don't bother trying to detect and bypass anti-fingerprinting methods, because they are relatively uncommon, so **any** anti-fingerprinting measures you can implement will work effectively towards thwarting those trackers. This is not to say that fingerprinting cannot or will not become more sophisticated and widespread in the future, but for now most standard anti-fingerprinting approaches are enough.

## Anti-fingerprinting approaches

Broadly speaking, there are three ways that browsers usually try to deal with fingerprinting. In increasing levels of protection:

1. Blocking known fingerprinting scripts.
2. Randomizing your fingerprint.
3. Presenting a uniform fingerprint.

There are advantages and disadvantages to each of these approaches, and generally they cover distinct threat models, but all approaches ultimately try to make it more difficult for websites to track you across the internet.

[Firefox](../desktop-browsers.md#firefox) out of the box takes the first approach, which is to simply block third-party requests to "companies that are known to participate in fingerprinting." This is the *safest* approach, because it results in almost no website breakage, but it also provides the least protection, because it relies on identifying trackers in advance. It also does little to block first-party tracking. You can generally achieve similar results in any browser with an extension that blocks known trackers, like [uBlock Origin](../browser-extensions.md#ublock-origin).

[Brave](../desktop-browsers.md#brave) largely takes the **randomization** approach, by changing fingerprintable metrics in ways which are imperceptible to the person using the browser, but confusing for machines on the other end. This approach gives your browser a completely unique fingerprint, **but** that fingerprint *changes* for each website you visit, so those metrics can't be used to track you across different sites. The benefit of this approach is that website breakage is minimized, because the browser can keep a lot of features enabled and simply randomize their outputs a bit.

However, randomizing your fingerprint does not provide complete protection. Artificial randomization can be detected by websites, and the original entropy from the raw source data still exists. In some cases the randomization implementation has been reversible in practice. Brave's Web Audio API's randomization was at one point [reversible](https://fingerprint.com/blog/audio-fingerprinting/#reverting-brave-standard-farbling) for example. There may also be other indirect ways of learning about the original non-randomized data. Bypassing or de-randomizing these randomized outputs are all techniques which could be utilized by *advanced* tracking scripts.

[Tor Browser](../tor.md#tor-browser) and [Mullvad Browser](../desktop-browsers.md#mullvad-browser) take the more extreme approach of **blocking** access to fingerprintable metrics in the first place, and making other fingerprintable metrics non-unique, so that your browser is as similar as possible to other browsers. Because this is generally achieved by locking down the browser to as minimal a feature-set as possible—in order to make a large plethora of users look identical—it does generally come at the cost of frequent website breakage. However, it is the only way to thwart *advanced* tracking scripts.

Many other browsers do use similar techniques to protect your privacy, but to a far lesser extent. Safari, for example, only makes a select list of system fonts available for websites to access regardless of the fonts you actually have installed.

## Further Reading

Browser fingerprinting is a very complex topic. These resources may be useful in obtaining more technical background information:

- The [Arkenfox](../desktop-browsers.md#arkenfox-advanced) user.js [documentation](https://github.com/arkenfox/user.js/wiki) is a very comprehensive resource about fingerprinting and Firefox's anti-fingerprinting protections, which was used extensively while writing this article.

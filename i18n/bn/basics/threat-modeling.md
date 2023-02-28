---
title: "Threat Modeling"
icon: 'material/target-account'
---

প্রাইভেসি সিকিউরিটি, এবং ব্যবহারযোগ্যতা এর মধ্যে ভারসাম্য রক্ষা করা আপনার প্রাইভেসি যাত্রার সবথেকে কঠিন কাজ।  Everything is a trade-off: The more secure something is, the more restricting or inconvenient it generally is, etc. Often, people find that the problem with the tools they see recommended is that they're just too hard to start using!

যদি আপনি **সবথেকে** সিকিউর সফটও়্যারগুলো ব্যাবহার করতে চান আপনাকে *কিছু* ব্যবহারযোগ্যতা বিসর্জন দিতে হবে। And, even then, ==nothing is ever fully secure.== There's **high** security, but never **full** security. একারণে থ্রেট মডেল তৈরি করা জরুরি।

**So, what are these threat models, anyway?**

==A threat model is a list of the most probable threats to your security and privacy endeavors.== Since it's impossible to protect yourself against **every** attack(er), you should focus on the **most probable** threats. In computer security, a threat is an event that could undermine your efforts to stay private and secure.

Focusing on the threats that matter to you narrows down your thinking about the protection you need, so you can choose the tools that are right for the job.

## Creating Your Threat Model

To identify what could happen to the things you value and determine from whom you need to protect them, you should answer these five questions:

1. আমি কি রক্ষা করতে চাই?
2. কার থেকে আমি রক্ষা করতে চাই?
3. এটি আমার কতটা রক্ষা করা প্রয়োজন?
4. আমি ব্যর্থ হলে পরিণতি কতটা খারাপ?
5. সম্ভাব্য ফল রোধ করার জন্য আমি কতটা সমস্যার মধ্য দিয়ে যেতে ইচ্ছুক?

### আমি কি রক্ষা করতে চাই?

An “asset” is something you value and want to protect. In the context of digital security, ==an asset is usually some kind of information.== For example, your emails, contact lists, instant messages, location, and files are all possible assets. Your devices themselves may also be assets.

*Make a list of your assets: data that you keep, where it's kept, who has access to it, and what stops others from accessing it.*

### কার থেকে আমি রক্ষা করতে চাই?

To answer this question, it's important to identify who might want to target you or your information. ==A person or entity that poses a threat to your assets is an “adversary”.== Examples of potential adversaries are your boss, your former partner, your business competition, your government, or a hacker on a public network.

*Make a list of your adversaries or those who might want to get ahold of your assets. Your list may include individuals, a government agency, or corporations.*

Depending on who your adversaries are, under some circumstances, this list might be something you want to destroy after you're done security planning.

### এটি আমার কতটা রক্ষা করা প্রয়োজন?

==Risk is the likelihood that a particular threat against a particular asset will actually occur.== It goes hand-in-hand with capability. While your mobile phone provider has the capability to access all of your data, the risk of them posting your private data online to harm your reputation is low.

It is important to distinguish between what might happen and the probability it may happen. For instance, there is a threat that your building might collapse, but the risk of this happening is far greater in San Francisco (where earthquakes are common) than in Stockholm (where they are not).

Assessing risks is both a personal and subjective process. Many people find certain threats unacceptable, no matter the likelihood they will occur, because the mere presence of the threat is not worth the cost. In other cases, people disregard high risks because they don't view the threat as a problem.

*Write down which threats you are going to take seriously, and which may be too rare or too harmless (or too difficult to combat) to worry about.*

### আমি ব্যর্থ হলে পরিণতি কতটা খারাপ?

There are many ways that an adversary could gain access to your data. For example, an adversary can read your private communications as they pass through the network, or they can delete or corrupt your data.

==The motives of adversaries differ widely, as do their tactics.== A government trying to prevent the spread of a video showing police violence may be content to simply delete or reduce the availability of that video. In contrast, a political opponent may wish to gain access to secret content and publish that content without you knowing.

Security planning involves understanding how bad the consequences could be if an adversary successfully gains access to one of your assets. To determine this, you should consider the capability of your adversary. For example, your mobile phone provider has access to all of your phone records. A hacker on an open Wi-Fi network can access your unencrypted communications. Your government might have stronger capabilities.

*Write down what your adversary might want to do with your private data.*

### সম্ভাব্য ফল রোধ করার জন্য আমি কতটা সমস্যার মধ্য দিয়ে যেতে ইচ্ছুক?

==There is no perfect option for security.== Not everyone has the same priorities, concerns, or access to resources. Your risk assessment will allow you to plan the right strategy for you, balancing convenience, cost, and privacy.

For example, an attorney representing a client in a national security case may be willing to go to greater lengths to protect communications about that case, such as using encrypted email, than a mother who regularly emails her daughter funny cat videos.

*Write down what options you have available to you to help mitigate your unique threats. Note if you have any financial constraints, technical constraints, or social constraints.*

### Try it yourself: Protecting Your Belongings

These questions can apply to a wide variety of situations, online and offline. As a generic demonstration of how these questions work, let's build a plan to keep your house and possessions safe.

**আপনি কি রক্ষা করতে চান? (অথবা, *আপনার কাছে কি এমন জিনিস আছে যা রক্ষা করার দরকার?*)**
:

আপনার জিনিসপত্র এর মধ্যে গয়না, ইলেকট্রনিকস, গুরুত্বপূর্ণ কাগজপত্র অথবা ফটো পড়তে পারে। 

**কার থেকে আপনি রক্ষা করতে চান?**
:

আপনার সিকিউরিটি এর আক্রমণকারী ডাকাত, রুমমেট বা অতিথি হতে পারে।

**আপনাকে রক্ষা করতে হবে তার সম্ভাবনা কত?**
:

আপনার আশেপাশে কি চুরির ইতিহাস আছে? How trustworthy are your roommates or guests? আপনার প্রতিপক্ষের ক্ষমতা কি? আপনার কী কী ঝুঁকি বিবেচনা করা উচিত?

**আপনি ব্যর্থ হলে পরিণতি কতটা খারাপ?**
:

আপনার বাড়িতে এমন কিছু আছে যা আপনি অন্য কিছু দিয়ে পরিবর্তন করতে পারবেন না? Do you have the time or money to replace those things? আপনার কি বীমা আছে যা আপনার বাড়ি থেকে চুরি হওয়া জিনিসগুলি কভার করে?

**সম্ভাব্য ফল রোধ করার জন্য আপনি কতটা সমস্যার মধ্য দিয়ে যেতে ইচ্ছুক?**
:

আপনি সংবেদনশীল নথি রাখার জন্য একটি সেফ কিনতে ইচ্ছুক? আপনি কি একটি উচ্চ মানের তালা কিনতে সামর্থ্য? আপনার কি স্থানীয় ব্যাঙ্কে কোনও সিকিউরিটি বাক্স খোলার এবং সেখানে আপনার মূল্যবান জিনিসপত্র রাখার সময় আছে?

আপনি একবার নিজেকে এই প্রশ্নগুলি জিজ্ঞাসা করলে আপনি কী পদক্ষেপ নেবেন তা বুঝতে পারবেন। যদি আপনার জিনিসপত্রগুলো দামী হয়, কিন্তু ডাকাতি হওয়ার সম্ভাবনা কম, তাহলে বেশি টাকা তলাতে খরচ করার দরকার হবে না। But, if the probability of a break-in is high, you'll want to get the best lock on the market and consider adding a security system.

Making a security plan will help you to understand the threats that are unique to you and to evaluate your assets, your adversaries, and your adversaries' capabilities, along with the likelihood of risks you face.

## Further Reading

For people looking to increase their privacy and security online, we've compiled a list of common threats our visitors face or goals our visitors have, to give you some inspiration and demonstrate the basis of our recommendations.

- [Common Goals and Threats :material-arrow-right-drop-circle:](common-threats.md)

## Sources

- [EFF Surveillance Self Defense: Your Security Plan](https://ssd.eff.org/en/module/your-security-plan)

--8<-- "includes/abbreviations.bn.txt"

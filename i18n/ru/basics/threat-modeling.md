---
title: "Моделирование угроз"
icon: 'material/target-account'
description: Баланс между безопасностью, конфиденциальностью и удобством использования - одна из первых и самых сложных задач, с которыми вы столкнетесь на пути к конфиденциальности.
---

Баланс между безопасностью, конфиденциальностью и удобством использования - одна из первых и самых сложных задач, с которыми вы столкнетесь на пути к конфиденциальности. Everything is a trade-off: The more secure something is, the more restricting or inconvenient it generally is, etc. Often, people find that the problem with the tools they see recommended is that they're just too hard to start using!

Если вы хотите использовать **наиболее** безопасные инструменты, то вам придется пожертвовать *множеством* удобств. And, even then, ==nothing is ever fully secure.== There's **high** security, but never **full** security. Поэтому модели угроз очень важны.

**So, what are these threat models, anyway?**

==A threat model is a list of the most probable threats to your security and privacy endeavors.== Since it's impossible to protect yourself against **every** attack(er), you should focus on the **most probable** threats. In computer security, a threat is an event that could undermine your efforts to stay private and secure.

Focusing on the threats that matter to you narrows down your thinking about the protection you need, so you can choose the tools that are right for the job.

## Creating Your Threat Model

To identify what could happen to the things you value and determine from whom you need to protect them, you should answer these five questions:

1. Что я хочу защитить?
2. От кого я хочу это защитить?
3. Насколько вероятно, что мне понадобится это защищать?
4. Насколько серьезными будут последствия, если я потерплю неудачу?
5. Через какие трудности я готов пройти, чтобы попытаться предотвратить возможные последствия?

### Что я хочу защитить?

То, что вы хотите защитить, должно быть ценным и нуждаться в защите. In the context of digital security, ==an asset is usually some kind of information.== For example, your emails, contact lists, instant messages, location, and files are all possible assets. Ваши устройства также могут являться объектом защиты.

*Составьте список с данными, которые вы хотите защитить, и ответьте на вопросы: где они хранятся, кто имеет к ним доступ и что мешает другим получить к ним доступ.*

### От кого я хочу это защитить?

Чтобы ответить на этот вопрос, важно определить, кто может хотеть вашу информацию. ==A person or entity that poses a threat to your assets is an “adversary”.== Examples of potential adversaries are your boss, your former partner, your business competition, your government, or a hacker on a public network.

*Make a list of your adversaries or those who might want to get ahold of your assets. В ваш список могут входить отдельные люди, государственные учреждения или корпорации.*

Depending on who your adversaries are, under some circumstances, this list might be something you want to destroy after you're done security planning.

### Насколько вероятно, что мне понадобится это защищать?

==Risk is the likelihood that a particular threat against a particular asset will actually occur.== It goes hand-in-hand with capability. Например: ваш мобильный оператор имеет возможность получить доступ ко всем вашим данным, но риск того, что они разместят ваши личные данные в Интернете, чтобы нанести ущерб вашей репутации, невелик.

Важно понимать различие между тем, что может произойти, и вероятностью того, что это может произойти. Например, существует угроза обрушения вашего здания, но риск того, что это произойдет гораздо выше в Сан-Франциско (где землетрясения происходят часто), чем в Стокгольме (где их нет).

Assessing risks is both a personal and subjective process. Many people find certain threats unacceptable, no matter the likelihood they will occur, because the mere presence of the threat is not worth the cost. В других случаях люди могут игнорировать высокие риски, потому что не считают угрозу проблемой.

*Запишите, какие угрозы вы собираетесь воспринимать всерьез, а какие могут быть слишком редкими или слишком безобидными (или слишком сложными для борьбы), чтобы беспокоиться о них.*

### Насколько серьезными будут последствия, если я потерплю неудачу?

Существует множество способов, с помощью которых противники могут получить доступ к вашим данным. Например, противник может прочитать ваши личные сообщения, проходящие через сеть, или удалить или повредить ваши данные.

==The motives of adversaries differ widely, as do their tactics.== A government trying to prevent the spread of a video showing police violence may be content to simply delete or reduce the availability of that video. А политический противник может захотеть получить доступ к секретному контенту и опубликовать его без вашего ведома.

Моделирование угроз предполагает понимание того, насколько серьезными могут быть последствия, если противник успешно получит доступ к вашему защищаемому объекту. Чтобы определить последствия, вы должны рассмотреть возможности вашего противника. For example, your mobile phone provider has access to all of your phone records. Хакер, находящийся в открытой Wi-Fi-сети, может получить доступ к вашим незашифрованным сообщениям. Ваше правительство может иметь более мощные возможности.

*Подумайте, что ваш противник может захотеть сделать с вашими конфиденциальными данными.*

### Через какие трудности я готов пройти, чтобы попытаться предотвратить возможные последствия?

==There is no perfect option for security.== Not everyone has the same priorities, concerns, or access to resources. Оценка рисков позволит вам разработать правильную стратегию лично для вас, которая будет сочетать в себе и удобство, и цену, и конфиденциальность.

Например: адвокат, представляющий клиента в деле о национальной безопасности, готов приложить больше усилий для защиты сообщений (например, использовать зашифрованную электронную почту), чем мать, которая регулярно отправляет своей дочери смешные видео с котиками.

*Запишите, какими способами вы можете справиться с вашими уникальными угрозами. Обратите внимание на то, есть ли у вас финансовые, технические или социальные ограничения.*

### Try it yourself: Protecting Your Belongings

These questions can apply to a wide variety of situations, online and offline. As a generic demonstration of how these questions work, let's build a plan to keep your house and possessions safe.

**Что вы хотите защитить? (Или *что у вас есть такого, что стоит защищать?*)**
:

Ваше имущество может включать ювелирные изделия, электронику, важные документы или фотографии.

**От кого вы хотите это защитить?**
:

Среди ваших противников могут быть грабители, соседи или гости.

**Насколько вероятно, что вам понадобится это защищать?**
:

Есть ли в вашем районе история краж со взломом? How trustworthy are your roommates or guests? Каковы возможности ваших противников? Какие риски вы должны учитывать?

**Насколько серьезными будут последствия, если вы потерпите неудачу?**
:

Есть ли у вас в доме что-то, что вы не можете заменить? Do you have the time or money to replace those things? Есть ли у вас страховка, покрывающая вещи, украденные из вашего дома?

**Через какие трудности вы готовы пройти, чтобы попытаться предотвратить возможные последствия?**
:

Готовы ли вы купить сейф для секретных документов? Можете ли вы позволить себе купить высококачественный замок? Есть ли у вас время открыть банковскую ячейку в банке и хранить там свои ценности?

Только после того, как вы зададите себе эти вопросы, вы сможете оценить, какие меры следует предпринять. Если ваше имущество ценно, но вероятность взлома мала, то, возможно, вы не захотите тратить слишком много денег на хороший замок. But, if the probability of a break-in is high, you'll want to get the best lock on the market and consider adding a security system.

Составление плана безопасности поможет вам понять, какие угрозы характерны только для вас, оценить ваше имущество, ваших противников и их возможности, а также вероятность рисков, с которыми вы можете столкнуться.

## Further Reading

For people looking to increase their privacy and security online, we've compiled a list of common threats our visitors face or goals our visitors have, to give you some inspiration and demonstrate the basis of our recommendations.

- [Common Goals and Threats :material-arrow-right-drop-circle:](common-threats.md)

## Источники

- [EFF Surveillance Self Defense: Your Security Plan](https://ssd.eff.org/en/module/your-security-plan)

---
date:
    created: 2024-11-30
categories:
    - Opinion
authors:
    - fria
tags:
    - Biometrics
license: BY-SA
---
# Biometrics Explained

Biometrics are a convenient and secure way to authenticate our devices. Many of us use and trust the biometrics of our devices without much thought, but are they really secure? With so many different types, which ones are the best?<!-- more -->

## Fingerprint

One of the most recognizable types of biometric authentication has to be the fingerprint reader. The idea is that everyone has a fairly unique fingerprint, so we should be able to distinguish between your fingerprint and someone else's reliably. (1)
{ .annotate }

1. :material-fingerprint: It's theorized that the reason humans have fingerprints in the first place is to [enhance our sense of touch](https://www.science.org/doi/10.1126/science.1166467).

There four main ways we accomplish this: optical sensors, capacitive sensors, ultrasonic sensors, and thermal sensors.

### Optical Fingerprint Sensors

An optical sensor works just like you'd think it would: by taking a picture of your fingerprint and turning it into data. These are the cheapest and least secure option. They're potentially vulnerable to an attacker simply taking a picture of your fingerprint, since they only capture a two-dimensional image.

Many devices implement one of these sensors under the display. You can tell if yours does because it will flash you with a bright light when you try to scan your finger. This happens so the optical sensor can capture a clear image of your finger.

### Capacitive Fingerprint Sensors

Capacitive sensors measure the electrical conductivity of your finger. These are much more secure than optical sensors since they can't be fooled with an image. They're also tough to fool with prosthetics as different materials will have different electical properties.

Capacitive sensors won't work if the [tissue is dead](https://www.livescience.com/62393-dead-fingerprint-unlock-phone.html), since dead tissue loses all electical charge. So morbid worries about someone using your dead body to unlock your phone can be assuaged.

Conveniently they also don't require a light source under them to work.

### Ultrasonic Fingerprint Sensors

Ultrasonic fingerprint sensors use sound to create a detailed 3D representation of your fingerprint. This is the most expensive type of sensor but it produces the most accurate readings with the highest reliability. It doesn't matter if your finger is a bit dirty or wet, it will still work unlike optical or capacitive sensors.

One downside is that you lose the protection against dead tissue that capacitive sensors offer, but this is not relevant for most people.

### Additional Considerations

Fingerprint unlock will inherently be vulnerable to someone forcing you to put your finger on the sensor to unlock your device, so keep this in mind when threat modeling.

They also won't work with gloves and sometimes screen protectors can interfere, so make sure that the sensor is uncovered and making direct contact with your actual finger.

## Face Unlock

Many devices come with the capability to unlock them using your face. The implementations of this technology can vary wildly between manufacturers since a secure implementation requires a lot of special hardware, so many OEMs choose to cheap out. All forms of face unlock are more likely to allow a twin or sibling into your device since their face is more similar to yours than a random person off the street, so keep that in mind in your threat model.

### 2D Camera Face Unlock

Every phone already has a camera, so why not use it for face unlock? There are many reasons.

If you're relying on a plain 2D image, then there's always the possibility that it could be fooled by a regular photo. Someone getting in to your phone becuase they have a picture of your face is a security nightmare scenario and the only thing stopping it is the whims of whatever algorithm was programmed into your phone.

This form of face unlock is also less likely to work in low-light conditions than infrared variants.

### 2D Infrared Face Unlock

The next step up in security is an infrared sensor. This requires dedicated hardware to be built into the device, which eats up space and adds cost. But what you get in return is a form of face unlock that's more reliable in low-light conditions and more resistant to photographs.

### 3D Face Unlock

The potential of this technology truly shines when 2D face unlock is combined with an infrared flood illuminator. These are able to shine thousands of invisible infrared dots on your face and record the distance of each one, creating a 3D map of your face. As you can probably imagine, this tech takes up quite a bit of space and adds yet more cost to the device, as well as likely being the main reason for the "notch" on iPhones. This drawback is well worth it though. According to [Apple](https://support.apple.com/en-us/102381):

>The probability that a random person in the population could look at your iPhone or iPad Pro and unlock it using Face ID is less than 1 in 1,000,000 with a single enrolled appearance whether or not you're wearing a mask.

They put the odds for Touch ID around [1 in 50,000](https://support.apple.com/en-us/105095) for comparison.

3D face unlock is immune to 2D images and requires a 3D reconstruction of a face before it has a chance of being fooled.

### Additional Considerations

You'll likely want an implementation with some protection against another person pointing your phone at your face to unlock it. iOS allows you to enable a setting where you need to be looking at the phone before it will unlock, look for a similar feature when shopping for a device.

Also note that training your face unlock while wearing things like glasses and face masks will make face unlock less secure since it's working off less data.

## Iris Sensors

A spy movie classic but newcomer in the consumer electronics field, iris sensors offer authentication via the unique properties of your eyes. The Apple Vision Pro is the most notable example with its [Optic ID](https://support.apple.com/en-us/118483).

It uses near-infrared light to reveal highly unique patterns independent of the pigmentation of your eyes. Apple estimates the liklihood of a random person being able to unlock your Optic ID at less than 1 in 1,000,000, similar to Face ID.

The extremely short distance this technology operates at makes it very difficult for someone to unlock your device without you noticing.
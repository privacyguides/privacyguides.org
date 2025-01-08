# Location Tracking

Most people are aware that their phones and many other devices have GPS capabilities, but there's a lot of confusion about what exactly the implications of this are.

## What is GPS?

GPS stands for Global Positioning System. It's often used colloquially as a catch-all for any satellite-based location service, however GPS is just one of many Global Navigation Satellite Systems (GNSS). Specifically, it's the [American](https://www.gps.gov) operated one. There are others such as Russia's [GLONASS](https://glonass-iac.ru/en/about_glonass/), Europe's [Galileo](https://www.gsc-europa.eu), and China's [BeiDou](http://en.beidou.gov.cn/SYSTEMS/System/).

These [systems](https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/techops/navservices/gnss/gps/howitworks) work using a constellation of satellites that are in orbit around the earth. The satellites have a highly accurate atomic clock onboard. The satellites continuously broadcast a signal containing the time and data that the GPS receiver uses to calculate the position of the satellites. The receiver uses the time difference between the broadcast time of the satellite and the time it received the signal to determine how far away the satellite is. Using this combined information, the receiver can determine its own position in 3D space.

Since pure GPS is receive only, it's quite privacy friendly, barring any software that has access to GPS information sending it off-device.

## A-GNSS

Satellites deviate from their orbit occasionally so ground-based observatories must determine the exact orbit of the satellites and send it to them. This is called ephemeris data. The satellites then send this data to receivers on the ground.

Downloading this data from satellites can take 30+ seconds from a single satellite and 5+ minutes from all visible satellites. It takes at least 12 hours (the time it takes a GNSS satellite to complete a full orbit) to download it from all satellites in the constellation. This wait time on first boot up of a GPS receiver is called the Time to First Fix (TTFF).

[Assisted GNSS](https://www.symmetryelectronics.com/blog/what-is-a-gps-a-gnss-and-why-would-i-need-it-symmetry-blog/) (A-GNSS) augments the satellite-based technology of GNSS with either ephemeris data downloaded from the internet or locally-generated ephemeris data, significantly improving the TTFF of a receiver.
# Location Tracking

Most people are aware that their phones and many other devices have GPS capabilities, but there's a lot of confusion about what exactly the implications of this are.

## What is GPS?

GPS stands for Global Positioning System. It's often used colloquially as a catch-all for any satellite-based location service, however GPS is just one of many Global Navigation Satellite Systems (GNSS). Specifically, it's the [American](https://www.gps.gov) operated one. There are others such as Russia's [GLONASS](https://glonass-iac.ru/en/about_glonass/), Europe's [Galileo](https://www.gsc-europa.eu), and China's [BeiDou](http://en.beidou.gov.cn/SYSTEMS/System/).

These [systems](https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/techops/navservices/gnss/gps/howitworks) work using a constellation of satellites that are in orbit around the earth. The satellites have a highly accurate atomic clock onboard. The satellites continuously broadcast a signal containing the time and data that the GPS receiver uses to calculate the position of the satellites. The receiver uses the time difference between the broadcast time of the satellite and the time it received the signal to determine how far away the satellite is. Using this combined information, the receiver can determine its own position in 3D space.

Since pure GPS is receive only, it's quite privacy friendly, barring any software that has access to GPS information sending it off-device.
# ptio-font

This font contains icons we need, which Font Awesome does not have.

| Name        | CSS class             | Issue |
|---          |---                    |---    |
| F-Droid     | `ptio-f-droid`        | https://github.com/FortAwesome/Font-Awesome/issues/15492 |
| iOS         | `ptio-ios`            | https://github.com/FortAwesome/Font-Awesome/issues/4935  |
| macOS       | `ptio-macos`          | https://github.com/FortAwesome/Font-Awesome/issues/4936  |
| OpenBSD     | `ptio-openbsd`        | https://github.com/FortAwesome/Font-Awesome/issues/5345  |
| NetBSD      | `ptio-netbsd`         | https://github.com/FortAwesome/Font-Awesome/issues/15496 |
| Sailfish OS | `ptio-sailfish-os`    | https://github.com/FortAwesome/Font-Awesome/issues/15498 |
| I2P         | `ptio-i2p-garlic`     | https://github.com/FortAwesome/Font-Awesome/issues/15772 |

We also have custom Linux icon (`ptio-linux`), because I (@dawidpotocki) made it before and looks cleaner.
And since we are bundling additional font anyway, why not.

## Building

To build the font, you will need some of the following tools installed.

| Name              | Notes                                                         |
|---                |---                                                            |
| `make`            | Use distro's package manager                                  |
| `ruby`            | Use distro's package manager                                  |
| `bundler`         | Run `gem install bundler`                                     |
|                   |                                                               |
|                   |                                                               |
| `woff-tools`      | Use distro's package manager                                  |
| or                |                                                               |
| `yarn` or `npm`   | Use distro's package manager                                  |
| `sfnt2woff`       | Run `yarn global add sfnt2woff` or `npm install -g sfnt2woff` |

Then just run the following commands to build the font:

```
$ cd font/
$ bundle   # it will install FontCustom
$ make build   # it will build a font and css
```

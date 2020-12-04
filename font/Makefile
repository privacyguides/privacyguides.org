build:
	bundle exec fontcustom compile -F
	mv ptio-font.woff assets/webfonts
	mv _sass/ptio-font.css ../_sass/ptio-font.scss
	mv assets/webfonts/* ../assets/webfonts/
	sed -i -e 's/..\/assets\//..\//g' ../_sass/ptio-font.scss

default:
	build

.PHONY: build

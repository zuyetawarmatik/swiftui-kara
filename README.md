# SwiftUI Kara and Karatext

SwiftUI Kara and Karatext is a set of Polymer web components which are used to display and synchronize lyrics while playing an audio track at background. The source of audio can be a YouTube stream (using [google-youtube](https://github.com/GoogleWebComponents/google-youtube) Polymer component) or an `<audio>` tag.

Text rendering and highlighting effect is done by using [SVG.js](http://svgjs.com/).

## Demo

[Here in my portfolio page](http://zuyetawarmatik.github.io/experiments/swiftui-kara), I'm using the song [Santa Claus Is Coming To Town](https://www.youtube.com/watch?v=m2-kJau6dVs) by Cascada.

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install swiftui-kara --save
```

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="bower_components/platform/platform.js"></script>
	```
	
2. Import SwiftUI Kara element sets:

	```html
	<link rel="import" href="bower_components/swiftui-kara/swiftui-kara.html">
	```

## Options


## Methods


## Events


## Current Issues

* Not working in mobile browsers due to the fact that they do not allow playing YouTube by script (i.e. `play()`)

## Feature in Next Versions

* One-line style.
* Word-highlighting mode.
* Different effects.

## License

[MIT License](http://opensource.org/licenses/MIT)

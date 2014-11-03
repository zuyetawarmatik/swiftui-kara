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
	
3. Start using it:
	
	```html
	<swiftui-kara effect="glow" audioSrcType="audio"
								audioSrc="santa-claus-is-coming-to-town.mp3">
		<swiftui-karatext start="0:0:15" end="0:0:16.6">
			<swiftui-karaword start="0:0:15" end="0:0:15.4">You'd</swiftui-karaword>
			<swiftui-karaword start="0:0:15.2" end="0:0:15.8">better</swiftui-karaword>
			<swiftui-karaword start="0:0:15.6" end="0:0:16">watch</swiftui-karaword>
			<swiftui-karaword start="0:0:15.8" end="0:0:16.2">out!</swiftui-karaword>
		</swiftui-karatext>
		<swiftui-karatext start="0:0:16.6" end="0:0:18.3">
			<swiftui-karaword start="0:0:16.8" end="0:0:17.2">You'd</swiftui-karaword>
			<swiftui-karaword start="0:0:17" end="0:0:17.4">better</swiftui-karaword>
			<swiftui-karaword start="0:0:17.2" end="0:0:17.6">not</swiftui-karaword>
			<swiftui-karaword start="0:0:17.6" end="0:0:18">cry!</swiftui-karaword>
		</swiftui-karatext>
		...
	</swiftui-kara>
	```
	
	It's certainly OK if you don't use `<swiftui-karaword>` inside a `<swiftui-karatext>`:
	
	```html
	<swiftui-kara effect="slide" audioSrcType="audio"
								audioSrc="santa-claus-is-coming-to-town.mp3">
		<swiftui-karatext start="0:0:15" end="0:0:16.6">
			You'd better watch out!
		</swiftui-karatext>
		<swiftui-karatext start="0:0:16.6" end="0:0:18.3">
			You'd better not cry!
		</swiftui-karatext>
		...
	</swiftui-kara>
	```
	
## Styles

SwiftUI Kara selectors are easily styled by using ordinary CSS, such as font (family, style, weight...), sizing and positioning.

There are a few reserved CSS rules for SwiftUI Kara (and Karatext) which has a different meaning from its original one:

Selector      												| Rules								| Description
---           												| --- 								| ---
`swiftui-kara` or `swiftui-karatext`	| `line-height`				| Space height between the first and second lyrics text line.
`swiftui-karatext`										| `background-color`	| Color of the ground (overlaid) text.
`swiftui-karatext`										| `color`							| Color of the clipping (overlaying) text.

## Options

### SwiftUI Kara

1. SwiftUI Kara

Attribute    				| Options     					| Default      		| Description
--- 								| ---         					| ---          		| ---
`audioSrcType`			| *audio*, *youtube*    | *audio*       	| Audio source type. YouTube source cannot be played in mobile browser.
`audioSrc`					|     									| 				       	| Audio source string. For audio source, it's URL of the audio file; for YouTube source, it's video's ID.
`effect`						| *slide*, *glow*    		| *slide*       	| Effect when running the lyrics. Note: Slide effect should be used best when lyrics texts are not wrapped inside karaword, such as `<swiftui-karatext>Lorem ipsum</swiftui-karatext`; on the other hand, Glow effect should be used best when lyrics texts are wrapped inside karaword, for example `<swiftui-karatext><swiftui-karaword>Lorem</swiftui-karaword><swiftui-karaword>ipsum</swiftui-karaword></swiftui-karatext>`.

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

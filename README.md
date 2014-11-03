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

4. Doing some styling before enjoying it:

	```css
	swiftui-kara {
		height: 40rem;
		width: 100%;

		font-family: "Raleway", sans-serif;
		font-size: 5rem;
		font-weight: bold;
		line-height: 3rem;
	}

	swiftui-karatext {
		color: #FC5956; /* Clipping text color */
		background-color: #444; /* Ground text color */
	}
	```

## Styles

SwiftUI Kara selectors are easily styled by using ordinary CSS, such as font (family, style, weight...), sizing and positioning.

There are a few reserved CSS rules for SwiftUI Kara (and Karatext) which has a different meaning from its original one:

Selector      												| Rules								| Description
---           												| --- 								| ---
`swiftui-kara` or `swiftui-karatext`	| `line-height`				| Space height between the first and second lyrics text line.
`swiftui-kara` 												| `height`						| (Compulsory)
`swiftui-kara` 												| `width`							| (Compulsory)
`swiftui-karatext`										| `background-color`	| Color of the ground (overlaid) text.
`swiftui-karatext`										| `color`							| Color of the clipping (overlaying) text.

## Options

### SwiftUI Kara

Attribute    				| Options     					| Default      		| Description
--- 								| ---         					| ---          		| ---
`audioSrcType`			| *audio*, *youtube*    | *audio*       	| Audio source type. YouTube source cannot be played in mobile browser.
`audioSrc`					|     									| 				       	| Audio source string. For audio source, it's URL of the audio file; for YouTube source, it's video's ID.
`effect`						| *slide*, *glow*    		| *slide*       	| Effect when running the lyrics. **Note:** Slide effect should be used best when lyrics texts are not wrapped inside karaword, such as `<swiftui-karatext>Lorem ipsum</swiftui-karatext`; on the other hand, Glow effect should be used best when lyrics texts are wrapped inside karaword, for example `<swiftui-karatext><swiftui-karaword>Lorem</swiftui-karaword><swiftui-karaword>ipsum</swiftui-karaword></swiftui-karatext>`.
`flyDuration`				| 											| *400*       		| Fly duration in ms: fly-in, fly from line to line and fly-out.

### SwiftUI Karatext / Karaword

Attribute    				| Default      		| Description
--- 								| ---          		| ---
`start`							| *0:0:0*       	| In H:M:S.s format, accurate to 1/10 seconds, for example `0:1:2.5`.
`end`								| *0:0:0*			    | Same as `start`; moreover, `end` value should be after `start` value in timing term.

## Methods

### SwiftUI Kara

Method        						| Parameters   | Returns     									| Description
---          							| ---          | ---        								 	| ---
`play()`   								|         		 |             									| Play (or resume) the music and the lyrics.
`pause()`   							|         		 |             									| Pause the music and the lyrics. If resuming after paused, the music will seek back one-lyrics-line time before the paused point.
`getCurrentPlayTime()`   	|         		 | Current time of the playing 	| Return current time of the playing in seconds.
`getDuration()`   				|         		 | Duration of the playing 			| Return duration of the playing in seconds.

## Events

### SwiftUI Kara

Event         		| Description
---           		| ---
`kara-not-ready` 	| When the kara changes the state to "not ready" (future feature).
`kara-ready` 			| When the kara is ready to be played.
`kara-playing` 		| When the kara has started playing music.
`kara-paused` 		| When the kara is paused.
`kara-ended` 			| When the kara has finished playing music.

## Development on Forking

* Install prerequisites and local dependencies:

	```sh
	$ [sudo] npm install -g bower grunt-cli
	```

	```sh
	$ bower install && npm install
	```
	
* Development branch should be forked from `dev` branch.

* In this project, there is a `pre-release` branch to stage the element before publishing it to `master`.
	
	** If development is deemed to be stable at some stage, merge the latest stable commit from branch `dev` to `pre-release`.
	
	** On `pre-release` branch, run:
	
		```sh
		$ grunt build
		```
		to stage the assets.
	
	** If it's fully tested on `pre-release`, merge `pre-release` to `master`.

## Current Issues

* Not working in mobile browsers due to the fact that it's not allowed to play YouTube by script (i.e. `play()`).

* Not handling audio stream pausing due to transferring error.

## Feature in Next Versions

* One-line style.

## License

[MIT License](http://opensource.org/licenses/MIT)

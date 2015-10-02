
CSS.lists = {};
CSS.lists["blendMode"] = ["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"];
CSS.lists["hposition"] = ["left","center","right"];
CSS.lists["vposition"] = ["top","center","bottom"];

CSS.db = {
alignContent:{
    anim:0,
    desc:"The align-content property aligns the flexible container's items when the items do not use all available space on the cross-axis (vertically)",
    options:[{
	    value:"stretch",
	    desc:"Items are stretched to fit the container"
	    },{
	    value:"center",
	    desc:"Items are positioned at the center of the container"
	    },{
	    value:"flex-start",
	    desc:"Items are positioned at the beginning of the container"
	    },{
	    value:"flex-end",
	    desc:"Items are positioned at the end of the container"
	    },{
	    value:"space-between",
	    desc:"Items are positioned with space between the lines"
	    },{
	    value:"space-around",
	    desc:"Items are positioned with space before, between, and after lines"
	    },{
	    value:"initial",
	    desc:"Sets this property to its default value"
	    },{
	    value:"inherit",
	    desc:"Inherits this property from its parent element"
	    }]
    },
alignItems:{
    anim:0,
    desc:"The align-items property specifies the default alignment for items inside the flexible container",
    options:[{
		value:"auto",
		desc:"The element inherits its parent container's align-items property, or 'stretch' if it has no parent container"
		},{
		value:"stretch",
		desc:"The element is positioned to fit the container"
		},{
		value:"center",
		desc:"The element is positioned at the center of the container"
		},{
		value:"flex-start",
		desc:"The element is positioned at the beginning of the container"
		},{
		value:"flex-end",
		desc:"The element is positioned at the end of the container"
		},{
		value:"baseline",
		desc:"The element is positioned at the baseline of the container"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
alignSelf:{
    anim:0,
    desc:"The align-self property specifies the alignment for the selected item inside the flexible container. The align-self property overrides the flexible container's align-items property",
    options:[{
		value:"auto",
		desc:"The element inherits its parent container's align-items property, or 'stretch' if it has no parent container"
		},{
		value:"stretch",
		desc:"The element is positioned to fit the container"
		},{
		value:"center",
		desc:"The element is positioned at the center of the container"
		},{
		value:"flex-start",
		desc:"The element is positioned at the beginning of the container"
		},{
		value:"flex-end",
		desc:"The element is positioned at the end of the container"
		},{
		value:"baseline",
		desc:"The element is positioned at the baseline of the container"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
alignmentBaseline:{
    anim:0,
    desc:"The alignment-baseline property specifies how an inline-level element is aligned with respect to its parent. That is, to which of the parent's baselines the alignment point of this element is aligned. Unlike the 'dominant-baseline' property the 'alignment-baseline' property has no effect on its children dominant-baselines",
    options:[{
		value:"baseline",
		desc:"The alignment-point of the element being aligned is aligned with the dominant baseline of the parent"
		},{
		value:"use-script",
		desc:"If the element 'script' property value is 'auto', the alignment point of each glyph is aligned with the baseline-identifier of the script to which the glyph belongs. If the element 'script' property value is other than 'auto', the alignment point of each glyph is aligned with the baseline-identifier specified by the 'script' property"
		},{
		value:"before-edge",
		desc:"The alignment point of the box is aligned with the 'before-edge' baseline of the line box"
		},{
		value:"text-before-edge",
		desc:"The alignment-point of the element being aligned is aligned with the 'text-before-edge' baseline of the parent"
		},{
		value:"after-edge",
		desc:"The alignment point of the box is aligned with the 'after-edge' baseline of the line box"
		},{
		value:"text-after-edge",
		desc:"The alignment-point of the element being aligned is aligned with the 'text-after-edge' baseline of the parent"
		},{
		value:"central",
		desc:"The alignment point of the box is aligned with the 'central' baseline of the parent"
		},{
		value:"middle",
		desc:"The alignment point of the box is aligned with the 'central' baseline of the parent"
		},{
		value:"ideographic",
		desc:"The alignment-point of the element being aligned is aligned with the 'ideographic' baseline of the parent"
		},{
		value:"alphabetic",
		desc:"The alignment-point of the element being aligned is aligned with the lower baseline of the parent"
		},{
		value:"hanging",
		desc:"The alignment-point of the element being aligned is aligned with the hanging baseline of the parent"
		},{
		value:"mathematical",
		desc:"The alignment-point of the element being aligned is aligned with the mathematical baseline of the parent"
		}]
    },
all:{
    anim:0,
    desc:"The CSS all shorthand property resets all properties, apart from unicode-bidi and direction, to their initial or inherited value",
    options:[{
		value:"initial",
		desc:"This keyword indicates to change all the properties applying to the element or the element's parent to their initial value. unicode-bidi and direction values are not affected"
		},{
		value:"inherit",
		desc:"This keyword indicates to change all the properties applying to the element or the element's parent to their parent value. unicode-bidi and direction values are not affected"
		},{
		value:"unset",
		desc:"This keyword indicates to change all the properties applying to the element or the element's parent to their parent value if they are inheritable or to their initial value if not. unicode-bidi and direction values are not affected"
		}]
    },
animation:{
    type:"shorthand",
    desc:"The animation property is a shorthand property for eight of the animation properties",
    options:["animationName","animationDuration","animationTimingFunction","animationDelay","animationIterationCount","animationDirection","animationDirection","animationFillMode","animationPlayState"]
    },
animationDelay:{
    anim:0,
    desc:"The animation-delay property specifies a delay for the start of an animation",
    options:[{
		value:"[time]",
		desc:"The animation-delay value is defined in seconds (s) or milliseconds (ms)"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
animationDirection:{
    anim:0,
    desc:"The animation-direction property defines whether an animation should play in reverse direction or in alternate cycles",
    options:[{
		value:"normal",
		desc:"The animation should be played as normal"
		},{
		value:"reverse",
		desc:"The animation should play in reverse direction"
		},{
		value:"alternate",
		desc:"The animation will be played as normal every odd time (1,3,5,etc..) and in reverse direction every even time (2,4,6,etc...)"
		},{
		value:"alternate-reverse",
		desc:"The animation will be played in reverse direction every odd time (1,3,5,etc..) and in a normal direction every even time (2,4,6,etc...)"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
animationDuration:{
    anim:0,
    desc:"The animation-duration property defines how many seconds or milliseconds an animation takes to complete one cycle",
    options:[{
		value:"[time]",
		desc:"Specifies the length an animation takes to finish. Default value is 0, meaning there will be no animation"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
animationFillMode:{
    anim:0,
    desc:"The animation-fill-mode property specifies a style for the element when the animation is not playing (when it is finished, or when it has a delay). By default, CSS animations do not affect the element until the first keyframe is 'played', and then stops once the last keyframe has completed. The animation-fill-mode property can override this behavior",
    options:[{
		value:"none",
		desc:"The animation will not apply any styles to the target element before or after it is executing"
		},{
		value:"forwards",
		desc:"After the animation ends (determined by animation-iteration-count), the animation will apply the property values for the time the animation ended"
		},{
		value:"backwards",
		desc:"The animation will apply the property values defined in the keyframe that will start the first iteration of the animation, during the period defined by animation-delay. These are either the values of the from keyframe (when animation-direction is 'normal' or 'alternate') or those of the to keyframe (when animation-direction is 'reverse' or 'alternate-reverse')"
		},{
		value:"both",
		desc:"The animation will follow the rules for both forwards and backwards. That is, it will extend the animation properties in both directions"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
animationIterationCount:{
    anim:0,
    desc:"The animation-iteration-count property specifies the number of times an animation should be played",
    options:[{
		value:"number",
		desc:"A number that defines how many times an animation should be played. Default value is 1"
		},{
		value:"infinite",
		desc:"Specifies that the animation should be played infinite times (for ever)"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
animationName:{
    anim:0,
    desc:"The animation-name property specifies a name for the @keyframes animation",
    options:[{
		value:"none",
		desc:"Default value. Specifies that there will be no animation (can be used to override animations coming from the cascade)"
		},{
		value:"keyframename",
		desc:"Specifies the name of the keyframe you want to bind to the selector"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
animationPlayState:{
    anim:0,
    desc:"The animation-play-state property specifies whether the animation is running or paused",
    options:[{
		value:"running",
		desc:"Default value. Specifies that the animation is running"
		},{
		value:"paused",
		desc:"Specifies that the animation is paused"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
animationTimingFunction:{
    anim:0,
    desc:"The animation-timing-function specifies the speed curve of an animation. The speed curve defines the TIME an animation uses to change from one set of CSS styles to another. The speed curve is used to make the changes smoothly.",
    options:[{
		value:"ease",
		desc:"The animation has a slow start, then fast, before it ends slowly"
		},{
		value:"linear",
		desc:"The animation has the same speed from start to end"
		},{
		value:"ease-in",
		desc:"The animation has a slow start"
		},{
		value:"ease-out",
		desc:"The animation has a slow end"
		},{
		value:"ease-in-out",
		desc:"The animation has both a slow start and a slow end"
		},{
		value:"cubic-bezier(n,n,n,n)",
		desc:"Define your own values in the cubic-bezier function Possible values are numeric values from 0 to 1"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
backfaceVisibility:{
    anim:0,
    desc:"The backface-visibility property defines whether or not an element should be visible when not facing the screen. This property is useful when an element is rotated, and you do not want to see its backside. To better understand this property",
    options:[{
		value:"visible",
		desc:"The backside is visible"
		},{
		value:"hidden",
		desc:"The backside is not visible"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
backgroundAttachment:{
    anim:0,
    desc:"The background-attachment property sets whether a background image is fixed or scrolls with the rest of the page",
    options:[{
		value:"scroll",
		desc:"The background scrolls along with the element"
		},{
		value:"fixed",
		desc:"The background is fixed with regard to the viewport"
		},{
		value:"local",
		desc:"The background scrolls along with the element's contents"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
backgroundBlendMode:{
    anim:0,
    desc:"describes how the element's background images should blend with each other and the element's background color",
    options:[{
		value:"[blendMode]",
		desc:"<blend-mode> denoting the blending mode to be applied. There can be several values, separated by commas"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		},{
		value:"unset",
		desc:"This keyword indicates to change all the properties applying to the element or the element's parent to their parent value if they are inheritable or to their initial value if not. unicode-bidi and direction values are not affected"
		}]
    },
backgroundClip:{
    anim:0,
    desc:"The background-clip property specifies the painting area of the background",
    options:[{
		value:"border-box",
		desc:"The background is clipped to the border box"
		},{
		value:"padding-box",
		desc:"The background is clipped to the padding box"
		},{
		value:"content-box",
		desc:"The background is clipped to the content box"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
backgroundColor:{
    anim:0,
    desc:"The background-color property sets the background color of an element. The background of an element is the total size of the element, including padding and border (but not the margin)",
    draw:function (x,y, w, h, value) {
        return "<div style='display:inline-block;ileft:" + x + "px;itop:" + y + "px;width:" + w + "px;height:" + h + "px;background-color:" + value + ";'></div>";

    },
    options:[{
		value:"transparent",
		desc:"Specifies that the background color should be transparent"
		},{
		value:"[color]",
		desc:"Specifies the background color. Look at CSS Color Values for a complete list of possible color values"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
backgroundImage:{
    anim:0,
    desc:"The background-image property sets one or more background images for an element. The background of an element is the total size of the element, including padding and border (but not the margin). By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.",
    options:[{
		value:"none",
		desc:"No background image will be displayed"
		},{
		value:"url([url])",
		desc:"The URL to the image. To specify more than one image, separate the URLs with a comma"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
backgroundOrigin:{
    anim:0,
    desc:"The background-origin property specifies where the background image is positioned",
    options:[{
		value:"padding-box",
		desc:"The background image starts from the upper left corner of the padding edge"
		},{
		value:"border-box",
		desc:"The background image starts from the upper left corner of the border"
		},{
		value:"contentc-box",
		desc:"The background image starts from the upper left corner of the content"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
backgroundPosition:{
    anim:0,
    desc:"The background-position property sets the starting position of a background image",
    options:[{
		value:"% %",
		desc:"the starting x percentage position of the image"
		},{
		value:"px px",
		desc:"the starting x position in pixels of the image"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
backgroundPositionX:{
    anim:0,
    desc:"The background-position property sets the starting position of a background image",
    options:[{
		value:"[hposition]",
		desc:"the general starting x position"
		},{
		value:"%",
		desc:"the starting x percentage position of the image"
		},{
		value:"px",
		desc:"the starting x position in pixels of the image"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
backgroundPositionY:{
    anim:0,
    desc:"The background-position property sets the starting position of a background image",
    options:[{
		value:"[vposition]",
		desc:"the general starting y position"
		},{
		value:"%",
		desc:"the starting y percentage position of the image"
		},{
		value:"px",
		desc:"the starting y position in pixels of the image"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
backgroundRepeat:{
    anim:0,
    desc:"The background-repeat property sets if/how a background image will be repeated. By default, a background-image is repeated both vertically and horizontally",
    options:[{
		value:"repeat",
		desc:"The background image will be repeated both vertically and horizontally"
		},{
		value:"repeat-x",
		desc:"The background image will be repeated only horizontally"
		},{
		value:"repeat-y",
		desc:"The background image will be repeated only vertically"
		},{
		value:"no-repeat",
		desc:"The background-image will not be repeated"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
backgroundSize:{
    anim:0,
    desc:"The background-size property specifies the size of the background images",
    options:[{
		value:"auto",
		desc:"The background-image contains its width and height"
		},{
		value:"px px",
		desc:"Sets the width and height of the background image. The first value sets the width, the second value sets the height. If only one value is given, the second is set to auto"
		},{
		value:"% %",
		desc:"Sets the width and height of the background image in percent of the parent element. The first value sets the width, the second value sets the height. If only one value is given, the second is set to auto"
		},{
		value:"cover",
		desc:"Scale the background image to be as large as possible so that the background area is completely covered by the background image. Some parts of the background image may not be in view within the background positioning area"
		},{
		value:"contain",
		desc:"Scale the image to the largest size such that both its width and its height can fit inside the content area"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
baselineShift:{
    anim:0,
    desc:"The baseline-shift property allows repositioning of the dominant-baseline relative to the dominant-baseline. The shifted object might be a sub- or superscript. Within the shifted element, the whole baseline table is offset; not just a single baseline. For sub- and superscript, the amount of offset is determined from the nominal font of the parent",
    options:[{
		value:"baseline",
		desc:"There is no baseline shift; the dominant baseline remains in its original position"
		},{
		value:"sub",
		desc:"The dominant baseline is shifted to the default position for subscripts. The offset for this position is determined by the font data for the parent nominal font as adjusted by the dominant baseline-table font-size of the parent element. If there is no applicable font data the User Agent may use heuristic to determine the offset"
		},{
		value:"super",
		desc:"The dominant baseline is shifted to the default position for superscripts. The offset for this position is determined by the font data for the parent nominal font as adjusted by the dominant baseline-table font-size of the parent element. If there is no applicable font data the User Agent may use heuristic to determine the offset"
		},{
		value:"%",
		desc:"The computed value of the property is this percentage multiplied by the computed 'line-height' of the parent element. The dominant-baseline is shifted in the shift-direction (positive value) or opposite to the shift-direction (negative value) of the parent area by the computed value. A value of '0%' is equivalent to 'baseline'"
		},{
		value:"px",
		desc:"The dominant-baseline is shifted in the shift-direction (positive value) or opposite to the shift-direction (negative value) of the parent area by the [length] value. A value of '0cm' is equivalent to 'baseline'"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
border:{
    anim:0,
    desc:"Shortcut border property",
	    draw:function (x,y, w, h, value) {
	        return "<div style='display:inline-block;overflow:hidden;ileft:" + x + "px;itop:" + y + "px;width:" + w + "px;height:" + h + "px;position:relative;'><div style='border:" + value + ";width:" + w + "px;height:" + h + "px;top:10px;left:10px;'></div></div>";

    },
    options:[{
        value:"examples",
        desc:"Check em out!"
        }]
    },
borderBottomColor:{
    anim:0,
    desc:"The border-bottom-color property sets the color of an element's bottom border",
    draw:function (x,y, w, h, value) {
        return "<div style='display:inline-block;ileft:" + x + "px;itop:" + y + "px;width:" + w + "px;height:" + h + "px;background-color:" + value + ";'></div>";

    },
    options:[{
		value:"[color]",
		desc:"The color of the border"
		},{
		value:"transparent",
		desc:"Specifies that the border color should be transparent"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
borderBottomLeftRadius:{
    anim:0,
    desc:"The border-bottom-left-radius property defines the shape of the border of the bottom-left corner",
    options:[{
		value:"px px",
		desc:"Defines the shape of the bottom-left corner. Default value is 0"
		},{
		value:"% %",
		desc:"Defines the shape of the bottom-left corner in %"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
borderBottomRightRadius:{
    anim:0,
    desc:"The border-bottom-right-radius property defines the shape of the border of the bottom-right corner",
    options:[{
		value:"px px",
		desc:"Defines the shape of the bottom-right corner. Default value is 0"
		},{
		value:"% %",
		desc:"Defines the shape of the bottom-right corner in %"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
borderBottomStyle:{
    anim:0,
    desc:"The border-bottom-style property sets the style of an element's bottom border",
    options:[{
		value:"none",
		desc:"Specifies no border"
		},{
		value:"hidden",
		desc:"The same as 'none', except in border conflict resolution for table elements"
		},{
		value:"dotted",
		desc:"Specifies a dotted border"
		},{
		value:"dashed",
		desc:"Specifies a dashed border"
		},{
		value:"solid",
		desc:"Specifies a solid border"
		},{
		value:"double",
		desc:"Specifies a double border"
		},{
		value:"groove",
		desc:"Specifies a 3D grooved border. The effect depends on border color value"
		},{
		value:"ridge",
		desc:"Specifies a 3D ridged border. The effect depends on border color value"
		},{
		value:"inset",
		desc:"Specifies a 3D inset border. The effect depends on border color value"
		},{
		value:"outset",
		desc:"Specifies a 3D outset border. The effect depends on border color value"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
 borderBottomWidth:{
    anim:0,
    desc:"The border-bottom-width property sets the width of an element's bottom border",
    options:[{
		value:"medium",
		desc:"Specifies a medium bottom border"
		},{
		value:"thin",
		desc:"Specifies a thin bottom border"
		},{
		value:"thick",
		desc:"Specifies a thick bottom border"
		},{
		value:"px",
		desc:"Allows you to define the thickness of the bottom border"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
borderCollapse:{
	    desc:"The border-collapse property sets whether the table borders are collapsed into a single border or detached as in standard HTML",
	    options:[{
			value:"separate",
			desc:"Borders are detached (border-spacing and empty-cells properties will not be ignored)"
			},{
			value:"collapse",
			desc:"Borders are collapsed into a single border when possible (border-spacing and empty-cells properties will be ignored)"
			},{
			value:"initial",
			desc:"Sets this property to its default value"
			},{
			value:"inherit",
			desc:"Inherits this property from its parent element"
			}]
    },
borderImageOutset:{
	    desc:"The border-image-outset property specifies the amount by which the border image area extends beyond the border box",
	    options:[{
			value:"px",
			desc:"A length unit specifying how far from the edges the border-image will appear."
			},{
			value:"number",
			desc:"Represent multiples of the corresponding border-width"
			},{
			value:"initial",
			desc:"Sets this property to its default value"
			},{
			value:"inherit",
			desc:"Inherits this property from its parent element"
			}]
    },
borderImageRepeat:{
	    desc:"The border-image-repeat property specifies whether the border image should be repeated, rounded or stretched",
	    options:[{
			value:"stretch",
			desc:"The image is stretched to fill the area"
			},{
			value:"repeat",
			desc:"The image is tiled (repeated) to fill the area"
			},{
			value:"round",
			desc:"The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so it fits"
			},{
			value:"space",
			desc:"The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles"
			},{
			value:"initial",
			desc:"Sets this property to its default value"
			},{
			value:"inherit",
			desc:"Inherits this property from its parent element"
			}]
    },
borderImageSlice:{
	    desc:"The border-image-slice property specifies how to slice the image specified by border-image-source. The image is always sliced into nine sections: four corners, four edges and the middle. The 'middle' part is treated as fully transparent, unless the fill keyword is set.",
	    options:[{
			value:"number",
			desc:"The number(s) represent pixels for raster images or coordinates for vector images"
			},{
			value:"%",
			desc:"Percentages are relative to the height or width of the image"
			},{
			value:"fill",
			desc:"Causes the middle part of the image to be displayed"
			},{
			value:"initial",
			desc:"Sets this property to its default value"
			},{
			value:"inherit",
			desc:"Inherits this property from its parent element"
			}]
    },
borderImageSource:{
	    desc:"The border-image-source property specifies the path to the image to be used as a border (instead of the normal border around an element).",
	    options:[{
			value:"none",
			desc:"The number(s) represent pixels for raster images or coordinates for vector images"
			},{
			value:"[image]",
			desc:"The path to the image to be used as a border"
			},{
			value:"initial",
			desc:"Sets this property to its default value"
			},{
			value:"inherit",
			desc:"Inherits this property from its parent element"
			}]
    },
borderImageWidth:{
	    desc:"The border-image-width property specifies the width of the border image",
	    options:[{
			value:"px",
			desc:"A length unit (px) specifying the size of the border-width"
			},{
			value:"number",
			desc:"Default value 1. Represents multiples of the corresponding border-width"
			},{
			value:"%",
			desc:"Refers to the size of the border image area: the width of the area for horizontal offsets, the height for vertical offsets"
			},{
			value:"auto",
			desc:"If specified, the width is the intrinsic width or height of the corresponding image slice"
			},{
			value:"initial",
			desc:"Sets this property to its default value"
			},{
			value:"inherit",
			desc:"Inherits this property from its parent element"
			}]
    },
borderLeftColor:{
    anim:0,
    desc:"The border-left-color property sets the color of an element's left border",
    draw:function (x,y, w, h, value) {
        return "<div style='display:inline-block;ileft:" + x + "px;itop:" + y + "px;width:" + w + "px;height:" + h + "px;background-color:" + value + ";'></div>";

    },
    options:[{
		value:"[color]",
		desc:"The color of the left border"
		},{
		value:"transparent",
		desc:"Specifies that the left border color should be transparent"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
borderLeftStyle:{
    anim:0,
    desc:"The border-left-style property sets the style of an element's left border",
    options:[{
		value:"none",
		desc:"Specifies no border"
		},{
		value:"hidden",
		desc:"The same as 'none', except in border conflict resolution for table elements"
		},{
		value:"dotted",
		desc:"Specifies a dotted border"
		},{
		value:"dashed",
		desc:"Specifies a dashed border"
		},{
		value:"solid",
		desc:"Specifies a solid border"
		},{
		value:"double",
		desc:"Specifies a double border"
		},{
		value:"groove",
		desc:"Specifies a 3D grooved border. The effect depends on border color value"
		},{
		value:"ridge",
		desc:"Specifies a 3D ridged border. The effect depends on border color value"
		},{
		value:"inset",
		desc:"Specifies a 3D inset border. The effect depends on border color value"
		},{
		value:"outset",
		desc:"Specifies a 3D outset border. The effect depends on border color value"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
 borderLeftWidth:{
    anim:0,
    desc:"The border-left-width property sets the width of an element's left border",
    options:[{
		value:"medium",
		desc:"Specifies a medium left border"
		},{
		value:"thin",
		desc:"Specifies a thin left border"
		},{
		value:"thick",
		desc:"Specifies a thick left border"
		},{
		value:"px",
		desc:"Allows you to define the thickness of the left border"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
borderRightColor:{
    anim:0,
    desc:"The border-right-color property sets the color of an element's right border",
    draw:function (x,y, w, h, value) {
        return "<div style='display:inline-block;ileft:" + x + "px;itop:" + y + "px;width:" + w + "px;height:" + h + "px;background-color:" + value + ";'></div>";

    },
    options:[{
		value:"[color]",
		desc:"The color of the right border"
		},{
		value:"transparent",
		desc:"Specifies that the right border color should be transparent"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
borderRightStyle:{
    anim:0,
    desc:"The border-right-style property sets the style of an element's right border",
    options:[{
		value:"none",
		desc:"Specifies no border"
		},{
		value:"hidden",
		desc:"The same as 'none', except in border conflict resolution for table elements"
		},{
		value:"dotted",
		desc:"Specifies a dotted border"
		},{
		value:"dashed",
		desc:"Specifies a dashed border"
		},{
		value:"solid",
		desc:"Specifies a solid border"
		},{
		value:"double",
		desc:"Specifies a double border"
		},{
		value:"groove",
		desc:"Specifies a 3D grooved border. The effect depends on border color value"
		},{
		value:"ridge",
		desc:"Specifies a 3D ridged border. The effect depends on border color value"
		},{
		value:"inset",
		desc:"Specifies a 3D inset border. The effect depends on border color value"
		},{
		value:"outset",
		desc:"Specifies a 3D outset border. The effect depends on border color value"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
 borderRightWidth:{
    anim:0,
    desc:"The border-right-width property sets the width of an element's right border",
    options:[{
		value:"medium",
		desc:"Specifies a medium right border"
		},{
		value:"thin",
		desc:"Specifies a thin right border"
		},{
		value:"thick",
		desc:"Specifies a thick right border"
		},{
		value:"px",
		desc:"Allows you to define the thickness of the right border"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
 borderSpacing:{
    anim:0,
    desc:"The border-spacing property sets the distance between the borders of adjacent cells (only for the 'separated borders' model)",
    options:[{
		value:"px px",
		desc:"Specifies the distance between the borders of adjacent cells in px, cm, etc. Negative values are not allowed. If one length value is specified, it specifies both the horizontal and vertical spacing.  If two length values are specified, the first sets the horizontal spacing and the second sets the vertical spacing"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
borderTopColor:{
    anim:0,
    desc:"The border-top-color property sets the color of an element's top border",
    draw:function (x,y, w, h, value) {
        return "<div style='display:inline-block;ileft:" + x + "px;itop:" + y + "px;width:" + w + "px;height:" + h + "px;background-color:" + value + ";'></div>";

    },
    options:[{
		value:"[color]",
		desc:"The color of the border"
		},{
		value:"transparent",
		desc:"Specifies that the border color should be transparent"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
borderTopLeftRadius:{
    anim:0,
    desc:"The border-top-left-radius property defines the shape of the border of the top-left corner",
    options:[{
		value:"px px",
		desc:"Defines the shape of the top-left corner. Default value is 0"
		},{
		value:"% %",
		desc:"Defines the shape of the top-left corner in %"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
borderTopRightRadius:{
    anim:0,
    desc:"The border-top-right-radius property defines the shape of the border of the top-right corner",
    options:[{
		value:"px px",
		desc:"Defines the shape of the top-right corner. Default value is 0"
		},{
		value:"% %",
		desc:"Defines the shape of the top-right corner in %"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
borderTopStyle:{
    anim:0,
    desc:"The border-top-style property sets the style of an element's top border",
    options:[{
		value:"none",
		desc:"Specifies no border"
		},{
		value:"hidden",
		desc:"The same as 'none', except in border conflict resolution for table elements"
		},{
		value:"dotted",
		desc:"Specifies a dotted border"
		},{
		value:"dashed",
		desc:"Specifies a dashed border"
		},{
		value:"solid",
		desc:"Specifies a solid border"
		},{
		value:"double",
		desc:"Specifies a double border"
		},{
		value:"groove",
		desc:"Specifies a 3D grooved border. The effect depends on border color value"
		},{
		value:"ridge",
		desc:"Specifies a 3D ridged border. The effect depends on border color value"
		},{
		value:"inset",
		desc:"Specifies a 3D inset border. The effect depends on border color value"
		},{
		value:"outset",
		desc:"Specifies a 3D outset border. The effect depends on border color value"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
 borderTopWidth:{
    anim:0,
    desc:"The border-top-width property sets the width of an element's top border",
    options:[{
		value:"medium",
		desc:"Specifies a medium bottom border"
		},{
		value:"thin",
		desc:"Specifies a thin bottom border"
		},{
		value:"thick",
		desc:"Specifies a thick bottom border"
		},{
		value:"px",
		desc:"Allows you to define the thickness of the bottom border"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
bottom:{
    anim:0,
    desc:"For absolutely positioned elements, the bottom property sets the bottom edge of an element to a unit above/below the bottom edge of its containing element. For relatively positioned elements, the bottom property sets the bottom edge of an element to a unit above/below its normal position.",
    options:[{
		value:"auto",
		desc:"Lets the browser calculate the bottom edge position. This is default"
		},{
		value:"px",
		desc:"Sets the bottom edge position in px, cm, etc. Negative values are allowed"
		},{
		value:"%",
		desc:"Sets the bottom edge position in % of containing element. Negative values are allowed"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
boxShadow:{
    anim:0,
    desc:"The box-shadow property attaches one or more shadows to an element.",
    options:[{
		value:"none",
		desc:"No shadow is displayed"
		},{
		value:"h-shadow",
		desc:"Required. The position of the horizontal shadow. Negative values are allowed"
		},{
		value:"v-shadow",
		desc:"Required. The position of the vertical shadow. Negative values are allowed"
		},{
		value:"blur",
		desc:"Optional. The blur distance"
		},{
		value:"spread",
		desc:"Optional. The size of shadow. Negative values are allowed"
		},{
		value:"color",
		desc:"Optional. The color of the shadow. The default value is black. Look at CSS Color Values for a complete list of possible color values"
		},{
		value:"inset",
		desc:"Optional. Changes the shadow from an outer shadow (outset) to an inner shadow"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
boxSizing:{
    anim:0,
    desc:"The box-sizing property is used to tell the browser what the sizing properties (width and height) should include. Should they include the border-box? Or just the content-box (which is the default value of the width and height properties)?",
    options:[{
		value:"content-box",
		desc:"The width and height properties (and min/max properties) includes only the content. Border, padding, or margin are not included"
		},{
		value:"border-box",
		desc:"The width and height properties (and min/max properties) includes content, padding and border, but not the margin"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
captionSide:{
    anim:0,
    desc:"The caption-side property specifies the placement of a table caption.",
    options:[{
		value:"top",
		desc:"Puts the caption above the table. This is default"
		},{
		value:"bottom",
		desc:"Puts the caption below the table"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
clear:{
    anim:0,
    desc:"The clear property specifies on which sides of an element where floating elements are not allowed to float.",
    options:[{
		value:"none",
		desc:"Allows floating elements on both sides"
		},{
		value:"left",
		desc:"No floating elements allowed on the left side"
		},{
		value:"right",
		desc:"No floating elements allowed on the right side"
		},{
		value:"both",
		desc:"No floating elements allowed on either the left or the right side"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
clip:{
    anim:0,
    desc:"What happens if an image is larger than its containing element? - The clip property lets you specify a rectangle to clip an absolutely positioned element. The rectangle is specified as four coordinates, all from the top-left corner of the element to be clipped.",
    options:[{
		value:"auto",
		desc:"No clipping will be applied"
		},{
		value:"shape",
		desc:"Clips an element. The only valid value is: rect (top, right, bottom, left)"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
color:{
    anim:0,
    desc:"Set the text-color for different elements:",
    draw:function (x,y, w, h, value) {
        return "<div style='display:inline-block;ileft:" + x + "px;itop:" + y + "px;width:" + w + "px;height:" + h + "px;background-color:" + value + ";'></div>";

    },
    options:[{
		value:"color",
		desc:"Specifies the text color"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}]
    },
columnCount:{
    anim:0,
    desc:"The column-count property specifies the number of columns an element should be divided into.",
    options:[{
		value:"auto",
		desc:"The number of columns will be determined by other properties, like e.g. 'column-width'"
		},{
		value:"number",
		desc:"The optimal number of columns into which the content of the element will be flowed"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    webkit:"-webkit-column-count",
	    moz:"-moz-column-count",
	    ie:"column-count"
	}
    },
columnFill:{
    anim:0,
    desc:"The column-fill property specifies how to fill columns, balanced or not.",
    options:[{
		value:"balance",
		desc:"Columns are balanced. Browsers should minimize the variation in column lengthc"
		},{
		value:"auto",
		desc:"Columns are filled sequentially, and they will have different lengths"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    webkit:"-webkit-column-fill",
	    moz:"-moz-column-fill",
	    ie:"column-fill"
	}
    },
columnGap:{
    anim:0,
    desc:"The column-gap property specifies the gap between the columns.",
    options:[{
		value:"normal",
		desc:"Specifies a normal gap between the columns. W3C suggests a value of 1em"
		},{
		value:"px",
		desc:"A specified length that will set the gap between the columns"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    webkit:"-webkit-column-gap",
	    moz:"-moz-column-gap",
	    ie:"column-gap"
	}
    },
columnRuleColor:{
    anim:0,
    desc:"The column-rule-color property specifies the color of the rule between columns.",
	draw:function (x,y, w, h, value) {
	        return "<div style='display:inline-block;ileft:" + x + "px;itop:" + y + "px;width:" + w + "px;height:" + h + "px;background-color:" + value + ";'></div>";

    },
    options:[{
		value:"[color]",
		desc:"Specifies the color of the rule."
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    webkit:"-webkit-column-rule-color",
	    moz:"-moz-column-rule-color",
	    ie:"column-rule-color"
	}
    },
columnRuleStyle:{
    anim:0,
    desc:"The column-rule-style property specifies the style of the rule between columns.",
    options:[{
		value:"none",
		desc:"Specifies no rule"
		},{
		value:"hidden",
		desc:"Defines a hidden rule"
		},{
		value:"dotted",
		desc:"Specifies a dotted rule"
		},{
		value:"dashed",
		desc:"Specifies a dashed rule"
		},{
		value:"solid",
		desc:"Specifies a solid rule"
		},{
		value:"double",
		desc:"Specifies a double rule"
		},{
		value:"groove",
		desc:"Specifies a 3D grooved rule. The effect depends on border color value"
		},{
		value:"ridge",
		desc:"Specifies a 3D ridged rule. The effect depends on border color value"
		},{
		value:"inset",
		desc:"Specifies a 3D inset rule. The effect depends on border color value"
		},{
		value:"outset",
		desc:"Specifies a 3D outset rule. The effect depends on border color value"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    webkit:"-webkit-column-rule-style",
	    moz:"-moz-column-rule-style",
	    ie:"column-rule-style"
	}
    },
columnRuleWidth:{
    anim:0,
    desc:"The column-rule-width property specifies the width of the rule between columns.",
    options:[{
		value:"medium",
		desc:"Specifies a medium rule"
		},{
		value:"thin",
		desc:"Specifies a thin rule"
		},{
		value:"thick",
		desc:"Specifies a thick rule"
		},{
		value:"px",
		desc:"Allows you to define the thickness of the rule"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    webkit:"-webkit-column-rule-width",
	    moz:"-moz-column-rule-width",
	    ie:"column-rule-width"
	}
    },
columnSpan:{
    anim:0,
    desc:"The column-span property specifies how many columns an element should span across.",
    options:[{
		value:"1",
		desc:"The element should span across one column"
		},{
		value:"all",
		desc:"The element should span across all columns"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    webkit:"-webkit-column-span",
	    moz:"-moz-column-span",
	    ie:"column-span"
	}
    },
columnWidth:{
    anim:0,
    desc:"The column-width property specifies a suggested, optimal width for the columns.",
    options:[{
		value:"auto",
		desc:"The column width will be determined by the browser"
		},{
		value:"px",
		desc:"A length that specifies the width of the columns"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    webkit:"-webkit-column-width",
	    moz:"-moz-column-width",
	    ie:"column-width"
	}
    },
content:{
    anim:0,
    desc:"The content property is used with the :before and :after pseudo-elements, to insert generated content",
    options:[{
		value:"normal",
		desc:"Sets the content, if specified, to normal, which default is 'none' (which is nothing)"
		},{
		value:"none",
		desc:"Sets the content, if specified, to nothing"
		},{
		value:"counter",
		desc:"Sets the content as a counter"
		},{
		value:"attr(attribute)",
		desc:"Sets the content as one of the selector's attribute"
		},{
		value:"[string]",
		desc:"Sets the content to the text you specify"
		},{
		value:"open-quote",
		desc:"Sets the content to be an opening quote"
		},{
		value:"close-quote",
		desc:"Sets the content to be an closing quote"
		},{
		value:"no-open-quote",
		desc:"Removes the opening quote from the content, if specified"
		},{
		value:"no-close-quote",
		desc:"Removes the closing quote from the content, if specified"
		},{
		value:"url(url)",
		desc:"Sets the content to be some kind of media (an image, a sound, a video, etc.)"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"content"
	}
    },
counterIncrement:{
    anim:0,
    desc:"The counter-increment property increments one or more counter values. The counter-increment property is usually used together with the counter-reset property and the content property.",
    options:[{
		value:"none",
		desc:"No counters will be incremented"
		},{
		value:"id number",
		desc:"The id defines which counter that should be incremented. The number sets how much the counter will increment on each occurrence of the selector. The default increment is 1. 0 or negative values, are allowed. If the id refers to a counter that has not been initialized by counter-reset, the default initial value is 0"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"counter-increment"
	}
    },
counterReset:{
    anim:0,
    desc:"The counter-reset property creates or resets one or more counters.  The counter-reset property is usually used together with the counter-increment property and the content property.",
    options:[{
		value:"none",
		desc:"No counters will be reset"
		},{
		value:"name",
		desc:"The name defines which counter that should be reset"
		},{
		value:"number",
		desc:"The id defines which counter that should be reset. The number sets the value the counter is set to on each occurrence of the selector. The default reset value is 0"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"counter-reset"
	}
    },
cursor:{
    anim:0,
    desc:"The cursor property specifies the type of cursor to be displayed when pointing on an element.",
    options:[{
		value:"auto",
		desc:"The browser sets a cursor"
		},{
		value:"alias",
		desc:"The cursor indicates an alias of something is to be created"
		},{
		value:"all-scroll",
		desc:"The cursor indicates that something can be scrolled in any direction"
		},{
		value:"cell",
		desc:"The cursor indicates that a cell (or set of cells) may be selected"
		},{
		value:"context-menu",
		desc:"The cursor indicates that a context-menu is available"
		},{
		value:"col-resize",
		desc:"The cursor indicates that the column can be resized horizontally"
		},{
		value:"copy",
		desc:"The cursor indicates something is to be copied"
		},{
		value:"crosshair",
		desc:"The cursor render as a crosshair"
		},{
		value:"default",
		desc:"The default cursor"
		},{
		value:"e-resize",
		desc:"The cursor indicates that an edge of a box is to be moved right (east)"
		},{
		value:"ew-resize",
		desc:"Indicates a bidirectional resize cursor"
		},{
		value:"grab",
		desc:"The cursor indicates that something can be grabbed"
		},{
		value:"grabbing",
		desc:"The cursor indicates that something can be grabbed"
		},{
		value:"help",
		desc:"The cursor indicates that help is available"
		},{
		value:"move",
		desc:"The cursor indicates something is to be moved"
		},{
		value:"n-resize",
		desc:"The cursor indicates that an edge of a box is to be moved up (north)"
		},{
		value:"ne-resize",
		desc:"The cursor indicates that an edge of a box is to be moved up and right (north/east)"
		},{
		value:"nesw-resize",
		desc:"Indicates a bidirectional resize cursor"
		},{
		value:"ns-resize",
		desc:"Indicates a bidirectional resize cursor"
		},{
		value:"nw-resize",
		desc:"The cursor indicates that an edge of a box is to be moved up and left (north/west)"
		},{
		value:"nwse-resize",
		desc:"Indicates a bidirectional resize cursor"
		},{
		value:"no-drop",
		desc:"The cursor indicates that the dragged item cannot be dropped here"
		},{
		value:"none",
		desc:"No cursor is rendered for the element"
		},{
		value:"not-allowed",
		desc:"The cursor indicates that the requested action will not be executed"
		},{
		value:"pointer",
		desc:"The cursor is a pointer and indicates a link"
		},{
		value:"progress",
		desc:"The cursor indicates that the program is busy (in progress)"
		},{
		value:"row-resize",
		desc:"The cursor indicates that the row can be resized vertically"
		},{
		value:"s-resize",
		desc:"The cursor indicates that an edge of a box is to be moved down (south)"
		},{
		value:"se-resize",
		desc:"The cursor indicates that an edge of a box is to be moved down and right (south/east)"
		},{
		value:"sw-resize",
		desc:"The cursor indicates that an edge of a box is to be moved down and left (south/west)"
		},{
		value:"text",
		desc:"The cursor indicates text that may be selected"
		},{
		value:"URL",
		desc:"A comma separated list of URLs to custom cursors. Note: Always specify a generic cursor at the end of the list, in case none of the URL-defined cursors can be used"
		},{
		value:"vertical-text",
		desc:"The cursor indicates vertical-text that may be selected"
		},{
		value:"w-resize",
		desc:"The cursor indicates that an edge of a box is to be moved left (west)"
		},{
		value:"wait",
		desc:"The cursor indicates that the program is busy"
		},{
		value:"zoom-in",
		desc:"The cursor indicates that something can be zoomed in"
		},{
		value:"zoom-out",
		desc:"The cursor indicates that something can be zoomed out"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"cursor"
	}
    },
direction:{
    anim:0,
    desc:"The direction property specifies the text direction/writing direction. Tip: Use this property together with the unicode-bidi property to set or return whether the text should be overridden to support multiple languages in the same document.",
    options:[{
		value:"ltr",
		desc:"The writing direction is left-to-right. This is default"
		},{
		value:"rtl",
		desc:"The writing direction is right-to-left"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"direction"
	}
    },
display:{
    anim:0,
    desc:"The display property specifies the type of box used for an HTML element.",
    options:[{
		value:"inline",
		desc:"Displays an element as an inline element (like <span>)"
		},{
		value:"block",
		desc:"Displays an element as a block element (like <p>)"
		},{
		value:"flex",
		desc:"Displays an element as an block-level flex container. New in CSS3"
		},{
		value:"inline-block",
		desc:"Displays an element as an inline-level block container. The inside of this block is formatted as block-level box, and the element itself is formatted as an inline-level box"
		},{
		value:"inline-flex",
		desc:"Displays an element as an inline-level flex container. New in CSS3"
		},{
		value:"inline-table",
		desc:"The element is displayed as an inline-level table"
		},{
		value:"list-item",
		desc:"Let the element behave like a <li> element"
		},{
		value:"run-in",
		desc:"Displays an element as either block or inline, depending on context"
		},{
		value:"table",
		desc:"Let the element behave like a <table> element"
		},{
		value:"table-caption",
		desc:"Let the element behave like a <caption> element"
		},{
		value:"table-column-group",
		desc:"Let the element behave like a <colgroup> element"
		},{
		value:"table-header-group",
		desc:"Let the element behave like a <thead> element"
		},{
		value:"table-footer-group",
		desc:"Let the element behave like a <tfoot> element"
		},{
		value:"table-row-group",
		desc:"Let the element behave like a <tbody> element"
		},{
		value:"table-cell",
		desc:"Let the element behave like a <td> element"
		},{
		value:"table-column",
		desc:"Let the element behave like a <col> element"
		},{
		value:"table-row",
		desc:"Let the element behave like a <tr> element"
		},{
		value:"none",
		desc:"The element will not be displayed at all (has no effect on layout)"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"display"
	}
    },
emptyCells:{
    anim:0,
    desc:"The empty-cells property sets whether or not to display borders and background on empty cells in a table (only for the 'separated borders' model).",
    options:[{
		value:"show",
		desc:"Background and borders are shown on empty cells. This is default"
		},{
		value:"hide",
		desc:"No background or borders are shown on empty cells"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"empty-cells"
	}
    },
 flexBasis:{
    anim:0,
    desc:"The flex-basis property specifies the initial length of a flexible item. Note: If the element is not a flexible item, the flex-basis property has no effect.",
    options:[{
		value:"auto",
		desc:"The length is equal to the length of the flexible item. If the item has no length specified, the length will be according to its content"
		},{
		value:"number",
		desc:"A length unit, or percentage, specifying the initial length of the flexible item(s)"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"flex-basis"
	}
    },
flexDirection:{
    anim:0,
    desc:"The flex-direction property specifies the direction of the flexible items. Note: If the element is not a flexible item, the flex-direction property has no effect.",
    options:[{
		value:"row",
		desc:"The flexible items are displayed horizontally, as a row"
		},{
		value:"row-reverse",
		desc:"Same as row, but in reverse order"
		},{
		value:"column",
		desc:"The flexible items are displayed vertically, as a column"
		},{
		value:"column-reverse",
		desc:"Same as column, but in reverse order"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"flex-direction"
	}
    },
flexGrow:{
    anim:0,
    desc:"The flex-grow property specifies how much the item will grow relative to the rest of the flexible items inside the same container. Note: If the element is not a flexible item, the flex-grow property has no effect.",
    options:[{
		value:"number",
		desc:"A number specifying how much the item will grow relative to the rest of the flexible items. Default value is 0"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"flex-grow"
	}
    },
flexShrink:{
    anim:0,
    desc:"The flex-shrink property specifies how the item will shrink relative to the rest of the flexible items inside the same container. Note: If the element is not a flexible item, the flex-shrink property has no effect.",
    options:[{
		value:"number",
		desc:"A number specifying how much the item will shrink relative to the rest of the flexible items. Default value is 1"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"flex-shrink"
	}
    },
flexWrap:{
    anim:0,
    desc:"The flex-wrap property specifies whether the flexible items should wrap or not. Note: If the elements are not flexible items, the flex-wrap property has no effect.",
    options:[{
		value:"nowrap",
		desc:"Specifies that the flexible items will not wrap"
		},{
		value:"wrap",
		desc:"Specifies that the flexible items will wrap if necessary"
		},{
		value:"wrap-reverse",
		desc:"Specifies that the flexible items will wrap, if necessary, in reverse order"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"flex-wrap"
	}
    },
float:{
    anim:0,
    desc:"The float property specifies whether or not a box (an element) should float. Note: Absolutely positioned elements ignores the float property!",
    options:[{
		value:"none",
		desc:"The element is not floated, and will be displayed just where it occurs in the text."
		},{
		value:"left",
		desc:"The element floats to the left"
		},{
		value:"right",
		desc:"The element floats the right"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"float"
	}
    },
fontFamily:{
    anim:0,
    desc:"The font-family property specifies the font for an element. The font-family property can hold several font names as a 'fallback' system. If the browser does not support the first font, it tries the next font. There are two types of font family names: family-name - The name of a font-family, like 'times', 'courier', 'arial', etc.  generic-family - The name of a generic-family, like 'serif', 'sans-serif', 'cursive', 'fantasy', 'monospace'.  Start with the font you want, and always end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available. Note: Separate each value with a comma. Note: If a font name contains white-space, it must be quoted. Single quotes must be used when using the 'style' attribute in HTML.",
    options:[{
		value:"family-name, generic-family",
		desc:"A prioritized list of font family names and/or generic family names"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"font-family"
	}
    },
fontSize:{
    anim:0,
    desc:"The font-size property sets the size of a font.",
    options:[{
		value:"medium",
		desc:"Sets the font-size to a medium size."
		},{
		value:"xx-small",
		desc:"Sets the font-size to an xx-small size"
		},{
		value:"x-small",
		desc:"Sets the font-size to an extra small size"
		},{
		value:"small",
		desc:"Sets the font-size to a small size"
		},{
		value:"large",
		desc:"Sets the font-size to a large size"
		},{
		value:"x-large",
		desc:"Sets the font-size to an extra large size"
		},{
		value:"xx-large",
		desc:"Sets the font-size to an xx-large size"
		},{
		value:"smaller",
		desc:"Sets the font-size to a smaller size than the parent element"
		},{
		value:"larger",
		desc:"Sets the font-size to a larger size than the parent element"
		},{
		value:"px",
		desc:"Sets the font-size to a fixed size in px, cm, etc."
		},{
		value:"%",
		desc:"Sets the font-size to a percent of  the parent element's font size"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"font-size"
	}
    },
fontSizeAdjust:{
    anim:0,
    desc:"The font-size-adjust property gives you better control of the font size when the first selected font is not available. When a font is not available, the browser uses the second specified font. This could result in a big change for the font size. To prevent this, use the font-size-adjust property. All fonts have an 'aspect value' which is the size-difference between the lowercase letter 'x' and the uppercase letter 'X'. When the browser knows the 'aspect value' for the first selected font, the browser can figure out what font-size to use when displaying text with the second choice font.",
    options:[{
		value:"none",
		desc:"Default value. No font size adjustment"
		},{
		value:"number",
		desc:"Defines the aspect value to use"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"font-size-adjust"
	}
    },
fontStretch:{
    anim:0,
    desc:"The font-stretch property allows you to make text wider or narrower.",
    options:[{
		value:"normal",
		desc:"Default value. No font stretching"
		},{
		value:"ultra-condensed",
		desc:"Makes the text as narrow as it gets"
		},{
		value:"extra-condensed",
		desc:"Makes the text narrower than condensed, but not as narrow as ultra-condensed"
		},{
		value:"condensed",
		desc:"Makes the text narrower than semi-condensed, but not as narrow as extra-condensed"
		},{
		value:"semi-condensed",
		desc:"Makes the text narrower than normal, but not as narrow as condensed"
		},{
		value:"semi-expanded",
		desc:"Makes the text wider than normal, but not as wide as expanded"
		},{
		value:"expanded",
		desc:"Makes the text wider than semi-expanded, but not as wide as extra-expanded"
		},{
		value:"extra-expanded",
		desc:"Makes the text wider than expanded, but not as wide as ultra-expanded"
		},{
		value:"ultra-expanded",
		desc:"Makes the text as wide as it gets"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"font-stretch"
	}
    },
fontStyle:{
    anim:0,
    desc:"The font-style property specifies the font style for a text.",
    options:[{
		value:"normal",
		desc:"The browser displays a normal font style."
		},{
		value:"italic",
		desc:"The browser displays an italic font style"
		},{
		value:"oblique",
		desc:"The browser displays an oblique font style"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"font-style"
	}
    },
fontVariant:{
    anim:0,
    desc:"In a small-caps font, all lowercase letters are converted to uppercase letters. However, the converted uppercase letters appears in a smaller font size than the original uppercase letters in the text. The font-variant property specifies whether or not a text should be displayed in a small-caps font.",
    options:[{
		value:"normal",
		desc:"The browser displays a normal font."
		},{
		value:"small-caps",
		desc:"The browser displays a small-caps font"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"font-variant"
	}
	},
fontWeight:{
    anim:0,
    desc:"The font-weight property sets how thick or thin characters in text should be displayed",
    options:[{
		value:"normal",
		desc:"Defines normal characters"
		},{
		value:"bold",
		desc:"Defines thick characters"
		},{
		value:"bolder",
		desc:"Defines thicker characters"
		},{
		value:"lighter",
		desc:"Defines lighter characters"
		},{
		value:"100",
		desc:"Defines from thin to thick characters. 400-normal, and 700-bold"
		},{
		value:"200",
		desc:"Defines from thin to thick characters. 400-normal, and 700-bold"
		},{
		value:"300",
		desc:"Defines from thin to thick characters. 400-normal, and 700-bold"
		},{
		value:"400",
		desc:"Defines from thin to thick characters. 400-normal, and 700-bold"
		},{
		value:"500",
		desc:"Defines from thin to thick characters. 400-normal, and 700-bold"
		},{
		value:"600",
		desc:"Defines from thin to thick characters. 400-normal, and 700-bold"
		},{
		value:"700",
		desc:"Defines from thin to thick characters. 400-normal, and 700-bold"
		},{
		value:"800",
		desc:"Defines from thin to thick characters. 400-normal, and 700-bold"
		},{
		value:"900",
		desc:"Defines from thin to thick characters. 400-normal, and 700-bold"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"font-weight"
	}
	},
hangingPunctuation:{
    anim:0,
    desc:"The hanging-punctuation property specifies whether a punctuation mark may be placed outside the line box at the start or at the end of a full line of text.",
    options:[{
		value:"none",
		desc:"No punctuation mark may be placed outside the line box at the start or at the end of a full line of text"
		},{
		value:"first",
		desc:"Punctuation may hang outside the start edge of the first line"
		},{
		value:"last",
		desc:"Punctuation may hang outside the end edge of the last line"
		},{
		value:"allow-end",
		desc:"Punctuation may hang outside the end edge of all lines if the punctuation does not otherwise fit prior to justification"
		},{
		value:"force-end",
		desc:"Defines from thin to thick characters. 400-normal, and 700-bold"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"hanging-punctuation"
	}
	},
height:{
    anim:0,
    desc:"The height property sets the height of an element. Note: The height property does not include padding, borders, or margins; it sets the height of the area inside the padding, border, and margin of the element! Note: The min-height and max-height properties override height.",
    options:[{
		value:"auto",
		desc:"The browser calculates the height. This is default"
		},{
		value:"px",
		desc:"Defines the height in px, cm, etc"
		},{
		value:"%",
		desc:"Defines the height in percent of the containing block"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"height"
	}
	},
justifyContent:{
    anim:0,
    desc:"The justify-content property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally). Tip: Use the align-content property to align the items on the cross-axis (vertically).",
    options:[{
		value:"flex-start",
		desc:"Items are positioned at the beginning of the container"
		},{
		value:"flex-end",
		desc:"Items are positioned at the end of the container"
		},{
		value:"center",
		desc:"Items are positioned at the center of the container"
		},{
		value:"space-between",
		desc:"Items are positioned with space between the lines"
		},{
		value:"space-around",
		desc:"Items are positioned with space before, between, and after the lines"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"justify-content"
	}
	},
left:{
    anim:0,
    desc:"For absolutely positioned elements, the left property sets the left edge of an element to a unit to the left/right of the left edge of its containing element. For relatively positioned elements, the left property sets the left edge of an element to a unit to the left/right to its normal position. Note: If 'position:static', the left property has no effect.",
    options:[{
		value:"auto",
		desc:"Lets the browser calculate the left edge position"
		},{
		value:"px",
		desc:"Sets the left edge position in px, cm, etc. Negative values are allowed"
		},{
		value:"%",
		desc:"Sets the left edge position in % of containing element. Negative values are allowed"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"left"
	}
	},
letterSpacing:{
    anim:0,
    desc:"The letter-spacing property increases or decreases the space between characters in a text",
    options:[{
		value:"normal",
		desc:"No extra space between characters"
		},{
		value:"px",
		desc:"Defines an extra space between characters (negative values are allowed)"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"letter-spacing"
	}
	},
lineHeight:{
    anim:0,
    desc:"The line-height property specifies the line height.",
    options:[{
		value:"normal",
		desc:"A normal line height"
		},{
		value:"number",
		desc:"A number that will be multiplied with the current font size to set the line height"
		},{
		value:"px",
		desc:"A fixed line height in px, pt, cm, etc."
		},{
		value:"%",
		desc:"A line height in percent of the current font size"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"line-height"
	}
	},
listStyleImage:{
    anim:0,
    desc:"The list-style-image property replaces the list-item marker with an image. Note: Always specify the list-style-type property in addition. This property is used if the image for some reason is unavailable.",
    options:[{
		value:"none",
		desc:"No image will be displayed. Instead, the list-style-type property will define what type of list marker will be rendered. This is default"
		},{
		value:"url",
		desc:"The path to the image to be used as a list-item marker"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"list-style-image"
	}
	},
listStylePosition:{
    anim:0,
    desc:"The list-style-position property specifies if the list-item markers should appear inside or outside the content flow.",
    options:[{
		value:"outside",
		desc:"Keeps the marker to the left of the text. The bullets appears outside the content flow. This is default"
		},{
		value:"inside",
		desc:"Indents the marker and the text. The bullets appear inside the content flow"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"list-style-position"
	}
	},
listStyleType:{
    anim:0,
    desc:"The list-style-type specifies the type of list-item marker in a list.",
    options:[{
		value:"disc",
		desc:"The marker is a filled circle"
		},{
		value:"armenian",
		desc:"The marker is traditional Armenian numbering"
		},{
		value:"circle",
		desc:"The marker is a circle"
		},{
		value:"cjk-ideographic",
		desc:"The marker is plain ideographic numbers"
		},{
		value:"decimal",
		desc:"The marker is a number"
		},{
		value:"decimal-leading-zero",
		desc:"The marker is a number with leading zeros (01, 02, 03, etc.)"
		},{
		value:"georgian",
		desc:"The marker is traditional Georgian numbering"
		},{
		value:"hebrew",
		desc:"The marker is traditional Hebrew numbering"
		},{
		value:"hiragana",
		desc:"The marker is traditional Hiragana numbering"
		},{
		value:"hiragana-iroha",
		desc:"The marker is traditional Hiragana iroha numbering"
		},{
		value:"katakana",
		desc:"The marker is traditional Katakana numbering"
		},{
		value:"katakana-iroha",
		desc:"The marker is traditional Katakana iroha numbering"
		},{
		value:"lower-alpha",
		desc:"The marker is lower-alpha (a, b, c, d, e, etc.)"
		},{
		value:"lower-greek",
		desc:"The marker is lower-greek"
		},{
		value:"lower-latin",
		desc:"The marker is lower-latin (a, b, c, d, e, etc.)"
		},{
		value:"lower-roman",
		desc:"The marker is lower-roman (i, ii, iii, iv, v, etc.)"
		},{
		value:"none",
		desc:"No marker is shown"
		},{
		value:"square",
		desc:"The marker is a square"
		},{
		value:"upper-alpha",
		desc:"The marker is upper-alpha (A, B, C, D, E, etc.)"
		},{
		value:"upper-latin",
		desc:"The marker is upper-latin (A, B, C, D, E, etc.)"
		},{
		value:"upper-roman",
		desc:"The marker is upper-roman (I, II, III, IV, V, etc.)"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"list-style-type"
	}
	},
marginBottom:{
    anim:0,
    desc:"The margin-bottom property sets the bottom margin of an element.",
    options:[{
		value:"px",
		desc:"Specifies a fixed bottom margin in px, pt, cm, etc."
		},{
		value:"%",
		desc:"Specifies a bottom margin in percent of the width of the containing element"
		},{
		value:"auto",
		desc:"The browser calculates a bottom margin"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"margin-bottom"
	}
	},
marginTop:{
    anim:0,
    desc:"The margin-top property sets the top margin of an element.",
    options:[{
		value:"px",
		desc:"Specifies a fixed top margin in px, pt, cm, etc."
		},{
		value:"%",
		desc:"Specifies a top margin in percent of the width of the containing element"
		},{
		value:"auto",
		desc:"The browser calculates a top margin"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"margin-top"
	}
	},
marginLeft:{
    anim:0,
    desc:"The margin-left property sets the left margin of an element.",
    options:[{
		value:"px",
		desc:"Specifies a fixed left margin in px, pt, cm, etc."
		},{
		value:"%",
		desc:"Specifies a left margin in percent of the width of the containing element"
		},{
		value:"auto",
		desc:"The browser calculates a left margin"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"margin-left"
	}
	},
marginRight:{
    anim:0,
    desc:"The margin-right property sets the right margin of an element.",
    options:[{
		value:"px",
		desc:"Specifies a fixed right margin in px, pt, cm, etc."
		},{
		value:"%",
		desc:"Specifies a right margin in percent of the width of the containing element"
		},{
		value:"auto",
		desc:"The browser calculates a right margin"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"margin-right"
	}
	},
maxHeight:{
    anim:0,
    desc:"The max-height property is used to set the maximum height of an element. This prevents the value of the height property from becoming larger than max-height. Note: The value of the max-height property overrides height.",
    options:[{
		value:"none",
		desc:"No maximum height"
		},{
		value:"px",
		desc:"Defines the maximum height in px, cm, etc. "
		},{
		value:"%",
		desc:"Defines the maximum height in percent of the containing block"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"max-height"
	}
	},
maxWidth:{
    anim:0,
    desc:"The max-width property is used to set the maximum width of an element. This prevents the value of the width property from becoming larger than max-width. Note: The value of the max-width property overrides width.",
    options:[{
		value:"none",
		desc:"No maximum width"
		},{
		value:"px",
		desc:"Defines the maximum width in px, cm, etc. "
		},{
		value:"%",
		desc:"Defines the maximum width in percent of the containing block"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"max-width"
	}
	},
minHeight:{
    anim:0,
    desc:"The min-height property is used to set the minimum height of an element. This prevents the value of the height property from becoming smaller than min-height. Note: The value of the min-height property overrides both max-height and height.",
    options:[{
		value:"none",
		desc:"No minimum height"
		},{
		value:"px",
		desc:"Defines the minimum height in px, cm, etc. "
		},{
		value:"%",
		desc:"Defines the minimum height in percent of the containing block"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"max-width"
	}
	},
minWidth:{
    anim:0,
    desc:"The min-width property is used to set the minimum width of an element. This prevents the value of the width property from becoming smaller than min-width. Note: The value of the min-width property overrides both max-width and width.",
    options:[{
		value:"none",
		desc:"No minimum width"
		},{
		value:"px",
		desc:"Defines the minimum width in px, cm, etc. "
		},{
		value:"%",
		desc:"Defines the minimum width in percent of the containing block"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"max-width"
	}
	},

navDown:{
    anim:0,
    desc:"The nav-down property specifies where to navigate when using the arrow-down navigation key.",
    options:[{
		value:"auto",
		desc:"Default value. The browser determines which element to navigate to"
		},{
		value:"id",
		desc:"Specifies the id of the element to navigate to"
		},{
		value:"target-name",
		desc:"Specifies the target frame to navigate to"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"nav-down"
	}
	},
navUp:{
    anim:0,
    desc:"The nav-up property specifies where to navigate when using the arrow-up navigation key.",
    options:[{
		value:"auto",
		desc:"Default value. The browser determines which element to navigate to"
		},{
		value:"id",
		desc:"Specifies the id of the element to navigate to"
		},{
		value:"target-name",
		desc:"Specifies the target frame to navigate to"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"nav-up"
	}
	},
navIndex:{
    anim:0,
    desc:"The nav-index property specifies the sequential navigation order ('tabbing order') for an element.",
    options:[{
		value:"auto",
		desc:"The element's tabbing order is assigned by the browser"
		},{
		value:"number",
		desc:"Indicates the tabbing order for the element. 1 means first"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"nav-up"
	}
	},
navLeft:{
    anim:0,
    desc:"The nav-left property specifies where to navigate when using the arrow-left navigation key.",
    options:[{
		value:"auto",
		desc:"Default value. The browser determines which element to navigate to"
		},{
		value:"id",
		desc:"Specifies the id of the element to navigate to"
		},{
		value:"target-name",
		desc:"Specifies the target frame to navigate to"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"nav-left"
	}
	},
navRight:{
    anim:0,
    desc:"The nav-right property specifies where to navigate when using the arrow-right navigation key.",
    options:[{
		value:"auto",
		desc:"Default value. The browser determines which element to navigate to"
		},{
		value:"id",
		desc:"Specifies the id of the element to navigate to"
		},{
		value:"target-name",
		desc:"Specifies the target frame to navigate to"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"nav-right"
	}
	},
opacity:{
    anim:0,
    desc:"The opacity property sets the opacity level for an element. The opacity-level describes the transparency-level, where 1 is not transparant at all, 0.5 is 50% see-through, and 0 is completely transparent.",
    options:[{
		value:"number",
		desc:"Specifies the opacity. From 0.0 (fully transparent) to 1.0 (fully opaque)"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"opacity"
	}
	},
order:{
    anim:0,
    desc:"The order property specifies the order of a flexible item relative to the rest of the flexible items inside the same container. Note: If the element is not a flexible item, the order property has no effect.",
    options:[{
		value:"number",
		desc:"Default value 0. Specifies the order for the flexible item"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"order"
	}
	},
outlineColor:{
    anim:0,
    desc:"An outline is a line that is drawn around elements (outside the borders) to make the element 'stand out'. The outline-color property specifies the color of an outline. Note: Always declare the outline-style property before the outline-color property. An element must have an outline before you change the color of it.",
    draw:function (x,y, w, h, value) {
        return "<div style='display:inline-block;ileft:" + x + "px;itop:" + y + "px;width:" + w + "px;height:" + h + "px;background-color:" + value + ";'></div>";

    },
    options:[{
		value:"invert",
		desc:"Performs a color inversion. This ensures that the outline is visible, regardless of color background. This is default"
		},{
		value:"color",
		desc:"Specifies the color of the outline"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"outline-color"
	}
	},
outlineOffset:{
    anim:0,
    desc:"The outline-offset property adds space between an outline and the edge or border of an element.  Outlines differ from borders in two ways: An outline is a line drawn around elements, outside the border edge  A outline do not take up space  An outline may be non-rectangular",
    options:[{
		value:"px",
		desc:"The distance the outline is outset from the border edge. Default value is 0"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"outline-offset"
	}
	},
outlineStyle:{
    anim:0,
    desc:"An outline is a line that is drawn around elements (outside the borders) to make the element 'stand out'. The outline-style property specifies the style of an outline.",
    options:[{
		value:"none",
		desc:"Specifies no outline"
		},{
		value:"hidden",
		desc:"Specifies a hidden outline"
		},{
		value:"dotted",
		desc:"Specifies a dotted outline"
		},{
		value:"dashed",
		desc:"Specifies a dashed outline"
		},{
		value:"solid",
		desc:"Specifies a solid outline"
		},{
		value:"double",
		desc:"Specifies a double outline"
		},{
		value:"groove",
		desc:"Specifies a 3D grooved outline. The effect depends on outline color value"
		},{
		value:"ridge",
		desc:"Specifies a 3D ridged outline. The effect depends on outline color value"
		},{
		value:"inset",
		desc:"Specifies a 3D inset outline. The effect depends on outline color value"
		},{
		value:"outset",
		desc:"Specifies a 3D outset outline. The effect depends on outline color value"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"outline-style"
	}
	},
outlineWidth:{
    anim:0,
    desc:"An outline is a line that is drawn around elements (outside the borders) to make the element 'stand out'. The outline-width specifies the width of an outline.  Note: Always declare the outline-style property before the outline-width property. An element must have an outline before you change the width of it.",
    options:[{
		value:"medium",
		desc:"Specifies a medium outline. This is default"
		},{
		value:"thin",
		desc:"Specifies a thin outline"
		},{
		value:"thick",
		desc:"Specifies a thick outline"
		},{
		value:"px",
		desc:"Allows you to define the thickness of the outline"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"outline-width"
	}
	},
overflow:{
    anim:0,
    desc:"The overflow property specifies what happens if content overflows an element's box.",
    options:[{
		value:"visible",
		desc:"The overflow is not clipped. It renders outside the element's box. This is default"
		},{
		value:"hidden",
		desc:"The overflow is clipped, and the rest of the content will be invisible"
		},{
		value:"scroll",
		desc:"The overflow is clipped, but a scroll-bar is added to see the rest of the content"
		},{
		value:"auto",
		desc:"If overflow is clipped, a scroll-bar should be added to see the rest of the content"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"overflow"
	}
	},
overflowX:{
    anim:0,
    desc:"The overflow-x property specifies what to do with the left/right edges of the content - if it overflows the element's content area. Tip: Use the overflow-y property to determine clipping at the top and bottom edges",
    options:[{
		value:"visible",
		desc:"The overflow is not clipped. It renders outside the element's box. This is default"
		},{
		value:"hidden",
		desc:"The content is clipped - and no scrolling mechanism is provided"
		},{
		value:"scroll",
		desc:"The content is clipped and a scrolling mechanism is provided"
		},{
		value:"auto",
		desc:"Should cause a scrolling mechanism to be provided for overflowing boxes"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"overflow-x"
	}
	},
overflowY:{
    anim:0,
    desc:"The overflow-y property specifies what to do with the top/bottom edges of the content - if it overflows the element's content area. Tip: Use the overflow-x property to determine clipping at the left and right edges.",
    options:[{
		value:"visible",
		desc:"The content is not clipped, and it may be rendered outside the content box"
		},{
		value:"hidden",
		desc:"The content is clipped - and no scrolling mechanism is provided"
		},{
		value:"scroll",
		desc:"The content is clipped and a scrolling mechanism is provided"
		},{
		value:"auto",
		desc:"Should cause a scrolling mechanism to be provided for overflowing boxes"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"overflow-y"
	}
	},
paddingBottom:{
    anim:0,
    desc:"The padding-bottom property sets the bottom padding (space) of an element. Note: Negative values are not allowed.",
    options:[{
		value:"px",
		desc:"Specifies a fixed bottom padding in px, pt, cm, etc. Default value is 0"
		},{
		value:"%",
		desc:"Specifies a bottom padding in percent of the width of the containing element"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"padding-bottom"
	}
	},
paddingLeft:{
    anim:0,
    desc:"The padding-left property sets the left padding (space) of an element. Note: Negative values are not allowed.",
    options:[{
		value:"px",
		desc:"Specifies a fixed left padding in px, pt, cm, etc. Default value is 0"
		},{
		value:"%",
		desc:"Specifies a left padding in percent of the width of the containing element"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"padding-left"
	}
	},
paddingRight:{
    anim:0,
    desc:"The padding-right property sets the right padding (space) of an element. Note: Negative values are not allowed.",
    options:[{
		value:"px",
		desc:"Specifies a fixed right padding in px, pt, cm, etc. Default value is 0"
		},{
		value:"%",
		desc:"Specifies a right padding in percent of the width of the containing element"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"padding-right"
	}
	},
paddingTop:{
    anim:0,
    desc:"The padding-top property sets the top padding (space) of an element. Note: Negative values are not allowed.",
    options:[{
		value:"px",
		desc:"Specifies a fixed top padding in px, pt, cm, etc. Default value is 0"
		},{
		value:"%",
		desc:"Specifies a top padding in percent of the width of the containing element"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"padding-top"
	}
	},
pageBreakAfter:{
    anim:0,
    desc:"The page-break-after property sets whether a page break should occur AFTER a specified element.  Note: You cannot use this property on an empty <div> or on absolutely positioned elements.",
    options:[{
		value:"auto",
		desc:"Automatic page breaks"
		},{
		value:"always",
		desc:"Always insert a page break after the element"
		},{
		value:"avoid",
		desc:"Avoid page break after the element (if possible)"
		},{
		value:"left",
		desc:"Insert page breaks after the element so that the next page is formatted as a left page"
		},{
		value:"right",
		desc:"Insert page breaks after the element so that the next page is formatted as a right page"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"page-break-after"
	}
	},
pageBreakBefore:{
    anim:0,
    desc:"The page-break-before property sets whether a page break should occur BEFORE a specified element. Note: You cannot use this property on an empty <div> or on absolutely positioned elements.",
    options:[{
		value:"auto",
		desc:"Automatic page breaks"
		},{
		value:"always",
		desc:"Always insert a page break before the element"
		},{
		value:"avoid",
		desc:"Avoid page break before the element (if possible)"
		},{
		value:"left",
		desc:"Insert page breaks before the element so that the next page is formatted as a left page"
		},{
		value:"right",
		desc:"Insert page breaks before the element so that the next page is formatted as a right page"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"page-break-before"
	}
	},
pageBreakInside:{
    anim:0,
    desc:"The page-break-inside property sets whether a page break is allowed inside a specified element. Note: You cannot use this property on absolutely positioned elements.",
    options:[{
		value:"auto",
		desc:"Automatic page breaks"
		},{
		value:"avoid",
		desc:"Avoid page break inside the element (if possible)"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"page-break-inside"
	}
	},
perspective:{
    anim:0,
    desc:"The perspective property defines how many pixels a 3D element is placed from the view. This property allows you to change the perspective on how 3D elements are viewed.  When defining the perspective property for an element, it is the CHILD elements that get the perspective view, NOT the element itself. Note: The perspective property only affects 3D transformed elements! Tip: Use this property together with the perspective-origin property, which allows you to change the bottom position of 3D elements.",
    options:[{
		value:"none",
		desc:"Same as 0. The perspective is not set"
		},{
		value:"px",
		desc:"How far the element is placed from the view"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"perspective",
	    webkit:"-webkit-perspective"
	}
	},
perspectiveOrigin:{
    anim:0,
    desc:"The perspective-origin property defines where a 3D element is based in the x- and the y-axis. This property allows you to change the bottom position of 3D elements. When defining the perspective-origin property for an element, it is the CHILD elements that are positioned, NOT the element itself. Note: This property must be used together with the perspective property, and only affects 3D transformed elements!",
    options:[{
		value:"x-axis",
		desc:"Defining where the view is placed at the x-axis"
		},{
		value:"y-axis",
		desc:"Defining where the view is placed at the y-axis"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"perspective-origin",
	    webkit:"-webkit-perspective-origin"
	}
	},
position:{
    anim:0,
    desc:"The position property specifies the type of positioning method used for an element (static, relative, absolute or fixed).",
    options:[{
		value:"static",
		desc:"Elements render in order, as they appear in the document flow"
		},{
		value:"absolute",
		desc:"The element is positioned relative to its first positioned (not static) ancestor element"
		},{
		value:"fixed",
		desc:"The element is positioned relative to the browser window"
		},{
		value:"relative",
		desc:"The element is positioned relative to its normal position, so 'left:20' adds 20 pixels to the element's LEFT position"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"position",
	}
	},
quotes:{
    anim:0,
    desc:"The quotes property sets the type of quotation marks for quotations",
    options:[{
		value:"none",
		desc:"Specifies that the 'open-quote' and 'close-quote' values of the 'content' property will not produce any quotation marks"
		},{
		value:"string string string string",
		desc:"Specifies which quotation marks to use. The first two values specifies the first level of quotation embedding, the next two values specifies the next level of quote embedding, etc"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"quotes",
	}
	},
resize:{
    anim:0,
    desc:"The resize property specifies whether or not an element is resizable by the user. Note: The resize property applies to elements whose computed overflow value is something other than 'visible'.",
    options:[{
		value:"none",
		desc:"The user cannot resize the element"
		},{
		value:"both",
		desc:"The user can adjust both the height and the width of the element"
		},{
		value:"horizontal",
		desc:"The user can adjust the width of the element"
		},{
		value:"vertical",
		desc:"The user can adjust the height of the element"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"resize",
	}
	},
right:{
    anim:0,
    desc:"For absolutely positioned elements, the right property sets the right edge of an element to a unit to the left/right of the right edge of its containing element.  For relatively positioned elements, the right property sets the right edge of an element to a unit to the left/right to its normal position.  Note: If 'position:static', the right property has no effect.",
    options:[{
		value:"auto",
		desc:"Lets the browser calculate the right edge position. This is default"
		},{
		value:"px",
		desc:"Sets the right edge position in px, cm, etc. Negative values are allowed"
		},{
		value:"%",
		desc:"Sets the right edge position in % of containing element. Negative values are allowed"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"right",
	}
	},
tabSize:{
    anim:0,
    desc:"The tab-size property specifies the length of the space used for the tab character.  In HTML, the tab character is usually displayed as a single space-character, except for some elements, like <textarea> and <pre>, and the result of the tab-size property will only be visible for these elements.",
    options:[{
		value:"number",
		desc:"Default value 8. Specifies the number of space-characters that should be displayed for each tab-character"
		},{
		value:"px",
		desc:"Specifies the length of a tab-character. This property value is not supported in any of the major browsers"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"tab-size",
	}
	},
tableLayout:{
    anim:0,
    desc:"The table-layout property sets the table layout algorithm to be used for a table",
    options:[{
		value:"auto",
		desc:"Automatic table layout algorithm (this is default): The column width is set by the widest unbreakable content in the cells. Can be slow, since it needs to read through all the content in the table, before determining the final layout"
		},{
		value:"fixed",
		desc:"Fixed table layout algorithm: The horizontal layout only depends on the table's width and the width of the columns, not the contents of the cells. Allows a browser to lay out the table faster than the automatic table layout.  The browser can begin to display the table once the first row has been received"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"table-layout",
	}
	},
textAlign:{
    anim:0,
    desc:"The text-align property specifies the horizontal alignment of text in an element.",
    options:[{
		value:"left",
		desc:"Aligns the text to the left"
		},{
		value:"right",
		desc:"Aligns the text to the right"
		},{
		value:"center",
		desc:"Centers the text"
		},{
		value:"justify",
		desc:"Stretches the lines so that each line has equal width (like in newspapers and magazines)"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"text-align",
	}
	},
textAlignLast:{
    anim:0,
    desc:"The text-align-last property specifies how to align the last line of a text.",
    options:[{
		value:"auto",
		desc:"The last line is justified and aligned left"
		},{
		value:"left",
		desc:"The last line is aligned to the left"
		},{
		value:"right",
		desc:"The last line is aligned to the right"
		},{
		value:"center",
		desc:"The last line is center-aligned"
		},{
		value:"justify",
		desc:"The last line is justified as the rest of the lines"
		},{
		value:"start",
		desc:"The last line is aligned at the beginning of the line (left if the text-direction is left-to-right, and right is the text-direction is right-to-left)"
		},{
		value:"end",
		desc:"The last line is aligned at the end of the line (right if the text-direction is left-to-right, and left is the text-direction is right-to-left)"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"text-align-last",
	}
	},
textDecoration:{
    anim:0,
    desc:"The text-decoration property specifies the decoration added to text. Note: In CSS3, the text-decoration property is a shorthand property for text-decoration-line, text-decoration-color, and text-decoration-style, but this is currently not supported in any of the major browsers. Note: In CSS3 you can use the text-decoration-color property to change the color of the decoration, otherwise the color is the same as the color of the text.",
    options:[{
		value:"none",
		desc:"Defines a normal text"
		},{
		value:"underline",
		desc:"Defines a line below the text"
		},{
		value:"overline",
		desc:"Defines a line above the text"
		},{
		value:"line-through",
		desc:"Defines a line through the text"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"text-decoration",
	}
	},
textDecorationLine:{
    anim:0,
    desc:"The text-decoration-line property specifies what type of line, if any, the decoration will have.  Note: You can also set the text-decoration-line using the text-decoration property, which is a short-hand property for the text-decoration-line, text-decoration-style, and the text-decoration-color properties.  Note: You can also combine more than one value, like underline and overline to display lines both under and over the text",
    options:[{
		value:"none",
		desc:"Defines a normal text"
		},{
		value:"underline",
		desc:"Defines a line below the text"
		},{
		value:"overline",
		desc:"Defines a line above the text"
		},{
		value:"line-through",
		desc:"Defines a line through the text"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"text-decoration-line",
	}
	},
textDecorationColor:{
    anim:0,
    desc:"The text-decoration-color property specifies the color of the text-decoration (underlines, overlines, linethroughs).",
    draw:function (x,y, w, h, value) {
        return "<div style='display:inline-block;ileft:" + x + "px;itop:" + y + "px;width:" + w + "px;height:" + h + "px;background-color:" + value + ";'></div>";

    },
    options:[{
		value:"[color]",
		desc:"Specifies the color of the text-decoration"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"text-decoration-color",
	}
	},
textDecorationStyle:{
    anim:0,
    desc:"The text-decoration-style property specifies how the line, if any, will display.",
    options:[{
		value:"solid",
		desc:"The line will display as a single line"
		},{
		value:"double",
		desc:"The line will display as a double line"
		},{
		value:"dotted",
		desc:"The line will display as a dotted line"
		},{
		value:"dashed",
		desc:"The line will display as a dashed line"
		},{
		value:"wavy",
		desc:"The line will display as a wavy line"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"text-decoration-style",
	}
	},
textIndent:{
    anim:0,
    desc:"The text-indent property specifies the indentation of the first line in a text-block. Note: Negative values are allowed. The first line will be indented to the left if the value is negative.",
    options:[{
		value:"px",
		desc:"Defines a fixed indentation in px, pt, cm, em, etc. Default value is 0"
		},{
		value:"%",
		desc:"Defines the indentation in % of the width of the parent element"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"text-indent",
	}
	},
textJustify:{
    anim:0,
    desc:"The text-justify property specifies the justification method to use when text-align is set to 'justify'.  This property specifies how justified text should be aligned and spaced.",
    options:[{
		value:"auto",
		desc:"The browser determines the justification algorithm"
		},{
		value:"inter-word",
		desc:"Increases/Decreases the space between words"
		},{
		value:"inter-ideograph",
		desc:"Justifies content with ideographic text"
		},{
		value:"inter-cluster",
		desc:"Only content that does not contain any inter-word spacing (such as Asian languages) is justified"
		},{
		value:"distribute",
		desc:"Spacing between letters and words are increased or decreased as necessary"
		},{
		value:"kashida",
		desc:"Justifies content by elongating characters"
		},{
		value:"trim",
		desc:"trim"
		},{
		value:"none",
		desc:"The justification is disabled"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"text-justify",
	}
	},
textOverflow:{
    anim:0,
    desc:"The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user.",
    options:[{
		value:"clip",
		desc:"Default value. Clips the text"
		},{
		value:"ellipsis",
		desc:"Render an ellipsis ('...') to represent clipped text"
		},{
		value:"string",
		desc:"Render the given string to represent clipped text"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"text-overflow",
	}
	},
textShadow:{
    anim:0,
    desc:"The text-shadow property adds shadow to text.  This property accepts a comma-separated list of shadows to be applied to the text.",
    options:[{
		value:"none",
		desc:"Default value. No shadow"
		},{
		value:"h-shadow",
		desc:"Required. The position of the horizontal shadow. Negative values are allowed"
		},{
		value:"v-shadow",
		desc:"Required. The position of the vertical shadow. Negative values are allowed"
		},{
		value:"blur-radius",
		desc:"Optional. The blur radius. Default value is 0"
		},{
		value:"color",
		desc:"Optional. The color of the shadow."
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"text-shadow",
	}
	},
textTransform:{
    anim:0,
    desc:"The text-transform property controls the capitalization of text.",
    options:[{
		value:"none",
		desc:"No capitalization. The text renders as it is."
		},{
		value:"capitalize",
		desc:"Transforms the first character of each word to uppercase"
		},{
		value:"uppercase",
		desc:"Transforms all characters to uppercase"
		},{
		value:"lowercase",
		desc:"Transforms all characters to lowercase"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"text-transform",
	}
	},
top:{
    anim:0,
    desc:"For absolutely positioned elements, the top property sets the top edge of an element to a unit above/below the top edge of its containing element.  For relatively positioned elements, the top property sets the top edge of an element to a unit above/below its normal position. Note: If 'position:static', the top property has no effect.",
    options:[{
		value:"auto",
		desc:"Lets the browser calculate the top edge position."
		},{
		value:"px",
		desc:"Sets the top edge position in px, cm, etc. Negative values are allowed"
		},{
		value:"%",
		desc:"Sets the top edge position in % of containing element. Negative values are allowed"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"top",
	}
	},
transform:{
    anim:0,
    desc:"The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.",
    options:[{
		value:"none",
		desc:"Defines that there should be no transformation"
		},{
		value:"matrix(n,n,n,n,n,n)",
		desc:"Defines a 2D transformation, using a matrix of six values"
		},{
		value:"matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)",
		desc:"Defines a 3D transformation, using a 4x4 matrix of 16 values"
		},{
		value:"translate(x,y)",
		desc:"Defines a 2D translation"
		},{
		value:"translate3d(x,y,z)",
		desc:"Defines a 3D translation"
		},{
		value:"translateX(x)",
		desc:"Defines a translation, using only the value for the X-axis"
		},{
		value:"translateY(y)",
		desc:"Defines a translation, using only the value for the Y-axis"
		},{
		value:"translateZ(z)",
		desc:"Defines a 3D translation, using only the value for the Z-axis"
		},{
		value:"scale(x,y)",
		desc:"Defines a 2D scale transformation"
		},{
		value:"scale3d(x,y,z)",
		desc:"Defines a 3D scale transformation"
		},{
		value:"scaleX(x)",
		desc:"Defines a scale transformation by giving a value for the X-axis"
		},{
		value:"scaleY(y)",
		desc:"Defines a scale transformation by giving a value for the Y-axis"
		},{
		value:"scaleZ(z)",
		desc:"Defines a 3D scale transformation by giving a value for the Z-axis"
		},{
		value:"rotate(angle)",
		desc:"Defines a 2D rotation, the angle is specified in the parameter"
		},{
		value:"rotate3d(x,y,z, angle)",
		desc:"Defines a 3D rotation along the X-axis"
		},{
		value:"rotateX(angle)",
		desc:"Defines a 3D rotation along the X-axis"
		},{
		value:"rotateY(angle)",
		desc:"Defines a 3D rotation along the Y-axis"
		},{
		value:"rotateZ(angle)",
		desc:"Defines a 3D rotation along the Z-axis"
		},{
		value:"skew(x-angle, y-angle)",
		desc:"Defines a 2D skew transformation along the X- and the Y-axis"
		},{
		value:"skewX(angle)",
		desc:"Defines a 2D skew transformation along the X-axis"
		},{
		value:"skewY(angle)",
		desc:"Defines a 2D skew transformation along the Y-axis"
		},{
		value:"perspective(n)",
		desc:"Defines a perspective view for a 3D transformed element"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"transform",
	}
	},
transformOrigin:{
    anim:0,
    desc:"The transform-origin property allows you to change the position of transformed elements. 2D transformations can change the x- and y-axis of an element. 3D transformations can also change the z-axis of an element. To better understand the transform-origin property, view a demo. Note: This property must be used together with the transform property",
    options:[{
		value:"x-axis",
		desc:"Defines where the view is placed at the x-axis."
		},{
		value:"y-axis",
		desc:"Defines where the view is placed at the y-axis"
		},{
		value:"z-axis",
		desc:"Defines where the view is placed at the z-axis"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"transform",
	    webkit:"-webkit-transform"
	}
	},
transformStyle:{
    anim:0,
    desc:"The transform-style property specifies how nested elements are rendered in 3D space. Note: This property must be used together with the transform property",
    options:[{
		value:"flat",
		desc:"Specifies that child elements will NOT preserve its 3D position. This is default"
		},{
		value:"preserve-3d",
		desc:"Specifies that child elements will preserve its 3D position"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"transform-style",
	}
	},
transitionDelay:{
    anim:0,
    desc:"The transition-delay property specifies when the transition effect will start. The transition-delay value is defined in seconds (s) or milliseconds (ms).",
    options:[{
		value:"time",
		desc:"Specifies the number of seconds or milliseconds to wait before the transition effect will start"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"transition-delay",
	}
	},
transitionDuration:{
    anim:0,
    desc:"The transition-duration property specifies how many seconds (s) or milliseconds (ms) a transition effect takes to complete",
    options:[{
		value:"time",
		desc:"Specifies how many seconds or milliseconds a transition effect takes to complete. Default value is 0s, meaning there will be no effect"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"transition-duration",
	}
	},
transitionProperty:{
    anim:0,
    desc:"The transition-property property specifies the name of the CSS property the transition effect is for (the transition effect will start when the specified CSS property changes).  Tip: A transition effect could typically occur when a user hover over an element.",
    options:[{
		value:"none",
		desc:"No property will get a transition effect"
		},{
		value:"all",
		desc:"Default value. All properties will get a transition effect"
		},{
		value:"property",
		desc:"Defines a comma separated list of CSS property names the transition effect is for"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"transition-property",
	}
	},
transitionTimingFunction:{
    anim:0,
    desc:"The transition-timing-function property specifies the speed curve of the transition effect. This property allows a transition effect to change speed over its duration.",
    options:[{
		value:"ease",
		desc:"Default value. Specifies a transition effect with a slow start, then fast, then end slowly (equivalent to cubic-bezier(0.25,0.1,0.25,1))"
		},{
		value:"linear",
		desc:"Specifies a transition effect with the same speed from start to end (equivalent to cubic-bezier(0,0,1,1))"
		},{
		value:"ease-in",
		desc:"Specifies a transition effect with a slow start (equivalent to cubic-bezier(0.42,0,1,1))"
		},{
		value:"ease-out",
		desc:"Specifies a transition effect with a slow end (equivalent to cubic-bezier(0,0,0.58,1))"
		},{
		value:"ease-in-out",
		desc:"Specifies a transition effect with a slow start and end (equivalent to cubic-bezier(0.42,0,0.58,1))"
		},{
		value:"cubic-bezier(n,n,n,n)",
		desc:"Define your own values in the cubic-bezier function. Possible values are numeric values from 0 to 1"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"transition-timing-function",
	}
	},
unicodeBidi:{
    anim:0,
    desc:"The unicode-bidi property is used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document.",
    options:[{
		value:"normal",
		desc:"Does not use an additional level of embedding. This is default"
		},{
		value:"embed",
		desc:"Creates an additional level of embedding"
		},{
		value:"bidi-override",
		desc:"Creates an additional level of embedding. Reordering depends on the direction property"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"unicode-bidi",
	}
	},
verticalAlign:{
    anim:0,
    desc:"The vertical-align property sets the vertical alignment of an element",
    options:[{
		value:"baseline",
		desc:"Align the baseline of the element with the baseline of the parent element. This is default"
		},{
		value:"px",
		desc:"Raises or lower an element by the specified length. Negative values are allowed"
		},{
		value:"%",
		desc:"Raises or lower an element in a percent of the 'line-height' property. Negative values are allowed"
		},{
		value:"sub",
		desc:"Aligns the element as if it was subscript"
		},{
		value:"super",
		desc:"Aligns the element as if it was superscript"
		},{
		value:"top",
		desc:"The top of the element is aligned with the top of the tallest element on the line"
		},{
		value:"text-top",
		desc:"The top of the element is aligned with the top of the parent element's font"
		},{
		value:"middle",
		desc:"The element is placed in the middle of the parent element"
		},{
		value:"bottom",
		desc:"The bottom of the element is aligned with the lowest element on the line"
		},{
		value:"text-bottom",
		desc:"The bottom of the element is aligned with the bottom of the parent element's font"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"vertical-align",
	}
	},
visibility:{
    anim:0,
    desc:"The visibility property specifies whether or not an element is visible. Tip: Even invisible elements take up space on the page. Use the display property to create invisible elements that do not take up space!",
    options:[{
		value:"visible",
		desc:"Default value. The element is visible"
		},{
		value:"hidden",
		desc:"The element is invisible (but still takes up space)"
		},{
		value:"collaps",
		desc:"Only for table elements. collapse removes a row or column, but it does not affect the table layout. The space taken up by the row or column will be available for other content. If collapse is used on other elements, it renders as 'hidden'"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"visibility",
	}
	},
whiteSpace:{
    anim:0,
    desc:"The white-space property specifies how white-space inside an element is handled",
    options:[{
		value:"normal",
		desc:"Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary. This is default"
		},{
		value:"nowrap",
		desc:"Sequences of whitespace will collapse into a single whitespace. Text will never wrap to the next line. The text continues on the same line until a <br> tag is encountered"
		},{
		value:"pre",
		desc:"Whitespace is preserved by the browser. Text will only wrap on line breaks. Acts like the <pre> tag in HTML"
		},{
		value:"pre-line",
		desc:"Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary, and on line breaks"
		},{
		value:"pre-wrap",
		desc:"Whitespace is preserved by the browser. Text will wrap when necessary, and on line breaks"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"white-space",
	}
	},
width:{
    anim:0,
    desc:"The width property sets the width of an element. Note: The width property does not include padding, borders, or margins; it sets the width of the area inside the padding, border, and margin of the element!  Note: The min-width and max-width properties override width.",
    options:[{
		value:"auto",
		desc:"Default value. The browser calculates the width"
		},{
		value:"px",
		desc:"Defines the width in px, cm, etc."
		},{
		value:"%",
		desc:"Defines the width in percent of the containing block"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"width",
	}
	},
wordBreak:{
    anim:0,
    desc:"The word-break property specifies line breaking rules for non-CJK scripts.  Tip: CJK scripts are Chinese, Japanese and Korean ('CJK') scripts.",
    options:[{
		value:"normal",
		desc:"Default value. Break words according to their usual rules"
		},{
		value:"break-all",
		desc:"Lines may break between any two letters"
		},{
		value:"keep-all",
		desc:"Breaks are prohibited between pairs of letters"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"word-break",
	}
	},
wordSpacing:{
    anim:0,
    desc:"The word-spacing property increases or decreases the white space between words. Note: Negative values are allowed.",
    options:[{
		value:"normal",
		desc:"Defines normal space between words . This is default"
		},{
		value:"px",
		desc:"Defines an extra space between words in px, pt, cm, em, etc. Negative values are allowed"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"word-spacing",
	}
	},
wordWrap:{
    anim:0,
    desc:"The word-wrap property allows long words to be able to be broken and wrap onto the next line.",
    options:[{
		value:"normal",
		desc:"Break words only at allowed break points"
		},{
		value:"break-word",
		desc:"Allows unbreakable words to be broken"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"word-wrap",
	}
	},
zIndex:{
    anim:0,
    desc:"The z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order. Note: z-index only works on positioned elements (position:absolute, position:relative, or position:fixed).",
    options:[{
		value:"auto",
		desc:"Sets the stack order equal to its parents. This is default"
		},{
		value:"number",
		desc:"Sets the stack order of the element. Negative numbers are allowed"
		},{
		value:"initial",
		desc:"Sets this property to its default value"
		},{
		value:"inherit",
		desc:"Inherits this property from its parent element"
		}],
	support:{
	    all:"z-index",
	}
	}
}

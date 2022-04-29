---
layout: blogpost
title: An Introduction to 3D Luts
img: blog/2020-04-28-lut-applied.jpg
categories: ['Lut','Photography']
author: 'Paul Walker'
---

a 3D LUT is a common way to post process images. LUT stands for Lookup Table, So a 3D LUT is a 3 Dimensional Lookup Table. 
<!--more-->
3D Luts are very popular amongst Photographers and Filmmakers because it's easy to achieve a nice look for an Image *in one click* as seen in the title image of this Post.
# Why use a Lut
Luts provide the simplest way possible to achieve a specific Look or style on your Image or movie. It's even possible to use multiple Luts on one Image.

But that's not the biggest advantage of a Lut, especially not of a 3D one.  
In a normal edit you are probably used to curves like the RGB curve, the LAB curve or even the HSL curve or sliders to change the Look of an Image.  
But a 3D Lut isn't *just another way of doing curves adjustments*. You could do that with a Lut but I'd argue that you shouldn't. With a Lut it's possible to target specific colors or color ranges and change their Hue, Saturation and Brightness. Say you wanted to shift all the dark saturated blues towards a lighter unsaturated green, That is possible with a Lut but not with any kind of curves adjustment. So make use This possibility.  
The problem is that most people don't use this kind of functionality in 3D Luts or don't know about it and just apply their already existing presets to a Lut.

Another reason why people don't use Luts to their full potential is probably because programms to specifically create and edit Luts are expensive. I think this shouldn't stay like this. Luts are simple
### when not to use a Lut
Luts can by design only store color Information. It's not possible to store any local adjustments in a Lut. be careful, also adjustments Like Shadows and Highlights or structure are usually local adjustment to the Image.

# 1D vs 3D Luts
1D Luts are in my opinion what luts should not be. 1D Luts are one or more curves adjustments in one Lut File. The advantage is that these files are way smaller than normal Lut files, but they are also not as detailed.  

3D Luts on the other hand are represented by a 3D cube rather than several 1D curves and thus a 3D Lut can be way more detailed than any 1D Lut ever could be. That is if you make use of the full potential of a 3d Lut. In the following, whenever I talk about a lut i actually mean a 3D Lut. 1D Luts aren't of much interest to me. 
# The Cube
Any 3D Lut can be represented by an RGB Cube. Each axis is the Intensity of one color, so for example the X-axis is be the intensity or value of the red color, the Y-Axis the Blue value and the Z-axis the Green value.
in Reality this could Look something Like this:
<md-image src="blog/2020-04-28-3dl.svg" alt="3D Lut cube"></md-image>


So every color in any RGB Image is inside this Lut Cube. Now we can assign every Input color a specific output color.  
in simple terms this means, we take a color, lets say `rgb(20,54,128)` and assign it a specific output color, say `rgb(10,50,255)`.
when we do this for the Full Cube, it Looks something Like this:
<md-image src="blog/2020-04-28-3dl-with-lut.svg" alt="Cube with Lut"></md-image>

but if we store this input for every possible color in a RGB Image the output File gets big, like 16.581.375‬px big. That is to big for a simple Lut and if we use 16bit Images instead of 8bit ones the File would get even bigger, like Gigabytes big.  
the Solution: Interpolation

# Interpolation
With Interpolation, we don't need to specify an output color for every possible input color, its enough to specify the output for a few specific input colors and then let the Computer interpolate the values between.

To simplify this a bit we use just to colors for one Dimensional interpolation.  
lets say we have an input of 2 Colors, kinda like this:
<md-image src="blog/2020-04-28-3dl-no-interpolation.svg" alt="no Interpolation"></md-image>

and we want use this to perform some sort of color transform on an Image (in this case make it black and white) this would result in the Image having only two colors which is generally not what we want.

So we take these two inputs and interpolate the outputs that should go in between, so something like this:
<md-image src="blog/2020-04-28-3dl-interpolation.svg" alt="Interpolation"></md-image>


the Interpolation of the Lut works the same but instead of using a 1 dimensional Input and thus a 1 Dimensional Interpolation as in the Example the Interpolation for the Lut has to be 3 Dimensional. And with this we can apply Luts with any sizes on our Images.  
The most used Size probably is a 32\*32\*32 Lut.

# in Code
to use Luts in any kind of Image manipulation programm you need two things, a way to open an Image file which I guess you'll have figured out yourself if you want to build an image manipulation programm and the second thing you need is a way to perform 3 Dimensional Interpolation.  

A quick and easy way to perform 3D Interpolation is with OpenGl. OpenGl provides 3D textures and basically build in linear Interpolation for those Textures, so it makes stuff very simple to get up and running.  
assuming you already have a vertex shader set up *(for those not familiar with OpenGl, this is setting up the geometry to render, in our case it should be 2 triangles for a simple Image plain.)* you Just need to add this shader code:

```plaintext

precision mediump float;
precision mediump sampler3D;

in vec2 v_texCoord;

uniform sampler2D u_texture;
uniform sampler3D u_LookupTable;
out vec4 outColor;

void main() {
    vec3 color = texture(u_texture, v_texCoord).rgb;
    
    vec4 adjusted_color = texture(u_LookupTable, color);
    
    outColor = adjusted_color
}
```
Two things before you copy this code:
1. this is a little simplified, a better example is in [this GPU Gems chapter](https://developer.nvidia.com/gpugems/gpugems2/part-iii-high-quality-rendering/chapter-24-using-lookup-tables-accelerate-color)
2. I'm farley new to GLSL so there may be better ways to do this.

The Interesting thing for me was that all of this can also be made to work an your Browser. 
Ok [maybe not *your* browser](https://get.webgl.org/webgl2/) but it works in any Browser with WebGl2 support. and WebGl has a farley straight forward Js api so Implementing this into a Webapp shouldn't be too hard.

# Conclusion
Many Photographers treat luts as black boxes, which is unfortunate since Luts are such a great tool and understanding what they can and cant do is crucial for creating your own Luts which I think you should absolutely do. 

My interest in Luts began when I heard about Luts and noticed that I couldn't use them in any of my photo editing programms (I'd like to have open Source software), so I started researching. At the Time I didn't know what webGl was and didn't know about GLSL. After doing a lot of research and abandoning the Project several Times because I thought I couldn't do it, i found out about WebGl2 and 3D Textures and now I'm working on my own Lut editing Webapp.  

BTW now there are programms I like that do support 3D Luts:
* [Darktable](https://www.darktable.org/)
* [Raw Therapee](https://rawtherapee.com/)

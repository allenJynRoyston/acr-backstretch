# acr-backstretch
##### *Updated 4/6/2016

### What Am I?!
A simple directive for Scott Robinson's Backstretch jQuery plugin.
  - Simple
  - Responsive
  - Mobile

### Usage
<code>
&#x3C;div backstretch fillheight=&#x27;300&#x27; fillsrc=&#x22;'image/image.js'&#x22;  fallback=&#x22;'image/anotherimage.js'&#x22; fade=&#x27;500&#x27;&#x3E;&#x3C;/div&#x3E;
</code>

### Live Demo 
[Check it out](https://allenroyston.herokuapp.com/access/acr-backstretch/index.html "Title")


### Version
1.0.0

### Updates
 - None

### Dependencies
- jQuery  (not included)
- backstretch.js (included)

### NPM / Bower
<code>
npm install acr-backstretch --save-dev
</code>
<br>
<code>
bower install acr-backstretch --save
</code>

### Installation
Include backstrech after you've included jQuery:<br>
<code>
&lt;script src="./js/backstretch.min.js"&gt; &lt;script&gt;
</code>
<br>
Include the module in your scripts after AngularJS<br>
<code>
&lt;script src="./js/acr-backstretch.min.js"&gt; &lt;script&gt;
</code>

Add acrBackstretch in your apps dependencies.<br> 
<code>
var app = angular.module('myApp', ['acrBackstretch']);
</code>


### Parameters
fade: [numbers] in miliseconds (i.e. 1000 is 1 second)<br>
fillheight: [number] in pixels (i.e. 400 is 400px)
fallback: [string/url] location of fallback image if desired image (fillsrc) does not exist



License
----

MIT - go nuts y'all.

!function(t){if("function"==typeof define&&define.amd&&define("uikit",function(){var i=window.UIkit||t(window,window.jQuery,window.document);return i.load=function(t,e,n,o){var s,a=t.split(","),r=[],l=(o.config&&o.config.uikit&&o.config.uikit.base?o.config.uikit.base:"").replace(/\/+$/g,"");if(!l)throw new Error("Please define base path to UIkit in the requirejs config.");for(s=0;s<a.length;s+=1){var c=a[s].replace(/\./g,"/");r.push(l+"/components/"+c)}e(r,function(){n(i)})},i}),!window.jQuery)throw new Error("UIkit requires jQuery");window&&window.jQuery&&t(window,window.jQuery,window.document)}(function(t,i,e){"use strict";var n={},o=t.UIkit?Object.create(t.UIkit):void 0;if(n.version="2.22.0",n.noConflict=function(){return o&&(t.UIkit=o,i.UIkit=o,i.fn.uk=o.fn),n},n.prefix=function(t){return t},n.$=i,n.$doc=n.$(document),n.$win=n.$(window),n.$html=n.$("html"),n.support={},n.support.transition=function(){var t=function(){var t,i=e.body||e.documentElement,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==i.style[t])return n[t]}();return t&&{end:t}}(),n.support.animation=function(){var t=function(){var t,i=e.body||e.documentElement,n={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(t in n)if(void 0!==i.style[t])return n[t]}();return t&&{end:t}}(),function(){var i=0;t.requestAnimationFrame=t.requestAnimationFrame||t.webkitRequestAnimationFrame||function(e){var n=(new Date).getTime(),o=Math.max(0,16-(n-i)),s=t.setTimeout(function(){e(n+o)},o);return i=n+o,s},t.cancelAnimationFrame||(t.cancelAnimationFrame=function(t){clearTimeout(t)})}(),n.support.touch="ontouchstart"in document||t.DocumentTouch&&document instanceof t.DocumentTouch||t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints>0||t.navigator.pointerEnabled&&t.navigator.maxTouchPoints>0||!1,n.support.mutationobserver=t.MutationObserver||t.WebKitMutationObserver||null,n.Utils={},n.Utils.isFullscreen=function(){return document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.fullscreenElement||!1},n.Utils.str2json=function(t,i){try{return i?JSON.parse(t.replace(/([\$\w]+)\s*:/g,function(t,i){return'"'+i+'":'}).replace(/'([^']+)'/g,function(t,i){return'"'+i+'"'})):new Function("","var json = "+t+"; return JSON.parse(JSON.stringify(json));")()}catch(e){return!1}},n.Utils.debounce=function(t,i,e){var n;return function(){var o=this,s=arguments,a=function(){n=null,e||t.apply(o,s)},r=e&&!n;clearTimeout(n),n=setTimeout(a,i),r&&t.apply(o,s)}},n.Utils.removeCssRules=function(t){var i,e,n,o,s,a,r,l,c,u;t&&setTimeout(function(){try{for(u=document.styleSheets,o=0,r=u.length;r>o;o++){for(n=u[o],e=[],n.cssRules=n.cssRules,i=s=0,l=n.cssRules.length;l>s;i=++s)n.cssRules[i].type===CSSRule.STYLE_RULE&&t.test(n.cssRules[i].selectorText)&&e.unshift(i);for(a=0,c=e.length;c>a;a++)n.deleteRule(e[a])}}catch(d){}},0)},n.Utils.isInView=function(t,e){var o=i(t);if(!o.is(":visible"))return!1;var s=n.$win.scrollLeft(),a=n.$win.scrollTop(),r=o.offset(),l=r.left,c=r.top;return e=i.extend({topoffset:0,leftoffset:0},e),c+o.height()>=a&&c-e.topoffset<=a+n.$win.height()&&l+o.width()>=s&&l-e.leftoffset<=s+n.$win.width()?!0:!1},n.Utils.checkDisplay=function(t,e){var o=n.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]",t||document);return t&&!o.length&&(o=i(t)),o.trigger("display.uk.check"),e&&("string"!=typeof e&&(e='[class*="uk-animation-"]'),o.find(e).each(function(){var t=n.$(this),i=t.attr("class"),e=i.match(/uk\-animation\-(.+)/);t.removeClass(e[0]).width(),t.addClass(e[0])})),o},n.Utils.options=function(t){if(i.isPlainObject(t))return t;var e=t?t.indexOf("{"):-1,o={};if(-1!=e)try{o=n.Utils.str2json(t.substr(e))}catch(s){}return o},n.Utils.animate=function(t,e){var o=i.Deferred();return t=n.$(t),e=e,t.css("display","none").addClass(e).one(n.support.animation.end,function(){t.removeClass(e),o.resolve()}).width(),t.css("display",""),o.promise()},n.Utils.uid=function(t){return(t||"id")+(new Date).getTime()+"RAND"+Math.ceil(1e5*Math.random())},n.Utils.template=function(t,i){for(var e,n,o,s,a=t.replace(/\n/g,"\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g,"{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),r=0,l=[],c=0;r<a.length;){if(e=a[r],e.match(/\{\{\s*(.+?)\s*\}\}/))switch(r+=1,e=a[r],n=e[0],o=e.substring(e.match(/^(\^|\#|\!|\~|\:)/)?1:0),n){case"~":l.push("for(var $i=0;$i<"+o+".length;$i++) { var $item = "+o+"[$i];"),c++;break;case":":l.push("for(var $key in "+o+") { var $val = "+o+"[$key];"),c++;break;case"#":l.push("if("+o+") {"),c++;break;case"^":l.push("if(!"+o+") {"),c++;break;case"/":l.push("}"),c--;break;case"!":l.push("__ret.push("+o+");");break;default:l.push("__ret.push(escape("+o+"));")}else l.push("__ret.push('"+e.replace(/\'/g,"\\'")+"');");r+=1}return s=new Function("$data",["var __ret = [];","try {","with($data){",c?'__ret = ["Not all blocks are closed correctly."]':l.join(""),"};","}catch(e){__ret = [e.message];}",'return __ret.join("").replace(/\\n\\n/g, "\\n");',"function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")),i?s(i):s},n.Utils.events={},n.Utils.events.click=n.support.touch?"tap":"click",t.UIkit=n,n.fn=function(t,e){var o=arguments,s=t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),a=s[1],r=s[2];return n[a]?this.each(function(){var t=i(this),s=t.data(a);s||t.data(a,s=n[a](this,r?void 0:e)),r&&s[r].apply(s,Array.prototype.slice.call(o,1))}):(i.error("UIkit component ["+a+"] does not exist."),this)},i.UIkit=n,i.fn.uk=n.fn,n.langdirection="rtl"==n.$html.attr("dir")?"right":"left",n.components={},n.component=function(t,e){var o=function(e,s){var a=this;return this.UIkit=n,this.element=e?n.$(e):null,this.options=i.extend(!0,{},this.defaults,s),this.plugins={},this.element&&this.element.data(t,this),this.init(),(this.options.plugins.length?this.options.plugins:Object.keys(o.plugins)).forEach(function(t){o.plugins[t].init&&(o.plugins[t].init(a),a.plugins[t]=!0)}),this.trigger("init.uk.component",[t,this]),this};return o.plugins={},i.extend(!0,o.prototype,{defaults:{plugins:[]},boot:function(){},init:function(){},on:function(t,i,e){return n.$(this.element||this).on(t,i,e)},one:function(t,i,e){return n.$(this.element||this).one(t,i,e)},off:function(t){return n.$(this.element||this).off(t)},trigger:function(t,i){return n.$(this.element||this).trigger(t,i)},find:function(t){return n.$(this.element?this.element:[]).find(t)},proxy:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=function(){return t[i].apply(t,arguments)})})},mixin:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=t[i].bind(e))})},option:function(){return 1==arguments.length?this.options[arguments[0]]||void 0:(2==arguments.length&&(this.options[arguments[0]]=arguments[1]),void 0)}},e),this.components[t]=o,this[t]=function(){var e,o;if(arguments.length)switch(arguments.length){case 1:"string"==typeof arguments[0]||arguments[0].nodeType||arguments[0]instanceof jQuery?e=i(arguments[0]):o=arguments[0];break;case 2:e=i(arguments[0]),o=arguments[1]}return e&&e.data(t)?e.data(t):new n.components[t](e,o)},n.domready&&n.component.boot(t),o},n.plugin=function(t,i,e){this.components[t].plugins[i]=e},n.component.boot=function(t){n.components[t].prototype&&n.components[t].prototype.boot&&!n.components[t].booted&&(n.components[t].prototype.boot.apply(n,[]),n.components[t].booted=!0)},n.component.bootComponents=function(){for(var t in n.components)n.component.boot(t)},n.domObservers=[],n.domready=!1,n.ready=function(t){n.domObservers.push(t),n.domready&&t(document)},n.on=function(t,i,e){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready&&i.apply(n.$doc),n.$doc.on(t,i,e)},n.one=function(t,i,e){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready?(i.apply(n.$doc),n.$doc):n.$doc.one(t,i,e)},n.trigger=function(t,i){return n.$doc.trigger(t,i)},n.domObserve=function(t,i){n.support.mutationobserver&&(i=i||function(){},n.$(t).each(function(){var t=this,e=n.$(t);if(!e.data("observer"))try{var o=new n.support.mutationobserver(n.Utils.debounce(function(){i.apply(t,[]),e.trigger("changed.uk.dom")},50));o.observe(t,{childList:!0,subtree:!0}),e.data("observer",o)}catch(s){}}))},n.init=function(t){t=t||document,n.domObservers.forEach(function(i){i(t)})},n.on("domready.uk.dom",function(){n.init(),n.domready&&n.Utils.checkDisplay()}),i(function(){n.$body=n.$("body"),n.ready(function(){n.domObserve("[data-uk-observe]")}),n.on("changed.uk.dom",function(t){n.init(t.target),n.Utils.checkDisplay(t.target)}),n.trigger("beforeready.uk.dom"),n.component.bootComponents(),setInterval(function(){var t,i={x:window.pageXOffset,y:window.pageYOffset},e=function(){(i.x!=window.pageXOffset||i.y!=window.pageYOffset)&&(t={x:0,y:0},window.pageXOffset!=i.x&&(t.x=window.pageXOffset>i.x?1:-1),window.pageYOffset!=i.y&&(t.y=window.pageYOffset>i.y?1:-1),i={dir:t,x:window.pageXOffset,y:window.pageYOffset},n.$doc.trigger("scrolling.uk.document",[i]))};return n.support.touch&&n.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup",e),(i.x||i.y)&&e(),e}(),15),n.trigger("domready.uk.dom"),n.support.touch&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&n.$win.on("load orientationchange resize",n.Utils.debounce(function(){var t=function(){return i(".uk-height-viewport").css("height",window.innerHeight),t};return t()}(),100)),n.trigger("afterready.uk.dom"),n.domready=!0}),n.$html.addClass(n.support.touch?"uk-touch":"uk-notouch"),n.support.touch){var s,a=!1,r="uk-hover",l=".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";n.$html.on("mouseenter touchstart MSPointerDown pointerdown",l,function(){a&&i("."+r).removeClass(r),a=i(this).addClass(r)}).on("mouseleave touchend MSPointerUp pointerup",function(t){s=i(t.target).parents(l),a&&a.not(s).removeClass(r)})}return n}),function(t){function i(t,i,e,n){return Math.abs(t-i)>=Math.abs(e-n)?t-i>0?"Left":"Right":e-n>0?"Up":"Down"}function e(){c=null,d.last&&(d.el.trigger("longTap"),d={})}function n(){c&&clearTimeout(c),c=null}function o(){a&&clearTimeout(a),r&&clearTimeout(r),l&&clearTimeout(l),c&&clearTimeout(c),a=r=l=c=null,d={}}function s(t){return t.pointerType==t.MSPOINTER_TYPE_TOUCH&&t.isPrimary}if(!t.fn.swipeLeft){var a,r,l,c,u,d={},h=750;t(function(){var f,p,m,g=0,v=0;"MSGesture"in window&&(u=new MSGesture,u.target=document.body),t(document).on("MSGestureEnd gestureend",function(t){var i=t.originalEvent.velocityX>1?"Right":t.originalEvent.velocityX<-1?"Left":t.originalEvent.velocityY>1?"Down":t.originalEvent.velocityY<-1?"Up":null;i&&(d.el.trigger("swipe"),d.el.trigger("swipe"+i))}).on("touchstart MSPointerDown pointerdown",function(i){("MSPointerDown"!=i.type||s(i.originalEvent))&&(m="MSPointerDown"==i.type||"pointerdown"==i.type?i:i.originalEvent.touches[0],f=Date.now(),p=f-(d.last||f),d.el=t("tagName"in m.target?m.target:m.target.parentNode),a&&clearTimeout(a),d.x1=m.pageX,d.y1=m.pageY,p>0&&250>=p&&(d.isDoubleTap=!0),d.last=f,c=setTimeout(e,h),!u||"MSPointerDown"!=i.type&&"pointerdown"!=i.type&&"touchstart"!=i.type||u.addPointer(i.originalEvent.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){("MSPointerMove"!=t.type||s(t.originalEvent))&&(m="MSPointerMove"==t.type||"pointermove"==t.type?t:t.originalEvent.touches[0],n(),d.x2=m.pageX,d.y2=m.pageY,g+=Math.abs(d.x1-d.x2),v+=Math.abs(d.y1-d.y2))}).on("touchend MSPointerUp pointerup",function(e){("MSPointerUp"!=e.type||s(e.originalEvent))&&(n(),d.x2&&Math.abs(d.x1-d.x2)>30||d.y2&&Math.abs(d.y1-d.y2)>30?l=setTimeout(function(){d.el.trigger("swipe"),d.el.trigger("swipe"+i(d.x1,d.x2,d.y1,d.y2)),d={}},0):"last"in d&&(isNaN(g)||30>g&&30>v?r=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=o,d.el.trigger(i),d.isDoubleTap?(d.el.trigger("doubleTap"),d={}):a=setTimeout(function(){a=null,d.el.trigger("singleTap"),d={}},250)},0):d={},g=v=0))}).on("touchcancel MSPointerCancel",o),t(window).on("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(i){t.fn[i]=function(e){return t(this).on(i,e)}})}}(jQuery),function(t){"use strict";var i=[];t.component("stackMargin",{defaults:{cls:"uk-margin-small-top"},boot:function(){t.ready(function(i){t.$("[data-uk-margin]",i).each(function(){var i,e=t.$(this);e.data("stackMargin")||(i=t.stackMargin(e,t.Utils.options(e.attr("data-uk-margin"))))})})},init:function(){var e=this;this.columns=[],t.$win.on("resize orientationchange",function(){var i=function(){e.process()};return t.$(function(){i(),t.$win.on("load",i)}),t.Utils.debounce(i,20)}()),t.$html.on("changed.uk.dom",function(){e.process()}),this.on("display.uk.check",function(){this.element.is(":visible")&&this.process()}.bind(this)),i.push(this)},process:function(){return this.columns=this.element.children(),t.Utils.stackMargin(this.columns,this.options),this},revert:function(){return this.columns.removeClass(this.options.cls),this}}),function(){var i=[],e=function(t){if(t.is(":visible")){var i=t.parent().width(),e=t.data("width"),n=i/e,o=Math.floor(n*t.data("height"));t.css({height:e>i?o:t.data("height")})}};t.component("responsiveElement",{defaults:{},boot:function(){t.ready(function(i){t.$("iframe.uk-responsive-width, [data-uk-responsive]",i).each(function(){var i,e=t.$(this);e.data("responsiveIframe")||(i=t.responsiveElement(e,{}))})})},init:function(){var t=this.element;t.attr("width")&&t.attr("height")&&(t.data({width:t.attr("width"),height:t.attr("height")}).on("display.uk.check",function(){e(t)}),e(t),i.push(t))}}),t.$win.on("resize load",t.Utils.debounce(function(){i.forEach(function(t){e(t)})},15))}(),t.Utils.stackMargin=function(i,e){e=t.$.extend({cls:"uk-margin-small-top"},e),e.cls=e.cls,i=t.$(i).removeClass(e.cls);var n=!1,o=i.filter(":visible:first"),s=o.length?o.position().top+o.outerHeight()-1:!1;s!==!1&&i.each(function(){var i=t.$(this);i.is(":visible")&&(n?i.addClass(e.cls):i.position().top>=s&&(n=i.addClass(e.cls)))})},t.Utils.matchHeights=function(i,e){i=t.$(i).css("min-height",""),e=t.$.extend({row:!0},e);var n=function(i){if(!(i.length<2)){var e=0;i.each(function(){e=Math.max(e,t.$(this).outerHeight())}).each(function(){var i=t.$(this),n=e-("border-box"==i.css("box-sizing")?0:i.outerHeight()-i.height());i.css("min-height",n+"px")})}};e.row?(i.first().width(),setTimeout(function(){var e=!1,o=[];i.each(function(){var i=t.$(this),s=i.offset().top;s!=e&&o.length&&(n(t.$(o)),o=[],s=i.offset().top),o.push(i),e=s}),o.length&&n(t.$(o))},0)):n(i)}}(UIkit),function(t){"use strict";function i(i,e){e=t.$.extend({duration:1e3,transition:"easeOutExpo",offset:0,complete:function(){}},e);var n=i.offset().top-e.offset,o=t.$doc.height(),s=window.innerHeight;n+s>o&&(n=o-s),t.$("html,body").stop().animate({scrollTop:n},e.duration,e.transition).promise().done(e.complete)}t.component("smoothScroll",{boot:function(){t.$html.on("click.smooth-scroll.uikit","[data-uk-smooth-scroll]",function(){var i=t.$(this);if(!i.data("smoothScroll")){{t.smoothScroll(i,t.Utils.options(i.attr("data-uk-smooth-scroll")))}i.trigger("click")}return!1})},init:function(){var e=this;this.on("click",function(n){n.preventDefault(),i(t.$(this.hash).length?t.$(this.hash):t.$("body"),e.options)})}}),t.Utils.scrollToElement=i,t.$.easing.easeOutExpo||(t.$.easing.easeOutExpo=function(t,i,e,n,o){return i==o?e+n:n*(-Math.pow(2,-10*i/o)+1)+e})}(UIkit),function(t){"use strict";var i=t.$win,e=t.$doc,n=[],o=function(){for(var t=0;t<n.length;t++)window.requestAnimationFrame.apply(window,[n[t].check])};t.component("scrollspy",{defaults:{target:!1,cls:"uk-scrollspy-inview",initcls:"uk-scrollspy-init-inview",topoffset:0,leftoffset:0,repeat:!1,delay:0},boot:function(){e.on("scrolling.uk.document",o),i.on("load resize orientationchange",t.Utils.debounce(o,50)),t.ready(function(i){t.$("[data-uk-scrollspy]",i).each(function(){var i=t.$(this);if(!i.data("scrollspy")){t.scrollspy(i,t.Utils.options(i.attr("data-uk-scrollspy")))}})})},init:function(){var i,e=this,o=this.options.cls.split(/,/),s=function(){var n=e.options.target?e.element.find(e.options.target):e.element,s=1===n.length?1:0,a=0;n.each(function(){var n=t.$(this),r=n.data("inviewstate"),l=t.Utils.isInView(n,e.options),c=n.data("ukScrollspyCls")||o[a].trim();!l||r||n.data("scrollspy-idle")||(i||(n.addClass(e.options.initcls),e.offset=n.offset(),i=!0,n.trigger("init.uk.scrollspy")),n.data("scrollspy-idle",setTimeout(function(){n.addClass("uk-scrollspy-inview").toggleClass(c).width(),n.trigger("inview.uk.scrollspy"),n.data("scrollspy-idle",!1),n.data("inviewstate",!0)},e.options.delay*s)),s++),!l&&r&&e.options.repeat&&(n.data("scrollspy-idle")&&clearTimeout(n.data("scrollspy-idle")),n.removeClass("uk-scrollspy-inview").toggleClass(c),n.data("inviewstate",!1),n.trigger("outview.uk.scrollspy")),a=o[a+1]?a+1:0})};s(),this.check=s,n.push(this)}});var s=[],a=function(){for(var t=0;t<s.length;t++)window.requestAnimationFrame.apply(window,[s[t].check])};t.component("scrollspynav",{defaults:{cls:"uk-active",closest:!1,topoffset:0,leftoffset:0,smoothscroll:!1},boot:function(){e.on("scrolling.uk.document",a),i.on("resize orientationchange",t.Utils.debounce(a,50)),t.ready(function(i){t.$("[data-uk-scrollspy-nav]",i).each(function(){var i=t.$(this);if(!i.data("scrollspynav")){t.scrollspynav(i,t.Utils.options(i.attr("data-uk-scrollspy-nav")))}})})},init:function(){var e,n=[],o=this.find("a[href^='#']").each(function(){n.push(t.$(this).attr("href"))}),a=t.$(n.join(",")),r=this.options.cls,l=this.options.closest||this.options.closest,c=this,u=function(){e=[];for(var n=0;n<a.length;n++)t.Utils.isInView(a.eq(n),c.options)&&e.push(a.eq(n));if(e.length){var s,u=i.scrollTop(),d=function(){for(var t=0;t<e.length;t++)if(e[t].offset().top>=u)return e[t]}();if(!d)return;c.options.closest?(o.closest(l).removeClass(r),s=o.filter("a[href='#"+d.attr("id")+"']").closest(l).addClass(r)):s=o.removeClass(r).filter("a[href='#"+d.attr("id")+"']").addClass(r),c.element.trigger("inview.uk.scrollspynav",[d,s])}};this.options.smoothscroll&&t.smoothScroll&&o.each(function(){t.smoothScroll(this,c.options.smoothscroll)}),u(),this.element.data("scrollspynav",this),this.check=u,s.push(this)}})}(UIkit),function(t){"use strict";var i=[];t.component("toggle",{defaults:{target:!1,cls:"uk-hidden",animation:!1,duration:200},boot:function(){t.ready(function(e){t.$("[data-uk-toggle]",e).each(function(){var i=t.$(this);if(!i.data("toggle")){t.toggle(i,t.Utils.options(i.attr("data-uk-toggle")))}}),setTimeout(function(){i.forEach(function(t){t.getToggles()})},0)})},init:function(){var t=this;this.aria=-1!==this.options.cls.indexOf("uk-hidden"),this.getToggles(),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle()}),i.push(this)},toggle:function(){if(this.totoggle.length){if(this.options.animation&&t.support.animation){var i=this,e=this.options.animation.split(",");1==e.length&&(e[1]=e[0]),e[0]=e[0].trim(),e[1]=e[1].trim(),this.totoggle.css("animation-duration",this.options.duration+"ms"),this.totoggle.each(function(){var n=t.$(this);n.hasClass(i.options.cls)?(n.toggleClass(i.options.cls),t.Utils.animate(n,e[0]).then(function(){n.css("animation-duration",""),t.Utils.checkDisplay(n)})):t.Utils.animate(this,e[1]+" uk-animation-reverse").then(function(){n.toggleClass(i.options.cls).css("animation-duration",""),t.Utils.checkDisplay(n)})})}else this.totoggle.toggleClass(this.options.cls),t.Utils.checkDisplay(this.totoggle);this.updateAria()}},getToggles:function(){this.totoggle=this.options.target?t.$(this.options.target):[],this.updateAria()},updateAria:function(){this.aria&&this.totoggle.length&&this.totoggle.each(function(){t.$(this).attr("aria-hidden",t.$(this).hasClass("uk-hidden"))})}})}(UIkit),function(t){"use strict";t.component("alert",{defaults:{fade:!0,duration:200,trigger:".uk-alert-close"},boot:function(){t.$html.on("click.alert.uikit","[data-uk-alert]",function(i){var e=t.$(this);if(!e.data("alert")){var n=t.alert(e,t.Utils.options(e.attr("data-uk-alert")));t.$(i.target).is(n.options.trigger)&&(i.preventDefault(),n.close())}})},init:function(){var t=this;this.on("click",this.options.trigger,function(i){i.preventDefault(),t.close()})},close:function(){var t=this.trigger("close.uk.alert"),i=function(){this.trigger("closed.uk.alert").remove()}.bind(this);this.options.fade?t.css("overflow","hidden").css("max-height",t.height()).animate({height:0,opacity:0,"padding-top":0,"padding-bottom":0,"margin-top":0,"margin-bottom":0},this.options.duration,i):i()}})}(UIkit),function(t){"use strict";t.component("buttonRadio",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttonradio.uikit","[data-uk-button-radio]",function(i){var e=t.$(this);if(!e.data("buttonRadio")){var n=t.buttonRadio(e,t.Utils.options(e.attr("data-uk-button-radio"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),i.find(i.options.target).not(n).removeClass(i.options.activeClass).blur(),n.addClass(i.options.activeClass),i.find(i.options.target).not(n).attr("aria-checked","false"),n.attr("aria-checked","true"),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("buttonCheckbox",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttoncheckbox.uikit","[data-uk-button-checkbox]",function(i){var e=t.$(this);if(!e.data("buttonCheckbox")){var n=t.buttonCheckbox(e,t.Utils.options(e.attr("data-uk-button-checkbox"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),n.toggleClass(i.options.activeClass).blur(),n.attr("aria-checked",n.hasClass(i.options.activeClass)),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("button",{defaults:{},boot:function(){t.$html.on("click.button.uikit","[data-uk-button]",function(){var i=t.$(this);if(!i.data("button")){{t.button(i,t.Utils.options(i.attr("data-uk-button")))}i.trigger("click")}})},init:function(){var t=this;this.element.attr("aria-pressed",this.element.hasClass("uk-active")),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle(),t.trigger("change.uk.button",[t.element.blur().hasClass("uk-active")])})},toggle:function(){this.element.toggleClass("uk-active"),this.element.attr("aria-pressed",this.element.hasClass("uk-active"))}})}(UIkit),function(t){"use strict";function i(i,e,n,o){if(i=t.$(i),e=t.$(e),n=n||window.innerWidth,o=o||i.offset(),e.length){var s=e.outerWidth();if(i.css("min-width",s),"right"==t.langdirection){var a=n-(e.offset().left+s),r=n-(i.offset().left+i.outerWidth());i.css("margin-right",a-r)}else i.css("margin-left",e.offset().left-o.left)}}var e,n=!1;t.component("dropdown",{defaults:{mode:"hover",remaintime:800,justify:!1,boundary:t.$win,delay:0,hoverDelayIdle:250},remainIdle:!1,boot:function(){var i=t.support.touch?"click":"mouseenter";t.$html.on(i+".dropdown.uikit","[data-uk-dropdown]",function(e){var n=t.$(this);if(!n.data("dropdown")){var o=t.dropdown(n,t.Utils.options(n.attr("data-uk-dropdown")));("click"==i||"mouseenter"==i&&"hover"==o.options.mode)&&o.element.trigger(i),o.element.find(".uk-dropdown").length&&e.preventDefault()}})},init:function(){var i=this;this.dropdown=this.find(".uk-dropdown"),this.centered=this.dropdown.hasClass("uk-dropdown-center"),this.justified=this.options.justify?t.$(this.options.justify):!1,this.boundary=t.$(this.options.boundary),this.flipped=this.dropdown.hasClass("uk-dropdown-flip"),this.boundary.length||(this.boundary=t.$win),this.element.attr("aria-haspopup","true"),this.element.attr("aria-expanded",this.element.hasClass("uk-open")),"click"==this.options.mode||t.support.touch?this.on("click.uikit.dropdown",function(e){var n=t.$(e.target);n.parents(".uk-dropdown").length||((n.is("a[href='#']")||n.parent().is("a[href='#']")||i.dropdown.length&&!i.dropdown.is(":visible"))&&e.preventDefault(),n.blur()),i.element.hasClass("uk-open")?(!i.dropdown.find(e.target).length||n.is(".uk-dropdown-close")||n.parents(".uk-dropdown-close").length)&&i.hide():i.show()}):this.on("mouseenter",function(){i.trigger("pointerenter.uk.dropdown",[i]),i.remainIdle&&clearTimeout(i.remainIdle),e&&clearTimeout(e),n&&n==i||(e=n&&n!=i?setTimeout(function(){e=setTimeout(i.show.bind(i),i.options.delay)},i.options.hoverDelayIdle):setTimeout(i.show.bind(i),i.options.delay))}).on("mouseleave",function(){e&&clearTimeout(e),i.remainIdle=setTimeout(function(){n&&n==i&&i.hide()},i.options.remaintime),i.trigger("pointerleave.uk.dropdown",[i])}).on("click",function(e){var o=t.$(e.target);i.remainIdle&&clearTimeout(i.remainIdle),n&&n==i||((o.is("a[href='#']")||o.parent().is("a[href='#']"))&&e.preventDefault(),i.show())})},show:function(){t.$html.off("click.outer.dropdown"),n&&n!=this&&n.hide(!0),e&&clearTimeout(e),this.trigger("beforeshow.uk.dropdown",[this]),this.checkDimensions(),this.element.addClass("uk-open"),this.element.attr("aria-expanded","true"),this.trigger("show.uk.dropdown",[this]),t.Utils.checkDisplay(this.dropdown,!0),n=this,this.registerOuterClick()},hide:function(t){this.trigger("beforehide.uk.dropdown",[this,t]),this.element.removeClass("uk-open"),this.remainIdle&&clearTimeout(this.remainIdle),this.remainIdle=!1,this.element.attr("aria-expanded","false"),this.trigger("hide.uk.dropdown",[this,t]),n==this&&(n=!1)},registerOuterClick:function(){var i=this;t.$html.off("click.outer.dropdown"),setTimeout(function(){t.$html.on("click.outer.dropdown",function(o){e&&clearTimeout(e);t.$(o.target);n!=i||i.element.find(o.target).length||(i.hide(!0),t.$html.off("click.outer.dropdown"))})},10)},checkDimensions:function(){if(this.dropdown.length){this.justified&&this.justified.length&&this.dropdown.css("min-width","");var e=this,n=this.dropdown.css("margin-"+t.langdirection,""),o=n.show().offset(),s=n.outerWidth(),a=this.boundary.width(),r=this.boundary.offset()?this.boundary.offset().left:0;this.centered&&(n.css("margin-"+t.langdirection,-1*(parseFloat(s)/2-n.parent().width()/2)),o=n.offset(),(s+o.left>a||o.left<0)&&(n.css("margin-"+t.langdirection,""),o=n.offset())),this.justified&&this.justified.length&&(i(n,this.justified,a,o),o=n.offset()),s+(o.left-r)>a&&(n.addClass("uk-dropdown-flip"),o=n.offset()),o.left-r<0&&(n.addClass("uk-dropdown-stack"),n.hasClass("uk-dropdown-flip")&&(this.flipped||(n.removeClass("uk-dropdown-flip"),o=n.offset(),n.addClass("uk-dropdown-flip")),setTimeout(function(){(n.offset().left-r<0||!e.flipped&&n.outerWidth()+(o.left-r)<a)&&n.removeClass("uk-dropdown-flip")},0)),this.trigger("stack.uk.dropdown",[this])),n.css("display","")}}}),t.component("dropdownOverlay",{defaults:{justify:!1,cls:"",duration:200},boot:function(){t.ready(function(i){t.$("[data-uk-dropdown-overlay]",i).each(function(){var i=t.$(this);i.data("dropdownOverlay")||t.dropdownOverlay(i,t.Utils.options(i.attr("data-uk-dropdown-overlay")))})})},init:function(){var e=this;this.justified=this.options.justify?t.$(this.options.justify):!1,this.overlay=this.element.find("uk-dropdown-overlay"),this.overlay.length||(this.overlay=t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)),this.overlay.addClass(this.options.cls),this.on({"beforeshow.uk.dropdown":function(t,n){e.dropdown=n,e.justified&&e.justified.length&&i(e.overlay.css({display:"block","margin-left":"","margin-right":""}),e.justified,e.justified.outerWidth())},"show.uk.dropdown":function(){var i=e.dropdown.dropdown.outerHeight(!0);e.dropdown.element.removeClass("uk-open"),e.overlay.stop().css("display","block").animate({height:i},e.options.duration,function(){e.dropdown.dropdown.css("visibility",""),e.dropdown.element.addClass("uk-open"),t.Utils.checkDisplay(e.dropdown.dropdown,!0)}),e.pointerleave=!1},"hide.uk.dropdown":function(){e.overlay.stop().animate({height:0},e.options.duration)},"pointerenter.uk.dropdown":function(){clearTimeout(e.remainIdle)},"pointerleave.uk.dropdown":function(){e.pointerleave=!0}}),this.overlay.on({mouseenter:function(){e.remainIdle&&(clearTimeout(e.dropdown.remainIdle),clearTimeout(e.remainIdle))},mouseleave:function(){e.pointerleave&&n&&(e.remainIdle=setTimeout(function(){n&&n.hide()},n.options.remaintime))}})}})}(UIkit),function(t){"use strict";var i=[];t.component("gridMatchHeight",{defaults:{target:!1,row:!0,ignorestacked:!1},boot:function(){t.ready(function(i){t.$("[data-uk-grid-match]",i).each(function(){var i,e=t.$(this);e.data("gridMatchHeight")||(i=t.gridMatchHeight(e,t.Utils.options(e.attr("data-uk-grid-match"))))})})},init:function(){var e=this;this.columns=this.element.children(),this.elements=this.options.target?this.find(this.options.target):this.columns,this.columns.length&&(t.$win.on("load resize orientationchange",function(){var i=function(){e.match()};return t.$(function(){i()}),t.Utils.debounce(i,50)}()),t.$html.on("changed.uk.dom",function(){e.columns=e.element.children(),e.elements=e.options.target?e.find(e.options.target):e.columns,e.match()}),this.on("display.uk.check",function(){this.element.is(":visible")&&this.match()}.bind(this)),i.push(this))},match:function(){var i=this.columns.filter(":visible:first");if(i.length){var e=Math.ceil(100*parseFloat(i.css("width"))/parseFloat(i.parent().css("width")))>=100;return e&&!this.options.ignorestacked?this.revert():t.Utils.matchHeights(this.elements,this.options),this}},revert:function(){return this.elements.css("min-height",""),this}}),t.component("gridMargin",{defaults:{cls:"uk-grid-margin"},boot:function(){t.ready(function(i){t.$("[data-uk-grid-margin]",i).each(function(){var i,e=t.$(this);e.data("gridMargin")||(i=t.gridMargin(e,t.Utils.options(e.attr("data-uk-grid-margin"))))})})},init:function(){t.stackMargin(this.element,this.options)}})}(UIkit),function(t){"use strict";function i(i,e){return e?("object"==typeof i?(i=i instanceof jQuery?i:t.$(i),i.parent().length&&(e.persist=i,e.persist.data("modalPersistParent",i.parent()))):i="string"==typeof i||"number"==typeof i?t.$("<div></div>").html(i):t.$("<div></div>").html("UIkit.modal Error: Unsupported data type: "+typeof i),i.appendTo(e.element.find(".uk-modal-dialog")),e):void 0}var e,n=!1,o=0,s=t.$html;t.component("modal",{defaults:{keyboard:!0,bgclose:!0,minScrollHeight:150,center:!1,modal:!0},scrollable:!1,transition:!1,init:function(){if(e||(e=t.$("body")),this.element.length){var i=this;this.paddingdir="padding-"+("left"==t.langdirection?"right":"left"),this.dialog=this.find(".uk-modal-dialog"),this.active=!1,this.element.attr("aria-hidden",this.element.hasClass("uk-open")),this.on("click",".uk-modal-close",function(t){t.preventDefault(),i.hide()}).on("click",function(e){var n=t.$(e.target);n[0]==i.element[0]&&i.options.bgclose&&i.hide()})}},toggle:function(){return this[this.isActive()?"hide":"show"]()},show:function(){if(this.element.length){if(!this.isActive())return this.options.modal&&n&&n.hide(!0),this.element.removeClass("uk-open").show(),this.resize(),this.options.modal&&(n=this),this.active=!0,o++,this.element.addClass("uk-open"),s.addClass("uk-modal-page").height(),this.element.attr("aria-hidden","false"),this.element.trigger("show.uk.modal"),t.Utils.checkDisplay(this.dialog,!0),this}},hide:function(i){if(!i&&t.support.transition){var e=this;this.one(t.support.transition.end,function(){e._hide()}).removeClass("uk-open")
}else this._hide();return this},resize:function(){var t=e.width();if(this.scrollbarwidth=window.innerWidth-t,e.css(this.paddingdir,this.scrollbarwidth),this.element.css("overflow-y",this.scrollbarwidth?"scroll":"auto"),!this.updateScrollable()&&this.options.center){var i=this.dialog.outerHeight(),n=parseInt(this.dialog.css("margin-top"),10)+parseInt(this.dialog.css("margin-bottom"),10);i+n<window.innerHeight?this.dialog.css({top:window.innerHeight/2-i/2-n}):this.dialog.css({top:""})}},updateScrollable:function(){var t=this.dialog.find(".uk-overflow-container:visible:first");if(t.length){t.css("height",0);var i=Math.abs(parseInt(this.dialog.css("margin-top"),10)),e=this.dialog.outerHeight(),n=window.innerHeight,o=n-2*(20>i?20:i)-e;return t.css("height",o<this.options.minScrollHeight?"":o),!0}return!1},_hide:function(){this.active=!1,o--,this.element.hide().removeClass("uk-open"),this.element.attr("aria-hidden","true"),o||(s.removeClass("uk-modal-page"),e.css(this.paddingdir,"")),n===this&&(n=!1),this.trigger("hide.uk.modal")},isActive:function(){return this.active}}),t.component("modalTrigger",{boot:function(){t.$html.on("click.modal.uikit","[data-uk-modal]",function(i){var e=t.$(this);if(e.is("a")&&i.preventDefault(),!e.data("modalTrigger")){var n=t.modalTrigger(e,t.Utils.options(e.attr("data-uk-modal")));n.show()}}),t.$html.on("keydown.modal.uikit",function(t){n&&27===t.keyCode&&n.options.keyboard&&(t.preventDefault(),n.hide())}),t.$win.on("resize orientationchange",t.Utils.debounce(function(){n&&n.resize()},150))},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1},this.options),this.modal=t.modal(this.options.target,this.options),this.on("click",function(t){t.preventDefault(),i.show()}),this.proxy(this.modal,"show hide isActive")}}),t.modal.dialog=function(e,n){var o=t.modal(t.$(t.modal.dialog.template).appendTo("body"),n);return o.on("hide.uk.modal",function(){o.persist&&(o.persist.appendTo(o.persist.data("modalPersistParent")),o.persist=!1),o.element.remove()}),i(e,o),o},t.modal.dialog.template='<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>',t.modal.alert=function(i,e){e=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},e);var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">'+e.labels.Ok+"</button></div>"].join(""),e);return n.on("show.uk.modal",function(){setTimeout(function(){n.element.find("button:first").focus()},50)}),n.show()},t.modal.confirm=function(i,e,n){e=t.$.isFunction(e)?e:function(){},n=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},n);var o=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+n.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-confirm">'+n.labels.Ok+"</button></div>"].join(""),n);return o.element.find(".js-modal-confirm").on("click",function(){e(),o.hide()}),o.on("show.uk.modal",function(){setTimeout(function(){o.element.find(".js-modal-confirm").focus()},50)}),o.show()},t.modal.prompt=function(i,e,n,o){n=t.$.isFunction(n)?n:function(){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},o);var s=t.modal.dialog([i?'<div class="uk-modal-content uk-form">'+String(i)+"</div>":"",'<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>','<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-ok">'+o.labels.Ok+"</button></div>"].join(""),o),a=s.element.find("input[type='text']").val(e||"").on("keyup",function(t){13==t.keyCode&&s.element.find(".js-modal-ok").trigger("click")});return s.element.find(".js-modal-ok").on("click",function(){n(a.val())!==!1&&s.hide()}),s.on("show.uk.modal",function(){setTimeout(function(){a.focus()},50)}),s.show()},t.modal.blockUI=function(i,e){var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i||'<div class="uk-text-center">...</div>')+"</div>"].join(""),t.$.extend({bgclose:!1,keyboard:!1,modal:!1},e));return n.content=n.element.find(".uk-modal-content:first"),n.show()},t.modal.labels={Ok:"Ok",Cancel:"Cancel"}}(UIkit),function(t){"use strict";function i(i){var e=t.$(i),n="auto";if(e.is(":visible"))n=e.outerHeight();else{var o={position:e.css("position"),visibility:e.css("visibility"),display:e.css("display")};n=e.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),e.css(o)}return n}t.component("nav",{defaults:{toggle:">li.uk-parent > a[href='#']",lists:">li.uk-parent > ul",multiple:!1},boot:function(){t.ready(function(i){t.$("[data-uk-nav]",i).each(function(){var i=t.$(this);if(!i.data("nav")){t.nav(i,t.Utils.options(i.attr("data-uk-nav")))}})})},init:function(){var i=this;this.on("click.uikit.nav",this.options.toggle,function(e){e.preventDefault();var n=t.$(this);i.open(n.parent()[0]==i.element[0]?n:n.parent("li"))}),this.find(this.options.lists).each(function(){var e=t.$(this),n=e.parent(),o=n.hasClass("uk-active");e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'),n.data("list-container",e.parent()[o?"removeClass":"addClass"]("uk-hidden")),n.attr("aria-expanded",n.hasClass("uk-open")),o&&i.open(n,!0)})},open:function(e,n){var o=this,s=this.element,a=t.$(e),r=a.data("list-container");this.options.multiple||s.children(".uk-open").not(e).each(function(){var i=t.$(this);i.data("list-container")&&i.data("list-container").stop().animate({height:0},function(){t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden")})}),a.toggleClass("uk-open"),a.attr("aria-expanded",a.hasClass("uk-open")),r&&(a.hasClass("uk-open")&&r.removeClass("uk-hidden"),n?(r.stop().height(a.hasClass("uk-open")?"auto":0),a.hasClass("uk-open")||r.addClass("uk-hidden"),this.trigger("display.uk.check")):r.stop().animate({height:a.hasClass("uk-open")?i(r.find("ul:first")):0},function(){a.hasClass("uk-open")?r.css("height",""):r.addClass("uk-hidden"),o.trigger("display.uk.check")}))}})}(UIkit),function(t){"use strict";var i={x:window.scrollX,y:window.scrollY},e=(t.$win,t.$doc,t.$html),n={show:function(n){if(n=t.$(n),n.length){var o=t.$("body"),s=n.find(".uk-offcanvas-bar:first"),a="right"==t.langdirection,r=s.hasClass("uk-offcanvas-bar-flip")?-1:1,l=r*(a?-1:1),c=window.innerWidth-o.width();i={x:window.pageXOffset,y:window.pageYOffset},n.addClass("uk-active"),o.css({width:window.innerWidth-c,height:window.innerHeight}).addClass("uk-offcanvas-page"),o.css(a?"margin-right":"margin-left",(a?-1:1)*s.outerWidth()*l).width(),e.css("margin-top",-1*i.y),s.addClass("uk-offcanvas-bar-show"),this._initElement(n),s.trigger("show.uk.offcanvas",[n,s]),n.attr("aria-hidden","false")}},hide:function(n){var o=t.$("body"),s=t.$(".uk-offcanvas.uk-active"),a="right"==t.langdirection,r=s.find(".uk-offcanvas-bar:first"),l=function(){o.removeClass("uk-offcanvas-page").css({width:"",height:"","margin-left":"","margin-right":""}),s.removeClass("uk-active"),r.removeClass("uk-offcanvas-bar-show"),e.css("margin-top",""),window.scrollTo(i.x,i.y),r.trigger("hide.uk.offcanvas",[s,r]),s.attr("aria-hidden","true")};s.length&&(t.support.transition&&!n?(o.one(t.support.transition.end,function(){l()}).css(a?"margin-right":"margin-left",""),setTimeout(function(){r.removeClass("uk-offcanvas-bar-show")},0)):l())},_initElement:function(i){i.data("OffcanvasInit")||(i.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas",function(i){var e=t.$(i.target);if(!i.type.match(/swipe/)&&!e.hasClass("uk-offcanvas-close")){if(e.hasClass("uk-offcanvas-bar"))return;if(e.parents(".uk-offcanvas-bar:first").length)return}i.stopImmediatePropagation(),n.hide()}),i.on("click","a[href^='#']",function(){var i=t.$(this),e=i.attr("href");"#"!=e&&(t.$doc.one("hide.uk.offcanvas",function(){var n;try{n=t.$(e)}catch(o){n=""}n.length||(n=t.$('[name="'+e.replace("#","")+'"]')),n.length&&i.attr("data-uk-smooth-scroll")&&t.Utils.scrollToElement?t.Utils.scrollToElement(n,t.Utils.options(i.attr("data-uk-smooth-scroll")||"{}")):window.location.href=e}),n.hide())}),i.data("OffcanvasInit",!0))}};t.component("offcanvasTrigger",{boot:function(){e.on("click.offcanvas.uikit","[data-uk-offcanvas]",function(i){i.preventDefault();var e=t.$(this);if(!e.data("offcanvasTrigger")){{t.offcanvasTrigger(e,t.Utils.options(e.attr("data-uk-offcanvas")))}e.trigger("click")}}),e.on("keydown.uk.offcanvas",function(t){27===t.keyCode&&n.hide()})},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1},this.options),this.on("click",function(t){t.preventDefault(),n.show(i.options.target)})}}),t.offcanvas=n}(UIkit),function(t){"use strict";function i(i,e,n){var o,s=t.$.Deferred(),a=i,r=i;return n[0]===e[0]?(s.resolve(),s.promise()):("object"==typeof i&&(a=i[0],r=i[1]||i[0]),o=function(){e&&e.hide().removeClass("uk-active "+r+" uk-animation-reverse"),n.addClass(a).one(t.support.animation.end,function(){n.removeClass(""+a).css({opacity:"",display:""}),s.resolve(),e&&e.css({opacity:"",display:""})}.bind(this)).show()},n.css("animation-duration",this.options.duration+"ms"),e&&e.length?(e.css("animation-duration",this.options.duration+"ms"),e.css("display","none").addClass(r+" uk-animation-reverse").one(t.support.animation.end,function(){o()}.bind(this)).css("display","")):(n.addClass("uk-active"),o()),s.promise())}var e;t.component("switcher",{defaults:{connect:!1,toggle:">*",active:0,animation:!1,duration:200,swiping:!0},animating:!1,boot:function(){t.ready(function(i){t.$("[data-uk-switcher]",i).each(function(){var i=t.$(this);if(!i.data("switcher")){t.switcher(i,t.Utils.options(i.attr("data-uk-switcher")))}})})},init:function(){var i=this;if(this.on("click.uikit.switcher",this.options.toggle,function(t){t.preventDefault(),i.show(this)}),this.options.connect){this.connect=t.$(this.options.connect),this.connect.find(".uk-active").removeClass(".uk-active"),this.connect.length&&(this.connect.children().attr("aria-hidden","true"),this.connect.on("click","[data-uk-switcher-item]",function(e){e.preventDefault();var n=t.$(this).attr("data-uk-switcher-item");if(i.index!=n)switch(n){case"next":case"previous":i.show(i.index+("next"==n?1:-1));break;default:i.show(parseInt(n,10))}}),this.options.swiping&&this.connect.on("swipeRight swipeLeft",function(t){t.preventDefault(),window.getSelection().toString()||i.show(i.index+("swipeLeft"==t.type?1:-1))}));var e=this.find(this.options.toggle),n=e.filter(".uk-active");if(n.length)this.show(n,!1);else{if(this.options.active===!1)return;n=e.eq(this.options.active),this.show(n.length?n:e.eq(0),!1)}e.not(n).attr("aria-expanded","false"),n.attr("aria-expanded","true"),this.on("changed.uk.dom",function(){i.connect=t.$(i.options.connect)})}},show:function(n,o){if(!this.animating){if(isNaN(n))n=t.$(n);else{var s=this.find(this.options.toggle);n=0>n?s.length-1:n,n=s.eq(s[n]?n:0)}var a=this,s=this.find(this.options.toggle),r=t.$(n),l=e[this.options.animation]||function(t,n){if(!a.options.animation)return e.none.apply(a);var o=a.options.animation.split(",");return 1==o.length&&(o[1]=o[0]),o[0]=o[0].trim(),o[1]=o[1].trim(),i.apply(a,[o,t,n])};o!==!1&&t.support.animation||(l=e.none),r.hasClass("uk-disabled")||(s.attr("aria-expanded","false"),r.attr("aria-expanded","true"),s.filter(".uk-active").removeClass("uk-active"),r.addClass("uk-active"),this.options.connect&&this.connect.length&&(this.index=this.find(this.options.toggle).index(r),-1==this.index&&(this.index=0),this.connect.each(function(){var i=t.$(this),e=t.$(i.children()),n=t.$(e.filter(".uk-active")),o=t.$(e.eq(a.index));a.animating=!0,l.apply(a,[n,o]).then(function(){n.removeClass("uk-active"),o.addClass("uk-active"),n.attr("aria-hidden","true"),o.attr("aria-hidden","false"),t.Utils.checkDisplay(o,!0),a.animating=!1})})),this.trigger("show.uk.switcher",[r]))}}}),e={none:function(){var i=t.$.Deferred();return i.resolve(),i.promise()},fade:function(t,e){return i.apply(this,["uk-animation-fade",t,e])},"slide-bottom":function(t,e){return i.apply(this,["uk-animation-slide-bottom",t,e])},"slide-top":function(t,e){return i.apply(this,["uk-animation-slide-top",t,e])},"slide-vertical":function(t,e){var n=["uk-animation-slide-top","uk-animation-slide-bottom"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},"slide-left":function(t,e){return i.apply(this,["uk-animation-slide-left",t,e])},"slide-right":function(t,e){return i.apply(this,["uk-animation-slide-right",t,e])},"slide-horizontal":function(t,e){var n=["uk-animation-slide-right","uk-animation-slide-left"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},scale:function(t,e){return i.apply(this,["uk-animation-scale-up",t,e])}},t.switcher.animations=e}(UIkit),function(t){"use strict";t.component("tab",{defaults:{target:">li:not(.uk-tab-responsive, .uk-disabled)",connect:!1,active:0,animation:!1,duration:200},boot:function(){t.ready(function(i){t.$("[data-uk-tab]",i).each(function(){var i=t.$(this);if(!i.data("tab")){t.tab(i,t.Utils.options(i.attr("data-uk-tab")))}})})},init:function(){var i=this;this.current=!1,this.on("click.uikit.tab",this.options.target,function(e){if(e.preventDefault(),!i.switcher||!i.switcher.animating){var n=i.find(i.options.target).not(this);n.removeClass("uk-active").blur(),i.trigger("change.uk.tab",[t.$(this).addClass("uk-active"),i.current]),i.current=t.$(this),i.options.connect||(n.attr("aria-expanded","false"),t.$(this).attr("aria-expanded","true"))}}),this.options.connect&&(this.connect=t.$(this.options.connect)),this.responsivetab=t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'),this.responsivetab.dropdown=this.responsivetab.find(".uk-dropdown"),this.responsivetab.lst=this.responsivetab.dropdown.find("ul"),this.responsivetab.caption=this.responsivetab.find("a:first"),this.element.hasClass("uk-tab-bottom")&&this.responsivetab.dropdown.addClass("uk-dropdown-up"),this.responsivetab.lst.on("click.uikit.tab","a",function(e){e.preventDefault(),e.stopPropagation();var n=t.$(this);i.element.children("li:not(.uk-tab-responsive)").eq(n.data("index")).trigger("click")}),this.on("show.uk.switcher change.uk.tab",function(t,e){i.responsivetab.caption.html(e.text())}),this.element.append(this.responsivetab),this.options.connect&&(this.switcher=t.switcher(this.element,{toggle:">li:not(.uk-tab-responsive)",connect:this.options.connect,active:this.options.active,animation:this.options.animation,duration:this.options.duration})),t.dropdown(this.responsivetab,{mode:"click"}),i.trigger("change.uk.tab",[this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]),this.check(),t.$win.on("resize orientationchange",t.Utils.debounce(function(){i.element.is(":visible")&&i.check()},100)),this.on("display.uk.check",function(){i.element.is(":visible")&&i.check()})},check:function(){var i=this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");if(!i.length)return this.responsivetab.addClass("uk-hidden"),void 0;var e,n,o,s=i.eq(0).offset().top+Math.ceil(i.eq(0).height()/2),a=!1;if(this.responsivetab.lst.empty(),i.each(function(){t.$(this).offset().top>s&&(a=!0)}),a)for(var r=0;r<i.length;r++)e=t.$(i.eq(r)),n=e.find("a"),"none"==e.css("float")||e.attr("uk-dropdown")||(e.hasClass("uk-disabled")||(o=e[0].outerHTML.replace("<a ",'<a data-index="'+r+'" '),this.responsivetab.lst.append(o)),e.addClass("uk-hidden"));this.responsivetab[this.responsivetab.lst.children("li").length?"removeClass":"addClass"]("uk-hidden")}})}(UIkit),function(t){"use strict";t.component("cover",{defaults:{automute:!0},boot:function(){t.ready(function(i){t.$("[data-uk-cover]",i).each(function(){var i=t.$(this);if(!i.data("cover")){t.cover(i,t.Utils.options(i.attr("data-uk-cover")))}})})},init:function(){if(this.parent=this.element.parent(),t.$win.on("load resize orientationchange",t.Utils.debounce(function(){this.check()}.bind(this),100)),this.on("display.uk.check",function(){this.element.is(":visible")&&this.check()}.bind(this)),this.check(),this.element.is("iframe")&&this.options.automute){var i=this.element.attr("src");this.element.attr("src","").on("load",function(){this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}',"*")}).attr("src",[i,i.indexOf("?")>-1?"&":"?","enablejsapi=1&api=1"].join(""))}},check:function(){this.element.css({width:"",height:""}),this.dimension={w:this.element.width(),h:this.element.height()},this.element.attr("width")&&!isNaN(this.element.attr("width"))&&(this.dimension.w=this.element.attr("width")),this.element.attr("height")&&!isNaN(this.element.attr("height"))&&(this.dimension.h=this.element.attr("height")),this.ratio=this.dimension.w/this.dimension.h;var t,i,e=this.parent.width(),n=this.parent.height();e/this.ratio<n?(t=Math.ceil(n*this.ratio),i=n):(t=e,i=Math.ceil(e/this.ratio)),this.element.css({width:t,height:i})}})}(UIkit);
(function(addon) {

    var component;

    if (window.UIkit) {
        component = addon(UIkit);
    }

    if (typeof define == "function" && define.amd) {
        define("uikit-sticky", ["uikit"], function(){
            return component || addon(UIkit);
        });
    }

})(function(UI){

    "use strict";

    var $win         = UI.$win,
        $doc         = UI.$doc,
        sticked      = [],
        direction    = 1;

    UI.component('sticky', {

        defaults: {
            top          : 0,
            bottom       : 0,
            animation    : '',
            clsinit      : 'uk-sticky-init',
            clsactive    : 'uk-active',
            clsinactive  : '',
            getWidthFrom : '',
            showup      : false,
            boundary     : false,
            media        : false,
            target       : false,
            disabled     : false
        },

        boot: function() {

            // should be more efficient than using $win.scroll(checkscrollposition):
            UI.$doc.on('scrolling.uk.document', function(e, data) {
                direction = data.dir.y;
                checkscrollposition();
            });

            UI.$win.on('resize orientationchange', UI.Utils.debounce(function() {

                if (!sticked.length) return;

                for (var i = 0; i < sticked.length; i++) {
                    sticked[i].reset(true);
                    sticked[i].self.computeWrapper();
                }

                checkscrollposition();
            }, 100));

            // init code
            UI.ready(function(context) {

                setTimeout(function(){

                    UI.$("[data-uk-sticky]", context).each(function(){

                        var $ele = UI.$(this);

                        if(!$ele.data("sticky")) {
                            UI.sticky($ele, UI.Utils.options($ele.attr('data-uk-sticky')));
                        }
                    });

                    checkscrollposition();
                }, 0);
            });
        },

        init: function() {

            var wrapper  = UI.$('<div class="uk-sticky-placeholder"></div>'), boundary = this.options.boundary, boundtoparent;

            this.wrapper = this.element.css('margin', 0).wrap(wrapper).parent();

            this.computeWrapper();

            if (boundary) {

                if (boundary === true) {

                    boundary      = this.wrapper.parent();
                    boundtoparent = true;

                } else if (typeof boundary === "string") {
                    boundary = UI.$(boundary);
                }
            }

            this.sticky = {
                self          : this,
                options       : this.options,
                element       : this.element,
                currentTop    : null,
                wrapper       : this.wrapper,
                init          : false,
                getWidthFrom  : this.options.getWidthFrom || this.wrapper,
                boundary      : boundary,
                boundtoparent : boundtoparent,
                top           : 0,
                calcTop       : function() {

                    var top = this.options.top;

                    // dynamic top parameter
                    if (this.options.top && typeof(this.options.top) == 'string') {

                        // e.g. 50vh
                        if (this.options.top.match(/^(-|)(\d+)vh$/)) {
                            top = window.innerHeight * parseInt(this.options.top, 10)/100;
                        // e.g. #elementId, or .class-1,class-2,.class-3 (first found is used)
                        } else {

                            var topElement = UI.$(this.options.top).first();

                            if (topElement.length && topElement.is(':visible')) {
                                top = -1 * ((topElement.offset().top + topElement.outerHeight()) - this.wrapper.offset().top);
                            }
                        }

                    }

                    this.top = top;
                },
                reset         : function(force) {

                    this.calcTop();

                    var finalize = function() {
                        this.element.css({"position":"", "top":"", "width":"", "left":"", "margin":"0"});
                        this.element.removeClass([this.options.animation, 'uk-animation-reverse', this.options.clsactive].join(' '));
                        this.element.addClass(this.options.clsinactive);

                        this.currentTop = null;
                        this.animate    = false;
                    }.bind(this);


                    if (!force && this.options.animation && UI.support.animation && !UI.Utils.isInView(this.wrapper)) {

                        this.animate = true;

                        this.element.removeClass(this.options.animation).one(UI.support.animation.end, function(){
                            finalize();
                        }).width(); // force redraw

                        this.element.addClass(this.options.animation+' '+'uk-animation-reverse');
                    } else {
                        finalize();
                    }
                },

                check: function() {

                    if (this.options.disabled) {
                        return false;
                    }

                    if (this.options.media) {

                        switch(typeof(this.options.media)) {
                            case 'number':
                                if (window.innerWidth < this.options.media) {
                                    return false;
                                }
                                break;
                            case 'string':
                                if (window.matchMedia && !window.matchMedia(this.options.media).matches) {
                                    return false;
                                }
                                break;
                        }
                    }

                    var scrollTop      = $win.scrollTop(),
                        documentHeight = $doc.height(),
                        dwh            = documentHeight - window.innerHeight,
                        extra          = (scrollTop > dwh) ? dwh - scrollTop : 0,
                        elementTop     = this.wrapper.offset().top,
                        etse           = elementTop - this.top - extra,
                        active         = (scrollTop  >= etse);

                    if (active && this.options.showup) {

                        // set inactiv if scrolling down
                        if (direction == 1) {
                            active = false;
                        }

                        // set inactive when wrapper is still in view
                        if (direction == -1 && !this.element.hasClass(this.options.clsactive) && UI.Utils.isInView(this.wrapper)) {
                            active = false;
                        }
                    }

                    return active;
                }
            };

            this.sticky.calcTop();

            sticked.push(this.sticky);
        },

        update: function() {
            checkscrollposition(this.sticky);
        },

        enable: function() {
            this.options.disabled = false;
            this.update();
        },

        disable: function(force) {
            this.options.disabled = true;
            this.sticky.reset(force);
        },

        computeWrapper: function() {

            this.wrapper.css({
                'height' : ['absolute','fixed'].indexOf(this.element.css('position')) == -1 ? this.element.outerHeight() : '',
                'float'  : this.element.css('float') != 'none' ? this.element.css('float') : '',
                'margin' : this.element.css('margin')
            });
        }
    });

    function checkscrollposition(direction) {

        var stickies = arguments.length ? arguments : sticked;

        if (!stickies.length || $win.scrollTop() < 0) return;

        var scrollTop       = $win.scrollTop(),
            documentHeight  = $doc.height(),
            windowHeight    = $win.height(),
            dwh             = documentHeight - windowHeight,
            extra           = (scrollTop > dwh) ? dwh - scrollTop : 0,
            newTop, containerBottom, stickyHeight, sticky;

        for (var i = 0; i < stickies.length; i++) {

            sticky = stickies[i];

            if (!sticky.element.is(":visible") || sticky.animate) {
                continue;
            }

            if (!sticky.check()) {

                if (sticky.currentTop !== null) {
                    sticky.reset();
                }

            } else {

                if (sticky.top < 0) {
                    newTop = 0;
                } else {
                    stickyHeight = sticky.element.outerHeight();
                    newTop = documentHeight - stickyHeight - sticky.top - sticky.options.bottom - scrollTop - extra;
                    newTop = newTop < 0 ? newTop + sticky.top : sticky.top;
                }

                if (sticky.boundary && sticky.boundary.length) {

                    var bTop = sticky.boundary.offset().top;

                    if (sticky.boundtoparent) {
                        containerBottom = documentHeight - (bTop + sticky.boundary.outerHeight()) + parseInt(sticky.boundary.css('padding-bottom'));
                    } else {
                        containerBottom = documentHeight - bTop - parseInt(sticky.boundary.css('margin-top'));
                    }

                    newTop = (scrollTop + stickyHeight) > (documentHeight - containerBottom - (sticky.top < 0 ? 0 : sticky.top)) ? (documentHeight - containerBottom) - (scrollTop + stickyHeight) : newTop;
                }


                if (sticky.currentTop != newTop) {

                    sticky.element.css({
                        "position" : "fixed",
                        "top"      : newTop,
                        "width"    : (typeof sticky.getWidthFrom !== 'undefined') ? UI.$(sticky.getWidthFrom).width() : sticky.element.width(),
                        "left"     : sticky.wrapper.offset().left
                    });

                    if (!sticky.init) {

                        sticky.element.addClass(sticky.options.clsinit);

                        if (location.hash && scrollTop > 0 && sticky.options.target) {

                            var $target = UI.$(location.hash);

                            if ($target.length) {

                                setTimeout((function($target, sticky){

                                    return function() {

                                        sticky.element.width(); // force redraw

                                        var offset       = $target.offset(),
                                            maxoffset    = offset.top + $target.outerHeight(),
                                            stickyOffset = sticky.element.offset(),
                                            stickyHeight = sticky.element.outerHeight(),
                                            stickyMaxOffset = stickyOffset.top + stickyHeight;

                                        if (stickyOffset.top < maxoffset && offset.top < stickyMaxOffset) {
                                            scrollTop = offset.top - stickyHeight - sticky.options.target;
                                            window.scrollTo(0, scrollTop);
                                        }
                                    };

                                })($target, sticky), 0);
                            }
                        }
                    }

                    sticky.element.addClass(sticky.options.clsactive).removeClass(sticky.options.clsinactive);
                    sticky.element.css('margin', '');

                    if (sticky.options.animation && sticky.init && !UI.Utils.isInView(sticky.wrapper)) {
                        sticky.element.addClass(sticky.options.animation);
                    }

                    sticky.currentTop = newTop;
                }
            }

            sticky.init = true;
        }
    }

    return UI.sticky;
});

/*! UIkit 2.22.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function(addon) {

    var component;

    if (window.UIkit) {
        component = addon(UIkit);
    }

    if (typeof define == "function" && define.amd) {
        define("uikit-parallax", ["uikit"], function(){
            return component || addon(UIkit);
        });
    }

})(function(UI){

    "use strict";

    var parallaxes      = [],
        supports3d      = false,
        scrolltop       = 0,
        wh              = window.innerHeight,
        checkParallaxes = function() {

            scrolltop = UI.$win.scrollTop();

            window.requestAnimationFrame.apply(window, [function(){
                for (var i=0; i < parallaxes.length; i++) {
                    parallaxes[i].process();
                }
            }]);
        };


    UI.component('parallax', {

        defaults: {
            velocity : 0.5,
            target   : false,
            viewport : false,
            media    : false
        },

        boot: function() {

            supports3d = (function(){

                var el = document.createElement('div'),
                    has3d,
                    transforms = {
                        'WebkitTransform':'-webkit-transform',
                        'MSTransform':'-ms-transform',
                        'MozTransform':'-moz-transform',
                        'Transform':'transform'
                    };

                // Add it to the body to get the computed style.
                document.body.insertBefore(el, null);

                for (var t in transforms) {
                    if (el.style[t] !== undefined) {
                        el.style[t] = "translate3d(1px,1px,1px)";
                        has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                    }
                }

                document.body.removeChild(el);

                return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
            })();

            // listen to scroll and resize
            UI.$doc.on("scrolling.uk.document", checkParallaxes);
            UI.$win.on("load resize orientationchange", UI.Utils.debounce(function(){
                wh = window.innerHeight;
                checkParallaxes();
            }, 50));

            // init code
            UI.ready(function(context) {

                UI.$('[data-uk-parallax]', context).each(function() {

                    var parallax = UI.$(this);

                    if (!parallax.data("parallax")) {
                        UI.parallax(parallax, UI.Utils.options(parallax.attr("data-uk-parallax")));
                    }
                });
            });
        },

        init: function() {

            this.base     = this.options.target ? UI.$(this.options.target) : this.element;
            this.props    = {};
            this.velocity = (this.options.velocity || 1);

            var reserved  = ['target','velocity','viewport','plugins','media'];

            Object.keys(this.options).forEach(function(prop){

                if (reserved.indexOf(prop) !== -1) {
                    return;
                }

                var start, end, dir, diff, startend = String(this.options[prop]).split(',');

                if (prop.match(/color/i)) {
                    start = startend[1] ? startend[0] : this._getStartValue(prop),
                    end   = startend[1] ? startend[1] : startend[0];

                    if (!start) {
                        start = 'rgba(255,255,255,0)';
                    }

                } else {
                    start = parseFloat(startend[1] ? startend[0] : this._getStartValue(prop)),
                    end   = parseFloat(startend[1] ? startend[1] : startend[0]);
                    diff  = (start < end ? (end-start):(start-end));
                    dir   = (start < end ? 1:-1);
                }

                this.props[prop] = { 'start': start, 'end': end, 'dir': dir, 'diff': diff };

            }.bind(this));

            parallaxes.push(this);
        },

        process: function() {

            if (this.options.media) {

                switch(typeof(this.options.media)) {
                    case 'number':
                        if (window.innerWidth < this.options.media) {
                            return false;
                        }
                        break;
                    case 'string':
                        if (window.matchMedia && !window.matchMedia(this.options.media).matches) {
                            return false;
                        }
                        break;
                }
            }

            var percent = this.percentageInViewport();

            if (this.options.viewport !== false) {
                percent = (this.options.viewport === 0) ? 1 : percent / this.options.viewport;
            }

            this.update(percent);
        },

        percentageInViewport: function() {

            var top     = this.base.offset().top,
                height  = this.base.outerHeight(),
                distance, percentage, percent;

            if (top > (scrolltop + wh)) {
                percent = 0;
            } else if ((top + height) < scrolltop) {
                percent = 1;
            } else {

                if ((top + height) < wh) {

                    percent = (scrolltop < wh ? scrolltop : scrolltop - wh) / (top+height);

                } else {

                    distance   = (scrolltop + wh) - top;
                    percentage = Math.round(distance / ((wh + height) / 100));
                    percent    = percentage/100;
                }
            }

            return percent;
        },

        update: function(percent) {

            var css        = {'transform':''},
                compercent = percent * (1 - (this.velocity - (this.velocity * percent))),
                opts, val;

            if (compercent < 0) compercent = 0;
            if (compercent > 1) compercent = 1;

            if (this._percent !== undefined && this._percent == compercent) {
                return;
            }

            Object.keys(this.props).forEach(function(prop) {

                opts = this.props[prop];

                if (percent === 0) {
                    val = opts.start;
                } else if(percent === 1) {
                    val = opts.end;
                } else if(opts.diff !== undefined) {
                    val = opts.start + (opts.diff * compercent * opts.dir);
                }

                if ((prop == 'bg' || prop == 'bgp') && !this._bgcover) {
                    this._bgcover = initBgImageParallax(this, prop, opts);
                }

                switch(prop) {

                    // transforms
                    case "x":
                        css.transform += supports3d ? ' translate3d('+val+'px, 0, 0)':' translateX('+val+'px)';
                        break;
                    case "xp":
                        css.transform += supports3d ? ' translate3d('+val+'%, 0, 0)':' translateX('+val+'%)';
                        break;
                    case "y":
                        css.transform += supports3d ? ' translate3d(0, '+val+'px, 0)':' translateY('+val+'px)';
                        break;
                    case "yp":
                        css.transform += supports3d ? ' translate3d(0, '+val+'%, 0)':' translateY('+val+'%)';
                        break;
                    case "rotate":
                        css.transform += ' rotate('+val+'deg)';
                        break;
                    case "scale":
                        css.transform += ' scale('+val+')';
                        break;

                    // bg image
                    case "bg":
                        css['background-position'] = '50% '+val+'px';
                        break;
                    case "bgp":
                        css['background-position'] = '50% '+val+'%';
                        break;

                    // color
                    case "color":
                    case "background-color":
                    case "border-color":
                        css[prop] = calcColor(opts.start, opts.end, compercent);
                        break;

                    default:
                        css[prop] = val;
                        break;
                }

            }.bind(this));

            this.element.css(css);

            this._percent = compercent;
        },

        _getStartValue: function(prop) {

            var value = 0;

            switch(prop) {
                case 'scale':
                    value = 1;
                    break;
                default:
                    value = this.element.css(prop);
            }

            return (value || 0);
        }

    });


    // helper

    function initBgImageParallax(obj, prop, opts) {

        var img = new Image(), url, element, size, check, ratio, width, height;

        element = obj.element.css({'background-size': 'cover',  'background-repeat': 'no-repeat'});
        url     = element.css('background-image').replace(/^url\(/g, '').replace(/\)$/g, '').replace(/("|')/g, '');
        check   = function() {

            var w = element.width(), h = element.height(), extra = (prop=='bg') ? opts.diff : (opts.diff/100) * h;

            h += extra;
            w += Math.ceil(extra * ratio);

            // if element height < parent height (gap underneath)
            if ((w / ratio) < h) {
                width  = Math.ceil(h * ratio);
                height = h;

            // element width < parent width (gap to right)
            } else {
                width  = w;
                height = Math.ceil(w / ratio);
            }

            obj.element.css({'background-size': (width+'px '+height+'px')});
        };

        img.onerror = function(){
            // image url doesn't exist
        };

        img.onload = function(){
            size  = {w:img.width, height:img.height};
            ratio = img.width / img.height;

            UI.$win.on("load resize orientationchange", UI.Utils.debounce(function(){
                check();
            }, 50));

            check();
        };

        img.src = url;

        return true;
    }


    // Some named colors to work with, added by Bradley Ayers
    // From Interface by Stefan Petre
    // http://interface.eyecon.ro/
    var colors = {
        'black': [0,0,0,1],
        'blue': [0,0,255,1],
        'brown': [165,42,42,1],
        'cyan': [0,255,255,1],
        'fuchsia': [255,0,255,1],
        'gold': [255,215,0,1],
        'green': [0,128,0,1],
        'indigo': [75,0,130,1],
        'khaki': [240,230,140,1],
        'lime': [0,255,0,1],
        'magenta': [255,0,255,1],
        'maroon': [128,0,0,1],
        'navy': [0,0,128,1],
        'olive': [128,128,0,1],
        'orange': [255,165,0,1],
        'pink': [255,192,203,1],
        'purple': [128,0,128,1],
        'violet': [128,0,128,1],
        'red': [255,0,0,1],
        'silver': [192,192,192,1],
        'white': [255,255,255,1],
        'yellow': [255,255,0,1],
        'transparent': [255,255,255,0]
    };

    function calcColor(start, end, pos) {

        start = parseColor(start);
        end   = parseColor(end);
        pos   = pos || 0;

        return calculateColor(start, end, pos);
    }

    /**!
     * @preserve Color animation 1.6.0
     * http://www.bitstorm.org/jquery/color-animation/
     * Copyright 2011, 2013 Edwin Martin <edwin@bitstorm.org>
     * Released under the MIT and GPL licenses.
     */

    // Calculate an in-between color. Returns "#aabbcc"-like string.
    function calculateColor(begin, end, pos) {
        var color = 'rgba('
                + parseInt((begin[0] + pos * (end[0] - begin[0])), 10) + ','
                + parseInt((begin[1] + pos * (end[1] - begin[1])), 10) + ','
                + parseInt((begin[2] + pos * (end[2] - begin[2])), 10) + ','
                + (begin && end ? parseFloat(begin[3] + pos * (end[3] - begin[3])) : 1);

        color += ')';
        return color;
    }

    // Parse an CSS-syntax color. Outputs an array [r, g, b]
    function parseColor(color) {

        var match, quadruplet;

        // Match #aabbcc
        if (match = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(color)) {
            quadruplet = [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16), 1];

            // Match #abc
        } else if (match = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(color)) {
            quadruplet = [parseInt(match[1], 16) * 17, parseInt(match[2], 16) * 17, parseInt(match[3], 16) * 17, 1];

            // Match rgb(n, n, n)
        } else if (match = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color)) {
            quadruplet = [parseInt(match[1]), parseInt(match[2]), parseInt(match[3]), 1];

        } else if (match = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(color)) {
            quadruplet = [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10),parseFloat(match[4])];

            // No browser returns rgb(n%, n%, n%), so little reason to support this format.
        } else {
            quadruplet = colors[color] || [255,255,255,0];
        }
        return quadruplet;
    }

    return UI.parallax;
});

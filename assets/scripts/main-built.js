define("menu/main",["jquery"],function(e){var t=function(){console.log("------ menu started")};return{init:t}}),define("menu",["menu/main"],function(e){return e}),define("header",["jquery"],function(e){function s(t){e.each(t,function(){var t=this,r=e(this),i=e("#"+r.data("link"));r.on({mouseenter:function(){n.toggleClass("hover"),i.toggleClass("hover")},mouseleave:function(){n.toggleClass("hover"),i.toggleClass("hover")}})})}function o(t){var o=t;typeof t=="string"&&(o=e(t)),n=o.find(".image-normal"),r=o.find(".image-hook"),i=o.find(".image-image"),s(r),console.log("------ header started")}var t,n,r,i;return{init:o}}),define("app/main",["jquery","menu","header"],function(e,t,n){var r=function(){console.log("----- init app"),console.log("----- starting menu"),t.init(),console.log("----- starting header"),n.init("#header")};return{init:r}}),define("app",["app/main"],function(e){return e}),require.config({baseUrl:"assets/scripts",packages:["app","menu"],paths:{jquery:["//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min","./lib/jquery.1.9.1.min.js"]}}),require(["jquery","app"],function(e,t){t.init()}),define("main",function(){});
// ==UserScript==
// @name           Soap2Day Tweaks
// @version        1.2.2
// @description    Soap2Day Tweaks, Soap2Day Tweaks, Soap2Day Tweaks, Soap2Day Tweaks, Soap2Day Tweaks and Soap2Day Tweaks.
// @author         n0rmancodes + lesa
// @include        https://soap2day.to/*
// @include        https://soap2day.se/*
// @include        https://soap2day.ac/*
// @include        https://soap2day.im/*
// @include        https://soap2day.to/movie_*
// @include        https://soap2day.to/episode_*
// @include        https://soap2day.to/sport_*
// @include        https://soap2day.im/movie_*
// @include        https://soap2day.im/episode_*
// @include        https://soap2day.im/sport_*
// @include        https://soap2day.nl/movie_*
// @include        https://soap2day.nl/episode_*
// @include        https://soap2day.nl/sport_*
// @include        https://soap2day.se/movie_*
// @include        https://soap2day.se/episode_*
// @include        https://soap2day.se/sport_*
// @include        https://s2dfree.to/movie_*
// @include        https://s2dfree.to/episode_*
// @include        https://s2dfree.to/sport_*
// @include        https://s2dfree.is/movie_*
// @include        https://s2dfree.is/episode_*
// @include        https://s2dfree.is/sport_*
// @include        https://s2dfree.in/movie_*
// @include        https://s2dfree.in/episode_*
// @include        https://s2dfree.in/sport_*
// @include        https://s2dfree.nl/movie_*
// @include        https://s2dfree.nl/episode_*
// @include        https://s2dfree.nl/sport_*
// @grant          none
// @license        The Unlicense
// @source         https://github.com/n0rmancodes/soap2day-autoplay
// @namespace      github.com
// @namespace      greasyfork.org
// ==/UserScript==
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
/* globals $ */
// @require      http://p.jwpcdn.com/6/12/jwplayer.js

// Autoplay enabler

(function() {
    'use strict';
        if (document.querySelector("video")) {
            document.querySelector("video").play();
            clearInterval(a);
        } else {
            var a = setInterval(function () {
                if (document.querySelector("video")) {
                    document.querySelector("video").play();
                    clearInterval(a);
                }
            }, 2000)
        }
})();

// Auto fullscreen after 10 seconds

var interval;

window.onload = function(){
    interval = window.setInterval(triggerFullScreen, 10000);
};

function triggerFullScreen(){
    jwplayer().setFullscreen(true);
    clearInterval(interval);
}
// Design tweaks

$('.col-lg-4 .panel').remove();
// $('.col-sm-4 .panel').remove();
$('.alert-warning').remove();

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
addGlobalStyle('body { background-color:#141414 !important; color: #e5e5e5 !important; overflow-x: hidden !important; }');
addGlobalStyle('.panel { background-color: #fff0 !important; }');
addGlobalStyle('.panel-info { border-color: #ffffff00 !important; }');
addGlobalStyle('.thumbnail { background-color: #fff0 !important; }');
addGlobalStyle('a { color: #a5a5a5 !important; }');
addGlobalStyle('a.label { color: white !important; }');
addGlobalStyle('.navbar-default { background-color: #101010 !important; border-color: #00000000 !important; width: 102.3% !important; margin-left: -1% !important; margin-top: -1% !important; }');
addGlobalStyle('.form-control { background-color: #10101000 !important; border: 1px solid #272727 !important; }');
addGlobalStyle('.pagination > li > a { background-color: #141414 !important; border: 1px solid #060606 !important; }');
addGlobalStyle('.pagination > .disabled > span { background-color: #141414 !important; border: 1px solid #060606 !important; }');
addGlobalStyle('.btn-info { background-color:transparent !important; }');
addGlobalStyle('.panel-info > .panel-heading { color: #e5e5e5 !important; background-color: transparent !important; border-color: transparent !important; font-size: 22px !important; }');
addGlobalStyle('h3 img { display:none !important; }');
addGlobalStyle('.col-xs-12 { padding: 0px !important; width:100% !important; }');
addGlobalStyle('::-webkit-scrollbar { width: 13px !important ; height: 13px !important;}');
addGlobalStyle('::-webkit-scrollbar-thumb { background: #101010 !important ; border-radius: 3px !important;}');
addGlobalStyle('::-webkit-scrollbar-thumb:hover { background: #101010 !important;}');
addGlobalStyle('::-webkit-scrollbar-track { background: #4f4f4f !important; border-radius: 3px !important; box-shadow: inset 7px 10px 12px #4F4F4F !important;}');
addGlobalStyle('.alert-info { color: #ca8a8a !important; background-color: transparent !important; border-color: transparent !important; }');
addGlobalStyle('.alert-info-ex { color: #ca8a8a !important; background-color: transparent !important; border-color: transparent !important; margin-top: -1.9% !important; margin-bottom: -0.1% !important; }');
addGlobalStyle('img { filter: brightness(30%) !important; }');
addGlobalStyle('.panel-body { padding: 0px !important; color: #a5a5a5 !important; }');
addGlobalStyle('.label.label-info { background-color: #223942 !important; color: #a7a7a7 !important; }');
addGlobalStyle('.myp1 { background-color: #333333 !important; }');
addGlobalStyle('.loginbar a { color: white !important; }');
addGlobalStyle('.form-group img { filter: brightness(100%) !important; }');
addGlobalStyle('td { background-color: #333333 !important; }');

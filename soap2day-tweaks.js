// ==UserScript==
// @name           Soap2Day Autoplay
// @version        1.1
// @description    Autoplay soap2play shows and movies when the page loads. Written in Tampermonkey.
// @author         n0rmancodes
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

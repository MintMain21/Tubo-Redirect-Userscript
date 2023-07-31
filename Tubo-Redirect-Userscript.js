// ==UserScript==
// @name         Tubo Redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirect YouTube to Tubo
// @author       MintMain21
// @match        *://*.youtube.com/*
// @match        *://youtu.be/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=migalmoreno.com
// @grant        none
// ==/UserScript==

function getCurrentURL () {
  return window.location.href;
}

// Example
const url = getCurrentURL();

(function() {
    'use strict';

    if (url.includes("v=")) {
        window.location.replace("https://tubo.migalmoreno.com/stream?url=" + url);

    }

    if (url.includes("results?search_query=")) {
        window.location.replace("https://tubo.migalmoreno.com/search?q" + window.location.href.substring(window.location.href.indexOf('='),window.location.href.length) + "&serviceId=0");
    }

    if(url.includes("/channel/")) {
        window.location.replace("https://tubo.migalmoreno.com/channel?url=" + url);
    }


})();


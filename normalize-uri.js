(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.normalizeURI = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Normalize `uri`. This only works when both `encodeURI`
 * and `decodeURI` are available, and when
 * decoding/encoding fails, just returns `uri`.
 *
 * @example
 *   normalizeURI('foo bar'); // 'foo%20bar'
 *   normalizeURI('foo%20bar'); // 'foo%20bar'
 *
 * @param {string} uri - Value with and/or without
 *   encoded, entities.
 * @return {string} - Encoded URI (when encoding succeeds,
 * or `uri`).
 */
function normalizeURI(uri) {
    try {
        uri = encodeURI(decodeURI(uri));
    } catch (exception) { /* empty */ }

    return uri;
}

/*
 * Expose.
 */

module.exports = normalizeURI;

},{}]},{},[1])(1)
});
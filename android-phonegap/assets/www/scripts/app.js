﻿
// these lines for JSLint
"use strict";
var $, alert, Camera, navigator, window;

var remoteAppBase = "http://192.168.0.4:8080/fm-website/";
//var remoteAppBase = "http://alpha.fridgemountain.com/";


// create our own namespace
var RocknCoder = RocknCoder || {};
RocknCoder.Pages = RocknCoder.Pages || {};
RocknCoder.Container = {width: 320, height: 300};

// dispatch jQuery Mobile Events
RocknCoder.Pages.Kernel = function (event) {
	var that = this,
		eventType = event.type,
		pageName = $(this).attr("data-rockncoder-jspage");
	if (RocknCoder && RocknCoder.Pages && pageName && RocknCoder.Pages[pageName] && RocknCoder.Pages[pageName][eventType]) {
		RocknCoder.Pages[pageName][eventType].call(that);
	}
};

//
RocknCoder.Pages.Events = (function () {
	$("div[data-rockncoder-jspage]").on(
		'pagebeforecreate pagecreate pagebeforeload pagebeforeshow pageshow pagebeforechange pagechange pagebeforehide pagehide pageinit',
		RocknCoder.Pages.Kernel
	);
}());

// determine the size of the jQuery Mobile content area for dynamic sizing
RocknCoder.Dimensions = (function () {
	var width, height, headerHeight, footerHeight, contentHeight,
		getContentDimensions = function () {
			return {
				width: width,
				height: contentHeight
			};
		},
		init = function () {
			width = $(window).width();
			height = $(window).height();
			headerHeight = $("header", $.mobile.activePage).height();
			footerHeight = $("footer", $.mobile.activePage).height();
			contentHeight = height - headerHeight - footerHeight;
		};
	return {
		init: init,
		getContent: getContentDimensions
	};
}());

RocknCoder.Pages.page1 = (function () {
	var dims,
		// cache the selectors to some DOM elements
		$snapPicture = $("#snapPicture"),
		$selectPicture = $("#selectPicture"),
//		$picFrame = $("#picFrame"),

		
		// pageshow event handler
		pageshow = function () {
			RocknCoder.Dimensions.init();
			dims = RocknCoder.Dimensions.getContent();
            $("#picFrame").css({
	            width: dims.width,
	            height: dims.height
            });
			RocknCoder.Container = {
				width: dims.width,
				height: dims.height
			};

			$snapPicture.unbind('tap').tap(snapPictureHandler);
			$selectPicture.unbind('tap').tap(selectPictureHandler);
			$("#submit").click(formUpload);

		},
		pagehide = function () {
			$snapPicture.unbind('tap');
			$selectPicture.unbind('tap');
		};
	return {
		pageshow: pageshow,
		pagehide: pagehide
	};
}());
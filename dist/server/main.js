(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@agm/core/directives/map.js":
/*!**************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.js ***!
  \**************************************************/
/*! exports provided: AgmMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");











/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = /** @class */ (function () {
    function AgmMap(_elem, _mapsWrapper, _fitBoundsService) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._fitBoundsService = _fitBoundsService;
        /**
           * The longitude that defines the center of the map.
           */
        this.longitude = 0;
        /**
           * The latitude that defines the center of the map.
           */
        this.latitude = 0;
        /**
           * The zoom level of the map. The default zoom level is 8.
           */
        this.zoom = 8;
        /**
           * Enables/disables if map is draggable.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
           * Enables/disables zoom and center on double click. Enabled by default.
           */
        this.disableDoubleClickZoom = false;
        /**
           * Enables/disables all default UI of the Google map. Please note: When the map is created, this
           * value cannot get updated.
           */
        this.disableDefaultUI = false;
        /**
           * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
           */
        this.scrollwheel = true;
        /**
           * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
           * enabled by default.
           */
        this.keyboardShortcuts = true;
        /**
           * The enabled/disabled state of the Zoom control.
           */
        this.zoomControl = true;
        /**
           * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
           * modes, these styles will only apply to labels and geometry.
           */
        this.styles = [];
        /**
           * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
           * used to
           * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
           */
        this.usePanning = false;
        /**
           * The initial enabled/disabled state of the Street View Pegman control.
           * This control is part of the default UI, and should be set to false when displaying a map type
           * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
           */
        this.streetViewControl = true;
        /**
           * Sets the viewport to contain the given bounds.
           * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
           */
        this.fitBounds = false;
        /**
           * The initial enabled/disabled state of the Scale control. This is disabled by default.
           */
        this.scaleControl = false;
        /**
           * The initial enabled/disabled state of the Map type control.
           */
        this.mapTypeControl = false;
        /**
           * The initial enabled/disabled state of the Pan control.
           */
        this.panControl = false;
        /**
           * The initial enabled/disabled state of the Rotate control.
           */
        this.rotateControl = false;
        /**
           * The initial enabled/disabled state of the Fullscreen control.
           */
        this.fullscreenControl = false;
        /**
           * The map mapTypeId. Defaults to 'roadmap'.
           */
        this.mapTypeId = 'roadmap';
        /**
           * When false, map icons are not clickable. A map icon represents a point of interest,
           * also known as a POI. By default map icons are clickable.
           */
        this.clickableIcons = true;
        /**
           * This setting controls how gestures on the map are handled.
           * Allowed values:
           * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
           * - 'greedy'      (All touch gestures pan or zoom the map.)
           * - 'none'        (The map cannot be panned or zoomed by user gestures.)
           * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
           */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
           * This event emitter gets emitted when the user clicks on the map (but not when they click on a
           * marker or infoWindow).
           */
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user right-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user double-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter is fired when the map center changes.
           */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the viewport bounds have changed.
           */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the mapTypeId property changes.
           */
        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the map becomes idle after panning or zooming.
           */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the zoom level has changed.
           */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the google map is fully initialized.
           * You get the google.maps.Map instance as a result of this EventEmitter.
           */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnInit = /** @internal */
    function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleIdleEvent();
    };
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnDestroy = /** @internal */
    function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    };
    /* @internal */
    /* @internal */
    AgmMap.prototype.ngOnChanges = /* @internal */
    function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    AgmMap.prototype.triggerResize = /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                this._updateBounds(this.fitBounds);
        }
    };
    AgmMap.prototype._subscribeToFitBoundsUpdates = function () {
        var _this = this;
        this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(function (b) { return _this._updateBounds(b); });
    };
    AgmMap.prototype._updateBounds = function (bounds) {
        if (this._isLatLngBoundsLiteral(bounds) && google && google.maps) {
            var newBounds = google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds);
            return;
        }
        this._mapsWrapper.fitBounds(bounds);
    };
    AgmMap.prototype._isLatLngBoundsLiteral = function (bounds) {
        return bounds != null && bounds.extend === undefined;
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapTypeIdChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    /**
       * Map option attributes that can change over time
       */
    AgmMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
        'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
        'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
        'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
        'mapTypeId', 'clickableIcons', 'gestureHandling'
    ];
    AgmMap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-map',
                    providers: [
                        _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__["MarkerManager"], _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__["InfoWindowManager"], _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__["CircleManager"], _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__["RectangleManager"],
                        _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__["PolylineManager"], _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__["PolygonManager"], _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__["KmlLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"],
                        _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"]
                    ],
                    host: {
                        // todo: deprecated - we will remove it with the next version
                        '[class.sebm-google-map-container]': 'true'
                    },
                    styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                    template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmMap.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], },
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"], },
    ]; };
    AgmMap.propDecorators = {
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mapDraggable',] },],
        "disableDoubleClickZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableDefaultUI": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollwheel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "backgroundColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggableCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggingCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "keyboardShortcuts": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styles": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "usePanning": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fitBounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickableIcons": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "gestureHandling": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "centerChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "boundsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapTypeIdChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "idle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "zoomChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapReady": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmMap;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/map.ngfactory.js":
/*!************************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.ngfactory.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
var i2 = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
var i3 = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
var i4 = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
var i5 = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
var i6 = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
var i7 = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
var i8 = __webpack_require__(/*! ../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
var i9 = __webpack_require__(/*! ../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
var i10 = __webpack_require__(/*! ../services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
var i11 = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
var i12 = __webpack_require__(/*! ./map */ "./node_modules/@agm/core/directives/map.js");
var styles_AgmMap = [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"];
var RenderType_AgmMap = i0.ɵcrt({ encapsulation: 0, styles: styles_AgmMap, data: {} });
exports.RenderType_AgmMap = RenderType_AgmMap;
function View_AgmMap_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "agm-map-container-inner sebm-google-map-container-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "agm-map-content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
exports.View_AgmMap_0 = View_AgmMap_0;
function View_AgmMap_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 11, "agm-map", [], [[2, "sebm-google-map-container", null]], null, null, View_AgmMap_0, RenderType_AgmMap)), i0.ɵprd(4608, null, i1.MarkerManager, i1.MarkerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i3.InfoWindowManager, i3.InfoWindowManager, [i2.GoogleMapsAPIWrapper, i0.NgZone, i1.MarkerManager]), i0.ɵprd(4608, null, i4.CircleManager, i4.CircleManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i5.RectangleManager, i5.RectangleManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i6.PolylineManager, i6.PolylineManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i7.PolygonManager, i7.PolygonManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i8.KmlLayerManager, i8.KmlLayerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i9.DataLayerManager, i9.DataLayerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(512, null, i2.GoogleMapsAPIWrapper, i2.GoogleMapsAPIWrapper, [i10.MapsAPILoader, i0.NgZone]), i0.ɵprd(512, null, i11.FitBoundsService, i11.FitBoundsService, [i10.MapsAPILoader]), i0.ɵdid(11, 770048, null, 0, i12.AgmMap, [i0.ElementRef, i2.GoogleMapsAPIWrapper, i11.FitBoundsService], null, null)], function (_ck, _v) { _ck(_v, 11, 0); }, function (_ck, _v) { var currVal_0 = true; _ck(_v, 0, 0, currVal_0); }); }
exports.View_AgmMap_Host_0 = View_AgmMap_Host_0;
var AgmMapNgFactory = i0.ɵccf("agm-map", i12.AgmMap, View_AgmMap_Host_0, { longitude: "longitude", latitude: "latitude", zoom: "zoom", minZoom: "minZoom", maxZoom: "maxZoom", draggable: "mapDraggable", disableDoubleClickZoom: "disableDoubleClickZoom", disableDefaultUI: "disableDefaultUI", scrollwheel: "scrollwheel", backgroundColor: "backgroundColor", draggableCursor: "draggableCursor", draggingCursor: "draggingCursor", keyboardShortcuts: "keyboardShortcuts", zoomControl: "zoomControl", zoomControlOptions: "zoomControlOptions", styles: "styles", usePanning: "usePanning", streetViewControl: "streetViewControl", streetViewControlOptions: "streetViewControlOptions", fitBounds: "fitBounds", scaleControl: "scaleControl", scaleControlOptions: "scaleControlOptions", mapTypeControl: "mapTypeControl", mapTypeControlOptions: "mapTypeControlOptions", panControl: "panControl", panControlOptions: "panControlOptions", rotateControl: "rotateControl", rotateControlOptions: "rotateControlOptions", fullscreenControl: "fullscreenControl", fullscreenControlOptions: "fullscreenControlOptions", mapTypeId: "mapTypeId", clickableIcons: "clickableIcons", gestureHandling: "gestureHandling" }, { mapClick: "mapClick", mapRightClick: "mapRightClick", mapDblClick: "mapDblClick", centerChange: "centerChange", boundsChange: "boundsChange", mapTypeIdChange: "mapTypeIdChange", idle: "idle", zoomChange: "zoomChange", mapReady: "mapReady" }, ["*"]);
exports.AgmMapNgFactory = AgmMapNgFactory;


/***/ }),

/***/ "./node_modules/@agm/core/services/fit-bounds.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/services/fit-bounds.js ***!
  \*******************************************************/
/*! exports provided: FitBoundsAccessor, FitBoundsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsService", function() { return FitBoundsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");




/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
var /**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
FitBoundsAccessor = /** @class */ (function () {
    function FitBoundsAccessor() {
    }
    return FitBoundsAccessor;
}());
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */

/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
var FitBoundsService = /** @class */ (function () {
    function FitBoundsService(loader) {
        var _this = this;
        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function () { return _this._includeInBounds$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (time) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, time); }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (includeInBounds) { return _this._generateBounds(includeInBounds); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    FitBoundsService.prototype._generateBounds = function (includeInBounds) {
        var bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(function (b) { return bounds.extend(b); });
        return bounds;
    };
    FitBoundsService.prototype.addToBounds = function (latLng) {
        var id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        var map = this._includeInBounds$.value;
        map.set(id, latLng);
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.removeFromBounds = function (latLng) {
        var map = this._includeInBounds$.value;
        map.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.changeFitBoundsChangeSampleTime = function (timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    };
    FitBoundsService.prototype.getBounds$ = function () {
        return this.bounds$;
    };
    FitBoundsService.prototype._createIdentifier = function (latLng) {
        return latLng.lat + "+" + latLng.lng;
    };
    FitBoundsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FitBoundsService.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], },
    ]; };
    return FitBoundsService;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/google-maps-api-wrapper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/google-maps-api-wrapper.js ***!
  \********************************************************************/
/*! exports provided: GoogleMapsAPIWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = /** @class */ (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);
                _this._mapResolver(map);
                return;
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    /**
       * Creates a google map marker with the map context
       */
    GoogleMapsAPIWrapper.prototype.createMarker = /**
       * Creates a google map marker with the map context
       */
    function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    /**
       * Creates a google.map.Circle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createCircle = /**
       * Creates a google.map.Circle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    /**
       * Creates a google.map.Rectangle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createRectangle = /**
       * Creates a google.map.Rectangle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Rectangle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    /**
       * Creates a new google.map.Data layer for the current map
       */
    GoogleMapsAPIWrapper.prototype.createDataLayer = /**
       * Creates a new google.map.Data layer for the current map
       */
    function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    /**
       * Determines if given coordinates are insite a Polygon path.
       */
    GoogleMapsAPIWrapper.prototype.containsLocation = /**
       * Determines if given coordinates are insite a Polygon path.
       */
    function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
        this._map.then(function (map) {
            google.maps.event.clearInstanceListeners(map);
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
        return this._map.then(function (map) { return map.getMapTypeId(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    GoogleMapsAPIWrapper.prototype.getNativeMap = /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    /**
       * Triggers the given event name on the map instance.
       */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = /**
       * Triggers the given event name on the map instance.
       */
    function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    GoogleMapsAPIWrapper.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return GoogleMapsAPIWrapper;
}());

//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/circle-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/circle-manager.js ***!
  \********************************************************************/
/*! exports provided: CircleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var CircleManager = /** @class */ (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    /**
       * Removes the given circle from the map.
       */
    CircleManager.prototype.removeCircle = /**
       * Removes the given circle from the map.
       */
    function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CircleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return CircleManager;
}());

//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/data-layer-manager.js":
/*!************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/data-layer-manager.js ***!
  \************************************************************************/
/*! exports provided: DataLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = /** @class */ (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    /**
       * Adds a new Data Layer to the map.
       */
    DataLayerManager.prototype.addDataLayer = /**
       * Adds a new Data Layer to the map.
       */
    function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    DataLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    DataLayerManager.prototype.getDataFeatures = /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    DataLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    DataLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return DataLayerManager;
}());

//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/info-window-manager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/info-window-manager.js ***!
  \*************************************************************************/
/*! exports provided: InfoWindowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");




var InfoWindowManager = /** @class */ (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
            });
        });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    InfoWindowManager.prototype.createEventObservable = /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    function (eventName, infoWindow) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    InfoWindowManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    InfoWindowManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
    ]; };
    return InfoWindowManager;
}());

//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/kml-layer-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/kml-layer-manager.js ***!
  \***********************************************************************/
/*! exports provided: KmlLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = /** @class */ (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    /**
       * Adds a new KML Layer to the map.
       */
    KmlLayerManager.prototype.addKmlLayer = /**
       * Adds a new KML Layer to the map.
       */
    function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    KmlLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    KmlLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    KmlLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return KmlLayerManager;
}());

//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/marker-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/marker-manager.js ***!
  \********************************************************************/
/*! exports provided: MarkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var MarkerManager = /** @class */ (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.updateAnimation = function (marker) {
        return this._markers.get(marker).then(function (m) {
            if (typeof marker.animation === 'string') {
                m.setAnimation(google.maps.Animation[marker.animation]);
            }
            else {
                m.setAnimation(marker.animation);
            }
        });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
            animation: (typeof marker.animation === 'string') ? google.maps.Animation[marker.animation] : marker.animation
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MarkerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return MarkerManager;
}());

//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polygon-manager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polygon-manager.js ***!
  \*********************************************************************/
/*! exports provided: PolygonManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolygonManager = /** @class */ (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolygonManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolygonManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolygonManager;
}());

//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polyline-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polyline-manager.js ***!
  \**********************************************************************/
/*! exports provided: PolylineManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolylineManager = /** @class */ (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolylineManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolylineManager;
}());

//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/rectangle-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/rectangle-manager.js ***!
  \***********************************************************************/
/*! exports provided: RectangleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return RectangleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var RectangleManager = /** @class */ (function () {
    function RectangleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    RectangleManager.prototype.addRectangle = function (rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex
        }));
    };
    /**
     * Removes the given rectangle from the map.
     */
    /**
       * Removes the given rectangle from the map.
       */
    RectangleManager.prototype.removeRectangle = /**
       * Removes the given rectangle from the map.
       */
    function (rectangle) {
        var _this = this;
        return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);
            _this._rectangles.delete(rectangle);
        });
    };
    RectangleManager.prototype.setOptions = function (rectangle, options) {
        return this._rectangles.get(rectangle).then(function (r) { return r.setOptions(options); });
    };
    RectangleManager.prototype.getBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) { return r.getBounds(); });
    };
    RectangleManager.prototype.setBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            });
        });
    };
    RectangleManager.prototype.setEditable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
        });
    };
    RectangleManager.prototype.setDraggable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
        });
    };
    RectangleManager.prototype.setVisible = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
        });
    };
    RectangleManager.prototype.createEventObservable = function (eventName, rectangle) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var listener = null;
            _this._rectangles.get(rectangle).then(function (r) {
                listener = r.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    RectangleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    RectangleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return RectangleManager;
}());

//# sourceMappingURL=rectangle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js ***!
  \****************************************************************************/
/*! exports provided: MapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var MapsAPILoader = /** @class */ (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return MapsAPILoader;
}());

//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
exports.RouterModuleNgFactory = RouterModuleNgFactory;
var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
exports.RenderType_ɵEmptyOutletComponent = RenderType_ɵEmptyOutletComponent;
function View_ɵEmptyOutletComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵEmptyOutletComponent_0 = View_ɵEmptyOutletComponent_0;
function View_ɵEmptyOutletComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), i0.ɵdid(1, 49152, null, 0, i1.ɵEmptyOutletComponent, [], null, null)], null, null); }
exports.View_ɵEmptyOutletComponent_Host_0 = View_ɵEmptyOutletComponent_Host_0;
var ɵEmptyOutletComponentNgFactory = i0.ɵccf("ng-component", i1.ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);
exports.ɵEmptyOutletComponentNgFactory = ɵEmptyOutletComponentNgFactory;


/***/ }),

/***/ "./node_modules/ng-masonry-grid/ng-masonry-grid.css.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng-masonry-grid/ng-masonry-grid.css.ngstyle.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["ng-masonry-grid-item {\t\r\n\tdisplay: inline-block;\r\n}\r\n.grid {\r\n\tmax-width: 100%;\r\n\tlist-style: none;\r\n\tmargin: 30px auto;\r\n\tpadding: 0;\r\n}\r\n.grid ng-masonry-grid-item {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\twidth: 300px;\r\n}\r\n.grid ng-masonry-grid-item.shown,\r\n.no-js .grid ng-masonry-grid-item,\r\n.no-cssanimations .grid ng-masonry-grid-item {\r\n\topacity: 1;\r\n}\r\n.grid ng-masonry-grid-item a,\r\n.grid ng-masonry-grid-item img {\r\n\toutline: none;\r\n\tborder: none;\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n}\r\n\r\n.grid.effect-1 ng-masonry-grid-item.animate {\r\n\t-webkit-transform: translateY(200px);\r\n\ttransform: translateY(200px);\r\n\t-webkit-animation: moveUp 0.65s ease forwards;\r\n\tanimation: moveUp 0.65s ease forwards;\r\n}\r\n@-webkit-keyframes moveUp {\r\n\t0% { }\r\n\t100% { -webkit-transform: translateY(0); opacity: 1; }\r\n}\r\n@keyframes moveUp {\r\n\t0% { }\r\n\t100% { -webkit-transform: translateY(0); transform: translateY(0); opacity: 1; }\r\n}\r\n\r\n.grid.effect-2 ng-masonry-grid-item.animate {\t\r\n\t-webkit-animation: fadeIn 0.8s ease forwards;\r\n\tanimation: fadeIn 0.8s ease forwards;\r\n}\r\n@-webkit-keyframes fadeIn {\r\n\t0% { opacity: 0; }\r\n\t100% { opacity: 1; }\r\n}\r\n@keyframes fadeIn {\r\n\t0% { opacity: 0; }\r\n\t100% { opacity: 1; }\r\n}\r\n\r\n.grid.effect-3 ng-masonry-grid-item.animate {\r\n\t-webkit-transform: scale(0.6);\r\n\ttransform: scale(0.6);\r\n\t-webkit-animation: scaleUp 0.65s ease-in-out forwards;\r\n\tanimation: scaleUp 0.65s ease-in-out forwards;\r\n}\r\n@-webkit-keyframes scaleUp {\r\n\t0% { }\r\n\t100% { -webkit-transform: scale(1); opacity: 1; }\r\n}\r\n@keyframes scaleUp {\r\n\t0% { }\r\n\t100% { -webkit-transform: scale(1); transform: scale(1); opacity: 1; }\r\n}\r\n\r\n.grid.effect-4 {\r\n\t-webkit-perspective: 1300px;\r\n\tperspective: 1300px;\r\n}\r\n.grid.effect-4 ng-masonry-grid-item.animate {\r\n\t-webkit-transform-style: preserve-3d;\r\n\ttransform-style: preserve-3d;\r\n\t-webkit-transform: translateZ(400px) translateY(300px) rotateX(-90deg);\r\n\ttransform: translateZ(400px) translateY(300px) rotateX(-90deg);\r\n\t-webkit-animation: fallPerspective .8s ease-in-out forwards;\r\n\tanimation: fallPerspective .8s ease-in-out forwards;\r\n}\r\n@-webkit-keyframes fallPerspective {\r\n\t0% { }\r\n\t100% { -webkit-transform: translateZ(0px) translateY(0px) rotateX(0deg); opacity: 1; }\r\n}\r\n@keyframes fallPerspective {\r\n\t0% { }\r\n\t100% { -webkit-transform: translateZ(0px) translateY(0px) rotateX(0deg); transform: translateZ(0px) translateY(0px) rotateX(0deg); opacity: 1; }\r\n}\r\n\r\n.grid.effect-5 {\r\n\t-webkit-perspective: 1300px;\r\n\tperspective: 1300px;\r\n}\r\n.grid.effect-5 ng-masonry-grid-item.animate {\r\n\t-webkit-transform-style: preserve-3d;\r\n\ttransform-style: preserve-3d;\r\n\t-webkit-transform-origin: 50% 50% -300px;\r\n\ttransform-origin: 50% 50% -300px;\r\n\t-webkit-transform: rotateX(-180deg);\r\n\ttransform: rotateX(-180deg);\r\n\t-webkit-animation: fly .8s ease-in-out forwards;\r\n\tanimation: fly .8s ease-in-out forwards;\r\n}\r\n@-webkit-keyframes fly {\r\n\t0% { }\r\n\t100% { -webkit-transform: rotateX(0deg); opacity: 1; }\r\n}\r\n@keyframes fly {\r\n\t0% { }\r\n\t100% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); opacity: 1; }\r\n}\r\n\r\n.grid.effect-6 {\r\n\t-webkit-perspective: 1300px;\r\n\tperspective: 1300px;\r\n}\r\n.grid.effect-6 ng-masonry-grid-item.animate {\r\n\t-webkit-transform-style: preserve-3d;\r\n\ttransform-style: preserve-3d;\r\n\t-webkit-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n\t-webkit-transform: rotateX(-80deg);\r\n\ttransform: rotateX(-80deg);\r\n\t-webkit-animation: flip .8s ease-in-out forwards;\r\n\tanimation: flip .8s ease-in-out forwards;\r\n}\r\n@-webkit-keyframes flip {\r\n\t0% { }\r\n\t100% { -webkit-transform: rotateX(0deg); opacity: 1; }\r\n}\r\n@keyframes flip {\r\n\t0% { }\r\n\t100% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); opacity: 1; }\r\n}\r\n\r\n.grid.effect-7 {\r\n\t-webkit-perspective: 1300px;\r\n\tperspective: 1300px;\r\n}\r\n.grid.effect-7 ng-masonry-grid-item.animate {\r\n\t-webkit-transform-style: preserve-3d;\r\n\ttransform-style: preserve-3d;\r\n\t-webkit-transform: rotateY(-180deg);\r\n\ttransform: rotateY(-180deg);\r\n\t-webkit-animation: helix .8s ease-in-out forwards;\r\n\tanimation: helix .8s ease-in-out forwards;\r\n}\r\n@-webkit-keyframes helix {\r\n\t0% { }\r\n\t100% { -webkit-transform: rotateY(0deg); opacity: 1; }\r\n}\r\n@keyframes helix {\r\n\t0% { }\r\n\t100% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); opacity: 1; }\r\n}\r\n\r\n.grid.effect-8 {\r\n\t-webkit-perspective: 1300px;\r\n\tperspective: 1300px;\r\n}\r\n.grid.effect-8 ng-masonry-grid-item.animate {\r\n\t-webkit-transform-style: preserve-3d;\r\n\ttransform-style: preserve-3d;\r\n\t-webkit-transform: scale(0.4);\r\n\ttransform: scale(0.4);\r\n\t-webkit-animation: popUp .8s ease-in forwards;\r\n\tanimation: popUp .8s ease-in forwards;\r\n}\r\n@-webkit-keyframes popUp {\r\n\t0% { }\r\n\t70% { -webkit-transform: scale(1.1); opacity: .8; -webkit-animation-timing-function: ease-out; }\r\n\t100% { -webkit-transform: scale(1); opacity: 1; }\r\n}\r\n@keyframes popUp {\r\n\t0% { }\r\n\t70% { -webkit-transform: scale(1.1); transform: scale(1.1); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }\r\n\t100% { -webkit-transform: scale(1); transform: scale(1); opacity: 1; }\r\n}\r\n@media screen and (max-width: 900px) {\r\n\t.grid ng-masonry-grid-item {\r\n\t\twidth: 48%;\r\n\t}\r\n}\r\n@media screen and (max-width: 400px) {\r\n\t.grid ng-masonry-grid-item {\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n"];
exports.styles = styles;


/***/ }),

/***/ "./node_modules/ng-masonry-grid/ng-masonry-grid.css.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ng-masonry-grid/ng-masonry-grid.css.shim.ngstyle.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["ng-masonry-grid-item[_ngcontent-%COMP%] {\t\r\n\tdisplay: inline-block;\r\n}\r\n.grid[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n\tlist-style: none;\r\n\tmargin: 30px auto;\r\n\tpadding: 0;\r\n}\r\n.grid[_ngcontent-%COMP%]   ng-masonry-grid-item[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\twidth: 300px;\r\n}\r\n.grid[_ngcontent-%COMP%]   ng-masonry-grid-item.shown[_ngcontent-%COMP%], .no-js[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   ng-masonry-grid-item[_ngcontent-%COMP%], .no-cssanimations[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   ng-masonry-grid-item[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n}\r\n.grid[_ngcontent-%COMP%]   ng-masonry-grid-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   ng-masonry-grid-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\toutline: none;\r\n\tborder: none;\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n}\r\n\r\n.grid.effect-1[_ngcontent-%COMP%]   ng-masonry-grid-item.animate[_ngcontent-%COMP%] {\r\n\t-webkit-transform: translateY(200px);\r\n\ttransform: translateY(200px);\r\n\t-webkit-animation: moveUp 0.65s ease forwards;\r\n\tanimation: moveUp 0.65s ease forwards;\r\n}\r\n@-webkit-keyframes moveUp {\r\n\t0% { }\r\n\t100% { -webkit-transform: translateY(0); opacity: 1; }\r\n}\r\n@keyframes moveUp {\r\n\t0% { }\r\n\t100% { -webkit-transform: translateY(0); transform: translateY(0); opacity: 1; }\r\n}\r\n\r\n.grid.effect-2[_ngcontent-%COMP%]   ng-masonry-grid-item.animate[_ngcontent-%COMP%] {\t\r\n\t-webkit-animation: fadeIn 0.8s ease forwards;\r\n\tanimation: fadeIn 0.8s ease forwards;\r\n}\r\n@-webkit-keyframes fadeIn {\r\n\t0% { opacity: 0; }\r\n\t100% { opacity: 1; }\r\n}\r\n@keyframes fadeIn {\r\n\t0% { opacity: 0; }\r\n\t100% { opacity: 1; }\r\n}\r\n\r\n.grid.effect-3[_ngcontent-%COMP%]   ng-masonry-grid-item.animate[_ngcontent-%COMP%] {\r\n\t-webkit-transform: scale(0.6);\r\n\ttransform: scale(0.6);\r\n\t-webkit-animation: scaleUp 0.65s ease-in-out forwards;\r\n\tanimation: scaleUp 0.65s ease-in-out forwards;\r\n}\r\n@-webkit-keyframes scaleUp {\r\n\t0% { }\r\n\t100% { -webkit-transform: scale(1); opacity: 1; }\r\n}\r\n@keyframes scaleUp {\r\n\t0% { }\r\n\t100% { -webkit-transform: scale(1); transform: scale(1); opacity: 1; }\r\n}\r\n\r\n.grid.effect-4[_ngcontent-%COMP%] {\r\n\t-webkit-perspective: 1300px;\r\n\tperspective: 1300px;\r\n}\r\n.grid.effect-4[_ngcontent-%COMP%]   ng-masonry-grid-item.animate[_ngcontent-%COMP%] {\r\n\t-webkit-transform-style: preserve-3d;\r\n\ttransform-style: preserve-3d;\r\n\t-webkit-transform: translateZ(400px) translateY(300px) rotateX(-90deg);\r\n\ttransform: translateZ(400px) translateY(300px) rotateX(-90deg);\r\n\t-webkit-animation: fallPerspective .8s ease-in-out forwards;\r\n\tanimation: fallPerspective .8s ease-in-out forwards;\r\n}\r\n@-webkit-keyframes fallPerspective {\r\n\t0% { }\r\n\t100% { -webkit-transform: translateZ(0px) translateY(0px) rotateX(0deg); opacity: 1; }\r\n}\r\n@keyframes fallPerspective {\r\n\t0% { }\r\n\t100% { -webkit-transform: translateZ(0px) translateY(0px) rotateX(0deg); transform: translateZ(0px) translateY(0px) rotateX(0deg); opacity: 1; }\r\n}\r\n\r\n.grid.effect-5[_ngcontent-%COMP%] {\r\n\t-webkit-perspective: 1300px;\r\n\tperspective: 1300px;\r\n}\r\n.grid.effect-5[_ngcontent-%COMP%]   ng-masonry-grid-item.animate[_ngcontent-%COMP%] {\r\n\t-webkit-transform-style: preserve-3d;\r\n\ttransform-style: preserve-3d;\r\n\t-webkit-transform-origin: 50% 50% -300px;\r\n\ttransform-origin: 50% 50% -300px;\r\n\t-webkit-transform: rotateX(-180deg);\r\n\ttransform: rotateX(-180deg);\r\n\t-webkit-animation: fly .8s ease-in-out forwards;\r\n\tanimation: fly .8s ease-in-out forwards;\r\n}\r\n@-webkit-keyframes fly {\r\n\t0% { }\r\n\t100% { -webkit-transform: rotateX(0deg); opacity: 1; }\r\n}\r\n@keyframes fly {\r\n\t0% { }\r\n\t100% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); opacity: 1; }\r\n}\r\n\r\n.grid.effect-6[_ngcontent-%COMP%] {\r\n\t-webkit-perspective: 1300px;\r\n\tperspective: 1300px;\r\n}\r\n.grid.effect-6[_ngcontent-%COMP%]   ng-masonry-grid-item.animate[_ngcontent-%COMP%] {\r\n\t-webkit-transform-style: preserve-3d;\r\n\ttransform-style: preserve-3d;\r\n\t-webkit-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n\t-webkit-transform: rotateX(-80deg);\r\n\ttransform: rotateX(-80deg);\r\n\t-webkit-animation: flip .8s ease-in-out forwards;\r\n\tanimation: flip .8s ease-in-out forwards;\r\n}\r\n@-webkit-keyframes flip {\r\n\t0% { }\r\n\t100% { -webkit-transform: rotateX(0deg); opacity: 1; }\r\n}\r\n@keyframes flip {\r\n\t0% { }\r\n\t100% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); opacity: 1; }\r\n}\r\n\r\n.grid.effect-7[_ngcontent-%COMP%] {\r\n\t-webkit-perspective: 1300px;\r\n\tperspective: 1300px;\r\n}\r\n.grid.effect-7[_ngcontent-%COMP%]   ng-masonry-grid-item.animate[_ngcontent-%COMP%] {\r\n\t-webkit-transform-style: preserve-3d;\r\n\ttransform-style: preserve-3d;\r\n\t-webkit-transform: rotateY(-180deg);\r\n\ttransform: rotateY(-180deg);\r\n\t-webkit-animation: helix .8s ease-in-out forwards;\r\n\tanimation: helix .8s ease-in-out forwards;\r\n}\r\n@-webkit-keyframes helix {\r\n\t0% { }\r\n\t100% { -webkit-transform: rotateY(0deg); opacity: 1; }\r\n}\r\n@keyframes helix {\r\n\t0% { }\r\n\t100% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); opacity: 1; }\r\n}\r\n\r\n.grid.effect-8[_ngcontent-%COMP%] {\r\n\t-webkit-perspective: 1300px;\r\n\tperspective: 1300px;\r\n}\r\n.grid.effect-8[_ngcontent-%COMP%]   ng-masonry-grid-item.animate[_ngcontent-%COMP%] {\r\n\t-webkit-transform-style: preserve-3d;\r\n\ttransform-style: preserve-3d;\r\n\t-webkit-transform: scale(0.4);\r\n\ttransform: scale(0.4);\r\n\t-webkit-animation: popUp .8s ease-in forwards;\r\n\tanimation: popUp .8s ease-in forwards;\r\n}\r\n@-webkit-keyframes popUp {\r\n\t0% { }\r\n\t70% { -webkit-transform: scale(1.1); opacity: .8; -webkit-animation-timing-function: ease-out; }\r\n\t100% { -webkit-transform: scale(1); opacity: 1; }\r\n}\r\n@keyframes popUp {\r\n\t0% { }\r\n\t70% { -webkit-transform: scale(1.1); transform: scale(1.1); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }\r\n\t100% { -webkit-transform: scale(1); transform: scale(1); opacity: 1; }\r\n}\r\n@media screen and (max-width: 900px) {\r\n\t.grid[_ngcontent-%COMP%]   ng-masonry-grid-item[_ngcontent-%COMP%] {\r\n\t\twidth: 48%;\r\n\t}\r\n}\r\n@media screen and (max-width: 400px) {\r\n\t.grid[_ngcontent-%COMP%]   ng-masonry-grid-item[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n}"];
exports.styles = styles;


/***/ }),

/***/ "./node_modules/ng-masonry-grid/ng-masonry-grid.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng-masonry-grid/ng-masonry-grid.ngfactory.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var NgMasonryGridModuleNgFactory = i0.ɵcmf(i1.NgMasonryGridModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i1.NgMasonryGridService, i1.NgMasonryGridService, [i0.PLATFORM_ID]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.NgMasonryGridModule, i1.NgMasonryGridModule, [])]); });
exports.NgMasonryGridModuleNgFactory = NgMasonryGridModuleNgFactory;
var styles_NgMasonryGridComponent = ["[_nghost-%COMP%] {\n\t\t\tdisplay: block;\n\t\t}"];
var RenderType_NgMasonryGridComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_NgMasonryGridComponent, data: {} });
exports.RenderType_NgMasonryGridComponent = RenderType_NgMasonryGridComponent;
function View_NgMasonryGridComponent_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
exports.View_NgMasonryGridComponent_0 = View_NgMasonryGridComponent_0;
function View_NgMasonryGridComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["ng-masonry-grid", ""]], null, null, null, View_NgMasonryGridComponent_0, RenderType_NgMasonryGridComponent)), i0.ɵdid(1, 1294336, null, 0, i1.NgMasonryGridComponent, [i0.PLATFORM_ID, i0.ElementRef, i1.NgMasonryGridService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_NgMasonryGridComponent_Host_0 = View_NgMasonryGridComponent_Host_0;
var NgMasonryGridComponentNgFactory = i0.ɵccf("[ng-masonry-grid], ng-masonry-grid", i1.NgMasonryGridComponent, View_NgMasonryGridComponent_Host_0, { masonryOptions: "masonryOptions", useAnimation: "useAnimation", scrollAnimationOptions: "scrollAnimationOptions", useImagesLoaded: "useImagesLoaded" }, { layoutComplete: "layoutComplete", removeComplete: "removeComplete", onNgMasonryInit: "onNgMasonryInit" }, ["*"]);
exports.NgMasonryGridComponentNgFactory = NgMasonryGridComponentNgFactory;


/***/ }),

/***/ "./src/app/about/about.component.css.shim.ngstyle.js":
/*!***********************************************************!*\
  !*** ./src/app/about/about.component.css.shim.ngstyle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["body[_ngcontent-%COMP%] {\n    width: auto;\n    height: auto;\n  }\n  \n  *[_ngcontent-%COMP%]{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  \n  .instagram[_ngcontent-%COMP%]{\n    border:1px solid black;\n  }\n  \n  .instagram[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    border:1px solid red;\n  }\n  \n  .nav[_ngcontent-%COMP%] {\n    background-color: #fff;\n    height: auto;\n    width: 100%;\n    position: fixed;\n    top: 0px;\n    z-index: 1000;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n  \n  .nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      display: inline-block;\n    }\n  \n  .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n      list-style: none;\n    }\n  \n  .brand[_ngcontent-%COMP%] {\n    width: auto;\n    padding: 0.6% 0.5% 0.5% 0.7%;\n  }\n  \n  .brand-img[_ngcontent-%COMP%] {\n    width: 65px;\n    display: inline-block;\n  }\n  \n  .brand-title[_ngcontent-%COMP%] {\n    font-family: 'Roboto',sans-serif;\n    font-size: 1.7em;\n    font-weight: 400;\n    color: #024771;\n    display: inline-block;\n    position: relative;\n    top: -6px;\n    text-shadow:2px 2px 2px;\n  }\n  \n  .button[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: auto;\n    padding: 0px;\n    text-align: right;\n    position: absolute;\n    top: 20%;\n    margin-top: .6%;\n    right: 0.5%;\n  }\n  \n  .button[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n      border: 1px solid #fafafa;\n      padding: 8px 20px 8px 20px;\n      font-family: 'Roboto', sans-serif;\n      font-size: 1em;\n      color: #fafafa;\n      background-color:#024771;\n      border-radius: 5px;\n      font-weight: 300;\n    }\n  \n  .card-content[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%] > b[_ngcontent-%COMP%]{\n    padding-bottom: 3%;\n  }\n  \n  .card[_ngcontent-%COMP%]{\n    position:relative;\n    width:100%;\n    height:400px;\n    margin-top: 7%;\n  }\n  \n  .card-image-holder[_ngcontent-%COMP%]{\n    position:absolute;\n    width:50%;\n    height:300px;\n    display:inline-block;\n    top:5%;\n    left:0;\n  }\n  \n  .card-image-holder[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    width:80%;\n    height:100%;\n    margin-left:10%;\n  }\n  \n  .card-content[_ngcontent-%COMP%]{\n    position:absolute;\n    width:50%;\n    height:100%;\n    display: inline-block;\n    top:30%;\n    right:0;\n    \n  }\n  \n  .card-content[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{\n   width:80%;\n   margin-left:10%;\n }\n  \n  .card-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] > b[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{\n  font-family: 'Times New Roman', Times, serif;\n}\n  \n  .card-content[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n  font-size: 1.2em;\n  font-family: 'Times New Roman', Times, serif;\n}\n  \n  .card2[_ngcontent-%COMP%]{\n  position:relative;\n  width:100%;\n  height:400px;\n  \n}\n  \n  .card2-image[_ngcontent-%COMP%]{\n  position:absolute;\n  width:50%;\n  height:300px;\n  display:inline-block;\n  top:5%;\n  left:0;\n  \n}\n  \n  .card2-image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n  width:80%;\n  height:100%;\n  margin-left:110%;\n}\n  \n  .card2-content[_ngcontent-%COMP%]{\n  position:absolute;\n  width:50%;\n  height:100%;\n  display: inline-block;\n  top:10%;\n  right:0;\n  \n}\n  \n  .card2-content[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{\n width:75%;\n margin-left:-85%;\n \n}\n  \n  .card2-content[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{\n font-size: 2em;\n font-family: 'Times New Roman', Times, serif;\n }\n  \n  \n  \n  .app[_ngcontent-%COMP%]{\n      width: 100px;\n      height: 100px;\n      margin:auto;\n  }\n  \n  .app[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    padding-bottom: 2%;\n  }\n  \n  .app-icon[_ngcontent-%COMP%]{\n      width: 100%;\n      height: 100%;\n      border-radius:10px;\n      margin-top:100px;\n  }\n  \n  .app-mantra1[_ngcontent-%COMP%]{\n      width: 90%;\n      border: 1px solid black;\n      margin: 3% ;\n      height: 100%;\n      padding: 1%;\n      font-family: 'Roboto', sans-serif;\n      font-size: 1.2em;\n      font-weight: 300;\n      color: #101010;\n      text-align: justify;\n      text-align-last: center;\n  }\n  \n  .app-mantra1[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n      display: block;\n      margin: auto;\n      width: 55%;\n      height: 300px;\n      margin-left: 5%;\n  }\n  \n  .app-mantra1[_ngcontent-%COMP%] > b[_ngcontent-%COMP%]{\n    margin-left: 70%;\n    display: block;\n    margin-top: -25%;\n    width: 60%;\n    padding-bottom: 10%;\n    text-align: justify;\n    text-align-last: left;\n  }\n  \n  .app-mantra1[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n    margin-left: 70%;\n    display: block;\n    width: 60%;\n    text-align: justify;\n    text-align-last: left;\n  }\n  \n  .app-mantra2[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{\n    width: 34%;\n    margin-left: 7%;\n    margin-top: 13%;\n    height: auto;\n    padding: 1%;\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.2em;\n    font-weight: 300;\n    color: #101010;\n    text-align: justify;\n    text-align-last: center;\n}\n  \n  .app-mantra2[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n  display: block;\n  margin: auto;\n  width: 40%;\n  height: 300px;\n  margin-left: 45%;\n  margin-top: -15%;\n}\n  \n  .app-desc[_ngcontent-%COMP%]{\n      width:65%;\n      height:auto;\n      padding:1%;\n      padding-top: 2%;\n      margin:6%;\n      background-color: none;\n      font-family:'Times New Roman', Times;\n      height:450px;\n      line-height:0.2em;\n   }\n  \n  .app-desc[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:first-child{\n      font-family: 'Roboto',sans-serif;\n      font-size: 2em;\n      color: orange;\n      line-height: 2.2em;\n      text-align: left;\n      \n      margin: auto;\n      padding:0;\n  }\n  \n  .app-desc[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:last-child{\n      font-family: 'Roboto',sans-serif;\n      color: #024771;\n      font-size: 1.7em;\n      font-weight: 500;\n      line-height: 1.7em;\n  }\n  \n  \n  \n  .banner[_ngcontent-%COMP%] {\n      height: 150px;\n      width:100%;\n      background-color: rgb(219, 235, 241);\n      overflow-y: hidden;\n    }\n  \n  .banner[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{\n      width:25%;\n      color: black;\n      display: inline-block;\n      margin-top: -5%;\n      padding: 100px;\n    }\n  \n  .banner2[_ngcontent-%COMP%] {\n      height: 150px;\n      width:100%;\n      background-color: rgb(219, 235, 241);\n    }\n  \n  .banner2[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:first-child{\n      width:90%;\n      color: black;\n      display: inline-block;\n      margin-left: 6%;\n      margin-top: 1%;\n      font-weight: bolder;\n      font-size: 1.2em;\n      font-family: 'Times New Roman', Times, serif;\n      text-align-last: center;\n    }\n  \n  .banner2[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:last-child{\n      width:100%;\n      color: black;\n      display: inline-block;\n      margin-top: 3%;\n      font-weight: bolder;\n      font-size: 1.2em;\n      font-family: 'Times New Roman', Times, serif;\n      text-align-last: center;\n    }\n  \n  .banner3[_ngcontent-%COMP%] {\n      height: 200px;\n      width:100%;\n      background-color: rgb(219, 235, 241);\n    }\n  \n  .banner3[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n      width:90%;\n      color: black;\n      display: inline-block;\n      margin-left: 4%;\n      margin-top: 1%;\n      font-weight: bolder;\n      font-size: 1.5em;\n      font-family: 'Times New Roman', Times, serif;\n      text-align-last: center;\n    }\n  \n  .banner3[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{\n      margin-left: 45%;\n      margin-top: 3%;\n      background: transparent;\n      border: 1px solid blueviolet;\n      font-weight: bolder;\n      font-size: .9em;\n      cursor: pointer;\n      width: 8%;\n      height: 20%;\n    }\n  \n  .blogFeed[_ngcontent-%COMP%]{\n      z-index: 10;\n      margin: 0px;\n      \n      padding-left: 2%;\n      padding-right: 5%;\n      \n\n  }\n  \n  .feedHeading[_ngcontent-%COMP%]{\n    font-family: 'Roboto',sans-serif;\n    font-size: 1.8em;\n    font-weight: 500;\n    color: #101010;\n    margin:3% 0% 3% 0%;\n    text-align: center;\n}\n  \n  .blog[_ngcontent-%COMP%]{\n      width: 90%;\n      height: 500px;\n      margin: 1%;\n      margin-top: 0%;\n      margin-left: 6%;\n      overflow: hidden;\n      overflow-x: scroll;\n      white-space: nowrap !important;\n      \n      \n  }\n  \n  .blog[_ngcontent-%COMP%]::-webkit-scrollbar{\n    display: none;\n  }\n  \n  .blog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n      display: inline-block;\n      width: 20%;\n      margin-left: 1%;\n      margin-right: 5%;\n      margin-top: 5%;\n      height: 400px; \n      \n      border-radius:2%; \n  }\n  \n  .blog[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n      height: 7%;\n      width: 5.5%;\n      font-weight: bolder;\n      padding-right:3%;  \n  }\n  \n  .feeddata[_ngcontent-%COMP%]{\n    border:2px solid #fff;\n    -webkit-filter: brightness(100%);\n            filter: brightness(100%);\n    overflow: hidden;\n    margin: 10px;\n    height: 100%;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n    box-shadow: 0 0 11px rgba(230, 62, 62, 0.2); \n  }\n  \n  .feeddata[_ngcontent-%COMP%]:hover {\n    -webkit-transform: scale(2); \n    transform: scale(1.1); \n    box-shadow: 0 0 11px rgba(33,33,33,.2); \n  }\n  \n  .blog[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{\n      position: absolute;\n      top:47%;\n      left: 3%;\n      cursor: pointer; \n  }\n  \n  .blog[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{\n      position: absolute;\n      top:47%;\n      right: -2%;\n      cursor: pointer;    \n  }\n  \n  \n  \n  .instafeed[_ngcontent-%COMP%]{\n    flex-wrap: nowrap;\n    z-index: 10;\n    margin: 0px;\n    padding-bottom: 0%;\n    padding-top: 1%;\n    padding-left: 4%;\n    \n    padding-right: 5%;\n  }\n  \n  .instafeedHeading[_ngcontent-%COMP%]{\n    font-family: 'Roboto',sans-serif;\n    font-size: 1.8em;\n    font-weight: 500;\n    color: #101010;\n    margin:3% 0% 3% 0%;\n    text-align: center;\n}\n  \n  .socialFeed[_ngcontent-%COMP%]{\n      width: 90%;\n      max-height: 20%;\n      padding:3%;\n      margin: 0%;\n      margin-left: 5%;\n      overflow: hidden;\n      overflow-x: scroll;\n      white-space: nowrap !important;  \n      \n}\n  \n  .socialFeed[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    width: 2%;\n}\n  \n  .socialFeed[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n      display: inline-block;\n      width: 22%;\n      height: 400px; \n      border-radius: 2%;\n      margin-left: -1%;\n      margin-right: 5.3%;\n}\n  \n  .socialFeed[_ngcontent-%COMP%]::-webkit-scrollbar{\n  display: none;\n}\n  \n  .instaData[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    position: relative;\n    height: 45%;\n    width: 100%;\n    padding: 2%;\n    border-radius: 5%;\n  }\n  \n  .instaData[_ngcontent-%COMP%]{\n    border:4px solid #fff;\n    overflow: hidden;\n    margin: 25px;   \n    display: inline-block;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n    -webkit-filter: brightness(100%);\n            filter: brightness(100%);\n    box-shadow: 0 0 11px rgba(230, 62, 62, 0.2); \n  }\n  \n  .instaData[_ngcontent-%COMP%]:hover {\n    -webkit-transform: scale(2); \n    transform: scale(1.1); \n    box-shadow: 0 0 11px rgba(33,33,33,.2); \n  }\n  \n  .socialFeed[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{\n      position: absolute;\n      padding-top: 15%;\n      left: 6%;\n      cursor: pointer;\n      scroll-behavior: smooth;\n  }\n  \n  .socialFeed[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{\n      position: absolute;\n      padding-top: 15%;\n      right: 7%;\n      cursor: pointer;\n      scroll-behavior: smooth;\n  }\n  \n  #username[_ngcontent-%COMP%]{\n    color:orange;\n    padding:2%;\n    text-align: right;\n    width:10%;\n    font-size: .9em\n  }\n  \n  #time[_ngcontent-%COMP%]{\n    color:orange;\n    display: block;\n    font-size: .8em;\n    text-align: right;\n    margin-top: -10%;\n    padding:2%;\n    \n  }\n  \n  .textdata[_ngcontent-%COMP%]{\n    width:96%;\n    height: 350px;\n    white-space: normal;  \n    padding: 2%;\n    \n  }\n  \n  .textdata[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n    font-size: .8em;\n    padding-top:8%;\n    height: 340px;\n    text-align: center;\n    display: inline-flex; \n    padding-bottom: 5%;\n    font-weight: bolder;\n  }\n  \n  \n  \n  footer[_ngcontent-%COMP%]{\n      background-color: #024771;\n  }\n  \n  @media screen and (min-width:459px) and (max-width:767px) {\n    .app[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n      margin-top:60px;\n      margin-left: auto;\n      width:80px;\n      height: 80px;\n      \n    }\n    .app-desc[_ngcontent-%COMP%] {\n      width: 300px;\n      height:330px;\n      text-align: left;\n      margin-top: 28%;\n      padding-top: 1.6%;\n      line-height:0.7em;\n      font-weight:180;\n    }\n      .app-desc[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:first-child {\n        font-family: 'Roboto',sans-serif;\n        font-size: 1.6em;\n        line-height: 1em;\n        text-align: left;\n        margin-top:-8%;\n        padding-bottom: 3%;\n        margin-left: auto;\n      }\n      .app-desc[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child {\n        font-family: 'Roboto',sans-serif;\n        font-size: 1.5em;\n        font-weight: 270;\n        line-height: 1.3em;\n        text-align:left;\n      }\n      .banner[_ngcontent-%COMP%] {\n        height:auto;\n        width:100%;\n        background-color: rgb(219, 235, 241);\n        text-align: center;\n        margin-bottom:10%;\n      }\n      .banner[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{\n        width:100%;\n        color: black;\n        display:block;\n        margin-top:0;\n        padding: 20px;\n      }\n      .banner2[_ngcontent-%COMP%]{\n        height:auto;\n        width:100%;\n        background-color: rgb(219, 235, 241);\n        text-align: center;\n        margin-bottom:10%;\n      }\n      .banner[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n        width:100%;\n        color: black;\n        display:block;\n        margin-top:0;\n        padding: 20px;\n      }\n      .blog[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        display: inline-block;\n        width: 100%;\n        height: 400px;\n      }\n    .socialFeed[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n      display: inline-block;\n      width: 100%;\n      height: 500px;\n      margin: 0px;\n      \n    }\n    .instafeed[_ngcontent-%COMP%]{\n      z-index: 10;\n      margin: 0px;\n      padding-bottom: 25%;\n    }\n    .socialFeed[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{\n      margin-top: 75%;\n      left: 7%;\n  }\n  .socialFeed[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{\n      margin-top: 75%;\n      right: 7%;   \n  }\n  .card[_ngcontent-%COMP%]{\n    position:relative;\n    width:100%;\n    height:500px;\n  }\n  .card-image-holder[_ngcontent-%COMP%]{\n    position:absolute;\n    width:100%;\n    height:300px;\n    display:block;\n    top:0;\n  }\n  .card-image-holder[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    width:100%;\n    height:100%;\n    margin-left:0%;\n  }\n  .card-content[_ngcontent-%COMP%]{\n    position:absolute;\n    top:300px;\n    width:100%;\n    height:200px;\n    display: inline-block;\n  }\n .card-content[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{\n  margin-top:5%;\n  width:100%;\n  margin-left:0;\n }\n\n\n .card2[_ngcontent-%COMP%]{\n  position:relative;\n  width:100%;\n  height:500px;\n}\n.card2-image[_ngcontent-%COMP%]{\n  position:absolute;\n  width:100%;\n  height:300px;\n  display:block;\n  top:0;\n}\n.card2-image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n  width:100%;\n  height:100%;\n  margin-left:0%;\n}\n.card2-content[_ngcontent-%COMP%]{\n  position:absolute;\n  top:300px;\n  width:100%;\n  height:200px;\n  display: inline-block;\n}\n  .card2-content[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{\n  margin-top:5%;\n  width:100%;\n  margin-left:0;\n  }\n  .card2-content[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{\n    font-size: 1.3em;\n    font-family: 'Times New Roman', Times, serif;\n    }\n    .banner3[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n      width:96%;\n      color: black;\n      display: inline-block;\n      margin-left: 6%;\n      margin-top: 1%;\n      font-weight: bolder;\n      font-size: 1.5em;\n      font-family: 'Times New Roman', Times, serif;\n      text-align-last: center;\n    }\n    .banner3[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{\n      margin-left: 35%;\n      margin-top: 3%;\n      background: transparent;\n      border: 1px solid blueviolet;\n      font-weight: bolder;\n      font-size: .9em;\n      cursor: pointer;\n      width: 30%;\n      height: 20%;\n    }\n    .banner2[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:first-child{\n      width:90%;\n      color: black;\n      display: inline-block;\n      margin-left: 3%;\n      margin-top: 1%;\n      font-weight: bolder;\n      font-size: 1em;\n      font-family: 'Times New Roman', Times, serif;\n      text-align-last: center;\n    }\n    .banner2[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:last-child{\n      width:100%;\n      color: black;\n      display: inline-block;\n      margin-top: 3%;\n      font-weight: bolder;\n      font-size: 1em;\n      font-family: 'Times New Roman', Times, serif;\n      text-align-last: center;\n    }\n}\n  \n  @media  (min-width:768px) and (max-width: 1220px) {\n  ul[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .brand[_ngcontent-%COMP%] {\n    width: auto;\n    text-align: left;\n    margin-left: 1%;\n    padding-top: 1.5%;\n    padding-bottom: 1.5%;\n  }\n  .brand-title[_ngcontent-%COMP%]{\n    text-shadow:2px 2px 2px;\n    margin-left:-10px;\n    font-size:20px;\n  }\n\n  .button[_ngcontent-%COMP%] {\n    width: auto;\n    height:10px;\n    position: absolute;\n    right: 2%;\n    top: 10%;\n  }\n  .brand-img[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n\n  .button[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n    padding: 2px 8px 2px 8px;\n    margin:auto;\n    margin-top:8%;\n  }\n  \n  .banner[_ngcontent-%COMP%] {\n    height: 150px;\n    width:100%;\n    background-color: rgb(219, 235, 241);\n  }\n  .banner[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{\n    width:35%;\n    color: black;\n    display: inline-block;\n    margin-top: -7%;\n    font-size: 1em;\n    margin-left: -10%;\n  }\n  .instafeed[_ngcontent-%COMP%]{\n    width: 80%;\n    z-index: 10;\n    margin: 0px;\n    padding-bottom: 10%;\n    padding-top: 5%;\n    margin-left: 12%;\n  }\n  .instafeedHeading[_ngcontent-%COMP%]{\n    font-family: 'Roboto',sans-serif;\n    font-size: 1.8em;\n    font-weight: 500;\n    color: #101010;\n    margin:3% 0% 3% 0%;\n    text-align: center;\n}\n  .socialFeed[_ngcontent-%COMP%]{\n      width: 100%;\n      max-height: 450px;\n      flex-wrap: nowrap;\n      padding:3%;\n      margin: 0%;\n      overflow: hidden;\n      white-space: nowrap !important;  \n}\n\n.socialFeed[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n      display: inline-block;\n      width: 50%;\n      height: 400px; \n}\n.socialFeed[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n  \n  width: 5%;\n}\n  .instaData[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    position: relative;\n    height: 45%;\n    width: 100%;\n    padding: 2%;\n  }\n  .instaData[_ngcontent-%COMP%]{\n    border:4px solid #fff;\n    overflow: hidden;\n    margin: 25px;   \n    display: inline-block;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n    -webkit-filter: brightness(100%);\n            filter: brightness(100%);\n    box-shadow: 0 0 11px rgba(230, 62, 62, 0.2); \n  }\n  .socialFeed[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{\n      position: absolute;\n      padding-top: 30%;\n      left: 10%;\n      cursor: pointer;\n      scroll-behavior: smooth;\n  }\n  .socialFeed[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{\n      position: absolute;\n      padding-top: 30%;\n      right: 7.5%;\n      cursor: pointer;\n      scroll-behavior: smooth;\n  }\n\n  .blog[_ngcontent-%COMP%]{\n    width: 90%;\n    max-height: 450px;\n    margin: 4%;\n    overflow: hidden;\n    white-space: nowrap !important;\n}\n.blog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n    display: inline-block;\n    width: 50%;\n    height: 430px; \n}\n.blog[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    height: 7%;\n    width: 7%;\n    \n}\n\n.blog[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{\n    position: absolute;\n    top:50%;\n    left: 0%;\n    cursor: pointer; \n}\n.blog[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{\n    position: absolute;\n    top:50%;\n    right: -2.5%;\n    cursor: pointer;    \n}\n.card2-content[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{\n  font-size: 1.5em;\n  font-family: 'Times New Roman', Times, serif;\n  }\n  .banner2[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:last-child{\n    width:90%;\n    color: black;\n    display: inline-block;\n    margin-top: 3%;\n    font-weight: bolder;\n    font-size: .8em;\n    margin-left: 2%;\n    font-family: 'Times New Roman', Times, serif;\n    text-align-last: center;\n  }\n  .banner3[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{\n    margin-left: 45%;\n    margin-top: 3%;\n    background: transparent;\n    border: 1px solid blueviolet;\n    font-weight: bolder;\n    font-size: .9em;\n    cursor: pointer;\n    width: 15%;\n    height: 20%;\n  }\n\n}\n  \n  @media screen and (min-width:320px) and (max-width:500px) {\n  .app[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    margin-top:60px;\n    margin-left: auto;\n    width:80px;\n    height: 80px;\n    \n  }\n  .app-desc[_ngcontent-%COMP%] {\n    width: 300px;\n    height:330px;\n    text-align: left;\n    margin-top: 28%;\n    padding-top: 1.6%;\n    line-height:0.7em;\n    font-weight:180;\n  }\n    .app-desc[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:first-child {\n      font-family: 'Roboto',sans-serif;\n      font-size: 1.6em;\n      line-height: 1em;\n      text-align: left;\n      margin-top:-8%;\n      padding-bottom: 3%;\n      margin-left: auto;\n    }\n    .app-desc[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child {\n      font-family: 'Roboto',sans-serif;\n      font-size: 1.5em;\n      font-weight: 270;\n      line-height: 1.3em;\n      text-align:left;\n    }\n    .banner[_ngcontent-%COMP%] {\n      height:auto;\n      width:100%;\n      background-color: rgb(219, 235, 241);\n      text-align: center;\n      margin-bottom:10%;\n    }\n    .banner[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{\n      width:100%;\n      color: black;\n      display:block;\n      margin-top:0;\n      padding: 20px;\n    }\n    .blog[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n      display: inline-block;\n      width: 85%;\n      margin: 6%;\n      height: 400px;\n    }\n    .blog[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n      width:9%;\n      height: 6%;\n    }\n    .blog[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{\n      top:45%;\n      left: 0%;\n  }\n  .blog[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{\n      top:45%;\n      right: -5%;\n  }\n  .socialFeed[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n    height: 400px;\n    margin: 10px;\n    \n  }\n  .socialFeed[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    width: 5%;\n  }\n  .instafeed[_ngcontent-%COMP%]{\n    z-index: 10;\n    margin: 0px;\n    padding-bottom: 25%;\n  }\n  .socialFeed[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{\n    margin-top: 40%;\n    left: 2%;\n}\n.socialFeed[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{\n    margin-top: 40%;\n    right: 2%;   \n}\n.card[_ngcontent-%COMP%]{\n  position:relative;\n  width:100%;\n  height:500px;\n}\n.card-image-holder[_ngcontent-%COMP%]{\n  position:absolute;\n  width:100%;\n  height:300px;\n  display:block;\n  top:0;\n}\n.card-image-holder[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n  width:100%;\n  height:100%;\n  margin-left:0%;\n}\n.card-content[_ngcontent-%COMP%]{\n  position:absolute;\n  top:300px;\n  width:100%;\n  height:200px;\n  display: inline-block;\n}\n.card-content[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{\nmargin-top:5%;\nwidth:100%;\nmargin-left:0;\n}\n\n\n.card2[_ngcontent-%COMP%]{\nposition:relative;\nwidth:100%;\nheight:500px;\n}\n.card2-image[_ngcontent-%COMP%]{\nposition:absolute;\nwidth:100%;\nheight:300px;\ndisplay:block;\ntop:0;\n}\n.card2-image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\nwidth:100%;\nheight:100%;\nmargin-left:0%;\n}\n.card2-content[_ngcontent-%COMP%]{\nposition:absolute;\ntop:300px;\nwidth:100%;\nheight:200px;\ndisplay: inline-block;\n}\n.card2-content[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{\nmargin-top:5%;\nwidth:100%;\nmargin-left:0;\n}\n.card2-content[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{\n  font-size: 1em;\n  font-family: 'Times New Roman', Times, serif;\n  text-align: center;\n  }\n  .banner2[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:first-child{\n    width:95%;\n    color: black;\n    display: inline-block;\n    margin-left: 3%;\n    margin-top: 1%;\n    font-weight: bolder;\n    font-size: .8em;\n    font-family: 'Times New Roman', Times, serif;\n    text-align-last: center;\n  }\n  .banner2[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:last-child{\n    width:100%;\n    color: black;\n    display: inline-block;\n    margin-top: 3%;\n    font-weight: bolder;\n    font-size: .8em;\n    margin-left: 2%;\n    font-family: 'Times New Roman', Times, serif;\n    text-align-last: center;\n  }\n  .banner3[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n    text-align: center;\n    margin-left: 5%;\n  }\n  .banner3[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{\n    margin-left: 32.5%;\n    margin-top: 3%;\n    background: transparent;\n    border: 1px solid blueviolet;\n    font-weight: bolder;\n    font-size: .9em;\n    cursor: pointer;\n    width: 35%;\n    height: 20%;\n  }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/about/about.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/about/about.component.ngfactory.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./about.component.css.shim.ngstyle */ "./src/app/about/about.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../cards/blog-card/blog-card.component.ngfactory */ "./src/app/cards/blog-card/blog-card.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../cards/blog-card/blog-card.component */ "./src/app/cards/blog-card/blog-card.component.ts");
var i4 = __webpack_require__(/*! ../header/header.component.ngfactory */ "./src/app/header/header.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var i6 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i7 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i8 = __webpack_require__(/*! ../footer/footer.component.ngfactory */ "./src/app/footer/footer.component.ngfactory.js");
var i9 = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
var i10 = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
var i11 = __webpack_require__(/*! ../shared/services/send.service */ "./src/app/shared/services/send.service.ts");
var i12 = __webpack_require__(/*! ../shared/services/get.service */ "./src/app/shared/services/get.service.ts");
var i13 = __webpack_require__(/*! ../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var i14 = __webpack_require__(/*! ../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var i15 = __webpack_require__(/*! ../shared/services/link.service */ "./src/app/shared/services/link.service.ts");
var i16 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i17 = __webpack_require__(/*! @angular/http */ "@angular/http");
var styles_AboutComponent = [i0.styles];
var RenderType_AboutComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AboutComponent, data: {} });
exports.RenderType_AboutComponent = RenderType_AboutComponent;
function View_AboutComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, [[2, 0], ["blogImg", 1]], null, 2, "div", [["class", "feeddata"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "sports-social-blog-card", [], null, null, null, i2.View_BlogCardComponent_0, i2.RenderType_BlogCardComponent)), i1.ɵdid(2, 4308992, null, 0, i3.BlogCardComponent, [], { heading: [0, "heading"], blogImage: [1, "blogImage"], metaDesc: [2, "metaDesc"], topic: [3, "topic"], insertedDate: [4, "insertedDate"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.heading; var currVal_1 = _v.context.$implicit.blogImage; var currVal_2 = _v.context.$implicit.metaDesc; var currVal_3 = _v.context.$implicit.topic; var currVal_4 = _v.context.$implicit.insertedDate; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }, null); }
function View_AboutComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, "div", [["class", "instaData"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, [[4, 0], ["socialFeedImg", 1]], null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "p", [["id", "username"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["@", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "p", [["id", "time"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "textdata"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.link, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.url, ""); _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.context.$implicit.username; _ck(_v, 4, 0, currVal_2); var currVal_3 = _v.context.$implicit.created_time; _ck(_v, 6, 0, currVal_3); var currVal_4 = _v.context.$implicit.text; _ck(_v, 9, 0, currVal_4); }); }
function View_AboutComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { blog: 0 }), i1.ɵqud(671088640, 2, { blogImg: 0 }), i1.ɵqud(402653184, 3, { socialFeed: 0 }), i1.ɵqud(671088640, 4, { socialFeedImg: 0 }), (_l()(), i1.ɵeld(4, 0, null, null, 1, "sports-social-header", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 5).onresize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i4.View_HeaderComponent_0, i4.RenderType_HeaderComponent)), i1.ɵdid(5, 4308992, null, 0, i5.HeaderComponent, [i6.PropertyService], null, null), (_l()(), i1.ɵeld(6, 0, null, null, 5, "h4", [["class", "app-desc"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, ["", ""])), (_l()(), i1.ɵeld(10, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(11, null, ["", ""])), (_l()(), i1.ɵeld(12, 0, null, null, 16, "div", [["class", "banner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["30k+ "])), (_l()(), i1.ɵeld(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Number of Users"])), (_l()(), i1.ɵeld(17, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["1k+ "])), (_l()(), i1.ɵeld(19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Matches Played"])), (_l()(), i1.ɵeld(21, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["100+ "])), (_l()(), i1.ɵeld(23, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Arenas to Play"])), (_l()(), i1.ɵeld(25, 0, null, null, 3, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["24+ "])), (_l()(), i1.ɵeld(27, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Sports available"])), (_l()(), i1.ɵeld(29, 0, null, null, 9, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 1, "div", [["class", "card-image-holder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 0, "img", [["src", "assets/images/0.17694108530739472.jpeg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 6, "div", [["class", "card-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 5, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 2, "b", [], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\"A world where everyone is welcome to play and enjoy their favourite sports without any barrirers\""])), (_l()(), i1.ɵeld(37, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Our Mission is to give everyone opportunity for play and self-expression and Show them to World. "])), (_l()(), i1.ɵeld(39, 0, null, null, 6, "div", [["class", "card2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 1, "div", [["class", "card2-image"]], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 0, "img", [["src", "assets/images/0.08521108651820741.jpeg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 3, "div", [["class", "card2-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(43, 0, null, null, 2, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We believe that everyone deserve an opportunity for self-expression and that the world is better place when we play, express ourselves and build communities through Sports. "])), (_l()(), i1.ɵeld(46, 0, null, null, 4, "div", [["class", "banner2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Sports Socials mission is to ensure that every goal you score will contribute to your sports career. Every match you play will be in record officially. The whole gamut of your sport\u2019s activities will be mapped & recorded in sports social."])), (_l()(), i1.ɵeld(49, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\"WE SHOWCASE YOUR SPORTS\u2019 JOURNEY IN FRONT OF THE WHOLE WORLD\""])), (_l()(), i1.ɵeld(51, 0, null, null, 9, "div", [["class", "blogFeed"], ["id", "blg-feed"]], null, null, null, null, null)), (_l()(), i1.ɵeld(52, 0, null, null, 2, "p", [["class", "feedHeading"]], null, null, null, null, null)), (_l()(), i1.ɵeld(53, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The Latest from our Blog"])), (_l()(), i1.ɵeld(55, 0, null, null, 5, "div", [["style", "position:relative"]], null, null, null, null, null)), (_l()(), i1.ɵeld(56, 0, [[1, 0], ["blog", 1]], null, 4, "div", [["class", "blog"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AboutComponent_1)), i1.ɵdid(58, 278528, null, 0, i7.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(59, 0, null, null, 0, "img", [["class", "left"], ["src", "assets/images/1.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.leftScroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 0, "img", [["class", "right"], ["src", "assets/images/2.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.rightScroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 8, "div", [["class", "instafeed"]], null, null, null, null, null)), (_l()(), i1.ɵeld(62, 0, null, null, 2, "p", [["class", "instafeedHeading"]], null, null, null, null, null)), (_l()(), i1.ɵeld(63, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The Social Feed"])), (_l()(), i1.ɵeld(65, 0, [[3, 0], ["socialFeed", 1]], null, 4, "div", [["class", "socialFeed"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AboutComponent_2)), i1.ɵdid(67, 278528, null, 0, i7.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(68, 0, null, null, 0, "img", [["class", "left"], ["src", "assets/images/1.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.leftScroll2() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(69, 0, null, null, 0, "img", [["class", "right"], ["src", "assets/images/2.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.rightScroll2() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(70, 0, null, null, 5, "div", [["class", "banner3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(71, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Start your journey with sports social "])), (_l()(), i1.ɵeld(73, 0, null, null, 2, "a", [["href", "https://goo.gl/qrgCz5"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(74, 0, null, null, 1, "button", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Get Started"])), (_l()(), i1.ɵeld(76, 0, null, null, 1, "sports-social-footer", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i1.ɵnov(_v, 77).onscroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_FooterComponent_0, i8.RenderType_FooterComponent)), i1.ɵdid(77, 114688, null, 0, i9.FooterComponent, [], null, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_2 = _co.blogs; _ck(_v, 58, 0, currVal_2); var currVal_3 = _co.instaArr; _ck(_v, 67, 0, currVal_3); _ck(_v, 77, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.descTitleDisplay; _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.descDisplay; _ck(_v, 11, 0, currVal_1); }); }
exports.View_AboutComponent_0 = View_AboutComponent_0;
function View_AboutComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-about", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onResize($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_AboutComponent_0, RenderType_AboutComponent)), i1.ɵdid(1, 245760, null, 0, i10.AboutComponent, [i11.SendService, i1.Renderer2, i12.GetService, i13.PostService, i14.TimeService, i15.LinkService, i16.Meta, i16.Title, i17.Http, i1.PLATFORM_ID], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AboutComponent_Host_0 = View_AboutComponent_Host_0;
var AboutComponentNgFactory = i1.ɵccf("app-about", i10.AboutComponent, View_AboutComponent_Host_0, {}, {}, []);
exports.AboutComponentNgFactory = AboutComponentNgFactory;


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var send_service_1 = __webpack_require__(/*! ../shared/services/send.service */ "./src/app/shared/services/send.service.ts");
var post_service_1 = __webpack_require__(/*! ../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var time_service_1 = __webpack_require__(/*! ../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var get_service_1 = __webpack_require__(/*! ../shared/services/get.service */ "./src/app/shared/services/get.service.ts");
var link_service_1 = __webpack_require__(/*! ../shared/services/link.service */ "./src/app/shared/services/link.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var http_1 = __webpack_require__(/*! @angular/http */ "@angular/http");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(margin, renderer, get, post, time, link, metaservice, titleservice, http, platformid) {
        var _this = this;
        this.margin = margin;
        this.renderer = renderer;
        this.get = get;
        this.post = post;
        this.time = time;
        this.link = link;
        this.metaservice = metaservice;
        this.titleservice = titleservice;
        this.http = http;
        this.title = 'About Sports Social | Chase Your Sport';
        this.keywords = "About Sports Social,Sports Social,Chase Your Sport,Sports is the new Social,Your Sports Manager,Bond over Sports,Participate in Sport,Khelo India,Play your sport";
        this.description = "Sports Social is Social Networking Service that lets users to chase their passion for the sport at any time, anywhere.“Sports Social” aims to provide a framework and maximize access to participation in appropriate forms of physical activity.";
        this.posturl = "https://prod.chaseyoursport.com/sportSocialBlogs";
        this.blogs = [];
        this.data1 = [];
        this.instaArr = [];
        this.instadata = [];
        this.descTitle = "Sports Social is";
        this.descTitleDisplay = "";
        this.desc = "Sports digital media and Networking Service that helps you to see\
 what's going around in your locality and around the globe right now & let's\
  you chase your passion to play your favourite sport.";
        this.descDisplay = "";
        this.margin.height.subscribe(function (top) { return _this.marginTop = top; });
    }
    AboutComponent.prototype.instafeed = function () {
        var _this = this;
        this.get.getinstadata()
            .subscribe(function (res) {
            _this.instadata = res.json().data;
            // console.log("this is insta data::"+JSON.stringify(this.instadata));
            for (var i = 0; i < _this.instadata.length; i++) {
                _this.instaimageArray = _this.instadata[i];
                _this.instaArr.push({
                    id: _this.instaimageArray.id,
                    profile_picture: _this.instaimageArray.user.profile_picture,
                    username: _this.instaimageArray.user.username,
                    url: _this.instaimageArray.images.standard_resolution.url,
                    created_time: _this.time.ExactDate(_this.instaimageArray.created_time),
                    text: _this.instaimageArray.caption.text,
                    link: _this.instaimageArray.link
                });
            }
        });
    };
    AboutComponent.prototype.getLatestBlog = function () {
        var _this = this;
        this.http.post(this.posturl, {}).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.blogs.push({
                    blogId: data[i].blogId,
                    heading: data[i].heading,
                    blogImage: data[i].blogImage,
                    viewCount: data[i].viewCount,
                    shareCount: data[i].shareCount,
                    bloggerName: data[i].bloggerName,
                    metaDesc: data[i].metaDesc,
                    topic: data[i].topic,
                    insertedDate: _this.time.timePassed(data[i].insertedDate)
                });
            }
        });
    };
    AboutComponent.prototype.setCanonicalURL = function () {
        this.link.addTag({ rel: 'canonical', href: 'https://www.sportsoical.in' });
    };
    AboutComponent.prototype.ngOnInit = function () {
        // console.log(this.desc.nativeElement.textContent);
        this.instafeed();
        this.titleservice.setTitle(this.title);
        this.metaservice.updateTag({ name: 'title', content: this.title });
        this.metaservice.updateTag({ name: 'keywords', content: this.keywords });
        this.metaservice.updateTag({ name: 'description', content: this.description });
        this.metaservice.updateTag({ property: 'og:title', content: this.title });
        this.metaservice.updateTag({ property: 'og:description', content: this.description });
        this.metaservice.updateTag({ property: 'og:keywords', content: this.keywords });
        this.getLatestBlog();
        this.setCanonicalURL();
        this.typeWriterTitle(this.descTitle, 0);
        setTimeout(function () {
            var i = 0;
            i++;
            if (i <= 5) { }
            console.log(i);
        }, 1000);
        this.typeWriter(this.desc, 0);
    };
    AboutComponent.prototype.ngOnDestroy = function () {
        if (this._masonry) {
            this._removeAllSubscription.unsubscribe();
            this._removeItemSubscription.unsubscribe();
            this._removeFirstItemSubscription.unsubscribe();
        }
    };
    AboutComponent.prototype.onResize = function (event) {
        var _this = this;
        this.margin.height.subscribe(function (top) {
            _this.marginTop = top;
        });
    };
    AboutComponent.prototype.leftScroll = function () {
        this.blog.nativeElement.scrollLeft -= this.blogImg.nativeElement.clientWidth;
    };
    AboutComponent.prototype.rightScroll = function () {
        this.blog.nativeElement.scrollLeft += this.blogImg.nativeElement.clientWidth;
    };
    AboutComponent.prototype.leftScroll2 = function () {
        this.socialFeed.nativeElement.scrollLeft -= this.socialFeedImg.nativeElement.clientWidth;
    };
    AboutComponent.prototype.rightScroll2 = function () {
        this.socialFeed.nativeElement.scrollLeft += this.socialFeedImg.nativeElement.clientWidth;
    };
    AboutComponent.prototype.typeWriter = function (text, n) {
        var _this = this;
        if (n < text.length) {
            this.descDisplay += (this.desc[n]);
            n++;
            setTimeout(function () {
                _this.typeWriter(_this.desc, n);
            }, 30);
        }
    };
    AboutComponent.prototype.typeWriterTitle = function (text, n) {
        var _this = this;
        if (n < text.length) {
            this.descTitleDisplay += (text[n]);
            n++;
            setTimeout(function () {
                _this.typeWriterTitle(text, n);
            }, 40);
        }
    };
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
exports.AboutModule = AboutModule;


/***/ }),

/***/ "./src/app/add-que-ans/add-que-ans.component.css.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/add-que-ans/add-que-ans.component.css.shim.ngstyle.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["*[_ngcontent-%COMP%]{\n    \n    font-family: 'Roboto',sans-serif;\n   \n}\n.prev-btn[_ngcontent-%COMP%]{\n    padding-bottom: 1%;\n    height: 20px;\n}\n.prev-btn[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    margin: 1%;\n    margin-bottom: 1%;\n}\n.qabody[_ngcontent-%COMP%]{\n    margin-top: 2%;\n    border: 1px solid black;\n    overflow: hidden;\n    display: inline-flex;\n}\n.QA[_ngcontent-%COMP%]{\n    border-top: 1px solid #bbbbbb;\n    \n}\n.side-nav[_ngcontent-%COMP%]{\n   padding: 0px;\n   width: 250px;\n   list-style-type: none;\n   display: inline-block;\n}\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    border: 1px solid #bbbbbb;\n    border-top:none;\n    padding: 5% 5% 5% 1.5%;\n}\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    margin-left: 3%;\n    width: 30%;\n    height: 30%;\n    text-align: center;\n    border-radius: 5px;\n}\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]{\n    margin-left: 2%;\n    width: 200px;\n    height: auto;\n    color: black;\n    font-size: 1em;\n    font-weight: 200;\n    background:transparent;\n    text-align: left;\n    border: none;\n    cursor: pointer;\n}\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{\n    font-weight: 700;\n    text-decoration:none;\n}\n\n.answers[_ngcontent-%COMP%]{\n    margin-top: 5%;\n    max-width: 74%;\n    height: auto;\n    margin-left:5%; \n    vertical-align: top;\n    font-size: 1.2em;\n    font-weight: 500;\n    text-align: left;\n}\n@media  (max-width:500px)\n{\n  .qabody[_ngcontent-%COMP%] {\n    margin-top: 6%;\n    width:100%;\n    border: 1px solid black;\n    overflow: hidden;\n    display: inline-flex;\n  }\n\n  .QA[_ngcontent-%COMP%] {\n    border-top: 1px solid #bbbbbb;\n    \n  }\n\n  .side-nav[_ngcontent-%COMP%] {\n    padding: 0px;\n    width: 95px;\n    list-style-type: none;\n    display: inline-block;\n  }\n\n    .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      border: 1px solid #bbbbbb;\n      border-top: none;\n      padding: 2% 2% 2% .5%;\n    }\n\n      .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n        margin-left: 3%;\n        width: 18%;\n        height: 18%;\n        text-align: center;\n        border-radius: 3px;\n      }\n\n      .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n        width: 85px;\n        height: auto;\n        color: black;\n        font-size: .8em;\n        font-weight: 100;\n        background: transparent;\n        text-align: left;\n        border: none;\n      }\n\n        .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n          font-weight: bold;\n          text-decoration:none;\n        }\n\n  .answers[_ngcontent-%COMP%] {\n    width:90%;\n    margin-top: 5%;\n    height: auto;\n    margin-left: 3%;\n    margin-right: 5%;\n    vertical-align: top;\n    font-size: .7em;\n    font-weight: 300;\n    text-align: left;\n  }\n  .answers[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n    width:90%;\n    height:auto;\n    margin-left:2%;\n   \n  }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/add-que-ans/add-que-ans.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/add-que-ans/add-que-ans.component.ngfactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./add-que-ans.component.css.shim.ngstyle */ "./src/app/add-que-ans/add-que-ans.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../help-center/help-center-header/help-center-header.component.ngfactory */ "./src/app/help-center/help-center-header/help-center-header.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../help-center/help-center-header/help-center-header.component */ "./src/app/help-center/help-center-header/help-center-header.component.ts");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! ./add-que-ans.component */ "./src/app/add-que-ans/add-que-ans.component.ts");
var i7 = __webpack_require__(/*! ../shared/services/get.service */ "./src/app/shared/services/get.service.ts");
var i8 = __webpack_require__(/*! ../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var i9 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_AddQueAnsComponent = [i0.styles];
var RenderType_AddQueAnsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AddQueAnsComponent, data: {} });
exports.RenderType_AddQueAnsComponent = RenderType_AddQueAnsComponent;
function View_AddQueAnsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.getAns(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00A0\u00A0"])), (_l()(), i1.ɵeld(4, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.icon, ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.ques; _ck(_v, 4, 0, currVal_1); }); }
function View_AddQueAnsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "SportSocial-help-center-header", [], null, null, null, i2.View_HelpCenterHeaderComponent_0, i2.RenderType_HelpCenterHeaderComponent)), i1.ɵdid(1, 114688, null, 0, i3.HelpCenterHeaderComponent, [], null, null), (_l()(), i1.ɵeld(2, 0, null, null, 3, "div", [["class", "prev-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "a", [["routerLink", "/HelpCenter"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(4, 671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i5.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(5, 0, null, null, 0, "img", [["src", "/assets/images/left.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 6, "div", [["class", "qabody"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 3, "div", [["class", "QA"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 2, "ul", [["class", "side-nav"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AddQueAnsComponent_1)), i1.ɵdid(10, 278528, null, 0, i5.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(11, 0, null, null, 1, "div", [["class", "answers"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_2 = "/HelpCenter"; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.quesAns; _ck(_v, 10, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 4).target; var currVal_1 = i1.ɵnov(_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_4 = _co.Ans; _ck(_v, 12, 0, currVal_4); }); }
exports.View_AddQueAnsComponent_0 = View_AddQueAnsComponent_0;
function View_AddQueAnsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-add-que-ans", [], null, null, null, View_AddQueAnsComponent_0, RenderType_AddQueAnsComponent)), i1.ɵdid(1, 114688, null, 0, i6.AddQueAnsComponent, [i4.Router, i4.ActivatedRoute, i7.GetService, i8.PostService, i9.Meta, i9.Title, i1.Renderer2], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AddQueAnsComponent_Host_0 = View_AddQueAnsComponent_Host_0;
var AddQueAnsComponentNgFactory = i1.ɵccf("app-add-que-ans", i6.AddQueAnsComponent, View_AddQueAnsComponent_Host_0, {}, {}, []);
exports.AddQueAnsComponentNgFactory = AddQueAnsComponentNgFactory;


/***/ }),

/***/ "./src/app/add-que-ans/add-que-ans.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-que-ans/add-que-ans.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var get_service_1 = __webpack_require__(/*! ../shared/services/get.service */ "./src/app/shared/services/get.service.ts");
var post_service_1 = __webpack_require__(/*! ../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var AddQueAnsComponent = /** @class */ (function () {
    function AddQueAnsComponent(router, route, getService, load, meta, pagetitle, renderer) {
        this.router = router;
        this.route = route;
        this.getService = getService;
        this.load = load;
        this.meta = meta;
        this.pagetitle = pagetitle;
        this.renderer = renderer;
        this.quesAns = [];
        // quesAns:{
        //   id: string,
        //         topic_id: string,
        //         subtopic_id:string ,
        //         subtopic_name:string,
        //         ques: string,
        //         ans: string,
        //         icon: string
        // }[]=[];
        this.Ans = "";
        this.Ques = "";
        this.blog = { title: '', question: '', answer: '' };
    }
    AddQueAnsComponent.prototype.ngOnInit = function () {
        var topicId = +this.route.snapshot.paramMap.get("topicId");
        var subtopicId = +this.route.snapshot.paramMap.get("subtopicId");
        this.getQuesAns(topicId, subtopicId);
        console.log("hello", this.quesAns);
    };
    AddQueAnsComponent.prototype.strip = function (html) {
        var tmp = this.renderer.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };
    AddQueAnsComponent.prototype.getQuesAns = function (topicId, subtopicId) {
        var _this = this;
        this.getService.getQA(topicId, subtopicId).subscribe(function (res) {
            var body = JSON.parse(res._body);
            for (var i in body) {
                _this.quesAns.push({
                    id: body[i].id,
                    topic_id: body[i].topic_id,
                    subtopic_id: body[i].subtopic_id,
                    subtopic_name: body[i].subtopic_name,
                    ques: body[i].ques,
                    ans: body[i].ans,
                    icon: body[i].icon
                });
            }
            _this.Ans = _this.quesAns[0].ans;
        });
    };
    AddQueAnsComponent.prototype.getAns = function (id) {
        for (var qu in this.quesAns) {
            if (this.quesAns[qu].id == id)
                this.Ans = this.quesAns[qu].ans;
        }
        var convertedhtml = this.strip(this.Ans);
        this.meta.updateTag({ name: 'description', content: convertedhtml });
        this.getQues(id);
    };
    AddQueAnsComponent.prototype.getQues = function (id) {
        for (var qu in this.quesAns) {
            if (this.quesAns[qu].id == id)
                this.Ques = this.quesAns[qu].ques;
        }
        var convertedhtml = this.strip(this.Ques);
        this.pagetitle.setTitle(convertedhtml);
        this.meta.updateTag({ name: 'title', content: convertedhtml });
    };
    AddQueAnsComponent.prototype.getsubtopicseo = function () {
    };
    AddQueAnsComponent.prototype.getImg = function (img) {
        for (var image in this.quesAns) {
            //console.log(image);
            if (this.quesAns[img].icon == img) {
                this.img = this.quesAns[img].icon;
            }
        }
    };
    return AddQueAnsComponent;
}());
exports.AddQueAnsComponent = AddQueAnsComponent;


/***/ }),

/***/ "./src/app/add-topic/add-topic.component.css.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/add-topic/add-topic.component.css.shim.ngstyle.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["*[_ngcontent-%COMP%]{\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Roboto',sans-serif;\n    width: 100%;\n    height: 100%;\n}\n\n.content[_ngcontent-%COMP%]{\n    border-top: 1px solid #bbbbbb;\n    white-space: nowrap;\n}\n\n.content[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n    display: inline-block;\n    white-space: normal;\n    vertical-align: top;\n    margin-left: 0px;\n}\n\n.side-nav[_ngcontent-%COMP%]{\n   padding: 0px;\n   width: 20%;\n   list-style-type: none;\n   display: inline-block;\n}\n\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    border: 1px solid #bbbbbb;\n    border-top:none;\n    padding: 5% 1.5% 5% 1.5%;\n}\n\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    margin-left: 8%;\n    width: 13%;\n    height: 15%;\n    border-radius: 5px;\n}\n\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]{\n    margin-left: 2%;\n    width: 95%;\n    color: black;\n    font-size: 1em;\n    font-weight: 300;\n    background:transparent;\n    border: none;\n    text-align: left;\n}\n\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{\n    font-weight: 700;\n    text-decoration:none;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/add-topic/add-topic.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/add-topic/add-topic.component.ngfactory.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./add-topic.component.css.shim.ngstyle */ "./src/app/add-topic/add-topic.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./add-topic.component */ "./src/app/add-topic/add-topic.component.ts");
var i4 = __webpack_require__(/*! ../shared/services/get.service */ "./src/app/shared/services/get.service.ts");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var styles_AddTopicComponent = [i0.styles];
var RenderType_AddTopicComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AddTopicComponent, data: {} });
exports.RenderType_AddTopicComponent = RenderType_AddTopicComponent;
function View_AddTopicComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.SubtopicsIconChange(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵted(3, null, ["\u00A0\u00A0\u00A0", " "]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.icon, ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_1); }); }
function View_AddTopicComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["add-topic works"])), (_l()(), i1.ɵeld(2, 0, null, null, 3, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "ul", [["class", "side-nav"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AddTopicComponent_1)), i1.ɵdid(5, 278528, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.topics; _ck(_v, 5, 0, currVal_0); }, null); }
exports.View_AddTopicComponent_0 = View_AddTopicComponent_0;
function View_AddTopicComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-add-topic", [], null, null, null, View_AddTopicComponent_0, RenderType_AddTopicComponent)), i1.ɵdid(1, 114688, null, 0, i3.AddTopicComponent, [i4.GetService, i5.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AddTopicComponent_Host_0 = View_AddTopicComponent_Host_0;
var AddTopicComponentNgFactory = i1.ɵccf("app-add-topic", i3.AddTopicComponent, View_AddTopicComponent_Host_0, {}, {}, []);
exports.AddTopicComponentNgFactory = AddTopicComponentNgFactory;


/***/ }),

/***/ "./src/app/add-topic/add-topic.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-topic/add-topic.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var get_service_1 = __webpack_require__(/*! ../shared/services/get.service */ "./src/app/shared/services/get.service.ts");
var AddTopicComponent = /** @class */ (function () {
    function AddTopicComponent(getService, router) {
        this.getService = getService;
        this.router = router;
        this.topics = [];
    }
    AddTopicComponent.prototype.AllTopics = function () {
        var _this = this;
        this.getService.getTopics().subscribe(function (res) {
            var body = JSON.parse(res._body);
            for (var i in body) {
                _this.topics.push({
                    id: body[i].id,
                    name: body[i].name,
                    icon: body[i].icon,
                    shortDesc: body[i].shortDesc
                });
            }
            console.log(_this.topics);
        });
    };
    AddTopicComponent.prototype.send = function () {
        this.router.navigate(["addsubtopic"]);
    };
    AddTopicComponent.prototype.ngOnInit = function () {
        this.AllTopics();
    };
    return AddTopicComponent;
}());
exports.AddTopicComponent = AddTopicComponent;


/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i5 = __webpack_require__(/*! ./shared/services/messaging.service */ "./src/app/shared/services/messaging.service.ts");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(1, 212992, null, 0, i2.RouterOutlet, [i2.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵeld(2, 16777216, null, null, 1, "router-outlet", [["name", "Match"]], null, null, null, null, null)), i1.ɵdid(3, 212992, null, 0, i2.RouterOutlet, [i2.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, "Match"], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵeld(4, 16777216, null, null, 1, "router-outlet", [["name", "News"]], null, null, null, null, null)), i1.ɵdid(5, 212992, null, 0, i2.RouterOutlet, [i2.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, "News"], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵeld(6, 16777216, null, null, 1, "router-outlet", [["name", "AppDownload"]], null, null, null, null, null)), i1.ɵdid(7, 212992, null, 0, i2.RouterOutlet, [i2.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, "AppDownload"], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵted(8, null, [" ", ""])), i1.ɵpid(131072, i3.AsyncPipe, [i1.ChangeDetectorRef]), i1.ɵpid(0, i3.JsonPipe, [])], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); _ck(_v, 7, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵunv(_v, 8, 0, i1.ɵnov(_v, 10).transform(i1.ɵunv(_v, 8, 0, i1.ɵnov(_v, 9).transform(_co.message)))); _ck(_v, 8, 0, currVal_0); }); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 114688, null, 0, i4.AppComponent, [i5.MessagingService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("sports-social-root", i4.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var messaging_service_1 = __webpack_require__(/*! ./shared/services/messaging.service */ "./src/app/shared/services/messaging.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(messagingService) {
        this.messagingService = messagingService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var userId = 'user001';
        this.messagingService.requestPermission(userId);
        this.messagingService.receiveMessage();
        // this.messagingService.subscribe_device(localStorage.getItem('hiiiiiii'));
        this.message = this.messagingService.currentMessage;
        console.log("Hey user this is my message:" + JSON.stringify(this.message));
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* angular modules */
Object.defineProperty(exports, "__esModule", { value: true });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i4 = __webpack_require__(/*! ./open-cards/open-news-card/open-news-card.component.ngfactory */ "./src/app/open-cards/open-news-card/open-news-card.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./home/home.component.ngfactory */ "./src/app/home/home.component.ngfactory.js");
var i6 = __webpack_require__(/*! ./about/about.component.ngfactory */ "./src/app/about/about.component.ngfactory.js");
var i7 = __webpack_require__(/*! ./contact-us/contact-us.component.ngfactory */ "./src/app/contact-us/contact-us.component.ngfactory.js");
var i8 = __webpack_require__(/*! ./livedata/livedata.component.ngfactory */ "./src/app/livedata/livedata.component.ngfactory.js");
var i9 = __webpack_require__(/*! ./add-topic/add-topic.component.ngfactory */ "./src/app/add-topic/add-topic.component.ngfactory.js");
var i10 = __webpack_require__(/*! ./help-center/help-center.component.ngfactory */ "./src/app/help-center/help-center.component.ngfactory.js");
var i11 = __webpack_require__(/*! ./application/application.component.ngfactory */ "./src/app/application/application.component.ngfactory.js");
var i12 = __webpack_require__(/*! ./add-que-ans/add-que-ans.component.ngfactory */ "./src/app/add-que-ans/add-que-ans.component.ngfactory.js");
var i13 = __webpack_require__(/*! ./open-cards/open-match-card/open-match-card.component.ngfactory */ "./src/app/open-cards/open-match-card/open-match-card.component.ngfactory.js");
var i14 = __webpack_require__(/*! ./pop-up/pop-up.component.ngfactory */ "./src/app/pop-up/pop-up.component.ngfactory.js");
var i15 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i16 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i17 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i18 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i19 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i20 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i21 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i22 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i23 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i24 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i25 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var i26 = __webpack_require__(/*! ng2-scroll-to-el/scrollTo.service */ "ng2-scroll-to-el/scrollTo.service");
var i27 = __webpack_require__(/*! @angular/fire/database */ "@angular/fire/database");
var i28 = __webpack_require__(/*! @angular/fire */ "@angular/fire");
var i29 = __webpack_require__(/*! @angular/fire/auth */ "@angular/fire/auth");
var i30 = __webpack_require__(/*! @angular/fire/messaging */ "@angular/fire/messaging");
var i31 = __webpack_require__(/*! @angular/fire/firestore */ "@angular/fire/firestore");
var i32 = __webpack_require__(/*! @agm/core/utils/browser-globals */ "@agm/core/utils/browser-globals");
var i33 = __webpack_require__(/*! @agm/core/services/maps-api-loader/maps-api-loader */ "@agm/core/services/maps-api-loader/maps-api-loader");
var i34 = __webpack_require__(/*! @agm/core/services/maps-api-loader/lazy-maps-api-loader */ "@agm/core/services/maps-api-loader/lazy-maps-api-loader");
var i35 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i36 = __webpack_require__(/*! ./shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i37 = __webpack_require__(/*! ./shared/services/location.service */ "./src/app/shared/services/location.service.ts");
var i38 = __webpack_require__(/*! ./shared/services/get.service */ "./src/app/shared/services/get.service.ts");
var i39 = __webpack_require__(/*! ./shared/services/send.service */ "./src/app/shared/services/send.service.ts");
var i40 = __webpack_require__(/*! ./shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var i41 = __webpack_require__(/*! ./shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var i42 = __webpack_require__(/*! ./shared/services/match-data.service */ "./src/app/shared/services/match-data.service.ts");
var i43 = __webpack_require__(/*! ./shared/services/news.service */ "./src/app/shared/services/news.service.ts");
var i44 = __webpack_require__(/*! ./shared/services/pop-up.service */ "./src/app/shared/services/pop-up.service.ts");
var i45 = __webpack_require__(/*! ./shared/services/link.service */ "./src/app/shared/services/link.service.ts");
var i46 = __webpack_require__(/*! ./shared/services/seo.service */ "./src/app/shared/services/seo.service.ts");
var i47 = __webpack_require__(/*! ./shared/services/messaging.service */ "./src/app/shared/services/messaging.service.ts");
var i48 = __webpack_require__(/*! ngx-google-places-autocomplete/ngx-google-places-autocomplete.module */ "ngx-google-places-autocomplete/ngx-google-places-autocomplete.module");
var i49 = __webpack_require__(/*! @agm/core/core.module */ "@agm/core/core.module");
var i50 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i51 = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var i52 = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var i53 = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
var i54 = __webpack_require__(/*! ./livedata/livedata.component */ "./src/app/livedata/livedata.component.ts");
var i55 = __webpack_require__(/*! ./add-topic/add-topic.component */ "./src/app/add-topic/add-topic.component.ts");
var i56 = __webpack_require__(/*! ./help-center/help-center.component */ "./src/app/help-center/help-center.component.ts");
var i57 = __webpack_require__(/*! ./application/application.component */ "./src/app/application/application.component.ts");
var i58 = __webpack_require__(/*! ./add-que-ans/add-que-ans.component */ "./src/app/add-que-ans/add-que-ans.component.ts");
var i59 = __webpack_require__(/*! ./open-cards/open-match-card/open-match-card.component */ "./src/app/open-cards/open-match-card/open-match-card.component.ts");
var i60 = __webpack_require__(/*! ./open-cards/open-news-card/open-news-card.component */ "./src/app/open-cards/open-news-card/open-news-card.component.ts");
var i61 = __webpack_require__(/*! ./pop-up/pop-up.component */ "./src/app/pop-up/pop-up.component.ts");
var i62 = __webpack_require__(/*! ./gallery/gallery.module */ "./src/app/gallery/gallery.module.ts");
var i63 = __webpack_require__(/*! ./open-cards/open-match-card/open-match-card.module */ "./src/app/open-cards/open-match-card/open-match-card.module.ts");
var i64 = __webpack_require__(/*! ./open-cards/open-news-card/open-news-card.module */ "./src/app/open-cards/open-news-card/open-news-card.module.ts");
var i65 = __webpack_require__(/*! ./carousel/carousel.module */ "./src/app/carousel/carousel.module.ts");
var i66 = __webpack_require__(/*! ./header/header.module */ "./src/app/header/header.module.ts");
var i67 = __webpack_require__(/*! ./navigation-bar/navigation-bar.module */ "./src/app/navigation-bar/navigation-bar.module.ts");
var i68 = __webpack_require__(/*! ./cards/match-card/match-card.module */ "./src/app/cards/match-card/match-card.module.ts");
var i69 = __webpack_require__(/*! ./cards/news-card/news-card.module */ "./src/app/cards/news-card/news-card.module.ts");
var i70 = __webpack_require__(/*! ./cards/live-match-card/live-match-card.module */ "./src/app/cards/live-match-card/live-match-card.module.ts");
var i71 = __webpack_require__(/*! ./global-feed/global-open-arena-feed/global-open-arena-feed.module */ "./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.module.ts");
var i72 = __webpack_require__(/*! ./footer/footer.module */ "./src/app/footer/footer.module.ts");
var i73 = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
var i74 = __webpack_require__(/*! ./cards/blog-card/blog-card.module */ "./src/app/cards/blog-card/blog-card.module.ts");
var i75 = __webpack_require__(/*! ./about/about.module */ "./src/app/about/about.module.ts");
var i76 = __webpack_require__(/*! ./help-center/help-center.module */ "./src/app/help-center/help-center.module.ts");
var i77 = __webpack_require__(/*! ng2-scroll-to-el/scrollTo.module */ "ng2-scroll-to-el/scrollTo.module");
var i78 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵEmptyOutletComponentNgFactory, i4.OpenNewsCardComponentNgFactory, i5.HomeComponentNgFactory, i6.AboutComponentNgFactory, i7.ContactUsComponentNgFactory, i8.LivedataComponentNgFactory, i9.AddTopicComponentNgFactory, i10.HelpCenterComponentNgFactory, i11.ApplicationComponentNgFactory, i12.AddQueAnsComponentNgFactory, i13.OpenMatchCardComponentNgFactory, i14.PopUpComponentNgFactory, i15.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i16.BrowserXhr, i17.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i16.ResponseOptions, i16.BaseResponseOptions, []), i0.ɵmpd(4608, i16.XSRFStrategy, i17.ɵangular_packages_platform_server_platform_server_f, []), i0.ɵmpd(4608, i16.XHRBackend, i16.XHRBackend, [i16.BrowserXhr, i16.ResponseOptions, i16.XSRFStrategy]), i0.ɵmpd(4608, i16.RequestOptions, i16.BaseRequestOptions, []), i0.ɵmpd(5120, i16.Http, i17.ɵangular_packages_platform_server_platform_server_g, [i16.XHRBackend, i16.RequestOptions]), i0.ɵmpd(4608, i18.HttpXsrfTokenExtractor, i18.ɵangular_packages_common_http_http_g, [i19.DOCUMENT, i0.PLATFORM_ID, i18.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i18.ɵangular_packages_common_http_http_h, i18.ɵangular_packages_common_http_http_h, [i18.HttpXsrfTokenExtractor, i18.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i18.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i18.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i18.XhrFactory, i17.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i18.HttpXhrBackend, i18.HttpXhrBackend, [i18.XhrFactory]), i0.ɵmpd(6144, i18.HttpBackend, null, [i18.HttpXhrBackend]), i0.ɵmpd(5120, i18.HttpHandler, i17.ɵangular_packages_platform_server_platform_server_h, [i18.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i18.HttpClient, i18.HttpClient, [i18.HttpHandler]), i0.ɵmpd(4608, i18.ɵangular_packages_common_http_http_d, i18.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_k, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i19.NgLocalization, i19.NgLocaleLocalization, [i0.LOCALE_ID, [2, i19.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_i, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(4608, i20.DomSanitizer, i20.ɵDomSanitizerImpl, [i19.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i20.DomSanitizer]), i0.ɵmpd(4608, i20.HAMMER_GESTURE_CONFIG, i20.HammerGestureConfig, []), i0.ɵmpd(5120, i20.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new i20.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i20.ɵKeyEventsPlugin(p1_0), new i20.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3), new i17.ɵangular_packages_platform_server_platform_server_d(p3_0)]; }, [i19.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i19.DOCUMENT, i19.DOCUMENT, i20.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i20.HAMMER_LOADER], i20.DOCUMENT]), i0.ɵmpd(4608, i20.EventManager, i20.EventManager, [i20.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i20.ɵDomSharedStylesHost, i20.ɵDomSharedStylesHost, [i19.DOCUMENT]), i0.ɵmpd(4608, i20.ɵDomRendererFactory2, i20.ɵDomRendererFactory2, [i20.EventManager, i20.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i17.ɵangular_packages_platform_server_platform_server_c, i17.ɵangular_packages_platform_server_platform_server_c, [i20.DOCUMENT, [2, i20.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i20.ɵSharedStylesHost, null, [i17.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i17.ɵServerRendererFactory2, i17.ɵServerRendererFactory2, [i20.EventManager, i0.NgZone, i20.DOCUMENT, i20.ɵSharedStylesHost]), i0.ɵmpd(4608, i21.AnimationDriver, i21.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i21.ɵAnimationStyleNormalizer, i22.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i21.ɵAnimationEngine, i22.ɵangular_packages_platform_browser_animations_animations_a, [i19.DOCUMENT, i21.AnimationDriver, i21.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i17.ɵangular_packages_platform_server_platform_server_a, [i17.ɵServerRendererFactory2, i21.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i23.AnimationBuilder, i22.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i20.DOCUMENT]), i0.ɵmpd(4608, i19.ViewportScroller, i19.ɵNullViewportScroller, []), i0.ɵmpd(4608, i24.ɵangular_packages_forms_forms_i, i24.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(4608, i24.FormBuilder, i24.FormBuilder, []), i0.ɵmpd(4608, i25.NgMasonryGridService, i25.NgMasonryGridService, [i0.PLATFORM_ID]), i0.ɵmpd(4608, i26.ScrollToService, i26.ScrollToService, []), i0.ɵmpd(4608, i27.AngularFireDatabase, i27.AngularFireDatabase, [i28.FirebaseOptionsToken, [2, i28.FirebaseNameOrConfigToken], [2, i28.RealtimeDatabaseURL], i0.PLATFORM_ID, i0.NgZone]), i0.ɵmpd(4608, i29.AngularFireAuth, i29.AngularFireAuth, [i28.FirebaseOptionsToken, [2, i28.FirebaseNameOrConfigToken], i0.PLATFORM_ID, i0.NgZone]), i0.ɵmpd(4608, i30.AngularFireMessaging, i30.AngularFireMessaging, [i28.FirebaseOptionsToken, [2, i28.FirebaseNameOrConfigToken], i0.PLATFORM_ID, i0.NgZone]), i0.ɵmpd(5120, i28.FirebaseApp, i28._firebaseAppFactory, [i28.FirebaseOptionsToken, [2, i28.FirebaseNameOrConfigToken]]), i0.ɵmpd(4608, i31.AngularFirestore, i31.AngularFirestore, [i28.FirebaseOptionsToken, [2, i28.FirebaseNameOrConfigToken], [2, i31.EnablePersistenceToken], [2, i31.FirestoreSettingsToken], i0.PLATFORM_ID, i0.NgZone, [2, i31.PersistenceSettingsToken]]), i0.ɵmpd(4608, i32.WindowRef, i32.WindowRef, []), i0.ɵmpd(4608, i32.DocumentRef, i32.DocumentRef, []), i0.ɵmpd(4608, i33.MapsAPILoader, i34.LazyMapsAPILoader, [[2, i34.LAZY_MAPS_API_CONFIG], i32.WindowRef, i32.DocumentRef]), i0.ɵmpd(5120, i35.ActivatedRoute, i35.ɵangular_packages_router_router_g, [i35.Router]), i0.ɵmpd(4608, i35.NoPreloading, i35.NoPreloading, []), i0.ɵmpd(6144, i35.PreloadingStrategy, null, [i35.NoPreloading]), i0.ɵmpd(135680, i35.RouterPreloader, i35.RouterPreloader, [i35.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i35.PreloadingStrategy]), i0.ɵmpd(4608, i35.PreloadAllModules, i35.PreloadAllModules, []), i0.ɵmpd(5120, i35.ɵangular_packages_router_router_n, i35.ɵangular_packages_router_router_c, [i35.Router, i19.ViewportScroller, i35.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i35.ROUTER_INITIALIZER, i35.ɵangular_packages_router_router_j, [i35.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i35.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i36.PropertyService, i36.PropertyService, []), i0.ɵmpd(4608, i37.LocationService, i37.LocationService, [i18.HttpClient]), i0.ɵmpd(4608, i38.GetService, i38.GetService, [i16.Http]), i0.ɵmpd(4608, i39.SendService, i39.SendService, []), i0.ɵmpd(4608, i40.PostService, i40.PostService, [i18.HttpClient]), i0.ɵmpd(4608, i41.TimeService, i41.TimeService, []), i0.ɵmpd(4608, i42.MatchDataService, i42.MatchDataService, [i37.LocationService, i40.PostService]), i0.ɵmpd(4608, i43.NewsService, i43.NewsService, [i40.PostService]), i0.ɵmpd(4608, i44.PopUpService, i44.PopUpService, []), i0.ɵmpd(4608, i45.LinkService, i45.LinkService, [i0.RendererFactory2, i20.DOCUMENT]), i0.ɵmpd(4608, i46.SeoService, i46.SeoService, [i20.Meta]), i0.ɵmpd(4608, i47.MessagingService, i47.MessagingService, [i27.AngularFireDatabase, i29.AngularFireAuth, i30.AngularFireMessaging, i31.AngularFirestore, i16.Http]), i0.ɵmpd(135680, i19.AsyncPipe, i19.AsyncPipe, [i0.ChangeDetectorRef]), i0.ɵmpd(1073742336, i16.HttpModule, i16.HttpModule, []), i0.ɵmpd(1073742336, i18.HttpClientXsrfModule, i18.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i18.HttpClientModule, i18.HttpClientModule, []), i0.ɵmpd(1073742336, i19.CommonModule, i19.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i20.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i35.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(256, i0.APP_ID, "sport-social", []), i0.ɵmpd(2048, i20.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(512, i35.ɵangular_packages_router_router_h, i35.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p1_1, p1_2, p2_0) { return [i20.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i20.ɵangular_packages_platform_browser_platform_browser_h(p1_0, p1_1, p1_2), i35.ɵangular_packages_router_router_i(p2_0)]; }, [[2, i0.NgProbeToken], i20.ɵTRANSITION_ID, i19.DOCUMENT, i0.Injector, i35.ɵangular_packages_router_router_h]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i20.BrowserModule, i20.BrowserModule, [[3, i20.BrowserModule]]), i0.ɵmpd(1073742336, i22.NoopAnimationsModule, i22.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i17.ServerModule, i17.ServerModule, []), i0.ɵmpd(1073742336, i24.ɵangular_packages_forms_forms_bb, i24.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i24.FormsModule, i24.FormsModule, []), i0.ɵmpd(1073742336, i24.ReactiveFormsModule, i24.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i48.GooglePlaceModule, i48.GooglePlaceModule, []), i0.ɵmpd(1073742336, i49.AgmCoreModule, i49.AgmCoreModule, []), i0.ɵmpd(1024, i35.ɵangular_packages_router_router_a, i35.ɵangular_packages_router_router_e, [[3, i35.Router]]), i0.ɵmpd(512, i35.UrlSerializer, i35.DefaultUrlSerializer, []), i0.ɵmpd(512, i35.ChildrenOutletContexts, i35.ChildrenOutletContexts, []), i0.ɵmpd(256, i35.ROUTER_CONFIGURATION, { enableTracing: true }, []), i0.ɵmpd(1024, i19.LocationStrategy, i35.ɵangular_packages_router_router_d, [i19.PlatformLocation, [2, i19.APP_BASE_HREF], i35.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i19.Location, i19.Location, [i19.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i50.ModuleMapNgFactoryLoader, [i0.Compiler, i50.MODULE_MAP]), i0.ɵmpd(1024, i35.ROUTES, function () { return [[{ path: "", component: i51.HomeComponent }], [{ path: "", component: i52.AboutComponent }], [{ path: "contactus", component: i53.ContactUsComponent }, { path: "live", component: i54.LivedataComponent }, { path: "addtopic", component: i55.AddTopicComponent }, { path: "HelpCenter", component: i56.HelpCenterComponent }, { path: "Helpcenter/:topicname", component: i56.HelpCenterComponent }, { path: "application", component: i57.ApplicationComponent }, { path: "HelpCenter/:topicId/:subtopicname/:subtopicId", component: i58.AddQueAnsComponent }, { path: "about", component: i52.AboutComponent }, { path: "Terms Of Service", loadChildren: "app/terms-and-condition/terms-and-condition.module#TermsAndConditionModule" }, { path: "Privacy Policy", loadChildren: "app/privacy-policy/privacy-policy.module#PrivacyPolicyModule" }, { path: "OpenArena", loadChildren: "app/global-feed/global-match-feed/global-match-feed.module#GlobalMatchFeedModule" }, { path: "AroundTheWorld", loadChildren: "app/global-feed/global-news-feed/global-news-feed.module#GlobalNewsFeedModule" }, { path: ":sport", loadChildren: "app/sports-specific-feed/sports-specific-feed.module#SportsSpecificFeedModule" }, { path: ":id", component: i59.OpenMatchCardComponent, outlet: "Match" }, { path: ":id", component: i60.OpenNewsCardComponent, outlet: "News" }, { path: "PopUp", component: i61.PopUpComponent, outlet: "AppDownload" }, { path: "", loadChildren: "app/home/home.module#HomeModule" }, { path: "home", component: i51.HomeComponent }]]; }, []), i0.ɵmpd(1024, i35.Router, i35.ɵangular_packages_router_router_f, [i0.ApplicationRef, i35.UrlSerializer, i35.ChildrenOutletContexts, i19.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i35.ROUTES, i35.ROUTER_CONFIGURATION, [2, i35.UrlHandlingStrategy], [2, i35.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i35.RouterModule, i35.RouterModule, [[2, i35.ɵangular_packages_router_router_a], [2, i35.Router]]), i0.ɵmpd(1073742336, i62.GalleryModule, i62.GalleryModule, []), i0.ɵmpd(1073742336, i63.OpenMatchCardModule, i63.OpenMatchCardModule, []), i0.ɵmpd(1073742336, i64.OpenNewsCardModule, i64.OpenNewsCardModule, []), i0.ɵmpd(1073742336, i65.CarouselModule, i65.CarouselModule, []), i0.ɵmpd(1073742336, i66.HeaderModule, i66.HeaderModule, []), i0.ɵmpd(1073742336, i67.NavigationBarModule, i67.NavigationBarModule, []), i0.ɵmpd(1073742336, i68.MatchCardModule, i68.MatchCardModule, []), i0.ɵmpd(1073742336, i69.NewsCardModule, i69.NewsCardModule, []), i0.ɵmpd(1073742336, i70.LiveMatchCardModule, i70.LiveMatchCardModule, []), i0.ɵmpd(1073742336, i25.NgMasonryGridModule, i25.NgMasonryGridModule, []), i0.ɵmpd(1073742336, i71.GlobalOpenArenaFeedModule, i71.GlobalOpenArenaFeedModule, []), i0.ɵmpd(1073742336, i72.FooterModule, i72.FooterModule, []), i0.ɵmpd(1073742336, i73.HomeModule, i73.HomeModule, []), i0.ɵmpd(1073742336, i74.BlogCardModule, i74.BlogCardModule, []), i0.ɵmpd(1073742336, i75.AboutModule, i75.AboutModule, []), i0.ɵmpd(1073742336, i76.HelpCenterModule, i76.HelpCenterModule, []), i0.ɵmpd(1073742336, i77.ScrollToModule, i77.ScrollToModule, []), i0.ɵmpd(1073742336, i27.AngularFireDatabaseModule, i27.AngularFireDatabaseModule, []), i0.ɵmpd(1073742336, i29.AngularFireAuthModule, i29.AngularFireAuthModule, []), i0.ɵmpd(1073742336, i30.AngularFireMessagingModule, i30.AngularFireMessagingModule, []), i0.ɵmpd(1073742336, i28.AngularFireModule, i28.AngularFireModule, []), i0.ɵmpd(1073742336, i31.AngularFirestoreModule, i31.AngularFirestoreModule, []), i0.ɵmpd(1073742336, i78.AppModule, i78.AppModule, []), i0.ɵmpd(1073742336, i50.ModuleMapLoaderModule, i50.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i18.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i18.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i22.ANIMATION_MODULE_TYPE, "NoopAnimations", []), i0.ɵmpd(256, i28.FirebaseOptionsToken, { apiKey: "AIzaSyDqd3K2VcM9-izMFcQaHzloJE2ygn3I4VE", authDomain: "sport-social-a4cbb.firebaseapp.com", databaseURL: "https://sport-social-a4cbb.firebaseio.com", projectId: "sport-social-a4cbb", storageBucket: "sport-social-a4cbb.appspot.com", messagingSenderId: "408770923079" }, []), i0.ɵmpd(256, i28.FirebaseNameOrConfigToken, "sport-social", []), i0.ɵmpd(256, i34.LAZY_MAPS_API_CONFIG, { apiKey: "AIzaSyBhy2_i75_m05Chs918Q5UKG2fHxMlhia4" }, [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/application/application.component.css.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/application/application.component.css.ngstyle.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["body{\n    margin-top: 2.8%;\n    padding:0;\n    margin:0;\n    scroll-behavior: smooth;\n}\nhtml{\n    scroll-behavior: smooth;\n}\n\n.banner{\n    \n    overflow-x:hidden; \n    overflow-y: hidden;\n    width:100%;\n    height: 40%;\n    padding-top: 3%;\n    background-color: #000000;\n    border: none;\n    border-bottom: none;\n}\n.banner::before{\n    position: relative;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 0;\n    opacity: 0.2;\n}\n.bannerimg{\n    position: relative;\n}\n.bannerimg>img{\n    \n    width:100%;\n    height: 100%;\n    overflow-y: hidden;\n    opacity:0.4;\n}\n.head{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    overflow-y: hidden;\n}\n.head>h1{\n        color: white;\n        position: static; \n        margin-top: 6%;\n        text-align: center;\n        opacity: 1;\n        width: 100%; \n        font-size: 3.8em;\n        z-index: 10;\n        font-family: \"Times New Roman\", Times, serif;\n        \n}\n.head>p{\n        color: white;\n        position: static; \n        margin-top: 5%;\n        text-align: center;\n        opacity: 1;\n        width: 60%; \n        margin-left: 20%;\n        font-size: 1.7em;\n        z-index: 10;\n        font-family: \"Times New Roman\", Times, serif;\n}\n.midData{\n    width: 100%;\n    position: absolute;\n    height: 35%;\n    margin-top: 4%;\n    overflow-y: hidden;\n}\n.midData>a>button{\n    background-color: #357ba7;\n    position: absolute;\n    width:20%;\n    margin-left: 40%;\n    margin-top: 2%;\n    height: 50px;\n    border: none;\n    border-radius: 3%;\n    color: #ffffff;\n    font-size: .8em;\n    text-shadow:2px 1px 10px  #ffffff;\n    justify-content: center;\n    cursor: pointer;\n}\n.midData>h2{\n    display: inline-flex;\n    color: #000000;\n    position: static; \n    text-align: center;\n    top: 550px; \n    vertical-align: middle;\n    margin-left: 20%;\n    width: 60%; \n    font-size: 2em;\n    font-family: 'Times New Roman', Times, serif;\n}\n.midData>h3{\n    margin-top:4%;\n    margin-bottom: 1%;\n    display: inline-flex;\n    color: #000000;\n    position: static; \n    text-align: center;\n    vertical-align: middle;\n    margin-left:25%;\n    width: 50%; \n    font-weight: 400;\n    font-size: 1.5em;\n    \n    font-family: 'Times New Roman', Times, serif;\n}\n\n.body{\n    margin-top: 25%;\n    overflow-y: hidden;\n}\n.div1{\n    background-image: url('/assets/images/1.Arena compress1.jpg');\n    height: 1350px;\n    background-size: 68% 90%;\n    background-attachment: fixed;\n    background-position: left;\n    background-repeat: no-repeat;\n    overflow-y: hidden;\n}\n.right1{\n    width:32%;\n    height:1350px;\n    position: relative;\n    float: right;\n    overflow-y: hidden;\n}\n.right1>img{\n    width: 100%;\n    height: 1350px;\n}\n.div2{\n    background-image: url('/assets/images/2.Arena.jpg');\n    height: 1350px;\n    background-size: 68% 90%;\n    background-attachment: fixed;\n    background-position: right;\n    background-repeat: no-repeat;\n    overflow-y: hidden;\n}\n.left1{\n    width:32%;\n    height:1350px;\n    float: left;\n    clear: right;\n}\n.left1>img{\n    width: 100%;\n    height: 1350px;\n    position: relative;\n}\n.div3{\n    background-image: url('/assets/images/3.Arena.jpg');\n    height: 1350px;\n    background-size: 68% 90%;\n    background-attachment: fixed;\n    background-position: left;\n    background-repeat: no-repeat;\n    overflow-y: hidden;\n}\n.right2{\n    width:32%;\n    height:1350px;\n    position: relative;\n    float: right;\n}\n.right2>img{\n    width: 100%;\n    height: 1350px;\n}\n.div4{\n    background-image: url('/assets/images/4.Arena.jpg');\n    height: 1350px;\n    background-size: 68% 90%;\n    background-attachment: fixed;\n    background-position: right;\n    background-repeat: no-repeat;\n    overflow-y: hidden;\n}\n.left2{\n    width:32%;\n    height:1350px;\n    float: left;\n    clear: right;\n}\n.left2>img{\n    width: 100%;\n    height: 1350px;\n    position: relative;\n}\n.footer{\n    height:10%;\n    width: 100%;\n    margin-top: 4%;\n    margin-bottom: 0%;\n    display: flex; \n    border-top:2px solid black;;\n}\n.leftside{\n    width: 40%;\n    height: 50%;\n    margin-left: 3%;\n    margin-top: 3%;\n    \n}\n.leftside>a>div>img{\n    width: 90%;\n    height: 70%;\n}\n\n.leftside>a>img{\n    width:70%;\n    height: 15%;\n    margin-left: 10%;\n}\n.leftside>a>h3{\n    height:100px;\n    width: 250px;\n    text-align: center;\n}\n.leftside>p{\n    font-size: 1.5em;\n    font-weight: bolder;\n    height: 50%;\n    text-align: center;\n    text-align-last: center;\n    font-family: 'Times New Roman', Times, serif;\n}\n.img1{\n    margin-left: 33%;\n    height: 25%;\n    width: 25%;\n}\n.img1>img{\n    width: 100%;\n    height: 100%;\n    border-radius: 20%;\n}\n.tabletImage{\n    justify-content: right;\n    float: right;\n    margin-right: 0%;\n}\n.tabletImage>img{\n    width: 90%;\n    height: 75%;\n    float: right;\n}\n@media screen and (min-width:170px) and (max-width:500px)  {\n        .appbody{\n            overflow-x: hidden;\n        }\n        .banner{\n            margin-top: 0%;\n            width:100%;\n            height:100%;\n        }\n        .bannerimg>img{\n            width:100%;\n            height: 280px;\n        }\n        .head>h1{\n            text-align: center;\n            font-family: Optima, sans-serif;\n            width:100%;\n            font-size: 2.4em;\n            margin-top: 18%;\n            text-align-last: center;\n        }\n        .head>p{\n            text-align: center;\n            text-align-last: center;\n            width:90%;\n            margin-top: 7%;\n            margin-left: 5%;\n            font-size: 1em;\n            line-height: 1;\n        }\n        .midData{\n            height: 60%;\n            width: 100%;\n        }\n        .midData>h2{\n            font-size: 1.2em;\n            font-weight: bolder;\n            width:80%;\n            margin-left: 8%;\n            margin-top: 8%;\n            text-align: center;\n        }\n        .midData>h3{\n            padding-top: 6%;\n            font-size: 0.9em;\n            width:90%;\n            height: 5%;\n            margin-left: 5%;\n            color:purple;\n            text-align: center;\n            text-align-last: center;\n        }\n        .midData>a>button{\n            width: 40%;\n            height: 10%;\n            text-align: center;\n            margin-top: 7%;\n            margin-left: 30%;\n        }\n        .body{\n            margin-top: 90%;\n        }\n        .div1{\n            margin-left: 0%;\n            height: 1350px;\n            width: 100%;\n            margin-bottom: 40%;\n            background-image: none;\n            background-repeat: no-repeat;\n        }\n        .right1{\n            width:100%;\n            height:1350px;\n            position: relative;\n            text-align: center;\n            margin-right: 0%;\n            margin-left: 0%;\n            float: none;\n        }\n        .right1>img{\n            width: 100%;\n            height: 1350px;\n        }\n        .div2{\n            background-image: none;\n            height: 1300px;\n            margin-bottom: 40%;\n        }\n        .left1{\n            width:100%;\n            height:1300px;\n            float: none;\n            clear: both; \n        }\n        .left1>img{\n            width: 100%;\n            height: 1300px;\n            position: relative;\n        }\n        .div3{\n            background-image: none;\n            height: 1350px;\n            margin-bottom: 40%;\n        }\n        .right2{\n            width:100%;\n            height: 1350px;\n            position: relative;\n            float: none;\n            clear: both; \n        }\n        .right2>img{\n            width: 100%;\n            height: 1350px;\n        }\n        .div4{\n            background-image: none;\n            height: 1350px;\n            margin-bottom: 40%;\n        }\n        .left2{\n            width:100%;\n            height: 1350px;\n            clear: both;\n            float: none\n        }\n        .left2>img{\n            width: 100%;\n            height: 1350px;\n            position: relative;\n        }\n        .footer{\n            padding-top: 15%;\n            margin-left: 0%;\n            height:40%;\n            width: 100%;\n            align-content: center; \n            justify-content: center;\n            padding-bottom: 30%;\n        }\n       \n        .leftside>a>img{\n            width: 130px;\n            height: 60px;\n            \n            margin-left: 4%;\n        }\n        .leftside>a>h3{\n            height:60px;\n            margin-top: -10%;\n            width: 150px;\n            \n            font-size: 0.7em;\n            display: block;\n            text-align: left;\n            text-align-last: center;\n        }\n        .leftside>p{\n            font-size: 0.7em;\n        }\n}\n@media screen and (min-width:501px) and (max-width:767px){\n    .appbody{\n        overflow-x: hidden;\n    }\n    .banner{\n        margin-top: 0%;\n        width:100%;\n        height:100%;\n    }\n    .bannerimg>img{\n        width:100%;\n        height: 280px;\n    }\n    .head>h1{\n        text-align: center;\n        font-family: Optima, sans-serif;\n        width:100%;\n        font-size: 2.4em;\n        margin-top: 15%;\n        text-align-last: center;\n    }\n    .head>p{\n        text-align: center;\n        text-align-last: center;\n        width:90%;\n        margin-top: 7%;\n        margin-left: 5%;\n        font-size: 1em;\n        line-height: 1;\n    }\n    .midData>h2{\n        font-size: 1.2em;\n        font-weight: bolder;\n        width:80%;\n        margin-left: 8%;\n        margin-top: 10%;\n        text-align: center;\n        justify-content: center;\n    }\n    .midData>h3{\n        width:90%;\n        height: 10%;\n        margin-left: 5%;\n        text-align: center;\n        text-align-last: center;\n        justify-content: center;\n        font-size: 0.9em;\n    }\n    .midData>a>button{\n        width: 40%;\n        height: 20%;\n        text-align: center;\n        margin-top: 2%;\n        margin-left: 30%;\n    }\n    .body{\n        margin-top: 90%;\n    }\n    .div1{\n        margin-left: 0%;\n        height: 1350px;\n        width: 100%;\n        margin-bottom: 40%;\n        background-image: none;\n        background-repeat: no-repeat;\n    }\n    .right1{\n        width:100%;\n        height:1350px;\n        position: relative;\n        text-align: center;\n        margin-right: 0%;\n        margin-left: 0%;\n        float: none;\n    }\n    .right1>img{\n        width: 100%;\n        height: 1350px;\n    }\n    .div2{\n        background-image: none;\n        height: 1300px;\n        margin-bottom: 40%;\n    }\n    .left1{\n        width:100%;\n        height:1300px;\n        float: none;\n        clear: both; \n    }\n    .left1>img{\n        width: 100%;\n        height: 1300px;\n        position: relative;\n    }\n    .div3{\n        background-image: none;\n        height: 1350px;\n        margin-bottom: 40%;\n    }\n    .right2{\n        width:100%;\n        height: 1350px;\n        position: relative;\n        float: none;\n        clear: both; \n    }\n    .right2>img{\n        width: 100%;\n        height: 1350px;\n    }\n    .div4{\n        background-image: none;\n        height: 1350px;\n        margin-bottom: 40%;\n    }\n    .left2{\n        width:100%;\n        height: 1350px;\n        clear: both;\n        float: none\n    }\n    .left2>img{\n        width: 100%;\n        height: 1350px;\n        position: relative;\n    }\n    .footer{\n        padding-top: 15%;\n        margin-left: 10%;\n        height:40%;\n        width: 80%;\n        align-content: center; \n        justify-content: center;\n        padding-bottom: 30%;\n    }\n   \n    .leftside>a>img{\n        width: 130px;\n        height: 60px;\n        \n        margin-left: 4%;\n    }\n    .leftside>a>h3{\n        height:60px;\n        margin-top: -10%;\n        width: 150px;\n        \n        font-size: 0.7em;\n        display: block;\n        text-align: left;\n        text-align-last: center;\n    }\n}\n@media  (min-width:768px) and (max-width:1200px)  {\n    .appbody{\n        overflow-x: hidden;\n    }\n    .banner{\n        margin-top: 0%;\n        width:100%;\n        height:100%;\n    }\n    .bannerimg>img{\n        width:100%;\n        height: 350px;\n    }\n    .head>h1{\n        text-align: center;\n        font-family: Optima, sans-serif;\n        width:100%;\n        font-size: 2.8em;\n        margin-top: 15%;\n        text-align-last: center;\n    }\n    .head>p{\n        text-align: center;\n        text-align-last: center;\n        width:90%;\n        margin-top: 7%;\n        margin-left: 5%;\n        font-size: 1.5em;\n        line-height: 1;\n    }\n    .midData>h2{\n        font-size: 2em;\n        font-weight: bolder;\n        width:80%;\n        margin-left: 8%;\n        margin-top: 10%;\n        text-align: center;\n        justify-content: center;\n    }\n    .midData>h3{\n        width:90%;\n        height: 10%;\n        margin-left: 5%;\n        text-align: center;\n        text-align-last: center;\n        justify-content: center;\n        font-size: 1.3em;\n    }\n    .midData>a>button{\n        width: 40%;\n        height: 20%;\n        text-align: center;\n        margin-top: 2%;\n        margin-left: 30%;\n        font-size: 1.5em;\n    }\n    .body{\n        margin-top: 60%;\n    }\n.div1{\n    background-image: url('/assets/images/1.Arena compress1.jpg');\n    height: 1500px;\n    background-size: 570px 870px;\n    background-attachment: fixed;\n    background-position: left;\n    background-repeat: no-repeat;\n}\n.right1{\n    width:350px;\n    height:1500px;\n    position: relative;\n    float: right;\n}\n.right1>img{\n    width: 100%;\n    height: 1500px;\n}\n.div2{\n    background-image: url('/assets/images/2.Arena.jpg');\n    height: 1700px;\n    background-size: 500px 900px;\n    background-attachment: fixed;\n    background-position: right;\n    background-repeat: no-repeat;\n}\n.left1{\n    width:300px;\n    height:1700px;\n    float: left;\n    clear: right;\n}\n.left1>img{\n    width: 100%;\n    height: 1700px;\n    \n}\n.div3{\n    background-image: url('/assets/images/3.Arena.jpg');\n    height: 1700px;\n    background-size: 550px 900px;\n    background-attachment: fixed;\n    background-position: left;\n    background-repeat: no-repeat;\n}\n.right2{\n    width:300px;\n    height:1700px;\n    position: relative;\n    float: right;\n}\n.right2>img{\n    width: 100%;\n    height: 1700px;\n}\n.div4{\n    background-image: url('/assets/images/4.Arena.jpg');\n    height: 1500px;\n    background-size: 500px 900px;\n    background-attachment: fixed;\n    background-position: right;\n    background-repeat: no-repeat;\n}\n.left2{\n    width:300px;\n    height:1744px;\n    float: left;\n    clear: right;\n}\n.left2>img{\n    width: 100%;\n    height: 1500px;\n}\n.footer{\n    margin-bottom: 5%;\n}\n.leftside>p{\n    font-size: 1.3em;\n    font-weight: bolder;\n    height: 40%;\n    margin-top: -3%;\n    margin-bottom: 20%;\n    text-align: center;\n    text-align-last: center;\n    font-family: 'Times New Roman', Times, serif;\n}\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/application/application.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/application/application.component.ngfactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./application.component.css.ngstyle */ "./src/app/application/application.component.css.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../header/header.component.ngfactory */ "./src/app/header/header.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var i4 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i5 = __webpack_require__(/*! ../footer/footer.component.ngfactory */ "./src/app/footer/footer.component.ngfactory.js");
var i6 = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
var i7 = __webpack_require__(/*! ./application.component */ "./src/app/application/application.component.ts");
var i8 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_ApplicationComponent = [i0.styles];
var RenderType_ApplicationComponent = i1.ɵcrt({ encapsulation: 2, styles: styles_ApplicationComponent, data: {} });
exports.RenderType_ApplicationComponent = RenderType_ApplicationComponent;
function View_ApplicationComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-header", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i2.View_HeaderComponent_0, i2.RenderType_HeaderComponent)), i1.ɵdid(1, 4308992, null, 0, i3.HeaderComponent, [i4.PropertyService], null, null), (_l()(), i1.ɵeld(2, 0, null, null, 42, "div", [["class", "appbody"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 7, "div", [["class", "banner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 4, "div", [["class", "head"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["See What's Going Around in Sports"])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Explore the Social side of Sports on Sports Social. Chase Your passion to play, connect your fellow playmates,follow sports enthusiasts, Cheer for matches, create beautiful moments and stay connected to your sports family. "])), (_l()(), i1.ɵeld(9, 0, null, null, 1, "div", [["class", "bannerimg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 0, "img", [["src", "assets/images/Banner123_1_optimized_7.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 8, "div", [["class", "midData"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Play anywhere, Compete Anyone: Meet the new Sports Social app"])), (_l()(), i1.ɵeld(14, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["An experience designed to highlight what matters most to a sports lover."])), (_l()(), i1.ɵeld(16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 2, "a", [["href", "https://goo.gl/qrgCz5"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 1, "button", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Start Your Journey"])), (_l()(), i1.ɵeld(20, 0, null, null, 24, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 2, "div", [["class", "div1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 1, "div", [["class", "right1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 0, "img", [["src", "assets/images/IMAGE1-01-min.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 2, "div", [["class", "div2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 1, "div", [["class", "left1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 0, "img", [["src", "assets/images/IMAGE2-01-min.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 2, "div", [["class", "div3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 1, "div", [["class", "right2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 0, "img", [["src", "assets/images/IMAGE3-01-min.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 2, "div", [["class", "div4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 1, "div", [["class", "left2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 0, "img", [["src", "assets/images/IMAGE4-01-min.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 11, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 8, "div", [["class", "leftside"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 5, "a", [["href", "https://goo.gl/qrgCz5"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 1, "div", [["class", "img1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 0, "img", [["src", "assets/images/playstore-icon-min.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 0, "img", [["src", "assets/images/google-play-badge.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Download app from google play store"])), (_l()(), i1.ɵeld(41, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The Sports Social app is currently available on android to make it easier to play around your favorite sport, keeps you engaged with the sports world."])), (_l()(), i1.ɵeld(43, 0, null, null, 1, "div", [["class", "tabletImage"]], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 0, "img", [["src", "assets/images/samsung-tabs3_front-pen_silver_wifi-min.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(45, 0, null, null, 1, "sports-social-footer", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i1.ɵnov(_v, 46).onscroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i5.View_FooterComponent_0, i5.RenderType_FooterComponent)), i1.ɵdid(46, 114688, null, 0, i6.FooterComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 46, 0); }, null); }
exports.View_ApplicationComponent_0 = View_ApplicationComponent_0;
function View_ApplicationComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-application", [], null, null, null, View_ApplicationComponent_0, RenderType_ApplicationComponent)), i1.ɵdid(1, 114688, null, 0, i7.ApplicationComponent, [i8.Title, i8.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ApplicationComponent_Host_0 = View_ApplicationComponent_Host_0;
var ApplicationComponentNgFactory = i1.ɵccf("sports-social-application", i7.ApplicationComponent, View_ApplicationComponent_Host_0, {}, {}, []);
exports.ApplicationComponentNgFactory = ApplicationComponentNgFactory;


/***/ }),

/***/ "./src/app/application/application.component.ts":
/*!******************************************************!*\
  !*** ./src/app/application/application.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent(titleservice, metaservice) {
        this.titleservice = titleservice;
        this.metaservice = metaservice;
        this.title = 'Download the Sports Social App from Google PlayStore';
        this.keywords = "Sports Social,Sports Social App,Best Sports app India,Play Your Sport,Sports Networking app,Sports Profile,Playmates,Sports Fans,Connect to Sports players,Sports Venues Near by,Sports app,All Sports app,Free Sports App,Online Sports App";
        this.description = "Sports Social app is your personal sports manager that lets you maintain your sports profile,Making your sports & fitness groups (Playmates), Follow others sports activities and create a fan following , Connect with other sports enthusiasts, Discover sports and fitness activities near you and much more. You can also locate the Venues Nearby for more than 10 Sports including Cricket, Football, Lawn Tennis, Badminton etc.";
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        this.titleservice.setTitle(this.title);
        this.metaservice.updateTag({ name: 'title', content: this.title });
        this.metaservice.updateTag({ name: 'keywords', content: this.keywords });
        this.metaservice.updateTag({ name: 'description', content: this.description });
        this.metaservice.updateTag({ property: 'og:title', content: this.title });
        this.metaservice.updateTag({ property: 'og:keywords', content: this.keywords });
        this.metaservice.updateTag({ property: 'og:description', content: this.description });
    };
    return ApplicationComponent;
}());
exports.ApplicationComponent = ApplicationComponent;


/***/ }),

/***/ "./src/app/cards/blog-card/blog-card.component.css.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/cards/blog-card/blog-card.component.css.shim.ngstyle.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".blog-card[_ngcontent-%COMP%]{\n    width: 100%;\n    position: relative;\n    padding: 2%;\n}\n.blog-card[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n    width: 95%;\n    height: 150px;\n    margin-top: 10%;\n    border-radius: 4%;\n    \n}\n.blog-heading[_ngcontent-%COMP%] {\n    \n    position: absolute;\n    width: 100%;\n    left: 0%;\n    right: 0;\n    top:0;\n    bottom: 0px;\n}\n.heading[_ngcontent-%COMP%]{\n    margin-top: 15%;\n    font-size: 1.2em;\n    font-weight: bolder;\n    -webkit-filter: brightness(100%);\n            filter: brightness(100%);\n    display: block;\n    width: 90%;\n    color: #000000;\n    font-weight: bolder;\n    text-align: center;\n    text-align-last: center;\n    position: absolute;\n    left: 10px;\n    margin-right:10px;\n    white-space: normal;\n    \n}\n.bloggername[_ngcontent-%COMP%]{\n    color: #000000;\n    display: block;\n    width: 40%;\n    text-align: left;\n    position: absolute;\n    margin-right:10px;\n    font-weight: bolder;\n    font-size: 1em;\n}\n.blog-heading[_ngcontent-%COMP%]   #topic[_ngcontent-%COMP%]{\n    margin-top:10px;\n    margin-bottom: 0%;\n    color:#000000; \n    display: block;\n    width: 40%;\n    text-align: left;\n    position: absolute;\n    left: 10px;\n    margin-right:10px;\n    font-size: 0.9em;\n    font-weight: bolder;\n}\n#views[_ngcontent-%COMP%]{\n    margin-top: 0%;\n    margin-left: 60%;\n    color: #000000;\n    display: block;\n    width: 20%;\n    position: absolute;\n    padding: 2%;\n    margin-right: 2%;\n}\n.time[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 5px;\n    right: 14px;\n    -webkit-filter: brightness(100%);\n            filter: brightness(100%);\n    font-weight: bolder;\n    padding-right: 3%;\n}\n.time[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    margin-right: 1px;\n    vertical-align: middle;\n    -webkit-filter: brightness(100%);\n            filter: brightness(100%);\n    font-weight: bolder;\n}\n.time[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\n    display: inline-block;\n    vertical-align: middle;\n    color: #000000;\n    font-size: 0.7em;\n    font-weight: bolder;\n}\n@media screen and (min-width:320px) and (max-width:700)  {\n    .blog-card[_ngcontent-%COMP%]{\n        width:100%;\n        height: 100%;\n    }\n    .heading[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n        margin-top:5%;\n        display: inline-block;\n        width: 90%;\n        text-align: center;\n        margin-right:10px;\n        font-size: 0.7em;\n        \n    }\n    .blog-heading[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 100%;\n    }\n\n    .blog-heading[_ngcontent-%COMP%]   #views[_ngcontent-%COMP%]{\n        margin-left: 60%;\n        margin-top: 56%;\n        font-weight: bolder;\n    }\n    .blog-heading[_ngcontent-%COMP%]   .bloggername[_ngcontent-%COMP%]{\n        margin-top:58%;\n        font-weight: bolder;\n        font-weight: 1em;\n    }\n    .blog-heading[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{\n        width:100%;\n        height: 100%;\n\n    }\n    .time[_ngcontent-%COMP%]{\n        right: 30px;\n    }\n    .time[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\n\n        font-weight: bolder;\n\n    }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/cards/blog-card/blog-card.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/cards/blog-card/blog-card.component.ngfactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./blog-card.component.css.shim.ngstyle */ "./src/app/cards/blog-card/blog-card.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./blog-card.component */ "./src/app/cards/blog-card/blog-card.component.ts");
var styles_BlogCardComponent = [i0.styles];
var RenderType_BlogCardComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_BlogCardComponent, data: {} });
exports.RenderType_BlogCardComponent = RenderType_BlogCardComponent;
function View_BlogCardComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 18, "div", [["class", "blog-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 17, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "blog-heading"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "span", [["id", "topic"]], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, ["", ""])), (_l()(), i1.ɵeld(6, 0, null, null, 8, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "p", [["class", "bloggername"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, ["", ""])), (_l()(), i1.ɵeld(10, 0, null, null, 1, "span", [["id", "views"]], null, null, null, null, null)), (_l()(), i1.ɵted(11, null, ["", ""])), (_l()(), i1.ɵeld(12, 0, null, null, 2, "span", [["class", "heading"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(14, null, ["", ""])), (_l()(), i1.ɵeld(15, 0, null, null, 3, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-clock.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(18, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", _co.url, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "", _co.blogImage, ""); _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.topic; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.bloggerName; _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.viewCount; _ck(_v, 11, 0, currVal_4); var currVal_5 = _co.heading; _ck(_v, 14, 0, currVal_5); var currVal_6 = _co.insertedDate; _ck(_v, 18, 0, currVal_6); }); }
exports.View_BlogCardComponent_0 = View_BlogCardComponent_0;
function View_BlogCardComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-blog-card", [], null, null, null, View_BlogCardComponent_0, RenderType_BlogCardComponent)), i1.ɵdid(1, 4308992, null, 0, i2.BlogCardComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_BlogCardComponent_Host_0 = View_BlogCardComponent_Host_0;
var BlogCardComponentNgFactory = i1.ɵccf("sports-social-blog-card", i2.BlogCardComponent, View_BlogCardComponent_Host_0, { blogId: "blogId", heading: "heading", blogImage: "blogImage", viewCount: "viewCount", shareCount: "shareCount", bloggerName: "bloggerName", metaDesc: "metaDesc", imageDesc: "imageDesc", topic: "topic", shortTitle: "shortTitle", insertedDate: "insertedDate" }, {}, []);
exports.BlogCardComponentNgFactory = BlogCardComponentNgFactory;


/***/ }),

/***/ "./src/app/cards/blog-card/blog-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cards/blog-card/blog-card.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var BlogCardComponent = /** @class */ (function () {
    function BlogCardComponent() {
    }
    BlogCardComponent.prototype.ngOnInit = function () {
    };
    BlogCardComponent.prototype.ngAfterViewInit = function () {
        this.url = 'https://www.chaseyoursport.com/' + this.topic
            + '/' + this.shortTitle + '/' + this.blogId;
    };
    return BlogCardComponent;
}());
exports.BlogCardComponent = BlogCardComponent;


/***/ }),

/***/ "./src/app/cards/blog-card/blog-card.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/cards/blog-card/blog-card.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BlogCardModule = /** @class */ (function () {
    function BlogCardModule() {
    }
    return BlogCardModule;
}());
exports.BlogCardModule = BlogCardModule;


/***/ }),

/***/ "./src/app/cards/live-match-card/live-match-card.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/cards/live-match-card/live-match-card.module.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LiveMatchCardModule = /** @class */ (function () {
    function LiveMatchCardModule() {
    }
    return LiveMatchCardModule;
}());
exports.LiveMatchCardModule = LiveMatchCardModule;


/***/ }),

/***/ "./src/app/cards/match-card/match-card.component.css.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/cards/match-card/match-card.component.css.shim.ngstyle.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".sports-social-card[_ngcontent-%COMP%]{\n    width:100%;\n    border: 1px solid #dddddd;\n    margin-bottom: 10%;\n    border-radius: 1%;\n}\n\n.userImage[_ngcontent-%COMP%]{\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 5px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.userImage[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n}\n\n.matchDetails[_ngcontent-%COMP%]{\n    width: 48%;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.userName[_ngcontent-%COMP%]{\n    display: inline-block;\n    vertical-align: middle;\n    max-width: 60%;\n    color: #024771;\n    font-weight: 700;\n    font-size: 1em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin-right: 2%;\n}\n\n.activity-name[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    max-width: 38%;\n    color: black;\n    font-size: 0.8em;\n    font-weight: 400 ;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.gameName[_ngcontent-%COMP%]{\n    color: black;\n    font-size: 0.8em;\n    font-weight: 400 ;\n}\n\n.activityDate[_ngcontent-%COMP%]{\n    color: black;\n    font-size: 0.8em;\n    font-weight: 400 ;\n}\n\n.match-date[_ngcontent-%COMP%]{\n    min-width: 80%;\n    text-align: right;\n    position: absolute;\n    top: 5px;\n    right: 5px;\n\n}\n\n.match-date[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n    display: inline-block;\n    vertical-align: middle;\n    width: 28px;\n    height: 28px;\n}\n\n.match-date[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 0.9em;\n    color: #888888;\n    text-align: left;\n}\n\n.restrictionCount[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    color: black;\n    font-size: 0.9em;\n    font-weight: 700;\n}\n\n.matchText[_ngcontent-%COMP%]{\n    padding: 2%;\n    font-size: 0.95em;\n    font-weight: 500;\n    color: black;\n}\n\n.matchImage[_ngcontent-%COMP%]{\n    width: 100%;\n    max-height: 300px;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.matchImage[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n\n\n.action-count[_ngcontent-%COMP%]{\n    padding: 2%;\n}\n\n.action-count[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    margin-right: 7px;\n    color: black;\n    font-size: 0.9em;\n    font-weight: 500\n}\n\n.action-count[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    font-weight: 400;\n}\n\n.actions-match[_ngcontent-%COMP%]{\n    padding: 3%;\n    display: flex;\n    justify-content: space-around;\n}\n\nbutton[_ngcontent-%COMP%] {\n    background-color: transparent;\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\n.actions-match[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 30px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 2px;\n}\n\n.actions-match[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.actions-match[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover{\n    font-weight: 700\n}\n\n.remove[_ngcontent-%COMP%] {\n    position: absolute;\n}\n\n.gameName[_ngcontent-%COMP%] {\n    font-weight: 700 ;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/cards/match-card/match-card.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/cards/match-card/match-card.component.ngfactory.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./match-card.component.css.shim.ngstyle */ "./src/app/cards/match-card/match-card.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./match-card.component */ "./src/app/cards/match-card/match-card.component.ts");
var i4 = __webpack_require__(/*! ../../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var i5 = __webpack_require__(/*! ../../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var i6 = __webpack_require__(/*! ../../shared/services/pop-up.service */ "./src/app/shared/services/pop-up.service.ts");
var i7 = __webpack_require__(/*! @angular/router */ "@angular/router");
var styles_MatchCardComponent = [i0.styles];
var RenderType_MatchCardComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_MatchCardComponent, data: {} });
exports.RenderType_MatchCardComponent = RenderType_MatchCardComponent;
function View_MatchCardComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.commentCount; _ck(_v, 1, 0, currVal_0); var currVal_1 = ((_co.commentCount > 1) ? "Comments" : "Comment"); _ck(_v, 3, 0, currVal_1); }); }
function View_MatchCardComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.promoteCount; _ck(_v, 1, 0, currVal_0); var currVal_1 = ((_co.promoteCount > 1) ? "Promotes" : "Promote"); _ck(_v, 3, 0, currVal_1); }); }
function View_MatchCardComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Watching"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.watchCount; _ck(_v, 1, 0, currVal_0); }); }
function View_MatchCardComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { actionsCount: 0 }), i1.ɵqud(402653184, 2, { openMatchcard: 0 }), i1.ɵqud(402653184, 3, { userImg: 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 46, "div", [["class", "sports-social-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 17, "div", [["class", "sports-social-card-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "userImage"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, [[3, 0], ["userImg", 1]], null, 0, "img", [], [[8, "src", 4]], [[null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.defaultImage() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 8, "div", [["class", "matchDetails"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "div", [["class", "userName"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, ["", " "])), (_l()(), i1.ɵeld(10, 0, null, null, 1, "span", [["class", "activity-name"]], null, null, null, null, null)), (_l()(), i1.ɵted(11, null, ["", ""])), (_l()(), i1.ɵeld(12, 0, null, null, 1, "div", [["class", "gameName"]], null, null, null, null, null)), (_l()(), i1.ɵted(13, null, ["", " Match"])), (_l()(), i1.ɵeld(14, 0, null, null, 1, "div", [["class", "activityDate"]], null, null, null, null, null)), (_l()(), i1.ɵted(15, null, ["", ""])), (_l()(), i1.ɵeld(16, 0, null, null, 3, "div", [["class", "match-date"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-clock.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(19, null, ["", ""])), (_l()(), i1.ɵeld(20, 0, null, null, 1, "div", [["class", "restrictionCount"]], null, null, null, null, null)), (_l()(), i1.ɵted(21, null, ["", " playing"])), (_l()(), i1.ɵeld(22, 0, null, null, 1, "div", [["class", "matchText"]], null, null, null, null, null)), (_l()(), i1.ɵted(23, null, ["", ""])), (_l()(), i1.ɵeld(24, 0, null, null, 1, "div", [["class", "matchImage"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openPopUp(_co.eventId, _co.gameName, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(26, 0, [[1, 0], ["actionsCount", 1]], null, 6, "div", [["class", "action-count"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MatchCardComponent_1)), i1.ɵdid(28, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MatchCardComponent_2)), i1.ɵdid(30, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MatchCardComponent_3)), i1.ɵdid(32, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(33, 0, null, null, 16, "div", [["class", "actions-match"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 3, "button", [["class", "playButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-play.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Play"])), (_l()(), i1.ɵeld(38, 0, null, null, 3, "button", [["class", "commentButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-match-talks.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Comment"])), (_l()(), i1.ɵeld(42, 0, null, null, 3, "button", [["class", "promoteButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(43, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-promote.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Promote"])), (_l()(), i1.ɵeld(46, 0, null, null, 3, "button", [["class", "watchButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-watching.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Watch"]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = (_co.commentCount > 0); _ck(_v, 28, 0, currVal_9); var currVal_10 = (_co.promoteCount > 0); _ck(_v, 30, 0, currVal_10); var currVal_11 = (_co.watchCount > 0); _ck(_v, 32, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", _co.doerPic, ""); _ck(_v, 6, 0, currVal_0); var currVal_1 = _co.doerName; _ck(_v, 9, 0, currVal_1); var currVal_2 = _co.activityName; _ck(_v, 11, 0, currVal_2); var currVal_3 = _co.gameName; _ck(_v, 13, 0, currVal_3); var currVal_4 = _co.matchDate; _ck(_v, 15, 0, currVal_4); var currVal_5 = _co.activityDate; _ck(_v, 19, 0, currVal_5); var currVal_6 = _co.joineeCount; _ck(_v, 21, 0, currVal_6); var currVal_7 = _co.matchText; _ck(_v, 23, 0, currVal_7); var currVal_8 = i1.ɵinlineInterpolate(1, "", _co.matchImage, ""); _ck(_v, 25, 0, currVal_8); }); }
exports.View_MatchCardComponent_0 = View_MatchCardComponent_0;
function View_MatchCardComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-match-card", [], null, null, null, View_MatchCardComponent_0, RenderType_MatchCardComponent)), i1.ɵdid(1, 114688, null, 0, i3.MatchCardComponent, [i1.Renderer2, i4.TimeService, i1.ComponentFactoryResolver, i5.PostService, i6.PopUpService, i7.Router, i7.ActivatedRoute], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_MatchCardComponent_Host_0 = View_MatchCardComponent_Host_0;
var MatchCardComponentNgFactory = i1.ɵccf("sports-social-match-card", i3.MatchCardComponent, View_MatchCardComponent_Host_0, { creatorName: "creatorName", creatorImage: "creatorImage", eventId: "eventId", doerId: "doerId", doerName: "doerName", doerPic: "doerPic", matchImage: "matchImage", matchText: "matchText", joineeCount: "joineeCount", commentCount: "commentCount", promoteCount: "promoteCount", watchCount: "watchCount", activityName: "activityName", activityDate: "activityDate", matchDate: "matchDate", gameName: "gameName", venueName: "venueName", restrictionCount: "restrictionCount" }, {}, []);
exports.MatchCardComponentNgFactory = MatchCardComponentNgFactory;


/***/ }),

/***/ "./src/app/cards/match-card/match-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cards/match-card/match-card.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var time_service_1 = __webpack_require__(/*! ../../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var post_service_1 = __webpack_require__(/*! ../../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var pop_up_service_1 = __webpack_require__(/*! ../../shared/services/pop-up.service */ "./src/app/shared/services/pop-up.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var MatchCardComponent = /** @class */ (function () {
    function MatchCardComponent(renderer, time, resolver, get, id, router, activatedRoute) {
        this.renderer = renderer;
        this.time = time;
        this.resolver = resolver;
        this.get = get;
        this.id = id;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isClicked = false;
        this.comments = [];
        this.activityid = {
            commentid: 1005,
            promoteid: 1004,
            watchid: 1009
        };
    }
    MatchCardComponent.prototype.removeActionsCountBar = function () {
        if (this.promoteCount === 0 && this.watchCount === 0 && this.commentCount === 0) {
            this.renderer.setStyle(this.actionsCount.nativeElement, 'display', 'none');
        }
    };
    MatchCardComponent.prototype.removeOpenCardFromDOM = function () {
        this.renderer.setStyle(this.openMatchcard.nativeElement, 'position', 'fixed');
    };
    MatchCardComponent.prototype.sendId = function (eventId) {
        this.isClicked = true;
        console.log(eventId);
        this.id.ofCard.next(eventId);
    };
    MatchCardComponent.prototype.openPopUp = function (id, gameName, event) {
        console.log(this.activatedRoute.outlet);
        event.preventDefault();
        console.log(id, gameName);
        this.router.navigate([{ outlets: { 'Match': [id] } }], { skipLocationChange: true });
    };
    MatchCardComponent.prototype.openAppDownloadPopup = function () {
        this.router.navigate([{ outlets: { 'AppDownload': ['PopUp'] } }], { skipLocationChange: true });
    };
    MatchCardComponent.prototype.defaultImage = function () {
        this.renderer.setAttribute(this.userImg.nativeElement, 'src', '/assets/images/user-default.png');
    };
    MatchCardComponent.prototype.ngOnInit = function () {
        this.removeActionsCountBar();
        this.activityDate = this.time.relativeDate(this.activityDate);
        this.matchDate = this.time.exactDate(parseInt(this.matchDate, 10) * 1000);
    };
    return MatchCardComponent;
}());
exports.MatchCardComponent = MatchCardComponent;


/***/ }),

/***/ "./src/app/cards/match-card/match-card.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/cards/match-card/match-card.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MatchCardModule = /** @class */ (function () {
    function MatchCardModule() {
    }
    return MatchCardModule;
}());
exports.MatchCardModule = MatchCardModule;


/***/ }),

/***/ "./src/app/cards/news-card/news-card.component.css.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/cards/news-card/news-card.component.css.shim.ngstyle.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".news-info[_ngcontent-%COMP%] {\n    \n}\n.source-img[_ngcontent-%COMP%]{\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    margin-right: 5px;\n    display: inline-block;\n    vertical-align: middle;\n}\n.source-img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]  {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n}\n.source-name[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 1.2em;\n    margin-right: 2%;\n    color: #024771;\n}\n.news-image-holder[_ngcontent-%COMP%]{\n    width: 100%;\n    max-height: 320px;\n    overflow: hidden;\n    cursor: pointer;\n}\n.news-image-holder[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.desc[_ngcontent-%COMP%]{\n    margin-top: 5px;\n    font-size: 1em;\n    font-weight: 500;\n    overflow: hidden;\n    position: relative; \n    line-height: 1.2em;\n    max-height: 2.4em;\n    text-align: left; \n    padding-left: 1em;\n    padding-right: 1em;\n}\n.desc[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: black;\n}\n.desc[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before{\n  content: '...';\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n.desc[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{\n  content: '';\n  position: absolute;\n  right: 0;\n  width: 1em;\n  height: 1em;\n  margin-top: 0.2em;\n  background: white;\n}\n.action-count[_ngcontent-%COMP%]{\n    padding: 2%;\n}\n.action-count[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    margin-right: 7px;\n    color: black;\n    font-size: 0.9em;\n    font-weight: 500\n}\n.actionsCount[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    font-weight: 400;\n}\n.actions-news[_ngcontent-%COMP%]{\n    padding: 3%;\n    display: flex;\n    justify-content: space-around;\n}\nbutton[_ngcontent-%COMP%] {\n    background-color: transparent;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    \n}\n.actions-news[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 16px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 3px;\n}\n.actions-news[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n}\n.actions-news[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover{\n    font-weight: 700\n}\n.news-date[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 5px;\n    right: 5px;\n\n}\n.news-date[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n    display: inline-block;\n    vertical-align: middle;\n    width: 28px;\n    height: 28px;\n}\n.news-date[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 0.9em;\n    color: #888888;\n}\n@media ( max-width: 720px) {\n    .source-img[_ngcontent-%COMP%]{\n        width: 40px;\n        height: 40px;\n    }\n    .source-name[_ngcontent-%COMP%] {\n        font-size: 1em;\n    }\n}\n@media ( max-width: 980px) and ( min-width: 720px) {\n    .source-img[_ngcontent-%COMP%]{\n        width: 40px;\n        height: 40px;\n    }\n    .source-name[_ngcontent-%COMP%] {\n        font-size: 1.1em;\n    }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/cards/news-card/news-card.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/cards/news-card/news-card.component.ngfactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./news-card.component.css.shim.ngstyle */ "./src/app/cards/news-card/news-card.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./news-card.component */ "./src/app/cards/news-card/news-card.component.ts");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! ../../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var styles_NewsCardComponent = [i0.styles];
var RenderType_NewsCardComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_NewsCardComponent, data: {} });
exports.RenderType_NewsCardComponent = RenderType_NewsCardComponent;
function View_NewsCardComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "a", [["href", ""]], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["", " ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.likeCount; var currVal_1 = ((_co.likeCount > 1) ? "Likes" : "Like"); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_NewsCardComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "a", [["href", ""]], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["", " ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.shareCount; var currVal_1 = ((_co.shareCount > 1) ? "Shares" : "Share"); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_NewsCardComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "a", [["href", ""]], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["", " ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.commentCount; var currVal_1 = ((_co.commentCount > 1) ? "Comments" : "Comment"); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_NewsCardComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { actionsCount: 0 }), i1.ɵqud(402653184, 2, { openNewsCardContainer: 0 }), (_l()(), i1.ɵeld(2, 0, null, null, 38, "div", [["class", "sports-social-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 8, "div", [["class", "sports-social-card-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "div", [["class", "source-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "h1", [["class", "source-name"]], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, ["", ""])), (_l()(), i1.ɵeld(8, 0, null, null, 3, "div", [["class", "news-date"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/sports-social-clock.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(11, null, ["", ""])), (_l()(), i1.ɵeld(12, 0, null, null, 1, "div", [["class", "news-image-holder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], [[null, "error"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.defaultImage() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.openPopUp(_co.newsId) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 2, "h2", [["class", "desc"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵted(16, null, ["", ""])), (_l()(), i1.ɵeld(17, 0, [[1, 0], ["actionsCount", 1]], null, 6, "div", [["class", "action-count"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NewsCardComponent_1)), i1.ɵdid(19, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NewsCardComponent_2)), i1.ɵdid(21, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NewsCardComponent_3)), i1.ɵdid(23, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(24, 0, null, null, 16, "div", [["class", "actions-news"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 3, "button", [["class", "commentButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-comment.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Comment"])), (_l()(), i1.ɵeld(29, 0, null, null, 3, "button", [["class", "promoteButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-like.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Like"])), (_l()(), i1.ɵeld(33, 0, null, null, 3, "button", [["class", "watchButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-share-black.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Share"])), (_l()(), i1.ɵeld(37, 0, null, null, 3, "button", [["class", "watchButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-save-black.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Save"])), (_l()(), i1.ɵeld(41, 16777216, [[2, 3], ["openNewsCard", 1]], null, 0, "template", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_6 = (_co.likeCount > 0); _ck(_v, 19, 0, currVal_6); var currVal_7 = (_co.shareCount > 0); _ck(_v, 21, 0, currVal_7); var currVal_8 = (_co.commentCount > 0); _ck(_v, 23, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵinlineInterpolate(1, "", _co.sourceImage, ""); _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.sourceName; _ck(_v, 7, 0, currVal_1); var currVal_2 = _co.publishedAt; _ck(_v, 11, 0, currVal_2); var currVal_3 = i1.ɵinlineInterpolate(1, "", _co.newsImage, ""); _ck(_v, 13, 0, currVal_3); var currVal_4 = i1.ɵinlineInterpolate(1, "", _co.url, ""); _ck(_v, 15, 0, currVal_4); var currVal_5 = _co.desc; _ck(_v, 16, 0, currVal_5); }); }
exports.View_NewsCardComponent_0 = View_NewsCardComponent_0;
function View_NewsCardComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-news-card", [], null, null, null, View_NewsCardComponent_0, RenderType_NewsCardComponent)), i1.ɵdid(1, 114688, null, 0, i3.NewsCardComponent, [i1.Renderer2, i4.Router, i5.TimeService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_NewsCardComponent_Host_0 = View_NewsCardComponent_Host_0;
var NewsCardComponentNgFactory = i1.ɵccf("sports-social-news-card", i3.NewsCardComponent, View_NewsCardComponent_Host_0, { newsId: "newsId", newsImage: "newsImage", sourceImage: "sourceImage", sourceName: "sourceName", desc: "desc", likeCount: "likeCount", shareCount: "shareCount", commentCount: "commentCount", url: "url", insertedDate: "insertedDate", publishedAt: "publishedAt", title: "title" }, {}, []);
exports.NewsCardComponentNgFactory = NewsCardComponentNgFactory;


/***/ }),

/***/ "./src/app/cards/news-card/news-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cards/news-card/news-card.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var time_service_1 = __webpack_require__(/*! ../../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var NewsCardComponent = /** @class */ (function () {
    function NewsCardComponent(renderer, router, time) {
        this.renderer = renderer;
        this.router = router;
        this.time = time;
    }
    NewsCardComponent.prototype.defaultImage = function () {
        if (this.sourceName === 'BBC Sport') {
            this.newsImage = '/assets/images/bbc-default.jpg';
        }
        if (this.sourceName === 'The Sport Bible') {
            this.newsImage = '/assets/images/sports-bible-default.jpg';
        }
        if (this.sourceName === 'TalkSport') {
            this.newsImage = '/assets/images/talksport-default.jpg';
        }
    };
    NewsCardComponent.prototype.removeActionsCountBar = function () {
        if (this.likeCount === 0 && this.shareCount === 0 && this.commentCount === 0) {
            this.renderer.setStyle(this.actionsCount.nativeElement, 'display', 'none');
        }
    };
    NewsCardComponent.prototype.openPopUp = function (id) {
        this.router.navigate([{ outlets: { 'News': [id] } }], { skipLocationChange: true });
    };
    NewsCardComponent.prototype.openAppDownloadPopup = function () {
        this.router.navigate([{ outlets: { 'AppDownload': ['PopUp'] } }], { skipLocationChange: true });
    };
    NewsCardComponent.prototype.ngOnInit = function () {
        this.removeActionsCountBar();
        this.publishedAt = this.time.newsDate(this.publishedAt);
    };
    return NewsCardComponent;
}());
exports.NewsCardComponent = NewsCardComponent;


/***/ }),

/***/ "./src/app/cards/news-card/news-card.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/cards/news-card/news-card.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NewsCardModule = /** @class */ (function () {
    function NewsCardModule() {
    }
    return NewsCardModule;
}());
exports.NewsCardModule = NewsCardModule;


/***/ }),

/***/ "./src/app/carousel/carousel.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/carousel/carousel.component.css.shim.ngstyle.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".carousel[_ngcontent-%COMP%]{\n    width:100%;\n    height: 560px;\n    display: inline-block;\n    \n}\n\n.carousel-content[_ngcontent-%COMP%]{\n    width:90%;\n    margin-left: 5%;\n    height: 83%;\n    \n    margin-top: 0%;\n    display: inline-flex;\n}\n\n.carousel[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    position: relative;\n    top: 6%;\n    margin-bottom: 1.2%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); \n    width: 100%;\n    text-align: center;\n    color: #024771;\n    font-size: 2.4em;\n    font-weight: 500;\n}\n\n.left-side[_ngcontent-%COMP%]{\n    margin-left: 1%;\n    width:50%;\n    height: 100%;\n    \n    border-radius: 4%;\n    box-shadow: 8px 8px 10px #bbbbbb; \n}\n\n.left-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n}\n\n.left-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    border-radius: 3%;\n    outline: none;\n}\n\n.right-side[_ngcontent-%COMP%]{\n    width:50%;\n    margin-top: 0%;\n    margin-right: 2%;\n    height: 100%;\n    float:right;\n    vertical-align: top;\n    \n}\n\n.right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n    margin: 4%;\n    margin-top: 0%;\n    height: 23%;\n    cursor: pointer;\n    \n}\n\n.right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{\n    display: inline-block;\n    margin-left: 1.5%;\n    margin-top: 0%;\n    vertical-align:top;\n    font-size: 1.1em;\n    font-weight: bolder;\n}\n\n.right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n    margin-top: -6%;\n    margin-left: 21%;\n    font-size: .8em;\n    width:87%;\n    font-weight: bolder;\n}\n\n.right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    border: 1px solid black;\n    width:65px;\n    height:65px;\n    margin-left: 8%;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    text-decoration: none;\n    -webkit-text-decoration-color: none;\n            text-decoration-color: none;\n    border-radius: 50%;\n    \n}\n\n\n\n\n\n@media screen and (max-width:414px){\n    .carousel[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n        font-size: 1.3em;\n        padding: 2%;\n        margin-top: 0%;\n        margin-bottom: 4%;\n    }\n    .carousel-content[_ngcontent-%COMP%]{\n        width:90%;\n        margin-left: 5%;\n        height: 83%;\n        margin-top: 0%;\n        display: block;\n    }\n    .left-side[_ngcontent-%COMP%]{\n        margin-left: 2%;\n        margin-top: 2%;\n        width:95%;\n        height: 60%;\n        \n    }\n    .left-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 100%;\n        outline: 0;\n    }\n    .left-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 100%;\n        outline: 0;\n    }\n    .right-side[_ngcontent-%COMP%]{\n        width:100%;  \n        \n        margin-left: 0%;\n        margin-right: 0%;\n        height: 20%;\n        display: inline-flex;\n        float: left;\n    }\n    .right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n        width:100%;\n        height: 40%;\n        margin: 3%;\n    }\n\n    .right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{\n        width: 100%;\n        text-align: center;\n        font-size: 0.7em;\n        font-weight: bolder;\n        margin-left: 0%;\n    }\n    \n    .right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n        width:30px;\n        height: 30px;\n        margin-left: 25%;\n        margin-bottom: 15%;\n        background: transparent;\n        border: none;\n        text-decoration: none;\n        -webkit-text-decoration-color: none;\n                text-decoration-color: none;\n    }\n}\n\n@media screen and (max-width:767px) and (min-width:415px){\n    .carousel[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n        font-size: 1.3em;\n        padding: 2%;\n        margin-top: 0%;\n        margin-bottom: 4%;\n    }\n    .carousel-content[_ngcontent-%COMP%]{\n        width:90%;\n        margin-left: 5%;\n        height: 83%;\n        margin-top: 0%;\n        display: block;\n    }\n    .left-side[_ngcontent-%COMP%]{\n        margin-left: 2%;\n        margin-top: 2%;\n        width:95%;\n        height: 60%;\n        \n    }\n    .left-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 100%;\n    }\n    .left-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 100%;\n    }\n    .right-side[_ngcontent-%COMP%]{\n        width:100%;  \n        \n        margin-left: 0%;\n        margin-right: 0%;\n        height: 20%;\n        display: inline-flex;\n        float: left;\n    }\n    .right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n        width:100%;\n        height: 40%;\n        margin: 3%;\n    }\n\n    .right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{\n        width: 100%;\n        text-align: center;\n        font-size: 0.7em;\n        font-weight: bolder;\n        margin-left: 0%;\n    }\n    \n    .right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n        width:30px;\n        height: 30px;\n        margin-left: 25%;\n        margin-bottom: 15%;\n        background: transparent;\n        border: none;\n        text-decoration: none;\n        -webkit-text-decoration-color: none;\n                text-decoration-color: none;\n    }\n}\n\n@media (max-width:1200px) and (min-width:768px){\n    .carousel[_ngcontent-%COMP%]{\n        height: 600px;\n    }\n    .carousel-content[_ngcontent-%COMP%]{\n        width:90%;\n        margin-left: 2%;\n        height: 83%;\n        \n        margin-top: 0%;\n        display: inline-flex;\n    }\n    .left-side[_ngcontent-%COMP%]{\n        margin-left: 1%;\n        width:60%;\n        height: 100%;\n    }\n    .left-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 100%;\n    }\n    .left-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 100%;\n    }\n    .right-side[_ngcontent-%COMP%]{\n        margin-right: 2%;\n        display: inline-block;\n    }\n    .right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n        padding: 1%;\n        display: inline-block;\n    }\n\n    .right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{\n        margin-top: -13%;\n        margin-left: 22.5%;\n        font-size: .9em;\n        width: 70%;\n        text-align: left;\n        font-weight: bolder;\n        padding-bottom: 8%;\n\n    }\n    \n    .right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n        margin-left: 23.5%;\n        font-size: .7em;\n        margin-top: -10%;\n    }\n    .right-side[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n        width:40px;\n        height: 40px;\n        margin-left: 5%;\n        background: transparent;\n        border: none;\n        cursor: pointer;\n    }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/carousel/carousel.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/carousel/carousel.component.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./carousel.component.css.shim.ngstyle */ "./src/app/carousel/carousel.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./carousel.component */ "./src/app/carousel/carousel.component.ts");
var i4 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i5 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_CarouselComponent = [i0.styles];
var RenderType_CarouselComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_CarouselComponent, data: {} });
exports.RenderType_CarouselComponent = RenderType_CarouselComponent;
function View_CarouselComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [["class", "first"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["src", "assets/images/Team-01-min.jpg"]], null, null, null, null, null))], null, null); }
function View_CarouselComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [["class", "second"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["src", "assets/images/Profile-01-min.jpg"]], null, null, null, null, null))], null, null); }
function View_CarouselComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [["class", "third"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["src", "assets/images/Locality-01-min.jpg"]], null, null, null, null, null))], null, null); }
function View_CarouselComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [["class", "fourth"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["src", "assets/images/Arena-01 - Copy.jpg"]], null, null, null, null, null))], null, null); }
function View_CarouselComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { carousel: 0 }), i1.ɵqud(402653184, 2, { blog: 0 }), i1.ɵqud(402653184, 3, { blogImg: 0 }), (_l()(), i1.ɵeld(3, 0, null, null, 0, "link", [["href", "https://www.w3schools.com/w3css/4/w3.css"], ["rel", "stylesheet"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, [[1, 0], ["carousel", 1]], null, 37, "div", [["class", "carousel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Explore the sports person inside you!"])), (_l()(), i1.ɵeld(7, 0, null, null, 34, "div", [["class", "carousel-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 8, "div", [["class", "left-side"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CarouselComponent_1)), i1.ɵdid(10, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CarouselComponent_2)), i1.ɵdid(12, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CarouselComponent_3)), i1.ɵdid(14, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CarouselComponent_4)), i1.ɵdid(16, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(17, 0, null, null, 24, "div", [["class", "right-side"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 5, "div", [["class", "one"], ["style", "color:black;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.first() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 0, "img", [["src", "assets/images/Teams.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TOGETHER WE ACHIEVE MORE"])), (_l()(), i1.ɵeld(22, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Join A Group, Support Your Players. Get In Touch, Get Inspired. There's So Much To Share In Sports Media. Group Is The Perfect Place To Connect Your Emotions."])), (_l()(), i1.ɵeld(24, 0, null, null, 5, "div", [["class", "two"], ["style", "color:#696969;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.second() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 0, "img", [["src", "assets/images/basketball (2).png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["GET NOTICED, SPORTS STAR! "])), (_l()(), i1.ɵeld(28, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Your complete achievement scoreboard is here. Impress world with your genius, match trophies and match media. All your hardwork, success, talent & motivation at one place. A spotlight for your sports career- Your Sports Social Profile!"])), (_l()(), i1.ɵeld(30, 0, null, null, 5, "div", [["class", "three"], ["style", "color:#696969;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.third() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 0, "img", [["src", "assets/images/arena.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CHOOSE EFFORTLESSLY, PLAY CONVENIENTLY"])), (_l()(), i1.ɵeld(34, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["All Popular Sports Academies And Stadia near you at your fingertips. Compare facilities, Gauge Popularity. Get Daily Match Schedules. Contact Owner for specific queries."])), (_l()(), i1.ɵeld(36, 0, null, null, 5, "div", [["class", "four"], ["style", "color:#696969;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.fourth() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 0, "img", [["src", "assets/images/stadium (1).png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["GET SET GOAL"])), (_l()(), i1.ɵeld(40, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The match has begun. The Crowd Is Focused On You. It's Showtime. Show the world, the True Champion. Lead your Team to unmatched glory. Make the stadium roar with victory chants."]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.first1; _ck(_v, 10, 0, currVal_0); var currVal_1 = _co.second1; _ck(_v, 12, 0, currVal_1); var currVal_2 = _co.third1; _ck(_v, 14, 0, currVal_2); var currVal_3 = _co.fourth1; _ck(_v, 16, 0, currVal_3); }, null); }
exports.View_CarouselComponent_0 = View_CarouselComponent_0;
function View_CarouselComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-carousel", [], null, [["window", "resize"], ["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
        ad = (pd_0 && ad);
    } if (("window:scroll" === en)) {
        var pd_1 = (i1.ɵnov(_v, 1).onscroll() !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_CarouselComponent_0, RenderType_CarouselComponent)), i1.ɵdid(1, 114688, null, 0, i3.CarouselComponent, [i1.Renderer2, i4.PropertyService, i4.PropertyService, i5.Title, i5.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_CarouselComponent_Host_0 = View_CarouselComponent_Host_0;
var CarouselComponentNgFactory = i1.ɵccf("sports-social-carousel", i3.CarouselComponent, View_CarouselComponent_Host_0, {}, {}, []);
exports.CarouselComponentNgFactory = CarouselComponentNgFactory;


/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var property_service_1 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(renderer, recieveHeight, sendBottom, pagetitle, metaservice) {
        this.renderer = renderer;
        this.recieveHeight = recieveHeight;
        this.sendBottom = sendBottom;
        this.pagetitle = pagetitle;
        this.metaservice = metaservice;
        this.one = document.getElementsByClassName('one');
        this.two = document.getElementsByClassName('two');
        this.three = document.getElementsByClassName('three');
        this.four = document.getElementsByClassName('four');
        this.first1 = true;
        this.second1 = false;
        this.third1 = false;
        this.fourth1 = false;
    }
    CarouselComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (data) {
            _this.renderer.setStyle(_this.carousel.nativeElement, 'margin-top', data + 'px');
        });
    };
    CarouselComponent.prototype.sendBottomOfCarousel = function () {
        var bottom = platform_browser_1.ɵgetDOM().getBoundingClientRect(this.carousel.nativeElement).bottom;
        this.sendBottom.ofCarousel.next(bottom);
    };
    CarouselComponent.prototype.ngOnInit = function () {
        this.setTopMargin();
        this.sendBottomOfCarousel();
    };
    CarouselComponent.prototype.onresize = function () {
        this.setTopMargin();
        this.sendBottomOfCarousel();
    };
    CarouselComponent.prototype.onscroll = function () {
        this.sendBottomOfCarousel();
    };
    CarouselComponent.prototype.leftScroll = function () {
        this.blog.nativeElement.scrollLeft -= this.blogImg.nativeElement.clientWidth;
    };
    CarouselComponent.prototype.rightScroll = function () {
        this.blog.nativeElement.scrollLeft += this.blogImg.nativeElement.clientWidth;
    };
    CarouselComponent.prototype.first = function () {
        this.one[0].style.color = "black";
        this.two[0].style.color = "#696969";
        this.three[0].style.color = "#696969";
        this.four[0].style.color = "#696969";
        this.first1 = true;
        this.second1 = false;
        this.third1 = false;
        this.fourth1 = false;
    };
    CarouselComponent.prototype.second = function () {
        this.two[0].style.color = "black";
        this.one[0].style.color = "#696969";
        this.three[0].style.color = "#696969";
        this.four[0].style.color = "#696969";
        this.first1 = false;
        this.second1 = true;
        this.third1 = false;
        this.fourth1 = false;
    };
    CarouselComponent.prototype.third = function () {
        this.three[0].style.color = "black";
        this.one[0].style.color = "#696969";
        this.two[0].style.color = "#696969";
        this.four[0].style.color = "#696969";
        this.first1 = false;
        this.second1 = false;
        this.third1 = true;
        this.fourth1 = false;
    };
    CarouselComponent.prototype.fourth = function () {
        this.four[0].style.color = "black";
        this.one[0].style.color = "#696969";
        this.two[0].style.color = "#696969";
        this.three[0].style.color = "#696969";
        this.first1 = false;
        this.second1 = false;
        this.third1 = false;
        this.fourth1 = true;
    };
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;


/***/ }),

/***/ "./src/app/carousel/carousel.module.ts":
/*!*********************************************!*\
  !*** ./src/app/carousel/carousel.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    return CarouselModule;
}());
exports.CarouselModule = CarouselModule;


/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css.shim.ngstyle.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".header[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 500px;\n    background-size: cover;\n    background-image: url('/assets/images/corinne-kutz-211251-unsplash-min.jpg');\n    position: absolute;\n}\n.headerContent[_ngcontent-%COMP%]{\n    margin-top: 7%;\n    margin-left: 15%;\n}\n.headerContent[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{\n    color: orange;\n    font-size: 2.5em;\n    font-weight: bolder;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n.headerContent[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n    width: 70%;\n    margin-top: 1%;\n    text-align: left;\n    font-size: 1.5em;\n    color: #ffffff;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n.userform[_ngcontent-%COMP%]{\n    width: 60%;\n    height: 400px;\n    box-shadow: 0 8px 6px -6px #aaaaaa;\n    position: absolute;\n    margin-top: 18%;\n    margin-left: 18%;\n    border-radius: 1%;\n}\n.left-model[_ngcontent-%COMP%]{\n    position: absolute;\n    background-color: #ffffff;\n    width: 65%;\n    height: 100%;\n}\n.left-model[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{\n    color: #024771;\n    font-size: 1.3em;\n    font-weight: bold;\n    margin: 3% 0% 0% 10%;\n}\nform[_ngcontent-%COMP%]{\n    display: inline-block;\n}\n.left-model[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{\n    display:inline-block;\n    width: 40%;\n    font-size: 0.8em;\n    margin-left: 5%;\n    margin-top:4.3%;\n}\n.msg[_ngcontent-%COMP%]{\n    width: 70% !important;\n    height: auto !important;\n}\n.msg[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]{\n    width: 100% !important;\n    height: 80px;\n}\ninput[_ngcontent-%COMP%]{\n    margin-top: 5%;\n    width: 80%;\n    outline: none;\n    height: 40px;\n    border: none;\n    border-bottom: 1px solid #dddddd;\n}\n.left-model[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{\n    background-color: #024771;\n    color: #ffffff;\n    font-size: 1em;\n    border-radius: 10%;\n    width: 15%;\n    height: 30px;\n    text-align: center;\n    margin-left: 35%;\n    margin-top: 3%;\n    cursor: pointer;\n\n}\n.right-model[_ngcontent-%COMP%]{\n    float: right;\n    width: 35%;\n    height: 100%;\n    background-color: #024771;\n}\n.right-model[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{\n    color: #ffffff;\n    font-size: 2em;\n    font-weight: bolder;\n    margin-top: 25%;\n    margin-left: 5%;\n    text-align: center;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n.right-model[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    margin-top: 5%;\n    padding: 5%;\n    width: 15%;\n    height: 12%;\n    display: inline-block;\n}\n.midbody[_ngcontent-%COMP%]{\n    position: absolute;\n    margin-left:5%; \n    width: 90%;\n    height: 35%;\n    margin-top: 50%;\n    \n}\n.blockData[_ngcontent-%COMP%]{\n    vertical-align: top;\n    margin-left: 5%;\n    display: inline-block;\n    width:25%;\n    height: 100%;\n    \n}\n.midbody[_ngcontent-%COMP%]   .blockData[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    margin-top: 5%;\n    margin-left: 40%;\n    width: 20%;\n    height: 20%;\n}\n.midbody[_ngcontent-%COMP%]   .blockData[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{\n    margin-top: 2%;\n    text-align: center;\n}\n.midbody[_ngcontent-%COMP%]   .blockData[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\n    \n    margin-top: 5%;\n    text-align: center;\n    color: orange;\n    font-weight: bolder;\n    font-size: 1em;\n}\nagm-map[_ngcontent-%COMP%] {\n    height: 400px;\n    width: 100%;\n    margin-bottom: 5%;\n}\n.map[_ngcontent-%COMP%]{\n    height: 40%;\n    width: 100%;\n    position: absolute;\n    margin-bottom: 10%; \n}\n@media screen and (min-width:250px) and (max-width:720px){\n    .header[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 400px;\n        position: static;\n    }\n    .headerContent[_ngcontent-%COMP%]{\n        margin-top: 25%;\n        margin-left: 15%;\n        position: absolute;\n    }\n    .headerContent[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{\n        font-size: 2em;\n        font-weight: bolder;\n    }\n    .headerContent[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n        width: 80%;\n        margin-top: 1%;\n        text-align: left;\n        font-size: 1.3em;\n        color: #ffffff;\n    }\n    .userform[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 400px;\n        border: 1px solid #bbbbbb;\n        position: absolute;\n        margin-left: 0%;\n        margin-top: 18%;\n        border-radius: 1%;\n    } \n    .midbody[_ngcontent-%COMP%]{\n        position: static;\n        margin-left:5%; \n        width: 90%;\n        height: 35%;\n        margin-top: 120%;\n    }\n    .blockData[_ngcontent-%COMP%]{\n        text-align: center;\n        position: static;\n        display: block;\n        width:90%;\n        height: 100%;\n    }\n    .midbody[_ngcontent-%COMP%]   .blockData[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n        margin-top: 5%;\n        margin-left: 0%;\n        width: 20%;\n        height: 20%;\n    }\n    .left-model[_ngcontent-%COMP%]{\n        position: absolute;\n        background-color: #ffffff;\n        width: 60%;\n        height: 100%;\n    }\n    form[_ngcontent-%COMP%]{\n        width: 80%;\n    }\n    .left-model[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{\n        display:block;\n        width: 100%;\n        font-size: 0.8em;\n        margin-left: 5%;\n        margin-top:1%;\n    }\n    .right-model[_ngcontent-%COMP%]{\n        width: 40%;\n    }\n    input[_ngcontent-%COMP%]{\n        margin-top: 0%;\n    }\n    .msg[_ngcontent-%COMP%]{\n        width:100% !important;\n        height: auto !important;\n    }\n    .msg[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]{\n        width: 100% !important;\n        height: 80px;\n    }\n    .left-model[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{\n        border-radius: 10%;\n        width: 40%;\n    \n    }\n    \n    agm-map[_ngcontent-%COMP%] {\n        height: 400px;\n        width: 100%;\n        margin-bottom: 5%;\n    }\n    .map[_ngcontent-%COMP%]{\n        height: 40%;\n        width: 100%;\n        position: relative;\n        margin-bottom: 10%; \n    }\n    \n    \n}\n@media screen and (min-width:721px) and (max-width:1200px){\n    .header[_ngcontent-%COMP%]{\n        position: static;\n    }\n    .headerContent[_ngcontent-%COMP%]{\n        position: absolute;\n        margin-top: 20%;\n        margin-left: 15%;\n    }\n    .userform[_ngcontent-%COMP%]{\n        width: 70%;\n        height: 400px;\n        box-shadow: 0 8px 6px -6px #aaaaaa;\n        position: absolute;\n        margin-top: -8%;\n        margin-left: 15%;\n        border-radius: 1%;\n    } \n    .midbody[_ngcontent-%COMP%]{\n        position: absolute;\n        margin-left:5%; \n        width: 90%;\n        height: 35%;\n        margin-top: 50%;\n    }\n    .blockData[_ngcontent-%COMP%]{\n        vertical-align: top;\n        margin-left: 5%;\n        display: inline-block;\n        width:26%;\n        height: 100%;\n    }\n    .midbody[_ngcontent-%COMP%]   .blockData[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n        margin-top: 5%;\n        margin-left: 40%;\n        width: 20%;\n        height: 20%;\n    }\n    .midbody[_ngcontent-%COMP%]   .blockData[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{\n        margin-top: 2%;\n        text-align: center;\n    }\n    .midbody[_ngcontent-%COMP%]   .blockData[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\n        \n        margin-top: 5%;\n        text-align: center;\n        color: orange;\n        font-weight: bolder;\n        font-size: .8em;\n    }\n\n\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ngfactory.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./contact-us.component.css.shim.ngstyle */ "./src/app/contact-us/contact-us.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../header/header.component.ngfactory */ "./src/app/header/header.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var i4 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i5 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i6 = __webpack_require__(/*! ../../../node_modules/@agm/core/directives/map.ngfactory */ "./node_modules/@agm/core/directives/map.ngfactory.js");
var i7 = __webpack_require__(/*! @agm/core/services/managers/info-window-manager */ "@agm/core/services/managers/info-window-manager");
var i8 = __webpack_require__(/*! @agm/core/services/google-maps-api-wrapper */ "@agm/core/services/google-maps-api-wrapper");
var i9 = __webpack_require__(/*! @agm/core/services/managers/marker-manager */ "@agm/core/services/managers/marker-manager");
var i10 = __webpack_require__(/*! @agm/core/services/managers/circle-manager */ "@agm/core/services/managers/circle-manager");
var i11 = __webpack_require__(/*! @agm/core/services/managers/rectangle-manager */ "@agm/core/services/managers/rectangle-manager");
var i12 = __webpack_require__(/*! @agm/core/services/managers/polyline-manager */ "@agm/core/services/managers/polyline-manager");
var i13 = __webpack_require__(/*! @agm/core/services/managers/polygon-manager */ "@agm/core/services/managers/polygon-manager");
var i14 = __webpack_require__(/*! @agm/core/services/managers/kml-layer-manager */ "@agm/core/services/managers/kml-layer-manager");
var i15 = __webpack_require__(/*! @agm/core/services/managers/data-layer-manager */ "@agm/core/services/managers/data-layer-manager");
var i16 = __webpack_require__(/*! @agm/core/services/maps-api-loader/maps-api-loader */ "@agm/core/services/maps-api-loader/maps-api-loader");
var i17 = __webpack_require__(/*! @agm/core/services/fit-bounds */ "@agm/core/services/fit-bounds");
var i18 = __webpack_require__(/*! @agm/core/directives/map */ "@agm/core/directives/map");
var i19 = __webpack_require__(/*! @agm/core/directives/marker */ "@agm/core/directives/marker");
var i20 = __webpack_require__(/*! ./contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
var i21 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i22 = __webpack_require__(/*! ../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var styles_ContactUsComponent = [i0.styles];
var RenderType_ContactUsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ContactUsComponent, data: {} });
exports.RenderType_ContactUsComponent = RenderType_ContactUsComponent;
function View_ContactUsComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { places: 0 }), i1.ɵqud(402653184, 2, { searchElement: 0 }), (_l()(), i1.ɵeld(2, 0, null, null, 1, "sports-social-header", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onresize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i2.View_HeaderComponent_0, i2.RenderType_HeaderComponent)), i1.ɵdid(3, 4308992, null, 0, i3.HeaderComponent, [i4.PropertyService], null, null), (_l()(), i1.ɵeld(4, 0, null, null, 5, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 4, "div", [["class", "headerContent"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Us"])), (_l()(), i1.ɵeld(8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Need an Expert? you are more than welcome to leave your contact info and we will be touch shortly "])), (_l()(), i1.ɵeld(10, 0, null, null, 76, "div", [["class", "userform"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 64, "div", [["class", "left-model"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Send Us a Message"])), (_l()(), i1.ɵeld(14, 0, null, null, 61, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 16).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 16).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onsubmit(i1.ɵnov(_v, 16).value) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(15, 16384, null, 0, i5.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(16, 4210688, [["formdata", 4]], 0, i5.NgForm, [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i5.ControlContainer, null, [i5.NgForm]), i1.ɵdid(18, 16384, null, 0, i5.NgControlStatusGroup, [[4, i5.ControlContainer]], null, null), (_l()(), i1.ɵeld(19, 0, null, null, 10, "label", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" * First Name"])), (_l()(), i1.ɵeld(21, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 7, "input", [["name", "firstname"], ["placeholder", "first-name"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 23)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 23).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 23)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 23)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form.firstname = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(23, 16384, null, 0, i5.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i5.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(24, 16384, null, 0, i5.RequiredValidator, [], { required: [0, "required"] }, null), i1.ɵprd(1024, null, i5.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i5.RequiredValidator]), i1.ɵprd(1024, null, i5.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i5.DefaultValueAccessor]), i1.ɵdid(27, 671744, null, 0, i5.NgModel, [[2, i5.ControlContainer], [6, i5.NG_VALIDATORS], [8, null], [6, i5.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i5.NgControl, null, [i5.NgModel]), i1.ɵdid(29, 16384, null, 0, i5.NgControlStatus, [[4, i5.NgControl]], null, null), (_l()(), i1.ɵeld(30, 0, null, null, 8, "label", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Last Name"])), (_l()(), i1.ɵeld(32, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 5, "input", [["name", "lastname"], ["placeholder", "last-name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 34)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 34).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 34)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 34)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form.lastname = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(34, 16384, null, 0, i5.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i5.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i5.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i5.DefaultValueAccessor]), i1.ɵdid(36, 671744, null, 0, i5.NgModel, [[2, i5.ControlContainer], [8, null], [8, null], [6, i5.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i5.NgControl, null, [i5.NgModel]), i1.ɵdid(38, 16384, null, 0, i5.NgControlStatus, [[4, i5.NgControl]], null, null), (_l()(), i1.ɵeld(39, 0, null, null, 11, "label", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" * Contact Number"])), (_l()(), i1.ɵeld(41, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 8, "input", [["maxlength", "10"], ["name", "contactnumber"], ["placeholder", "0123456789"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 43)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 43).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 43)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 43)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form.contactnumber = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(43, 16384, null, 0, i5.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i5.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(44, 16384, null, 0, i5.RequiredValidator, [], { required: [0, "required"] }, null), i1.ɵdid(45, 540672, null, 0, i5.MaxLengthValidator, [], { maxlength: [0, "maxlength"] }, null), i1.ɵprd(1024, null, i5.NG_VALIDATORS, function (p0_0, p1_0) { return [p0_0, p1_0]; }, [i5.RequiredValidator, i5.MaxLengthValidator]), i1.ɵprd(1024, null, i5.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i5.DefaultValueAccessor]), i1.ɵdid(48, 671744, null, 0, i5.NgModel, [[2, i5.ControlContainer], [6, i5.NG_VALIDATORS], [8, null], [6, i5.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i5.NgControl, null, [i5.NgModel]), i1.ɵdid(50, 16384, null, 0, i5.NgControlStatus, [[4, i5.NgControl]], null, null), (_l()(), i1.ɵeld(51, 0, null, null, 10, "label", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" * Email Id"])), (_l()(), i1.ɵeld(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 7, "input", [["name", "email"], ["placeholder", "abc@gmail.com"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 55)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 55).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 55)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 55)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form.email = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(55, 16384, null, 0, i5.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i5.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(56, 16384, null, 0, i5.RequiredValidator, [], { required: [0, "required"] }, null), i1.ɵprd(1024, null, i5.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i5.RequiredValidator]), i1.ɵprd(1024, null, i5.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i5.DefaultValueAccessor]), i1.ɵdid(59, 671744, null, 0, i5.NgModel, [[2, i5.ControlContainer], [6, i5.NG_VALIDATORS], [8, null], [6, i5.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i5.NgControl, null, [i5.NgModel]), i1.ɵdid(61, 16384, null, 0, i5.NgControlStatus, [[4, i5.NgControl]], null, null), (_l()(), i1.ɵeld(62, 0, null, null, 10, "label", [["class", "msg"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" * Message"])), (_l()(), i1.ɵeld(64, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(65, 0, null, null, 7, "input", [["name", "message"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 66)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 66).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 66)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 66)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form.message = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(66, 16384, null, 0, i5.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i5.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(67, 16384, null, 0, i5.RequiredValidator, [], { required: [0, "required"] }, null), i1.ɵprd(1024, null, i5.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i5.RequiredValidator]), i1.ɵprd(1024, null, i5.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i5.DefaultValueAccessor]), i1.ɵdid(70, 671744, null, 0, i5.NgModel, [[2, i5.ControlContainer], [6, i5.NG_VALIDATORS], [8, null], [6, i5.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i5.NgControl, null, [i5.NgModel]), i1.ɵdid(72, 16384, null, 0, i5.NgControlStatus, [[4, i5.NgControl]], null, null), (_l()(), i1.ɵeld(73, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(74, 0, null, null, 1, "button", [["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Send"])), (_l()(), i1.ɵeld(76, 0, null, null, 10, "div", [["class", "right-model"]], null, null, null, null, null)), (_l()(), i1.ɵeld(77, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Follow Us"])), (_l()(), i1.ɵeld(79, 0, null, null, 1, "a", [["href", "https://www.facebook.com/chaseyoursport/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(80, 0, null, null, 0, "img", [["src", "assets/images/facebook-logo.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(81, 0, null, null, 1, "a", [["href", "https://in.linkedin.com/company/sports-social"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(82, 0, null, null, 0, "img", [["src", "assets/images/linkedin.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(83, 0, null, null, 1, "a", [["href", "https://www.twitter.com/chaseyoursport"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(84, 0, null, null, 0, "img", [["src", "assets/images/twitter3.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(85, 0, null, null, 1, "a", [["href", "https://www.instagram.com/chaseyoursport"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(86, 0, null, null, 0, "img", [["src", "assets/images/instagram-social-network-logo-of-photo-camera.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(87, 0, null, null, 37, "div", [["class", "midbody"]], null, null, null, null, null)), (_l()(), i1.ɵeld(88, 0, null, null, 5, "div", [["class", "blockData"]], null, null, null, null, null)), (_l()(), i1.ɵeld(89, 0, null, null, 0, "img", [["src", "assets/images/home-icon-silhouette.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(90, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["VISIT US"])), (_l()(), i1.ɵeld(92, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Basement,307,chakkarpur,sector28, Gurugram, Haryana 122002 "])), (_l()(), i1.ɵeld(94, 0, null, null, 5, "div", [["class", "blockData"]], null, null, null, null, null)), (_l()(), i1.ɵeld(95, 0, null, null, 0, "img", [["src", "assets/images/call-answer.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(96, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CALL US"])), (_l()(), i1.ɵeld(98, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["+91-8800617124"])), (_l()(), i1.ɵeld(100, 0, null, null, 6, "div", [["class", "blockData"]], null, null, null, null, null)), (_l()(), i1.ɵeld(101, 0, null, null, 0, "img", [["src", "assets/images/envelope.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(102, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" MESSAGE US"])), (_l()(), i1.ɵeld(104, 0, null, null, 2, "a", [["href", "https://mail.google.com/mail/u/0/?tab=rm#inbox"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(105, 0, null, null, 1, "P", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["info@sportsocial.in"])), (_l()(), i1.ɵeld(107, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(108, 0, null, null, 16, "div", [["class", "map"]], null, null, null, null, null)), (_l()(), i1.ɵeld(109, 0, null, null, 15, "agm-map", [], [[2, "sebm-google-map-container", null]], null, null, i6.View_AgmMap_0, i6.RenderType_AgmMap)), i1.ɵprd(4608, null, i7.InfoWindowManager, i7.InfoWindowManager, [i8.GoogleMapsAPIWrapper, i1.NgZone, i9.MarkerManager]), i1.ɵprd(4608, null, i10.CircleManager, i10.CircleManager, [i8.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i11.RectangleManager, i11.RectangleManager, [i8.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i12.PolylineManager, i12.PolylineManager, [i8.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i13.PolygonManager, i13.PolygonManager, [i8.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i14.KmlLayerManager, i14.KmlLayerManager, [i8.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i15.DataLayerManager, i15.DataLayerManager, [i8.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(512, null, i8.GoogleMapsAPIWrapper, i8.GoogleMapsAPIWrapper, [i16.MapsAPILoader, i1.NgZone]), i1.ɵprd(512, null, i17.FitBoundsService, i17.FitBoundsService, [i16.MapsAPILoader]), i1.ɵdid(119, 770048, null, 0, i18.AgmMap, [i1.ElementRef, i8.GoogleMapsAPIWrapper, i17.FitBoundsService], { longitude: [0, "longitude"], latitude: [1, "latitude"], zoom: [2, "zoom"] }, null), i1.ɵprd(512, null, i9.MarkerManager, i9.MarkerManager, [i8.GoogleMapsAPIWrapper, i1.NgZone]), (_l()(), i1.ɵeld(121, 0, null, 0, 3, "agm-marker", [], null, null, null, null, null)), i1.ɵprd(6144, null, i17.FitBoundsAccessor, null, [i19.AgmMarker]), i1.ɵdid(123, 1720320, null, 1, i19.AgmMarker, [i9.MarkerManager], { latitude: [0, "latitude"], longitude: [1, "longitude"] }, null), i1.ɵqud(603979776, 3, { infoWindow: 1 })], function (_ck, _v) { var _co = _v.component; _ck(_v, 3, 0); var currVal_15 = ""; _ck(_v, 24, 0, currVal_15); var currVal_16 = "firstname"; var currVal_17 = _co.form.firstname; _ck(_v, 27, 0, currVal_16, currVal_17); var currVal_25 = "lastname"; var currVal_26 = _co.form.lastname; _ck(_v, 36, 0, currVal_25, currVal_26); var currVal_36 = ""; _ck(_v, 44, 0, currVal_36); var currVal_37 = "10"; _ck(_v, 45, 0, currVal_37); var currVal_38 = "contactnumber"; var currVal_39 = _co.form.contactnumber; _ck(_v, 48, 0, currVal_38, currVal_39); var currVal_48 = ""; _ck(_v, 56, 0, currVal_48); var currVal_49 = "email"; var currVal_50 = _co.form.email; _ck(_v, 59, 0, currVal_49, currVal_50); var currVal_59 = ""; _ck(_v, 67, 0, currVal_59); var currVal_60 = "message"; var currVal_61 = _co.form.message; _ck(_v, 70, 0, currVal_60, currVal_61); var currVal_64 = _co.lng; var currVal_65 = _co.lat; var currVal_66 = _co.zoom; _ck(_v, 119, 0, currVal_64, currVal_65, currVal_66); var currVal_67 = _co.lat; var currVal_68 = _co.lng; _ck(_v, 123, 0, currVal_67, currVal_68); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 18).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 18).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 18).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 18).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 18).ngClassValid; var currVal_5 = i1.ɵnov(_v, 18).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 18).ngClassPending; _ck(_v, 14, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (i1.ɵnov(_v, 24).required ? "" : null); var currVal_8 = i1.ɵnov(_v, 29).ngClassUntouched; var currVal_9 = i1.ɵnov(_v, 29).ngClassTouched; var currVal_10 = i1.ɵnov(_v, 29).ngClassPristine; var currVal_11 = i1.ɵnov(_v, 29).ngClassDirty; var currVal_12 = i1.ɵnov(_v, 29).ngClassValid; var currVal_13 = i1.ɵnov(_v, 29).ngClassInvalid; var currVal_14 = i1.ɵnov(_v, 29).ngClassPending; _ck(_v, 22, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = i1.ɵnov(_v, 38).ngClassUntouched; var currVal_19 = i1.ɵnov(_v, 38).ngClassTouched; var currVal_20 = i1.ɵnov(_v, 38).ngClassPristine; var currVal_21 = i1.ɵnov(_v, 38).ngClassDirty; var currVal_22 = i1.ɵnov(_v, 38).ngClassValid; var currVal_23 = i1.ɵnov(_v, 38).ngClassInvalid; var currVal_24 = i1.ɵnov(_v, 38).ngClassPending; _ck(_v, 33, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_27 = (i1.ɵnov(_v, 44).required ? "" : null); var currVal_28 = (i1.ɵnov(_v, 45).maxlength ? i1.ɵnov(_v, 45).maxlength : null); var currVal_29 = i1.ɵnov(_v, 50).ngClassUntouched; var currVal_30 = i1.ɵnov(_v, 50).ngClassTouched; var currVal_31 = i1.ɵnov(_v, 50).ngClassPristine; var currVal_32 = i1.ɵnov(_v, 50).ngClassDirty; var currVal_33 = i1.ɵnov(_v, 50).ngClassValid; var currVal_34 = i1.ɵnov(_v, 50).ngClassInvalid; var currVal_35 = i1.ɵnov(_v, 50).ngClassPending; _ck(_v, 42, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35); var currVal_40 = (i1.ɵnov(_v, 56).required ? "" : null); var currVal_41 = i1.ɵnov(_v, 61).ngClassUntouched; var currVal_42 = i1.ɵnov(_v, 61).ngClassTouched; var currVal_43 = i1.ɵnov(_v, 61).ngClassPristine; var currVal_44 = i1.ɵnov(_v, 61).ngClassDirty; var currVal_45 = i1.ɵnov(_v, 61).ngClassValid; var currVal_46 = i1.ɵnov(_v, 61).ngClassInvalid; var currVal_47 = i1.ɵnov(_v, 61).ngClassPending; _ck(_v, 54, 0, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47); var currVal_51 = (i1.ɵnov(_v, 67).required ? "" : null); var currVal_52 = i1.ɵnov(_v, 72).ngClassUntouched; var currVal_53 = i1.ɵnov(_v, 72).ngClassTouched; var currVal_54 = i1.ɵnov(_v, 72).ngClassPristine; var currVal_55 = i1.ɵnov(_v, 72).ngClassDirty; var currVal_56 = i1.ɵnov(_v, 72).ngClassValid; var currVal_57 = i1.ɵnov(_v, 72).ngClassInvalid; var currVal_58 = i1.ɵnov(_v, 72).ngClassPending; _ck(_v, 65, 0, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58); var currVal_62 = i1.ɵnov(_v, 16).invalid; _ck(_v, 74, 0, currVal_62); var currVal_63 = true; _ck(_v, 109, 0, currVal_63); }); }
exports.View_ContactUsComponent_0 = View_ContactUsComponent_0;
function View_ContactUsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-contact-us", [], null, null, null, View_ContactUsComponent_0, RenderType_ContactUsComponent)), i1.ɵdid(1, 114688, null, 0, i20.ContactUsComponent, [i21.Http, i22.PostService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ContactUsComponent_Host_0 = View_ContactUsComponent_Host_0;
var ContactUsComponentNgFactory = i1.ɵccf("sports-social-contact-us", i20.ContactUsComponent, View_ContactUsComponent_Host_0, {}, {}, []);
exports.ContactUsComponentNgFactory = ContactUsComponentNgFactory;


/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var core_2 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ngx_google_places_autocomplete_directive_1 = __webpack_require__(/*! ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive */ "ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive");
var http_1 = __webpack_require__(/*! @angular/http */ "@angular/http");
var post_service_1 = __webpack_require__(/*! ../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var contactus2_1 = __webpack_require__(/*! ../contactus2 */ "./src/app/contactus2.ts");
var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(http, post) {
        this.http = http;
        this.post = post;
        this.form = new contactus2_1.Contactus2();
        this.lat = 28.4700264 /*=28.473660*/;
        this.lng = 77.0889223 /*=77.086710*/;
        this.zoom = 15;
    }
    ContactUsComponent.prototype.onsubmit = function (form2) {
        this.post.saveformdata(form2).subscribe(function (res) {
            console.log("this is forom data", res);
            window.location.reload();
        });
    };
    ContactUsComponent.prototype.ngOnInit = function () { };
    return ContactUsComponent;
}());
exports.ContactUsComponent = ContactUsComponent;


/***/ }),

/***/ "./src/app/contactus2.ts":
/*!*******************************!*\
  !*** ./src/app/contactus2.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contactus2 = /** @class */ (function () {
    function Contactus2() {
    }
    return Contactus2;
}());
exports.Contactus2 = Contactus2;


/***/ }),

/***/ "./src/app/footer/footer.component.css.shim.ngstyle.js":
/*!*************************************************************!*\
  !*** ./src/app/footer/footer.component.css.shim.ngstyle.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["footer[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-around;\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    z-index: 20;\n    background-color: white;\n    padding: 0.5%;\n    box-shadow: -1px -1px 4px #888888;\n}\nfooter[_ngcontent-%COMP%]    > .social-handle[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    width: 30px;\n    height: 30px;\n    vertical-align: 55px;\n    cursor: pointer;\n}\nfooter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\n   -webkit-transform: scale(1.1);\n           transform: scale(1.1)\n}\nfooter[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\n    display: inline-block;\n    vertical-align: middle;\n    margin-top: 0.6%;\n    font-size: 0.9em;\n    \n}\na[_ngcontent-%COMP%]{\n    color: #024771;\n    font-weight: 500;\n    text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover{\n    font-weight: 700\n}\n.social-handle[_ngcontent-%COMP%] {\n    text-align: center;\n    height: 30px;\n}\n.social-handle[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n    margin-right: 10px\n}\n@media ( max-width: 720px) {\n   \n}\n@media ( max-width: 980px) {\n    footer[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n    }\n    p[_ngcontent-%COMP%]{\n        margin-right: 2%\n    }\n    .social-handle[_ngcontent-%COMP%] {\n         width: 100%;\n         display: flex;\n         justify-content: space-around\n    }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/footer/footer.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/footer/footer.component.ngfactory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./footer.component.css.shim.ngstyle */ "./src/app/footer/footer.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./footer.component */ "./src/app/footer/footer.component.ts");
var styles_FooterComponent = [i0.styles];
var RenderType_FooterComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_FooterComponent, data: {} });
exports.RenderType_FooterComponent = RenderType_FooterComponent;
function View_FooterComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { footer: 0 }), (_l()(), i1.ɵeld(1, 0, [[1, 0], ["footer", 1]], null, 37, "footer", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "a", [["routerLink", "/contactus"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(4, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Contact Us"])), (_l()(), i1.ɵeld(6, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 1, "a", [["href", "https://goo.gl/qrgCz5"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["App"])), (_l()(), i1.ɵeld(9, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 1, "a", [["href", "https://www.chaseyoursport.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Blog"])), (_l()(), i1.ɵeld(12, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 2, "a", [["routerLink", "/Terms Of Service"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(14, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Terms and conditions"])), (_l()(), i1.ɵeld(16, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 2, "a", [["routerLink", "/Privacy Policy"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 18).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(18, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Privacy Policy"])), (_l()(), i1.ɵeld(20, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 2, "a", [["routerLink", "/OpenArena"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 22).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(22, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Open Arena"])), (_l()(), i1.ɵeld(24, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 2, "a", [["routerLink", "/AroundTheWorld"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 26).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(26, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Around The World"])), (_l()(), i1.ɵeld(28, 0, null, null, 10, "div", [["class", "social-handle"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 1, "a", [["href", "https://www.facebook.com/chaseyoursport"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/facebook.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 1, "a", [["href", "https://www.twitter.com/chaseyoursport"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/twitter.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 1, "a", [["href", "https://www.youtube.com/channel/UC8dRPjyfNkxmOozPuUs5YVQ"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/youtube.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 1, "a", [["href", "https://www.instagram.com/chaseyoursport"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/instagram.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 1, "a", [["href", "https://www.quora.com/topic/Sports-Social-Indias-First-Sports-Social-Network"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/quora.png"]], null, null, null, null, null))], function (_ck, _v) { var currVal_2 = "/contactus"; _ck(_v, 4, 0, currVal_2); var currVal_5 = "/Terms Of Service"; _ck(_v, 14, 0, currVal_5); var currVal_8 = "/Privacy Policy"; _ck(_v, 18, 0, currVal_8); var currVal_11 = "/OpenArena"; _ck(_v, 22, 0, currVal_11); var currVal_14 = "/AroundTheWorld"; _ck(_v, 26, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 4).target; var currVal_1 = i1.ɵnov(_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵnov(_v, 14).target; var currVal_4 = i1.ɵnov(_v, 14).href; _ck(_v, 13, 0, currVal_3, currVal_4); var currVal_6 = i1.ɵnov(_v, 18).target; var currVal_7 = i1.ɵnov(_v, 18).href; _ck(_v, 17, 0, currVal_6, currVal_7); var currVal_9 = i1.ɵnov(_v, 22).target; var currVal_10 = i1.ɵnov(_v, 22).href; _ck(_v, 21, 0, currVal_9, currVal_10); var currVal_12 = i1.ɵnov(_v, 26).target; var currVal_13 = i1.ɵnov(_v, 26).href; _ck(_v, 25, 0, currVal_12, currVal_13); }); }
exports.View_FooterComponent_0 = View_FooterComponent_0;
function View_FooterComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-footer", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onscroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_FooterComponent_0, RenderType_FooterComponent)), i1.ɵdid(1, 114688, null, 0, i4.FooterComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_FooterComponent_Host_0 = View_FooterComponent_Host_0;
var FooterComponentNgFactory = i1.ɵccf("sports-social-footer", i4.FooterComponent, View_FooterComponent_Host_0, {}, {}, []);
exports.FooterComponentNgFactory = FooterComponentNgFactory;


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.onscroll = function () {
        // console.log(screenY, scrollY);
    };
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/footer/footer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
exports.FooterModule = FooterModule;


/***/ }),

/***/ "./src/app/gallery/gallery.component.css.shim.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/gallery/gallery.component.css.shim.ngstyle.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".gallery[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n}\n\n.left[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 5px;\n    top: 45%;\n    cursor: pointer;\n}\n\n.right[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 5px;\n    top: 45%;\n    cursor: pointer;\n}\n\n.loader[_ngcontent-%COMP%] {\n    position: absolute;\n    top:60%;\n    width:8%;\n    left:46% ;\n}\n\n.gallery-item[_ngcontent-%COMP%]{\n    width: 100%;\n}\n\n.image-action[_ngcontent-%COMP%]{\n    width: 100%;\n    position: absolute;\n    left:0;\n    right: 0;\n    bottom: 0px;\n    background-color: #ffa600;\n    opacity: 0.7\n}\n\n.image-action[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 10%;\n    display: inline-block;\n    vertical-align: middle;\n    margin: 2%;\n}\n\n.image-action[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 2%;\n    width: 20px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\nspan[_ngcontent-%COMP%] {\n    color: #888888;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.text[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/gallery/gallery.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/gallery/gallery.component.ngfactory.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./gallery.component.css.shim.ngstyle */ "./src/app/gallery/gallery.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./gallery.component */ "./src/app/gallery/gallery.component.ts");
var styles_GalleryComponent = [i0.styles];
var RenderType_GalleryComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_GalleryComponent, data: {} });
exports.RenderType_GalleryComponent = RenderType_GalleryComponent;
function View_GalleryComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "img", [["class", "left"], ["src", "/assets/images/left.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.left() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_GalleryComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "img", [["alt", ""], ["class", "loader"], ["src", "/assets/images/sports-social-loading.gif"]], null, null, null, null, null))], null, null); }
function View_GalleryComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "img", [["class", "right"], ["src", "/assets/images/right.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.right() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_GalleryComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "p", [["class", "text"]], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.text; _ck(_v, 1, 0, currVal_0); }); }
function View_GalleryComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 16, "div", [["class", "gallery"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GalleryComponent_1)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GalleryComponent_2)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GalleryComponent_3)), i1.ɵdid(6, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(7, 0, null, null, 8, "div", [["class", "image-action"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 3, "div", [["class", "like"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/sports-social-like.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(11, null, ["", ""])), (_l()(), i1.ɵeld(12, 0, null, null, 3, "div", [["class", "comment"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/sports-social-comment.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(15, null, ["", ""])), (_l()(), i1.ɵeld(16, 0, null, null, 0, "img", [["class", "gallery-item"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GalleryComponent_4)), i1.ɵdid(18, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hasprevious(); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.loading; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.hasnext(); _ck(_v, 6, 0, currVal_2); var currVal_6 = (_co.text !== undefined); _ck(_v, 18, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.likeCount; _ck(_v, 11, 0, currVal_3); var currVal_4 = _co.commentCount; _ck(_v, 15, 0, currVal_4); var currVal_5 = i1.ɵinlineInterpolate(1, "", _co.image, ""); _ck(_v, 16, 0, currVal_5); }); }
exports.View_GalleryComponent_0 = View_GalleryComponent_0;
function View_GalleryComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-gallery", [], null, null, null, View_GalleryComponent_0, RenderType_GalleryComponent)), i1.ɵdid(1, 114688, null, 0, i3.GalleryComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_GalleryComponent_Host_0 = View_GalleryComponent_Host_0;
var GalleryComponentNgFactory = i1.ɵccf("sports-social-gallery", i3.GalleryComponent, View_GalleryComponent_Host_0, { images: "images" }, {}, []);
exports.GalleryComponentNgFactory = GalleryComponentNgFactory;


/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.images = [];
        this.loading = false;
        this.firstImageLoaded = false;
        this.i = 0;
    }
    GalleryComponent.prototype.addimage = function (path) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                resolve(path);
            };
            img.onerror = function () {
                resolve('/assets/images/default-image.png');
            };
            img.src = path;
        });
    };
    GalleryComponent.prototype.left = function () {
        var _this = this;
        this.loading = true;
        this.i = this.i - 1;
        this.addimage(this.images[this.i].image).then(function (path) {
            _this.loading = false;
            _this.image = path;
            _this.likeCount = _this.images[_this.i].likeCount;
            _this.commentCount = _this.images[_this.i].commentCount;
            _this.text = _this.images[_this.i].text;
        });
    };
    GalleryComponent.prototype.right = function () {
        var _this = this;
        this.loading = true;
        this.i = this.i + 1;
        if (this.i < this.images.length) {
            this.addimage(this.images[this.i].image).then(function (path) {
                _this.loading = false;
                _this.image = path;
                _this.likeCount = _this.images[_this.i].likeCount;
                _this.commentCount = _this.images[_this.i].commentCount;
                _this.text = _this.images[_this.i].text;
            });
        }
        else {
            this.loading = false;
        }
    };
    GalleryComponent.prototype.hasnext = function () {
        if (this.images.length > 1 && this.i < this.images.length) {
            return true;
        }
        return false;
    };
    GalleryComponent.prototype.hasprevious = function () {
        if (this.i > 0) {
            return true;
        }
        return false;
    };
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images = this.images.reverse();
        this.loading = true;
        console.log(this.images);
        this.addimage(this.images[0].image).then(function (path) {
            _this.loading = false;
            _this.firstImageLoaded = true;
            _this.image = path;
            _this.likeCount = _this.images[_this.i].likeCount;
            _this.commentCount = _this.images[_this.i].commentCount;
            _this.text = _this.images[_this.i].text;
        });
    };
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;


/***/ }),

/***/ "./src/app/gallery/gallery.module.ts":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    return GalleryModule;
}());
exports.GalleryModule = GalleryModule;


/***/ }),

/***/ "./src/app/global-feed/global-match-feed/global-match-feed.component.css.ngstyle.js":
/*!******************************************************************************************!*\
  !*** ./src/app/global-feed/global-match-feed/global-match-feed.component.css.ngstyle.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["*{\n    box-sizing: border-box;\n}\n\n#col-4{\n    margin-left:3%;\n    width:30%;\n}\n\n@media screen and (max-width:768px){\n    #col-4{\n        width:48%;\n        margin-left:1%;\n    }\n}\n\n@media screen and (max-width:500px){\n  #col-4{\n      width:100%;\n  }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/global-feed/global-match-feed/global-match-feed.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/global-feed/global-match-feed/global-match-feed.component.ngfactory.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./global-match-feed.component.css.ngstyle */ "./src/app/global-feed/global-match-feed/global-match-feed.component.css.ngstyle.js");
var i1 = __webpack_require__(/*! ../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css.ngstyle */ "./node_modules/ng-masonry-grid/ng-masonry-grid.css.ngstyle.js");
var i2 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i3 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var i4 = __webpack_require__(/*! ../../cards/match-card/match-card.component.ngfactory */ "./src/app/cards/match-card/match-card.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../../cards/match-card/match-card.component */ "./src/app/cards/match-card/match-card.component.ts");
var i6 = __webpack_require__(/*! ../../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var i7 = __webpack_require__(/*! ../../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var i8 = __webpack_require__(/*! ../../shared/services/pop-up.service */ "./src/app/shared/services/pop-up.service.ts");
var i9 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i10 = __webpack_require__(/*! ../../header/header.component.ngfactory */ "./src/app/header/header.component.ngfactory.js");
var i11 = __webpack_require__(/*! ../../header/header.component */ "./src/app/header/header.component.ts");
var i12 = __webpack_require__(/*! ../../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i13 = __webpack_require__(/*! ../../carousel/carousel.component.ngfactory */ "./src/app/carousel/carousel.component.ngfactory.js");
var i14 = __webpack_require__(/*! ../../carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
var i15 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i16 = __webpack_require__(/*! ../../navigation-bar/navigation-bar.component.ngfactory */ "./src/app/navigation-bar/navigation-bar.component.ngfactory.js");
var i17 = __webpack_require__(/*! ../../navigation-bar/navigation-bar.component */ "./src/app/navigation-bar/navigation-bar.component.ts");
var i18 = __webpack_require__(/*! ../../../../node_modules/ng-masonry-grid/ng-masonry-grid.ngfactory */ "./node_modules/ng-masonry-grid/ng-masonry-grid.ngfactory.js");
var i19 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i20 = __webpack_require__(/*! ../../footer/footer.component.ngfactory */ "./src/app/footer/footer.component.ngfactory.js");
var i21 = __webpack_require__(/*! ../../footer/footer.component */ "./src/app/footer/footer.component.ts");
var i22 = __webpack_require__(/*! ./global-match-feed.component */ "./src/app/global-feed/global-match-feed/global-match-feed.component.ts");
var i23 = __webpack_require__(/*! ../../shared/services/match-data.service */ "./src/app/shared/services/match-data.service.ts");
var styles_GlobalMatchFeedComponent = [i0.styles, i1.styles];
var RenderType_GlobalMatchFeedComponent = i2.ɵcrt({ encapsulation: 2, styles: styles_GlobalMatchFeedComponent, data: {} });
exports.RenderType_GlobalMatchFeedComponent = RenderType_GlobalMatchFeedComponent;
function View_GlobalMatchFeedComponent_1(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 0, "img", [["alt", ""], ["class", "spinner"], ["src", "assets/images/sports-social-loading.gif"]], null, null, null, null, null))], null, null); }
function View_GlobalMatchFeedComponent_2(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 3, "ng-masonry-grid-item", [["id", "col-4"]], null, null, null, null, null)), i2.ɵdid(1, 4407296, null, 0, i3.NgMasonryGridDirective, [i2.ElementRef, i3.NgMasonryGridComponent, i2.PLATFORM_ID, i3.NgMasonryGridService], null, null), (_l()(), i2.ɵeld(2, 0, null, null, 1, "sports-social-match-card", [], null, null, null, i4.View_MatchCardComponent_0, i4.RenderType_MatchCardComponent)), i2.ɵdid(3, 114688, [["matchCard", 4]], 0, i5.MatchCardComponent, [i2.Renderer2, i6.TimeService, i2.ComponentFactoryResolver, i7.PostService, i8.PopUpService, i9.Router, i9.ActivatedRoute], { creatorName: [0, "creatorName"], creatorImage: [1, "creatorImage"], eventId: [2, "eventId"], doerId: [3, "doerId"], doerName: [4, "doerName"], doerPic: [5, "doerPic"], matchImage: [6, "matchImage"], matchText: [7, "matchText"], joineeCount: [8, "joineeCount"], commentCount: [9, "commentCount"], promoteCount: [10, "promoteCount"], watchCount: [11, "watchCount"], activityName: [12, "activityName"], activityDate: [13, "activityDate"], matchDate: [14, "matchDate"], gameName: [15, "gameName"], venueName: [16, "venueName"], restrictionCount: [17, "restrictionCount"] }, null)], function (_ck, _v) { _ck(_v, 1, 0); var currVal_0 = _v.context.$implicit.creatorName; var currVal_1 = _v.context.$implicit.creatorImage; var currVal_2 = _v.context.$implicit.eventId; var currVal_3 = _v.context.$implicit.doerId; var currVal_4 = _v.context.$implicit.doerName; var currVal_5 = _v.context.$implicit.doerPic; var currVal_6 = _v.context.$implicit.matchImage; var currVal_7 = _v.context.$implicit.matchText; var currVal_8 = _v.context.$implicit.joineeCount; var currVal_9 = _v.context.$implicit.commentCount; var currVal_10 = _v.context.$implicit.promoteCount; var currVal_11 = _v.context.$implicit.watchCount; var currVal_12 = _v.context.$implicit.activityName; var currVal_13 = _v.context.$implicit.activityDate; var currVal_14 = _v.context.$implicit.matchDate; var currVal_15 = _v.context.$implicit.gameName; var currVal_16 = _v.context.$implicit.venueName; var currVal_17 = _v.context.$implicit.restrictionCount; _ck(_v, 3, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17]); }, null); }
function View_GlobalMatchFeedComponent_0(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 1, "sports-social-header", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 1).onresize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i10.View_HeaderComponent_0, i10.RenderType_HeaderComponent)), i2.ɵdid(1, 4308992, null, 0, i11.HeaderComponent, [i12.PropertyService], null, null), (_l()(), i2.ɵeld(2, 0, null, null, 1, "sports-social-carousel", [], null, [["window", "resize"], ["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 3).onresize() !== false);
        ad = (pd_0 && ad);
    } if (("window:scroll" === en)) {
        var pd_1 = (i2.ɵnov(_v, 3).onscroll() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i13.View_CarouselComponent_0, i13.RenderType_CarouselComponent)), i2.ɵdid(3, 114688, null, 0, i14.CarouselComponent, [i2.Renderer2, i12.PropertyService, i12.PropertyService, i15.Title, i15.Meta], null, null), (_l()(), i2.ɵeld(4, 0, null, null, 1, "sports-social-navigation-bar", [], null, [["window", "resize"], ["window", "scroll"], [null, "mouseover"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 5).onresize() !== false);
        ad = (pd_0 && ad);
    } if (("window:scroll" === en)) {
        var pd_1 = (i2.ɵnov(_v, 5).onscroll() !== false);
        ad = (pd_1 && ad);
    } if (("mouseover" === en)) {
        var pd_2 = (i2.ɵnov(_v, 5).onHover($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, i16.View_NavigationBarComponent_0, i16.RenderType_NavigationBarComponent)), i2.ɵdid(5, 114688, null, 0, i17.NavigationBarComponent, [i12.PropertyService, i12.PropertyService, i2.Renderer2, i9.ActivatedRoute, i2.NgZone, i15.Meta, i15.Title], null, null), (_l()(), i2.ɵeld(6, 0, null, null, 6, "ng-masonry-grid", [], null, null, null, i18.View_NgMasonryGridComponent_0, i18.RenderType_NgMasonryGridComponent)), i2.ɵdid(7, 1294336, null, 0, i3.NgMasonryGridComponent, [i2.PLATFORM_ID, i2.ElementRef, i3.NgMasonryGridService], { masonryOptions: [0, "masonryOptions"], useAnimation: [1, "useAnimation"], useImagesLoaded: [2, "useImagesLoaded"] }, null), i2.ɵpod(8, { transitionDuration: 0, gutter: 1 }), (_l()(), i2.ɵand(16777216, null, 0, 1, null, View_GlobalMatchFeedComponent_1)), i2.ɵdid(10, 16384, null, 0, i19.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i2.ɵand(16777216, null, 0, 1, null, View_GlobalMatchFeedComponent_2)), i2.ɵdid(12, 278528, null, 0, i19.NgForOf, [i2.ViewContainerRef, i2.TemplateRef, i2.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i2.ɵeld(13, 0, null, null, 1, "sports-social-footer", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i2.ɵnov(_v, 14).onscroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i20.View_FooterComponent_0, i20.RenderType_FooterComponent)), i2.ɵdid(14, 114688, null, 0, i21.FooterComponent, [], null, null), (_l()(), i2.ɵeld(15, 0, [["openMatchCard", 1]], null, 0, "template", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); var currVal_0 = _ck(_v, 8, 0, "0.4s", 2); var currVal_1 = true; var currVal_2 = true; _ck(_v, 7, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = (_co.Match.length == 0); _ck(_v, 10, 0, currVal_3); var currVal_4 = _co.Match; _ck(_v, 12, 0, currVal_4); _ck(_v, 14, 0); }, null); }
exports.View_GlobalMatchFeedComponent_0 = View_GlobalMatchFeedComponent_0;
function View_GlobalMatchFeedComponent_Host_0(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 1, "sports-social-global-match-feed", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i2.ɵnov(_v, 1).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_GlobalMatchFeedComponent_0, RenderType_GlobalMatchFeedComponent)), i2.ɵdid(1, 245760, null, 0, i22.GlobalMatchFeedComponent, [i2.Renderer2, i23.MatchDataService, i15.Title, i15.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_GlobalMatchFeedComponent_Host_0 = View_GlobalMatchFeedComponent_Host_0;
var GlobalMatchFeedComponentNgFactory = i2.ɵccf("sports-social-global-match-feed", i22.GlobalMatchFeedComponent, View_GlobalMatchFeedComponent_Host_0, {}, {}, []);
exports.GlobalMatchFeedComponentNgFactory = GlobalMatchFeedComponentNgFactory;


/***/ }),

/***/ "./src/app/global-feed/global-match-feed/global-match-feed.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/global-feed/global-match-feed/global-match-feed.component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ng_masonry_grid_1 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var match_data_service_1 = __webpack_require__(/*! ../../shared/services/match-data.service */ "./src/app/shared/services/match-data.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var GlobalMatchFeedComponent = /** @class */ (function () {
    function GlobalMatchFeedComponent(renderer, matchData, pagetitle, metaservice) {
        this.renderer = renderer;
        this.matchData = matchData;
        this.pagetitle = pagetitle;
        this.metaservice = metaservice;
        this.title = "Arena | Sports Social";
        this.metakey = "Open Arena,Sports Social,Sports Arena nearby,Sports events nearby,Sports Activities nearby,Sports Grounds nearby, Connect to Sports players nearby,Find Sports players nearby";
        this.metades = "See What's going around you in sports in the open Arena. Use Arena to find,connect,play, follow matches, players, academies, coaches and events in your favorite sport in your locality and around the world | stay connected to your sports world.";
        this.Match = [];
        this.prevPageNo = 0;
        this.nextPageNo = 0;
    }
    GlobalMatchFeedComponent.prototype.globalMatchFeed = function (pageNo) {
        var _this = this;
        this.matchData.globalMatchFeed(this.nextPageNo, 0).then(function (match) {
            _this.Match = _this.Match.concat(match);
        }).catch(function (err) {
            console.log(err);
        });
    };
    GlobalMatchFeedComponent.prototype.nextPage = function (pageNo) {
        this.prevPageNo = pageNo;
        this.globalMatchFeed(pageNo);
    };
    GlobalMatchFeedComponent.prototype.onWindowScroll = function (event) {
        // console.log(Math.floor(scrollY / 1200));
        this.nextPageNo = Math.floor(scrollY / 1200);
        if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo) {
            this.nextPage(this.nextPageNo);
        }
    };
    GlobalMatchFeedComponent.prototype.ngOnInit = function () {
        this.globalMatchFeed(this.nextPageNo);
        this.pagetitle.setTitle(this.title);
        this.metaservice.updateTag({ name: 'title', content: this.title });
        this.metaservice.updateTag({ name: 'keywords', content: this.metakey });
        this.metaservice.updateTag({ name: 'description', content: this.metades });
        this.metaservice.updateTag({ property: 'og:title', content: this.title });
        this.metaservice.updateTag({ property: 'og:description', content: this.metades });
        this.metaservice.updateTag({ property: 'og:keywords', content: this.metakey });
    };
    GlobalMatchFeedComponent.prototype.ngOnDestroy = function () {
        if (this._masonry) {
            this._removeAllSubscription.unsubscribe();
            this._removeItemSubscription.unsubscribe();
            this._removeFirstItemSubscription.unsubscribe();
        }
    };
    return GlobalMatchFeedComponent;
}());
exports.GlobalMatchFeedComponent = GlobalMatchFeedComponent;


/***/ }),

/***/ "./src/app/global-feed/global-match-feed/global-match-feed.module.ngfactory.js":
/*!*************************************************************************************!*\
  !*** ./src/app/global-feed/global-match-feed/global-match-feed.module.ngfactory.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./global-match-feed.module */ "./src/app/global-feed/global-match-feed/global-match-feed.module.ts");
var i2 = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./global-match-feed.component.ngfactory */ "./src/app/global-feed/global-match-feed/global-match-feed.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var i6 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i7 = __webpack_require__(/*! ../../gallery/gallery.module */ "./src/app/gallery/gallery.module.ts");
var i8 = __webpack_require__(/*! ../../open-cards/open-match-card/open-match-card.module */ "./src/app/open-cards/open-match-card/open-match-card.module.ts");
var i9 = __webpack_require__(/*! ../../cards/match-card/match-card.module */ "./src/app/cards/match-card/match-card.module.ts");
var i10 = __webpack_require__(/*! ../../header/header.module */ "./src/app/header/header.module.ts");
var i11 = __webpack_require__(/*! ../../footer/footer.module */ "./src/app/footer/footer.module.ts");
var i12 = __webpack_require__(/*! ../../navigation-bar/navigation-bar.module */ "./src/app/navigation-bar/navigation-bar.module.ts");
var i13 = __webpack_require__(/*! ../../carousel/carousel.module */ "./src/app/carousel/carousel.module.ts");
var i14 = __webpack_require__(/*! ./global-match-feed.component */ "./src/app/global-feed/global-match-feed/global-match-feed.component.ts");
var GlobalMatchFeedModuleNgFactory = i0.ɵcmf(i1.GlobalMatchFeedModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.GlobalMatchFeedComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i5.NgMasonryGridService, i5.NgMasonryGridService, [i0.PLATFORM_ID]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i6.RouterModule, i6.RouterModule, [[2, i6.ɵangular_packages_router_router_a], [2, i6.Router]]), i0.ɵmpd(1073742336, i7.GalleryModule, i7.GalleryModule, []), i0.ɵmpd(1073742336, i8.OpenMatchCardModule, i8.OpenMatchCardModule, []), i0.ɵmpd(1073742336, i9.MatchCardModule, i9.MatchCardModule, []), i0.ɵmpd(1073742336, i10.HeaderModule, i10.HeaderModule, []), i0.ɵmpd(1073742336, i11.FooterModule, i11.FooterModule, []), i0.ɵmpd(1073742336, i12.NavigationBarModule, i12.NavigationBarModule, []), i0.ɵmpd(1073742336, i13.CarouselModule, i13.CarouselModule, []), i0.ɵmpd(1073742336, i5.NgMasonryGridModule, i5.NgMasonryGridModule, []), i0.ɵmpd(1073742336, i1.GlobalMatchFeedModule, i1.GlobalMatchFeedModule, []), i0.ɵmpd(1024, i6.ROUTES, function () { return [[{ path: "", component: i14.GlobalMatchFeedComponent }]]; }, [])]); });
exports.GlobalMatchFeedModuleNgFactory = GlobalMatchFeedModuleNgFactory;


/***/ }),

/***/ "./src/app/global-feed/global-match-feed/global-match-feed.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/global-feed/global-match-feed/global-match-feed.module.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GlobalMatchFeedModule = /** @class */ (function () {
    function GlobalMatchFeedModule() {
    }
    return GlobalMatchFeedModule;
}());
exports.GlobalMatchFeedModule = GlobalMatchFeedModule;


/***/ }),

/***/ "./src/app/global-feed/global-news-feed/global-news-feed.component.css.ngstyle.js":
/*!****************************************************************************************!*\
  !*** ./src/app/global-feed/global-news-feed/global-news-feed.component.css.ngstyle.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["*{\n    box-sizing: border-box;\n}\n\n#col-4{\n    margin-left:3%;\n    width:30%;\n    padding-bottom: 3%;\n    border-radius: 3%;\n}\n\n@media screen and (max-width:768px){\n    #col-4{\n        width:48%;\n        margin-left:1%;\n    }\n}\n\n@media screen and (max-width:500px){\n  #col-4{\n      width:100%;\n  }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/global-feed/global-news-feed/global-news-feed.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/global-feed/global-news-feed/global-news-feed.component.ngfactory.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./global-news-feed.component.css.ngstyle */ "./src/app/global-feed/global-news-feed/global-news-feed.component.css.ngstyle.js");
var i1 = __webpack_require__(/*! ../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css.ngstyle */ "./node_modules/ng-masonry-grid/ng-masonry-grid.css.ngstyle.js");
var i2 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i3 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var i4 = __webpack_require__(/*! ../../cards/news-card/news-card.component.ngfactory */ "./src/app/cards/news-card/news-card.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../../cards/news-card/news-card.component */ "./src/app/cards/news-card/news-card.component.ts");
var i6 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i7 = __webpack_require__(/*! ../../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var i8 = __webpack_require__(/*! ../../header/header.component.ngfactory */ "./src/app/header/header.component.ngfactory.js");
var i9 = __webpack_require__(/*! ../../header/header.component */ "./src/app/header/header.component.ts");
var i10 = __webpack_require__(/*! ../../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i11 = __webpack_require__(/*! ../../carousel/carousel.component.ngfactory */ "./src/app/carousel/carousel.component.ngfactory.js");
var i12 = __webpack_require__(/*! ../../carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
var i13 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i14 = __webpack_require__(/*! ../../navigation-bar/navigation-bar.component.ngfactory */ "./src/app/navigation-bar/navigation-bar.component.ngfactory.js");
var i15 = __webpack_require__(/*! ../../navigation-bar/navigation-bar.component */ "./src/app/navigation-bar/navigation-bar.component.ts");
var i16 = __webpack_require__(/*! ../../../../node_modules/ng-masonry-grid/ng-masonry-grid.ngfactory */ "./node_modules/ng-masonry-grid/ng-masonry-grid.ngfactory.js");
var i17 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i18 = __webpack_require__(/*! ../../footer/footer.component.ngfactory */ "./src/app/footer/footer.component.ngfactory.js");
var i19 = __webpack_require__(/*! ../../footer/footer.component */ "./src/app/footer/footer.component.ts");
var i20 = __webpack_require__(/*! ./global-news-feed.component */ "./src/app/global-feed/global-news-feed/global-news-feed.component.ts");
var i21 = __webpack_require__(/*! ../../shared/services/news.service */ "./src/app/shared/services/news.service.ts");
var styles_GlobalNewsFeedComponent = [i0.styles, i1.styles];
var RenderType_GlobalNewsFeedComponent = i2.ɵcrt({ encapsulation: 2, styles: styles_GlobalNewsFeedComponent, data: {} });
exports.RenderType_GlobalNewsFeedComponent = RenderType_GlobalNewsFeedComponent;
function View_GlobalNewsFeedComponent_1(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 0, "img", [["alt", ""], ["class", "spinner"], ["src", "assets/images/sports-social-loading.gif"]], null, null, null, null, null))], null, null); }
function View_GlobalNewsFeedComponent_2(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 3, "ng-masonry-grid-item", [["id", "col-4"]], null, null, null, null, null)), i2.ɵdid(1, 4407296, null, 0, i3.NgMasonryGridDirective, [i2.ElementRef, i3.NgMasonryGridComponent, i2.PLATFORM_ID, i3.NgMasonryGridService], null, null), (_l()(), i2.ɵeld(2, 0, null, null, 1, "sports-social-news-card", [], null, null, null, i4.View_NewsCardComponent_0, i4.RenderType_NewsCardComponent)), i2.ɵdid(3, 114688, null, 0, i5.NewsCardComponent, [i2.Renderer2, i6.Router, i7.TimeService], { newsId: [0, "newsId"], newsImage: [1, "newsImage"], sourceImage: [2, "sourceImage"], sourceName: [3, "sourceName"], desc: [4, "desc"], likeCount: [5, "likeCount"], shareCount: [6, "shareCount"], commentCount: [7, "commentCount"], url: [8, "url"], insertedDate: [9, "insertedDate"], publishedAt: [10, "publishedAt"], title: [11, "title"] }, null)], function (_ck, _v) { _ck(_v, 1, 0); var currVal_0 = _v.context.$implicit.newsId; var currVal_1 = _v.context.$implicit.newsImage; var currVal_2 = _v.context.$implicit.sourceImage; var currVal_3 = _v.context.$implicit.source; var currVal_4 = _v.context.$implicit.desc; var currVal_5 = _v.context.$implicit.likeCount; var currVal_6 = _v.context.$implicit.shareCount; var currVal_7 = _v.context.$implicit.commentCount; var currVal_8 = _v.context.$implicit.url; var currVal_9 = _v.context.$implicit.insertedDate; var currVal_10 = _v.context.$implicit.publishedAt; var currVal_11 = _v.context.$implicit.title; _ck(_v, 3, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11]); }, null); }
function View_GlobalNewsFeedComponent_0(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 1, "sports-social-header", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 1).onresize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_HeaderComponent_0, i8.RenderType_HeaderComponent)), i2.ɵdid(1, 4308992, null, 0, i9.HeaderComponent, [i10.PropertyService], null, null), (_l()(), i2.ɵeld(2, 0, null, null, 1, "sports-social-carousel", [], null, [["window", "resize"], ["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 3).onresize() !== false);
        ad = (pd_0 && ad);
    } if (("window:scroll" === en)) {
        var pd_1 = (i2.ɵnov(_v, 3).onscroll() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i11.View_CarouselComponent_0, i11.RenderType_CarouselComponent)), i2.ɵdid(3, 114688, null, 0, i12.CarouselComponent, [i2.Renderer2, i10.PropertyService, i10.PropertyService, i13.Title, i13.Meta], null, null), (_l()(), i2.ɵeld(4, 0, null, null, 1, "sports-social-navigation-bar", [], null, [["window", "resize"], ["window", "scroll"], [null, "mouseover"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 5).onresize() !== false);
        ad = (pd_0 && ad);
    } if (("window:scroll" === en)) {
        var pd_1 = (i2.ɵnov(_v, 5).onscroll() !== false);
        ad = (pd_1 && ad);
    } if (("mouseover" === en)) {
        var pd_2 = (i2.ɵnov(_v, 5).onHover($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, i14.View_NavigationBarComponent_0, i14.RenderType_NavigationBarComponent)), i2.ɵdid(5, 114688, null, 0, i15.NavigationBarComponent, [i10.PropertyService, i10.PropertyService, i2.Renderer2, i6.ActivatedRoute, i2.NgZone, i13.Meta, i13.Title], null, null), (_l()(), i2.ɵeld(6, 0, null, null, 6, "ng-masonry-grid", [], null, null, null, i16.View_NgMasonryGridComponent_0, i16.RenderType_NgMasonryGridComponent)), i2.ɵdid(7, 1294336, null, 0, i3.NgMasonryGridComponent, [i2.PLATFORM_ID, i2.ElementRef, i3.NgMasonryGridService], { masonryOptions: [0, "masonryOptions"], useAnimation: [1, "useAnimation"], useImagesLoaded: [2, "useImagesLoaded"] }, null), i2.ɵpod(8, { transitionDuration: 0, gutter: 1 }), (_l()(), i2.ɵand(16777216, null, 0, 1, null, View_GlobalNewsFeedComponent_1)), i2.ɵdid(10, 16384, null, 0, i17.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i2.ɵand(16777216, null, 0, 1, null, View_GlobalNewsFeedComponent_2)), i2.ɵdid(12, 278528, null, 0, i17.NgForOf, [i2.ViewContainerRef, i2.TemplateRef, i2.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i2.ɵeld(13, 0, null, null, 1, "sports-social-footer", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i2.ɵnov(_v, 14).onscroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i18.View_FooterComponent_0, i18.RenderType_FooterComponent)), i2.ɵdid(14, 114688, null, 0, i19.FooterComponent, [], null, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); var currVal_0 = _ck(_v, 8, 0, "0.4s", 2); var currVal_1 = true; var currVal_2 = true; _ck(_v, 7, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = (_co.News.length == 0); _ck(_v, 10, 0, currVal_3); var currVal_4 = _co.News; _ck(_v, 12, 0, currVal_4); _ck(_v, 14, 0); }, null); }
exports.View_GlobalNewsFeedComponent_0 = View_GlobalNewsFeedComponent_0;
function View_GlobalNewsFeedComponent_Host_0(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 1, "sports-social-global-news-feed", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i2.ɵnov(_v, 1).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_GlobalNewsFeedComponent_0, RenderType_GlobalNewsFeedComponent)), i2.ɵdid(1, 245760, null, 0, i20.GlobalNewsFeedComponent, [i21.NewsService, i2.Renderer2, i13.Title, i13.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_GlobalNewsFeedComponent_Host_0 = View_GlobalNewsFeedComponent_Host_0;
var GlobalNewsFeedComponentNgFactory = i2.ɵccf("sports-social-global-news-feed", i20.GlobalNewsFeedComponent, View_GlobalNewsFeedComponent_Host_0, {}, {}, []);
exports.GlobalNewsFeedComponentNgFactory = GlobalNewsFeedComponentNgFactory;


/***/ }),

/***/ "./src/app/global-feed/global-news-feed/global-news-feed.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/global-feed/global-news-feed/global-news-feed.component.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ng_masonry_grid_1 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var news_service_1 = __webpack_require__(/*! ../../shared/services/news.service */ "./src/app/shared/services/news.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var GlobalNewsFeedComponent = /** @class */ (function () {
    function GlobalNewsFeedComponent(newsData, renderer, pagetitle, metaservice) {
        this.newsData = newsData;
        this.renderer = renderer;
        this.pagetitle = pagetitle;
        this.metaservice = metaservice;
        this.title = "Around the World | Sports Social";
        this.metakey = "Sports news from around the world,latest sports news,latest cricket news,football news,tennis news,pro kabbadi news,Hocket news";
        this.metades = "Sports Social Around the World Provides the latest news and stories in sports,sports trends,sports business, international tournaments, cricket news,football news, tennis news, hockey news etc. stay tuned";
        this.News = [];
        this.prevPageNo = 0;
        this.nextPageNo = 0;
    }
    GlobalNewsFeedComponent.prototype.globalNewsFeed = function (pageNo) {
        var _this = this;
        this.newsData.globalNewsFeed(this.nextPageNo, 'all').then(function (news) {
            _this.News = _this.News.concat(news);
        }).catch(function (err) {
            console.log(err);
        });
    };
    GlobalNewsFeedComponent.prototype.nextPage = function (pageNo) {
        this.prevPageNo = pageNo;
        this.globalNewsFeed(pageNo);
    };
    GlobalNewsFeedComponent.prototype.onWindowScroll = function (event) {
        console.log(Math.floor(scrollY / 700), scrollY);
        this.nextPageNo = Math.floor(scrollY / 700);
        if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo) {
            this.nextPage(this.nextPageNo);
        }
    };
    GlobalNewsFeedComponent.prototype.ngOnInit = function () {
        this.globalNewsFeed(this.nextPageNo);
        this.pagetitle.setTitle(this.title);
        this.metaservice.updateTag({ name: 'title', content: this.title });
        this.metaservice.updateTag({ name: 'keywords', content: this.metakey });
        this.metaservice.updateTag({ name: 'description', content: this.metades });
        this.metaservice.updateTag({ property: 'og:title', content: this.title });
        this.metaservice.updateTag({ property: 'og:description', content: this.metades });
        this.metaservice.updateTag({ property: 'og:keywords', content: this.metakey });
    };
    GlobalNewsFeedComponent.prototype.ngOnDestroy = function () {
        if (this._masonry) {
            this._removeAllSubscription.unsubscribe();
            this._removeItemSubscription.unsubscribe();
            this._removeFirstItemSubscription.unsubscribe();
        }
    };
    return GlobalNewsFeedComponent;
}());
exports.GlobalNewsFeedComponent = GlobalNewsFeedComponent;


/***/ }),

/***/ "./src/app/global-feed/global-news-feed/global-news-feed.module.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/global-feed/global-news-feed/global-news-feed.module.ngfactory.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./global-news-feed.module */ "./src/app/global-feed/global-news-feed/global-news-feed.module.ts");
var i2 = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ../../open-cards/open-news-card/open-news-card.component.ngfactory */ "./src/app/open-cards/open-news-card/open-news-card.component.ngfactory.js");
var i4 = __webpack_require__(/*! ./global-news-feed.component.ngfactory */ "./src/app/global-feed/global-news-feed/global-news-feed.component.ngfactory.js");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var i7 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i8 = __webpack_require__(/*! ../../open-cards/open-news-card/open-news-card.module */ "./src/app/open-cards/open-news-card/open-news-card.module.ts");
var i9 = __webpack_require__(/*! ../../cards/news-card/news-card.module */ "./src/app/cards/news-card/news-card.module.ts");
var i10 = __webpack_require__(/*! ../../header/header.module */ "./src/app/header/header.module.ts");
var i11 = __webpack_require__(/*! ../../footer/footer.module */ "./src/app/footer/footer.module.ts");
var i12 = __webpack_require__(/*! ../../navigation-bar/navigation-bar.module */ "./src/app/navigation-bar/navigation-bar.module.ts");
var i13 = __webpack_require__(/*! ../../carousel/carousel.module */ "./src/app/carousel/carousel.module.ts");
var i14 = __webpack_require__(/*! ./global-news-feed.component */ "./src/app/global-feed/global-news-feed/global-news-feed.component.ts");
var GlobalNewsFeedModuleNgFactory = i0.ɵcmf(i1.GlobalNewsFeedModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.OpenNewsCardComponentNgFactory, i4.GlobalNewsFeedComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID, [2, i5.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i6.NgMasonryGridService, i6.NgMasonryGridService, [i0.PLATFORM_ID]), i0.ɵmpd(1073742336, i5.CommonModule, i5.CommonModule, []), i0.ɵmpd(1073742336, i7.RouterModule, i7.RouterModule, [[2, i7.ɵangular_packages_router_router_a], [2, i7.Router]]), i0.ɵmpd(1073742336, i8.OpenNewsCardModule, i8.OpenNewsCardModule, []), i0.ɵmpd(1073742336, i9.NewsCardModule, i9.NewsCardModule, []), i0.ɵmpd(1073742336, i10.HeaderModule, i10.HeaderModule, []), i0.ɵmpd(1073742336, i11.FooterModule, i11.FooterModule, []), i0.ɵmpd(1073742336, i12.NavigationBarModule, i12.NavigationBarModule, []), i0.ɵmpd(1073742336, i13.CarouselModule, i13.CarouselModule, []), i0.ɵmpd(1073742336, i6.NgMasonryGridModule, i6.NgMasonryGridModule, []), i0.ɵmpd(1073742336, i1.GlobalNewsFeedModule, i1.GlobalNewsFeedModule, []), i0.ɵmpd(1024, i7.ROUTES, function () { return [[{ path: "", component: i14.GlobalNewsFeedComponent }]]; }, [])]); });
exports.GlobalNewsFeedModuleNgFactory = GlobalNewsFeedModuleNgFactory;


/***/ }),

/***/ "./src/app/global-feed/global-news-feed/global-news-feed.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/global-feed/global-news-feed/global-news-feed.module.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GlobalNewsFeedModule = /** @class */ (function () {
    function GlobalNewsFeedModule() {
    }
    return GlobalNewsFeedModule;
}());
exports.GlobalNewsFeedModule = GlobalNewsFeedModule;


/***/ }),

/***/ "./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.css.shim.ngstyle.js":
/*!*********************************************************************************************************!*\
  !*** ./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.css.shim.ngstyle.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["*[_ngcontent-%COMP%]{\n    box-sizing: border-box;\n}\n\n\n#col-4[_ngcontent-%COMP%]{\n    margin-left:2.7%;\n    width:30%;\n}\n\n\n@media screen and (max-width:768px){\n      #col-4[_ngcontent-%COMP%]{\n          width:48%;\n          margin-left:1%;\n      }\n}\n\n\n@media screen and (max-width:500px){\n    #col-4[_ngcontent-%COMP%]{\n        width:100%;\n    }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.ngfactory.js":
/*!**************************************************************************************************!*\
  !*** ./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.ngfactory.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./global-open-arena-feed.component.css.shim.ngstyle */ "./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! ../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css.shim.ngstyle */ "./node_modules/ng-masonry-grid/ng-masonry-grid.css.shim.ngstyle.js");
var i2 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ../../cards/match-card/match-card.component.ngfactory */ "./src/app/cards/match-card/match-card.component.ngfactory.js");
var i6 = __webpack_require__(/*! ../../cards/match-card/match-card.component */ "./src/app/cards/match-card/match-card.component.ts");
var i7 = __webpack_require__(/*! ../../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var i8 = __webpack_require__(/*! ../../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var i9 = __webpack_require__(/*! ../../shared/services/pop-up.service */ "./src/app/shared/services/pop-up.service.ts");
var i10 = __webpack_require__(/*! ../../cards/news-card/news-card.component.ngfactory */ "./src/app/cards/news-card/news-card.component.ngfactory.js");
var i11 = __webpack_require__(/*! ../../cards/news-card/news-card.component */ "./src/app/cards/news-card/news-card.component.ts");
var i12 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var i13 = __webpack_require__(/*! ../../../../node_modules/ng-masonry-grid/ng-masonry-grid.ngfactory */ "./node_modules/ng-masonry-grid/ng-masonry-grid.ngfactory.js");
var i14 = __webpack_require__(/*! ./global-open-arena-feed.component */ "./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.ts");
var i15 = __webpack_require__(/*! ../../shared/services/match-data.service */ "./src/app/shared/services/match-data.service.ts");
var i16 = __webpack_require__(/*! ../../shared/services/news.service */ "./src/app/shared/services/news.service.ts");
var styles_GlobalOpenArenaFeedComponent = [i0.styles, i1.styles];
var RenderType_GlobalOpenArenaFeedComponent = i2.ɵcrt({ encapsulation: 0, styles: styles_GlobalOpenArenaFeedComponent, data: {} });
exports.RenderType_GlobalOpenArenaFeedComponent = RenderType_GlobalOpenArenaFeedComponent;
function View_GlobalOpenArenaFeedComponent_1(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 0, "img", [["alt", ""], ["class", "spinner"], ["src", "assets/images/sports-social-loading.gif"]], null, null, null, null, null))], null, null); }
function View_GlobalOpenArenaFeedComponent_3(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), i2.ɵeld(1, 0, null, null, 3, "h1", [["class", "type"]], null, null, null, null, null)), (_l()(), i2.ɵeld(2, 0, null, null, 2, "a", [["routerLink", "/OpenArena"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i2.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i2.ɵdid(3, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i2.ɵted(-1, null, ["Open Arena>>"])), (_l()(), i2.ɵeld(5, 0, null, null, 1, "sports-social-match-card", [["class", "cards"]], null, null, null, i5.View_MatchCardComponent_0, i5.RenderType_MatchCardComponent)), i2.ɵdid(6, 114688, [["matchCard", 4]], 0, i6.MatchCardComponent, [i2.Renderer2, i7.TimeService, i2.ComponentFactoryResolver, i8.PostService, i9.PopUpService, i3.Router, i3.ActivatedRoute], { creatorName: [0, "creatorName"], creatorImage: [1, "creatorImage"], eventId: [2, "eventId"], doerId: [3, "doerId"], doerName: [4, "doerName"], doerPic: [5, "doerPic"], matchImage: [6, "matchImage"], matchText: [7, "matchText"], joineeCount: [8, "joineeCount"], commentCount: [9, "commentCount"], promoteCount: [10, "promoteCount"], watchCount: [11, "watchCount"], activityName: [12, "activityName"], activityDate: [13, "activityDate"], matchDate: [14, "matchDate"], gameName: [15, "gameName"], venueName: [16, "venueName"], restrictionCount: [17, "restrictionCount"] }, null)], function (_ck, _v) { var currVal_2 = "/OpenArena"; _ck(_v, 3, 0, currVal_2); var currVal_3 = _v.parent.context.$implicit.creatorName; var currVal_4 = _v.parent.context.$implicit.creatorImage; var currVal_5 = _v.parent.context.$implicit.eventId; var currVal_6 = _v.parent.context.$implicit.doerId; var currVal_7 = _v.parent.context.$implicit.doerName; var currVal_8 = _v.parent.context.$implicit.doerPic; var currVal_9 = _v.parent.context.$implicit.matchImage; var currVal_10 = _v.parent.context.$implicit.matchText; var currVal_11 = _v.parent.context.$implicit.joineeCount; var currVal_12 = _v.parent.context.$implicit.commentCount; var currVal_13 = _v.parent.context.$implicit.promoteCount; var currVal_14 = _v.parent.context.$implicit.watchCount; var currVal_15 = _v.parent.context.$implicit.activityName; var currVal_16 = _v.parent.context.$implicit.activityDate; var currVal_17 = _v.parent.context.$implicit.matchDate; var currVal_18 = _v.parent.context.$implicit.gameName; var currVal_19 = _v.parent.context.$implicit.venueName; var currVal_20 = _v.parent.context.$implicit.restrictionCount; _ck(_v, 6, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20]); }, function (_ck, _v) { var currVal_0 = i2.ɵnov(_v, 3).target; var currVal_1 = i2.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_GlobalOpenArenaFeedComponent_4(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), i2.ɵeld(1, 0, null, null, 3, "h1", [["class", "type"]], null, null, null, null, null)), (_l()(), i2.ɵeld(2, 0, null, null, 2, "a", [["routerLink", "/AroundTheWorld"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i2.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i2.ɵdid(3, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i2.ɵted(-1, null, ["Around The World"])), (_l()(), i2.ɵeld(5, 0, null, null, 1, "sports-social-news-card", [["class", "cards"]], null, null, null, i10.View_NewsCardComponent_0, i10.RenderType_NewsCardComponent)), i2.ɵdid(6, 114688, null, 0, i11.NewsCardComponent, [i2.Renderer2, i3.Router, i7.TimeService], { newsId: [0, "newsId"], newsImage: [1, "newsImage"], sourceImage: [2, "sourceImage"], sourceName: [3, "sourceName"], desc: [4, "desc"], likeCount: [5, "likeCount"], shareCount: [6, "shareCount"], commentCount: [7, "commentCount"], url: [8, "url"], insertedDate: [9, "insertedDate"], publishedAt: [10, "publishedAt"], title: [11, "title"] }, null)], function (_ck, _v) { var currVal_2 = "/AroundTheWorld"; _ck(_v, 3, 0, currVal_2); var currVal_3 = _v.parent.context.$implicit.newsId; var currVal_4 = _v.parent.context.$implicit.newsImage; var currVal_5 = _v.parent.context.$implicit.sourceImage; var currVal_6 = _v.parent.context.$implicit.source; var currVal_7 = _v.parent.context.$implicit.desc; var currVal_8 = _v.parent.context.$implicit.likeCount; var currVal_9 = _v.parent.context.$implicit.shareCount; var currVal_10 = _v.parent.context.$implicit.commentCount; var currVal_11 = _v.parent.context.$implicit.url; var currVal_12 = _v.parent.context.$implicit.insertedDate; var currVal_13 = _v.parent.context.$implicit.publishedAt; var currVal_14 = _v.parent.context.$implicit.title; _ck(_v, 6, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14]); }, function (_ck, _v) { var currVal_0 = i2.ɵnov(_v, 3).target; var currVal_1 = i2.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_GlobalOpenArenaFeedComponent_2(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 5, "ng-masonry-grid-item", [["id", "col-4"]], null, null, null, null, null)), i2.ɵdid(1, 4407296, null, 0, i12.NgMasonryGridDirective, [i2.ElementRef, i12.NgMasonryGridComponent, i2.PLATFORM_ID, i12.NgMasonryGridService], null, null), (_l()(), i2.ɵand(16777216, null, null, 1, null, View_GlobalOpenArenaFeedComponent_3)), i2.ɵdid(3, 16384, null, 0, i4.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i2.ɵand(16777216, null, null, 1, null, View_GlobalOpenArenaFeedComponent_4)), i2.ɵdid(5, 16384, null, 0, i4.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { _ck(_v, 1, 0); var currVal_0 = (_v.context.$implicit.type === 1); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_v.context.$implicit.type === 0); _ck(_v, 5, 0, currVal_1); }, null); }
function View_GlobalOpenArenaFeedComponent_0(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 6, "ng-masonry-grid", [], null, null, null, i13.View_NgMasonryGridComponent_0, i13.RenderType_NgMasonryGridComponent)), i2.ɵdid(1, 1294336, null, 0, i12.NgMasonryGridComponent, [i2.PLATFORM_ID, i2.ElementRef, i12.NgMasonryGridService], { masonryOptions: [0, "masonryOptions"], useAnimation: [1, "useAnimation"], useImagesLoaded: [2, "useImagesLoaded"] }, null), i2.ɵpod(2, { transitionDuration: 0, gutter: 1 }), (_l()(), i2.ɵand(16777216, null, 0, 1, null, View_GlobalOpenArenaFeedComponent_1)), i2.ɵdid(4, 16384, null, 0, i4.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i2.ɵand(16777216, null, 0, 1, null, View_GlobalOpenArenaFeedComponent_2)), i2.ɵdid(6, 278528, null, 0, i4.NgForOf, [i2.ViewContainerRef, i2.TemplateRef, i2.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, "0.4s", 2); var currVal_1 = true; var currVal_2 = true; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = (_co.globalArena.length === 0); _ck(_v, 4, 0, currVal_3); var currVal_4 = _co.globalArena; _ck(_v, 6, 0, currVal_4); }, null); }
exports.View_GlobalOpenArenaFeedComponent_0 = View_GlobalOpenArenaFeedComponent_0;
function View_GlobalOpenArenaFeedComponent_Host_0(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 1, "sports-social-global-open-arena-feed", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i2.ɵnov(_v, 1).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_GlobalOpenArenaFeedComponent_0, RenderType_GlobalOpenArenaFeedComponent)), i2.ɵdid(1, 245760, null, 0, i14.GlobalOpenArenaFeedComponent, [i15.MatchDataService, i16.NewsService, i2.Renderer2], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_GlobalOpenArenaFeedComponent_Host_0 = View_GlobalOpenArenaFeedComponent_Host_0;
var GlobalOpenArenaFeedComponentNgFactory = i2.ɵccf("sports-social-global-open-arena-feed", i14.GlobalOpenArenaFeedComponent, View_GlobalOpenArenaFeedComponent_Host_0, {}, {}, []);
exports.GlobalOpenArenaFeedComponentNgFactory = GlobalOpenArenaFeedComponentNgFactory;


/***/ }),

/***/ "./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ng_masonry_grid_1 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var match_data_service_1 = __webpack_require__(/*! ../../shared/services/match-data.service */ "./src/app/shared/services/match-data.service.ts");
var news_service_1 = __webpack_require__(/*! ../../shared/services/news.service */ "./src/app/shared/services/news.service.ts");
var GlobalOpenArenaFeedComponent = /** @class */ (function () {
    function GlobalOpenArenaFeedComponent(matchData, newsData, renderer) {
        this.matchData = matchData;
        this.newsData = newsData;
        this.renderer = renderer;
        this.globalArena = [];
        this.prevPageNo = 0;
        this.nextPageNo = 0;
    }
    GlobalOpenArenaFeedComponent.prototype.globalFeed = function () {
        var _this = this;
        var matchPomise = this.matchData.globalMatchFeed(this.nextPageNo, 0);
        var newsPromise = this.newsData.globalNewsFeed(this.nextPageNo, 'all');
        Promise.all([matchPomise, newsPromise]).then(function (data) {
            console.log(data);
            _this.globalArena = _this.globalArena.concat(data['0']).concat(data['1']);
            console.log(_this.globalArena);
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    GlobalOpenArenaFeedComponent.prototype.nextPage = function (pageNo) {
        this.prevPageNo = pageNo;
        this.globalFeed();
    };
    GlobalOpenArenaFeedComponent.prototype.onWindowScroll = function (event) {
        this.nextPageNo = Math.floor(scrollY / 2200);
        // console.log(this.nextPageNo, scrollY);
        if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo) {
            this.nextPage(this.nextPageNo);
        }
    };
    GlobalOpenArenaFeedComponent.prototype.ngOnInit = function () {
        this.globalFeed();
    };
    GlobalOpenArenaFeedComponent.prototype.ngOnDestroy = function () {
        if (this._masonry) {
            this._removeAllSubscription.unsubscribe();
            this._removeItemSubscription.unsubscribe();
            this._removeFirstItemSubscription.unsubscribe();
        }
    };
    return GlobalOpenArenaFeedComponent;
}());
exports.GlobalOpenArenaFeedComponent = GlobalOpenArenaFeedComponent;


/***/ }),

/***/ "./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.module.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GlobalOpenArenaFeedModule = /** @class */ (function () {
    function GlobalOpenArenaFeedModule() {
    }
    return GlobalOpenArenaFeedModule;
}());
exports.GlobalOpenArenaFeedModule = GlobalOpenArenaFeedModule;


/***/ }),

/***/ "./src/app/header/header.component.css.shim.ngstyle.js":
/*!*************************************************************!*\
  !*** ./src/app/header/header.component.css.shim.ngstyle.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["header[_ngcontent-%COMP%]{\n    width: 100%;\n    padding: 0.4% 1% 0.4% 1%;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    z-index: 10;\n    background-color: #ffffff;\n    box-shadow: 1px 1px 2px #bbbbbb;\n    overflow-y: hidden;\n}\n.brand[_ngcontent-%COMP%], .search[_ngcontent-%COMP%], .brand-image[_ngcontent-%COMP%], .brand-title[_ngcontent-%COMP%]{\n    display: inline-block;\n    vertical-align: middle;\n}\n.brand-image[_ngcontent-%COMP%]{\n    width: 45px;\n    height: 45px;\n}\n.brand-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n.brand-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\n    font-size: 1.5em;\n    font-weight: 700;\n}\n.brand-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child{\n    color: #024771;\n    margin-right: 5px;\n}\n.brand-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-of-type(2){\n    color: #ffa600;\n}\n.brand-title[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\n    text-align: center;\n    color: #024771;\n    font-size: 0.8em;\n    font-style: italic;\n}\n.search[_ngcontent-%COMP%]{\n    width: 50%;\n    \n    margin-left: 10%;\n    top:3px;\n    margin-top: 2%;\n    \n    \n}\n.search[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{\n    display:block;\n    text-align: left;\n    background-position: right;\n    margin: 0 0 0 auto;\n    width: 5%;\n    height: 40px;\n    box-sizing: border-box;\n    \n    border: none;\n    border-radius: 4px;\n    font-size: 1em;\n    background-color: white;\n    background-image: url('/assets/images/sports-social-search.png');\n    background-size: 25px;\n    background-color: white;\n    \n    background-repeat: no-repeat;\n    padding: 3% 13% 7px 30px;\n    margin-right: 2%;\n    transition: width 0.4s ease-in-out;\n}\n.search[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:focus {\n    width: 100%;\n    \n    \n    outline: none;\n  }\nul[_ngcontent-%COMP%]{\n    list-style: none;\n}\n.menu[_ngcontent-%COMP%]{\n    position: fixed;\n    right: 1%;\n    top: 1px;\n    width: 40%;\n    height: 7%;\n    text-align: right;\n    display: inline-flex;\n    \n}\n.menu[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{\n    vertical-align: right;\n    margin-left: 0%;\n    margin-top: 3%;\n    width: 40%;\n    display: inline-flex;\n    \n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]  {\n    width: auto;\n    margin-right: 0%;\n    vertical-align: right;\n    \n    margin-left:10%;            \n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]{\n    color: #024771;\n    font-size: 1em;\n    font-weight: 500;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover{\n    font-weight: 700;\n    color: #ffa600;\n}\n.dropdown-menu-image-holder[_ngcontent-%COMP%]{\n    position: fixed;\n    top:12px;\n    right: 24px;\n    width: 30px;\n    height: 30px;\n}\n.dropdown-menu-image-holder[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n}\n.dropdown-cancel-image-holder[_ngcontent-%COMP%] {\n    width: 95%;\n    margin-top: 2%;\n    height: 10px;\n    text-align: right;\n    \n}\n.dropdown-cancel-image-holder[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n    cursor: pointer;\n}\n.dropdown-menu[_ngcontent-%COMP%]{\n    background-color: #ffffff;\n    opacity: 0.9;\n  filter: alpha(opacity=30);\n}\n.dropdown-menu[_ngcontent-%COMP%]{\n    width: 55%;\n    position: fixed;\n    top:48px;\n    left: 40%;\n    box-shadow: 2px 2px 4px #bbbbbb;\n}\n.dropdown-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]{\n    display: block;\n    text-align: center;\n    padding: 4%;\n    color:rgb(230, 167, 51);\n    font-size: 1em;\n    font-weight: 500;\n    border-bottom: 1px solid #bbbbbb;\n    width: 95%;\n    margin: 0% auto;\n}\n.dropdown-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{\n    color:rgb(230, 167, 51);\n}\n.dropdown-search[_ngcontent-%COMP%]{\n    margin-top: 7%;\n    margin-left: 15%;\n    width: 100%;\n}\n.dropdown-search[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 1% auto; \n    background-image: unset;\n    border-radius: 0px;\n}\nbutton[_ngcontent-%COMP%]{\n    display: block;\n    margin: 6% auto;\n    color: #ffffff;\n    background-color: #024772;\n    padding: 1.5%;\n    width: 40%;\n    height: 30px;\n    border: none;\n    outline: none;\n    border-radius: 4px;\n    box-shadow: 2px 2px 4px #bbbbbb;\n}\n.active[_ngcontent-%COMP%]{\n    color: #ffa600 !important\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/header/header.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/header/header.component.ngfactory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./header.component.css.shim.ngstyle */ "./src/app/header/header.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! ./header.component */ "./src/app/header/header.component.ts");
var i5 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var styles_HeaderComponent = [i0.styles];
var RenderType_HeaderComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });
exports.RenderType_HeaderComponent = RenderType_HeaderComponent;
function View_HeaderComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [["class", "search"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "input", [["placeholder", "  Search Sport Social"], ["type", "text"]], null, null, null, null, null))], null, null); }
function View_HeaderComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 24, "div", [["class", "menu"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeaderComponent_2)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 21, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 5, "a", [["class", "About btn btn-responsive"], ["routerLink", "/about"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(6, 671744, [[3, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(7, 1720320, null, 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 2, { links: 1 }), i1.ɵqud(603979776, 3, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, ["About"])), (_l()(), i1.ɵeld(11, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 5, "a", [["routerLink", "/application"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(13, 671744, [[5, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(14, 1720320, null, 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 4, { links: 1 }), i1.ɵqud(603979776, 5, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, ["App"])), (_l()(), i1.ɵeld(18, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 5, "a", [["routerLink", "/HelpCenter"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(20, 671744, [[7, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(21, 1720320, null, 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 6, { links: 1 }), i1.ɵqud(603979776, 7, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, ["Help Center"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isSearchInDropdown; _ck(_v, 2, 0, currVal_0); var currVal_3 = "/about"; _ck(_v, 6, 0, currVal_3); var currVal_4 = "active"; _ck(_v, 7, 0, currVal_4); var currVal_7 = "/application"; _ck(_v, 13, 0, currVal_7); var currVal_8 = "active"; _ck(_v, 14, 0, currVal_8); var currVal_11 = "/HelpCenter"; _ck(_v, 20, 0, currVal_11); var currVal_12 = "active"; _ck(_v, 21, 0, currVal_12); }, function (_ck, _v) { var currVal_1 = i1.ɵnov(_v, 6).target; var currVal_2 = i1.ɵnov(_v, 6).href; _ck(_v, 5, 0, currVal_1, currVal_2); var currVal_5 = i1.ɵnov(_v, 13).target; var currVal_6 = i1.ɵnov(_v, 13).href; _ck(_v, 12, 0, currVal_5, currVal_6); var currVal_9 = i1.ɵnov(_v, 20).target; var currVal_10 = i1.ɵnov(_v, 20).href; _ck(_v, 19, 0, currVal_9, currVal_10); }); }
function View_HeaderComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 21, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 5, "a", [["routerLink", "/about"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, [[9, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(4, 1720320, null, 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 8, { links: 1 }), i1.ɵqud(603979776, 9, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, ["About"])), (_l()(), i1.ɵeld(8, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 5, "a", [["routerLink", "/application"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(10, 671744, [[11, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(11, 1720320, null, 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 10, { links: 1 }), i1.ɵqud(603979776, 11, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, ["App"])), (_l()(), i1.ɵeld(15, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 5, "a", [["routerLink", "/HelpCenter"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(17, 671744, [[13, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(18, 1720320, null, 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 12, { links: 1 }), i1.ɵqud(603979776, 13, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, ["Help Center"]))], function (_ck, _v) { var currVal_2 = "/about"; _ck(_v, 3, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 4, 0, currVal_3); var currVal_6 = "/application"; _ck(_v, 10, 0, currVal_6); var currVal_7 = "active"; _ck(_v, 11, 0, currVal_7); var currVal_10 = "/HelpCenter"; _ck(_v, 17, 0, currVal_10); var currVal_11 = "active"; _ck(_v, 18, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_4 = i1.ɵnov(_v, 10).target; var currVal_5 = i1.ɵnov(_v, 10).href; _ck(_v, 9, 0, currVal_4, currVal_5); var currVal_8 = i1.ɵnov(_v, 17).target; var currVal_9 = i1.ɵnov(_v, 17).href; _ck(_v, 16, 0, currVal_8, currVal_9); }); }
function View_HeaderComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [["class", "dropdown-search"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "input", [["placeholder", "Search Sports Social"], ["type", "text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "button", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Search"]))], null, null); }
function View_HeaderComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "dropdown-menu"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [["class", "dropdown-cancel-image-holder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [["src", "/assets/images/sports-social-cancel-black.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeDropdown() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeaderComponent_5)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeaderComponent_6)), i1.ɵdid(6, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isMenuInDropdown; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.isSearchInDropdown; _ck(_v, 6, 0, currVal_1); }, null); }
function View_HeaderComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "mobile-view"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [["class", "dropdown-menu-image-holder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [["src", "/assets/images/sports-social-menu.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openDropdown() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeaderComponent_4)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isDropdownIconclicked; _ck(_v, 4, 0, currVal_0); }, null); }
function View_HeaderComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { header: 0 }), (_l()(), i1.ɵeld(1, 0, [[1, 0], ["header", 1]], null, 16, "header", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 11, "div", [["class", "brand"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 10, "a", [["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(4, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "brand-image"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [["alt", "Sport-Social-logo"], ["src", "/assets/images/sports-social-logo.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 6, "div", [["class", "brand-title"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Sports"])), (_l()(), i1.ɵeld(10, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Social"])), (_l()(), i1.ɵeld(12, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["ChaseYourSport"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeaderComponent_1)), i1.ɵdid(15, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HeaderComponent_3)), i1.ɵdid(17, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/"; _ck(_v, 4, 0, currVal_2); var currVal_3 = !_co.isMenuInDropdown; _ck(_v, 15, 0, currVal_3); var currVal_4 = _co.mobileView; _ck(_v, 17, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 4).target; var currVal_1 = i1.ɵnov(_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
exports.View_HeaderComponent_0 = View_HeaderComponent_0;
function View_HeaderComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-header", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_HeaderComponent_0, RenderType_HeaderComponent)), i1.ɵdid(1, 4308992, null, 0, i4.HeaderComponent, [i5.PropertyService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HeaderComponent_Host_0 = View_HeaderComponent_Host_0;
var HeaderComponentNgFactory = i1.ɵccf("sports-social-header", i4.HeaderComponent, View_HeaderComponent_Host_0, {}, {}, []);
exports.HeaderComponentNgFactory = HeaderComponentNgFactory;


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var property_service_1 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(height) {
        this.height = height;
        this.mobileView = false;
        this.isMenuInDropdown = false;
        this.isSearchInDropdown = false;
        this.isDropdownIconclicked = false;
        this.searchButton = false;
    }
    HeaderComponent.prototype.setMobileView = function () {
        var width = this.header.nativeElement.getBoundingClientRect().width;
        if (width > 800) {
            this.mobileView = false;
            this.isMenuInDropdown = false;
            this.isSearchInDropdown = false;
        }
        // if ( width > 800  && width < 1295) {
        //   this.mobileView = true;
        //   this.isMenuInDropdown = true;
        //   this.isSearchInDropdown = true;
        // }
        if (width < 800 && width > 720) {
            this.mobileView = true;
            this.isMenuInDropdown = true;
            this.isSearchInDropdown = true;
        }
        if (width < 720) {
            this.mobileView = true;
            this.isMenuInDropdown = true;
            this.isSearchInDropdown = true;
        }
    };
    HeaderComponent.prototype.searchClick = function () {
        if (this.searchButton === true) {
            this.searchButton = false;
        }
        else {
            this.searchButton = true;
        }
    };
    HeaderComponent.prototype.openDropdown = function () {
        this.isDropdownIconclicked = true;
    };
    HeaderComponent.prototype.closeDropdown = function () {
        this.isDropdownIconclicked = false;
    };
    HeaderComponent.prototype.sendHeightOfHeader = function () {
        var height = this.header.nativeElement.getBoundingClientRect().height;
        this.height.ofHeader.next(height);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.setMobileView();
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        this.sendHeightOfHeader();
    };
    HeaderComponent.prototype.onresize = function () {
        this.setMobileView();
        this.sendHeightOfHeader();
    };
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
exports.HeaderModule = HeaderModule;


/***/ }),

/***/ "./src/app/help-center/help-center-content/help-center-content.component.css.shim.ngstyle.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/help-center/help-center-content/help-center-content.component.css.shim.ngstyle.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["*[_ngcontent-%COMP%]{\r\n    font-family: 'Roboto',sans-serif;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    font-size: 1.3em;\r\n    font-weight: 300;\r\n    width: auto;\r\n    margin:3% auto;\r\n    color:black;\r\n    text-align: center;\r\n}\r\n.content[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n    padding-bottom: 5%;\r\n    border-top: 1px solid #101010;\r\n}\r\n.content[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    white-space: normal;\r\n    vertical-align: top;\r\n    margin-left: 0px;\r\n}\r\n.content[_ngcontent-%COMP%] > .side-nav[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n}\r\n.content[_ngcontent-%COMP%] > .side-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #FF0000;\r\n}\r\n.content[_ngcontent-%COMP%] > .side-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 3px; \r\n    }\r\n.side-nav[_ngcontent-%COMP%]{\r\n   border: 1px solid black;\r\n   height: 600px;\r\n   padding: 0px;\r\n   width: 420px;\r\n   list-style-type: none;\r\n   display: inline-block;\r\n   overflow-x: hidden;\r\n}\r\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    border: 1px solid #bbbbbb;\r\n    border-top:none;\r\n    height: 50px;\r\n    padding: 5% 1.5% 5% 1.5%;\r\n}\r\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n    margin-left: 0%;\r\n    padding-right: 15px;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    \r\n}\r\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n    width: 90%;\r\n    color: black;\r\n    font-size: 1em;\r\n    font-weight: 300;\r\n    background:transparent;\r\n    border: none;\r\n    text-align: left;\r\n    position: relative;\r\n    cursor: pointer;\r\n    \r\n    display: inline-block;\r\n}\r\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .topicdata[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n    width: 70%;\r\n    vertical-align: top;\r\n}\r\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .topicdata[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    text-align-last: left;\r\n    font-size: 1em;\r\n    margin-left: 0%;\r\n    font-style: bold;\r\n}\r\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .topicdata[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:hover{\r\n    font-weight: bolder;\r\n}\r\n.side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:focus{\r\n    font-weight: bolder;\r\n}\r\n.content[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover{\r\n    background-color: #dddddd;\r\n}\r\n\r\n.subtopicdata[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    width:120px;\r\n    height: 120px;\r\n    padding:2%;\r\n    padding-bottom: 8%;\r\n    margin: 4% 0% 0% 8%;\r\n    vertical-align: top;\r\n    border-radius: 5px;\r\n    \r\n\r\n}\r\n.subtopicdata[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n    font-size: 1.2em;\r\n    font-weight: 400;\r\n    width: 140px;\r\n    margin-left: -10px;\r\n    text-align: center;\r\n}\r\n\r\n.subtopicdata[_ngcontent-%COMP%]:hover {\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.2);\r\n  font-weight: bolder;\r\n}\r\n\r\n.mobileNav[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    height: 35px;\r\n}\r\n.menuImgHolder[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color:red;\r\n}\r\n.menuImg[_ngcontent-%COMP%]{\r\n  margin-left: 2%;\r\n  width: 30px;\r\n  height: 100%;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    height: auto;\r\n    position: fixed;\r\n    top:10%;\r\n    left: 18%;\r\n    white-space: normal;\r\n    padding-left: 4%;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    width:auto;\r\n    margin-right: 1%;\r\n}\r\n.mobileNavIcon[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    max-width: 8%;\r\n    max-height: 12%;\r\n    vertical-align: top;\r\n    margin: 3% 8% 3% 8%;\r\n}\r\n.mobileNavIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 75%;\r\n}\r\n.mobileNavIcon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    width:auto;\r\n    font-size: 0.9em;\r\n    font-weight: 400;\r\n    margin-top: 15px;\r\n    color: #101010;\r\n}\r\n.menuImgHolder[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]:hover{\r\n  cursor:pointer;\r\n}\r\n.content2[_ngcontent-%COMP%]{\r\n        width:300px;\r\n        margin-left: 0%;\r\n        background-color: orange;\r\n    }\r\n.content2[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{\r\n        list-style-type: none;\r\n        border:1px solid red;\r\n        border-top: none;\r\n        width: 300px;\r\n        height: 35px;\r\n        float: left;\r\n    }\r\n.mynav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{\r\n        width:15px;\r\n        height: 5px;\r\n        background: transparent;\r\n    }\r\n.mynav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n        font-size: .9em;\r\n        margin-left: 30%;\r\n        margin-top: -10%;\r\n        \r\n    }\r\n.mynav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n        width:20px;\r\n        height: 20px;\r\n        margin-left: -60%;\r\n        position: relative;\r\n    }\r\n.banner3[_ngcontent-%COMP%] {\r\n        height: 200px;\r\n        width:100%;\r\n        background-color: rgb(219, 235, 241);\r\n        margin-bottom: 0%;\r\n        padding-bottom: 0%;\r\n      }\r\n.banner3[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n        width:90%;\r\n        color: black;\r\n        display: inline-block;\r\n        margin-left: 4%;\r\n        margin-top: 1%;\r\n        font-weight: bolder;\r\n        font-size: 1.5em;\r\n        font-family: 'Times New Roman', Times, serif;\r\n        text-align-last: center;\r\n      }\r\n.banner3[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{\r\n        width: 15%;\r\n        height: 20%;\r\n        background: transparent;\r\n        border: 1px solid blueviolet;\r\n        font-weight: bolder;\r\n        font-size: .9em;\r\n        cursor: pointer;\r\n      }\r\n\r\n@media(max-width:700px){\r\n    .content[_ngcontent-%COMP%]{\r\n        display: inline-flex;\r\n        margin-bottom: 15%;\r\n        padding-bottom: 10%;\r\n    }\r\n    \r\n    \r\n\r\n    .side-nav[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n    width: 285px;\r\n    height: 400px;\r\n    list-style-type: none;\r\n    display: inline-block;\r\n    \r\n  }\r\n\r\n    .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      border: 1px solid #bbbbbb;\r\n      border-top: none;\r\n      padding: 2% .4% 2% .2%;\r\n    }\r\n\r\n      .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n        margin-left: 2%;\r\n        width: 30px;\r\n        height: 30px;\r\n        border-radius: 5px;\r\n      }\r\n\r\n      \r\n      .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .topicdata[_ngcontent-%COMP%]{\r\n        display: inline-flex;\r\n        width: 50%;\r\n        height: 50%;\r\n        margin-top: -20%;\r\n        margin-left: 40%;\r\n        vertical-align: top;\r\n    }\r\n    .side-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .topicdata[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n        text-align: left;\r\n        font-weight: bolder;\r\n        text-align-last: left;\r\n        font-size: .5em;\r\n        margin-left: 0%;\r\n        font-weight: bold;\r\n    }\r\n    \r\n        .subtopicdata[_ngcontent-%COMP%]{\r\n            display: inline-flex;\r\n            width:70px;\r\n            height: 70px;\r\n            padding:2%;\r\n            margin: 5% 0% 20% 5%;\r\n            vertical-align: top;\r\n            border-radius: 5px;\r\n        \r\n        }\r\n        .subtopicdata[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n            font-size: .8em;\r\n            font-weight: 300;\r\n            width: 80px;\r\n            text-align: center;\r\n        }\r\n\r\n       \r\n        .content2[_ngcontent-%COMP%]{\r\n            visibility: visible;\r\n        }\r\n        .banner3[_ngcontent-%COMP%] {\r\n            height: 200px;\r\n            width:100%;\r\n            background-color: rgb(219, 235, 241);\r\n            margin-bottom: 0%;\r\n            padding-bottom: 0%;\r\n          }\r\n          .banner3[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n            width:90%;\r\n            color: black;\r\n            display: inline-block;\r\n            margin-left: 4%;\r\n            margin-top: 1%;\r\n            font-weight: bolder;\r\n            font-size: 1.5em;\r\n            font-family: 'Times New Roman', Times, serif;\r\n            text-align-last: center;\r\n          }\r\n          .banner3[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{\r\n            width: 30%;\r\n            height: 20%;\r\n            background: transparent;\r\n            border: 1px solid blueviolet;\r\n            font-weight: bolder;\r\n            font-size: .4em;\r\n            cursor: pointer;\r\n          }\r\n}\r\n@media screen and (min-width:701px) and (max-width:1200px){\r\n    .banner3[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{\r\n        width: 30%;\r\n        height: 20%;\r\n        background: transparent;\r\n        border: 1px solid blueviolet;\r\n        font-weight: bolder;\r\n        font-size: 1em;\r\n        cursor: pointer;\r\n      }\r\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/help-center/help-center-content/help-center-content.component.ngfactory.js":
/*!********************************************************************************************!*\
  !*** ./src/app/help-center/help-center-content/help-center-content.component.ngfactory.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./help-center-content.component.css.shim.ngstyle */ "./src/app/help-center/help-center-content/help-center-content.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./help-center-content.component */ "./src/app/help-center/help-center-content/help-center-content.component.ts");
var i5 = __webpack_require__(/*! ../../shared/services/get.service */ "./src/app/shared/services/get.service.ts");
var i6 = __webpack_require__(/*! ../../shared/services/link.service */ "./src/app/shared/services/link.service.ts");
var i7 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_HelpCenterContentComponent = [i0.styles];
var RenderType_HelpCenterContentComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HelpCenterContentComponent, data: {} });
exports.RenderType_HelpCenterContentComponent = RenderType_HelpCenterContentComponent;
function View_HelpCenterContentComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 6, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 4, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.SubtopicsIconChange(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 2, "div", [["class", "topicdata"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, ["", ""]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/Helpcenter/", _v.context.$implicit.name, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.icon, ""); _ck(_v, 4, 0, currVal_3); var currVal_4 = _v.context.$implicit.name; _ck(_v, 7, 0, currVal_4); }); }
function View_HelpCenterContentComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "ul", [["class", "side-nav"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HelpCenterContentComponent_2)), i1.ɵdid(2, 278528, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.topics; _ck(_v, 2, 0, currVal_0); }, null); }
function View_HelpCenterContentComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, [[2, 0], ["problem", 1]], null, 4, "div", [["class", "subtopicdata"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.getSeo(_v.context.$implicit.id) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 0, "img", [["class", "img-responsive"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "p", [["class", "subtid"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(3, "/HelpCenter/", _v.context.$implicit.topic_id, "/", _v.context.$implicit.name, "/", _v.context.$implicit.id, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.icon, ""); _ck(_v, 3, 0, currVal_3); var currVal_4 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_4); }); }
function View_HelpCenterContentComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { problems: 0 }), i1.ɵqud(671088640, 2, { problem: 1 }), (_l()(), i1.ɵeld(2, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Get Answer for the most common quetsion and learn to use \"Sports Social\" like Champ."])), (_l()(), i1.ɵeld(4, 0, null, null, 5, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HelpCenterContentComponent_1)), i1.ɵdid(6, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(7, 0, [[1, 0], ["problems", 1]], null, 2, "div", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HelpCenterContentComponent_3)), i1.ɵdid(9, 278528, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(10, 0, null, null, 7, "div", [["class", "banner3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 6, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Start your journey with sports social "])), (_l()(), i1.ɵeld(13, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 2, "a", [["href", "https://goo.gl/qrgCz5"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "button", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Get Started"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.windowNavbar; _ck(_v, 6, 0, currVal_0); var currVal_1 = _co.subtopics; _ck(_v, 9, 0, currVal_1); }, null); }
exports.View_HelpCenterContentComponent_0 = View_HelpCenterContentComponent_0;
function View_HelpCenterContentComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "SportSocial-help-center-content", [], null, null, null, View_HelpCenterContentComponent_0, RenderType_HelpCenterContentComponent)), i1.ɵdid(1, 114688, null, 0, i4.HelpCenterContentComponent, [i5.GetService, i2.ActivatedRoute, i6.LinkService, i7.Meta, i7.Title, i1.Renderer2], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HelpCenterContentComponent_Host_0 = View_HelpCenterContentComponent_Host_0;
var HelpCenterContentComponentNgFactory = i1.ɵccf("SportSocial-help-center-content", i4.HelpCenterContentComponent, View_HelpCenterContentComponent_Host_0, {}, {}, []);
exports.HelpCenterContentComponentNgFactory = HelpCenterContentComponentNgFactory;


/***/ }),

/***/ "./src/app/help-center/help-center-content/help-center-content.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/help-center/help-center-content/help-center-content.component.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var get_service_1 = __webpack_require__(/*! ../../shared/services/get.service */ "./src/app/shared/services/get.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var link_service_1 = __webpack_require__(/*! ../../shared/services/link.service */ "./src/app/shared/services/link.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var HelpCenterContentComponent = /** @class */ (function () {
    function HelpCenterContentComponent(getService, route, link, meta, title, renderer) {
        this.getService = getService;
        this.route = route;
        this.link = link;
        this.meta = meta;
        this.title = title;
        this.renderer = renderer;
        this.topicName = "";
        this.windowNavbar = true;
        this.Keywords = [];
        this.topics = [];
        this.subtopics = [];
        this.topicname = '';
        this.isDropdownIconclicked = false;
        this.pagetitle = 'Sports Social Help Center';
        this.description = "How can we help you today? Using Sports Social, New to Sports Social? Learn the basics to get the most out of Sports Social. Having an issue contact us";
        this.metakeywords = "Sports Social Help,Sports Social Help Center,Customer care Sports Social,Contact Sports Social,Chase Your Sport,FAQ Sports Social,Sports Social Support";
        this.top = '';
    }
    HelpCenterContentComponent.prototype.AllTopics = function () {
        var _this = this;
        this.getService.getTopics().subscribe(function (res) {
            var body = JSON.parse(res._body);
            for (var i in body) {
                _this.topics.push({
                    id: body[i].id,
                    name: body[i].name,
                    icon: body[i].icon,
                    shortDesc: body[i].shortDesc,
                    namkaran: body[i].name
                });
                if (_this.topicname != '') {
                    if (_this.topicname == body[i].name)
                        _this.topicId = body[i].id;
                }
                var url = 'https://www.sportsocial.in/' + _this.strip(body[i].namkaran).replace(/\s/g, '-').toLowerCase();
                _this.link.addTag({ rel: 'canonical', href: url });
            }
            console.log(_this.topics);
            console.log(_this.topicname);
            if (_this.topicname == '')
                _this.topicId = _this.topics[0].id;
            _this.getSubTopics(_this.topicId);
        });
    };
    HelpCenterContentComponent.prototype.strip = function (html) {
        var tmp = this.renderer.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };
    HelpCenterContentComponent.prototype.SubtopicsIconChange = function (id) {
        this.subtopics = [];
        this.getSubTopics(id);
        this.getSeo(id);
    };
    ;
    HelpCenterContentComponent.prototype.getSubTopics = function (id) {
        var _this = this;
        this.getService.getSubTopic(id).subscribe(function (res) {
            var body = JSON.parse(res._body);
            _this.subtopics = [];
            for (var i in body) {
                _this.subtopics.push({
                    topic_id: body[i].topic_id,
                    id: body[i].id,
                    name: body[i].name,
                    icon: body[i].icon,
                    shortDesc: body[i].shortDesc
                });
            }
            console.log(_this.subtopics);
        });
    };
    HelpCenterContentComponent.prototype.getSeo = function (id) {
        for (var topic in this.topics) {
            if (this.topics[topic].id == id)
                this.top = this.topics[topic].name;
        }
        this.title.setTitle(this.top);
        this.meta.updateTag({ name: 'title', content: this.top });
    };
    HelpCenterContentComponent.prototype.openDropdown = function () {
        this.isDropdownIconclicked = true;
    };
    HelpCenterContentComponent.prototype.closeDropdown = function () {
        this.isDropdownIconclicked = false;
    };
    HelpCenterContentComponent.prototype.ngOnInit = function () {
        this.title.setTitle(this.pagetitle);
        this.meta.updateTag({ name: 'title', content: this.pagetitle });
        this.meta.updateTag({ name: 'description', content: this.description });
        this.meta.updateTag({ name: 'keywords', content: this.metakeywords });
        this.meta.updateTag({ property: 'og:title', content: this.pagetitle });
        this.meta.updateTag({ property: 'og:description', content: this.description });
        this.meta.updateTag({ property: 'og:keywords', content: this.metakeywords });
        if (this.route.snapshot.paramMap.has("topicname")) {
            this.topicname = this.route.snapshot.paramMap.get("topicname");
        }
        this.AllTopics();
    };
    HelpCenterContentComponent.prototype.setCanonivalURL = function () {
        var key;
        if (this.Keywords[0].search(/ /g) === -1) {
            key = this.Keywords[0];
        }
        else {
            key = this.Keywords[0].replace(/\s/g, '-');
        }
        var url = 'https://www.sportsocial.in/' + key
            + '/' + this.pagetitle.replace(/\s/g, '-') + '/';
        this.link.addTag({ rel: 'canonical', href: url });
    };
    return HelpCenterContentComponent;
}());
exports.HelpCenterContentComponent = HelpCenterContentComponent;
/*
if(window.innerWidth<900){
  this.windowNavbar=false;
  this.renderer.setStyle(this.problems.nativeElement,'display','inline-block')
  this.renderer.setStyle(this.problems.nativeElement,'width','100%')
}
else{
  this.windowNavbar=true;
  this.renderer.setStyle(this.problems.nativeElement,'display','inline-block')
  this.renderer.setStyle(this.problems.nativeElement,'width','80%')
}
if(window.innerWidth<500){
 // this.problem.map(div=>{this.renderer.setStyle(div,'max-width','50%')})
  
}
}

@HostListener('window:resize', []) onScreenResize() {
if(window.innerWidth<800){
  this.windowNavbar=false;
  this.renderer.setStyle(this.problems.nativeElement,'display','block')
  this.renderer.setStyle(this.problems.nativeElement,'width','100%')
}
else{
  this.windowNavbar=true;
  this.renderer.setStyle(this.problems.nativeElement,'display','inline-block')
  this.renderer.setStyle(this.problems.nativeElement,'width','79%')
}
if(window.innerWidth<500){
  //this.problem.map(div=>{this.renderer.setStyle(div,'max-width','50%')})
  this.windowNavbar = false;
  this.renderer.setStyle(this.problems.nativeElement, 'display', 'inline-block')
  this.renderer.setStyle(this.problems.nativeElement,'width','50%')
  
}
}*/
/*mobile view*/


/***/ }),

/***/ "./src/app/help-center/help-center-header/help-center-header.component.css.shim.ngstyle.js":
/*!*************************************************************************************************!*\
  !*** ./src/app/help-center/help-center-header/help-center-header.component.css.shim.ngstyle.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["*[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    font-family: 'Roboto',sans-serif;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    background-color: blueviolet; \r\n    background-image: linear-gradient(#024771,#5058e9 );\r\n    \r\n    width: 100%;\r\n    height: 350px;\r\n    margin-top:58px;\r\n}\r\n.brand-title[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n    text-align: left;\r\n    display: inline-block;\r\n    width: 60%;\r\n    padding-left: 5px;\r\n}\r\n.brand-title[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child{\r\n    color:#ffffff;\r\n    font-size: 2em;\r\n    font-weight: 700;\r\n}\r\n.brand-title[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{\r\n  color:#ffffff;\r\n    font-size: 1.5em;\r\n    padding-left: 8px;\r\n}\r\n.city[_ngcontent-%COMP%]{\r\n    font-size: 1.2em;\r\n    color: #fafafa;\r\n    display: inline-block;\r\n    width: 49%;\r\n    text-align: right;\r\n    vertical-align: middle !important;\r\n}\r\n.header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2) > p[_ngcontent-%COMP%]:first-child{\r\n    text-align: center;\r\n    color: #ffffff;\r\n    font-size: 2em;\r\n    font-weight: 700;\r\n}\r\n.header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2) > p[_ngcontent-%COMP%]:last-child{\r\n    text-align: center;\r\n    color: #ffffff;\r\n    font-size: 1.5em;\r\n}\r\n.brand-img-holder[_ngcontent-%COMP%]{\r\n    max-width: 150px;\r\n    max-height: 170px;\r\n    margin: 5px auto;\r\n}\r\n.brand-img[_ngcontent-%COMP%]{\r\n  margin-top:3%;\r\n    width: 80%;\r\n    height: 80%;\r\n}\r\n.quickAnswers[_ngcontent-%COMP%]{\r\n    width:70%;\r\n    margin: 2% auto;\r\n    white-space: nowrap;\r\n    color: #ffffff;\r\n}\r\n.quickAnswers[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:first-child{\r\n    display: inline-block;\r\n}\r\n.quickAnswers[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:last-child{\r\n    display: inline-block;\r\n    width: 80%;\r\n    text-align: center;\r\n    vertical-align: top;\r\n    white-space: normal;\r\n}\r\n.quickAnswers[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    margin: 0% 0% 1% 1%;\r\n    color: #fafafa;\r\n    padding: 0.1% 1.2% 0.1% 1.2%;\r\n    border: 1px solid #fafafa;\r\n    border-radius: 20px;\r\n}\r\n.heading[_ngcontent-%COMP%]{\r\n    color:white;\r\n    text-align: center;\r\n    font-size: 2em;\r\n    font-weight: bolder;\r\n    padding: 1%;\r\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/help-center/help-center-header/help-center-header.component.ngfactory.js":
/*!******************************************************************************************!*\
  !*** ./src/app/help-center/help-center-header/help-center-header.component.ngfactory.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./help-center-header.component.css.shim.ngstyle */ "./src/app/help-center/help-center-header/help-center-header.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../header/header.component.ngfactory */ "./src/app/header/header.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../../header/header.component */ "./src/app/header/header.component.ts");
var i4 = __webpack_require__(/*! ../../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i5 = __webpack_require__(/*! ./help-center-header.component */ "./src/app/help-center/help-center-header/help-center-header.component.ts");
var styles_HelpCenterHeaderComponent = [i0.styles];
var RenderType_HelpCenterHeaderComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HelpCenterHeaderComponent, data: {} });
exports.RenderType_HelpCenterHeaderComponent = RenderType_HelpCenterHeaderComponent;
function View_HelpCenterHeaderComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-header", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i2.View_HeaderComponent_0, i2.RenderType_HeaderComponent)), i1.ɵdid(1, 4308992, null, 0, i3.HeaderComponent, [i4.PropertyService], null, null), (_l()(), i1.ɵeld(2, 0, null, null, 10, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "p", [["class", "brand-title"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "div", [["class", "brand-img-holder"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "img", [["class", "brand-img"], ["src", "assets/images/logo white.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "p", [["class", "heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Welcome to Sports Social Help Center"])), (_l()(), i1.ɵeld(10, 0, null, null, 1, "p", [["class", "trouble"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Having Trouble? We are here to help"])), (_l()(), i1.ɵeld(12, 0, null, null, 0, "div", [["class", "quickAnswers"]], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HelpCenterHeaderComponent_0 = View_HelpCenterHeaderComponent_0;
function View_HelpCenterHeaderComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "SportSocial-help-center-header", [], null, null, null, View_HelpCenterHeaderComponent_0, RenderType_HelpCenterHeaderComponent)), i1.ɵdid(1, 114688, null, 0, i5.HelpCenterHeaderComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HelpCenterHeaderComponent_Host_0 = View_HelpCenterHeaderComponent_Host_0;
var HelpCenterHeaderComponentNgFactory = i1.ɵccf("SportSocial-help-center-header", i5.HelpCenterHeaderComponent, View_HelpCenterHeaderComponent_Host_0, {}, {}, []);
exports.HelpCenterHeaderComponentNgFactory = HelpCenterHeaderComponentNgFactory;


/***/ }),

/***/ "./src/app/help-center/help-center-header/help-center-header.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/help-center/help-center-header/help-center-header.component.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var HelpCenterHeaderComponent = /** @class */ (function () {
    function HelpCenterHeaderComponent() {
        this.quickAnswers = [
            { ques: "How to use Sports Social in your locality?", url: "#" },
            { ques: "What is Open Arena?", url: "#" },
            { ques: "How to inform playmates about my match?", url: "#" },
            { ques: "How to connect with people having similar level of expertise?", url: "#" },
            { ques: "How to postpone my match?", url: "#" },
        ];
    }
    HelpCenterHeaderComponent.prototype.ngOnInit = function () {
    };
    return HelpCenterHeaderComponent;
}());
exports.HelpCenterHeaderComponent = HelpCenterHeaderComponent;


/***/ }),

/***/ "./src/app/help-center/help-center.component.css.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/help-center/help-center.component.css.shim.ngstyle.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/help-center/help-center.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/help-center/help-center.component.ngfactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./help-center.component.css.shim.ngstyle */ "./src/app/help-center/help-center.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./help-center-header/help-center-header.component.ngfactory */ "./src/app/help-center/help-center-header/help-center-header.component.ngfactory.js");
var i3 = __webpack_require__(/*! ./help-center-header/help-center-header.component */ "./src/app/help-center/help-center-header/help-center-header.component.ts");
var i4 = __webpack_require__(/*! ./help-center-content/help-center-content.component.ngfactory */ "./src/app/help-center/help-center-content/help-center-content.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./help-center-content/help-center-content.component */ "./src/app/help-center/help-center-content/help-center-content.component.ts");
var i6 = __webpack_require__(/*! ../shared/services/get.service */ "./src/app/shared/services/get.service.ts");
var i7 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i8 = __webpack_require__(/*! ../shared/services/link.service */ "./src/app/shared/services/link.service.ts");
var i9 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i10 = __webpack_require__(/*! ./help-center.component */ "./src/app/help-center/help-center.component.ts");
var styles_HelpCenterComponent = [i0.styles];
var RenderType_HelpCenterComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HelpCenterComponent, data: {} });
exports.RenderType_HelpCenterComponent = RenderType_HelpCenterComponent;
function View_HelpCenterComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { helpCenter: 0 }), (_l()(), i1.ɵeld(1, 0, null, null, 1, "SportSocial-help-center-header", [["responsiveFont", ""]], null, null, null, i2.View_HelpCenterHeaderComponent_0, i2.RenderType_HelpCenterHeaderComponent)), i1.ɵdid(2, 114688, null, 0, i3.HelpCenterHeaderComponent, [], null, null), (_l()(), i1.ɵeld(3, 0, null, null, 1, "SportSocial-help-center-content", [["responsiveFont", ""]], null, null, null, i4.View_HelpCenterContentComponent_0, i4.RenderType_HelpCenterContentComponent)), i1.ɵdid(4, 114688, null, 0, i5.HelpCenterContentComponent, [i6.GetService, i7.ActivatedRoute, i8.LinkService, i9.Meta, i9.Title, i1.Renderer2], null, null)], function (_ck, _v) { _ck(_v, 2, 0); _ck(_v, 4, 0); }, null); }
exports.View_HelpCenterComponent_0 = View_HelpCenterComponent_0;
function View_HelpCenterComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-help-center", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onScreenResize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_HelpCenterComponent_0, RenderType_HelpCenterComponent)), i1.ɵdid(1, 114688, null, 0, i10.HelpCenterComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HelpCenterComponent_Host_0 = View_HelpCenterComponent_Host_0;
var HelpCenterComponentNgFactory = i1.ɵccf("app-help-center", i10.HelpCenterComponent, View_HelpCenterComponent_Host_0, {}, {}, []);
exports.HelpCenterComponentNgFactory = HelpCenterComponentNgFactory;


/***/ }),

/***/ "./src/app/help-center/help-center.component.ts":
/*!******************************************************!*\
  !*** ./src/app/help-center/help-center.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var HelpCenterComponent = /** @class */ (function () {
    function HelpCenterComponent() {
        this.togglableNav = false;
    }
    HelpCenterComponent.prototype.ngOnInit = function () {
        console.log(this.helpCenter);
    };
    HelpCenterComponent.prototype.onScreenResize = function () {
    };
    return HelpCenterComponent;
}());
exports.HelpCenterComponent = HelpCenterComponent;


/***/ }),

/***/ "./src/app/help-center/help-center.module.ts":
/*!***************************************************!*\
  !*** ./src/app/help-center/help-center.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HelpCenterModule = /** @class */ (function () {
    function HelpCenterModule() {
    }
    return HelpCenterModule;
}());
exports.HelpCenterModule = HelpCenterModule;


/***/ }),

/***/ "./src/app/home/home.component.css.shim.ngstyle.js":
/*!*********************************************************!*\
  !*** ./src/app/home/home.component.css.shim.ngstyle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/home/home.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/home/home.component.ngfactory.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home.component.css.shim.ngstyle */ "./src/app/home/home.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../header/header.component.ngfactory */ "./src/app/header/header.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var i4 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i5 = __webpack_require__(/*! ../carousel/carousel.component.ngfactory */ "./src/app/carousel/carousel.component.ngfactory.js");
var i6 = __webpack_require__(/*! ../carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
var i7 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i8 = __webpack_require__(/*! ../navigation-bar/navigation-bar.component.ngfactory */ "./src/app/navigation-bar/navigation-bar.component.ngfactory.js");
var i9 = __webpack_require__(/*! ../navigation-bar/navigation-bar.component */ "./src/app/navigation-bar/navigation-bar.component.ts");
var i10 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i11 = __webpack_require__(/*! ../global-feed/global-open-arena-feed/global-open-arena-feed.component.ngfactory */ "./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.ngfactory.js");
var i12 = __webpack_require__(/*! ../global-feed/global-open-arena-feed/global-open-arena-feed.component */ "./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.ts");
var i13 = __webpack_require__(/*! ../shared/services/match-data.service */ "./src/app/shared/services/match-data.service.ts");
var i14 = __webpack_require__(/*! ../shared/services/news.service */ "./src/app/shared/services/news.service.ts");
var i15 = __webpack_require__(/*! ../footer/footer.component.ngfactory */ "./src/app/footer/footer.component.ngfactory.js");
var i16 = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
var i17 = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var i18 = __webpack_require__(/*! ../shared/services/link.service */ "./src/app/shared/services/link.service.ts");
var styles_HomeComponent = [i0.styles];
var RenderType_HomeComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeComponent, data: {} });
exports.RenderType_HomeComponent = RenderType_HomeComponent;
function View_HomeComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-header", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i2.View_HeaderComponent_0, i2.RenderType_HeaderComponent)), i1.ɵdid(1, 4308992, null, 0, i3.HeaderComponent, [i4.PropertyService], null, null), (_l()(), i1.ɵeld(2, 0, null, null, 1, "sports-social-carousel", [], null, [["window", "resize"], ["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onresize() !== false);
        ad = (pd_0 && ad);
    } if (("window:scroll" === en)) {
        var pd_1 = (i1.ɵnov(_v, 3).onscroll() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i5.View_CarouselComponent_0, i5.RenderType_CarouselComponent)), i1.ɵdid(3, 114688, null, 0, i6.CarouselComponent, [i1.Renderer2, i4.PropertyService, i4.PropertyService, i7.Title, i7.Meta], null, null), (_l()(), i1.ɵeld(4, 0, null, null, 1, "sports-social-navigation-bar", [], null, [["window", "resize"], ["window", "scroll"], [null, "mouseover"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 5).onresize() !== false);
        ad = (pd_0 && ad);
    } if (("window:scroll" === en)) {
        var pd_1 = (i1.ɵnov(_v, 5).onscroll() !== false);
        ad = (pd_1 && ad);
    } if (("mouseover" === en)) {
        var pd_2 = (i1.ɵnov(_v, 5).onHover($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, i8.View_NavigationBarComponent_0, i8.RenderType_NavigationBarComponent)), i1.ɵdid(5, 114688, null, 0, i9.NavigationBarComponent, [i4.PropertyService, i4.PropertyService, i1.Renderer2, i10.ActivatedRoute, i1.NgZone, i7.Meta, i7.Title], null, null), (_l()(), i1.ɵeld(6, 0, null, null, 1, "sports-social-global-open-arena-feed", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i1.ɵnov(_v, 7).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i11.View_GlobalOpenArenaFeedComponent_0, i11.RenderType_GlobalOpenArenaFeedComponent)), i1.ɵdid(7, 245760, null, 0, i12.GlobalOpenArenaFeedComponent, [i13.MatchDataService, i14.NewsService, i1.Renderer2], null, null), (_l()(), i1.ɵeld(8, 0, null, null, 1, "sports-social-footer", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i1.ɵnov(_v, 9).onscroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i15.View_FooterComponent_0, i15.RenderType_FooterComponent)), i1.ɵdid(9, 114688, null, 0, i16.FooterComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); _ck(_v, 7, 0); _ck(_v, 9, 0); }, null); }
exports.View_HomeComponent_0 = View_HomeComponent_0;
function View_HomeComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i1.ɵdid(1, 114688, null, 0, i17.HomeComponent, [i7.Meta, i18.LinkService, i7.Title, i1.PLATFORM_ID], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeComponent_Host_0 = View_HomeComponent_Host_0;
var HomeComponentNgFactory = i1.ɵccf("sports-social-home", i17.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
exports.HomeComponentNgFactory = HomeComponentNgFactory;


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var link_service_1 = __webpack_require__(/*! ../shared/services/link.service */ "./src/app/shared/services/link.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(metaservice, link, titleservice, platformid) {
        this.metaservice = metaservice;
        this.link = link;
        this.titleservice = titleservice;
        this.Keywords = [];
        link.addTag({ rel: 'canonical', href: 'https://www.sportsocial.in/' });
        metaservice.addTags([
            { name: 'theme-color', content: '#4327a0' },
            { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
            { property: 'og:site_name', content: 'Sport Social' },
            { property: 'fb:app_id', content: '1750709328507665' },
            { name: 'facebook:creator', content: '@SourabhArora' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@Sportsoical' },
            { name: 'twitter:creator', content: '@SourabhArora' },
            { name: 'twitter:title', content: 'Sports Social: Sports Digital Media and Networking Service' },
            { name: 'twitter:description', content: "Sports Social Blog: Chase Your Sport aims to create a sustainable\n          platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and\n          career in sports." },
            { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
        ]);
        this.isbrowser = common_1.isPlatformBrowser(platformid);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleservice.setTitle("Sports Social: Making it easier to play around");
    };
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/home/home.module.ngfactory.js":
/*!***********************************************!*\
  !*** ./src/app/home/home.module.ngfactory.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./home.module */ "./src/app/home/home.module.ts");
var i2 = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ../open-cards/open-news-card/open-news-card.component.ngfactory */ "./src/app/open-cards/open-news-card/open-news-card.component.ngfactory.js");
var i4 = __webpack_require__(/*! ./home.component.ngfactory */ "./src/app/home/home.component.ngfactory.js");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var i7 = __webpack_require__(/*! ../carousel/carousel.module */ "./src/app/carousel/carousel.module.ts");
var i8 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i9 = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
var i10 = __webpack_require__(/*! ../navigation-bar/navigation-bar.module */ "./src/app/navigation-bar/navigation-bar.module.ts");
var i11 = __webpack_require__(/*! ../gallery/gallery.module */ "./src/app/gallery/gallery.module.ts");
var i12 = __webpack_require__(/*! ../open-cards/open-match-card/open-match-card.module */ "./src/app/open-cards/open-match-card/open-match-card.module.ts");
var i13 = __webpack_require__(/*! ../cards/match-card/match-card.module */ "./src/app/cards/match-card/match-card.module.ts");
var i14 = __webpack_require__(/*! ../open-cards/open-news-card/open-news-card.module */ "./src/app/open-cards/open-news-card/open-news-card.module.ts");
var i15 = __webpack_require__(/*! ../cards/news-card/news-card.module */ "./src/app/cards/news-card/news-card.module.ts");
var i16 = __webpack_require__(/*! ../cards/live-match-card/live-match-card.module */ "./src/app/cards/live-match-card/live-match-card.module.ts");
var i17 = __webpack_require__(/*! ../global-feed/global-open-arena-feed/global-open-arena-feed.module */ "./src/app/global-feed/global-open-arena-feed/global-open-arena-feed.module.ts");
var i18 = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
var i19 = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var HomeModuleNgFactory = i0.ɵcmf(i1.HomeModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.OpenNewsCardComponentNgFactory, i4.HomeComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID, [2, i5.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i6.NgMasonryGridService, i6.NgMasonryGridService, [i0.PLATFORM_ID]), i0.ɵmpd(1073742336, i5.CommonModule, i5.CommonModule, []), i0.ɵmpd(1073742336, i7.CarouselModule, i7.CarouselModule, []), i0.ɵmpd(1073742336, i8.RouterModule, i8.RouterModule, [[2, i8.ɵangular_packages_router_router_a], [2, i8.Router]]), i0.ɵmpd(1073742336, i9.HeaderModule, i9.HeaderModule, []), i0.ɵmpd(1073742336, i10.NavigationBarModule, i10.NavigationBarModule, []), i0.ɵmpd(1073742336, i11.GalleryModule, i11.GalleryModule, []), i0.ɵmpd(1073742336, i12.OpenMatchCardModule, i12.OpenMatchCardModule, []), i0.ɵmpd(1073742336, i13.MatchCardModule, i13.MatchCardModule, []), i0.ɵmpd(1073742336, i14.OpenNewsCardModule, i14.OpenNewsCardModule, []), i0.ɵmpd(1073742336, i15.NewsCardModule, i15.NewsCardModule, []), i0.ɵmpd(1073742336, i16.LiveMatchCardModule, i16.LiveMatchCardModule, []), i0.ɵmpd(1073742336, i6.NgMasonryGridModule, i6.NgMasonryGridModule, []), i0.ɵmpd(1073742336, i17.GlobalOpenArenaFeedModule, i17.GlobalOpenArenaFeedModule, []), i0.ɵmpd(1073742336, i18.FooterModule, i18.FooterModule, []), i0.ɵmpd(1073742336, i1.HomeModule, i1.HomeModule, []), i0.ɵmpd(1024, i8.ROUTES, function () { return [[{ path: "", component: i19.HomeComponent }]]; }, [])]); });
exports.HomeModuleNgFactory = HomeModuleNgFactory;


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ }),

/***/ "./src/app/livedata/livedata.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/livedata/livedata.component.css.shim.ngstyle.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".cricket[_ngcontent-%COMP%]{\n    flex-wrap: nowrap;\n    z-index: 10;\n    width:90%;\n    margin-left: 5%;\n    height:450px;\n    \n    margin-top: 5%;\n    display: inline-block;\n}\n.forUi[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    \n    border: 1px solid black;\n    display: inline-block;\n    overflow-x: scroll;\n}\n.content[_ngcontent-%COMP%]{\n    width: 20%;\n    height: 90%;\n    border: 1px solid red;\n    margin: 1%;\n    border-radius: 3%;\n    \n    overflow-y: hidden;\n    display: inline-block;\n    \n}\n.content[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{\n    overflow-x: hidden;\n}\n.header[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 150px;\n    \n    overflow: hidden;\n    background-image: url('/assets/images/631286-adelaide-oval-afp.jpg') ;\n    background-size: cover;\n    \n    \n    \n}\n.header[_ngcontent-%COMP%]   .seriesname[_ngcontent-%COMP%]{\n    color: white;\n    text-align: center;\n    margin-top: 2%;\n}\n.header[_ngcontent-%COMP%]   .matchNo[_ngcontent-%COMP%]{\n    margin-top: -6%;\n    margin-left: 2%;\n}\n.icon[_ngcontent-%COMP%]{\n    margin-top: 28%;\n    display: inline-flex;\n    width: 97%;\n    height: 40%;\n    \n    \n}\n.icon[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\n    width:30%;\n    height: 60%;\n    border-radius: 50%;\n}\n.vs[_ngcontent-%COMP%]{\n    color: white;\n    margin-left: 8%;\n    text-align: center;\n    margin-top: 3%;\n}\n.icon1[_ngcontent-%COMP%]{\n    float: left;\n    margin-left: 8%;\n}\n.icon2[_ngcontent-%COMP%]{\n    margin-left: 5%;\n}\n.venue[_ngcontent-%COMP%]{\n    font-size: 0.8em;\n    text-align: center;\n    margin-top: 5%;\n}\n.starttime[_ngcontent-%COMP%]{\n    font-size: 0.8em;\n    text-align: center;\n    margin-top: 1%;\n}\nfieldset[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.fieldset1[_ngcontent-%COMP%]{\n    margin-top: 10%;\n    border: 1px solid #dddddd;\n    border-bottom: none;\n}\n.fieldset2[_ngcontent-%COMP%]{\n    margin-top: 5%;\n    border: 1px solid #dddddd;\n    border-bottom: none;\n}\n.vs2[_ngcontent-%COMP%]{\n    text-align: center;\n    margin-top: 5%;\n    color: red;\n}\n.matchNo[_ngcontent-%COMP%]{\n    margin-top: 32%;\n    text-align: center;\n\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/livedata/livedata.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/livedata/livedata.component.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./livedata.component.css.shim.ngstyle */ "./src/app/livedata/livedata.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../header/header.component.ngfactory */ "./src/app/header/header.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var i4 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! ./livedata.component */ "./src/app/livedata/livedata.component.ts");
var i7 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i8 = __webpack_require__(/*! ../shared/services/get.service */ "./src/app/shared/services/get.service.ts");
var styles_LivedataComponent = [i0.styles];
var RenderType_LivedataComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_LivedataComponent, data: {} });
exports.RenderType_LivedataComponent = RenderType_LivedataComponent;
function View_LivedataComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 22, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 7, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "p", [["class", "seriesname"]], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""])), (_l()(), i1.ɵeld(4, 0, null, null, 4, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "img", [["class", "icon1"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "p", [["class", "vs"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["V/S"])), (_l()(), i1.ɵeld(8, 0, null, null, 0, "img", [["class", "icon2"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 1, "p", [["class", "venue"]], null, null, null, null, null)), (_l()(), i1.ɵted(10, null, ["", ""])), (_l()(), i1.ɵeld(11, 0, null, null, 1, "p", [["class", "starttime"]], null, null, null, null, null)), (_l()(), i1.ɵted(12, null, ["", ""])), (_l()(), i1.ɵeld(13, 0, null, null, 2, "fieldset", [["class", "fieldset1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 1, "legend", [], null, null, null, null, null)), (_l()(), i1.ɵted(15, null, ["", ""])), (_l()(), i1.ɵeld(16, 0, null, null, 1, "p", [["class", "vs2"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["V/S"])), (_l()(), i1.ɵeld(18, 0, null, null, 2, "fieldset", [["class", "fieldset2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 1, "legend", [], null, null, null, null, null)), (_l()(), i1.ɵted(20, null, ["", ""])), (_l()(), i1.ɵeld(21, 0, null, null, 1, "p", [["class", "matchNo"]], null, null, null, null, null)), (_l()(), i1.ɵted(22, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.series; _ck(_v, 3, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.t1_logourl, ""); _ck(_v, 5, 0, currVal_1); var currVal_2 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.t2_logourl, ""); _ck(_v, 8, 0, currVal_2); var currVal_3 = _v.context.$implicit.venue; _ck(_v, 10, 0, currVal_3); var currVal_4 = _v.context.$implicit.startdate; _ck(_v, 12, 0, currVal_4); var currVal_5 = _v.context.$implicit.team1; _ck(_v, 15, 0, currVal_5); var currVal_6 = _v.context.$implicit.team2; _ck(_v, 20, 0, currVal_6); var currVal_7 = _v.context.$implicit.matchNo; _ck(_v, 22, 0, currVal_7); }); }
function View_LivedataComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-header", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i2.View_HeaderComponent_0, i2.RenderType_HeaderComponent)), i1.ɵdid(1, 4308992, null, 0, i3.HeaderComponent, [i4.PropertyService], null, null), (_l()(), i1.ɵeld(2, 0, null, null, 5, "div", [["class", "cricket"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["UPCOMING MATCHES"])), (_l()(), i1.ɵeld(5, 0, null, null, 2, "div", [["class", "forUi"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_LivedataComponent_1)), i1.ɵdid(7, 278528, null, 0, i5.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_0 = _co.cricketArr; _ck(_v, 7, 0, currVal_0); }, null); }
exports.View_LivedataComponent_0 = View_LivedataComponent_0;
function View_LivedataComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-livedata", [], null, null, null, View_LivedataComponent_0, RenderType_LivedataComponent)), i1.ɵdid(1, 114688, null, 0, i6.LivedataComponent, [i7.Http, i8.GetService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_LivedataComponent_Host_0 = View_LivedataComponent_Host_0;
var LivedataComponentNgFactory = i1.ɵccf("sports-social-livedata", i6.LivedataComponent, View_LivedataComponent_Host_0, {}, {}, []);
exports.LivedataComponentNgFactory = LivedataComponentNgFactory;


/***/ }),

/***/ "./src/app/livedata/livedata.component.ts":
/*!************************************************!*\
  !*** ./src/app/livedata/livedata.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var http_1 = __webpack_require__(/*! @angular/http */ "@angular/http");
var get_service_1 = __webpack_require__(/*! ../shared/services/get.service */ "./src/app/shared/services/get.service.ts");
var LivedataComponent = /** @class */ (function () {
    // match:{
    //   meta:{
    //     upcomingMatchCount,
    //     inProgressMatchCount,
    //     completedMatchCount
    //   },
    //     matchList:
    //     {
    //         matches:[
    //           {
    //                 statisticsProvider,
    //                   series:{
    //                     name,
    //                     shortName
    //                   }
    //           }
    //       ]
    //     }
    // }
    function LivedataComponent(http, get) {
        this.http = http;
        this.get = get;
        this.data1 = {};
        this.matchArr = {};
        this.cricketArr = [];
    }
    LivedataComponent.prototype.ngOnInit = function () {
        this.matchdata();
    };
    LivedataComponent.prototype.matchdata = function () {
        var _this = this;
        this.get.getUpcomingCricket()
            .subscribe(function (res) {
            var data1 = res.json();
            // console.log("thi sis data1:"+JSON.stringify(data1));
            for (var i = 0; i < data1.length; i++) {
                _this.cricketArr.push({
                    id: data1[i].id,
                    series: data1[i].series.name,
                    shieldimg: data1[i].series.shieldImageUrl,
                    matchNo: data1[i].name,
                    venue: data1[i].venue.name,
                    team1: data1[i].homeTeam.name,
                    t1_shortName: data1[i].homeTeam.shortName,
                    t1_logourl: data1[i].homeTeam.logoUrl,
                    t1_teamcolor: data1[i].homeTeam.teamColour,
                    team2: data1[i].awayTeam.name,
                    t2_name: data1[i].awayTeam.shortName,
                    t2_logourl: data1[i].awayTeam.logoUrl,
                    t2_teamcolor: data1[i].awayTeam.teamColour,
                    startdate: data1[i].startDateTime
                });
                // console.log("this si venue:",this.cricketArr[i].venue);
            }
        });
    };
    return LivedataComponent;
}());
exports.LivedataComponent = LivedataComponent;
// matchdata(){
//   this.http.get('http://192.168.0.100:1000/score/listallmatches/')
//   .subscribe(res=>{
//     // console.log("this is response of live match"+JSON.stringify(res.json()));
//     this.data1=res.json();
//     // console.log("this is data1"+JSON.stringify(this.data1));
//     // console.log(this.data1["meta"].inProgressMatchCount,":inProgressMatchCount match data");
//     // console.log(this.data1["meta"].upcomingMatchCount,":Upcoming match data");
//     var matches=this.data1["matchList"]["matches"];
//     for(var i=0;i<matches.length;i++){
//         this.cricketArr.push({
//             id:matches[i].id,
//             staticpv:matches[i].statisticsProvider,
//             series:matches[i].series.name,
//             shieldimg:matches[i].series.shieldimg,
//             matchno:matches[i].name,
//             status:matches[i].status,
//             venue:matches[i].venue.name,
//             isbatting:matches[i].homeTeam.isbatting,
//             team1:matches[i].homeTeam.name,
//             t1_name:matches[i].homeTeam.name,
//             t1_logourl:matches[i].homeTeam.logoUrl,
//             t1_teamcolor:matches[i].homeTeam.teamColour,
//             team2:matches[i].awayTeam.name,
//             t2_name:matches[i].awayTeam.name,
//             t2_logourl:matches[i].awayTeam.logoUrl,
//             t2_teamcolor:matches[i].awayTeam.teamColour,
//             matchResult:matches[i].currentMatchState,
//             t1_score:matches[i].scores.homeScore,
//             team1_over:matches[i].scores.homeOvers,
//             t2_score:matches[i].scores.awayScore,
//             team2_over:matches[i].scores.awayOvers,
//             islive:matches[i].isLive,
//             startdate:matches[i].startDateTime
//         })
//         // console.log("this is mathchaarrr:"+this.cricketArr[i].id);
//         // console.log("this is staticpv:"+this.cricketArr[i].staticpv);
//         // console.log("this is team1:",this.cricketArr[i].team1);
//         // console.log("this is color of team1:",this.cricketArr[i].teamcolor);
//         console.log("this is team1:",this.cricketArr[i].team1_over);
//     }
//   });
// }


/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.css.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.css.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".navbar[_ngcontent-%COMP%]{\n    background-color: #ffffff;\n    box-shadow: 2px 2px 4px #bbbbbb;\n    text-align: center;\n    z-index: 8;\n    position: relative;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style: none;\n}\n\nli[_ngcontent-%COMP%]{\n    display: inline-block;\n    vertical-align: top;\n    padding: 10px 20px 10px 20px;\n    border-left: 1px solid #bbbbbb;\n}\n\nimg[_ngcontent-%COMP%] {\n    width: 16px;\n}\n\n.nav[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    color: #024771;\n    font-size: 1.1em;\n    font-weight: 500;\n    text-align: center\n}\n\n.more[_ngcontent-%COMP%]{\n    cursor: pointer;\n    text-align: center;\n}\n\n.dropdown[_ngcontent-%COMP%]{\n    position: absolute;\n    top:40px;\n    right:10%;\n    background-color: #ffffff;\n    box-shadow: 2px 2px 4px #bbbbbb;\n    z-index: 10;\n    overflow-y: visible;\n}\n\n.dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    display: block;\n    padding: 10px;\n}\n\n.active[_ngcontent-%COMP%]   {\n    color: #ffa600 !important;\n}\n\nli[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\n    color: #ffa600\n}\n\n.mobile-nav[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.mobile-nav[_ngcontent-%COMP%]    > .active-route[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    box-shadow: 2px 2px 4px #bbbbbb;\n    width: 100%;\n    padding: 10px;\n    text-align: left;\n\n}\n\n.active-route[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    margin-right:20px; \n    color: #ffa600;\n    font-weight: 500;\n}\n\n.mobile-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    position: absolute;\n    width: 300px;\n    top: 44px;\n    left: 0px;\n    z-index: 10;\n    background-color: white;\n    box-shadow: 1px 1px 4px #bbbbbb;\n    overflow-y: visible;\n}\n\n.mobile-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    display: block;\n    padding: 10px;\n    text-align: left;\n}\n\n@media screen and (max-width:414px) and (min-width:320px){\n    .mobile-nav[_ngcontent-%COMP%] {\n        position: relative;\n    }\n    .mobile-nav[_ngcontent-%COMP%]    > .active-route[_ngcontent-%COMP%] {\n        background-color: #ffffff;\n        box-shadow: 2px 2px 4px #bbbbbb;\n        width: 100%;\n        padding: 10px;\n        text-align: left;\n    \n    }\n    .active-route[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n        display: inline-block;\n        vertical-align: middle;\n        margin-right:20px; \n        color: #ffa600;\n        font-weight: 500;\n       }\n    \n    .mobile-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n        list-style-type: none;\n        position: absolute;\n        width: 300px;\n        top: 44px;\n        left: 0px;\n        z-index: 10;\n        background-color: white;\n        box-shadow: 1px 1px 4px #bbbbbb;\n        overflow-y: visible;\n    }\n    \n    .mobile-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n        display: block;\n        padding: 10px;\n        text-align: left;\n    }\n    \n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.ngfactory.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./navigation-bar.component.css.shim.ngstyle */ "./src/app/navigation-bar/navigation-bar.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./navigation-bar.component */ "./src/app/navigation-bar/navigation-bar.component.ts");
var i5 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i6 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_NavigationBarComponent = [i0.styles];
var RenderType_NavigationBarComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_NavigationBarComponent, data: {} });
exports.RenderType_NavigationBarComponent = RenderType_NavigationBarComponent;
function View_NavigationBarComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "li", [], null, [[null, "mouseover"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseover" === en)) {
        var pd_0 = (_co.closeDropdownByMouseleave(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "a", [["class", "nav"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.closeDropdownByClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, [[6, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(3, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 5, { links: 1 }), i1.ɵqud(603979776, 6, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(6, null, [" ", " "]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/", _v.context.$implicit.title, ""); _ck(_v, 2, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 3, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.title; _ck(_v, 6, 0, currVal_4); }); }
function View_NavigationBarComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "li", [["class", "more"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["src", "assets/images/sports-social-caret-down-blue.png"]], null, [[null, "click"], [null, "mouseover"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openDropdown() !== false);
        ad = (pd_0 && ad);
    } if (("mouseover" === en)) {
        var pd_1 = (_co.openDropdown() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null))], null, null); }
function View_NavigationBarComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "a", [["class", "nav"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.closeDropdownByClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, [[8, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(3, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 7, { links: 1 }), i1.ɵqud(603979776, 8, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(6, null, [" ", " "]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/", _v.context.$implicit.title, ""); _ck(_v, 2, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 3, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.title; _ck(_v, 6, 0, currVal_4); }); }
function View_NavigationBarComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, [[3, 0], ["dropdown", 1]], null, 2, "ul", [["class", "dropdown"]], null, [[null, "mouseleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseleave" === en)) {
        var pd_0 = (_co.closeDropdownByMouseleave() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NavigationBarComponent_5)), i1.ɵdid(3, 278528, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.moreSports; _ck(_v, 3, 0, currVal_0); }, null); }
function View_NavigationBarComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 11, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 8, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "a", [["class", "nav"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(4, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(5, 0, [[4, 0], ["image", 1]], null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NavigationBarComponent_2)), i1.ɵdid(7, 278528, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NavigationBarComponent_3)), i1.ɵdid(9, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NavigationBarComponent_4)), i1.ɵdid(11, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/"; _ck(_v, 4, 0, currVal_2); var currVal_4 = _co.sports; _ck(_v, 7, 0, currVal_4); var currVal_5 = (_co.moreSports.length > 0); _ck(_v, 9, 0, currVal_5); var currVal_6 = _co.isHoverOnCaret; _ck(_v, 11, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 4).target; var currVal_1 = i1.ɵnov(_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵinlineInterpolate(1, "", ((_co.route === undefined) ? "assets/images/sports-social-home-clicked.png" : "assets/images/sports-social-home.png"), ""); _ck(_v, 5, 0, currVal_3); }); }
function View_NavigationBarComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, [[4, 0], ["image", 1]], null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", "assets/images/sports-social-home-clicked.png", ""); _ck(_v, 1, 0, currVal_0); }); }
function View_NavigationBarComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.route; _ck(_v, 2, 0, currVal_0); }); }
function View_NavigationBarComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "a", [["class", "nav"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.closeDropdownByClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, [[10, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(3, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 9, { links: 1 }), i1.ɵqud(603979776, 10, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(6, null, [" ", " "]))], function (_ck, _v) { var currVal_2 = i1.ɵinlineInterpolate(1, "/", _v.context.$implicit.title, ""); _ck(_v, 2, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 3, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.title; _ck(_v, 6, 0, currVal_4); }); }
function View_NavigationBarComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, [[2, 0], ["mobileNavbar", 1]], null, 2, "ul", [], null, [[null, "mouseleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseleave" === en)) {
        var pd_0 = (_co.closeDropdownByMouseleave() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NavigationBarComponent_10)), i1.ɵdid(3, 278528, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.sports; _ck(_v, 3, 0, currVal_0); }, null); }
function View_NavigationBarComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "div", [["class", "active-route"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NavigationBarComponent_7)), i1.ɵdid(3, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NavigationBarComponent_8)), i1.ɵdid(5, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(6, 0, null, null, 0, "img", [["src", "assets/images/sports-social-caret-down-blue.png"]], null, [[null, "click"], [null, "mouseover"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openDropdown() !== false);
        ad = (pd_0 && ad);
    } if (("mouseover" === en)) {
        var pd_1 = (_co.openDropdown() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NavigationBarComponent_9)), i1.ɵdid(8, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.route === undefined); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.route !== "Popular"); _ck(_v, 5, 0, currVal_1); var currVal_2 = _co.isHoverOnCaret; _ck(_v, 8, 0, currVal_2); }, null); }
function View_NavigationBarComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { navbar: 0 }), i1.ɵqud(671088640, 2, { mobileNavbar: 0 }), i1.ɵqud(671088640, 3, { dropdown: 0 }), i1.ɵqud(671088640, 4, { image: 0 }), (_l()(), i1.ɵeld(4, 0, [[1, 0], ["navbar", 1]], null, 5, "div", [["class", "navbar"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NavigationBarComponent_1)), i1.ɵdid(6, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "mobile-nav"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_NavigationBarComponent_6)), i1.ɵdid(9, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.mobileNav; _ck(_v, 6, 0, currVal_0); var currVal_1 = _co.mobileNav; _ck(_v, 9, 0, currVal_1); }, null); }
exports.View_NavigationBarComponent_0 = View_NavigationBarComponent_0;
function View_NavigationBarComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-navigation-bar", [], null, [["window", "resize"], ["window", "scroll"], [null, "mouseover"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
        ad = (pd_0 && ad);
    } if (("window:scroll" === en)) {
        var pd_1 = (i1.ɵnov(_v, 1).onscroll() !== false);
        ad = (pd_1 && ad);
    } if (("mouseover" === en)) {
        var pd_2 = (i1.ɵnov(_v, 1).onHover($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, View_NavigationBarComponent_0, RenderType_NavigationBarComponent)), i1.ɵdid(1, 114688, null, 0, i4.NavigationBarComponent, [i5.PropertyService, i5.PropertyService, i1.Renderer2, i2.ActivatedRoute, i1.NgZone, i6.Meta, i6.Title], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_NavigationBarComponent_Host_0 = View_NavigationBarComponent_Host_0;
var NavigationBarComponentNgFactory = i1.ɵccf("sports-social-navigation-bar", i4.NavigationBarComponent, View_NavigationBarComponent_Host_0, {}, {}, []);
exports.NavigationBarComponentNgFactory = NavigationBarComponentNgFactory;


/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var property_service_1 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(recieveHeight, reciveBottom, renderer, activatedRoute, zone, metaservice, title) {
        this.recieveHeight = recieveHeight;
        this.reciveBottom = reciveBottom;
        this.renderer = renderer;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.metaservice = metaservice;
        this.title = title;
        this.isHoverOnCaret = false;
        this.mobileNav = false;
        this.tempSports = [
            { id: 17, title: 'Cricket' },
            { id: 23, title: 'Football' },
            { id: 6, title: 'Basketball' },
            { id: 36, title: 'Lawn Tennis' },
            { id: 5, title: 'Badminton' },
            { id: 29, title: 'Hockey' },
            { id: 56, title: 'Table Tennis' },
            { id: 60, title: 'Volleyball' }
        ];
    }
    NavigationBarComponent.prototype.changeHomeIcon = function () {
        var _this = this;
        this.route = this.activatedRoute.snapshot.params.sport;
        this.activatedRoute.params.subscribe(function (param) {
            _this.route = param.sport;
            console.log('sports', _this.route);
        });
    };
    NavigationBarComponent.prototype.responsiveNavigationBar = function () {
        var width = platform_browser_1.ɵgetDOM().getBoundingClientRect(this.navbar.nativeElement).width;
        if (width > 1200) {
            this.sports = this.tempSports.slice(0, 9);
            this.moreSports = this.tempSports.slice(9, this.tempSports.length);
            this.mobileNav = false;
        }
        if (width > 950 && width < 1200) {
            this.sports = this.tempSports.slice(0, 7);
            this.moreSports = this.tempSports.slice(7, this.tempSports.length);
            this.mobileNav = false;
        }
        if (width > 800 && width < 950) {
            this.sports = this.tempSports.slice(0, 6);
            this.moreSports = this.tempSports.slice(6, this.tempSports.length);
            this.mobileNav = false;
        }
        if (width < 800 && width > 720) {
            this.sports = this.tempSports.slice(0, 5);
            this.moreSports = this.tempSports.slice(5, this.tempSports.length);
            console.log(this.sports);
            this.mobileNav = false;
        }
        if (width < 720) {
            this.sports = this.tempSports;
            this.mobileNav = true;
        }
    };
    NavigationBarComponent.prototype.openDropdown = function () {
        this.isHoverOnCaret = !this.isHoverOnCaret;
        this.scrollabledropdown();
    };
    NavigationBarComponent.prototype.closeDropdownByClick = function (event) {
        this.isHoverOnCaret = false;
        event.preventDefault();
    };
    NavigationBarComponent.prototype.closeDropdownByMouseleave = function () {
        this.isHoverOnCaret = false;
    };
    NavigationBarComponent.prototype.heightOfHeader = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (res) {
            // console.log(res);
            _this.HeightOfHeader = res;
        });
    };
    NavigationBarComponent.prototype.fixedNavbar = function () {
        var _this = this;
        this.reciveBottom.ofCarousel.subscribe(function (res) {
            _this.BottomOfCarousel = res;
            var top = platform_browser_1.ɵgetDOM().getBoundingClientRect(_this.navbar.nativeElement).top;
            var bottom = platform_browser_1.ɵgetDOM().getBoundingClientRect(_this.navbar.nativeElement).bottom;
            if (top <= _this.HeightOfHeader) {
                _this.renderer.setStyle(_this.navbar.nativeElement, 'position', 'fixed');
                _this.renderer.setStyle(_this.navbar.nativeElement, 'top', _this.HeightOfHeader + 'px');
                _this.renderer.setStyle(_this.navbar.nativeElement, 'left', '0px');
                _this.renderer.setStyle(_this.navbar.nativeElement, 'right', '0px');
            }
            if (bottom <= _this.BottomOfCarousel) {
                _this.renderer.setStyle(_this.navbar.nativeElement, 'position', 'relative');
                _this.renderer.setStyle(_this.navbar.nativeElement, 'top', '0px');
            }
        });
    };
    NavigationBarComponent.prototype.scrollabledropdown = function () {
        if (this.mobileNavbar !== undefined) {
            var height = platform_browser_1.ɵgetDOM().getBoundingClientRect(this.mobileNavbar.nativeElement).height;
            var top_1 = platform_browser_1.ɵgetDOM().getBoundingClientRect(this.mobileNavbar.nativeElement).top;
            var scrollableHeight = innerHeight - top_1 - 48;
            if (height > scrollableHeight) {
                this.renderer.setStyle(this.mobileNavbar.nativeElement, 'height', scrollableHeight + 'px');
                this.renderer.setStyle(this.mobileNavbar.nativeElement, 'overflow-y', 'scroll');
            }
            else {
                this.renderer.setStyle(this.mobileNavbar.nativeElement, 'max-height', height + 'px');
                // this.renderer.setStyle(this.mobileNavbar.nativeElement, 'overflow-y', 'visible');
            }
        }
        if (this.dropdown !== undefined) {
            var height = platform_browser_1.ɵgetDOM().getBoundingClientRect(this.dropdown.nativeElement).height;
            var top_2 = platform_browser_1.ɵgetDOM().getBoundingClientRect(this.dropdown.nativeElement).top;
            var scrollableHeight = innerHeight - top_2 - 40;
            if (height > scrollableHeight) {
                this.renderer.setStyle(this.dropdown.nativeElement, 'height', scrollableHeight + 'px');
                this.renderer.setStyle(this.dropdown.nativeElement, 'overflow-y', 'scroll');
            }
            else {
                this.renderer.setStyle(this.dropdown.nativeElement, 'max-height', height + 'px');
                // this.renderer.setStyle(this.dropdown.nativeElement, 'overflow-y', 'visible');
            }
        }
    };
    NavigationBarComponent.prototype.ngOnInit = function () {
        this.changeHomeIcon();
        this.responsiveNavigationBar();
        this.heightOfHeader();
        this.fixedNavbar();
    };
    NavigationBarComponent.prototype.onresize = function () {
        this.responsiveNavigationBar();
        this.heightOfHeader();
        this.fixedNavbar();
    };
    NavigationBarComponent.prototype.onscroll = function () {
        this.fixedNavbar();
        this.scrollabledropdown();
    };
    NavigationBarComponent.prototype.onHover = function (event) {
        this.scrollabledropdown();
    };
    return NavigationBarComponent;
}());
exports.NavigationBarComponent = NavigationBarComponent;


/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.module.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NavigationBarModule = /** @class */ (function () {
    function NavigationBarModule() {
    }
    return NavigationBarModule;
}());
exports.NavigationBarModule = NavigationBarModule;


/***/ }),

/***/ "./src/app/open-cards/open-match-card/open-match-card.component.css.shim.ngstyle.js":
/*!******************************************************************************************!*\
  !*** ./src/app/open-cards/open-match-card/open-match-card.component.css.shim.ngstyle.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".time-remaining[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 10px;\n    top: 7px;\n    color: #024771;\n}\n.started-by[_ngcontent-%COMP%]{\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    text-align: center;\n}\n.started-by[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\n   margin-bottom: 5px;\n   font-weight: 300;\n}\n.started-by[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n.heading[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    font-size: 1.2em;\n    font-weight: 600;\n}\n.heading[_ngcontent-%COMP%], .match-sum[_ngcontent-%COMP%] {\n    text-align: center;\n}\n.match-text[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    position: relative;\n    top: 55px;\n}\n.match-date[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 47%;\n    top: 5px;\n    left: 1%;\n}\n.match-date[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n    width:20px;\n}\n.match-date[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\n    font-size: 0.9em;\n    text-align: left;\n}\n.match-date[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .match-date[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    vertical-align:middle;\n    display: inline-block;\n}\n.venue[_ngcontent-%COMP%]{\n    position: absolute;\n    width: 50%;\n    top: 5px;\n    right: 1%;\n    text-align: right;\n    white-space: nowrap;\n}\n.venue[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n    width:20px;\n}\n.venue[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .venue[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    display: inline-block;\n}\n.venue[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    min-width: 50%;\n    max-width: 70%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 0.9em;\n}\n.count-bar[_ngcontent-%COMP%] {\n    height: 50px;\n}\n.count-bar[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\n    display: inline-block;\n    vertical-align: middle;\n    text-align: center;\n    color: black;\n    font-size: 0.9em;\n    font-weight: 500;\n    margin: 1% auto;\n    width: 20%;\n}\n.count-bar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{ \n    border-left: 1px solid #888888;\n    width: 78%;\n    display: inline-block;\n    vertical-align: middle;\n    height: 50px;\n    overflow-x: auto;\n    overflow-y: hidden;\n    white-space: nowrap;\n}\n.count-bar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n    margin: 5px;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    vertical-align: middle\n}\n.comment-bar[_ngcontent-%COMP%]{\n    background-color: #4372a0;\n    padding: 2%;\n    width: 96%;\n    margin: 1% auto;\n}\n.comment-bar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    margin: 3%;\n}\ninput[_ngcontent-%COMP%]{\n    width: 80%;\n    border: none;\n    background-color: #ffffff;\n    height: 35px;\n    text-align: center;\n    box-shadow: 1px 1px 2px #bbbbbb;\n    border-radius: 25px;\n    outline: none;\n    vertical-align:  middle\n}\n.comments[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin: 2%;\n}\n.comment-details[_ngcontent-%COMP%]{\n    vertical-align: middle;\n    display: inline-block;\n    border-bottom: 1px solid #bbbbbb;\n    width: 80%;\n    margin-bottom: 1%;\n}\n.user-name[_ngcontent-%COMP%]{\n    display: inline-block;\n    vertical-align: middle;\n    min-width: 20%;\n    font-size: 0.9em;\n    font-weight: 500;\n    color: #024771;\n    text-align: left;\n}\n.comment-date[_ngcontent-%COMP%]{\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 0.8em;\n    color: black;\n    min-width: 40%;\n    text-align: left;\n}\n.unique-name[_ngcontent-%COMP%]{\n    color: #ffa600;\n    font-style: italic;\n    font-size: 0.8em;\n}\n.comment[_ngcontent-%COMP%]{\n    color: black;\n    font-size: 0.95em;\n}\n.match-image[_ngcontent-%COMP%]{\n    padding-top: 60px;\n    width: 98%;\n    margin:2% auto;\n}\n.match-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.actions-match[_ngcontent-%COMP%]{\n    padding: 3%;\n    display: flex;\n    justify-content: space-around;\n}\nbutton[_ngcontent-%COMP%] {\n    background-color: transparent;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    \n}\n.actions-match[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 32px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 3px;\n}\n.actions-match[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n}\n.actions-match[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover{\n    font-weight: 700\n}\n@media ( max-width: 720px) {\n    .count-bar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n        width: 40px;\n        height: 40px;\n    }\n    .comment-bar[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\n        height: 30px !important;\n    }\n}\n@media ( max-width: 980px) and ( min-width: 720px) {\n    .count-bar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n        width: 40px;\n        height: 40px;\n    }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/open-cards/open-match-card/open-match-card.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/open-cards/open-match-card/open-match-card.component.ngfactory.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./open-match-card.component.css.shim.ngstyle */ "./src/app/open-cards/open-match-card/open-match-card.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../gallery/gallery.component.ngfactory */ "./src/app/gallery/gallery.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../../gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ./open-match-card.component */ "./src/app/open-cards/open-match-card/open-match-card.component.ts");
var i6 = __webpack_require__(/*! ../../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var i7 = __webpack_require__(/*! ../../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var i8 = __webpack_require__(/*! @angular/router */ "@angular/router");
var styles_OpenMatchCardComponent = [i0.styles];
var RenderType_OpenMatchCardComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_OpenMatchCardComponent, data: {} });
exports.RenderType_OpenMatchCardComponent = RenderType_OpenMatchCardComponent;
function View_OpenMatchCardComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [["class", "time-remaining"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", "d"])), (_l()(), i1.ɵeld(3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", "h"])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", "m"])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(8, null, ["", "s"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._days; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co._hours; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co._minutes; _ck(_v, 6, 0, currVal_2); var currVal_3 = _co._seconds; _ck(_v, 8, 0, currVal_3); }); }
function View_OpenMatchCardComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/default-image.png"]], null, null, null, null, null))], null, null); }
function View_OpenMatchCardComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-gallery", [], null, null, null, i2.View_GalleryComponent_0, i2.RenderType_GalleryComponent)), i1.ɵdid(1, 114688, null, 0, i3.GalleryComponent, [], { images: [0, "images"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.images; _ck(_v, 1, 0, currVal_0); }, null); }
function View_OpenMatchCardComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4], [8, "title", 0]], [[null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.defaultImage($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.image, ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.name, ""); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_OpenMatchCardComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "count-bar"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", " Playing"])), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenMatchCardComponent_6)), i1.ɵdid(5, 278528, null, 0, i4.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(6, 0, null, null, 0, "hr", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.joinees; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.joineeCount; _ck(_v, 2, 0, currVal_0); }); }
function View_OpenMatchCardComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4], [8, "title", 0]], [[null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.defaultImage($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.image, ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.name, ""); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_OpenMatchCardComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "count-bar"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", " Promoting"])), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenMatchCardComponent_8)), i1.ɵdid(5, 278528, null, 0, i4.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(6, 0, null, null, 0, "hr", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.promoters; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.promoteCount; _ck(_v, 2, 0, currVal_0); }); }
function View_OpenMatchCardComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4], [8, "title", 0]], [[null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.defaultImage($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.image, ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.name, ""); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_OpenMatchCardComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "count-bar"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", " Watching"])), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenMatchCardComponent_10)), i1.ɵdid(5, 278528, null, 0, i4.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(6, 0, null, null, 0, "hr", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.watchers; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.watchCount; _ck(_v, 2, 0, currVal_0); }); }
function View_OpenMatchCardComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, "div", [["class", "actions-count"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenMatchCardComponent_5)), i1.ɵdid(3, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenMatchCardComponent_7)), i1.ɵdid(5, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenMatchCardComponent_9)), i1.ɵdid(7, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.joineeCount > 0); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.promoteCount > 0); _ck(_v, 5, 0, currVal_1); var currVal_2 = (_co.watchCount > 0); _ck(_v, 7, 0, currVal_2); }, null); }
function View_OpenMatchCardComponent_11(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, "div", [["class", "comments"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], [[null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.defaultImage($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 8, "div", [["class", "comment-details"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "div", [["class", "user-name"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "comment-date"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "div", [["class", "unique-name"]], null, null, null, null, null)), (_l()(), i1.ɵted(8, null, [" @", " "])), (_l()(), i1.ɵeld(9, 0, null, null, 1, "div", [["class", "comment"]], null, null, null, null, null)), (_l()(), i1.ɵted(10, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.userImage, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.userName; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.commentDate; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.uniqueName; _ck(_v, 8, 0, currVal_3); var currVal_4 = _v.context.$implicit.comment; _ck(_v, 10, 0, currVal_4); }); }
function View_OpenMatchCardComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { openCard: 0 }), (_l()(), i1.ɵeld(1, 0, [[1, 0], ["openCard", 1]], null, 54, "div", [["class", "open-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 11, "div", [["class", "open-card-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "img", [["alt", ""], ["class", "close"], ["src", "/assets/images/sports-social-cancel-black.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenMatchCardComponent_1)), i1.ɵdid(5, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(6, 0, null, null, 1, "div", [["class", "heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, ["", ""])), (_l()(), i1.ɵeld(8, 0, null, null, 1, "div", [["class", "match-sum"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Match Summary"])), (_l()(), i1.ɵeld(10, 0, null, null, 3, "div", [["class", "started-by"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Created By"])), (_l()(), i1.ɵeld(13, 0, [["userImg", 1]], null, 0, "img", [["alt", ""]], [[8, "src", 4], [8, "title", 0]], [[null, "error"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("error" === en)) {
        var pd_0 = (_co.defaultImage($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 15, "div", [["class", "open-card-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 3, "div", [["class", "match-date"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/calendar.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(18, null, ["", ""])), (_l()(), i1.ɵeld(19, 0, null, null, 3, "div", [["class", "venue"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/map-marker.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(22, null, ["", ""])), (_l()(), i1.ɵeld(23, 0, null, null, 1, "div", [["class", "match-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(24, null, [" ", " "])), (_l()(), i1.ɵeld(25, 0, null, null, 4, "div", [["class", "match-image"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenMatchCardComponent_2)), i1.ɵdid(27, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenMatchCardComponent_3)), i1.ɵdid(29, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenMatchCardComponent_4)), i1.ɵdid(31, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(32, 0, null, null, 16, "div", [["class", "actions-match"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 3, "button", [["class", "playButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/sports-social-play.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Play"])), (_l()(), i1.ɵeld(37, 0, null, null, 3, "button", [["class", "commentButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/sports-social-match-talks.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Comment"])), (_l()(), i1.ɵeld(41, 0, null, null, 3, "button", [["class", "promoteButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/sports-social-promote.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(43, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Promote"])), (_l()(), i1.ɵeld(45, 0, null, null, 3, "button", [["class", "watchButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-watching.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Watch"])), (_l()(), i1.ɵeld(49, 0, null, null, 2, "div", [["class", "comment-bar"]], null, null, null, null, null)), (_l()(), i1.ɵeld(50, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/user-default.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 0, "input", [["placeholder", "Comment Your Views"], ["type", "text"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenMatchCardComponent_11)), i1.ɵdid(53, 278528, null, 0, i4.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(54, 0, null, null, 1, "div", [["class", "open-card-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(55, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-white-logo.png"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co._days > 0); _ck(_v, 5, 0, currVal_0); var currVal_7 = (_co.matchImage === undefined); _ck(_v, 27, 0, currVal_7); var currVal_8 = _co.matchImage; _ck(_v, 29, 0, currVal_8); var currVal_9 = _co.removeActionBar(); _ck(_v, 31, 0, currVal_9); var currVal_10 = _co.comments; _ck(_v, 53, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.gameName; _ck(_v, 7, 0, currVal_1); var currVal_2 = i1.ɵinlineInterpolate(1, "", _co.creatorImage, ""); var currVal_3 = i1.ɵinlineInterpolate(1, "", _co.creatorName, ""); _ck(_v, 13, 0, currVal_2, currVal_3); var currVal_4 = _co.matchDate; _ck(_v, 18, 0, currVal_4); var currVal_5 = _co.venueName; _ck(_v, 22, 0, currVal_5); var currVal_6 = _co.matchText; _ck(_v, 24, 0, currVal_6); }); }
exports.View_OpenMatchCardComponent_0 = View_OpenMatchCardComponent_0;
function View_OpenMatchCardComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-open-match-card", [], null, null, null, View_OpenMatchCardComponent_0, RenderType_OpenMatchCardComponent)), i1.ɵdid(1, 245760, null, 0, i5.OpenMatchCardComponent, [i1.Renderer2, i6.TimeService, i7.PostService, i8.ActivatedRoute, i8.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_OpenMatchCardComponent_Host_0 = View_OpenMatchCardComponent_Host_0;
var OpenMatchCardComponentNgFactory = i1.ɵccf("sports-social-open-match-card", i5.OpenMatchCardComponent, View_OpenMatchCardComponent_Host_0, { timeRemaining: "timeRemaining", gameName: "gameName", creatorImage: "creatorImage", creatorName: "creatorName", matchDate: "matchDate", venueName: "venueName", matchText: "matchText", matchImage: "matchImage", joineeCount: "joineeCount", joinees: "joinees", promoteCount: "promoteCount", promoters: "promoters", watchCount: "watchCount", watchers: "watchers", commentCount: "commentCount", comments: "comments" }, {}, []);
exports.OpenMatchCardComponentNgFactory = OpenMatchCardComponentNgFactory;


/***/ }),

/***/ "./src/app/open-cards/open-match-card/open-match-card.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/open-cards/open-match-card/open-match-card.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var time_service_1 = __webpack_require__(/*! ../../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var post_service_1 = __webpack_require__(/*! ../../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var Rx_1 = __webpack_require__(/*! rxjs/Rx */ "rxjs/Rx");
var OpenMatchCardComponent = /** @class */ (function () {
    function OpenMatchCardComponent(renderer, time, get, activeRoute, router) {
        this.renderer = renderer;
        this.time = time;
        this.get = get;
        this.activeRoute = activeRoute;
        this.router = router;
        this.activityid = {
            commentid: 1005,
            promoteid: 1004,
            watchid: 1009
        };
        this.joinees = [];
        this.promoters = [];
        this.watchers = [];
        this.comments = [];
        this.images = [];
    }
    OpenMatchCardComponent.prototype.defaultImage = function (event) {
        console.log(event);
        event.target.src = '/assets/images/user-default.png';
    };
    OpenMatchCardComponent.prototype.close = function () {
        this.router.navigate([{ outlets: { 'Match': null } }]);
    };
    OpenMatchCardComponent.prototype.removeActionBar = function () {
        if (this.promoteCount === '0' && this.watchCount === '0' && this.joineeCount === '0') {
            return false;
        }
        else {
            return true;
        }
    };
    OpenMatchCardComponent.prototype.getMatchData = function (id) {
        var _this = this;
        this.get.singleMatchData(id, 0, this.activityid.commentid, 0, 1).subscribe(function (res) {
            console.log(res);
            _this.matchImage = res['EventInfo'][0].event_image;
            _this.matchText = res['EventInfo'][0].EventText;
            _this.promoteCount = res['EventInfo'][0].PromoteCount;
            _this.watchCount = res['EventInfo'][0].WatchCount;
            _this.joineeCount = res['EventInfo'][0].EventJoineeCount;
            _this.venueName = res['EventInfo'][0].Venue_Name;
            _this.creatorName = res['EventInfo'][0].user_name;
            _this.gameName = res['EventInfo'][0].gamename;
            _this.timeRemaining = res['EventInfo'][0].StartTime;
            _this.creatorImage = res['EventInfo'][0].profile_photo;
            _this.matchDate = _this.time.exactDate(parseInt(res['EventInfo'][0].StartTime, 10) * 1000);
            // tslint:disable-next-line:forin
            for (var i in res['EventJoineesInfo']) {
                _this.joinees.push({
                    name: res['EventJoineesInfo'][i].FirstName + res['EventJoineesInfo'][i].LastName,
                    image: res['EventJoineesInfo'][i].profilephoto
                });
            }
            console.log(res['Images'].length);
            if (res['Images'].length > 0) {
                // tslint:disable-next-line:forin
                for (var i in res['Images']) {
                    console.log(res['Images'][i]);
                    _this.images.push({
                        image: res['Images'][i].imagepath,
                        text: res['Images'][i].Text === undefined ? ' ' : res['Images'][i].Text,
                        likeCount: res['Images'][i].likecount === null ? '0' : res['Images'][i].likecount,
                        commentCount: res['Images'][i].commentcount === null ? '0' : res['Images'][i].commentcount
                    });
                }
            }
            else {
                _this.images.push({
                    image: _this.matchImage,
                    text: '',
                    likeCount: 0,
                    commentCount: 0
                });
            }
        });
        this.get.singleMatchData(id, 0, this.activityid.commentid, 2, 1).subscribe(function (res) {
            console.log(res);
            // tslint:disable-next-line:forin
            for (var i in res[0]) {
                _this.comments.push({
                    userName: res[0][i].user_name,
                    commentDate: _this.time.ExactDate(res[0][i].InsertedDate),
                    uniqueName: res[0][i].UniqueName,
                    comment: res[0][i].Comment,
                    userImage: res[0][i].profile_image,
                });
            }
        });
        this.get.singleMatchData(id, 0, this.activityid.watchid, 1, 1).subscribe(function (res) {
            console.log(res);
            // tslint:disable-next-line:forin
            for (var i in res[0]) {
                _this.watchers.push({
                    name: res[0][i].user_name,
                    image: res[0][i].profile_image,
                });
            }
        });
        this.get.singleMatchData(id, 0, this.activityid.promoteid, 1, 1).subscribe(function (res) {
            console.log(res);
            // tslint:disable-next-line:forin
            for (var i in res[0]) {
                _this.promoters.push({
                    name: res[0][i].user_name,
                    image: res[0][i].profile_image,
                });
            }
        });
    };
    OpenMatchCardComponent.prototype.getDays = function (t) {
        var days;
        days = Math.floor(t / 86400);
        return days;
    };
    OpenMatchCardComponent.prototype.getHours = function (t) {
        var days, hours;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        return hours;
    };
    OpenMatchCardComponent.prototype.getMinutes = function (t) {
        var days, hours, minutes;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        return minutes;
    };
    OpenMatchCardComponent.prototype.getSeconds = function (t) {
        var days, hours, minutes, seconds;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;
        return seconds;
    };
    OpenMatchCardComponent.prototype.openAppDownloadPopup = function () {
        this.router.navigate([{ outlets: { 'AppDownload': ['PopUp'] } }], { skipLocationChange: true });
    };
    OpenMatchCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.watchers, this.comments, this.joinees, this.promoters);
        this.activeRoute.params.subscribe(function (param) {
            console.log(param.id);
            _this.getMatchData(param.id);
            // console.log('b', this.images);
            _this.subscription = Rx_1.Observable.interval(1000).map(function (x) {
                _this._diff = +(_this.timeRemaining) - Date.parse(new Date().toString()) / 1000;
                // console.log(this._diff, Date.parse(new Date().toString()) / 1000, this.timeRemaining );
            }).subscribe(function (x) {
                _this._days = _this.getDays(_this._diff);
                _this._hours = _this.getHours(_this._diff);
                _this._minutes = _this.getMinutes(_this._diff);
                _this._seconds = _this.getSeconds(_this._diff);
                // console.log( this._days + 'd', this._hours + 'h', this._minutes + 'm', this._seconds + 's', this.getSeconds(this._diff));
            });
        });
    };
    OpenMatchCardComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return OpenMatchCardComponent;
}());
exports.OpenMatchCardComponent = OpenMatchCardComponent;


/***/ }),

/***/ "./src/app/open-cards/open-match-card/open-match-card.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/open-cards/open-match-card/open-match-card.module.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpenMatchCardModule = /** @class */ (function () {
    function OpenMatchCardModule() {
    }
    return OpenMatchCardModule;
}());
exports.OpenMatchCardModule = OpenMatchCardModule;


/***/ }),

/***/ "./src/app/open-cards/open-news-card/open-news-card.component.css.ngstyle.js":
/*!***********************************************************************************!*\
  !*** ./src/app/open-cards/open-news-card/open-news-card.component.css.ngstyle.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".insert-date {\n    position: absolute;\n    left: 10px;\n    top: 10px;\n}\n.url {\n    display: block;\n    margin: 1% auto;\n    text-align: center;\n    color: black;\n    width: 100%;\n    font-size: 1.5em;\n    font-weight: 900;\n}\n.source {\n      text-align: center;\n      margin: 1%;\n}\n.source > .name {\n    font-size: 1.4em;\n    font-weight: 900;\n}\n.title {\n    width: 100%;\n    text-align: center;\n    position: relative;\n    top: 30px;\n    font-size: 1.2em;\n    font-weight: 500;\n}\n.news-image{\n    padding-top: 60px;\n    width: 98%;\n    margin:2% auto;\n}\n.news-image > img {\n    width: 100%;\n}\n.desc {\n    width: 95%;\n    margin: 1% auto;\n    text-align: center;\n    font-size: 1.3em;\n    font-weight: 500;\n}\n.count-bar {\n    height: 50px;\n    \n}\n.count-bar >  p{\n    display: inline-block;\n    vertical-align: middle;\n    text-align: center;\n    color: black;\n    font-size: 0.9em;\n    font-weight: 500;\n    margin: 1% auto;\n    width: 20%;\n}\n.count-bar > div{ \n    border-left: 1px solid #888888;\n    width: 78%;\n    display: inline-block;\n    vertical-align: middle;\n    height: 50px;\n}\n.count-bar > div > img{\n    margin: 5px;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    vertical-align: middle\n}\n.comment-bar{\n    background-color: #4372a0;\n    padding: 2%;\n    width: 96%;\n    margin: 1% auto;\n}\n.comment-bar > img {\n    vertical-align: middle;\n    margin: 3%;\n}\ninput{\n    width: 80%;\n    border: none;\n    background-color: #ffffff;\n    height: 35px;\n    text-align: center;\n    box-shadow: 1px 1px 2px #bbbbbb;\n    border-radius: 25px;\n    outline: none;\n    vertical-align:  middle\n}\n.comments > img {\n    display: inline-block;\n    vertical-align: middle;\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin: 2%;\n}\n.comment-details{\n    vertical-align: middle;\n    display: inline-block;\n    border-bottom: 1px solid #bbbbbb;\n    width: 80%;\n    margin-bottom: 1%;\n}\n.user-name{\n    display: inline-block;\n    vertical-align: middle;\n    min-width: 20%;\n    font-size: 0.9em;\n    font-weight: 500;\n    color: #024771;\n    text-align: left;\n}\n.comment-date{\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 0.8em;\n    color: black;\n    min-width: 40%;\n    text-align: left;\n}\n.unique-name{\n    color: #ffa600;\n    font-style: italic;\n    font-size: 0.8em;\n}\n.comment{\n    color: black;\n    font-size: 0.95em;\n}\n.actions-news{\n    padding: 3%;\n    display: flex;\n    justify-content: space-around;\n}\nbutton {\n    background-color: transparent;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    \n}\n.actions-news > button > img {\n    width: 16px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 3px;\n}\n.actions-news > button > span {\n    display: inline-block;\n    vertical-align: middle;\n}\n.actions-news > button > span:hover{\n    font-weight: 700\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/open-cards/open-news-card/open-news-card.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/open-cards/open-news-card/open-news-card.component.ngfactory.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./open-news-card.component.css.ngstyle */ "./src/app/open-cards/open-news-card/open-news-card.component.css.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./open-news-card.component */ "./src/app/open-cards/open-news-card/open-news-card.component.ts");
var i4 = __webpack_require__(/*! ../../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ../../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var styles_OpenNewsCardComponent = [i0.styles];
var RenderType_OpenNewsCardComponent = i1.ɵcrt({ encapsulation: 2, styles: styles_OpenNewsCardComponent, data: {} });
exports.RenderType_OpenNewsCardComponent = RenderType_OpenNewsCardComponent;
function View_OpenNewsCardComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/default-image.png"]], null, null, null, null, null))], null, null); }
function View_OpenNewsCardComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4], [8, "title", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.image, ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.name, ""); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_OpenNewsCardComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "count-bar"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", " ", ""])), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenNewsCardComponent_4)), i1.ɵdid(5, 278528, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(6, 0, null, null, 0, "hr", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.likes; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.likeCount; var currVal_1 = ((_co.likeCount > 1) ? _co.Likes : _co.Like); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_OpenNewsCardComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4], [8, "title", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.image, ""); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.name, ""); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_OpenNewsCardComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "div", [["class", "count-bar"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", " ", ""])), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenNewsCardComponent_6)), i1.ɵdid(5, 278528, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(6, 0, null, null, 0, "hr", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.shares; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.shareCount; var currVal_1 = ((_co.shareCount > 1) ? _co.Shares : _co.Share); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_OpenNewsCardComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "div", [["class", "actions-count"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenNewsCardComponent_3)), i1.ɵdid(3, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenNewsCardComponent_5)), i1.ɵdid(5, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.likeCount > 0); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.shareCount > 0); _ck(_v, 5, 0, currVal_1); }, null); }
function View_OpenNewsCardComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, "div", [["class", "comments"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 8, "div", [["class", "comment-details"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "div", [["class", "user-name"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "div", [["class", "comment-date"]], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "div", [["class", "unique-name"]], null, null, null, null, null)), (_l()(), i1.ɵted(8, null, [" @", " "])), (_l()(), i1.ɵeld(9, 0, null, null, 1, "div", [["class", "comment"]], null, null, null, null, null)), (_l()(), i1.ɵted(10, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.userImage, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.userName; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.commentDate; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.uniqueName; _ck(_v, 8, 0, currVal_3); var currVal_4 = _v.context.$implicit.comment; _ck(_v, 10, 0, currVal_4); }); }
function View_OpenNewsCardComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { openCard: 0 }), (_l()(), i1.ɵeld(1, 0, [[1, 0], ["openCard", 1]], null, 45, "div", [["class", "open-card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 7, "div", [["class", "open-card-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "img", [["alt", ""], ["class", "close"], ["src", "assets/images/sports-social-cancel-black.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "div", [["class", "insert-date"]], null, null, null, null, null)), (_l()(), i1.ɵted(5, null, ["", ""])), (_l()(), i1.ɵeld(6, 0, null, null, 3, "div", [["class", "source"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "p", [["class", "name"]], null, null, null, null, null)), (_l()(), i1.ɵted(9, null, ["", ""])), (_l()(), i1.ɵeld(10, 0, null, null, 10, "div", [["class", "open-card-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), i1.ɵted(12, null, ["", ""])), (_l()(), i1.ɵeld(13, 0, null, null, 3, "div", [["class", "news-image"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenNewsCardComponent_1)), i1.ɵdid(15, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(16, 0, null, null, 0, "img", [["alt", ""]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 1, "div", [["class", "desc"]], null, null, null, null, null)), (_l()(), i1.ɵted(18, null, ["", ""])), (_l()(), i1.ɵeld(19, 0, null, null, 1, "a", [["class", "url"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵted(20, null, ["Read More At ", ""])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenNewsCardComponent_2)), i1.ɵdid(22, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(23, 0, null, null, 16, "div", [["class", "actions-news"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 3, "button", [["class", "commentButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-comment.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Comment"])), (_l()(), i1.ɵeld(28, 0, null, null, 3, "button", [["class", "promoteButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-like.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Like"])), (_l()(), i1.ɵeld(32, 0, null, null, 3, "button", [["class", "watchButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-share-black.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Share"])), (_l()(), i1.ɵeld(36, 0, null, null, 3, "button", [["class", "watchButton"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAppDownloadPopup() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-save-black.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Save"])), (_l()(), i1.ɵeld(40, 0, null, null, 2, "div", [["class", "comment-bar"]], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/user-default.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 0, "input", [["placeholder", "Comment Your Views"], ["type", "text"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_OpenNewsCardComponent_7)), i1.ɵdid(44, 278528, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(45, 0, null, null, 1, "div", [["class", "open-card-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/images/sports-social-white-logo.png"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_4 = (_co.newsImage === undefined); _ck(_v, 15, 0, currVal_4); var currVal_9 = _co.removeActionBar(); _ck(_v, 22, 0, currVal_9); var currVal_10 = _co.comments; _ck(_v, 44, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.insertedDate; _ck(_v, 5, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "", _co.sourceImage, ""); _ck(_v, 7, 0, currVal_1); var currVal_2 = _co.sourceName; _ck(_v, 9, 0, currVal_2); var currVal_3 = _co.title; _ck(_v, 12, 0, currVal_3); var currVal_5 = i1.ɵinlineInterpolate(1, "", _co.newsImage, ""); _ck(_v, 16, 0, currVal_5); var currVal_6 = _co.desc; _ck(_v, 18, 0, currVal_6); var currVal_7 = i1.ɵinlineInterpolate(1, "", _co.url, ""); _ck(_v, 19, 0, currVal_7); var currVal_8 = _co.sourceName; _ck(_v, 20, 0, currVal_8); }); }
exports.View_OpenNewsCardComponent_0 = View_OpenNewsCardComponent_0;
function View_OpenNewsCardComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-open-news-card", [], null, null, null, View_OpenNewsCardComponent_0, RenderType_OpenNewsCardComponent)), i1.ɵdid(1, 114688, null, 0, i3.OpenNewsCardComponent, [i1.Renderer2, i4.PostService, i5.ActivatedRoute, i5.Router, i6.TimeService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_OpenNewsCardComponent_Host_0 = View_OpenNewsCardComponent_Host_0;
var OpenNewsCardComponentNgFactory = i1.ɵccf("sports-social-open-news-card", i3.OpenNewsCardComponent, View_OpenNewsCardComponent_Host_0, { newsId: "newsId", newsImage: "newsImage", sourceImage: "sourceImage", sourceName: "sourceName", desc: "desc", likeCount: "likeCount", shareCount: "shareCount", commentCount: "commentCount", url: "url", insertedDate: "insertedDate", publishedAt: "publishedAt", title: "title", comments: "comments" }, {}, []);
exports.OpenNewsCardComponentNgFactory = OpenNewsCardComponentNgFactory;


/***/ }),

/***/ "./src/app/open-cards/open-news-card/open-news-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/open-cards/open-news-card/open-news-card.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var post_service_1 = __webpack_require__(/*! ../../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var time_service_1 = __webpack_require__(/*! ../../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var OpenNewsCardComponent = /** @class */ (function () {
    function OpenNewsCardComponent(renderer, get, activeRoute, router, time) {
        this.renderer = renderer;
        this.get = get;
        this.activeRoute = activeRoute;
        this.router = router;
        this.time = time;
        this.comments = [];
    }
    OpenNewsCardComponent.prototype.removeActionBar = function () {
        if (this.likeCount === 0 && this.shareCount === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    OpenNewsCardComponent.prototype.close = function () {
        this.router.navigate([{ outlets: { 'News': null } }]);
    };
    OpenNewsCardComponent.prototype.openAppDownloadPopup = function () {
        this.router.navigate([{ outlets: { 'AppDownload': ['PopUp'] } }], { skipLocationChange: true });
    };
    OpenNewsCardComponent.prototype.getNewsData = function (id) {
        var _this = this;
        this.get.singleNewsData(id).subscribe(function (res) {
            console.log(res);
            _this.title = res['title'];
            _this.insertedDate = _this.time.newsDate(res['publishedAt']);
            _this.desc = res['desc'];
            _this.newsImage = res['newsImage'];
            _this.url = res['url'];
            _this.likeCount = res['likeCount'];
            _this.shareCount = res['shareCount'];
            _this.sourceImage = res['sourceImage'];
            _this.sourceName = res['sourceName'];
        });
    };
    OpenNewsCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (param) {
            _this.getNewsData(param.id);
        });
    };
    return OpenNewsCardComponent;
}());
exports.OpenNewsCardComponent = OpenNewsCardComponent;


/***/ }),

/***/ "./src/app/open-cards/open-news-card/open-news-card.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/open-cards/open-news-card/open-news-card.module.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OpenNewsCardModule = /** @class */ (function () {
    function OpenNewsCardModule() {
    }
    return OpenNewsCardModule;
}());
exports.OpenNewsCardModule = OpenNewsCardModule;


/***/ }),

/***/ "./src/app/pop-up/pop-up.component.css.shim.ngstyle.js":
/*!*************************************************************!*\
  !*** ./src/app/pop-up/pop-up.component.css.shim.ngstyle.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".app-download-popup[_ngcontent-%COMP%]{\n    position: fixed;\n    width:40%;\n    left: 30%;\n    top: 20%;\n    z-index: 100;\n    background-color: white;\n    box-shadow: 2x 2px 4px #bbbbbb;\n    padding: 2%;\n}\n.logo[_ngcontent-%COMP%] {\n    display: block;\n    margin: 2% auto;\n    width: 50px;\n    height: 50px;\n}\n.app-download-popup[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\n    text-align: center;\n    margin: 1%;\n    color: #024771;\n    font-weight: 500;\n    font-size: 1.2em;\n}\n.app-download-popup[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:nth-of-type(1){\n    color: #ffa600;\n    font-weight: 700\n}\na[_ngcontent-%COMP%]{\n    display: block;\n    text-align: center;\n    color: black;\n    text-decoration: none;\n}\n@media ( max-width: 720px) {\n    .app-download-popup[_ngcontent-%COMP%]{\n        width: 94%;\n        left: 1%;\n    }\n}\n@media ( max-width: 980px) and ( min-width: 720px) {\n    .app-download-popup[_ngcontent-%COMP%]{\n        width: 50%;\n        left: 25%;\n    }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pop-up/pop-up.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/pop-up/pop-up.component.ngfactory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./pop-up.component.css.shim.ngstyle */ "./src/app/pop-up/pop-up.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./pop-up.component */ "./src/app/pop-up/pop-up.component.ts");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var styles_PopUpComponent = [i0.styles];
var RenderType_PopUpComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_PopUpComponent, data: {} });
exports.RenderType_PopUpComponent = RenderType_PopUpComponent;
function View_PopUpComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [["class", "app-download-popup"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["alt", ""], ["class", "close"], ["src", "/assets/images/sports-social-cancel-black.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [["alt", ""], ["class", "logo"], ["src", "/assets/images/sports-social-logo.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Join Sports Social!"])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["and stay Connected to your sport always"])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "a", [["href", "https://goo.gl/qrgCz5"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Click here to download the App"]))], null, null); }
exports.View_PopUpComponent_0 = View_PopUpComponent_0;
function View_PopUpComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-pop-up", [], null, null, null, View_PopUpComponent_0, RenderType_PopUpComponent)), i1.ɵdid(1, 114688, null, 0, i2.PopUpComponent, [i3.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_PopUpComponent_Host_0 = View_PopUpComponent_Host_0;
var PopUpComponentNgFactory = i1.ɵccf("sports-social-pop-up", i2.PopUpComponent, View_PopUpComponent_Host_0, {}, {}, []);
exports.PopUpComponentNgFactory = PopUpComponentNgFactory;


/***/ }),

/***/ "./src/app/pop-up/pop-up.component.ts":
/*!********************************************!*\
  !*** ./src/app/pop-up/pop-up.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var PopUpComponent = /** @class */ (function () {
    function PopUpComponent(router) {
        this.router = router;
    }
    PopUpComponent.prototype.close = function () {
        this.router.navigate([{ outlets: { 'AppDownload': null } }], { skipLocationChange: true });
    };
    PopUpComponent.prototype.ngOnInit = function () {
    };
    return PopUpComponent;
}());
exports.PopUpComponent = PopUpComponent;


/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.css.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.css.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["*[_ngcontent-%COMP%]{\n    margin: 2%;\n    margin-top: 5%;\n    margin-bottom: 5%;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ngfactory.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./privacy-policy.component.css.shim.ngstyle */ "./src/app/privacy-policy/privacy-policy.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../header/header.component.ngfactory */ "./src/app/header/header.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var i4 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i5 = __webpack_require__(/*! ../footer/footer.component.ngfactory */ "./src/app/footer/footer.component.ngfactory.js");
var i6 = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
var i7 = __webpack_require__(/*! ./privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
var i8 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_PrivacyPolicyComponent = [i0.styles];
var RenderType_PrivacyPolicyComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_PrivacyPolicyComponent, data: {} });
exports.RenderType_PrivacyPolicyComponent = RenderType_PrivacyPolicyComponent;
function View_PrivacyPolicyComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-header", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i2.View_HeaderComponent_0, i2.RenderType_HeaderComponent)), i1.ɵdid(1, 4308992, null, 0, i3.HeaderComponent, [i4.PropertyService], null, null), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Privacy Policy"])), (_l()(), i1.ɵeld(4, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" CnP Sports Services Private Limited (\"Sports Social, \u201Cwe\u201D) respect your privacy and are committed to protecting it through our compliance with this privacy policy. This policy describes :\n"])), (_l()(), i1.ɵeld(6, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 4, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The types of information that we may collect from you when you access or use our websites, applications and other online services (collectively, our \"Services\"); and "])), (_l()(), i1.ɵeld(10, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Our practices for collecting, using, maintaining, protecting and disclosing that information. "])), (_l()(), i1.ɵeld(12, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" This policy applies only to information we collect through our Services, in email, text and other electronic communications sent through or in connection with our Services. "])), (_l()(), i1.ɵeld(15, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" This policy DOES NOT apply to information that you provide to, or that is collected by, any third-party, such social networks that you use in connection with our Services. "])), (_l()(), i1.ɵeld(18, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Services. By accessing or using our Services, you agree to this privacy policy. This policy may change from time to time, your continued use of our Services after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates. "])), (_l()(), i1.ɵeld(21, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 240, "ol", [], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 117, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The information we collect and how we use it"])), (_l()(), i1.ɵeld(26, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We collect several types of information from and about users of our Services, including information: "])), (_l()(), i1.ɵeld(28, 0, null, null, 4, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" By which you may be personally identified; and/or "])), (_l()(), i1.ɵeld(31, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" About your internet connection, the equipment you use to access our Services and your usage details. "])), (_l()(), i1.ɵeld(33, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We collect this information : "])), (_l()(), i1.ɵeld(35, 0, null, null, 4, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Directly from you when you provide it to us; and/or "])), (_l()(), i1.ɵeld(38, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Automatically as you navigate through our Services (information collected automatically may include usage details, IP addresses and information collected through cookies, web beacons and other tracking technologies). "])), (_l()(), i1.ɵeld(40, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Information You Provide to Us"])), (_l()(), i1.ɵeld(42, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The information we collect on or through our Services may include : "])), (_l()(), i1.ɵeld(44, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Your account information : "])), (_l()(), i1.ɵeld(46, 0, null, null, 6, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Facebook permissions asked by this Application "])), (_l()(), i1.ɵeld(49, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" This Application may ask for some Facebook permissions allowing it to perform actions with the User's Facebook account and to retrieve information, including Personal Data, from it. "])), (_l()(), i1.ɵeld(51, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" For more information about the following permissions, refer to the Facebook permissions documentation and to the Facebook privacy policy. "])), (_l()(), i1.ɵeld(53, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The permissions asked are the following :"])), (_l()(), i1.ɵeld(55, 0, null, null, 24, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(56, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Basic information: "])), (_l()(), i1.ɵeld(58, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" By default, this includes certain User\u2019s Data such as id, name, picture, gender, and their locale. Certain connections of the User, such as the Friends, are also available. If the User has made more of their Data public, more information will be available. "])), (_l()(), i1.ɵeld(60, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" About Me: "])), (_l()(), i1.ɵeld(62, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Provides access to the 'About Me' section of the profile. "])), (_l()(), i1.ɵeld(64, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Access Friend Lists: "])), (_l()(), i1.ɵeld(66, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Provides access to any friend lists the User created. "])), (_l()(), i1.ɵeld(68, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Access private data: "])), (_l()(), i1.ɵeld(70, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Access the User's and friends' private data. "])), (_l()(), i1.ɵeld(72, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Birthday: "])), (_l()(), i1.ɵeld(74, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Provides access to the birthday. "])), (_l()(), i1.ɵeld(76, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Contact email: "])), (_l()(), i1.ɵeld(78, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Access the User's contact email address. "])), (_l()(), i1.ɵeld(80, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Detailed information on the processing of Personal Data : "])), (_l()(), i1.ɵeld(82, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Personal Data is collected for the following purposes and using the following services : "])), (_l()(), i1.ɵeld(84, 0, null, null, 12, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(85, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Your preferences: Your preferences and settings such as Sports Interests etc. "])), (_l()(), i1.ɵeld(87, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Your content: Information you provide through our Services, including your reviews, photographs, comments, actions, the users you are connected with , contact information of people you add to, or notify of, your reservations through our Services, names, and other information you provide on our Services, and other information in your account profile. "])), (_l()(), i1.ɵeld(89, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Your searches and other activities: The search terms you have looked up and results you selected. "])), (_l()(), i1.ɵeld(91, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Your browsing information: How long you used our Services and which features you used; the ads you clicked on. "])), (_l()(), i1.ɵeld(93, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Your communications: Communications between you and other users or merchants through our Services; your participation in a survey, poll, sweepstakes, contest or promotion scheme; your request for certain features (e.g., newsletters, updates or other products); your communication with us about employment opportunities posted to the services. "])), (_l()(), i1.ɵeld(95, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Your Public Posts: You also may provide information (such as ratings , reviews , tips, photos, comments, likes, friends, etc.) to be published or displayed (hereinafter, \"posted\") on publicly accessible areas of our Services, or transmitted to other users of our Services or third-parties (collectively, \"User Contributions\"). Your User Contributions are posted on and transmitted to others at your own risk. Please be aware that no security measures are perfect or impenetrable (see \"Security\" section below). Additionally, we cannot control the actions of other users of our Services with whom you may choose to share your User Contributions. Therefore, we cannot and do not guarantee that your User Contributions will not be viewed by unauthorized persons. We may display this information on the Services, share it with businesses, and further distribute it to a wider audience through third party sites and services. You should be careful about revealing any sensitive details about yourself in such postings. "])), (_l()(), i1.ɵeld(97, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We use the information you provide to us to enhance the functionality and improve the quality of our Services, and to personalize your experience while using our Services. We also may use this information to display relevant advertising, provide support to you, communicate with you, and comply with our legal obligations. "])), (_l()(), i1.ɵeld(99, 0, null, null, 37, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(100, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Information About Your Friends. "])), (_l()(), i1.ɵeld(102, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" You have the option to request your friends to join the Services by providing their contact information. If you request a friend to join and connect with you on the Services, we will only use your friend\u2019s contact information to process your request. "])), (_l()(), i1.ɵeld(104, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Information About Your Messages "])), (_l()(), i1.ɵeld(106, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" If you exchange messages with others through the Services, we may store them in order to process and deliver them, allow you to manage them, and investigate possible violations of our Terms of Service and wrongdoing in connection with the Services. If you send information from the Services to your mobile device via SMS text message, we may log your phone number, phone carrier, and the date and time that the message was processed. Carriers may charge recipients for texts that they receive. "])), (_l()(), i1.ɵeld(108, 0, null, null, 28, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Information We Collect Through Automatic Data Collection Technologies "])), (_l()(), i1.ɵeld(110, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We may automatically collect certain information about the computer or devices (including mobile devices) you use to access the Services, and about your use of the Services, even if you use the Services without registering or logging in. "])), (_l()(), i1.ɵeld(112, 0, null, null, 24, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(113, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Usage information: Details of your use of our Services, including traffic data, location data, logs and other communication data and the resources that you access and use on or through our Services. "])), (_l()(), i1.ɵeld(115, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Computer and device information: Information about your computer, Internet connection and mobile device, including your IP address, operating systems, platforms, browser type, other browsing information (connection, speed, connection type etc.), device type, device\u2019s unique device identifier, mobile network information and the device\u2019s telephone number. "])), (_l()(), i1.ɵeld(117, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Stored information and files: Our applications also may access metadata and other information associated with other files stored on your mobile device. This may include, for example, photographs, audio and video clips, personal contacts and address book information. "])), (_l()(), i1.ɵeld(119, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Location information: Our applications collect real-time information about the location of your device, as permitted by you. "])), (_l()(), i1.ɵeld(121, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Last URL visited: The URL of the last web page you visited before visiting our websites. "])), (_l()(), i1.ɵeld(123, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Mobile device IDs: Unique mobile device identifier (e.g. IDFA or other device IDs on Apple devices like the iPhone and iPad), if you\u2019re using our Services on a mobile device, we may use mobile device IDs (the unique identifier assigned to a device by the manufacturer), instead of cookies, to recognize you. We may do this to store your preferences and track your use of our applications. Unlike cookies, mobile device IDs cannot be deleted. Advertising companies may use device IDs to track your use of our applications, track the number of advertisements displayed, measure advertising performance and display advertisements that are more relevant to you. Analytics companies may use mobile device IDs to track your usage of our applications. "])), (_l()(), i1.ɵeld(125, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Your preferences: Your preferences and settings such as time zone and language. "])), (_l()(), i1.ɵeld(127, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Your activity on the Services: Information about your activity on the Services, such as your search queries, comments, domain names, search results selected, number of clicks, pages viewed and the order of those pages, how long you visited our Services, the date and time you used the Services, error logs, and other similar information. "])), (_l()(), i1.ɵeld(129, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Mobile status: For mobile application users, the online or offline status of your application. "])), (_l()(), i1.ɵeld(131, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Applications: If you use the Sports Social application, Sports Social may collect information about the presence and/ or absence and/ or details pertaining to other applications on your mobile phone. "])), (_l()(), i1.ɵeld(133, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Precise Location Information and How to Opt Out "])), (_l()(), i1.ɵeld(135, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" When you use one of our location-enabled services (for example, when you access Services from a mobile device), we may collect and process information about your mobile device\u2019s GPS location (including the latitude, longitude or altitude of your mobile device) and the time the location information is recorded to customize the Services with location-based information and features (for example, to inform you about sports academies , coaches etc. in your area or applicable promotions). Some of these services require your personal data for the feature to work and we may associate location data with your device ID and other information we hold about you. We keep this data for no longer than is reasonably necessary for providing services to you. If you wish to use the particular feature, you will be asked to consent to your data being used for this purpose. You can withdraw your consent at any time by disabling the GPS or other location-tracking functions on your device, provided your device allows you to do this. See your device manufacturer\u2019s instructions for further details. "])), (_l()(), i1.ɵeld(137, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Cookies and Other Electronic Tools "])), (_l()(), i1.ɵeld(139, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We, and third parties with whom we partner, may use cookies, pixel tags, web beacons, mobile device IDs, \u201Cflash cookies\u201D and similar files or technologies to collect and store information in respect to your use of the Services and third party websites. A cookie is a small text file that is stored on your computer that enables us to recognize you (for example, as a registered user) when you visit our website, store your preferences and settings, enhance your experience by delivering content and advertising specific to your interests, perform research and analytics, track your use of our Services, and assist with security and administrative functions. Cookies may be persistent or stored only during an individual session. To understand more about cookies. "])), (_l()(), i1.ɵeld(141, 0, null, null, 35, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(142, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["How we use the information we collect"])), (_l()(), i1.ɵeld(144, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We use the information we collect from and about you for a variety of purposes, including to : "])), (_l()(), i1.ɵeld(146, 0, null, null, 28, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(147, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Process and respond to your queries "])), (_l()(), i1.ɵeld(149, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Understand our users (what they do on our Services, what features they like, how they use them, etc.), improve the content and features of our Services (such as by personalizing content to your interests), process and complete your transactions, and make special offers. "])), (_l()(), i1.ɵeld(151, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Administer our Services and diagnose technical problems. "])), (_l()(), i1.ɵeld(153, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Send you communications that you have requested or that may be of interest to you. "])), (_l()(), i1.ɵeld(155, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Send you communications that you have requested or that may be of interest to you. "])), (_l()(), i1.ɵeld(157, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Enable us to show you ads that are relevant to you. "])), (_l()(), i1.ɵeld(159, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Generate and review reports and data about, and to conduct research on, our user base and Service usage patterns. "])), (_l()(), i1.ɵeld(161, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Generate and review reports and data about, and to conduct research on, our user base and Service usage patterns "])), (_l()(), i1.ɵeld(163, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Provide you with customer support. "])), (_l()(), i1.ɵeld(165, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Provide you with notices about your account. "])), (_l()(), i1.ɵeld(167, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Notify you about changes to our Services. "])), (_l()(), i1.ɵeld(169, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Allow you to participate in interactive features offered through our Services. "])), (_l()(), i1.ɵeld(171, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" In any other way we may describe when you provide the information. "])), (_l()(), i1.ɵeld(173, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" For any other purpose with your consent. "])), (_l()(), i1.ɵeld(175, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We may use the information we have collected from you to enable us to display advertisements to our advertisers\u2019 target audiences. Even though we do not disclose your personal information for these purposes without your consent, if you click on or otherwise interact with an advertisement, the advertiser may assume that you meet its target criteria. "])), (_l()(), i1.ɵeld(177, 0, null, null, 21, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(178, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" How we share the information we collect"])), (_l()(), i1.ɵeld(180, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We may disclose personal information that we collect or you provide, as described in this privacy policy, in the following ways : "])), (_l()(), i1.ɵeld(182, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" General Information Disclosures "])), (_l()(), i1.ɵeld(184, 0, null, null, 14, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(185, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" To fulfill the purpose for which you provide it. "])), (_l()(), i1.ɵeld(187, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" For any other purpose disclosed by us when you provide the information. "])), (_l()(), i1.ɵeld(189, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Service Providers. We may share your information with outside vendors that we use for a variety of purposes, such as to send you emails and messages on behalf of other Sports Social members, push notifications to your mobile device on our behalf, provide voice recognition services to process your spoken queries and questions, help us analyze use of our Services, and process and collect payments. Some of our products, services and databases are hosted by third party hosting services providers. We also may use vendors for other projects, such as conducting surveys or organizing sweepstakes for us. We may share information about you with these vendors only to enable them to perform their services. "])), (_l()(), i1.ɵeld(191, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Legal Purposes. We may share your information when we believe in good faith that such sharing is reasonably necessary in order to investigate, prevent, or take action regarding possible illegal activities or to comply with legal process. We may also share your information to investigate and address threats or potential threats to the physical safety of any person, to investigate and address violations of this Privacy Policy or the Terms of Service, or to investigate and address violations of the rights of third parties and/or to protect the rights, property and safety of Sports Social, our employees, users, or the public. This may involve the sharing of your information with law enforcement, government agencies, courts, and/or other organizations on account of legal request such as subpoena, court order or government demand to comply with the law. "])), (_l()(), i1.ɵeld(193, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Social Networks. If you interact with social media features on our Services, such as the Facebook Like button, or use your social media credentials to log-in or post content, these features may collect information about your use of the Services, as well as post information about your activities on the social media service. Your interactions with social media companies are governed by their privacy policies. "])), (_l()(), i1.ɵeld(195, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Sports Social, our customers or others. "])), (_l()(), i1.ɵeld(197, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Consent. We may share your information in any other circumstances where we have your consent. "])), (_l()(), i1.ɵeld(199, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(200, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Analytics and tailored advertising"])), (_l()(), i1.ɵeld(202, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" To help us better understand your use of the Services, we may use third-party web analytics on our Services, such as Google Analytics. These service providers use the sort of technology described in the \u201CAutomatically-Collected Information\u201D Section above. The information collected by this technology will be disclosed to or collected directly by these service providers, who use the information to evaluate our users\u2019 use of the Services. We also use Google Analytics as described in the following section. To prevent Google Analytics from collecting or using your information, you may install the Google Analytics Opt-Out Browser Add-on. "])), (_l()(), i1.ɵeld(204, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(205, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Communications choices"])), (_l()(), i1.ɵeld(207, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" When you sign up for an account, you are opting in to receive emails from other Sports Social users, businesses, and Sports Social itself. you can follow the \u201Cunsubscribe\u201D instructions in commercial email messages, but note that you cannot opt out of receiving certain administrative notices, service notices, or legal notices from Sports Social. "])), (_l()(), i1.ɵeld(209, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(210, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Reviewing, changing or deleting information"])), (_l()(), i1.ɵeld(212, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" If you would like to review, change or delete personal information we have collected from you, or permanently delete your account, please use the \u201CContact Us\u201D , we will do as per your requirement. "])), (_l()(), i1.ɵeld(214, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(215, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" If you delete your User Contributions from our websites, copies of your User Contributions may remain viewable in cached and archived pages, or might have been copied or stored by other users of our websites. Proper access and use of information provided on our websites, including User Contributions, is governed . "])), (_l()(), i1.ɵeld(217, 0, null, null, 17, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(218, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Accessing & correcting your personal information"])), (_l()(), i1.ɵeld(220, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We will take reasonable steps to accurately record the personal information that you provide to us and any subsequent updates. "])), (_l()(), i1.ɵeld(222, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(223, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We encourage you to review, update, and correct the personal information that we maintain about you, and you may request that we delete personal information about you that is inaccurate, incomplete, or irrelevant for legitimate purposes, or are being processed in a way which infringes any applicable legal requirement. "])), (_l()(), i1.ɵeld(225, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(226, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Your right to review, update, correct, and delete your personal information may be limited, subject to the law of your jurisdiction : "])), (_l()(), i1.ɵeld(228, 0, null, null, 6, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(229, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" if your requests are abusive or unreasonably excessive, "])), (_l()(), i1.ɵeld(231, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" where the rights or safety of another person or persons would be encroached upon, or "])), (_l()(), i1.ɵeld(233, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" if the information or material you request relates to existing or anticipated legal proceedings between you and us, or providing access to you would prejudice negotiations between us or an investigation of possible unlawful activity. Your right to review, update, correct, and delete your information is subject to our records retention policies and applicable law, including any statutory retention requirements. "])), (_l()(), i1.ɵeld(235, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(236, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Security: How we protect your information"])), (_l()(), i1.ɵeld(238, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We have implemented appropriate physical, electronic, and managerial procedures to safeguard and help prevent unauthorized access to your information and to maintain data security. These safeguards take into account the sensitivity of the information that we collect, process and store and the current state of technology. We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it, However, no method of transmission over the Internet or via mobile device, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security and thereby usage in a manner that is inconsistent with this Privacy Policy. "])), (_l()(), i1.ɵeld(240, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(241, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We assume no liability or responsibility for disclosure of your information due to errors in transmission, unauthorized third-party access, or other causes beyond our control. You play an important role in keeping your personal information secure. You should not share your user name, password, or other security information for your Sports Social account with anyone. If we receive instructions using your user name and password, we will consider that you have authorized the instructions. "])), (_l()(), i1.ɵeld(243, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(244, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Children Under 13"])), (_l()(), i1.ɵeld(246, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The Services are not intended for users under the age of 13. We do not knowingly collect any personal information from children under 13 or market to or solicit information from anyone under the age of 13. If we become aware that a person submitting personal information is under 13, we will delete the account and any related information as soon as possible. . If you believe we might have any information from or about a child under 13, please contact us at sayhello@sportsocial.in "])), (_l()(), i1.ɵeld(248, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(249, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Compliance with data protection regulations"])), (_l()(), i1.ɵeld(251, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The information we obtain from or about you may be processed and stored in India and our other various servers located across the globe, which may provide for different data protection rules than the country in which you reside. We comply with generally accepted industry standard regulations regarding the collection, use, and retention of data. By using the Services, you consent to the collection, transfer, use, storage and disclosure of your information as described in this Privacy Policy, including to the transfer of your information outside of your country of residence. If you have any questions relating to your personal data, please write to us on sayhello@sportsocial.in "])), (_l()(), i1.ɵeld(253, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(254, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Data retention and account termination"])), (_l()(), i1.ɵeld(256, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" You can close your account by visiting your profile settings page on our website. We will remove your public posts from view and/or dissociate them from your account profile, but we may retain information about you for the purposes authorized under this Privacy Policy unless prohibited by law. Thereafter, we will either delete your personal information or de-identify it so that it is anonymous and not attributed to your identity. For example, we may retain information to prevent, investigate, or identify possible wrongdoing in connection with the Service or to comply with legal obligations. "])), (_l()(), i1.ɵeld(258, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(259, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Changes to this privacy policy"])), (_l()(), i1.ɵeld(261, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We reserve the right to amend this Privacy Policy from time to time to reflect changes in the law, our data collection and use practices, the features of our services, or advances in technology. Please check this page periodically for changes. Use of information we collect is subject to the Privacy Policy in effect at the time such information is used. If we make any material changes to this Privacy Policy, we will post the changes here. Please review the changes carefully. Your continued use of the Services following the posting of changes to this Privacy Policy will constitute your consent and acceptance of those changes. "])), (_l()(), i1.ɵeld(263, 0, null, null, 1, "sports-social-footer", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i1.ɵnov(_v, 264).onscroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i5.View_FooterComponent_0, i5.RenderType_FooterComponent)), i1.ɵdid(264, 114688, null, 0, i6.FooterComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 264, 0); }, null); }
exports.View_PrivacyPolicyComponent_0 = View_PrivacyPolicyComponent_0;
function View_PrivacyPolicyComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-privacy-policy", [], null, null, null, View_PrivacyPolicyComponent_0, RenderType_PrivacyPolicyComponent)), i1.ɵdid(1, 114688, null, 0, i7.PrivacyPolicyComponent, [i8.Title, i8.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_PrivacyPolicyComponent_Host_0 = View_PrivacyPolicyComponent_Host_0;
var PrivacyPolicyComponentNgFactory = i1.ɵccf("sports-social-privacy-policy", i7.PrivacyPolicyComponent, View_PrivacyPolicyComponent_Host_0, {}, {}, []);
exports.PrivacyPolicyComponentNgFactory = PrivacyPolicyComponentNgFactory;


/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent(pagetitle, meta) {
        this.pagetitle = pagetitle;
        this.meta = meta;
        this.title = 'Privacy Policy | Sports Social';
        this.description = "Get Sports Social's privacy policy. If you have any questions related to this policy, please feel free to contact us. We will love t o hear from you";
        this.keywords = "Privacy Policy Sports Social";
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        this.pagetitle.setTitle(this.title);
        this.meta.updateTag({ name: 'title', content: this.title });
        this.meta.updateTag({ name: 'description', content: this.description });
        this.meta.updateTag({ name: 'keywords', content: this.keywords });
        this.meta.updateTag({ property: 'og:title', content: this.title });
        this.meta.updateTag({ property: 'og:description', content: this.description });
        this.meta.updateTag({ property: 'og:keywords', content: this.keywords });
    };
    return PrivacyPolicyComponent;
}());
exports.PrivacyPolicyComponent = PrivacyPolicyComponent;


/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.module.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.module.ngfactory.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./privacy-policy.module */ "./src/app/privacy-policy/privacy-policy.module.ts");
var i2 = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./privacy-policy.component.ngfactory */ "./src/app/privacy-policy/privacy-policy.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
var i7 = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
var i8 = __webpack_require__(/*! ./privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
var PrivacyPolicyModuleNgFactory = i0.ɵcmf(i1.PrivacyPolicyModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.PrivacyPolicyComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i5.RouterModule, i5.RouterModule, [[2, i5.ɵangular_packages_router_router_a], [2, i5.Router]]), i0.ɵmpd(1073742336, i6.HeaderModule, i6.HeaderModule, []), i0.ɵmpd(1073742336, i7.FooterModule, i7.FooterModule, []), i0.ɵmpd(1073742336, i1.PrivacyPolicyModule, i1.PrivacyPolicyModule, []), i0.ɵmpd(1024, i5.ROUTES, function () { return [[{ path: "", component: i8.PrivacyPolicyComponent }]]; }, [])]); });
exports.PrivacyPolicyModuleNgFactory = PrivacyPolicyModuleNgFactory;


/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.module.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PrivacyPolicyModule = /** @class */ (function () {
    function PrivacyPolicyModule() {
    }
    return PrivacyPolicyModule;
}());
exports.PrivacyPolicyModule = PrivacyPolicyModule;


/***/ }),

/***/ "./src/app/shared/services/get.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/get.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/http */ "@angular/http");
var Subject_1 = __webpack_require__(/*! rxjs/Subject */ "rxjs/Subject");
__webpack_require__(/*! rxjs/Rx */ "rxjs/Rx");
var GetService = /** @class */ (function () {
    function GetService(http) {
        this.http = http;
        this.data = new Subject_1.Subject();
    }
    GetService.prototype.serverData = function (url) {
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    GetService.prototype.GlobalOpenArenaFeed = function () {
        return this.http.get('http://test.chaseyoursport.com:3200/getGlobalOpenArenaFeed');
    };
    GetService.prototype.GlobalNewsFeed = function () {
        return this.http.get('http://atg.sportsocial.in:4000/news');
    };
    GetService.prototype.getImage = function () {
        return this.http.get("https://helpcenter.chaseyoursport.com/get/image");
    };
    GetService.prototype.getTopics = function () {
        return this.http.get("https://helpcenter.chaseyoursport.com/get/topics");
    };
    GetService.prototype.getSubTopic = function (id) {
        return this.http.get("https://helpcenter.chaseyoursport.com/get/subTopics/" + id);
    };
    GetService.prototype.getQA = function (topicId, subtopicId) {
        return this.http.get("https://helpcenter.chaseyoursport.com/get/QA/" + topicId + "/" + subtopicId);
    };
    GetService.prototype.getBlogdata = function () {
        return this.http.get("https://prod.chaseyoursport.com/loadStartingTenblogs");
    };
    GetService.prototype.getinstadata = function () {
        return this.http.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=3238782460.1408c01.74c84f4d73a048c69abe08f3d038e444");
    };
    GetService.prototype.getUpcomingCricket = function () {
        return this.http.get("http://35.176.65.124:2200/score/upcomingCricketMatches");
    };
    return GetService;
}());
exports.GetService = GetService;


/***/ }),

/***/ "./src/app/shared/services/link.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/link.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var LinkService = /** @class */ (function () {
    function LinkService(rendererFactory, document) {
        this.rendererFactory = rendererFactory;
        this.document = document;
    }
    LinkService.prototype.addTag = function (tag, forceCreation) {
        try {
            var renderer_1 = this.rendererFactory.createRenderer(this.document, {
                id: '-1',
                encapsulation: core_1.ViewEncapsulation.None,
                styles: [],
                data: {}
            });
            var link_1 = renderer_1.createElement('link');
            var head = this.document.head;
            var selector = this._parseSelector(tag);
            if (head === null) {
                throw new Error('<head> not found within DOCUMENT.');
            }
            Object.keys(tag).forEach(function (prop) {
                return renderer_1.setAttribute(link_1, prop, tag[prop]);
            });
            renderer_1.appendChild(head, link_1);
        }
        catch (e) {
            console.error('Error within linkService : ', e);
        }
    };
    LinkService.prototype._parseSelector = function (tag) {
        var attr = tag.rel ? 'rel' : 'hreflang';
        return attr + "=\"" + tag[attr] + "\"";
    };
    return LinkService;
}());
exports.LinkService = LinkService;


/***/ }),

/***/ "./src/app/shared/services/location.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/location.service.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var LocationService = /** @class */ (function () {
    function LocationService(http) {
        this.http = http;
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    }
    LocationService.prototype.error = function (err) {
        console.warn("ERROR(" + err.code + "): " + err.message);
    };
    LocationService.prototype.getGeoLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                var crd = pos.coords;
                console.log(crd);
                _this.position = {
                    latitude: crd.latitude,
                    longitude: crd.longitude
                };
                resolve(_this.position);
                console.log('Your current position is:');
                console.log("Latitude : " + crd.latitude);
                console.log("Longitude: " + crd.longitude);
                console.log('page no. is :' + _this.feedPageRequestObject.page);
                console.log("More or less " + crd.accuracy + " meters.");
            }, function (err) {
                console.warn("ERROR(" + err.code + "): " + err.message);
                _this.position = {
                    latitude: 0,
                    longitude: 0
                };
                resolve(_this.position);
            }, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
        });
    };
    return LocationService;
}());
exports.LocationService = LocationService;


/***/ }),

/***/ "./src/app/shared/services/match-data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/match-data.service.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var location_service_1 = __webpack_require__(/*! ./location.service */ "./src/app/shared/services/location.service.ts");
var post_service_1 = __webpack_require__(/*! ./post.service */ "./src/app/shared/services/post.service.ts");
var MatchDataService = /** @class */ (function () {
    function MatchDataService(loc, get) {
        this.loc = loc;
        this.get = get;
        this.globalArena = [];
    }
    MatchDataService.prototype.getActivityName = function (activityid) {
        if (activityid === 1002) {
            return 'Joined';
        }
        if (activityid === 1004) {
            return 'Promoted';
        }
        if (activityid === 1009) {
            return 'Watching';
        }
        if (activityid === 1005) {
            return 'Commented';
        }
        if (activityid === 1001) {
            return 'Created';
        }
    };
    MatchDataService.prototype.globalMatchFeed = function (page, gameid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loc.getGeoLocation()
                .then(function (pos) {
                _this.get.globalMatchFeed(pos['latitude'], pos['longitude'], page, gameid).subscribe(function (res) {
                    var data = res['Feed'];
                    // tslint:disable-next-line:forin
                    for (var i in data) {
                        _this.globalArena.push({
                            eventId: data[i].eventid,
                            creatorImage: data[i].creatorImage,
                            creatorName: data[i].creatorName,
                            type: data[i].feedtype,
                            doerId: data[i].doerId,
                            doerName: data[i].user_name,
                            doerPic: data[i].Profile_Photo,
                            matchText: data[i].EventText,
                            matchImage: data[i].Event_Image,
                            activityDate: data[i].InsertedDate,
                            matchDate: data[i].startdatetime,
                            restrictionCount: data[i].restrictionCount,
                            joineeCount: data[i].JoineeCount,
                            commentCount: data[i].CommentCount,
                            watchCount: data[i].WatchCount,
                            promoteCount: data[i].PromoteCount,
                            venueName: data[i].Venue_Name,
                            gameName: data[i].GameName,
                            activityName: _this.getActivityName(data[i].ActivityId)
                        });
                    }
                    resolve(_this.globalArena.slice(page * 15, (page + 1) * 15));
                }, function (err) {
                    var errObj = { 'err': err, 'message': 'Something went wrong with Match feed!' };
                    reject(errObj);
                });
            }).catch(function (err) {
                console.log('err', err);
            });
        });
    };
    return MatchDataService;
}());
exports.MatchDataService = MatchDataService;


/***/ }),

/***/ "./src/app/shared/services/messaging.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/messaging.service.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __webpack_require__(/*! @angular/fire/database */ "@angular/fire/database");
var auth_1 = __webpack_require__(/*! @angular/fire/auth */ "@angular/fire/auth");
var messaging_1 = __webpack_require__(/*! @angular/fire/messaging */ "@angular/fire/messaging");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var firestore_1 = __webpack_require__(/*! angularfire2/firestore */ "angularfire2/firestore");
var http_1 = __webpack_require__(/*! @angular/http */ "@angular/http");
var MessagingService = /** @class */ (function () {
    function MessagingService(angularFireDB, angularFireAuth, angularFireMessaging, afs, http) {
        this.angularFireDB = angularFireDB;
        this.angularFireAuth = angularFireAuth;
        this.angularFireMessaging = angularFireMessaging;
        this.afs = afs;
        this.http = http;
        this.currentMessage = new rxjs_1.BehaviorSubject(this.currentMessage);
        this.posturl = "http://35.176.65.124:2200/tokens/";
        this.angularFireMessaging.messaging.subscribe(function (_messaging) {
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        });
    }
    /**
     * update token in firebase database
     *
     * @param userId userId as a key
     * @param token token as a value
     */
    MessagingService.prototype.updateToken = function (userId, token) {
        var _this = this;
        // we can change this function to request our backend service
        this.angularFireAuth.authState.pipe(operators_1.take(1)).subscribe(function () {
            var data = {};
            data[userId] = token;
            _this.angularFireDB.object('fcmTokens/').update(data);
        });
    };
    /**
     * request permission for notification from firebase cloud messaging
     *
     * @param userId userId
     */
    MessagingService.prototype.requestPermission = function (userId) {
        var _this = this;
        this.angularFireMessaging.requestToken.subscribe(function (token) {
            _this.TokenAvailable = token;
            console.log(token);
            _this.updateToken(userId, token);
            _this.sendToken(token);
        }, function (err) {
            console.error('Unable to get permission to notify.', err);
        });
    };
    MessagingService.prototype.sendToken = function (tkn) {
        this.body = {
            generatedToken: tkn
        };
        this.http.post(this.posturl, this.body).subscribe(function (res) { });
    };
    //    saveToken(user, token): void {
    //      console.log("hey this is user", user,"and this is token of saveing data",token);
    //     const currentTokens = user.fcmTokens || { }
    //     // If token does not exist in firestore, update db
    //     if (!currentTokens[token]) {
    //       const userRef = this.afs.collection('users').doc(user.uid)
    //       const tokens = { ...currentTokens, [token]: true }
    //       userRef.update({ fcmTokens: tokens })
    //     }
    // }
    /**
     * hook method when new notification received in foreground
     */
    MessagingService.prototype.receiveMessage = function () {
        var _this = this;
        this.angularFireMessaging.messages.subscribe(function (payload) {
            console.log("new message received. ", payload);
            _this.currentMessage.next("payload");
        });
    };
    return MessagingService;
}());
exports.MessagingService = MessagingService;


/***/ }),

/***/ "./src/app/shared/services/news.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/news.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var post_service_1 = __webpack_require__(/*! ./post.service */ "./src/app/shared/services/post.service.ts");
var NewsService = /** @class */ (function () {
    function NewsService(get) {
        this.get = get;
        this.globalArena = [];
    }
    NewsService.prototype.globalNewsFeed = function (page, gameName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get.globalNewsFeed(page, gameName).subscribe(function (res) {
                var data = res;
                console.log(data);
                // tslint:disable-next-line:forin
                for (var i in data) {
                    _this.globalArena.push({
                        type: data[i].feedType,
                        commentCount: data[i].commentCount,
                        likeCount: data[i].likeCount,
                        shareCount: data[i].shareCount,
                        publishedAt: data[i].publishedAt,
                        gameName: data[i].gameName,
                        newsId: data[i]._id,
                        newsImage: data[i].newsImage,
                        sourceImage: data[i].sourceImage,
                        source: data[i].source,
                        title: data[i].title,
                        url: data[i].url,
                        desc: data[i].desc,
                        insertedDate: data[i].insertedDate
                    });
                }
                resolve(_this.globalArena.slice(_this.globalArena.length - 15, _this.globalArena.length));
            }, function (err) {
                var errObj = { 'err': err, 'message': 'Something went wrong with News feed!' };
                reject(errObj);
            });
        });
    };
    return NewsService;
}());
exports.NewsService = NewsService;


/***/ }),

/***/ "./src/app/shared/services/pop-up.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/pop-up.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var PopUpService = /** @class */ (function () {
    function PopUpService() {
        this.ofCard = new rxjs_1.ReplaySubject();
    }
    return PopUpService;
}());
exports.PopUpService = PopUpService;


/***/ }),

/***/ "./src/app/shared/services/post.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/post.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.singleMatchReqObj = [];
        this.matchFeedReqObj = {
            latitude: Number,
            longitude: Number,
            page: Number,
            gameid: Number
        };
        this.url = [
            'https://prod.sportsocial.in/poc/matchinfo',
            'https://prod.sportsocial.in/poc/activityuserdetails',
            'https://prod.sportsocial.in/poc/activityuserdetailsWeb'
        ];
    }
    PostService.prototype.globalNewsFeed = function (pageNo, game) {
        this.newsFeedRequestObject = {
            page: pageNo,
            game: game
        };
        console.log(this.newsFeedRequestObject);
        return this.http.post('https://atg.sportsocial.in/news', this.newsFeedRequestObject);
    };
    PostService.prototype.blogData = function (i, s) {
        this.blogRequestObject = {
            name: s,
            page: i
        };
        // console.log(this.Page);
        return this.http.post('https://prod.chaseyoursport.com/loadblogdata', this.blogRequestObject);
    };
    PostService.prototype.globalMatchFeed = function (lat, long, page, gameid) {
        this.matchFeedReqObj = {
            latitude: lat,
            longitude: long,
            page: page,
            gameid: gameid
        };
        console.log(this.matchFeedReqObj);
        console.log("Heyy this is lat.=" + lat);
        console.log("Heyy this is log.=" + long);
        console.log("Heyy this is page.=" + page);
        console.log("Heyy this is gameid.=" + gameid);
        return this.http.post('https://prod.sportsocial.in/poc/webfeed', this.matchFeedReqObj);
        // return this.http.post('https://test.sportsocial.in/poc/webfeed', this.matchFeedReqObj);
    };
    PostService.prototype.singleMatchData = function (eventid, userid, activityid, urlId, page) {
        this.singleMatchReqObj = [{
                'eventid': eventid,
                'userid': userid,
                'activityid': activityid,
                'page': page
            }];
        console.log(this.singleMatchReqObj);
        return this.http.post(this.url[urlId], this.singleMatchReqObj);
    };
    PostService.prototype.singleNewsData = function (id) {
        return this.http.post('https://atg.sportsocial.in/newsById', { id: id });
    };
    PostService.prototype.insertTopics = function (topic) {
        console.log(topic);
        return this.http.post('https://helpcenter.chaseyoursport.com/save/topic', topic);
    };
    PostService.prototype.insertSubTopics = function (subtopic) {
        return this.http.post('https://helpcenter.chaseyoursport.com/save/subTopics', subtopic);
    };
    PostService.prototype.insertQuesAns = function (QA) {
        return this.http.post('https://helpcenter.chaseyoursport.com/save/QA', QA);
    };
    PostService.prototype.singleBlogSmallDesc = function (id) {
        this.BlogId = {
            blogid: id
        };
        // console.log(this.BlogId);
        return this.http.post('https://prod.chaseyoursport.com/loadSingleBlogDataSmallDesc', this.BlogId)
            .map(function (response) { return response.json(); });
    };
    PostService.prototype.saveformdata = function (dataObject) {
        return this.http.post('https://test.sportsocial.in/web/webcontactus', dataObject);
    };
    return PostService;
}());
exports.PostService = PostService;


/***/ }),

/***/ "./src/app/shared/services/property.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/property.service.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReplaySubject_1 = __webpack_require__(/*! rxjs/ReplaySubject */ "rxjs/ReplaySubject");
var PropertyService = /** @class */ (function () {
    function PropertyService() {
        this.ofHeader = new ReplaySubject_1.ReplaySubject();
        this.ofCarousel = new ReplaySubject_1.ReplaySubject();
        this.ofNavigationBar = new ReplaySubject_1.ReplaySubject();
    }
    return PropertyService;
}());
exports.PropertyService = PropertyService;


/***/ }),

/***/ "./src/app/shared/services/send.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/send.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReplaySubject_1 = __webpack_require__(/*! rxjs/ReplaySubject */ "rxjs/ReplaySubject");
var SendService = /** @class */ (function () {
    function SendService() {
        this.data = new ReplaySubject_1.ReplaySubject();
        this.requestForData = new ReplaySubject_1.ReplaySubject();
        this.height = new ReplaySubject_1.ReplaySubject();
        this.innerHeight = new ReplaySubject_1.ReplaySubject();
    }
    return SendService;
}());
exports.SendService = SendService;


/***/ }),

/***/ "./src/app/shared/services/seo.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/seo.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var SeoService = /** @class */ (function () {
    function SeoService(meta) {
        this.meta = meta;
    }
    SeoService.prototype.generateTags = function (config) {
        // default values
        config = tslib_1.__assign({ title: 'Sports Social: Making it easier to play around', description: 'My SEO friendly Angular Component', image: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg', slug: '' }, config);
        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:site', content: '@Sportsoical' });
        this.meta.updateTag({ name: 'twitter:creator', content: '@SourabhArora' });
        this.meta.updateTag({ name: 'twitter:title', content: config.title });
        this.meta.updateTag({ name: 'twitter:description', content: config.description });
        this.meta.updateTag({ name: 'twitter:image', content: config.image });
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sport Social' });
        this.meta.updateTag({ property: 'og:title', content: config.title });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:image', content: config.image });
        this.meta.updateTag({ property: 'og:url', content: "https://www.sportsocial.in/" + config.slug });
    };
    return SeoService;
}());
exports.SeoService = SeoService;


/***/ }),

/***/ "./src/app/shared/services/time.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/time.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimeService = /** @class */ (function () {
    function TimeService() {
    }
    TimeService.prototype.timePassed = function (i) {
        var writtenDate = new Date(parseInt(i, 10) * 1000);
        var presentDate = new Date();
        if (writtenDate.getDate() === presentDate.getDate() &&
            writtenDate.getMonth() === presentDate.getMonth() &&
            writtenDate.getFullYear() === presentDate.getFullYear()) {
            if (writtenDate.getHours() === presentDate.getHours()) {
                if (writtenDate.getMinutes() === presentDate.getMinutes()) {
                    if (writtenDate.getSeconds() === presentDate.getSeconds()) {
                        return 'Just Now';
                    }
                    else {
                        return presentDate.getSeconds() - writtenDate.getSeconds() + ' sec ago';
                    }
                }
                else {
                    return presentDate.getMinutes() - writtenDate.getMinutes() + ' min ago';
                }
            }
            else {
                return presentDate.getHours() - writtenDate.getHours() + ' hrs ago';
            }
        }
        else {
            return this.ExactDate(parseInt(i, 10));
        }
    };
    TimeService.prototype.ExactDate = function (i) {
        var writtenDate = new Date(i * 1000);
        return writtenDate.toDateString();
    };
    TimeService.prototype.exactDate = function (i) {
        var dateOptions = { month: 'short', day: 'numeric' };
        var timeOpt = { hour: '2-digit', minute: '2-digit' };
        var matchDate = new Date(i);
        var presentDate = new Date();
        console.log(matchDate.toLocaleDateString('en-US', dateOptions), matchDate.toLocaleTimeString('en-US', timeOpt));
        // console.log('Today at ' + matchDate.getHours() + ':' + matchDate.getMinutes());
        if (matchDate.getUTCDate() === presentDate.getUTCDate()
            && matchDate.getFullYear() === presentDate.getFullYear()
            && matchDate.getMonth() === presentDate.getMonth()) {
            // console.log("he")
            return 'Today at ' + matchDate.toLocaleTimeString('en-US', timeOpt);
        }
        else {
            return matchDate.toLocaleDateString('en-US', dateOptions) + ' at ' + matchDate.toLocaleTimeString('en-US', timeOpt);
        }
    };
    TimeService.prototype.relativeDate = function (i) {
        var months = [
            'Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
        ];
        var matchDate = new Date(i);
        var presentDate = new Date();
        if (matchDate.getDate() === presentDate.getDate() &&
            matchDate.getMonth() === presentDate.getMonth() &&
            matchDate.getFullYear() === presentDate.getFullYear()) {
            if (matchDate.getHours() === presentDate.getHours()) {
                if (matchDate.getMinutes() === presentDate.getMinutes()) {
                    if (matchDate.getSeconds() === presentDate.getSeconds()) {
                        return 'Just Now';
                    }
                    else {
                        return presentDate.getSeconds() - matchDate.getSeconds() + ' sec ago';
                    }
                }
                else {
                    return presentDate.getMinutes() - matchDate.getMinutes() + ' min ago';
                }
            }
            else {
                return presentDate.getHours() - matchDate.getHours() + ' hrs ago';
            }
        }
        else {
            return matchDate.getDate() + ' ' + months[matchDate.getMonth()] + ' ' + matchDate.getFullYear();
        }
    };
    TimeService.prototype.newsDate = function (i) {
        var news = new Date(i);
        var dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
        return news.toLocaleDateString('en-US', dateOptions);
    };
    return TimeService;
}());
exports.TimeService = TimeService;


/***/ }),

/***/ "./src/app/sports-specific-feed/sports-specific-feed.component.css.ngstyle.js":
/*!************************************************************************************!*\
  !*** ./src/app/sports-specific-feed/sports-specific-feed.component.css.ngstyle.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["*{\n    box-sizing: border-box;\n}\n\n\n#col-4{\n    margin-left:2.7%;\n    width:30%;\n    \n}\n\n\n@media screen and (max-width:768px){\n      #col-4{\n          width:48%;\n          margin-left:1%;\n      }\n}\n\n\n@media screen and (max-width:500px){\n    #col-4{\n        width:100%;\n    }\n}\n\n\n"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/sports-specific-feed/sports-specific-feed.component.ngfactory.js":
/*!**********************************************************************************!*\
  !*** ./src/app/sports-specific-feed/sports-specific-feed.component.ngfactory.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./sports-specific-feed.component.css.ngstyle */ "./src/app/sports-specific-feed/sports-specific-feed.component.css.ngstyle.js");
var i1 = __webpack_require__(/*! ../../../node_modules/ng-masonry-grid/ng-masonry-grid.css.ngstyle */ "./node_modules/ng-masonry-grid/ng-masonry-grid.css.ngstyle.js");
var i2 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ../cards/match-card/match-card.component.ngfactory */ "./src/app/cards/match-card/match-card.component.ngfactory.js");
var i6 = __webpack_require__(/*! ../cards/match-card/match-card.component */ "./src/app/cards/match-card/match-card.component.ts");
var i7 = __webpack_require__(/*! ../shared/services/time.service */ "./src/app/shared/services/time.service.ts");
var i8 = __webpack_require__(/*! ../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var i9 = __webpack_require__(/*! ../shared/services/pop-up.service */ "./src/app/shared/services/pop-up.service.ts");
var i10 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var i11 = __webpack_require__(/*! ../header/header.component.ngfactory */ "./src/app/header/header.component.ngfactory.js");
var i12 = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var i13 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i14 = __webpack_require__(/*! ../carousel/carousel.component.ngfactory */ "./src/app/carousel/carousel.component.ngfactory.js");
var i15 = __webpack_require__(/*! ../carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
var i16 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i17 = __webpack_require__(/*! ../navigation-bar/navigation-bar.component.ngfactory */ "./src/app/navigation-bar/navigation-bar.component.ngfactory.js");
var i18 = __webpack_require__(/*! ../navigation-bar/navigation-bar.component */ "./src/app/navigation-bar/navigation-bar.component.ts");
var i19 = __webpack_require__(/*! ../../../node_modules/ng-masonry-grid/ng-masonry-grid.ngfactory */ "./node_modules/ng-masonry-grid/ng-masonry-grid.ngfactory.js");
var i20 = __webpack_require__(/*! ../footer/footer.component.ngfactory */ "./src/app/footer/footer.component.ngfactory.js");
var i21 = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
var i22 = __webpack_require__(/*! ./sports-specific-feed.component */ "./src/app/sports-specific-feed/sports-specific-feed.component.ts");
var i23 = __webpack_require__(/*! ../shared/services/match-data.service */ "./src/app/shared/services/match-data.service.ts");
var i24 = __webpack_require__(/*! ../shared/services/news.service */ "./src/app/shared/services/news.service.ts");
var styles_SportsSpecificFeedComponent = [i0.styles, i1.styles];
var RenderType_SportsSpecificFeedComponent = i2.ɵcrt({ encapsulation: 2, styles: styles_SportsSpecificFeedComponent, data: {} });
exports.RenderType_SportsSpecificFeedComponent = RenderType_SportsSpecificFeedComponent;
function View_SportsSpecificFeedComponent_1(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 0, "img", [["alt", ""], ["class", "spinner"], ["src", "assets/images/sports-social-loading.gif"]], null, null, null, null, null))], null, null); }
function View_SportsSpecificFeedComponent_4(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), i2.ɵeld(1, 0, null, null, 3, "h1", [["class", "type"]], null, null, null, null, null)), (_l()(), i2.ɵeld(2, 0, null, null, 2, "a", [["routerLink", "/OpenArena"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i2.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i2.ɵdid(3, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i2.ɵted(-1, null, ["Open Arena >>"])), (_l()(), i2.ɵeld(5, 0, null, null, 1, "sports-social-match-card", [["class", "cards"]], null, null, null, i5.View_MatchCardComponent_0, i5.RenderType_MatchCardComponent)), i2.ɵdid(6, 114688, [["matchCard", 4]], 0, i6.MatchCardComponent, [i2.Renderer2, i7.TimeService, i2.ComponentFactoryResolver, i8.PostService, i9.PopUpService, i3.Router, i3.ActivatedRoute], { creatorName: [0, "creatorName"], creatorImage: [1, "creatorImage"], eventId: [2, "eventId"], doerId: [3, "doerId"], doerName: [4, "doerName"], doerPic: [5, "doerPic"], matchImage: [6, "matchImage"], matchText: [7, "matchText"], joineeCount: [8, "joineeCount"], commentCount: [9, "commentCount"], promoteCount: [10, "promoteCount"], watchCount: [11, "watchCount"], activityName: [12, "activityName"], activityDate: [13, "activityDate"], matchDate: [14, "matchDate"], gameName: [15, "gameName"], venueName: [16, "venueName"], restrictionCount: [17, "restrictionCount"] }, null)], function (_ck, _v) { var currVal_2 = "/OpenArena"; _ck(_v, 3, 0, currVal_2); var currVal_3 = _v.parent.context.$implicit.creatorName; var currVal_4 = _v.parent.context.$implicit.creatorImage; var currVal_5 = _v.parent.context.$implicit.eventId; var currVal_6 = _v.parent.context.$implicit.doerId; var currVal_7 = _v.parent.context.$implicit.doerName; var currVal_8 = _v.parent.context.$implicit.doerPic; var currVal_9 = _v.parent.context.$implicit.matchImage; var currVal_10 = _v.parent.context.$implicit.matchText; var currVal_11 = _v.parent.context.$implicit.joineeCount; var currVal_12 = _v.parent.context.$implicit.commentCount; var currVal_13 = _v.parent.context.$implicit.promoteCount; var currVal_14 = _v.parent.context.$implicit.watchCount; var currVal_15 = _v.parent.context.$implicit.activityName; var currVal_16 = _v.parent.context.$implicit.activityDate; var currVal_17 = _v.parent.context.$implicit.matchDate; var currVal_18 = _v.parent.context.$implicit.gameName; var currVal_19 = _v.parent.context.$implicit.venueName; var currVal_20 = _v.parent.context.$implicit.restrictionCount; _ck(_v, 6, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20]); }, function (_ck, _v) { var currVal_0 = i2.ɵnov(_v, 3).target; var currVal_1 = i2.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_SportsSpecificFeedComponent_3(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 3, "ng-masonry-grid-item", [["id", "col-4"]], null, null, null, null, null)), i2.ɵdid(1, 4407296, null, 0, i10.NgMasonryGridDirective, [i2.ElementRef, i10.NgMasonryGridComponent, i2.PLATFORM_ID, i10.NgMasonryGridService], null, null), (_l()(), i2.ɵand(16777216, null, null, 1, null, View_SportsSpecificFeedComponent_4)), i2.ɵdid(3, 16384, null, 0, i4.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { _ck(_v, 1, 0); var currVal_0 = (_v.context.$implicit.type === 1); _ck(_v, 3, 0, currVal_0); }, null); }
function View_SportsSpecificFeedComponent_2(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i2.ɵand(16777216, null, null, 1, null, View_SportsSpecificFeedComponent_3)), i2.ɵdid(2, 278528, null, 0, i4.NgForOf, [i2.ViewContainerRef, i2.TemplateRef, i2.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i2.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.globalArena; _ck(_v, 2, 0, currVal_0); }, null); }
function View_SportsSpecificFeedComponent_0(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 1, "sports-social-header", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 1).onresize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i11.View_HeaderComponent_0, i11.RenderType_HeaderComponent)), i2.ɵdid(1, 4308992, null, 0, i12.HeaderComponent, [i13.PropertyService], null, null), (_l()(), i2.ɵeld(2, 0, null, null, 1, "sports-social-carousel", [], null, [["window", "resize"], ["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 3).onresize() !== false);
        ad = (pd_0 && ad);
    } if (("window:scroll" === en)) {
        var pd_1 = (i2.ɵnov(_v, 3).onscroll() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i14.View_CarouselComponent_0, i14.RenderType_CarouselComponent)), i2.ɵdid(3, 114688, null, 0, i15.CarouselComponent, [i2.Renderer2, i13.PropertyService, i13.PropertyService, i16.Title, i16.Meta], null, null), (_l()(), i2.ɵeld(4, 0, null, null, 1, "sports-social-navigation-bar", [], null, [["window", "resize"], ["window", "scroll"], [null, "mouseover"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i2.ɵnov(_v, 5).onresize() !== false);
        ad = (pd_0 && ad);
    } if (("window:scroll" === en)) {
        var pd_1 = (i2.ɵnov(_v, 5).onscroll() !== false);
        ad = (pd_1 && ad);
    } if (("mouseover" === en)) {
        var pd_2 = (i2.ɵnov(_v, 5).onHover($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, i17.View_NavigationBarComponent_0, i17.RenderType_NavigationBarComponent)), i2.ɵdid(5, 114688, null, 0, i18.NavigationBarComponent, [i13.PropertyService, i13.PropertyService, i2.Renderer2, i3.ActivatedRoute, i2.NgZone, i16.Meta, i16.Title], null, null), (_l()(), i2.ɵeld(6, 0, null, null, 6, "ng-masonry-grid", [], null, null, null, i19.View_NgMasonryGridComponent_0, i19.RenderType_NgMasonryGridComponent)), i2.ɵdid(7, 1294336, null, 0, i10.NgMasonryGridComponent, [i2.PLATFORM_ID, i2.ElementRef, i10.NgMasonryGridService], { masonryOptions: [0, "masonryOptions"], useAnimation: [1, "useAnimation"], useImagesLoaded: [2, "useImagesLoaded"] }, null), i2.ɵpod(8, { transitionDuration: 0, gutter: 1 }), (_l()(), i2.ɵand(16777216, null, 0, 1, null, View_SportsSpecificFeedComponent_1)), i2.ɵdid(10, 16384, null, 0, i4.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i2.ɵand(16777216, null, 0, 1, null, View_SportsSpecificFeedComponent_2)), i2.ɵdid(12, 16384, null, 0, i4.NgIf, [i2.ViewContainerRef, i2.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i2.ɵeld(13, 0, null, null, 1, "sports-social-footer", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i2.ɵnov(_v, 14).onscroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i20.View_FooterComponent_0, i20.RenderType_FooterComponent)), i2.ɵdid(14, 114688, null, 0, i21.FooterComponent, [], null, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); _ck(_v, 3, 0); _ck(_v, 5, 0); var currVal_0 = _ck(_v, 8, 0, "0.4s", 2); var currVal_1 = true; var currVal_2 = true; _ck(_v, 7, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = (_co.globalArena.length === 0); _ck(_v, 10, 0, currVal_3); var currVal_4 = (_co.globalArena.length > 0); _ck(_v, 12, 0, currVal_4); _ck(_v, 14, 0); }, null); }
exports.View_SportsSpecificFeedComponent_0 = View_SportsSpecificFeedComponent_0;
function View_SportsSpecificFeedComponent_Host_0(_l) { return i2.ɵvid(0, [(_l()(), i2.ɵeld(0, 0, null, null, 1, "sports-social-sports-specific-feed", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i2.ɵnov(_v, 1).onWindowScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_SportsSpecificFeedComponent_0, RenderType_SportsSpecificFeedComponent)), i2.ɵdid(1, 245760, null, 0, i22.SportsSpecificFeedComponent, [i23.MatchDataService, i24.NewsService, i2.Renderer2, i3.ActivatedRoute, i3.Router, i2.NgZone, i8.PostService, i16.Meta, i16.Title], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SportsSpecificFeedComponent_Host_0 = View_SportsSpecificFeedComponent_Host_0;
var SportsSpecificFeedComponentNgFactory = i2.ɵccf("sports-social-sports-specific-feed", i22.SportsSpecificFeedComponent, View_SportsSpecificFeedComponent_Host_0, {}, {}, []);
exports.SportsSpecificFeedComponentNgFactory = SportsSpecificFeedComponentNgFactory;


/***/ }),

/***/ "./src/app/sports-specific-feed/sports-specific-feed.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/sports-specific-feed/sports-specific-feed.component.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var post_service_1 = __webpack_require__(/*! ../shared/services/post.service */ "./src/app/shared/services/post.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var ng_masonry_grid_1 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var match_data_service_1 = __webpack_require__(/*! ../shared/services/match-data.service */ "./src/app/shared/services/match-data.service.ts");
var news_service_1 = __webpack_require__(/*! ../shared/services/news.service */ "./src/app/shared/services/news.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var SportsSpecificFeedComponent = /** @class */ (function () {
    function SportsSpecificFeedComponent(matchData, newsData, renderer, activeRoute, router, zone, load, metaservice, pagetitle) {
        this.matchData = matchData;
        this.newsData = newsData;
        this.renderer = renderer;
        this.activeRoute = activeRoute;
        this.router = router;
        this.zone = zone;
        this.load = load;
        this.metaservice = metaservice;
        this.pagetitle = pagetitle;
        this.globalArena = [];
        this.prevPageNo = 0;
        this.nextPageNo = 0;
        this.urlChanged = false;
        this.Sports = [
            { id: 0, title: 'Popular' },
            { id: 17, title: 'Cricket' },
            { id: 23, title: 'Football' },
            { id: 6, title: 'Basketball' },
            { id: 36, title: 'Lawn Tennis' },
            { id: 5, title: 'Badminton' },
            { id: 29, title: 'Hockey' },
            { id: 56, title: 'Table Tennis' },
            { id: 60, title: 'Volleyball' }
        ];
    }
    SportsSpecificFeedComponent.prototype.reloadPage = function () {
        this.zone.runOutsideAngular(function () {
            location.reload();
        });
    };
    SportsSpecificFeedComponent.prototype.globalFeed = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            if (_this.gameName !== params.sport && _this.gameName !== undefined) {
                // this.urlChanged = true;
                console.log("true", _this.gameName, params.sport);
                _this.reloadPage();
            }
            _this.gameName = params.sport;
            _this.gameId = _this.Sports.find(function (sport) {
                return sport.title === _this.gameName;
            }).id;
            console.log(_this.gameName, _this.gameId);
            var matchPomise = _this.matchData.globalMatchFeed(_this.nextPageNo, _this.gameId);
            var newsPromise = _this.newsData.globalNewsFeed(_this.nextPageNo, _this.gameName.toLowerCase());
            Promise.all([matchPomise, newsPromise]).then(function (data) {
                console.log(data);
                _this.globalArena = _this.globalArena.concat(data['0']).concat(data['1']);
                console.log(_this.globalArena);
            }).catch(function (err) {
                console.log('err', err);
            });
        });
    };
    SportsSpecificFeedComponent.prototype.nextPage = function (pageNo) {
        this.prevPageNo = pageNo;
        this.globalFeed();
    };
    SportsSpecificFeedComponent.prototype.onWindowScroll = function (event) {
        this.nextPageNo = Math.floor(scrollY / 2400);
        if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo) {
            this.nextPage(this.nextPageNo);
            console.log('nextPage', this.nextPageNo, event);
        }
    };
    SportsSpecificFeedComponent.prototype.ngOnInit = function () {
        this.globalFeed();
        this.pagetitle.setTitle(this.gameName);
        this.metaservice.updateTag({ name: 'title', content: this.gameName });
        this.metaservice.updateTag({ name: 'description', content: "See What's going around you in " + this.gameName + " in the " + this.gameName + " Arena. Use " + this.gameName + " Arena to find,connect,play, follow " + this.gameName + " matches, players, academies, coaches, events etc. in your locality and around the world | stay connected to your " + this.gameName + " world" });
        this.metaservice.updateTag({ name: 'keywords', content: "" + this.gameName + "Arena,Sports Social " + this.gameName + "," + this.gameName + " Grounds Nearby," + this.gameName + " Events Nearby, " + this.gameName + " Matches Nearby, Connect " + this.gameName + " Players, Play " + this.gameName + ", Find " + this.gameName + " Players,Find " + this.gameName + " Academies," + this.gameName + " Tournaments Nearby" });
        this.metaservice.updateTag({ property: 'og:title', content: this.gameName });
        this.metaservice.updateTag({ property: 'og:description', content: "See What's going around you in " + this.gameName + " in the " + this.gameName + " Arena. Use " + this.gameName + " Arena to find,connect,play, follow " + this.gameName + " matches, players, academies, coaches, events etc. in your locality and around the world | stay connected to your " + this.gameName + " world" });
        this.metaservice.updateTag({ property: 'og:keywords', content: "" + this.gameName + "Arena,Sports Social " + this.gameName + "," + this.gameName + " Grounds Nearby," + this.gameName + " Events Nearby, " + this.gameName + " Matches Nearby, Connect " + this.gameName + " Players, Play " + this.gameName + ", Find " + this.gameName + " Players,Find " + this.gameName + " Academies," + this.gameName + " Tournaments Nearby" });
    };
    SportsSpecificFeedComponent.prototype.ngOnDestroy = function () {
        console.log('destroy');
        if (this._masonry) {
            this._removeAllSubscription.unsubscribe();
            this._removeItemSubscription.unsubscribe();
            this._removeFirstItemSubscription.unsubscribe();
        }
    };
    return SportsSpecificFeedComponent;
}());
exports.SportsSpecificFeedComponent = SportsSpecificFeedComponent;


/***/ }),

/***/ "./src/app/sports-specific-feed/sports-specific-feed.module.ngfactory.js":
/*!*******************************************************************************!*\
  !*** ./src/app/sports-specific-feed/sports-specific-feed.module.ngfactory.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./sports-specific-feed.module */ "./src/app/sports-specific-feed/sports-specific-feed.module.ts");
var i2 = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ../open-cards/open-news-card/open-news-card.component.ngfactory */ "./src/app/open-cards/open-news-card/open-news-card.component.ngfactory.js");
var i4 = __webpack_require__(/*! ./sports-specific-feed.component.ngfactory */ "./src/app/sports-specific-feed/sports-specific-feed.component.ngfactory.js");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! ng-masonry-grid */ "ng-masonry-grid");
var i7 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i8 = __webpack_require__(/*! ../open-cards/open-news-card/open-news-card.module */ "./src/app/open-cards/open-news-card/open-news-card.module.ts");
var i9 = __webpack_require__(/*! ../cards/news-card/news-card.module */ "./src/app/cards/news-card/news-card.module.ts");
var i10 = __webpack_require__(/*! ../gallery/gallery.module */ "./src/app/gallery/gallery.module.ts");
var i11 = __webpack_require__(/*! ../open-cards/open-match-card/open-match-card.module */ "./src/app/open-cards/open-match-card/open-match-card.module.ts");
var i12 = __webpack_require__(/*! ../cards/match-card/match-card.module */ "./src/app/cards/match-card/match-card.module.ts");
var i13 = __webpack_require__(/*! ../cards/live-match-card/live-match-card.module */ "./src/app/cards/live-match-card/live-match-card.module.ts");
var i14 = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
var i15 = __webpack_require__(/*! ../carousel/carousel.module */ "./src/app/carousel/carousel.module.ts");
var i16 = __webpack_require__(/*! ../navigation-bar/navigation-bar.module */ "./src/app/navigation-bar/navigation-bar.module.ts");
var i17 = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
var i18 = __webpack_require__(/*! ./sports-specific-feed.component */ "./src/app/sports-specific-feed/sports-specific-feed.component.ts");
var SportsSpecificFeedModuleNgFactory = i0.ɵcmf(i1.SportsSpecificFeedModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.OpenNewsCardComponentNgFactory, i4.SportsSpecificFeedComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID, [2, i5.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i6.NgMasonryGridService, i6.NgMasonryGridService, [i0.PLATFORM_ID]), i0.ɵmpd(1073742336, i5.CommonModule, i5.CommonModule, []), i0.ɵmpd(1073742336, i7.RouterModule, i7.RouterModule, [[2, i7.ɵangular_packages_router_router_a], [2, i7.Router]]), i0.ɵmpd(1073742336, i8.OpenNewsCardModule, i8.OpenNewsCardModule, []), i0.ɵmpd(1073742336, i9.NewsCardModule, i9.NewsCardModule, []), i0.ɵmpd(1073742336, i10.GalleryModule, i10.GalleryModule, []), i0.ɵmpd(1073742336, i11.OpenMatchCardModule, i11.OpenMatchCardModule, []), i0.ɵmpd(1073742336, i12.MatchCardModule, i12.MatchCardModule, []), i0.ɵmpd(1073742336, i13.LiveMatchCardModule, i13.LiveMatchCardModule, []), i0.ɵmpd(1073742336, i14.HeaderModule, i14.HeaderModule, []), i0.ɵmpd(1073742336, i15.CarouselModule, i15.CarouselModule, []), i0.ɵmpd(1073742336, i16.NavigationBarModule, i16.NavigationBarModule, []), i0.ɵmpd(1073742336, i17.FooterModule, i17.FooterModule, []), i0.ɵmpd(1073742336, i6.NgMasonryGridModule, i6.NgMasonryGridModule, []), i0.ɵmpd(1073742336, i1.SportsSpecificFeedModule, i1.SportsSpecificFeedModule, []), i0.ɵmpd(1024, i7.ROUTES, function () { return [[{ path: "", component: i18.SportsSpecificFeedComponent }]]; }, [])]); });
exports.SportsSpecificFeedModuleNgFactory = SportsSpecificFeedModuleNgFactory;


/***/ }),

/***/ "./src/app/sports-specific-feed/sports-specific-feed.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sports-specific-feed/sports-specific-feed.module.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SportsSpecificFeedModule = /** @class */ (function () {
    function SportsSpecificFeedModule() {
    }
    return SportsSpecificFeedModule;
}());
exports.SportsSpecificFeedModule = SportsSpecificFeedModule;


/***/ }),

/***/ "./src/app/terms-and-condition/terms-and-condition.component.css.shim.ngstyle.js":
/*!***************************************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.component.css.shim.ngstyle.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["*[_ngcontent-%COMP%]{\n    margin: 2%;\n    margin-top: 5%;\n    margin-bottom: 5%;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/terms-and-condition/terms-and-condition.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.component.ngfactory.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./terms-and-condition.component.css.shim.ngstyle */ "./src/app/terms-and-condition/terms-and-condition.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../header/header.component.ngfactory */ "./src/app/header/header.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var i4 = __webpack_require__(/*! ../shared/services/property.service */ "./src/app/shared/services/property.service.ts");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! ../footer/footer.component.ngfactory */ "./src/app/footer/footer.component.ngfactory.js");
var i7 = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
var i8 = __webpack_require__(/*! ./terms-and-condition.component */ "./src/app/terms-and-condition/terms-and-condition.component.ts");
var i9 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_TermsAndConditionComponent = [i0.styles];
var RenderType_TermsAndConditionComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_TermsAndConditionComponent, data: {} });
exports.RenderType_TermsAndConditionComponent = RenderType_TermsAndConditionComponent;
function View_TermsAndConditionComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_TermsAndConditionComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-header", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onresize() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i2.View_HeaderComponent_0, i2.RenderType_HeaderComponent)), i1.ɵdid(1, 4308992, null, 0, i3.HeaderComponent, [i4.PropertyService], null, null), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Sports Social Terms of Service"])), (_l()(), i1.ɵeld(4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" These Terms of Service (\u201CTerms\u201D) govern your access to and use of our Services, including our various websites, SMS, APIs, email notifications, applications, buttons, widgets, ads, commerce services (the \u201CSports Social Services\u201D), and any information, text, graphics, photos or other materials uploaded, downloaded or appearing on the Services (collectively referred to as \u201CContent\u201D). Your access to and use of the Services are conditioned on your acceptance of and compliance with these Terms. By accessing or using the Services you agree to be bound by these Terms\n"])), (_l()(), i1.ɵeld(6, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TermsAndConditionComponent_1)), i1.ɵdid(8, 278528, null, 0, i5.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(9, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Basic Term"])), (_l()(), i1.ɵeld(11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" You are responsible for your use of the Services, for any Content you post to the Services, and for any consequences thereof. Most Content you submit, post, or display through the Sports Social Services is public by default and will be able to be viewed by other users and through third party services and websites. You should only provide Content that you are comfortable sharing with others under these Terms.\n"])), (_l()(), i1.ɵeld(13, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" You may use the Services only if you can form a binding contract with Sports Social and are not a person barred from receiving services under the laws of the India. If you are accepting these Terms and using the Services on behalf of a company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so. You may use the Services only in compliance with these Terms and all applicable local, state, national, and international laws, rules and regulations.\n"])), (_l()(), i1.ɵeld(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The Services that Sports Social provides are always evolving and the form and nature of the Services that Sports Social provides may change from time to time without prior notice to you. In addition, Sports Social may stop (permanently or temporarily) providing the Services (or any features within the Services) to you or to users generally and may not be able to provide you with prior notice. We also retain the right to create limits on use and storage at our sole discretion at any time without prior notice to you.\n"])), (_l()(), i1.ɵeld(21, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The Services may include advertisements, which may be targeted to the Content or information on the Services, queries made through the Services, or any other information. The types and extent of advertising by Sports Social on the Services are subject to change. In consideration for Sports Social granting you access to and use of the Services, you agree that Sports Social and its third party providers and partners may place such advertising on the Services or in connection with the display of Content or information from the Services whether submitted by you or others.\n"])), (_l()(), i1.ɵeld(25, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Privacy"])), (_l()(), i1.ɵeld(28, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Any information that you or other users provide to Sports Social is subject to our Privacy Policy which governs our collection and use of your information. You understand that through your use of the Services you consent to the collection and use (as set forth in the Privacy Policy) of this information for storage, processing and use by Sports Social. As part of providing you the Services, we may need to provide you with certain communications, such as service announcements and administrative messages. These communications are considered part of the Services and your account, which you may not be able to opt-out from receiving.\n"])), (_l()(), i1.ɵeld(30, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Content on the Services"])), (_l()(), i1.ɵeld(32, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" All Content, whether publicly posted or privately transmitted, is the sole responsibility of the person who originated such Content. We may not monitor or control the Content posted via the Services and, we cannot take responsibility for such Content. Any use or reliance on any Content or materials posted via the Services or obtained by you through the Services is at your own risk.\n"])), (_l()(), i1.ɵeld(34, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We do not endorse, support, represent or guarantee the completeness, truthfulness, accuracy, or reliability of any Content or communications posted via the Services or endorse any opinions expressed via the Services. You understand that by using the Services, you may be exposed to Content that might be offensive, harmful, inaccurate or otherwise inappropriate, or in some cases, postings that have been mislabeled or are otherwise deceptive. Under no circumstances will Sports Social be liable in any way for any Content, including, but not limited to, any errors or omissions in any Content, or any loss or damage of any kind incurred as a result of the use of any Content posted, emailed, transmitted or otherwise made available via the Services or broadcast elsewhere.\n"])), (_l()(), i1.ɵeld(38, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Your Rights"])), (_l()(), i1.ɵeld(41, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" You retain your rights to any Content you submit, post or display on or through the Services. By submitting, posting or displaying Content on or through the Services, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such Content in any and all media or distribution methods (now known or later developed).\n"])), (_l()(), i1.ɵeld(43, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(45, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" You agree that this license includes the right for Sports Social to provide, promote, and improve the Services and to make Content submitted to or through the Services available to other companies, organizations or individuals who partner with Sports Social for the syndication, broadcast, distribution or publication of such Content on other media and services, subject to our terms and conditions for such Content use.\n"])), (_l()(), i1.ɵeld(47, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Such additional uses by Sports Social, or other companies, organizations or individuals who partner with Sports Social, may be made with no compensation paid to you with respect to the Content that you submit, post, transmit or otherwise make available through the Services.\n"])), (_l()(), i1.ɵeld(51, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(52, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(53, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We may modify or adapt your Content in order to transmit, display or distribute it over computer networks and in various media and/or make changes to your Content as are necessary to conform and adapt that Content to any requirements or limitations of any networks, devices, services or media.\n"])), (_l()(), i1.ɵeld(55, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(56, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" You are responsible for your use of the Services, for any Content you provide, and for any consequences thereof, including the use of your Content by other users and our third party partners. You understand that your Content may be syndicated, broadcast, distributed, or published by our partners and if you do not have the right to submit Content for such use, it may subject you to liability. Sports Social will not be responsible or liable for any use of your Content by Sports Social in accordance with these Terms. You represent and warrant that you have all the rights, power and authority necessary to grant the rights granted herein to any Content that you submit.\n"])), (_l()(), i1.ɵeld(59, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Your License To Use the Services"])), (_l()(), i1.ɵeld(62, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Sports Social gives you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the software that is provided to you by Sports Social as part of the Services. This license is for the sole purpose of enabling you to use and enjoy the benefit of the Services as provided by Sports Social, in the manner permitted by these Terms.\n"])), (_l()(), i1.ɵeld(64, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(65, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Sports Social Rights"])), (_l()(), i1.ɵeld(67, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" All right, title, and interest in and to the Services (excluding Content provided by users) are and will remain the exclusive property of Sports Social and its licensors. The Services are protected by copyright, trademark, and other laws of India. Nothing in the Terms gives you a right to use the Sports Social name or any of the Sports Social trademarks, logos, domain names, and other distinctive brand features. Any feedback, comments, or suggestions you may provide regarding Sports Social, or the Services is entirely voluntary and we will be free to use such feedback, comments or suggestions as we see fit and without any obligation to you.\n"])), (_l()(), i1.ɵeld(69, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(70, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Restrictions on Content and Use of the Services"])), (_l()(), i1.ɵeld(72, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We reserve the right at all times (but will not have an obligation) to remove or refuse to distribute any Content on the Services, to suspend or terminate users, and to reclaim usernames without liability to you. We also reserve the right to access, read, preserve, and disclose any information as we reasonably believe is necessary to - (i) satisfy any applicable law, regulation, legal process or governmental request (ii) enforce the Terms, including investigation of potential violations hereof (iii) detect, prevent, or otherwise address fraud, security or technical issues (iv) respond to user support requests, or (v) protect the rights, property or safety of Sports Social, its users and the public.\n"])), (_l()(), i1.ɵeld(74, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(75, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Copyright Policy"])), (_l()(), i1.ɵeld(77, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Sports Social respects the intellectual property rights of others and expects users of the Services to do the same. We will respond to notices of alleged copyright infringement that comply with applicable law and are properly provided to us. If you believe that your Content has been copied in a way that constitutes copyright infringement, please provide us with the following information:\n"])), (_l()(), i1.ɵeld(79, 0, null, null, 12, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(80, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["A physical or electronic signature of the copyright owner or a person authorized to act on their behalf; "])), (_l()(), i1.ɵeld(82, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Identification of the copyrighted work claimed to have been infringed; "])), (_l()(), i1.ɵeld(84, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material "])), (_l()(), i1.ɵeld(86, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Your contact information, including your address, telephone number, and an email address "])), (_l()(), i1.ɵeld(88, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" A statement by you that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law "])), (_l()(), i1.ɵeld(90, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" A statement that the information in the notification is accurate, and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner. "])), (_l()(), i1.ɵeld(92, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(93, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Ending These Terms"])), (_l()(), i1.ɵeld(95, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The Terms will continue to apply until terminated by either you or Sports Social as follows.\n"])), (_l()(), i1.ɵeld(97, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(98, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(99, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" You may end your legal agreement with Sports Social at any time for any or no reason by discontinuing your use of the Services. You do not need to specifically inform Sports Social when you stop using the Services.\n"])), (_l()(), i1.ɵeld(101, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(102, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(103, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We may suspend or terminate your accounts or cease providing you with all or part of the Services at any time for any or no reason, including, but not limited to, if we reasonably believe:\n"])), (_l()(), i1.ɵeld(105, 0, null, null, 6, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(106, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" You have violated these Terms "])), (_l()(), i1.ɵeld(108, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" You create risk or possible legal exposure for us; or "])), (_l()(), i1.ɵeld(110, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Our provision of the Services to you is no longer commercially viable. We will make reasonable efforts to notify you by the email address associated with your account or the next time you attempt to access your account. "])), (_l()(), i1.ɵeld(112, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(113, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Disclaimers and Limitations of Liability"])), (_l()(), i1.ɵeld(115, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The Services are Available \u201CAS-IS\u201D"])), (_l()(), i1.ɵeld(117, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(118, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Your access to and use of the Services or any Content are at your own risk. You understand and agree that the Services are provided to you on an \u201CAS IS\u201D and \u201CAS AVAILABLE\u201D basis. Without limiting the foregoing, to the maximum extent permitted under applicable law, THE SPORTS SOCIAL ENTITIES DISCLAIM ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.\n"])), (_l()(), i1.ɵeld(120, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(121, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(122, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The Sports Social Entities make no warranty or representation and disclaim all responsibility and liability for:\n"])), (_l()(), i1.ɵeld(124, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(125, 0, null, null, 8, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(126, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The completeness, accuracy, availability, timeliness, security or reliability of the Services or any Content "])), (_l()(), i1.ɵeld(128, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Any harm to your computer system, loss of data, or other harm that results from your access to or use of the Services or any Content "])), (_l()(), i1.ɵeld(130, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The deletion of, or the failure to store or to transmit, any Content and other communications maintained by the Services; and "])), (_l()(), i1.ɵeld(132, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Whether the Services will meet your requirements or be available on an uninterrupted, secure, or error-free basis. No advice or information, whether oral or written, obtained from the Sports Social Entities or through the Services, will create any warranty or representation not expressly made herein "])), (_l()(), i1.ɵeld(134, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(135, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Links"])), (_l()(), i1.ɵeld(137, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The Services may contain links to third-party websites or resources. You acknowledge and agree that the Sports Social Entities are not responsible or liable for:\n"])), (_l()(), i1.ɵeld(139, 0, null, null, 4, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(140, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The availability or accuracy of such websites or resources; or "])), (_l()(), i1.ɵeld(142, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The content, products, or services on or available from such websites or resources. Links to such websites or resources do not imply any endorsement by the Sports Social Entities of such websites or resources or the content, products, or services available from such websites or resources. You acknowledge sole responsibility for and assume all risk arising from your use of any such websites or resources. "])), (_l()(), i1.ɵeld(144, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(145, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Limitation of Liability"])), (_l()(), i1.ɵeld(147, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SPORTS SOCIAL ENTITIES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOOD-WILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM\n"])), (_l()(), i1.ɵeld(149, 0, null, null, 6, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(150, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; "])), (_l()(), i1.ɵeld(152, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD PARTIES; "])), (_l()(), i1.ɵeld(154, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" ANY CONTENT OBTAINED FROM THE SERVICES; OR UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT. "])), (_l()(), i1.ɵeld(156, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(157, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(158, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" THE LIMITATIONS OF THIS SUBSECTION SHALL APPLY TO ANY THEORY OF LIABILITY, WHETHER BASED ON WARRANTY, CONTRACT, STATUTE, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, AND WHETHER OR NOT THE SPORTS SOCIAL ENTITIES HAVE BEEN INFORMED OF THE POSSIBILITY OF ANY SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.\n"])), (_l()(), i1.ɵeld(160, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(161, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["General Terms"])), (_l()(), i1.ɵeld(163, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(164, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Entire Agreement"])), (_l()(), i1.ɵeld(166, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(167, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" These Terms, for the Sports Social Services, and our are the entire Privacy Policy and exclusive agreement between Sports Social and you regarding the Services, and these Terms supersede and replace any prior agreements between Sports Social and you regarding the Services. Other than members of the group of companies of which Sports Social, Inc. is the parent, no other person or company will be third party beneficiaries to the Terms.\n"])), (_l()(), i1.ɵeld(169, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(170, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(171, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We may revise these Terms from time to time, the most current version will always be at Sports Social.in/. If the revision, in our sole discretion, is material we will notify you via an update or e-mail to the email associated with your account. By continuing to access or use the Services after those revisions become effective, you agree to be bound by the revised Terms.\n"])), (_l()(), i1.ɵeld(173, 0, null, null, 1, "sports-social-footer", [], null, [["window", "scroll"]], function (_v, en, $event) { var ad = true; if (("window:scroll" === en)) {
        var pd_0 = (i1.ɵnov(_v, 174).onscroll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i6.View_FooterComponent_0, i6.RenderType_FooterComponent)), i1.ɵdid(174, 114688, null, 0, i7.FooterComponent, [], null, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_0 = _co.termsOfServices; _ck(_v, 8, 0, currVal_0); _ck(_v, 174, 0); }, null); }
exports.View_TermsAndConditionComponent_0 = View_TermsAndConditionComponent_0;
function View_TermsAndConditionComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sports-social-terms-and-condition", [], null, null, null, View_TermsAndConditionComponent_0, RenderType_TermsAndConditionComponent)), i1.ɵdid(1, 114688, null, 0, i8.TermsAndConditionComponent, [i9.Title, i9.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_TermsAndConditionComponent_Host_0 = View_TermsAndConditionComponent_Host_0;
var TermsAndConditionComponentNgFactory = i1.ɵccf("sports-social-terms-and-condition", i8.TermsAndConditionComponent, View_TermsAndConditionComponent_Host_0, {}, {}, []);
exports.TermsAndConditionComponentNgFactory = TermsAndConditionComponentNgFactory;


/***/ }),

/***/ "./src/app/terms-and-condition/terms-and-condition.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var TermsAndConditionComponent = /** @class */ (function () {
    function TermsAndConditionComponent(pagetite, meta) {
        this.pagetite = pagetite;
        this.meta = meta;
        this.title = "Terms of use | Sports Social";
        this.description = "To all the users living in India, our terms and conditions are in compliance with user agreement, privacy policy and all other incorporated policies";
        this.keywords = "Terms of Service Sports Social,Terms and Conditions Sports Social,User agreement Sports Social";
        this.termsOfServices = [
            'Basic Terms',
            'Privacy',
            'Content of service',
            'Your Rights',
            'Your license to use service',
            'Sports Social Right',
            'Restrictions on content and use of the services',
            'Copyright Policy',
            'Ending these terms',
            'Disclaimer & Liability',
            'Entire Agreement'
        ];
    }
    TermsAndConditionComponent.prototype.ngOnInit = function () {
        this.pagetite.setTitle(this.title);
        this.meta.updateTag({ name: 'title', content: this.title });
        this.meta.updateTag({ name: 'description', content: this.description });
        this.meta.updateTag({ name: 'keywords', content: this.keywords });
        this.meta.updateTag({ property: 'og:title', content: this.title });
        this.meta.updateTag({ property: 'og:keywords', content: this.keywords });
        this.meta.updateTag({ property: 'og:description', content: this.description });
    };
    return TermsAndConditionComponent;
}());
exports.TermsAndConditionComponent = TermsAndConditionComponent;


/***/ }),

/***/ "./src/app/terms-and-condition/terms-and-condition.module.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.module.ngfactory.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./terms-and-condition.module */ "./src/app/terms-and-condition/terms-and-condition.module.ts");
var i2 = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./terms-and-condition.component.ngfactory */ "./src/app/terms-and-condition/terms-and-condition.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i6 = __webpack_require__(/*! ../header/header.module */ "./src/app/header/header.module.ts");
var i7 = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
var i8 = __webpack_require__(/*! ./terms-and-condition.component */ "./src/app/terms-and-condition/terms-and-condition.component.ts");
var TermsAndConditionModuleNgFactory = i0.ɵcmf(i1.TermsAndConditionModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.TermsAndConditionComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i5.RouterModule, i5.RouterModule, [[2, i5.ɵangular_packages_router_router_a], [2, i5.Router]]), i0.ɵmpd(1073742336, i6.HeaderModule, i6.HeaderModule, []), i0.ɵmpd(1073742336, i7.FooterModule, i7.FooterModule, []), i0.ɵmpd(1073742336, i1.TermsAndConditionModule, i1.TermsAndConditionModule, []), i0.ɵmpd(1024, i5.ROUTES, function () { return [[{ path: "", component: i8.TermsAndConditionComponent }]]; }, [])]); });
exports.TermsAndConditionModuleNgFactory = TermsAndConditionModuleNgFactory;


/***/ }),

/***/ "./src/app/terms-and-condition/terms-and-condition.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.module.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TermsAndConditionModule = /** @class */ (function () {
    function TermsAndConditionModule() {
    }
    return TermsAndConditionModule;
}());
exports.TermsAndConditionModule = TermsAndConditionModule;


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var __lazy_0__ = __webpack_require__(/*! ./app/terms-and-condition/terms-and-condition.module.ngfactory.js */ "./src/app/terms-and-condition/terms-and-condition.module.ngfactory.js");
var __lazy_1__ = __webpack_require__(/*! ./app/privacy-policy/privacy-policy.module.ngfactory.js */ "./src/app/privacy-policy/privacy-policy.module.ngfactory.js");
var __lazy_2__ = __webpack_require__(/*! ./app/global-feed/global-match-feed/global-match-feed.module.ngfactory.js */ "./src/app/global-feed/global-match-feed/global-match-feed.module.ngfactory.js");
var __lazy_3__ = __webpack_require__(/*! ./app/global-feed/global-news-feed/global-news-feed.module.ngfactory.js */ "./src/app/global-feed/global-news-feed/global-news-feed.module.ngfactory.js");
var __lazy_4__ = __webpack_require__(/*! ./app/sports-specific-feed/sports-specific-feed.module.ngfactory.js */ "./src/app/sports-specific-feed/sports-specific-feed.module.ngfactory.js");
var __lazy_5__ = __webpack_require__(/*! ./app/home/home.module.ngfactory.js */ "./src/app/home/home.module.ngfactory.js");
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = { "app/terms-and-condition/terms-and-condition.module#TermsAndConditionModule": __lazy_0__.TermsAndConditionModuleNgFactory, "app/privacy-policy/privacy-policy.module#PrivacyPolicyModule": __lazy_1__.PrivacyPolicyModuleNgFactory, "app/global-feed/global-match-feed/global-match-feed.module#GlobalMatchFeedModule": __lazy_2__.GlobalMatchFeedModuleNgFactory, "app/global-feed/global-news-feed/global-news-feed.module#GlobalNewsFeedModule": __lazy_3__.GlobalNewsFeedModuleNgFactory, "app/sports-specific-feed/sports-specific-feed.module#SportsSpecificFeedModule": __lazy_4__.SportsSpecificFeedModuleNgFactory, "app/home/home.module#HomeModule": __lazy_5__.HomeModuleNgFactory };


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sportssocialweb/Desktop/SportSocialWebsite/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@agm/core/core.module":
/*!****************************************!*\
  !*** external "@agm/core/core.module" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/core.module");

/***/ }),

/***/ "@agm/core/directives/map":
/*!*******************************************!*\
  !*** external "@agm/core/directives/map" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/directives/map");

/***/ }),

/***/ "@agm/core/directives/marker":
/*!**********************************************!*\
  !*** external "@agm/core/directives/marker" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/directives/marker");

/***/ }),

/***/ "@agm/core/services/fit-bounds":
/*!************************************************!*\
  !*** external "@agm/core/services/fit-bounds" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/fit-bounds");

/***/ }),

/***/ "@agm/core/services/google-maps-api-wrapper":
/*!*************************************************************!*\
  !*** external "@agm/core/services/google-maps-api-wrapper" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/google-maps-api-wrapper");

/***/ }),

/***/ "@agm/core/services/managers/circle-manager":
/*!*************************************************************!*\
  !*** external "@agm/core/services/managers/circle-manager" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/circle-manager");

/***/ }),

/***/ "@agm/core/services/managers/data-layer-manager":
/*!*****************************************************************!*\
  !*** external "@agm/core/services/managers/data-layer-manager" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/data-layer-manager");

/***/ }),

/***/ "@agm/core/services/managers/info-window-manager":
/*!******************************************************************!*\
  !*** external "@agm/core/services/managers/info-window-manager" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/info-window-manager");

/***/ }),

/***/ "@agm/core/services/managers/kml-layer-manager":
/*!****************************************************************!*\
  !*** external "@agm/core/services/managers/kml-layer-manager" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/kml-layer-manager");

/***/ }),

/***/ "@agm/core/services/managers/marker-manager":
/*!*************************************************************!*\
  !*** external "@agm/core/services/managers/marker-manager" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/marker-manager");

/***/ }),

/***/ "@agm/core/services/managers/polygon-manager":
/*!**************************************************************!*\
  !*** external "@agm/core/services/managers/polygon-manager" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/polygon-manager");

/***/ }),

/***/ "@agm/core/services/managers/polyline-manager":
/*!***************************************************************!*\
  !*** external "@agm/core/services/managers/polyline-manager" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/polyline-manager");

/***/ }),

/***/ "@agm/core/services/managers/rectangle-manager":
/*!****************************************************************!*\
  !*** external "@agm/core/services/managers/rectangle-manager" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/rectangle-manager");

/***/ }),

/***/ "@agm/core/services/maps-api-loader/lazy-maps-api-loader":
/*!**************************************************************************!*\
  !*** external "@agm/core/services/maps-api-loader/lazy-maps-api-loader" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/maps-api-loader/lazy-maps-api-loader");

/***/ }),

/***/ "@agm/core/services/maps-api-loader/maps-api-loader":
/*!*********************************************************************!*\
  !*** external "@agm/core/services/maps-api-loader/maps-api-loader" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/maps-api-loader/maps-api-loader");

/***/ }),

/***/ "@agm/core/utils/browser-globals":
/*!**************************************************!*\
  !*** external "@agm/core/utils/browser-globals" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/utils/browser-globals");

/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/fire":
/*!********************************!*\
  !*** external "@angular/fire" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/fire");

/***/ }),

/***/ "@angular/fire/auth":
/*!*************************************!*\
  !*** external "@angular/fire/auth" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/fire/auth");

/***/ }),

/***/ "@angular/fire/database":
/*!*****************************************!*\
  !*** external "@angular/fire/database" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/fire/database");

/***/ }),

/***/ "@angular/fire/firestore":
/*!******************************************!*\
  !*** external "@angular/fire/firestore" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/fire/firestore");

/***/ }),

/***/ "@angular/fire/messaging":
/*!******************************************!*\
  !*** external "@angular/fire/messaging" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/fire/messaging");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "angularfire2/firestore":
/*!*****************************************!*\
  !*** external "angularfire2/firestore" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("angularfire2/firestore");

/***/ }),

/***/ "ng-masonry-grid":
/*!**********************************!*\
  !*** external "ng-masonry-grid" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ng-masonry-grid");

/***/ }),

/***/ "ng2-scroll-to-el/scrollTo.module":
/*!***************************************************!*\
  !*** external "ng2-scroll-to-el/scrollTo.module" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ng2-scroll-to-el/scrollTo.module");

/***/ }),

/***/ "ng2-scroll-to-el/scrollTo.service":
/*!****************************************************!*\
  !*** external "ng2-scroll-to-el/scrollTo.service" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ng2-scroll-to-el/scrollTo.service");

/***/ }),

/***/ "ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive":
/*!******************************************************************************************!*\
  !*** external "ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive" ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive");

/***/ }),

/***/ "ngx-google-places-autocomplete/ngx-google-places-autocomplete.module":
/*!***************************************************************************************!*\
  !*** external "ngx-google-places-autocomplete/ngx-google-places-autocomplete.module" ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-google-places-autocomplete/ngx-google-places-autocomplete.module");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/ReplaySubject":
/*!*************************************!*\
  !*** external "rxjs/ReplaySubject" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/ReplaySubject");

/***/ }),

/***/ "rxjs/Rx":
/*!**************************!*\
  !*** external "rxjs/Rx" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/Rx");

/***/ }),

/***/ "rxjs/Subject":
/*!*******************************!*\
  !*** external "rxjs/Subject" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/Subject");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map
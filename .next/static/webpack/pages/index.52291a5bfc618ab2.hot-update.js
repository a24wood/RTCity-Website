"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/constants.js":
/*!*********************************!*\
  !*** ./components/constants.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Team_Cards\": function() { return /* binding */ Team_Cards; },\n/* harmony export */   \"FEATURE_CARDS\": function() { return /* binding */ FEATURE_CARDS; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar Team_Cards = [\n    {\n        src: \"/blog/authors/aidan.jpg\",\n        Name: \"Aidan Wood\",\n        Bio: \"This is just a filler bio to keep as a placeholder until i actually do this\"\n    },\n    {\n        src: \"/blog/authors/aleks.jpg\",\n        Name: \"Aleks Ficek\",\n        Bio: \"aleks bio\"\n    },\n    {\n        src: \"/blog/authors/braeden.jpg\",\n        Name: \"Braeden Syrnyk\",\n        Bio: \"braeden bio\"\n    },\n    {\n        src: \"/blog/authors/guragam.jpg\",\n        Name: \"Guragam Bhalla\",\n        Bio: \"guragam bio\"\n    },\n    {\n        src: \"/blog/authors/steven_headshot.jpg\",\n        Name: \"Steven Tuer\",\n        Bio: \"steven bio\"\n    }\n];\nvar FEATURE_CARDS = [\n    {\n        Title: \"The Mechatronics Vehicle Systems Lab\",\n        Brief: \"Learn more about the lab we're working with\",\n        Description: \"The Mechatronic Vehicle Systems (MVS) Lab—with over 40 graduate students, postdocs, engineers, and technicians—is one of the world’s largest vehicle control laboratories and a pioneer in developing holistic vehicle control systems. The laboratory has several test vehicles, including two electric SUVs, a Cadillac CTS, and an urban vehicle with MVS corner module technology plus a fleet of five autonomous shuttle buses (WATonoBus), and an autonomous utility truck (WATonoTruck) using MVS corner module technology. The vehicles are fully equipped with wheel sensors, Global Positioning Systems (GPS)/ Inertial Measurement Unit (IMU), cameras, lidars, and radars for evaluation of vehicle control, estimation, perception modules, and autonomous driving. The vehicles are controlled in real time using our estimation, control, and automated driving modules.\",\n        src: \"/landing/MVSLogo.png\"\n    },\n    {\n        Title: \"The Problem\",\n        Brief: \"What problem are we trying to solve?\",\n        Description: \"Despite sensor technology innovations leading to reduced costs, autonomous vehicles remain more expensive than human-operated alternatives. However, fully autonomous vehicles provide improved safety and productivity. Consequently, autonomous vehicles need a cost-effective alternative to their current sensor suite to become a feasible alternative to human-operated vehicles.\",\n        src: \"/landing/build-website-2.PNG\"\n    },\n    {\n        Title: \"Our Objective\",\n        Brief: \"What is the objective of this project?\",\n        Description: \"This project aimed to develop a cost-effective real-time perception and localization infrastructure so that connected autonomous vehicle systems can safely and effectively navigate around the University of Waterloo's north campus. The WATonoBus will be used as a platform for a proof of concept for this project.\",\n        src: \"/landing/live-classes.PNG\"\n    },\n    {\n        Title: \"Node\",\n        Brief: \"What are we walking about when we say 'Node'\",\n        Description: \"Within the context of our project, a node refers to a single perception unit covering only a portion of the total route. Each node uses cameras and LiDAR to retrieve information on passing vehicles.\",\n        src: \"/landing/in-person.PNG\"\n    },\n    {\n        Title: \"Global Level Perception\",\n        Brief: \"What does 'Global Level Perception' mean?\",\n        Description: \"The route we have selected, unfortunately, cannot be covered by a single node. Therefore, we'll have to orchestrate perception data from multiple nodes to map the location of individual vehicles on our route.\",\n        src: \"/landing/in-person.PNG\"\n    }\n];\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnN0YW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxHQUFLLENBQUNBLFVBQVUsR0FBRyxDQUFDO0lBQ2hCLENBQUM7UUFDR0MsR0FBRyxFQUFFLENBQXlCO1FBQzlCQyxJQUFJLEVBQUUsQ0FBWTtRQUNsQkMsR0FBRyxFQUFFLENBQTZFO0lBQ3RGLENBQUM7SUFDRCxDQUFDO1FBQ0dGLEdBQUcsRUFBRSxDQUF5QjtRQUM5QkMsSUFBSSxFQUFFLENBQWE7UUFDbkJDLEdBQUcsRUFBRSxDQUFXO0lBQ3BCLENBQUM7SUFDRCxDQUFDO1FBQ0dGLEdBQUcsRUFBRSxDQUEyQjtRQUNoQ0MsSUFBSSxFQUFFLENBQWdCO1FBQ3RCQyxHQUFHLEVBQUUsQ0FBYTtJQUN0QixDQUFDO0lBQ0QsQ0FBQztRQUNHRixHQUFHLEVBQUUsQ0FBMkI7UUFDaENDLElBQUksRUFBRSxDQUFnQjtRQUN0QkMsR0FBRyxFQUFFLENBQWE7SUFDdEIsQ0FBQztJQUNELENBQUM7UUFDR0YsR0FBRyxFQUFFLENBQW1DO1FBQ3hDQyxJQUFJLEVBQUUsQ0FBYTtRQUNuQkMsR0FBRyxFQUFFLENBQVk7SUFDckIsQ0FBQztBQUNMLENBQUM7QUFDRCxHQUFLLENBQUNDLGFBQWEsR0FBRyxDQUFDO0lBQ25CLENBQUM7UUFDR0MsS0FBSyxFQUFFLENBQXNDO1FBQzdDQyxLQUFLLEVBQUUsQ0FBNkM7UUFDcERDLFdBQVcsRUFBRSxDQUF5MUI7UUFDdDJCTixHQUFHLEVBQUMsQ0FBc0I7SUFDOUIsQ0FBQztJQUNELENBQUM7UUFDR0ksS0FBSyxFQUFFLENBQWE7UUFDcEJDLEtBQUssRUFBRSxDQUFzQztRQUM3Q0MsV0FBVyxFQUFFLENBQXlYO1FBQ3RZTixHQUFHLEVBQUUsQ0FBOEI7SUFDdkMsQ0FBQztJQUNELENBQUM7UUFDR0ksS0FBSyxFQUFFLENBQWU7UUFDdEJDLEtBQUssRUFBRSxDQUF3QztRQUMvQ0MsV0FBVyxFQUFFLENBQTBUO1FBQ3ZVTixHQUFHLEVBQUUsQ0FBMkI7SUFDcEMsQ0FBQztJQUNELENBQUM7UUFDR0ksS0FBSyxFQUFFLENBQU07UUFDYkMsS0FBSyxFQUFFLENBQThDO1FBQ3JEQyxXQUFXLEVBQUUsQ0FBd007UUFDck5OLEdBQUcsRUFBRSxDQUF3QjtJQUNqQyxDQUFDO0lBQ0QsQ0FBQztRQUNHSSxLQUFLLEVBQUUsQ0FBeUI7UUFDaENDLEtBQUssRUFBRSxDQUEyQztRQUNsREMsV0FBVyxFQUFFLENBQWtOO1FBQy9OTixHQUFHLEVBQUUsQ0FBd0I7SUFDakMsQ0FBQztBQUNMLENBQUM7QUFJZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb25zdGFudHMuanM/NGI5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUZWFtX0NhcmRzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNyYzogXCIvYmxvZy9hdXRob3JzL2FpZGFuLmpwZ1wiLFxyXG4gICAgICAgIE5hbWU6IFwiQWlkYW4gV29vZFwiLFxyXG4gICAgICAgIEJpbzogXCJUaGlzIGlzIGp1c3QgYSBmaWxsZXIgYmlvIHRvIGtlZXAgYXMgYSBwbGFjZWhvbGRlciB1bnRpbCBpIGFjdHVhbGx5IGRvIHRoaXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9ibG9nL2F1dGhvcnMvYWxla3MuanBnXCIsXHJcbiAgICAgICAgTmFtZTogXCJBbGVrcyBGaWNla1wiLFxyXG4gICAgICAgIEJpbzogXCJhbGVrcyBiaW9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9ibG9nL2F1dGhvcnMvYnJhZWRlbi5qcGdcIixcclxuICAgICAgICBOYW1lOiBcIkJyYWVkZW4gU3lybnlrXCIsXHJcbiAgICAgICAgQmlvOiBcImJyYWVkZW4gYmlvXCIsXHJcbiAgICB9LCAgICBcclxuICAgIHtcclxuICAgICAgICBzcmM6IFwiL2Jsb2cvYXV0aG9ycy9ndXJhZ2FtLmpwZ1wiLFxyXG4gICAgICAgIE5hbWU6IFwiR3VyYWdhbSBCaGFsbGFcIixcclxuICAgICAgICBCaW86IFwiZ3VyYWdhbSBiaW9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9ibG9nL2F1dGhvcnMvc3RldmVuX2hlYWRzaG90LmpwZ1wiLFxyXG4gICAgICAgIE5hbWU6IFwiU3RldmVuIFR1ZXJcIixcclxuICAgICAgICBCaW86IFwic3RldmVuIGJpb1wiLFxyXG4gICAgfVxyXG5dXHJcbmNvbnN0IEZFQVRVUkVfQ0FSRFMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgVGl0bGU6IFwiVGhlIE1lY2hhdHJvbmljcyBWZWhpY2xlIFN5c3RlbXMgTGFiXCIsXHJcbiAgICAgICAgQnJpZWY6IFwiTGVhcm4gbW9yZSBhYm91dCB0aGUgbGFiIHdlJ3JlIHdvcmtpbmcgd2l0aFwiLFxyXG4gICAgICAgIERlc2NyaXB0aW9uOiBcIlRoZSBNZWNoYXRyb25pYyBWZWhpY2xlIFN5c3RlbXMgKE1WUykgTGFi4oCUd2l0aCBvdmVyIDQwIGdyYWR1YXRlIHN0dWRlbnRzLCBwb3N0ZG9jcywgZW5naW5lZXJzLCBhbmQgdGVjaG5pY2lhbnPigJRpcyBvbmUgb2YgdGhlIHdvcmxk4oCZcyBsYXJnZXN0IHZlaGljbGUgY29udHJvbCBsYWJvcmF0b3JpZXMgYW5kIGEgcGlvbmVlciBpbiBkZXZlbG9waW5nIGhvbGlzdGljIHZlaGljbGUgY29udHJvbCBzeXN0ZW1zLiBUaGUgbGFib3JhdG9yeSBoYXMgc2V2ZXJhbCB0ZXN0IHZlaGljbGVzLCBpbmNsdWRpbmcgdHdvIGVsZWN0cmljIFNVVnMsIGEgQ2FkaWxsYWMgQ1RTLCBhbmQgYW4gdXJiYW4gdmVoaWNsZSB3aXRoIE1WUyBjb3JuZXIgbW9kdWxlIHRlY2hub2xvZ3kgcGx1cyBhIGZsZWV0IG9mIGZpdmUgYXV0b25vbW91cyBzaHV0dGxlIGJ1c2VzIChXQVRvbm9CdXMpLCBhbmQgYW4gYXV0b25vbW91cyB1dGlsaXR5IHRydWNrIChXQVRvbm9UcnVjaykgdXNpbmcgTVZTIGNvcm5lciBtb2R1bGUgdGVjaG5vbG9neS4gVGhlIHZlaGljbGVzIGFyZSBmdWxseSBlcXVpcHBlZCB3aXRoIHdoZWVsIHNlbnNvcnMsIEdsb2JhbCBQb3NpdGlvbmluZyBTeXN0ZW1zIChHUFMpLyBJbmVydGlhbCBNZWFzdXJlbWVudCBVbml0IChJTVUpLCBjYW1lcmFzLCBsaWRhcnMsIGFuZCByYWRhcnMgZm9yIGV2YWx1YXRpb24gb2YgdmVoaWNsZSBjb250cm9sLCBlc3RpbWF0aW9uLCBwZXJjZXB0aW9uIG1vZHVsZXMsIGFuZCBhdXRvbm9tb3VzIGRyaXZpbmcuIFRoZSB2ZWhpY2xlcyBhcmUgY29udHJvbGxlZCBpbiByZWFsIHRpbWUgdXNpbmcgb3VyIGVzdGltYXRpb24sIGNvbnRyb2wsIGFuZCBhdXRvbWF0ZWQgZHJpdmluZyBtb2R1bGVzLlwiLFxyXG4gICAgICAgIHNyYzpcIi9sYW5kaW5nL01WU0xvZ28ucG5nXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFRpdGxlOiBcIlRoZSBQcm9ibGVtXCIsXHJcbiAgICAgICAgQnJpZWY6IFwiV2hhdCBwcm9ibGVtIGFyZSB3ZSB0cnlpbmcgdG8gc29sdmU/XCIsXHJcbiAgICAgICAgRGVzY3JpcHRpb246IFwiRGVzcGl0ZSBzZW5zb3IgdGVjaG5vbG9neSBpbm5vdmF0aW9ucyBsZWFkaW5nIHRvIHJlZHVjZWQgY29zdHMsIGF1dG9ub21vdXMgdmVoaWNsZXMgcmVtYWluIG1vcmUgZXhwZW5zaXZlIHRoYW4gaHVtYW4tb3BlcmF0ZWQgYWx0ZXJuYXRpdmVzLiBIb3dldmVyLCBmdWxseSBhdXRvbm9tb3VzIHZlaGljbGVzIHByb3ZpZGUgaW1wcm92ZWQgc2FmZXR5IGFuZCBwcm9kdWN0aXZpdHkuIENvbnNlcXVlbnRseSwgYXV0b25vbW91cyB2ZWhpY2xlcyBuZWVkIGEgY29zdC1lZmZlY3RpdmUgYWx0ZXJuYXRpdmUgdG8gdGhlaXIgY3VycmVudCBzZW5zb3Igc3VpdGUgdG8gYmVjb21lIGEgZmVhc2libGUgYWx0ZXJuYXRpdmUgdG8gaHVtYW4tb3BlcmF0ZWQgdmVoaWNsZXMuXCIsXHJcbiAgICAgICAgc3JjOiBcIi9sYW5kaW5nL2J1aWxkLXdlYnNpdGUtMi5QTkdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgVGl0bGU6IFwiT3VyIE9iamVjdGl2ZVwiLFxyXG4gICAgICAgIEJyaWVmOiBcIldoYXQgaXMgdGhlIG9iamVjdGl2ZSBvZiB0aGlzIHByb2plY3Q/XCIsXHJcbiAgICAgICAgRGVzY3JpcHRpb246IFwiVGhpcyBwcm9qZWN0IGFpbWVkIHRvIGRldmVsb3AgYSBjb3N0LWVmZmVjdGl2ZSByZWFsLXRpbWUgcGVyY2VwdGlvbiBhbmQgbG9jYWxpemF0aW9uIGluZnJhc3RydWN0dXJlIHNvIHRoYXQgY29ubmVjdGVkIGF1dG9ub21vdXMgdmVoaWNsZSBzeXN0ZW1zIGNhbiBzYWZlbHkgYW5kIGVmZmVjdGl2ZWx5IG5hdmlnYXRlIGFyb3VuZCB0aGUgVW5pdmVyc2l0eSBvZiBXYXRlcmxvbydzIG5vcnRoIGNhbXB1cy4gVGhlIFdBVG9ub0J1cyB3aWxsIGJlIHVzZWQgYXMgYSBwbGF0Zm9ybSBmb3IgYSBwcm9vZiBvZiBjb25jZXB0IGZvciB0aGlzIHByb2plY3QuXCIsXHJcbiAgICAgICAgc3JjOiBcIi9sYW5kaW5nL2xpdmUtY2xhc3Nlcy5QTkdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgVGl0bGU6IFwiTm9kZVwiLFxyXG4gICAgICAgIEJyaWVmOiBcIldoYXQgYXJlIHdlIHdhbGtpbmcgYWJvdXQgd2hlbiB3ZSBzYXkgJ05vZGUnXCIsXHJcbiAgICAgICAgRGVzY3JpcHRpb246IFwiV2l0aGluIHRoZSBjb250ZXh0IG9mIG91ciBwcm9qZWN0LCBhIG5vZGUgcmVmZXJzIHRvIGEgc2luZ2xlIHBlcmNlcHRpb24gdW5pdCBjb3ZlcmluZyBvbmx5IGEgcG9ydGlvbiBvZiB0aGUgdG90YWwgcm91dGUuIEVhY2ggbm9kZSB1c2VzIGNhbWVyYXMgYW5kIExpREFSIHRvIHJldHJpZXZlIGluZm9ybWF0aW9uIG9uIHBhc3NpbmcgdmVoaWNsZXMuXCIsXHJcbiAgICAgICAgc3JjOiBcIi9sYW5kaW5nL2luLXBlcnNvbi5QTkdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgVGl0bGU6IFwiR2xvYmFsIExldmVsIFBlcmNlcHRpb25cIixcclxuICAgICAgICBCcmllZjogXCJXaGF0IGRvZXMgJ0dsb2JhbCBMZXZlbCBQZXJjZXB0aW9uJyBtZWFuP1wiLFxyXG4gICAgICAgIERlc2NyaXB0aW9uOiBcIlRoZSByb3V0ZSB3ZSBoYXZlIHNlbGVjdGVkLCB1bmZvcnR1bmF0ZWx5LCBjYW5ub3QgYmUgY292ZXJlZCBieSBhIHNpbmdsZSBub2RlLiBUaGVyZWZvcmUsIHdlJ2xsIGhhdmUgdG8gb3JjaGVzdHJhdGUgcGVyY2VwdGlvbiBkYXRhIGZyb20gbXVsdGlwbGUgbm9kZXMgdG8gbWFwIHRoZSBsb2NhdGlvbiBvZiBpbmRpdmlkdWFsIHZlaGljbGVzIG9uIG91ciByb3V0ZS5cIixcclxuICAgICAgICBzcmM6IFwiL2xhbmRpbmcvaW4tcGVyc29uLlBOR1wiLCBcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IHtcclxuICAgIFRlYW1fQ2FyZHMsXHJcbiAgICBGRUFUVVJFX0NBUkRTXHJcbn0iXSwibmFtZXMiOlsiVGVhbV9DYXJkcyIsInNyYyIsIk5hbWUiLCJCaW8iLCJGRUFUVVJFX0NBUkRTIiwiVGl0bGUiLCJCcmllZiIsIkRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/constants.js\n");

/***/ })

});
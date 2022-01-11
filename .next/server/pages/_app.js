(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 87:
/***/ ((module) => {

// Exports
module.exports = {
	"Logo": "Common_Logo__o9QRJ",
	"LogoTitle": "Common_LogoTitle__tGoL_",
	"LogoTitle__Black": "Common_LogoTitle__Black__yAbYp",
	"LogoTitle__White": "Common_LogoTitle__White__7lmZS",
	"Link": "Common_Link__rpiI7",
	"Link__Black": "Common_Link__Black__zR8Fd",
	"Link__White": "Common_Link__White__Jhdik",
	"Link__Highlight": "Common_Link__Highlight__lWYEV",
	"Link__Small": "Common_Link__Small__Yep83",
	"Container__Black": "Common_Container__Black__DwNyj"
};


/***/ }),

/***/ 527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/styles/Common.module.css
var Common_module = __webpack_require__(87);
var Common_module_default = /*#__PURE__*/__webpack_require__.n(Common_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/common/Navbar.js



const Navbar = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container-fluid p-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "row justify-content-between align-items-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-12 col-md-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "d-inline-block align-middle ms-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: `${(Common_module_default()).LogoTitle} ${(Common_module_default()).LogoTitle__Black}`,
                            children: "RTCity"
                        })
                    })
                })
            })
        })
    }));
};


// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/common/Footer.js





const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `container-fluid px-4 py-5 ${(Common_module_default()).Container__Black}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-12 col-md-4 mb-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "d-inline-block align-middle ms-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: `${(Common_module_default()).LogoTitle} ${(Common_module_default()).LogoTitle__White}`,
                            children: "RTCity"
                        })
                    })
                })
            })
        })
    }));
};


;// CONCATENATED MODULE: ./components/index.js




;// CONCATENATED MODULE: ./pages/_app.js



// add bootstrap css

// Main Components

function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 28:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 18:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664], () => (__webpack_exec__(527)));
module.exports = __webpack_exports__;

})();
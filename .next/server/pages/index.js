(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 652:
/***/ ((module) => {

// Exports
module.exports = {
	"BlogHeader": "Blog_BlogHeader__nIxYF",
	"BlogHeader__Title": "Blog_BlogHeader__Title__AdJ2G",
	"BlogHeader__Subtitle": "Blog_BlogHeader__Subtitle___12Ks",
	"BlogPostCard": "Blog_BlogPostCard__2LutR",
	"BlogPostCard__Image": "Blog_BlogPostCard__Image__Ois10",
	"BlogPostCard__Image_Class": "Blog_BlogPostCard__Image_Class__MU3F_",
	"BlogPostCard__AuthorImage": "Blog_BlogPostCard__AuthorImage__fd_I3",
	"BlogPostCard__AuthorImage_Class": "Blog_BlogPostCard__AuthorImage_Class__Mvq5H",
	"BlogPostCard__Tag": "Blog_BlogPostCard__Tag__yPWJp",
	"BlogPostCard__Title": "Blog_BlogPostCard__Title__b_yh8",
	"BlogPostCard__Description": "Blog_BlogPostCard__Description__WKSUy",
	"BlogPostCard__Author": "Blog_BlogPostCard__Author__eZdu9",
	"BlogPostCard__ExtraInfo": "Blog_BlogPostCard__ExtraInfo__CmQIQ"
};


/***/ }),

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(652);
/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(664);







const readingTime = __webpack_require__(956);
function Blog({ blogs  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `container text-center py-5 ${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default().BlogHeader)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 col-md-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: `mb-4 ${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default().BlogHeader__Title)}`,
                                children: "Weclome to RTCity, the Future Of Autonomous Vehicles (or something)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: `${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default().BlogHeader__Subtitle)} mb-5`,
                                children: "An autonomous vehicle is any vehicle capable of sensing its environment and operating with human involvement. As of 2019, there were over 31 million autonomous vehicles worldwide. Furthermore, between 2020 and 2023, the number of autonomous vehicles in operation is expected to grow by almost 60%. However, autonomous vehicles are costly compared to standard vehicles, as they require extensive highly-expensive sensor suites to sense their surrounding environment. These sensor suites can consist of radar, LiDAR, sonar, GPS, and an inertial measurement system. Consequently, a suitable alternative needs to be found to reduce the costs of autonomous vehicles. One suitable solution to this problem is using a network of nodes across a designated area to perform the perception and planning tasks for any vehicle or interconnected fleet of vehicles. "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mb-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row g-5",
                    children: blogs.map((blog, index)=>{
                        const readingStats = readingTime(blog.content);
                        const readingText = readingStats.text ? readingStats.text : "";
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 col-md-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                href: `/blog/${blog.href}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default().BlogPostCard)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default().BlogPostCard__Image)}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                src: `/blog/post_assets/${blog.thumbnail}`,
                                                alt: blog.title,
                                                layout: "fill",
                                                objectFit: "cover",
                                                className: `${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default().BlogPostCard__Image_Class)}`
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: `${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default().BlogPostCard__Tag)} mb-1`,
                                                    children: blog.tag
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: `${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default().BlogPostCard__Title)}`,
                                                    children: blog.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: `${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default().BlogPostCard__Description)}`,
                                                    children: blog.description
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "d-flex align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default().BlogPostCard__AuthorImage)}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                                src: blog.author_image,
                                                                alt: blog.author,
                                                                layout: "fill",
                                                                objectFit: "cover",
                                                                className: `d-inline-block ${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default().BlogPostCard__AuthorImage_Class)}`
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "ms-3 mt-2 align-self-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: `${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default().BlogPostCard__Author)}`,
                                                                    children: blog.author
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                                    className: `${(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_6___default().BlogPostCard__ExtraInfo)}`,
                                                                    children: [
                                                                        new Date(blog.date).toDateString(),
                                                                        " - ",
                                                                        String(readingText)
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }, `index_${index}`));
                    })
                })
            })
        ]
    }));
};
async function getStaticProps({ params  }) {
    // Get all blog posts
    const folderPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), '/public/blog/posts');
    const blogData = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(folderPath, {
        encoding: "utf-8"
    }).reduce((arr, file)=>{
        const source = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), `/public/blog/posts/${file}`);
        const fileSource = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(source, {
            encoding: "utf-8"
        });
        const { content , data  } = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(fileSource);
        data.content = content;
        const published = data.published;
        const href = String(file).substring(0, String(file).length - 4);
        data.href = href;
        if (published === "false") return arr;
        return [
            ...arr,
            data
        ];
    }, []);
    // Sort the blog posts
    try {
        blogData.sort((a, b)=>{
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
        });
    } catch (e) {
        console.log("Failed to sort by date: ", e);
    }
    return {
        props: {
            blogs: blogData
        }
    };
}


/***/ }),

/***/ 76:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

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

/***/ }),

/***/ 956:
/***/ ((module) => {

"use strict";
module.exports = require("reading-time");

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664], () => (__webpack_exec__(678)));
module.exports = __webpack_exports__;

})();
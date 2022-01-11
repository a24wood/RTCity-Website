(() => {
var exports = {};
exports.id = 777;
exports.ids = [777];
exports.modules = {

/***/ 821:
/***/ ((module) => {

// Exports
module.exports = {
	"HeaderImage": "BlogPost_HeaderImage__3jinv",
	"AuthorImage": "BlogPost_AuthorImage__6LVWY",
	"AuthorImage_Class": "BlogPost_AuthorImage_Class__bnWr9",
	"Blog__Title": "BlogPost_Blog__Title__tytwv",
	"Blog__TeamTitle": "BlogPost_Blog__TeamTitle__6Rw99",
	"Header__Subtext": "BlogPost_Header__Subtext__Vpi5T"
};


/***/ }),

/***/ 522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Blog),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-mdx-remote/serialize"
const serialize_namespaceObject = require("next-mdx-remote/serialize");
;// CONCATENATED MODULE: external "next-mdx-remote"
const external_next_mdx_remote_namespaceObject = require("next-mdx-remote");
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(17);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(76);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./styles/BlogPost.module.css
var BlogPost_module = __webpack_require__(821);
var BlogPost_module_default = /*#__PURE__*/__webpack_require__.n(BlogPost_module);
;// CONCATENATED MODULE: ./pages/blog/[pid].js









const readingTime1 = __webpack_require__(956);
const components = {
};
function Blog({ source , frontMatter , readingTime  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            frontMatter.title,
                            " | Phros"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: frontMatter.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "og:image",
                        content: frontMatter.thumbnail
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/phros-symbol.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container my-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-12 col-md-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: (BlogPost_module_default()).Blog__TeamTitle,
                                        children: frontMatter.tag
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: `${(BlogPost_module_default()).Blog__Title} mb-5`,
                                        children: frontMatter.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12 col-md-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "d-flex align-items-center mb-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(BlogPost_module_default()).AuthorImage}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: frontMatter.author_image,
                                                alt: frontMatter.author,
                                                layout: "fill",
                                                objectFit: "cover",
                                                className: `d-inline-block ${(BlogPost_module_default()).AuthorImage_Class}`
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "ms-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: `${(BlogPost_module_default()).Header__Subtext} fw-bold`,
                                                    children: frontMatter.author
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    className: (BlogPost_module_default()).Header__Subtext,
                                                    children: [
                                                        new Date(frontMatter.date).toDateString(),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fw-light ms-2",
                                                            children: readingTime
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12 col-md-10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `${(BlogPost_module_default()).HeaderImage} mb-5`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: frontMatter.header_image,
                                        alt: frontMatter.header_image_alt,
                                        layout: "fill",
                                        objectFit: "cover"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12 col-md-9 mt-5 mb-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_mdx_remote_namespaceObject.MDXRemote, {
                                    ...source,
                                    components: components
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps({ params  }) {
    const source = external_path_default().join(process.cwd(), `/public/blog/posts/${params.pid}.mdx`);
    const fileSource = external_fs_default().readFileSync(source, {
        encoding: 'utf-8'
    });
    const { content , data  } = external_gray_matter_default()(fileSource);
    const mdxSource = await (0,serialize_namespaceObject.serialize)(content, {
        scope: data
    });
    const readingStats = await readingTime1(content);
    return {
        props: {
            source: mdxSource,
            frontMatter: data,
            readingTime: readingStats.text
        }
    };
}
function getStaticPaths() {
    // Get all blog posts
    const folderPath = external_path_default().join(process.cwd(), '/public/blog/posts');
    const paths = external_fs_default().readdirSync(folderPath, {
        encoding: "utf-8"
    }).reduce((arr, file)=>{
        const source = external_path_default().join(process.cwd(), `/public/blog/posts/${file}`);
        const fileSource = external_fs_default().readFileSync(source, {
            encoding: "utf-8"
        });
        const { data  } = external_gray_matter_default()(fileSource);
        const published = data.published;
        if (published === "false") return arr;
        const href = String(file).substring(0, String(file).length - 4);
        const pathData = {
            params: {
                pid: href
            }
        };
        return [
            ...arr,
            pathData
        ];
    }, []);
    return {
        paths: paths,
        fallback: false
    };
}


/***/ }),

/***/ 76:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

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

/***/ 18:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(522)));
module.exports = __webpack_exports__;

})();
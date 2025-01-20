import "tsx/esm";
import {renderToStaticMarkup} from 'react-dom/server'
import {register} from 'node:module';
import ejs from "ejs";
import ejsPlugin from "@11ty/eleventy-plugin-ejs";
import pugPlugin from "@11ty/eleventy-plugin-pug";



// register('@mdx-js/node-loader', import.meta.url);

export default function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("_apps/counter/counterbundle.js");
	eleventyConfig.addShortcode("navLink", (text, currentPage) => {
		const isActive = text === currentPage;
		return `<li class="nav-item">
                    <a 
                        class="nav-link ${isActive ? "active" : ""}"
                        aria-current="page" 
                        href="/${text === "home" ? "" : text}">
                        ${text}
                    </a>
                </li>`
	})

	// eleventyConfig.addPlugin(ejsPlugin);

	// eleventyConfig.addTemplateFormats("mdx")
	// eleventyConfig.addTemplateFormats("ejs")
	// eleventyConfig.addTemplateFormats("11ty.jsx,11ty.tsx") 
	// eleventyConfig.addExtension("mdx", {
	// 	key: "11ty.js",
	// 	compile: () => {
	// 		return async function(data) {
	// 			let content = await this.defaultRenderer(data);
	// 			return renderToStaticMarkup(content);
	// 		};
	// 	}
	// });
	// // We can add support for TypeScript too, at the same time:
	// eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
	// 	key: "11ty.js",
	// 	compile: function () {
	// 		return async function (data) {
	// 			let content = await this.defaultRenderer(data);
	// 			return renderToStaticMarkup(content);
	// 		};
	// 	},
	// });
};
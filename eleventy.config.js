import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import friendlyDate from "./shortcodes/friendlyDate.js";
// register('@mdx-js/node-loader', import.meta.url);

export default function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("_apps/counter/counterbundle.js");
	eleventyConfig.addPassthroughCopy("_includes/styles/main.css");
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);
	eleventyConfig.addPlugin(syntaxHighlight);
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
	eleventyConfig.addShortcode("friendlyDate", friendlyDate)

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
};
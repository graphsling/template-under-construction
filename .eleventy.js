import env from './src/_data/env.js';

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/css": "css" });

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
}

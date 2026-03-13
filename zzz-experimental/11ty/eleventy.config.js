module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/shared-assets/css": "css" });
  eleventyConfig.addPassthroughCopy("src/js");
  return {
    dir: { input: "src", output: "_site" },
  };
};

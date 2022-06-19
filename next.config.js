/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
};

module.exports = withMDX({
  ...nextConfig,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});

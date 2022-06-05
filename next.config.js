/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
            loader: "custom",
          },

  trailingSlash : true,

  //basePath: "/~smithgm",

  // From https://gist.github.com/lukebussey/8387bb038629dccc01a62487614f44df
  // For handling SVGs
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;

    // Custom loader for SVGs as React Components
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    });

    return config;
  },
}

module.exports = nextConfig

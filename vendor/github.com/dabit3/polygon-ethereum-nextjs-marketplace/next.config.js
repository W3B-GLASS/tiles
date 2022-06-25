module.exports = {
  reactStrictMode: true,
  assetPrefix: '/marketplace',
  publicRuntimeConfig: { 
    staticFolder: `/marketplace/static`
  },
//  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
//    config.node = {
//      fs: 'empty'
//    }
//    return config
//  }
}

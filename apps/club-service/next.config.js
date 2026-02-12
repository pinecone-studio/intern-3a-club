// Cloudflare-ийн орчны хувьсагчууд (Environment Variables)
const cloudflareEnv = {
  // D1 & Account Info
  CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID || '',
  CLOUDFLARE_API_TOKEN: process.env.CLOUDFLARE_API_TOKEN || '', // Ерөнхий API Token
  TOKEN: process.env.TOKEN || '', // Drizzle/D1-д ашиглаж буй Token
};

// Webpack дээрх Cloudflare-д зориулсан тусгай тохиргоо (Ignore Plugin)
// Энэ нь Cloudflare Workers орчинд ажиллахад зарим сангуудыг алгасах зориулалттай
// const webpackConfig = (config, { webpack }) => {
//     config.plugins.push(
//       new webpack.IgnorePlugin({
//         resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
//       })
//     );
//     return config;
// };

// Локал хөгжүүлэлтийн үед Cloudflare-ийн нөөцүүдийг (Bindings) дуудах хэсэг
if (process.env.NODE_ENV === 'development') {
  const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');
  (async () => await setupDevPlatform())();
}

module.exports = ({ env }) => [
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "keno-assets.strapi.io",
            `${env("AWS_BUCKET")}.s3.${env("AWS_REGION")}.amazonaws.com`,
            ,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "keno-assets.strapi.io",
            `${env("AWS_BUCKET")}.s3.${env("AWS_REGION")}.amazonaws.com`,
            ,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::logger",
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

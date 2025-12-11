export default [
  'strapi::logger',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  "strapi::errors",
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
            "dl.airtable.com",
            "fra1.digitaloceanspaces.com",
            "dev.josacdn.net",
            "assets.josacdn.net",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "fra1.digitaloceanspaces.com",
            "dev.josacdn.net",
            "assets.josacdn.net",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];

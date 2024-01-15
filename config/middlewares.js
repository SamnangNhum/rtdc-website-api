module.exports = [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      headers: "*",
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

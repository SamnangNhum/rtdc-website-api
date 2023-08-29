module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "128.199.194.241"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "rtdc_db"),
      user: env("DATABASE_USERNAME", "rtdc_postgres"),
      password: env("DATABASE_PASSWORD", "Rtdcadmin@168"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: env("DATABASE_SSL", false),
    },
    debug: false,
  },
});

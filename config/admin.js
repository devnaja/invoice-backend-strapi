module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", env.array("ADMIN_JWT_SECRET")),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", env.array("API_TOKEN_SALT")),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", env.array("TRANSFER_TOKEN_SALT")),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});

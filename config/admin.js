module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "qC4xYz1/B8ddWjnufwSXug=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "LX1R8Jqwd5plRerdB946fQ"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "1A/Y2gC16S/5F2qPsiCbcg=="),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});

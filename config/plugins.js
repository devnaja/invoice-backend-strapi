// module.exports = ({ env }) => ({

//   email: {
//     config: {
//       provider: "sendgrid",
//       providerOptions: {
//         apiKey: env("SENDGRID_API_KEY"),
//       },
//       settings: {
//         defaultFrom: "najanadhirah11@gmail.com",
//         defaultReplyTo: "naja.nadhirah@tomtatechnology.com",
//       },
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   email: {
//     provider: "smtp",
//     providerOptions: {
//       host: "smtp.gmail.com",
//       port: 587,
//       auth: {
//         user: "",
//         pass: "",
//       },
//     },
//     settings: {
//       defaultFrom: "naja.nadhirah@tomtatechnology",
//       defaultReplyTo: "naja.nadhirah@tomtatechnology",
//     },
//   },
// });

module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendmail",
      settings: {
        defaultFrom: "naja.nadhirah@tomtatechnology",
        defaultReplyTo: "naja.nadhirah@tomtatechnology",
      },
    },
  },
  // ...
});

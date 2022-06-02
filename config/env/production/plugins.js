// path: ./config/plugins.js

module.exports = {
  //
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      introspection: true,
      apolloServer: {
        tracing: true,
      },
    },
  },
};

// graphql: {
//   playgroundAlways: process.env.NODE_ENV === 'development',
// },


// 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
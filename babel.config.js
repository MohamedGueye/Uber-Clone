module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // This allows us to use the env variables in our code.
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};

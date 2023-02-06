module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {},
  },
  plugins: [
    ["@babel/plugin-proposal-optional-catch-binding"],
    ['react-native-reanimated/plugin']
  ],
}

module.exports = {
  presets: [
    ["@vue/cli-plugin-babel/preset", { useBuiltIns: "usage", corejs: 3 }],
  ],
  plugins: [
    [
      "component",
      {
        ext: ".scss",
        libraryName: "element-ui",
        styleLibrary: {
          name: "~node_modules/element-ui/packages/theme-chalk/src",
          base: true,
          path: "[module].scss",
          mixin: true,
        },
      },
    ],
  ],
  env: {
    test: {
      plugins: ["transform-require-context"],
    },
  },
};

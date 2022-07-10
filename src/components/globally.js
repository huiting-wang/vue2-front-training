import Vue from "vue";
import { upperFirst, camelCase } from "lodash";

/**
 * 元件全域註冊
 *
 * @see https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components
 */
const requireComponent = require.context(
  // The relative path of the components folder
  ".",
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /Exam[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});

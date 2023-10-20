// 合并两个模块
// ./src/a.js
// ./src/index.js

(function (modules) {
  const moduleExports = {}; 
  function __webpack__require(moduleID) {
    if (moduleExports[moduleID]) {
      return moduleExports[moduleID]
    }
    var func = modules[moduleID];
    var module = {
      exports: {},
    };
    func(module, module.exports, __webpack__require);
    var result = module.exports;
    return result;
  }
  __webpack__require("./src/index.js");
})({
  "./src/a.js": function (module, exports, require) {
    console.log("module a");
    module.exports = "a";
  },
  "./src/index.js": function (module, exports, __webpack__require) {
    console.log("index module");
    var a = __webpack__require("./a");
    console.log(a);
  },
});

var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  myFunc: () => myFunc
});
var _ = require("lodash");
var myFunc = (inputJsonString) => {
  var deserialised = JSON.parse(inputJsonString);
  var keys = new Array();
  for (var key in deserialised) {
    keys.push(key);
  }
  console.log(keys);
  var longest_lengths = 0;
  for (var i = 0; i < keys.length; i = i + 1) {
    if (keys[i].length > longest_lengths) {
      longest_lengths = keys[i].length;
    }
  }
  console.log(longest_lengths);
  var paddedkeys = [];
  for (var i = 0; i < keys.length; i = i + 1) {
    var paddedKey = keys[i];
    while (paddedKey.length < longest_lengths) {
      paddedKey = _.padStart(paddedKey, paddedKey.length + 1, "0");
    }
    paddedkeys.push(paddedKey);
  }
  console.log(paddedkeys);
  for (var i = 1; i <= paddedkeys.length - 1; i = i + 1) {
    for (var j = 0; j <= paddedkeys.length - i - 1; j = j + 1)
      if (paddedkeys[j] > paddedkeys[j + 1]) {
        var temp = paddedkeys[j];
        paddedkeys[j] = paddedkeys[j + 1];
        paddedkeys[j + 1] = temp;
      }
  }
  console.log(paddedkeys);
  var resultItems = [];
  for (var i = 0; i < paddedkeys.length; i = i + 1)
    for (var j = 0; j < keys.length; j = j + 1)
      if (parseInt(paddedkeys[i]) === parseInt(keys[j]))
        resultItems.push('"' + keys[i] + '": "' + deserialised[keys[i]] + '",');
  console.log(resultItems);
  var resultStr = "{";
  for (var i = 0; i < resultItems.length; i = i + 1)
    resultStr = resultStr + resultItems[i];
  resultStr = resultStr.substring(0, resultStr.length - 1);
  resultStr = resultStr + "}";
  return resultStr;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  myFunc
});
//# sourceMappingURL=index.js.map

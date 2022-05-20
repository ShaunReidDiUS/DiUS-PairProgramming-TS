var _ = require('lodash');

export var myFunc = (inputJsonString: any) => {
  var deserialised = JSON.parse(inputJsonString);

  var keys = new Array<string>();
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

  var paddedkeys: string[] = [];
  for (var i = 0; i < keys.length; i = i + 1) {
    var paddedKey = keys[i];
    while (paddedKey.length < longest_lengths) {
      paddedKey = _.padStart(paddedKey, paddedKey.length + 1, '0');
      // console.log(paddedKey);
    }
    paddedkeys.push(paddedKey);
  }
  console.log(paddedkeys);

  //sort
  for (var i = 1; i <= paddedkeys.length - 1; i = i + 1) {
    for (var j = 0; j <= paddedkeys.length - i - 1; j = j + 1)
      if (paddedkeys[j] > paddedkeys[j + 1]) {
        var temp = paddedkeys[j];
        paddedkeys[j] = paddedkeys[j + 1];
        paddedkeys[j + 1] = temp;
      }
  }
  console.log(paddedkeys);

  var resultItems: string[] = []
  for (var i = 0; i < paddedkeys.length; i = i + 1) 
    for (var j = 0; j < keys.length; j = j + 1) 
      if (parseInt(paddedkeys[i]) === parseInt(keys[j]))
        resultItems.push("\"" + keys[i] +"\": \"" + deserialised[keys[i]] +"\"," )

  console.log(resultItems);

  var resultStr = '{'
  for (var i = 0; i < resultItems.length; i = i + 1) 
    resultStr = resultStr + resultItems[i];
  
  resultStr = resultStr.substring(0, resultStr.length-1)
  resultStr = resultStr + '}'
  
  return resultStr;
};

import { myFunc } from "./index";

var thingToSort = `{
 "1": "first",
 "2": "second",
 "3": "third",
 "11": "eleventh",
 "07": "seventh",
 "20": "twentyth",
 "02": "secondsecond" 
}`;

it("should get the correct number of items", () => {  
  var sorted = myFunc(thingToSort);
  console.log(sorted)
});
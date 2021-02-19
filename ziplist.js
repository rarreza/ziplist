const testList = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

// This uses for loop
function zipList(list1, list2) {
  const resultList = [];
  for (let i = 0; i < list1.length; i++) {
    resultList.push(list1[i], list2[i]);
  }
  return resultList;
}
console.log(`For loop method [${zipList(testList, testList2)}]`);
console.log(zipList(testList, testList2));

// This uses underscore method
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(`Underscore method [${zipListTheSimpleWay(testList, testList2)}]`);
console.log(zipListTheSimpleWay(testList, testList2));

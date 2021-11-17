const _=require('lodash')

items=[1,[2,[3,[4,[5]]]]]

console.log(items);

newItems=_.flattenDeep(items)
console.log(newItems);
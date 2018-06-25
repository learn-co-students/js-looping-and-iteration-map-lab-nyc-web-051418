// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const result=drivers.map(x=>x.toLowerCase());
  return result
}

function nameToAttributes(drivers) {
const newobj=drivers.map(function(name){
  return Object.assign({},{firstName:name.split(" ")[0]},{lastName:name.split(" ")[1]})
})
return newobj
}

function attributesToPhrase(drivers) {
const arr=[]
      drivers.map(function(obj){
        arr.push(`${obj.name} is from ${obj.hometown}`)
})
return arr
}

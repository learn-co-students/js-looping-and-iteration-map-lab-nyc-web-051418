// Code your solution in this file.

function lowerCaseDrivers(array) {
  return array.map(function (driver) { return driver.toLowerCase();});
};

function nameToAttributes(array) {
  return array.map(
    function(name) {
    fullName = name.split(" ")
    return { firstName:fullName[0], lastName:fullName[1] };
  }
)
}

function attributesToPhrase(array) {
  return array.map (
    function(driver) {
      return `${driver.name} is from ${driver.hometown}`
    }
  )
}

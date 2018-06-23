// Code your solution in this file.

function lowerCaseDrivers (driversArray) {
    return driversArray.map (driver => driver.toLowerCase() );
}

function nameToAttributes (driversArray) {
    return driversArray.map (function (driver) {
      let [first, last] = driver.split(" ");
      return { firstName: first, lastName: last};
    });
}

function attributesToPhrase (driversArray) {
    return driversArray.map (function (driver){
        return `${driver.name} is from ${driver.hometown}`
    });
}

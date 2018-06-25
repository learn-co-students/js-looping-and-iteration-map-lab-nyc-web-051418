function lowerCaseDrivers (drivers) {
  return drivers.map( function (driver) { return driver.toLowerCase(); });
}

function nameToAttributes (drivers) {
  return drivers.map( function (driver) { return nameToObj (driver); });
}

function nameToObj (name) {

  const splitName = name.split(' ');

  const newObj = Object.assign({}, {'firstName': splitName[0], 'lastName': splitName[1] });

  return newObj;
}

function attributesToPhrase (drivers) {
  return drivers.map( function (driver)
  { return `${driver.name} is from ${driver.hometown}`; 
  });
}

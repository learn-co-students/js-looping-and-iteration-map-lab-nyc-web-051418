function lowerCaseDrivers(driversArray){
  return driversArray.map(driver => driver.toLowerCase());
}

function nameToAttributes(driversArray){
  return driversArray.map(function (driver){
    const driverFirstName = driver.split(" ")[0];
    const driverLastName = driver.split(" ")[1];
    return {firstName: driverFirstName ,lastName: driverLastName};
  });
}

function attributesToPhrase(driversArray){
  return driversArray.map(driver => `${driver.name} is from ${driver.hometown}`);
}

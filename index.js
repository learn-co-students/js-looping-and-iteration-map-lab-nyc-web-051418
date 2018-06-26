// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowerDrivers = drivers.map(function (driver) {
    return driver.toLowerCase();
  });
  return lowerDrivers;
}

function nameToAttributes (list) {
  return list.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}

function attributesToPhrase(drivers) {
  const phrases = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return phrases;
}

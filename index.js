// Code your solution in this file.
lowerCaseDrivers = (drivers) => {
  const driverLowCase = drivers.map(driver => {
    return driver.toLowerCase(); 
    // debugger
  })
  return driverLowCase; 
  // debugger
}

nameToAttributes = (drivers) => {
  const driverAttributes = drivers.map(driver => {
    const driverArray = driver.split(" "); 
    return {firstName: driverArray[0],lastName: driverArray[1]}; 
    // debugger
  })
  return driverAttributes; 
}

attributesToPhrase = (drivers) => {
  driverDescription = drivers.map(driver => {
    return `${driver.name} is from ${driver.hometown}`
    // debugger
  })
  return driverDescription
  // debugger
}
function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
  }
  
  const exampleObject = { name: "Aman", age: 22 };
  console.log(hasProperty(exampleObject, "age")); // true
  console.log(hasProperty(exampleObject, "email")); // false
  
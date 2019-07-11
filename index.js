var recipes = {};

function Objects () {
  return recipes;
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
  newObj = Object.assign({}, obj);
  delete newObj[key];
}
      
      
      
function transform(old) {
  let newObject = {}
  Object.keys(old).forEach(
    function(key) {
      old[key].forEach(
        function(value) {
          newObject[value.toLowerCase()] = Number(key)
        }
      );
    }
  );

  return newObject;
}

module.exports = transform;
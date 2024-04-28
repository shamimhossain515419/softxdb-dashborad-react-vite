function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (!isObjectEqual(a[i], b[i])) return false;
  }
  return true;
}

// Function to check if objects are equal
function isObjectEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export default arraysEqual;

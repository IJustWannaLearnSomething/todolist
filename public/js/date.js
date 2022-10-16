const today = new Date();

module.exports.getDate = () => {
  const options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  }
  return today.toLocaleDateString("en-US", options);
}

module.exports.getDay = () => {
  const options = {
    weekday : "long"
  }
  return today.toLocaleDateString("en-US", options);
}

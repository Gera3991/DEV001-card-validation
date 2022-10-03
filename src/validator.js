const validator = {
isValid : function(NumberCardinput) {
  const reverseInput = NumberCardinput.tostring().split('').reverse().map(Number);
  console.log(reverseInput)
}
};

export default validator;

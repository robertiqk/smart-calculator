class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.initialValue = initialValue + "";

  }
  
  add(number) {
    // your implementation
    this.initialValue += "+" + number;
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.initialValue += "-" + number;
    return this;
  }

  multiply(number) {
    // your implementation
    this.initialValue += "*" + number;
    return this;
  }

  devide(number) {
    // your implementation
    this.initialValue += "/" + number;
    return this;
  }

  pow(number) {
    // your implementation
    this.initialValue += "**" + number;
    return this;
  }

  valueOf() {
  return this.initialValue = eval(this.initialValue);
  }
}

module.exports = SmartCalculator;

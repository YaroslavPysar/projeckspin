// data-validation-library.js

class DataValidationLibrary {
    constructor() {}
  
    // Validate if a string is empty or not
    static validateString(input) {
      return typeof input === 'string' && input.trim() !== '';
    }
  
    // Validate if a number is within a specified range
    static validateNumber(input, min, max) {
      return typeof input === 'number' && input >= min && input <= max;
    }
  
    // Validate if a string is a valid email address
    static validateEmail(input) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input);
    }
  
    // Validate if a string is a valid date in ISO format (YYYY-MM-DD)
    static validateDate(input) {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      return dateRegex.test(input) && !isNaN(Date.parse(input));
    }
  }
  
  module.exports = DataValidationLibrary;
  
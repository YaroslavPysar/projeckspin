```markdown
# Data Validation Library

A simple JavaScript library for data validation.

## Installation

Install the package using npm:

```bash
npm install data-validation-library
```

## Usage

```javascript
const DataValidationLibrary = require('data-validation-library');

// Example usage
console.log(DataValidationLibrary.validateString('Hello')); // true
console.log(DataValidationLibrary.validateString('')); // false

console.log(DataValidationLibrary.validateNumber(5, 0, 10)); // true
console.log(DataValidationLibrary.validateNumber(15, 0, 10)); // false

console.log(DataValidationLibrary.validateEmail('test@example.com')); // true
console.log(DataValidationLibrary.validateEmail('invalid_email')); // false

console.log(DataValidationLibrary.validateDate('2024-03-08')); // true
console.log(DataValidationLibrary.validateDate('2024/03/08')); // false
```

## API

### `validateString(input)`

Validate if a string is empty or not.

- `input`: The string to validate.

### `validateNumber(input, min, max)`

Validate if a number is within a specified range.

- `input`: The number to validate.
- `min`: The minimum allowed value.
- `max`: The maximum allowed value.

### `validateEmail(input)`

Validate if a string is a valid email address.

- `input`: The string to validate as an email address.

### `validateDate(input)`

Validate if a string is a valid date in ISO format (YYYY-MM-DD).

- `input`: The string to validate as a date in ISO format (YYYY-MM-DD).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

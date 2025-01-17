document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (!height || height <= 0 || isNaN(height)) {
      results.innerHTML = `Please provide a valid height.`;
    } else if (!weight || weight <= 0 || isNaN(weight)) {
      results.innerHTML = `Please provide a valid weight.`;
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);

      // BMI Classification
      let status = '';
      if (bmi < 18.5) {
        status = 'You are underweight.';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Your weight is normal.';
      } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'You are overweight.';
      } else {
        status = 'You are obese.';
      }

      // Display the result
      results.innerHTML = `<span>Your BMI is: ${bmi}. ${status}</span>`;
    }
  });
});

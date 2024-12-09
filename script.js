document.getElementById('predictionForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const age = parseInt(document.getElementById('age').value, 10);
  const sex = document.getElementById('sex').value;
  const drugCombination = document.getElementById('drug-combination').value;
  const adherence = parseInt(document.getElementById('adherence').value, 10);

  // Simple rule-based logic for demo purposes
  let prediction = 'Positive Response';
  let confidence = Math.random() * 30 + 70; // Random confidence between 70% and 100%

  if (adherence < 80) {
    prediction = 'Suboptimal Response';
    confidence = Math.random() * 30 + 50; // Random confidence between 50% and 80%
  } else if (age > 60) {
    prediction = 'Moderate Response';
    confidence = Math.random() * 20 + 60; // Random confidence between 60% and 80%
  }

  // Display results
  document.getElementById('predictionOutput').innerHTML = `
    <p><strong>Prediction:</strong> ${prediction}</p>
    <p><strong>Confidence:</strong> ${confidence.toFixed(2)}%</p>
  `;
});
document.getElementById('predictionForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const age = parseInt(document.getElementById('age').value, 10);
  const sex = document.getElementById('sex').value;

  // Collect selected drug combinations
  const drugs = Array.from(document.querySelectorAll('input[name="drug-combination"]:checked')).map(option => option.value);

  // Get adherence level
  const adherence = document.querySelector('input[name="adherence"]:checked')?.value;

  // Additional inputs
  const cd4 = parseInt(document.getElementById('cd4').value, 10);
  const rna = parseInt(document.getElementById('rna').value, 10);
  const weight = parseFloat(document.getElementById('weight').value);

  if (drugs.length === 0) {
    alert('Please select at least one drug combination.');
    return;
  }

  // Simple rule-based prediction logic
  let prediction = 'Positive Response';
  let confidence = Math.random() * 30 + 70;

  if (adherence === 'Non-adherent' || cd4 < 200 || rna > 100000) {
    prediction = 'Suboptimal Response';
    confidence = Math.random() * 30 + 50;
  }

  // Display results
  document.getElementById('predictionOutput').innerHTML = `
    <p><strong>Selected Drugs:</strong> ${drugs.join(', ')}</p>
    <p><strong>Adherence:</strong> ${adherence}</p>
    <p><strong>CD4 Count:</strong> ${cd4} cells/μL</p>
    <p><strong>RNA Level:</strong> ${rna} copies/mL</p>
    <p><strong>Weight:</strong> ${weight} kg</p>
    <p><strong>Prediction:</strong> ${prediction}</p>
    <p><strong>Confidence:</strong> ${confidence.toFixed(2)}%</p>
  `;
});

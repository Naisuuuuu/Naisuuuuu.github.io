function calculateResults() {
    const valuesInput = document.getElementById('values').value;
    const operation = document.getElementById('operation').value;
    const constant = parseFloat(document.getElementById('constant').value);
    const resultsContainer = document.getElementById('results');

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (!valuesInput || isNaN(constant)) {
        resultsContainer.innerHTML = '<div>Please enter valid values and a constant.</div>';
        return;
    }

    const values = valuesInput.split(',').map(val => parseFloat(val.trim()));
    if (values.some(isNaN)) {
        resultsContainer.innerHTML = '<div>All values must be numbers.</div>';
        return;
    }

    const results = values.map((value, index) => {
        let result;
        switch (operation) {
            case 'add':
                result = value + constant;
                break;
            case 'subtract':
                result = value - constant;
                break;
            case 'multiply':
                result = value * constant;
                break;
            case 'divide':
                result = constant !== 0 ? value / constant : 'ไม่สามารถหารด้วย 0 ได้!!';
                break;
            case 'power':
                result = Math.pow(value, constant);
                break;
        }
        return `ค่าที่ ${index + 1}: ${result}`;
    });

    results.forEach(res => {
        const resultDiv = document.createElement('div');
        resultDiv.textContent = res;
        resultsContainer.appendChild(resultDiv);
    });
}

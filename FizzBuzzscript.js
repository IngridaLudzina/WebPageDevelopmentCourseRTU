document.getElementById('generateBtn').addEventListener('click', generateFizzBuzz);
document.getElementById('clearBtn').addEventListener('click', clearFizzBuzz);

function generateFizzBuzz() {
    const startValue = parseInt(document.getElementById('startValue').value);
    const endValue = parseInt(document.getElementById('endValue').value);
    const fizzValue = parseInt(document.getElementById('fizzValue').value);
    const buzzValue = parseInt(document.getElementById('buzzValue').value);
    
    const container = document.getElementById('fizzbuzzContainer');
    clearFizzBuzz(); // Clear existing divs before generating new ones

    for (let i = startValue; i <= endValue; i++) {
        const div = document.createElement('div');
        div.id = `myid${i}`;
        
        if (i % fizzValue === 0 && i % buzzValue === 0) {
            div.className = 'fizzbuzz';
            div.innerText = 'FizzBuzz';
        } else if (i % fizzValue === 0) {
            div.className = 'fizz';
            div.innerText = 'Fizz';
        } else if (i % buzzValue === 0) {
            div.className = 'buzz';
            div.innerText = 'Buzz';
        } else {
            div.className = 'number';
            div.innerText = i;
        }
        
        container.appendChild(div);
    }
}

function clearFizzBuzz() {
    const container = document.getElementById('fizzbuzzContainer');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()
    const height = parseFloat(form.querySelector('#height').value)
    const weight = parseFloat(form.querySelector('#weight').value)
    const results = document.querySelector('#result').querySelector('#output')
    
    if(height === '' || height < 0 || isNaN(height)) {
        results.textContent = "Please give a valid height!"  
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.textContent = "Please give a valid weight!"  
    } else {
        results.textContent = `${(weight/(height*height)).toFixed(2)}`
    }

})
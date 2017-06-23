function readAndClearForm(form) {
    const elements = form
    let values = {}
    // Loop through form elements https://stackoverflow.com/a/19978872
    for (let i = 0, element; element = elements[i++];) {
        values[element.name] = element.value
        element.value = ''
    }
    
    return values
}

module.exports = readAndClearForm
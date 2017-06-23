'use strict';

function readAndClearForm(form) {
    var elements = form;
    var values = {};
    // Loop through form elements https://stackoverflow.com/a/19978872
    for (var i = 0, element; element = elements[i++];) {
        values[element.name] = element.value;
        element.value = '';
    }

    return values;
}

module.exports = readAndClearForm;
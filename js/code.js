const deleteListener = () => {
    const listElements = document.querySelectorAll('li span.trash-icon');
    for (let c = 0; c < listElements.length; c++) {
        listElements[c].addEventListener('click', (event) => {
            // Beschaft sich das umfassende <li>-Tag
            const parentEl = event.target.parentElement;
            // Beschafft sich das umfassende <ul>-Tag und entfernt
            parentEl.parentElement.removeChild(parentEl);
        })
    }
}

const toggleHotListener = () => {
    const rootElement = document.getElementsByTagName('ul')[0];
    // Registriert Listener auf <ul>-TAG
    rootElement.addEventListener('click', (event) => {
        // Wenn angeklicktes Element ein class-Attribut namens heart-icon
        // besitzt, dann 
        if (event.target.className === 'heart-icon') {
            // Wenn das Elternelement des span-TAGs (also das <li>-TAG) 
            // ein class-Attribut mit dem Value hot besitzt, dann
            if (event.target.parentElement.getAttribute('class') === 'hot')
                // entferne class-Attribut vom selektierten <li>-Tag 
                event.target.parentElement.removeAttribute('class');
            else
                // oder füge class-Attribut von selektierten <li>-Tag hinzu
                event.target.parentElement.setAttribute('class', 'hot');
        }
    })
}

const createNewItemListener = () => {
    // Beschaffen des Input-Fields
    const inputField = document.getElementById('inputField');

    // Event keyup auf Input-Field setzen
    inputField.addEventListener('keyup', (event) => {

        // Wenn Enter auf der Tastatur gedrückt wurde, dann
        if (event.key === 'Enter') {

            // Erzeuge neues Listenelement
            const newElement = document.createElement('li');

            // Hänge an Listenelement einen neuen Textnode an, welcher
            // als Value den Wert des Input-Fields trägt
            newElement.appendChild(document.createTextNode(inputField.value));

            // Erzeuge neues <span>Element mit Herz-Icon
            const spanHeart = document.createElement('span');
            spanHeart.setAttribute('class', 'heart-icon');
            newElement.appendChild(spanHeart);
            spanHeart.innerHTML = '&#10084;';

            // Beschaffe das <ul>-TAG
            const rootElement = document.getElementsByTagName('ul')[0];

            // Eingängen des neuen <li>-TAGs
            rootElement.appendChild(newElement);

            // Lösche Input-Field
            inputField.value = '';
        }
    })
}

const inputFieldFocusListener = () => {
    // Event, wenn mit Maus ins Eingabefeld geklickt wird
    // Placeholder wird entfernt
    const inputField = document.getElementById('inputField');
    inputField.addEventListener('focus', (event) => {
        event.target.removeAttribute('placeholder');
    })

    // Event, wenn mit Maus ins nicht ins Eingabefeld klickt
    // Placeholder wird gesetzt
    inputField.addEventListener('focusout', (event) => {
        event.target.setAttribute('placeholder', "Enter new item and press enter to save...");
    })
}



deleteListener();
toggleHotListener();
createNewItemListener();
inputFieldFocusListener();
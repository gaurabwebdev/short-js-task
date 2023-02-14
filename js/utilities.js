const priceElement = function(elementId){
    const currentElement = document.getElementById(elementId);
    const currentText = currentElement.innerText;
    const currentPrice = parseFloat(currentText);
    return currentPrice;
}

const setPrice = function totalPrice(totalElement, newPrice){
    const currentTotal = document.getElementById(totalElement);
    currentTotal.innerText = newPrice;
}

const setStyle = function textCss (styleElement, styleClass){

    const textField = document.getElementById(styleElement);
        
        if(textField.classList.contains(styleClass) == false){

            textField.classList.add(styleClass);
            
        } else {
            textField.classList.remove(styleClass);
        }

}

// 30% Discount Function

document.getElementById('apply-btn-one').addEventListener('click', function(e){
    
    const firstPrice = priceElement('current-price-one');
    
    const discountPrice = firstPrice * (30/100);
    
    const afterDiscountPrice = firstPrice - discountPrice;
    
    setPrice('discOne', discountPrice);
    setPrice('current-total-one', afterDiscountPrice);
})
    
// 50% Discount Function
document.getElementById('apply-btn-two').addEventListener('click', function(e){

    const couponField = document.getElementById('coupon-code');

    if(couponField.value.toUpperCase() == 'DISC30'){
        e.target.removeAttribute('disabled');
        const firstPrice = priceElement('current-price-two');

        const discountPrice = firstPrice * (30/100);
        
        const afterDiscountPrice = firstPrice - discountPrice;

        setPrice('discTwo', discountPrice);
        setPrice('current-total-two', afterDiscountPrice);
    } else {
        return alert('Please Enter The Right Coupon Code.');
    }

})


document.getElementById('bold-icon').addEventListener('click', function(e){
    setStyle('text-field', 'font-bold');
})
document.getElementById('italic-icon').addEventListener('click', function(e){
    setStyle('text-field', 'italic');
})
document.getElementById('underline-icon').addEventListener('click', function(e){
    setStyle('text-field', 'underline');
    setStyle('text-field', 'underline-offset-2');
})
document.getElementById('left-align-icon').addEventListener('click', function(e){
    setStyle('text-field', 'text-left');
})
document.getElementById('center-align-icon').addEventListener('click', function(e){
    setStyle('text-field', 'text-center');
})
document.getElementById('right-align-icon').addEventListener('click', function(e){
    setStyle('text-field', 'text-right');
})
document.getElementById('justify-icon').addEventListener('click', function(e){
    setStyle('text-field', 'text-justify');
})

document.getElementById('fontSize').addEventListener('change', function(e){
    const textArea = document.getElementById('text-field');
    const font = e.target.value;
    textArea.style.fontSize = `${font}px`;
})
document.getElementById('fontColor').addEventListener('change', function(e){
    const textArea = document.getElementById('text-field');
    const color = e.target.value;
    textArea.style.color = color;
})
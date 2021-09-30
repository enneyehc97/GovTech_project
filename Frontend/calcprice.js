var priceArray = [0.0,0.0,0.0,0.0];

function calculatePrice(id){
    switch(id){
        case 1:
            priceArray[0] = 4.0*getQuantity(id);
            document.getElementById("specialtyTotal").innerHTML = priceArray[0].toFixed(2);
            break;
        case 2:
            priceArray[1] = 5.0*getQuantity(id);
            document.getElementById("BCTotal").innerHTML = priceArray[1].toFixed(2);
            break;
        case 3:
            priceArray[2] = 4.5*getQuantity(id);
            document.getElementById("GCTotal").innerHTML = priceArray[2].toFixed(2);
            break;
        case 4:
            priceArray[3] = 4.5*getQuantity(id);
            document.getElementById("BBQTotal").innerHTML = priceArray[3].toFixed(2);
            break;
    }
    calculateTotal();
}
function calculateTotal(){
    document.getElementById("totalPrice").innerHTML = (priceArray[0] + priceArray[1] + priceArray[2] + priceArray[3]).toFixed(2);
}
function getQuantity(id){
    switch(id){
        case 1:
            return document.getElementById("specialtyQuan").value;
        case 2:
            return document.getElementById("BCQuan").value;
        case 3:
            return document.getElementById("GCQuan").value;
        case 4:
            return document.getElementById("BBQQuan").value;
    }
}
function init(){
    for(i = 1; i <=4; i++){
        calculatePrice(i);
    }
    calculateTotal();
}
window.onload=init;

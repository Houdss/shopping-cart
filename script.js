var totalPrice = 0;

function updateQuantity(button, action) {
    var card = button.parentNode.parentNode;
    var quantitySpan = card.getElementsByClassName('quantity')[0];
    var quantity = parseInt(quantitySpan.textContent);
    var unitPrice = parseFloat(card.getElementsByClassName('unit-price')[0].textContent.replace(' $', ''));

    if (action === 'increase') {
        quantity++;
        totalPrice += unitPrice;
    } else if (action === 'decrease' && quantity > 0) {
        quantity--;
        totalPrice -= unitPrice;
    }

    quantitySpan.textContent = quantity;
    document.getElementsByClassName('total')[0].textContent = totalPrice + ' $';
}

function deleteItem(button) {
    var card = button.parentNode.parentNode;
    var quantitySpan = card.getElementsByClassName('quantity')[0];
    var quantity = parseInt(quantitySpan.textContent);
    var unitPrice = parseFloat(card.getElementsByClassName('unit-price')[0].textContent.replace(' $', ''));

    totalPrice -= unitPrice * quantity;
    quantitySpan.textContent = 0;
    document.getElementsByClassName('total')[0].textContent = totalPrice + ' $';
}

function handleLike(button) {
    if (button.style.color === 'red') {
        button.style.color = 'black';
    } else {
        button.style.color = 'red';
    }
}

var plusButtons = document.getElementsByClassName('fa-plus-circle');
for (var i = 0; i < plusButtons.length; i++) {
    plusButtons[i].onclick = function() {
        updateQuantity(this, 'increase');
    };
}

var minusButtons = document.getElementsByClassName('fa-minus-circle');
for (var i = 0; i < minusButtons.length; i++) {
    minusButtons[i].onclick = function() {
        updateQuantity(this, 'decrease');
    };
}

var deleteButtons = document.getElementsByClassName('fa-trash-alt');
for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function() {
        deleteItem(this);
    };
}

var likeButtons = document.getElementsByClassName('fa-heart');
for (var i = 0; i < likeButtons.length; i++) {
    likeButtons[i].onclick = function() {
        handleLike(this);
    };
}

document.getElementsByClassName('total')[0].textContent = totalPrice + ' $';

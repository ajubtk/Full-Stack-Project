$('.plus-cart').click(function(){
    var id = $(this).attr("pid").toString();
    var eml = this.parentNode.children[2];
    $.ajax({
        type:"GET",
        url:"/pluscart",
        data:{
            prod_id:id
        },
        success:function(data){
            eml.innerText = data.quantity;
            document.getElementById("amount").innerHTML = "Rs. " + parseFloat(data.amount).toFixed(1)
            document.getElementById("totalamount").style.fontWeight="bold";
            document.getElementById("totalamount").innerText = "Rs. " + parseFloat(data.totalamount).toFixed(1);
        }
    })
})


$('.minus-cart').click(function(){
    var id = $(this).attr("pid").toString();
    var eml = this.parentNode.children[2];
    $.ajax({
        type:"GET",
        url:"/minuscart",
        data:{
            prod_id:id
        },
        success:function(data){
            eml.innerText = data.quantity;
            document.getElementById("amount").innerHTML = "Rs. " + parseFloat(data.amount).toFixed(1)
            document.getElementById("totalamount").style.fontWeight="bold";
            document.getElementById("totalamount").innerText = "Rs. " + parseFloat(data.totalamount).toFixed(1)
        }
    })
})


$('.remove-cart').click(function(){
    var id = $(this).attr("pid").toString();
    var eml = this;
    $.ajax({
        type:"GET",
        url:"/removecart",
        data:{
            prod_id:id
        },
        success:function(data){
            document.getElementById("amount").innerHTML = "Rs. " + parseFloat(data.amount).toFixed(1);
            document.getElementById("totalamount").style.fontWeight="bold";
            document.getElementById("totalamount").innerHTML = "Rs. " + parseFloat(data.totalamount).toFixed(1);
            eml.parentNode.parentNode.parentNode.parentNode.remove();
        }
    })
})


document.addEventListener("DOMContentLoaded", function() {
        const cards = document.querySelectorAll('.address-card');
        let selectedCard = null;

        cards.forEach(card => {
            card.addEventListener('click', function() {
                if (selectedCard) {
                    selectedCard.classList.remove('selected');
                }
                card.classList.add('selected');
                selectedCard = card;
                document.getElementById('custid').value = card.getAttribute('data-id');
            });
        });
    });



function validateForm() {
            var termsCheck = document.getElementById('termsCheck');
            var addressSelected = document.getElementById('custid').value;
            var alertContainer = document.getElementById('alertContainer');
            var addressAlertContainer = document.getElementById('addressAlertContainer');

            // Remove existing alerts if present
            alertContainer.innerHTML = '';
            addressAlertContainer.innerHTML = '';

            if (!addressSelected) {
                var addressAlertDiv = document.createElement('div');
                addressAlertDiv.className = 'alert alert-danger d-flex align-items-center';
                addressAlertDiv.role = 'alert';

                // Create the icon element
                var icon1 = document.createElement('i');
                icon1.className = 'fas fa-exclamation-triangle me-2'; // FontAwesome exclamation triangle icon

                // Create the text node
                var addressAlertText = document.createTextNode('You must select an address for delivery.');

                // Append the icon and text to the alert div
                addressAlertDiv.appendChild(icon1);
                addressAlertDiv.appendChild(addressAlertText);

                // Append the alert div to the container
                addressAlertContainer.appendChild(addressAlertDiv);

                return false;
            }

            if (!termsCheck.checked) {
                var alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-danger d-flex align-items-center';
                alertDiv.role = 'alert';

                // Create the icon element
                var icon = document.createElement('i');
                icon.className = 'fas fa-exclamation-triangle me-2'; // FontAwesome exclamation triangle icon

                // Create the text node
                var alertText = document.createTextNode('You must agree to the terms and conditions before placing the order.');

                // Append the icon and text to the alert div
                alertDiv.appendChild(icon);
                alertDiv.appendChild(alertText);

                // Append the alert div to the container
                alertContainer.appendChild(alertDiv);

                return false;
            }

            return true;
}


$('.plus-wishlist').click(function(){
    var id=$(this).attr("pid").toString();
    $.ajax({
        type:"GET",
        url:"/pluswishlist",
        data: {
            prod_id:id
        },
        success:function(data){
            window.location.href = `http://localhost:8000/product-detail/${id}`
        }
    })
})


    $('.minus-wishlist').click(function(){
        var id=$(this).attr("pid").toString();
        $.ajax({
            type:"GET",
            url:"/minuswishlist",
            data: {
                prod_id:id
            },
            success:function(data){
                window.location.href = `http://localhost:8000/product-detail/${id}`
            }
        })
    })
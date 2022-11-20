var skills = document.querySelectorAll('.skill');

function selectAllSkills(){
    
    for(var i = 0; i < skills.length; i++){
        var s = skills[i];
        s.checked = true;
    }
}

function selectAllSkillsNot(){
        for(var i = 0; i < skills.length; i++){
        var s = skills[i];
        s.checked = false;
    }
}

function addProduct(n){
    var quantityField = document.querySelector('#item1Quantity');
    var priceField = document.querySelector('#item1Price');
    var quantity = parseInt((quantityField.innerHTML));

    quantity += n ;
    if (quantity < 0){quantity = 0;    }
    quantityField.innerHTML = quantity;
    priceField.innerHTML = quantity * 300;
}

document.querySelector('#wantall').addEventListener("click", function(evt){
    evt.preventDefault();
    selectAllSkills();
});

document.querySelector('#clearall').addEventListener("click", function(evt){
    evt.preventDefault();
    selectAllSkillsNot();
});

document.querySelector('#minusItem').addEventListener('click', function(evt){
    evt.preventDefault();
    addProduct(-1);
})

document.querySelector('#addItem').addEventListener('click', function(evt){
    evt.preventDefault();
    addProduct(1);
})
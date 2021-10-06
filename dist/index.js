const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        document.querySelector('.check').style.display = "block";
    }else {
        document.querySelector('.check').style.display = "none";
    }

})




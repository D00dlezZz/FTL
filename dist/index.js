const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        document.querySelector('.cargo__hidden').style.display = "flex";
    }else {
        document.querySelector('.cargo__hidden').style.display = "none";
    }

})




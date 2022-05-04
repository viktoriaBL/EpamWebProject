const select = document.getElementById('select');
const registrationImage=document.getElementById('attraction-img');

select.addEventListener('change', function(){
    // if(this.value === 'carrousel'){
    //     registrationImage.src="/image/carrousel.jpg";
    // }

    switch(true){
        case this.value === 'ferris-wheel':registrationImage.src="/image/ferris-wheel.jpg"
        break;
        case this.value === 'carrousel':registrationImage.src="/image/carrousel.jpg"
        break;
        case this.value === 'roller-coaster':registrationImage.src="/image/roller-coaster.jpg"
        break;
        case this.value === 'trampoline':registrationImage.src="/image/trampoline.jpg"
        break;
    }
});
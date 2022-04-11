const email = document.getElementById("masukan");
const tombol = document.querySelector('.tombol-notify');
const error = document.getElementById("error");

function ValidateEmail(mail){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        return (true)
    return (false)
}

tombol.addEventListener('click', function(){
    var mail = email.value;
    if(ValidateEmail(mail))
        error.style.visibility = "hidden";
    else
        error.style.visibility = "visible";
});



const logo = document.getElementsByClassName("icon-logo");
const ikon = document.querySelectorAll('#ikon');
for(let i=0; i<logo.length; i++){
    logo[i].addEventListener('mouseover', function(){
        this.style.backgroundColor = 'hsl(223, 87%, 63%)';
        ikon[i].style.fill = 'white';
    });
    logo[i].addEventListener('mouseout', function(){
        this.style.backgroundColor = 'white';
        ikon[i].style.fill = 'hsl(223, 87%, 63%)';
    });
}
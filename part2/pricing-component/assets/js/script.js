

duration =document.querySelector(".month"),
price =document.querySelector(".price .pricefix"),
switcher = document.querySelector(".switch"),
range =document.querySelector(".myrange");

switcher.onclick = function(){
    if(myCheckbox.checked==true){
        let priceInt = parseInt(price.textContent);
        price.textContent = `${(priceInt - (priceInt * .25)) * 12}`;
        duration.textContent = `/year`;
    }else{
        updatePrices();
        duration.textContent = `/month`;
    }
}

let pageViews = document.querySelector(".page-views span");
range.addEventListener('input', updatePrice);

function updatePrice()
{
    if(range.value==10){
        price.textContent= 8;
        pageViews.textContent = "10k";
    }
    if(range.value == 30){
   
        price.textContent = 12;
        pageViews.textContent = "50k";
    }

    if(range.value == 50){
 
        price.textContent = 16;
        pageViews.textContent = "100k";
    }

    if(range.value == 70){
        price.textContent = 24;
        pageViews.textContent = "500k";

    }

    if(range.value == 100){
        price.textContent = 36;
        pageViews.textContent = "1M";
    }

}
document.getElementById("back").oninput = function() {
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) '+this.value +'%, hsl(230, 100%, 99%) ' + this.value + '%, hsl(230, 100%, 99%) 100%)'
  };

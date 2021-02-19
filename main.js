const pythonButton = document.getElementById("pythonButton");
const bankingButton = document.getElementById("bankingButton");
const englishButton = document.getElementById("englishButton");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
pythonButton.addEventListener("click",function(){

    const python = document.getElementById("python");
        python.classList.remove("d-none")
})
bankingButton.addEventListener("click",function(){

    const banking = document.getElementById("banking");
        banking.classList.remove("d-none")
})
englishButton.addEventListener("click",function(){

    const language = document.getElementById("language");
        language.classList.remove("d-none")
})
let count = 1;
plusButton.addEventListener("click",function(){
    count++;
    const total = count*10;
    document.getElementById("tenTaka").innerText = total

})
minusButton.addEventListener("click",function(){
    count--
    const t=count*10;
    if(t>=0){
        document.getElementById("tenTaka").innerText = t;
    }
    else{
        alert("Error")
    }
})
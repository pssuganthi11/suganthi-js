const searchEl = document.getElementById("searchinput");
const cardEl = document.querySelectorAll(".card");

searchEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    console.log(searchEl.value);
    const seachinputval = searchEl.value.toLowerCase();
    const val= seachinputval.split(' ').join('');
    console.log(val);
    for(let i=0;i<cardEl.length;i++){
            // console.log(cardEl[i]);
            const divvalue = cardEl[i].innerText.toLowerCase().split(" ").join('')
            console.log(divvalue);
            console.log(val);
            //  if(val === divvalue){
            //     console.log(divvalue.innerHtml);
            //  }
            if(divvalue.includes(val)){
                cardEl[i].style.display = 'block'
            }
            else{
                cardEl[i].style.display = 'none'
            }

    }
  }
});

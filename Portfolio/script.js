function typeFx(target, strings) {
    var typingEffect = new Typed(target, {
        strings: strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1500
    })
}

function showConfetti() {
    confetti(
        {
            particleCount: 300,
            spread: 180
        }
    )
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



function db(){

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxOW4QP4hvr0V2hKPAgAHo-LH5hPLoTA0FFf4605RcEZHNb-oaOzZFFb3t9G5hDXnXIJA/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")


  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            msg.innerHTML = "Messege sent!, Thank you so much!"

            setTimeout(function(){
                msg.innerHTML = ""
            },3000)

            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
}







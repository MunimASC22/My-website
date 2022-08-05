let title = document.getElementById("title");

const word = "Munim Syed Presents The Lightning Spirit";

let time;

let l = 0;

function titleInterval() {
    console.log(l);
    
    if(l >= word.length - 1) {
        clearInterval(time);
    }
    title.innerHTML += word[l];
    l++;
}
time = setInterval(titleInterval, 150);

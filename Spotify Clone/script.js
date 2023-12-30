console.log("welcome to spotify");

let songIndex = 0;

let audioElement = new Audio('1.mp3');

let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');


let songs = [
    {songName:"Salam-e-Ishq" , filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq" , filePath:"songs/2.mp3" , coverPath:"covers/2.jpg"},
    {songName:"Salam-e-Ishq" , filePath:"songs/3.mp3" , coverPath:"covers/3.jpg"},
    {songName:"Salam-e-Ishq" , filePath:"songs/4.mp3" , coverPath:"covers/4.jpg"},
    {songName:"Salam-e-Ishq" , filePath:"songs/5.mp3" , coverPath:"covers/5.jpg"}
]



masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play;
    }
})

myProgressBar.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');

})


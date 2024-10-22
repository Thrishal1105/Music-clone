
const music = new Audio('audio/pushpa.mp3');
//  music.play();

const songs = [
    {
        id: "01",
        songName:'PushpaRaj<br><div class="subtitle">Pushpa2</div>',
        poster:"images/pushpa 1.jpg"
    },
    {
        id: '02',
        songName:'PushpaRaj<br><div class="subtitle">Pushpa2</div>',
        poster:"images/pushpa 1.jpg"
    },
    {
        id: "03",
        songName:'PushpaRaj<br><div class="subtitle">Pushpa2</div>',
        poster:"images/pushpa 1.jpg"
    },
    {
        id: "04",
        songName:'PushpaRaj<br><div class="subtitle">Pushpa2</div>',
        poster:"images/pushpa 1.jpg"
    },
    {
        id: "05",
        songName:'PushpaRaj<br><div class="subtitle">Pushpa2</div>',
        poster:"images/pushpa 1.jpg"
    },
    {
        id: "06",
        songName:'PushpaRaj<br><div class="subtitle">Pushpa2</div>',
        poster:"images/pushpa 1.jpg"
    },
    {
        id: "07",
        songName:'PushpaRaj<br><div class="subtitle">Pushpa2</div>',
        poster:"images/pushpa 1.jpg"
    },
    {
        id: "08",
        songName:'PushpaRaj<br><div class="subtitle">Pushpa2</div>',
        poster:"images/pushpa 1.jpg"
    }, {
        id: "09",
        songName:'PushpaRaj<br><div class="subtitle">Pushpa2</div>',
        poster:"images/pushpa 1.jpg"
    },
    {
        id: "10",
        songName:'PushpaRaj<br><div class="subtitle">Pushpa2</div>',
        poster:"images/pushpa 1.jpg"
    },
    {
        id: "11",
        songName:'PushpaRaj<br><div class="subtitle">Pushpa2</div>',
        poster:"images/pushpa 1.jpg"
    }
]






let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
});

pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330;
});
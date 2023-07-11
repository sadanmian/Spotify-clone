
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')

let songs = [
    {
        songName: "Warriyo - Mortals [NCS Release]",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg"
    },
    {
        songName: "Cielo - Huma-Huma",
        filePath: "songs/2.mp3",
        coverPath: "covers/2.jpg"
    },
    {
        songName: "DEAF KEV - Invincible [NCS Release]-320k",
        filePath: "songs/3.mp3",
        coverPath: "covers/3.jpg"
    },
    {
        songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
        filePath: "songs/4.mp3",
        coverPath: "covers/4.jpg"
    },
    {
        songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
        filePath: "songs/5.mp3",
        coverPath: "covers/5.jpg"
    },
    {
        songName: "Rabba - Salam-e-Ishq",
        filePath: "songs/2.mp3",
        coverPath: "covers/6.jpg"
    },
    {
        songName: "Sakhiyaan - Salam-e-Ishq",
        filePath: "songs/2.mp3",
        coverPath: "covers/7.jpg"
    },
    {
        songName: "Bhula Dena - Salam-e-Ishq",
        filePath: "songs/2.mp3",
        coverPath: "covers/8.jpg"
    },
    {
        songName: "Tumhari Kasam - Salam-e-Ishq",
        filePath: "songs/2.mp3",
        coverPath: "covers/9.jpg"
    },
    {
        songName: "Na Jaana - Salam-e-Ishq",
        filePath: "songs/4.mp3",
        coverPath: "covers/10.jpg"
    },
]

// Handle Play Pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause', 'fa-spin')
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause', 'fa-spin')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})


let song = document.querySelector("#song")
let progress = document.querySelector("#progress")
let ctrlplaynpause = document.querySelector("#ctrlplaynpause")
let play_button = document.querySelector(".play_button")
let sourcefile = document.querySelector("#sourcefile")
let next_song = document.querySelector(".next_song")
let prev_song = document.querySelector(".prev_song")
let musicimage = document.querySelector("#musicimage")
let backward_button = document.querySelector(".backward_button")
let Forward_button = document.querySelector(".Forward_button")
let explore_icon = document.querySelector(".explore_icon")
let container2 = document.querySelector(".container2")
let listsong = document.querySelectorAll("li")
let smallicon = document.querySelectorAll("#smallicon") 



let arr = ["Music/Nickelback - How You Remind Me.mp3","Music/Go Home - Adelen.mp3","Music/deep-future-garage-royalty-free-music-163081.mp3","Music/leonell-cassio-the-paranormal-is-real-ft-carrie-163742.mp3","Music/the-best-jazz-club-in-new-orleans-164472.mp3","Music/01 Ik Vaari Aa - Raabta (Arijit Singh) 190Kbps.mp3","Music/02 - Baat Ban Jaye - DownloadMing.LA.mp3","Music/02 Phir Bhi Tumko Chahunga (Arijit Singh) 190Kbps.mp3","Music/03 Socha Hai - Baadshaho (Jubin) 190Kbps.mp3","Music/12 Baarish - Atif Aslam (Half Girlfriend) 320Kbps.mp3","Music/Bom Diggy - Zack Knight 320Kbps.mp3","Music/Daav_Laga_Window_8_Full_Hindi_Song_Aagey_se_Right_Wap786_CoM.mp3","Music/David_Guetta_Little_Bad_Girl_Feat_Taio_Cruz_and_Ludacris_Radio_Edit.mp3","Music/Deewana Kar Raha Hai (Raaz 3).mp3","Music/Dekha_Hazaro_Dafaa_-_HindiMp3.Mobi.mp3","Music/Desi Thumka – Nouman Khalid ft. OCL {G@R!$H}.mp3","Music/Down - Jay Sean (DJJOhAL.Com).mp3","Music/Enrique Iglesias - I Like It.mp3","Music/Enrique Iglesias, Usher - Dirty Dancer ft. Lil Wayne.mp3","Music/In The End.mp3","Music/Kehta Hai Pal Pal (Armaan Malik) - 320Kbps [Songs.PK].mp3","Music/Lets_Celebrate_(Imran_Khan)(www.SongPK.mobi).mp3","Music/Linkin Park New Divide [Songsx.Pk].mp3","Music/Luis Fonsi Feat. Daddy Yankee - Despacito (Mp3Goo.com).mp3","Music/Mercy-(Mr-Jatt.com).mp3","Music/muzmo_ru_Linkin_Park_-_What_I039ve_done_390067.mp3","Music/Naah - Harrdy Sandhu (DjPunjab.Com).mp3","Music/-Pitbull - Rain Over Me ft. Marc Anthony-- - YouTube.mp3","Music/Qismat-(SwagyJatt.CoM).mp3","Music/Rockabye_Clean_Bandit_Feat_Sean_Paul_320KbpsBossMirchi_In.mp3","Music/Suit Suit (Hindi Medium) - Arjun (DjPunjab.Com).mp3","Music/Sun Re Sajaniya (Ali Zafar).mp3"]

let songlist = Math.floor(Math.random()*arr.length)
song.src = arr[songlist]
console.log(`${songlist},this is random song value`)

song.onloadedmetadata = function (){
    progress.max = song.duration
    progress.value = song.currentTime
}

song.addEventListener("ended", () => {
    songlist++
    document.querySelector("#song").src = arr[songlist]
    song.load()
    if(songlist >= arr.length){
        songlist = 0
    }
    song.play()
    console.log(`${songlist},this is song ended value`)
})

play_button.addEventListener("click", () => {
    if(ctrlplaynpause.classList.contains("fa-pause")){
        song.pause()
        ctrlplaynpause.classList.add("fa-play")
        ctrlplaynpause.classList.remove("fa-pause")
        musicimage.classList.add("imagepic")
        musicimage.classList.remove("imgscale")
    }
    else{
        song.play()
        ctrlplaynpause.classList.remove("fa-play")
        ctrlplaynpause.classList.add("fa-pause")
        musicimage.classList.add("imgscale")
        musicimage.classList.remove("imagepic")
    }
})

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime
    },500)
}
progress.onchange = function(){
    song.play()
    song.currentTime = progress.value
    ctrlplaynpause.classList.remove("fa-play")
    ctrlplaynpause.classList.add("fa-pause")
    musicimage.classList.remove("imagepic")
    musicimage.classList.add("imgscale")
}

next_song.addEventListener("click",() => {
    if(songlist+1 <= arr.length-1){
        songlist = songlist+1
        song.src = arr[songlist]
        song.load()
        if(ctrlplaynpause.classList.contains("fa-pause")){
            song.play()
        }
        console.log(`${songlist},this is next song value`)
    }
})

prev_song.addEventListener("click", () => {
    if(songlist-1 >= 0){
        songlist = songlist-1
        song.src = arr[songlist]
        song.load()
        if(ctrlplaynpause.classList.contains("fa-pause")){
            song.play()
        }
        console.log(`${songlist},this is next song value`)
    }
})

backward_button.addEventListener("click", () => {
    song.currentTime -= 7
    
})

Forward_button.addEventListener("click", () => {
    song.currentTime = song.currentTime + 10
})

explore_icon.addEventListener("click", () =>{
    if(container2.style.display === "block"){
        container2.style.display = "none"
    }else{
        container2.style.display = "block"
        container2.classList.add("swing-left-fwd")
    }
    
})

listsong.forEach(function (songmusic,index){  
    setInterval(() => {
        if(index == songlist){
            listsong[index].classList.add("listplay")
            smallicon[index].style.display = "inline-block"
        }
        else{
            listsong[index].classList.remove("listplay")
            smallicon[index].style.display = "none"
        }
    },500)
})


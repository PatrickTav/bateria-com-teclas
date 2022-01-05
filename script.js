// document.body/ ele significa que esta pegando o site inteiro.
document.body.addEventListener('keyup',(e)=>{
    playsound(e.code.toLowerCase())
})
document.querySelector('.composer button'),addEventListener('click', ()=>{
    let song =  document.querySelector('#input').value
    if(song!== ""){
        let songArray = song.split('')
        playCompose(songArray)
    }
})



function playsound(sound){
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    
    if(audioElement){
        audioElement.currentTime = 0
        audioElement.play()

    }
    if(keyElement){
        keyElement.classList.add('active')
        setTimeout(()=>{
            keyElement.classList.remove('active')
        },300)
    }
}

function playCompose(songArray){
    let wait = 0
   
    for(let songItem of songArray){
        setTimeout(()=>{
            playsound(`key${songItem}`)
        },wait)

        wait += 250
        
    }
}
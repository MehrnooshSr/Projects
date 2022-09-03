const textArea = document.querySelector("#text")
let voiceList = document.querySelector("#voice")
let speechBtn = document/querySelector('.submit')

let synth = SpeechSynthesisVoice
let isSpeaking = tru

function voiceSpeech(){
    for (const voice of synth.getvoice()) {
        let option = document.createElement('option')
        option.text = voice.name
        voiceList.add(option)
        console.log(option)
    }
}

synth.addEventListener('voiceChanged', voiceSpeech)

function textToSpeech(text){
    let utternance = new  SpeechSynthesisUtterance(text)
    for (const voice of synth.getvoice()) {
        if (voice.name === voiceList.value){
            utternance.voice = voice
        }
    }
    speechSynthesis.speak (utternance)
}
speechBtn.addEventListener ('click', (e) => {
    e.preventDefault()
    if (textarea.value != '') {
       if (!synth. speaking) {
         texttospeech(textarea.value)
       }
    if (textarea.value. length > 80) {
        if (isSpeaking){
        synth.resume ()
        isSpeaking = false
        speechBtn.innerHTML = 'Pause Speech'
        } else {
          synth.pause()
          isSpeaking = true
          speechBtn.innerHTML = 'Resume Speech'
        }
        setInterval(() =>{
        if (!synth.speaking && !isSpeaking) {
            isSpeaking = true
            speechBtn.innerHTML = 'Convert To Speech'
        }
    })
    }else {
    speechBtn.innerHTML = 'Convert To Speech'
      }
    }
})
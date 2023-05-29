export default function (){

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const forest = new Audio("https://github.com/gabryelcosta/sons-projeto/blob/main/Floresta.wav?raw=true")
const rain = new Audio("sound/Chuva.wav")
const coffeshop = new Audio("https://github.com/gabryelcosta/sons-projeto/blob/main/Cafeteria.wav?raw=true")
const fireplace = new Audio("https://github.com/gabryelcosta/sons-projeto/blob/main/Lareira.wav?raw=true")

let forestvol = document.querySelector('#forestvol')
let rainvol = document.querySelector('#rainvol')
let coffeshopvol = document.querySelector('#coffeshopvol')
let fireplacevol = document.querySelector('#fireplacevol')

  function pressButton(){
    buttonPressAudio.play()
  }

  function timeEnd(){
    kitchenTimer.play()
  }

  function forestButtonPlay(){
    forest.play()
    rain.pause()
    coffeshop.pause()
    fireplace.pause()
    forest.loop
  }

  function forestButtonPause(){
    forest.pause()
  }

  function rainButtonPlay(){
    rain.play()
    forest.pause()
    coffeshop.pause()
    fireplace.pause()
    rain.loop
  }

  function rainButtonPause(){
    rain.pause()
  }

  function coffeshopButtonPlay(){
    coffeshop.play()
    forest.pause()
    rain.pause()
    fireplace.pause()
    coffeshop.loop
  }

  function coffeshopButtonPause(){
    coffeshop.pause()
  }

  function fireplaceButtonPlay(){
    fireplace.play()
    forest.pause()
    rain.pause()
    coffeshop.pause()
    fireplace.loop
  }

    function fireplaceButtonPause(){
    fireplace.pause()
  }

  function forestVol(){
    forest.volume = forestvol.value;
  }

  function rainVol(){
    rain.volume = rainvol.value;
  }

  function coffeshopVol(){
    coffeshop.volume = coffeshopvol.value;
  }

  function fireplaceVol(){
    fireplace.volume = fireplacevol.value;
  }


  return {
    pressButton,
    timeEnd,
    forestButtonPlay,
    forestButtonPause,
    rainButtonPlay,
    rainButtonPause,
    coffeshopButtonPlay,
    coffeshopButtonPause,
    fireplaceButtonPlay,
    fireplaceButtonPause,
    forestVol,
    rainVol,
    coffeshopVol,
    fireplaceVol
  }
}
import Sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}){
let minutes = Number(minutesDisplay.textContent)
let timerTimeout

function updateDisplay(newMinutes, seconds){
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function reset(){
  minutes = 0
  updateDisplay(0, 0)
  clearTimeout(timerTimeout)
}

function countDown(){
  timerTimeout = setTimeout(function(){
  let seconds = Number(secondsDisplay.textContent)
  let minutes = Number(minutesDisplay.textContent)
  let isFinished = minutes <=0 && seconds <=0

  updateDisplay(minutes, 0)

  if (isFinished){
    resetControls()
    updateDisplay()
    Sounds().timeEnd()
    return
  }
  if (seconds <= 0){
    seconds = 60
    --minutes
  }
  updateDisplay(minutes, String(seconds-1))
  countDown()
}, 1000)}

function hold(){
  clearTimeout(timerTimeout)
}

function updateMinutes(newMinutes){
  minutes = newMinutes
}

function addFiveMinutes(){
  minutes = minutes+=5
  updateDisplay(minutes)
}

function decreaseFiveMinutes(){
  minutes = minutes-=5
  updateDisplay(minutes)
  if(minutes <=0)
  {
    resetControls()
    reset()
    return
  }
}
  return {
    countDown,
    hold,
    updateMinutes,
    addFiveMinutes,
    reset,
    decreaseFiveMinutes
  }
}
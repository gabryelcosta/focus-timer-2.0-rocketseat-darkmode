import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonDecrease,
  buttonForestOn,
  buttonForestOff,
  buttonRainOn,
  buttonRainOff,
  buttonCoffeshopOff,
  buttonCoffeshopOn,
  buttonFireplaceOff,
  buttonFireplaceOn,
  buttonDay,
  buttonNight,
  buttonRangeForest,
  buttonRangeRain,
  buttonRangeCoffe,
  buttonRangeFire
} from "./elements.js"

export default function ({controls, timer, sound})
{
buttonPlay.addEventListener('click', function(){
  controls.play()
  timer.countDown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonAdd.addEventListener('click', function(){
  timer.addFiveMinutes()
  sound.pressButton()
})

buttonDecrease.addEventListener('click', function(){
  timer.decreaseFiveMinutes()
  sound.pressButton()
})

buttonForestOff.addEventListener('click', function(){
  controls.forestOff()
  sound.forestButtonPlay()
  sound.pressButton()
})

buttonForestOn.addEventListener('click', function(){
  controls.forestOn()
  sound.forestButtonPause()
  sound.pressButton()
})


buttonRainOff.addEventListener('click', function(){
  controls.rainOff()
  sound.rainButtonPlay()
  sound.pressButton()
})

buttonRainOn.addEventListener('click', function(){
  controls.rainOn()
  sound.rainButtonPause()
  sound.pressButton()
})

buttonCoffeshopOff.addEventListener('click', function(){
  controls.coffeOff()
  sound.coffeshopButtonPlay()
  sound.pressButton()
})

buttonCoffeshopOn.addEventListener('click', function(){
  controls.coffeOn()
  sound.coffeshopButtonPause()
  sound.pressButton()
})

buttonFireplaceOff.addEventListener('click', function(){
  controls.fireOff()
  sound.fireplaceButtonPlay()
  sound.pressButton()
})

buttonFireplaceOn.addEventListener('click', function(){
  controls.fireOn()
  sound.fireplaceButtonPause()
  sound.pressButton()
})

buttonDay.addEventListener('click', function(){
  controls.modeDay()
})

buttonNight.addEventListener('click', function(){
  controls.modeNight()
})

buttonRangeForest.addEventListener('change', function(){
  sound.forestVol()
})

buttonRangeRain.addEventListener('change', function(){
  sound.rainVol()
})

buttonRangeCoffe.addEventListener('change', function(){
  sound.coffeshopVol()
})

buttonRangeFire.addEventListener('change', function(){
  sound.fireplaceVol()
})
}

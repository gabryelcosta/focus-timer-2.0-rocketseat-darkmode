export default function Controls({
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
  buttonDark
})

{
  function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function modeDay(){
    buttonDay.classList.add('hide')
    buttonNight.classList.remove('hide')
    buttonDark.classList.add('darkmode')
    buttonPlay.classList.add('darkmodebutton')
    buttonPause.classList.add('darkmodebutton')
    buttonStop.classList.add('darkmodebutton')
    buttonAdd.classList.add('darkmodebutton')
    buttonDecrease.classList.add('darkmodebutton')
    buttonFireplaceOff.classList.add('darkmodebutton')
    buttonForestOff.classList.add('darkmodebutton')
    buttonCoffeshopOff.classList.add('darkmodebutton')
    buttonRainOff.classList.add('darkmodebutton')
    buttonFireplaceOn.classList.add('darkmodebutton')
    buttonForestOn.classList.add('darkmodebutton')
    buttonCoffeshopOn.classList.add('darkmodebutton')
    buttonRainOn.classList.add('darkmodebutton')
  }

  function modeNight(){
    buttonNight.classList.add('hide')
    buttonDay.classList.remove('hide')
    buttonDark.classList.remove('darkmode')
    buttonPlay.classList.remove('darkmodebutton')
    buttonPause.classList.remove('darkmodebutton')
    buttonStop.classList.remove('darkmodebutton')
    buttonAdd.classList.remove('darkmodebutton')
    buttonDecrease.classList.remove('darkmodebutton')
    buttonFireplaceOff.classList.remove('darkmodebutton')
    buttonForestOff.classList.remove('darkmodebutton')
    buttonCoffeshopOff.classList.remove('darkmodebutton')
    buttonRainOff.classList.remove('darkmodebutton')
    buttonFireplaceOn.classList.remove('darkmodebutton')
    buttonForestOn.classList.remove('darkmodebutton')
    buttonCoffeshopOn.classList.remove('darkmodebutton')
    buttonRainOn.classList.remove('darkmodebutton')
  }

  function forestOff(){
    buttonForestOff.classList.add('hide')
    buttonForestOn.classList.remove('hide')
    buttonRainOn.classList.add('hide')
    buttonRainOff.classList.remove('hide')
    buttonCoffeshopOn.classList.add('hide')
    buttonCoffeshopOff.classList.remove('hide')
    buttonFireplaceOn.classList.add('hide')
    buttonFireplaceOff.classList.remove('hide')
  }

  function forestOn() {
    buttonForestOff.classList.remove('hide')
    buttonForestOn.classList.add('hide')
  }

  function rainOff(){
    buttonRainOn.classList.remove('hide')
    buttonRainOff.classList.add('hide')
    buttonForestOn.classList.add('hide')
    buttonForestOff.classList.remove('hide')
    buttonCoffeshopOn.classList.add('hide')
    buttonCoffeshopOff.classList.remove('hide')
    buttonFireplaceOn.classList.add('hide')
    buttonFireplaceOff.classList.remove('hide')
  }

  function rainOn() {
    buttonRainOff.classList.remove('hide')
    buttonRainOn.classList.add('hide')
  }

  function coffeOff(){
    buttonCoffeshopOn.classList.remove('hide')
    buttonCoffeshopOff.classList.add('hide')
    buttonRainOn.classList.add('hide')
    buttonRainOff.classList.remove('hide')
    buttonForestOn.classList.add('hide')
    buttonForestOff.classList.remove('hide')
    buttonFireplaceOn.classList.add('hide')
    buttonFireplaceOff.classList.remove('hide')
  }

  function coffeOn() {
    buttonCoffeshopOff.classList.remove('hide')
    buttonCoffeshopOn.classList.add('hide')
  }

  function fireOff(){
    buttonFireplaceOn.classList.remove('hide')
    buttonFireplaceOff.classList.add('hide')
    buttonCoffeshopOn.classList.add('hide')
    buttonCoffeshopOff.classList.remove('hide')
    buttonRainOn.classList.add('hide')
    buttonRainOff.classList.remove('hide')
    buttonForestOn.classList.add('hide')
    buttonForestOff.classList.remove('hide')
  }

  function fireOn(){
    buttonFireplaceOff.classList.remove('hide')
    buttonFireplaceOn.classList.add('hide')
  }

  return {
    play,
    pause,
    reset,
    modeDay,
    modeNight,
    forestOn,
    forestOff,
    rainOff,
    rainOn,
    coffeOff,
    coffeOn,
    fireOff,
    fireOn
  }
}
import Timer from "./timer.js"
import Controls from "./controls.js"
import Sound from "./sounds.js"
import Events from "./events.js"
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
  buttonDark,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const controls = Controls ({
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

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})

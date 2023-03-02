import { FunctionComponent, useEffect, useState } from "react";
import './AgeSlider.scss'

export interface AgeSliderProps {
  rotate: number
}

export const AgeSlider: FunctionComponent<AgeSliderProps> = ({
  rotate
}) => {
  const minValue = 1
  const maxValue = 100
  const maxVelocity = 2
  
  const [value, setValue] = useState(50)
  const [velocity, setVelocity] = useState(1)

  const handleValue = () => {
    if(velocity === 0) return
    else if (velocity > 0 && value < maxValue) {
      console.log('velocity: ' + velocity)
      setValue(value + (value*velocity))
    }
    else if (velocity < 0 && value > minValue) {
      console.log('velocity: ' + velocity)
      setValue(value + (value*velocity))
    }
  }

  useEffect(() => {
    setVelocity(rotate/360)    
    handleValue()
    console.log('value: ' + value)
  }, [rotate])

  return (
    <div className='age-slider-container'>
      <input
        value={value}
        type="range"
        min={minValue}
        max={maxValue}
      />
    </div>
  )
}

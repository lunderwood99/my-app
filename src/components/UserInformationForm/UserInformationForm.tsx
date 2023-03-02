import { FunctionComponent, useState } from "react";
import { motion } from "framer-motion";

import './UserInformationForm.scss'

import { AgeSlider } from "../AgeSlider/AgeSlider";
import { RotateSlider } from "../RotateSlider/RotateSlider";

export interface UserInformationFormProps {

}

export const UserInformationForm:FunctionComponent<UserInformationFormProps> = () => {
  const [rotate, setRotate] = useState(0)


  return (
    <div className="user-information-form__container">
      <div className="user-information-form__top-body">
        <motion.div
          className="box"
          animate={{ rotate }}
          transition={{ type: "spring" }}
        >
          <AgeSlider rotate={rotate}/>
        </motion.div>
      </div>
      <div>
        <RotateSlider value={rotate} set={setRotate}>
          Rotate
        </RotateSlider>
      </div>
    </div>
  )
}
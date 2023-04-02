/**
 * 
 * @abstract 
 * Display estimated take home earnings per state in 
 * US considering current income tax
 * 
 * User Input Params
 * @params earnings
 * @params state
 * 
 * Display Params
 * @params estimationsUI
 * 
 * @returns
 * 
 */

import { useState, FC } from "react"
import { CalculatorInput, EstimationTuple } from "../types/containerTypes"
import { 
  ProxyComponentProps
} from "../types/viewTypes"

export const ProxyComponent: FC<ProxyComponentProps> = ({earningsEstimator, earningInState}) => {
  const [calcInput, setCalcInput] = useState<CalculatorInput | {}>({})
  const [estimationsUI, setEstimationsUI] = useState< EstimationTuple| null>() //Display info we get earnings back from proxy
  
  //Use Debounce function to lessen re-renders
  //Use useCallback to update state

  return (
    <section className="proxy-container">
      <form action="">
        <input type="number" name="earnings" />
        <input type="text" />
      </form>
      <button onClick={() => earningsEstimator(calcInput)}>Click to Estimate</button>
    </section>
  )
}
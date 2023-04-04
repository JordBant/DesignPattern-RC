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
 * @params [Computed earnings, US State Earnings were calculated for]
 * 
 * @returns 1 to 2 JSX.Elements
 * 
 */

import { useState, useCallback, FC, ChangeEvent } from "react"
import { CalculatorInput, EstimationTuple } from "../types/containerTypes"
import { ProxyComponentProps } from "../types/viewTypes"
import { useDebounce } from "../utils/hooks"

export const ProxyComponent: FC<ProxyComponentProps> = ({earningsEstimator, earningInState}) => {
  const [estimationsUI, setEstimationsUI] = useState<EstimationTuple>([...earningInState]) //To display info we get earnings back from proxy
  const [calcInput, setCalcInput] = useState<CalculatorInput>({
    earningsInput: 0,
    stateUS: ''
  })
  
  const calcInputKeysArr = Object.keys(calcInput)
  const [ destructEarnings, destructStateUS ] = calcInputKeysArr
  
  const elevateInputData = useCallback((e: { preventDefault: () => void }) => {
    e.preventDefault()
    earningsEstimator(calcInput)
  }, [calcInput])

  const handleEarningsInput = (e: ChangeEvent<HTMLInputElement>) => handleInputUpdate(e, destructEarnings)
  const handleStateInput = (e: ChangeEvent<HTMLInputElement>) => handleInputUpdate(e, destructStateUS)

  function handleInputUpdate(e: ChangeEvent<HTMLInputElement>, stateProp: string): null | void {
    if(!calcInputKeysArr.includes(stateProp)) return null
    const debouncedInput = useDebounce(e?.target?.value)
    
    setCalcInput({
      [stateProp]: debouncedInput,
      ...calcInput
    })
  }

  return (
    <section className="proxy-container">
      <form action="">
        <input name="earnings" type="number" onChange={handleEarningsInput}/>
        <input name="state" type="text" onChange={handleStateInput}/>
      </form>
      <button onClick={elevateInputData}>Click to Estimate</button>
    </section>
  )
}
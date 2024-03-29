import { ProxyComponent } from "../../views/ProxyComponent"
import { FC, useState } from "react"

//UI acts as sender of info
import { CalculatorInput, EstimationTuple } from "../../types/containerTypes"

/**
 * 
 * Reflect sanitized results back to UI, notify UI of
 * invalid/valid tests of Form Input Validation
 * 
 */

const ProxyDP: FC =  (
  /**
   * True Container/Presentational design would be for some User-Persistent Component on APP.tsx 
   * to send its user-input respective to which section of the page the user is currently on
   */
) => {
  const [earningsForState, setEarningsProxy] = useState</** EstimationTuple */ []>([]) // Info to send into UI
  const calculateUserInputs = {
    get(target, prop, receive) {
      // GET state
      // GET income tax for that state 
      // Apply income tax for that salary
      const 
      return 
    },
    set(target, prop) {

    }
  } 

  // Executed by user UI
  const userProvidedInfo = (viewState: CalculatorInput): {} => {
    return new Proxy(viewState, calculateUserInputs)
  } 

  return (
    <ProxyComponent
      earningsEstimator = {userProvidedInfo}
      earningInState = {earningsForState}
    />
  )
}

export default ProxyDP
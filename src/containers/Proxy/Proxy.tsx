import { ProxyComponent } from "../../views/ProxyComponent"
import { useState } from "react"

//UI acts as data sender
import { CalculatorInput, EstimationTuple } from "../../types/containerTypes"

/**
 * 
 * Reflect sanitized results back to UI, notify UI of
 * invalid/valid tests of Form Input Validation
 * 
 */

type Props = {}

const ProxyDP = (props: Props) => {
  const [earningsProxy, setEarningsProxy] = useState<EstimationTuple>({}) // Info to send into UI
  const estimationsReady = (viewState: CalculatorInput): {} => {

  } // Executed by user UI

  return (
    <ProxyComponent
      earningsEstimator = {estimationsReady}
      earningInState = {earningsResult}
    />
  )
}

export default ProxyDP
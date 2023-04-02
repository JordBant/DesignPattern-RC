import { ProxyComponent } from "../../views/ProxyComponent"
import { useState } from "react"
import { CalculatorInput, EstimationTuple } from "../../types/containerTypes"

/**
 * 
 * Reflect sanitization results back to UI, notify UI of
 * passed/failed tests of Form Input Validation
 * 
 */

type Props = {}

const ProxyDP = (props: Props) => {
  const [earningsResult, setEarningsResult] = useState<EstimationTuple>({}) // Info to send into UI
  const estimationsReady = (viewState: CalculatorInput): {} => {} // Executed by user UI

  return (
    <ProxyComponent
      earningsEstimator = {estimationsReady}
      earningInState = {earningsResult}
    />
  )
}

export default ProxyDP
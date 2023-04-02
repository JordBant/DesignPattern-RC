import { InputForEstimation } from "../../types/containerTypes"
import { ProxyComponent } from "../../views/ProxyComponent"

/**
 * 
 * Reflect sanitization results back to UI, notify UI of
 * passed/failed tests of Form Input Validation
 * 
 */

type Props = {}

const ProxyDP = (props: Props) => {
  const estimationsReady = (viewState: InputForEstimation): {} //from UI

  return (
    <ProxyComponent
      earningsEstimator = {estimationsReady}
      earningInState = {}
    />
  )
}

export default ProxyDP
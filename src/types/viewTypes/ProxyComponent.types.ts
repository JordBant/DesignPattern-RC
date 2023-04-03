import { CalculatorInput, EstimationTuple } from "../containerTypes"

/**
 * @abstract 
 * View is expecting to accept a tuple it will then parse and display
 * 
 * View will also be pushing input up to parent container upon return of 
 * debounced value and click of button, for 
 * which state in UI will be reset to null 
 */

export type ProxyComponentProps = {
    earningsEstimator: (earningsInput: CalculatorInput) => {} //UI doesn't need to know the return... 
    earningInState: EstimationTuple
}
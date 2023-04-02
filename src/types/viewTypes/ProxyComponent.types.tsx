export type CalculatorInput = {
    earningsInput: EarningsInput
    stateUS: StateInput
}

export type EarningsInput = number | undefined
export type StateInput = string | undefined

export type EstimationUITuple = [StateInput, EarningsInput] //Better way to type assert this?

export type ProxyComponentProps = {
    earningsEstimator: (earningsInput: EarningsInput) => {} //UI doesn't need to know the return... 
    earningInState: EstimationUITuple
}
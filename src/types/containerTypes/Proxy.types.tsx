export type CalculatorInput = {
    earningsInput: EarningsInput
    stateUS: StateInput
}
export type EstimationTuple = [StateInput, EarningsInput]
export type EarningsInput = number | undefined
export type StateInput = string | undefined
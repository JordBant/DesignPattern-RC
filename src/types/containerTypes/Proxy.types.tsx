export type CalculatorInput = {
    earningsInput: EarningsInput
    stateUS: StateInput
}
export type EstimationTuple = [EarningsInput, StateInput]

export type EarningsInput = string | undefined

export type StateInput = string | undefined
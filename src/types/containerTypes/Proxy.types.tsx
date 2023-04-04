type Nullable<T> = T | null | undefined

export type CalculatorInput = {
    earningsInput: EarningsInput
    stateUS: StateInput
}
export type EstimationTuple = [EarningsInput, StateInput]

export type EarningsInput = Nullable<Number>

export type StateInput = Nullable<string>
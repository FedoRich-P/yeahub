// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
//
// interface CounterState {
// 	value: number
// }
//
// // Define the initial state using that type
// const initialState: CounterState = {
// 	value: 0,
// }
//
// export const counterSlice = createSlice({
// 	name: 'counter',
// 	// `createSlice` will infer the state type from the `initialState` argument
// 	initialState,
// 	reducers: {
// 	},
// })
//
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
//
// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
//
// export default counterSlice.reducer
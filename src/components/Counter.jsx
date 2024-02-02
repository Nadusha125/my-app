import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, showMessege } from "../redux/slices/counterSlice"



const Counter = () => {
     
    const count = useSelector ((state) => state.counter.value)
    const message = useSelector ((state) => state.counter.mess)
    const dispatch = useDispatch()

    const greeting = 'Hello'

    return (
        <>
        <h1>{count}</h1>
        <h2>{message}</h2>
        <button onClick={() => dispatch(increment())}>Increment
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement
        </button>
        <button onClick={() => dispatch(showMessege(greeting))}>Messege
        </button>
        </>
    )
}


export default Counter
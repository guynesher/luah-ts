import { useState } from "react"

import { useAppDispatch, useAppSelector } from "../store/hooks"
import styles from "./Counter.module.css" 
import {
  decrement,
  increment,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "../reducers/counterSlice"
import {
  setUser,
} from "../reducers/userSlice"
import { useNavigate } from "react-router-dom"
import ActionCard from "./ActionCard"

export const Counter = () => {
  const navigate=useNavigate()
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const status = useAppSelector(selectStatus)
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0
  const current=new Date()
  current.setHours(current.getHours() +3);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span aria-label="Count" className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={e => {
            setIncrementAmount(e.target.value)
          }}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(setUser({
            id: "",
            cognitoUserName: "",
            name: "Guy",
            surname: "Nesher",
            phone: "",
            email: "" ,
            picture: "",
            isAdmin: false,
            sessionStart: current.toString(),
            computerIP: "",
            address: {
              id: "",
              street: "",
              house: "",
              appartment: "",
              city: "",
              zipcode: "",
            } ,
            programs: [],
            cards: [] ,
            orders: [],
            recommendation: [],
            contact: [],
            userData: [],
          }))}
        >
          Set User
        </button>
        <button
          className={styles.asyncButton}
          disabled={status !== "idle"}
          onClick={() => dispatch(incrementAsync("12"))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue))
          }}
        >
          Add If Odd
        </button>
        <button
          className={styles.button}
          onClick={() => {
            navigate('/Login') 
          }}
        >
          goTo Loin
        </button>
      </div>
<ActionCard/>
    </div>
  )
}

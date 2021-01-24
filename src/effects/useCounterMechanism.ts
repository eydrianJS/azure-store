import { useState, useCallback } from 'react'
const INITIAL_COUNTER = 1

const useCounterMechanism = (maxCount: number, initilaCounter = INITIAL_COUNTER) => {
  const maxCounterToDisable = maxCount - 1
  const initialDisableIncrement = initilaCounter === maxCount
  const initialDisableDecrement = initilaCounter === INITIAL_COUNTER
  const [counter, setCouter] = useState<number>(initilaCounter)
  const [incrementDisable, setIncrementDisable] = useState<boolean>(initialDisableIncrement ? true : false)
  const [decrementDisable, setDecrementDisable] = useState<boolean>(initialDisableDecrement ? true : false)

  const handleIncremet = () => {
    if (counter === INITIAL_COUNTER) setDecrementDisable(false)

    if (maxCounterToDisable === counter) {
      setIncrementDisable(true)
    }
    if (maxCount > counter) {
      setCouter(counter + 1)
    } else {
      alert('Wybrałeś maksymalną ilość produktów')
    }
  }

  const handleDecrement = () => {
    if (counter === maxCount) setIncrementDisable(false)

    if (1 === counter - 1) {
      setDecrementDisable(true)
    }

    if (counter <= INITIAL_COUNTER) {
      alert('Liczba nie może być mniejsza niż 1')
    } else {
      setCouter(counter - 1)
    }
  }

  const handleChange = useCallback(
    (e) => {
      const inputCounter = parseInt(e.target.value)

      if (!inputCounter) {
        alert('Prosze wpisać liczbę')
      } else if (maxCount < inputCounter) {
        alert(`Maksymalna ilość dostępności produktu to ${maxCount}`)
        setCouter(maxCount)
      } else {
        setCouter(inputCounter)
      }
      if (counter === maxCount) setIncrementDisable(false)
      if (counter === INITIAL_COUNTER) setDecrementDisable(false)
      if (inputCounter >= maxCount) setIncrementDisable(true)
      if (inputCounter <= INITIAL_COUNTER) setDecrementDisable(true)
    },
    [maxCount, counter]
  )
  return {
    handleIncremet,
    handleDecrement,
    handleChange,
    incrementDisable,
    decrementDisable,
    counter
  }
}

export default useCounterMechanism

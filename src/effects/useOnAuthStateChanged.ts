import { useState, useEffect } from 'react'
import CurrentUser from '../interfaces/types/CurrentUserType'
import firebase from '../firebase'

const useOnAuthStateChanged = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: CurrentUser) => {
      user ? setCurrentUser(user) : setCurrentUser(null)
    })
  }, [])

  return currentUser
}

export default useOnAuthStateChanged

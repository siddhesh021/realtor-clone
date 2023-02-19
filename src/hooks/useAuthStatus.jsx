import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

export function useAuthStatus() {
    const [loggedIn, setloggedIn] = useState(false)
    const [checkingStatus, setcheckingStatus] = useState(true)

    useEffect(()=> {
        const auth = getAuth()
        // check if user authenticate or not using onAuthStateChanged
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setloggedIn(true)
            }
            setcheckingStatus(false)
        })
    }, []);
  return {loggedIn, checkingStatus};
}

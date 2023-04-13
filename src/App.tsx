import classes from './App.module.css'

import Search from './components/Search'
import User from './components/User'
import Error from './components/Error'
import Loading from './components/Loading'

import { useState } from 'react'

import { Userprops } from './types/user'

function App() {
  const [user, setUser] = useState<Userprops | null>(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)

    while(res.status === null) {
      setLoading(true)
    }

    if(res.status === 404) {
      setError(true)
      return;
    } else {
      setError(false)
    }

    const data = await res.json()
    console.log(data)
    

    const {avatar_url, login, bio, location, followers, following} = data

    const userData: Userprops = {
      avatar_url, 
      login, 
      bio,
      location,
      followers, 
      following,
    }

    setUser(userData)

  }
    return(
        <div className={classes.app}>
          <h1>Github Finder</h1>
          <Search loadUser={loadUser}/>
          {error && <Error />}
          {loading && <Loading />}
          {user && <User {...user}/>}
        </div>
    )
}

export default App
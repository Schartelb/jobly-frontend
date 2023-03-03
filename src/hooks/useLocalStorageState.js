import React, {useState, useEffect} from 'react'

const useLocalStorageState = (key, defaultValue)=>{
    const [state,setState] = useState(()=>{
      try{
        let value = JSON.parse(window.localStorage.getItem(key) || "" /*default values */)
        return value
      }catch (error){
        // console.log(`Local Storage Error: `, error)
      }
    })
    useEffect(()=>{
        window.localStorage.setItem(key,state)
    },[key,state])
    return [state,setState]
  }

  export default useLocalStorageState
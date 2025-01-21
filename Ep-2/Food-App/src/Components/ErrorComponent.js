import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErrorComponent = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div className='error'>
        <h1>Oops! Something went wrong!!</h1>  
        <p>{err.status} : {err.statusText}</p>
    </div>
  )
}

export default ErrorComponent
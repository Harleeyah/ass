import React from 'react';
import { Person } from '../Components/Person'
import { ClickCounter } from '../Components/ClickCounter'
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from '../Components/Fallback'

function ErrorScreen() {
    const person = {
      firstName:'Aliyah',
      lastName: 'Fasasi',
    }
  
    const errorHandler = (error, errorInfo) => {
      console.log('Logging', error, errorInfo)
    }
  
    return (
      <div className="App">
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
          <Person person={person}/>
          {/* <Person person={{}}/> */}
          <ClickCounter/>
       </ErrorBoundary>
        
      </div>
    )
  }  
export default ErrorScreen;
  
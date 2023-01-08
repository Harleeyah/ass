import React from 'react';
import { ClickCounter } from '../components/ClickCounter'
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from '../components/Fallback'

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
          <h1>HELLO {person.firstName.toUpperCase()} {person.lastName.toUpperCase()}</h1>
          {/* <Person person={{}}/> */}
          <ClickCounter/>
       </ErrorBoundary>
        
      </div>
    )
  }  
export default ErrorScreen;
  

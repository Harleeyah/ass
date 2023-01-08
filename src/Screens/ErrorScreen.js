import React from 'react';
import { ClickCounter } from '../Components/ClickCounter';
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from '../Components/Fallback';



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
          <div>
            <h1>HELLO {person.firstName.toUpperCase()} {person.lastName.toUpperCase()}</h1>
          </div>
          {/* <Person person={{}}/> */}
          <ClickCounter/>
       </ErrorBoundary>
        
      </div>
    )
  }  
export default ErrorScreen;
  

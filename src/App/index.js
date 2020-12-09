import React from 'react';
import './App.scss';


import { ContextProvider,}  from './../utilities/ContextProvider'
import Container from './../components/Container'

function App() {
  return (
    <div className="app">
      <ContextProvider>
        <Container />
      </ContextProvider>
    </div>
  );
}

export default App;

// import {CountProvider } from './../utilities/count-context'
// import Counter from './test.js'
// import CountDisplay from './test2.js'

// function App() {
//   return (
//     <div>
//       <CountProvider>
//         <CountDisplay />
//         <Counter />
//       </CountProvider>
//     </div>
//   )
// }

// export default App



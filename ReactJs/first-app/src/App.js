import React from 'react';
// import AllUserList from './components/AllUsersList';
import Test from './Test';


const App = () => {
  return (
    <div>
    {/* key is a special property in React */ }
      <Test key={1}/> 
      {/* <Test key={2}/>
      <Test key={3}/>
      <Test key={4}/>
      <Test key={5}/>
      <Test key={6}/>
      <Test key={7}/> */}

      {/* <AllUserList/> */}
    </div>
  );
};

export default App;

//     div
//   /     \ 
//  test  test


//  App
//  <if cond>  (loginTime < 10hr)
//     |
//    Home

//     |
//   Login
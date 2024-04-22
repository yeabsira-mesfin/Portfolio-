import React from 'react'

const App = () => {
  const name = 'Yeab'
  const x = 9;
  const y = 20;
  const names = ['Yeab','Yisu','John']
  const loggedIn = false
  const styles = {
    color: 'blue',
    fontSize: '33px'
  }
  
 
  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={styles}>Hello {name}</p>
      <p>The sum of {x} and {y} is {x + y}</p>
      <ul>
        {names.map((name,index)=>(
          <li key={index}>{name}</li>
        ))}
       
      </ul>
      {loggedIn ?  <h1>Hello Member</h1>:  <h1> Hello Guest</h1>}
    </>
  );
}

export default App
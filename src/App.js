import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [displayName, setDisplayName] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setDisplayName(true);
  }

  return (
    <div className="App">
     <h1 >Full Name Display</h1>
     <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='firstName'>First Name:</label>
        <input type='text' value={firstName} id='firstName' required onChange={(e)=>{setFirstName(e.target.value)}} />
      </div>
      
    <div>
      <label htmlFor='lastName'>Last Name:</label>
      <input type='text' value={lastName} id='lastName' required onChange={(e)=>{setLastName(e.target.value)}} />
    </div>
      

      <button type='submit'> Submit</button>
     </form>

     {displayName && <p>Full Name: {firstName} {lastName}</p>}
    </div>
  );
}

export default App;

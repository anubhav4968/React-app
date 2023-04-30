import logo from './logo.svg';
import './App.css';
import Hello  from './components/Hello';
// import Answer from './components/Answer';
import Answer from './components/Answer';
function App() {
let info = [
  {name : "Anubhav",place:"Kanpur"},
  {name : "Aprna",place:"Lucknow"},
  {name : "Abhishek",place:"Barilei"},
  {name : "Nilesh",place:"Delhi"},
  {name : "Renuka",place:"Delhi"}
]


  return (
    <div className="App">
      <Hello></Hello> 
      {info.map((user)=>(
          <Answer {...user}/>
      ))}
      
      
    </div>
  );
}

export default App;

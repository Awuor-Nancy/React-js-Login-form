
import './App.css';
import Login from './Login';
import Navbar from './Navbar';


const App = () =>{
 return(
      <div className="App">
    <Navbar />
    <Login />
        
    </div>
  );
}

export default App;

  // use effect to inctease value of num when trigerred 
  // useEffect(()=>{
  //   setNum(num+100);
  //   const [num,setNum] = useState(0);

  // },[]
  // <div>
  //     <p>{num}</p>
  //     <button 
  //     onClick={() =>{setNum(num+1)}}
  //     >Click me</button>

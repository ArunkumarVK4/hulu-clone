import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Results from './Components/Result/Result';
import Requests from './Components/Helper/Requests';


function App() {

  const [selectOption,setSelectOption] = useState(Requests.fetchTrending)

  return (
    <div className="App">
      <Header/>
      <Navbar 
      setSelectOption = {setSelectOption}
      />
      <Results 
      selectOption = {selectOption}
      />
    </div>
  );
}

export default App;

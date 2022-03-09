import logo from './logo.svg';
import './App.css';
import PersonInfo from './components/PersonInfo';

function App() {
  return (
    <div className="App">
      <PersonInfo personName = {"Doe, Jane"} Age ={"45"} haircolor = {"black"}></PersonInfo>
      <PersonInfo personName = {"Smith, John"} Age ={"88"} haircolor = {"brown"}></PersonInfo>
      <PersonInfo personName = {"Fillmore, Millard"} Age ={"50"} haircolor = {"brown"}></PersonInfo>
      <PersonInfo personName = {"Smith, Maria"} Age ={"62"} haircolor = {"brown"}></PersonInfo>
    </div>
  );
}

export default App;

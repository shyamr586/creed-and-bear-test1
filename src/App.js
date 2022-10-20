import logo from './logo.svg';
import './App.css';
import Edit from './components/Edit';

let dummy = [
  {
    id: 1,
    first_name: "First Name",
    last_name: "Last Name",
    email: "Email",
    avatar: "Avatar",
  },
];


function App() {
  return (
   <Edit dummy={dummy}/>
  );
}

export default App;

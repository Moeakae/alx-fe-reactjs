import ProfilePage from './components/ProfilePage';
import './App.css'

function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />

}

export default App;

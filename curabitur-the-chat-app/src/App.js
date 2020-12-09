import './App.css';
import Header from './Header/Header';
import SideBar from "./SideBar/SideBar";

function App() {
  return (
    <div className="app">

      <Header />
      
      <div className="app_body">
        <SideBar />
        {/* React Router - Chat Screen */}
      </div>
    </div>
  );
}

export default App;

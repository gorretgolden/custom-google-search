import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationContainer from './navigation/navigation';
//import './App.css';

import Home from "./pages/home/home";

function App() {
  return (
    <div className="app">
        <NavigationContainer>
          <Home/>
        </NavigationContainer>
    </div>
  );
}

export default App;
import './App.css';
import GoogleMap from './components/GoogleMap';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <Helmet>
        <script defer data-key="c9906c01-d01a-437c-8e14-17489a147e3f" src="https://widget.tochat.be/bundle.js"></script>  
      </Helmet>
      <GoogleMap />
    </div>
  );
}

export default App;

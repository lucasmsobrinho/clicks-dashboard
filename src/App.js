import './App.css';
import ClicksDataManager from './components/ClicksDataManager';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="main-container">
        <div className="logo-container">
          <p className="logotype-clicks">CLICKS</p>
          <p className="logotype-dashboard"> DASHBOARD</p>
        </div>
        <div className="content-container">
          <ClicksDataManager />
        </div>
      </div>
      <div className="footer">
        <Footer />  
      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import ReceiveWallet from "./components/receiveWallet/ReceiveWallet";
import SendWallet from "./components/sendWallet/SendWallet";
import Wallet from './components/wallet/Wallet';
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/send" element={<SendWallet />} />
        <Route path="/receive" element={<ReceiveWallet />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useState, useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ProductSelectionPage from './pages/ProductSelectionPage';
import PackageSelectionPage from "./pages/PackageSelectionPage";
import PriceSelectionPage from "./pages/PriceSelectionPage";
import StartCountdownPage from "./pages/StartCountdownPage";
import OrderReviewPage from "./pages/OrderReviewPage";
import GameResultPage from "./pages/GameResultPage";
import RankingPage from "./pages/RankingPage";
import ShippingPage from "./pages/ShippingPage";
import "./css/CommonStyles.css";

function App() {
  const [color, changeColor] = useState("#ffffff");

  useEffect(() => {
    document.title = "Cupify";
  }, []);

  return (
    <div className="App" id="main"  style={{ background: color }}>
      <Switch>
        <Route path='/' exact component={WelcomePage}/>
        <Route path='/cup-selection' component={ProductSelectionPage}  onClick={()=> changeColor("#96bf47")}/>
        <Route path='/package-selection' component={PackageSelectionPage}  onClick={()=> changeColor("#96bf47")}/>
        <Route path='/price-selection' component={PriceSelectionPage}/>
        <Route path='/start-countdown' component={StartCountdownPage}/>
        <Route path='/order-review' component={OrderReviewPage}/>
        <Route path='/game-result' component={GameResultPage}/>
        <Route path='/ranking' component={RankingPage}/>
        <Route path='/shipping' component={ShippingPage}/>
      </Switch>
    </div>
  );
}

export default App;

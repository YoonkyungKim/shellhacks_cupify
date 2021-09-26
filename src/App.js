import React, { useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ProductSelectionPage from './pages/ProductSelectionPage';
import PackageSelectionPage from "./pages/PackageSelectionPage";
import PriceSelectionPage from "./pages/PriceSelectionPage";
import StartCountdownPage from "./pages/StartCountdownPage";
import OrderReviewPage from "./pages/OrderReviewPage";
import GameResultPage from "./pages/GameResultPage";
import RankingPage from "./pages/RankingPage";

function App() {
  useEffect(() => {
    document.title = "Cupify";
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={WelcomePage}/>
        <Route path='/cup-selection' component={ProductSelectionPage}/>
        <Route path='/package-selection' component={PackageSelectionPage}/>
        <Route path='/price-selection' component={PriceSelectionPage}/>
        <Route path='/start-countdown' component={StartCountdownPage}/>
        <Route path='/order-review' component={OrderReviewPage}/>
        <Route path='/game-result' component={GameResultPage}/>
        <Route path='/ranking' component={RankingPage}/>
      </Switch>
    </div>
  );
}

export default App;

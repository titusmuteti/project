import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./Components/Footer";
import Reviews from "./pages/Reviews"


function App() {
  return (
    <>
    <Router>
    <NavBar />
      <Switch>
        <Route exact path={"/project"}>
         {<Home />}
        </Route>

        <Route exact path={"/products"} component={Products}>
          {<Products />}
        </Route> 

        <Route exact path={"/reviews"} component={Reviews}>
          {<Reviews />}
        </Route>
      
      </Switch>
    </Router>

    <Footer />
    </>
  )
}

export default App;

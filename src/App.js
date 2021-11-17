import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { Header } from "./Components";
import { Home, Cart } from "./pages";

import setPizzas from "./redux/actions/pizzas";

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, [])

  return (
    <div className="wrapper">
      <Header></Header>

      <div className="content">
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/cart" component={Cart}></Route>
      </div>
    </div>
  )
}

export default App;
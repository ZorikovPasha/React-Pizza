import React from "react";
import { useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from "../Components";

function Home() {

  const { items } = useSelector(({ pizzasReducer }) => {
    return {
      items: pizzasReducer.items,
    }
  });


  return (
    <div className="container">
      <div className="content__top">
        <Categories items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}></Categories>
        <SortPopup
          items={[
            { name: "популярности", type: "price" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphavet" },
          ]}
        ></SortPopup>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{items && items.map((obj) => <PizzaBlock key={obj.id} {...obj}></PizzaBlock>)}</div>
    </div>
  );
}

export default Home;

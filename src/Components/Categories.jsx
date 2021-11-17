import React from "react";

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = React.useState(null)
  
  const onSelectItem = (index) => {
    setActiveItem(index)
  }

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>

        {items && items.map((name, idx) => (
          <li className={activeItem === idx ? 'active' : ''} onClick={ () => onSelectItem(idx)} key={`${name}_${idx}`} >{name}</li>
        ))}
      </ul>
    </div>
  );
}
// 
export default Categories;

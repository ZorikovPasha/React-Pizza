import React from 'react'

function SortPopup({items}) {

  const [isPopupVisible, togglePopup] = React.useState(false)
  const [activeItem, setActiveItem] = React.useState(0)

  const sortRef = React.useRef(null)
  const activeLabel = items[activeItem].name

  const togglePopupVisibility = () => {
    togglePopup(!isPopupVisible)
  }

  const onSelectItem = (index) => {
    setActiveItem(index)
    togglePopup(false)
  }

  const handleOutsidePopupClick = (e) => {
    if ( !e.path.includes(sortRef.current) ) {
      togglePopup(false)
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsidePopupClick)
  }, [])

  return (
    <div ref={(ref) => sortRef.current = ref} className="sort">
      <div className="sort__label">
        <svg className={isPopupVisible ? 'rotated' : ''} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={togglePopupVisibility}>{activeLabel}</span>
      </div>

      {
        isPopupVisible && <div className="sort__popup">
          <ul>
            {items && items.map((obj, idx) => (
            <li className={activeItem === idx ? 'active' : ''} onClick={ () => onSelectItem(idx)} key={`${obj.type}_${idx}`} >{obj.name}</li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}

export default SortPopup
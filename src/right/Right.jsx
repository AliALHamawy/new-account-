import "./Right.css";

function Right() {
  return (
    <div className='right'>
      <ul>
        <li onClick={() => window.open("https://alialhamawy.github.io/portfolio/", "_blank")}>
          Portfolio
        </li>
        <li onClick={() => window.open("https://alialhamawy.github.io/calculator/", "_blank")}>
          Calc
        </li>
        <li onClick={() => window.open("https://alialhamawy.github.io/x-o-game/", "_blank")}>
          X - O Game
        </li>
        <li onClick={() => window.open("https://todo-list-3lz.pages.dev/", "_blank")}>
          To Do List
        </li>
        <li onClick={() => window.open("https://alialhamawy.github.io/Prodcut-Card/", "_blank")}>
          Product Card
        </li>
      </ul>
    </div>
  )
}

export default Right
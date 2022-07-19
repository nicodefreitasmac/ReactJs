import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar () {
    return (
      <nav>
        
        <h2>Tienda de Comidas</h2>
        
        <ul>
            <li>Comida</li>
            <li>Bebidas</li>
            <li>Tragos</li>
            <CartWidget />
        </ul>
        
      </nav>
    )
  }

export default NavBar
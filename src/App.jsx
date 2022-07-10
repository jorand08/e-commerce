import { Route, Routes } from "react-router-dom"
import CartScreen from "./componentes/Cart/CartScreen"
import HomeScreen from "./componentes/Home/HomeScreen"
import LoginScreen from "./componentes/Login/LoginScreen"
import ProductScreen from "./componentes/Products/ProductScreen"
import ProtectedRoutes from "./componentes/ProtectedRoutes"
import PurchasesScreen from "./componentes/Purchases/PurchasesScreen"
import FooterScreen from "./componentes/Shared/FooterScreen"
import HeaderScreen from "./componentes/Shared/HeaderScreen"

function App() {

  return (
    <div className="App">
      <HeaderScreen/>
      <main className="main">
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>

          <Route element={<ProtectedRoutes />}>
            <Route path="/cart" element={<CartScreen/>}/>
            <Route path="/purchases" element={<PurchasesScreen/>}/>

          </Route>
          <Route path="/product/:id" element={<ProductScreen/>}/>
        </Routes>
      </main>
      <FooterScreen />
    </div>
  )
}

export default App

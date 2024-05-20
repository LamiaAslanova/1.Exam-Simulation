import { RouterProvider } from "react-router"
import ROUTES from "./routes/routes"
import MainContext from "./context/context"
import { createBrowserRouter } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState(null)
  const [basketItems, setBasketItems] = useState(localStorage.getItem('basketItems')?JSON.parse(localStorage.getItem('basketItems')):[])

  useEffect(()=>{
    axios.get("http://localhost:8080/practise4")
    .then(res => {
      setData([...res.data])
    })
  }, [])

  useEffect(()=>{
    localStorage.setItem('basketItems', JSON.stringify(basketItems))
  }, [basketItems])

  const addToBasket = (item) => {
    const target = basketItems.find(x => x.item._id == item._id)
    if(!target){
      let newBasketItem = {
        item: item
      }
      setBasketItems([...basketItems, newBasketItem])
    }
  }

  const deleteFromBasket = (item) => {
      setBasketItems([...basketItems.filter(x => x.item._id !== item._id)])
  }

  const routes = createBrowserRouter(ROUTES)

  const contextData = {
    data, setData, addToBasket, basketItems, setBasketItems, deleteFromBasket, search, setSearch, sort, setSort
  }

  return (

    <>

      <MainContext.Provider value={contextData}>
        <RouterProvider router={routes} />
      </MainContext.Provider>

    </>
  )
}

export default App

import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Cards from '../../../components/site/Cards/Cards'
import { Helmet } from 'react-helmet'
import Carousel from '../../../components/site/Carousel/Carousel'

const Home = () => {
    const { data, setData, search, setSearch, sort, setSort } = useContext(MainContext)

    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Carousel/>
            <Cards cards={data.filter(x => x.title.toLowerCase().includes(search.toLowerCase())).sort((a, b) => {
          if (!sort) {
            return 0
          }
          else if (sort.asc == true) {
            return (a[sort.field] > b[sort.field]) ? 1 : ((b[sort.field] > a[sort.field]) ? -1 : 0)
          }
          else if (sort.asc == false) {
            return (a[sort.field] < b[sort.field]) ? 1 : ((b[sort.field] < a[sort.field]) ? -1 : 0)
          }
        })} />
        </>
    )
}

export default Home

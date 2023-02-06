import React, { Fragment,useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import { fetchProducts,searchDrink } from '../store/actions'
// import Loading from '../components/Loading'

const Food = () => {
    const {products,err,loading} = useSelector(state=> state.product)
    const dispatch = useDispatch()
    const [search,setSearch] = useState('')


    useEffect(()=>{
        dispatch(fetchProducts())

    },[dispatch])

    const Submit = (e)=>{
        e.preventDefault()
        dispatch(searchDrink(search))
        setSearch('')
    }

  return (
    <Fragment>
    <Navbar />
            <div className="search" id="search">
        <div className="container">
            <form className="form" onSubmit={Submit}>
                <div className="content">
                <div className="title">
                    <h2>Search Your Favorite Cocktail</h2>
                </div>
                <div className="input-control">
                    <input type="text" placeholder='Search for cocktails' onChange={e=> setSearch(e.target.value)} />
                    <button type="submit">Search</button>
                </div>
                </div>
            </form>
        </div>
    </div>
    {loading && <Loader />}

    {err && <div className="error"><h1>Sorry something wrong happened</h1><h2>Try refreshing and check your internet connection</h2></div>}
    {products && products.meals === null  && <div className="error"><h1>NO FOOD FOUND WITH THAT NAME. TRY A SINGLE LETTER OR ANOTHER WORD</h1></div> }
    <div className="cocktails">
        <div className="container">
        {products && products.meals && products.meals.map((drink)=>{
            return (
            <div className="card" key={drink.idMeal}>
                <div className="card-img">
                    <img src={drink.strMealThumb} alt={drink.idMeal}/>
                </div>
                <div className="card-body">
                    <h1>A1</h1>
                    <h2>{drink.strArea}</h2>
                    <h3>{drink.strAlcoholic}</h3>
                    <h4>{drink.strCategory}</h4>
                    <h5>{drink.strMeal}</h5>
                    <Link to={`/food/single/${drink.idMeal}`}>Details</Link>
                </div>
            </div>

            )
        })}
        </div>
        
    </div>

    <Footer />
    </Fragment>
  )
}

export default Food;
import React, { Fragment,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
import { fetchSingleProduct } from '../store/actions'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
// import Loading from '../components/Loading'

const SingleProduct = () => {

    const single = useSelector(state=> state.product.singlePro)
    const {singleError,loading} = useSelector(state=> state.product)
    const dispatch = useDispatch()
    // const {drinks} = single && single.drinks
    // const drink = drinks[0]
    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
        dispatch(fetchSingleProduct(id))

    },[dispatch,id])
    console.log(single)
  return (
    <Fragment>
    <Navbar />
            <div className="back-home">
        <div className="title">
            <Link to={`/food`}>Back Home</Link>
        </div>
    </div>
    {/* {loading && <Loading />} */}
    {loading && <Loader />}

    {singleError && <div className="error"><h1>Sorry something wrong happened</h1><h2>Try refreshing and check your internet connection</h2></div>}

    <div className="single-product">
    {single && single.meals && single.meals.map(drink=>{
        return (
        <div className="container" key={drink.idMeal}>
            <div className="card-img">
                <img src={drink.strMealThumb} alt={drink.idMeal} />
            </div>
            <div className="card-content">
                <div className="card-body">
                    <h3>Name : {drink.strDrink}</h3>
                    <h3>Category : {drink.strCategory}</h3>
                    <h3>Info : {drink.strAlcoholic}</h3>
                    <h3>Glass : {drink.strGlass}</h3> 
                    <h3>Instructons: <span>{drink.strInstructions}!</span></h3>
                    <h3>Ingredients :  {drink.strIngredient1} {drink.strIngredient2} {drink.strIngredient3}</h3>
                </div>
            </div>
        </div>)
    })}
    </div>
    <Footer />
    </Fragment>
  )
}

export default SingleProduct
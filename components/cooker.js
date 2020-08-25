import React from "react"

  

const SuperCooker = (props) => {
  const [currentCook, setCurrentCook] = React.useState(false)
  const {rawProduct,cookedProduct} = props
 
  const cookNow = ()=> setCurrentCook(true)

  return(
    <div>
      <h1 id="chicken">{currentCook ? cookedProduct : rawProduct }</h1>
      <button onClick={cookNow} disabled={currentCook}>{currentCook ? "Cooked" : "Cook the Product" }</button> 
    </div>
  )
}


export default SuperCooker 
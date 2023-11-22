import products from "../products"

const Pic=()=>{
    return(
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <img style={{    height: "100px",    width: "59px"}} src={products.URL} alt="Not Found"/>
        </div>
    )
}

export default Pic 
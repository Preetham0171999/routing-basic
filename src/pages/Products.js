import { Link } from "react-router-dom";

const Products=()=>{
    return<>
     <h1> The Products Page</h1>
     <ul>
        <li><Link to="/products/p1">P1</Link></li>
        <li><Link to="/products/p2">P2</Link></li>
        <li><Link to="/products/p3">P3</Link></li>
     </ul>
    
    </>
}
export default Products;
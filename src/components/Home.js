import { Link } from "react-router-dom";

export default function Home(){

    return (<div>
       <h1>
        <Link to="/articles"> All articles </Link>
        </h1> 
       <h1>
        <Link to="/topics"> Topics </Link>
        </h1> 

    </div>)
}
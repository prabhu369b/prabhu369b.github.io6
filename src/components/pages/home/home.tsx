import { Link } from "react-router-dom";


function Home(){
    return(
        <>
            <h1>Home</h1>
            <Link to={"/contact"}><button>Contact</button></Link>
        </>
    )
}
export default Home
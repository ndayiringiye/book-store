import { Link } from "react-router"

export const NavBar = () => {
  return (
    <div>
        <div>
            <h1>Book store</h1>
            <ul>
                 <Link to="/">home</Link>
                 <Link to="/create">create</Link>

            </ul>
        </div>
    </div>
  )
}

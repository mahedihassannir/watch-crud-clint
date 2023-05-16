import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <ul >
                    <Link to='/'>Home</Link>
                    <Link style={{ paddingLeft: "20px" }} to='/post'>post</Link>

                </ul>
            </nav>
        </div>
    );
};

export default Header;
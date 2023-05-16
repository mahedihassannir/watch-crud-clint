import { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Home = () => {

    let [data, Setdata] = useState([])

    useEffect(() => {


        fetch(`http://localhost:5000/user/`)
            .then(res => res.json())
            .then(data => Setdata(data))

    }, [])

    let handleDelete = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return (

        <div>
            <Header></Header>
            <div>
                {
                    data.map(res => (
                        <div key={res._id}


                        >

                            <div>
                                <div style={{ border: "10px solid red" }}>
                                    <h1>{res.name}</h1>
                                    <h1>{res.email}</h1>
                                    <h1>{res.mobile}</h1>
                                    <h1>{res.pass}</h1>
                                    <h1>{res.date}</h1>
                                    <div>
                                        <button onClick={() => handleDelete(res._id)}>X</button>
                                    </div>
                                    <div>
                                        <Link to={`checkout/${res._id}`}>
                                            <button>
                                                View DEtales
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default Home;
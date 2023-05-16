import { useLoaderData } from "react-router-dom";

const Detailes = () => {

    let res = useLoaderData()
    console.log(res);

    return (
        <div>
            <h1>{res.name}</h1>
            <h1>{res.mobile}</h1>
            <h1>{res.email}</h1>
            <h1>{res.date}</h1>

        </div>
    );
};

export default Detailes;
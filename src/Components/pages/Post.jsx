import { Link } from "react-router-dom";



const Post = () => {

    const handleFrom = (e) => {
        e.preventDefault()

        const form = e.target

        const name = form.name.value
        const email = form.email.value
        const pass = form.pass.value
        const date = form.date.value
        const mobile = form.mobile.value

        let total = { name, email, pass, mobile, date }
        console.log(total);

        fetch(`http://localhost:5000/user`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(total)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert("post done")
                }
            })


    }

    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
            </div>


            {/* here is teh from */}
            <div>
                <form onSubmit={handleFrom}>
                    <input name="name" style={{ padding: "20px 50px", border: "4px", borderBlockStyle: "dotted" }} placeholder="file the input" type="text" />
                    <br />
                    <input name="email" style={{ padding: "20px 50px", border: "4px", borderBlockStyle: "dotted" }} placeholder="file the input" type="text" />
                    <br />
                    <input name="pass" style={{ padding: "20px 50px", border: "4px", borderBlockStyle: "dotted" }} placeholder="file the input" type="text" />
                    <br />
                    <input name="mobile" style={{ padding: "20px 50px", border: "4px", borderBlockStyle: "dotted" }} placeholder="file the input" type="text" />
                    <br />
                    <input name="date" style={{ padding: "20px 50px", border: "4px", borderBlockStyle: "dotted" }} placeholder="file the input" type="date" />
                    <div>
                        <input type="submit" value="post" />
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Post;
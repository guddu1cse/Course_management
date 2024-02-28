import React ,{ useEffect} from "react";

import { Button , Container } from "reactstrap";

const Home=()=>{

    useEffect(()=>{
        document.title="Home";
    }, [])


    return (
        <div className="text-center">
                <h1>Demo Project</h1>
                <p>
                    Developed By Guddu Kumar (Backend) and Chirag Saurav (Frontend)
                </p>
                
                <Container>
                    <h3>Course App</h3>
                </Container>

        </div>
    );
}

export default Home;
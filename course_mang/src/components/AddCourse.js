import axios from "axios";
import react, { Fragment, useEffect, useState } from "react"
import { FormGroup , Form , Input, label, Container, Button } from "reactstrap"
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse=()=>{

    useEffect(()=>{
        document.title = "course";
    } , []);

    const [Course , setCourse] = useState({});
    const handleForm = (e) =>{
        
        postDataToServer(Course);
        e.preventDefault();
    };

    //creating function to post data on server
    const postDataToServer = (data)=>{
        axios.post(`${base_url}/course`,data).then(
           (response)=>{
                toast.success("course added !!")
           } ,
           (error)=>{
            toast.error("something went wrong please, try later")
           }
        )
    };


    return  (

        <Fragment>
            <Form onSubmit={handleForm}> 
                <h1 className="text-center">Fill Course Datails </h1>
                <FormGroup>
                    <label>Course Id</label>
                    <Input type="text" placeholder="Enter here" 
                    name="userId"
                    id="userId"
                    onChange={(e)=>{
                        setCourse({...Course , id: e.target.value});

                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Name</label>
                    <Input type="text" placeholder="Enter title here" id="title"
                    
                    onChange={(e)=>{
                        setCourse({...Course , title: e.target.value});

                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="description">course Description</label>
                    <Input type="textarea" placeholder="Enter Course Description Here" id="desc"
                    
                    onChange={(e)=>{
                        setCourse({...Course , disc: e.target.value});

                    }}/>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">add Course</Button>
                    <Button color="warning m-1" type="reset">Clear</Button>
                </Container>

            </Form>
        </Fragment>
    )
}

export default AddCourse;
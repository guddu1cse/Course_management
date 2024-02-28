import axios from "axios"
import { Button, CardBody, CardSubtitle, CardText, Container , Card} from "reactstrap"
import base_url from "../api/bootapi"
import { toast } from "react-toastify";

const Course = ({course , update}) =>{


    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/course/${id}`).then(
            (response) =>{
                toast.success("success !!");
                update(id);
            } ,

            (error)=>{
                toast.error("something went wrong , please try again !!");
            }
        )
    }

    return (
        
        <Card className="text-center m-1">
            <CardBody className="text-center ml-3 mr-3">
                <CardSubtitle>{course.title}</CardSubtitle>
                    <CardText>{course.disc}</CardText>
                    <Container className="text-center">
                        <Button color="success m-1" onClick={()=>{
                            deleteCourse(course.id);
                        }}>success</Button>
                    </Container>
            </CardBody>
        </Card>
    )
}

export default Course
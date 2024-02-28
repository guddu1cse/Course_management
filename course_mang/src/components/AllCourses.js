import react, { useState , useEffect} from "react"
import Course from "./Course"
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AllCourses=()=>{

    useEffect(()=>{
        document.title="all_Courses"
    }, []);
 //function to call server
    const getAllCoursesFromServer = () =>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                setCourses(response.data);
                toast.success("Data Successfully loaded !!");
            },
            (error)=>{
                toast.error("somrthing went wrong !!");
            }
        );

        
    };

   


    // calling loading function
    useEffect(()=>{
        
        getAllCoursesFromServer();

    }, [])


    const [courses , setCourses] = useState([])

    const updateCourses = (id)=>{
        setCourses(courses.filter((c)=> c.id != id));
    }

    return (
        <div>
            <h1>All Course</h1>
            <p>list of course are as follows</p>

            {
                courses.length>0 ? 
                courses.map((item) => <Course key={item.id} course={item} update={updateCourses}/> ): "No course"
            }
        </div>

    )
}

export default AllCourses;
package coursemanagement.course.controller;


import coursemanagement.course.entities.Course;
import coursemanagement.course.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class CourseController {

    @Autowired
    private CourseService courseService;

    @CrossOrigin
    @GetMapping(value="/courses" ,  headers="Accept=application/json")
    public ResponseEntity<List<Course>> getCourse() {

        return new ResponseEntity<>(courseService.getCourses() , HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/course/{id}")
    public ResponseEntity<Course> getCourse(@PathVariable String id) {
        Long Id;
        System.out.println("get function calling....");
        try {
            Course course = courseService.getCourse(Long.parseLong(id));
            return  new ResponseEntity<>(course , HttpStatus.OK);
        } catch (Exception e){
            Course course =Course.builder().title("this not a valid id").disc("please inter valid id").build();
            return new ResponseEntity<>(course , HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @CrossOrigin
    @PostMapping("/course")
    public ResponseEntity<Course> addCourse(@RequestBody Course course) {
        Course course1= courseService.addCourse(course);
        return  new ResponseEntity<>(course1 , HttpStatus.CREATED);
    }


    @CrossOrigin
    @DeleteMapping(value = "/course/{id}" , headers="Accept=application/json")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable long id ) {

        courseService.delete(id);
        return  new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin
    @PutMapping("/course/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable long id , @RequestBody  Course course){
        Course updatedCourse = courseService.update(id , course);
        return  new ResponseEntity<>(course , HttpStatus.OK);
    }


}
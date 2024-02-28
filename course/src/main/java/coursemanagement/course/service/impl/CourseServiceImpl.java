package coursemanagement.course.service.impl;

import coursemanagement.course.Repositories.CourseRepositories;
import coursemanagement.course.entities.Course;
import coursemanagement.course.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {



    @Autowired
    private CourseRepositories courseRepositories;



    @Override
    public List<Course> getCourses() {
        List<Course> courses = courseRepositories.findAll();
        return courses;
    }

    @Override
    public Course addCourse(Course course) {
        courseRepositories.save(course);
        return course;
    }

    @Override
    public Course getCourse(long id) {
        Course course =courseRepositories.findById(id).orElseThrow(()->new RuntimeException("Course not found for given id !!"));
        return course;

    }

    @Override
    public void delete(long id) {
        Course course =courseRepositories.findById(id).orElseThrow(()-> new RuntimeException("course not found for given id !!"));
        courseRepositories.delete(course);
    }

    @Override
    public Course update(long id, Course course) {

        Course course1 = courseRepositories.findById(id).orElseThrow(()-> new RuntimeException("course not found for given id !!"));
        course1.setTitle(course.getTitle());
        course1.setDisc(course.getDisc());

        courseRepositories.save(course1);
        return course1;
    }


}

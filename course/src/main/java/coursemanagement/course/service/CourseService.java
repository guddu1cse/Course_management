package coursemanagement.course.service;

import coursemanagement.course.entities.Course;

import java.util.List;

public interface CourseService {

    List<Course> getCourses();

    Course addCourse(Course course);

    Course getCourse(long id);
    void delete(long id);

    Course update(long id , Course course);

}

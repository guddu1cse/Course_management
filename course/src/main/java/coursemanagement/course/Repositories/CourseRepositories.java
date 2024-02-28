package coursemanagement.course.Repositories;

import coursemanagement.course.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepositories extends JpaRepository<Course , Long> {

    List<Course> findAll();
}

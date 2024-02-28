package coursemanagement.course.entities;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "bike_list")
public class Course {
    @Id
    private long id;
    private String title;
    private String disc;
}

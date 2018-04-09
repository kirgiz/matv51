package testob.com.app.repository;

import testob.com.app.domain.Thirdclassification;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.*;

/**
 * Spring Data JPA repository for the Thirdclassification entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ThirdclassificationRepository extends JpaRepository<Thirdclassification, Long> {

}

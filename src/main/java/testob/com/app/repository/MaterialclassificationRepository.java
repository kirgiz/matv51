package testob.com.app.repository;

import testob.com.app.domain.Materialclassification;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.*;

/**
 * Spring Data JPA repository for the Materialclassification entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MaterialclassificationRepository extends JpaRepository<Materialclassification, Long> {

}

package testob.com.app.repository;

import testob.com.app.domain.Civility;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Civility entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CivilityRepository extends JpaRepository<Civility, Long> {

}

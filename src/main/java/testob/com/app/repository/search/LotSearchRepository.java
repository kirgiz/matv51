package testob.com.app.repository.search;

import testob.com.app.domain.Lot;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Lot entity.
 */
public interface LotSearchRepository extends ElasticsearchRepository<Lot, Long> {
}

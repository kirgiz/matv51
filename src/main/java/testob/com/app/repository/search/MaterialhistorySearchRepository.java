package testob.com.app.repository.search;

import testob.com.app.domain.Materialhistory;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Materialhistory entity.
 */
public interface MaterialhistorySearchRepository extends ElasticsearchRepository<Materialhistory, Long> {
}

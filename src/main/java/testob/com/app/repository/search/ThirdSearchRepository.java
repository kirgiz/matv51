package testob.com.app.repository.search;

import testob.com.app.domain.Third;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Third entity.
 */
public interface ThirdSearchRepository extends ElasticsearchRepository<Third, Long> {
}

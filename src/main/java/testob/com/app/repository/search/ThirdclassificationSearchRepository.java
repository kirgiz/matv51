package testob.com.app.repository.search;

import testob.com.app.domain.Thirdclassification;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Thirdclassification entity.
 */
public interface ThirdclassificationSearchRepository extends ElasticsearchRepository<Thirdclassification, Long> {
}

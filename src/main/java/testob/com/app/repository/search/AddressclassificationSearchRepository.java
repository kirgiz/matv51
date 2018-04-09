package testob.com.app.repository.search;

import testob.com.app.domain.Addressclassification;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Addressclassification entity.
 */
public interface AddressclassificationSearchRepository extends ElasticsearchRepository<Addressclassification, Long> {
}

package testob.com.app.repository.search;

import testob.com.app.domain.Dashboard;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Dashboard entity.
 */
public interface DashboardSearchRepository extends ElasticsearchRepository<Dashboard, Long> {
}

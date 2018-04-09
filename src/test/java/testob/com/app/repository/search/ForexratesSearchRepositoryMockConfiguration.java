package testob.com.app.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of ForexratesSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class ForexratesSearchRepositoryMockConfiguration {

    @MockBean
    private ForexratesSearchRepository mockForexratesSearchRepository;

}

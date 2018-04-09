package testob.com.app.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of LotSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class LotSearchRepositoryMockConfiguration {

    @MockBean
    private LotSearchRepository mockLotSearchRepository;

}

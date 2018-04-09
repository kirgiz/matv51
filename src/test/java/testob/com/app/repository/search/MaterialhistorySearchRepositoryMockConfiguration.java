package testob.com.app.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of MaterialhistorySearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class MaterialhistorySearchRepositoryMockConfiguration {

    @MockBean
    private MaterialhistorySearchRepository mockMaterialhistorySearchRepository;

}

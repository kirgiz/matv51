package testob.com.app.service;

import testob.com.app.domain.Dashboard;
import testob.com.app.repository.DashboardRepository;
import testob.com.app.repository.search.DashboardSearchRepository;
import testob.com.app.service.dto.DashboardDTO;
import testob.com.app.service.mapper.DashboardMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Dashboard.
 */
@Service
@Transactional
public class DashboardService {

    private final Logger log = LoggerFactory.getLogger(DashboardService.class);

    private final DashboardRepository dashboardRepository;

    private final DashboardMapper dashboardMapper;

    private final DashboardSearchRepository dashboardSearchRepository;

    public DashboardService(DashboardRepository dashboardRepository, DashboardMapper dashboardMapper, DashboardSearchRepository dashboardSearchRepository) {
        this.dashboardRepository = dashboardRepository;
        this.dashboardMapper = dashboardMapper;
        this.dashboardSearchRepository = dashboardSearchRepository;
    }

    /**
     * Save a dashboard.
     *
     * @param dashboardDTO the entity to save
     * @return the persisted entity
     */
    public DashboardDTO save(DashboardDTO dashboardDTO) {
        log.debug("Request to save Dashboard : {}", dashboardDTO);
        Dashboard dashboard = dashboardMapper.toEntity(dashboardDTO);
        dashboard = dashboardRepository.save(dashboard);
        DashboardDTO result = dashboardMapper.toDto(dashboard);
        dashboardSearchRepository.save(dashboard);
        return result;
    }

    /**
     * Get all the dashboards.
     *
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public List<DashboardDTO> findAll() {
        log.debug("Request to get all Dashboards");
        return dashboardRepository.findAll().stream()
            .map(dashboardMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }


    /**
     * Get one dashboard by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Transactional(readOnly = true)
    public Optional<DashboardDTO> findOne(Long id) {
        log.debug("Request to get Dashboard : {}", id);
        return dashboardRepository.findById(id)
            .map(dashboardMapper::toDto);
    }

    /**
     * Delete the dashboard by id.
     *
     * @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Dashboard : {}", id);
        dashboardRepository.deleteById(id);
        dashboardSearchRepository.deleteById(id);
    }

    /**
     * Search for the dashboard corresponding to the query.
     *
     * @param query the query of the search
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public List<DashboardDTO> search(String query) {
        log.debug("Request to search Dashboards for query {}", query);
        return StreamSupport
            .stream(dashboardSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .map(dashboardMapper::toDto)
            .collect(Collectors.toList());
    }
}

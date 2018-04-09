package testob.com.app.service;

import testob.com.app.domain.Thirdclassification;
import testob.com.app.repository.ThirdclassificationRepository;
import testob.com.app.repository.search.ThirdclassificationSearchRepository;
import testob.com.app.service.dto.ThirdclassificationDTO;
import testob.com.app.service.mapper.ThirdclassificationMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Thirdclassification.
 */
@Service
@Transactional
public class ThirdclassificationService {

    private final Logger log = LoggerFactory.getLogger(ThirdclassificationService.class);

    private final ThirdclassificationRepository thirdclassificationRepository;

    private final ThirdclassificationMapper thirdclassificationMapper;

    private final ThirdclassificationSearchRepository thirdclassificationSearchRepository;

    public ThirdclassificationService(ThirdclassificationRepository thirdclassificationRepository, ThirdclassificationMapper thirdclassificationMapper, ThirdclassificationSearchRepository thirdclassificationSearchRepository) {
        this.thirdclassificationRepository = thirdclassificationRepository;
        this.thirdclassificationMapper = thirdclassificationMapper;
        this.thirdclassificationSearchRepository = thirdclassificationSearchRepository;
    }

    /**
     * Save a thirdclassification.
     *
     * @param thirdclassificationDTO the entity to save
     * @return the persisted entity
     */
    public ThirdclassificationDTO save(ThirdclassificationDTO thirdclassificationDTO) {
        log.debug("Request to save Thirdclassification : {}", thirdclassificationDTO);
        Thirdclassification thirdclassification = thirdclassificationMapper.toEntity(thirdclassificationDTO);
        thirdclassification = thirdclassificationRepository.save(thirdclassification);
        ThirdclassificationDTO result = thirdclassificationMapper.toDto(thirdclassification);
        thirdclassificationSearchRepository.save(thirdclassification);
        return result;
    }

    /**
     * Get all the thirdclassifications.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<ThirdclassificationDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Thirdclassifications");
        return thirdclassificationRepository.findAll(pageable)
            .map(thirdclassificationMapper::toDto);
    }


    /**
     * Get one thirdclassification by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Transactional(readOnly = true)
    public Optional<ThirdclassificationDTO> findOne(Long id) {
        log.debug("Request to get Thirdclassification : {}", id);
        return thirdclassificationRepository.findById(id)
            .map(thirdclassificationMapper::toDto);
    }

    /**
     * Delete the thirdclassification by id.
     *
     * @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Thirdclassification : {}", id);
        thirdclassificationRepository.deleteById(id);
        thirdclassificationSearchRepository.deleteById(id);
    }

    /**
     * Search for the thirdclassification corresponding to the query.
     *
     * @param query the query of the search
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<ThirdclassificationDTO> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Thirdclassifications for query {}", query);
        return thirdclassificationSearchRepository.search(queryStringQuery(query), pageable)
            .map(thirdclassificationMapper::toDto);
    }
}

package testob.com.app.service;

import testob.com.app.domain.Lot;
import testob.com.app.repository.LotRepository;
import testob.com.app.repository.search.LotSearchRepository;
import testob.com.app.service.dto.LotDTO;
import testob.com.app.service.mapper.LotMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * Service Implementation for managing Lot.
 */
@Service
@Transactional
public class LotService {

    private final Logger log = LoggerFactory.getLogger(LotService.class);

    private final LotRepository lotRepository;

    private final LotMapper lotMapper;

    private final LotSearchRepository lotSearchRepository;

    public LotService(LotRepository lotRepository, LotMapper lotMapper, LotSearchRepository lotSearchRepository) {
        this.lotRepository = lotRepository;
        this.lotMapper = lotMapper;
        this.lotSearchRepository = lotSearchRepository;
    }

    /**
     * Save a lot.
     *
     * @param lotDTO the entity to save
     * @return the persisted entity
     */
    public LotDTO save(LotDTO lotDTO) {
        log.debug("Request to save Lot : {}", lotDTO);
        Lot lot = lotMapper.toEntity(lotDTO);
        lot = lotRepository.save(lot);
        LotDTO result = lotMapper.toDto(lot);
        lotSearchRepository.save(lot);
        return result;
    }

    /**
     * Get all the lots.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<LotDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Lots");
        return lotRepository.findAll(pageable)
            .map(lotMapper::toDto);
    }


    /**
     * Get one lot by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Transactional(readOnly = true)
    public Optional<LotDTO> findOne(Long id) {
        log.debug("Request to get Lot : {}", id);
        return lotRepository.findById(id)
            .map(lotMapper::toDto);
    }

    /**
     * Delete the lot by id.
     *
     * @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Lot : {}", id);
        lotRepository.deleteById(id);
        lotSearchRepository.deleteById(id);
    }

    /**
     * Search for the lot corresponding to the query.
     *
     * @param query the query of the search
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<LotDTO> search(String query, Pageable pageable) {
        log.debug("Request to search for a page of Lots for query {}", query);
        return lotSearchRepository.search(queryStringQuery(query), pageable)
            .map(lotMapper::toDto);
    }
}

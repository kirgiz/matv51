package testob.com.app.service.mapper;

import testob.com.app.domain.*;
import testob.com.app.service.dto.LotDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Lot and its DTO LotDTO.
 */
@Mapper(componentModel = "spring", uses = {CurrencyMapper.class, })
public interface LotMapper extends EntityMapper <LotDTO, Lot> {

    @Mapping(source = "buycurrencylot.id", target = "buycurrencylotId")
    @Mapping(source = "buycurrencylot.iSOCode", target = "buycurrencylotISOCode")
    LotDTO toDto(Lot lot); 
    @Mapping(target = "materialLots", ignore = true)

    @Mapping(source = "buycurrencylotId", target = "buycurrencylot")
    Lot toEntity(LotDTO lotDTO); 
    default Lot fromId(Long id) {
        if (id == null) {
            return null;
        }
        Lot lot = new Lot();
        lot.setId(id);
        return lot;
    }
}

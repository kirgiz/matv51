package testob.com.app.service.mapper;

import testob.com.app.domain.*;
import testob.com.app.service.dto.TransferclassificationDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Transferclassification and its DTO TransferclassificationDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface TransferclassificationMapper extends EntityMapper<TransferclassificationDTO, Transferclassification> {


    @Mapping(target = "materialhistoryCategories", ignore = true)
    Transferclassification toEntity(TransferclassificationDTO transferclassificationDTO);

    default Transferclassification fromId(Long id) {
        if (id == null) {
            return null;
        }
        Transferclassification transferclassification = new Transferclassification();
        transferclassification.setId(id);
        return transferclassification;
    }
}

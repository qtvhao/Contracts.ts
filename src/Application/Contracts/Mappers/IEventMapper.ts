// Contracts.ts/src/Application/Contracts/Mappers/IEventMapper.ts

import { IDomainEvent } from "../../../Domain/Contracts/IDomainEvent";

export interface IEventMapper<DTO, DomainEvent extends IDomainEvent> {
    toDomain(dto: DTO): DomainEvent;
    toDTO(event: DomainEvent): DTO;
}

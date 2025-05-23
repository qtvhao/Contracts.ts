import { IDomainEvent } from "../../../Domain/Contracts/IDomainEvent";

export interface IDomainEventMapper<DTO, DomainEvent extends IDomainEvent> {
    toDomain(dto: DTO): DomainEvent;
    toDTO(event: DomainEvent): DTO;
}

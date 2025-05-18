// Contracts.ts/src/Application/Contracts/Mappers/IEventMapper.ts
export interface IEventMapper<DTO, DomainEvent> {
    toDomain(dto: DTO): DomainEvent;
    toDTO(event: DomainEvent): DTO;
}

import { IDomainEvent } from "../../../Domain/Contracts/IDomainEvent";
import { Message } from "../../../Domain/Contracts/EventBus/EachMessagePayload"

export interface IDomainEventMapper<TMessage extends Message, TDomainEvent extends IDomainEvent> {
    toDomain(dto: TMessage): TDomainEvent;
    toDTO(event: TDomainEvent): TMessage;
    isDomainEvent(event: IDomainEvent): event is TDomainEvent;
}

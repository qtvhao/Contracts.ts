// types.ts
const TYPES = {
  MessageBrokerFactory: Symbol.for("MessageBrokerFactory"),
  DomainEventMapperRegistry: Symbol.for("DomainEventMapperRegistry"),
  EventBus: Symbol.for("EventBus"),
  ConfigurationService: Symbol.for("ConfigurationService"),
  EventTopicMapper: Symbol.for("EventTopicMapper"),
  EventHandlerResolver: Symbol.for("EventHandlerResolver"),
};

export default TYPES;

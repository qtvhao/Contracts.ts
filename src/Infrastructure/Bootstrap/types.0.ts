// types.ts
const TYPES = {
  MessageBrokerFactory: Symbol.for("MessageBrokerFactory"),
  DomainEventMapperRegistry: Symbol.for("DomainEventMapperRegistry"),
  EventBus: Symbol.for("EventBus"),
  ConfigurationService: Symbol.for("ConfigurationService"),
  EventTopicMapper: Symbol.for("EventTopicMapper"),
};

export default TYPES;

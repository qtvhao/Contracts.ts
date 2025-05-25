// types.ts
const TYPES = {
  CommandBus: Symbol.for("CommandBus"),
  QueryBus: Symbol.for("QueryBus"),
  MessageBrokerFactory: Symbol.for("MessageBrokerFactory"),
  DomainEventMapperRegistry: Symbol.for("DomainEventMapperRegistry"),
  EventBus: Symbol.for("EventBus"),
  ConfigurationService: Symbol.for("ConfigurationService"),
  EventTopicMapper: Symbol.for("EventTopicMapper"),
  EventHandlerResolver: Symbol.for("EventHandlerResolver"),
  EventBusFactory: Symbol.for("EventBusFactory"),
  MessageBrokerFactoryMap: Symbol.for("MessageBrokerFactoryMap"),
};

export default TYPES;

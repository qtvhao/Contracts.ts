// types.ts
const TYPES = {
  CommandBus: Symbol.for("CommandBus"),
  QueryBus: Symbol.for("QueryBus"),
  CommandHandlerResolver: Symbol.for("CommandHandlerResolver"),
  QueryHandlerResolver: Symbol.for("QueryHandlerResolver"),
  // 
  MessageBrokerFactory: Symbol.for("MessageBrokerFactory"),
  DomainEventMapperRegistry: Symbol.for("DomainEventMapperRegistry"),
  EventBus: Symbol.for("EventBus"),
  EventTopicMapper: Symbol.for("EventTopicMapper"),
  EventHandlerResolver: Symbol.for("EventHandlerResolver"),
  EventBusFactory: Symbol.for("EventBusFactory"),
  MessageBrokerFactoryMap: Symbol.for("MessageBrokerFactoryMap"),
  // 
  ConfigurationService: Symbol.for("ConfigurationService"),
};

export default TYPES;

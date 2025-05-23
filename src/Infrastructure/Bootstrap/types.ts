// types.ts
const TYPES = {
  MessageBrokerFactory: Symbol.for("MessageBrokerFactory"),
  EventMapperRegistry: Symbol.for("EventMapperRegistry"),
  EventBus: Symbol.for("EventBus"),
  ConfigurationService: Symbol.for("ConfigurationService"),
  EventTopicMapper: Symbol.for("EventTopicMapper"),
};

export default TYPES;

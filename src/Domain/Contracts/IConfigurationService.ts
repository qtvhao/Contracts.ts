export interface IConfigurationService {
  getEventBusDriver(): string;
  getKafkaClientId(): string;
  getKafkaBrokers(): string[];
  getKafkaGroupId(): string;
}

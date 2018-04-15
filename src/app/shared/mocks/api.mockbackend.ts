import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UsersMock } from './index';

export class ApiMockBackEnd implements InMemoryDbService  {
  createDb() {
    const users = UsersMock;
    return {
      users: users
    };
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { baseService } from '../shared/services/base.service';
import { UsersMock } from '../shared/mocks/users.mock';

const users = UsersMock;

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) { }


  login(form: any) {
    const isLogined = users.filter((item) => item.username === form.username && item.password === form.password);

  }

}


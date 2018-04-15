import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// tslint:disable-next-line:class-name
export abstract class baseService {
  constructor(
    protected httpClient: HttpClient
  ) { }

  protected responseInterceptor(observable: Observable<any>) {
    return observable
      .map(res => this.responseNext(res))
      .catch((error, souce) => this.onCatch(error));
  }

  protected responseNext(res) {
    console.log(res);
  }

  protected onCatch(error): Observable<any> {
    return Observable.of(error);
  }
}

export class UsersModel implements IUsersModel {
  id: any | undefined;
  username: any | null;
  password: any | null;

  constructor(data?: IUsersModel) {
    if (data) {
      // tslint:disable-next-line:no-var-keyword
      for (const property in data) {
        // tslint:disable-next-line:curly
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }
}

export interface IUsersModel {
  id: any | undefined;
  username: any | null;
  password: any | null;
}

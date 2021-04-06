import {ClientType} from "../enums";
export interface IUser {
  email: string;
  id: string;
  provider?: string;
  profileId?: string;
  profiles?: any[];
  namespaces?: any[];
  typeClient?: ClientType;
}

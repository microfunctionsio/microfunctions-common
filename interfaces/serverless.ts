import {RuntimesType, TriggersType} from "../enums";
import {IEnvironments} from "./environments";

export interface IServerless {
  name: string;
  allocated: boolean;
  memory: string;
  cpu: string;
  idNamespace: string;
  executedName: string;
  runtime: RuntimesType;
  trigger: TriggersType;
  crontab: string;
  sourceCode: any;
  namespace: string;
  replicas: number;
  environments: IEnvironments[];
  dependencies: any;
  host: string;
  apiKey:string;

}

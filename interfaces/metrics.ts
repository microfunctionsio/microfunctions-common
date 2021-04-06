export type IMetricsQuery =
  | string
  | string[]
  | {
      [metricName: string]: string;
    };

export interface IMetrics {
  status: string;
  data: {
    resultType: string;
    result: IMetricsResult[];
  };
}

export interface IMetricsResult {
  metric: {
    [name: string]: string;
    instance: string;
    node?: string;
    pod?: string;
    kubernetes?: string;
    kubernetes_node?: string;
    kubernetes_namespace?: string;
  };
  values: [number, string][];
}

export interface IMetricsReqParams {
  start?: number | string; // timestamp in seconds or valid date-string
  end?: number | string;
  step?: number; // step in seconds (default: 60s = each point 1m)
  range?: number; // time-range in seconds for data aggregation (default: 3600s = last 1h)
  namespace?: string; // rbac-proxy validation param
}

export interface MetricsConfiguration {
  // Placeholder for Metrics config structure
  persistence: {
    enabled: boolean;
    storageClass: string;
    size: string;
  };
  nodeExporter: {
    enabled: boolean;
  };
  kubeStateMetrics: {
    enabled: boolean;
  };
  retention: {
    time: string;
    size: string;
  };
  alertManagers: string[];
  replicas: number;
  storageClass: string;
}

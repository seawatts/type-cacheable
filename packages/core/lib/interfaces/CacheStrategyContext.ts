import { CacheClient } from '.';

export interface CacheStrategyContext {
  debug: boolean | undefined;
  originalMethod: Function;
  originalMethodScope: any;
  originalMethodArgs: any[];
  client: CacheClient;
  fallbackClient: CacheClient | null;
  forceUpdate?: boolean;
  key: string;
  ttl: number | undefined;
}
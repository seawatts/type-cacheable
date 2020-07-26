import { CacheClient } from '.';

export interface CacheStrategyContext {
  debug: boolean | undefined;
  originalFunction: Function;
  originalFunctionScope: any;
  originalFunctionArgs: any[];
  client: CacheClient;
  fallbackClient: CacheClient | null;
  key: string;
  ttl: number | undefined;
}

import { inject, InjectOptions, ProviderToken } from '@angular/core';

/**
 * Helper function to always get an array from DI even if only one service is registered as "multi"
 */
export function injectMulti<T>(token: ProviderToken<T>): T[];
/**
 * Helper function to always get an array from DI even if only one service is registered as "multi"
 */
export function injectMulti<T>(
  token: ProviderToken<T>,
  options: InjectOptions & {
    optional?: false;
  },
): T[];
/**
 * Helper function to always get an array from DI even if only one service is registered as "multi"
 * Does return null if there's no service registered and InjectOptions.optional is true
 */
export function injectMulti<T>(token: ProviderToken<T>, options: InjectOptions): T[] | null;
export function injectMulti<T>(token: ProviderToken<T>, options?: InjectOptions): T[] | null {
  const values = options == null ? inject(token) : inject(token, options);
  return values == null ? null : Array.isArray(values) ? values : [values];
}

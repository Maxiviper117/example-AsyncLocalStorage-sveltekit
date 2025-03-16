import { AsyncLocalStorage } from 'node:async_hooks';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const asyncLocalStorage = new AsyncLocalStorage<Map<string, any>>();

/**
 * Runs a function within a new AsyncLocalStorage context.
 * @param fn - The function to run within the context.
 * @returns The result of the function.
 */
export function runWithContext<T>(fn: () => T) {
    console.log('Running with context');
	return asyncLocalStorage.run(new Map(), fn);
}

/**
 * Sets a key-value pair in the current AsyncLocalStorage context.
 * @param key - The key to set.
 * @param value - The value to set.
 */
export function setRequestData<T>(key: string, value: T) {
    console.log('Setting request data:', key, value);
	const store = asyncLocalStorage.getStore();
	if (store) {
		store.set(key, value);
	} else {
		console.error('AsyncLocalStorage store is not available');
	}
}

/**
 * Gets a value from the current AsyncLocalStorage context by key.
 * @param key - The key to retrieve.
 * @returns The value associated with the key, or undefined if not found.
 */
export function getRequestData<T>(key: string): T | undefined {
    console.log('Getting request data:', key);
	const store = asyncLocalStorage.getStore();
	return store ? store.get(key) : undefined;
}

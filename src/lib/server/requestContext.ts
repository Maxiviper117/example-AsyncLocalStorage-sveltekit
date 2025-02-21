import { AsyncLocalStorage } from 'node:async_hooks';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const asyncLocalStorage = new AsyncLocalStorage<Map<string, any>>();

export function runWithContext<T>(fn: () => T) {
    console.log('Running with context');
	return asyncLocalStorage.run(new Map(), fn);
}

export function setRequestData<T>(key: string, value: T) {
    console.log('Setting request data:', key, value);
	const store = asyncLocalStorage.getStore();
	if (store) {
		store.set(key, value);
	} else {
		console.error('AsyncLocalStorage store is not available');
	}
}

export function getRequestData<T>(key: string): T | undefined {
    console.log('Getting request data:', key);
	const store = asyncLocalStorage.getStore();
	return store ? store.get(key) : undefined;
}

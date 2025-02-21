# example-AsyncLocalStorage-sveltekit

This project demonstrates how to use Node.js' AsyncLocalStorage within a SvelteKit application to manage per-request data without the need for passing data manually through each load function.

## Overview

In this example, the AsyncLocalStorage is initialized in the server hooks and is used to store the authenticated user and other request-specific data.

## Advantages Over event.locals and Load Function Waterfalls

1. **Simplified Data Propagation**: With AsyncLocalStorage, data such as the authenticated user is set once during the request lifecycle and then accessed anywhere within that lifecycle, eliminating the need to manually pass values through `event.locals` in each load function.

2. **Avoiding Load Function Waterfalls**: Instead of using `await parent()` in nested load functions, which can lead to complex chaining of asynchronous calls, AsyncLocalStorage allows direct access to the context data, thereby reducing boilerplate code.

3. **Centralized Context Management**: Managing request-specific data with AsyncLocalStorage centralizes the data access layer. This not only simplifies the code by avoiding repetitive data passing but also minimizes potential errors in distributed data flow.

## Code Snippets

### 1. Initialization in hooks

The following snippet shows how the context is created and used in the `handle` hook to store the authenticated user:

```typescript
// src/hooks.server.ts
import { getUserFromToken } from '$lib/server/auth';
import { runWithContext, setRequestData } from '$lib/server/requestContext';

export const handle = async ({ event, resolve }) => {
	return runWithContext(async () => {
		const token = event.cookies.get('auth_token');

		if (token) {
			const user = await getUserFromToken(token);
			setRequestData('user', user);
		} else {
			console.warn('No valid auth token found');
			setRequestData('user', null);
		}

		return await resolve(event);
	});
};
```

### 2. Context Management with AsyncLocalStorage

This snippet from `src/lib/server/requestContext.ts` demonstrates how AsyncLocalStorage is used to maintain a per-request store:

```typescript
// src/lib/server/requestContext.ts
import { AsyncLocalStorage } from 'node:async_hooks';

const asyncLocalStorage = new AsyncLocalStorage<Map<string, any>>();

export function runWithContext<T>(fn: () => T) {
	return asyncLocalStorage.run(new Map(), fn);
}

export function setRequestData<T>(key: string, value: T) {
	const store = asyncLocalStorage.getStore();
	if (store) {
		store.set(key, value);
	} else {
		console.error('AsyncLocalStorage store is not available');
	}
}

export function getRequestData<T>(key: string): T | undefined {
	const store = asyncLocalStorage.getStore();
	return store ? store.get(key) : undefined;
}
```

### 3. Accessing the Stored Data

The user information stored in AsyncLocalStorage can be accessed from other modules, such as in the authentication helper:

```typescript
// src/lib/server/authUser.ts
import { getRequestData } from '$lib/server/requestContext';
import type { AuthUser } from '$lib/types/authUser';

export function getAuthenticatedUser() {
	return getRequestData<AuthUser>('user');
}
```

## Getting Started

1. Install dependencies with your package manager (e.g., `pnpm install`).
2. Run the development server with `pnpm dev`.
3. Explore the code in the `src/hooks.server.ts` and `src/lib/server/` directories to see how AsyncLocalStorage is integrated.

Happy coding!

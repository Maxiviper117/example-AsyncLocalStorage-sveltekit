// src/lib/server/authUser.ts
import { getRequestData } from '$lib/server/requestContext';
import type { AuthUser } from '$lib/types/authUser';

/**
 * This function retrieves the authenticated user from the request context set
 * in the hook.server.ts file using the AsyncLocalStorage API.
 * 
 * @returns 
 */
export function getAuthenticatedUser() {
	// Retrieve the authenticated user from the request context using function that uses
	// AsyncLocalStorage API. This allows you to access the user data in your load functions and API routes.
	return getRequestData<AuthUser>('user'); 
}

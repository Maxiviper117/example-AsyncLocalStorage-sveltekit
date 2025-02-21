// src/lib/server/authUser.ts
import { getRequestData } from '$lib/server/requestContext';
import type { AuthUser } from '$lib/types/authUser';

export function getAuthenticatedUser() {
	return getRequestData<AuthUser>('user'); // Fetch user stored in AsyncLocalStorage
}

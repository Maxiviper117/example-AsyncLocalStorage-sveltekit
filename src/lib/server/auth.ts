import type { AuthUser } from '$lib/types/authUser';

// src/lib/server/auth.ts
export async function getUserFromToken(token: string): Promise<AuthUser | null> {
	// Simulate verifying a token (In real-world, check JWT, database, etc.)
	if (token === 'valid_token') {
		return { id: 1, name: 'John Doe', email: 'john@example.com' };
	}
	return null;
}

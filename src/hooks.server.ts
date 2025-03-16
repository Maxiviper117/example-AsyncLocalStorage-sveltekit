// d:/David/Development/Experiments/sveltekit/AsyncLocalStorage-sveltekit-test/src/hooks.server.ts
import { getUserFromToken } from '$lib/server/auth';
import { runWithContext, setRequestData } from '$lib/server/requestContext';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	return runWithContext(async () => {
		const token = event.cookies.get('auth_token');

		// Check if the auth token exists in the cookies
		if (token) {
			// Simulate authentication process
			// In a real-world scenario, you would verify the token and fetch the user data from your database or authentication service.
			const user = await getUserFromToken(token);
			
			// Store the user data in the request context using AsyncLocalStorage
			// This allows you to access the user data in your load functions and API routes.
			setRequestData('user', user);
		} else {
			// Log a warning if no valid auth token is found
			console.warn('No valid auth token found');
			
			// Set the user data to null in the request context
			setRequestData('user', null);
		}

		// Continue processing the request
		return await resolve(event);
	});
}


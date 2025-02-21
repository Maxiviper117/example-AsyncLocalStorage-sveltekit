// d:/David/Development/Experiments/sveltekit/AsyncLocalStorage-sveltekit-test/src/hooks.server.ts
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

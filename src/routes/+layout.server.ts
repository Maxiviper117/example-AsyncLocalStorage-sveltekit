import { getAuthenticatedUser } from '$lib/server/authUser';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const user = getAuthenticatedUser();
	return { user };
}) satisfies LayoutServerLoad;

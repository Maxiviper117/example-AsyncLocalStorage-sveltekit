import type { LayoutServerLoad } from './$types';
import { getAuthenticatedUser } from '$lib/server/authUser.js';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async () => {
	const user = getAuthenticatedUser();
    console.log('user', user);

	if (!user) {
		throw redirect(303, '/');
	}
	return { user };
};

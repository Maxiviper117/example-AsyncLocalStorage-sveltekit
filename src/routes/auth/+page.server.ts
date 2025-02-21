// src/routes/auth/+page.server.ts
import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ cookies }) => {
		cookies.set('auth_token', 'valid_token', { path: '/', httpOnly: false });
		throw redirect(303, '/');
	},
	logout: async ({ cookies }) => {
		cookies.delete('auth_token', { path: '/' });
		throw redirect(303, '/');
	}
};

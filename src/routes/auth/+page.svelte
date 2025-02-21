<!-- src/routes/auth/+page.svelte -->

<section>
	<div class="container mx-auto flex flex-col items-center justify-center p-10">
		<h1 class="mb-6 text-3xl font-bold">Authentication</h1>
		<div class="flex gap-4">
			<!-- Login Form -->
			<form method="POST" class="mb-4">
				<button
					formaction="?/login"
					formmethod="POST"
					class="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">Login</button
				>
			</form>

			<!-- Logout Form -->
			<form method="POST" class="mb-4">
				<button
					formaction="?/logout"
					formmethod="POST"
					class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">Logout</button
				>
			</form>
		</div>
	</div>
</section>

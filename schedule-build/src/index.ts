export interface Env {
	BUILD_URL: string;
}

export default {
	async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
		const res = await fetch(env.BUILD_URL);
		const successful = res.ok ? 'success' : 'fail';

		console.log(`trigger fired ${event.cron}: ${successful}`);
	},
};

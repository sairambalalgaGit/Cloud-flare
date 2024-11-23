
export interface env{

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		
		return Response.json({
			message: "you did not send a get request"
		});
		
	},
};

/*
export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({
			message : "love u"
		});
	},
} satisfies ExportedHandler<Env>;
*/
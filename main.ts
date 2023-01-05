export interface Env {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
}

export default (request: any) => {
  const message = request.body?.message
  console.log("REQUEST METHOD", request.method)
  console.log("REQUEST BODY", request.body)
  console.log("11")
  return new Response(`Hello, from Deno v${Deno.version.deno}! ${JSON.stringify(message)}`);
};

/* export default { */
/*   async fetch( */
/*     request: Request, */
/*   ): Promise<Response> { */
/*     const { message } = await request.json(); */
/**/
/*     console.log(JSON.stringify(message)) */
/**/
/*     if (message) { */
/*       const { chat: { id, first_name }, text, message_id } = message; */
/**/
/*       await fetch( */
/*         `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, */
/*         { */
/*           method: "POST", */
/*           cache: "no-cache", */
/*           credentials: "omit", */
/*           redirect: "follow", */
/*           referrerPolicy: "no-referrer", */
/*           body: JSON.stringify({ */
/*             chat_id: env.TELEGRAM_CHAT_ID, */
/*             text: `Echo: ${message}`, */
/*           }), */
/*         }, */
/*       ); */
/*     } */
/**/
/*     return new Response("Hello, world! Wrangler + Deno"); */
/*   }, */
/* }; */

if (import.meta.main) {
  console.log("[^_^]");
}

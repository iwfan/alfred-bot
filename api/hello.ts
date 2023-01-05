export default (request: any) => {
  const message = request.body?.message
  console.log("REQUEST METHOD", request.method)
  console.log("REQUEST BODY", request.body)
  return new Response(`Hello, from Deno v${Deno.version.deno}! ${JSON.stringify(message)}`);
};

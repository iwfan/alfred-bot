// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const importMeta = {
    url: "file:///Users/f/code/alfred-bot/main.ts",
    main: import.meta.main
};
const __default = (request)=>{
    const message = request.body?.message;
    console.log("REQUEST METHOD", request.method);
    console.log("REQUEST BODY", request.body);
    console.log("11");
    return new Response(`Hello, from Deno v${Deno.version.deno}! ${JSON.stringify(message)}`);
};
if (importMeta.main) {
    console.log("[^_^]");
}
export { __default as default };

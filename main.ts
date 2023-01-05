import * as grammy from "https://deno.land/x/grammy@v1.13.0/mod.ts"

declare interface ExecutionContext {
  waitUntil(promise: void | Promise<void>): void;
  passThroughOnException(): void;
}

export interface Env {
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
}


export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext): Response {
    return new Response("Hello, world! Wrangler + Deno");
  },
};

if (import.meta.main) {
  console.log("[^_^]")
}

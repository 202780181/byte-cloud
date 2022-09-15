/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

declare module '*.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}


declare module '*.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

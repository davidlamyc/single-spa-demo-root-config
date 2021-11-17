import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/home"],
});

registerApplication({
  name: "@davidlamyc/spa-demo-header",
  app: () => System.import("@davidlamyc/spa-demo-header"),
  activeWhen: ["/header"]
});

start({
  urlRerouteOnly: true,
});

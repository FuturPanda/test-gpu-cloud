import { AppRouter, initContract } from "@ts-rest/core";
import { helloContract } from "./hello";
import { textContract } from "./text";

const c = initContract();

export const superContract = c.router({
  text: textContract,
  hello: helloContract,
});

export { type AppRouter };

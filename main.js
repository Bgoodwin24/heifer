import { moo } from "./moo.js";
import { say } from "cowsay";

function main() {
    const name = "heifer";
    console.log(say({text: moo(name) }));
}

main();

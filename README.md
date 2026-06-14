# justinjeong

> Justin Kyungha Jeong (정경하) — a senior frontend engineer who orchestrates AI agents for a living.
> AI 에이전트를 다루는 시니어 프론트엔드 엔지니어의 디지털 명함.

```bash
npx justinjeong
```

## What's inside

A small npm package that prints a digital business card. Behind the card is a Buzzvil frontend engineer who:

- ships Next.js · React · TypeScript across a Turbo monorepo,
- runs a 38+ custom Claude Code skill suite with cross-agent (Claude ↔ Codex) competition,
- and treats deterministic quality loops as the unit of work — for code, prose, and design.

## Install

```bash
# one-shot
npx justinjeong

# or keep it around
npm install -g justinjeong
justinjeong
```

## Use as a module

```js
const justin = require("justinjeong");

justin();              // prints the card
justin.info;           // raw JSON metadata
justin.buildCard();    // returns the rendered card as a string
```

## Dependencies

`chalk@4`, `boxen@5`, and `terminal-link@2` are intentionally pinned to their last CommonJS major. The next majors (chalk 5, boxen 6, terminal-link 3) are ESM-only (`type: module`) and would break the `require()` calls in `index.js` — don't bump them without converting the entry point to ESM.

## Contact

- Work — justin.jeong@buzzvil.com
- GitHub — [@justinjeong5](https://github.com/justinjeong5)

## License

ISC © Justin Kyungha Jeong

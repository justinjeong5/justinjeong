const assert = require("assert");
const justin = require("./index.js");
const info = require("./info.json");

assert.strictEqual(typeof justin, "function", "default export should be a function");
assert.strictEqual(typeof justin.buildCard, "function", "buildCard should be exported");
assert.deepStrictEqual(justin.info, info, "info should be exported");

const card = justin.buildCard();
assert.ok(card.includes(info.name), "card should include the name");
assert.ok(card.includes(info.korean), "card should include the Korean name");
assert.ok(card.includes(info.tagline), "card should include the Korean tagline");
assert.ok(card.includes(info.role), "card should include the role");
assert.ok(card.includes(info.company), "card should include the company");
assert.ok(card.includes(info.team), "card should include the team");
assert.ok(card.includes(info.focus), "card should include the focus");
assert.ok(card.includes(info.email.work), "card should include the work email");
assert.ok(card.includes(info.email.personal), "card should include the personal email");
assert.ok(card.includes(info.links.github), "card should include the GitHub link");
assert.ok(card.includes(info.links.web), "card should include the web link");
assert.ok(card.includes(info.links.npm), "card should include the npm link");
assert.ok(card.includes(info.card), "card should include the npx command");
info.stack.forEach((s) =>
  assert.ok(card.includes(s), `card should include stack item: ${s}`),
);
info.tooling.forEach((t) =>
  assert.ok(card.includes(t), `card should include tooling item: ${t}`),
);
info.highlights.forEach((h) =>
  assert.ok(card.includes(h), `card should include highlight: ${h.slice(0, 40)}...`),
);

justin();

console.log("\n[test] All assertions passed.");

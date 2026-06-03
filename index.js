const chalk = require("chalk");
const boxen = require("boxen");
const terminalLink = require("terminal-link");
const info = require("./info.json");

const label = (text) => chalk.bold.gray(text.padStart(8) + "  ");
const hyperlink = (text, url) =>
  terminalLink(chalk.cyan.underline(text), url, { fallback: false });
const link = (url) => hyperlink(url, url);
const mail = (address) => hyperlink(address, `mailto:${address}`);

function buildCard() {
  const name = chalk.bold.white(info.name);
  const korean = chalk.gray(`(${info.korean})`);
  const handle = chalk.cyan("@justinjeong5");
  const heading = `${name} ${korean}    ${handle}`;
  const tagline = chalk.italic.gray(info.tagline);

  const role = `${chalk.white(info.role)} ${chalk.gray("·")} ${chalk.cyan(info.company)} ${chalk.gray(`(${info.team})`)}`;
  const focus = chalk.italic.white(info.focus);

  const stack = info.stack.map((s) => chalk.cyan(s)).join(chalk.gray(" · "));
  const tooling = info.tooling.map((t) => chalk.cyan.dim(t)).join(chalk.gray(" · "));

  const highlights = info.highlights
    .map((h) => `${chalk.cyan("▸")} ${chalk.white(h)}`)
    .join("\n");

  const body = [
    heading,
    `  ${tagline}`,
    "",
    `${label("Role")}${role}`,
    `${label("Focus")}${focus}`,
    "",
    `${label("Stack")}${stack}`,
    `${label("Tools")}${tooling}`,
    "",
    highlights,
    "",
    `${label("Web")}${link(info.links.web)}`,
    `${label("GitHub")}${link(info.links.github)}`,
    `${label("npm")}${link(info.links.npm)}`,
    `${label("Work")}${mail(info.email.work)}`,
    `${label("Mail")}${mail(info.email.personal)}`,
    "",
    `${label("Card")}${chalk.red("npx")} ${chalk.white(info.card.replace("npx ", ""))}`,
  ].join("\n");

  return boxen(body, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "cyan",
    float: "left",
  });
}

function justinjeong() {
  console.log(buildCard());
}

module.exports = justinjeong;
module.exports.info = info;
module.exports.buildCard = buildCard;

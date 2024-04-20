import { Marpit,Options } from "@marp-team/marpit";
import fs from "fs";

// 1. Create instance (with options if you want)

const MarpitOption: Options = {
  lang: "ja",
  headingDivider: 1,
  printable: true,
  markdown: {
    html: true,
    
  }
}
const marpit = new Marpit();

// 2. Add theme CSS
const theme = `
/* @theme example */

section {
  background-color: #369;
  color: #fff;
  font-size: 30px;
  padding: 40px;
}

h1,
h2 {
  text-align: center;
  margin: 0;
}

h1 {
  color: #8cf;
}
`;
marpit.themeSet.default = marpit.themeSet.add(theme);

// 3. Render markdown
const markdown = `

# Connector
～友人作りをもっと手軽にするアプリケーション～

---

## どういうアプリなんだ？

マッチングアプリみたいなもん。
自分のことについて記載した文章から
どのカテゴリのモノが好きかなどの情報を分析。
学内で趣味が合いそうな人を割り出します。

`;
const { html, css } = marpit.render(markdown);

// 4. Use output in your HTML
const htmlFile = `
<!DOCTYPE html>
<html><body>
  <style>${css}</style>
  ${html}
</body></html>
`;

fs.writeFileSync("example.html", htmlFile.trim());

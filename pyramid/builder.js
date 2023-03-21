function build(height) {
  if (height < 1) {
    return "";
  }
  height = Math.abs(height);

  let rows = [];
  for (let i = height; i > 0; i--) {
    let padding = "".padStart(i - 1, " "),
        pyramid = "".padStart(1 + (height - i) * 2, "*");
    rows.push(padding + pyramid);
  }

  return rows.join("\n");
}

module.exports = { build };

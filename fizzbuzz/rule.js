function apply_rules(rules, value) {
  let result = ""
  rules.forEach(rule => {
    if (rule.check(value)) {
      result += rule.result;
    }
  });

  if (result === "") {
    result = `${value}`;
  }
  return result;
}

module.exports = { apply_rules };

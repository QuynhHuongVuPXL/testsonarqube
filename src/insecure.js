// insecure.js — intentionally insecure for SonarCloud testing
// DO NOT USE IN PRODUCTION — fake credentials only

// Fake hardcoded credential (should trigger S2068 / Hardcoded credentials rule)
const GITHUB_TOKEN = "ghp_FAKE_TOKEN_FOR_TESTING_ONLY_1234567890";

// Use of eval (should trigger S2643 / insecure eval usage)
function runUserCode(codeStr) {
  // intentionally insecure
  return eval(codeStr);
}

console.log("Fake token:", GITHUB_TOKEN);
console.log("Eval test:", runUserCode("1 + 2"));

module.exports = {
  projects: [
    {
      preset: "jest-runner-prettier",
      displayName: "lint:prettier",
      testPathIgnorePatterns: ["/node_modules/", "/public/", "/.cache/"]
    },
    {
      preset: "jest-runner-stylelint",
      displayName: "lint:stylelint",
      testPathIgnorePatterns: ["/node_modules/", "/public/", "/.cache/"]
    },
    {
      preset: "jest-runner-remark",
      displayName: "lint:remark"
    },
    {
      runner: "eslint",
      displayName: "lint:eslint",
      testMatch: ["<rootDir>/**/*.js", "<rootDir>/**/*.jsx"],
      testPathIgnorePatterns: ["/node_modules/", "/public/", "/.cache/"]
    }
  ]
};

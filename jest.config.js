module.exports = {
  projects: [
    {
      preset: "jest-runner-prettier",
      displayName: "lint:prettier",
      testPathIgnorePatterns: ["/node_modules/", "/public/", "/.cache/"]
    },
    {
      preset: "jest-runner-remark",
      displayName: "lint:remark"
    }
  ]
};

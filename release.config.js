module.exports = {
  branches: "main",
  repositoryUrl: "git@github.com:chasethomaseng/react-app.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};

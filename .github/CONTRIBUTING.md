# Contributing to Time-Wise

Thank you for considering contributing to Time-Wise! Contributions are welcome, whether they are issues, bug fixes, documentation updates, or new features. This document provides guidelines to help make the contribution process smooth and efficient.

## Getting Started

1. **Fork the Repository**: Start by forking the repository to your GitHub account.

2. **Clone the Fork**: Clone the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/time-wise.git
   cd time-wise
   ```

3. **Install Dependencies**: Make sure you have the necessary dependencies installed.

   ```bash
   npm install
   ```

4. **Create a New Branch**: Always create a new branch for your contributions.

   ```bash
   git checkout -b feat/my-new-feature
   ```

## Development Workflow

1. **Code Style**: Follow existing code style and conventions. Run lint with:

   ```bash
   npm run lint
   ```

2. **Write Tests**: For any code change, add or update tests to ensure full coverage and avoid regressions. Run tests with:

   ```bash
   npm test
   ```

3. **Documentation**: Update the documentation in `README.md` if necessary to reflect your changes.

4. **Commit Your Changes**: Use clear and descriptive commit messages using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

   ```bash
   git add .
   git commit -m "feat: description of feature"
   ```

5. **Push Your Changes**: Push the changes to your fork.

   ```bash
   git push origin feat/my-new-feature
   ```

6. **Open a Pull Request**: Go to the original repository and open a pull request from your branch. Clearly describe the purpose of the pull request and provide relevant details.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Reporting Issues

If you find a bug or have a feature request, please [open an issue](https://github.com/mahshidbahira/time-wise/issues). Include as much detail as possible, such as steps to reproduce the issue, expected behavior, and screenshots if applicable.

## Pull Request Guidelines

- **Single-Topic PRs**: Each pull request should address a single topic or feature. This makes it easier to review and understand your contributions.

- **Run All Tests**: Ensure all tests pass before submitting a pull request.

- **Include Test Coverage**: Ensure that all new features and bug fixes are covered by tests.

- **Respect Review Feedback**: Be responsive to any feedback or changes requested by reviewers.

Thank you for helping to make Time-Wise better!

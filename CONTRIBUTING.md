## Contribution Guidelines

Thank you for your interest in contributing. Here's everything you'll need to make your first contribution.

## Overview:
- [What can I help with?](#what-can-i-help-with)
- [Grabbing an issue](#grabbing-an-issue)
- [How to Contribute?](#how-to-contribute)
- [Keeping your fork up-to-date](#keeping-your-fork-up-to-date)
- [Things to keep in mind before making a pull request](#things-to-keep-in-mind-before-making-a-pull-request)
- [Join our slack team](#join-our-slack-team)

### What can I help with?

We welcome contributions of all sorts. Even the most minor changes are warmly welcomed. You may choose to work on an existing issue or propose your own.

Some examples of contributions are:

1. Documentation: From spell corrections to documenting the necessary information, all comes in this section.

2. Bugs: Any bug fixes are counted in this section. If you see a new bug, feel free to create a new issue mentioning the problem faced.

3. New Template: If you would like to see some new templates in the project, you can always create a new issue mentioning the requested template. Or you can directly contribute the template you want by creating a PR for it.

### Grabbing an issue

To work on an existing issue, comment on it and say you're working on that issue. Any maintainer will assign you to the issue. This is to avoid conflicts with others also working on the issue.

You can always seek help and are recommended to discuss the course of action and design decisions to tackle the issue on the issue page before making the Pull Request.

### How to Contribute?

1. Fork this repository.

![Screenshot 2022-04-11 174143](https://user-images.githubusercontent.com/71916646/162736803-627f44eb-ef50-42aa-a303-2a450374ac0c.png)


2. Clone the forked repository.

```bash
git clone <Repository URL>
```
![Screenshot 2022-04-11 173808](https://user-images.githubusercontent.com/71916646/162736495-4aa54712-89af-40e5-864a-2c5259ff921f.png)


3. Check out to a new branch and then make your changes.

```bash
git checkout -b <branch name>
```

4. Write your code.

<!-- add any more guidelines for formatting and linting if required -->

5. Before committing changes, you should verify if the issue is fixed

6. Commit your changes. Try to follow the [best practices](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53) while committing changes.

```bash
git commit -m <commit message>
# Then write the commit message and save changes
```

7. Push the changes to your fork.

```bash
git push -u origin <branch name>
```

8. Create a pull request. Be sure to read and follow our pull request guidelines!

9. Wait for code review and address any issues raised.

10. Voila! You made a contribution. Keep it up.

### Keeping your fork up-to-date

1. Add this repository as an upstream.
<!-- add name of your upstream repo -->
```bash
git remote add upstream https://github.com/mudit023/templates.git
```

2. Pull the latest changes from the main branch.

```bash
git pull upstream master
```

### Things to keep in mind before making a pull request 
- Always fetch upstream before creating a pull request.
- If you have made changes in multiple files from different templates or you want to contribute multiple templates, then create separate pull requests for each one. Don't commit all of the changes in one PR.
- If you want to change something in someone else's contribution then first create an issue about it in [issues section](https://github.com/mudit023/templates/issues) and when it get assigned to you then create a new pull request for that issue specifically.
- Follow our [template guidelines](https://github.com/mudit023/templates/blob/main/TEMPLATE_GUIDELINES.md)

---
title: Commit Messages
---

For our commit messages we follow the style provided by [Conventional Commits](https://conventionalcommits.org). Not all of those suggestions are appropriate for Privacy Guides, so the main ones we use are:

## Commit message with correction

We use `fix` for simple things like spelling mistakes or site related bugs. These things will usually have the `correction` or `bug` label on GitHub.

```text
fix: Correct spelling on XYZ page (#0000)
```

## Update to site

This example is for a removal of an item (but could also be used for an addition); you may elaborate why it was removed in the commit paragraph below. It can also be used for the addition of any new pages.

```text
update: Remove foobar (#0000)

Foobar was removed due to it having numerious security issues and being unmaintained.
```

## Update to specific item

This example could be used for an item already on the site, but includes a minor update to the description.

```text
foobar: Add mention of security audit (#0000)
```

## Feature/enhancement

For new features or enhancements to the site, e.g. things that have the `enhancements` label on GitHub, it may be appropriate to signify these with:

```text
feat: Add blah blah (#0000)

This change adds the forum topics to the main page
```

## Module update

Dependency updates follow the normal recommendations of beginning with:

```text
chore: Bump modules/mkdocs-material from 463e535 to 621a5b8
```

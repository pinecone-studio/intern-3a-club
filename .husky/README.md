# Git hooks (Husky)

Pre-push runs lint and test coverage on affected projects.

**If hooks don’t run on `git push`:** Git must use this folder for hooks. Run once:

```bash
yarn install
```

The `prepare` script runs `husky` and sets `core.hooksPath` to `.husky/_`.  
To fix an existing install without reinstalling:

```bash
npx husky
```

Then `git push` will run the pre-push hook.

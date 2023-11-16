.PHONY: pr_validate master

pr_validate:
	pnpm test-with-coverage
	pnpm build

master:
	pnpm test-with-coverage
	pnpm build

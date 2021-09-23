.PHONY: pr_validate master

pr_validate:
	yarn test-with-coverage
	yarn build

master:
	yarn test-with-coverage
	yarn build

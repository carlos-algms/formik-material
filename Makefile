pr_validate:
	yarn test-with-coverage
	npx codecov
	yarn build

master:
	yarn test-with-coverage
	npx codecov
	yarn build

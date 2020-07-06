pr_validate:
	yarn test --collect-coverage
	yarn build
	npx codecov

master:
	yarn test --collect-coverage
	yarn build
	npx codecov

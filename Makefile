.PHONY: dist test example build

dev:
	npm run dev

entry:
	@npm run build:entry

build:
	npm run build

example:
	npm run build
	npm run dev

deploy:
	npm run build
	npm publish

new:
	@node build/bin/create-component.js $(filter-out $@, $(MAKECMDGOALS))
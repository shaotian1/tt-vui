dev:
	npm run dev

build:
	npm run dev

build-entry:
	npm run build:entry

new:
	@node build/bin/create-component.js $(filter-out $@, $(MAKECMDGOALS))
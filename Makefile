# Makefile
build-ExpressFunction:
	rm -rf node_modules
	npm install
	npm run build
	npm prune --omit=dev
	cp -R dist node_modules package.json run.sh $(ARTIFACTS_DIR)

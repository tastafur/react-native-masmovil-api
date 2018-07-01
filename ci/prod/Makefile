release:
	@echo "Releasing prod..."
	git checkout staging && git pull --rebase && git checkout prod && git pull --rebase origin prod && git merge staging
	git push origin prod
	git checkout master

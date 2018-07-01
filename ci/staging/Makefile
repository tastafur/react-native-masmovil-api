release:
	@echo "Releasing staging..."
	git checkout master && git pull --all && git checkout staging && git pull --rebase origin staging && git merge master
	git push origin staging
	git checkout master

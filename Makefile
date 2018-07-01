BIN = ./node_modules/.bin

bold=\033[1m
colour=\033[32m
reset=\033[0m

ifdef RNM_BRANCH
include ci/$(RNM_BRANCH)/Makefile
endif

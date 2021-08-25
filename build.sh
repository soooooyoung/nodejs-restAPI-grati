#!/bin/bash
set -e
#VERSION=$(git rev-list HEAD --count)
VERSION=$(git show -s --format=%h)
VERSION='1.0.'${VERSION}
echo ${VERSION}
docker rmi shanabunny/grati:latest || true
docker build   -t  shanabunny/grati:${VERSION} .
docker push shanabunny/grati:${VERSION}
date
echo ${VERSION}


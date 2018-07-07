#!/usr/bin/env bash
docker-compose -f docker-compose-build.yml up --build -d && \
docker system prune --volumes && \
mkdir services/redeye-nginx/build && \
cp -r services/react/build/client services/redeye-nginx/build && \
docker build -t trzl/portfolio:redeye-react.1 -f ./services/redeye-nginx/Dockerfile.prod ./services/redeye-nginx && \
docker push trzl/portfolio:redeye-react.1 && \
docker build -t trzl/portfolio:redeye-proxy.1 -f ./services/reverseproxy/Dockerfile ./services/reverseproxy && \
docker push trzl/portfolio:redeye-proxy.1 && \
docker-compose down && \
docker system prune --volumes && \
sudo rm -rf services/redeye-nginx/build && \
sudo rm -rf services/react/build/client && \
echo "Build complete!"
FROM nginx:1.21.1-alpine

COPY dist/entityfront /usr/share/nginx/html

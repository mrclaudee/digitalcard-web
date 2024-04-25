FROM node:20.11.0-alpine AS build 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build 


FROM nginx:stable

WORKDIR /usr/share/nginx/html

COPY --from=build app/dist/digit-card /usr/share/nginx/html/digit-card

COPY digitcard.conf /etc/nginx/conf.d/default.conf











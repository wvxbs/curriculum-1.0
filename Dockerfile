FROM node:16-alpine as build
ENV NODE_ENV=production
ENV REACT_ENV=production
ARG REACT_APP_BASE_PATH
ENV REACT_APP_BASE_PATH=REACT_APP_BASE_PATH 
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install && mv node_modules ../
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]  
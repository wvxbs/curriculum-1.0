FROM node:16-alpine
ENV NODE_ENV=production
ENV REACT_ENV=production
ARG REACT_APP_BASE_PATH
ENV REACT_APP_BASE_PATH=REACT_APP_BASE_PATH 
WORKDIR /app/dev
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install && mv node_modules ../
COPY . .
EXPOSE 3000
ARG API_URL
ENV API_URL=API_URL
RUN chown -R node /app/dev
USER node
CMD ["npm", "start"]
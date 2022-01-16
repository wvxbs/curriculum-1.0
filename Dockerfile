FROM node:16-alpine
ENV NODE_ENV=production
ENV REACT_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
ARG API_URL
ENV API_URL=API_URL
RUN chown -R node /app
USER node
CMD ["npm", "start"]

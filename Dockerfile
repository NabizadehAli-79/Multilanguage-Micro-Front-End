FROM node:14alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY ..
RUN npm run build
EXPOSE 3007
CMD ["npm", "start"]

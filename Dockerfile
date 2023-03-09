FROM node:14alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY ..
RUN npm run build
EXPOSE 3006
CMD ["npm", "start"]

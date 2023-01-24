FROM node:14.9-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm i --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run test && npm run build
RUN npm install -g serve@13.0.4
EXPOSE 3000
CMD serve -s /app/build -l 80


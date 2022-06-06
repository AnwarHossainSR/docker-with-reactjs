FROM node:14.18.2
WORKDIR /test-react
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm","start"]
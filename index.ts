import egg = require('egg');


// npm run dev DO NOT read this file

egg['startCluster']({
  baseDir: __dirname,
  port: process.env.PORT || 7001, // default to 7001
});

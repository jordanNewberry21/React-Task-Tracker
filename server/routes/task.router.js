const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.get('/', (req, res) => { // get all tasks route
    const sqlText = `SELECT * FROM "tasks" ORDER BY id;`;
    pool.query(sqlText).then(result => {
      res.send(result.rows); // sending back product table
    }).catch((error) => {
      console.log('error retrieving inventory list from DB.....', error);
    });
  });


  module.exports = router;
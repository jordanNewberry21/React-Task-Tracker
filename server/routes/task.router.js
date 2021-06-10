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

router.delete('/:id', (req, res) => { // delete task by id
    const id = req.params.id;
    const sqlText = `DELETE FROM tasks WHERE id=$1;`;
    pool.query(sqlText, [id]).then(result => {
      console.log('task successfully deleted......')
    }).catch(error => {
      console.log('error deleting item from inventory........', error);
      res.sendStatus(500);
    });
});


  module.exports = router;
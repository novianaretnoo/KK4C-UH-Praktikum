//const { json } = require('express')
const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/users')
//menambah 4 route
//menampilkan semua user
router.get('/users', usercontroller.index)

router.get('/user/:id', usercontroller.show)
  
  //menyimpan data
  router.post('/user', usercontroller.store)
  
  //menyimpan perubahan data dengan id tertentu
  router.put('/user/:id', usercontroller.update)
  
  //menghapus data user dgn id tertentu
  router.delete('/user/:id', usercontroller.delete)

  module.exports = router
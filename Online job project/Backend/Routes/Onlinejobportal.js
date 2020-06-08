const express = require('express');
const router = express.Router();
const OnlinejobportailController = require('../Controllers/Onlinejobportal.js');

router.post('/post', OnlinejobportailController.insert_jobportail);
router.get('/get', OnlinejobportailController.get_jobportailList);
router.delete('/delete/:empid', OnlinejobportailController.delete_jobportail);
router.get('/get/:job_id',OnlinejobportailController.get_onejobseeker);
router.get('/get/list/:emptype',OnlinejobportailController.get_employeeType);







module.exports = router;

const Router =require('express')
const router =new Router
const allInfoController = require('../controller/allinfo.controller')

router.post('/all', allInfoController.createAllInfo)
router.get('/all', allInfoController.getAllInfoByCategoryByWebsite)
router.get('/web/t', allInfoController.testSelect)
router.put('/all', allInfoController.updateWebsite)
router.delete('/all/:id', allInfoController.deleteWebByCategory)



module.exports =router

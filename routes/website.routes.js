const Router =require('express')
const router =new Router
const websiteController = require('../controller/website.controller')

router.post('/web', websiteController.createWebsite)
router.get('/web', websiteController.getWebByCategory)
// router.get('/t', websiteController.testSelect)
router.put('/web', websiteController.updateWebsite)
router.delete('/web/:id', websiteController.deleteWebByCategory)



module.exports =router

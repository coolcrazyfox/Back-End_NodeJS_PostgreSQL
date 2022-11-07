const Router =require('express')
const router =new Router
const categoriesController = require('../controller/category.controller')

router.post('/cat', categoriesController.createCategory)
router.get('/cat', categoriesController.getCategories)
router.get('/cat/:id', categoriesController.getCategory)
router.put('/cat', categoriesController.updateCategory)
router.delete('/cat/:id', categoriesController.deleteCategory)



module.exports =router

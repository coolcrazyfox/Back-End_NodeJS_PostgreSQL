const Router =require('express')
const router =new Router
const postController = require('../controller/post.controller')

router.post('/post', postController.createPost)
router.get('/post', postController.getPostsByUser)
router.delete('/post/:id', postController.deletePostByUser)




module.exports =router

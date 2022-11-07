const db = require('../db')
class PostController{

    async createPost(req,res){
        try{
            const {title, content, userId} = req.body
            const newPost = await db.query('INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *', [title, content, userId])
            res.json(newPost.rows[0])
        }catch (e){
            res.status(500).json(e)
        }

    }
    async getPostsByUser(req,res){
        try{
            const id = req.query.id
            const posts = await db.query(`select * from post where user_id = $1`, [id])
            res.json(posts.rows)
        }catch (e){
            res.status(500).json(e)
        }
    }
    async deletePostByUser(req,res){
        try{
            const id = req.params.id
            if (!id){
                res.status(400).json({message:"id isn't specified"})
            }
            const post = await db.query(`select * from post where id = $1`, [id])
            res.json(post.rows[0])
        }catch (e){
            res.status(500).json(e)
        }
    }

}
module.exports = new PostController()

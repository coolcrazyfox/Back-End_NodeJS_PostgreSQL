const db =require('../db')

class CategoryController{
    async createCategory(req,res){
        try{
            const{name}=req.body
            const newCat =await db.query(`INSERT INTO categories (name) values ($1) RETURNING *`, [name])
            console.log(name)
            res.json(newCat.rows[0])
        }catch (e){
            res.status(500).json(e)
        }
    }
    async getCategories(req,res){
        try{
            const categories =await db.query('SELECT * FROM categories')
            res.json(categories.rows)
        }catch (e){
            res.status(500).json(e)
        }
    }
    async getCategory(req,res){
        try{
            const id = req.params.id
            const category =await db.query('SELECT * FROM categories WHERE id = $1', [id])
            res.json(category.rows[0])
        }catch (e){
            res.status(500).json(e)
        }

    }
    async updateCategory(req,res){
        try{
            const {id, name} =req.body
            if (!id){
                res.status(400).json({message:"id isn't specified"})
            }
            const category = await db.query('UPDATE categories SET name =$1 WHERE id = $2 RETURNING *',
                [name, id]
            )
            res.json(category.rows[0])
        }catch (e){
            res.status(500).json(e.message)
        }
    }
    async deleteCategory(req,res){
        try{
            const id = req.params.id
            if (!id){
                res.status(400).json({message:"id isn't specified"})
            }
            const category =await db.query('DELETE FROM categories WHERE id = $1', [id])
            res.json(category.rows[0])
        }catch (e){
            res.status(500).json(e)
        }


    }
}
module.exports = new CategoryController()

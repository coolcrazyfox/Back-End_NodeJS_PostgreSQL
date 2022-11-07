const db =require('../db')

class UserController{
    async createUser(req,res){
        try{
            const{name,surname}=req.body
            const newPerson =await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname])
            console.log(name, surname)
            res.json(newPerson.rows[0])
        }catch (e){
            res.status(500).json(e)
        }
    }
    async getUsers(req,res){
        try{
            const users =await db.query('SELECT * FROM person')
            res.json(users.rows)
        }catch (e){
            res.status(500).json(e)
        }
    }
    async getOneUser(req,res){
        try{
            const id = req.params.id
            const user =await db.query('SELECT * FROM person WHERE id = $1', [id])
            res.json(user.rows[0])
        }catch (e){
            res.status(500).json(e)
        }

    }
    async updateUser(req,res){
        try{
            const {id, name, surname} =req.body
            if (!id){
                res.status(400).json({message:"id isn't specified"})
            }
            const user = await db.query('UPDATE person SET name =$1, surname =$2 WHERE id = $3 RETURNING *',
                [name, surname, id]
            )
            res.json(user.rows[0])
        }catch (e){
            res.status(500).json(e.message)
        }
    }
    async deleteUser(req,res){
        try{
            const id = req.params.id
            if (!id){
                res.status(400).json({message:"id isn't specified"})
            }
            const user =await db.query('DELETE FROM person WHERE id = $1', [id])
            res.json(user.rows[0])
        }catch (e){
            res.status(500).json(e)
        }


    }
}
module.exports = new UserController()

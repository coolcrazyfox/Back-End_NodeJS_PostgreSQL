const db =require('../db')

class AllInfoController{
    async createAllInfo(req,res){
        try{
            const{
                data,
                state,
                bestPrice,
                categoriesId,
                websiteId
            }=req.body
            const newInfo =await db.query(`INSERT INTO all_info(data, state, best_price, categories_id, website_id) values ($1, $2, $3, $4, $5) RETURNING *`,
                [
                    data,
                    state,
                    bestPrice,
                    categoriesId,
                    websiteId
                ])

            res.json(newInfo.rows[0])
        }catch (e){
            res.status(500).json(e)
        }
    }
    async getAllInfoByCategoryByWebsite(req,res){
        try{
            const id = req.query.id
            const all_info = await db.query(`select * from all_info where categories_id = $1 , website_id=$2` , [id])
            res.json(all_info.rows)
        }catch (e){
            res.status(500).json(e)
        }
    }
    async testSelect(req, res){
        try{
            // const id = req.params.id
            // const user =await db.query('SELECT * FROM person WHERE id = $1', [id])
            // res.json(user.rows[0])
            const test= await db.query(`SELECT  website.id, categories_id, categories.name, website.brand, website.model, website.device, website.oem, website.price, website.price, website.link, website.img, website.data from website, categories where categories.id = website.categories_id order by website.oem`)
            res.json(test.rows)

        }catch (e) {
            res.status(500).json(e)
        }
    }
    async updateWebsite(req,res){
        try{
            const {id,
                brand,
                model,
                device,
                oem,
                price,
                link,
                img,
                data,
                categoriesId
            } =req.body
            if (!id){
                res.status(400).json({message:"id isn't specified"})
            }
            const web= await db.query('UPDATE all_info SET brand =$1, model =$2, device =$3, oem =$4, price =$5, link =$6 img =$7, data =$8, categories_id=$9  WHERE id = $10 RETURNING *',
                [
                    brand,
                    model,
                    device,
                    oem,
                    price,
                    link,
                    img,
                    data,
                    categoriesId,
                    id
                ]
            )
            res.json(web.rows[0])
        }catch (e){
            res.status(500).json(e.message)
        }
    }
    async deleteWebByCategory(req,res){
        try{
            const id = req.params.id
            if (!id){
                res.status(400).json({message:"id isn't specified"})
            }
            const website = await db.query(`select * from all_info where id = $1`, [id])
            res.json(website.rows[0])
        }catch (e){
            res.status(500).json(e)
        }
    }
}
module.exports = new AllInfoController()

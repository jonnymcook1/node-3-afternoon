module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body

        db.create_product([name, description, price, image_url])
        .then(() => res.sendStatus(200))
        .catch( error => {
            res.status(500).send({message: 'Sorry we suck!'})
            console.log(error)
        })
    },

    getOne: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params
 
        db.read_product(id)
        .then( product => res.sendStatus(200).send(product))
        .catch( error => {
            res.status(500).send({message: 'Sorry we suck!'})
            console.log(error)
        })
    },

    getAll: (req, res, next) => {
        const db = req.app.get('db')

        db.read_products()
        .then( products => res.sendStatus(200).send(products))
        .catch( error => {
            res.status(500).send({message: 'Sorry we suck!'})
            console.log(error)
        })
    },

    update: (req, res, next) => {
        const db = req.app.get('db')
        const {params, query } = req

        db.update_product([params.id, query.desc])
        .then(() => res.sendStatus(200))
        .catch( error => {
            res.status(500).send({message: 'Sorry we suck!'})
            console.log(error)
        })
    },

    delete: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch( error => {
            res.status(500).send({message: 'Sorry we suck!'})
            console.log(error)
        })
    }
}
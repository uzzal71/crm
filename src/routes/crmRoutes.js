const routes = (app) => {
    app.route('/contact')
        // get all contact
       .get('/', (req, res) => {
           res.send(`GET Request`);
       })

       // insert single contact
       .post('/', (req, res) => {
        res.send(`POST Request`);
       });

    app.route('/contact/:contactId')
        // get specific contact
        .get('/', (req, res) => {
            res.send(`GET Single Request`);
        })

        // updating specific contact
        .put('/', (req, res) => {
            res.send(`PUT Request`);
        })

        // Deleting specific contact
        .delete('/', (req, res) => {
            res.send(`DELETE Request`);
        });
};


export default routes;

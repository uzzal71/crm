import { 
    addNewContact, 
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request URL: ${req.originalUrl}`);
            console.log(`Request Method: ${req.method}`);
            next();
        }, getContacts)

        // Post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')
        // get a specific contact
        .get(getContactWithID)

        // updating a specific contact
        .put(updateContact)

        // deleting a specific contact
        .delete(deleteContact);
};

export default routes;
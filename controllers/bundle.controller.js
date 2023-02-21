
const site = process.env.url


//async controllers for bundle routes
const get_all_bundles = async (req, res) => {}

const get_all_user_bundles = async (req, res) => {}

const get_user_current_bundle = async (req, res) => {}

const get_bundle = async(req, res)=> {}

const create_bundle = async (req, res) => {}

const update_bundle = async (req, res) => {}//admin only 

const share_bundle = async (res,req) =>{}

const delete_bundle = async (req, res) => {}//admin only

const add_product_to_bundle = async (req, res) => {}//admin only

const remove_product_from_bundle = async (req, res) => {}//admin only

const get_bundle_products = async (req, res) => {}

const permanetly_delete_bundle = async (req, res) => {}//admin only


module.exports = {
    get_bundle, 
    get_bundle_products,
    get_all_user_bundles,
    get_user_current_bundle,
    create_bundle,  
    share_bundle, 
    delete_bundle, 
    //admin only
    add_product_to_bundle,
    get_all_bundles,
    update_bundle,
    remove_product_from_bundle,
    permanetly_delete_bundle
    
}

class SiteController {

    //[GET] /
    index(req , res){
        console.log(req.query)
        res.render('home');
    }

    //[GET] /search
    search(req,res){
        res.render('search')}
}

module.exports = new SiteController;
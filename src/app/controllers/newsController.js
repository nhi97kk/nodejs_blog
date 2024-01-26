
class NewsController {

    //[GET] /news
    index(req , res){
        console.log(req.query)
        res.render('news');
    }
}

module.exports = new NewsController;
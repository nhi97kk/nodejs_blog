const Course = require('../models/Course')
class SiteController {

    //[GET] /
    index(req, res, next) {
        Course.find({})
          .lean()
          .then((courses) => {
            res.render('home',{courses}) ;
          })
          .catch(next);
      }

    //[GET] /search
    
}

module.exports = new SiteController;
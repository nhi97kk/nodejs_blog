const Course = require('../models/Course')
class CourseController {

    //[GET] /course/:slug
    detail(req , res, next){
        Course.findOne({slug: req.params.slug})
         .lean()
         .then(course => {
            res.render('course/detail', {course});
         })   
         .catch(next);
    }

    //[GET] /courses/create
    create(req, res, next){
        res.render('course/create')
    }

    //[POST] /course/create
    save(req, res, next){
        const formData = req.body;
        formData.img = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`
        const course = new Course(formData);
        course.save()
            .then(()=> res.redirect('/'))
        
    }

    //[GET] /course/view
    view(req, res, next){
        Course.find({})
          .lean()
          .then((courses) => {
            res.render('course/view',{courses}) ;
          })
          .catch(next);
    }
}

module.exports = new CourseController;
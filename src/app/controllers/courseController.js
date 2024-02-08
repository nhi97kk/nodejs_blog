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

        Promise.all([Course.find({}).lean(),Course.countDocumentsWithDeleted({deleted:true})])
            .then(([courses, coursesDeletedCount])=>{
                
                res.render('course/view',
                {courses,coursesDeletedCount}) ; 
                
            })
            .catch(next)            
        
    }

    //[GET] /course/:id/edit
    edit(req,res,next){
        Course.findById(req.params.id)
            .lean()
            .then((course) =>{
                res.render('course/edit',{course})
            })
            .catch(next);
        
    }

     //[PUT] /course/:id/update
     update(req, res, next){
        Course.updateOne({_id: req.params.id},req.body)
            .then(()=>res.redirect('/course/view'))
            .catch(next)
     }

     //[DELETE] /course/:id/delete
     delete(req, res, next){
        Course.delete({_id: req.params.id})
            .then(()=>res.redirect('/course/view'))
            .catch(next)
     }

     //[GET] /course/trash
     trash(req, res, next){
        Course.findWithDeleted({deleted: true})
            .lean()
            .then((courses) =>{
                res.render('course/trash',{courses})
                
            })
            .catch(next);
     }

     //[DELETE] /course/:id/hardDelete
     hardDelete (req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(()=>res.redirect('/course/trash'))
            .catch(next)
     }

     //[PATCH] /course/:id/restore
     restore(req, res, next) {
        Course.restore({_id: req.params.id})
            .then(()=>res.redirect('/course/trash'))
            .catch(next)
     }
    
}

module.exports = new CourseController;
const mongoose = require('mongoose'),
      Task = mongoose.model('Task')

module.exports = {
    index: function(req,res) {
        Task.find({},function(err,tasks) {
            if (err) {
                console.log({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'tasks':tasks});
            }
        })
    },
    find_by_id: function(req,res) {
        Task.findById(req.params.id,function(err,task) {
            if (err) {
                res.json({'status':500,'errors':err});
            }
            else {
                res.json({'status':200,'tasks':task});
            }
        })
    },
    add_task: function(req,res) {
        var task = new Task({
            title:req.body.title,
            description:req.body.description,
            completed:req.body.completed
        })
        task.save(function(err,task) {
            if (err) {
                res.json({'status':500,'errors':err});
            }
            else {
                res.json({'status':200,'tasks':task});
            }
        })
    },
    update_task: function(req,res) {
        Task.update({_id:req.params.id},{$set: {title:req.body.title,description:req.body.description,completed:req.body.completed}},function(err){
            if (err) {
                res.json({'status':500,'errors':err});
            }
            else {
                res.json("Updated task in DB");
            }
        })
    },
    delete_task: function(req,res) {
        Task.deleteOne({_id:req.params.id},function(err) {
            if (err) {
                res.json({'status':500,'errors':err});
            }
            else {
                res.json("Deleted record from database");
            }
        })
    }
}
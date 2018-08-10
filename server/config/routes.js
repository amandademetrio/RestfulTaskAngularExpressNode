module.exports = function(app) {

    const task = require('../controllers/tasks.js')

    app.get('/tasks', function(req,res) {
        task.index(req,res)
    });

    app.get('/tasks/:id', function(req,res) {
        task.find_by_id(req,res);
    });

    app.post('/tasks',function(req,res) {
        task.add_task(req,res);
    });

    app.put('/tasks/:id',function(req,res) {
        task.update_task(req,res);
    });

    app.delete('/tasks/:id',function(req,res) {
        task.delete_task(req,res);
    });

}

//5b6cb7c35303d4efde2f0048
module.exports.index=function(req,res){
    res.render('index', { title: 'Event Management' });
   };
   module.exports.signin=function(req,res){
    res.render('signin', { title: 'Event Management' });
   };
   module.exports.review=function(req,res){
    res.render('review', { title: 'Event Management' });
   };
module.exports.homelist = function(req, res) {
  res.render('locations-list', {
      title: 'FITZEE',
      pageHeader: {
        title: 'DASHBOARD',
        
    },
      sidebar: "Create a tailored fitness and diet plan to optimize health and achieve fitness goals based on Body Mass Index (BMI).",
      locations: [{
          name: 'General Fitness Gym',
          address: 'Ghatkeshar ,Hyderabad',
          rating: 4,
          facilities: ['Cardiovascular', 'Strength Training', 'Functional Training','Personal Training and Support Services','Locker Rooms and Showers'],
          distance: '5km'
      }, {
          name: 'BeastMode Gym',
          address: 'Medipally , Hyderabad',
          rating: 4,
          facilities: ['Cardiovascular', 'Strength Training', 'Functional Training','Personal Training and Support Services','Locker Rooms and Showers','Outdoor Facilities'],
          distance: '20km'
      }]
});
};
module.exports.locationInfo = function(req, res){
    res.render('locations-info1', { title: 'LocationInfo' });
  };
module.exports.locationInfo1 = function(req, res){
    res.render('locations-info2', { title: 'LocationInfo1' });
  };
module.exports.addReview = function(req, res){
    res.render('location-review', { title: 'ADD REVIEW' });
  };
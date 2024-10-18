// controllers/locations.js

module.exports.homelist = function(req, res) {
  res.render('locations-list', {
      title: 'EVENT MANAGEMENT',
      pageHeader: {
          title: 'EVENT DETAILS',
      },
      eventMessage: null  // Initialize message for event creation
  });
};

module.exports.createEvent = function(req, res) {
  const { eventTitle, eventDate, eventVenue } = req.body;

  // Check if all event details are provided
  if (!eventTitle || !eventDate || !eventVenue) {
    return res.render('locations-list', {
      title: 'EVENT MANAGEMENT',
      pageHeader: {
          title: 'EVENT DETAILS',
      },
      eventMessage: "Please provide all event details."  // Error message for missing inputs
    });
  }

  // You can save event details to a database here (this is just an example response)
  const eventDetails = {
    title: eventTitle,
    date: eventDate,
    venue: eventVenue
  };

  res.render('locations-list', {
      title: 'EVENT MANAGEMENT',
      pageHeader: {
          title: 'EVENT DETAILS',
      },
      eventMessage: `Event "${eventDetails.title}" created successfully on ${eventDetails.date} at ${eventDetails.venue}.`
  });
};

module.exports.locationInfo = function(req, res) {
  res.render('layout', { title: 'LocationInfo' });
};

module.exports.locationInfo1 = function(req, res) {
  res.render('locations-info2', { title: 'LocationInfo1' });
};

module.exports.addReview = function(req, res) {
  res.render('location-review', { title: 'ADD REVIEW' });
};

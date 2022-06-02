exports.getOverview = (req, res) => {
  res.status(200).render('overview', {
    title: 'The forest hiker',
  });
};

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The hiker',
  });
};

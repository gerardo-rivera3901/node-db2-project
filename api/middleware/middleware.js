const validatePost = (req, res, next) => {
  if (!req.body) {
    res.status(400).json({ message: 'Missing Post Entries' });
  } else if (!req.body.vin || !req.body.make || !req.body.model || !req.body.mileage) {
    res.status(400).json({ message: 'Missing Required VIN, Make, Model, or Mileage'});
  } else {
    next();
  }
};

module.exports = {
  validatePost
};

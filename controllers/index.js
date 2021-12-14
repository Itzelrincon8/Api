const models = require('../database/models');

// post
const createprenda = async (req, res) => {
  try {
    const prenda = await models.prenda.create(req.body);
    return res.status(201).json({
	prenda
    });

  } catch(error) {
    return res.status(500).json({ error: error.message }); 
  }
};

//get
const getAllprendas = async (req, res) => {
  console.log('getting prenda');
  try {
    const prendas = await models.prenda.findAll ({
      include: []
    });
    return res.status(200).json({prendas});

  } catch (error) {
    return res.status(500).send(error.message);
  }
}; 

module.exports = {
  createprenda,
  getAllprendas
}

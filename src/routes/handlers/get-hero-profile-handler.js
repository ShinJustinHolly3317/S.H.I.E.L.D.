const { HeroRepository } = require('../../repositories/hero-repository');
const { shieldDb } = require('../../connections');

module.exports = {
  getHeroProfileHandler: async (req, res, next) => {
    try {
      // 1. collect request data
      const { id } = req.params;

      // 2. use case
      const heroRepo = new HeroRepository(shieldDb);
      const hero = await heroRepo.getHeroProfile(id);

      // 3. response
      if (hero) {
        res.status(200).json(hero);
      } else {
        res.status(404).json({
          message: 'I am sorry, no hero here.',
        });
      }
    } catch (error) {
      next(error);
    }
  },
};

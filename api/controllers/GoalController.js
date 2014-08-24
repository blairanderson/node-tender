/**
 * GoalController
 *
 * @description :: Server-side logic for managing goals
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

function isShortcut(id) {
  if (id === 'find' || id === 'update' || id === 'create' || id === 'destroy') {
    return true;
  }
}

module.exports = {

  // an index action
  index: function (req, res, next) {
    var where = req.param('where');
    if (_.isString(where)) {
      where = JSON.parse(where);
    }
    var options = {
      limit: req.param('limit') || undefined,
      skip: req.param('skip') || undefined,
      sort: req.param('sort') || undefined,
      where: where || undefined
    };
    Goal.find(options, function (err, goal) {
      if (err) {
        return next(err);
      }

      if (goal === undefined) {
        return res.notFound();
      }
      res.json(goal);
//      res.json({goal: goal}); Add a Root to the JSON response
    });
  },

  // a show action
  show: function (req, res, next) {
    var id = req.param('id');
    var idShortCut = isShortcut(id);
    if (idShortCut === true) {
      return next();
    }
    Goal.findOne(id, function (err, goal) {
      if (goal === undefined) return res.notFound();
      if (err) return next(err);

      res.json(goal);
    });
  },


  // a CREATE action  
  create: function (req, res, next) {
    var params = req.params.all();
    Goal.create(params, function (err, goal) {
      if (err) return next(err);
      res.status(201);
      res.json(goal);
    });
  },

  // an UPDATE action
  update: function (req, res, next) {
    var id = req.param('id');
    if (!id) return res.badRequest('No id provided.');

    var criteria = _.merge({}, req.params.all(), req.body);

    Goal.update(id, criteria, function (err, goal) {
      if (goal.length === 0) return res.notFound();
      if (err) return next(err);
      res.json(goal);
    });
  },

  // a DESTROY action
  destroy: function (req, res, next) {
    var id = req.param('id');
    if (!id) return res.badRequest('No id provided.');

    Goal.findOne(id).done(function (err, result) {
      if (err) return res.serverError(err);
      if (!result) return res.notFound();

      Goal.destroy(id, function (err) {
        if (err) return next(err);
        return res.json(result);
      });
    });
  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to GoalController)
   */
  _config: {}

};


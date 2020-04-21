const { Op } = require('sequelize');
const filterObject = require('filter-obj');
const mapObject = require('map-obj');
const { Project } = require('../models');

const ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const allowedUpdate = ['name', 'description', 'viewUrl', 'sourceUrl'];
const allowedCreate = ['eventId', 'groupId', 'regionId', ...allowedUpdate];

module.exports = new class {
  async get(id) {
    return Project.findOne({
      include: [{ all: true }],
      where: { id },
    });
  }

  async find({ having, ...where }) {
    const havingWhere = !having ? {} : mapObject(
      filterObject(having, (k, v) => v),
      (k) => [
        `$${ucFirst(k)}.id$`,
        {
          [Op.not]: null,
        },
      ]
    );

    return Project.findAll({
      include: [{ all: true }],
      where: {
        ...havingWhere,
        ...filterObject(where, (k, v) => typeof v !== 'undefined'),
      },
    });
  }

  async create(params) {
    const insertParams = filterObject(params, (k) => allowedCreate.includes(k));

    return Project.create(insertParams);
  }

  async update(id, params) {
    const project = await this.find(id);
    mapObject(filterObject(params, (k) => allowedUpdate.includes(k)), (k, v) => { project[k] = v; });
    await project.save();
    return project;
  }
}();

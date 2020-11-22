const { table } = require("../connection");

exports.up = function(knex) {

    return knex.schema.createTable('Mobs', function(table){
        table.increments('codMob').notNullable()
        table.string('nome')
        table.integer('nivel').notNullable()
        table.string('alinhamento')
        table.integer('int').notNullable()
        table.integer('des').notNullable()
        table.integer('sab').notNullable()
        table.integer('car').notNullable()
        table.integer('forc').notNullable()
        table.integer('con').notNullable()
        table.integer('ca').notNullable()
        table.integer('hpMaxima').notNullable()
        table.integer('hp').notNullable()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Mobs')
};

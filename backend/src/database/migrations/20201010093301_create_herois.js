const { table } = require("../connection");

exports.up = function(knex) {

    return knex.schema.createTable('Herois', function(table){
        table.increments('codheroi').notNullable()
        table.string('nome')
        table.integer('nivel').notNullable()
        table.string('tendencia')
        table.integer('int').notNullable()
        table.integer('des').notNullable()
        table.integer('sab').notNullable()
        table.integer('car').notNullable()
        table.integer('for').notNullable()
        table.integer('con').notNullable()
        table.integer('manaMaxima').notNullable()
        table.integer('mana').notNullable()
        table.integer('hpMaxima').notNullable()
        table.integer('hp').notNullable()
        table.integer('classe').notNullable()
        table.integer('raca').notNullable()

        table.foreign('classe').references('codClasse').inTable('Classes')
        table.foreign('raca').references('codRaca').inTable('Racas')


    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Herois')
};

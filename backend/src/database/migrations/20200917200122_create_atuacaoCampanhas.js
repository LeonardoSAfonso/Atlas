const { table } = require("../connection");

exports.up = function(knex) {

    return knex.schema.createTable('AtuacaoCampanhas', function(table){
        table.integer('codUser').notNullable()
        table.integer('codCampanha').notNullable()

        table.foreign('codUser').references('codUser').inTable('Users')
        table.foreign('codCampanha').references('codCampanha').inTable('Campanhas')

        table.primary(['codUser', 'codCampanha'])
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('AtuacaoCampanhas')
  
};

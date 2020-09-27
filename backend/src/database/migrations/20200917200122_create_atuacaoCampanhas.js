const { table } = require("../connection");

exports.up = function(knex) {

    return knex.schema.createTable('AtuacaoCampanhas', function(table){
        table.integer('idUser').notNullable()
        table.integer('idCampanha').notNullable()
        table.string('funcao')

        table.foreign('idUser').references('codUser').inTable('Users')
        table.foreign('idCampanha').references('codCampanha').inTable('Campanhas')

        table.primary(['idUser', 'idCampanha'])
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('AtuacaoCampanhas')
  
};

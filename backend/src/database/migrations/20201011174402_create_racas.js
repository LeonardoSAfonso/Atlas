
exports.up = function(knex) {
    return knex.schema.createTable('Racas', function(table){
        table.increments('codRaca').notNullable()
        table.string('nome').notNullable()
        table.string('descricao').notNullable()
        table.string('alinhamento').notNullable()
        table.string('visao').notNullable()
        table.string('tracos').notNullable()
        table.string('subRaca').notNullable()
        table.string('subRacaDesc').notNullable()
        table.string('subRacaTracos').notNullable()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Racas')

};

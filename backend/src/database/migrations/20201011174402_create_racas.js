
exports.up = function(knex) {
    return knex.schema.createTable('Racas', function(table){
        table.increments('codRaca').notNullable()
        table.string('nome').notNullable()
        table.string('descricao').notNullable()
        table.string('alinhamento').notNullable()
        table.string('vantagem').notNullable()
        table.string('visao').notNullable()
        table.string('tracos').notNullable()
        table.string('peso').notNullable()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Racas')

};

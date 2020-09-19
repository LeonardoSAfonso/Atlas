
exports.up = function(knex) {

    return knex.schema.createTable('Campanhas', function(table){
        table.increments('codCampanha').notNullable()
        table.string('nome', 30).notNullable()
        table.string('descricao').notNullable()
        table.integer('codMestre').notNullable()
        table.integer('codUser').notNullable()
        
        table.foreign('codUser').references('codUser').inTable('Users')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Campanhas')
  
};

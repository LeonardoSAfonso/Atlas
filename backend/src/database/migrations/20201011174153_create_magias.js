
exports.up = function(knex) {
    return knex.schema.createTable('Magias', function(table){
        table.increments('codMagia').notNullable()
        table.string('nome').notNullable()
        table.string('descricao').notNullable()
        table.integer('nivel').notNullable()
        table.string('escola')
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Magias')

};

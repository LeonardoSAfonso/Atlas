
exports.up = function(knex) {
    return knex.schema.createTable('RelacaoMagias', function(table){
        table.increments('codRelacao').notNullable()
        table.integer('idMagia').notNullable()
        table.integer('idClasse').notNullable()
        table.string('classeDesc').notNullable()

        table.foreign('idMagia').references('codMagia').inTable('Magias')
        table.foreign('idClasse').references('codClasse').inTable('Classes')       
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('RelacaoMagias')

};

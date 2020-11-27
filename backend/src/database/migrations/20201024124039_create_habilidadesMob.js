
exports.up = function(knex) {
    return knex.schema.createTable('HabilidadesMob', function(table){
        table.integer('idMob').notNullable()
        table.increments('codHabilidade').notNullable()
        table.string('nomeHab')
        table.string('descHab')

        table.foreign('idMob').references('codMob').inTable('Mobs')
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('habilidadesMob')

};

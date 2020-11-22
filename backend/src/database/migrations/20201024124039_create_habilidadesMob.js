
exports.up = function(knex) {
    return knex.schema.createTable('habilidadesMob', function(table){
        table.integer('idMob').notNullable()
        table.increments('idHabilidade').notNullable()

        table.foreign('idMob').references('codMob').inTable('Mobs')


        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('habilidadesMob')

};

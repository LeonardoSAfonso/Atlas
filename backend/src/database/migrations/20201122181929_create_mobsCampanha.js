
exports.up = function(knex) {
    return knex.schema.createTable('MobsCampanha', function(table){
        table.increments('codMonster').notNullable()
        table.integer('idMob').notNullable()
        table.integer('idcampanha').notNullable()

        table.foreign('idMob').references('codMob').inTable('Mobs')
        table.foreign('idCampanha').references('codCampanha').inTable('campanhas')
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('MobsCampanha')

};

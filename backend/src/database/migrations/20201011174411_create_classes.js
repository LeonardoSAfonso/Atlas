
exports.up = function(knex) {
    return knex.schema.createTable('Classes', function(table){
        table.increments('codClasse').notNullable()
        table.string('nome').notNullable()
        table.integer('hpInicial').notNullable()
        table.integer('hpLevelUp').notNullable()
        table.string('proeficienciaArmaduras')
        table.string('proeficienciaArmas')
        table.string('proeficienciaTestes')
        table.string('habilidadePrincipal')
    })
  
};

exports.down = function(knex) {
  
};

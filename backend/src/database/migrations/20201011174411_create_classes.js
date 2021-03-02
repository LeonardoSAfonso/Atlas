
exports.up = function(knex) {
    return knex.schema.createTable('Classes', function(table){
        table.increments('codClasse').notNullable()
        table.string('nome').notNullable()
        table.integer('hpInicial').notNullable()
        table.integer('hpLevelUp').notNullable()
        table.integer('ca').notNullable()
        table.string('desc')
        table.string('proeficienciaArmaduras')
        table.string('proeficienciaArmas')
        table.string('proeficienciaTestes')
        table.string('habilidadePrincipal')
        table.string('caminhoNome')
        table.string('caminhoDesc')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Classes')
};

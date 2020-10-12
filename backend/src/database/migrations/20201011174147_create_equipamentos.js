
exports.up = function(knex) {

    return knex.schema.createTable('Equipamentos', function(table){
        table.increments('codEquipamento').notNullable()
        table.string('nome').notNullable()
        table.string('categoria').notNullable()
        table.string('custo').notNullable()
        table.string('dano')
        table.string('tipoDano')
        table.string('peso').notNullable()
        table.string('propriedades')
        table.integer('ca')
      
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Equipamentos')
  
};

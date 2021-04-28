
exports.up = function(knex) {

    return knex.schema.createTable('Users', function(table){
        
        table.increments('codUser')
        table.string('senha').notNullable()
        table.string('email').notNullable().unique()
    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('Users')
  
};

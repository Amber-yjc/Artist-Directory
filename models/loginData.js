let db = require('../util/database');
// let db = require('/database');


// Add a single individual to the database
function addUser(data) {
    console.log("Adding")
    // let sql = "Insert into artists (name, about, url, id) values ('" + data.name+ "','"+ data.about+ "','" + data.url +  "','" + data.id + "')"
    let sql = "Insert into artists (name, about, url) values ('" + data.name+ "','"+ data.about+ "','" + data.url + "')"

    db.execute(sql);
}

// Gets all the individuals in the database
function getAllUsers() {
    return db.execute('Select * from artists order by name');
}

function searchUsers(str) {
    return db.execute('Select * from artists where name LIKE "%' + str + '%"');
}

// Gets a specific individual from the database
function deleteUser(id) {
    return db.execute("DELETE FROM artists where id = " + id);
}

module.exports = {
    add : addUser,
    getall : getAllUsers,
    delete: deleteUser,
    search: searchUsers
}
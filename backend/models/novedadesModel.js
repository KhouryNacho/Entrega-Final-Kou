var pool = require('./bd');

async function getNovedades() {
    var query = "select * from novedades order by project_id asc";
    var rows = await pool.query(query);
    return rows;
}

async function getNovedadById(project_id) {
    var query = "select * from novedades where project_id = ?";
    var rows = await pool.query(query, [project_id]);
    return rows[0];
}

async function insertNovedad(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj])
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function deleteNovedadesById(project_id) {
    var query = 'delete from novedades where project_id = ?';
    var rows = await pool.query(query, [project_id]);
    return rows;
}

async function modifyNovedadesById(obj, project_id) {
    try {
        var query = 'update novedades set ? where project_id=?';
        var rows = await pool.query(query, [obj, project_id]);
        return rows;
    } catch (error) {
        throw error;
    }
}



module.exports = {getNovedades, insertNovedad, deleteNovedadesById, getNovedadById, modifyNovedadesById}
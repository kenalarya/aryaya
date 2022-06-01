const fs = require('fs')

exports.addChange = function(update, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === update) {
            position = i
        }
    })
    if (position !== false) {
        fs.writeFileSync('./worker/src/changelog/change.json', JSON.stringify(_db))
    } else {
        const bulin = ({
            change : update,
                })
        _db.push(bulin)
        fs.writeFileSync('./worker/src/changelog/change.json', JSON.stringify(_db))
    }
}



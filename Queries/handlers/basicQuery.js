const datastore = require('./datastore');
async function basicQ(req, res) {
    //basic query with composite filter
    /*const query = datastore.createQuery('User')  
        .filter('id', '>', 2)
        .filter('dept', '=', 'EEE')
        .order('id', {
            descending: true
        })
        .order('gpa').limit(2);*/
    //key filter
    /*const query = datastore 
        .createQuery('User')
        .filter('__key__', '>', datastore.key(['User', '3']));*/
    //ancestor query 
    const ancestorKey = datastore.key(['User', '1']); 
    const query = datastore.createQuery('Task').hasAncestor(ancestorKey).select(['name','id']).filter('id', '>', 1)
    .order('id', {descending:true})
    .order('__key__', {ascending:true});
    //projection query
    /*const query = datastore.createQuery('User')
        .select(['name', 'gpa', 'dept'])
        .filter('id', '>', 2)
        .order('id')
        .order('gpa', {
            descending: true
        })
        .limit(3);*/
    /*const query = datastore.createQuery('User')
        .select(['name', 'id'])
        .filter('id', '>', 4)
        .filter('id', '<', 2);*/

    const tasks = await datastore.runQuery(query);
    console.log('Ancestors:');
    tasks.forEach(task => console.log(task));
    res.send("Check terminal");
};

module.exports = basicQ;
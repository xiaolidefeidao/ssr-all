const router = require('koa-router')()
const Person = require('../dbs/models/person')
const Redis = require('koa-redis')

const Store = new Redis().client

router.prefix('/users')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

router.post('/addPerson', async (ctx, next) => {
    const person = new Person({
        name: ctx.request.body.name,
        age: ctx.request.body.age
    });
    let code;
    try {
        await person.save();
        code = 0
    } catch (e) {
        code = -1
    }
    ctx.body = {
        code
    }
});

router.post('/getPerson', async (ctx) => {
    const result = await Person.findOne({name: ctx.request.body.name});
    const results = await Person.find({name: ctx.request.body.name});
    ctx.body = {
        code: 0,
        result,
        results
    }
})

router.post('/updatePerson', async (ctx) => {
    const result = await Person.where({      //使用where，当collection中只有一条数据满足时才会生效
        name: ctx.request.body.name
    }).update({
        age: ctx.request.body.age
    })
    ctx.body = {
        code: 0
    }
})

router.post('/removePerson', async (ctx) => {
    const result = await Person.where({
        name: ctx.request.body.name
    }).remove();
    ctx.body = {
        code: 0,
        result
    }
})

router.get('/fix', async (ctx) => {
    const st = await Store.hset('fix', 'name', Math.random());
    ctx.body = {
        code: 0,
        st
    }
})

module.exports = router;

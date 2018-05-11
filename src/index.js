const Koa = require('koa')
const KoaRouter = require('koa-router')

const app = new Koa()
const router = new KoaRouter()

app.use(async (ctx, next) => {
	let start = Date.now()

	await next()

	let delta = Math.ceil(Date.now() - start)

	let info = `<< ${ctx.method} ${ctx.status} ${ctx.url} - ${delta} ms`

	ctx.set('X-Response-Time', delta + 'ms')

	console.log(info)
})


router.get('/', ctx => {
	ctx.body = 'wellcome here!'
})

router.get('/test', ctx => {
	let query = ctx.query
	ctx.body = {
	  query
	}
})


app.use(router.routes())
app.use(router.allowedMethods())

app.listen('3000')

console.log('listenning on 3000')
console.log(process.env.NODE_ENV)

module.exports = app


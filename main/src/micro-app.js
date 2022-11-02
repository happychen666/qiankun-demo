const microApps = [
    {
        name: 'vue-one',
        entry: process.env.VUE_APP_VUE_ONE,
        activeRule: '/vue-one'
    },
    {
        name: 'vue-two',
        entry: process.env.VUE_APP_VUE_TWO,
        activeRule: '/vue-two'
    }
]

const apps = microApps.map(item => {
    return {
        ...item,
        container: '#subapp-viewport', // 子应用挂载的div
        props: {
            routerBase: item.activeRule, // 下发基础路由
        }
    }
})

export default apps
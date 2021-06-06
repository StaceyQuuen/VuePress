module.export = {
  base: '/VuePress/',
  dest: 'dist',
  title: 'VuePress入门',
  description: '学习使用 VuePress',
  themeCongfig: {
    sidebar: [
      {
        title: '初识 VuePress',
        collapsable: false,
        children: [
          'chapter1/01_初识VuePress'
        ]
      }
    ]
  }
}
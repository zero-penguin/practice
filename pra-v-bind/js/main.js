const app = new Vue({ 
  el: '#app', 
  data: { 
    message: 'Hello Vue!',
    items: [
      {id:1,num:"a"},
      {id:2,num:"b"},
      {id:3,num:"c"},
      {id:4,num:"d"}
    ],

    additem:"",
    seen: true
  },
  methods:{
    Additem: function () {
      this.items.push(
        {id:this.index++, num: this.additem}
      )

    }
  }
})

new Vue({
    el:'#app',
    data:{
        items:[
            {"name":"veg",price:35},
            {"name":"meet",price:355},
            {"name":"fish",price:305},
            {"name":"frute",price:35},
            {"name":"others",price:35},
        ],
        newItem:''
    },
    computed: {
        total(){
            var total = 0;
            this.items.forEach(item => {
                total+= parseFloat(item.price);
            });
            return total;
        }
    },  
    methods: {
        addItem(){
            this.items.push({
                name:this.newItem,
                price: 0
            })
        },
        removeItem(index){
            this.items.splice(index,1)
        }
    },
})
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    actions: {
        async GetApiData() {
            try {
                const response = await fetch('https://api.thecatapi.com/v1/images/search')
                const json = await response.json()
                this.fetchdata = json
                console.log('fetching is done')
                return this.fetchdata
            } catch (err){
                console.error('Ошибка ', err)
            }
        },
        check(){
            console.log('It works')
        },
        send() {
            let form = {
                fname: this.firstname,
                sname: this.secondname
            }
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({form}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json))
                .catch((error) => console.error(error))

        }
    },
    state: () => ({
        firstname:null,
        secondname:null,
        fetchdata:null,
    }),
})

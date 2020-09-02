<template>
    <div class="container mt-5">

        <h1>{{ titre }}</h1>

            <liste v-bind:myArr="myArr" :txt="txt" ></liste>

                <div class="btn btn-outline-primary mr-2 mt-5" v-on:click="toggleOnglet1">Onglet 1 </div>
                <div class="btn btn-outline-primary mt-5"  v-on:click="toggleOnglet2">Onglet 2 </div>

                <div class="card mb-5 mt-5">
                    <texte1 v-if="toggle1"></texte1>
                    <texte2  v-if="toggle2"></texte2>
                </div>

                <modale v-bind:revele="revele" :toggleModale="toggleModale"></modale>

                <div v-on:click="toggleModale" class="btn btn-success">Ouvrir la modale</div>

                <h1>Appel API pour afficher des chats</h1>
                <img v-bind:src="urlImg">
    </div>
</template>

<script>

    import Liste from './liste/Liste.vue'
    import Texte1 from './Texte1'
    import Texte2 from './Texte2'
    import Modale from './Modale'
    import axios from 'axios'

    export default {
        name: 'Contenu',
        data(){
            return {
                myArr: [
                    {titre: 'inception', date: 2010},
                    {titre: "avatar", date: 2009},
                    {titre: 'seven', date: 1995}
                ],
                txt: 'Hello world !',
                titre: 'Je suis le titre !',
                toggle1: true,
                toggle2: false,
                revele: false,
                urlImg: null
            }
        },
        methods: {
            toggleOnglet1: function(){
                this.toggle1 = true
                this.toggle2 = false
            },
            toggleOnglet2: function(){
                this.toggle1 = false
                this.toggle2 = true
            },
            toggleModale: function(){
                this.revele = !this.revele
            }
            // changementTitre: function(nvTitre){
            //     this.titre = nvTitre
            // }
        },
        components: {
            'liste': Liste,
            'texte1': Texte1,
            'texte2': Texte2,
            'modale': Modale
        },
        mounted(){
            axios
            .get('https://api.thecatapi.com/v1/images/search')
            .then(reponse => {
                this.urlImg = reponse.data[0].url
            })
        }
    }
</script>

<style scoped>

h1{
    margin-top: 100px !important;
}
</style>
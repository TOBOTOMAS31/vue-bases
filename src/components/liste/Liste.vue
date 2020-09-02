<template>
    <div>
        <ul class="liste mt-5">
            <li v-for="(film, index) in myArr" v-bind:key="index">
                <div class="card mb-2">
                    <div class="card-body">
                        Titre: {{ film.titre }}
                        <br>
                        Date: {{ film.date }}
                    </div>
                </div>
            </li>
        </ul>
        <p>{{ txt }}</p>
        <div v-on:click="deleteFilm" class="btn btn-danger mt-2">Supprimer le film</div>
        <div v-on:click="deleteTxt" class="btn btn-danger mt-2 ml-2">Supprimer le texte</div>   
        <div v-on:click="changeTitre" class="btn btn-danger mt-2 ml-2">Modifier le titre</div>   
    </div>
</template>

<script>
    import {bus} from '../../main'

    export default {
        name: 'Liste',
        data(){
            return {
                fruits: ['orange', 'fraise', 'banane']
            }
        },
        methods: {
            deleteFilm: function(){
               this.myArr.pop(); 
            },
            deleteTxt: function(){
               this.txt = ""
            },
            changeTitre: function(){
               //this.$emit('changeTitre', 'Mon nouveau titre !')
               bus.$emit('changeTitre', 'Titre changé avec le bus !')
            }
        },
        props: ['myArr', 'txt']
    }
</script>

<style scoped src="./Liste.css">

</style>
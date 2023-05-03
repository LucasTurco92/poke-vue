
<script setup lang="ts">
import { ref, computed,watch } from "vue";
import { getRandomNumber } from '../utils/getRandomNumber'
import store from '../store.js'
const count = ref(10);
const doubleCount = computed(() => count.value * 2);
const pokeNumber = computed(() => store.getters.pokeNumber)
const randomNumber = ref(getRandomNumber(1, 251));
const srcPoke = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeNumber.value}.svg`);

const randomPoke = () => {
  randomNumber.value = getRandomNumber(1, 251);
}
</script>

<template>
  
  <div class='pokedexContainer'>
            <div class="pokedexMark">
                <div class="upperPartRed">
                    <div class="upperPart">
                        <div class="bigBallWhite">
                            <div class="bigBallBlue">
                            <div class="square"/>
                            <div class="smallBallBlue"/>
                            </div>
                        </div>
                    </div>
            
                    <div class="upperPart">
                        <div class="smallBall">
                            <div class="square"/>
                        </div>
                        <div class="smallBallYellow">
                            <div class="square"/>
                        </div>
                        <div class="smallBallGreen">
                            <div class="square"/>
                        </div>
                    </div>
                </div>
                <div class="pokeMark">
                    <div class="upperPart">
                        <div class="smallBall">
                            <div class="square"/>
                        </div>
                        <div class="smallBall">
                            <div class="square"/>
                        </div>
                    </div>
                    <div class='pokeSquare'>
                        <div class='pokemon'>
                          <div class="pokemon-container">
              <img :src="srcPoke" alt="pokemon">
            </div>
                        </div>
                        </div>
                        <div class="partBelow">
                        <div class="bigBall">
                            <div class="square"/>
                        </div>
                        <div class="hamburgerDetail">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="pokedexLines">
                    <div class="redLine"/>
                    <div class="blueLine"/>
                </div>
            </div>
  
        </div>
  <button @click="randomPoke" class="rnd-button">
    {{ randomNumber }}
  </button>
  <div class="count">pokeNumber: {{ pokeNumber }}</div>
</template>
<style scoped>

.rnd-button{
  margin: 20px;
}
.count{
  margin: 10px;
}
.pokemon-container {
  height: 200px;
  width: 200px;
}

img {
  height: 200px;
  width: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.pokedexContainer {
    margin: 200px auto 0 auto;
    position: relative;
    display: flex;
    flex-wrap: nowrap;

}
@media screen and (max-width: 768px) {
  .pokedexContainer {
    margin: 20px 10px;
  }
  .details :nth-child(1) { order: 1; }
  .details :nth-child(2) { order: 3; }
  .details :nth-child(3) { order: 2; }

  .details{
    display: flex;
    flex-wrap: wrap;
    justify-content:center ;
  }
  .pokeName{
    span{
      display:  Inline-Block;
    }
  }
}
@media screen and (max-width: 1024px) {
    .pokedexContainer {
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  
}

.pokedex{
    position: relative;
    display: flex;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
    display: block;
}
.pokemon {
    img{
        z-index: 1;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}
.pokeName{
    font-size: 30px;
    font-family: cursive;
    background-color: #ffca68;
    border: 4px solid #000;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    span{
      margin-right: 10px;
    }
    margin-bottom: 10px;
}
.pokeSquare {
    display: flex;
    justify-content: center;
    justify-self: center;
    z-index: 5;
    width: 275px;
    height: 200px;
    background:#585858;
    border: 4px solid #000;
    border-radius: 10px;
    align-self: center;
    margin: 5px 0;
  }
  .detailSquare{
    padding: 20px;
    z-index: 5;
    width: 350px;
    min-height: 125px;
    background: #084035;
    border: 4px solid #000;
    border-radius: 20px;
    font-family: monospace;
    font-size: 17px;
    color:#e3e3e3;
    align-self:flex-end;
  }
  .details{
    margin:10px;
  }

  .pokeMark{
    border: 4px solid #000;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 20px;
    position: relative;
    width: 310px;
    -webkit-border-radius: 10px;
    -webkit-border-bottom-left-radius: 50px;
    -moz-border-radius: 10px;
    -moz-border-radius-bottomleft: 50px;
    border-radius: 10px;
    border-bottom-left-radius: 40px;
    background-color: #fff;
  }

  .hamburgerDetail{
    margin: 5px 0;
    align-self: flex-end;
    span{
        display: flex;
        position: relative;
        width: 40px;
        height: 4px;
        margin-bottom: 3px;
        background: #000;
        border-radius: 3px;
    }

  }

  .pokedexMark{
    background-color: #c01c1d;
    padding: 0 20px;
    width: 36 0px;
    padding: 20px 20px;
    border: 3px solid #000;
    border-radius: 10px;
  }



</style>

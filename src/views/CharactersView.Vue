
<script setup>
  import { ref, onMounted } from "vue";
  import CharacterDetail from "@/components/CharacterDetail.vue";
  import CharacterCards from "@/components/CharacterCards.vue";
  
  import characterInfo from "@/assets/data/characters.json"
  const characters = ref(characterInfo);

  
  const selectedCharacter = ref(null);
      
  function selectCharacter(character) {
    selectedCharacter.value = character;
  }

//   onMounted(() => {
//   selectedCharacter.value = characters.value[0];
// });

</script>


 <template>
  <section>
    <div class="characters">
      <CharacterCards 
      v-for="character in characters" 
      :key="character.id" 
      :character="character" 
      @click="selectCharacter(character)"/>
    </div>
    <div>
      <CharacterDetail :character="selectedCharacter" />
    </div>
  </section>
</template>


<style>
section {
  display: flex;
  padding: 1rem;
}

.characters {
  width: 30%;
}

.characters + div{
  width: 50%;
  height: 80%;
}

</style>

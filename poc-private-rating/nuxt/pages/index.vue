<template>
  <div class="main">
    <div>
      <img class="logo" :class="!dark ? 'light' : ''" src="~/assets/images/logo.png" />
    </div>
    
    <button class="btn btn-success" @click="fnxConnect" :disabled="isItFhenixNetwork">{{ (isItFhenixNetwork) ?
      'Connected to Fhenix' : 'Connect to Fhenix Network' }}</button>
    
    <div class="address"><b>Address:</b> {{ isItFhenixNetwork ? address : '---' }}</div>
    
    
    <div><b>Balance:</b> {{ isItFhenixNetwork ? balance : '---' }}</div>

    <h1 class="text-3xl font-bold">
      Meal Review
    </h1>

    <h2 class="text-3xl font-bold">
      Rate your last restaurant !
    </h2>

    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="~/assets/images/manage.jpg" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Le Bistro</div>
        <p class="text-gray-700 text-base">
          Bd de Waterloo 138
        </p>
      </div>
    </div>

    <div v-if="isItFhenixNetwork">

      <!-- Vote for a restaurant -->
      <input ref="txtNumberToEncrypt" class="form-control" type="number" placeholder="Vote for the restaurant" />
      <button class="btn btn-success" @click="encrypt(txtNumberToEncrypt)">Encrypt</button>
      
    </div>
    <div v-if="encryptedText">

      <div class="result" v-if="encryptedText != ''">
        Result: {{ encryptedText }}
      </div>
      <button class="btn btn-success" @click="execute()">Execute On Chain</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ethers } from 'ethers';
import { onMounted } from 'vue';

import contract_abi from './contract_abi.json';

const { fnxConnect, getFheClient, isItFhenixNetwork, balance, address } = useChain();
const txtNumberToEncrypt = ref(null);
const { encrypt, encryptedText } = useFHE();


const execute = async () => {
  console.log("Exectued");

  // console.log(typeof(encryptedText.value));

  let provider = new ethers.BrowserProvider(window.ethereum);

  // const signer = await provider.getSigner();

  const contract = new ethers.Contract(
    "0x325ddaD74e34690E3E477278296cb9FCcb863A3D", 
    contract_abi.abi, 
    provider
  );
  
  let res = await contract.rate(encryptedText.value);
  


  

  console.log(res);
  

  

}

onMounted(async () => {
  if (localStorage.getItem("isConnected")) {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await fnxConnect();
      } catch (err) {
        console.error(err);
      }
    }
  }
});
</script>

<style scoped>
.logo {
  height: 40px;
}

.logo.light {
  filter: invert(100%);
}


.result {
  white-space: normal; 
  word-break: break-all;
  
  padding: 10px;
  width: 400px;
  max-height: 200px;
  overflow-y: scroll;

  font-family: 'Courier New', Courier, monospace;
  font-size: 12px;
  border-radius: 10px;
  background-color: var(--custom-select); 
  color: black;
}
</style>
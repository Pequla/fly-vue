<template>
    <div class="home">
        <ul class="flex-list" v-if="flights">
            <FlightWidget v-for="f in flights" :flight="f" :key="f.id" />
        </ul>
        <p v-else-if="error">Error: {{ error }}</p>
        <p v-else>Loading... Please wait!</p>
    </div>
</template>

<script lang="ts" setup>
import FlightWidget from "@/components/FlightWidget.vue";
import { ref } from "vue";
import { FlightModel } from "@/models/flight.model";
import { FlightService } from "@/services/flight.service";

const error = ref<string>()
const flights = ref<FlightModel[]>()

FlightService.getDepartures()
    .then(rsp => flights.value = rsp.data)
    .catch(e => error.value = e.message)

</script>

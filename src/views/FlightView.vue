<template>
    <div class="center content-box" v-if="flight">
        <h3>{{ flight.destination }} ({{ flight.flightNumber }})</h3>
        <p><img :src="getDestinationImageUrl(flight.destination)" width="960"></p>
        <ul>
            <li>International code: {{ flight.flightKey }}</li>
            <li>Flight number: {{ flight.flightNumber }}</li>
            <li>Destination: {{ flight.destination }}</li>
            <li>Scheduled at: {{ flight.scheduledAt }}</li>
            <li>Plane model: {{ flight.plane }}</li>
            <li>Airport gate: {{ flight.gate }}</li>
            <li>Airport terminal: {{ flight.terminal }}</li>
        </ul>
    </div>
    <p v-else-if="error">Error: {{ error }}</p>
    <p v-else>Loading... Please wait!</p>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import { FlightModel } from "@/models/flight.model";
import { FlightService } from "@/services/flight.service";

const route = useRoute()
const id = Number(route.params.id)
const error = ref<string>()
const flight = ref<FlightModel>()

FlightService.getFlightById(id)
    .then(rsp => flight.value = rsp.data)
    .catch(e => error.value = e.message)

function getDestinationImageUrl(dest: string) {
    return 'https://img.pequla.com/destination/' + dest.toLowerCase().split(' ')[0] + '.jpg';
}
</script>

<style scoped></style>
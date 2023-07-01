<template>
    <div class="home">
        <ul class="flex-list">
            <FlightWidget v-for="f in flights" :flight="f"/>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import FlightWidget from "@/components/FlightWidget.vue";
import {ref} from "vue";
import axios from "axios";
import {FlightModel} from "@/models/flight.model";

const page = ref(0);
const max = ref(0);
const flights = ref<FlightModel[]>([]);

loadFlightData();

function loadFlightData() {
    axios.get('https://flight.pequla.com/api/flight?size=30&sort=scheduledAt,asc&page=' + page.value)
        .then(rsp => {
            if (!rsp.data.last) {
                page.value = page.value + 1
            }
            max.value = rsp.data.totalPages - 1
            flights.value = flights.value.concat(rsp.data.content)
        })
}

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
        // Ready to load new data
        loadFlightData()
    }
})
</script>

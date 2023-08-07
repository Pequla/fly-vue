<template>
    <div class="home">
        <ul class="flex-list">
            <FlightWidget v-for="f in flights" :flight="f" :key="f.id" />
        </ul>
    </div>
</template>

<script lang="ts" setup>
import FlightWidget from "@/components/FlightWidget.vue";
import { ref } from "vue";
import axios from "axios";
import { FlightModel } from "@/models/flight.model";
const max = ref(0);
const flights = ref<FlightModel[]>([]);

let busy = false;
let page = 0;

function loadFlightData() {
    if (busy) return
    busy = true

    const url = 'https://flight.pequla.com/api/flight?size=30&sort=scheduledAt,asc&page=' + page
    axios.get(url).then(rsp => {
        if (!rsp.data.last) {
            page++
        }
        max.value = rsp.data.totalPages - 1
        flights.value.push(...rsp.data.content)
        busy = false
    })
}

loadFlightData();

// const scrollList = ref<HTMLElement>()
// useInfiniteScroll(scrollList, async () => await loadFlightData(), { distance: 15 })

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
        // Ready to load new data
        loadFlightData()
    }
})
</script>

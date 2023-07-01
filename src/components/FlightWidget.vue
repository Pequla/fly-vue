<template>
    <li @click="(e)=>details(props.flight.id)" class="flight-box">
        <p><img :src="getDestinationImageUrl(props.flight.destination)" width="300"></p>
        <h3>{{ props.flight.destination }} ({{props.flight.flightNumber}})</h3>
        <p>{{props.flight.scheduledAt}}</p>
    </li>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {FlightModel} from "@/models/flight.model";

export interface Props {
    flight: FlightModel
}

const props = defineProps<Props>();
const router = useRouter();

function details(id: number) {
    router.push({
        path: '/flight/' + id
    })
}

function getDestinationImageUrl(dest: string) {
    return 'https://img.pequla.com/destination/' + dest.toLowerCase().split(' ')[0] + '.jpg';
}
</script>
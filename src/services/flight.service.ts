import { FlightModel } from "@/models/flight.model";
import axios from "axios";

const client = axios.create({
    baseURL: 'https://flight.pequla.com/api',
    headers: {
        'Accept': 'application/json',
        'X-Name': 'FlyVue/v1.0'
    },
    validateStatus: (status: number) => {
        return status === 200
    }
})

export class FlightService {
    static async getDepartures() {
        return await client.request<FlightModel[]>({
            url: '/flight/list',
            method: 'GET',
            params: {
                type: 'departure'
            }
        })
    }

    static async getFlightById(id: number) {
        return await client.get<FlightModel>(`/flight/${id}`)
    }
}
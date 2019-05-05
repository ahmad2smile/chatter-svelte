import { onMount } from "svelte"
import { readable, derived } from "svelte/store"
import axios from "axios"

const appBaseUrl = "https://chatter-api.azurewebsites.net/api/"

const api = axios.create({
	baseURL: appBaseUrl,
	timeout: 15000,
	headers: {
		"Content-Type": "application/json"
	}
})

async function getChatter() {
	const response = await api.get("/chatter")

	return response.data
}

const time = 120
const total = 100
const increment = total / time
let currentProgress = 0

export const progress = readable(0, set => {
	const interval = setInterval(() => {
		currentProgress = currentProgress >= total ? 0 : currentProgress + increment
		set(currentProgress)
	}, 1000)

	return () => clearInterval(interval)
})

let initialCall = false

export const chatter = derived(
	progress,
	async ($progress, set) => {
		if ($progress >= total) {
			const data = await getChatter()
			set(data)
		}

		if (!initialCall) {
			const data = await getChatter()
			set(data)
			initialCall = true
		}
	},
	{}
)

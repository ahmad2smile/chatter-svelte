<script>
  import { onMount } from "svelte";
  import axios from "axios";

  const appBaseUrl = "https://chatter-api.azurewebsites.net/api/";

  const api = axios.create({
    baseURL: appBaseUrl,
    timeout: 15000,
    headers: {
      "Content-Type": "application/json"
    }
  });

  let chatter = {
    title: "",
    description: "",
    source: ""
  };

  async function getChatter() {
    const response = await api.get("/chatter");

    chatter = response.data;
  }

  onMount(getChatter);
</script>


<div>This is Dashboard</div>
<div>{chatter.title}</div>
<div>{chatter.description}</div>
<div>{chatter.source}</div>
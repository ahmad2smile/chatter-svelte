<script>
  import Chatter from "./Chatter/Chatter";

  import { progress } from "../../appstate/store";
</script>

<style>
			.container {
			  height: 100vh;
			  display: flex;
			  flex-direction: column;
			  justify-content: center;
			  align-items: center;
			  position: relative;
			}
			.header {
			  font-style: italic;
			  font-size: 36;
			  font-weight: 600;
			}
			.progress {
			  position: absolute;
			  bottom: 0;
			  width: 100%;
			  height: 4px;
			}
</style>

<div class="container">
  <h2 class="header">Random Chatter</h2>
  <Chatter />
  <div
    class="progress"
    style={`background: linear-gradient(to right,  #fdbb6d ${$progress}%, transparent 1%)`}
  />
</div>
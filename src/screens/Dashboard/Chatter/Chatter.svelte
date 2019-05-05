<script>
    import Card from "../../../components/Card/Card";

    import { chatter } from "../../../appstate/store";
</script>

<style>
	.title {
	  font-size: 28;
	  font-weight: 500;
	}
	.description {
	  margin: 15px 0;
	}
	.source {
	  position: absolute;
	  bottom: 25px;
	  right: 25px;
	}
</style>

<Card>
    <div class="title">
        <a href={$chatter.source} target="_blank">
                {$chatter.title}
        </a>
    </div>
    <div class="description">{$chatter.description}</div>
    {#if $chatter.source}
        <div class="source">
            <a href={$chatter.source} target="_blank">
                Source
            </a>
        </div>
    {/if}
</Card>
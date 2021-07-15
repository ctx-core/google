<script>
import { onMount } from 'svelte'
import { init_dataLayer } from '../init_dataLayer.js'
onMount(init_dataLayer)
</script>

<slot></slot>

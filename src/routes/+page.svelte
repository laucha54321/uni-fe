<script>
  import userToken from "$lib/user";
  import { onMount } from "svelte";

  onMount(() => {
    userToken.subscribe((data) => {
      console.log(data);
    });
  });
</script>

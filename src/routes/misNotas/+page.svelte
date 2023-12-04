<script>
  import { onMount } from "svelte";

  const id = "7afcaa45-c8cb-4c79-97fa-d33b06ffc7d8";

  let notas = [];
  let loading = true;

  onMount(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/nota/persona/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        notas = result;
        loading = false;
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  });
</script>

<h1>Mis Notas:</h1>
<div class="scroll-x">
  {#if loading}
    <p aria-busy="true">Cargando Notas</p>
  {:else}
    <table>
      <thead>
        <tr>
          <th scope="col"><strong>Curso</strong></th>
          <th scope="col"><strong>Nota</strong></th>
          <th scope="col"><strong>Descripcion</strong></th>
        </tr>
      </thead>
      <tbody>
        {#each notas as nota}
          <tr>
            <td>{nota.curso.nombre}</td>
            <td>{nota.calificacion}</td>
            <td>{nota.descripcion}</td>
          </tr>
        {/each}
        <tr></tr>
      </tbody>
    </table>
  {/if}
</div>

<style>
  .scroll-x {
    overflow-x: auto;
  }
</style>

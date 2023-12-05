<script>
  import { onMount } from "svelte";

  const id = "d758a41d-0ffa-4b6a-a6f2-714697001042";

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
      })
      .catch((error) => console.log("error", error));
  });
</script>

<h1>Mis Notas:</h1>

{#if loading}
  <p aria-busy="true">Cargando Notas</p>
{:else if notas.length === 0}
  <a role="button" class="contrast">No Pudimos Encontrar Ninguna Nota</a>
{:else}
  <figure>
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
  </figure>
{/if}

<style>
</style>

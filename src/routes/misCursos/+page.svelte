<script>
  import { onMount } from "svelte";
  import Modal from "../../components/modal.svelte";
  let cursos = [];
  let loading = true;

  let id = "d758a41d-0ffa-4b6a-a6f2-714697001042";

  onMount(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/curso_persona/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        cursos = result;
        loading = false;
      })
      .catch((error) => console.log("error", error));
  });
</script>

<h1>Mis Cursos:</h1>

{#if loading}
  <p aria-busy="true">Cargando Cursos</p>
{:else}
  {#each cursos as curso}
    <details>
      <summary role="button" class="secondary">{curso.nombre}</summary>
      <p>{curso.descripcion}</p>
      <div style="padding: 20px;">
        <button>Ver Notas</button>
      </div>
    </details>
  {/each}
{/if}

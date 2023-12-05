<script>
  import { onMount } from "svelte";
  import InscripcionCurso from "../../components/inscripcionCurso.svelte";

  let cursos = [];
  let loading = true;

  onMount(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/curso", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        cursos = result;
        loading = false;
      })
      .catch((error) => console.log("error", error));
  });
</script>

<h1>Inscripcion</h1>

{#if loading}
  <p aria-busy="true">Cargando Cursos</p>
{:else}
  {#each cursos as curso}
    <InscripcionCurso idCurso={curso.id}>
      <span slot="nombre">{curso.nombre}</span>
      <span slot="descripcion">{curso.descripcion}</span>
    </InscripcionCurso>
  {/each}
{/if}

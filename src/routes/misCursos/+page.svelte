<script>
  import { onMount } from "svelte";
  import userToken from "$lib/user";

  let cursos = [];
  let loading = true;

  onMount(() => {
    let token = "";

    userToken.subscribe((data) => {
      console.log(data);
      if (data.accessToken !== "") {
        token = data.accessToken;
      }
    });

    var myHeaders = new Headers();
    myHeaders.append("authorization", "Bearer " + token);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:3000/curso_persona/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
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

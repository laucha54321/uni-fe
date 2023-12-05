<script>
  let loading = false;
  let aux = "d758a41d-0ffa-4b6a-a6f2-714697001042";
  let inscripto = false;
  export let idCurso;

  async function inscribirse(idCurso) {
    loading = true;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id_curso: idCurso,
      id_persona: aux,
      categoria: "alu",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log(idCurso);

    fetch("http://localhost:3000/curso_persona/", requestOptions)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          loading = false;
          inscripto = true;
        }
      })
      .catch((error) => {
        console.log("error", error);
        loading = false;
      });
  }
</script>

<details>
  <summary role="button" class="secondary"><slot name="nombre" /></summary>
  <p><slot name="descripcion" /></p>
  <div style="padding: 20px;">
    {#if inscripto}
      <ins>Tu inscripcion se a procesado correctamente.</ins>
    {:else}
      <button
        on:click={inscribirse(idCurso)}
        class="outline"
        aria-busy={loading}>Inscribirse Ahora</button
      >
    {/if}
  </div>
</details>

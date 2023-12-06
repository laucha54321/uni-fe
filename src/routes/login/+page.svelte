<script>
  import accessToken from "$lib/user";
  let loading = false;

  let loggedIn = false;

  let username = "";
  let password = "";

  let error = "";

  $: login = () => {
    if (username !== "" && password !== "") {
      loading = true;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        dni: username,
        contrasena: password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3000/auth", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          loading = false;
          if (result.code > 299) {
            error = result.error;
          } else if (result.accessToken !== null) {
            accessToken.set(result);
            loggedIn = true;
          }
        })
        .catch((err) => {
          loading = false;
          error = err;
        });
    } else {
      error = "Formato de ususario o Contraseña Incorrectos";
    }
  };
</script>

{#if loggedIn}
  <div>
    <h1>Bienvenidos!</h1>
  </div>
{:else}
  <div>
    <hgroup>
      <h1>Ingresar</h1>
      <h2>Sistema de Autogestion</h2>
    </hgroup>
    <form on:submit|preventDefault={login}>
      <input
        type="text"
        name="login"
        placeholder="DNI"
        aria-label="Login"
        autocomplete="nickname"
        required=""
        bind:value={username}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        aria-label="Password"
        autocomplete="current-password"
        required=""
        bind:value={password}
      />
      <fieldset>
        <label for="remember">
          <input type="checkbox" role="switch" id="remember" name="remember" />
          Guardar Credenciales
        </label>
      </fieldset>
      <button type="submit" class="contrast" aria-busy={loading}
        >Ingresar</button
      >
    </form>
    {#if error !== ""}
      <ins class="error">Error: {error}</ins>
    {/if}
  </div>
{/if}

<style>
  .error {
    color: red;
  }
</style>

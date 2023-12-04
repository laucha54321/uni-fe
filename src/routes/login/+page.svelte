<div>
  <hgroup>
    <h1>Ingresar</h1>
    <h2>Campus Virtual UTN</h2>
  </hgroup>
  <form>
    <input
      type="text"
      name="login"
      placeholder="DNI"
      aria-label="Login"
      autocomplete="nickname"
      required=""
    />
    <input
      type="password"
      name="password"
      placeholder="Contraseña"
      aria-label="Password"
      autocomplete="current-password"
      required=""
    />
    <fieldset>
      <label for="remember">
        <input type="checkbox" role="switch" id="remember" name="remember" />
        Guardar Credenciales
      </label>
    </fieldset>
    <button type="submit" class="contrast" onclick="event.preventDefault()"
      >Ingresar</button
    >
  </form>
</div>

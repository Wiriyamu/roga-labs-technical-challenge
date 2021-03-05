<template>
  <nav class="navbar navbar-dark bg-danger d-flex justify-content-between">
    <span class="navbar-brand mb-0 ml-2 h1">RogaLags</span>

    <div class="d-flex justify-content-between align-itens-center mr-5">
      <div class="mr-2">
        <h6 class="text-white">Jonas Joe</h6>
        <p class="text-white">Último Login: 10/02/2021</p>
      </div>

      <div class="btn-group">
        <button
          type="button"
          class="btn btn-outline-light dropdown-toggle"
          data-toggle="dropdown"
          data-display="static"
          aria-haspopup="true"
          aria-expanded="false"
        ></button>
        <div class="dropdown-menu dropdown-menu-lg-right">
          <button class="dropdown-item" type="button">Action</button>
          <button class="dropdown-item" type="button">Another action</button>
          <button class="dropdown-item" type="button">
            Something else here
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'The Header'
}
</script>

<style lang="scss" scoped>
img {
  width: 80px;
}
</style>

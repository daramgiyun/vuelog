<template>
  <nav class="navbar bg-light fixed-top">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#"
      >Vuelog</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="offcanvasNavbar"
        class="offcanvas offcanvas-end"
        tabindex="-1"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5
            id="offcanvasNavbarLabel"
            class="offcanvas-title"
          >
            Offcanvas
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >Home</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
              >Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                  >Action</a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                  >Another action</a>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                  >Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          <form
            class="d-flex mt-3"
            role="search"
          >
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            >
            <button
              class="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
  <div>
    <hr>
    <hr>
    <hr>
    <!-- 이 부분 navbar에 가려서 아래 글씨 안나와서 해놓은건데
어떻게 해결해야되는지 찾아보기 -->
  </div>

  <router-link to="/">홈페이지</router-link>
  <div></div>
  <router-link to="/list">리스트페이지</router-link>

  <router-view :블로그글="블로그글"></router-view>

  <!-- <List :블로그글="블로그글"/> -->
  <!-- git test -->
  
</template>

<script>
import blog from '@/assets/blog.js';
// import List from '@/components/List.vue';

export default {
  name: 'App',
  data(){
    return {
      블로그글 : blog,
    }
  },
  components: {
    // List : List,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

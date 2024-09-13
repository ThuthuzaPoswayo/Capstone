<template>
    <div class="container">
      <!-- Users Section -->
      <div>
        <h2 id="userHeading" class="display-4 mt-4 mb-4">Edit Users</h2>
        <AddUser :user="user" />
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
                <th>Phone</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.user_id">
                <td>{{ user.user_id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.password }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.phone }}</td>
  
                <td class="d-flex gap-2">
                  <updateUser :user="user" />
                  <button class="btn btn-danger" @click="deleteUser(user.user_id)">Delete User</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <!-- Services Section -->
      <div class="mt-5">
        <h2 id="productHeading" class="display-4 mb-4">Edit Services</h2>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addItem">Add Services</button>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Service ID</th>
                <th>Provider</th>
                <th>Service Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Duration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="service in services" :key="service.service_id">
                <td>{{ service.service_id }}</td>
                <td>{{ service.provider_id }}</td>
                <td>{{ service.service_name }}</td>
                <td>{{ service.description }}</td>
                <td>R {{ service.price }}</td>
                <td>{{ service.duration || 'N/A' }}</td>
                <td class="d-flex gap-2">
                  <updateProduct :service="service" />
                  <button class="btn btn-danger" @click="deleteService(service.service_id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
export default {
  methods: {
    getUsers() {
      this.$store.dispatch('getUsers');
    },
    getServices() {
      this.$store.dispatch('getServices');
    },
    deleteUser(userID) {
      this.$store.dispatch("deleteUser", { id: userID });
    },
    deleteService(serviceID) {
      this.$store.dispatch("deleteService", { id: serviceID });
    },
  },
  computed: {
    users() {
      return this.$store.state.user;
    },
    services() {
      return this.$store.state.services;
    },
  },
  mounted() {
    this.getUsers();
    this.getServices();
  }
};
</script>

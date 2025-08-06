<template>
  <section
    class="border-panel-sub-text/20 col-span-12 border dark:bg-panel-dark rounded-xl p-6 shadow-md mt-6"
  >
    <h2 class="text-lg text-panel-text-light font-semibold mb-6">Existing Projects</h2>
    <div v-if="loadingProjects" class="text-panel-text-light text-center">Loading projects...</div>
    <div v-else class="overflow-x-auto">
      <table class="min-w-full bg-panel-dark text-panel-text-light rounded-md overflow-hidden">
        <thead>
          <tr class="bg-panel-sub-dark">
            <th class="py-3 px-4 text-left text-sm font-medium">ID</th>
            <th class="py-3 px-4 text-left text-sm font-medium">Title</th>
            <th class="py-3 px-4 text-left text-sm font-medium">Project Code</th>
            <th class="py-3 px-4 text-left text-sm font-medium">Client Username</th>
            <th class="py-3 px-4 text-left text-sm font-medium">Manager</th>
            <th class="py-3 px-4 text-left text-sm font-medium">Status</th>
            <th class="py-3 px-4 text-left text-sm font-medium">Start Date</th>
            <th class="py-3 px-4 text-left text-sm font-medium">Due Date</th>
            <th class="py-3 px-4 text-left text-sm font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="projects.length === 0 && !loadingProjects">
            <td colspan="9" class="text-panel-text-light text-center py-4">---No Projects Created Yet---</td>
          </tr>
          <tr v-if="projects.length === 0 && loadingProjects">
             <td colspan="9" class="text-panel-text-light text-center py-4">Loading projects...</td>
          </tr>
          <tr v-for="(project,index) in projects" :key="project._id" class="border-b border-brdr hover:bg-panel-sub-dark/50">
            <td class="py-2 px-4 text-sm">{{ ++index }}</td>
            <td class="py-2 px-4 text-sm">{{ project.projectTitle }}</td>
            <td class="py-2 px-4 text-sm">{{ project.projectCode }}</td>
            <td class="py-2 px-4 text-sm">{{ project.clientUsername }}</td>
            <td class="py-2 px-4 text-sm">{{ project.projectManager }}</td>
            <td class="py-2 px-4 text-sm capitalize">{{ project.status }}</td>
            <td class="py-2 px-4 text-sm">{{ new Date(project.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) }}</td>
            <td class="py-2 px-4 text-sm">{{ new Date(project.dueDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) }}</td>
            <td class="py-2 px-4 text-sm">
              <button @click="editProject(project._id)" class="edit">Edit</button>
              <button @click="deleteProject(project._id)" class="delete">Delete</button>
              <button @click="viewProject(project._id)" class="view">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})
import { useNuxtApp } from 'nuxt/app';
import { onMounted, ref, computed } from 'vue';  
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/store/auth';


const router = useRouter(); 
const { $swal } = useNuxtApp()
const loadingProjects = ref(false);
const projects = ref([]);
const authStore = useAuthStore()
const user = computed(() => authStore.user) 

const editProject = (projectId) => {
  router.push(`/admin/project/edit/${projectId}`);
};
const viewProject = (projectId) => {
  router.push(`/admin/project/view/${projectId}`);
};

const projectFetch = async () => {
  try {
    loadingProjects.value = true;
    // Ensure user.value._id is available before fetching
    if (!user.value?._id) {
      console.warn('User ID not available to fetch projects.');
      return;
    }
    const response = await fetch(`/api/query/Project/${user.value._id}`);
    const data = await response.json();
    projects.value = data.data || []; // Assuming data.data holds the array of projects
    console.log('Project value :', data.data);
  } catch (error) {
    console.error('Error fetching projects: ', error.message); // Use console.error for errors
  } finally {
    loadingProjects.value = false;
  }
};

onMounted(async () => {
  if (!authStore.user) {
    await authStore.fetchUser(); 
  }
  projectFetch(); 
});
projectFetch(); 

const deleteProject = async (id) => {
  try {
    const swalWithBootstrapButtons = $swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: true
    })

    const swalResult = await swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text:  "You won't be able to revert this!",
      icon:  'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText:  'No, cancel!',
      reverseButtons: true
    })

    if (swalResult.isConfirmed) {
      const res          = await fetch(`/api/query/Project/${id}`, { method: 'DELETE' })
      const responseJson = await res.json()

      if (res.ok) {
        projects.value = projects.value.filter(p => p._id !== id)
        $swal.fire('Deleted!', 'Your record has been deleted.', 'success')
      } else {
        $swal.fire('Error', responseJson.error || responseJson.message || 'Unknown error', 'error')
      }
    } else if (swalResult.dismiss === $swal.DismissReason.cancel) {
      $swal.fire('Cancelled', 'Your imaginary record is safe :)', 'info')
    }
  } catch (err) {
    console.error(err)
    $swal.fire('Error', err.message, 'error')
  }
}

</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #3d3d3d;
}
td{
  padding: 5px !important;
}

th {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
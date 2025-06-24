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
              <button @click="editProject(project._id)" class="text-blue-400 bg-blue-400/20 px-2 py-1 rounded border border-brdr/20 hover:text-blue-600 mr-2 cursor-pointer">Edit</button>
              <button @click="deleteProject(project._id)" class="text-red-400 bg-red-400/20 px-2 py-1 rounded border border-brdr/20 hover:text-red-600 cursor-pointer">Delete</button>
              <button @click="viewProject(project._id)" class="text-green-400 bg-green-400/20 px-2 py-1 rounded border border-brdr/20 hover:text-green-600 ml-2 cursor-pointer">View</button>
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
import { onMounted, ref, computed } from 'vue';  
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/store/auth';

const router = useRouter(); 

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

onMounted(async () => { // Make onMounted async to await fetchUser
  if (!authStore.user) {
    await authStore.fetchUser(); // Await fetchUser to ensure user is loaded
  }
  projectFetch(); // Now call projectFetch
});

const deleteProject = async (id) => {
  try {
    const confirmed = confirm('Are you sure you want to delete this project?');
    if (!confirmed) return;

    const res = await fetch(`/api/query/Project/${id}`, {
      method: "DELETE",
    });
    const result = await res.json(); // Await the JSON parsing
    if (res.ok) {
      projects.value = projects.value.filter(p => p._id !== id);
      alert("Project deleted successfully");
    } else {
      console.error('Error deleting project:', result);
      alert(`Error deleting project: ${result.error || result.message || 'Unknown error'}`);
    }
  } catch (error) {
    console.error('Error during delete operation:', error);
    alert(`Error deleting project: ${error.message}`);
  }
};
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
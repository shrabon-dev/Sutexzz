<template>
  <div class="border border-panel-text-light/20 p-3 rounded-xl">
    <div class=" project-owner-card bg-panel-sub-dark text-panel-text-light p-5 rounded-xl">
      <!-- <h2 class="project-title">{{ projectTitle }}</h2> -->
      <!-- <p v-if="projectDescription" class="project-description">{{ projectDescription }}</p> -->
  
      <div class="participants mb-3 flex justify-between gap-3">
        <div class="participant client">
          <img :src="clientImage" :alt="clientName + ' Avatar'" class="avatar">
          <div class="details">
            <span class="font-jost text-sm font-medium text-[#28A745] uppercase">Client:</span>
            <span class="font-jost text-base font-normal text-panel-text-light uppercase">{{ clientName }}</span>
          </div>
        </div>
        <div class="participant freelancer">
          <img :src="freelancerImage" :alt="freelancerName + ' Avatar'" class="avatar">
          <div class="details">
            <span class="font-jost text-sm font-medium text-[#28A745] uppercase">Freelancer:</span>
            <span class="font-jost text-base font-normal text-panel-text-light uppercase">{{ freelancerName }}</span>
          </div>
        </div>
      </div>
  
      <div class="border-t border-dashed border-panel-text-light mt-5 pt-5">
        <div class="info-item">
          <span class="font-jost text-sm font-normal text-panel-text-light uppercase">Start Date:</span>
          <span class="font-jost text-sm font-normal text-panel-text-light uppercase">{{ formattedStartDate }}</span>
        </div>
        <div v-if="industry" class="info-item">
          <span class="font-jost text-sm font-normal text-panel-text-light uppercase">Industry:</span>
          <span class="font-jost text-sm font-normal text-panel-text-light uppercase">{{ industry }}</span>
        </div>
        <div v-if="industry" class="info-item">
          <span class="font-jost text-sm font-normal text-panel-text-light uppercase">Currency:</span>
          <span class="font-jost text-sm font-normal text-panel-text-light uppercase">{{ currency }}</span>
        </div>
        <div v-if="industry" class="info-item">
          <span class="font-jost text-sm font-normal text-panel-text-light uppercase">Billing Type:</span>
          <span class="font-jost text-sm font-normal text-panel-text-light uppercase">{{ billingType }}</span>
        </div>
        <div v-if="industry" class="info-item">
          <span class="font-jost text-sm font-normal text-panel-text-light uppercase">Hourly Rate:</span>
          <span class="font-jost text-sm font-normal text-panel-text-light uppercase"> {{ currency }} {{ hourlyRate }}</span>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  projectTitle: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    default: '',
  },
  clientName: {
    type: String,
    required: true,
  },
  clientImage: {
    type: String,
    default: 'https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740', // Default client avatar
  },
  freelancerName: {
    type: String,
    required: true,
  },
  freelancerImage: {
    type: String,
    default: 'https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740', // Default freelancer avatar
  },
  startDate: {
    type: [String, Date],
    default: null,
  },
  industry: {
    type: String,
    default: '',
  },
  teamMembers: {
    type: Array,
    default: () => [], // Default to an empty array
  },
  billingType: {
    type: Array,
    default: 'Fixed', // Default to an empty array
  },
  currency: {
    type: String,
    default: 'BDT',
  },
  hourlyRate: {
    type: String,
    default: '500.00',
  },
});

// Computed property for formatting the start date
const formattedStartDate = computed(() => {
  if (!props.startDate) return 'N/A';
  const date = new Date(props.startDate);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
});
</script>

<style scoped>
 

.project-title {
  font-size: 1.8em;
  color: #2c3e50;
  margin-bottom: 10px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

.project-description {
  font-size: 0.95em;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

 

.participant {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
}

.avatar {
  width: 60px; /* Slightly smaller as per placeholder update */
  height: 60px; /* Slightly smaller as per placeholder update */
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #007bff; /* Client border color */
  margin-bottom: 10px;
}

.participant.freelancer .avatar {
  border-color: #28a745; /* Freelancer border color */
}

.details {
  display: flex;
  flex-direction: column;
}

.role {
  font-size: 0.8em;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.name {
  font-weight: 600;
  color: #333;
  font-size: 1.1em;
}


.info-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align items to start for multi-line skills */
  margin-bottom: 10px;
  font-size: 0.9em;
}

.label {
  font-weight: 500;
  color: #555;
  flex-shrink: 0; /* Prevent label from shrinking */
  padding-right: 10px; /* Space between label and value */
}

.value {
  color: #333;
  font-weight: 400;
  text-align: right; /* Align values to the right */
  flex-grow: 1; /* Allow value to take remaining space */
}

.info-item.skills {
  flex-direction: column; /* Stack label and skills list */
  align-items: flex-start;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 5px; /* Space between label and first skill */
  justify-content: flex-end; /* Align tags to the right */
  width: 100%; /* Ensure skills list takes full width */
}

.skill-tag {
  background-color: #e9f0f9;
  color: #007bff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  white-space: nowrap; /* Prevent tags from breaking */
}

.contact-link {
  color: #007bff;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}
</style>
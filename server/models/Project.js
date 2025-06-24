import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    freelancerId: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true
    },
    projectTitle: {
      type: String,
      required: true,
      trim: true
    },
    projectCode: {
      type: String,
      unique: true,
      default: function () {
        return 'PRJ-' + Math.floor(1000 + Math.random() * 9000)
      }
    },
    description: {
      type: String,
      required: true
    },
    industry: {
      type: String,
      enum: ['IT', 'Legal', 'Construction', 'Marketing', 'Other'],
      default: 'Other'
    },
    status: {
      type: String,
      enum: ['draft', 'active', 'completed', 'onhold'],
      default: 'draft'
    },
    clientUsername: {
    //   type: mongoose.Schema.Types.ObjectId,
      type: String,
    //   ref: 'User', // or 'Client' if you have a separate model
      required: true
    },
    assignedTeam: [
      {
        type: String,
        // ref: 'User'
         required: true
      }
    ],
    projectManager: {
     type: String,
     required: true
    //   ref: 'User'
    },
    startDate: {
      type: Date,
      required: true
    },
    dueDate: {
      type: Date,
      required: true
    },
    budgetAmount: {
      type: Number
    },
    currency: {
      type: String,
      default: 'USD'
    },
    billingType: {
      type: String,
      enum: ['fixed', 'hourly', 'milestone'],
      default: 'fixed'
    },
    hourlyRate: {
      type: Number
    },
    contractId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contract'
    },
    files: [
      {
        url: String,
        name: String
      }
    ],
    internalNotes: {
      type: String
    },
    timezone: {
      type: String,
      default: 'UTC'
    },
    language: {
      type: String,
      enum: ['en', 'bn'],
      default: 'en'
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.models.Project || mongoose.model('Project', projectSchema)

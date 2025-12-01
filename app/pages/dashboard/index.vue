<script setup>
import { toast } from 'vue-sonner'
import { Button } from '@/components/ui/button'

const handleSubmit = () => {
  // Your logic here
  toast.success('Dashboard data saved successfully!')
}

const handleDelete = () => {
  toast.error('Failed to delete item')
}

const showInfo = () => {
  toast('This is a regular message')
}
</script>

<template>
  <div class="space-x-4 mt-7">
    <Button @click="handleSubmit">Save</Button>
    <Button @click="handleDelete">Delete</Button>
    <Button @click="showInfo">Show Info</Button>
  </div>
</template>
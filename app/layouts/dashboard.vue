<template>
  <div class="flex">
    <Sidebar />
    <main class="flex-1">
      <DashboardHeader />
      <slot />
    </main>
  </div>
</template>
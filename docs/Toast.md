# Available Toast Types

toast('Default message')
toast.success('Success message')
toast.error('Error message')
toast.warning('Warning message')
toast.info('Info message')
toast.loading('Loading...')

## With custom duration
toast.success('Saved!', { duration: 5000 })

# With action button
toast('Event created', {
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo clicked')
  }
})
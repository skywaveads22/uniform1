import { redirect } from 'next/navigation'

export default function WorkwearRedirect() {
  // Redirect to the industrial category
  redirect('/blog/category/industrial')
  
  // This won't be rendered, but is needed for the component
  return null
} 
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/vehicles/limited')({
  beforeLoad: () => { throw redirect({ to: '/cars/limited', replace: true, statusCode: 301 }) },
})

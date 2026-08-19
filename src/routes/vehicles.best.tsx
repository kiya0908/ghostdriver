import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/vehicles/best')({
  beforeLoad: () => { throw redirect({ to: '/cars/best', replace: true, statusCode: 301 }) },
})

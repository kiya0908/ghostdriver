import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/vehicles/free')({
  beforeLoad: () => { throw redirect({ to: '/cars/free', replace: true, statusCode: 301 }) },
})

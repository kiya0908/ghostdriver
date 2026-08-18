import { createFileRoute } from '@tanstack/react-router'
import { VehicleListPage } from '@/components/VehicleListPage'
import { createSeo } from '@/lib/seo'
import { getVehicles } from '@/server/content'

export const Route = createFileRoute('/vehicles/free')({
  loader: () => getVehicles({ data: 'free' }),
  head: () => createSeo('Free Ghost Driver Cars', 'Community-tracked free and starter vehicles in Ghost Driver, with transparent verification notes.', '/vehicles/free'),
  component: () => <VehicleListPage title="Free Cars" description="Starter and zero-cost vehicles tracked for new drivers. Availability can change during Pre-Alpha." items={Route.useLoaderData()} active="free" />,
})

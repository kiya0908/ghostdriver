import { createFileRoute } from '@tanstack/react-router'
import { VehicleListPage } from '@/components/VehicleListPage'
import { createSeo } from '@/lib/seo'
import { getVehicles } from '@/server/content'

export const Route = createFileRoute('/vehicles/limited')({
  loader: () => getVehicles({ data: 'limited' }),
  head: () => createSeo('Limited Ghost Driver Cars', 'Track limited and time-sensitive Ghost Driver vehicles with last-checked dates and community data warnings.', '/vehicles/limited'),
  component: () => <VehicleListPage title="Limited Cars" description="Time-sensitive garage records. Always confirm current availability in game before planning a purchase." items={Route.useLoaderData()} active="limited" />,
})

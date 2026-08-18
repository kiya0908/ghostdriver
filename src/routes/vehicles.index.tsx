import { createFileRoute } from '@tanstack/react-router'
import { VehicleListPage } from '@/components/VehicleListPage'
import { createSeo } from '@/lib/seo'
import { getVehicles } from '@/server/content'

export const Route = createFileRoute('/vehicles/')({
  loader: () => getVehicles({ data: 'all' }),
  head: () => createSeo('Ghost Driver Vehicles', 'Browse the community-maintained Ghost Driver vehicle database with availability, verification dates and clearly labelled unknown data.', '/vehicles'),
  component: () => <VehicleListPage title="Vehicle Database" description="A transparent garage board for Ghost Driver. Unknown performance values stay unknown until an in-game test confirms them." items={Route.useLoaderData()} active="all" />,
})

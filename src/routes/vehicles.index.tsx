import { createFileRoute } from '@tanstack/react-router'
import { VehicleListPage } from '@/components/VehicleListPage'
import { createSeo } from '@/lib/seo'
import { getVehicles } from '@/server/content'

export const Route = createFileRoute('/vehicles/')({
  loader: () => getVehicles({ data: 'all' }),
  head: () => createSeo('Ghost Driver Cars Database – All Cars, Prices & Stats', 'Browse the Ghost Driver cars database with verified car names, prices where known, free and limited cars, performance data, confidence labels and last-checked dates.', '/vehicles'),
  component: () => <VehicleListPage title="Ghost Driver Cars Database" description="Browse tracked Ghost Driver cars, prices, availability and performance data. Unknown values stay clearly marked until current in-game evidence confirms them." items={Route.useLoaderData()} active="all" />,
})

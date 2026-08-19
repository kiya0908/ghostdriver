import { createFileRoute } from '@tanstack/react-router'
import { VehicleListPage } from '@/components/VehicleListPage'
import { createSeo } from '@/lib/seo'
import { getVehicles } from '@/server/content'

export const Route = createFileRoute('/vehicles/limited')({
  loader: () => getVehicles({ data: 'limited' }),
  head: () => createSeo('Ghost Driver Limited Cars – Showroom & Limited Vehicle List', 'Track Ghost Driver limited cars, recent showroom vehicles and last-checked availability evidence without treating old rotations as current stock.', '/vehicles/limited'),
  component: () => <VehicleListPage title="Ghost Driver Limited Cars" description="Track confirmed limited Ghost Driver cars and recent showroom records. Limited status and exact current availability are treated separately because rotations can change between updates." items={Route.useLoaderData()} active="limited" />,
})

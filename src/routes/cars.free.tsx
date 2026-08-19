import { createFileRoute } from '@tanstack/react-router'
import { VehicleListPage } from '@/components/VehicleListPage'
import { createSeo } from '@/lib/seo'
import { getVehicles } from '@/server/content'

export const Route = createFileRoute('/cars/free')({
  loader: () => getVehicles({ data: 'free' }),
  head: () => createSeo('Ghost Driver Free Cars – Starter & Free Vehicle Guide', 'Find Ghost Driver free cars, starter vehicles and reported group rewards, with unlock-method verification notes and current data-quality labels.', '/cars/free'),
  component: () => <VehicleListPage title="Ghost Driver Free Cars" description="Find starter, free and reported group-reward cars in Ghost Driver. Unlock methods are separated from vehicle identity so uncertain requirements are never presented as confirmed facts." items={Route.useLoaderData()} active="free" />,
})

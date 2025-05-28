import { Metadata, ResolvingMetadata } from 'next'
import BidPageClient from './BidPageClient'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Bid on Contest ${id}`,
  }
}

export default async function Page({ params }: Props) {
  const { id } = await params
  return <BidPageClient params={{ id }} />;
} 
import Layout from '@/components/Layout';
import Head from 'next/head';
import HeroBanner from '@/components/HeroBanner';
import ServicesGrid from '@/components/ServicesGrid';
// import PortfolioGallery from '@/components/PortfolioGallery';
// import TestimonialCarousel from '@/components/TestimonialCarousel';
import CTABanner from '@/components/CTABanner';

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home - Design Dile</title>
        <meta name="description" content="Welcome to Design Dile, where we create stunning and professional book designs." />
      </Head>

      <HeroBanner />

      <ServicesGrid />

      <PortfolioGallery isPreview={true} />

      <TestimonialCarousel />

      <CTABanner />

    </Layout>
  );
}

import Banner from "@/components/Banner";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/Faq";
import FeaturedImages from "@/components/Featured";
import HowItWorks from "@/components/HowItWorks";
import NewsletterSubscription from "@/components/NewsletterSubsription";
import OfferSection from "@/components/OfferSection";
import PopularTags from "@/components/PopularTags";
import ScrollAnimation from "@/components/ScrollAnimation";
import SocialShareButtons from "@/components/SocialShareButtons";
import UserReviews from "@/components/UserReviews";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <OfferSection />
      <NewsletterSubscription />
      <BlogSection />
      
      <UserReviews />
      <FAQSection />
    </div>
  );
};

export default HomePage;

// import Head from "next/head";
// import dynamic from "next/dynamic";
// import Banner from "@/components/Banner";
// import FeaturedImages from "@/components/Featured";
// import PopularTags from "@/components/PopularTags";
// import ScrollAnimation from "@/components/ScrollAnimation";

// // Dynamically imported components
// const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
// const OfferSection = dynamic(() => import("@/components/OfferSection"));
// const NewsletterSubscription = dynamic(
//   () => import("@/components/NewsletterSubscription")
// );
// const BlogSection = dynamic(() => import("@/components/BlogSection"));
// const FAQSection = dynamic(() => import("@/components/Faq"));
// const UserReviews = dynamic(() => import("@/components/UserReviews"));
// const SocialShareButtons = dynamic(
//   () => import("@/components/SocialShareButtons")
// );

// const HomePage = () => {
//   return (
//     <>
//       <Head>
//         <title>TastyTales - Recipe Sharing Platform</title>
//         <meta
//           name="description"
//           content="Discover, share, and enjoy the best recipes from around the world. TastyTales is your go-to platform for all things cooking."
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Head>
//       <div>
//         <ScrollAnimation>
//           <Banner />
//           <FeaturedImages />
//           <HowItWorks />
//           <OfferSection />
//           <NewsletterSubscription />
//           <BlogSection />
//           <FAQSection />
//           <UserReviews />
//           <SocialShareButtons />
//           <PopularTags />
//         </ScrollAnimation>
//       </div>
//     </>
//   );
// };

// export default HomePage;

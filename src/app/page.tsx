'use client'
import Footer from '@/components/common/Footer';
import { Navbar } from '@/components/common/Navbar';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex flex-col justify-center items-center">
        <Head>
          <title>eKYC Verification System</title>
          <meta name="description" content="Blockchain-based eKYC Verification System" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <>
    <Navbar />
        <main className="text-center text-white">
          <h1 className="text-5xl font-semibold mb-4 animate__animated animate__fadeIn animate__delay-1s">Welcome to the eKYC Verification System</h1>
          <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">Verify identities securely using blockchain technology.</p>

          <div className="animate__animated animate__fadeIn animate__delay-3s">
            <button onClick={() => router.push('/login')} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full text-xl transition duration-300 transform hover:scale-105 ease-in-out">Get Started</button>
          </div>
        </main>

        </>
      </div>
      
      <Footer />
    </>
  );
};

export default Home;

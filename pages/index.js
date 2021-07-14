import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='text-green-800'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <Link href='/blog'>
        <button className=' bg-green-400 px-6 rounded-lg w-[150px] text-center py-2 text-white font-medium text-lg hover:bg-green-600'>
          Blog
        </button>
      </Link>
    </div>
  );
}

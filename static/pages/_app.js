import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
    <div className="bg-gray-900 text-white">
      <Component {...pageProps} />
    </div>
);

export default MyApp;
